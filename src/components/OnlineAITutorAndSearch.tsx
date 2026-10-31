import React, { useEffect, useRef, useState } from 'react';
import {
  Send,
  Globe,
  Sparkles,
  ExternalLink,
  RotateCcw,
  BookOpen,
  Search,
} from 'lucide-react';
import { Chapter, Language } from '../types/nimcet';

interface Citation {
  uri: string;
  title: string;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  modelUsed?: string;
  citations?: Citation[];
}

interface OnlineAITutorAndSearchProps {
  lang: Language;
  chapters: Chapter[];
  activeChapter: Chapter;
  prefilledPrompt?: string;
  onClearPrefilledPrompt?: () => void;
}

export const OnlineAITutorAndSearch: React.FC<OnlineAITutorAndSearchProps> = ({
  lang,
  chapters,
  activeChapter,
  prefilledPrompt,
  onClearPrefilledPrompt,
}) => {
  // Multi-turn Chat State
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      role: 'model',
      text:
        lang === 'en'
          ? `Welcome to the **Online NIMCET 2026 Gemini AI Tutor & Live Google Search Hub**!\n\nAsk me to:\n1. Explain any chapter concept in ultra-simple everyday words (English & हिन्दी).\n2. Solve any Mathematics, Reasoning, Computer Awareness, or English doubt step by step with a 10-second NIMCET shortcut.\n3. Fetch live NIMCET 2026 exam updates, NIT Trichy/Surathkal/Warangal cutoffs, or fresh practice questions using real-time Google Search grounding.`
          : `**ऑनलाइन NIMCET 2026 Gemini AI ट्यूटर और लाइव Google सर्च हब** में आपका स्वागत है!\n\nआप मुझसे पूछ सकते हैं:\n1. किसी भी अध्याय की अवधारणा को एकदम सरल और संक्षिप्त भाषा (हिन्दी एवं अंग्रेजी) में समझना।\n2. गणित, रीजनिंग, कंप्यूटर या अंग्रेजी के किसी भी प्रश्न का चरण-दर-चरण हल और 10-सेकंड शॉर्टकट।\n3. Google सर्च की सहायता से NIMCET 2026 की नवीनतम जानकारी, NIT कटऑफ और नए अभ्यास प्रश्न।`,
      modelUsed: 'gemini-3.8-flash',
    },
  ]);
  const [inputPrompt, setInputPrompt] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<
    'gemini-3.8-flash' | 'gemini-3.1-flash-lite' | 'gemini-4-argon'
  >('gemini-3.8-flash');
  const [roleMode, setRoleMode] = useState<
    'simple_tutor' | 'shortcut_coach' | 'exam_2026_simulator'
  >('simple_tutor');
  const [useGoogleSearch, setUseGoogleSearch] = useState<boolean>(true);
  const [chatLoading, setChatLoading] = useState<boolean>(false);
  const [chatError, setChatError] = useState<string | null>(null);

  // Live Google Search Grounding Explorer State
  const [searchQuery, setSearchQuery] = useState<string>(
    'NIMCET 2026 exam pattern, participating NIT MCA seats, and NIT Trichy safe score'
  );
  const [searchLoading, setSearchLoading] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<{
    text: string;
    citations: Citation[];
    modelUsed: string;
  } | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);

  const threadEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (prefilledPrompt && prefilledPrompt.trim()) {
      setInputPrompt(prefilledPrompt);
      if (onClearPrefilledPrompt) onClearPrefilledPrompt();
    }
  }, [prefilledPrompt, onClearPrefilledPrompt]);

  useEffect(() => {
    threadEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, chatLoading]);

  const handleSendChatMessage = async (customText?: string) => {
    const textToSend = (customText ?? inputPrompt).trim();
    if (!textToSend || chatLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: textToSend,
    };

    const nextHistory = [...messages, userMsg];
    setMessages(nextHistory);
    if (!customText) setInputPrompt('');
    setChatLoading(true);
    setChatError(null);

    try {
      const response = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextHistory.map((m) => ({ role: m.role, text: m.text })),
          model: selectedModel,
          roleMode,
          useGoogleSearch,
          lang,
          activeChapterTitle: `${activeChapter.number}. ${activeChapter.title.en}`,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to reach Gemini AI Tutor.');
      }

      const modelMsg: ChatMessage = {
        id: `model-${Date.now()}`,
        role: 'model',
        text: data.text || 'No response received.',
        modelUsed: data.modelUsed,
        citations: data.citations || [],
      };
      setMessages((prev) => [...prev, modelMsg]);
    } catch (err: unknown) {
      setChatError(
        err instanceof Error ? err.message : 'Unable to connect to Gemini AI Tutor.'
      );
    } finally {
      setChatLoading(false);
    }
  };

  const handleRunLiveGoogleSearch = async (overrideQuery?: string) => {
    const q = (overrideQuery ?? searchQuery).trim();
    if (!q || searchLoading) return;
    if (overrideQuery) setSearchQuery(overrideQuery);

    setSearchLoading(true);
    setSearchError(null);

    try {
      const response = await fetch('/api/gemini/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q, lang }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch Google Search results.');
      }
      setSearchResult({
        text: data.text || '',
        citations: data.citations || [],
        modelUsed: data.modelUsed || 'gemini-3.8-flash',
      });
    } catch (err: unknown) {
      setSearchError(
        err instanceof Error ? err.message : 'Live Google Search request failed.'
      );
    } finally {
      setSearchLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Split: Multi-Turn Gemini Chatbot (7 cols) + Live Google Search NIMCET 2026 Hub (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* ==================== LEFT 7 COLS: MULTI-TURN GEMINI CHATBOT ==================== */}
        <section className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 flex flex-col space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <div className="text-xs font-bold text-sky-700 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {lang === 'en'
                    ? 'Multi-Turn Online Gemini Tutor & Doubt Solver'
                    : 'मल्टी-टर्न ऑनलाइन Gemini AI ट्यूटर और डाउट सॉल्वर'}
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 mt-0.5">
                {lang === 'en'
                  ? 'Ask Anything Across All 30 NIMCET Chapters'
                  : 'सभी 30 अध्यायों का कोई भी प्रश्न या कांसेप्ट सरल भाषा में पूछें'}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setMessages(messages.slice(0, 1))}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Reset Thread' : 'चैट रीसेट करें'}</span>
            </button>
          </div>

          {/* Model, Role Persona & Google Search Grounding Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                {lang === 'en' ? 'Tutor Role Persona' : 'ट्यूटर की भूमिका'}
              </label>
              <select
                value={roleMode}
                onChange={(e) =>
                  setRoleMode(
                    e.target.value as
                      | 'simple_tutor'
                      | 'shortcut_coach'
                      | 'exam_2026_simulator'
                  )
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-900"
              >
                <option value="simple_tutor">
                  {lang === 'en'
                    ? 'Ultra-Simple Concept Explainer'
                    : 'अति-सरल कांसेप्ट शिक्षक'}
                </option>
                <option value="shortcut_coach">
                  {lang === 'en'
                    ? '10-Second NIMCET Shortcut Coach'
                    : '10-सेकंड शॉर्टकट कोच'}
                </option>
                <option value="exam_2026_simulator">
                  {lang === 'en'
                    ? '2026 Exam Question Generator'
                    : '2026 परीक्षा प्रश्न निर्माता'}
                </option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                {lang === 'en' ? 'Gemini Model Engine' : 'Gemini मॉडल चुनें'}
              </label>
              <select
                value={selectedModel}
                onChange={(e) =>
                  setSelectedModel(
                    e.target.value as
                      | 'gemini-3.8-flash'
                      | 'gemini-3.1-flash-lite'
                      | 'gemini-4-argon'
                  )
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-mono font-semibold text-slate-900"
              >
                <option value="gemini-3.8-flash">
                  gemini-3.8-flash (General + Search)
                </option>
                <option value="gemini-3.1-flash-lite">
                  gemini-3.1-flash-lite (Ultra Fast)
                </option>
                <option value="gemini-4-argon">
                  gemini-4-argon (Deep STEM Reasoning)
                </option>
              </select>
            </div>

            <div className="flex flex-col justify-end">
              <label className="flex items-center gap-2 cursor-pointer rounded-lg border border-slate-300 bg-white px-3 py-1.5 font-semibold text-slate-800">
                <input
                  type="checkbox"
                  checked={useGoogleSearch}
                  onChange={(e) => setUseGoogleSearch(e.target.checked)}
                  className="accent-sky-600"
                />
                <span>
                  {lang === 'en' ? 'Google Search Grounding' : 'Google सर्च ग्राउंडिंग'}
                </span>
              </label>
            </div>
          </div>

          {/* Quick Prompt Starters */}
          <div className="flex flex-wrap gap-1.5">
            {[
              {
                en: `Explain "${activeChapter.title.en}" in super simple layman terms with 3 shortcuts`,
                hi: `"${activeChapter.title.hi}" को एकदम सरल भाषा और 3 शॉर्टकट के साथ समझाएं`,
              },
              {
                en: 'Give me 3 NIMCET 2026 level questions on Vectors & Probability with 10s tricks',
                hi: 'सदिश और प्रायिकता पर 3 NIMCET 2026 स्तर के प्रश्न और 10-सेकंड ट्रिक दें',
              },
              {
                en: 'How to score 650+ out of 1000 in NIMCET 2026 for NIT Trichy MCA?',
                hi: 'NIT Trichy MCA के लिए NIMCET 2026 में 1000 में से 650+ अंक कैसे लाएं?',
              },
            ].map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendChatMessage(chip[lang])}
                className="px-2.5 py-1 rounded-lg bg-sky-50 border border-sky-200 text-sky-900 text-xs font-medium hover:bg-sky-100 cursor-pointer text-left"
              >
                {chip[lang]}
              </button>
            ))}
          </div>

          {/* Scrollable Multi-Turn Conversation Thread */}
          <div className="h-[420px] overflow-y-auto rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.role === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[90%] rounded-2xl px-4 py-3 text-xs leading-relaxed whitespace-pre-line ${
                    msg.role === 'user'
                      ? 'bg-slate-900 text-white'
                      : 'bg-white border border-slate-200 text-slate-800'
                  }`}
                >
                  {msg.role === 'model' && (
                    <div className="flex items-center justify-between gap-2 pb-1.5 mb-1.5 border-b border-slate-100 text-[11px] font-mono text-sky-700 font-semibold">
                      <span>NIMCET AI Tutor</span>
                      {msg.modelUsed && <span>{msg.modelUsed}</span>}
                    </div>
                  )}
                  <div>{msg.text}</div>

                  {/* Render Google Search Grounding Citations if present */}
                  {msg.citations && msg.citations.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-slate-200 space-y-1">
                      <div className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                        <Globe className="w-3 h-3 text-sky-600" />
                        <span>
                          {lang === 'en'
                            ? 'Verified Google Search Sources:'
                            : 'सत्यापित Google सर्च स्रोत:'}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {msg.citations.map((cit, cIdx) => (
                          <a
                            key={cIdx}
                            href={cit.uri}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-sky-50 border border-sky-200 text-[11px] text-sky-800 hover:bg-sky-100"
                          >
                            <span className="truncate max-w-[200px]">{cit.title}</span>
                            <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {chatLoading && (
              <div className="rounded-xl bg-white border border-slate-200 px-4 py-3 text-xs text-slate-600 font-medium inline-block">
                {lang === 'en'
                  ? 'Gemini Tutor is thinking & verifying steps...'
                  : 'Gemini ट्यूटर सरल चरणों में उत्तर तैयार कर रहा है...'}
              </div>
            )}

            {chatError && (
              <div className="rounded-xl bg-rose-50 border border-rose-200 px-4 py-3 text-xs text-rose-900">
                <strong>{lang === 'en' ? 'Notice: ' : 'सूचना: '}</strong>
                {chatError}
              </div>
            )}

            <div ref={threadEndRef} />
          </div>

          {/* Chat Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendChatMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              placeholder={
                lang === 'en'
                  ? 'Type your math/reasoning/CS doubt or ask for a simple explanation...'
                  : 'अपना कोई भी प्रश्न या डाउट यहाँ लिखें...'
              }
              className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs text-slate-900 focus:border-sky-600 focus:outline-none"
            />
            <button
              type="submit"
              disabled={chatLoading || !inputPrompt.trim()}
              className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-800 disabled:opacity-50 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Send' : 'पूछें'}</span>
            </button>
          </form>
        </section>

        {/* ==================== RIGHT 5 COLS: LIVE GOOGLE SEARCH NIMCET 2026 EXPLORER ==================== */}
        <section className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
          <div className="border-b border-slate-200 pb-4">
            <div className="text-xs font-bold text-emerald-700 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              <span>
                {lang === 'en'
                  ? 'Live Google Search Grounding (gemini-3.8-flash)'
                  : 'लाइव Google सर्च ग्राउंडिंग (gemini-3.8-flash)'}
              </span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 mt-0.5">
              {lang === 'en'
                ? 'Online NIMCET 2026 Research & Web Study Fetcher'
                : 'ऑनलाइन NIMCET 2026 सूचना एवं अध्ययन सामग्री खोजक'}
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              {lang === 'en'
                ? 'Fetch live web data on NIMCET 2026 exam dates, official NIT seat matrix, previous year cutoffs, or internet study material with verified source links.'
                : 'Google सर्च द्वारा नवीनतम NIMCET 2026 परीक्षा तिथि, NIT सीटें, कटऑफ और इंटरनेट अध्ययन सामग्री स्रोतों सहित प्राप्त करें।'}
            </p>
          </div>

          {/* Preset Live Search Topics */}
          <div className="space-y-1.5">
            <div className="text-xs font-bold text-slate-700">
              {lang === 'en' ? 'One-Click Live Web Searches:' : 'त्वरित लाइव वेब खोज:'}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                'NIMCET 2026 official syllabus, marking scheme & participating NITs',
                'NIT Trichy, NIT Surathkal, NIT Warangal & MNNIT MCA opening and closing ranks',
                `Best online shortcut notes and PYQ trends for ${activeChapter.title.en}`,
              ].map((presetQ, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleRunLiveGoogleSearch(presetQ)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-medium hover:bg-slate-200 cursor-pointer text-left"
                >
                  {presetQ}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRunLiveGoogleSearch();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search live web for NIMCET 2026..."
              className="flex-1 rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2 text-xs text-slate-900 focus:border-sky-600 focus:bg-white focus:outline-none"
            />
            <button
              type="submit"
              disabled={searchLoading}
              className="inline-flex items-center gap-1.5 rounded-xl bg-sky-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-sky-700 disabled:opacity-50 cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
              <span>{searchLoading ? 'Searching...' : 'Search Web'}</span>
            </button>
          </form>

          {/* Search Output Box */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 min-h-[260px] max-h-[420px] overflow-y-auto space-y-3 text-xs">
            {searchLoading && (
              <div className="text-slate-600 font-medium">
                {lang === 'en'
                  ? 'Querying live Google Search via gemini-3.8-flash...'
                  : 'gemini-3.8-flash के माध्यम से लाइव Google सर्च परिणाम प्राप्त किए जा रहे हैं...'}
              </div>
            )}

            {searchError && (
              <div className="text-rose-800 bg-rose-50 border border-rose-200 rounded-lg p-3">
                {searchError}
              </div>
            )}

            {!searchLoading && !searchResult && !searchError && (
              <div className="text-slate-500 leading-relaxed space-y-2">
                <p>
                  {lang === 'en'
                    ? 'Click "Search Web" or any preset topic above to pull live Google Search grounded data with source citations.'
                    : 'सत्यापित वेब लिंक के साथ लाइव जानकारी प्राप्त करने के लिए ऊपर "Search Web" पर क्लिक करें।'}
                </p>
                <div className="rounded-lg bg-white border border-slate-200 p-3 text-slate-700">
                  <strong>
                    {lang === 'en'
                      ? 'Built-in 15,000 Question Archive Ready: '
                      : '15,000 प्रश्नों का संग्रह तैयार: '}
                  </strong>
                  {lang === 'en'
                    ? `All ${chapters.length} chapters include 500 questions each (300 Easy + 100 Medium + 100 Hard = 15,000 total NIMCET 2026 questions) available both online and offline!`
                    : `सभी ${chapters.length} अध्यायों में प्रत्येक के लिए 500 प्रश्न (300 सरल + 100 मध्यम + 100 कठिन = कुल 15,000 प्रश्न) ऑनलाइन और ऑफलाइन उपलब्ध हैं!`}
                </div>
              </div>
            )}

            {searchResult && (
              <div className="space-y-3">
                <div className="text-[11px] font-mono font-semibold text-emerald-700">
                  {searchResult.modelUsed}
                </div>
                <div className="text-slate-800 leading-relaxed whitespace-pre-line bg-white border border-slate-200 rounded-lg p-3">
                  {searchResult.text}
                </div>
                {searchResult.citations.length > 0 && (
                  <div className="space-y-1.5">
                    <div className="font-bold text-slate-700">
                      {lang === 'en' ? 'Google Search Citations:' : 'Google सर्च स्रोत लिंक:'}
                    </div>
                    <div className="flex flex-col gap-1">
                      {searchResult.citations.map((c, idx) => (
                        <a
                          key={idx}
                          href={c.uri}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-between gap-2 rounded-lg bg-white border border-slate-200 px-2.5 py-1.5 text-sky-800 hover:bg-sky-50"
                        >
                          <span className="truncate">{c.title}</span>
                          <ExternalLink className="w-3 h-3 shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
