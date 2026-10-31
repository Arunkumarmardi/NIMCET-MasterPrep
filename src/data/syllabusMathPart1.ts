import { Chapter } from '../types/nimcet';

export const MATH_CHAPTERS_PART1: Chapter[] = [
  // ==================== MATH 01: VECTORS ====================
  {
    id: 'math-vectors',
    subjectId: 'mathematics',
    number: '01',
    title: {
      en: 'Vectors: Dot, Cross & Scalar/Vector Triple Products',
      hi: 'सदिश बीजगणित: अदिश, सदिश और त्रिक गुणनफल (Vectors)',
    },
    priorityTier: 1,
    expectedQuestions: 6,
    expectedMarks: 72,
    estimatedHours: 9,
    visualizerType: 'vector_3d',
    deepConcept: {
      intuition: {
        en: 'A vector is a directed quantity in 3D space defined by both magnitude (length) and direction cosines (cos α, cos β, cos γ). In NIMCET, 5 to 7 questions come every single year from Vectors because they test 3D geometric visualization using fast algebraic products: the Dot Product measures directional alignment and orthogonal projection, the Cross Product produces a perpendicular normal vector whose magnitude is the area of the spanned parallelogram, and the Scalar Triple Product [a b c] measures the signed volume of a 3D parallelepiped.',
        hi: 'सदिश (Vector) त्रिविमीय (3D) आकाश में एक दिष्ट राशि है जिसमें परिमाण (लंबाई) और दिक्-कोज्याएं (cos α, cos β, cos γ) दोनों होती हैं। NIMCET में हर वर्ष 5 से 7 प्रश्न सदिश बीजगणित से पूछे जाते हैं: अदिश गुणनफल (Dot Product) दो सदिशों के संरेखण और प्रक्षेप को मापता है, सदिश गुणनफल (Cross Product) तल के लंबवत अभिलंब सदिश और समांतर चतुर्भुज का क्षेत्रफल देता है, तथा अदिश त्रिक गुणनफल [a b c] समांतर षट्फलक (Parallelepiped) का 3D आयतन देता है।',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. Direction Cosines (l, m, n), Section Formula & Collinearity',
            hi: '1. दिक्-कोज्याएं (l, m, n), विभाजन सूत्र और संरेखता',
          },
          explanation: {
            en: 'If a vector r = xî + yĵ + zk̂ makes angles α, β, γ with positive X, Y, Z axes, then l = cos α = x/|r|, m = cos β = y/|r|, n = cos γ = z/|r|. Always remember l² + m² + n² = 1 and sin²α + sin²β + sin²γ = 2. Position vector of point P dividing AB in ratio m:n internally is r = (mb + na)/(m + n).',
            hi: 'यदि सदिश r = xî + yĵ + zk̂ धनात्मक X, Y, Z अक्षों से α, β, γ कोण बनाता है, तो l = cos α, m = cos β, n = cos γ कहलाते हैं। सदैव याद रखें: l² + m² + n² = 1 तथा sin²α + sin²β + sin²γ = 2। रेखाखंड AB को m:n में अंतः विभाजित करने वाले बिंदु का स्थिति सदिश r = (mb + na)/(m + n) होता है।',
          },
          mathematicalForm: 'cos²α + cos²β + cos²γ = 1  |  sin²α + sin²β + sin²γ = 2  |  r = (mb + na)/(m + n)',
        },
        {
          heading: {
            en: '2. Scalar (Dot) Product, Angle & Orthogonal Projection',
            hi: '2. अदिश (Dot) गुणनफल, कोण और लंबवत प्रक्षेप (Projection)',
          },
          explanation: {
            en: 'a · b = |a||b| cos θ = a₁b₁ + a₂b₂ + a₃b₃. Two non-zero vectors are perpendicular iff a · b = 0. Scalar projection of a on b is (a · b)/|b|, and the vector projection of a along b is [(a · b)/|b|²]b. The component of a perpendicular to b is a - [(a · b)/|b|²]b.',
            hi: 'a · b = |a||b| cos θ = a₁b₁ + a₂b₂ + a₃b₃। दो अशून्य सदिश परस्पर लंबवत होते हैं यदि और केवल यदि a · b = 0। सदिश b पर a का अदिश प्रक्षेप (a · b)/|b| होता है, और सदिश प्रक्षेप [(a · b)/|b|²]b होता है।',
          },
          mathematicalForm: 'Proj_b(a) = (a · b)/|b|  |  |a ± b|² = |a|² + |b|² ± 2(a · b)',
        },
        {
          heading: {
            en: '3. Vector (Cross) Product, Area of Triangle/Parallelogram & Lagrange Identity',
            hi: '3. सदिश (Cross) गुणनफल, त्रिभुज/समांतर चतुर्भुज का क्षेत्रफल और लाग्रेंज सर्वसमिका',
          },
          explanation: {
            en: 'a × b = |a||b| sin θ n̂ is anti-commutative (a × b = -b × a). Two vectors are parallel/collinear iff a × b = 0. Area of parallelogram with adjacent sides a, b is |a × b|; with diagonals d₁, d₂ it is ½|d₁ × d₂|. Area of triangle ABC with position vectors a, b, c is ½|a × b + b × c + c × a|.',
            hi: 'a × b = |a||b| sin θ n̂ क्रम-विनिमेय नहीं है (a × b = -b × a)। दो सदिश समांतर होते हैं यदि a × b = 0। संलग्न भुजाओं a, b वाले समांतर चतुर्भुज का क्षेत्रफल |a × b| और विकर्णों d₁, d₂ से क्षेत्रफल ½|d₁ × d₂| होता है।',
          },
          mathematicalForm: '|a × b|² + (a · b)² = |a|²|b|²  |  Area(ΔABC) = ½|a × b + b × c + c × a|',
        },
        {
          heading: {
            en: '4. Scalar Triple Product [a b c] & Vector Triple Product a × (b × c)',
            hi: '4. अदिश त्रिक गुणनफल [a b c] और सदिश त्रिक गुणनफल a × (b × c)',
          },
          explanation: {
            en: 'Volume of parallelepiped = |[a b c]|, Volume of tetrahedron = ⅙|[a b c]|. Three vectors are coplanar iff [a b c] = 0. Vector Triple Product a × (b × c) = (a · c)b - (a · b)c lies in the plane of b and c and is perpendicular to a.',
            hi: 'समांतर षट्फलक का आयतन = |[a b c]| तथा चतुष्फलक (Tetrahedron) का आयतन = ⅙|[a b c]| होता है। तीन सदिश समतलीय (Coplanar) होते हैं यदि [a b c] = 0। सदिश त्रिक गुणनफल a × (b × c) = (a · c)b - (a · b)c सदिश b और c के समतल में स्थित होता है तथा a के लंबवत होता है।',
          },
          mathematicalForm: '[a b c] = det([a₁ a₂ a₃; b₁ b₂ b₃; c₁ c₂ c₃])  |  a × (b × c) = (a · c)b - (a · b)c',
        },
      ],
      realWorldScenario: {
        domain: {
          en: '3D Game Engines, Ray Tracing & Robotics Kinematics',
          hi: '3D गेम इंजन, रे-ट्रेसिंग (Ray Tracing) और रोबोटिक्स',
        },
        title: {
          en: 'How GPU Shaders Calculate Surface Lighting & Torque',
          hi: 'GPU शेडर सतह की चमक और बलाघूर्ण (Torque) की गणना कैसे करते हैं',
        },
        howItWorks: {
          en: 'In 3D rendering, taking the cross product of two triangle edges e₁ × e₂ gives the outward normal vector N̂, and taking the dot product N̂ · L̂ with the light source vector gives diffuse shading brightness.',
          hi: '3D ग्राफ़िक्स में किसी त्रिभुज की दो भुजाओं का क्रॉस गुणनफल e₁ × e₂ सतह का अभिलंब सदिश N̂ देता है, और प्रकाश सदिश L̂ के साथ उसका डॉट गुणनफल N̂ · L̂ पिक्सेल की चमक तय करता है।',
        },
        practicalExample: {
          en: 'Mechanical Work Done W = F · d (Dot Product), while Rotational Torque τ = r × F (Cross Product).',
          hi: 'यांत्रिक कार्य W = F · d (अदिश गुणनफल) होता है, जबकि बल आघूर्ण τ = r × F (सदिश गुणनफल) होता है।',
        },
      },
    },
    subtopics: [
      {
        id: 'vec-sub-1',
        title: {
          en: '1.1 Types of Vectors, Direction Cosines & Linear Independence',
          hi: '1.1 सदिशों के प्रकार, दिक्-कोज्याएं और रैखिक स्वतंत्रता',
        },
        detailedTheory: {
          en: 'A unit vector in the direction of a is â = a/|a|. Direction ratios (a, b, c) are proportional to direction cosines (l, m, n) where l = ±a/√(a²+b²+c²). Three vectors a, b, c are linearly dependent (coplanar) if there exist scalars x, y, z not all zero such that xa + yb + zc = 0. Four points with position vectors a, b, c, d are coplanar iff xa + yb + zc + wd = 0 with x + y + z + w = 0.',
          hi: 'सदिश a की दिशा में इकाई सदिश â = a/|a| होता है। दिक्-अनुपात (a, b, c) दिक्-कोज्याओं (l, m, n) के समानुपाती होते हैं। तीन सदिश a, b, c रैखिक रूप से परतंत्र (समतलीय) होते हैं यदि xa + yb + zc = 0 हो। चार बिंदु a, b, c, d समतलीय होते हैं यदि xa + yb + zc + wd = 0 तथा x + y + z + w = 0 हो।',
        },
        keyRules: [
          {
            en: 'If a vector makes equal angles α with all three coordinate axes, cos²α = 1/3 ⇒ cos α = ±1/√3 (there are 8 such octant directions).',
            hi: 'यदि कोई सदिश तीनों अक्षों से समान कोण α बनाता है, तो cos²α = 1/3 ⇒ cos α = ±1/√3।',
          },
          {
            en: 'Internal Angle Bisector of vectors a and b is given by λ(â + b̂) = λ(a/|a| + b/|b|). External bisector is λ(â - b̂).',
            hi: 'सदिश a और b के आंतरिक कोण समद्विभाजक का समीकरण λ(a/|a| + b/|b|) होता है (केवल λ(a+b) नहीं!)।',
          },
          {
            en: 'Position vector of Centroid G of ΔABC is (a + b + c)/3; Incenter I is (|BC|a + |CA|b + |AB|c) / (|BC| + |CA| + |AB|).',
            hi: 'त्रिभुज ABC के केंद्रक G का स्थिति सदिश (a + b + c)/3 होता है।',
          },
        ],
        keyEquations: [
          'l² + m² + n² = 1  ⇔  cos²α + cos²β + cos²γ = 1',
          'sin²α + sin²β + sin²γ = 2',
          'cos 2α + cos 2β + cos 2γ = -1',
          'Angle Bisector r = λ(a/|a| ± b/|b|)',
        ],
      },
      {
        id: 'vec-sub-2',
        title: {
          en: '1.2 Dot & Cross Product Identities and Geometric Applications',
          hi: '1.2 अदिश एवं सदिश गुणनफल सर्वसमिकाएं और ज्यामितीय अनुप्रयोग',
        },
        detailedTheory: {
          en: 'For any two vectors a and b: |a + b|² = |a|² + |b|² + 2(a·b) and |a - b|² = |a|² + |b|² - 2(a·b). Adding them yields the Parallelogram Law: |a + b|² + |a - b|² = 2(|a|² + |b|²). Subtracting them yields |a + b|² - |a - b|² = 4(a·b). For three mutually perpendicular unit vectors, |a + b + c|² = |a|² + |b|² + |c|² + 2(a·b + b·c + c·a).',
          hi: 'किन्हीं दो सदिशों a और b के लिए: |a + b|² + |a - b|² = 2(|a|² + |b|²) समांतर चतुर्भुज नियम कहलाता है। तीन सदिशों के लिए |a + b + c|² = |a|² + |b|² + |c|² + 2(a·b + b·c + c·a) यह सूत्र NIMCET का सबसे लोकप्रिय सूत्र है।',
        },
        keyRules: [
          {
            en: 'If a + b + c = 0 and |a|=3, |b|=5, |c|=7, to find angle between a and b: isolate c first! Write a + b = -c, then square both sides: |a|² + |b|² + 2|a||b|cos θ = |c|².',
            hi: 'यदि a + b + c = 0 हो और a तथा b के बीच कोण निकालना हो, तो तीसरे सदिश को दूसरी तरफ ले जाएं: a + b = -c और फिर दोनों पक्षों का वर्ग करें!',
          },
          {
            en: 'Condition for three points with position vectors a, b, c to be collinear: a × b + b × c + c × a = 0.',
            hi: 'तीन बिंदुओं a, b, c के संरेख (Collinear) होने की शर्त: a × b + b × c + c × a = 0।',
          },
        ],
        keyEquations: [
          '|a + b + c|² = |a|² + |b|² + |c|² + 2(a·b + b·c + c·a)',
          'For unit vectors: |â + b̂| = 2 cos(θ/2),  |â - b̂| = 2 sin(θ/2)',
          '|a × b|² = |a|²|b|² - (a · b)²',
        ],
      },
      {
        id: 'vec-sub-3',
        title: {
          en: '1.3 Scalar & Vector Triple Products and Reciprocal System of Vectors',
          hi: '1.3 त्रिक गुणनफल (STP & VTP) और व्युत्क्रम सदिश निकाय',
        },
        detailedTheory: {
          en: 'In Scalar Triple Product [a b c], cyclic rotation preserves value: [a b c] = [b c a] = [c a b], while swapping any two adjacent vectors flips sign: [a b c] = -[b a c]. If any two vectors are equal or parallel, [a a c] = 0. Reciprocal vectors a′, b′, c′ of non-coplanar vectors a, b, c are defined as a′ = (b × c)/[a b c], satisfying a · a′ = 1 and [a′ b′ c′] = 1/[a b c].',
          hi: 'अदिश त्रिक गुणनफल [a b c] में चक्रीय क्रम समान रहता है, परंतु कोई दो सदिश बदलने पर चिह्न बदल जाता है। यदि कोई दो सदिश समान या समांतर हों तो [a a c] = 0। व्युत्क्रम सदिश a′ = (b × c)/[a b c] के लिए [a′ b′ c′] = 1/[a b c] होता है।',
        },
        keyRules: [
          {
            en: '[a+b  b+c  c+a] = 2[a b c] (Multiplier is 2).',
            hi: '[a+b  b+c  c+a] = 2[a b c] होता है।',
          },
          {
            en: '[a-b  b-c  c-a] = 0 ALWAYS (since sum of vectors is 0, they are coplanar).',
            hi: '[a-b  b-c  c-a] सदैव 0 होता है क्योंकि तीनों सदिशों का योग शून्य है।',
          },
          {
            en: '[a×b  b×c  c×a] = [a b c]² (Square of original box product).',
            hi: '[a×b  b×c  c×a] = [a b c]² होता है।',
          },
          {
            en: 'Jacobi Identity: a × (b × c) + b × (c × a) + c × (a × b) = 0.',
            hi: 'जैकोबी सर्वसमिका: a × (b × c) + b × (c × a) + c × (a × b) = 0।',
          },
        ],
        keyEquations: [
          '[la  mb  nc] = lmn [a b c]',
          '(a × b) · (c × d) = (a · c)(b · d) - (a · d)(b · c)',
          'a′ = (b × c)/[a b c],   [a b c][a′ b′ c′] = 1',
        ],
      },
    ],
    workedExamples: [
      {
        id: 'vec-ex-1',
        difficulty: 'Foundation',
        title: {
          en: 'Angle Between Two Vectors When a + b + c = 0',
          hi: 'जब a + b + c = 0 हो तो दो सदिशों के बीच कोण ज्ञात करना',
        },
        problem: {
          en: 'Let a, b, c be three vectors such that a + b + c = 0 and |a| = 3, |b| = 5, |c| = 7. Find the angle θ between vectors a and b.',
          hi: 'यदि तीन सदिश a, b, c इस प्रकार हैं कि a + b + c = 0 तथा |a| = 3, |b| = 5, |c| = 7, तो a और b के बीच का कोण θ ज्ञात कीजिए।',
        },
        stepByStep: {
          en: 'Step 1: Since we want the angle between a and b, move c to the right side: a + b = -c.\nStep 2: Take magnitude squared on both sides: |a + b|² = |-c|² ⇒ |a|² + |b|² + 2|a||b| cos θ = |c|².\nStep 3: Substitute |a|=3, |b|=5, |c|=7: 9 + 25 + 2(3)(5) cos θ = 49 ⇒ 34 + 30 cos θ = 49 ⇒ 30 cos θ = 15 ⇒ cos θ = 1/2 ⇒ θ = 60° (π/3).',
          hi: 'चरण 1: चूँकि हमें a और b के बीच कोण चाहिए, इसलिए c को दाएं पक्ष में ले जाएं: a + b = -c।\nचरण 2: दोनों पक्षों के परिमाण का वर्ग करने पर: |a|² + |b|² + 2|a||b| cos θ = |c|²।\nचरण 3: मान रखने पर: 3² + 5² + 2(3)(5) cos θ = 7² ⇒ 34 + 30 cos θ = 49 ⇒ cos θ = 15/30 = 1/2 ⇒ θ = 60° (π/3)।',
        },
        shortcut: {
          en: 'Memorize the golden triangle triplet (3, 5, 7): whenever |a|=3, |b|=5, |c|=7 with a+b+c=0, the angle between a and b is ALWAYS 60°!',
          hi: 'स्वर्णिम त्रिक (3, 5, 7) याद रखें: जब भी |a|=3, |b|=5, |c|=7 और a+b+c=0 हो, तो a और b के बीच कोण हमेशा 60° होता है!',
        },
      },
      {
        id: 'vec-ex-2',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Evaluating |a × î|² + |a × ĵ|² + |a × k̂|²',
          hi: '|a × î|² + |a × ĵ|² + |a × k̂|² का मान ज्ञात करना',
        },
        problem: {
          en: 'For any vector a in 3D space with |a| = 4, find the value of |a × î|² + |a × ĵ|² + |a × k̂|² and (a · î)² + (a · ĵ)² + (a · k̂)².',
          hi: 'यदि किसी 3D सदिश के लिए |a| = 4 है, तो |a × î|² + |a × ĵ|² + |a × k̂|² तथा (a · î)² + (a · ĵ)² + (a · k̂)² का मान ज्ञात कीजिए।',
        },
        stepByStep: {
          en: 'Let a = x î + y ĵ + z k̂ where x² + y² + z² = |a|² = 16.\n1. a · î = x, a · ĵ = y, a · k̂ = z ⇒ Σ(a · î)² = x² + y² + z² = |a|² = 16.\n2. By Lagrange Identity, |a × î|² = |a|²|î|² - (a · î)² = |a|² - x². Summing over î, ĵ, k̂ gives: 3|a|² - (x² + y² + z²) = 3|a|² - |a|² = 2|a|² = 2(16) = 32.',
          hi: 'माना a = x î + y ĵ + z k̂ जहाँ x² + y² + z² = |a|² = 16।\n1. Σ(a · î)² = x² + y² + z² = |a|² = 16।\n2. लाग्रेंज सूत्र से |a × î|² = |a|² - x²। तीनों का योग करने पर: 3|a|² - (x²+y²+z²) = 2|a|² = 2 × 16 = 32।',
        },
        shortcut: {
          en: 'Standard Identities: Σ(a · î)² = |a|² and Σ|a × î|² = 2|a|². Also Σ î × (a × î) = 2a.',
          hi: 'सीधे सूत्र याद रखें: Σ(a · î)² = |a|² तथा Σ|a × î|² = 2|a|²।',
        },
      },
      {
        id: 'vec-ex-3',
        difficulty: 'Ranker Tier',
        title: {
          en: 'Solving Vector Equation r × a = b × a and r · c = 0',
          hi: 'सदिश समीकरण r × a = b × a और r · c = 0 को हल करना',
        },
        problem: {
          en: 'Find the vector r satisfying r × a = b × a and r · c = 0, given that a · c ≠ 0.',
          hi: 'सदिश समीकरण r × a = b × a और r · c = 0 को संतुष्ट करने वाला सदिश r ज्ञात कीजिए (जहाँ a · c ≠ 0)।',
        },
        stepByStep: {
          en: 'Step 1: From r × a = b × a ⇒ (r - b) × a = 0. Since the cross product is zero, (r - b) is parallel to a!\nStep 2: Write r - b = λa ⇒ r = b + λa for some scalar λ.\nStep 3: Use the second condition r · c = 0: (b + λa) · c = 0 ⇒ b · c + λ(a · c) = 0 ⇒ λ = -(b · c)/(a · c).\nStep 4: Substitute λ back: r = b - [(b · c)/(a · c)]a.',
          hi: 'चरण 1: r × a = b × a ⇒ (r - b) × a = 0, अर्थात सदिश (r - b) सदिश a के समांतर है!\nचरण 2: अतः r - b = λa ⇒ r = b + λa।\nचरण 3: r · c = 0 रखने पर: (b + λa) · c = 0 ⇒ λ = -(b · c)/(a · c)।\nचरण 4: मान रखने पर r = b - [(b · c)/(a · c)]a।',
        },
        shortcut: {
          en: 'Never take components (x, y, z)! Always convert (r - b) × a = 0 into r = b + λa.',
          hi: 'कभी भी x, y, z घटक न मानें! सीधे (r - b) × a = 0 को r = b + λa में बदलें।',
        },
      },
    ],
    examTraps: [
      {
        id: 'vec-trap-1',
        trap: {
          en: 'Writing the angle bisector of vectors a and b as λ(a + b).',
          hi: 'सदिश a और b के कोण समद्विभाजक को λ(a + b) लिख देना।',
        },
        correction: {
          en: 'a + b bisects the angle ONLY when |a| = |b| (rhombus)! For unequal magnitudes, first normalize both to unit vectors: Bisector = λ(a/|a| + b/|b|).',
          hi: 'a + b केवल तभी कोण को समद्विभाजित करता है जब |a| = |b| हो! असमान परिमाण होने पर हमेशा इकाई सदिशों का योग करें: समद्विभाजक = λ(a/|a| + b/|b|)।',
        },
      },
      {
        id: 'vec-trap-2',
        trap: {
          en: 'Assuming a · b = a · c implies b = c, or a × b = a × c implies b = c.',
          hi: 'यह मान लेना कि a · b = a · c से b = c होगा, केवल दोनों तरफ से a काटकर।',
        },
        correction: {
          en: 'Vector division does NOT exist! a · b = a · c means a · (b - c) = 0 (so a ⊥ b-c). Only when BOTH a · b = a · c AND a × b = a × c hold (for a ≠ 0) can you conclude b = c!',
          hi: 'सदिशों में भाग संक्रिया नहीं होती! केवल जब a · b = a · c और a × b = a × c दोनों एक साथ सत्य हों (a ≠ 0), तभी b = c होता है!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'Lagrange Identity: |a × b|² + (a · b)² = |a|²|b|² — Asked almost every year in NIMCET!',
        hi: 'लाग्रेंज सर्वसमिका: |a × b|² + (a · b)² = |a|²|b|² — NIMCET में लगभग हर वर्ष पूछा जाता है!',
      },
      {
        en: 'For any unit vectors â and b̂ with angle θ: |â - b̂| = 2 sin(θ/2) and |â + b̂| = 2 cos(θ/2).',
        hi: 'किन्हीं दो इकाई सदिशों â और b̂ के बीच कोण θ हो तो: |â - b̂| = 2 sin(θ/2) तथा |â + b̂| = 2 cos(θ/2)।',
      },
      {
        en: 'Vector Triple Product expansion ("BAC - CAB" rule): a × (b × c) = (a · c)b - (a · b)c.',
        hi: 'सदिश त्रिक गुणनफल विस्तार ("BAC - CAB" नियम): a × (b × c) = (a · c)b - (a · b)c।',
      },
      {
        en: '[a+b  b+c  c+a] = 2[a b c], whereas [a-b  b-c  c-a] = 0 always!',
        hi: '[a+b  b+c  c+a] = 2[a b c] होता है, जबकि [a-b  b-c  c-a] सदैव 0 होता है!',
      },
      {
        en: 'For any vector a: |a × î|² + |a × ĵ|² + |a × k̂|² = 2|a|², and (a·î)² + (a·ĵ)² + (a·k̂)² = |a|².',
        hi: 'किसी भी सदिश a के लिए: |a × î|² + |a × ĵ|² + |a × k̂|² = 2|a|² होता है।',
      },
      {
        en: 'Shortest distance between skew lines r = a₁ + λb₁ and r = a₂ + μb₂ is |(a₂ - a₁) · (b₁ × b₂)| / |b₁ × b₂|.',
        hi: 'विषमतलीय रेखाओं (Skew Lines) के बीच न्यूनतम दूरी = |(a₂ - a₁) · (b₁ × b₂)| / |b₁ × b₂|।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Vectors Complete Mastery Map', hi: 'सदिश बीजगणित मास्टर माइंड मैप' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Dot & Cross Operations', hi: 'इंडेक्स 1: अदिश और सदिश संक्रियाएं' },
          branches: [
            {
              id: 'vec-b1',
              title: { en: 'Dot Product (Scalar)', hi: 'अदिश गुणनफल (Dot)' },
              keyPoints: [
                { en: 'Orthogonality test: a · b = 0', hi: 'लंबवत शर्त: a · b = 0' },
                { en: 'Projection of a on b = (a·b)/|b|', hi: 'b पर a का प्रक्षेप = (a·b)/|b|' },
                { en: 'Angle is acute if a·b > 0, obtuse if a·b < 0', hi: 'यदि a·b > 0 तो न्यूनकोण, यदि a·b < 0 तो अधिककोण' },
              ],
              subFormula: 'cos θ = (a · b) / (|a||b|)',
            },
            {
              id: 'vec-b2',
              title: { en: 'Cross Product (Vector)', hi: 'सदिश गुणनफल (Cross)' },
              keyPoints: [
                { en: 'Collinearity test: a × b = 0', hi: 'संरेख शर्त: a × b = 0' },
                { en: 'Diagonal area of parallelogram = ½|d₁ × d₂|', hi: 'विकर्णों से समांतर चतुर्भुज क्षेत्रफल = ½|d₁ × d₂|' },
                { en: 'Unit normal to plane of a & b: ±(a×b)/|a×b|', hi: 'a और b के तल के लंबवत इकाई सदिश: ±(a×b)/|a×b|' },
              ],
              subFormula: '|a × b|² + (a · b)² = |a|²|b|²',
            },
          ],
        },
        {
          tabName: { en: 'Index 2: Triple Products & 3D Volumes', hi: 'इंडेक्स 2: त्रिक गुणनफल और 3D आयतन' },
          branches: [
            {
              id: 'vec-b3',
              title: { en: 'Scalar Triple Product [a b c]', hi: 'अदिश त्रिक गुणनफल [a b c]' },
              keyPoints: [
                { en: 'Parallelepiped Vol = |[a b c]|; Tetrahedron Vol = ⅙|[a b c]|', hi: 'समांतर षट्फलक = |[a b c]|; चतुष्फलक आयतन = ⅙|[a b c]|' },
                { en: 'Coplanarity condition: [a b c] = 0', hi: 'समतलीय शर्त: [a b c] = 0' },
              ],
              subFormula: '[a×b  b×c  c×a] = [a b c]²',
            },
            {
              id: 'vec-b4',
              title: { en: 'Vector Triple Product (VTP)', hi: 'सदिश त्रिक गुणनफल (VTP)' },
              keyPoints: [
                { en: 'Lies in the plane of b and c', hi: 'यह सदिश b और c के समतल में स्थित होता है' },
                { en: 'Not associative: a × (b × c) ≠ (a × b) × c', hi: 'सहचारी नहीं है: a × (b × c) ≠ (a × b) × c' },
              ],
              subFormula: 'a × (b × c) = (a·c)b - (a·b)c',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-vec-1',
        category: { en: 'Identities', hi: 'सर्वसमिकाएं' },
        title: { en: "Lagrange's Vector Identity", hi: 'लाग्रेंज सदिश सर्वसमिका' },
        expression: '|a × b|² + |a · b|² = |a|² |b|²',
        variables: { en: 'a, b: Any two 3D vectors', hi: 'a, b: कोई भी दो 3D सदिश' },
        examTip: {
          en: 'Whenever |a|, |b|, and |a·b| are given and |a×b| is asked, plug directly into this identity.',
          hi: 'जब भी |a|, |b| और |a·b| दिए हों और |a×b| पूछा जाए, सीधे इस सूत्र का प्रयोग करें।',
        },
      },
      {
        id: 'f-vec-2',
        category: { en: 'Triple Products', hi: 'त्रिक गुणनफल' },
        title: { en: 'Box Product Standard Multipliers', hi: 'बॉक्स गुणनफल मानक सर्वसमिकाएं' },
        expression: '[a+b  b+c  c+a] = 2[a b c]   |   [a×b  b×c  c×a] = [a b c]²   |   [a-b  b-c  c-a] = 0',
        variables: { en: '[a b c]: Scalar triple product', hi: '[a b c]: अदिश त्रिक गुणनफल' },
        examTip: {
          en: 'Direct 5-second NIMCET PYQ shortcut (asked in 2019, 2021, 2023, 2024).',
          hi: '5-सेकंड का सीधा NIMCET PYQ शॉर्टकट (2019, 2021, 2023, 2024 में पूछा गया)।',
        },
      },
      {
        id: 'f-vec-3',
        category: { en: 'Geometry', hi: 'ज्यामिति' },
        title: { en: 'Area of Triangle & Tetrahedron Volume', hi: 'त्रिभुज का क्षेत्रफल और चतुष्फलक का आयतन' },
        expression: 'Area(ΔABC) = ½|AB × AC| = ½|a×b + b×c + c×a|   |   Vol(Tetrahedron) = ⅙|[AB  AC  AD]|',
        variables: { en: 'a, b, c, d: Position vectors of vertices', hi: 'a, b, c, d: शीर्षों के स्थिति सदिश' },
        examTip: {
          en: 'Do not forget the factor 1/6 for Tetrahedron Volume (for a triangular prism, the factor is 1/2).',
          hi: 'चतुष्फलक (Tetrahedron) के आयतन में 1/6 से गुणा करना न भूलें।',
        },
      },
      {
        id: 'f-vec-4',
        category: { en: '3D Lines', hi: '3D रेखाएं' },
        title: { en: 'Shortest Distance Between Skew Lines', hi: 'विषमतलीय रेखाओं के बीच न्यूनतम दूरी' },
        expression: 'd = |(a₂ - a₁) · (b₁ × b₂)| / |b₁ × b₂|   |   Parallel Lines: d = |b × (a₂ - a₁)| / |b|',
        variables: { en: 'a₁, a₂: points on lines; b₁, b₂: direction vectors', hi: 'a₁, a₂: रेखाओं पर बिंदु; b₁, b₂: दिशा सदिश' },
        examTip: {
          en: 'Two lines intersect (are coplanar) iff the numerator [a₂ - a₁   b₁   b₂] = 0.',
          hi: 'दो रेखाएं प्रतिच्छेद करती हैं (समतलीय होती हैं) यदि और केवल यदि [a₂ - a₁   b₁   b₂] = 0 हो।',
        },
      },
    ],
  },

  // ==================== MATH 02: PROBABILITY & BAYES THEOREM ====================
  {
    id: 'math-prob-stats',
    subjectId: 'mathematics',
    number: '02',
    title: {
      en: "Probability, Conditional Probability, Bayes' Theorem & Binomial Distribution",
      hi: 'प्रायिकता, सप्रतिबंध प्रायिकता, बेज़ प्रमेय और द्विपद बंटन (Probability)',
    },
    priorityTier: 1,
    expectedQuestions: 5,
    expectedMarks: 60,
    estimatedHours: 8,
    visualizerType: 'venn_prob_3d',
    deepConcept: {
      intuition: {
        en: 'Probability quantifies uncertainty on a scale from 0 to 1. In NIMCET, Probability is a guaranteed 5-to-6 question goldmine. Every complex problem breaks down into 4 core tools: (1) Combinatorial counting n(E)/n(S), (2) Addition & De Morgan Set rules for P(A ∪ B), (3) Multiplication rule for Independent Events where P(At least one success) = 1 - P(All fail), and (4) Conditional Probability P(A|B) & Bayes’ Theorem for updating probabilities after observing an event.',
        hi: 'प्रायिकता (Probability) अनिश्चितता को 0 से 1 के पैमाने पर मापती है। NIMCET में प्रायिकता से हर साल 5 से 6 प्रश्न पक्के आते हैं। प्रत्येक कठिन प्रश्न 4 मुख्य नियमों से हल होता है: (1) क्रमचय-संचय द्वारा n(E)/n(S), (2) P(A ∪ B) के लिए योग और डी-मॉर्गन नियम, (3) स्वतंत्र घटनाओं के लिए P(कम से कम एक सफलता) = 1 - P(सभी असफल), और (4) सप्रतिबंध प्रायिकता P(A|B) तथा बेज़ प्रमेय।',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. Addition Theorem, Odds in Favor & Odds Against',
            hi: '1. योग प्रमेय, अनुकूल संयोगानुपात (Odds in Favor) और प्रतिकूल संयोगानुपात',
          },
          explanation: {
            en: 'If Odds in Favor of event A are a : b, then P(A) = a/(a + b) and P(Ā) = b/(a + b). If Odds Against A are a : b, then P(A) = b/(a + b). For any two events, P(A ∪ B) = P(A) + P(B) - P(A ∩ B), and P(Exactly one of A, B) = P(A) + P(B) - 2P(A ∩ B).',
            hi: 'यदि घटना A के अनुकूल संयोगानुपात (Odds in Favor) a : b हैं, तो P(A) = a/(a + b) और यदि प्रतिकूल संयोगानुपात (Odds Against) a : b हैं, तो P(A) = b/(a + b) होता है। ठीक एक घटना घटने की प्रायिकता P(A) + P(B) - 2P(A ∩ B) होती है।',
          },
          mathematicalForm: 'P(A ∪ B) = P(A) + P(B) - P(A ∩ B)  |  P(Exactly one) = P(A) + P(B) - 2P(A ∩ B)',
        },
        {
          heading: {
            en: '2. Mutually Exclusive vs Independent Events (Critical Distinction)',
            hi: '2. परस्पर अपवर्जी (Mutually Exclusive) बनाम स्वतंत्र घटनाएं (Independent)',
          },
          explanation: {
            en: 'Mutually Exclusive means two events cannot happen together: P(A ∩ B) = 0 (Set property). Independent means occurrence of A does not change the probability of B: P(A ∩ B) = P(A)·P(B) (Probability property). Two events with positive probabilities P(A)>0, P(B)>0 can NEVER be both mutually exclusive and independent!',
            hi: 'परस्पर अपवर्जी का अर्थ है दोनों एक साथ नहीं घट सकते: P(A ∩ B) = 0। स्वतंत्र घटनाओं का अर्थ है एक के घटने का दूसरे पर प्रभाव नहीं पड़ता: P(A ∩ B) = P(A)·P(B)। दो अशून्य प्रायिकता वाली घटनाएं कभी भी एक साथ अपवर्जी और स्वतंत्र दोनों नहीं हो सकतीं!',
          },
          mathematicalForm: 'Mutually Exclusive: P(A ∩ B) = 0  |  Independent: P(A ∩ B) = P(A) · P(B)',
        },
        {
          heading: {
            en: "3. Conditional Probability, Total Probability & Bayes' Theorem",
            hi: '3. सप्रतिबंध प्रायिकता, संपूर्ण प्रायिकता और बेज़ प्रमेय (Bayes Theorem)',
          },
          explanation: {
            en: 'P(A|B) = P(A ∩ B)/P(B) restricts the sample space to B. When an event E can occur through k mutually exclusive causes H₁, H₂, ..., Hₖ, Total Probability is P(E) = Σ P(Hᵢ)P(E|Hᵢ), and Bayes’ Theorem finds the reverse probability P(H₁|E) = P(H₁)P(E|H₁) / P(E).',
            hi: 'P(A|B) = P(A ∩ B)/P(B) प्रतिदर्श समष्टि को B तक सीमित कर देता है। जब कोई घटना E कई कारणों H₁, H₂, ... से घट सकती हो, तो बेज़ प्रमेय किसी विशेष कारण H₁ की विपरीत प्रायिकता P(H₁|E) = P(H₁)P(E|H₁) / ΣP(Hᵢ)P(E|Hᵢ) देता है।',
          },
          mathematicalForm: 'P(H₁ | E) = P(H₁)P(E | H₁) / [P(H₁)P(E | H₁) + P(H₂)P(E | H₂)]',
        },
        {
          heading: {
            en: '4. Bernoulli Trials & Binomial Probability Distribution B(n, p)',
            hi: '4. बरनौली परीक्षण और द्विपद प्रायिकता बंटन B(n, p)',
          },
          explanation: {
            en: 'If an experiment is repeated n independent times with constant success probability p and failure q = 1 - p, the probability of exactly r successes is P(X = r) = ⁿCᵣ pʳ qⁿ⁻ʳ. Its Mean is E(X) = np, Variance is Var(X) = npq, and Standard Deviation is √(npq).',
            hi: 'यदि किसी प्रयोग को n बार स्वतंत्र रूप से दोहराया जाए जहाँ सफलता की प्रायिकता p और असफलता q = 1 - p हो, तो ठीक r सफलताओं की प्रायिकता P(X = r) = ⁿCᵣ pʳ qⁿ⁻ʳ होती है। इसका माध्य = np और प्रसरण = npq होता है।',
          },
          mathematicalForm: 'P(X = r) = ⁿCᵣ pʳ qⁿ⁻ʳ   |   Mean = np,  Variance = npq,  p + q = 1',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'Spam Filtering, Medical Diagnostics & Network Packet Loss',
          hi: 'ईमेल स्पैम फ़िल्टर, मेडिकल टेस्टिंग और नेटवर्क पैकेट विश्वसनीयता',
        },
        title: {
          en: "How Bayes' Theorem Separates True Positives from False Alarms",
          hi: 'बेज़ प्रमेय सही पहचान और झूठे अलार्म को कैसे अलग करता है',
        },
        howItWorks: {
          en: 'In cybersecurity intrusion detection and medical screening, Bayes’ theorem combines the base rate (prior probability P(H)) with sensor sensitivity P(E|H) to compute actual posterior risk.',
          hi: 'साइबर सुरक्षा और मेडिकल जांच में बेज़ प्रमेय पूर्व प्रायिकता P(H) और सेंसर सटीकता P(E|H) को मिलाकर वास्तविक जोखिम की गणना करता है।',
        },
        practicalExample: {
          en: 'If 3 redundant servers fail independently with probability 0.1 each, system uptime is 1 - (0.1)³ = 0.999 (99.9% reliability).',
          hi: 'यदि 3 सर्वरों के फेल होने की स्वतंत्र प्रायिकता 0.1 है, तो सिस्टम के चालू रहने की प्रायिकता 1 - (0.1)³ = 0.999 (99.9%) होती है।',
        },
      },
    },
    subtopics: [
      {
        id: 'prob-sub-1',
        title: {
          en: '2.1 Sample Space Reference Table: Coins, Dice, Cards & Leap Years',
          hi: '2.1 प्रतिदर्श समष्टि संदर्भ: सिक्के, पासे, ताश के पत्ते और लीप वर्ष',
        },
        detailedTheory: {
          en: 'A standard deck of 52 cards has 4 suits (Spades ♠, Clubs ♣ = Black 26; Hearts ♥, Diamonds ♦ = Red 26), each with 13 cards (Ace, 2..10, Jack, Queen, King). There are 12 Face Cards (4 Kings + 4 Queens + 4 Jacks) and 16 Honor Cards (Face Cards + 4 Aces). For 2 dice (36 outcomes), sum S ranges from 2 to 12: frequency of sum S is (S - 1) for 2 ≤ S ≤ 7 and (13 - S) for 7 ≤ S ≤ 12 (so sum=7 has maximum 6 outcomes!).',
          hi: '52 पत्तों की गड्डी में 4 सूट (हुकुम ♠, चिड़ी ♣ = 26 काले; पान ♥, ईंट ♦ = 26 लाल) होते हैं, प्रत्येक में 13 पत्ते। कुल 12 फेस कार्ड (बादशाह, बेगम, गुलाम) और 4 इक्के होते हैं। दो पासों (36 परिणाम) के योग S (2 से 12) में योग 7 आने के सर्वाधिक 6 तरीके होते हैं!',
        },
        keyRules: [
          {
            en: 'Non-leap year (365 days = 52 weeks + 1 odd day): Probability of 53 Sundays = 1/7.',
            hi: 'साधारण वर्ष (365 दिन = 52 सप्ताह + 1 विषम दिन) में 53 रविवार होने की प्रायिकता = 1/7।',
          },
          {
            en: 'Leap year (366 days = 52 weeks + 2 odd days): Probability of 53 Sundays = 2/7; Probability of 53 Sundays OR 53 Mondays = 2/7 + 2/7 - 1/7 = 3/7.',
            hi: 'लीप वर्ष (366 दिन = 52 सप्ताह + 2 विषम दिन) में 53 रविवार होने की प्रायिकता = 2/7।',
          },
          {
            en: 'If A and B are independent, then (A and B̄), (Ā and B), and (Ā and B̄) are ALSO independent!',
            hi: 'यदि A और B स्वतंत्र हैं, तो (A और B̄), (Ā और B), तथा (Ā और B̄) भी स्वतंत्र होते हैं!',
          },
        ],
        keyEquations: [
          'Two Dice Sum 7 Probability = 6/36 = 1/6',
          'P(Ā ∩ B̄) = 1 - P(A ∪ B) = P(Ā)·P(B̄) (when independent)',
          'P(A | B̄) = [P(A) - P(A ∩ B)] / [1 - P(B)]',
        ],
      },
      {
        id: 'prob-sub-2',
        title: {
          en: '2.2 Infinite GP Alternate Turn Games & Total Probability',
          hi: '2.2 अनंत गुणोत्तर श्रेणी (GP) बारी-बारी के खेल और संपूर्ण प्रायिकता',
        },
        detailedTheory: {
          en: 'Suppose A and B toss a coin or roll a die alternately, and the first to get a success (probability p, failure q = 1 - p) wins. If A starts first: A wins on 1st, 3rd, 5th... toss. So P(A wins) = p + q²p + q⁴p + ... = p / (1 - q²) = p / [p(1 + q)] = 1 / (1 + q), and P(B wins) = q / (1 + q)!',
          hi: 'मान लीजिए A और B बारी-बारी से पासा फेंकते हैं और पहले सफलता (प्रायिकता p, असफलता q = 1 - p) पाने वाला जीतता है। यदि A शुरुआत करता है, तो P(A की जीत) = p/(1 - q²) = 1/(1 + q) तथा P(B की जीत) = q/(1 + q) होती है!',
        },
        keyRules: [
          {
            en: 'In an alternate-turn game with single-trial win probability p (and q = 1-p): Ratio of P(Starter A wins) : P(Second player B wins) is ALWAYS 1 : q!',
            hi: 'बारी-बारी के खेल में पहले खिलाड़ी A और दूसरे खिलाड़ी B के जीतने का अनुपात सदैव 1 : q होता है!',
          },
          {
            en: 'In Binomial Distribution B(n, p), Mean (np) is ALWAYS strictly greater than Variance (npq) because 0 < q < 1.',
            hi: 'द्विपद बंटन B(n, p) में माध्य (np) सदैव प्रसरण (npq) से बड़ा होता है क्योंकि 0 < q < 1 होता है।',
          },
        ],
        keyEquations: [
          'P(A starts & wins) = 1 / (1 + q)   |   P(B wins) = q / (1 + q)',
          'q = Variance / Mean = npq / np',
        ],
      },
    ],
    workedExamples: [
      {
        id: 'prob-ex-1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Finding Binomial Distribution Parameters from Mean & Variance',
          hi: 'माध्य और प्रसरण से द्विपद बंटन ज्ञात करना',
        },
        problem: {
          en: 'The mean and variance of a binomial distribution are 4 and 3 respectively. Find the number of trials n and the probability of getting at least one success.',
          hi: 'एक द्विपद बंटन का माध्य और प्रसरण क्रमशः 4 और 3 हैं। परीक्षणों की संख्या n तथा कम से कम एक सफलता मिलने की प्रायिकता ज्ञात कीजिए।',
        },
        stepByStep: {
          en: 'Step 1: Given Mean np = 4 and Variance npq = 3.\nStep 2: Divide Variance by Mean: q = (npq)/(np) = 3/4. Therefore p = 1 - q = 1 - 3/4 = 1/4.\nStep 3: Since np = 4 and p = 1/4, we get n(1/4) = 4 ⇒ n = 16.\nStep 4: P(X ≥ 1) = 1 - P(X = 0) = 1 - q¹⁶ = 1 - (3/4)¹⁶.',
          hi: 'चरण 1: दिया है माध्य np = 4 और प्रसरण npq = 3।\nचरण 2: भाग देने पर q = (npq)/(np) = 3/4, अतः सफलता p = 1 - 3/4 = 1/4।\nचरण 3: np = 4 में p = 1/4 रखने पर n = 16।\nचरण 4: कम से कम एक सफलता P(X ≥ 1) = 1 - P(X = 0) = 1 - (3/4)¹⁶।',
        },
        shortcut: {
          en: 'Always divide Variance/Mean first to get q immediately!',
          hi: 'हमेशा पहले (प्रसरण / माध्य) करें जिससे q का मान तुरंत निकल आता है!',
        },
      },
      {
        id: 'prob-ex-2',
        difficulty: 'Ranker Tier',
        title: {
          en: 'Truth vs Lie Problem Using Bayes’ Theorem',
          hi: 'बेज़ प्रमेय पर आधारित सत्य बनाम झूठ प्रश्न',
        },
        problem: {
          en: 'A speaks truth in 75% of cases and B speaks truth in 80% of cases. In what percentage of cases are they likely to contradict each other in stating the same fact?',
          hi: 'A 75% मामलों में सच बोलता है और B 80% मामलों में सच बोलता है। एक ही तथ्य को बताते समय कितने प्रतिशत मामलों में वे एक-दूसरे का खंडन (विरोधाभास) करेंगे?',
        },
        stepByStep: {
          en: 'Step 1: P(A) = 75/100 = 3/4 ⇒ P(Ā) = 1/4. P(B) = 80/100 = 4/5 ⇒ P(B̄) = 1/5.\nStep 2: They contradict each other when (A speaks truth AND B lies) OR (A lies AND B speaks truth).\nStep 3: P(Contradict) = P(A)P(B̄) + P(Ā)P(B) = (3/4)(1/5) + (1/4)(4/5) = 3/20 + 4/20 = 7/20.\nStep 4: In percentage: (7/20) × 100% = 35%.',
          hi: 'चरण 1: P(A) = 3/4 ⇒ P(Ā) = 1/4 तथा P(B) = 4/5 ⇒ P(B̄) = 1/5।\nचरण 2: विरोधाभास तब होगा जब एक सच बोले और दूसरा झूठ बोले: P(A)P(B̄) + P(Ā)P(B)।\nचरण 3: (3/4)(1/5) + (1/4)(4/5) = 7/20 = 35%।',
        },
        shortcut: {
          en: 'Contradiction = P(Exactly one true) = P(A) + P(B) - 2P(A)P(B) = 0.75 + 0.80 - 2(0.60) = 1.55 - 1.20 = 0.35 (35%).',
          hi: 'विरोधाभास = P(A) + P(B) - 2P(A)P(B) = 0.75 + 0.80 - 1.20 = 0.35 (35%)।',
        },
      },
    ],
    examTraps: [
      {
        id: 'prob-trap-1',
        trap: {
          en: 'Accepting a Binomial Distribution where Variance > Mean.',
          hi: 'ऐसे द्विपद बंटन को सही मान लेना जिसमें प्रसरण (Variance) माध्य (Mean) से बड़ा हो।',
        },
        correction: {
          en: 'In Binomial Distribution, Variance/Mean = q < 1. If a question asks "Which of the following is NOT a valid Binomial Distribution?", immediately pick the option where Variance ≥ Mean!',
          hi: 'द्विपद बंटन में सदैव प्रसरण < माध्य होता है। यदि किसी विकल्प में प्रसरण ≥ माध्य दिया है, तो वह असंभव है!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'For Independent Events A & B: P(A ∪ B) = 1 - P(Ā)·P(B̄).',
        hi: 'स्वतंत्र घटनाओं A और B के लिए: P(A ∪ B) = 1 - P(Ā)·P(B̄)।',
      },
      {
        en: 'For Binomial Distribution B(n, p): Mean = np, Variance = npq (so Mean > Variance always).',
        hi: 'द्विपद बंटन B(n, p) के लिए: माध्य = np, प्रसरण = npq (अतः सदैव माध्य > प्रसरण)।',
      },
      {
        en: 'Probability of getting 53 Sundays in a Leap Year = 2/7; in a Non-Leap Year = 1/7.',
        hi: 'लीप वर्ष में 53 रविवार आने की प्रायिकता = 2/7 और साधारण वर्ष में = 1/7 होती है।',
      },
      {
        en: 'De Morgan in Probability: P(neither A nor B) = P(Ā ∩ B̄) = 1 - P(A ∪ B).',
        hi: 'प्रायिकता में डी-मॉर्गन नियम: P(न तो A न ही B) = P(Ā ∩ B̄) = 1 - P(A ∪ B)।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Probability & Bayes Mastery (60M)', hi: 'प्रायिकता और बेज़ प्रमेय (60 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Core Probability Rules', hi: 'इंडेक्स 1: मुख्य प्रायिकता सूत्र' },
          branches: [
            {
              id: 'pr-b1',
              title: { en: 'Set-Based Probability', hi: 'समुच्चय आधारित प्रायिकता' },
              keyPoints: [
                { en: 'P(only A) = P(A) - P(A ∩ B)', hi: 'P(केवल A) = P(A) - P(A ∩ B)' },
                { en: 'P(neither A nor B) = 1 - P(A ∪ B)', hi: 'P(न तो A न ही B) = 1 - P(A ∪ B)' },
              ],
              subFormula: 'P(A|B) = P(A ∩ B) / P(B)',
            },
            {
              id: 'pr-b2',
              title: { en: 'Bernoulli Trials & Binomial', hi: 'बरनौली परीक्षण और द्विपद बंटन' },
              keyPoints: [
                { en: 'Exactly r successes in n trials', hi: 'n प्रयासों में ठीक r सफलताएं' },
                { en: 'p + q = 1, Mean = np, Var = npq', hi: 'p + q = 1, माध्य = np, प्रसरण = npq' },
              ],
              subFormula: 'P(X = r) = ⁿCᵣ pʳ qⁿ⁻ʳ',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-prob-1',
        category: { en: 'Probability', hi: 'प्रायिकता' },
        title: { en: 'Total Probability & Bayes Rule', hi: 'संपूर्ण प्रायिकता और बेज़ नियम' },
        expression: 'P(E₁|A) = P(E₁)P(A|E₁) / [P(E₁)P(A|E₁) + P(E₂)P(A|E₂)]',
        variables: { en: 'E₁, E₂: Mutually exclusive exhaustive events', hi: 'E₁, E₂: परस्पर अपवर्जी घटनाएं' },
        examTip: {
          en: 'Draw a 2-level branch tree with weights on edges; multiply along branches and divide target branch by sum of branches.',
          hi: '2-स्तरीय ट्री बनाएं; शाखाओं का गुणा करें और लक्षित शाखा को सभी शाखाओं के योग से भाग दें।',
        },
      },
      {
        id: 'f-prob-2',
        category: { en: 'Binomial Distribution', hi: 'द्विपद बंटन' },
        title: { en: 'Binomial Mean, Variance & Mode', hi: 'द्विपद माध्य, प्रसरण और बहुलक' },
        expression: 'Mean = np   |   Variance = npq   |   Mode = floor((n + 1)p)',
        variables: { en: 'n: trials; p: success prob; q = 1 - p', hi: 'n: परीक्षण; p: सफलता प्रायिकता' },
        examTip: {
          en: 'If (n+1)p is an integer m, the distribution is bimodal with two modes: m and m - 1.',
          hi: 'यदि (n+1)p एक पूर्णांक m है, तो इसके दो बहुलक m और m - 1 होते हैं।',
        },
      },
    ],
  },

  // ==================== MATH 03: STATISTICS ====================
  {
    id: 'math-statistics',
    subjectId: 'mathematics',
    number: '03',
    title: {
      en: 'Statistics: Mean, Median, Mode, Variance, SD & Moments',
      hi: 'सांख्यिकी: माध्य, माध्यिका, बहुलक, प्रसरण और मानक विचलन (Statistics)',
    },
    priorityTier: 1,
    expectedQuestions: 4,
    expectedMarks: 48,
    estimatedHours: 6,
    visualizerType: 'venn_prob_3d',
    deepConcept: {
      intuition: {
        en: 'Statistics summarizes datasets using two numbers: Central Tendency (where the center sits: Mean, Median, Mode) and Dispersion (how spread out the numbers are: Mean Deviation, Variance σ², Standard Deviation σ, Coefficient of Variation). NIMCET asks 3 to 4 rapid-fire questions from linear transformations Y = aX + b, Wrong-Observation Replacement, and Combined Variance!',
        hi: 'सांख्यिकी किसी डेटा को दो मापों से दर्शाती है: केंद्रीय प्रवृत्ति (माध्य, माध्यिका, बहुलक) और प्रकीर्णन या फैलाव (माध्य विचलन, प्रसरण σ², मानक विचलन σ)। NIMCET में रैखिक रूपांतरण Y = aX + b, गलत प्रेक्षण को सही प्रेक्षण से बदलने, और संयुक्त प्रसरण से सीधे 3 से 4 प्रश्न आते हैं!',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. Empirical Relation & Measures of Central Tendency',
            hi: '1. अनुभवजन्य संबंध (Empirical Formula) और केंद्रीय प्रवृत्ति की मापें',
          },
          explanation: {
            en: 'For moderately skewed distributions: Mode = 3·Median - 2·Mean, or equivalently (Mean - Mode) = 3(Mean - Median). Algebraic sum of deviations of observations from their Arithmetic Mean is ALWAYS ZERO: Σ(xᵢ - x̄) = 0. Mean Deviation Σ|xᵢ - A|/n is minimum when taken about the Median (A = Median)!',
            hi: 'असममित बंटन के लिए: बहुलक (Mode) = 3 × माध्यिका (Median) - 2 × माध्य (Mean)। समांतर माध्य से लिए गए विचलनों का बीजगणितीय योग सदैव शून्य होता है: Σ(xᵢ - x̄) = 0। माध्य विचलन (Mean Deviation) तब न्यूनतम होता है जब वह माध्यिका (Median) के सापेक्ष लिया जाए!',
          },
          mathematicalForm: 'Mode = 3·Median - 2·Mean   |   Σ(xᵢ - x̄) = 0   |   Σ(xᵢ - A)² is min at A = x̄',
        },
        {
          heading: {
            en: '2. Effect of Change of Origin (+b) and Scale (×a) on Mean & Variance',
            hi: '2. मूलबिंदु (+b) और पैमाने (×a) के परिवर्तन का माध्य और प्रसरण पर प्रभाव',
          },
          explanation: {
            en: 'If every observation xᵢ is transformed to yᵢ = a·xᵢ + b: New Mean ȳ = a·x̄ + b; New Median = a·Med + b; New Mode = a·Mode + b. However, Variance and Standard Deviation are completely independent of +b! Thus Var(aX + b) = a²·Var(X) and SD(aX + b) = |a|·SD(X).',
            hi: 'यदि प्रत्येक प्रेक्षण xᵢ को yᵢ = a·xᵢ + b में बदला जाए: नया माध्य ȳ = a·x̄ + b होता है। परंतु प्रसरण (Variance) और मानक विचलन (SD) पर जोड़ने/घटाने (+b) का कोई प्रभाव नहीं पड़ता! अतः Var(aX + b) = a²·Var(X) तथा SD(aX + b) = |a|·SD(X) होता है।',
          },
          mathematicalForm: 'Var(aX + b) = a² · Var(X)   |   SD(aX + b) = |a| · SD(X)',
        },
        {
          heading: {
            en: '3. Variance of First n Natural Numbers & Combined Variance',
            hi: '3. प्रथम n प्राकृत संख्याओं का प्रसरण और संयुक्त प्रसरण',
          },
          explanation: {
            en: 'For first n natural numbers (1, 2, ..., n): Mean = (n + 1)/2 and Variance σ² = (n² - 1)/12. For first n even or first n odd natural numbers (common difference d = 2): Variance = (n² - 1)/3. For any AP with common difference d and n terms, Variance = d²(n² - 1)/12!',
            hi: 'प्रथम n प्राकृत संख्याओं (1, 2, ..., n) का माध्य = (n + 1)/2 और प्रसरण σ² = (n² - 1)/12 होता है। सार्व अंतर d वाली किसी समांतर श्रेणी (AP) के n पदों का प्रसरण सीधे d²(n² - 1)/12 होता है!',
          },
          mathematicalForm: 'Var(1..n) = (n² - 1)/12   |   Var(AP with diff d) = d²(n² - 1)/12',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'Financial Portfolio Volatility & Quality Control Six-Sigma',
          hi: 'वित्तीय पोर्टफोलियो जोखिम और सिक्स-सिग्मा गुणवत्ता नियंत्रण',
        },
        title: {
          en: 'Using Coefficient of Variation (CV) to Compare Consistency',
          hi: 'विचरण गुणांक (CV) द्वारा दो खिलाड़ियों या शेयरों की स्थिरता की तुलना',
        },
        howItWorks: {
          en: 'Coefficient of Variation CV = (σ / x̄) × 100 measures relative volatility. A batsman or server with a LOWER CV is MORE consistent and reliable!',
          hi: 'विचरण गुणांक CV = (σ / x̄) × 100 सापेक्ष अस्थिरता को मापता है। जिस खिलाड़ी या सिस्टम का CV कम होता है, वह अधिक स्थिर (Consistent) होता है!',
        },
        practicalExample: {
          en: 'If Team A has CV = 12% and Team B has CV = 21%, Team A is significantly more consistent.',
          hi: 'यदि टीम A का CV = 12% और टीम B का CV = 21% है, तो टीम A अधिक विश्वसनीय और स्थिर है।',
        },
      },
    },
    subtopics: [
      {
        id: 'stat-sub-1',
        title: {
          en: '3.1 Correcting Wrong Observations in Mean & Variance',
          hi: '3.1 गलत प्रेक्षण को हटाकर सही प्रेक्षण जोड़ने पर नया माध्य और प्रसरण',
        },
        detailedTheory: {
          en: 'Suppose for n observations, calculated mean is x̄_old and variance is σ²_old, and later it is found that one observation x_wrong was misread instead of x_right. First find Corrected Sum: Σx_new = n·x̄_old - x_wrong + x_right, giving x̄_new = Σx_new / n. Next find Corrected Sum of Squares: Σx²_new = n(σ²_old + x̄_old²) - x_wrong² + x_right², and compute σ²_new = (Σx²_new / n) - (x̄_new)².',
          hi: 'यदि n प्रेक्षणों की गणना में एक गलत मान x_wrong पढ़ लिया गया हो और सही मान x_right हो: पहले सही योग निकालें Σx_new = n·x̄_old - x_wrong + x_right। फिर वर्गों का सही योग निकालें: Σx²_new = n(σ²_old + x̄_old²) - x_wrong² + x_right², और नया प्रसरण σ²_new = (Σx²_new / n) - (x̄_new)² प्राप्त करें।',
        },
        keyRules: [
          {
            en: 'Mean Deviation about Median ≤ Mean Deviation about Mean.',
            hi: 'माध्यिका के सापेक्ष माध्य विचलन सदैव न्यूनतम होता है।',
          },
          {
            en: 'Sum of squares of deviations Σ(xᵢ - A)² is strictly MINIMUM when A = Arithmetic Mean x̄.',
            hi: 'विचलनों के वर्गों का योग Σ(xᵢ - A)² तब न्यूनतम होता है जब A = समांतर माध्य (x̄) हो।',
          },
        ],
        keyEquations: [
          'Σx²_old = n(σ²_old + x̄_old²)',
          'CV = (σ / x̄) × 100',
        ],
      },
    ],
    workedExamples: [
      {
        id: 'stat-ex-1',
        difficulty: 'Foundation',
        title: {
          en: 'Variance of First 10 Multiples of 3',
          hi: '3 के प्रथम 10 गुणजों (Multiples) का प्रसरण',
        },
        problem: {
          en: 'Find the variance of the first 10 multiples of 3 (i.e. 3, 6, 9, ..., 30).',
          hi: '3 के प्रथम 10 गुणजों (3, 6, 9, ..., 30) का प्रसरण ज्ञात कीजिए।',
        },
        stepByStep: {
          en: 'Step 1: Variance of first n = 10 natural numbers (1, 2, ..., 10) is (n² - 1)/12 = (100 - 1)/12 = 99/12 = 33/4.\nStep 2: Multiplying each observation by k = 3 multiplies the variance by k² = 9.\nStep 3: Required Variance = 9 × (33/4) = 297/4 = 74.25.',
          hi: 'चरण 1: प्रथम n = 10 प्राकृत संख्याओं का प्रसरण = (10² - 1)/12 = 99/12 = 33/4।\nचरण 2: प्रत्येक संख्या को 3 से गुणा करने पर प्रसरण 3² = 9 से गुणा हो जाएगा।\nचरण 3: अभीष्ट प्रसरण = 9 × (33/4) = 297/4 = 74.25।',
        },
        shortcut: {
          en: 'Use Var(AP) = d²(n² - 1)/12 directly with d = 3, n = 10: 9(99)/12 = 297/4 = 74.25!',
          hi: 'सीधे AP का सूत्र लगाएं: d²(n² - 1)/12 = 3²(100 - 1)/12 = 74.25!',
        },
      },
    ],
    examTraps: [
      {
        id: 'stat-trap-1',
        trap: {
          en: 'Confusing minimum of Σ|xᵢ - A| with minimum of Σ(xᵢ - A)².',
          hi: 'Σ|xᵢ - A| के न्यूनतम मान और Σ(xᵢ - A)² के न्यूनतम मान में भ्रमित होना।',
        },
        correction: {
          en: 'Absolute deviation Σ|xᵢ - A| is minimum at A = MEDIAN. Squared deviation Σ(xᵢ - A)² is minimum at A = MEAN!',
          hi: 'निरपेक्ष विचलन Σ|xᵢ - A| माध्यिका (Median) पर न्यूनतम होता है, जबकि वर्ग विचलन Σ(xᵢ - A)² माध्य (Mean) पर न्यूनतम होता है!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'Empirical Rule: Mode = 3 Median - 2 Mean.',
        hi: 'अनुभवजन्य सूत्र: बहुलक (Mode) = 3 × माध्यिका - 2 × माध्य।',
      },
      {
        en: 'Variance of first n natural numbers = (n² - 1)/12; for AP with common diff d = d²(n² - 1)/12.',
        hi: 'प्रथम n प्राकृत संख्याओं का प्रसरण = (n² - 1)/12; सार्व अंतर d वाली AP के लिए = d²(n² - 1)/12।',
      },
      {
        en: 'If Y = aX + b, then SD(Y) = |a|·SD(X) and Var(Y) = a²·Var(X).',
        hi: 'यदि Y = aX + b हो, तो SD(Y) = |a|·SD(X) तथा Var(Y) = a²·Var(X)।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Statistics 48-Mark Mastery Map', hi: 'सांख्यिकी (48-अंक माइंड मैप)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Central Tendency & Dispersion', hi: 'इंडेक्स 1: केंद्रीय प्रवृत्ति और प्रसरण' },
          branches: [
            {
              id: 'st-b1',
              title: { en: 'Variance & SD Scaling', hi: 'प्रसरण और मानक विचलन गुणधर्म' },
              keyPoints: [
                { en: 'Origin shift (+c) leaves Variance & SD unchanged', hi: 'अचर जोड़ने/घटाने पर प्रसरण और SD अपरिवर्तित रहते हैं' },
                { en: 'Scale factor (×k) multiplies SD by |k| and Var by k²', hi: 'k से गुणा करने पर SD |k| गुना और प्रसरण k² गुना होता है' },
              ],
              subFormula: 'σ² = (Σxᵢ² / n) - (x̄)²',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-stat-1',
        category: { en: 'Dispersion', hi: 'प्रकीर्णन' },
        title: { en: 'Combined Variance of Two Groups', hi: 'दो समूहों का संयुक्त प्रसरण सूत्र' },
        expression: 'σ₁₂² = [n₁(σ₁² + d₁²) + n₂(σ₂² + d₂²)] / (n₁ + n₂)',
        variables: { en: 'd₁ = x̄₁ - x̄₁₂,  d₂ = x̄₂ - x̄₁₂', hi: 'd₁ = x̄₁ - x̄₁₂,  d₂ = x̄₂ - x̄₁₂' },
        examTip: {
          en: 'When two samples have the SAME mean (x̄₁ = x̄₂), d₁ = d₂ = 0, so σ₁₂² = (n₁σ₁² + n₂σ₂²)/(n₁ + n₂).',
          hi: 'जब दोनों समूहों का माध्य समान हो, तब d₁ = d₂ = 0 हो जाता है।',
        },
      },
    ],
  },

  // ==================== MATH 04: SETS, RELATIONS, FUNCTIONS & LOGIC ====================
  {
    id: 'math-sets-logic',
    subjectId: 'mathematics',
    number: '04',
    title: {
      en: 'Set Theory, Relations, Functions & Mathematical Logic',
      hi: 'समुच्चय सिद्धांत, संबंध, फलन और गणितीय तर्कशास्त्र (Sets & Logic)',
    },
    priorityTier: 1,
    expectedQuestions: 6,
    expectedMarks: 72,
    estimatedHours: 8,
    visualizerType: 'venn_prob_3d',
    deepConcept: {
      intuition: {
        en: 'Set Theory, Relations, Functions, and Propositional Logic are the mathematical language of Computer Science. Every Venn diagram region translates into a cardinality formula, every Equivalence Relation partitions a set into disjoint classes, and every logical connective (∧, ∨, →, ↔) obeys Boolean algebra laws.',
        hi: 'समुच्चय सिद्धांत, संबंध, फलन और गणितीय तर्कशास्त्र कंप्यूटर विज्ञान की मूल भाषा हैं। वेन आरेख का प्रत्येक भाग एक गणन सूत्र देता है, तुल्यता संबंध (Equivalence Relation) समुच्चय को असंयुक्त वर्गों में बांटता है, और प्रत्येक तार्किक संयोजक बूलियन नियमों का पालन करता है।',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. Inclusion-Exclusion Cardinality Formulas (2 & 3 Sets)',
            hi: '1. समावेशन-अपवर्जन गणन सूत्र (2 और 3 समुच्चय)',
          },
          explanation: {
            en: 'For 3 sets A, B, C: n(A∪B∪C) = Σn(A) - Σn(A∩B) + n(A∩B∩C). Number of elements in EXACTLY TWO sets = n(A∩B) + n(B∩C) + n(C∩A) - 3n(A∩B∩C). Number of elements in AT LEAST TWO sets = n(A∩B) + n(B∩C) + n(C∩A) - 2n(A∩B∩C). Number of elements in EXACTLY ONE set = Σn(A) - 2Σn(A∩B) + 3n(A∩B∩C).',
            hi: '3 समुच्चयों A, B, C के लिए: ठीक दो (Exactly Two) में अवयव = Σn(A∩B) - 3n(A∩B∩C)। कम से कम दो (At Least Two) में अवयव = Σn(A∩B) - 2n(A∩B∩C)। ठीक एक (Exactly One) में अवयव = Σn(A) - 2Σn(A∩B) + 3n(A∩B∩C)।',
          },
          mathematicalForm: 'n(Exactly 2) = Σn(A∩B) - 3n(A∩B∩C)   |   n(Exactly 1) = Σn(A) - 2Σn(A∩B) + 3n(A∩B∩C)',
        },
        {
          heading: {
            en: '2. Reflexive, Symmetric, Transitive & Equivalence Relations',
            hi: '2. स्वतुल्य, सममित, संक्रामक और तुल्यता संबंध',
          },
          explanation: {
            en: 'On a set A with |A| = n: Total relations = 2^(n²). Reflexive relations (every (a,a) ∈ R) = 2^(n²-n). Symmetric relations ((a,b)∈R ⇒ (b,a)∈R) = 2^(n(n+1)/2). Both Reflexive & Symmetric = 2^(n(n-1)/2). A relation that is Reflexive + Symmetric + Transitive is an Equivalence Relation. Number of Equivalence Relations on n elements is given by Bell Numbers: B₁=1, B₂=2, B₃=5, B₄=15, B₅=52!',
            hi: '|A| = n अवयवों वाले समुच्चय पर: कुल संबंध = 2^(n²); स्वतुल्य = 2^(n²-n); सममित = 2^(n(n+1)/2); स्वतुल्य और सममित दोनों = 2^(n(n-1)/2)। n अवयवों पर तुल्यता संबंधों (Equivalence Relations) की कुल संख्या बेल संख्याओं (Bell Numbers) से मिलती है: n=1 के लिए 1, n=2 के लिए 2, n=3 के लिए 5, n=4 के लिए 15, n=5 के लिए 52!',
          },
          mathematicalForm: 'Bell Numbers (Equivalence Relations on n elements): B₁=1, B₂=2, B₃=5, B₄=15, B₅=52',
        },
        {
          heading: {
            en: '3. Counting Functions: Total, One-One (Injective), Onto (Surjective) & Bijective',
            hi: '3. फलनों की गणना: कुल, एकैकी (One-One), आच्छादक (Onto) और एकैकी-आच्छादक',
          },
          explanation: {
            en: 'From set A (|A|=m) to set B (|B|=n): Total functions = nᵐ. Injective (One-One) functions = ⁿPₘ (if n ≥ m, else 0). Bijective (One-One & Onto) functions = n! (when m = n, else 0). Onto (Surjective) functions for m ≥ n = Σ_{k=0}^n (-1)ᵏ ⁿCₖ (n - k)ᵐ (for n=2 codomain elements, Onto = 2ᵐ - 2).',
            hi: 'समुच्चय A (|A|=m) से B (|B|=n) तक: कुल फलन = nᵐ। एकैकी (One-One) फलन = ⁿPₘ (यदि n ≥ m)। एकैकी-आच्छादक (Bijective) फलन = n! (जब m = n)। n=2 सहप्रांत अवयवों के लिए आच्छादक (Onto) फलनों की संख्या = 2ᵐ - 2 होती है।',
          },
          mathematicalForm: 'Total = nᵐ  |  One-One = ⁿPₘ  |  Onto (to 2 elements) = 2ᵐ - 2',
        },
        {
          heading: {
            en: '4. Propositional Logic: Implication, Contrapositive, Tautology & Fallacy',
            hi: '4. गणितीय तर्कशास्त्र: निहितार्थ, प्रतिधनात्मक, पुनरुक्ति (Tautology) और विरोधाभास',
          },
          explanation: {
            en: 'For conditional statement p → q: Equivalent form is ~p ∨ q. Negation is ~(p → q) ≡ p ∧ ~q. Converse is q → p. Inverse is ~p → ~q. Contrapositive is ~q → ~p (which is logically equivalent to p → q!). A statement that is ALWAYS TRUE is a Tautology; ALWAYS FALSE is a Contradiction (Fallacy).',
            hi: 'सप्रतिबंध कथन p → q के लिए: तुल्य रूप ~p ∨ q है। इसका निषेध ~(p → q) ≡ p ∧ ~q है। विलोम (Converse) = q → p; प्रतिलोम (Inverse) = ~p → ~q; तथा प्रतिधनात्मक (Contrapositive) = ~q → ~p (जो मूल कथन p → q के पूर्णतः तुल्य होता है!)।',
          },
          mathematicalForm: 'p → q ≡ ~p ∨ q ≡ ~q → ~p   |   ~(p → q) ≡ p ∧ ~q',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'Relational Database Design, Compiler Type Checkers & Formal Verification',
          hi: 'डेटाबेस डिज़ाइन, कंपाइलर और हार्डवेयर सत्यापन',
        },
        title: {
          en: 'How SQL Query Optimizers & SAT Solvers Use Set & Propositional Logic',
          hi: 'SQL ऑप्टिमाइज़र और SAT सॉल्वर समुच्चय एवं तर्कशास्त्र का उपयोग कैसे करते हैं',
        },
        howItWorks: {
          en: 'Query engines rewrite nested WHERE clauses using De Morgan’s laws and distributive laws to minimize index scans.',
          hi: 'डेटाबेस इंजन डी-मॉर्गन और वितरण नियमों से जटिल WHERE शर्तों को सरल बनाकर सर्च को तेज़ करते हैं।',
        },
        practicalExample: {
          en: 'Partitioning users into equivalence classes by country ID allows parallel sharding across servers.',
          hi: 'उपयोगकर्ताओं को तुल्यता वर्गों में बांटकर डेटा को कई सर्वरों पर समानांतर रूप से संग्रहीत किया जाता है।',
        },
      },
    },
    subtopics: [
      {
        id: 'set-sub-1',
        title: {
          en: '4.1 Power Sets, Symmetric Difference & Minimum/Maximum Intersection Bounds',
          hi: '4.1 घात समुच्चय (Power Set), सममित अंतर और सर्वनिष्ठ की अधिकतम/न्यूनतम सीमा',
        },
        detailedTheory: {
          en: 'Symmetric Difference A Δ B = (A - B) ∪ (B - A) = (A ∪ B) - (A ∩ B). If |A| = n, Power Set P(A) has 2ⁿ subsets, proper subsets = 2ⁿ - 1, non-empty proper subsets = 2ⁿ - 2. When |U| = N, |A| = p, |B| = q: Maximum value of n(A ∩ B) is min(p, q), and Minimum value of n(A ∩ B) is max(0, p + q - N)!',
          hi: 'सममित अंतर A Δ B = (A - B) ∪ (B - A) = (A ∪ B) - (A ∩ B)। यदि सार्वत्रिक समुच्चय में N अवयव हों और n(A)=p, n(B)=q हो, तो n(A ∩ B) का अधिकतम मान min(p, q) तथा न्यूनतम मान max(0, p + q - N) होता है!',
        },
        keyRules: [
          {
            en: 'n(P(P(∅))): Since n(∅) = 0, n(P(∅)) = 2⁰ = 1, n(P(P(∅))) = 2¹ = 2, and n(P(P(P(∅)))) = 2² = 4.',
            hi: 'n(∅) = 0 ⇒ n(P(∅)) = 2⁰ = 1 ⇒ n(P(P(∅))) = 2¹ = 2 ⇒ n(P(P(P(∅)))) = 2² = 4।',
          },
        ],
        keyEquations: [
          'max n(A ∩ B) = min(n(A), n(B))',
          'min n(A ∩ B) = max(0, n(A) + n(B) - n(U))',
        ],
      },
    ],
    workedExamples: [
      {
        id: 'set-ex-1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Counting Equivalence Relations on a Set of 3 Elements',
          hi: '3 अवयवों वाले समुच्चय पर तुल्यता संबंधों की संख्या',
        },
        problem: {
          en: 'Let A = {1, 2, 3}. How many total equivalence relations can be defined on set A?',
          hi: 'समुच्चय A = {1, 2, 3} पर कुल कितने तुल्यता संबंध (Equivalence Relations) परिभाषित किए जा सकते हैं?',
        },
        stepByStep: {
          en: 'Step 1: Every equivalence relation on A corresponds uniquely to a partition of A into non-empty disjoint subsets.\nStep 2: For 3 elements {1,2,3}: Partition of size 1: {{1,2,3}} (1 way); Partition into 2 parts: {{1,2},{3}}, {{1,3},{2}}, {{2,3},{1}} (3 ways); Partition into 3 singletons: {{1},{2},{3}} (1 way).\nStep 3: Total Equivalence Relations = 1 + 3 + 1 = 5 (Bell Number B₃ = 5).',
          hi: 'चरण 1: किसी समुच्चय पर तुल्यता संबंधों की संख्या उसके संभव विभाजनों (Partitions) की संख्या के बराबर होती है।\nचरण 2: {1,2,3} के विभाजन: 1 समूह में = 1 तरीका; 2 समूहों में = 3 तरीके; 3 एकल समूहों में = 1 तरीका।\nचरण 3: कुल तुल्यता संबंध = 1 + 3 + 1 = 5 (बेल संख्या B₃ = 5)।',
        },
        shortcut: {
          en: 'Memorize Bell Numbers B₁=1, B₂=2, B₃=5, B₄=15, B₅=52. If n=3, answer is 5 in 1 second!',
          hi: 'बेल संख्याएं याद रखें: B₁=1, B₂=2, B₃=5, B₄=15, B₅=52। n=3 के लिए उत्तर सीधे 5 है!',
        },
      },
    ],
    examTraps: [
      {
        id: 'set-trap-1',
        trap: {
          en: 'Confusing the Converse (q → p) with the Contrapositive (~q → ~p).',
          hi: 'विलोम (q → p) और प्रतिधनात्मक (~q → ~p) में भ्रमित होना।',
        },
        correction: {
          en: 'p → q is logically equivalent ONLY to its Contrapositive (~q → ~p), NEVER to its Converse (q → p)!',
          hi: 'कथन p → q केवल अपने प्रतिधनात्मक (~q → ~p) के तुल्य होता है, विलोम (q → p) के नहीं!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'Implication equivalence: p → q ≡ ~p ∨ q, and Contrapositive ≡ ~q → ~p.',
        hi: 'निहितार्थ तुल्यता: p → q ≡ ~p ∨ q, तथा प्रतिधनात्मक ≡ ~q → ~p।',
      },
      {
        en: 'Negation of implication: ~(p → q) ≡ p ∧ ~q.',
        hi: 'निहितार्थ का निषेध: ~(p → q) ≡ p ∧ ~q।',
      },
      {
        en: 'Bell Numbers for Equivalence Relations on n elements: n=1 → 1, n=2 → 2, n=3 → 5, n=4 → 15.',
        hi: 'n अवयवों पर तुल्यता संबंधों की संख्या: n=1 → 1, n=2 → 2, n=3 → 5, n=4 → 15।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Sets, Relations & Logic (72 Marks)', hi: 'समुच्चय, संबंध और तर्कशास्त्र (72 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Relations & Functions Count', hi: 'इंडेक्स 1: संबंध और फलन गणना' },
          branches: [
            {
              id: 'set-b1',
              title: { en: 'Relation Formulas on Set of Size n', hi: 'n अवयवों वाले समुच्चय पर संबंध सूत्र' },
              keyPoints: [
                { en: 'Total = 2^(n²), Reflexive = 2^(n²-n)', hi: 'कुल संबंध = 2^(n²), स्वतुल्य = 2^(n²-n)' },
                { en: 'Symmetric = 2^(n(n+1)/2), Ref+Sym = 2^(n(n-1)/2)', hi: 'सममित = 2^(n(n+1)/2), स्वतुल्य+सममित = 2^(n(n-1)/2)' },
              ],
              subFormula: 'Equivalence on 3 elements = 5',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-set-1',
        category: { en: 'Set Theory', hi: 'समुच्चय सिद्धांत' },
        title: { en: 'Exactly Two & At Least Two Sets Formula', hi: 'ठीक दो और कम से कम दो समुच्चयों का सूत्र' },
        expression: 'n(Exactly 2) = Σn(A∩B) - 3·n(A∩B∩C)   |   n(At least 2) = Σn(A∩B) - 2·n(A∩B∩C)',
        variables: { en: 'A, B, C: Finite sets', hi: 'A, B, C: परिमित समुच्चय' },
        examTip: {
          en: 'Notice "- 3·n(A∩B∩C)" for "Exactly two" vs "- 2·n(A∩B∩C)" for "At least two".',
          hi: '"ठीक दो" के लिए -3n(A∩B∩C) और "कम से कम दो" के लिए -2n(A∩B∩C) घटाएं।',
        },
      },
    ],
  },

  // ==================== MATH 05: MATRICES & DETERMINANTS ====================
  {
    id: 'math-matrices',
    subjectId: 'mathematics',
    number: '05',
    title: {
      en: 'Matrices, Determinants, Adjoint, Inverse & Linear Systems',
      hi: 'आव्यूह, सारणिक, सहखंडज, व्युत्क्रम और रैखिक समीकरण निकाय (Matrices)',
    },
    priorityTier: 1,
    expectedQuestions: 5,
    expectedMarks: 60,
    estimatedHours: 8,
    visualizerType: 'vector_3d',
    deepConcept: {
      intuition: {
        en: 'Matrices represent linear systems and spatial transformations, while the Determinant |A| measures the scaling factor of area/volume. Whenever |A| = 0, the matrix is Singular (non-invertible). In NIMCET, 80% of Matrix questions are solved in 15 seconds using Adjoint Determinant Power Laws, Trace/Eigenvalue properties, and Cramer’s Rule consistency conditions.',
        hi: 'आव्यूह (Matrix) रैखिक समीकरणों और रूपांतरणों को दर्शाते हैं, जबकि सारणिक |A| क्षेत्रफल/आयतन के विस्तार गुणक को मापता है। जब |A| = 0 होता है, तो आव्यूह अव्युत्क्रमणीय (Singular) कहलाता है। NIMCET में 80% प्रश्न सहखंडज (Adjoint) घात सूत्रों, ट्रेस (Trace) गुणधर्मों और क्रेमर नियम से 15 सेकंड में हल होते हैं।',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. Complete Adjoint & Determinant Power Laws (Order n)',
            hi: '1. सहखंडज (Adjoint) और सारणिक के संपूर्ण घात नियम (कोटि n)',
          },
          explanation: {
            en: 'For a square matrix A of order n×n: (1) A·adj(A) = |A|·Iₙ, (2) |kA| = kⁿ|A|, (3) |adj(A)| = |A|^(n-1), (4) adj(adj(A)) = |A|^(n-2)·A, (5) |adj(adj(A))| = |A|^((n-1)²), (6) adj(kA) = k^(n-1)·adj(A), (7) adj(AB) = adj(B)·adj(A).',
            hi: 'n×n कोटि के वर्ग आव्यूह A के लिए: (1) A·adj(A) = |A|·Iₙ, (2) |kA| = kⁿ|A|, (3) |adj(A)| = |A|^(n-1), (4) adj(adj(A)) = |A|^(n-2)·A, (5) |adj(adj(A))| = |A|^((n-1)²), (6) adj(kA) = k^(n-1)·adj(A)।',
          },
          mathematicalForm: '|adj(A)| = |A|^(n-1)   |   |adj(adj(A))| = |A|^((n-1)²)   |   |kA| = kⁿ|A|',
        },
        {
          heading: {
            en: '2. Special Matrices: Orthogonal, Idempotent, Involutory & Nilpotent',
            hi: '2. विशेष आव्यूह: लांबिक, वर्गसम, अंतर्वलनी और शून्यभावी',
          },
          explanation: {
            en: 'Symmetric: Aᵀ = A; Skew-Symmetric: Aᵀ = -A (diagonal elements are all 0, and for odd order n, |A| = 0!). Orthogonal: A·Aᵀ = I (so A⁻¹ = Aᵀ and |A| = ±1). Idempotent: A² = A (|A| = 0 or 1). Involutory: A² = I (so A⁻¹ = A). Nilpotent: Aᵏ = O (|A| = 0).',
            hi: 'सममित: Aᵀ = A; विषम-सममित: Aᵀ = -A (मुख्य विकर्ण के सभी अवयव 0 होते हैं, और विषम कोटि n के लिए |A| = 0!)। लांबिक (Orthogonal): A·Aᵀ = I (अतः A⁻¹ = Aᵀ)। वर्गसम (Idempotent): A² = A। अंतर्वलनी (Involutory): A² = I (अतः A⁻¹ = A)।',
          },
          mathematicalForm: 'Orthogonal: AᵀA = I  |  Idempotent: A² = A  |  Involutory: A² = I',
        },
        {
          heading: {
            en: '3. System of Linear Equations AX = B (Cramer’s Rule & Rank)',
            hi: '3. रैखिक समीकरण निकाय AX = B की संगतता (Cramer’s Rule)',
          },
          explanation: {
            en: 'For AX = B: If |A| = Δ ≠ 0 → Unique Solution (Consistent). If Δ = 0 and at least one of Δ₁, Δ₂, Δ₃ ≠ 0 → No Solution (Inconsistent). If Δ = Δ₁ = Δ₂ = Δ₃ = 0 → Infinitely Many Solutions (provided planes are not parallel distinct). For Homogeneous system AX = O: always consistent; has non-trivial (non-zero) solution iff |A| = 0!',
            hi: 'AX = B के लिए: यदि Δ ≠ 0 → अद्वितीय हल। यदि Δ = 0 परंतु Δ₁, Δ₂, Δ₃ में से कोई अशून्य हो → कोई हल नहीं (असंगत)। समघातीय निकाय AX = O के अशून्य (Non-trivial) हल के लिए आवश्यक और पर्याप्त शर्त |A| = 0 है!',
          },
          mathematicalForm: 'AX = O has non-zero solution ⇔ det(A) = 0',
        },
      ],
      realWorldScenario: {
        domain: {
          en: '3D Computer Graphics, PageRank & Cryptography',
          hi: '3D कंप्यूटर ग्राफ़िक्स, गूगल पेज-रैंक और क्रिप्टोग्राफी',
        },
        title: {
          en: 'Orthogonal Rotation Matrices in 3D Cameras',
          hi: '3D कैमरों में लांबिक घूर्णन आव्यूह (Orthogonal Matrices)',
        },
        howItWorks: {
          en: 'In 3D engines, camera rotation matrices satisfy RᵀR = I, so inverting the camera transform is just taking the transpose Rᵀ (zero division cost!).',
          hi: '3D इंजन में घूर्णन आव्यूह RᵀR = I का पालन करते हैं, इसलिए व्युत्क्रम निकालने के लिए केवल परिवर्त (Transpose Rᵀ) करना पड़ता है।',
        },
        practicalExample: {
          en: 'For 2×2 matrix [a b; c d], inverse is (1/(ad-bc)) [d -b; -c a] (swap main diagonal, negate off-diagonal).',
          hi: '2×2 आव्यूह [a b; c d] का व्युत्क्रम (1/(ad-bc)) [d -b; -c a] होता है (मुख्य विकर्ण बदलें, दूसरे विकर्ण का चिह्न बदलें)।',
        },
      },
    },
    subtopics: [
      {
        id: 'mat-sub-1',
        title: {
          en: '5.1 Cayley-Hamilton Theorem, Trace & Eigenvalue Shortcuts',
          hi: '5.1 कैले-हैमिल्टन प्रमेय, ट्रेस (Trace) और आइगेनमान (Eigenvalues) शॉर्टकट',
        },
        detailedTheory: {
          en: 'The sum of diagonal elements of A is its Trace: tr(A) = Σaᵢᵢ = sum of eigenvalues (λ₁ + λ₂ + ... + λₙ), and det(A) = product of eigenvalues (λ₁·λ₂···λₙ). Every square matrix satisfies its own characteristic equation det(A - λI) = 0. For 2×2 matrix A: A² - tr(A)·A + |A|·I = O. For 3×3 matrix A: A³ - tr(A)·A² + (sum of diagonal minors)·A - |A|·I = O.',
          hi: 'मुख्य विकर्ण के अवयवों का योग ट्रेस tr(A) कहलाता है जो सभी आइगेनमानों के योग (Σλᵢ) के बराबर होता है, तथा सारणिक |A| आइगेनमानों के गुणनफल (Πλᵢ) के बराबर होता है। 2×2 आव्यूह के लिए कैले-हैमिल्टन समीकरण: A² - tr(A)·A + |A|·I = O।',
        },
        keyRules: [
          {
            en: 'If A = [cos θ  -sin θ; sin θ  cos θ], then Aⁿ = [cos nθ  -sin nθ; sin nθ  cos nθ]!',
            hi: 'घूर्णन आव्यूह A = [cos θ  -sin θ; sin θ  cos θ] की n वीं घात Aⁿ = [cos nθ  -sin nθ; sin nθ  cos nθ] होती है!',
          },
          {
            en: 'If A = [1  a; 0  1], then Aⁿ = [1  na; 0  1].',
            hi: 'यदि A = [1  a; 0  1] हो, तो Aⁿ = [1  na; 0  1] होता है।',
          },
        ],
        keyEquations: [
          'tr(A) = λ₁ + λ₂ + ... + λₙ   |   det(A) = λ₁ · λ₂ ··· λₙ',
          'For 2×2: A² - (a₁₁ + a₂₂)A + |A|I = O',
        ],
      },
    ],
    workedExamples: [
      {
        id: 'mat-ex-1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Evaluating |adj(2A)| for a 3×3 Matrix',
          hi: '3×3 आव्यूह के लिए |adj(2A)| का मान निकालना',
        },
        problem: {
          en: 'If A is a 3×3 matrix with |A| = 3, find the value of |adj(2A)|.',
          hi: 'यदि A एक 3×3 कोटि का आव्यूह है जिसके लिए |A| = 3 है, तो |adj(2A)| का मान ज्ञात कीजिए।',
        },
        stepByStep: {
          en: 'Step 1: Let B = 2A. Since order n = 3, |adj(B)| = |B|^(n-1) = |2A|².\nStep 2: Using |kA| = kⁿ|A| with k = 2, n = 3: |2A| = 2³|A| = 8 × 3 = 24.\nStep 3: Therefore |adj(2A)| = 24² = 576.',
          hi: 'चरण 1: कोटि n = 3 के लिए |adj(2A)| = |2A|^(3-1) = |2A|²।\nचरण 2: |kA| = kⁿ|A| सूत्र से: |2A| = 2³ × |A| = 8 × 3 = 24।\nचरण 3: अतः |adj(2A)| = 24² = 576।',
        },
        shortcut: {
          en: 'Direct formula: |adj(kA)| = k^(n(n-1)) · |A|^(n-1) = 2^(3×2) · 3² = 64 × 9 = 576.',
          hi: 'सीधा सूत्र: |adj(kA)| = k^(n(n-1)) · |A|^(n-1) = 2⁶ × 3² = 64 × 9 = 576।',
        },
      },
    ],
    examTraps: [
      {
        id: 'mat-trap-1',
        trap: {
          en: 'Writing |kA| = k|A| instead of kⁿ|A|.',
          hi: '|kA| = kⁿ|A| के स्थान पर गलती से k|A| लिख देना।',
        },
        correction: {
          en: 'In a determinant, scalar k factors out of EVERY row independently! For an n×n matrix, there are n rows, so |kA| = kⁿ|A|.',
          hi: 'आव्यूह में k से गुणा करने पर सभी n पंक्तियों में गुणा होता है, इसलिए सारणिक से बाहर निकालने पर kⁿ आता है: |kA| = kⁿ|A|।',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'Determinant of any Skew-Symmetric matrix of ODD order (3×3, 5×5) is ALWAYS ZERO.',
        hi: 'विषम कोटि (3×3, 5×5) के विषम-सममित आव्यूह का सारणिक सदैव 0 होता है।',
      },
      {
        en: 'For n×n matrix A: |adj(A)| = |A|^(n-1) and |adj(adj(A))| = |A|^((n-1)²).',
        hi: 'n कोटि के आव्यूह A के लिए: |adj(A)| = |A|^(n-1) तथा |adj(adj(A))| = |A|^((n-1)²)।',
      },
      {
        en: 'If A is Idempotent (A² = A), then (I - A) is also Idempotent and A(I - A) = O.',
        hi: 'यदि A वर्गसम (A² = A) है, तो (I - A) भी वर्गसम होता है और A(I - A) = O।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Matrices & Determinants (60M)', hi: 'आव्यूह और सारणिक (60 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Adjoint & Determinant Laws', hi: 'इंडेक्स 1: सहखंडज और सारणिक नियम' },
          branches: [
            {
              id: 'mat-b1',
              title: { en: 'Determinant Scaling Laws (Order n)', hi: 'सारणिक घातांक सूत्र (कोटि n)' },
              keyPoints: [
                { en: '|k · adj(A)| = kⁿ · |A|^(n-1)', hi: '|k · adj(A)| = kⁿ · |A|^(n-1)' },
                { en: 'adj(AB) = adj(B) · adj(A) (Reversal law)', hi: 'adj(AB) = adj(B) · adj(A) (उत्क्रमण नियम)' },
              ],
              subFormula: 'A⁻¹ = adj(A) / |A|',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-mat-1',
        category: { en: 'Determinants', hi: 'सारणिक' },
        title: { en: 'Scalar Multiple Inside Adjoint', hi: 'सहखंडज में अदिश गुणज सूत्र' },
        expression: 'adj(kA) = k^(n-1) · adj(A)  and  |adj(kA)| = k^(n(n-1)) · |A|^(n-1)',
        variables: { en: 'n: Order of square matrix A; k: scalar constant', hi: 'n: वर्ग आव्यूह A की कोटि; k: अचर' },
        examTip: {
          en: 'Watch out for n=3: |adj(2A)| = 2^(3×2) |A|² = 64 |A|².',
          hi: 'n=3 के लिए ध्यान दें: |adj(2A)| = 2^(3×2) |A|² = 64 |A|² होता है।',
        },
      },
    ],
  },

  // ==================== MATH 06: QUADRATIC EQUATIONS & LOGARITHMS ====================
  {
    id: 'math-quadratics-logs',
    subjectId: 'mathematics',
    number: '06',
    title: {
      en: 'Quadratic Equations, Location of Roots, Indices & Logarithms',
      hi: 'द्विघात समीकरण, मूलों की प्रकृति, घातांक और लघुगणक (Quadratics & Logs)',
    },
    priorityTier: 2,
    expectedQuestions: 4,
    expectedMarks: 48,
    estimatedHours: 6,
    visualizerType: 'calculus_2d',
    deepConcept: {
      intuition: {
        en: 'A quadratic polynomial f(x) = ax² + bx + c graphs as a parabola opening upward (if a > 0) or downward (if a < 0) with vertex at (-b/2a, -D/4a), where D = b² - 4ac is the Discriminant. Combined with Logarithm base-change rules (log_b a = ln a / ln b), this chapter provides fast, algebraically clean questions in NIMCET.',
        hi: 'द्विघात बहुपद f(x) = ax² + bx + c का ग्राफ़ एक परवलय होता है जिसका शीर्ष (-b/2a, -D/4a) पर होता है, जहाँ D = b² - 4ac विविक्तकर (Discriminant) है। लघुगणक (Logarithm) के आधार-परिवर्तन नियमों के साथ यह अध्याय NIMCET में तेज़ी से पूरे अंक दिलाता है।',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. Vieta’s Root Relations, Symmetric Functions & Difference of Roots',
            hi: '1. मूलों और गुणांकों में संबंध तथा मूलों का अंतर',
          },
          explanation: {
            en: 'For ax² + bx + c = 0 with roots α, β: Sum α + β = -b/a, Product αβ = c/a, and Difference |α - β| = √D / |a|. Also α² + β² = (α+β)² - 2αβ and α³ + β³ = (α+β)³ - 3αβ(α+β). If coefficients sum to zero (a + b + c = 0), then one root is ALWAYS 1 and the other root is c/a!',
            hi: 'ax² + bx + c = 0 के मूल α, β हों तो: α + β = -b/a, αβ = c/a, तथा |α - β| = √D / |a|। स्वर्णिम नियम: यदि गुणांकों का योग शून्य हो (a + b + c = 0), तो एक मूल सदैव 1 होता है और दूसरा मूल c/a होता है!',
          },
          mathematicalForm: 'If a + b + c = 0  ⇒  Roots are 1 and c/a   |   |α - β| = √(b² - 4ac) / |a|',
        },
        {
          heading: {
            en: '2. Transformation of Equations & Condition for Common Roots',
            hi: '2. समीकरण रूपांतरण और उभयनिष्ठ मूल (Common Roots) की शर्त',
          },
          explanation: {
            en: 'To get the equation whose roots are: (1) -α, -β → replace x by -x; (2) 1/α, 1/β (reciprocals) → swap a and c (cx² + bx + a = 0); (3) kα, kβ → multiply coeff of x by k and constant by k². Two quadratics a₁x²+b₁x+c₁=0 and a₂x²+b₂x+c₂=0 have BOTH roots common iff a₁/a₂ = b₁/b₂ = c₁/c₂.',
            hi: 'व्युत्क्रम मूलों (1/α, 1/β) वाला समीकरण पाने के लिए केवल a और c को आपस में बदल दें (cx² + bx + a = 0)। दो द्विघात समीकरणों के दोनों मूल उभयनिष्ठ होते हैं यदि a₁/a₂ = b₁/b₂ = c₁/c₂ हो।',
          },
          mathematicalForm: 'One Common Root: (c₁a₂ - c₂a₁)² = (a₁b₂ - a₂b₁)(b₁c₂ - b₂c₁)',
        },
        {
          heading: {
            en: '3. Logarithm Master Identities & Domain Restrictions',
            hi: '3. लघुगणक (Logarithm) के मुख्य सूत्र और प्रांत (Domain) नियम',
          },
          explanation: {
            en: 'log_b(a) is defined ONLY when argument a > 0, base b > 0, and base b ≠ 1! Key laws: a^(log_a N) = N; a^(log_b c) = c^(log_b a); log_(b^k)(a^m) = (m/k) log_b(a); and Base Change: log_b(a) · log_c(b) = log_c(a). When solving log_b(f(x)) > log_b(g(x)), keep inequality direction if b > 1, and REVERSE inequality direction if 0 < b < 1!',
            hi: 'log_b(a) केवल तभी परिभाषित है जब a > 0, आधार b > 0 और b ≠ 1 हो! प्रमुख नियम: a^(log_b c) = c^(log_b a) तथा log_(b^k)(a^m) = (m/k) log_b(a)। असमिका हल करते समय यदि आधार 0 < b < 1 हो, तो असमिका का चिह्न पलट जाता है!',
          },
          mathematicalForm: 'log_(b^k)(a^m) = (m/k) log_b(a)   |   a^(log_b c) = c^(log_b a)',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'Algorithm Complexity (O(log n)), Decibel Acoustics & pH Scale',
          hi: 'एल्गोरिदम जटिलता O(log n), डेसिबल ध्वनि मापन और pH स्केल',
        },
        title: {
          en: 'Why Binary Search Takes log₂(N) Comparisons',
          hi: 'बाइनरी सर्च में log₂(N) चरण क्यों लगते हैं',
        },
        howItWorks: {
          en: 'Halving a sorted array of N = 1,048,576 (2²⁰) elements repeatedly reaches size 1 in log₂(2²⁰) = 20 steps instead of 1 million steps.',
          hi: '2²⁰ (10 लाख) तत्वों की सूची को बार-बार आधा करने पर मात्र log₂(2²⁰) = 20 चरणों में उत्तर मिल जाता है।',
        },
        practicalExample: {
          en: 'Number of digits in a^b (in base 10) is floor(b · log₁₀ a) + 1.',
          hi: 'किसी बड़ी संख्या a^b में कुल अंकों की संख्या = floor(b · log₁₀ a) + 1 होती है।',
        },
      },
    },
    workedExamples: [
      {
        id: 'quad-ex-1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Sum ofCoefficients Zero Trick in Quadratic Equations',
          hi: 'द्विघात समीकरण में गुणांकों का योग शून्य होने की ट्रिक',
        },
        problem: {
          en: 'If the roots of the equation (b - c)x² + (c - a)x + (a - b) = 0 are equal, then prove that a, b, c are in AP.',
          hi: 'यदि समीकरण (b - c)x² + (c - a)x + (a - b) = 0 के मूल बराबर हैं, तो a, b, c किस श्रेणी में हैं?',
        },
        stepByStep: {
          en: 'Step 1: Observe the sum of coefficients: (b - c) + (c - a) + (a - b) = 0!\nStep 2: Whenever A + B + C = 0 in Ax² + Bx + C = 0, the roots are 1 and C/A.\nStep 3: Since the roots are given to be equal, the second root C/A must also equal 1: (a - b)/(b - c) = 1 ⇒ a - b = b - c ⇒ 2b = a + c ⇒ a, b, c are in AP!',
          hi: 'चरण 1: गुणांकों का योग देखें: (b - c) + (c - a) + (a - b) = 0!\nचरण 2: अतः एक मूल 1 है और दूसरा मूल C/A = (a - b)/(b - c) है।\nचरण 3: चूँकि दोनों मूल बराबर हैं, अतः (a - b)/(b - c) = 1 ⇒ 2b = a + c, अर्थात a, b, c समांतर श्रेणी (AP) में हैं!',
        },
        shortcut: {
          en: 'Never expand B² - 4AC = 0 when A + B + C = 0! Directly set C = A.',
          hi: 'जब गुणांकों का योग 0 हो और मूल बराबर हों, तो बिना D=0 लगाए सीधे अचर पद C = प्रथम गुणांक A रख दें!',
        },
      },
    ],
    examTraps: [
      {
        id: 'quad-trap-1',
        trap: {
          en: 'Forgetting to flip the inequality sign when removing log with base 0 < b < 1 (e.g. base 0.5 or 1/3).',
          hi: '0 < b < 1 (जैसे आधार 1/2 या 0.2) वाले लॉग को हटाते समय असमिका का चिह्न न पलटना।',
        },
        correction: {
          en: 'For base b ∈ (0, 1), log_b(x) is a strictly DECREASING function: log_(1/2)(x) > log_(1/2)(4) means 0 < x < 4!',
          hi: 'जब आधार 1 से छोटा (0 < b < 1) हो, तो लॉग हटाते समय असमिका का चिह्न उलट दें और साथ ही x > 0 की शर्त भी लगाएं!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'If a + b + c = 0 in ax² + bx + c = 0, roots are 1 and c/a. If roots are also equal, a = c.',
        hi: 'यदि ax² + bx + c = 0 में a + b + c = 0 हो, तो मूल 1 और c/a होते हैं।',
      },
      {
        en: 'Extreme value of f(x) = ax² + bx + c occurs at x = -b/(2a) and equals -D/(4a) = (4ac - b²)/(4a).',
        hi: 'द्विघात फलन ax² + bx + c का चरम मान x = -b/(2a) पर -D/(4a) होता है।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Quadratics & Logarithms (48M)', hi: 'द्विघात और लघुगणक (48 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Roots & Logs', hi: 'इंडेक्स 1: मूल और लघुगणक' },
          branches: [
            {
              id: 'qd-b1',
              title: { en: 'Nature of Roots (D = b² - 4ac)', hi: 'मूलों की प्रकृति (D = b² - 4ac)' },
              keyPoints: [
                { en: 'D > 0: Real & distinct; D = 0: Real & equal', hi: 'D > 0: वास्तविक व भिन्न; D = 0: वास्तविक व समान' },
                { en: 'D > 0 & Perfect Square (a,b,c ∈ Q): Rational roots', hi: 'D पूर्ण वर्ग हो तो परिमेय (Rational) मूल' },
              ],
              subFormula: '|α - β| = √D / |a|',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-quad-1',
        category: { en: 'Quadratic Equations', hi: 'द्विघात समीकरण' },
        title: { en: 'Newton’s Power Sum Identity for Roots', hi: 'मूलों की घातों के लिए न्यूटन का सूत्र' },
        expression: 'If Sₙ = αⁿ ± βⁿ for ax² + bx + c = 0, then a·Sₙ + b·Sₙ₋₁ + c·Sₙ₋₂ = 0',
        variables: { en: 'α, β: roots of ax² + bx + c = 0', hi: 'α, β: समीकरण के मूल' },
        examTip: {
          en: 'Asked repeatedly in JEE & NIMCET: e.g.,(α¹⁰ - β¹⁰) / (α⁸ - β⁸) reduces immediately using aS₁₀ + cS₈ = -bS₉!',
          hi: 'उच्च घात वाले प्रश्नों जैसे (α¹⁰ - β¹⁰)/(α⁹ - β⁹) को यह सूत्र 5 सेकंड में हल कर देता है!',
        },
      },
    ],
  },

  // ==================== MATH 07: PROGRESSIONS (AP, GP, HP) ====================
  {
    id: 'math-algebra-pnc',
    subjectId: 'mathematics',
    number: '07',
    title: {
      en: 'Sequences & Series: AP, GP, HP, AM-GM-HM & Method of Differences',
      hi: 'अनुक्रम और श्रेणियाँ: AP, GP, HP तथा AM-GM-HM असमिका (Progressions)',
    },
    priorityTier: 2,
    expectedQuestions: 4,
    expectedMarks: 48,
    estimatedHours: 6,
    visualizerType: 'calculus_2d',
    deepConcept: {
      intuition: {
        en: 'Progressions follow simple step patterns: Arithmetic Progression (AP) adds a constant difference d, Geometric Progression (GP) multiplies by a constant ratio r, and Harmonic Progression (HP) has reciprocals in AP. In NIMCET, you can solve almost any general-n progression problem in 15 seconds by substituting n = 1, 2 and checking options!',
        hi: 'श्रेणियाँ सरल पैटर्न पर चलती हैं: समांतर श्रेणी (AP) में स्थिर अंतर d जुड़ता है, गुणोत्तर श्रेणी (GP) में स्थिर अनुपात r का गुणा होता है, और हरात्मक श्रेणी (HP) के पदों के व्युत्क्रम AP में होते हैं। NIMCET में n वाले किसी भी प्रश्न में n = 1, 2 रखकर 15 सेकंड में सही विकल्प पहचाना जा सकता है!',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. AP Shortcuts & nth Term from Sum Sₙ',
            hi: '1. समांतर श्रेणी (AP) के शॉर्टकट और योग Sₙ से nवाँ पद निकालना',
          },
          explanation: {
            en: 'For any sequence, T₁ = S₁ and Tₙ = Sₙ - Sₙ₋₁. In an AP, Sₙ is always a quadratic An² + Bn with zero constant term: its common difference is simply d = 2A (twice the coefficient of n²!) and first term a = A + B. If Tₚ = q and T_q = p, then d = -1, T_(p+q) = 0, and Tₙ = p + q - n.',
            hi: 'किसी भी श्रेणी के लिए Tₙ = Sₙ - Sₙ₋₁ होता है। AP का योग Sₙ हमेशा An² + Bn रूप का होता है जिसका सार्व अंतर सीधे d = 2A (n² के गुणांक का दोगुना!) होता है। यदि Tₚ = q और T_q = p हो, तो T_(p+q) = 0 तथा Tₙ = p + q - n होता है।',
          },
          mathematicalForm: 'If Sₙ = An² + Bn  ⇒  d = 2A,  a = A + B,  Tₙ = 2An + (B - A)',
        },
        {
          heading: {
            en: '2. Geometric Progression (GP), Infinite GP & AM ≥ GM ≥ HM',
            hi: '2. गुणोत्तर श्रेणी (GP), अनंत GP और AM ≥ GM ≥ HM असमिका',
          },
          explanation: {
            en: 'In GP: Tₙ = arⁿ⁻¹, Sₙ = a(1 - rⁿ)/(1 - r), and for |r| < 1, S_∞ = a/(1 - r). For positive numbers, AM ≥ GM ≥ HM (with equality iff all numbers are equal). For two positive numbers a and b: AM = (a+b)/2, GM = √(ab), HM = 2ab/(a+b), and GM² = AM × HM.',
            hi: 'GP में |r| < 1 के लिए अनंत पदों का योग S_∞ = a/(1 - r) होता है। धनात्मक संख्याओं के लिए सदैव AM ≥ GM ≥ HM होता है (बराबर तभी जब सभी संख्याएं समान हों)। दो संख्याओं a और b के लिए GM² = AM × HM तथा HM = 2ab/(a+b) होता है।',
          },
          mathematicalForm: 'S_∞ = a / (1 - r) (|r| < 1)   |   AM ≥ GM ≥ HM   |   G² = A · H',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'Compound Interest, Fractal Geometry & Divide-and-Conquer Recurrences',
          hi: 'चक्रवृद्धि ब्याज, फ्रैक्टल ज्यामिति और एल्गोरिदम विश्लेषण',
        },
        title: {
          en: 'Geometric Series in Merge Sort & Binary Tree Node Counts',
          hi: 'मर्ज सॉर्ट और बाइनरी ट्री में गुणोत्तर श्रेणी का अनुप्रयोग',
        },
        howItWorks: {
          en: 'A complete binary tree of height h has 1 + 2 + 4 + ... + 2ʰ = 2ʰ⁺¹ - 1 nodes (a GP with r = 2).',
          hi: 'h ऊंचाई वाले पूर्ण बाइनरी ट्री में कुल नोड्स 1 + 2 + 4 + ... + 2ʰ = 2ʰ⁺¹ - 1 (r = 2 वाली GP) होते हैं।',
        },
        practicalExample: {
          en: 'Average speed over equal distances at speeds v₁ and v₂ is the Harmonic Mean: 2v₁v₂/(v₁ + v₂).',
          hi: 'समान दूरियों को v₁ और v₂ चाल से तय करने पर औसत चाल हरात्मक माध्य 2v₁v₂/(v₁ + v₂) होती है।',
        },
      },
    },
    workedExamples: [
      {
        id: 'prog-ex-1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Ratio of Sums to Ratio of nth Terms in Two APs',
          hi: 'दो समांतर श्रेणियों के योगों के अनुपात से nवें पदों का अनुपात निकालना',
        },
        problem: {
          en: 'The ratio of the sums of n terms of two APs is (3n + 8) : (7n + 15). Find the ratio of their 12th terms.',
          hi: 'दो समांतर श्रेणियों के n पदों के योगों का अनुपात (3n + 8) : (7n + 15) है। उनके 12वें पदों का अनुपात ज्ञात कीजिए।',
        },
        stepByStep: {
          en: 'Step 1: To convert the ratio of sums Sₙ/S′ₙ into the ratio of m-th terms Tₘ/T′ₘ, replace n by (2m - 1)!\nStep 2: Here we want the 12th term (m = 12), so replace n by 2(12) - 1 = 23.\nStep 3: Ratio = [3(23) + 8] / [7(23) + 15] = (69 + 8) / (161 + 15) = 77 / 176 = 7 / 16.',
          hi: 'चरण 1: योगों के अनुपात Sₙ/S′ₙ से m-वें पदों का अनुपात Tₘ/T′ₘ निकालने के लिए n के स्थान पर सीधे (2m - 1) रखें!\nचरण 2: यहाँ m = 12 है, अतः n = 2(12) - 1 = 23 रखें।\nचरण 3: अनुपात = [3(23) + 8] / [7(23) + 15] = 77 / 176 = 7 : 16।',
        },
        shortcut: {
          en: 'Golden Replacement Rule: Sₙ → Tₘ requires replacing n with (2m - 1). Conversely, Tₙ → Sₘ requires replacing n with (m + 1)/2!',
          hi: 'स्वर्णिम नियम: योग Sₙ से पद Tₘ के लिए n → (2m - 1) रखें; और पद Tₙ से योग Sₘ के लिए n → (m + 1)/2 रखें!',
        },
      },
    ],
    examTraps: [
      {
        id: 'prog-trap-1',
        trap: {
          en: 'Applying Tₙ = Sₙ - Sₙ₋₁ for n = 1.',
          hi: 'n = 1 के लिए Tₙ = Sₙ - Sₙ₋₁ सूत्र लगा देना।',
        },
        correction: {
          en: 'Tₙ = Sₙ - Sₙ₋₁ is valid ONLY for n ≥ 2! For n = 1, always use T₁ = S₁.',
          hi: 'Tₙ = Sₙ - Sₙ₋₁ केवल n ≥ 2 के लिए मान्य है! प्रथम पद के लिए सदैव T₁ = S₁ का उपयोग करें।',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'Sum of Specials: Σn = n(n+1)/2;  Σn² = n(n+1)(2n+1)/6;  Σn³ = [n(n+1)/2]².',
        hi: 'विशेष योग: Σn = n(n+1)/2;  Σn² = n(n+1)(2n+1)/6;  Σn³ = [n(n+1)/2]²।',
      },
      {
        en: 'In HP, if Tₚ = q and T_q = p, then Tₘ = pq / m (so T_(pq) = 1!).',
        hi: 'हरात्मक श्रेणी (HP) में यदि Tₚ = q और T_q = p हो, तो Tₘ = pq / m तथा T_(pq) = 1 होता है!',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Progressions AP, GP, HP (48M)', hi: 'अनुक्रम और श्रेणियाँ (48 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: AP, GP & HP Shortcuts', hi: 'इंडेक्स 1: AP, GP और HP शॉर्टकट' },
          branches: [
            {
              id: 'pr-b1',
              title: { en: 'Selection of Terms', hi: 'पदों का चयन' },
              keyPoints: [
                { en: '3 terms in AP: a - d, a, a + d', hi: 'AP में 3 पद: a - d, a, a + d' },
                { en: '3 terms in GP: a/r, a, ar', hi: 'GP में 3 पद: a/r, a, ar' },
              ],
              subFormula: 'AM ≥ GM ≥ HM',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-prog-1',
        category: { en: 'Progressions', hi: 'श्रेणियाँ' },
        title: { en: 'Sum of Squares & Cubes of First n Natural Numbers', hi: 'प्रथम n प्राकृत संख्याओं के वर्गों और घनों का योग' },
        expression: 'Σ k² = n(n+1)(2n+1)/6   |   Σ k³ = [n(n+1)/2]²',
        variables: { en: 'k from 1 to n', hi: 'k = 1 से n तक' },
        examTip: {
          en: 'To telescope Σ 1/[k(k+1)], write 1/[k(k+1)] = 1/k - 1/(k+1), which sums to 1 - 1/(n+1) = n/(n+1).',
          hi: 'Σ 1/[k(k+1)] का योग सीधे n/(n+1) होता है।',
        },
      },
    ],
  },

  // ==================== MATH 08: PERMUTATIONS, COMBINATIONS & BINOMIAL THEOREM ====================
  {
    id: 'math-pnc-binomial',
    subjectId: 'mathematics',
    number: '08',
    title: {
      en: 'Permutations, Combinations, Derangements & Binomial Theorem',
      hi: 'क्रमचय, संचय, विव्यवस्थापन और द्विपद प्रमेय (P&C and Binomial)',
    },
    priorityTier: 2,
    expectedQuestions: 4,
    expectedMarks: 48,
    estimatedHours: 7,
    visualizerType: 'seating_2d',
    deepConcept: {
      intuition: {
        en: 'Combination (ⁿCᵣ) selects a group where order does not matter, while Permutation (ⁿPᵣ = ⁿCᵣ · r!) arranges them in order. Pair this with the Binomial Theorem (x + y)ⁿ = Σ ⁿCᵣ xⁿ⁻ʳ yʳ, which connects combinatorics to algebra: finding the term independent of x, middle term, or greatest coefficient is a 20-second formula calculation.',
        hi: 'संचय (ⁿCᵣ) समूह के चयन को दर्शाता है जहाँ क्रम का महत्व नहीं होता, जबकि क्रमचय (ⁿPᵣ = ⁿCᵣ · r!) उन्हें क्रम में व्यवस्थित करता है। इसके साथ द्विपद प्रमेय (x + y)ⁿ = Σ ⁿCᵣ xⁿ⁻ʳ yʳ में x से स्वतंत्र पद या महत्तम गुणांक 20 सेकंड के सीधे सूत्र से निकल आता है।',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. String/Tie Method (Together) vs Gap Method (Never Together)',
            hi: '1. स्ट्रिंग विधि (एक साथ) बनाम गैप विधि (कभी एक साथ नहीं)',
          },
          explanation: {
            en: 'When k specific items must ALWAYS be together: tie them into 1 super-object, arrange the (n - k + 1) objects, and multiply by k! internal arrangements. When k items must NEVER be together: arrange the remaining (n - k) items first, creating (n - k + 1) gaps, then choose k gaps in ⁿ⁻ᵏ⁺¹Cₖ ways and arrange the k items in k! ways.',
            hi: 'जब k वस्तुएं सदैव एक साथ रखनी हों: उन्हें बांधकर 1 मान लें, कुल (n - k + 1)! × k! तरीके। जब k वस्तुएं कभी एक साथ न हों: पहले शेष (n - k) वस्तुओं को व्यवस्थित करें और उनके बीच बने (n - k + 1) रिक्त स्थानों (Gaps) में k वस्तुओं को बैठाएं।',
          },
          mathematicalForm: 'Together = (n - k + 1)! · k!   |   No two together = (n - k)! · ⁿ⁻ᵏ⁺¹Pₖ',
        },
        {
          heading: {
            en: '2. Circular Permutations, Geometric Counting & Derangements',
            hi: '2. वृत्तीय क्रमचय, ज्यामितीय गणना और विव्यवस्थापन (Derangement)',
          },
          explanation: {
            en: 'Circular arrangements of n distinct people = (n - 1)!; Necklace/Garland = ½(n - 1)!. From n points in a plane (with p collinear): Lines = ⁿC₂ - ᵖC₂ + 1; Triangles = ⁿC₃ - ᵖC₃; Diagonals of n-gon = ⁿC₂ - n = n(n-3)/2. Derangement Dₙ (no item in its right place): D₂=1, D₃=2, D₄=9, D₅=44.',
            hi: 'वृत्तीय मेज पर n व्यक्तियों की व्यवस्था = (n - 1)!; माला/हार में = ½(n - 1)!। n बिंदुओं (जिनमें p संरेख हों) से: सरल रेखाएं = ⁿC₂ - ᵖC₂ + 1; त्रिभुज = ⁿC₃ - ᵖC₃; बहुभुज के विकर्ण = n(n-3)/2। विव्यवस्थापन (Derangement): D₂=1, D₃=2, D₄=9, D₅=44।',
          },
          mathematicalForm: 'Diagonals = n(n - 3)/2   |   Derangements: D₃ = 2, D₄ = 9, D₅ = 44',
        },
        {
          heading: {
            en: '3. Binomial General Term T_(r+1) & Independent Term Shortcut',
            hi: '3. द्विपद व्यापक पद T_(r+1) और x से स्वतंत्र पद का शॉर्टकट',
          },
          explanation: {
            en: 'In (axᵖ + b/x^q)ⁿ, the general term is T_(r+1) = ⁿCᵣ (axᵖ)ⁿ⁻ʳ (b/x^q)ʳ. To find the term containing xᵐ immediately without writing T_(r+1): compute r = (np - m) / (p + q)! For the term independent of x (m = 0), simply compute r = np / (p + q)!',
            hi: '(axᵖ + b/x^q)ⁿ के प्रसार में xᵐ का गुणांक निकालने के लिए सीधे r = (np - m)/(p + q) सूत्र लगाएं! x से स्वतंत्र पद (m = 0) के लिए सीधे r = np / (p + q) होता है!',
          },
          mathematicalForm: 'In (axᵖ + b/x^q)ⁿ, Term Independent of x is at index r = (n · p) / (p + q)',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'Network Mesh Topologies & Error-Correcting Codes',
          hi: 'नेटवर्क टोपोलॉजी और त्रुटि-सुधार कोड',
        },
        title: {
          en: 'Choosing k Parity Bits & Mesh Links',
          hi: 'पैरिटी बिट्स और नेटवर्क लिंक की गणना',
        },
        howItWorks: {
          en: 'Connecting N routers in a full-mesh topology requires ⁿC₂ = N(N-1)/2 links, while selecting k faulty packets out of n follows ⁿCₖ.',
          hi: 'N राउटर्स को आपस में जोड़ने के लिए ⁿC₂ = N(N-1)/2 केबल लगती हैं।',
        },
        practicalExample: {
          en: 'In an m × n grid of squares, total rectangles = ᵐ⁺¹C₂ × ⁿ⁺¹C₂ (on an 8×8 chessboard = ⁹C₂ × ⁹C₂ = 36 × 36 = 1296 rectangles!).',
          hi: '8×8 शतरंज बोर्ड पर कुल आयतों की संख्या = ⁹C₂ × ⁹C₂ = 1296 तथा कुल वर्गों की संख्या = Σk² = 204 होती है!',
        },
      },
    },
    workedExamples: [
      {
        id: 'pnc-ex-1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Finding Term Independent of x in 5 Seconds',
          hi: '5 सेकंड में x से स्वतंत्र पद ज्ञात करना',
        },
        problem: {
          en: 'Find the term independent of x in the expansion of (2x² - 1/x³)¹⁰.',
          hi: '(2x² - 1/x³)¹⁰ के प्रसार में x से स्वतंत्र पद ज्ञात कीजिए।',
        },
        stepByStep: {
          en: 'Step 1: Compare with (axᵖ + b/x^q)ⁿ: here n = 10, p = 2, q = 3.\nStep 2: Use the shortcut r = np / (p + q) = (10 × 2) / (2 + 3) = 20 / 5 = 4.\nStep 3: So T_(4+1) = T₅ is independent of x! Its value is ¹⁰C₄ (2)¹⁰⁻⁴ (-1)⁴ = 210 × 64 × 1 = 13440.',
          hi: 'चरण 1: यहाँ n = 10, p = 2, q = 3 है।\nचरण 2: शॉर्टकट सूत्र r = np/(p + q) = (10 × 2)/(2 + 3) = 20/5 = 4।\nचरण 3: अतः 5वाँ पद (r = 4) x से स्वतंत्र है: ¹⁰C₄ × 2⁶ × (-1)⁴ = 210 × 64 = 13440।',
        },
        shortcut: {
          en: 'r = np/(p+q) = 20/5 = 4. If np/(p+q) is not an integer, no term independent of x exists!',
          hi: 'सीधे r = np/(p+q) निकालें। यदि यह पूर्णांक न आए, तो x से स्वतंत्र कोई पद नहीं होगा!',
        },
      },
    ],
    examTraps: [
      {
        id: 'pnc-trap-1',
        trap: {
          en: 'Forgetting to divide by factorial of repeated letters when finding Dictionary Rank or word arrangements.',
          hi: 'शब्द के अक्षरों को व्यवस्थित करते समय दोहराए गए अक्षरों के फैक्टोरियल से भाग देना भूल जाना।',
        },
        correction: {
          en: 'For MISSISSIPPI (11 letters: 4 I, 4 S, 2 P, 1 M), total words = 11! / (4! 4! 2!). Always check for duplicate letters first!',
          hi: 'हमेशा पहले गिनें कि कौन सा अक्षर कितनी बार दोहराया गया है और उनके फैक्टोरियल से भाग दें!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'Sum of all Binomial Coefficients: ⁿC₀ + ⁿC₁ + ... + ⁿCₙ = 2ⁿ; Sum of even = Sum of odd = 2ⁿ⁻¹.',
        hi: 'सभी द्विपद गुणांकों का योग = 2ⁿ; सम और विषम स्थानों के गुणांकों का योग = 2ⁿ⁻¹।',
      },
      {
        en: 'Number of terms in (x₁ + x₂ + ... + xₖ)ⁿ is ⁿ⁺ᵏ⁻¹Cₖ₋₁.',
        hi: 'बहुपद (x₁ + x₂ + ... + xₖ)ⁿ के प्रसार में कुल पदों की संख्या = ⁿ⁺ᵏ⁻¹Cₖ₋₁ होती है।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'P&C and Binomial Mastery (48M)', hi: 'क्रमचय-संचय और द्विपद (48 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Combinatorics & Binomial', hi: 'इंडेक्स 1: क्रमचय-संचय और द्विपद' },
          branches: [
            {
              id: 'pnc-b1',
              title: { en: 'Pascal & Binomial Identities', hi: 'पास्कल और द्विपद नियम' },
              keyPoints: [
                { en: 'ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ', hi: 'ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ' },
                { en: 'ⁿCₓ = ⁿCᵧ ⇒ x = y OR x + y = n', hi: 'ⁿCₓ = ⁿCᵧ ⇒ x = y या x + y = n' },
              ],
              subFormula: 'r = np / (p + q)',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-pnc-1',
        category: { en: 'Combinatorics', hi: 'क्रमचय-संचय' },
        title: { en: 'Beggar’s Method (Non-Negative Integer Solutions)', hi: 'अऋणात्मक पूर्णांक हलों की संख्या (Beggar’s Method)' },
        expression: 'x₁ + x₂ + ... + xᵣ = n (xᵢ ≥ 0) has ⁿ⁺ʳ⁻¹Cᵣ₋₁ solutions   |   Positive (xᵢ ≥ 1) has ⁿ⁻¹Cᵣ₋₁',
        variables: { en: 'n: identical items; r: distinct recipients', hi: 'n: समान वस्तुएं; r: भिन्न व्यक्ति' },
        examTip: {
          en: 'Also gives the number of terms in the multinomial expansion (x₁ + x₂ + ... + xᵣ)ⁿ.',
          hi: 'बहुपद (x₁ + x₂ + ... + xᵣ)ⁿ में पदों की संख्या भी ⁿ⁺ʳ⁻¹Cᵣ₋₁ होती है।',
        },
      },
    ],
  },
];
