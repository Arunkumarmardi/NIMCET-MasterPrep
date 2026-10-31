import { Chapter, QuestionItem, SubjectId, MockAttemptResult } from '../types/nimcet';

export const NIMCET_SECTIONS: Record<
  SubjectId,
  {
    id: SubjectId;
    nameEn: string;
    nameHi: string;
    totalQuestions: number;
    marksPerCorrect: number;
    negativePerWrong: number;
    maxSectionMarks: number;
    weightagePercent: number;
  }
> = {
  mathematics: {
    id: 'mathematics',
    nameEn: 'Mathematics',
    nameHi: 'गणित (Mathematics)',
    totalQuestions: 50,
    marksPerCorrect: 12,
    negativePerWrong: 3,
    maxSectionMarks: 600,
    weightagePercent: 60,
  },
  reasoning: {
    id: 'reasoning',
    nameEn: 'Analytical Ability & Logical Reasoning',
    nameHi: 'विश्लेषणात्मक क्षमता और तार्किक सोच',
    totalQuestions: 40,
    marksPerCorrect: 6,
    negativePerWrong: 1.5,
    maxSectionMarks: 240,
    weightagePercent: 24,
  },
  computer: {
    id: 'computer',
    nameEn: 'Computer Awareness',
    nameHi: 'कंप्यूटर जागरूकता (Computer Awareness)',
    totalQuestions: 20,
    marksPerCorrect: 6,
    negativePerWrong: 1.5,
    maxSectionMarks: 120,
    weightagePercent: 12,
  },
  english: {
    id: 'english',
    nameEn: 'General English',
    nameHi: 'सामान्य अंग्रेजी (General English)',
    totalQuestions: 10,
    marksPerCorrect: 4,
    negativePerWrong: 1,
    maxSectionMarks: 40,
    weightagePercent: 4,
  },
};

export function predictNITFromScore(scoreOutOf1000: number): {
  college: string;
  airRange: string;
  statusEn: string;
  statusHi: string;
} {
  if (scoreOutOf1000 >= 620) {
    return {
      college: 'NIT Tiruchirappalli (Trichy)',
      airRange: 'AIR 1 – 55',
      statusEn: 'Top Tier NIT Trichy Zone',
      statusHi: 'शीर्ष एनआईटी त्रिची ज़ोन',
    };
  }
  if (scoreOutOf1000 >= 575) {
    return {
      college: 'NIT Karnataka (Surathkal) / NIT Warangal',
      airRange: 'AIR 56 – 160',
      statusEn: 'Premier Top-3 NIT Zone',
      statusHi: 'शीर्ष-3 एनआईटी ज़ोन',
    };
  }
  if (scoreOutOf1000 >= 520) {
    return {
      college: 'MNNIT Allahabad / NIT Calicut',
      airRange: 'AIR 161 – 340',
      statusEn: 'Strong Core NIT Selection',
      statusHi: 'प्रमुख एनआईटी चयन ज़ोन',
    };
  }
  if (scoreOutOf1000 >= 460) {
    return {
      college: 'MANIT Bhopal / NIT Kurukshetra / NIT Jamshedpur',
      airRange: 'AIR 341 – 620',
      statusEn: 'Confirmed NIT Seat Zone',
      statusHi: 'सुरक्षित एनआईटी सीट ज़ोन',
    };
  }
  if (scoreOutOf1000 >= 390) {
    return {
      college: 'NIT Raipur / NIT Agartala / NIT Patna',
      airRange: 'AIR 621 – 950',
      statusEn: 'Borderline NIT Cutoff — Boost Math',
      statusHi: 'कटऑफ सीमा — गणित पर अधिक ध्यान दें',
    };
  }
  return {
    college: 'Target +180 Marks in Tier-1 Math & Reasoning',
    airRange: 'AIR > 1000',
    statusEn: 'Foundation Phase — Follow High-Yield Plan',
    statusHi: 'फाउंडेशन चरण — हाई-यील्ड प्लान अपनाएं',
  };
}

export function evaluateMockAttempt(
  questions: QuestionItem[],
  answers: Record<string, number | undefined>,
  testTitle: string,
  timeTakenSeconds: number
): MockAttemptResult {
  const subjects: SubjectId[] = ['mathematics', 'reasoning', 'computer', 'english'];
  let totalRaw = 0;
  let totalMaxRaw = 0;
  let totalNormalized = 0;
  let totalCorrect = 0;
  let totalAttempted = 0;

  const sectionScores = subjects.map((subjectId) => {
    const meta = NIMCET_SECTIONS[subjectId];
    const subQuestions = questions.filter((q) => q.subjectId === subjectId);
    let correct = 0;
    let wrong = 0;
    let unattempted = 0;

    for (const q of subQuestions) {
      const selected = answers[q.id];
      if (selected === undefined || selected === null) {
        unattempted++;
      } else if (selected === q.correctIndex) {
        correct++;
        totalCorrect++;
        totalAttempted++;
      } else {
        wrong++;
        totalAttempted++;
      }
    }

    const rawMarks = correct * meta.marksPerCorrect - wrong * meta.negativePerWrong;
    const maxRawMarks = subQuestions.length * meta.marksPerCorrect;
    const normalizedOutOfSectionMax =
      maxRawMarks > 0 ? Math.round((rawMarks / maxRawMarks) * meta.maxSectionMarks * 10) / 10 : 0;

    totalRaw += rawMarks;
    totalMaxRaw += maxRawMarks;
    totalNormalized += normalizedOutOfSectionMax;

    return {
      subjectId,
      correct,
      wrong,
      unattempted,
      rawMarks: Math.round(rawMarks * 100) / 100,
      maxRawMarks,
      normalizedOutOfSectionMax,
    };
  });

  const clampedNormalized = Math.max(0, Math.min(1000, Math.round(totalNormalized)));
  const accuracyPercent =
    totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;
  const nitPrediction = predictNITFromScore(clampedNormalized);

  return {
    id: `attempt-${Date.now()}`,
    testTitle,
    date: new Date().toISOString().split('T')[0],
    timeTakenSeconds,
    totalNormalizedScore: clampedNormalized,
    rawScore: Math.round(totalRaw * 100) / 100,
    maxRawScore: totalMaxRaw,
    accuracyPercent,
    predictedNit: `${nitPrediction.college} (${nitPrediction.airRange})`,
    sectionScores,
  };
}

export interface PrioritizedChapterPlan {
  chapter: Chapter;
  roiScore: number; // Marks per hour of study
  recommendedDays: number;
  dailyMinutes: number;
  urgencyLabelEn: string;
  urgencyLabelHi: string;
  includeInCoreSchedule: boolean;
}

export interface PersonalizedStudyPlanSummary {
  daysLeft: number;
  dailyHours: number;
  totalAvailableHours: number;
  strategyModeEn: string;
  strategyModeHi: string;
  strategyDescriptionEn: string;
  strategyDescriptionHi: string;
  projectedScoreOutOf1000: number;
  predictedNitTarget: string;
  prioritizedChapters: PrioritizedChapterPlan[];
}

export function generateHighYieldStudyPlan(
  chapters: Chapter[],
  daysLeft: number,
  dailyHours: number,
  completedChapterIds: string[]
): PersonalizedStudyPlanSummary {
  const safeDays = Math.max(1, Math.min(365, Math.round(daysLeft)));
  const safeHours = Math.max(1, Math.min(16, Number(dailyHours) || 4));
  const totalAvailableHours = safeDays * safeHours;

  let strategyModeEn = 'Comprehensive 1000-Mark Ranker Plan';
  let strategyModeHi = 'संपूर्ण 1000-अंक रैंकर अध्ययन योजना';
  let strategyDescriptionEn =
    'You have ample time to master Tier 1, Tier 2, and Tier 3 chapters with deep visual simulations, full PYQ drills, and weekly 2-hour mock tests.';
  let strategyDescriptionHi =
    'आपके पास टियर 1, टियर 2 और टियर 3 अध्यायों को 2D/3D विज़ुअल सिमुलेशन, पिछले वर्षों के प्रश्नपत्रों (PYQ) और साप्ताहिक मॉक टेस्ट के साथ पूरा करने के लिए पर्याप्त समय है।';

  if (safeDays <= 30) {
    strategyModeEn = 'High-Yield 80/20 Scoring Sprint (Crash Mode)';
    strategyModeHi = 'हाई-यील्ड 80/20 स्कोरिंग स्प्रिंट (क्रैश मोड)';
    strategyDescriptionEn =
      'Critical time window! Focus strictly on Tier-1 Do-or-Die chapters (Probability, Vectors, Matrices, Conics, Calculus, Puzzles, Binary & Boolean Logic) which yield ~720+ marks out of 1000.';
    strategyDescriptionHi =
      'कम समय शेष है! केवल टियर-1 हाई-यील्ड स्कोरिंग अध्यायों (प्रायिकता, सदिश, आव्यूह, शांकव, कलन, पहेलियाँ, बाइनरी और बूलियन लॉजिक) पर ध्यान केंद्रित करें जो 1000 में से ~720+ अंक दिलाते हैं।';
  } else if (safeDays <= 75) {
    strategyModeEn = 'Accelerated High-ROI NIT Target Plan';
    strategyModeHi = 'तीव्र हाई-आरओआई (High-ROI) एनआईटी टारगेट प्लान';
    strategyDescriptionEn =
      'Balanced execution: Lock in 100% of Tier-1 (600-mark Math & Reasoning core) in the first 60% of days, then sweep Tier-2 Computer Awareness and English.';
    strategyDescriptionHi =
      'संतुलित रणनीति: पहले 60% दिनों में टियर-1 (गणित और रीजनिंग कोर) को पक्का करें, फिर टियर-2 कंप्यूटर और अंग्रेजी को कवर करें।';
  }

  // Sort chapters by completion status (incomplete first), then priorityTier (1 -> 2 -> 3), then ROI (expectedMarks / estimatedHours)
  const sorted = [...chapters].sort((a, b) => {
    const aDone = completedChapterIds.includes(a.id) ? 1 : 0;
    const bDone = completedChapterIds.includes(b.id) ? 1 : 0;
    if (aDone !== bDone) return aDone - bDone;
    if (a.priorityTier !== b.priorityTier) return a.priorityTier - b.priorityTier;
    const roiA = a.expectedMarks / Math.max(1, a.estimatedHours);
    const roiB = b.expectedMarks / Math.max(1, b.estimatedHours);
    return roiB - roiA;
  });

  let cumulativeHours = 0;
  let achievableMarks = 0;

  const prioritizedChapters: PrioritizedChapterPlan[] = sorted.map((chapter) => {
    const isCompleted = completedChapterIds.includes(chapter.id);
    const roiScore = Math.round((chapter.expectedMarks / Math.max(1, chapter.estimatedHours)) * 10) / 10;

    const effectiveHoursNeeded = isCompleted
      ? Math.max(1.5, chapter.estimatedHours * 0.25) // quick revision
      : safeDays <= 30
      ? Math.max(2, chapter.estimatedHours * 0.65)
      : chapter.estimatedHours;

    const includeInCoreSchedule =
      isCompleted ||
      chapter.priorityTier === 1 ||
      (safeDays > 25 && chapter.priorityTier === 2) ||
      (safeDays > 60 && chapter.priorityTier === 3) ||
      cumulativeHours + effectiveHoursNeeded <= totalAvailableHours * 0.9;

    if (includeInCoreSchedule) {
      cumulativeHours += effectiveHoursNeeded;
      achievableMarks += isCompleted ? chapter.expectedMarks * 0.88 : chapter.expectedMarks * 0.78;
    } else {
      achievableMarks += chapter.expectedMarks * 0.35; // formula-only pass
    }

    const recommendedDays = Math.max(1, Math.round((effectiveHoursNeeded / safeHours) * 10) / 10);
    const dailyMinutes = Math.min(240, Math.max(25, Math.round((effectiveHoursNeeded / Math.max(1, safeDays)) * 600)));

    let urgencyLabelEn = 'Tier 1 · Do-or-Die High Scorer';
    let urgencyLabelHi = 'टियर 1 · सर्वाधिक स्कोरिंग अध्याय';
    if (chapter.priorityTier === 2) {
      urgencyLabelEn = 'Tier 2 · Fast Rank Booster';
      urgencyLabelHi = 'टियर 2 · तेज़ रैंक बूस्टर';
    } else if (chapter.priorityTier === 3) {
      urgencyLabelEn = 'Tier 3 · Selective Formula Revision';
      urgencyLabelHi = 'टियर 3 · सूत्र पुनरीक्षण (Formula Pass)';
    }

    return {
      chapter,
      roiScore,
      recommendedDays,
      dailyMinutes,
      urgencyLabelEn,
      urgencyLabelHi,
      includeInCoreSchedule,
    };
  });

  const timeFactor = Math.min(1.05, 0.62 + Math.min(120, safeDays) * 0.0032 + Math.min(8, safeHours) * 0.02);
  const projectedScoreOutOf1000 = Math.min(
    940,
    Math.max(320, Math.round(achievableMarks * timeFactor))
  );
  const nitPred = predictNITFromScore(projectedScoreOutOf1000);

  return {
    daysLeft: safeDays,
    dailyHours: safeHours,
    totalAvailableHours,
    strategyModeEn,
    strategyModeHi,
    strategyDescriptionEn,
    strategyDescriptionHi,
    projectedScoreOutOf1000,
    predictedNitTarget: `${nitPred.college} (${nitPred.airRange})`,
    prioritizedChapters,
  };
}

// Pure mathematical & CS helpers for interactive 2D/3D simulations
export function classifyConicByPlaneAngle(planeTiltDeg: number,coneSemiAngleDeg = 45): {
  conicTypeEn: string;
  conicTypeHi: string;
  eccentricity: string;
  standardEquation: string;
} {
  const tilt = Math.abs(planeTiltDeg);
  if (tilt < 2) {
    return {
      conicTypeEn: 'Circle (वृत्त)',
      conicTypeHi: 'वृत्त (Circle) — समतल अक्ष के लंबवत है',
      eccentricity: 'e = 0',
      standardEquation: 'x² + y² = r²',
    };
  }
  if (tilt < coneSemiAngleDeg - 2) {
    const e = Math.round(Math.sin((tilt * Math.PI) / 180) / Math.sin((coneSemiAngleDeg * Math.PI) / 180) * 100) / 100;
    return {
      conicTypeEn: 'Ellipse (दीर्घवृत्त)',
      conicTypeHi: 'दीर्घवृत्त (Ellipse) — समतल शंकु के एक भाग को काटता है',
      eccentricity: `e ≈ ${e.toFixed(2)} (0 < e < 1)`,
      standardEquation: 'x²/a² + y²/b² = 1',
    };
  }
  if (Math.abs(tilt - coneSemiAngleDeg) <= 2) {
    return {
      conicTypeEn: 'Parabola (परवलय)',
      conicTypeHi: 'परवलय (Parabola) — समतल शंकु की जनक रेखा के समांतर है',
      eccentricity: 'e = 1',
      standardEquation: 'y² = 4ax',
    };
  }
  const e = Math.round(Math.sin((tilt * Math.PI) / 180) / Math.sin((coneSemiAngleDeg * Math.PI) / 180) * 100) / 100;
  return {
    conicTypeEn: 'Hyperbola (अतिपरवलय)',
    conicTypeHi: 'अतिपरवलय (Hyperbola) — समतल दोनों शंकुओं (Nappes) को काटता है',
    eccentricity: `e ≈ ${Math.max(1.05, e).toFixed(2)} (e > 1)`,
    standardEquation: 'x²/a² - y²/b² = 1',
  };
}

export function compute3DVectorMetrics(
  a: [number, number, number],
  b: [number, number, number]
): {
  dotProduct: number;
  crossProduct: [number, number, number];
  magA: number;
  magB: number;
  angleDeg: number;
  parallelogramArea: number;
} {
  const dotProduct = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const crossProduct: [number, number, number] = [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
  const magA = Math.sqrt(a[0] ** 2 + a[1] ** 2 + a[2] ** 2);
  const magB = Math.sqrt(b[0] ** 2 + b[1] ** 2 + b[2] ** 2);
  const parallelogramArea = Math.sqrt(
    crossProduct[0] ** 2 + crossProduct[1] ** 2 + crossProduct[2] ** 2
  );
  const denom = magA * magB;
  const cosTheta = denom > 1e-6 ? Math.max(-1, Math.min(1, dotProduct / denom)) : 1;
  const angleDeg = Math.round(((Math.acos(cosTheta) * 180) / Math.PI) * 10) / 10;

  return {
    dotProduct: Math.round(dotProduct * 100) / 100,
    crossProduct: [
      Math.round(crossProduct[0] * 100) / 100,
      Math.round(crossProduct[1] * 100) / 100,
      Math.round(crossProduct[2] * 100) / 100,
    ],
    magA: Math.round(magA * 100) / 100,
    magB: Math.round(magB * 100) / 100,
    angleDeg,
    parallelogramArea: Math.round(parallelogramArea * 100) / 100,
  };
}

export function convertNumberSystemBreakdown(decimalValue: number): {
  decimal: number;
  binary8Bit: string;
  octal: string;
  hexadecimal: string;
  onesComplement8Bit: string;
  twosComplement8Bit: string;
} {
  const clamped = Math.max(-128, Math.min(255, Math.trunc(decimalValue) || 0));
  const absVal = Math.abs(clamped) & 0xff;
  const rawBin = absVal.toString(2).padStart(8, '0');
  const ones = rawBin
    .split('')
    .map((b) => (b === '1' ? '0' : '1'))
    .join('');
  const twosNum = ((~absVal + 1) >>> 0) & 0xff;
  const twos = twosNum.toString(2).padStart(8, '0');

  const unsignedRepresentation = clamped < 0 ? twosNum : absVal;

  return {
    decimal: clamped,
    binary8Bit: unsignedRepresentation.toString(2).padStart(8, '0'),
    octal: unsignedRepresentation.toString(8),
    hexadecimal: unsignedRepresentation.toString(16).toUpperCase(),
    onesComplement8Bit: ones,
    twosComplement8Bit: twos,
  };
}
