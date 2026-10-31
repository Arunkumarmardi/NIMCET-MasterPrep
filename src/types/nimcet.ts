export type Language = 'en' | 'hi';

export interface BilingualText {
  en: string;
  hi: string;
}

export type SubjectId = 'mathematics' | 'reasoning' | 'computer' | 'english';

export type VisualizerType =
  | 'conic_3d'
  | 'vector_3d'
  | 'venn_prob_3d'
  | 'calculus_2d'
  | 'logic_ieee_2d'
  | 'seating_2d';

export interface FormulaEntry {
  id: string;
  category: BilingualText;
  title: BilingualText;
  expression: string;
  variables: BilingualText;
  examTip: BilingualText;
}

export interface MindMapBranch {
  id: string;
  title: BilingualText;
  keyPoints: BilingualText[];
  subFormula?: string;
}

export interface SubtopicDetail {
  id: string;
  title: BilingualText;
  detailedTheory: BilingualText;
  keyRules: BilingualText[];
  keyEquations: string[];
}

export interface WorkedExample {
  id: string;
  difficulty: 'Foundation' | 'NIMCET Standard' | 'Ranker Tier';
  title: BilingualText;
  problem: BilingualText;
  stepByStep: BilingualText;
  shortcut: BilingualText;
}

export interface ExamTrap {
  id: string;
  trap: BilingualText;
  correction: BilingualText;
}

export interface Chapter {
  id: string;
  subjectId: SubjectId;
  number: string;
  title: BilingualText;
  priorityTier: 1 | 2 | 3; // 1 = Highest Yield Scoring Core, 2 = High ROI, 3 = Rank Booster
  expectedQuestions: number;
  expectedMarks: number;
  estimatedHours: number;
  visualizerType: VisualizerType;
  deepConcept: {
    intuition: BilingualText;
    corePrinciples: {
      heading: BilingualText;
      explanation: BilingualText;
      mathematicalForm: string;
    }[];
    realWorldScenario: {
      domain: BilingualText;
      title: BilingualText;
      howItWorks: BilingualText;
      practicalExample: BilingualText;
    };
  };
  subtopics?: SubtopicDetail[];
  workedExamples?: WorkedExample[];
  examTraps?: ExamTrap[];
  shortSummaryNotes: BilingualText[];
  mindMap: {
    rootTitle: BilingualText;
    indexTabs: {
      tabName: BilingualText;
      branches: MindMapBranch[];
    }[];
  };
  formulas: FormulaEntry[];
}

export interface QuestionItem {
  id: string;
  subjectId: SubjectId;
  chapterId: string;
  yearTag: string; // e.g. 'NIMCET 2024', 'NIMCET 2023', 'NIMCET 2022', 'High-Yield Mock'
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  question: BilingualText;
  options: BilingualText[];
  correctIndex: number;
  solution: BilingualText;
  shortcutTrick: BilingualText;
}

export interface DoubtReply {
  id: string;
  author: string;
  role: string;
  createdAt: string;
  content: string;
  upvotes: number;
}

export interface DoubtPost {
  id: string;
  subjectId: SubjectId;
  chapterId: string;
  title: string;
  body: string;
  author: string;
  authorRankTarget: string;
  createdAt: string;
  upvotes: number;
  solved: boolean;
  tags: string[];
  replies: DoubtReply[];
}

export interface StudyReminder {
  id: string;
  title: string;
  time: string; // HH:MM
  enabled: boolean;
  days: string[];
  targetSubject: SubjectId | 'all';
}

export interface MockAttemptResult {
  id: string;
  testTitle: string;
  date: string;
  timeTakenSeconds: number;
  totalNormalizedScore: number; // out of 1000
  rawScore: number;
  maxRawScore: number;
  accuracyPercent: number;
  predictedNit: string;
  sectionScores: {
    subjectId: SubjectId;
    correct: number;
    wrong: number;
    unattempted: number;
    rawMarks: number;
    maxRawMarks: number;
    normalizedOutOfSectionMax: number;
  }[];
}
