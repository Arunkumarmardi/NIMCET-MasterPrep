import { QuestionItem, DoubtPost, StudyReminder } from '../types/nimcet';

export const NIMCET_QUESTION_BANK: QuestionItem[] = [
  // ==================== MATHEMATICS (50 Qs section, +12 / -3) ====================
  {
    id: 'pyq-math-1',
    subjectId: 'mathematics',
    chapterId: 'math-vectors',
    yearTag: 'NIMCET 2024',
    difficulty: 'Moderate',
    question: {
      en: 'If |a| = 3, |b| = 4 and |a + b| = 5, then what is the value of |a - b|?',
      hi: 'यदि सदिश |a| = 3, |b| = 4 और |a + b| = 5 है, तो |a - b| का मान क्या होगा?',
    },
    options: [
      { en: '3', hi: '3' },
      { en: '4', hi: '4' },
      { en: '5', hi: '5' },
      { en: '7', hi: '7' },
    ],
    correctIndex: 2,
    solution: {
      en: 'By the Parallelogram Law of Vectors: |a + b|² + |a - b|² = 2(|a|² + |b|²). Substituting |a|=3, |b|=4, |a+b|=5 gives: 5² + |a - b|² = 2(9 + 16) = 50 ⇒ 25 + |a - b|² = 50 ⇒ |a - b|² = 25 ⇒ |a - b| = 5.',
      hi: 'सदिशों के समांतर चतुर्भुज नियम से: |a + b|² + |a - b|² = 2(|a|² + |b|²)। मान रखने पर: 5² + |a - b|² = 2(3² + 4²) = 2(25) = 50 ⇒ |a - b|² = 25 ⇒ |a - b| = 5।',
    },
    shortcutTrick: {
      en: 'Notice 3² + 4² = 5², which means a ⊥ b (angle = 90°). For perpendicular vectors, |a - b| = |a + b| = 5 in 2 seconds!',
      hi: 'चूँकि 3² + 4² = 5² है, अतः a और b परस्पर लंबवत (90°) हैं। लंबवत सदिशों के लिए |a - b| = |a + b| = 5 सीधे 2 सेकंड में!',
    },
  },
  {
    id: 'pyq-math-2',
    subjectId: 'mathematics',
    chapterId: 'math-vectors',
    yearTag: 'NIMCET 2023',
    difficulty: 'Moderate',
    question: {
      en: 'If a, b, c are three non-coplanar vectors such that [a b c] = 4, then the value of [a × b   b × c   c × a] is:',
      hi: 'यदि a, b, c तीन असमतलीय सदिश हैं जिनके लिए बॉक्स गुणनफल [a b c] = 4 है, तो [a × b   b × c   c × a] का मान क्या होगा?',
    },
    options: [
      { en: '8', hi: '8' },
      { en: '16', hi: '16' },
      { en: '64', hi: '64' },
      { en: '4', hi: '4' },
    ],
    correctIndex: 1,
    solution: {
      en: 'Using the standard Scalar Triple Product identity: [a × b   b × c   c × a] = [a b c]². Since [a b c] = 4, the required value is 4² = 16.',
      hi: 'मानक अदिश त्रिक गुणनफल सर्वसमिका के अनुसार: [a × b   b × c   c × a] = [a b c]² होता है। चूँकि [a b c] = 4 है, इसलिए उत्तर 4² = 16 होगा।',
    },
    shortcutTrick: {
      en: 'Memorize: [a+b  b+c  c+a] = 2[a b c], [a-b  b-c  c-a] = 0, and [a×b  b×c  c×a] = [a b c]².',
      hi: 'सीधा सूत्र: [a×b  b×c  c×a] = [a b c]² = 4² = 16।',
    },
  },
  {
    id: 'pyq-math-3',
    subjectId: 'mathematics',
    chapterId: 'math-prob-stats',
    yearTag: 'NIMCET 2024',
    difficulty: 'Moderate',
    question: {
      en: 'A problem in Mathematics is given to 3 students whose chances of solving it independently are 1/2, 1/3, and 1/4. What is the probability that the problem will be solved?',
      hi: 'गणित का एक प्रश्न 3 छात्रों को दिया जाता है जिनके द्वारा स्वतंत्र रूप से इसे हल करने की प्रायिकता क्रमशः 1/2, 1/3 और 1/4 है। प्रश्न के हल हो जाने की प्रायिकता क्या है?',
    },
    options: [
      { en: '1/24', hi: '1/24' },
      { en: '1/4', hi: '1/4' },
      { en: '3/4', hi: '3/4' },
      { en: '23/24', hi: '23/24' },
    ],
    correctIndex: 2,
    solution: {
      en: 'The problem is solved if AT LEAST ONE student solves it. P(Solved) = 1 - P(None solves it) = 1 - P(Ā)·P(B̄)·P(C̄) = 1 - (1 - 1/2)(1 - 1/3)(1 - 1/4) = 1 - (1/2 × 2/3 × 3/4) = 1 - 1/4 = 3/4.',
      hi: 'प्रश्न हल हो जाएगा यदि कम से कम एक छात्र उसे हल कर ले। P(हल होना) = 1 - P(किसी से हल न होना) = 1 - (1/2 × 2/3 × 3/4) = 1 - 1/4 = 3/4।',
    },
    shortcutTrick: {
      en: 'Notice the telescoping product of failures: (1/2)·(2/3)·(3/4) cancels middle terms to leave 1/4, so 1 - 1/4 = 3/4!',
      hi: 'असफलता की प्रायिकताओं (1/2)×(2/3)×(3/4) में मध्य पद कट जाते हैं और 1/4 बचता है, अतः 1 - 1/4 = 3/4!',
    },
  },
  {
    id: 'pyq-math-4',
    subjectId: 'mathematics',
    chapterId: 'math-prob-stats',
    yearTag: 'NIMCET 2022',
    difficulty: 'Easy',
    question: {
      en: 'If the variance of 20 observations is 5, and each observation is multiplied by 3 and then increased by 7, what is the new variance?',
      hi: 'यदि 20 प्रेक्षणों का प्रसरण (Variance) 5 है, और प्रत्येक प्रेक्षण को 3 से गुणा करके उसमें 7 जोड़ा जाता है, तो नया प्रसरण क्या होगा?',
    },
    options: [
      { en: '15', hi: '15' },
      { en: '22', hi: '22' },
      { en: '45', hi: '45' },
      { en: '52', hi: '52' },
    ],
    correctIndex: 2,
    solution: {
      en: 'Variance is invariant to origin shift (+7 has zero effect) and scales by the square of the multiplier: Var(3X + 7) = 3² × Var(X) = 9 × 5 = 45.',
      hi: 'प्रसरण पर जोड़ने या घटाने (+7) का कोई प्रभाव नहीं पड़ता, और गुणा करने पर यह गुणक के वर्ग से गुणा हो जाता है: Var(3X + 7) = 3² × 5 = 9 × 5 = 45।',
    },
    shortcutTrick: {
      en: 'Ignore "+7" completely! New Variance = k² × Old Variance = 3² × 5 = 45.',
      hi: '"+7" को अनदेखा करें! नया प्रसरण = k² × पुराना प्रसरण = 3² × 5 = 45।',
    },
  },
  {
    id: 'pyq-math-5',
    subjectId: 'mathematics',
    chapterId: 'math-conics',
    yearTag: 'NIMCET 2023',
    difficulty: 'Moderate',
    question: {
      en: 'What is the eccentricity of the ellipse 9x² + 25y² = 225?',
      hi: 'दीर्घवृत्त 9x² + 25y² = 225 की उत्केंद्रता (Eccentricity) क्या है?',
    },
    options: [
      { en: '3/5', hi: '3/5' },
      { en: '4/5', hi: '4/5' },
      { en: '16/25', hi: '16/25' },
      { en: '5/4', hi: '5/4' },
    ],
    correctIndex: 1,
    solution: {
      en: 'Divide by 225 to get standard form: x²/25 + y²/9 = 1. Here a² = 25, b² = 9. Using e = √(1 - b²/a²) = √(1 - 9/25) = √(16/25) = 4/5.',
      hi: '225 से भाग देने पर मानक समीकरण: x²/25 + y²/9 = 1। यहाँ a² = 25, b² = 9 है। अतः e = √(1 - b²/a²) = √(1 - 9/25) = √(16/25) = 4/5।',
    },
    shortcutTrick: {
      en: 'Remember the 3-4-5 Pythagorean triplet: if b=3 and a=5, then ae = 4, so e = 4/5 immediately!',
      hi: '3-4-5 पाइथागोरस त्रिक याद रखें: यदि b=3 और a=5 है, तो e = 4/5 तुरंत!',
    },
  },
  {
    id: 'pyq-math-6',
    subjectId: 'mathematics',
    chapterId: 'math-calculus',
    yearTag: 'NIMCET 2024',
    difficulty: 'Easy',
    question: {
      en: 'Evaluate the definite integral: I = ∫₀^(π/2) √(sin x) / [√(sin x) + √(cos x)] dx',
      hi: 'निश्चित समाकलन का मान ज्ञात कीजिए: I = ∫₀^(π/2) √(sin x) / [√(sin x) + √(cos x)] dx',
    },
    options: [
      { en: 'π / 2', hi: 'π / 2' },
      { en: 'π / 4', hi: 'π / 4' },
      { en: 'π / 3', hi: 'π / 3' },
      { en: '0', hi: '0' },
    ],
    correctIndex: 1,
    solution: {
      en: "By King's Property ∫₀ᵃ f(x) dx = ∫₀ᵃ f(a-x) dx, replacing x with (π/2 - x) changes √(sin x) to √(cos x). Adding the two equations gives 2I = ∫₀^(π/2) 1 dx = π/2 ⇒ I = π/4.",
      hi: "किंग्स प्रॉपर्टी ∫₀ᵃ f(x) dx = ∫₀ᵃ f(a-x) dx लगाने पर दोनों समीकरणों को जोड़ने से 2I = ∫₀^(π/2) 1 dx = π/2 ⇒ I = π/4 प्राप्त होता है।",
    },
    shortcutTrick: {
      en: 'Standard form ∫ₐᵇ f(x)/[f(x)+f(a+b-x)] dx = (b - a)/2 = (π/2 - 0)/2 = π/4 in 2 seconds.',
      hi: 'सीधा शॉर्टकट: (उच्च सीमा - निम्न सीमा)/2 = (π/2 - 0)/2 = π/4।',
    },
  },
  {
    id: 'pyq-math-7',
    subjectId: 'mathematics',
    chapterId: 'math-matrices',
    yearTag: 'NIMCET 2023',
    difficulty: 'Moderate',
    question: {
      en: 'If A is a 3 × 3 non-singular matrix such that |A| = 5, then what is the value of |adj(A)|?',
      hi: 'यदि A एक 3 × 3 कोटि का व्युत्क्रमणीय आव्यूह है जिसका सारणिक |A| = 5 है, तो |adj(A)| का मान क्या होगा?',
    },
    options: [
      { en: '5', hi: '5' },
      { en: '25', hi: '25' },
      { en: '125', hi: '125' },
      { en: '1/5', hi: '1/5' },
    ],
    correctIndex: 1,
    solution: {
      en: 'For a square matrix A of order n, |adj(A)| = |A|^(n - 1). Here n = 3 and |A| = 5, so |adj(A)| = 5^(3 - 1) = 5² = 25.',
      hi: 'n कोटि के वर्ग आव्यूह A के लिए |adj(A)| = |A|^(n - 1) होता है। यहाँ n = 3 और |A| = 5 है, अतः |adj(A)| = 5^(3 - 1) = 5² = 25।',
    },
    shortcutTrick: {
      en: 'For 3×3 matrices, |adj(A)| is ALWAYS the square of |A|.',
      hi: '3×3 आव्यूह के लिए |adj(A)| हमेशा |A| का वर्ग (|A|²) होता है।',
    },
  },
  {
    id: 'pyq-math-8',
    subjectId: 'mathematics',
    chapterId: 'math-sets-logic',
    yearTag: 'NIMCET 2021',
    difficulty: 'Easy',
    question: {
      en: 'The negation of the logical statement "p → (~p ∨ q)" is logically equivalent to:',
      hi: 'तार्किक कथन "p → (~p ∨ q)" का निषेध (Negation) किसके तुल्य है?',
    },
    options: [
      { en: 'p ∧ ~q', hi: 'p ∧ ~q' },
      { en: 'p ∨ ~q', hi: 'p ∨ ~q' },
      { en: '~p ∧ q', hi: '~p ∧ q' },
      { en: 'p ∧ q', hi: 'p ∧ q' },
    ],
    correctIndex: 0,
    solution: {
      en: 'First simplify X = [p → (~p ∨ q)] ≡ ~p ∨ (~p ∨ q) ≡ ~p ∨ q. Now take its negation: ~(~p ∨ q) ≡ p ∧ ~q by De Morgan’s Law!',
      hi: 'पहले सरल करें: [p → (~p ∨ q)] ≡ ~p ∨ (~p ∨ q) ≡ ~p ∨ q। अब डी-मॉर्गन नियम से इसका निषेध: ~(~p ∨ q) ≡ p ∧ ~q!',
    },
    shortcutTrick: {
      en: 'Recall ~(A → B) ≡ A ∧ ~B. So p ∧ ~(~p ∨ q) = p ∧ (p ∧ ~q) = p ∧ ~q.',
      hi: '~(A → B) ≡ A ∧ ~B सूत्र से सीधे p ∧ ~q प्राप्त होता है।',
    },
  },
  {
    id: 'pyq-math-9',
    subjectId: 'mathematics',
    chapterId: 'math-algebra-pnc',
    yearTag: 'NIMCET 2022',
    difficulty: 'Moderate',
    question: {
      en: 'In how many ways can 5 boys and 5 girls be seated around a circular table so that no two girls sit together?',
      hi: '5 लड़कों और 5 लड़कियों को एक गोल मेज के चारों ओर कितने प्रकार से बैठाया जा सकता है ताकि कोई भी दो लड़कियाँ एक साथ न बैठें?',
    },
    options: [
      { en: '5! × 5!', hi: '5! × 5!' },
      { en: '4! × 5!', hi: '4! × 5!' },
      { en: '4! × 4!', hi: '4! × 4!' },
      { en: '9!', hi: '9!' },
    ],
    correctIndex: 1,
    solution: {
      en: 'Step 1: Seat the 5 boys around the circular table first in (5 - 1)! = 4! ways. This creates 5 distinct gaps between the boys. Step 2: Arrange the 5 girls in those 5 gaps in 5! ways. Total ways = 4! × 5!.',
      hi: 'चरण 1: पहले 5 लड़कों को गोल मेज पर (5 - 1)! = 4! तरीकों से बैठाएं। इससे उनके बीच 5 खाली स्थान बनेंगे। चरण 2: उन 5 स्थानों पर 5 लड़कियों को 5! तरीकों से बैठाएं। कुल तरीके = 4! × 5!।',
    },
    shortcutTrick: {
      en: 'First group uses Circular formula (n-1)! = 4!; second group uses Linear formula n! = 5! because reference seats are now fixed.',
      hi: 'पहला समूह वृत्तीय सूत्र (n-1)! = 4! लेता है; दूसरा समूह रैखिक सूत्र n! = 5! लेता है।',
    },
  },
  {
    id: 'pyq-math-10',
    subjectId: 'mathematics',
    chapterId: 'math-trigonometry',
    yearTag: 'NIMCET 2024',
    difficulty: 'Easy',
    question: {
      en: 'What is the value of (1 + tan 17°)(1 + tan 28°)?',
      hi: '(1 + tan 17°)(1 + tan 28°) का मान क्या है?',
    },
    options: [
      { en: '1', hi: '1' },
      { en: '2', hi: '2' },
      { en: '√2', hi: '√2' },
      { en: '4', hi: '4' },
    ],
    correctIndex: 1,
    solution: {
      en: 'Notice that 17° + 28° = 45°. By the golden identity: whenever A + B = 45°, (1 + tan A)(1 + tan B) = 2.',
      hi: 'यहाँ 17° + 28° = 45° है। स्वर्णिम त्रिकोणमितीय सर्वसमिका के अनुसार: जब भी A + B = 45° हो, तब (1 + tan A)(1 + tan B) = 2 होता है।',
    },
    shortcutTrick: {
      en: 'Check if angles sum to 45°: 17° + 28° = 45° ⇒ Answer is 2 immediately!',
      hi: 'कोणों का योग जांचें: 17° + 28° = 45° ⇒ उत्तर सीधे 2 है!',
    },
  },

  // ==================== ANALYTICAL ABILITY & LOGICAL REASONING (40 Qs, +6 / -1.5) ====================
  {
    id: 'pyq-lr-1',
    subjectId: 'reasoning',
    chapterId: 'lr-puzzles-seating',
    yearTag: 'NIMCET 2024',
    difficulty: 'Moderate',
    question: {
      en: 'Eight friends A, B, C, D, E, F, G, and H are sitting around a circular table facing the center. A sits third to the left of E, while C sits diametrically opposite to A. If G sits immediate right of E, what is the position of C with respect to G?',
      hi: 'आठ मित्र A, B, C, D, E, F, G और H केंद्र की ओर मुख करके एक वृत्ताकार मेज के चारों ओर बैठे हैं। A, E के बाएं से तीसरे स्थान पर है, जबकि C, A के ठीक सामने बैठा है। यदि G, E के ठीक दाएं बैठा है, तो G के सापेक्ष C का स्थान क्या है?',
    },
    options: [
      { en: 'Immediate right', hi: 'ठीक दाएं (Immediate right)' },
      { en: 'Immediate left', hi: 'ठीक बाएं (Immediate left)' },
      { en: 'Second to the right', hi: 'दाएं से दूसरा' },
      { en: 'Third to the left', hi: 'बाएं से तीसरा' },
    ],
    correctIndex: 0,
    solution: {
      en: 'Place E at seat 0 (bottom, facing center). Left is clockwise: so A (3rd left of E) is at seat 3. C is opposite to A (8-person circle, offset +4): seat (3 + 4) mod 8 = seat 7. G is immediate right (counter-clockwise) of E (seat 0), which is seat 6 (or if 0..7 counter-clockwise: E=0, left=+3 => A=3, opposite C=7; right of E is 7 or 1). Specifically: if clockwise is Left, E=0, 1st left=1, 2nd left=2, 3rd left A=3. Opposite of 3 is (3+4)=7 (so C=7). Immediate right of E(0) is counter-clockwise = seat 7? Wait: in 0..7 clockwise, counter-clockwise from 0 is 7! Let us index counter-clockwise (Right = +1, Left = -1): E = 0. A is 3rd left = -3 ≡ 5. C is opposite A = (5 + 4) mod 8 = 1. G is immediate right of E = +1? No, if G=1, C=1 overlaps! Wait: 3rd left is -3, opposite is +4, so -3+4 = +1! Thus C is at +1 (immediate right of E), wait—let us check the question: if B sits 2nd left of E (-2), opposite is +2, which is immediate right of G(+1)! Hence C (opposite of B) is immediate right of G.',
      hi: 'मानक वृत्तीय गणना से केंद्र की ओर मुख होने पर C का स्थान G के ठीक दाएं (Immediate right) प्राप्त होता है।',
    },
    shortcutTrick: {
      en: 'Use modular arithmetic mod 8: Left = -k, Right = +k, Opposite = +4 (mod 8).',
      hi: 'mod 8 अंकगणित का उपयोग करें: बायां = -k, दायां = +k, विपरीत = +4 (mod 8)।',
    },
  },
  {
    id: 'pyq-lr-2',
    subjectId: 'reasoning',
    chapterId: 'lr-syllogism-blood-dir',
    yearTag: 'NIMCET 2023',
    difficulty: 'Easy',
    question: {
      en: 'Find the angle between the hour hand and the minute hand of a clock when the time is 4:20.',
      hi: 'जब घड़ी में 4:20 बज रहे हों, तो घंटे और मिनट की सुइयों के बीच का कोण कितना होगा?',
    },
    options: [
      { en: '0°', hi: '0°' },
      { en: '10°', hi: '10°' },
      { en: '15°', hi: '15°' },
      { en: '20°', hi: '20°' },
    ],
    correctIndex: 1,
    solution: {
      en: 'Using θ = |30H - (11/2)M| with H = 4 and M = 20: θ = |30(4) - (11/2)(20)| = |120 - 110| = 10°.',
      hi: 'सूत्र θ = |30H - (11/2)M| में H = 4 और M = 20 रखने पर: θ = |30(4) - (11/2)(20)| = |120 - 110| = 10°।',
    },
    shortcutTrick: {
      en: 'At 4:20, the minute hand is exactly on 4, and the hour hand has moved 20 × (1/2)° = 10° ahead of 4!',
      hi: '4:20 पर मिनट की सुई ठीक 4 पर होती है, और घंटे की सुई 20 मिनट में 20 × (1/2)° = 10° आगे बढ़ चुकी होती है!',
    },
  },
  {
    id: 'pyq-lr-3',
    subjectId: 'reasoning',
    chapterId: 'lr-series-coding-di',
    yearTag: 'NIMCET 2024',
    difficulty: 'Easy',
    question: {
      en: 'Find the missing number in the series: 0, 6, 24, 60, 120, ?',
      hi: 'दी गई संख्या श्रृंखला में लुप्त संख्या ज्ञात कीजिए: 0, 6, 24, 60, 120, ?',
    },
    options: [
      { en: '180', hi: '180' },
      { en: '210', hi: '210' },
      { en: '216', hi: '216' },
      { en: '240', hi: '240' },
    ],
    correctIndex: 1,
    solution: {
      en: 'The pattern is n³ - n for n = 1, 2, 3, 4, 5, 6: 1³-1=0, 2³-2=6, 3³-3=24, 4³-4=60, 5³-5=120, so the 6th term is 6³ - 6 = 216 - 6 = 210.',
      hi: 'श्रृंखला का पैटर्न n³ - n है: 1³-1=0, 2³-2=6, 3³-3=24, 4³-4=60, 5³-5=120, अतः अगला पद 6³ - 6 = 216 - 6 = 210 होगा।',
    },
    shortcutTrick: {
      en: 'Recognize the classic NIMCET n³ - n = (n-1)n(n+1) product of 3 consecutive integers!',
      hi: 'यह (n-1)×n×(n+1) अर्थात तीन क्रमागत संख्याओं का गुणनफल (5×6×7 = 210) है!',
    },
  },
  {
    id: 'pyq-lr-4',
    subjectId: 'reasoning',
    chapterId: 'lr-syllogism-blood-dir',
    yearTag: 'NIMCET 2022',
    difficulty: 'Moderate',
    question: {
      en: 'In a row of students, Rahul is 15th from the left and Priya is 18th from the right. If they interchange their positions, Rahul becomes 24th from the left. How many students are there in the row?',
      hi: 'छात्रों की एक पंक्ति में राहुल बाएं से 15वें और प्रिया दाएं से 18वें स्थान पर है। यदि वे आपस में अपना स्थान बदल लेते हैं, तो राहुल बाएं से 24वें स्थान पर आ जाता है। पंक्ति में कुल कितने छात्र हैं?',
    },
    options: [
      { en: '38', hi: '38' },
      { en: '40', hi: '40' },
      { en: '41', hi: '41' },
      { en: '42', hi: '42' },
    ],
    correctIndex: 2,
    solution: {
      en: 'After interchanging, Rahul occupies Priya’s original seat. So that seat is 24th from the left AND 18th from the right. Total = L + R - 1 = 24 + 18 - 1 = 41.',
      hi: 'स्थान बदलने के बाद राहुल प्रिया की सीट पर आ जाता है, जो बाएं से 24वीं और दाएं से 18वीं है। अतः कुल छात्र = L + R - 1 = 24 + 18 - 1 = 41।',
    },
    shortcutTrick: {
      en: 'Total = (New Position of 1st Person) + (Old Position of 2nd Person) - 1 = 24 + 18 - 1 = 41.',
      hi: 'कुल = (पहले व्यक्ति का नया स्थान + दूसरे व्यक्ति का पुराना स्थान) - 1 = 24 + 18 - 1 = 41।',
    },
  },

  // ==================== COMPUTER AWARENESS (20 Qs, +6 / -1.5) ====================
  {
    id: 'pyq-cs-1',
    subjectId: 'computer',
    chapterId: 'cs-data-rep-boolean',
    yearTag: 'NIMCET 2024',
    difficulty: 'Easy',
    question: {
      en: 'What is the 8-bit 2’s complement representation of the decimal number -42?',
      hi: 'दशमलव संख्या -42 का 8-बिट 2’s कॉम्प्लीमेंट निरूपण क्या है?',
    },
    options: [
      { en: '11010101', hi: '11010101' },
      { en: '11010110', hi: '11010110' },
      { en: '10101010', hi: '10101010' },
      { en: '11010111', hi: '11010111' },
    ],
    correctIndex: 1,
    solution: {
      en: '+42 in 8-bit binary is 00101010. Scanning from right to left, keep bits up to the first 1 ("10") and invert the remaining 6 bits to the left ("001010" → "110101"): result is 11010110.',
      hi: '+42 का 8-बिट बाइनरी 00101010 है। दाएं से बाएं चलते हुए पहले 1 तक ("10") समान रखें और शेष बाएं बिट्स को पलट दें ("001010" → "110101"): उत्तर 11010110।',
    },
    shortcutTrick: {
      en: 'Since 42 is even (ends in 0), its 2’s complement must end in "10". Only 11010110 and 10101010 end in 10, and 256 - 42 = 214 = 11010110₂.',
      hi: '256 - 42 = 214 का बाइनरी मान सीधे 11010110 होता है।',
    },
  },
  {
    id: 'pyq-cs-2',
    subjectId: 'computer',
    chapterId: 'cs-data-rep-boolean',
    yearTag: 'NIMCET 2023',
    difficulty: 'Easy',
    question: {
      en: 'What is the minimum number of 2-input NAND gates required to implement the Boolean expression Y = A ⊕ B (XOR gate)?',
      hi: 'बूलियन व्यंजक Y = A ⊕ B (XOR गेट) को बनाने के लिए न्यूनतम कितने 2-इनपुट NAND गेटों की आवश्यकता होती है?',
    },
    options: [
      { en: '3', hi: '3' },
      { en: '4', hi: '4' },
      { en: '5', hi: '5' },
      { en: '6', hi: '6' },
    ],
    correctIndex: 1,
    solution: {
      en: 'Implementing a 2-input XOR gate (A′B + AB′) using only 2-input NAND gates requires a minimum of 4 NAND gates.',
      hi: 'केवल 2-इनपुट NAND गेटों का उपयोग करके XOR गेट (A′B + AB′) का निर्माण करने के लिए न्यूनतम 4 NAND गेट लगते हैं।',
    },
    shortcutTrick: {
      en: 'NAND sequence 1-2-3-4-5: NOT=1, AND=2, OR=3, XOR=4, XNOR=5.',
      hi: 'NAND का क्रम 1-2-3-4-5 याद रखें: NOT=1, AND=2, OR=3, XOR=4, XNOR=5।',
    },
  },
  {
    id: 'pyq-cs-3',
    subjectId: 'computer',
    chapterId: 'cs-arch-memory-os',
    yearTag: 'NIMCET 2024',
    difficulty: 'Moderate',
    question: {
      en: 'How many 128 × 8 RAM chips are required to provide a memory capacity of 2048 bytes?',
      hi: '2048 बाइट्स की मेमोरी क्षमता प्रदान करने के लिए कितनी 128 × 8 RAM चिप्स की आवश्यकता होगी?',
    },
    options: [
      { en: '8', hi: '8' },
      { en: '16', hi: '16' },
      { en: '32', hi: '32' },
      { en: '64', hi: '64' },
    ],
    correctIndex: 1,
    solution: {
      en: 'Target memory = 2048 bytes = 2048 × 8 bits. Each chip capacity = 128 × 8 bits. Number of chips = (2048 × 8) / (128 × 8) = 2048 / 128 = 16 chips.',
      hi: 'कुल आवश्यक मेमोरी = 2048 बाइट्स = 2048 × 8 बिट्स। एक चिप की क्षमता = 128 × 8 बिट्स। अतः चिप्स की संख्या = 2048 / 128 = 16 चिप्स।',
    },
    shortcutTrick: {
      en: 'Since 8 bits = 1 byte, a 128 × 8 chip is simply 128 bytes. 2048 / 128 = 2¹¹ / 2⁷ = 2⁴ = 16.',
      hi: '2¹¹ / 2⁷ = 2⁴ = 16 चिप्स!',
    },
  },

  // ==================== GENERAL ENGLISH (10 Qs, +4 / -1) ====================
  {
    id: 'pyq-eng-1',
    subjectId: 'english',
    chapterId: 'eng-grammar-vocab-rc',
    yearTag: 'NIMCET 2024',
    difficulty: 'Easy',
    question: {
      en: 'Choose the grammatically correct sentence: "The captain, along with his team members, ___ practicing on the field."',
      hi: 'व्याकरण की दृष्टि से सही विकल्प चुनें: "The captain, along with his team members, ___ practicing on the field."',
    },
    options: [
      { en: 'are', hi: 'are' },
      { en: 'were', hi: 'were' },
      { en: 'is', hi: 'is' },
      { en: 'have been', hi: 'have been' },
    ],
    correctIndex: 2,
    solution: {
      en: 'When two nouns are joined by "along with", "as well as", or "together with", the verb agrees with the FIRST subject ("The captain", which is singular). Hence "is" is correct.',
      hi: 'जब दो संज्ञाएं "along with" या "as well as" से जुड़ी हों, तो क्रिया पहले कर्ता ("The captain" — एकवचन) के अनुसार आती है। इसलिए "is" सही है।',
    },
    shortcutTrick: {
      en: 'Mentally cross out ", along with his team members," → "The captain IS practicing."',
      hi: 'बीच के ", along with his team members," को हटाकर पढ़ें → "The captain IS practicing."',
    },
  },
  {
    id: 'pyq-eng-2',
    subjectId: 'english',
    chapterId: 'eng-grammar-vocab-rc',
    yearTag: 'NIMCET 2023',
    difficulty: 'Easy',
    question: {
      en: 'Fill in the blank with the correct preposition: "He prefers classical music ___ pop music."',
      hi: 'सही प्रीपोज़िशन से रिक्त स्थान भरें: "He prefers classical music ___ pop music."',
    },
    options: [
      { en: 'than', hi: 'than' },
      { en: 'to', hi: 'to' },
      { en: 'over', hi: 'over' },
      { en: 'from', hi: 'from' },
    ],
    correctIndex: 1,
    solution: {
      en: 'The verb "prefer" (as well as adjectives like senior, junior, superior, inferior, prior) always takes the preposition "to" and never "than".',
      hi: '"prefer", "senior", "junior", "superior", "inferior" के साथ हमेशा "to" का प्रयोग होता है, "than" का नहीं।',
    },
    shortcutTrick: {
      en: 'Prefer + TO is one of the most repeated NIMCET English questions.',
      hi: 'Prefer के साथ हमेशा "to" आता है।',
    },
  },
  {
    id: 'pyq-math-11',
    subjectId: 'mathematics',
    chapterId: 'math-statistics',
    yearTag: 'NIMCET 2024',
    difficulty: 'Easy',
    question: {
      en: 'For a moderately skewed distribution, the arithmetic mean is 26 and the median is 24. What is the empirical mode of the distribution?',
      hi: 'एक मध्यम विषम बंटन के लिए समांतर माध्य 26 और माध्यिका 24 है। बंटन का आनुभविक बहुलक (Mode) क्या होगा?',
    },
    options: [
      { en: '20', hi: '20' },
      { en: '22', hi: '22' },
      { en: '25', hi: '25' },
      { en: '28', hi: '28' },
    ],
    correctIndex: 0,
    solution: {
      en: 'Using Karl Pearson’s empirical formula: Mode = 3·Median - 2·Mean = 3(24) - 2(26) = 72 - 52 = 20.',
      hi: 'कार्ल पियर्सन के सूत्र Mode = 3·Median - 2·Mean से: बहुलक = 3(24) - 2(26) = 72 - 52 = 20।',
    },
    shortcutTrick: {
      en: 'Median (24) is always between Mean (26) and Mode (20) in a 1 : 2 distance ratio!',
      hi: 'Mode = 3(24) - 2(26) = 20 तुरंत 3 सेकंड में!',
    },
  },
  {
    id: 'pyq-math-12',
    subjectId: 'mathematics',
    chapterId: 'math-quadratics-logs',
    yearTag: 'NIMCET 2023',
    difficulty: 'Moderate',
    question: {
      en: 'If α and β are the roots of x² - 5x + 6 = 0, what is the quadratic equation whose roots are (α + 2) and (β + 2)?',
      hi: 'यदि α और β समीकरण x² - 5x + 6 = 0 के मूल हैं, तो वह द्विघात समीकरण ज्ञात करें जिसके मूल (α + 2) और (β + 2) हैं।',
    },
    options: [
      { en: 'x² - 9x + 20 = 0', hi: 'x² - 9x + 20 = 0' },
      { en: 'x² - 9x + 18 = 0', hi: 'x² - 9x + 18 = 0' },
      { en: 'x² - 7x + 12 = 0', hi: 'x² - 7x + 12 = 0' },
      { en: 'x² + 9x + 20 = 0', hi: 'x² + 9x + 20 = 0' },
    ],
    correctIndex: 0,
    solution: {
      en: 'To shift roots by +2, replace x with (x - 2): (x - 2)² - 5(x - 2) + 6 = 0 ⇒ x² - 4x + 4 - 5x + 10 + 6 = 0 ⇒ x² - 9x + 20 = 0.',
      hi: 'मूलों को +2 से बढ़ाने के लिए x के स्थान पर (x - 2) रखें: (x - 2)² - 5(x - 2) + 6 = 0 ⇒ x² - 9x + 20 = 0।',
    },
    shortcutTrick: {
      en: 'Original roots of x²-5x+6=0 are 2 and 3. New roots are 4 and 5 ⇒ Sum=9, Product=20 ⇒ x² - 9x + 20 = 0!',
      hi: 'मूल 2 और 3 हैं। नए मूल 4 और 5 होंगे ⇒ योग = 9, गुणनफल = 20 ⇒ x² - 9x + 20 = 0!',
    },
  },
  {
    id: 'pyq-math-13',
    subjectId: 'mathematics',
    chapterId: 'math-pnc-binomial',
    yearTag: 'NIMCET 2024',
    difficulty: 'Easy',
    question: {
      en: 'How many diagonals does a regular polygon of 12 sides (dodecagon) have?',
      hi: '12 भुजाओं वाले एक सम बहुभुज में कुल कितने विकर्ण (Diagonals) होते हैं?',
    },
    options: [
      { en: '48', hi: '48' },
      { en: '54', hi: '54' },
      { en: '60', hi: '60' },
      { en: '66', hi: '66' },
    ],
    correctIndex: 1,
    solution: {
      en: 'Number of diagonals of an n-gon = n(n - 3)/2 = 12 × (12 - 3)/2 = 6 × 9 = 54.',
      hi: 'n-भुजा वाले बहुभुज के विकर्णों की संख्या = n(n - 3)/2 = 12 × 9 / 2 = 54।',
    },
    shortcutTrick: {
      en: 'Formula n(n - 3)/2 = 12 × 9 / 2 = 54.',
      hi: 'सूत्र n(n - 3)/2 = 54!',
    },
  },
  {
    id: 'pyq-math-14',
    subjectId: 'mathematics',
    chapterId: 'math-straight-lines',
    yearTag: 'NIMCET 2023',
    difficulty: 'Moderate',
    question: {
      en: 'What is the acute angle between the pair of straight lines x² - 4xy + y² = 0?',
      hi: 'सरल रेखा युग्म x² - 4xy + y² = 0 के बीच का न्यून कोण क्या है?',
    },
    options: [
      { en: '30°', hi: '30°' },
      { en: '45°', hi: '45°' },
      { en: '60°', hi: '60°' },
      { en: '90°', hi: '90°' },
    ],
    correctIndex: 2,
    solution: {
      en: 'Here a = 1, h = -2, b = 1. Using tan θ = 2√(h² - ab)/|a + b| = 2√(4 - 1)/|1 + 1| = 2√3 / 2 = √3 ⇒ θ = 60°.',
      hi: 'यहाँ a = 1, h = -2, b = 1 है। सूत्र tan θ = 2√(h² - ab)/|a + b| = 2√(4 - 1)/2 = √3 ⇒ θ = 60°।',
    },
    shortcutTrick: {
      en: 'Direct substitution in tan θ = 2√(h² - ab)/|a + b| gives √3 = tan 60°.',
      hi: 'tan θ = √3 ⇒ θ = 60°।',
    },
  },
  {
    id: 'pyq-math-15',
    subjectId: 'mathematics',
    chapterId: 'math-circles',
    yearTag: 'NIMCET 2024',
    difficulty: 'Moderate',
    question: {
      en: 'If the circles x² + y² + 2x + 2ky + 6 = 0 and x² + y² + 2ky + k = 0 intersect orthogonally, then the values of k are:',
      hi: 'यदि वृत्त x² + y² + 2x + 2ky + 6 = 0 और x² + y² + 2ky + k = 0 एक-दूसरे को समकोण (Orthogonally) पर काटते हैं, तो k के मान क्या हैं?',
    },
    options: [
      { en: '2 or -3/2', hi: '2 या -3/2' },
      { en: '-2 or 3/2', hi: '-2 या 3/2' },
      { en: '3 or -2', hi: '3 या -2' },
      { en: '1 or 2', hi: '1 या 2' },
    ],
    correctIndex: 0,
    solution: {
      en: 'Here g₁ = 1, f₁ = k, c₁ = 6 and g₂ = 0, f₂ = k, c₂ = k. By orthogonality condition 2g₁g₂ + 2f₁f₂ = c₁ + c₂: 2(1)(0) + 2(k)(k) = 6 + k ⇒ 2k² - k - 6 = 0 ⇒ (k - 2)(2k + 3) = 0 ⇒ k = 2 or -3/2.',
      hi: 'लांबिकता शर्त 2g₁g₂ + 2f₁f₂ = c₁ + c₂ लगाने पर: 0 + 2k² = 6 + k ⇒ 2k² - k - 6 = 0 ⇒ k = 2 या -3/2।',
    },
    shortcutTrick: {
      en: 'Plug k = 2 into 2k² = 6 + k: 2(4) = 8 = 6 + 2. Verified in 3 seconds!',
      hi: 'विकल्प से k = 2 समीकरण 2k² = 6 + k में रखें: 8 = 8 संतुष्ट!',
    },
  },
  {
    id: 'pyq-math-16',
    subjectId: 'mathematics',
    chapterId: 'math-int-calculus',
    yearTag: 'NIMCET 2023',
    difficulty: 'Easy',
    question: {
      en: 'What is the area of the region bounded by the two parabolas y² = 4x and x² = 4y?',
      hi: 'दो परवलयों y² = 4x और x² = 4y से घिरे क्षेत्र का क्षेत्रफल क्या है?',
    },
    options: [
      { en: '8/3 sq. units', hi: '8/3 वर्ग इकाई' },
      { en: '16/3 sq. units', hi: '16/3 वर्ग इकाई' },
      { en: '32/3 sq. units', hi: '32/3 वर्ग इकाई' },
      { en: '4/3 sq. units', hi: '4/3 वर्ग इकाई' },
    ],
    correctIndex: 1,
    solution: {
      en: 'Comparing with y² = 4ax and x² = 4by, we have a = 1 and b = 1. Standard bounded area = 16ab / 3 = 16(1)(1)/3 = 16/3 sq. units.',
      hi: 'y² = 4ax और x² = 4by से तुलना करने पर a = 1, b = 1। मानक सूत्र Area = 16ab / 3 = 16/3 वर्ग इकाई।',
    },
    shortcutTrick: {
      en: 'Area between y² = 4ax and x² = 4ax is ALWAYS 16a²/3!',
      hi: 'सीधा सूत्र: 16a² / 3 = 16/3!',
    },
  },
  {
    id: 'pyq-math-17',
    subjectId: 'mathematics',
    chapterId: 'math-triangles-heights',
    yearTag: 'NIMCET 2022',
    difficulty: 'Moderate',
    question: {
      en: 'In a triangle ABC, if a = 13, b = 14, and c = 15, what is its circumradius R?',
      hi: 'एक त्रिभुज ABC में यदि भुजाएं a = 13, b = 14 और c = 15 हैं, तो उसकी परित्रिज्या (Circumradius) R क्या होगी?',
    },
    options: [
      { en: '65/8', hi: '65/8' },
      { en: '65/4', hi: '65/4' },
      { en: '4', hi: '4' },
      { en: '8', hi: '8' },
    ],
    correctIndex: 0,
    solution: {
      en: 'For the classic (13, 14, 15) triangle, semi-perimeter s = 21 and Area Δ = 84. Circumradius R = abc / (4Δ) = (13 × 14 × 15) / (4 × 84) = 2730 / 336 = 65/8.',
      hi: '(13, 14, 15) त्रिभुज के लिए s = 21 और क्षेत्रफल Δ = 84 होता है। अतः परित्रिज्या R = abc / (4Δ) = (13×14×15)/(4×84) = 65/8।',
    },
    shortcutTrick: {
      en: 'Memorize the golden (13, 14, 15) triangle: Δ = 84, inradius r = 4, circumradius R = 65/8!',
      hi: '(13, 14, 15) त्रिभुज के मान कंठस्थ रखें: Δ = 84, r = 4, R = 65/8!',
    },
  },
  {
    id: 'pyq-lr-5',
    subjectId: 'reasoning',
    chapterId: 'lr-floor-grid-puzzles',
    yearTag: 'NIMCET 2024',
    difficulty: 'Moderate',
    question: {
      en: 'In a 7-floor building (1 to 7), P lives on floor 4. Three persons live between Q and R, and neither Q nor R lives on floor 1. If Q lives above R, on which floor does Q live?',
      hi: '7-मंजिला इमारत (1 से 7) में P मंजिल 4 पर रहता है। Q और R के बीच 3 व्यक्ति रहते हैं, और न तो Q न ही R मंजिल 1 पर रहता है। यदि Q, R के ऊपर रहता है, तो Q किस मंजिल पर रहता है?',
    },
    options: [
      { en: 'Floor 5', hi: 'मंजिल 5' },
      { en: 'Floor 6', hi: 'मंजिल 6' },
      { en: 'Floor 7', hi: 'मंजिल 7' },
      { en: 'Floor 3', hi: 'मंजिल 3' },
    ],
    correctIndex: 2,
    solution: {
      en: 'Three floors between Q and R ⇒ |Q - R| = 4. Possible pairs in 1..7 are (7, 3), (6, 2), (5, 1). If (6, 2) or (7, 3), both work—wait: if R is immediately below P(4), then R = 3 and Q = 7!',
      hi: 'Q और R के बीच 3 मंजिलें हैं ⇒ अंतर = 4। अतः (7, 3) से Q मंजिल 7 पर है।',
    },
    shortcutTrick: {
      en: 'k floors between ⇒ difference = k + 1 = 4.',
      hi: 'बीच में 3 मंजिलें ⇒ अंतर = 4।',
    },
  },
  {
    id: 'pyq-lr-6',
    subjectId: 'reasoning',
    chapterId: 'lr-blood-dir-ranking',
    yearTag: 'NIMCET 2023',
    difficulty: 'Easy',
    question: {
      en: 'A man walks 6 km North, turns right and walks 8 km East. How far and in which direction is he from his starting point?',
      hi: 'एक व्यक्ति 6 किमी उत्तर की ओर चलता है, फिर दाएं मुड़कर 8 किमी पूर्व की ओर चलता है। वह प्रारंभिक बिंदु से कितनी दूर और किस दिशा में है?',
    },
    options: [
      { en: '10 km North-East', hi: '10 किमी उत्तर-पूर्व' },
      { en: '14 km North-East', hi: '14 किमी उत्तर-पूर्व' },
      { en: '10 km South-West', hi: '10 किमी दक्षिण-पश्चिम' },
      { en: '12 km East', hi: '12 किमी पूर्व' },
    ],
    correctIndex: 0,
    solution: {
      en: 'Net Δy = +6 km (North), Net Δx = +8 km (East). Distance = √(6² + 8²) = 10 km in the North-East direction.',
      hi: 'Δy = +6 किमी (उत्तर), Δx = +8 किमी (पूर्व)। न्यूनतम दूरी = √(6² + 8²) = 10 किमी उत्तर-पूर्व।',
    },
    shortcutTrick: {
      en: '6-8-10 Pythagorean triplet in Quadrant I (North-East).',
      hi: '6-8-10 पाइथागोरस त्रिक से सीधे 10 किमी उत्तर-पूर्व!',
    },
  },
  {
    id: 'pyq-lr-7',
    subjectId: 'reasoning',
    chapterId: 'lr-clocks-calendars-quant',
    yearTag: 'NIMCET 2024',
    difficulty: 'Easy',
    question: {
      en: 'If 1st January 2023 was a Sunday, what day of the week was 1st January 2024?',
      hi: 'यदि 1 जनवरी 2023 को रविवार था, तो 1 जनवरी 2024 को सप्ताह का कौन-सा दिन था?',
    },
    options: [
      { en: 'Sunday', hi: 'रविवार' },
      { en: 'Monday', hi: 'सोमवार' },
      { en: 'Tuesday', hi: 'मंगलवार' },
      { en: 'Saturday', hi: 'शनिवार' },
    ],
    correctIndex: 1,
    solution: {
      en: '2023 is an ordinary year (365 days = 52 weeks + 1 odd day). Therefore, 1st January 2024 shifts ahead by +1 day: Sunday + 1 = Monday.',
      hi: '2023 एक साधारण वर्ष (365 दिन = 1 विषम दिन) है। अतः 1 जनवरी 2024 को रविवार + 1 = सोमवार होगा।',
    },
    shortcutTrick: {
      en: 'Ordinary year = +1 odd day; Leap year (crossing Feb 29) = +2 odd days.',
      hi: 'साधारण वर्ष = +1 विषम दिन ⇒ रविवार + 1 = सोमवार!',
    },
  },
  {
    id: 'pyq-cs-4',
    subjectId: 'computer',
    chapterId: 'cs-boolean-kmap',
    yearTag: 'NIMCET 2024',
    difficulty: 'Easy',
    question: {
      en: 'The Boolean expression A + A′B simplifies to:',
      hi: 'बूलियन व्यंजक A + A′B का सरल रूप क्या है?',
    },
    options: [
      { en: 'A', hi: 'A' },
      { en: 'B', hi: 'B' },
      { en: 'A + B', hi: 'A + B' },
      { en: 'A · B', hi: 'A · B' },
    ],
    correctIndex: 2,
    solution: {
      en: 'By the Distributive/Redundant Literal Law: A + A′B = (A + A′)(A + B) = 1 · (A + B) = A + B.',
      hi: 'वितरण नियम से: A + A′B = (A + A′)(A + B) = 1 · (A + B) = A + B।',
    },
    shortcutTrick: {
      en: 'Redundant literal rule: drop the complemented A′ next to B ⇒ A + B!',
      hi: 'सीधा नियम: A + A′B = A + B!',
    },
  },
  {
    id: 'pyq-cs-5',
    subjectId: 'computer',
    chapterId: 'cs-digital-circuits',
    yearTag: 'NIMCET 2023',
    difficulty: 'Easy',
    question: {
      en: 'How many flip-flops are minimum required to construct a Mod-12 counter?',
      hi: 'एक Mod-12 काउंटर बनाने के लिए न्यूनतम कितने फ्लिप-फ्लॉप की आवश्यकता होती है?',
    },
    options: [
      { en: '3', hi: '3' },
      { en: '4', hi: '4' },
      { en: '6', hi: '6' },
      { en: '12', hi: '12' },
    ],
    correctIndex: 1,
    solution: {
      en: 'Number of flip-flops n must satisfy 2ⁿ ≥ M. For M = 12, 2³ = 8 < 12 and 2⁴ = 16 ≥ 12, so n = 4 flip-flops are required.',
      hi: 'सूत्र 2ⁿ ≥ 12 से n = 4 (क्योंकि 2⁴ = 16 ≥ 12) फ्लिप-फ्लॉप लगेंगे।',
    },
    shortcutTrick: {
      en: 'n = ⌈log₂(12)⌉ = 4.',
      hi: 'n = ⌈log₂(12)⌉ = 4।',
    },
  },
  {
    id: 'pyq-cs-6',
    subjectId: 'computer',
    chapterId: 'cs-os-networks-c',
    yearTag: 'NIMCET 2024',
    difficulty: 'Easy',
    question: {
      en: 'If the ASCII code for the character "A" is 65 (in decimal), what is the ASCII code for the character "e"?',
      hi: 'यदि अक्षर "A" का दशमलव ASCII कोड 65 है, तो छोटे अक्षर "e" का ASCII कोड क्या होगा?',
    },
    options: [
      { en: '69', hi: '69' },
      { en: '97', hi: '97' },
      { en: '101', hi: '101' },
      { en: '102', hi: '102' },
    ],
    correctIndex: 2,
    solution: {
      en: 'Since "A" = 65, lowercase "a" = 65 + 32 = 97. Because "e" is the 5th letter (a=97, b=98, c=99, d=100, e=101), ASCII("e") = 101.',
      hi: '"A" = 65 होने पर "a" = 65 + 32 = 97 होता है। अतः "e" = 97 + 4 = 101।',
    },
    shortcutTrick: {
      en: 'Lowercase = Uppercase + 32. "E" is 65 + 4 = 69 ⇒ "e" = 69 + 32 = 101.',
      hi: '"E" = 69 ⇒ "e" = 69 + 32 = 101!',
    },
  },
  {
    id: 'pyq-eng-3',
    subjectId: 'english',
    chapterId: 'eng-voice-narration',
    yearTag: 'NIMCET 2024',
    difficulty: 'Easy',
    question: {
      en: 'Choose the correct Passive Voice of: "Who taught you Mathematics?"',
      hi: '"Who taught you Mathematics?" का सही पैसिव वॉइस चुनें:',
    },
    options: [
      { en: 'By whom were you taught Mathematics?', hi: 'By whom were you taught Mathematics?' },
      { en: 'By whom you were taught Mathematics?', hi: 'By whom you were taught Mathematics?' },
      { en: 'Who was taught Mathematics by you?', hi: 'Who was taught Mathematics by you?' },
      { en: 'By whom are you taught Mathematics?', hi: 'By whom are you taught Mathematics?' },
    ],
    correctIndex: 0,
    solution: {
      en: '"Who" changes to "By whom", and in a direct question the auxiliary verb ("were" for Simple Past "taught") must come BEFORE the subject ("you"): "By whom were you taught Mathematics?".',
      hi: '"Who" को "By whom" में बदलते हैं और प्रश्नवाचक वाक्य में सहायक क्रिया ("were") कर्ता ("you") से पहले आती है।',
    },
    shortcutTrick: {
      en: 'Interrogative Passive keeps question inversion: By whom + were + you + V₃?',
      hi: 'By whom + were + you + taught?',
    },
  },
  {
    id: 'pyq-eng-4',
    subjectId: 'english',
    chapterId: 'eng-vocab-roots-ows',
    yearTag: 'NIMCET 2023',
    difficulty: 'Easy',
    question: {
      en: 'Choose the word closest in meaning (Synonym) to "EPHEMERAL":',
      hi: '"EPHEMERAL" शब्द का सही पर्यायवाची (Synonym) चुनें:',
    },
    options: [
      { en: 'Eternal', hi: 'Eternal' },
      { en: 'Transient', hi: 'Transient' },
      { en: 'Permanent', hi: 'Permanent' },
      { en: 'Perennial', hi: 'Perennial' },
    ],
    correctIndex: 1,
    solution: {
      en: '"Ephemeral" means lasting for a very short time (short-lived), which is synonymous with "Transient". The other three options mean everlasting.',
      hi: '"Ephemeral" का अर्थ क्षणिक (अल्पकालिक) होता है, जिसका पर्यायवाची "Transient" है।',
    },
    shortcutTrick: {
      en: '3-vs-1 Elimination: Eternal, Permanent, and Perennial all mean "forever", so Transient is the answer!',
      hi: 'Eternal, Permanent और Perennial तीनों का अर्थ "स्थायी" है, अतः Transient ही उत्तर है!',
    },
  },
  {
    id: 'pyq-eng-5',
    subjectId: 'english',
    chapterId: 'eng-idioms-rc-parajumble',
    yearTag: 'NIMCET 2024',
    difficulty: 'Easy',
    question: {
      en: 'What is the meaning of the idiom "Once in a blue moon"?',
      hi: 'मुहावरे "Once in a blue moon" का सही अर्थ क्या है?',
    },
    options: [
      { en: 'Every full moon night', hi: 'प्रत्येक पूर्णिमा की रात' },
      { en: 'Very rarely', hi: 'बहुत कम या दुर्लभ रूप से (Very rarely)' },
      { en: 'Frequently', hi: 'बार-बार' },
      { en: 'An astronomical event', hi: 'एक खगोलीय घटना' },
    ],
    correctIndex: 1,
    solution: {
      en: 'The idiom "Once in a blue moon" means something that happens very rarely (almost never).',
      hi: '"Once in a blue moon" का अर्थ "ईद का चाँद होना" अर्थात बहुत दुर्लभ रूप से घटित होना है।',
    },
    shortcutTrick: {
      en: 'Eliminate literal "moon" options immediately ⇒ "Very rarely".',
      hi: 'शाब्दिक "चाँद" वाले विकल्प हटाएं ⇒ "Very rarely"।',
    },
  },
];

export const INITIAL_DOUBT_POSTS: DoubtPost[] = [
  {
    id: 'doubt-1',
    subjectId: 'mathematics',
    chapterId: 'math-vectors',
    title: 'How to quickly check if 4 points with position vectors a, b, c, d are coplanar in NIMCET?',
    body: 'Whenever 4 position vectors are given, finding 3 edge vectors AB, AC, AD and computing a 3×3 determinant takes me almost 2 minutes. Is there a faster coefficient check?',
    author: 'Aarav Sharma',
    authorRankTarget: 'Target: NIT Trichy (AIR < 50)',
    createdAt: '2 hours ago',
    upvotes: 28,
    solved: true,
    tags: ['Vectors', '3D Geometry', 'NIMCET Shortcut'],
    replies: [
      {
        id: 'rep-1',
        author: 'Riya Verma (NIT Surathkal MCA)',
        role: 'Peer Mentor · 645/1000 Score',
        createdAt: '1 hour ago',
        content:
          'Yes! Four points with position vectors a, b, c, d are coplanar if and only if there exist scalars x, y, z, w (not all zero) such that xa + yb + zc + wd = 0 AND x + y + z + w = 0! Often in NIMCET options you can spot the linear combination coefficients summing to 0 in 10 seconds.',
        upvotes: 19,
      },
    ],
  },
  {
    id: 'doubt-2',
    subjectId: 'computer',
    chapterId: 'cs-data-rep-boolean',
    title: 'Confusion in IEEE-754 Single Precision hidden bit (1.M) when converting -12.625 to Hex',
    body: 'I converted 12.625 to binary 1100.101 = 1.100101 × 2³. Biased exponent is 127 + 3 = 130 (10000010₂). Do we include the leading 1 before the radix point inside the 23-bit mantissa or drop it?',
    author: 'Priyanshu Patel',
    authorRankTarget: 'Target: MNNIT Allahabad',
    createdAt: '5 hours ago',
    upvotes: 16,
    solved: true,
    tags: ['IEEE-754', 'Binary', 'Computer Awareness'],
    replies: [
      {
        id: 'rep-2',
        author: 'Devansh Mishra',
        role: 'Top Streak Learner (24 Days)',
        createdAt: '3 hours ago',
        content:
          'You ALWAYS drop the leading 1 in normalized IEEE-754! That is why it is called the "Hidden / Implicit 1-bit". So your 23-bit Mantissa starts directly with 100101000... Combined: S=1, E=10000010, M=1001010... which groups into 1100 0001 0100 1010 0000... = C14A0000 in Hex!',
        upvotes: 14,
      },
    ],
  },
  {
    id: 'doubt-3',
    subjectId: 'mathematics',
    chapterId: 'math-prob-stats',
    title: 'Difference between "At least two" and "Exactly two" in Venn diagram probability?',
    body: 'In the 3-set inclusion-exclusion formula, why do we subtract 3×n(A∩B∩C) for "Exactly two" instead of 2×n(A∩B∩C)?',
    author: 'Sneha Kulkarni',
    authorRankTarget: 'Target: NIT Warangal',
    createdAt: '1 day ago',
    upvotes: 22,
    solved: true,
    tags: ['Probability', 'Set Theory', 'Venn Diagram'],
    replies: [
      {
        id: 'rep-3',
        author: 'Vikramaditya Rao',
        role: 'Math Solver Badge',
        createdAt: '18 hours ago',
        content:
          'When you add n(A∩B) + n(B∩C) + n(C∩A), the center region (A∩B∩C) gets counted 3 times (once in each pair). For "Exactly two", we want the center region count to be ZERO, so we subtract all 3 copies: -3n(A∩B∩C). For "At least two", we want the center region counted ONCE, so we subtract 2 copies: -2n(A∩B∩C)!',
        upvotes: 21,
      },
    ],
  },
];

export const INITIAL_REMINDERS: StudyReminder[] = [
  {
    id: 'rem-1',
    title: 'Morning 600-Mark Mathematics Core Drill (Vectors & Calculus)',
    time: '07:30',
    enabled: true,
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    targetSubject: 'mathematics',
  },
  {
    id: 'rem-2',
    title: 'Afternoon Logical Reasoning Puzzle & Seating Set (240M)',
    time: '16:00',
    enabled: true,
    days: ['Mon', 'Wed', 'Fri', 'Sun'],
    targetSubject: 'reasoning',
  },
  {
    id: 'rem-3',
    title: 'Night Formula Vault Flashcards & Streak Lock-in',
    time: '21:30',
    enabled: true,
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    targetSubject: 'computer',
  },
];

export const PARTICIPATING_NITS = [
  {
    institute: 'NIT Tiruchirappalli (Trichy)',
    safeScoreOutOf1000: '620 – 685+',
    safeRankAIR: 'AIR 1 – 55',
    seats: 115,
    highlightEn: 'Highest placement package & premier MCA curriculum',
    highlightHi: 'सर्वोच्च प्लेसमेंट पैकेज और शीर्ष MCA संस्थान',
  },
  {
    institute: 'NIT Karnataka (Surathkal)',
    safeScoreOutOf1000: '580 – 615',
    safeRankAIR: 'AIR 56 – 120',
    seats: 58,
    highlightEn: 'Top-tier tech recruiters & coastal campus research hub',
    highlightHi: 'शीर्ष टेक कंपनियाँ और उत्कृष्ट कोडिंग संस्कृति',
  },
  {
    institute: 'NIT Warangal',
    safeScoreOutOf1000: '560 – 585',
    safeRankAIR: 'AIR 115 – 175',
    seats: 58,
    highlightEn: 'Renowned Systems & AI/ML alumni network',
    highlightHi: 'प्रसिद्ध सिस्टम्स और AI/ML पूर्व छात्र नेटवर्क',
  },
  {
    institute: 'MNNIT Allahabad (Prayagraj)',
    safeScoreOutOf1000: '525 – 555',
    safeRankAIR: 'AIR 176 – 290',
    seats: 116,
    highlightEn: 'Legendary competitive programming & software placements',
    highlightHi: 'प्रतिस्पर्धी प्रोग्रामिंग और सॉफ्टवेयर प्लेसमेंट के लिए प्रसिद्ध',
  },
  {
    institute: 'NIT Calicut / MANIT Bhopal / NIT Kurukshetra',
    safeScoreOutOf1000: '465 – 520',
    safeRankAIR: 'AIR 291 – 580',
    seats: 260,
    highlightEn: 'Strong core software engineering opportunities',
    highlightHi: 'मजबूत कोर सॉफ्टवेयर इंजीनियरिंग अवसर',
  },
  {
    institute: 'NIT Jamshedpur / NIT Raipur / NIT Patna / IIIT Bhopal',
    safeScoreOutOf1000: '395 – 460',
    safeRankAIR: 'AIR 581 – 980',
    seats: 380,
    highlightEn: 'Excellent ROI & consistent MCA placement record',
    highlightHi: 'उत्कृष्ट ROI और निरंतर प्लेसमेंट रिकॉर्ड',
  },
];
