import React, { useMemo, useState } from 'react';
import { Chapter, Language } from '../types/nimcet';
import {
  generate500QuestionsForChapter,
  SimulatedChapterQuestion,
} from '../utils/chapter500Generator';
import { NIMCET_SECTIONS } from '../utils/nimcetEngine';

interface Chapter500QuestionBankProps {
  chapter: Chapter;
  lang: Language;
  onAskAITutor?: (prompt: string) => void;
}

const QUESTIONS_PER_PAGE = 20;

export const Chapter500QuestionBank: React.FC<Chapter500QuestionBankProps> = ({
  chapter,
  lang,
  onAskAITutor,
}) => {
  const [tierFilter, setTierFilter] = useState<
    'all' | 'easy_300' | 'medium_100' | 'hard_100'
  >('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [jumpNumber, setJumpNumber] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [answersById, setAnswersById] = useState<Record<string, number>>({});

  // Generate all 500 NIMCET 2026 simulated questions for this chapter
  const all500Questions = useMemo(
    () => generate500QuestionsForChapter(chapter),
    [chapter]
  );

  const filteredQuestions = useMemo(() => {
    return all500Questions.filter((q) => {
      if (tierFilter !== 'all' && q.tierBucket !== tierFilter) return false;
      if (jumpNumber.trim()) {
        const targetNum = Number(jumpNumber.trim());
        if (!Number.isNaN(targetNum) && targetNum >= 1 && targetNum <= 500) {
          return q.questionNumber === targetNum;
        }
      }
      if (!searchQuery.trim()) return true;
      const s = searchQuery.toLowerCase();
      return (
        q.question.en.toLowerCase().includes(s) ||
        q.question.hi.toLowerCase().includes(s) ||
        `#${q.questionNumber}`.includes(s)
      );
    });
  }, [all500Questions, tierFilter, searchQuery, jumpNumber]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredQuestions.length / QUESTIONS_PER_PAGE)
  );
  const safePage = Math.min(currentPage, totalPages);
  const pageQuestions = filteredQuestions.slice(
    (safePage - 1) * QUESTIONS_PER_PAGE,
    safePage * QUESTIONS_PER_PAGE
  );

  const sectionSpec = NIMCET_SECTIONS[chapter.subjectId];

  // Live Chapter Practice Score & Accuracy Summary
  const stats = useMemo(() => {
    let attempted = 0;
    let correct = 0;
    let wrong = 0;
    for (const q of all500Questions) {
      const chosen = answersById[q.id];
      if (chosen !== undefined) {
        attempted++;
        if (chosen === q.correctIndex) correct++;
        else wrong++;
      }
    }
    const netMarks =
      correct * sectionSpec.marksPerCorrect - wrong * sectionSpec.negativePerWrong;
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
    return { attempted, correct, wrong, netMarks, accuracy };
  }, [all500Questions, answersById, sectionSpec]);

  return (
    <div className="space-y-5 pt-4 border-t border-slate-200">
      {/* Header Banner */}
      <div className="rounded-2xl bg-slate-900 text-white p-5 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-mono font-bold text-amber-400">
              {lang === 'en'
                ? `NIMCET 2026 CHAPTER SIMULATOR · 500 QUESTIONS (${chapter.number}. ${chapter.title.en})`
                : `NIMCET 2026 अध्याय प्रश्न बैंक · 500 प्रश्न (${chapter.number}. ${chapter.title.hi})`}
            </div>
            <h3 className="text-lg font-bold">
              {lang === 'en'
                ? '500 Exam-Simulated Questions: 300 Foundation Easy + 100 Exam Medium + 100 Rank-Booster Hard'
                : '500 परीक्षा-आधारित प्रश्न: 300 बेसिक सरल + 100 मध्यम (Medium) + 100 कठिन (Hard)'}
            </h3>
            <p className="text-xs text-slate-300">
              {lang === 'en'
                ? `Official Marking: +${sectionSpec.marksPerCorrect} Correct / -${sectionSpec.negativePerWrong} Wrong · Every question includes step-by-step bilingual solutions & 10-second shortcuts.`
                : `आधिकारिक अंक योजना: +${sectionSpec.marksPerCorrect} सही / -${sectionSpec.negativePerWrong} गलत · प्रत्येक प्रश्न का चरण-दर-चरण हल और 10-सेकंड शॉर्टकट उपलब्ध है।`}
            </p>
          </div>

          {/* Live Chapter Drill Scoreboard */}
          <div className="rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-xs font-mono tabular-nums space-y-1">
            <div className="text-slate-300">
              {lang === 'en' ? 'Attempted:' : 'हल किए:'}{' '}
              <strong className="text-white">{stats.attempted} / 500</strong>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-emerald-400">✓ {stats.correct}</span>
              <span className="text-rose-400">✗ {stats.wrong}</span>
              <span className="text-sky-400">{stats.accuracy}% Acc</span>
            </div>
            <div className="text-amber-400 font-bold">
              {lang === 'en' ? 'Net Score:' : 'कुल अंक:'} {stats.netMarks.toFixed(1)} Marks
            </div>
          </div>
        </div>

        {/* 3-Tier Filter Tabs (300 Easy, 100 Medium, 100 Hard) */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {(
            [
              {
                id: 'all',
                en: 'All 500 Questions (Q#1–Q#500)',
                hi: 'सभी 500 प्रश्न (Q#1–Q#500)',
              },
              {
                id: 'easy_300',
                en: '300 Easy · Concept Foundation (Q#1–Q#300)',
                hi: '300 सरल · फाउंडेशन अभ्यास (Q#1–Q#300)',
              },
              {
                id: 'medium_100',
                en: '100 Medium · NIMCET Standard (Q#301–Q#400)',
                hi: '100 मध्यम · परीक्षा स्तर (Q#301–Q#400)',
              },
              {
                id: 'hard_100',
                en: '100 Hard · 2026 Rank-Booster (Q#401–Q#500)',
                hi: '100 कठिन · 2026 रैंक-बूस्टर (Q#401–Q#500)',
              },
            ] as const
          ).map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => {
                setTierFilter(t.id);
                setJumpNumber('');
                setCurrentPage(1);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                tierFilter === t.id
                  ? 'bg-sky-500 text-slate-950'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {t[lang]}
            </button>
          ))}
        </div>
      </div>

      {/* Search & Jump-to-Question Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
        <div className="sm:col-span-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder={
              lang === 'en'
                ? 'Search within 500 questions (e.g. perpendicular, variance, 2’s complement)...'
                : '500 प्रश्नों में खोजें...'
            }
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs text-slate-900 focus:border-sky-600 focus:bg-white focus:outline-none"
          />
        </div>

        <div className="sm:col-span-3">
          <input
            type="number"
            min={1}
            max={500}
            value={jumpNumber}
            onChange={(e) => {
              setJumpNumber(e.target.value);
              setCurrentPage(1);
            }}
            placeholder={
              lang === 'en' ? 'Jump to Q# (1–500)' : 'प्रश्न संख्या पर जाएं (1–500)'
            }
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-mono text-slate-900 focus:border-sky-600 focus:bg-white focus:outline-none"
          />
        </div>

        <div className="sm:col-span-3 flex items-center justify-end gap-1.5 text-xs font-mono">
          <button
            type="button"
            disabled={safePage <= 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 disabled:opacity-40 cursor-pointer"
          >
            Prev
          </button>
          <span className="px-2 text-slate-600 tabular-nums">
            Page {safePage}/{totalPages}
          </span>
          <button
            type="button"
            disabled={safePage >= totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 disabled:opacity-40 cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>

      {/* Paginated Questions List */}
      <div className="space-y-4">
        {pageQuestions.map((q: SimulatedChapterQuestion) => {
          const chosen = answersById[q.id];
          const answered = chosen !== undefined;

          return (
            <div
              key={q.id}
              className="rounded-xl border border-slate-200 bg-white p-4 space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-slate-900">
                    Q#{String(q.questionNumber).padStart(3, '0')} / 500
                  </span>
                  <span className="text-slate-400">·</span>
                  <span className="font-semibold text-sky-700">
                    {q.tierLabel[lang]}
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-slate-500">
                  <span>{q.yearTag}</span>
                  <span>·</span>
                  <span className="text-emerald-700 font-semibold">
                    +{sectionSpec.marksPerCorrect} / -{sectionSpec.negativePerWrong}
                  </span>
                </div>
              </div>

              <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                {q.question[lang]}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((opt, oIdx) => {
                  const isCorrect = q.correctIndex === oIdx;
                  const isChosen = chosen === oIdx;
                  let style =
                    'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800';
                  if (answered) {
                    if (isCorrect) {
                      style =
                        'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold';
                    } else if (isChosen) {
                      style = 'border-rose-600 bg-rose-50 text-rose-950';
                    }
                  }
                  return (
                    <button
                      key={oIdx}
                      type="button"
                      onClick={() =>
                        setAnswersById((prev) => ({
                          ...prev,
                          [q.id]: oIdx,
                        }))
                      }
                      className={`text-left px-3.5 py-2.5 rounded-lg border text-xs cursor-pointer transition-colors ${style}`}
                    >
                      <span className="font-mono font-bold mr-1.5">
                        ({String.fromCharCode(65 + oIdx)})
                      </span>
                      {opt[lang]}
                    </button>
                  );
                })}
              </div>

              {answered && (
                <div className="rounded-xl bg-slate-50 p-3.5 text-xs text-slate-700 border border-slate-200 space-y-2">
                  <div>
                    <strong className="text-slate-900">
                      {lang === 'en'
                        ? 'Step-by-Step Solution: '
                        : 'चरण-दर-चरण हल: '}
                    </strong>
                    {q.solution[lang]}
                  </div>
                  <div className="text-sky-800 font-semibold">
                    <strong>
                      {lang === 'en'
                        ? '⚡ 10-Second Exam Shortcut: '
                        : '⚡ 10-सेकंड शॉर्टकट ट्रिक: '}
                    </strong>
                    {q.shortcutTrick[lang]}
                  </div>
                  {onAskAITutor && (
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={() =>
                          onAskAITutor(
                            `Explain this NIMCET 2026 question in even simpler step-by-step words: ${q.question.en}`
                          )
                        }
                        className="text-xs font-bold text-sky-700 hover:underline cursor-pointer"
                      >
                        {lang === 'en'
                          ? '→ Ask Online Gemini AI Tutor to explain this question further'
                          : '→ इस प्रश्न को ऑनलाइन Gemini AI ट्यूटर से और सरल भाषा में समझें'}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Pagination Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs font-mono">
        <span className="text-slate-500">
          {lang === 'en'
            ? `Showing ${(safePage - 1) * QUESTIONS_PER_PAGE + 1}–${Math.min(
                safePage * QUESTIONS_PER_PAGE,
                filteredQuestions.length
              )} of ${filteredQuestions.length} Questions`
            : `कुल ${filteredQuestions.length} में से ${
                (safePage - 1) * QUESTIONS_PER_PAGE + 1
              }–${Math.min(
                safePage * QUESTIONS_PER_PAGE,
                filteredQuestions.length
              )} प्रश्न प्रदर्शित`}
        </span>
        <div className="flex flex-wrap items-center gap-1">
          {[1, 5, 10, 15, 16, 20, 21, 25]
            .filter((p) => p <= totalPages)
            .map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setCurrentPage(p)}
                className={`px-2.5 py-1 rounded-md cursor-pointer ${
                  safePage === p
                    ? 'bg-slate-900 text-white font-bold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                P{p}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};
