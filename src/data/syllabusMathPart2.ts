import { Chapter } from '../types/nimcet';

export const MATH_CHAPTERS_PART2: Chapter[] = [
  // ==================== MATH 09: STRAIGHT LINES & PAIR OF LINES ====================
  {
    id: 'math-straight-lines',
    subjectId: 'mathematics',
    number: '09',
    title: {
      en: 'Cartesian Coordinates, Triangle Centers, Straight Lines & Pair of Lines',
      hi: 'कार्तीय निर्देशांक, त्रिभुज के केंद्र, सरल रेखा और सरल रेखा युग्म',
    },
    priorityTier: 1,
    expectedQuestions: 3,
    expectedMarks: 36,
    estimatedHours: 6,
    visualizerType: 'conic_3d',
    deepConcept: {
      intuition: {
        en: 'Coordinate Geometry turns geometry into fast algebra. Every straight line ax + by + c = 0 has slope m = -a/b and normal vector (a, b). Mastering the 4 Triangle Centers (Centroid G, Incenter I, Circumcenter O, Orthocenter H), Foot of Perpendicular / Mirror Image formula, and Pair of Straight Lines angle formula guarantees 100% accuracy in NIMCET.',
        hi: 'निर्देशांक ज्यामिति ज्यामितीय आकृतियों को बीजगणित में बदल देती है। प्रत्येक सरल रेखा ax + by + c = 0 की प्रवणता m = -a/b होती है। त्रिभुज के 4 केंद्रों (केंद्रक G, अंतःकेंद्र I, परिकेंद्र O, लंबकेंद्र H), लंब पाद/दर्पण प्रतिबिंब सूत्र और रेखा-युग्म कोण सूत्र से हर वर्ष प्रश्न आते हैं।',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. Four Centers of a Triangle & Euler Line 2:1 Ratio',
            hi: '1. त्रिभुज के चार केंद्र (G, I, O, H) और ऑयलर रेखा 2:1 अनुपात',
          },
          explanation: {
            en: 'Centroid G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3). Incenter I = ((ax₁+bx₂+cx₃)/(a+b+c), ...). In ANY non-equilateral triangle, Orthocenter (H), Centroid (G), and Circumcenter (O) are collinear on the Euler Line, and G divides H and O internally in the ratio HG : GO = 2 : 1! In a Right-Angled Triangle, Orthocenter H is at the 90° vertex and Circumcenter O is the midpoint of the hypotenuse!',
            hi: 'केंद्रक G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)। किसी भी त्रिभुज में लंबकेंद्र (H), केंद्रक (G) और परिकेंद्र (O) संरेख होते हैं तथा G, रेखाखंड HO को 2 : 1 के अनुपात (HG : GO = 2 : 1) में विभाजित करता है! समकोण त्रिभुज में लंबकेंद्र H समकोण वाले शीर्ष पर और परिकेंद्र O कर्ण के मध्य-बिंदु पर होता है!',
          },
          mathematicalForm: 'Euler Line: HG : GO = 2 : 1  ⇒  G = (H + 2O) / 3',
        },
        {
          heading: {
            en: '2. Distance, Foot of Perpendicular & Mirror Image in a Line',
            hi: '2. बिंदु की रेखा से दूरी, लंब पाद और दर्पण प्रतिबिंब',
          },
          explanation: {
            en: 'Perpendicular distance of (x₁, y₁) from ax + by + c = 0 is |ax₁ + by₁ + c|/√(a²+b²). Distance between parallel lines ax + by + c₁ = 0 and ax + by + c₂ = 0 is |c₁ - c₂|/√(a²+b²). Foot of perpendicular (k=1) and Mirror Image (k=2) of (x₁, y₁) in ax + by + c = 0 is given by (x - x₁)/a = (y - y₁)/b = -k(ax₁ + by₁ + c)/(a² + b²).',
            hi: 'बिंदु (x₁, y₁) से रेखा ax + by + c = 0 पर लंब पाद (k=1) और दर्पण प्रतिबिंब (k=2) दोनों एक ही सूत्र से निकलते हैं: (x - x₁)/a = (y - y₁)/b = -k(ax₁ + by₁ + c)/(a² + b²)।',
          },
          mathematicalForm: '(x - x₁)/a = (y - y₁)/b = -k(ax₁ + by₁ + c)/(a² + b²)  [k=1 Foot, k=2 Image]',
        },
        {
          heading: {
            en: '3. Homogeneous Pair of Straight Lines ax² + 2hxy + by² = 0',
            hi: '3. समघातीय सरल रेखा युग्म ax² + 2hxy + by² = 0',
          },
          explanation: {
            en: 'Represents two lines through origin with slopes m₁ + m₂ = -2h/b and m₁m₂ = a/b. Angle θ between them satisfies tan θ = 2√(h² - ab) / |a + b|. Lines are perpendicular iff a + b = 0 (coeff of x² + coeff of y² = 0) and coincident iff h² = ab.',
            hi: 'यह मूलबिंदु से जाने वाली दो रेखाएं दर्शाता है जिनकी प्रवणताओं का योग m₁ + m₂ = -2h/b और गुणनफल m₁m₂ = a/b होता है। इनके बीच का कोण tan θ = 2√(h² - ab)/|a + b| है। रेखाएं लंबवत होंगी यदि a + b = 0 और संपाती होंगी यदि h² = ab।',
          },
          mathematicalForm: 'tan θ = 2√(h² - ab) / |a + b|   |   Perpendicular ⇔ a + b = 0',
        },
      ],
      realWorldScenario: {
        domain: {
          en: '2D Collision Detection, Laser Reflection & Computer Aided Design (CAD)',
          hi: '2D कोलिजन डिटेक्शन, लेज़र परावर्तन और CAD डिज़ाइन',
        },
        title: {
          en: 'Calculating Reflected Light Rays Off Flat Mirrors',
          hi: 'समतल दर्पण से परावर्तित किरण का समीकरण ज्ञात करना',
        },
        howItWorks: {
          en: 'To find a reflected ray, reflect the source point S across the mirror line to get image S′, and join S′ to the target point.',
          hi: 'परावर्तित किरण निकालने के लिए स्रोत बिंदु का दर्पण रेखा में प्रतिबिंब S′ निकालें और उसे लक्ष्य बिंदु से मिला दें।',
        },
        practicalExample: {
          en: 'Reflecting (x, y) across line y = x simply swaps coordinates to (y, x)!',
          hi: 'रेखा y = x में बिंदु (x, y) का प्रतिबिंब सीधे (y, x) होता है!',
        },
      },
    },
    workedExamples: [
      {
        id: 'sl-ex-1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Finding Orthocenter when Circumcenter and Centroid are Given',
          hi: 'परिकेंद्र और केंद्रक दिए होने पर लंबकेंद्र ज्ञात करना',
        },
        problem: {
          en: 'If the circumcenter of a triangle is O(2, 3) and its centroid is G(4, 5), find its orthocenter H.',
          hi: 'यदि किसी त्रिभुज का परिकेंद्र O(2, 3) और केंद्रक G(4, 5) है, तो उसका लंबकेंद्र H ज्ञात कीजिए।',
        },
        stepByStep: {
          en: 'Step 1: Use Euler Line formula G = (H + 2O)/3 ⇒ H = 3G - 2O.\nStep 2: x_H = 3(4) - 2(2) = 12 - 4 = 8; y_H = 3(5) - 2(3) = 15 - 6 = 9.\nStep 3: Orthocenter H = (8, 9).',
          hi: 'चरण 1: ऑयलर रेखा सूत्र G = (H + 2O)/3 ⇒ H = 3G - 2O का प्रयोग करें।\nचरण 2: x = 3(4) - 2(2) = 8; y = 3(5) - 2(3) = 9। अतः H = (8, 9)।',
        },
        shortcut: {
          en: 'Always remember H = 3G - 2O!',
          hi: 'सीधा सूत्र याद रखें: H = 3G - 2O!',
        },
      },
    ],
    examTraps: [
      {
        id: 'sl-trap-1',
        trap: {
          en: 'Applying |c₁ - c₂|/√(a²+b²) when the two parallel lines have different coefficients of x and y (e.g. 3x+4y+5=0 and 6x+8y-10=0).',
          hi: 'दो समांतर रेखाओं में x और y के गुणांक बराबर किए बिना सीधे |c₁ - c₂|/√(a²+b²) लगा देना।',
        },
        correction: {
          en: 'First divide the second equation by 2 so both have 3x + 4y: 3x + 4y - 5 = 0. Then d = |5 - (-5)|/5 = 2!',
          hi: 'दूरी सूत्र लगाने से पहले दोनों समांतर रेखाओं में x और y के गुणांक एकसमान बनाएं!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'Area of Rhombus formed by ax ± by ± c = 0 is 2c² / |ab|.',
        hi: 'रेखाओं ax ± by ± c = 0 से बनने वाले समचतुर्भुज का क्षेत्रफल = 2c² / |ab| होता है।',
      },
      {
        en: 'Concurrency of 3 lines aᵢx + bᵢy + cᵢ = 0: determinant of [aᵢ bᵢ cᵢ] = 0.',
        hi: 'तीन रेखाओं के संगामी (Concurrent) होने की शर्त: उनके गुणांकों का 3×3 सारणिक = 0।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Straight Lines Mastery (36M)', hi: 'सरल रेखा माइंड मैप (36 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Triangle Centers & Lines', hi: 'इंडेक्स 1: त्रिभुज के केंद्र और रेखाएं' },
          branches: [
            {
              id: 'sl-b1',
              title: { en: 'Right Triangle Special Centers', hi: 'समकोण त्रिभुज के केंद्र' },
              keyPoints: [
                { en: 'Orthocenter H = Vertex of 90° angle', hi: 'लंबकेंद्र H = समकोण वाला शीर्ष' },
                { en: 'Circumcenter O = Midpoint of Hypotenuse', hi: 'परिकेंद्र O = कर्ण का मध्य-बिंदु' },
              ],
              subFormula: 'H = 3G - 2O',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-sl-1',
        category: { en: 'Straight Lines', hi: 'सरल रेखा' },
        title: { en: 'Angle Bisectors of Two Intersecting Lines', hi: 'दो प्रतिच्छेदी रेखाओं के कोण समद्विभाजक' },
        expression: '(a₁x + b₁y + c₁) / √(a₁² + b₁²) = ± (a₂x + b₂y + c₂) / √(a₂² + b₂²)',
        variables: { en: 'Make c₁ > 0 and c₂ > 0 first', hi: 'पहले c₁ > 0 और c₂ > 0 बनाएं' },
        examTip: {
          en: 'When c₁, c₂ > 0: if a₁a₂ + b₁b₂ > 0, "+" sign gives Obtuse bisector and "-" gives Acute bisector.',
          hi: 'यदि c₁, c₂ > 0 और a₁a₂ + b₁b₂ > 0 हो, तो "+" अधिककोण और "-" न्यूनकोण समद्विभाजक देता है।',
        },
      },
    ],
  },

  // ==================== MATH 10: CIRCLES & SYSTEM OF CIRCLES ====================
  {
    id: 'math-circles',
    subjectId: 'mathematics',
    number: '10',
    title: {
      en: 'Circles: Tangents, Chords, Orthogonal Circles & Family of Circles',
      hi: 'वृत्त: स्पर्श रेखा, जीवा, लांबिक वृत्त और वृत्तों का कुल (Circles)',
    },
    priorityTier: 1,
    expectedQuestions: 3,
    expectedMarks: 36,
    estimatedHours: 5,
    visualizerType: 'conic_3d',
    deepConcept: {
      intuition: {
        en: 'For the general circle S: x² + y² + 2gx + 2fy + c = 0, the center is C(-g, -f) and radius is r = √(g² + f² - c). Every tangent condition on a circle comes down to one simple geometric picture: the perpendicular distance from Center C(-g, -f) to the tangent line equals the Radius r!',
        hi: 'व्यापक वृत्त S: x² + y² + 2gx + 2fy + c = 0 का केंद्र C(-g, -f) और त्रिज्या r = √(g² + f² - c) होती है। वृत्त की स्पर्श रेखा का प्रत्येक प्रश्न एक ही सिद्धांत से हल होता है: केंद्र C से स्पर्श रेखा पर डाले गए लंब की लंबाई = त्रिज्या r!',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. Intercepts on Axes, Tangent Condition & Length of Tangent',
            hi: '1. अक्षों पर अंतःखंड, स्पर्श शर्त और स्पर्श रेखा की लंबाई',
          },
          explanation: {
            en: 'X-axis intercept length = 2√(g² - c); Y-axis intercept length = 2√(f² - c). Circle touches X-axis iff g² = c; touches Y-axis iff f² = c; touches both axes iff g² = f² = c. Length of tangent from external point P(x₁, y₁) to circle S = 0 is L = √S₁.',
            hi: 'X-अक्ष पर अंतःखंड = 2√(g² - c) तथा Y-अक्ष पर अंतःखंड = 2√(f² - c)। वृत्त X-अक्ष को स्पर्श करता है यदि g² = c और Y-अक्ष को यदि f² = c। बाह्य बिंदु P(x₁, y₁) से स्पर्श रेखा की लंबाई L = √S₁ होती है।',
          },
          mathematicalForm: 'X-intercept = 2√(g² - c)  |  Y-intercept = 2√(f² - c)  |  Length of Tangent = √S₁',
        },
        {
          heading: {
            en: '2. Orthogonal Circles, Common Chord & Director Circle',
            hi: '2. लांबिक वृत्त (Orthogonal Circles), उभयनिष्ठ जीवा और नियामक वृत्त',
          },
          explanation: {
            en: 'Two circles intersect orthogonally (at 90° angle between tangents, so r₁² + r₂² = d²) iff 2g₁g₂ + 2f₁f₂ = c₁ + c₂! Common chord / Radical axis of two circles is S₁ - S₂ = 0. Director Circle (locus of point from which perpendicular tangents are drawn) of x² + y² = r² is x² + y² = 2r².',
            hi: 'दो वृत्त एक-दूसरे को समकोण (90°) पर काटते हैं (लांबिक वृत्त) यदि और केवल यदि 2g₁g₂ + 2f₁f₂ = c₁ + c₂ हो! दो वृत्तों की उभयनिष्ठ जीवा S₁ - S₂ = 0 होती है। वृत्त x² + y² = r² का नियामक वृत्त (Director Circle) x² + y² = 2r² होता है।',
          },
          mathematicalForm: 'Orthogonality Condition: 2g₁g₂ + 2f₁f₂ = c₁ + c₂   |   Director Circle: x² + y² = 2r²',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'Cellular Tower Coverage & Radar Range Intersection',
          hi: 'मोबाइल टावर कवरेज और रडार रेंज प्रतिच्छेदन',
        },
        title: {
          en: 'Finding Handover Zones Between Two Cell Towers',
          hi: 'दो मोबाइल टावरों के बीच उभयनिष्ठ सिग्नल क्षेत्र निकालना',
        },
        howItWorks: {
          en: 'Subtracting two tower coverage circle equations S₁ - S₂ = 0 gives the exact linear boundary where signal strengths are equal.',
          hi: 'दो वृत्तों के समीकरणों को घटाने (S₁ - S₂ = 0) से उभयनिष्ठ जीवा अर्थात बराबर सिग्नल वाली रेखा मिलती है।',
        },
        practicalExample: {
          en: 'If d = |C₁C₂| = r₁ + r₂, the two circles touch externally and have 3 common tangents.',
          hi: 'यदि केंद्रों के बीच की दूरी d = r₁ + r₂ हो, तो दोनों वृत्त बाह्य रूप से स्पर्श करते हैं और उनकी 3 उभयनिष्ठ स्पर्श रेखाएं होती हैं।',
        },
      },
    },
    workedExamples: [
      {
        id: 'cir-ex-1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Number of Common Tangents to Two Circles',
          hi: 'दो वृत्तों की उभयनिष्ठ स्पर्श रेखाओं की संख्या ज्ञात करना',
        },
        problem: {
          en: 'Find the number of common tangents to the circles x² + y² - 4x - 6y - 12 = 0 and x² + y² + 6x + 18y + 26 = 0.',
          hi: 'वृत्तों x² + y² - 4x - 6y - 12 = 0 और x² + y² + 6x + 18y + 26 = 0 की कुल कितनी उभयनिष्ठ स्पर्श रेखाएं हैं?',
        },
        stepByStep: {
          en: 'Step 1: Circle 1 has Center C₁(2, 3) and radius r₁ = √(4 + 9 - (-12)) = √25 = 5.\nStep 2: Circle 2 has Center C₂(-3, -9) and radius r₂ = √(9 + 81 - 26) = √64 = 8.\nStep 3: Distance between centers d = |C₁C₂| = √[(2 - (-3))² + (3 - (-9))²] = √(5² + 12²) = 13.\nStep 4: Since d = 13 = 5 + 8 = r₁ + r₂, the circles touch externally ⇒ 3 common tangents!',
          hi: 'चरण 1: पहले वृत्त का केंद्र C₁(2, 3) और त्रिज्या r₁ = √(4+9+12) = 5।\nचरण 2: दूसरे वृत्त का केंद्र C₂(-3, -9) और त्रिज्या r₂ = √(9+81-26) = 8।\nचरण 3: केंद्रों के बीच दूरी d = √(5² + 12²) = 13 = r₁ + r₂। अतः वृत्त बाह्य स्पर्श करते हैं ⇒ 3 उभयनिष्ठ स्पर्श रेखाएं!',
        },
        shortcut: {
          en: 'd > r₁+r₂ → 4 tangents; d = r₁+r₂ → 3 tangents; |r₁-r₂| < d < r₁+r₂ → 2 tangents; d = |r₁-r₂| → 1 tangent; d < |r₁-r₂| → 0 tangents.',
          hi: 'd > r₁+r₂ → 4; d = r₁+r₂ → 3; |r₁-r₂| < d < r₁+r₂ → 2; d = |r₁-r₂| → 1 स्पर्श रेखा।',
        },
      },
    ],
    examTraps: [
      {
        id: 'cir-trap-1',
        trap: {
          en: 'Reading g, f, c directly from 2x² + 2y² + 8x - 12y + 6 = 0 without dividing by 2.',
          hi: '2x² + 2y² + 8x - 12y + 6 = 0 में 2 से भाग दिए बिना सीधे g, f, c का मान ले लेना।',
        },
        correction: {
          en: 'Always divide by the coefficient of x² and y² first so the equation starts with 1·x² + 1·y²!',
          hi: 'केंद्र (-g, -f) या स्पर्श रेखा की लंबाई √S₁ निकालने से पहले x² और y² के गुणांक को 1 बनाना अनिवार्य है!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'Diameter Form of Circle with endpoints (x₁,y₁) and (x₂,y₂): (x - x₁)(x - x₂) + (y - y₁)(y - y₂) = 0.',
        hi: 'व्यास के सिरों (x₁,y₁) और (x₂,y₂) वाले वृत्त का समीकरण: (x - x₁)(x - x₂) + (y - y₁)(y - y₂) = 0।',
      },
      {
        en: 'Orthogonal Circles Condition: 2g₁g₂ + 2f₁f₂ = c₁ + c₂.',
        hi: 'दो वृत्तों के समकोण पर काटने (Orthogonal) की शर्त: 2g₁g₂ + 2f₁f₂ = c₁ + c₂।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Circles Mastery (36 Marks)', hi: 'वृत्त (36-अंक माइंड मैप)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Tangents & Orthogonality', hi: 'इंडेक्स 1: स्पर्श रेखा और लांबिकता' },
          branches: [
            {
              id: 'cir-b1',
              title: { en: 'Common Tangents Count', hi: 'उभयनिष्ठ स्पर्श रेखाओं की संख्या' },
              keyPoints: [
                { en: 'External touch (d = r₁+r₂): 3 tangents', hi: 'बाह्य स्पर्श (d = r₁+r₂): 3 स्पर्श रेखाएं' },
                { en: 'Internal touch (d = |r₁-r₂|): 1 tangent', hi: 'अंतः स्पर्श (d = |r₁-r₂|): 1 स्पर्श रेखा' },
              ],
              subFormula: '2g₁g₂ + 2f₁f₂ = c₁ + c₂',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-cir-1',
        category: { en: 'Circles', hi: 'वृत्त' },
        title: { en: 'Length of Chord Cut Off by a Line at Distance p from Center', hi: 'केंद्र से p दूरी वाली रेखा द्वारा काटी गई जीवा की लंबाई' },
        expression: 'Chord Length = 2√(r² - p²)',
        variables: { en: 'r: radius of circle; p: perpendicular distance from center to line', hi: 'r: वृत्त की त्रिज्या; p: केंद्र से रेखा की लंबवत दूरी' },
        examTip: {
          en: 'Pythagoras theorem in 3 seconds: half-chord = √(r² - p²).',
          hi: 'पाइथागोरस प्रमेय से जीवा की लंबाई = 2√(r² - p²) तुरंत निकलती है।',
        },
      },
    ],
  },

  // ==================== MATH 11: CONIC SECTIONS (PARABOLA, ELLIPSE, HYPERBOLA) ====================
  {
    id: 'math-conics',
    subjectId: 'mathematics',
    number: '11',
    title: {
      en: 'Conic Sections: Parabola, Ellipse & Hyperbola (3D Cone Slicer)',
      hi: 'शांकव परिच्छेद: परवलय, दीर्घवृत्त और अतिपरवलय (Conic Sections)',
    },
    priorityTier: 1,
    expectedQuestions: 5,
    expectedMarks: 60,
    estimatedHours: 9,
    visualizerType: 'conic_3d',
    deepConcept: {
      intuition: {
        en: 'Every conic section is defined by the focus-directrix ratio SP = e·PM: Parabola (e = 1), Ellipse (0 < e < 1), and Hyperbola (e > 1). Use the 3D Cone Slicer in our Visual Lab to see how tilting a cutting plane through a double cone smoothly transforms a Circle into an Ellipse, Parabola, and Hyperbola!',
        hi: 'प्रत्येक शांकव परिच्छेद नाभि-नियता अनुपात SP = e·PM से परिभाषित होता है: परवलय (e = 1), दीर्घवृत्त (0 < e < 1), और अतिपरवलय (e > 1)। हमारे 3D लैब में देखें कि शंकु को काटने वाले समतल का कोण बदलने पर वृत्त से दीर्घवृत्त, परवलय और अतिपरवलय कैसे बनते हैं!',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. Parabola (y² = 4ax) Master Properties & Focal Chord Tricks',
            hi: '1. परवलय (y² = 4ax) के मुख्य गुणधर्म और नाभीय जीवा (Focal Chord) ट्रिक्स',
          },
          explanation: {
            en: 'For y² = 4ax: Vertex = (0,0), Focus = (a,0), Directrix: x = -a, Latus Rectum L = 4a, Parametric point = (at², 2at). If a focal chord connects t₁ and t₂, then t₁·t₂ = -1! Also, the harmonic mean of segments of any focal chord equals the semi-latus rectum (2a), and tangents at the extremities of any focal chord intersect AT RIGHT ANGLES on the directrix!',
            hi: 'y² = 4ax के लिए: शीर्ष (0,0), नाभि (a,0), नियता x = -a, नाभिलंब = 4a, प्राचलिक बिंदु (at², 2at)। यदि नाभीय जीवा के सिरे t₁ और t₂ हों, तो सदैव t₁·t₂ = -1 होता है! नाभीय जीवा के सिरों पर खींची गई स्पर्श रेखाएं नियता (Directrix) पर 90° (समकोण) पर मिलती हैं!',
          },
          mathematicalForm: 'Focal Chord: t₁ · t₂ = -1   |   y = mx + a/m (Tangent to y² = 4ax)',
        },
        {
          heading: {
            en: '2. Ellipse (x²/a² + y²/b² = 1) & Hyperbola (x²/a² - y²/b² = 1)',
            hi: '2. दीर्घवृत्त (x²/a² + y²/b² = 1) और अतिपरवलय (x²/a² - y²/b² = 1)',
          },
          explanation: {
            en: 'For Ellipse (a > b): b² = a²(1 - e²), Foci (±ae, 0), Directrices x = ±a/e, Latus Rectum = 2b²/a, Sum of focal distances SP + S′P = 2a, Director Circle: x² + y² = a² + b². For Hyperbola: b² = a²(e² - 1), Difference of focal distances |SP - S′P| = 2a, Asymptotes: x/a ± y/b = 0.',
            hi: 'दीर्घवृत्त (a > b) के लिए: b² = a²(1 - e²), नाभियाँ (±ae, 0), नाभिलंब = 2b²/a, नाभीय दूरियों का योग SP + S′P = 2a, नियामक वृत्त: x² + y² = a² + b²। अतिपरवलय के लिए: b² = a²(e² - 1) और |SP - S′P| = 2a।',
          },
          mathematicalForm: 'Ellipse: e = √(1 - b²/a²)   |   Hyperbola: e = √(1 + b²/a²)   |   1/e₁² + 1/e₂² = 1',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'Parabolic Satellite Dishes, Whispering Galleries & LORAN Navigation',
          hi: 'सैटेलाइट डिश, टेलीस्कोप और नेविगेशन',
        },
        title: {
          en: 'Optical Reflection Property of Conics',
          hi: 'शांकवों का प्रकाशीय परावर्तन गुण',
        },
        howItWorks: {
          en: 'Rays parallel to the axis of a parabola reflect to its Focus; rays from one focus of an ellipse reflect to the other focus.',
          hi: 'परवलय के अक्ष के समांतर आने वाली किरणें परावर्तित होकर नाभि (Focus) पर मिलती हैं।',
        },
        practicalExample: {
          en: 'For Rectangular Hyperbola xy = c² (where a = b), eccentricity is always e = √2.',
          hi: 'समकोणीय अतिपरवलय (Rectangular Hyperbola) की उत्केंद्रता सदैव e = √2 होती है।',
        },
      },
    },
    workedExamples: [
      {
        id: 'con-ex-1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Finding Tangent Condition y = mx + c to a Conic',
          hi: 'रेखा y = mx + c के परवलय या दीर्घवृत्त की स्पर्श रेखा होने की शर्त',
        },
        problem: {
          en: 'If the line y = 2x + k is a tangent to the parabola y² = 12x, find the value of k.',
          hi: 'यदि रेखा y = 2x + k परवलय y² = 12x की एक स्पर्श रेखा है, तो k का मान ज्ञात कीजिए।',
        },
        stepByStep: {
          en: 'Step 1: Compare y² = 12x with y² = 4ax ⇒ 4a = 12 ⇒ a = 3.\nStep 2: Condition for y = mx + c to be tangent to y² = 4ax is c = a/m.\nStep 3: Here m = 2 and a = 3, so k = c = 3/2.',
          hi: 'चरण 1: y² = 12x की तुलना y² = 4ax से करने पर 4a = 12 ⇒ a = 3।\nचरण 2: स्पर्श रेखा की शर्त c = a/m में m = 2 और a = 3 रखने पर k = 3/2।',
        },
        shortcut: {
          en: 'c = a/m for Parabola; c² = a²m² + b² for Ellipse; c² = a²m² - b² for Hyperbola.',
          hi: 'परवलय: c = a/m; दीर्घवृत्त: c² = a²m² + b²; अतिपरवलय: c² = a²m² - b²।',
        },
      },
    ],
    examTraps: [
      {
        id: 'con-trap-1',
        trap: {
          en: 'Using e = √(1 - b²/a²) when b > a in x²/a² + y²/b² = 1 (vertical ellipse).',
          hi: 'ऊर्ध्वाधर दीर्घवृत्त (जहाँ b > a हो) में भी e = √(1 - b²/a²) लगा देना।',
        },
        correction: {
          en: 'In an ellipse, eccentricity is ALWAYS √(1 - (Smaller Denominator)/(Larger Denominator)) so that 0 < e < 1!',
          hi: 'दीर्घवृत्त की उत्केंद्रता निकालने के लिए हमेशा √(1 - छोटा हर / बड़ा हर) का प्रयोग करें ताकि e < 1 रहे!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'Length of Latus Rectum: Parabola = 4a; Ellipse = 2b²/a; Hyperbola = 2b²/a.',
        hi: 'नाभिलंब (Latus Rectum) की लंबाई: परवलय = 4a; दीर्घवृत्त = 2b²/a; अतिपरवलय = 2b²/a।',
      },
      {
        en: 'If e₁ and e₂ are eccentricities of a hyperbola and its conjugate hyperbola, then 1/e₁² + 1/e₂² = 1.',
        hi: 'अतिपरवलय और उसके संयुग्मी अतिपरवलय की उत्केंद्रताओं के लिए: 1/e₁² + 1/e₂² = 1।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Conic Sections Mastery (60M)', hi: 'शांकव परिच्छेद (60 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Conics Master Matrix', hi: 'इंडेक्स 1: शांकव तुलना तालिका' },
          branches: [
            {
              id: 'con-b1',
              title: { en: 'Parabola (y² = 4ax)', hi: 'परवलय (y² = 4ax)' },
              keyPoints: [
                { en: 'Focus: (a, 0), Directrix: x = -a', hi: 'नाभि: (a, 0), नियता: x = -a' },
                { en: 'Focal chord ends: t₁·t₂ = -1', hi: 'नाभीय जीवा के सिरे: t₁·t₂ = -1' },
              ],
              subFormula: 'y = mx + a/m',
            },
            {
              id: 'con-b2',
              title: { en: 'Ellipse & Hyperbola', hi: 'दीर्घवृत्त और अतिपरवलय' },
              keyPoints: [
                { en: 'Foci: (±ae, 0), Directrices: x = ±a/e', hi: 'नाभियाँ: (±ae, 0), नियताएं: x = ±a/e' },
                { en: 'Director Circle: x² + y² = a² ± b²', hi: 'नियामक वृत्त: x² + y² = a² ± b²' },
              ],
              subFormula: 'c² = a²m² ± b²',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-con-1',
        category: { en: 'Conics Tangents', hi: 'स्पर्श रेखाएं' },
        title: { en: 'Slope Form of Tangents (y = mx + c)', hi: 'प्रवणता रूप में स्पर्श रेखा समीकरण' },
        expression: 'Parabola: y = mx + a/m  |  Ellipse: y = mx ± √(a²m² + b²)  |  Hyperbola: y = mx ± √(a²m² - b²)',
        variables: { en: 'm: slope of tangent', hi: 'm: स्पर्श रेखा की प्रवणता' },
        examTip: {
          en: 'Memorize all three together—they solve 60% of conic tangent and normal questions.',
          hi: 'तीनों शांकवों के प्रवणता स्पर्श सूत्र एक साथ याद रखें।',
        },
      },
    ],
  },

  // ==================== MATH 12: DIFFERENTIAL CALCULUS ====================
  {
    id: 'math-calculus',
    subjectId: 'mathematics',
    number: '12',
    title: {
      en: 'Differential Calculus: Limits, Continuity, Derivatives & Maxima-Minima',
      hi: 'अवकल गणित: सीमा, सांतत्य, अवकलन और उच्चिष्ठ-निम्निष्ठ (Differential Calculus)',
    },
    priorityTier: 1,
    expectedQuestions: 5,
    expectedMarks: 60,
    estimatedHours: 8,
    visualizerType: 'calculus_2d',
    deepConcept: {
      intuition: {
        en: 'Differential Calculus analyzes instantaneous rates of change. In NIMCET, Limit questions are dominated by 0/0 L’Hôpital’s Rule, 1^∞ exponential limits, and Maclaurin series expansions (sin x ≈ x - x³/6, cos x ≈ 1 - x²/2), while Application of Derivatives focuses on Tangents/Normals, Monotonicity (f′(x) > 0), and Maxima/Minima (f′(x) = 0).',
        hi: 'अवकल गणित तात्कालिक परिवर्तन की दर का विश्लेषण करता है। NIMCET में सीमा (Limits) के प्रश्न 0/0 में L’Hôpital नियम, 1^∞ घातांक सूत्र और प्रसार (sin x ≈ x - x³/6, cos x ≈ 1 - x²/2) से तुरंत हल होते हैं, जबकि अवकलज के अनुप्रयोग में उच्चिष्ठ-निम्निष्ठ (f′(x) = 0) प्रमुख हैं।',
      },
      corePrinciples: [
        {
          heading: {
            en: "1. Standard Limits, L'Hôpital's Rule & 1^∞ Shortcut",
            hi: '1. मानक सीमाएं, L’Hôpital नियम और 1^∞ शॉर्टकट',
          },
          explanation: {
            en: 'Key limits as x → 0: (sin x)/x = 1, (tan x)/x = 1, (1 - cos x)/x² = 1/2, (e^x - 1)/x = 1, (a^x - 1)/x = ln a, ln(1+x)/x = 1. For 1^∞ form lim [f(x)]^g(x), directly compute e^[lim g(x)·(f(x) - 1)].',
            hi: 'x → 0 पर मानक सीमाएं: (sin x)/x = 1, (1 - cos x)/x² = 1/2, (e^x - 1)/x = 1, (a^x - 1)/x = ln a। 1^∞ रूप के लिए सीधे e^[lim g(x)·(f(x) - 1)] सूत्र लगाएं।',
          },
          mathematicalForm: 'lim(x→0) (1 - cos ax)/x² = a²/2   |   1^∞ Form: e^[lim g(x)(f(x) - 1)]',
        },
        {
          heading: {
            en: '2. Continuity, Differentiability, Rolle’s & Lagrange Mean Value Theorem',
            hi: '2. सांतत्य, अवकलनीयता, रोले और लाग्रेंज माध्य मान प्रमेय',
          },
          explanation: {
            en: 'Every differentiable function is continuous, but a function with a sharp corner (like |x - a|) is continuous yet NOT differentiable at x = a! Rolle’s Theorem on [a, b]: if f(a) = f(b), there exists c ∈ (a, b) with f′(c) = 0. Lagrange MVT: f′(c) = [f(b) - f(a)]/(b - a).',
            hi: 'प्रत्येक अवकलनीय फलन संतत होता है, परंतु नुकीले कोने वाला फलन (जैसे |x - a|) बिंदु x = a पर संतत तो है किंतु अवकलनीय नहीं है! रोले प्रमेय से f′(c) = 0 और लाग्रेंज प्रमेय से f′(c) = [f(b) - f(a)]/(b - a) होता है।',
          },
          mathematicalForm: 'LMVT: f′(c) = [f(b) - f(a)] / (b - a)   |   Subtangent = |y / y′|, Subnormal = |y · y′|',
        },
        {
          heading: {
            en: '3. Maxima, Minima & Classic NIMCET Optimization Results',
            hi: '3. उच्चिष्ठ-निम्निष्ठ और मानक NIMCET अनुकूलन परिणाम',
          },
          explanation: {
            en: 'Max value of f(x) = (ln x)/x (or x^(1/x)) occurs at x = e and equals 1/e (or e^(1/e))! Therefore e^π > π^e always! Rectangle of maximum area inscribed in a circle of radius R is a Square of area 2R².',
            hi: 'फलन f(x) = (ln x)/x (या x^(1/x)) का अधिकतम मान x = e पर प्राप्त होता है और 1/e (या e^(1/e)) के बराबर होता है! इसीलिए सदैव e^π > π^e होता है!',
          },
          mathematicalForm: 'Max of (ln x)/x is 1/e at x = e   |   Max of x^(1/x) is e^(1/e) at x = e',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'Deep Learning Backpropagation & Physics Kinematics',
          hi: 'डीप लर्निंग बैकप्रोपगेशन और भौतिकी गतिविज्ञान',
        },
        title: {
          en: 'Chain Rule in Neural Network Training',
          hi: 'न्यूरल नेटवर्क प्रशिक्षण में श्रृंखला नियम (Chain Rule)',
        },
        howItWorks: {
          en: 'Backpropagation computes ∂Loss/∂w₁ = (∂Loss/∂y)·(∂y/∂h)·(∂h/∂w₁) using the multivariable Chain Rule.',
          hi: 'बैकप्रोपगेशन श्रृंखला नियम (Chain Rule) की सहायता से प्रत्येक लेयर के भार का अवकलज निकालता है।',
        },
        practicalExample: {
          en: 'Velocity v = ds/dt and Acceleration a = dv/dt = v(dv/ds).',
          hi: 'वेग v = ds/dt और त्वरण a = dv/dt = v(dv/ds) होता है।',
        },
      },
    },
    workedExamples: [
      {
        id: 'cal-ex-1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Solving 1^∞ Indeterminate Limit in 10 Seconds',
          hi: '10 सेकंड में 1^∞ अनिर्धार्य सीमा को हल करना',
        },
        problem: {
          en: 'Evaluate lim (x → 0) [(1 + 3x) / (1 - 2x)]^(1/x).',
          hi: 'सीमा का मान ज्ञात कीजिए: lim (x → 0) [(1 + 3x) / (1 - 2x)]^(1/x)।',
        },
        stepByStep: {
          en: 'Step 1: At x = 0, base = 1 and power = ∞ (1^∞ form).\nStep 2: Apply e^[lim g(x)(f(x) - 1)]: Power = lim(x→0) (1/x) · [(1 + 3x)/(1 - 2x) - 1] = lim(x→0) (1/x) · [5x / (1 - 2x)] = 5.\nStep 3: Answer is e⁵.',
          hi: 'चरण 1: x = 0 पर यह 1^∞ रूप है।\nचरण 2: सूत्र e^[lim g(x)(f(x) - 1)] से घात = lim(x→0) (1/x)·[(1+3x - 1+2x)/(1-2x)] = 5।\nचरण 3: उत्तर e⁵ है।',
        },
        shortcut: {
          en: 'lim(x→0) [(1 + ax)/(1 + bx)]^(1/x) is ALWAYS e^(a - b)! Here a = 3, b = -2 ⇒ e^(3 - (-2)) = e⁵!',
          hi: 'सीधी ट्रिक: lim(x→0) [(1 + ax)/(1 + bx)]^(1/x) = e^(a - b)! यहाँ a=3, b=-2 ⇒ e^(3 - (-2)) = e⁵!',
        },
      },
    ],
    examTraps: [
      {
        id: 'cal-trap-1',
        trap: {
          en: 'Assuming f′(a) = 0 guarantees a local maximum or minimum at x = a.',
          hi: 'यह मान लेना कि जहाँ भी f′(a) = 0 है, वहाँ उच्चिष्ठ या निम्निष्ठ अवश्य होगा।',
        },
        correction: {
          en: 'Check sign change of f′(x) or higher derivatives! For f(x) = x³ at x = 0, f′(0) = 0 and f″(0) = 0, which is a Point of Inflection (neither max nor min).',
          hi: 'f(x) = x³ के लिए x = 0 पर f′(0) = 0 है, परंतु यह नति परिवर्तन बिंदु (Point of Inflection) है, उच्चिष्ठ या निम्निष्ठ नहीं!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'lim (x→0) (1 - cos mx)/(1 - cos nx) = m² / n².',
        hi: 'lim (x→0) (1 - cos mx)/(1 - cos nx) = m² / n² होता है।',
      },
      {
        en: 'Derivative of infinite power tower y = x^(x^(x^...)): dy/dx = y² / [x(1 - y ln x)].',
        hi: 'अनंत घात श्रृंखला y = x^(x^(x^...)) का अवकलज: dy/dx = y² / [x(1 - y ln x)] होता है।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Differential Calculus (60M)', hi: 'अवकल गणित (60 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Limits & Derivatives', hi: 'इंडेक्स 1: सीमा और अवकलन' },
          branches: [
            {
              id: 'dc-b1',
              title: { en: 'Fast Limit Formulas', hi: 'त्वरित सीमा सूत्र' },
              keyPoints: [
                { en: 'lim (x→a) (xⁿ - aⁿ)/(x - a) = n·aⁿ⁻¹', hi: 'lim (x→a) (xⁿ - aⁿ)/(x - a) = n·aⁿ⁻¹' },
                { en: 'lim (x→0) (1 + ax)^(b/x) = e^(ab)', hi: 'lim (x→0) (1 + ax)^(b/x) = e^(ab)' },
              ],
              subFormula: 'Max of (ln x)/x = 1/e',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-dcal-1',
        category: { en: 'Limits', hi: 'सीमाएं' },
        title: { en: 'Trigonometric Cosine Difference Limit', hi: 'कोज्या अंतर सीमा सूत्र' },
        expression: 'lim (x → 0) (cos ax - cos bx) / x² = (b² - a²) / 2',
        variables: { en: 'a, b: constants', hi: 'a, b: अचर संख्याएं' },
        examTip: {
          en: 'Notice the order (b² - a²)/2 because cos x = 1 - x²/2 + ... has a negative sign on x²!',
          hi: 'क्रम (b² - a²)/2 का ध्यान रखें! जैसे (cos 3x - cos 5x)/x² का मान (25 - 9)/2 = 8 होगा।',
        },
      },
    ],
  },

  // ==================== MATH 13: INTEGRAL CALCULUS & DIFFERENTIAL EQUATIONS ====================
  {
    id: 'math-int-calculus',
    subjectId: 'mathematics',
    number: '13',
    title: {
      en: 'Integral Calculus: Definite Integrals, Area Under Curves & Differential Equations',
      hi: 'समाकलन गणित: निश्चित समाकलन, वक्रों का क्षेत्रफल और अवकल समीकरण',
    },
    priorityTier: 1,
    expectedQuestions: 5,
    expectedMarks: 60,
    estimatedHours: 8,
    visualizerType: 'calculus_2d',
    deepConcept: {
      intuition: {
        en: 'Integral Calculus reverses differentiation and sums continuous quantities. In NIMCET, Definite Integral properties—especially King’s Property ∫ₐᵇ f(x) dx = ∫ₐᵇ f(a+b-x) dx, Even/Odd symmetry on [-a, a], Walli’s formula on [0, π/2], and standard Area-Between-Parabolas formulas—solve complex integrals without ever finding an antiderivative!',
        hi: 'समाकलन अवकलन की विपरीत प्रक्रिया है और वक्र के नीचे का क्षेत्रफल मापता है। NIMCET में निश्चित समाकलन के गुणधर्म—विशेष रूप से किंग्स प्रॉपर्टी ∫ₐᵇ f(x) dx = ∫ₐᵇ f(a+b-x) dx, सम/विषम फलन नियम, वॉली सूत्र और परवलयों के बीच क्षेत्रफल के सीधे सूत्र—बिना लंबा समाकलन किए उत्तर देते हैं!',
      },
      corePrinciples: [
        {
          heading: {
            en: "1. Definite Integral King's Property, Even-Odd & Periodic Rules",
            hi: '1. निश्चित समाकलन का किंग्स प्रॉपर्टी, सम-विषम और आवर्ती फलन नियम',
          },
          explanation: {
            en: '(1) King’s Property: ∫ₐᵇ f(x) dx = ∫ₐᵇ f(a+b-x) dx. Consequently, ∫ₐᵇ f(x)/[f(x) + f(a+b-x)] dx = (b - a)/2. (2) On [-a, a]: if f(-x) = -f(x) (Odd), integral is 0; if f(-x) = f(x) (Even), integral is 2∫₀ᵃ f(x) dx. (3) If f(x) has period T, then ∫₀^(nT) f(x) dx = n∫₀ᵀ f(x) dx.',
            hi: '(1) किंग्स प्रॉपर्टी से ∫ₐᵇ f(x)/[f(x) + f(a+b-x)] dx = (b - a)/2 होता है। (2) [-a, a] अंतराल में विषम फलन (f(-x) = -f(x)) का समाकलन 0 होता है। (3) आवर्तकाल T वाले फलन के लिए ∫₀^(nT) f(x) dx = n∫₀ᵀ f(x) dx होता है।',
          },
          mathematicalForm: '∫ₐᵇ f(x) / [f(x) + f(a+b-x)] dx = (b - a)/2   |   ∫₋ₐᵃ (Odd Function) dx = 0',
        },
        {
          heading: {
            en: '2. Area Under Curves Shortcuts & Walli’s Formula',
            hi: '2. वक्रों के बीच क्षेत्रफल के शॉर्टकट और वॉली सूत्र',
          },
          explanation: {
            en: 'Area between y² = 4ax and x² = 4by is 16ab/3. Area between y² = 4ax and y = mx is 8a²/(3m³). Area of ellipse x²/a² + y²/b² = 1 is πab. Area of one arch of sin x or cos x on [0, π] is 2 (so ∫₀^(nπ) |sin x| dx = 2n!).',
            hi: 'परवलयों y² = 4ax और x² = 4by के बीच क्षेत्रफल = 16ab/3। परवलय y² = 4ax और रेखा y = mx के बीच क्षेत्रफल = 8a²/(3m³)। दीर्घवृत्त का संपूर्ण क्षेत्रफल = πab। sin x के एक लूप [0, π] का क्षेत्रफल = 2 होता है (अतः ∫₀^(nπ) |sin x| dx = 2n)!',
          },
          mathematicalForm: 'Area(y²=4ax & x²=4by) = 16ab/3   |   Area(y²=4ax & y=mx) = 8a²/(3m³)   |   ∫₀^(nπ) |sin x| dx = 2n',
        },
        {
          heading: {
            en: '3. Differential Equations: Order, Degree & Linear IF',
            hi: '3. अवकल समीकरण: कोटि (Order), घात (Degree) और समाकलन गुणक (IF)',
          },
          explanation: {
            en: 'Order is the highest derivative present. Degree is the power of the highest-order derivative AFTER clearing fractional/radical powers of derivatives (if a derivative is inside sin(dy/dx) or e^(dy/dx), degree is NOT DEFINED!). For linear DE dy/dx + P(x)y = Q(x), Integrating Factor IF = e^(∫P dx) and solution is y·(IF) = ∫ Q·(IF) dx + C.',
            hi: 'कोटि (Order) उच्चतम अवकलज की संख्या है, और करणी/भिन्न घात हटाने के बाद उच्चतम अवकलज की घात को Degree कहते हैं (यदि अवकलज sin(dy/dx) या log(dy/dx) के अंदर हो तो घात अपरिभाषित होती है!)। रैखिक समीकरण dy/dx + P(x)y = Q(x) का समाकलन गुणक IF = e^(∫P dx) होता है।',
          },
          mathematicalForm: 'IF = e^(∫ P(x) dx)   |   ∫ e^x [f(x) + f′(x)] dx = e^x f(x) + C',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'Physics Work-Energy, Signal Processing & Population Growth Models',
          hi: 'भौतिकी कार्य-ऊर्जा, सिग्नल प्रोसेसिंग और जनसंख्या वृद्धि मॉडल',
        },
        title: {
          en: 'RC Circuit Charging & Radioactive Decay Differential Equations',
          hi: 'RC सर्किट चार्जिंग और रेडियोधर्मी क्षय के अवकल समीकरण',
        },
        howItWorks: {
          en: 'Capacitor charging follows dV/dt + V/(RC) = E/(RC), solved directly using Integrating Factor e^(t/RC).',
          hi: 'कैपेसिटर चार्जिंग समीकरण dV/dt + V/(RC) = E/(RC) को सीधे समाकलन गुणक e^(t/RC) से हल किया जाता है।',
        },
        practicalExample: {
          en: '∫₀^(π/2) ln(sin x) dx = ∫₀^(π/2) ln(cos x) dx = -(π/2) ln 2.',
          hi: 'मानक परिणाम याद रखें: ∫₀^(π/2) ln(sin x) dx = -(π/2) ln 2 तथा ∫₀^(π/2) ln(tan x) dx = 0।',
        },
      },
    },
    workedExamples: [
      {
        id: 'ical-ex-1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Evaluating ∫ e^x [f(x) + f′(x)] dx Pattern',
          hi: '∫ e^x [f(x) + f′(x)] dx पैटर्न के प्रश्न हल करना',
        },
        problem: {
          en: 'Evaluate ∫ e^x · [(x - 1) / (x + 1)³] dx.',
          hi: 'समाकलन कीजिए: ∫ e^x · [(x - 1) / (x + 1)³] dx।',
        },
        stepByStep: {
          en: 'Step 1: Rewrite numerator (x - 1) in terms of (x + 1): x - 1 = (x + 1) - 2.\nStep 2: Split the fraction: (x - 1)/(x + 1)³ = 1/(x + 1)² - 2/(x + 1)³.\nStep 3: Notice that if f(x) = 1/(x + 1)², then f′(x) = -2/(x + 1)³!\nStep 4: By ∫ e^x [f(x) + f′(x)] dx = e^x f(x) + C, the answer is e^x / (x + 1)² + C.',
          hi: 'चरण 1: अंश (x - 1) को (x + 1) - 2 लिखें।\nचरण 2: अलग-अलग भाग देने पर: 1/(x + 1)² + [-2/(x + 1)³]।\nचरण 3: यहाँ f(x) = 1/(x + 1)² का अवकलज f′(x) = -2/(x + 1)³ है!\nचरण 4: अतः उत्तर सीधे e^x / (x + 1)² + C होगा।',
        },
        shortcut: {
          en: 'Whenever e^x multiplies a fraction with (x + a)³ in the denominator, f(x) is almost always 1/(x + a)²!',
          hi: 'जब भी e^x के साथ हर में (x + a)³ हो, तो उत्तर हमेशा e^x / (x + a)² रूप का होता है!',
        },
      },
    ],
    examTraps: [
      {
        id: 'ical-trap-1',
        trap: {
          en: 'Finding the Degree of a differential equation when dy/dx is trapped inside sin(dy/dx), cos(dy/dx), or ln(dy/dx).',
          hi: 'जब dy/dx किसी त्रिकोणमितीय या लघुगणकीय फलन जैसे sin(dy/dx) के अंदर हो, तब भी उसकी घात (Degree) 1 बता देना।',
        },
        correction: {
          en: 'For Degree to exist, the DE must be a polynomial in all derivatives! In d²y/dx² + sin(dy/dx) = 0, Order = 2 and Degree = NOT DEFINED.',
          hi: 'd²y/dx² + sin(dy/dx) = 0 की कोटि (Order) = 2 है, परंतु घात (Degree) अपरिभाषित (Not Defined) है!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'Area between y² = 4ax and x² = 4by is 16ab / 3.',
        hi: 'दो परवलयों y² = 4ax और x² = 4by के बीच घिरे क्षेत्र का क्षेत्रफल सीधे 16ab / 3 होता है।',
      },
      {
        en: 'Leibniz Rule: d/dx [∫_u(x)^v(x) f(t) dt] = f(v(x))·v′(x) - f(u(x))·u′(x).',
        hi: 'लाइबनिज़ नियम: d/dx [∫_u(x)^v(x) f(t) dt] = f(v(x))·v′(x) - f(u(x))·u′(x)।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Integral Calculus & DE (60M)', hi: 'समाकलन और अवकल समीकरण (60 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Definite Integrals & Areas', hi: 'इंडेक्स 1: निश्चित समाकलन और क्षेत्रफल' },
          branches: [
            {
              id: 'ic-b1',
              title: { en: 'Standard Definite Values', hi: 'मानक निश्चित समाकलन मान' },
              keyPoints: [
                { en: '∫₀^(π/2) ln(sin x) dx = -(π/2) ln 2', hi: '∫₀^(π/2) ln(sin x) dx = -(π/2) ln 2' },
                { en: '∫₀^(π/2) ln(tan x) dx = 0', hi: '∫₀^(π/2) ln(tan x) dx = 0' },
              ],
              subFormula: 'Area = 16ab / 3',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-ical-1',
        category: { en: 'Definite Integrals', hi: 'निश्चित समाकलन' },
        title: { en: "King's Property Half-Interval Result", hi: 'किंग्स प्रॉपर्टी अर्ध-अंतराल परिणाम' },
        expression: '∫₀^(π/2) sinⁿx / (sinⁿx + cosⁿx) dx = π / 4',
        variables: { en: 'n: Any real number', hi: 'n: कोई भी वास्तविक संख्या' },
        examTip: {
          en: 'Regardless of whether n = 1/2, 3, or 2026, the answer on [0, π/2] is always π/4!',
          hi: 'चाहे घात n का मान कुछ भी हो, [0, π/2] अंतराल में इसका उत्तर हमेशा π/4 होता है!',
        },
      },
    ],
  },

  // ==================== MATH 14: TRIGONOMETRY & INVERSE TRIG ====================
  {
    id: 'math-trigonometry',
    subjectId: 'mathematics',
    number: '14',
    title: {
      en: 'Trigonometric Ratios, Identities, Equations & Inverse Functions',
      hi: 'त्रिकोणमितीय अनुपात, सर्वसमिकाएं, समीकरण और प्रतिलोम फलन',
    },
    priorityTier: 2,
    expectedQuestions: 4,
    expectedMarks: 48,
    estimatedHours: 6,
    visualizerType: 'calculus_2d',
    deepConcept: {
      intuition: {
        en: 'Trigonometry in NIMCET is all about pattern compression and extreme value bounds. Memorizing the 60°-offset product identities, the A+B=45° tangent product, and the principal value branches of sin⁻¹x ∈ [-π/2, π/2], cos⁻¹x ∈ [0, π], and tan⁻¹x ∈ (-π/2, π/2) lets you solve trigonometric equations in seconds.',
        hi: 'NIMCET की त्रिकोणमिति में शॉर्टकट सूत्रों और अधिकतम/न्यूनतम मानों का सबसे अधिक महत्व है। 60°-अंतराल वाले गुणन सूत्र, A+B=45° नियम, और प्रतिलोम त्रिकोणमितीय मुख्य मान शाखाओं (sin⁻¹x ∈ [-π/2, π/2], cos⁻¹x ∈ [0, π]) से प्रश्न सेकंडों में हल होते हैं।',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. Golden Product Identities & Extreme Value Bounds',
            hi: '1. स्वर्णिम गुणन सूत्र और अधिकतम/न्यूनतम मान सीमाएं',
          },
          explanation: {
            en: '(1) sin θ · sin(60°-θ) · sin(60°+θ) = ¼ sin 3θ; (2) cos θ · cos(60°-θ) · cos(60°+θ) = ¼ cos 3θ; (3) tan θ · tan(60°-θ) · tan(60°+θ) = tan 3θ. Extreme values of a sin θ + b cos θ lie in [-√(a²+b²), +√(a²+b²)]. Minimum value of a² tan²θ + b² cot²θ is 2ab; minimum value of a² sec²θ + b² cosec²θ is (a + b)²!',
            hi: '(1) sin θ · sin(60°-θ) · sin(60°+θ) = ¼ sin 3θ; (2) cos θ · cos(60°-θ) · cos(60°+θ) = ¼ cos 3θ। व्यंजक a sin θ + b cos θ का परिसर [-√(a²+b²), +√(a²+b²)] होता है। a² tan²θ + b² cot²θ का न्यूनतम मान 2ab तथा a² sec²θ + b² cosec²θ का न्यूनतम मान (a + b)² होता है!',
          },
          mathematicalForm: 'Min(a² tan²θ + b² cot²θ) = 2ab   |   Min(a² sec²θ + b² cosec²θ) = (a + b)²',
        },
        {
          heading: {
            en: '2. Inverse Trigonometric Functions & Complementary Sums',
            hi: '2. प्रतिलोम त्रिकोणमितीय फलन और पूरक योग सूत्र',
          },
          explanation: {
            en: 'sin⁻¹x + cos⁻¹x = π/2 (for x ∈ [-1, 1]); tan⁻¹x + cot⁻¹x = π/2 (for all x ∈ ℝ); sec⁻¹x + cosec⁻¹x = π/2 (for |x| ≥ 1). For x, y > 0: tan⁻¹x + tan⁻¹y = tan⁻¹[(x+y)/(1-xy)] if xy < 1, and π + tan⁻¹[(x+y)/(1-xy)] if xy > 1!',
            hi: 'sin⁻¹x + cos⁻¹x = π/2; tan⁻¹x + cot⁻¹x = π/2; sec⁻¹x + cosec⁻¹x = π/2। यदि x, y > 0 और xy < 1 हो, तो tan⁻¹x + tan⁻¹y = tan⁻¹[(x+y)/(1-xy)], परंतु यदि xy > 1 हो तो π + tan⁻¹[(x+y)/(1-xy)] होता है!',
          },
          mathematicalForm: 'tan⁻¹(1) + tan⁻¹(2) + tan⁻¹(3) = π   |   tan⁻¹(1/2) + tan⁻¹(1/3) = π/4',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'Fourier Audio Synthesis, AC Phasor Circuits & Signal Modulation',
          hi: 'फूरियर ऑडियो सिग्नल और प्रत्यावर्ती धारा (AC) परिपथ',
        },
        title: {
          en: 'Combining Out-of-Phase Sinusoidal Waves',
          hi: 'दो ज्यावक्रीय तरंगों का अध्यारोपण (Superposition)',
        },
        howItWorks: {
          en: 'Adding a sin(ωt) + b cos(ωt) produces a single wave of amplitude R = √(a² + b²).',
          hi: 'दो तरंगों a sin(ωt) + b cos(ωt) को जोड़ने पर परिणामी आयाम R = √(a² + b²) प्राप्त होता है।',
        },
        practicalExample: {
          en: '3 sin x + 4 cos x has peak amplitude √(3² + 4²) = 5.',
          hi: '3 sin x + 4 cos x का अधिकतम मान √(3² + 4²) = 5 और न्यूनतम मान -5 होता है।',
        },
      },
    },
    workedExamples: [
      {
        id: 'trig-ex-1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Evaluating cos 20° · cos 40° · cos 60° · cos 80°',
          hi: 'cos 20° · cos 40° · cos 60° · cos 80° का मान ज्ञात करना',
        },
        problem: {
          en: 'Find the exact value of cos 20° · cos 40° · cos 60° · cos 80°.',
          hi: 'cos 20° · cos 40° · cos 60° · cos 80° का सटीक मान क्या है?',
        },
        stepByStep: {
          en: 'Step 1: Separate known cos 60° = 1/2. Remaining product is cos 20° · cos(60° - 20°) · cos(60° + 20°).\nStep 2: Apply ¼ cos(3θ) with θ = 20°: ¼ cos(60°) = ¼ × (1/2) = 1/8.\nStep 3: Multiply by the separated cos 60° = 1/2: (1/2) × (1/8) = 1/16.',
          hi: 'चरण 1: cos 60° = 1/2 को अलग रखें। शेष भाग cos 20° · cos(60°-20°) · cos(60°+20°) है।\nचरण 2: सूत्र ¼ cos 3θ में θ = 20° रखने पर: ¼ cos 60° = 1/8।\nचरण 3: कुल मान = (1/2) × (1/8) = 1/16।',
        },
        shortcut: {
          en: ' Also works by doubling angle chain: sin(2³ × 20°) / (2³ sin 20°) = sin 160° / (8 sin 20°) = 1/8, times cos 60° (1/2) = 1/16.',
          hi: 'गुणोत्तर कोण श्रृंखला सूत्र sin(2ⁿA)/[2ⁿ sin A] से भी यह 5 सेकंड में हल होता है।',
        },
      },
    ],
    examTraps: [
      {
        id: 'trig-trap-1',
        trap: {
          en: 'Applying AM ≥ GM directly to find minimum of a² sec²θ + b² cosec²θ as 2ab.',
          hi: 'a² sec²θ + b² cosec²θ का न्यूनतम मान 2ab लिख देना।',
        },
        correction: {
          en: 'First write sec²θ = 1 + tan²θ and cosec²θ = 1 + cot²θ! So a² + b² + (a² tan²θ + b² cot²θ) ≥ a² + b² + 2ab = (a + b)²!',
          hi: 'पहले sec²θ = 1 + tan²θ और cosec²θ = 1 + cot²θ में बदलें! तब न्यूनतम मान a² + b² + 2ab = (a + b)² आता है!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'If A + B = 45°, then (1 + tan A)(1 + tan B) = 2.',
        hi: 'यदि A + B = 45° हो, तो (1 + tan A)(1 + tan B) = 2 होता है।',
      },
      {
        en: 'Famous Inverse Sums: tan⁻¹(1) + tan⁻¹(2) + tan⁻¹(3) = π; and tan⁻¹(1/2) + tan⁻¹(1/3) = π/4.',
        hi: 'प्रमुख प्रतिलोम योग: tan⁻¹(1) + tan⁻¹(2) + tan⁻¹(3) = π तथा tan⁻¹(1/2) + tan⁻¹(1/3) = π/4।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Trigonometry & Inverse (48M)', hi: 'त्रिकोणमिति और प्रतिलोम फलन (48 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Identities & Maxima', hi: 'इंडेक्स 1: सर्वसमिकाएं और चरम मान' },
          branches: [
            {
              id: 'trig-b1',
              title: { en: 'Extreme Values', hi: 'अधिकतम और न्यूनतम मान' },
              keyPoints: [
                { en: 'Range of a sin θ + b cos θ is [-√(a²+b²), √(a²+b²)]', hi: 'a sin θ + b cos θ का परिसर [-√(a²+b²), √(a²+b²)] है' },
                { en: 'Min of a² sec²θ + b² cosec²θ = (a + b)²', hi: 'a² sec²θ + b² cosec²θ का न्यूनतम मान (a + b)² है' },
              ],
              subFormula: '(1 + tan 20°)(1 + tan 25°) = 2',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-trig-1',
        category: { en: 'Trigonometry', hi: 'त्रिकोणमिति' },
        title: { en: 'Cosine Doubling Angle Product Chain', hi: 'कोज्या द्विक कोण गुणन श्रृंखला' },
        expression: 'cos A · cos 2A · cos 4A ··· cos(2ⁿ⁻¹A) = sin(2ⁿA) / [2ⁿ · sin A]',
        variables: { en: 'n: number of cosine factors', hi: 'n: गुणनखंडों की संख्या' },
        examTip: {
          en: 'Count how many terms are multiplied (= n) and check if angles double each step!',
          hi: 'पदों की संख्या n गिनें और देखें कि कोण हर बार दोगुना हो रहा है!',
        },
      },
    ],
  },

  // ==================== MATH 15: PROPERTIES OF TRIANGLES & HEIGHTS AND DISTANCES ====================
  {
    id: 'math-triangles-heights',
    subjectId: 'mathematics',
    number: '15',
    title: {
      en: 'Properties of Triangles (Sine/Cosine Rules, Radii r & R) & Heights and Distances',
      hi: 'त्रिभुजों के गुण (Sine/Cosine नियम, त्रिज्याएं r व R) तथा ऊंचाई और दूरी',
    },
    priorityTier: 2,
    expectedQuestions: 3,
    expectedMarks: 36,
    estimatedHours: 5,
    visualizerType: 'calculus_2d',
    deepConcept: {
      intuition: {
        en: 'Properties of Triangles (Solution of Triangles) and Heights & Distances yield 2 to 3 direct questions in NIMCET. Everything revolves around the Sine Rule (a/sin A = 2R), Cosine Rule, Heron’s Area Δ = √[s(s-a)(s-b)(s-c)], Circumradius R = abc/(4Δ), and Inradius r = Δ/s.',
        hi: 'त्रिभुजों के गुण और ऊंचाई एवं दूरी से NIMCET में 2 से 3 सीधे प्रश्न आते हैं। इसके मुख्य स्तंभ ज्या नियम (a/sin A = 2R), कोज्या नियम, हीरोन का क्षेत्रफल Δ, परित्रिज्या R = abc/(4Δ) और अंतःत्रिज्या r = Δ/s हैं।',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. Sine Rule, Cosine Rule, Projection Formula & Napier’s Analogy',
            hi: '1. ज्या नियम (Sine Rule), कोज्या नियम और प्रक्षेप सूत्र',
          },
          explanation: {
            en: 'Sine Rule: a/sin A = b/sin B = c/sin C = 2R. Cosine Rule: cos A = (b² + c² - a²)/(2bc). Projection Formula: a = b cos C + c cos B. In an Equilateral Triangle of side a: R = a/√3 and r = a/(2√3), so R : r = 2 : 1 (and Area ratio = 4 : 1)! In a Right-Angled Triangle (c = hypotenuse): R = c/2 and r = (a + b - c)/2.',
            hi: 'ज्या नियम: a/sin A = b/sin B = c/sin C = 2R। कोज्या नियम: cos A = (b² + c² - a²)/(2bc)। समबाहु त्रिभुज में परित्रिज्या और अंतःत्रिज्या का अनुपात सदैव R : r = 2 : 1 होता है! समकोण त्रिभुज (कर्ण c) में R = c/2 तथा r = (a + b - c)/2 होता है!',
          },
          mathematicalForm: 'R = abc / (4Δ)   |   r = Δ / s   |   Equilateral: R : r = 2 : 1',
        },
        {
          heading: {
            en: '2. Heights & Distances Two-Point Elevation & Shadow Shortcuts',
            hi: '2. ऊंचाई और दूरी के द्वि-बिंदु उन्नयन कोण शॉर्टकट',
          },
          explanation: {
            en: 'When walking distance d toward a tower of height h changes angle of elevation from α to β: h = d / (cot α - cot β). If angles of elevation from two points at distances a and b from the base are complementary (α and 90°-α), then tower height is simply the Geometric Mean: h = √(ab)!',
            hi: 'टावर की ओर d दूरी चलने पर उन्नयन कोण α से बढ़कर β हो जाए, तो ऊंचाई h = d / (cot α - cot β) होती है। यदि आधार से a और b दूरी पर स्थित दो बिंदुओं से उन्नयन कोण पूरक (α और 90°-α) हों, तो टावर की ऊंचाई सीधे गुणोत्तर माध्य h = √(ab) होती है!',
          },
          mathematicalForm: 'h = d / (cot α - cot β)   |   Complementary Angles (α + β = 90°): h = √(ab)',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'Surveying, Aviation Glide Slope & Radar Triangulation',
          hi: 'भू-सर्वेक्षण, विमानन लैंडिंग और रडार दूरी मापन',
        },
        title: {
          en: 'Aircraft Altitude Estimation from Two Ground Radar Stations',
          hi: 'दो ग्राउंड रडार स्टेशनों से विमान की ऊंचाई की गणना',
        },
        howItWorks: {
          en: 'Two ground stations separated by distance d measure elevation angles α and β to compute exact aircraft altitude.',
          hi: 'd दूरी पर स्थित दो रडार उन्नयन कोण α और β मापकर विमान की सटीक ऊंचाई निकालते हैं।',
        },
        practicalExample: {
          en: 'For α = 30°, β = 60°, cot 30° - cot 60° = √3 - 1/√3 = 2/√3 ⇒ h = (√3/2)d.',
          hi: 'α = 30° और β = 60° के लिए ऊंचाई h = (√3/2)d होती है।',
        },
      },
    },
    workedExamples: [
      {
        id: 'tri-ex-1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Finding R and r for a 3-4-5 Right Triangle',
          hi: 'भुजाओं 3, 4, 5 वाले त्रिभुज की परित्रिज्या R और अंतःत्रिज्या r',
        },
        problem: {
          en: 'In a triangle ABC with sides a = 3, b = 4, c = 5, find the circumradius R and inradius r.',
          hi: 'यदि किसी त्रिभुज की भुजाएं 3, 4 और 5 हैं, तो उसकी परित्रिज्या R और अंतःत्रिज्या r का मान ज्ञात कीजिए।',
        },
        stepByStep: {
          en: 'Step 1: Since 3² + 4² = 5², ΔABC is a right-angled triangle with hypotenuse c = 5.\nStep 2: Circumradius R = c/2 = 5/2 = 2.5.\nStep 3: Inradius r = (a + b - c)/2 = (3 + 4 - 5)/2 = 2/2 = 1.',
          hi: 'चरण 1: चूँकि 3² + 4² = 5² है, यह समकोण त्रिभुज है जिसका कर्ण c = 5 है।\nचरण 2: समकोण त्रिभुज में परित्रिज्या R = c/2 = 5/2 = 2.5 तथा अंतःत्रिज्या r = (a + b - c)/2 = (3 + 4 - 5)/2 = 1।',
        },
        shortcut: {
          en: 'In any right-angled triangle: R = Hypotenuse / 2 and r = (Base + Perpendicular - Hypotenuse) / 2!',
          hi: 'किसी भी समकोण त्रिभुज में R = कर्ण/2 तथा r = (आधार + लंब - कर्ण)/2 होता है!',
        },
      },
    ],
    examTraps: [
      {
        id: 'tri-trap-1',
        trap: {
          en: 'Using h = d/(cot α - cot β) when the two observation points are on OPPOSITE sides of the tower.',
          hi: 'जब दो प्रेक्षण बिंदु टावर के विपरीत ओर हों, तब भी अंतर सूत्र cot α - cot β लगा देना।',
        },
        correction: {
          en: 'When points are on the SAME side of the tower: h = d/(cot α - cot β). When on OPPOSITE sides of the tower: h = d/(cot α + cot β)!',
          hi: 'टावर के एक ही ओर होने पर h = d/(cot α - cot β) और विपरीत ओर होने पर h = d/(cot α + cot β) लगाएं!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'Half-Angle Formulas: sin(A/2) = √[(s-b)(s-c)/(bc)]; cos(A/2) = √[s(s-a)/(bc)]; tan(A/2) = Δ / [s(s-a)].',
        hi: 'अर्ध-कोण सूत्र: sin(A/2) = √[(s-b)(s-c)/(bc)]; cos(A/2) = √[s(s-a)/(bc)]।',
      },
      {
        en: 'Complementary Elevation Angles (α + β = 90°) from distances a and b: Tower height h = √(ab).',
        hi: 'आधार से a और b दूरी पर पूरक उन्नयन कोण (α + β = 90°) बनने पर ऊंचाई h = √(ab) होती है।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Triangles & Heights (36M)', hi: 'त्रिभुजों के गुण और ऊंचाई-दूरी (36 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Radii & Elevation Shortcuts', hi: 'इंडेक्स 1: त्रिज्याएं और उन्नयन कोण' },
          branches: [
            {
              id: 'th-b1',
              title: { en: 'Circumradius R & Inradius r', hi: 'परित्रिज्या R और अंतःत्रिज्या r' },
              keyPoints: [
                { en: 'General: R = abc/(4Δ), r = Δ/s, r₁ = Δ/(s-a)', hi: 'व्यापक: R = abc/(4Δ), r = Δ/s, r₁ = Δ/(s-a)' },
                { en: 'Right Triangle: R = c/2, r = (a+b-c)/2', hi: 'समकोण त्रिभुज: R = c/2, r = (a+b-c)/2' },
              ],
              subFormula: 'h = d / (cot α - cot β)',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-tri-1',
        category: { en: 'Heights & Distances', hi: 'ऊंचाई और दूरी' },
        title: { en: 'Same-Side vs Opposite-Side Elevation Formula', hi: 'एक ही ओर बनाम विपरीत ओर उन्नयन कोण सूत्र' },
        expression: 'Same Side: h = d / (cot α - cot β)   |   Opposite Sides: h = d / (cot α + cot β)',
        variables: { en: 'd: distance between two ground points; α, β: elevation angles', hi: 'd: दो बिंदुओं के बीच दूरी; α, β: उन्नयन कोण' },
        examTip: {
          en: 'Also remember: for α = 30° and β = 60° (same side), d = 2x where x is distance from 60° point to tower base!',
          hi: 'α = 30° और β = 60° (एक ही ओर) होने पर 60° वाले बिंदु से आधार की दूरी हमेशा d/2 होती है!',
        },
      },
    ],
  },
];
