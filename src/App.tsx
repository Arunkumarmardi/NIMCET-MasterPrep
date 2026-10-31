import React, { useEffect, useState } from 'react';
import {
  Flame,
  Trophy,
  CheckCircle2,
  BookOpen,
  Compass,
  Calculator,
  Sparkles,
  Globe,
  Clock,
  ArrowRight,
  BookmarkCheck,
  LogIn,
  LogOut,
  UserCheck,
} from 'lucide-react';
import {
  DoubtPost,
  Language,
  MockAttemptResult,
  StudyReminder,
  SubjectId,
  VisualizerType,
} from './types/nimcet';
import { ALL_CHAPTERS } from './data/syllabusOther';
import {
  INITIAL_DOUBT_POSTS,
  INITIAL_REMINDERS,
  NIMCET_QUESTION_BANK,
} from './data/questionsAndForum';
import {
  generateHighYieldStudyPlan,
  NIMCET_SECTIONS,
} from './utils/nimcetEngine';
import {
  OfflineConnectivityBanner,
  PWAInstallButton,
} from './components/PWAInstallButton';
import { InteractiveVisualLab } from './components/InteractiveVisualLab';
import { FormulaAndMindMapVault } from './components/FormulaAndMindMapVault';
import { MockTestSimulator } from './components/MockTestSimulator';
import { CommunityAndReminders } from './components/CommunityAndReminders';
import { Chapter500QuestionBank } from './components/Chapter500QuestionBank';
import { OnlineAITutorAndSearch } from './components/OnlineAITutorAndSearch';
import { getSimpleLaymanBreakdown } from './utils/chapter500Generator';
import { useAuth } from './context/AuthContext';

type ActiveSection = 'planner' | 'concepts' | 'visual_lab' | 'vault' | 'mock_forum';

const STORAGE_KEY = 'nimcet_masterprep_state_v2';

export default function App() {
  const { user, signInWithGoogle, logout, getValidToken } = useAuth();
  const [authError, setAuthError] = useState<string | null>(null);
  const [lang, setLang] = useState<Language>('en');
  const [activeNav, setActiveNav] = useState<ActiveSection>('planner');

  // Student Exam Countdown & Study Planner State
  const [daysLeft, setDaysLeft] = useState<number>(45);
  const [dailyHours, setDailyHours] = useState<number>(6);
  const [completedChapterIds, setCompletedChapterIds] = useState<string[]>([
    'math-sets-logic',
    'cs-data-rep-boolean',
  ]);
  const [offlineChapterIds, setOfflineChapterIds] = useState<string[]>(
    ALL_CHAPTERS.map((c) => c.id)
  );

  // Gamification Streak & XP State
  const [streakDays, setStreakDays] = useState<number>(12);
  const [xpPoints, setXpPoints] = useState<number>(1450);
  const [dailyGoalChecked, setDailyGoalChecked] = useState<boolean>(false);

  // Selected Chapter for Deep Concept View & Visual Lab
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<SubjectId | 'all'>('all');
  const [chapterSearchQuery, setChapterSearchQuery] = useState<string>('');
  const [activeConceptTab, setActiveConceptTab] = useState<
    'all' | 'simple' | 'subtopics' | 'examples' | 'traps' | 'formulas' | 'q500'
  >('all');
  const [activeChapterId, setActiveChapterId] = useState<string>('math-vectors');
  const [activeVisualLabMode, setActiveVisualLabMode] = useState<VisualizerType>('conic_3d');
  const [aiTutorPrefill, setAiTutorPrefill] = useState<string>('');

  // Chapter Mini-Quiz State
  const [miniQuizAnswerByQ, setMiniQuizAnswerByQ] = useState<Record<string, number>>({});

  // Mock Test Attempts, Doubt Forum & Reminders
  const [mockHistory, setMockHistory] = useState<MockAttemptResult[]>([]);
  const [doubtPosts, setDoubtPosts] = useState<DoubtPost[]>(INITIAL_DOUBT_POSTS);
  const [reminders, setReminders] = useState<StudyReminder[]>(INITIAL_REMINDERS);

  // Load persisted state from localStorage for offline resilience
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.lang) setLang(parsed.lang);
        if (typeof parsed.daysLeft === 'number') setDaysLeft(parsed.daysLeft);
        if (typeof parsed.dailyHours === 'number') setDailyHours(parsed.dailyHours);
        if (Array.isArray(parsed.completedChapterIds))
          setCompletedChapterIds(parsed.completedChapterIds);
        if (Array.isArray(parsed.offlineChapterIds))
          setOfflineChapterIds(parsed.offlineChapterIds);
        if (typeof parsed.streakDays === 'number') setStreakDays(parsed.streakDays);
        if (typeof parsed.xpPoints === 'number') setXpPoints(parsed.xpPoints);
        if (Array.isArray(parsed.mockHistory)) setMockHistory(parsed.mockHistory);
      }
    } catch {
      // Ignore storage parse issues
    }
  }, []);

  // Hydrate authenticated user profile from backend when signed in
  useEffect(() => {
    if (!user) return;
    let active = true;
    (async () => {
      try {
        const token = await getValidToken();
        if (!token || !active) return;
        const res = await fetch('/api/user/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) return;
        const data = await res.json();
        if (!active || !data.user) return;
        if (typeof data.user.daysLeft === 'number') setDaysLeft(data.user.daysLeft);
        if (typeof data.user.hoursPerDay === 'number') setDailyHours(data.user.hoursPerDay);
        if (typeof data.user.xp === 'number') setXpPoints(data.user.xp);
        if (typeof data.user.streakDays === 'number') setStreakDays(data.user.streakDays);
        if (Array.isArray(data.user.completedChapters) && data.user.completedChapters.length > 0) {
          setCompletedChapterIds(data.user.completedChapters);
        }
      } catch {
        // Non-fatal fallback to local state
      }
    })();
    return () => {
      active = false;
    };
  }, [user, getValidToken]);

  // Synchronize study progress to backend when authenticated
  useEffect(() => {
    if (!user) return;
    const timer = setTimeout(async () => {
      try {
        const token = await getValidToken();
        if (!token) return;
        await fetch('/api/user/progress', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            daysLeft,
            hoursPerDay: dailyHours,
            xp: xpPoints,
            streakDays,
            completedChapters: completedChapterIds,
          }),
        });
      } catch {
        // Keep silent on background sync
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [user, getValidToken, daysLeft, dailyHours, xpPoints, streakDays, completedChapterIds]);

  // Save state to localStorage for full offline continuity
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          lang,
          daysLeft,
          dailyHours,
          completedChapterIds,
          offlineChapterIds,
          streakDays,
          xpPoints,
          mockHistory,
        })
      );
    } catch {
      // Ignore storage quota issues
    }
  }, [
    lang,
    daysLeft,
    dailyHours,
    completedChapterIds,
    offlineChapterIds,
    streakDays,
    xpPoints,
    mockHistory,
  ]);

  const studyPlan = generateHighYieldStudyPlan(
    ALL_CHAPTERS,
    daysLeft,
    dailyHours,
    completedChapterIds
  );

  const activeChapter =
    ALL_CHAPTERS.find((c) => c.id === activeChapterId) || ALL_CHAPTERS[0];

  const filteredChaptersForConcepts = ALL_CHAPTERS.filter((c) => {
    const matchesSubject =
      selectedSubjectFilter === 'all' || c.subjectId === selectedSubjectFilter;
    if (!matchesSubject) return false;
    if (!chapterSearchQuery.trim()) return true;
    const q = chapterSearchQuery.toLowerCase();
    return (
      c.title.en.toLowerCase().includes(q) ||
      c.title.hi.toLowerCase().includes(q) ||
      c.number.includes(q)
    );
  });

  const chapterQuestions = NIMCET_QUESTION_BANK.filter(
    (q) => q.chapterId === activeChapter.id
  );

  const activeSimpleGuide = getSimpleLaymanBreakdown(activeChapter);

  const handleToggleCompleteChapter = (chapterId: string) => {
    setCompletedChapterIds((prev) => {
      const exists = prev.includes(chapterId);
      if (exists) {
        return prev.filter((id) => id !== chapterId);
      } else {
        setXpPoints((xp) => xp + 150);
        return [...prev, chapterId];
      }
    });
  };

  const handleToggleOfflineChapter = (chapterId: string) => {
    setOfflineChapterIds((prev) =>
      prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const handleSyncAllOffline = () => {
    setOfflineChapterIds(ALL_CHAPTERS.map((c) => c.id));
  };

  const handleCheckInDailyStreak = () => {
    if (dailyGoalChecked) return;
    setDailyGoalChecked(true);
    setStreakDays((s) => s + 1);
    setXpPoints((x) => x + 100);
  };

  const openChapterInConceptView = (chapterId: string) => {
    setActiveChapterId(chapterId);
    setActiveNav('concepts');
  };

  const openVisualizerForChapter = (visType: VisualizerType) => {
    setActiveVisualLabMode(visType);
    setActiveNav('visual_lab');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Strict 3-Zone Top Bar Contract */}
      <header className="flex flex-wrap md:flex-nowrap items-center justify-between gap-3 md:gap-8 px-4 md:px-6 py-3.5 md:py-4 bg-white border-b border-slate-200 sticky top-0 z-30">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#planner"
          onClick={(e) => {
            e.preventDefault();
            setActiveNav('planner');
          }}
          className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 font-display"
        >
          NIMCET MasterPrep
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="order-3 md:order-2 w-full md:w-auto flex items-center gap-5 md:gap-6 text-sm font-medium text-slate-600 overflow-x-auto pt-1 md:pt-0"
        >
          {(
            [
              { id: 'planner', en: 'Study Plan', hi: 'अध्ययन योजना' },
              { id: 'concepts', en: 'Deep Concepts', hi: 'गहन अध्याय' },
              { id: 'visual_lab', en: '2D/3D Lab', hi: '2D/3D लैब' },
              { id: 'vault', en: 'Formula & Maps', hi: 'सूत्र और मैप' },
              { id: 'mock_forum', en: 'Mocks & Forum', hi: 'मॉक और फोरम' },
            ] as const
          ).map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveNav(item.id)}
                className={`py-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-slate-900 font-bold underline decoration-sky-600 decoration-2 underline-offset-8'
                    : 'hover:text-slate-900'
                }`}
              >
                {item[lang]}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="order-2 md:order-3 flex items-center shrink-0">
          <PWAInstallButton
            lang={lang}
            offlineChaptersCount={offlineChapterIds.length}
            totalChaptersCount={ALL_CHAPTERS.length}
            onSyncAllOffline={handleSyncAllOffline}
          />
        </div>
      </header>

      {/* Secondary Workspace Bar: Bilingual Switcher (English / हिन्दी), Streak & Gamification Bar */}
      <div className="bg-slate-900 text-white px-6 py-2.5 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5 font-semibold text-amber-400">
              <Flame className="w-4 h-4" />
              <span className="font-mono tabular-nums">{streakDays}</span>
              <span>{lang === 'en' ? 'Day Learning Streak' : 'दिन की निरंतर स्ट्रीक'}</span>
            </div>
            <span aria-hidden="true" className="text-slate-600">
              ·
            </span>
            <div className="flex items-center gap-1.5 font-semibold text-sky-400">
              <Trophy className="w-4 h-4" />
              <span className="font-mono tabular-nums">{xpPoints} XP</span>
              <span className="text-slate-400">
                ({completedChapterIds.length}/{ALL_CHAPTERS.length}{' '}
                {lang === 'en' ? 'Chapters Mastered' : 'अध्याय पूर्ण'})
              </span>
            </div>
            <button
              type="button"
              onClick={handleCheckInDailyStreak}
              disabled={dailyGoalChecked}
              className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                dailyGoalChecked
                  ? 'bg-emerald-800/70 text-emerald-200'
                  : 'bg-amber-500 text-slate-950 hover:bg-amber-400'
              }`}
            >
              {dailyGoalChecked
                ? lang === 'en'
                  ? '✓ Today’s Streak Locked (+100 XP)'
                  : '✓ आज की स्ट्रीक सुरक्षित (+100 XP)'
                : lang === 'en'
                ? 'Complete Daily Check-In (+100 XP)'
                : 'दैनिक स्ट्रीक चेक-इन (+100 XP)'}
            </button>
          </div>

          {/* Language Switcher & Google Account Sign-In */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-300 font-medium">
                {lang === 'en' ? 'Concept Language:' : 'भाषा चुनें:'}
              </span>
              <div className="inline-flex rounded-lg bg-slate-800 p-0.5 border border-slate-700">
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-2.5 py-1 rounded-md text-xs font-bold cursor-pointer whitespace-nowrap ${
                    lang === 'en' ? 'bg-sky-500 text-slate-950' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLang('hi')}
                  className={`px-2.5 py-1 rounded-md text-xs font-bold cursor-pointer whitespace-nowrap ${
                    lang === 'hi' ? 'bg-sky-500 text-slate-950' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  हिन्दी (Hindi)
                </button>
              </div>
            </div>

            {user ? (
              <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1">
                <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-slate-200 font-medium truncate max-w-[140px]">
                  {user.displayName || user.email}
                </span>
                <button
                  type="button"
                  onClick={() => logout()}
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-white cursor-pointer pl-1"
                  title="Sign Out"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={async () => {
                  setAuthError(null);
                  try {
                    await signInWithGoogle();
                  } catch {
                    setAuthError(
                      lang === 'en'
                        ? 'Google Sign-In popup closed or blocked.'
                        : 'गूगल साइन-इन पॉपअप बंद हो गया।'
                    );
                  }
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-semibold cursor-pointer whitespace-nowrap transition-colors"
              >
                <LogIn className="w-3.5 h-3.5 text-sky-400" />
                {lang === 'en' ? 'Sign In with Google' : 'गूगल से साइन इन करें'}
              </button>
            )}
          </div>
          {authError && (
            <div className="w-full text-right text-[11px] text-amber-300">{authError}</div>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8 space-y-10">
        {/* ==================== VIEW 1: TIME-LEFT HIGH-YIELD STUDY PLANNER & DASHBOARD ==================== */}
        {activeNav === 'planner' && (
          <div className="space-y-10">
            {/* Hero Split: Exam Time-Left Input Calculator & Projected NIT Score */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-7 flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-sky-700">
                    {lang === 'en'
                      ? 'Adaptive Exam-Scoring Prioritizer · 120 Questions · 1000 Marks'
                      : 'एडेप्टिव परीक्षा स्कोरिंग प्लानर · 120 प्रश्न · 1000 अंक'}
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    {lang === 'en'
                      ? 'How much time is left for your NIMCET exam?'
                      : 'आपकी NIMCET परीक्षा में कितना समय शेष है?'}
                  </h1>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {lang === 'en'
                      ? 'Enter your remaining days and daily study hours below. Our scoring engine prioritizes high-yield chapters (Mathematics 600M, Reasoning 240M, Computer 120M, English 40M) to maximize your marks per hour.'
                      : 'नीचे अपने शेष दिन और दैनिक अध्ययन घंटे दर्ज करें। यह इंजन सबसे अधिक अंक दिलाने वाले हाई-यील्ड अध्यायों (गणित 600M, रीजनिंग 240M, कंप्यूटर 120M, अंग्रेजी 40M) को प्राथमिकता देता है।'}
                  </p>
                </div>

                {/* Interactive Time-Left & Daily Hours Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
                    <label
                      htmlFor="days-left-input"
                      className="flex items-center justify-between text-xs font-bold text-slate-800 mb-2"
                    >
                      <span>{lang === 'en' ? 'Days Left Until Exam' : 'परीक्षा में शेष दिन'}</span>
                      <span className="font-mono text-base text-sky-700 tabular-nums">
                        {daysLeft} {lang === 'en' ? 'Days' : 'दिन'}
                      </span>
                    </label>
                    <input
                      id="days-left-input"
                      type="range"
                      min={7}
                      max={180}
                      step={1}
                      value={daysLeft}
                      onChange={(e) => setDaysLeft(Number(e.target.value))}
                      className="w-full accent-sky-600 cursor-pointer"
                    />
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {[
                        { d: 15, labelEn: '15d Crash', labelHi: '15 दिन क्रैश' },
                        { d: 30, labelEn: '30d Sprint', labelHi: '30 दिन स्प्रिंट' },
                        { d: 60, labelEn: '60d Target', labelHi: '60 दिन टारगेट' },
                        { d: 120, labelEn: '120d Full', labelHi: '120 दिन पूर्ण' },
                      ].map((preset) => (
                        <button
                          key={preset.d}
                          type="button"
                          onClick={() => setDaysLeft(preset.d)}
                          className={`px-2.5 py-1 rounded-md text-xs font-semibold cursor-pointer ${
                            daysLeft === preset.d
                              ? 'bg-slate-900 text-white'
                              : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {lang === 'en' ? preset.labelEn : preset.labelHi}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 flex flex-col justify-between">
                    <div>
                      <label
                        htmlFor="daily-hours-input"
                        className="flex items-center justify-between text-xs font-bold text-slate-800 mb-2"
                      >
                        <span>
                          {lang === 'en' ? 'Daily Dedicated Study Hours' : 'दैनिक अध्ययन घंटे'}
                        </span>
                        <span className="font-mono text-base text-emerald-700 tabular-nums">
                          {dailyHours} {lang === 'en' ? 'hrs/day' : 'घंटे/दिन'}
                        </span>
                      </label>
                      <input
                        id="daily-hours-input"
                        type="range"
                        min={2}
                        max={14}
                        step={1}
                        value={dailyHours}
                        onChange={(e) => setDailyHours(Number(e.target.value))}
                        className="w-full accent-emerald-600 cursor-pointer"
                      />
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                      <span>
                        {lang === 'en' ? 'Total Study Budget:' : 'कुल उपलब्ध अध्ययन समय:'}
                      </span>
                      <strong className="font-mono text-slate-900 tabular-nums">
                        {studyPlan.totalAvailableHours} Hours
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right 5-col Strategy & Projected Score Summary Card */}
              <div className="lg:col-span-5 rounded-2xl border border-slate-900 bg-slate-900 text-white p-7 flex flex-col justify-between space-y-5">
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-amber-400">
                    {lang === 'en' ? studyPlan.strategyModeEn : studyPlan.strategyModeHi}
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold font-mono tabular-nums text-white">
                      {studyPlan.projectedScoreOutOf1000}
                    </span>
                    <span className="text-sm text-slate-400 font-mono">
                      / 1000 {lang === 'en' ? 'Projected Score' : 'अनुमानित स्कोर'}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-emerald-400">
                    {studyPlan.predictedNitTarget}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {lang === 'en'
                      ? studyPlan.strategyDescriptionEn
                      : studyPlan.strategyDescriptionHi}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-xs">
                  <div>
                    <div className="text-slate-400">
                      {lang === 'en' ? 'Tier-1 Core Weightage' : 'टियर-1 कोर वेटेज'}
                    </div>
                    <div className="font-mono font-bold text-base text-sky-400 mt-0.5 tabular-nums">
                      756 / 1000 Marks
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400">
                      {lang === 'en' ? 'Mastery Progress' : 'अध्याय प्रगति'}
                    </div>
                    <div className="font-mono font-bold text-base text-emerald-400 mt-0.5 tabular-nums">
                      {Math.round((completedChapterIds.length / ALL_CHAPTERS.length) * 100)}% (
                      {completedChapterIds.length}/{ALL_CHAPTERS.length})
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  <button
                    type="button"
                    onClick={() => setActiveNav('concepts')}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-sky-500 text-slate-950 text-xs font-bold hover:bg-sky-400 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {lang === 'en' ? 'Start Priority #1 Chapter' : 'पहला प्राथमिकता अध्याय शुरू करें'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveNav('visual_lab')}
                    className="py-2.5 px-4 rounded-xl bg-slate-800 text-white text-xs font-semibold hover:bg-slate-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {lang === 'en' ? 'Open 2D/3D Lab' : '2D/3D लैब खोलें'}
                  </button>
                </div>
              </div>
            </section>

            {/* Full-Width 4-Column Official NIMCET Section Weightage Strip */}
            <section aria-label="NIMCET Official Section Weightage">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.values(NIMCET_SECTIONS).map((sec) => (
                  <div
                    key={sec.id}
                    className="rounded-xl border border-slate-200 bg-white p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span className="font-mono font-bold text-sky-700 tabular-nums">
                          {sec.weightagePercent}% Weightage
                        </span>
                        <span className="font-mono tabular-nums">{sec.totalQuestions} Qs</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mt-1">
                        {lang === 'en' ? sec.nameEn : sec.nameHi}
                      </h3>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono tabular-nums">
                      <span className="font-bold text-slate-900">{sec.maxSectionMarks} Marks</span>
                      <span className="text-slate-600">
                        +{sec.marksPerCorrect} / -{sec.negativePerWrong}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* High-Yield Scoring-Oriented Chapter Roadmap Table */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {lang === 'en'
                      ? `Your ${daysLeft}-Day High-Yield Exam Scoring Roadmap`
                      : `आपकी ${daysLeft}-दिवसीय हाई-यील्ड स्कोरिंग अध्ययन सूची`}
                  </h2>
                  <p className="text-sm text-slate-600 mt-0.5">
                    {lang === 'en'
                      ? 'Sorted automatically by Marks-Per-Hour ROI and Tier Priority so you lock in maximum marks first.'
                      : 'प्रति घंटा अंक (ROI) और प्राथमिकता के आधार पर क्रमबद्ध ताकि आप कम समय में सर्वाधिक अंक प्राप्त कर सकें।'}
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-xs font-bold text-slate-500 whitespace-nowrap">
                      <th className="py-3 pr-4">{lang === 'en' ? 'Priority & Tier' : 'प्राथमिकता'}</th>
                      <th className="py-3 px-4">{lang === 'en' ? 'Chapter & Subject' : 'अध्याय और विषय'}</th>
                      <th className="py-3 px-4 text-right">{lang === 'en' ? 'Weightage' : 'अंक भार'}</th>
                      <th className="py-3 px-4 text-right">{lang === 'en' ? 'ROI (Marks/Hr)' : 'ROI (अंक/घंटा)'}</th>
                      <th className="py-3 px-4 text-right">{lang === 'en' ? 'Target Time' : 'अनुशंसित समय'}</th>
                      <th className="py-3 pl-4 text-right">{lang === 'en' ? 'Actions' : 'कार्य'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80">
                    {studyPlan.prioritizedChapters.map((item, idx) => {
                      const ch = item.chapter;
                      const isDone = completedChapterIds.includes(ch.id);
                      return (
                        <tr key={ch.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3.5 pr-4 whitespace-nowrap">
                            <div className="font-mono text-xs font-bold text-slate-900 tabular-nums">
                              #{String(idx + 1).padStart(2, '0')} · Tier {ch.priorityTier}
                            </div>
                            <div className="text-xs text-slate-500">
                              {lang === 'en' ? item.urgencyLabelEn : item.urgencyLabelHi}
                            </div>
                          </td>

                          <td className="py-3.5 px-4">
                            <div className="font-bold text-slate-900">{ch.title[lang]}</div>
                            <div className="text-xs text-slate-500">
                              {NIMCET_SECTIONS[ch.subjectId][lang === 'en' ? 'nameEn' : 'nameHi']} ·{' '}
                              {ch.expectedQuestions} Qs
                            </div>
                          </td>

                          <td className="py-3.5 px-4 text-right font-mono font-bold text-slate-900 tabular-nums whitespace-nowrap">
                            {ch.expectedMarks} Marks
                          </td>

                          <td className="py-3.5 px-4 text-right font-mono text-sky-700 font-semibold tabular-nums whitespace-nowrap">
                            {item.roiScore} M/hr
                          </td>

                          <td className="py-3.5 px-4 text-right font-mono text-xs text-slate-700 tabular-nums whitespace-nowrap">
                            {item.recommendedDays}d ({ch.estimatedHours}h)
                          </td>

                          <td className="py-3.5 pl-4 text-right whitespace-nowrap">
                            <div className="inline-flex items-center gap-2">
                              <button
                                type="button"
                                aria-label={`Study ${ch.title.en}`}
                                onClick={() => openChapterInConceptView(ch.id)}
                                className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 cursor-pointer"
                              >
                                {lang === 'en' ? 'Study Concept' : 'अध्ययन करें'}
                              </button>
                              <button
                                type="button"
                                aria-label={`Open 2D/3D Lab for ${ch.title.en}`}
                                onClick={() => openVisualizerForChapter(ch.visualizerType)}
                                className="px-2.5 py-1.5 rounded-lg bg-sky-50 text-sky-800 border border-sky-200 text-xs font-semibold hover:bg-sky-100 cursor-pointer"
                              >
                                {lang === 'en' ? '2D/3D Lab' : 'विज़ुअल लैब'}
                              </button>
                              <button
                                type="button"
                                onClick={() => handleToggleCompleteChapter(ch.id)}
                                aria-label={`Mark ${ch.title.en} completed`}
                                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                                  isDone
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                }`}
                              >
                                {isDone
                                  ? lang === 'en'
                                    ? '✓ Mastered'
                                    : '✓ पूर्ण'
                                  : lang === 'en'
                                  ? 'Mark Done'
                                  : 'पूर्ण चिह्नित करें'}
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}

        {/* ==================== VIEW 2: DEEP BILINGUAL CONCEPTS & FULL TEXTBOOK READER ==================== */}
        {activeNav === 'concepts' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 4-col Subject & 30-Chapter Directory */}
            <aside className="lg:col-span-4 rounded-2xl border border-slate-200 bg-white p-5 space-y-4 lg:sticky lg:top-20 max-h-[85vh] flex flex-col">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-base font-bold text-slate-900">
                    {lang === 'en'
                      ? 'Complete 30-Chapter Syllabus'
                      : 'संपूर्ण 30-अध्याय पाठ्यक्रम'}
                  </h2>
                  <span className="text-xs font-mono font-bold text-sky-700 tabular-nums">
                    {ALL_CHAPTERS.length} Chapters
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  {lang === 'en'
                    ? 'Full Textbook Theory · Derivations · Worked Examples · Traps'
                    : 'संपूर्ण पाठ्यपुस्तक सिद्धांत · हल किए गए उदाहरण · परीक्षा ट्रिक्स'}
                </p>
              </div>

              {/* Search Bar for Chapters */}
              <div>
                <input
                  type="text"
                  value={chapterSearchQuery}
                  onChange={(e) => setChapterSearchQuery(e.target.value)}
                  placeholder={
                    lang === 'en'
                      ? 'Search any chapter (e.g. Vectors, Conics, K-Map)...'
                      : 'अध्याय खोजें (जैसे सदिश, शांकव, K-Map)...'
                  }
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:bg-white focus:outline-none"
                />
              </div>

              {/* Subject Filter Buttons */}
              <div className="flex flex-wrap gap-1.5">
                {(
                  [
                    { id: 'all', en: `All (${ALL_CHAPTERS.length})`, hi: `सभी (${ALL_CHAPTERS.length})` },
                    { id: 'mathematics', en: 'Math (15 · 600M)', hi: 'गणित (15)' },
                    { id: 'reasoning', en: 'Reasoning (6 · 240M)', hi: 'रीजनिंग (6)' },
                    { id: 'computer', en: 'Computer (5 · 120M)', hi: 'कंप्यूटर (5)' },
                    { id: 'english', en: 'English (4 · 40M)', hi: 'अंग्रेजी (4)' },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSelectedSubjectFilter(tab.id)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                      selectedSubjectFilter === tab.id
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {tab[lang]}
                  </button>
                ))}
              </div>

              {/* Scrollable Chapter List */}
              <div className="space-y-2 overflow-y-auto pr-1 flex-1">
                {filteredChaptersForConcepts.map((ch) => {
                  const selected = ch.id === activeChapter.id;
                  const done = completedChapterIds.includes(ch.id);
                  return (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => setActiveChapterId(ch.id)}
                      className={`w-full text-left rounded-xl p-3 border transition-colors cursor-pointer ${
                        selected
                          ? 'border-slate-900 bg-slate-900 text-white'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-900'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs opacity-80">
                        <span>
                          Tier {ch.priorityTier} · {ch.expectedMarks} Marks
                        </span>
                        <span className="font-mono tabular-nums">
                          {done ? '✓ Mastered' : `${ch.expectedQuestions} Qs`}
                        </span>
                      </div>
                      <div className="text-sm font-bold mt-1">
                        {ch.number}. {ch.title[lang]}
                      </div>
                      <div
                        className={`text-[11px] mt-1 font-mono ${
                          selected ? 'text-sky-300' : 'text-slate-500'
                        }`}
                      >
                        {(ch.subtopics?.length || 0) + ch.deepConcept.corePrinciples.length}{' '}
                        {lang === 'en' ? 'Topics' : 'उप-विषय'} · 500{' '}
                        {lang === 'en' ? 'Sim Qs (300E/100M/100H)' : 'प्रश्न'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Right 8-col Full Textbook Chapter Reader */}
            <div className="lg:col-span-8 space-y-6">
              <article className="rounded-2xl border border-slate-200 bg-white p-7 space-y-7">
                {/* Chapter Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-5">
                  <div>
                    <div className="text-xs text-sky-700 font-semibold">
                      <span>
                        {NIMCET_SECTIONS[activeChapter.subjectId][
                          lang === 'en' ? 'nameEn' : 'nameHi'
                        ]}
                      </span>
                      <span aria-hidden="true"> · </span>
                      <span>Priority Tier {activeChapter.priorityTier}</span>
                      <span aria-hidden="true"> · </span>
                      <span className="font-mono tabular-nums">
                        {activeChapter.expectedQuestions} Questions ({activeChapter.expectedMarks}{' '}
                        Marks)
                      </span>
                      <span aria-hidden="true"> · </span>
                      <span className="font-mono tabular-nums">
                        {activeChapter.estimatedHours}h Study Time
                      </span>
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 mt-1">
                      {activeChapter.number}. {activeChapter.title[lang]}
                    </h1>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveConceptTab('q500')}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-3.5 py-2 text-xs font-bold text-slate-950 hover:bg-amber-400 cursor-pointer"
                    >
                      <span>
                        {lang === 'en'
                          ? '500 Chapter Qs (300E · 100M · 100H)'
                          : '500 अध्याय प्रश्न (300E · 100M · 100H)'}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => openVisualizerForChapter(activeChapter.visualizerType)}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-sky-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-sky-700 cursor-pointer"
                    >
                      <Compass className="w-3.5 h-3.5" />
                      <span>
                        {lang === 'en'
                          ? 'Launch 2D/3D Lab'
                          : '2D/3D लैब खोलें'}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleToggleCompleteChapter(activeChapter.id)}
                      className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold cursor-pointer ${
                        completedChapterIds.includes(activeChapter.id)
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-900 text-white hover:bg-slate-800'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>
                        {completedChapterIds.includes(activeChapter.id)
                          ? lang === 'en'
                            ? 'Chapter Mastered (+150 XP)'
                            : 'अध्याय पूर्ण (+150 XP)'
                          : lang === 'en'
                          ? 'Mark Chapter Mastered'
                          : 'अध्याय पूर्ण चिह्नित करें'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Textbook Module Filter Bar */}
                <div className="flex flex-wrap items-center gap-1.5 bg-slate-50 p-2 rounded-xl border border-slate-200">
                  {(
                    [
                      {
                        id: 'all',
                        en: 'Full Textbook + 500 Qs',
                        hi: 'संपूर्ण अध्याय + 500 प्रश्न',
                      },
                      {
                        id: 'simple',
                        en: '0. Ultra-Simple Layman Guide',
                        hi: '0. अति-सरल भाषा समझ',
                      },
                      {
                        id: 'subtopics',
                        en: `1. Deep Subtopics & Theory (${
                          (activeChapter.subtopics?.length || 0) +
                          activeChapter.deepConcept.corePrinciples.length
                        })`,
                        hi: '1. विस्तृत उप-विषय और सिद्धांत',
                      },
                      {
                        id: 'examples',
                        en: `2. Solved Examples (${activeChapter.workedExamples?.length || 0})`,
                        hi: `2. हल किए गए उदाहरण (${activeChapter.workedExamples?.length || 0})`,
                      },
                      {
                        id: 'traps',
                        en: `3. Exam Traps (${activeChapter.examTraps?.length || 0})`,
                        hi: '3. परीक्षा में होने वाली गलतियाँ',
                      },
                      {
                        id: 'formulas',
                        en: `4. Formulas & Summary (${
                          activeChapter.formulas.length + activeChapter.shortSummaryNotes.length
                        })`,
                        hi: '4. सूत्र और सारांश नोट्स',
                      },
                      {
                        id: 'q500',
                        en: '5. 500 Exam Questions (300E / 100M / 100H)',
                        hi: '5. 500 परीक्षा प्रश्न (300 सरल / 100 मध्यम / 100 कठिन)',
                      },
                    ] as const
                  ).map((secTab) => (
                    <button
                      key={secTab.id}
                      type="button"
                      onClick={() => setActiveConceptTab(secTab.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                        activeConceptTab === secTab.id
                          ? 'bg-slate-900 text-white'
                          : 'text-slate-700 hover:bg-slate-200/70'
                      }`}
                    >
                      {secTab[lang]}
                    </button>
                  ))}
                </div>

                {/* SECTION 0: Ultra-Simple Layman Breakdown, 3-Step Recipe & Deep Simple Bullet Points */}
                {(activeConceptTab === 'all' ||
                  activeConceptTab === 'simple' ||
                  activeConceptTab === 'subtopics') && (
                  <div className="rounded-2xl border border-sky-200 bg-sky-50/50 p-5 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-sky-600" />
                        <span>
                          {lang === 'en'
                            ? 'Ultra-Simple Layman Explanation (Understand in 60 Seconds)'
                            : 'अति-सरल बोलचाल की भाषा में संपूर्ण समझ (60 सेकंड में समझें)'}
                        </span>
                      </h2>
                      <button
                        type="button"
                        onClick={() => {
                          setAiTutorPrefill(
                            `Explain chapter "${activeChapter.title.en}" in super simple words with examples`
                          );
                          setActiveNav('mock_forum');
                        }}
                        className="text-xs font-bold text-sky-700 hover:underline cursor-pointer"
                      >
                        {lang === 'en'
                          ? 'Ask Online Gemini AI Tutor →'
                          : 'ऑनलाइन Gemini AI ट्यूटर से पूछें →'}
                      </button>
                    </div>

                    {/* Everyday Analogy */}
                    <div className="rounded-xl bg-white border border-sky-200 p-4 text-sm text-slate-800 leading-relaxed">
                      <strong className="text-sky-800">
                        {lang === 'en'
                          ? 'Everyday Picture / Intuition: '
                          : 'सरल दैनिक उदाहरण: '}
                      </strong>
                      {activeSimpleGuide.everydayAnalogy[lang]}
                    </div>

                    {/* 3-Step Mental Recipe to Solve Any Question */}
                    <div className="rounded-xl bg-white border border-slate-200 p-4 space-y-2">
                      <div className="text-xs font-bold text-slate-900">
                        {lang === 'en'
                          ? '3-Step Exam Hall Recipe to Solve Any Question from This Chapter:'
                          : 'इस अध्याय के किसी भी प्रश्न को हल करने की 3-चरणीय सरल विधि:'}
                      </div>
                      <div className="space-y-2">
                        {activeSimpleGuide.threeStepRecipe.map((step, sIdx) => (
                          <div
                            key={sIdx}
                            className="rounded-lg bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 leading-relaxed"
                          >
                            {step[lang]}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deep Simple Micro-Notes */}
                    <div className="rounded-xl bg-white border border-slate-200 p-4 space-y-2">
                      <div className="text-xs font-bold text-slate-900">
                        {lang === 'en'
                          ? 'Point-by-Point Simple Concept Digest:'
                          : 'बिंदुवार सरल एवं संक्षिप्त मुख्य नियम:'}
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-700 list-disc pl-4">
                        {activeSimpleGuide.deepSimpleBulletNotes.map((pt, pIdx) => (
                          <li key={pIdx} className="leading-relaxed">
                            {pt[lang]}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Memory Hook */}
                    <div className="rounded-xl bg-slate-900 text-amber-300 px-4 py-3 text-xs font-mono">
                      <strong className="text-white">
                        {lang === 'en' ? 'Memory Hook: ' : 'याद रखने की ट्रिक: '}
                      </strong>
                      {activeSimpleGuide.memoryHook[lang]}
                    </div>
                  </div>
                )}

                {/* SECTION 1: Deep Intuitive Foundation */}
                {(activeConceptTab === 'all' || activeConceptTab === 'subtopics') && (
                  <div className="space-y-3">
                    <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-sky-600" />
                      <span>
                        {lang === 'en'
                          ? '1. Zero-to-Hero Intuitive Concept Foundation'
                          : '1. शून्य-से-शिखर सरल वैचारिक आधार (Intuition)'}
                      </span>
                    </h2>
                    <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                      {activeChapter.deepConcept.intuition[lang]}
                    </p>
                  </div>
                )}

                {/* SECTION 2: Granular Subtopic-by-Subtopic Textbook Breakdown */}
                {(activeConceptTab === 'all' || activeConceptTab === 'subtopics') &&
                  activeChapter.subtopics &&
                  activeChapter.subtopics.length > 0 && (
                    <div className="space-y-4">
                      <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <BookmarkCheck className="w-4 h-4 text-sky-600" />
                        <span>
                          {lang === 'en'
                            ? '2. Complete Topic-by-Topic Deep Theory, Rules & Equations'
                            : '2. उप-विषयवार संपूर्ण गहरा सिद्धांत, नियम और समीकरण'}
                        </span>
                      </h2>
                      <div className="space-y-5">
                        {activeChapter.subtopics.map((sub) => (
                          <div
                            key={sub.id}
                            className="rounded-xl border border-slate-200 bg-white p-5 space-y-3.5"
                          >
                            <h3 className="text-base font-bold text-slate-900">
                              {sub.title[lang]}
                            </h3>
                            <p className="text-sm text-slate-700 leading-relaxed">
                              {sub.detailedTheory[lang]}
                            </p>

                            {/* Key Rules & Properties */}
                            {sub.keyRules.length > 0 && (
                              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                                <div className="text-xs font-bold text-slate-800">
                                  {lang === 'en'
                                    ? 'Key Properties, Theorems & Exam Rules:'
                                    : 'मुख्य गुणधर्म, प्रमेय और परीक्षा नियम:'}
                                </div>
                                <ul className="space-y-1.5 text-xs text-slate-700 list-disc pl-4">
                                  {sub.keyRules.map((rule, rIdx) => (
                                    <li key={rIdx} className="leading-relaxed">
                                      {rule[lang]}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Key Equations */}
                            {sub.keyEquations.length > 0 && (
                              <div className="space-y-1.5">
                                {sub.keyEquations.map((eq, eIdx) => (
                                  <div
                                    key={eIdx}
                                    className="rounded-lg bg-slate-900 text-sky-300 px-3.5 py-2 font-mono text-xs font-semibold overflow-x-auto"
                                  >
                                    {eq}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* SECTION 3: Core Principles & Mathematical Formulations */}
                {(activeConceptTab === 'all' || activeConceptTab === 'subtopics') && (
                  <div className="space-y-4">
                    <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Calculator className="w-4 h-4 text-sky-600" />
                      <span>
                        {lang === 'en'
                          ? '3. Master Theorems & Mathematical Formulations'
                          : '3. मुख्य सिद्धांत, प्रमेय और गणितीय सूत्र'}
                      </span>
                    </h2>
                    <div className="space-y-3">
                      {activeChapter.deepConcept.corePrinciples.map((cp, i) => (
                        <div
                          key={i}
                          className="rounded-xl border border-slate-200 p-4 space-y-2 bg-white"
                        >
                          <h3 className="text-sm font-bold text-slate-900">
                            {cp.heading[lang]}
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {cp.explanation[lang]}
                          </p>
                          <div className="rounded-lg bg-slate-900 text-sky-300 px-3.5 py-2 font-mono text-xs font-semibold overflow-x-auto">
                            {cp.mathematicalForm}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SECTION 4: Step-by-Step Solved Model Examples & 10-Second Shortcuts */}
                {(activeConceptTab === 'all' || activeConceptTab === 'examples') &&
                  activeChapter.workedExamples &&
                  activeChapter.workedExamples.length > 0 && (
                    <div className="space-y-4 pt-2 border-t border-slate-200">
                      <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <span>
                          {lang === 'en'
                            ? '4. Step-by-Step Solved NIMCET Examples & 10-Second Shortcuts'
                            : '4. चरण-दर-चरण हल किए गए उदाहरण और 10-सेकंड शॉर्टकट ट्रिक्स'}
                        </span>
                      </h2>
                      <div className="space-y-4">
                        {activeChapter.workedExamples.map((ex, idx) => (
                          <div
                            key={ex.id}
                            className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-3"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <span className="text-xs font-bold text-sky-800">
                                {lang === 'en'
                                  ? `Solved Example #${idx + 1} · ${ex.title.en}`
                                  : `हल उदाहरण #${idx + 1} · ${ex.title.hi}`}
                              </span>
                              <span className="text-xs font-mono font-semibold text-slate-600">
                                {ex.difficulty}
                              </span>
                            </div>

                            <div className="rounded-lg bg-white border border-slate-200 p-3.5 text-sm font-semibold text-slate-900">
                              <span className="text-sky-700 font-bold">
                                {lang === 'en' ? 'Question: ' : 'प्रश्न: '}
                              </span>
                              {ex.problem[lang]}
                            </div>

                            <div className="text-xs text-slate-700 leading-relaxed whitespace-pre-line bg-white border border-slate-200 rounded-lg p-3.5 font-mono">
                              {ex.stepByStep[lang]}
                            </div>

                            <div className="rounded-lg bg-amber-50 border border-amber-200 px-3.5 py-2.5 text-xs text-amber-950">
                              <strong className="font-bold">
                                {lang === 'en'
                                  ? '⚡ 10-Second Exam Hall Shortcut: '
                                  : '⚡ 10-सेकंड परीक्षा शॉर्टकट ट्रिक: '}
                              </strong>
                              {ex.shortcut[lang]}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* SECTION 5: Common Exam Traps & Negative Marking Warnings */}
                {(activeConceptTab === 'all' || activeConceptTab === 'traps') &&
                  activeChapter.examTraps &&
                  activeChapter.examTraps.length > 0 && (
                    <div className="space-y-4 pt-2 border-t border-slate-200">
                      <h2 className="text-base font-bold text-slate-900">
                        {lang === 'en'
                          ? '5. Common NIMCET Exam Traps & Negative-Marking Pitfalls'
                          : '5. परीक्षा में होने वाली सामान्य गलतियाँ (Negative Marking से बचाव)'}
                      </h2>
                      <div className="space-y-3">
                        {activeChapter.examTraps.map((tr) => (
                          <div
                            key={tr.id}
                            className="rounded-xl border border-rose-200 bg-rose-50/50 p-4 space-y-2"
                          >
                            <div className="text-xs text-rose-900">
                              <strong className="font-bold">
                                {lang === 'en' ? '❌ Common Student Mistake: ' : '❌ सामान्य गलती: '}
                              </strong>
                              {tr.trap[lang]}
                            </div>
                            <div className="text-xs text-emerald-900 bg-white border border-emerald-200 rounded-lg p-3">
                              <strong className="font-bold">
                                {lang === 'en'
                                  ? '✓ Correct Concept & Rule: '
                                  : '✓ सही नियम और समाधान: '}
                              </strong>
                              {tr.correction[lang]}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* SECTION 6: Complete Chapter Formula Sheet & 60-Second Revision Notes */}
                {(activeConceptTab === 'all' || activeConceptTab === 'formulas') && (
                  <div className="space-y-5 pt-2 border-t border-slate-200">
                    <h2 className="text-base font-bold text-slate-900">
                      {lang === 'en'
                        ? '6. Chapter Formula Sheet & 60-Second Revision Notes'
                        : '6. अध्याय के सभी सूत्र और 60-सेकंड रिवीजन नोट्स'}
                    </h2>

                    <div className="grid grid-cols-1 gap-3">
                      {activeChapter.formulas.map((f) => (
                        <div
                          key={f.id}
                          className="rounded-xl border border-slate-200 bg-white p-4 space-y-2"
                        >
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-slate-900">{f.title[lang]}</span>
                            <span className="text-sky-700 font-semibold">{f.category[lang]}</span>
                          </div>
                          <div className="rounded-lg bg-slate-900 text-sky-300 px-3.5 py-2 font-mono text-xs font-semibold overflow-x-auto">
                            {f.expression}
                          </div>
                          <div className="text-xs text-slate-600">
                            <strong>{lang === 'en' ? 'Where: ' : 'जहाँ: '}</strong>
                            {f.variables[lang]}
                          </div>
                          <div className="text-xs text-emerald-800 font-medium">
                            <strong>{lang === 'en' ? 'Exam Tip: ' : 'परीक्षा टिप: '}</strong>
                            {f.examTip[lang]}
                          </div>
                        </div>
                      ))}
                    </div>

                    {activeChapter.shortSummaryNotes.length > 0 && (
                      <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                        <div className="text-xs font-bold text-slate-900">
                          {lang === 'en'
                            ? 'High-Speed Bullet Revision Notes:'
                            : 'त्वरित रिवीजन बुलेट नोट्स:'}
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-700 list-disc pl-4">
                          {activeChapter.shortSummaryNotes.map((note, nIdx) => (
                            <li key={nIdx} className="leading-relaxed">
                              {note[lang]}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* SECTION 7: Real-World Practical Application Scenario */}
                {activeConceptTab === 'all' && (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
                    <div className="text-xs font-bold text-sky-700">
                      {lang === 'en'
                        ? '7. Real-World Computer Science & Engineering Application'
                        : '7. वास्तविक दुनिया और कंप्यूटर विज्ञान में व्यावहारिक अनुप्रयोग'}
                      {' · '}
                      <span>{activeChapter.deepConcept.realWorldScenario.domain[lang]}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {activeChapter.deepConcept.realWorldScenario.title[lang]}
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {activeChapter.deepConcept.realWorldScenario.howItWorks[lang]}
                    </p>
                    <div className="rounded-lg bg-white border border-slate-200 p-3 text-xs text-slate-800">
                      <strong>
                        {lang === 'en' ? 'Practical Example: ' : 'व्यावहारिक उदाहरण: '}
                      </strong>
                      {activeChapter.deepConcept.realWorldScenario.practicalExample[lang]}
                    </div>
                  </div>
                )}

                {/* SECTION 8: 500-Question Chapter Simulator (300 Easy + 100 Medium + 100 Hard) */}
                {(activeConceptTab === 'all' || activeConceptTab === 'q500') && (
                  <Chapter500QuestionBank
                    chapter={activeChapter}
                    lang={lang}
                    onAskAITutor={(prompt) => {
                      setAiTutorPrefill(prompt);
                      setActiveNav('mock_forum');
                    }}
                  />
                )}
              </article>
            </div>
          </div>
        )}

        {/* ==================== VIEW 3: 2D/3D INTERACTIVE CONCEPT VISUAL LAB ==================== */}
        {activeNav === 'visual_lab' && (
          <InteractiveVisualLab lang={lang} initialMode={activeVisualLabMode} />
        )}

        {/* ==================== VIEW 4: MULTI-INDEX MIND MAPS & FORMULA VAULT ==================== */}
        {activeNav === 'vault' && (
          <FormulaAndMindMapVault
            lang={lang}
            chapters={ALL_CHAPTERS}
            offlineChapterIds={offlineChapterIds}
            onToggleOfflineChapter={handleToggleOfflineChapter}
          />
        )}

        {/* ==================== VIEW 5: ONLINE GEMINI AI TUTOR, GOOGLE SEARCH, 1000-MARK MOCK TEST & PEER FORUM ==================== */}
        {activeNav === 'mock_forum' && (
          <div className="space-y-12">
            <OnlineAITutorAndSearch
              lang={lang}
              chapters={ALL_CHAPTERS}
              activeChapter={activeChapter}
              prefilledPrompt={aiTutorPrefill}
              onClearPrefilledPrompt={() => setAiTutorPrefill('')}
            />

            <MockTestSimulator
              lang={lang}
              questions={NIMCET_QUESTION_BANK}
              attemptHistory={mockHistory}
              onRecordMockAttempt={async (res) => {
                setMockHistory((prev) => [res, ...prev]);
                setXpPoints((x) => x + 250);
                if (user) {
                  try {
                    const token = await getValidToken();
                    if (token) {
                      await fetch('/api/user/mock-attempt', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                          Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                          title: res.title,
                          totalNormalizedScore: res.totalNormalizedScore,
                          rawScore: res.rawScore,
                          maxRawScore: res.maxRawScore,
                          accuracyPercent: res.accuracyPercent,
                          predictedCollege: res.predictedNit,
                          predictedRankBand: res.predictedRankBand,
                        }),
                      });
                    }
                  } catch {
                    // Non-fatal fallback
                  }
                }
              }}
            />

            <CommunityAndReminders
              lang={lang}
              doubtPosts={doubtPosts}
              onAddDoubtPost={(newPost) => {
                const created: DoubtPost = {
                  ...newPost,
                  id: `doubt-${Date.now()}`,
                  createdAt: 'Just now',
                  upvotes: 1,
                  solved: false,
                  replies: [],
                };
                setDoubtPosts((prev) => [created, ...prev]);
                setXpPoints((x) => x + 50);
              }}
              onAddReply={(postId, author, content) => {
                setDoubtPosts((prev) =>
                  prev.map((p) =>
                    p.id === postId
                      ? {
                          ...p,
                          solved: true,
                          replies: [
                            ...p.replies,
                            {
                              id: `rep-${Date.now()}`,
                              author,
                              role: 'Community Contributor',
                              createdAt: 'Just now',
                              content,
                              upvotes: 1,
                            },
                          ],
                        }
                      : p
                  )
                );
                setXpPoints((x) => x + 75);
              }}
              onUpvoteDoubt={(postId) => {
                setDoubtPosts((prev) =>
                  prev.map((p) => (p.id === postId ? { ...p, upvotes: p.upvotes + 1 } : p))
                );
              }}
              reminders={reminders}
              onToggleReminder={(id) => {
                setReminders((prev) =>
                  prev.map((r) => (r.id === id ? { ...r, enabled: !r.enabled } : r))
                );
              }}
              onAddReminder={(title, time, targetSubject) => {
                setReminders((prev) => [
                  ...prev,
                  {
                    id: `rem-${Date.now()}`,
                    title,
                    time,
                    enabled: true,
                    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    targetSubject,
                  },
                ]);
              }}
            />
          </div>
        )}
      </main>

      {/* Clean Minimal Footer */}
      <footer className="border-t border-slate-200 bg-white px-6 py-5 mt-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            NIMCET MasterPrep · Complete 1000-Mark Syllabus (Mathematics 600M · Logical Reasoning 240M · Computer Awareness 120M · General English 40M)
          </div>
          <div className="flex items-center gap-4">
            <span>Offline PWA Enabled ({offlineChapterIds.length}/{ALL_CHAPTERS.length} Chapters Cached)</span>
            <span>·</span>
            <span>English &amp; हिन्दी Bilingual Edition</span>
          </div>
        </div>
      </footer>

      <OfflineConnectivityBanner lang={lang} />
    </div>
  );
}
