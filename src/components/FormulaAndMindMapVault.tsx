import React, { useState } from 'react';
import { Search, Eye, EyeOff, BookMarked, Network } from 'lucide-react';
import { Chapter, Language, SubjectId } from '../types/nimcet';
import { NIMCET_SECTIONS } from '../utils/nimcetEngine';

interface FormulaAndMindMapVaultProps {
  lang: Language;
  chapters: Chapter[];
  offlineChapterIds: string[];
  onToggleOfflineChapter: (chapterId: string) => void;
}

export const FormulaAndMindMapVault: React.FC<FormulaAndMindMapVaultProps> = ({
  lang,
  chapters,
  offlineChapterIds,
  onToggleOfflineChapter,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [flashcardHideExpressions, setFlashcardHideExpressions] = useState(false);
  const [revealedFormulaIds, setRevealedFormulaIds] = useState<string[]>([]);
  const [selectedMindMapChapterId, setSelectedMindMapChapterId] = useState<string>(
    chapters[0]?.id || 'math-vectors'
  );
  const [activeMindMapTabIdx, setActiveMindMapTabIdx] = useState<number>(0);

  const activeMindMapChapter =
    chapters.find((c) => c.id === selectedMindMapChapterId) || chapters[0];

  const filteredChapters = chapters.filter((ch) => {
    if (selectedSubject !== 'all' && ch.subjectId !== selectedSubject) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchChapter =
      ch.title.en.toLowerCase().includes(q) || ch.title.hi.toLowerCase().includes(q);
    const matchFormula = ch.formulas.some(
      (f) =>
        f.title.en.toLowerCase().includes(q) ||
        f.title.hi.toLowerCase().includes(q) ||
        f.expression.toLowerCase().includes(q)
    );
    const matchNotes = ch.shortSummaryNotes.some(
      (n) => n.en.toLowerCase().includes(q) || n.hi.toLowerCase().includes(q)
    );
    return matchChapter || matchFormula || matchNotes;
  });

  const toggleRevealFormula = (id: string) => {
    setRevealedFormulaIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-10">
      {/* Multi-Index Interactive Mind Map Explorer */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-sky-700 font-semibold">
              <Network className="w-4 h-4" />
              <span>
                {lang === 'en'
                  ? 'Multi-Index Topic Mind Maps & Quick Revision Tree'
                  : 'मल्टी-इंडेक्स टॉपिक माइंड मैप और त्वरित पुनरीक्षण वृक्ष'}
              </span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mt-1">
              {activeMindMapChapter.mindMap.rootTitle[lang]}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <label htmlFor="mindmap-chapter-select" className="sr-only">
              Select Chapter for Mind Map
            </label>
            <select
              id="mindmap-chapter-select"
              value={selectedMindMapChapterId}
              onChange={(e) => {
                setSelectedMindMapChapterId(e.target.value);
                setActiveMindMapTabIdx(0);
              }}
              className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-900"
            >
              {chapters.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.number}. {c.title[lang]} ({c.expectedMarks}M)
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mind Map Index Tabs */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1 rounded-lg">
            {activeMindMapChapter.mindMap.indexTabs.map((tab, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveMindMapTabIdx(idx)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  activeMindMapTabIdx === idx
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.tabName[lang]}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500">
            <span>
              {NIMCET_SECTIONS[activeMindMapChapter.subjectId][
                lang === 'en' ? 'nameEn' : 'nameHi'
              ]}
            </span>
            <span aria-hidden="true"> · </span>
            <span className="font-mono tabular-nums">
              {activeMindMapChapter.expectedQuestions} Qs ({activeMindMapChapter.expectedMarks} Marks)
            </span>
          </div>
        </div>

        {/* Mind Map Visual Node Branches */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          {(
            activeMindMapChapter.mindMap.indexTabs[activeMindMapTabIdx] ||
            activeMindMapChapter.mindMap.indexTabs[0]
          )?.branches.map((branch) => (
            <div
              key={branch.id}
              className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-slate-900">{branch.title[lang]}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {branch.keyPoints.map((kp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-sky-600 font-bold">→</span>
                      <span>{kp[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {branch.subFormula && (
                <div className="mt-4 pt-3 border-t border-slate-200/80 font-mono text-xs font-semibold text-sky-900 bg-sky-50 px-3 py-2 rounded-lg">
                  {branch.subFormula}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Short Summary Revision Notes for Selected Chapter */}
        <div className="mt-6 pt-5 border-t border-slate-200">
          <h3 className="text-sm font-bold text-slate-900 mb-3">
            {lang === 'en'
              ? 'Last-Minute 60-Second Revision Summary Notes'
              : 'अंतिम समय के लिए 60-सेकंड संक्षिप्त पुनरीक्षण नोट्स'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {activeMindMapChapter.shortSummaryNotes.map((note, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
              >
                <span className="font-mono font-bold text-slate-400 mr-2">0{idx + 1}.</span>
                {note[lang]}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorized Formula Vault with Flashcard Self-Test Mode */}
      <section className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {lang === 'en'
                ? 'Categorized Master Formula Vault & Flashcard Index'
                : 'अध्याय-वार संपूर्ण सूत्र कोष (Formula Vault) और फ्लैशकार्ड'}
            </h2>
            <p className="text-sm text-slate-600 mt-0.5">
              {lang === 'en'
                ? 'Filter by subject, search any theorem or shortcut, or enable Flashcard Recall Mode to test your memory.'
                : 'विषय के अनुसार फ़िल्टर करें, कोई भी प्रमेय खोजें, या अपनी स्मृति जांचने के लिए फ्लैशकार्ड मोड चालू करें।'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="search"
                aria-label="Search formulas and notes"
                placeholder={
                  lang === 'en' ? 'Search formula, topic, trick...' : 'सूत्र या अध्याय खोजें...'
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-lg border border-slate-300 bg-white text-xs text-slate-900 w-60"
              />
            </div>

            <button
              type="button"
              onClick={() => {
                setFlashcardHideExpressions((prev) => !prev);
                setRevealedFormulaIds([]);
              }}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold cursor-pointer whitespace-nowrap ${
                flashcardHideExpressions
                  ? 'bg-amber-600 text-white'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              {flashcardHideExpressions ? (
                <>
                  <Eye className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Exit Flashcard Mode' : 'फ्लैशकार्ड बंद करें'}</span>
                </>
              ) : (
                <>
                  <EyeOff className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Flashcard Recall Mode' : 'फ्लैशकार्ड मोड'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Subject Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl w-fit">
          {(
            [
              { id: 'all', en: 'All Subjects (1000M)', hi: 'सभी विषय (1000 अंक)' },
              { id: 'mathematics', en: 'Mathematics (600M)', hi: 'गणित (600 अंक)' },
              { id: 'reasoning', en: 'Logical Reasoning (240M)', hi: 'तार्किक क्षमता (240 अंक)' },
              { id: 'computer', en: 'Computer Awareness (120M)', hi: 'कंप्यूटर (120 अंक)' },
              { id: 'english', en: 'General English (40M)', hi: 'अंग्रेजी (40 अंक)' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedSubject(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                selectedSubject === tab.id
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab[lang]}
            </button>
          ))}
        </div>

        {/* Categorized Chapter Formula Cards */}
        <div className="space-y-6">
          {filteredChapters.map((ch) => {
            const isOfflineSaved = offlineChapterIds.includes(ch.id);
            return (
              <div
                key={ch.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
                  <div>
                    <div className="text-xs text-slate-500">
                      <span>{NIMCET_SECTIONS[ch.subjectId][lang === 'en' ? 'nameEn' : 'nameHi']}</span>
                      <span aria-hidden="true"> · </span>
                      <span>Tier {ch.priorityTier}</span>
                      <span aria-hidden="true"> · </span>
                      <span className="font-mono tabular-nums">{ch.expectedMarks} Marks</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                      {ch.number}. {ch.title[lang]}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => onToggleOfflineChapter(ch.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer whitespace-nowrap ${
                      isOfflineSaved
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <BookMarked className="w-3.5 h-3.5" />
                    <span>
                      {isOfflineSaved
                        ? lang === 'en'
                          ? 'Saved Offline'
                          : 'ऑफ़लाइन सुरक्षित'
                        : lang === 'en'
                        ? 'Save for Offline'
                        : 'ऑफ़लाइन सेव करें'}
                    </span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ch.formulas.map((f) => {
                    const isHidden =
                      flashcardHideExpressions && !revealedFormulaIds.includes(f.id);
                    return (
                      <div
                        key={f.id}
                        className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 flex flex-col justify-between space-y-3"
                      >
                        <div>
                          <div className="text-xs text-slate-500 font-medium">
                            {f.category[lang]}
                          </div>
                          <div className="text-sm font-bold text-slate-900 mt-0.5">
                            {f.title[lang]}
                          </div>

                          {isHidden ? (
                            <button
                              type="button"
                              onClick={() => toggleRevealFormula(f.id)}
                              className="mt-3 w-full py-3 px-4 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 cursor-pointer"
                            >
                              {lang === 'en'
                                ? 'Click to Reveal Formula & Verify Memory'
                                : 'सूत्र देखने के लिए यहाँ क्लिक करें'}
                            </button>
                          ) : (
                            <div className="mt-3 rounded-lg bg-slate-900 text-sky-300 px-3.5 py-2.5 font-mono text-xs font-semibold overflow-x-auto">
                              {f.expression}
                            </div>
                          )}

                          <p className="mt-2 text-xs text-slate-600">{f.variables[lang]}</p>
                        </div>

                        <div className="pt-2 border-t border-slate-200/80 text-xs text-slate-700">
                          <strong className="text-slate-900">
                            {lang === 'en' ? 'Exam Trick: ' : 'परीक्षा ट्रिक: '}
                          </strong>
                          {f.examTip[lang]}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
