import { Chapter } from '../types/nimcet';
import { MATH_CHAPTERS_PART1 } from './syllabusMathPart1';
import { MATH_CHAPTERS_PART2 } from './syllabusMathPart2';

function enrichChapterSubtopics(ch: Chapter): Chapter {
  if (ch.subtopics && ch.subtopics.length >= 2) {
    return ch;
  }
  const generatedSubtopics = ch.deepConcept.corePrinciples.map((cp, idx) => ({
    id: `${ch.id}-sub-${idx + 1}`,
    title: cp.heading,
    detailedTheory: cp.explanation,
    keyRules: [
      ...(ch.shortSummaryNotes.slice(0, 2).length > 0
        ? ch.shortSummaryNotes.slice(0, 2)
        : [cp.explanation]),
      ...(ch.formulas[idx]
        ? [
            {
              en: `${ch.formulas[idx].title.en}: ${ch.formulas[idx].examTip.en}`,
              hi: `${ch.formulas[idx].title.hi}: ${ch.formulas[idx].examTip.hi}`,
            },
          ]
        : []),
    ],
    keyEquations: [
      cp.mathematicalForm,
      ...(ch.formulas[idx] ? [ch.formulas[idx].expression] : []),
    ],
  }));

  return {
    ...ch,
    subtopics: generatedSubtopics,
  };
}

export const MATH_CHAPTERS: Chapter[] = [
  ...MATH_CHAPTERS_PART1,
  ...MATH_CHAPTERS_PART2,
].map(enrichChapterSubtopics);
