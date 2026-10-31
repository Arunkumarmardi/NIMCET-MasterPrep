import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import { requireAuth, AuthRequest } from './src/middleware/auth.ts';
import {
  getOrCreateUser,
  updateUserProgress,
  recordUserMockAttempt,
  getUserMockAttempts,
} from './src/db/users.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

function getGeminiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error(
      'GEMINI_API_KEY is not configured. Please check the Settings > Secrets panel.'
    );
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

interface GroundingCitation {
  uri: string;
  title: string;
}

function extractGroundingCitations(response: unknown): GroundingCitation[] {
  const citations: GroundingCitation[] = [];
  const seen = new Set<string>();
  const r = response as {
    candidates?: Array<{
      groundingMetadata?: {
        groundingChunks?: Array<{
          web?: { uri?: string; title?: string };
        }>;
      };
    }>;
  };
  const chunks = r?.candidates?.[0]?.groundingMetadata?.groundingChunks;
  if (Array.isArray(chunks)) {
    for (const chunk of chunks) {
      const uri = chunk?.web?.uri;
      const title = chunk?.web?.title || uri || 'Web Source';
      if (uri && !seen.has(uri)) {
        seen.add(uri);
        citations.push({ uri, title });
      }
    }
  }
  return citations;
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '4mb' }));

  // ==================== 0. AUTHENTICATED USER PROFILE & PROGRESS ROUTES ====================
  app.get('/api/user/profile', requireAuth, async (req: AuthRequest, res) => {
    try {
      const uid = req.user!.uid;
      const email = req.user!.email || `${uid}@nimcet.user`;
      const name = req.user!.name;

      const userRecord = await getOrCreateUser(uid, email, name);
      const mockHistory = await getUserMockAttempts(uid);

      let completedChapters: string[] = ['math-vectors', 'math-probability'];
      try {
        completedChapters = JSON.parse(userRecord.completedChaptersJson);
      } catch {
        // Keep default if malformed
      }

      res.json({
        user: {
          uid: userRecord.uid,
          email: userRecord.email,
          displayName: userRecord.displayName,
          daysLeft: userRecord.daysLeft,
          hoursPerDay: userRecord.hoursPerDay,
          xp: userRecord.xp,
          streakDays: userRecord.streakDays,
          completedChapters,
        },
        mockHistory,
      });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : 'Failed to load user profile';
      console.error('Failed to fetch user profile:', error);
      res.status(500).json({ error: msg });
    }
  });

  app.post('/api/user/progress', requireAuth, async (req: AuthRequest, res) => {
    try {
      const uid = req.user!.uid;
      const email = req.user!.email || `${uid}@nimcet.user`;
      await getOrCreateUser(uid, email, req.user!.name);

      const updated = await updateUserProgress(uid, req.body);
      res.json({ user: updated });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : 'Failed to update study progress';
      console.error('Failed to update user progress:', error);
      res.status(500).json({ error: msg });
    }
  });

  app.post('/api/user/mock-attempt', requireAuth, async (req: AuthRequest, res) => {
    try {
      const uid = req.user!.uid;
      const email = req.user!.email || `${uid}@nimcet.user`;
      const saved = await recordUserMockAttempt(uid, email, req.body);
      res.json({ attempt: saved });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : 'Failed to save mock test attempt';
      console.error('Failed to record mock attempt:', error);
      res.status(500).json({ error: msg });
    }
  });

  // ==================== 1. MULTI-TURN GEMINI CHAT ENDPOINT ====================
  app.post('/api/gemini/chat', async (req, res) => {
    try {
      const {
        messages = [],
        model = 'gemini-3.8-flash',
        roleMode = 'simple_tutor',
        useGoogleSearch = true,
        lang = 'en',
        activeChapterTitle = 'NIMCET 2026 Full Syllabus',
      } = req.body as {
        messages: Array<{ role: 'user' | 'model'; text: string }>;
        model?: 'gemini-4-argon' | 'gemini-3.8-flash' | 'gemini-3.1-flash-lite';
        roleMode?: string;
        useGoogleSearch?: boolean;
        lang?: 'en' | 'hi';
        activeChapterTitle?: string;
      };

      if (!Array.isArray(messages) || messages.length === 0) {
        res.status(400).json({ error: 'Messages array is required.' });
        return;
      }

      const ai = getGeminiClient();

      const roleInstructions: Record<string, string> = {
        simple_tutor:
          'You are the NIMCET 2026 Master Tutor. Explain even the hardest Mathematics, Logical Reasoning, Computer Awareness, and English concepts in crystal-clear, ultra-simple step-by-step language (with an everyday analogy first, then the exact formula, then a 10-second NIMCET exam shortcut).',
        shortcut_coach:
          'You are the NIMCET 10-Second Speed & Option-Elimination Coach. Focus on how to solve the student’s question in under 15 seconds using value substitution, dimensional/symmetry checks, modular arithmetic, or standard NIMCET identities.',
        exam_2026_simulator:
          'You are the NIMCET 2026 Exam Question Designer. Generate realistic NIMCET 2026 questions with 4 options (A, B, C, D), marking scheme (+12/-3 for Math, +6/-1.5 for Reasoning/CS, +4/-1 for English), full solution, and a 10-second shortcut.',
      };

      const systemInstruction = `${
        roleInstructions[roleMode] || roleInstructions.simple_tutor
      }\nCurrent Chapter Context: ${activeChapterTitle}.\nLanguage Preference: ${
        lang === 'hi'
          ? 'Respond in clear Bilingual Hindi + English (हिन्दी और सरल अंग्रेजी) so Hindi-medium and bilingual students understand every step effortlessly.'
          : 'Respond in clear, structured English (include brief Hindi terms in parentheses when helpful for intuition).'
      }\nKeep responses well-structured with numbered steps, clear equations, and an Exam Hall Shortcut at the end.`;

      // Convert conversation history into Content[] format for multi-turn context
      const contents = messages.map((m) => ({
        role: m.role === 'model' ? 'model' : 'user',
        parts: [{ text: m.text }],
      }));

      // If Google Search grounding is enabled, gemini-3.8-flash is used per guidelines
      const requestedModel = useGoogleSearch ? 'gemini-3.8-flash' : model;

      const buildConfig = (targetModel: string, enableSearch: boolean) => {
        const cfg: Record<string, unknown> = {
          systemInstruction,
        };
        if (enableSearch) {
          cfg.tools = [{ googleSearch: {} }];
        }
        if (targetModel === 'gemini-3.8-flash') {
          cfg.thinkingConfig = { thinkingLevel: ThinkingLevel.LOW };
        }
        return cfg;
      };

      let response;
      let usedModel = requestedModel;

      try {
        response = await ai.models.generateContent({
          model: requestedModel,
          contents,
          config: buildConfig(requestedModel, Boolean(useGoogleSearch)),
        });
      } catch (err: unknown) {
        // If user selected gemini-4-argon without a paid key, seamlessly fall back to gemini-3.8-flash
        if (requestedModel === 'gemini-4-argon') {
          usedModel = 'gemini-3.8-flash';
          response = await ai.models.generateContent({
            model: 'gemini-3.8-flash',
            contents,
            config: buildConfig('gemini-3.8-flash', Boolean(useGoogleSearch)),
          });
        } else {
          throw err;
        }
      }

      const replyText = response.text ?? '';
      const citations = extractGroundingCitations(response);

      res.json({
        text: replyText,
        modelUsed: usedModel,
        citations,
      });
    } catch (error: unknown) {
      const msg =
        error instanceof Error ? error.message : 'Failed to generate AI tutor response.';
      res.status(500).json({ error: msg });
    }
  });

  // ==================== 2. GOOGLE SEARCH GROUNDED NIMCET 2026 LIVE HUB ====================
  app.post('/api/gemini/search', async (req, res) => {
    try {
      const { query, lang = 'en' } = req.body as {
        query?: string;
        lang?: 'en' | 'hi';
      };

      if (!query || !query.trim()) {
        res.status(400).json({ error: 'Search query is required.' });
        return;
      }

      const ai = getGeminiClient();
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: query,
        config: {
          systemInstruction: `You are an online research assistant for NIMCET (NIT MCA Common Entrance Test) 2026 aspirants. Use Google Search to provide accurate, up-to-date facts, official NIT seat matrices, cutoff ranks, exam pattern details, or deep chapter study notes. Respond in ${
            lang === 'hi' ? 'Hindi and English (Bilingual)' : 'clear structured English'
          }.`,
          tools: [{ googleSearch: {} }],
        },
      });

      const text = response.text ?? '';
      const citations = extractGroundingCitations(response);

      res.json({
        text,
        citations,
        modelUsed: 'gemini-3.8-flash (Google Search Grounded)',
      });
    } catch (error: unknown) {
      const msg =
        error instanceof Error ? error.message : 'Failed to fetch live search results.';
      res.status(500).json({ error: msg });
    }
  });

  // ==================== VITE MIDDLEWARE (DEV) OR STATIC (PROD) ====================
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`NIMCET MasterPrep server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
