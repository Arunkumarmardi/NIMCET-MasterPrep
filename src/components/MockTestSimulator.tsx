import React, { useEffect, useState } from 'react';
import { Clock, Flag, CheckCircle2, RotateCcw, Award } from 'lucide-react';
import { Language, MockAttemptResult, QuestionItem, SubjectId } from '../types/nimcet';
import { evaluateMockAttempt, NIMCET_SECTIONS } from '../utils/nimcetEngine';

interface MockTestSimulatorProps {
  lang: Language;
  questions: QuestionItem[];
  attemptHistory: MockAttemptResult[];
  onRecordMockAttempt: (result: MockAttemptResult) => void;
}

export const MockTestSimulator: React.FC<MockTestSimulatorProps> = ({
  lang,
  questions,
  attemptHistory,
  onRecordMockAttempt,
}) => {
  const [testFilter, setTestFilter] = useState<'full' | '2024' | '2023' | SubjectId>('full');
  const [isExamRunning, setIsExamRunning] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number | undefined>>({});
  const [markedForReview, setMarkedForReview] = useState<string[]>([]);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [submittedResult, setSubmittedResult] = useState<MockAttemptResult | null>(null);
  const [instantPracticeExplain, setInstantPracticeExplain] = useState<boolean>(false);

  const activeQuestions = questions.filter((q) => {
    if (testFilter === 'full') return true;
    if (testFilter === '2024') return q.yearTag.includes('2024');
    if (testFilter === '2023') return q.yearTag.includes('2023');
    return q.subjectId === testFilter;
  });

  const currentQuestion = activeQuestions[currentIndex] || activeQuestions[0];

  useEffect(() => {
    if (!isExamRunning || submittedResult) return;
    const timer = window.setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, [isExamRunning, submittedResult]);

  const startSimulatedTest = (filterMode: typeof testFilter) => {
    setTestFilter(filterMode);
    setSelectedAnswers({});
    setMarkedForReview([]);
    setCurrentIndex(0);
    setElapsedSeconds(0);
    setSubmittedResult(null);
    setIsExamRunning(true);
  };

  const handleSelectOption = (optionIndex: number) => {
    if (!currentQuestion || submittedResult) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: prev[currentQuestion.id] === optionIndex ? undefined : optionIndex,
    }));
  };

  const toggleReviewMark = () => {
    if (!currentQuestion) return;
    setMarkedForReview((prev) =>
      prev.includes(currentQuestion.id)
        ? prev.filter((id) => id !== currentQuestion.id)
        : [...prev, currentQuestion.id]
    );
  };

  const handleSubmitExam = () => {
    const titleMap: Record<typeof testFilter, string> = {
      full: 'NIMCET Full 1000-Mark Simulated CBT Mock',
      '2024': 'NIMCET 2024 Official PYQ Paper',
      '2023': 'NIMCET 2023 Official PYQ Paper',
      mathematics: 'Mathematics 600-Mark High-Yield Drill',
      reasoning: 'Analytical & Logical Reasoning 240-Mark Drill',
      computer: 'Computer Awareness 120-Mark Drill',
      english: 'General English 40-Mark Drill',
    };
    const res = evaluateMockAttempt(
      activeQuestions,
      selectedAnswers,
      titleMap[testFilter],
      elapsedSeconds
    );
    setSubmittedResult(res);
    setIsExamRunning(false);
    onRecordMockAttempt(res);
  };

  const formatDuration = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const rem = sec % 60;
    return `${String(mins).padStart(2, '0')}:${String(rem).padStart(2, '0')}`;
  };

  return (
    <div className="space-y-8">
      {/* Header & Exam Mode Selector */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {lang === 'en'
                ? 'Simulated 1000-Mark CBT Mock Test & Previous Year Papers (PYQ)'
                : '1000-अंक CBT मॉक टेस्ट और पिछले वर्षों के प्रश्नपत्र (PYQ)'}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {lang === 'en'
                ? 'Exact NIMCET differential marking scheme: Math (+12, -3) · Reasoning (+6, -1.5) · Computer (+6, -1.5) · English (+4, -1).'
                : 'सटीक NIMCET अंकन प्रणाली: गणित (+12, -3) · रीजनिंग (+6, -1.5) · कंप्यूटर (+6, -1.5) · अंग्रेजी (+4, -1)।'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {(
              [
                { id: 'full', en: 'Full 1000M Mock', hi: 'पूर्ण 1000M मॉक' },
                { id: '2024', en: 'NIMCET 2024 PYQ', hi: 'NIMCET 2024 पेपर' },
                { id: '2023', en: 'NIMCET 2023 PYQ', hi: 'NIMCET 2023 पेपर' },
                { id: 'mathematics', en: 'Math (+12/-3)', hi: 'गणित (+12/-3)' },
                { id: 'reasoning', en: 'Reasoning (+6/-1.5)', hi: 'रीजनिंग (+6/-1.5)' },
                { id: 'computer', en: 'Computer (+6/-1.5)', hi: 'कंप्यूटर (+6/-1.5)' },
                { id: 'english', en: 'English (+4/-1)', hi: 'अंग्रेजी (+4/-1)' },
              ] as const
            ).map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => startSimulatedTest(btn.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold cursor-pointer whitespace-nowrap transition-colors ${
                  testFilter === btn.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {btn[lang]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active CBT Test Arena */}
      {currentQuestion && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left 8-col Question Stage */}
          <div className="lg:col-span-8 rounded-2xl border border-slate-200 bg-white p-6 space-y-6">
            {/* Top Bar inside Exam Question Card */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
              <div className="text-xs text-slate-600 flex flex-wrap items-center gap-2">
                <span className="font-bold text-slate-900">
                  {lang === 'en' ? 'Question' : 'प्रश्न'} {currentIndex + 1} /{' '}
                  {activeQuestions.length}
                </span>
                <span aria-hidden="true">·</span>
                <span>{currentQuestion.yearTag}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono font-semibold text-emerald-700">
                  +{NIMCET_SECTIONS[currentQuestion.subjectId].marksPerCorrect} Marks
                </span>
                <span aria-hidden="true">/</span>
                <span className="font-mono font-semibold text-rose-700">
                  -{NIMCET_SECTIONS[currentQuestion.subjectId].negativePerWrong} Negative
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setInstantPracticeExplain((prev) => !prev)}
                  className="text-xs font-semibold text-sky-700 hover:underline cursor-pointer"
                >
                  {instantPracticeExplain
                    ? lang === 'en'
                      ? 'Hide Solution Shortcut'
                      : 'हल छिपाएं'
                    : lang === 'en'
                    ? 'Peek Solution & Shortcut'
                    : 'हल और शॉर्टकट देखें'}
                </button>
                <div className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-mono font-bold text-slate-900 tabular-nums">
                  <Clock className="w-3.5 h-3.5 text-sky-600" />
                  <span>{formatDuration(elapsedSeconds)}</span>
                </div>
              </div>
            </div>

            {/* Question Statement */}
            <div className="text-base font-semibold text-slate-900 leading-relaxed">
              {currentQuestion.question[lang]}
            </div>

            {/* Options List */}
            <div className="space-y-3">
              {currentQuestion.options.map((opt, idx) => {
                const isSelected = selectedAnswers[currentQuestion.id] === idx;
                const isCorrect = currentQuestion.correctIndex === idx;
                const showFeedback = Boolean(submittedResult) || instantPracticeExplain;

                let borderClass = 'border-slate-200 bg-white hover:bg-slate-50 text-slate-900';
                if (showFeedback) {
                  if (isCorrect) {
                    borderClass = 'border-emerald-600 bg-emerald-50 text-emerald-950';
                  } else if (isSelected && !isCorrect) {
                    borderClass = 'border-rose-600 bg-rose-50 text-rose-950';
                  }
                } else if (isSelected) {
                  borderClass = 'border-sky-600 bg-sky-50 text-sky-950';
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left rounded-xl border p-4 transition-colors flex items-center justify-between gap-3 cursor-pointer ${borderClass}`}
                  >
                    <div className="flex items-center gap-3 text-sm font-medium">
                      <span className="w-7 h-7 rounded-lg border border-current flex items-center justify-center font-mono text-xs font-bold shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{opt[lang]}</span>
                    </div>
                    {showFeedback && isCorrect && (
                      <span className="text-xs font-bold text-emerald-700">
                        {lang === 'en' ? '✓ Correct Answer' : '✓ सही उत्तर'}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Step-by-Step Bilingual Explanation & 10-Second Shortcut */}
            {(submittedResult || instantPracticeExplain) && (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-3 text-sm">
                <div>
                  <div className="font-bold text-slate-900">
                    {lang === 'en' ? 'Step-by-Step Solution:' : 'चरण-दर-चरण हल:'}
                  </div>
                  <p className="text-slate-700 mt-1 leading-relaxed">
                    {currentQuestion.solution[lang]}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 text-xs text-sky-950 bg-sky-50 p-3 rounded-lg">
                  <strong>
                    {lang === 'en' ? '10-Second NIMCET Shortcut: ' : '10-सेकंड NIMCET शॉर्टकट: '}
                  </strong>
                  {currentQuestion.shortcutTrick[lang]}
                </div>
              </div>
            )}

            {/* Navigation Footer Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleReviewMark}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold cursor-pointer ${
                    markedForReview.includes(currentQuestion.id)
                      ? 'bg-amber-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Flag className="w-3.5 h-3.5" />
                  <span>
                    {markedForReview.includes(currentQuestion.id)
                      ? lang === 'en'
                        ? 'Marked for Review'
                        : 'समीक्षा के लिए चिह्नित'
                      : lang === 'en'
                      ? 'Mark for Review'
                      : 'समीक्षा हेतु चिह्नित करें'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedAnswers((prev) => ({ ...prev, [currentQuestion.id]: undefined }))
                  }
                  className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  {lang === 'en' ? 'Clear Response' : 'उत्तर हटाएं'}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 disabled:opacity-40 cursor-pointer"
                >
                  {lang === 'en' ? 'Previous' : 'पिछला'}
                </button>

                {currentIndex < activeQuestions.length - 1 ? (
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentIndex((i) => Math.min(activeQuestions.length - 1, i + 1))
                    }
                    className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 cursor-pointer"
                  >
                    {lang === 'en' ? 'Save & Next' : 'सेव और अगला'}
                  </button>
                ) : null}

                <button
                  type="button"
                  onClick={handleSubmitExam}
                  className="px-4 py-2 rounded-lg bg-sky-600 text-white text-xs font-bold hover:bg-sky-700 cursor-pointer"
                >
                  {lang === 'en' ? 'Submit Mock Test' : 'टेस्ट सबमिट करें'}
                </button>
              </div>
            </div>
          </div>

          {/* Right 4-col CBT Question Palette & Score Analytics */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4">
              <h3 className="text-sm font-bold text-slate-900">
                {lang === 'en' ? 'CBT Question Palette' : 'प्रश्न पैलेट (Question Palette)'}
              </h3>

              <div className="grid grid-cols-5 gap-2">
                {activeQuestions.map((q, idx) => {
                  const answered = selectedAnswers[q.id] !== undefined;
                  const review = markedForReview.includes(q.id);
                  const isCurrent = idx === currentIndex;

                  let btnStyle = 'bg-slate-100 text-slate-700 border-slate-200';
                  if (review) {
                    btnStyle = 'bg-amber-500 text-white border-amber-600';
                  } else if (answered) {
                    btnStyle = 'bg-emerald-600 text-white border-emerald-700';
                  }

                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to Question ${idx + 1}`}
                      className={`h-9 rounded-lg border font-mono text-xs font-bold tabular-nums cursor-pointer ${btnStyle} ${
                        isCurrent ? 'ring-2 ring-slate-900 ring-offset-1' : ''
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap gap-3">
                <span>
                  Answered:{' '}
                  <strong className="font-mono tabular-nums text-emerald-700">
                    {Object.values(selectedAnswers).filter((v) => v !== undefined).length}
                  </strong>
                </span>
                <span>·</span>
                <span>
                  Review:{' '}
                  <strong className="font-mono tabular-nums text-amber-700">
                    {markedForReview.length}
                  </strong>
                </span>
              </div>
            </div>

            {/* Post-Submission Detailed 1000-Mark Analytics Report */}
            {submittedResult && (
              <div className="rounded-2xl border border-slate-900 bg-slate-900 text-white p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sky-400 text-xs font-bold">
                    <Award className="w-4 h-4" />
                    <span>
                      {lang === 'en'
                        ? 'Normalized 1000-Mark NIMCET Scorecard'
                        : '1000-अंक NIMCET स्कोरकार्ड'}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => startSimulatedTest(testFilter)}
                    className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-white cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Retake' : 'पुनः प्रयास'}</span>
                  </button>
                </div>

                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-3xl font-bold font-mono tabular-nums text-white">
                      {submittedResult.totalNormalizedScore}{' '}
                      <span className="text-sm font-normal text-slate-400">/ 1000</span>
                    </div>
                    <div className="text-xs text-emerald-400 font-medium mt-1">
                      {submittedResult.predictedNit}
                    </div>
                  </div>
                  <div className="text-right font-mono tabular-nums">
                    <div className="text-lg font-bold text-sky-400">
                      {submittedResult.accuracyPercent}%
                    </div>
                    <div className="text-xs text-slate-400">
                      {lang === 'en' ? 'Accuracy' : 'सटीकता'}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-800 text-xs">
                  {submittedResult.sectionScores.map((sec) => (
                    <div key={sec.subjectId} className="flex items-center justify-between">
                      <span className="text-slate-300 capitalize">{sec.subjectId}</span>
                      <span className="font-mono tabular-nums text-slate-200">
                        +{sec.correct} / -{sec.wrong} ({sec.rawMarks}/{sec.maxRawMarks}M)
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Past Mock Attempts History */}
            {attemptHistory.length > 0 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
                <h4 className="text-sm font-bold text-slate-900">
                  {lang === 'en' ? 'Recent Mock Test Attempts' : 'हाल के मॉक टेस्ट परिणाम'}
                </h4>
                <div className="space-y-2">
                  {attemptHistory.slice(0, 4).map((att) => (
                    <div
                      key={att.id}
                      className="flex items-center justify-between text-xs border-b border-slate-100 pb-2 last:border-none"
                    >
                      <div>
                        <div className="font-semibold text-slate-900">{att.testTitle}</div>
                        <div className="text-slate-500">{att.predictedNit}</div>
                      </div>
                      <div className="text-right font-mono font-bold text-slate-900 tabular-nums">
                        {att.totalNormalizedScore}/1000 ({att.accuracyPercent}%)
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
