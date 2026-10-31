import test from 'node:test';
import assert from 'node:assert/strict';
import {
  NIMCET_SECTIONS,
  predictNITFromScore,
  evaluateMockAttempt,
  generateHighYieldStudyPlan,
  classifyConicByPlaneAngle,
  compute3DVectorMetrics,
  convertNumberSystemBreakdown,
} from './nimcetEngine';
import { generate500QuestionsForChapter, getSimpleLaymanBreakdown } from './chapter500Generator';
import { ALL_CHAPTERS } from '../data/syllabusOther';
import { Chapter, QuestionItem } from '../types/nimcet';

test('NIMCET official marking scheme sums to 120 questions and 1000 marks', () => {
  const sections = Object.values(NIMCET_SECTIONS);
  const totalQ = sections.reduce((sum, s) => sum + s.totalQuestions, 0);
  const totalM = sections.reduce((sum, s) => sum + s.maxSectionMarks, 0);
  assert.equal(totalQ, 120);
  assert.equal(totalM, 1000);
  assert.equal(NIMCET_SECTIONS.mathematics.marksPerCorrect, 12);
  assert.equal(NIMCET_SECTIONS.mathematics.negativePerWrong, 3);
  assert.equal(NIMCET_SECTIONS.reasoning.marksPerCorrect, 6);
  assert.equal(NIMCET_SECTIONS.reasoning.negativePerWrong, 1.5);
});

test('evaluateMockAttempt computes accurate raw and normalized scores with negative marking', () => {
  const sampleQuestions: QuestionItem[] = [
    {
      id: 'q1',
      subjectId: 'mathematics',
      chapterId: 'math-vectors',
      yearTag: 'NIMCET 2024',
      difficulty: 'Moderate',
      question: { en: 'Q1', hi: 'Q1' },
      options: [{ en: 'A', hi: 'A' }, { en: 'B', hi: 'B' }, { en: 'C', hi: 'C' }, { en: 'D', hi: 'D' }],
      correctIndex: 1,
      solution: { en: 'Sol', hi: 'Sol' },
      shortcutTrick: { en: 'Trick', hi: 'Trick' },
    },
    {
      id: 'q2',
      subjectId: 'mathematics',
      chapterId: 'math-vectors',
      yearTag: 'NIMCET 2024',
      difficulty: 'Moderate',
      question: { en: 'Q2', hi: 'Q2' },
      options: [{ en: 'A', hi: 'A' }, { en: 'B', hi: 'B' }, { en: 'C', hi: 'C' }, { en: 'D', hi: 'D' }],
      correctIndex: 0,
      solution: { en: 'Sol', hi: 'Sol' },
      shortcutTrick: { en: 'Trick', hi: 'Trick' },
    },
  ];

  // 1 correct (+12), 1 wrong (-3) => raw 9 out of 24
  const result = evaluateMockAttempt(sampleQuestions, { q1: 1, q2: 2 }, 'Test Mock', 300);
  assert.equal(result.rawScore, 9);
  assert.equal(result.maxRawScore, 24);
  assert.equal(result.accuracyPercent, 50);
  assert.equal(result.totalNormalizedScore, 225); // (9/24) * 600 = 225
});

test('generateHighYieldStudyPlan prioritizes Tier-1 high-ROI chapters in 20-day crash mode', () => {
  const mockChapters: Chapter[] = [
    {
      id: 'c-tier3',
      subjectId: 'english',
      number: '01',
      title: { en: 'Vocab', hi: 'शब्दावली' },
      priorityTier: 3,
      expectedQuestions: 3,
      expectedMarks: 12,
      estimatedHours: 6,
      visualizerType: 'seating_2d',
      deepConcept: {
        intuition: { en: '', hi: '' },
        corePrinciples: [],
        realWorldScenario: {
          domain: { en: '', hi: '' },
          title: { en: '', hi: '' },
          howItWorks: { en: '', hi: '' },
          practicalExample: { en: '', hi: '' },
        },
      },
      shortSummaryNotes: [],
      mindMap: { rootTitle: { en: '', hi: '' }, indexTabs: [] },
      formulas: [],
    },
    {
      id: 'c-tier1',
      subjectId: 'mathematics',
      number: '02',
      title: { en: 'Probability & Statistics', hi: 'प्रायिकता और सांख्यिकी' },
      priorityTier: 1,
      expectedQuestions: 8,
      expectedMarks: 96,
      estimatedHours: 10,
      visualizerType: 'venn_prob_3d',
      deepConcept: {
        intuition: { en: '', hi: '' },
        corePrinciples: [],
        realWorldScenario: {
          domain: { en: '', hi: '' },
          title: { en: '', hi: '' },
          howItWorks: { en: '', hi: '' },
          practicalExample: { en: '', hi: '' },
        },
      },
      shortSummaryNotes: [],
      mindMap: { rootTitle: { en: '', hi: '' }, indexTabs: [] },
      formulas: [],
    },
  ];

  const plan = generateHighYieldStudyPlan(mockChapters, 20, 5, []);
  assert.equal(plan.prioritizedChapters[0].chapter.id, 'c-tier1');
  assert.ok(plan.strategyModeEn.includes('Crash Mode'));
  assert.ok(plan.projectedScoreOutOf1000 >= 320);
});

test('3D conic classifier, 3D vector product, and binary two-complement conversion work accurately', () => {
  const circle = classifyConicByPlaneAngle(0, 45);
  assert.ok(circle.conicTypeEn.includes('Circle'));
  const parabola = classifyConicByPlaneAngle(45, 45);
  assert.ok(parabola.conicTypeEn.includes('Parabola'));
  const hyperbola = classifyConicByPlaneAngle(65, 45);
  assert.ok(hyperbola.conicTypeEn.includes('Hyperbola'));

  const vec = compute3DVectorMetrics([1, 0, 0], [0, 1, 0]);
  assert.equal(vec.dotProduct, 0);
  assert.deepEqual(vec.crossProduct, [0, 0, 1]);
  assert.equal(vec.angleDeg, 90);
  assert.equal(vec.parallelogramArea, 1);

  const bin = convertNumberSystemBreakdown(42);
  assert.equal(bin.binary8Bit, '00101010');
  assert.equal(bin.hexadecimal, '2A');
  assert.equal(bin.octal, '52');

  const nit = predictNITFromScore(640);
  assert.ok(nit.college.includes('Tiruchirappalli'));
});

test('generate500QuestionsForChapter generates 500 questions (300 Easy + 100 Medium + 100 Hard) per chapter across all 30 chapters', () => {
  assert.equal(ALL_CHAPTERS.length, 30);
  const sampleChapter = ALL_CHAPTERS[0];
  const questions = generate500QuestionsForChapter(sampleChapter);
  assert.equal(questions.length, 500);

  const easyCount = questions.filter((q) => q.tierBucket === 'easy_300').length;
  const mediumCount = questions.filter((q) => q.tierBucket === 'medium_100').length;
  const hardCount = questions.filter((q) => q.tierBucket === 'hard_100').length;

  assert.equal(easyCount, 300);
  assert.equal(mediumCount, 100);
  assert.equal(hardCount, 100);

  // Verify every question has 4 options and a valid correctIndex
  for (const q of [questions[0], questions[299], questions[300], questions[399], questions[400], questions[499]]) {
    assert.equal(q.options.length, 4);
    assert.ok(q.correctIndex >= 0 && q.correctIndex <= 3);
    assert.ok(q.question.en.length > 10);
    assert.ok(q.question.hi.length > 10);
  }

  const layman = getSimpleLaymanBreakdown(sampleChapter);
  assert.ok(layman.everydayAnalogy.en.length > 20);
  assert.ok(layman.everydayAnalogy.hi.length > 20);
  assert.equal(layman.threeStepRecipe.length, 3);
});

