import { Chapter } from '../types/nimcet';
import { MATH_CHAPTERS } from './syllabusMath';

const RAW_OTHER_CHAPTERS: Chapter[] = [
  // ============================================================================
  // SUBJECT 2: ANALYTICAL ABILITY & LOGICAL REASONING (40 Questions · 240 Marks)
  // ============================================================================
  {
    id: 'lr-puzzles-seating',
    subjectId: 'reasoning',
    number: '16',
    title: {
      en: 'Circular, Linear & Dual-Row Seating Arrangements',
      hi: 'वृत्तीय, रैखिक और दोहरी पंक्ति बैठक व्यवस्था (Seating Arrangement)',
    },
    priorityTier: 1,
    expectedQuestions: 8,
    expectedMarks: 48,
    estimatedHours: 6,
    visualizerType: 'seating_circle_2d',
    subtopics: [
      {
        id: 'lr16-s1',
        title: {
          en: '16.1 Circular Arrangement (Facing Center vs Facing Outward vs Mixed)',
          hi: '16.1 वृत्तीय बैठक व्यवस्था (केंद्र की ओर बनाम बाहर की ओर मुख)',
        },
        detailedTheory: {
          en: 'In an 8-person circle indexed 0 to 7 counter-clockwise: if everyone faces the CENTER, "Immediate Right" is +1 (counter-clockwise) and "Immediate Left" is -1 (clockwise). If a person faces OUTWARD, the directions reverse! In an even-numbered circle of N persons, "Diametrically Opposite" is always seat (i + N/2) mod N (so for N=8, seat i is opposite seat i+4, meaning exactly 3 persons sit between them on either side). Always start your diagram with the person who has the maximum definite links ("sits 3rd to the left of...") and never start with negative clues ("A does not sit next to B").',
          hi: '8 व्यक्तियों के वृत्त (0 से 7 वामावर्त क्रमांकित) में: यदि सभी का मुख केंद्र की ओर है, तो "ठीक दायां" = +1 (वामावर्त) और "ठीक बायां" = -1 (दक्षिणावर्त) होता है। यदि किसी व्यक्ति का मुख बाहर की ओर है, तो दायां-बायां पलट जाता है! N (सम संख्या) व्यक्तियों के वृत्त में "ठीक सामने (Opposite)" हमेशा (i + N/2) mod N होता है (अर्थात 8 व्यक्तियों में आमने-सामने बैठे दो लोगों के बीच दोनों ओर ठीक 3 व्यक्ति होते हैं)। हमेशा सबसे निश्चित जानकारी वाले व्यक्ति से चित्र बनाना शुरू करें।',
        },
        keyRules: [
          {
            en: '"A sits 3rd to the right of B" means there are (3 - 1) = 2 persons sitting between A and B along that direction.',
            hi: '"A, B के दाएं से तीसरे स्थान पर है" का अर्थ है कि उस दिशा में A और B के बीच (3 - 1) = 2 व्यक्ति बैठे हैं।',
          },
          {
            en: '"Who / Whose / Which" always refers to the SECOND (nearest) person; "And / But / While" always refers to the FIRST person of the sentence!',
            hi: '"Who / Whose / Which" हमेशा पास वाले (दूसरे) व्यक्ति के लिए आता है; जबकि "And / But / While" हमेशा वाक्य के पहले व्यक्ति के लिए आता है!',
          },
        ],
        keyEquations: [
          'Facing Center: Right = Counter-Clockwise (+1), Left = Clockwise (-1)',
          '8-Person Circle Opposite Seat = (Index + 4) mod 8  [3 persons between them]',
        ],
      },
      {
        id: 'lr16-s2',
        title: {
          en: '16.2 Linear Row (North/South) & Parallel Dual-Row Arrangements',
          hi: '16.2 एकल पंक्ति (उत्तर/दक्षिण) और समांतर दोहरी पंक्ति व्यवस्था',
        },
        detailedTheory: {
          en: 'In a single linear row: Facing North means your natural Right is East (+1) and Left is West (-1). Facing South reverses Left and Right. In a Parallel Dual-Row set (Row 1 facing South: A, B, C, D, E; Row 2 facing North: P, Q, R, S, T), "A faces P" means A and P occupy the exact same column index! "A sits diagonally opposite to T" means they occupy opposite extreme ends of the two rows.',
          hi: 'एकल पंक्ति में उत्तर (North) की ओर मुख होने पर आपका अपना दायां = पंक्ति का दायां और बायां = पंक्ति का बायां होता है। दक्षिण (South) की ओर मुख होने पर दायां और बायां उलट जाते हैं। समांतर दोहरी पंक्ति में "A का मुख P की ओर है" का अर्थ है कि दोनों एक ही स्तंभ (Column) में आमने-सामने हैं।',
        },
        keyRules: [
          {
            en: '"A sits 2nd to the left of the person who faces P": first find the person facing P, then move 2 steps to their left.',
            hi: '"A उस व्यक्ति के बाएं से दूसरे स्थान पर है जिसका मुख P की ओर है": पहले P के सामने वाले व्यक्ति को पकड़ें, फिर उसके बाएं 2 स्थान चलें।',
          },
          {
            en: 'If a clue gives 2 possible seats, draw 2 parallel rough diagrams immediately—one will eliminate itself within 2 clues!',
            hi: 'यदि किसी कथन से 2 स्थितियां बन रही हों, तो सोचने में समय गंवाने के बजाय तुरंत 2 समांतर चित्र बनाएं—एक चित्र आगे चलकर स्वतः कट जाएगा!',
          },
        ],
        keyEquations: [
          'Facing North: Left = Index - 1, Right = Index + 1',
          'Facing South: Left = Index + 1, Right = Index - 1',
        ],
      },
    ],
    deepConcept: {
      intuition: {
        en: 'Seating Arrangement sets carry 4 to 5 questions (24–30 marks) per passage in NIMCET. Convert every circular or linear table into numbered slots (0 to N-1) and parse conjunctions ("who" vs "and") with 100% precision.',
        hi: 'बैठक व्यवस्था के एक सेट से सीधे 4 से 5 प्रश्न (24–30 अंक) हल होते हैं। मेज या पंक्ति को क्रमांकित स्थानों (0 से N-1) में बदलें और "who" तथा "and" के व्याकरणिक नियम का सख्ती से पालन करें।',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. Circular Modular Arithmetic & Conjunction Rule ("Who" vs "And")',
            hi: '1. वृत्तीय मॉड्यूलर नियम और संयोजक नियम ("Who" बनाम "And")',
          },
          explanation: {
            en: 'In "A sits 2nd to the left of B, who sits opposite C", "who" refers to B (so B sits opposite C). In "A sits 2nd to the left of B and sits opposite C", "and" refers to A (so A sits opposite C).',
            hi: '"A sits 2nd left of B, who sits opposite C" में "who" का अर्थ B है। "A sits 2nd left of B and sits opposite C" में "and" का अर्थ A है।',
          },
          mathematicalForm: 'k-th to Right (Facing Center) = (i + k) mod N  |  Opposite = (i + N/2) mod N',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'Round-Robin Network Token Ring & Diplomatic Table Protocols',
          hi: 'टोकन रिंग नेटवर्क और राउंड-रॉबिन शेड्यूलिंग',
        },
        title: {
          en: 'Ring Topology Node Indexing',
          hi: 'रिंग टोपोलॉजी में नोड इंडेक्सिंग',
        },
        howItWorks: {
          en: 'Token Ring networks pass packets around a logical circle using modular arithmetic (i + 1) mod N.',
          hi: 'टोकन रिंग नेटवर्क में डेटा पैकेट (i + 1) mod N के क्रम में घूमते हैं।',
        },
        practicalExample: {
          en: 'Interactive 2D Seating Visualizer in our Lab lets you toggle Facing Center vs Facing Outward live.',
          hi: 'हमारे 2D लैब में केंद्र बनाम बाहर की ओर मुख बदलकर दायां/बायां लाइव देखें।',
        },
      },
    },
    workedExamples: [
      {
        id: 'lr16-ex1',
        difficulty: 'NIMCET Standard',
        title: {
          en: '8-Person Circular Table with Opposite & Left/Right Clues',
          hi: '8 व्यक्तियों की वृत्तीय मेज पर स्थान निर्धारण',
        },
        problem: {
          en: 'Eight persons P, Q, R, S, T, U, V, W sit around a circular table facing center. P sits 3rd to the right of T. R sits opposite to P. Q sits immediate left of R. What is the position of Q with respect to T?',
          hi: 'आठ व्यक्ति P, Q, R, S, T, U, V, W केंद्र की ओर मुख करके गोल मेज पर बैठे हैं। P, T के दाएं से तीसरे स्थान पर है। R, P के ठीक सामने है। Q, R के ठीक बाएं है। T के सापेक्ष Q का स्थान क्या है?',
        },
        stepByStep: {
          en: 'Step 1: Fix T at seat 0.\nStep 2: P is 3rd right of T ⇒ P is at seat +3.\nStep 3: R is opposite P (in an 8-seat circle, add 4) ⇒ R is at seat (3 + 4) mod 8 = seat 7.\nStep 4: Q is immediate left (-1) of R(7) ⇒ Q is at seat 7 - 1 = seat 6.\nStep 5: Seat 6 relative to T(0) is 6 - 8 = -2, which means 2nd to the LEFT of T!',
          hi: 'चरण 1: T = 0 मानें।\nचरण 2: P, T के दाएं तीसरा (+3) है ⇒ P = 3।\nचरण 3: R, P के सामने (+4) है ⇒ R = (3 + 4) = 7।\nचरण 4: Q, R के ठीक बाएं (-1) है ⇒ Q = 7 - 1 = 6।\nचरण 5: T(0) से सीट 6 की दूरी = -2 अर्थात T के बाएं से दूसरा (2nd to the left)!',
        },
        shortcut: {
          en: 'With modular numbers: T=0, P=3, R=7, Q=6 ≡ -2 (mod 8) ⇒ 2nd to the left of T in 8 seconds without even drawing a circle!',
          hi: 'अंकगणित ट्रिक: T=0, P=+3, R=3+4=7, Q=7-1=6 ≡ -2 (mod 8) ⇒ T के बाएं से दूसरा!',
        },
      },
    ],
    examTraps: [
      {
        id: 'lr16-trap1',
        trap: {
          en: 'Reading "3 persons sit between A and B" as "A is 3rd to the right of B".',
          hi: '"A और B के बीच 3 व्यक्ति बैठे हैं" को "A, B के दाएं से तीसरा है" समझ लेना।',
        },
        correction: {
          en: 'If k persons sit between A and B, then A is (k + 1)-th from B! So 3 persons between them means 4th to the left/right (diametrically opposite in an 8-person circle).',
          hi: 'यदि बीच में k व्यक्ति हैं, तो स्थान (k + 1)-वाँ होता है! अर्थात 3 व्यक्ति बीच में होने का अर्थ चौथा स्थान है।',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'In an 8-person circle, "3 persons sit between A and B" means A and B sit diametrically opposite each other.',
        hi: '8 व्यक्तियों के वृत्त में "A और B के बीच 3 व्यक्ति हैं" का अर्थ है कि A और B आमने-सामने बैठे हैं।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Seating Arrangements (48M)', hi: 'बैठक व्यवस्था (48 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Circular & Linear Rules', hi: 'इंडेक्स 1: वृत्तीय और रैखिक नियम' },
          branches: [
            {
              id: 'lr16-b1',
              title: { en: 'Circular Table Rules', hi: 'वृत्तीय मेज नियम' },
              keyPoints: [
                { en: 'Center: Right = CCW (+1), Left = CW (-1)', hi: 'केंद्र की ओर: दायां = वामावर्त (+1)' },
                { en: 'Opposite in N-circle = (i + N/2) mod N', hi: 'सामने की सीट = (i + N/2) mod N' },
              ],
              subFormula: 'Opposite(8) = (i + 4) mod 8',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-lr16-1',
        category: { en: 'Circular Arrangement', hi: 'वृत्तीय व्यवस्था' },
        title: { en: 'Circular Seat Offset Formula', hi: 'वृत्तीय सीट ऑफसेट सूत्र' },
        expression: 'Facing Center: Seat_Right(i, k) = (i + k) mod N  |  Opposite(i) = (i + N/2) mod N',
        variables: { en: 'N: even number of seats', hi: 'N: सीटों की कुल सम संख्या' },
        examTip: {
          en: 'Numbering seats 0..7 eliminates drawing errors under exam pressure.',
          hi: 'सीटों को 0 से 7 नंबर देने से परीक्षा में कभी गलती नहीं होती।',
        },
      },
    ],
  },

  // ==================== LR 17: FLOOR, BOX, SCHEDULING & MATRIX PUZZLES ====================
  {
    id: 'lr-floor-grid-puzzles',
    subjectId: 'reasoning',
    number: '17',
    title: {
      en: 'Multi-Parameter Matrix Grids, Floor/Box Puzzles & Day/Month Scheduling',
      hi: 'मल्टी-पैरामीटर मैट्रिक्स पहेलियाँ, फ्लोर/बॉक्स और दिन/महीना शेड्यूलिंग',
    },
    priorityTier: 1,
    expectedQuestions: 8,
    expectedMarks: 48,
    estimatedHours: 6,
    visualizerType: 'seating_circle_2d',
    subtopics: [
      {
        id: 'lr17-s1',
        title: {
          en: '17.1 Floor Puzzles, Box Stacking & Day/Month Scheduling',
          hi: '17.1 मंजिल (Floor) पहेलियाँ, बॉक्स पहेलियाँ और दिन/महीना शेड्यूलिंग',
        },
        detailedTheory: {
          en: 'In Floor Puzzles (Ground floor = 1, Top floor = 8), always draw a fixed vertical table from 8 down to 1 FIRST. Remember: "Three floors between A and B" means |Floor(A) - Floor(B)| = 4! Also, "A lives above B" means anywhere above B (Floor(A) > Floor(B)), whereas "A lives IMMEDIATELY above B" means Floor(A) = Floor(B) + 1. In Month Scheduling puzzles, always write the number of days (30 vs 31 vs 28) next to each month (e.g., Jan-31, Mar-31, Apr-30, Jun-30, Sep-30, Nov-30) because clues frequently state "X attends the seminar in a month having 30 days".',
          hi: 'मंजिल पहेलियों (सबसे निचली मंजिल = 1, सबसे ऊपरी = 8) में सबसे पहले 8 से 1 तक की खड़ी तालिका बनाएं। ध्यान दें: "A और B के बीच 3 मंजिलें हैं" का अर्थ है |Floor(A) - Floor(B)| = 4! इसी प्रकार "A, B के ऊपर रहता है" का अर्थ कहीं भी ऊपर हो सकता है, जबकि "A, B के ठीक ऊपर (Immediately above) रहता है" का अर्थ Floor(A) = Floor(B) + 1 है। महीनों की पहेली में प्रत्येक महीने के आगे दिनों की संख्या (30 या 31) अवश्य लिखें।',
        },
        keyRules: [
          {
            en: 'k floors/boxes between A and B ⇒ |Pos(A) - Pos(B)| = k + 1.',
            hi: 'A और B के बीच k मंजिलें या बॉक्स होने पर उनके क्रमांकों का अंतर = k + 1 होता है।',
          },
          {
            en: '30-Day Months: April, June, September, November (AJ-SN). All others (except Feb) have 31 days.',
            hi: '30 दिनों वाले महीने: अप्रैल, जून, सितंबर, नवंबर। शेष सभी (फरवरी को छोड़कर) में 31 दिन होते हैं।',
          },
        ],
        keyEquations: [
          'k floors between A and B  ⇔  |Floor(A) - Floor(B)| = k + 1',
          'Immediately Above: Floor(A) = Floor(B) + 1',
        ],
      },
      {
        id: 'lr17-s2',
        title: {
          en: '17.2 Multi-Variable Attribute Grid (Person × City × Profession × Sport)',
          hi: '17.2 बहु-चर मैट्रिक्स तालिका (व्यक्ति × शहर × व्यवसाय × खेल)',
        },
        detailedTheory: {
          en: 'When matching 6–7 people with 3 attributes (e.g., Person, City, Profession), NEVER draw a 2D cross-tick grid of 100 cells (too slow). Instead, create a 3-column table with the fixed entities (Persons A to G) in Column 1, Positive Matches in Column 2, and Negative Eliminations (e.g. "× Doctor, × Delhi") in Column 3.',
          hi: 'जब 6–7 व्यक्तियों को शहर और व्यवसाय से मिलाना हो, तो बड़ा क्रॉस-चेक ग्रिड न बनाएं। इसके बजाय 3 स्तंभों की तालिका बनाएं: स्तंभ 1 में स्थिर नाम (A से G), स्तंभ 2 में पक्की जानकारी, और स्तंभ 3 में निषेधात्मक जानकारी (जैसे × डॉक्टर, × दिल्ली) लिखें।',
        },
        keyRules: [
          {
            en: 'If clue says "Neither A nor B is the Engineer or Pilot, and C is the Doctor", immediately check who is left for Engineer/Pilot.',
            hi: 'जिन विकल्पों में सबसे अधिक मनाही (×) हो, उन्हें सबसे पहले भरें क्योंकि उनके लिए केवल 1 ही स्थान बचता है।',
          },
        ],
        keyEquations: [
          'Remaining Choices = Total Attributes - Definite Assignments - Negative Exclusions',
        ],
      },
    ],
    deepConcept: {
      intuition: {
        en: 'Every multi-parameter puzzle is a Constraint Satisfaction Problem (CSP). Anchoring the invariant dimension (Floors 8..1, Days Mon..Sun, or Persons A..F) in the leftmost column reduces a 5-minute puzzle into a 90-second fill-in-the-blanks table.',
        hi: 'प्रत्येक पहेली में सबसे पहले अपरिवर्तनीय इकाई (जैसे मंजिल 8 से 1, या सोमवार से रविवार) को बाएं स्तंभ में स्थिर कर दें; इससे 5 मिनट की पहेली 90 सेकंड में हल हो जाती है।',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. Floor Separation & Parity Deduction Rule',
            hi: '1. मंजिल अंतर और सम-विषम (Parity) नियम',
          },
          explanation: {
            en: 'If an odd number of floors (e.g. 3 floors) lie between A and B, then |Floor(A) - Floor(B)| = 4 (even), so A and B MUST both live on Even floors or both on Odd floors! If an even number of floors (e.g. 2 floors) lie between A and B, |Floor(A) - Floor(B)| = 3 (odd), so one lives on an Even floor and the other on an Odd floor!',
            hi: 'यदि A और B के बीच विषम संख्या में मंजिलें (जैसे 3 मंजिलें) हैं, तो अंतर 4 (सम) होगा, अर्थात A और B दोनों सम (Even) या दोनों विषम (Odd) मंजिलों पर होंगे! यदि बीच में सम मंजिलें (जैसे 2) हैं, तो एक सम और दूसरा विषम मंजिल पर होगा!',
          },
          mathematicalForm: 'k floors between A & B ⇒ Difference = k + 1',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'CPU Task Scheduling & Timetable Constraint Solvers',
          hi: 'CPU टास्क शेड्यूलिंग और टाइमटेबल सॉल्वर',
        },
        title: {
          en: 'Constraint Propagation in Automated Scheduling',
          hi: 'ऑटोमेटेड शेड्यूलिंग में बाधा निवारण',
        },
        howItWorks: {
          en: 'Schedulers assign tasks with the tightest constraints (minimum remaining values) first.',
          hi: 'सबसे अधिक शर्तों वाले कार्य को सबसे पहले स्लॉट दिया जाता है।',
        },
        practicalExample: {
          en: 'Used in university exam slot allocation and airline crew rostering.',
          hi: 'विश्वविद्यालय की परीक्षा समय-सारणी और एयरलाइन क्रू शेड्यूलिंग में यही तर्क काम करता है।',
        },
      },
    },
    workedExamples: [
      {
        id: 'lr17-ex1',
        difficulty: 'NIMCET Standard',
        title: {
          en: '6-Floor Building Deduction',
          hi: '6-मंजिला इमारत की पहेली हल करना',
        },
        problem: {
          en: 'Six persons A, B, C, D, E, F live on 6 floors (1 to 6). A lives on an even-numbered floor above floor 2. Three persons live between A and D. B lives immediately above D. On which floor does B live?',
          hi: 'छह व्यक्ति A, B, C, D, E, F मंजिल 1 से 6 पर रहते हैं। A मंजिल 2 के ऊपर किसी सम मंजिल पर रहता है। A और D के बीच 3 व्यक्ति रहते हैं। B, D के ठीक ऊपर रहता है। B किस मंजिल पर रहता है?',
        },
        stepByStep: {
          en: 'Step 1: Even floors above 2 are Floor 4 or Floor 6.\nStep 2: Three persons live between A and D ⇒ |Floor(A) - Floor(D)| = 4.\nStep 3: If A = 4, D must be 4 - 4 = 0 (impossible). Thus A MUST be on Floor 6, and D is on Floor 6 - 4 = Floor 2!\nStep 4: B lives immediately above D(2) ⇒ B lives on Floor 3!',
          hi: 'चरण 1: मंजिल 2 के ऊपर सम मंजिलें 4 या 6 हैं।\nचरण 2: A और D के बीच 3 व्यक्ति हैं ⇒ अंतर = 3 + 1 = 4।\nचरण 3: यदि A = 4 हो, तो D = 0 होगा जो असंभव है। अतः A = मंजिल 6 और D = 6 - 4 = मंजिल 2!\nचरण 4: B, D(2) के ठीक ऊपर अर्थात मंजिल 3 पर रहता है!',
        },
        shortcut: {
          en: 'In a 6-floor building, "3 floors between X and Y" (difference 4) is only possible for pairs (6, 2) or (5, 1)! Since A is even, (A, D) = (6, 2) immediately!',
          hi: '6 मंजिलों में अंतर 4 केवल (6, 2) या (5, 1) में संभव है! चूँकि A सम है, अतः तुरंत A = 6 और D = 2!',
        },
      },
    ],
    examTraps: [
      {
        id: 'lr17-trap1',
        trap: {
          en: 'Treating "A lives two floors above B" as "Two floors between A and B".',
          hi: '"A lives two floors above B" को "A और B के बीच दो मंजिलें हैं" समझ लेना।',
        },
        correction: {
          en: '"Two floors above B" means Floor(A) = Floor(B) + 2 (so only ONE floor is between them!). Read carefully whether the question says "two floors above" (+2) or "two floors between" (+3).',
          hi: '"Two floors above B" का अर्थ Floor(B) + 2 है (बीच में केवल 1 मंजिल!), जबकि "Two floors between A and B" का अर्थ Floor(B) + 3 है!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: '"Two floors above B" ⇒ B + 2 (1 floor between). "Two floors between A and B" ⇒ B + 3.',
        hi: '"Two floors above B" ⇒ B + 2 (बीच में 1 मंजिल)। "Two floors between A and B" ⇒ B + 3।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Floor & Matrix Puzzles (48M)', hi: 'फ्लोर और मैट्रिक्स पहेलियाँ (48 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Floor & Month Rules', hi: 'इंडेक्स 1: मंजिल और महीना नियम' },
          branches: [
            {
              id: 'lr17-b1',
              title: { en: 'Floor Gap Formula', hi: 'मंजिल अंतर सूत्र' },
              keyPoints: [
                { en: 'k floors between = Difference of (k + 1)', hi: 'बीच में k मंजिलें = (k + 1) का अंतर' },
                { en: '30-Day Months: Apr, Jun, Sep, Nov', hi: '30 दिन वाले महीने: अप्रैल, जून, सितंबर, नवंबर' },
              ],
              subFormula: '|F₁ - F₂| = k + 1',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-lr17-1',
        category: { en: 'Floor Puzzles', hi: 'मंजिल पहेलियाँ' },
        title: { en: 'Floor Difference vs Gap Rule', hi: 'मंजिल अंतर सूत्र' },
        expression: 'k floors between A and B  ⇔  |Floor(A) - Floor(B)| = k + 1',
        variables: { en: 'k: number of intermediate floors', hi: 'k: बीच की मंजिलों की संख्या' },
        examTip: {
          en: 'Parity check: if k is odd, k+1 is even, so both floors have the SAME parity (both even or both odd).',
          hi: 'यदि बीच में विषम मंजिलें हैं, तो दोनों व्यक्ति समान सम/विषम मंजिल पर होंगे।',
        },
      },
    ],
  },

  // ==================== LR 18: SYLLOGISMS, VENN LOGIC & STATEMENT-CONCLUSIONS ====================
  {
    id: 'lr-syllogism-blood-dir',
    subjectId: 'reasoning',
    number: '18',
    title: {
      en: 'Syllogisms (Only a Few, Either-Or), Logical Venn Diagrams & Statement-Arguments',
      hi: 'न्याय निगमन (Syllogism), तार्किक वेन आरेख और कथन-निष्कर्ष',
    },
    priorityTier: 1,
    expectedQuestions: 7,
    expectedMarks: 42,
    estimatedHours: 5,
    visualizerType: 'venn_probability_2d',
    subtopics: [
      {
        id: 'lr18-s1',
        title: {
          en: '18.1 Standard Syllogisms, "Only a Few" & Definite vs Possibility Conclusions',
          hi: '18.1 न्याय निगमन (Syllogism), "केवल कुछ (Only a Few)" और संभावना नियम',
        },
        detailedTheory: {
          en: 'Draw the MINIMUM-OVERLAP Venn diagram for the given statements. A DEFINITE conclusion ("Some A are B", "No A is B") is true ONLY if it holds in EVERY possible valid diagram. A POSSIBILITY conclusion ("All A being B is a possibility") is true if it holds in AT LEAST ONE valid diagram without violating any statement! Special Modern Keywords: (1) "Only a few A are B" means BOTH "Some A are B" AND "Some A are NOT B" (so All A can never be B, though All B can be A!). (2) "Only A are B" means "All B are A" and B cannot overlap with anything else!',
          hi: 'कथनों के लिए न्यूनतम ओवरलैप वाला वेन आरेख बनाएं। कोई निश्चित निष्कर्ष ("Some A are B") तभी सत्य होता है जब वह प्रत्येक संभावित आरेख में सत्य हो। संभावना वाला निष्कर्ष ("is a possibility") तब सत्य होता है जब वह किसी कथन का उल्लंघन किए बिना कम से कम एक आरेख में संभव हो! विशेष नियम: (1) "Only a few A are B" का अर्थ है "कुछ A, B हैं" और "कुछ A, B नहीं हैं" दोनों! (2) "Only A are B" का अर्थ है "सभी B केवल A हैं" (B किसी अन्य से नहीं जुड़ सकता)!',
        },
        keyRules: [
          {
            en: 'If all given statements are POSITIVE ("All", "Some"), no definite NEGATIVE conclusion can ever follow!',
            hi: 'यदि सभी कथन सकारात्मक हैं, तो कोई भी निश्चित नकारात्मक निष्कर्ष कभी सही नहीं हो सकता!',
          },
          {
            en: '"Only a few A are B" ⇒ Some A are B + Some A are NOT B ⇒ "All A being B is a possibility" is FALSE, but "All B being A is a possibility" is TRUE!',
            hi: '"Only a few A are B" होने पर संपूर्ण A कभी B में नहीं जा सकता, परंतु संपूर्ण B संभावना में A के अंदर जा सकता है!',
          },
        ],
        keyEquations: [
          'Only a few A are B  ⇔  (A ∩ B ≠ ∅)  AND  (A - B ≠ ∅)',
          'Only A are B  ⇔  All B are A (and B ∩ Others = ∅)',
        ],
      },
      {
        id: 'lr18-s2',
        title: {
          en: '18.2 Complementary "Either I or II Follows" Pair Conditions',
          hi: '18.2 पूरक युग्म "या तो निष्कर्ष I या II अनुसरण करता है" (Either-Or) की 3 शर्तें',
        },
        detailedTheory: {
          en: 'Two conclusions form an "Either I or II follows" pair if and only if ALL 3 conditions hold: (1) Both conclusions are individually FALSE (doubtful/uncertain), (2) Both have the exact SAME subject and predicate terms, and (3) They form one of the two valid complementary pairs: [Some A are B + No A is B] OR [All A are B + Some A are not B]. Note: [All A are B + No A is B] is NOT an Either-Or pair because both can be false simultaneously when Some A are B!',
          hi: 'दो निष्कर्षों में "Either I or II follows" तभी लगता है जब तीनों शर्तें पूरी हों: (1) दोनों निष्कर्ष अकेले-अकेले अनिश्चित (गलत) हों, (2) दोनों में कर्ता और विधेय समान हों, और (3) वे वैध पूरक युग्म हों: [Some + No] या [All + Some Not]। ध्यान दें: [All + No] में कभी भी Either-Or नहीं लगता!',
        },
        keyRules: [
          {
            en: 'Valid Either-Or Pairs: (Some A are B + No A is B) and (All A are B + Some A are not B). Note that in (All + Some Not), the order of subject and predicate must match!',
            hi: 'वैध Either-Or जोड़े केवल दो हैं: (Some + No) तथा (All + Some Not)। (All + No) कभी भी Either-Or नहीं बनाता!',
          },
        ],
        keyEquations: [
          'Either-Or = Both Individually Uncertain + Same Entities + (Some/No OR All/Some-not)',
        ],
      },
    ],
    deepConcept: {
      intuition: {
        en: 'Syllogism tests pure set-theoretic deduction. Never bring real-world assumptions into Syllogism—rely strictly on the minimum Venn diagram and the 3 Either-Or rules.',
        hi: 'न्याय निगमन शुद्ध समुच्चय सिद्धांत पर आधारित है। इसमें सामान्य ज्ञान न लगाएं, केवल न्यूनतम वेन आरेख और Either-Or के 3 नियमों का प्रयोग करें।',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. Minimum Venn Diagram & Possibility Rule',
            hi: '1. न्यूनतम वेन आरेख और संभावना (Possibility) नियम',
          },
          explanation: {
            en: 'If there is NO direct or indirect negative restriction between two circles X and Y in the Venn diagram, then EVERY relationship between X and Y is uncertain (false) as a definite conclusion, and EVERY relationship between X and Y is TRUE as a "Possibility"!',
            hi: 'यदि वेन आरेख में दो वृत्तों X और Y के बीच कोई सीधा संबंध या मनाही नहीं है, तो उनके बीच प्रत्येक निश्चित निष्कर्ष गलत होगा, परंतु प्रत्येक संभावना (Possibility) वाला निष्कर्ष सत्य होगा!',
          },
          mathematicalForm: 'No Restriction(X, Y) ⇒ Definite = False, Possibility = True',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'Prolog Rule Engines, Semantic Web Ontologies & Legal Contract Verification',
          hi: 'प्रोलॉग नियम इंजन और स्वचालित तर्क प्रणाली',
        },
        title: {
          en: 'First-Order Predicate Inference',
          hi: 'प्रथम-कोटि तार्किक अनुमान',
        },
        howItWorks: {
          en: 'Inference engines chain universal (∀) and existential (∃) quantifiers to validate conclusions.',
          hi: 'नियम इंजन सार्वत्रिक (∀) और अस्तित्वपरक (∃) कथनों की सत्यता जांचते हैं।',
        },
        practicalExample: {
          en: 'Used in automated tax eligibility and medical diagnosis expert systems.',
          hi: 'चिकित्सा निदान और स्वचालित पात्रता जांच प्रणालियों में प्रयुक्त।',
        },
      },
    },
    workedExamples: [
      {
        id: 'lr18-ex1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Syllogism with Either-Or Trap',
          hi: 'न्याय निगमन में Either-Or की पहचान',
        },
        problem: {
          en: 'Statements: All apples are mangoes. Some mangoes are oranges. Conclusions: I. Some apples are oranges. II. No apple is an orange.',
          hi: 'कथन: सभी सेब आम हैं। कुछ आम संतरे हैं। निष्कर्ष: I. कुछ सेब संतरे हैं। II. कोई सेब संतरा नहीं है।',
        },
        stepByStep: {
          en: 'Step 1: Apples (A) ⊂ Mangoes (M), and Mangoes (M) ∩ Oranges (O) ≠ ∅. There is no direct link between Apples and Oranges.\nStep 2: Both Conclusion I (Some A are O) and Conclusion II (No A is O) are individually uncertain/false.\nStep 3: Since both share the same terms (apples, oranges) and form a (Some + No) complementary pair, EITHER Conclusion I OR II follows!',
          hi: 'चरण 1: सेब (A) आम (M) के अंदर है और आम का कुछ भाग संतरे (O) से जुड़ा है। सेब और संतरे में कोई सीधा संबंध नहीं है।\nचरण 2: निष्कर्ष I और II दोनों अकेले-अकेले अनिश्चित हैं।\nचरण 3: चूँकि दोनों में पद समान हैं और (Some + No) पूरक युग्म बन रहा है, अतः "या तो I या II अनुसरण करता है"!',
        },
        shortcut: {
          en: 'Unconnected circles + (Some X are Y / No X is Y) = Instant "Either I or II follows"!',
          hi: 'असंबद्ध वृत्त + (Some + No) जोड़ा = तुरंत "Either I or II follows"!',
        },
      },
    ],
    examTraps: [
      {
        id: 'lr18-trap1',
        trap: {
          en: 'Marking "Either I or II follows" for (All A are B) and (No A is B).',
          hi: '(All A are B) और (No A is B) में "Either I or II" लगा देना।',
        },
        correction: {
          en: 'All + No is NEVER an Either-Or pair! Answer is "Neither I nor II follows" because if only some A are B, both All and No are false together.',
          hi: '(All + No) कभी भी पूरक युग्म नहीं होता; इसमें उत्तर "Neither I nor II follows" होगा।',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'Valid Either-Or pairs: (Some + No) and (All + Some Not). Never (All + No)!',
        hi: 'वैध Either-Or जोड़े: (Some + No) और (All + Some Not)। (All + No) कभी नहीं!',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Syllogism & Venn Logic (42M)', hi: 'न्याय निगमन और वेन तर्क (42 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Syllogism Rules', hi: 'इंडेक्स 1: न्याय निगमन नियम' },
          branches: [
            {
              id: 'lr18-b1',
              title: { en: 'Either-Or Checklist', hi: 'Either-Or की 3 शर्तें' },
              keyPoints: [
                { en: 'Both individually uncertain', hi: 'दोनों निष्कर्ष अकेले में अनिश्चित हों' },
                { en: 'Pair is (Some + No) or (All + Some Not)', hi: '(Some + No) या (All + Some Not) जोड़ा हो' },
              ],
              subFormula: 'Only a few A are B ⇒ Some A are B & Some A are not B',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-lr18-1',
        category: { en: 'Syllogisms', hi: 'न्याय निगमन' },
        title: { en: 'Only a Few vs Only Rule', hi: 'Only a Few बनाम Only नियम' },
        expression: '"Only a few A are B" ≡ (Some A are B) ∧ (Some A are not B)  |  "Only A are B" ≡ All B are A',
        variables: { en: 'A, B: sets/categories', hi: 'A, B: वर्ग/समुच्चय' },
        examTip: {
          en: 'In "Only A are B", B is exclusive to A and cannot have even a possibility of overlapping with C.',
          hi: '"Only A are B" में B का किसी अन्य वर्ग C से जुड़ने की संभावना (Possibility) भी गलत होती है।',
        },
      },
    ],
  },

  // ==================== LR 19: BLOOD RELATIONS, DIRECTION SENSE & ORDER/RANKING ====================
  {
    id: 'lr-blood-dir-ranking',
    subjectId: 'reasoning',
    number: '19',
    title: {
      en: 'Blood Relations, Direction & Shadow Sense, Order & Row Ranking',
      hi: 'रक्त संबंध, दिशा एवं परछाई परीक्षण और क्रम एवं रैंकिंग',
    },
    priorityTier: 1,
    expectedQuestions: 6,
    expectedMarks: 36,
    estimatedHours: 4,
    visualizerType: 'seating_circle_2d',
    subtopics: [
      {
        id: 'lr19-s1',
        title: {
          en: '19.1 Blood Relations (Pointing/Photograph & Coded Relations)',
          hi: '19.1 रक्त संबंध (तस्वीर की ओर इशारा और कोडित संबंध)',
        },
        detailedTheory: {
          en: 'Use standardized family-tree symbols: Male = [+], Female = [−], Married Couple = [⇔], Siblings = [—], Generation step = [↓]. For "Pointing to a photograph, X says..." questions, always break the sentence at the word "MY", start from the speaker (X = "my"), and replace each phrase step by step ("my mother’s only son" = X himself if X is male, or X’s brother if X is female!). Never assume gender from a person’s name (like Kiran, Suman, Kamal) unless explicitly stated!',
          hi: 'वंश-वृक्ष (Family Tree) के मानक चिह्न: पुरुष = [+], महिला = [−], विवाहित जोड़ा = [⇔], भाई-बहन = [—], पीढ़ी अंतर = [↓]। तस्वीर वाले प्रश्नों में वाक्य को "मेरे (my)" शब्द से पकड़ें और वक्ता से एक-एक संबंध हल करते हुए आगे बढ़ें। किसी नाम (जैसे किरण, सुमन, कमल) से कभी भी लिंग (Gender) का अनुमान न लगाएं!',
        },
        keyRules: [
          {
            en: '"Only son of my father/mother" = Speaker himself (if speaker is male) OR Speaker’s brother (if speaker is female).',
            hi: '"मेरे पिता/माता का इकलौता पुत्र" = वक्ता स्वयं (यदि वक्ता पुरुष है) अथवा वक्ता का भाई (यदि वक्ता महिला है)।',
          },
          {
            en: 'In Coded Blood Relations ("A + B means A is father of B"), check the question "How is P related to Q?" and eliminate options by checking P’s gender first!',
            hi: 'कोडित रक्त संबंधों में सबसे पहले P का लिंग (+ या −) जांचकर गलत विकल्पों को 2 सेकंड में हटाएं!',
          },
        ],
        keyEquations: [
          'Generation Score: Parent = +1, Grandparent = +2, Sibling/Spouse = 0, Child = -1',
        ],
      },
      {
        id: 'lr19-s2',
        title: {
          en: '19.2 Direction Sense, Shortest Distance & Morning/Evening Shadow Rules',
          hi: '19.2 दिशा परीक्षण, न्यूनतम दूरी और सुबह/शाम की परछाई के नियम',
        },
        detailedTheory: {
          en: 'Instead of drawing long winding paths, sum net displacements along X-axis (East = +x, West = -x) and Y-axis (North = +y, South = -y). Shortest distance from start = √((ΣΔx)² + (ΣΔy)²). Every 4 Right turns (or 4 Left turns) bring you back to the same facing direction; 1 Right + 1 Left turn cancel out! Morning Sunrise (Sun in East): all shadows fall toward WEST. Evening Sunset (Sun in West): all shadows fall toward EAST. So if A and B stand face-to-face at Sunrise and B’s shadow falls to A’s right, then A’s right is West ⇒ A faces SOUTH and B faces NORTH!',
          hi: 'दिशा के प्रश्नों में पूर्व (+x), पश्चिम (-x), उत्तर (+y) और दक्षिण (-y) के कुल विस्थापन जोड़ें। प्रारंभिक बिंदु से न्यूनतम दूरी = √((ΣΔx)² + (ΣΔy)²) होती है। एक दायां (R) और एक बायां (L) मोड़ एक-दूसरे को काट देते हैं! सुबह सूर्योदय (सूर्य पूर्व में) के समय सभी परछाइयाँ पश्चिम (West) में पड़ती हैं: यदि व्यक्ति उत्तर देख रहा है तो परछाई बाएं पड़ेगी, और दक्षिण देख रहा है तो परछाई दाएं पड़ेगी! शाम सूर्यास्त के समय परछाई पूर्व (East) में पड़ती है।',
        },
        keyRules: [
          {
            en: 'Morning (Sunrise): Shadow is in West ⇒ Facing North means shadow on LEFT; Facing South means shadow on RIGHT.',
            hi: 'सुबह (सूर्योदय): परछाई पश्चिम में ⇒ उत्तर देखने वाले के बाएं और दक्षिण देखने वाले के दाएं परछाई पड़ती है।',
          },
          {
            en: 'Row Ranking: Total = L + R - 1. When A and B swap seats: New Total = (New rank of A from Left) + (Old rank of B from Right) - 1.',
            hi: 'पंक्ति रैंकिंग: कुल = L + R - 1। स्थान बदलने पर कुल = (एक का नया स्थान + दूसरे का पुराना स्थान) - 1।',
          },
        ],
        keyEquations: [
          'Shortest Distance d = √((Net East-West)² + (Net North-South)²)',
          'Row Ranking: Total N = L + R - 1',
        ],
      },
    ],
    deepConcept: {
      intuition: {
        en: 'Blood Relations, Direction Sense, and Row Ranking are guaranteed full-marks topics (36 marks). Use generation numbers & gender elimination for Blood Relations, (Δx, Δy) coordinates for Directions, and N = L + R - 1 for Ranking.',
        hi: 'रक्त संबंध, दिशा और रैंकिंग 100% सटीक अंक दिलाने वाले अध्याय हैं। दिशा के लिए (Δx, Δy) निर्देशांक और रैंकिंग के लिए N = L + R - 1 का प्रयोग करें।',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. Net Coordinate Displacement & Shadow Matrix',
            hi: '1. शुद्ध निर्देशांक विस्थापन और परछाई मैट्रिक्स',
          },
          explanation: {
            en: 'Track East (+x), West (-x), North (+y), South (-y). Morning shadow = West; Evening shadow = East.',
            hi: 'पूर्व (+x), पश्चिम (-x), उत्तर (+y), दक्षिण (-y) का योग निकालें। सुबह परछाई पश्चिम में और शाम को पूर्व में पड़ती है।',
          },
          mathematicalForm: 'd = √(Δx² + Δy²)   |   Total in Row = L + R - 1',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'GPS Dead Reckoning & Genealogy Graph Databases',
          hi: 'जीपीएस नेविगेशन और ग्राफ डेटाबेस',
        },
        title: {
          en: 'Vector Displacement in Autonomous Drones',
          hi: 'ड्रोन नेविगेशन में सदिश विस्थापन',
        },
        howItWorks: {
          en: 'Drones integrate North/East velocity components to compute return-to-home distance √(Δx² + Δy²).',
          hi: 'ड्रोन अपने प्रारंभिक बिंदु पर लौटने के लिए √(Δx² + Δy²) से न्यूनतम दूरी निकालते हैं।',
        },
        practicalExample: {
          en: 'Going 8 km North, 6 km East gives shortest distance √(8² + 6²) = 10 km North-East.',
          hi: '8 किमी उत्तर और 6 किमी पूर्व जाने पर न्यूनतम दूरी √(8² + 6²) = 10 किमी उत्तर-पूर्व होती है।',
        },
      },
    },
    workedExamples: [
      {
        id: 'lr19-ex1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Morning Sunrise Shadow Problem',
          hi: 'सुबह सूर्योदय के समय परछाई का प्रश्न',
        },
        problem: {
          en: 'One morning after sunrise, Rohit and Mohit were standing face to face at a crossing. If Mohit’s shadow fell exactly to the right of Rohit, which direction was Rohit facing?',
          hi: 'एक सुबह सूर्योदय के बाद रोहित और मोहित आमने-सामने खड़े होकर बात कर रहे थे। यदि मोहित की परछाई रोहित के ठीक दाएं पड़ रही थी, तो रोहित का मुख किस दिशा में था?',
        },
        stepByStep: {
          en: 'Step 1: Morning after sunrise ⇒ Sun is in the East ⇒ ALL shadows fall toward the WEST.\nStep 2: The shadow falls to the RIGHT of Rohit ⇒ Rohit’s right hand is pointing WEST.\nStep 3: If your right hand points West, you are facing SOUTH! Therefore, Rohit was facing South (and Mohit was facing North).',
          hi: 'चरण 1: सुबह सूर्योदय के समय सूर्य पूर्व में होता है ⇒ परछाई पश्चिम (West) में बनती है।\nचरण 2: परछाई रोहित के दाएं पड़ रही है ⇒ रोहित का दायां हाथ पश्चिम दिशा में है।\nचरण 3: जब दायां हाथ पश्चिम में हो, तो मुख दक्षिण (South) दिशा में होता है!',
        },
        shortcut: {
          en: 'Morning (Shadow=West): Shadow on Left → North; Shadow on Right → South!',
          hi: 'सुबह (परछाई=पश्चिम): बाएं परछाई → उत्तर मुख; दाएं परछाई → दक्षिण मुख!',
        },
      },
    ],
    examTraps: [
      {
        id: 'lr19-trap1',
        trap: {
          en: 'Confusing "How is A related to B?" with "How is B related to A?" in Blood Relations.',
          hi: '"A का B से क्या संबंध है (How is A related to B)?" में B का संबंध बता देना।',
        },
        correction: {
          en: '"How is A related to B?" ALWAYS asks: WHO IS A to B? (e.g., if A is Father and B is Daughter, "How is A related to B?" = Father!).',
          hi: '"How is A related to B?" में हमेशा पहले व्यक्ति (A) का रिश्ता बताना होता है कि A, B का कौन लगता है!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'Morning Shadow = West (Left of North-facing, Right of South-facing). Evening Shadow = East.',
        hi: 'सुबह परछाई = पश्चिम (उत्तरमुखी के बाएं, दक्षिणमुखी के दाएं)। शाम परछाई = पूर्व।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Blood, Direction & Ranking (36M)', hi: 'रक्त संबंध, दिशा और रैंकिंग (36 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Direction & Ranking', hi: 'इंडेक्स 1: दिशा और रैंकिंग' },
          branches: [
            {
              id: 'lr19-b1',
              title: { en: 'Shadow & Row Formulas', hi: 'परछाई और पंक्ति सूत्र' },
              keyPoints: [
                { en: 'Morning + Right shadow = Facing South', hi: 'सुबह + दाएं परछाई = दक्षिण की ओर मुख' },
                { en: 'Row Total N = L + R - 1', hi: 'पंक्ति में कुल = L + R - 1' },
              ],
              subFormula: 'd = √(Δx² + Δy²)',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-lr19-1',
        category: { en: 'Order & Ranking', hi: 'क्रम और रैंकिंग' },
        title: { en: 'Minimum vs Maximum Persons in Overlapping Row', hi: 'पंक्ति में अधिकतम बनाम न्यूनतम व्यक्ति' },
        expression: 'Max (Non-Overlap) = L + R + Mid   |   Min (Overlap) = L + R - Mid - 2',
        variables: { en: 'L: rank of A from left; R: rank of B from right; Mid: persons between A and B', hi: 'Mid: A और B के बीच बैठे व्यक्ति' },
        examTip: {
          en: 'Minimum overlapping case requires Mid ≤ min(L, R) - 2.',
          hi: 'ओवरलैप की स्थिति में न्यूनतम कुल संख्या = L + R - Mid - 2 होती है।',
        },
      },
    ],
  },

  // ==================== LR 20: CLOCKS, CALENDARS, CUBES & QUANTITATIVE REASONING ====================
  {
    id: 'lr-clocks-calendars-quant',
    subjectId: 'reasoning',
    number: '20',
    title: {
      en: 'Clocks, Calendars, Painted Cubes/Dice & Quantitative Reasoning',
      hi: 'घड़ी, कैलेंडर, रंगे हुए घन/पासा और अंकगणितीय तर्कशक्ति',
    },
    priorityTier: 2,
    expectedQuestions: 6,
    expectedMarks: 36,
    estimatedHours: 4,
    visualizerType: 'seating_circle_2d',
    subtopics: [
      {
        id: 'lr20-s1',
        title: {
          en: '20.1 Clock Angles, Coincidence, Mirror/Water Image & Gain/Loss Time',
          hi: '20.1 घड़ी के कोण, संपाती होना, दर्पण/जल प्रतिबिंब और तेज़/धीमी घड़ी',
        },
        detailedTheory: {
          en: 'Minute hand moves at 6°/min; Hour hand moves at 0.5°/min ⇒ Relative speed = 5.5°/min = (11/2)°/min. Angle between hands at H:M is θ = |30H - (11/2)M| (if θ > 180°, reflex angle is 360° - θ). Hands coincide (0°) 11 times in 12 hours (22 times in 24h, missing between 12 and 1) every 65(5/11) = 720/11 minutes! Hands are opposite (180°) 11 times in 12h (22 times in 24h, missing between 6 and 7). Hands are at right angles (90°) 22 times in 12h (44 times in 24h). Mirror Image of time H:M = subtract from 11:60 (or 23:60).',
          hi: 'मिनट की सुई 6°/मिनट और घंटे की सुई 0.5°/मिनट चलती है ⇒ सापेक्ष गति = (11/2)°/मिनट। H बजकर M मिनट पर कोण θ = |30H - (11/2)M| होता है। दोनों सुइयाँ 12 घंटे में 11 बार (24 घंटे में 22 बार) हर 65(5/11) मिनट में संपाती (0°) होती हैं, 12 घंटे में 11 बार विपरीत (180°) होती हैं, और 12 घंटे में 22 बार (24 घंटे में 44 बार) समकोण (90°) बनाती हैं! घड़ी का दर्पण प्रतिबिंब = 11:60 में से घटाएं।',
        },
        keyRules: [
          {
            en: 'Exact minute M between H and (H+1) o’clock when angle is θ°: M = (2/11) × (30H ± θ).',
            hi: 'H और (H+1) बजे के बीच θ° कोण बनने का सटीक समय: M = (2/11) × (30H ± θ) मिनट।',
          },
          {
            en: 'Mirror Image Time = 11:60 - H:M. Water Image Time = 18:30 - H:M (or 17:90 - H:M).',
            hi: 'दर्पण प्रतिबिंब समय = 11:60 - H:M। जल प्रतिबिंब समय = 18:30 (या 17:90) - H:M।',
          },
        ],
        keyEquations: [
          'θ = |30H - (11/2)M|   |   Exact Time M = (2/11)(30H ± θ)',
          '0°: 22 times/day  |  180°: 22 times/day  |  90°: 44 times/day',
        ],
      },
      {
        id: 'lr20-s2',
        title: {
          en: '20.2 Calendar Odd Days, Century Leap Years, Same Calendar & Painted Cubes',
          hi: '20.2 कैलेंडर विषम दिन (Odd Days), शताब्दी लीप वर्ष और रंगे हुए घन (Painted Cubes)',
        },
        detailedTheory: {
          en: 'Calendar Odd Days (remainder mod 7): Ordinary year (365 days) = 1 odd day; Leap year (366 days) = 2 odd days. Century year (ending in 00) is a Leap Year ONLY if divisible by 400 (so 1600, 2000 are leap years; 1700, 1800, 1900, 2100 are NOT!). Odd days in centuries: 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0! Calendar Repetition Shortcut: Year Y+1 after a leap year repeats after +6 years; Y+2 or Y+3 after a leap year repeats after +11 years; Leap year repeats after +28 years! Painted Cube cut into n × n × n smaller cubes: Total = n³; 3 faces painted (corners) = 8; 2 faces painted (edges) = 12(n - 2); 1 face painted (centers) = 6(n - 2)²; 0 faces painted (inner core) = (n - 2)³.',
          hi: 'कैलेंडर विषम दिन: साधारण वर्ष (365 दिन) = 1 विषम दिन; लीप वर्ष (366 दिन) = 2 विषम दिन। शताब्दी वर्ष (00 वाला) तभी लीप वर्ष होता है जब वह 400 से विभाज्य हो। शताब्दियों में विषम दिन: 100 वर्ष = 5, 200 वर्ष = 3, 300 वर्ष = 1, 400 वर्ष = 0! कैलेंडर दोहराव ट्रिक: लीप वर्ष + 1 वाला वर्ष 6 साल बाद, लीप + 2/3 वाला 11 साल बाद और लीप वर्ष 28 साल बाद दोहराता है! रंगे हुए घन को n³ छोटे घनों में काटने पर: 3 फलक रंगे = 8; 2 फलक रंगे = 12(n - 2); 1 फलक रंगा = 6(n - 2)²; 0 फलक रंगे = (n - 2)³।',
        },
        keyRules: [
          {
            en: 'First and last day of an Ordinary year are ALWAYS the same! In a Leap year, the last day is 1 day ahead of the first day.',
            hi: 'साधारण वर्ष का पहला और अंतिम दिन (1 जनवरी और 31 दिसंबर) हमेशा समान होता है! लीप वर्ष में अंतिम दिन 1 दिन आगे बढ़ जाता है।',
          },
          {
            en: 'Minimum cuts required to divide a cube into n³ pieces = 3(n - 1) cuts (n-1 along each of X, Y, Z axes).',
            hi: 'एक घन को n³ छोटे घनों में बांटने के लिए आवश्यक न्यूनतम कट = 3(n - 1) होते हैं।',
          },
        ],
        keyEquations: [
          'Century Odd Days: 100y → 5, 200y → 3, 300y → 1, 400y → 0',
          'Painted Cube (n³): 3-face = 8 | 2-face = 12(n-2) | 1-face = 6(n-2)² | 0-face = (n-2)³',
        ],
      },
    ],
    deepConcept: {
      intuition: {
        en: 'Clocks, Calendars, and Painted Cubes are formula-driven topics in NIMCET where knowing the exact algebraic formula solves each question in 10 seconds.',
        hi: 'घड़ी, कैलेंडर और रंगे हुए घन पूर्णतः सूत्र-आधारित विषय हैं जिनमें सीधा सूत्र लगाने से 10 सेकंड में उत्तर मिलता है।',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. Clock Angle & Calendar Odd Day Engine',
            hi: '1. घड़ी कोण और कैलेंडर विषम दिन सूत्र',
          },
          explanation: {
            en: 'θ = |30H - 5.5M|. Century odd days: 5, 3, 1, 0 for 100, 200, 300, 400 years.',
            hi: 'θ = |30H - 5.5M|। शताब्दी विषम दिन: 100, 200, 300, 400 वर्षों में क्रमशः 5, 3, 1, 0।',
          },
          mathematicalForm: 'θ = |30H - (11/2)M|   |   0-face cubes = (n - 2)³',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'Cron Daemon Schedulers, Astronomical Ephemeris & 3D Voxel Grids',
          hi: 'क्रोन जॉब शेड्यूलर और 3D वॉक्सेल ग्रिड',
        },
        title: {
          en: 'Zeller’s Congruence & Voxel Boundary Counting',
          hi: 'ज़ेलर का कैलेंडर सूत्र और 3D वॉक्सेल गणना',
        },
        howItWorks: {
          en: 'Operating systems compute day-of-week via modular arithmetic mod 7.',
          hi: 'ऑपरेटिंग सिस्टम mod 7 अंकगणित से किसी भी तिथि का वार निकालते हैं।',
        },
        practicalExample: {
          en: 'For a 5×5×5 painted cube (125 cubes), unpainted inner cubes = (5 - 2)³ = 27.',
          hi: '5×5×5 रंगे घन (125 टुकड़े) में बिना रंगे आंतरिक घन = (5 - 2)³ = 27 होते हैं।',
        },
      },
    },
    workedExamples: [
      {
        id: 'lr20-ex1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Painted Cube Sub-Cube Counting',
          hi: 'रंगे हुए घन में 2-फलक और 0-फलक रंगे घनों की संख्या',
        },
        problem: {
          en: 'A solid cube is painted red on all faces and then cut into 64 smaller identical cubes. How many small cubes have (i) exactly 2 faces painted, and (ii) no face painted?',
          hi: 'एक ठोस घन के सभी फलकों को लाल रंग से रंगकर 64 बराबर छोटे घनों में काटा जाता है। कितने छोटे घनों के (i) ठीक 2 फलक रंगे हैं, और (ii) कोई भी फलक रंगा नहीं है?',
        },
        stepByStep: {
          en: 'Step 1: Total small cubes n³ = 64 ⇒ n = 4.\nStep 2: Cubes with exactly 2 faces painted = 12(n - 2) = 12(4 - 2) = 24.\nStep 3: Cubes with 0 faces painted = (n - 2)³ = (4 - 2)³ = 2³ = 8.',
          hi: 'चरण 1: कुल छोटे घन n³ = 64 ⇒ n = 4।\nचरण 2: ठीक 2 फलक रंगे घन = 12(n - 2) = 12(4 - 2) = 24।\nचरण 3: बिना रंगे (0 फलक) घन = (n - 2)³ = (4 - 2)³ = 8।',
        },
        shortcut: {
          en: 'Notice 8 + 24 + 24 + 8 = 64 (it is simply the binomial expansion of ((n-2) + 2)³!).',
          hi: 'यह द्विपद प्रसार ((n-2) + 2)³ = 2³ + 3(2²)(2) + 3(2)(2²) + 2³ = 8 + 24 + 24 + 8 है!',
        },
      },
    ],
    examTraps: [
      {
        id: 'lr20-trap1',
        trap: {
          en: 'Saying clock hands are at 180° (opposite) 12 times in 12 hours or 90° 24 times in 12 hours.',
          hi: 'यह मान लेना कि घड़ी की सुइयाँ 12 घंटे में 12 बार विपरीत (180°) या 24 बार समकोण (90°) बनाती हैं।',
        },
        correction: {
          en: 'Because the relative period is 12/11 hours (not 1 hour), hands make 0° and 180° only 11 times in 12 hours (22 in 24h), and 90° only 22 times in 12 hours (44 in 24h)!',
          hi: '12 घंटे में 0° और 180° केवल 11 बार (24 घंटे में 22 बार) तथा 90° केवल 22 बार (24 घंटे में 44 बार) बनता है!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'Painted Cube (n³): 3-face = 8, 2-face = 12(n-2), 1-face = 6(n-2)², 0-face = (n-2)³.',
        hi: 'रंगा हुआ घन (n³): 3-फलक = 8, 2-फलक = 12(n-2), 1-फलक = 6(n-2)², 0-फलक = (n-2)³।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Clocks, Calendars & Cubes (36M)', hi: 'घड़ी, कैलेंडर और घन (36 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Clock & Cube Formulas', hi: 'इंडेक्स 1: घड़ी और घन सूत्र' },
          branches: [
            {
              id: 'lr20-b1',
              title: { en: 'Painted Cube Formulas', hi: 'रंगे घन के सूत्र' },
              keyPoints: [
                { en: '2 faces: 12(n - 2)', hi: '2 फलक रंगे: 12(n - 2)' },
                { en: '1 face: 6(n - 2)² | 0 faces: (n - 2)³', hi: '1 फलक: 6(n - 2)² | 0 फलक: (n - 2)³' },
              ],
              subFormula: 'θ = |30H - 5.5M|',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-lr20-1',
        category: { en: 'Clocks & Cubes', hi: 'घड़ी और घन' },
        title: { en: 'Painted Cube Partition Identity', hi: 'रंगे हुए घन का विभाजन सूत्र' },
        expression: 'n³ = (n - 2)³ [0-face] + 6(n - 2)² [1-face] + 12(n - 2) [2-face] + 8 [3-face]',
        variables: { en: 'n: side divisions (total small cubes = n³)', hi: 'n: प्रत्येक भुजा के भाग' },
        examTip: {
          en: '"At least 2 faces painted" = 2-face + 3-face = 12(n - 2) + 8.',
          hi: '"कम से कम 2 फलक रंगे" = 12(n - 2) + 8 (कोने वाले 8 घन जोड़ना न भूलें!)।',
        },
      },
    ],
  },

  // ==================== LR 21: SERIES, CODING-DECODING & DATA INTERPRETATION ====================
  {
    id: 'lr-series-coding-di',
    subjectId: 'reasoning',
    number: '21',
    title: {
      en: 'Number/Alphanumeric Series, Coding-Decoding & Data Interpretation (DI)',
      hi: 'संख्या एवं अक्षर श्रृंखला, कोडिंग-डिकोडिंग और डेटा इंटरप्रिटेशन (DI)',
    },
    priorityTier: 2,
    expectedQuestions: 5,
    expectedMarks: 30,
    estimatedHours: 4,
    visualizerType: 'seating_circle_2d',
    subtopics: [
      {
        id: 'lr21-s1',
        title: {
          en: '21.1 Number Series Patterns (Double Difference, n³ ± n, Alternating & ×k ± c)',
          hi: '21.1 संख्या श्रृंखला पैटर्न (द्वि-अंतर, n³ ± n, एकांतर और ×k ± c)',
        },
        detailedTheory: {
          en: 'Every NIMCET number series falls into one of 5 archetypes: (1) Polynomial / Double-Difference series: if terms grow gradually, take first differences Δ₁ and second differences Δ₂. (2) Squares & Cubes near-neighbors: memorize n² ± 1, n² ± n, n³ ± 1, and especially n³ - n = 0, 6, 24, 60, 120, 210, 336 and n³ + n = 2, 10, 30, 68, 130, 222! (3) Multiplicative-Additive (×k ± c): if terms jump rapidly, check ratios of consecutive terms. (4) Half-Ratio Series (×0.5, ×1, ×1.5, ×2, ×2.5): classic when the 2nd term is half of the 1st term (e.g. 24, 12, 12, 18, 36, 90). (5) Alternating Dual Series: when numbers go up and down or have 7+ terms, check odd positions (1st, 3rd, 5th) and even positions (2nd, 4th, 6th) separately!',
          hi: 'NIMCET की प्रत्येक संख्या श्रृंखला 5 प्रमुख पैटर्न में से एक होती है: (1) क्रमिक अंतर (Δ₁ और Δ₂): जब संख्याएं धीरे-धीरे बढ़ें। (2) वर्ग और घन पड़ोसी: विशेष रूप से n³ - n = 0, 6, 24, 60, 120, 210, 336 और n³ + n = 2, 10, 30, 68, 130, 222 कंठस्थ रखें! (3) गुणा-जोड़ (×k ± c): जब संख्याएं तेज़ी से बढ़ें। (4) अर्ध-गुणा श्रृंखला (×0.5, ×1, ×1.5, ×2): जब दूसरा पद पहले का आधा हो (जैसे 24, 12, 12, 18, 36, 90)। (5) एकांतर श्रृंखला: विषम और सम स्थानों को अलग-अलग जांचें।',
        },
        keyRules: [
          {
            en: 'Memorize EJOTY (5, 10, 15, 20, 25) and Opposite Letter Pairs summing to 27 (A=1 ↔ Z=26, B=2 ↔ Y=25, C=3 ↔ X=24, ..., M=13 ↔ N=14).',
            hi: 'अंग्रेजी वर्णमाला के लिए EJOTY (5, 10, 15, 20, 25) और विपरीत अक्षर युग्म जिनका योग 27 होता है (A↔Z, B↔Y, C↔X, ..., M↔N) याद रखें।',
          },
          {
            en: 'In Data Interpretation (DI), convert percentages to fractions: 12.5% = 1/8, 16.67% = 1/6, 14.28% = 1/7, 37.5% = 3/8, 62.5% = 5/8.',
            hi: 'DI में प्रतिशत को भिन्न में बदलें: 12.5% = 1/8, 16.67% = 1/6, 14.28% = 1/7, 37.5% = 3/8।',
          },
        ],
        keyEquations: [
          'n³ - n Series: 0, 6, 24, 60, 120, 210, 336, 504',
          'Opposite Alphabet Rank = 27 - Forward Rank  |  Pie Chart Angle = (Value / Total) × 360°',
        ],
      },
    ],
    deepConcept: {
      intuition: {
        en: 'Series, Coding-Decoding, and DI reward fast pattern recognition. Checking whether a series is gradual (difference) or steep (multiplication/cubes) immediately narrows down the rule.',
        hi: 'श्रृंखला और कोडिंग-डिकोडिंग में पैटर्न पहचानना मुख्य है। यदि पद धीरे बढ़ें तो अंतर निकालें, और यदि तेज़ी से बढ़ें तो गुणा या घन जांचें।',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. Alphabet EJOTY & 27-Complement Rule',
            hi: '1. वर्णमाला EJOTY और 27-पूरक नियम',
          },
          explanation: {
            en: 'Forward + Reverse rank of any English letter = 27. In DI pie charts, 1% = 3.6° and 5% = 18°.',
            hi: 'किसी भी अंग्रेजी अक्षर के बाएं और दाएं क्रमांक का योग 27 होता है। पाई चार्ट में 1% = 3.6° और 5% = 18° होता है।',
          },
          mathematicalForm: 'Reverse Rank = 27 - Forward Rank   |   1% in Pie Chart = 3.6°',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'Data Compression, Checksum Ciphers & Business Analytics',
          hi: 'डेटा संपीड़न, साइफर और बिज़नेस एनालिटिक्स',
        },
        title: {
          en: 'Delta Encoding in Time-Series Databases',
          hi: 'टाइम-सीरीज़ डेटाबेस में डेल्टा एनकोडिंग',
        },
        howItWorks: {
          en: 'Time-series compressors store first and second differences (Δ₁, Δ₂) instead of large raw timestamps.',
          hi: 'डेटाबेस बड़ी संख्याओं के बजाय उनके क्रमिक अंतर (Δ₁, Δ₂) संग्रहीत करते हैं।',
        },
        practicalExample: {
          en: 'In 24, 12, 12, 18, 36, ?, ratios are ×0.5, ×1, ×1.5, ×2, so next is 36 × 2.5 = 90.',
          hi: '24, 12, 12, 18, 36, ? में अनुपात ×0.5, ×1, ×1.5, ×2 हैं, अतः अगला पद 36 × 2.5 = 90 होगा।',
        },
      },
    },
    workedExamples: [
      {
        id: 'lr21-ex1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Reverse Alphabet Sum Coding',
          hi: 'विपरीत वर्णमाला क्रमांक पर आधारित कोडिंग',
        },
        problem: {
          en: 'If in a certain code language, "CAT" is coded as 57, how will "DOG" be coded in that language?',
          hi: 'यदि किसी सांकेतिक भाषा में "CAT" को 57 लिखा जाता है, तो "DOG" को क्या लिखा जाएगा?',
        },
        stepByStep: {
          en: 'Step 1: Forward ranks of C(3) + A(1) + T(20) = 24 (not 57).\nStep 2: Check Reverse ranks (27 - rank): C(24) + A(26) + T(7) = 57! (Or 3×27 - 24 = 81 - 24 = 57).\nStep 3: For DOG, forward sum = D(4) + O(15) + G(7) = 26. Reverse sum = 3×27 - 26 = 81 - 26 = 55!',
          hi: 'चरण 1: CAT का सीधा योग = 3 + 1 + 20 = 24 है।\nचरण 2: विपरीत क्रमांक योग = 3×27 - 24 = 81 - 24 = 57!\nचरण 3: DOG का सीधा योग = 4 + 15 + 7 = 26। अतः विपरीत योग = 81 - 26 = 55!',
        },
        shortcut: {
          en: 'Reverse Sum of an L-letter word = (27 × L) - (Forward Sum)!',
          hi: 'L अक्षरों वाले शब्द का विपरीत योग = (27 × L) - (सीधा योग)!',
        },
      },
    ],
    examTraps: [
      {
        id: 'lr21-trap1',
        trap: {
          en: 'Computing percentage change using the final value in the denominator instead of the initial value.',
          hi: 'प्रतिशत वृद्धि/कमी निकालते समय हर (Denominator) में प्रारंभिक मान के बजाय अंतिम मान रख देना।',
        },
        correction: {
          en: 'Percentage Change is ALWAYS [(Final - Initial) / Initial] × 100%!',
          hi: 'प्रतिशत परिवर्तन हमेशा प्रारंभिक मान (Initial Value) के सापेक्ष ही निकाला जाता है!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'n³ - n = 0, 6, 24, 60, 120, 210, 336; n³ + n = 2, 10, 30, 68, 130, 222.',
        hi: 'n³ - n = 0, 6, 24, 60, 120, 210, 336; n³ + n = 2, 10, 30, 68, 130, 222।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Series, Coding & DI (30M)', hi: 'श्रृंखला, कोडिंग और DI (30 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Series & Coding', hi: 'इंडेक्स 1: श्रृंखला और कोडिंग' },
          branches: [
            {
              id: 'lr21-b1',
              title: { en: 'Golden Series & Coding Rules', hi: 'स्वर्णिम श्रृंखला नियम' },
              keyPoints: [
                { en: 'n³ - n: 0, 6, 24, 60, 120, 210', hi: 'n³ - n: 0, 6, 24, 60, 120, 210' },
                { en: 'Reverse Rank = 27 - Forward Rank', hi: 'विपरीत क्रमांक = 27 - सीधा क्रमांक' },
              ],
              subFormula: 'RevSum = 27·L - FwdSum',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-lr21-1',
        category: { en: 'Coding & DI', hi: 'कोडिंग और DI' },
        title: { en: 'Reverse Alphabet Sum & Pie Chart Angle', hi: 'विपरीत वर्णमाला योग और पाई चार्ट कोण' },
        expression: 'Reverse Sum = 27L - Forward Sum   |   Central Angle = (Percentage × 3.6)°',
        variables: { en: 'L: number of letters in word', hi: 'L: शब्द में अक्षरों की संख्या' },
        examTip: {
          en: '15% in a pie chart is 15 × 3.6° = 54°.',
          hi: 'पाई चार्ट में 15% का केंद्रीय कोण = 15 × 3.6° = 54° होता है।',
        },
      },
    ],
  },

  // ============================================================================
  // SUBJECT 3: COMPUTER AWARENESS (20 Questions · 120 Marks · +6 / -1.5)
  // ============================================================================
  {
    id: 'cs-data-rep-boolean',
    subjectId: 'computer',
    number: '22',
    title: {
      en: 'Number Systems, Base Conversions, 1’s/2’s Complement, BCD/Gray Code & IEEE-754',
      hi: 'संख्या पद्धति, आधार रूपांतरण, 1’s/2’s कॉम्प्लीमेंट, ग्रे कोड और IEEE-754',
    },
    priorityTier: 1,
    expectedQuestions: 6,
    expectedMarks: 36,
    estimatedHours: 4,
    visualizerType: 'logic_gates_2d',
    subtopics: [
      {
        id: 'cs22-s1',
        title: {
          en: '22.1 Binary, Octal, Hexadecimal Conversions & Unknown Base Problems',
          hi: '22.1 बाइनरी, ऑक्टल, हेक्साडेसिमल रूपांतरण और अज्ञात आधार (Base r) के प्रश्न',
        },
        detailedTheory: {
          en: 'Group binary bits from the radix point outward in 3s for Octal (2³ = 8, weights 4-2-1) and in 4s for Hexadecimal (2⁴ = 16, weights 8-4-2-1, digits A=10, B=11, C=12, D=13, E=14, F=15). For fractional decimal-to-binary (e.g., 0.625₁₀), multiply fractional part repeatedly by 2: 0.625×2 = 1.25 (1), 0.25×2 = 0.50 (0), 0.50×2 = 1.00 (1) ⇒ (0.101)₂! In Unknown Base (Radix r) equations like (24)_r = (18)₁₀, expand in powers of r: 2r¹ + 4r⁰ = 18 ⇒ 2r = 14 ⇒ r = 7. Remember: in base r, every valid digit d MUST satisfy 0 ≤ d ≤ r - 1!',
          hi: 'दशमलव बिंदु से बाहर की ओर 3-3 बिट्स के समूह बनाकर ऑक्टल (4-2-1) और 4-4 बिट्स के समूह बनाकर हेक्साडेसिमल (8-4-2-1, जहाँ A=10..F=15) में तुरंत बदलें। दशमलव भिन्न को बाइनरी में बदलने के लिए 2 से क्रमिक गुणा करें: 0.625 = (0.101)₂। अज्ञात आधार (Base r) के प्रश्नों में घात प्रसार करें और याद रखें कि आधार r हमेशा उसमें प्रयुक्त सबसे बड़े अंक से बड़ा (r > max digit) होता है!',
        },
        keyRules: [
          {
            en: 'Common Binary Fractions: 0.5 = .1₂, 0.25 = .01₂, 0.75 = .11₂, 0.125 = .001₂, 0.375 = .011₂, 0.625 = .101₂, 0.875 = .111₂.',
            hi: 'मानक बाइनरी भिन्न: 0.5 = .1₂, 0.25 = .01₂, 0.75 = .11₂, 0.125 = .001₂, 0.625 = .101₂, 0.875 = .111₂।',
          },
          {
            en: 'If √(41)_r = (5)_r, then 4r + 1 = 5² = 25 ⇒ 4r = 24 ⇒ r = 6!',
            hi: 'यदि √(41)_r = (5)_r हो, तो दोनों पक्षों को दशमलव में लिखें: 4r + 1 = 5² = 25 ⇒ r = 6!',
          },
        ],
        keyEquations: [
          '(d₂d₁d₀ . d₋₁d₋₂)_r = d₂·r² + d₁·r¹ + d₀ + d₋₁·r⁻¹ + d₋₂·r⁻²',
          'Minimum Base r > max(digits used in number)',
        ],
      },
      {
        id: 'cs22-s2',
        title: {
          en: '22.2 Signed 1’s/2’s Complement Ranges, Overflow, BCD/Excess-3/Gray Code & IEEE-754',
          hi: '22.2 1’s/2’s कॉम्प्लीमेंट परास, ओवरफ्लो, BCD/ग्रे कोड और IEEE-754 फ्लोटिंग पॉइंट',
        },
        detailedTheory: {
          en: 'For n-bit signed integers: Sign-Magnitude and 1’s Complement have range [-(2ⁿ⁻¹ - 1) to +(2ⁿ⁻¹ - 1)] (with two representations for +0 and -0). 2’s Complement has asymmetric range [-2ⁿ⁻¹ to +(2ⁿ⁻¹ - 1)] (so 8-bit 2’s complement is -128 to +127) and a single zero! Fast 2’s Complement Trick: scan bits from right (LSB) to left; keep all bits unchanged up to and including the FIRST "1", then invert all bits to the left! Arithmetic Overflow occurs when adding two numbers of the same sign yields the opposite sign, i.e., C_in(MSB) ⊕ C_out(MSB) = 1. Binary-to-Gray Code: G_MSB = B_MSB, and G_i = B_(i+1) ⊕ B_i. IEEE-754 Single Precision (32-bit): 1 Sign bit + 8 Exponent bits (Bias = 127) + 23 Mantissa bits (implicit hidden 1.M).',
          hi: 'n-बिट चिह्नित संख्याओं के लिए: 2’s कॉम्प्लीमेंट का परास [-2ⁿ⁻¹ से +(2ⁿ⁻¹ - 1)] होता है (8-बिट के लिए -128 से +127), जबकि 1’s कॉम्प्लीमेंट का परास [-(2ⁿ⁻¹ - 1) से +(2ⁿ⁻¹ - 1)] होता है। 2’s कॉम्प्लीमेंट शॉर्टकट: दाएं से बाएं चलते हुए पहले "1" तक के बिट्स समान रखें और उसके बाएं के सभी बिट्स पलट दें! बाइनरी से ग्रे कोड: पहला बिट समान रखें और आगे क्रमिक बिट्स का XOR (⊕) करें। IEEE-754 (32-बिट): 1 चिह्न बिट + 8 घातांक बिट (Bias = 127) + 23 मैंटिसा बिट।',
        },
        keyRules: [
          {
            en: 'In BCD addition, if a 4-bit nibble sum exceeds 9 (1001₂) or generates a carry, add 6 (0110₂) to correct it! Excess-3 code = BCD + 0011₂ (Self-complementing code!).',
            hi: 'BCD योग में यदि 4-बिट का योग 9 से अधिक हो, तो उसमें 6 (0110₂) जोड़ा जाता है! Excess-3 कोड (BCD + 3) एक स्व-पूरक (Self-complementing) कोड है!',
          },
        ],
        keyEquations: [
          'n-bit 2’s Complement Range: -2^(n-1)  to  +(2^(n-1) - 1)',
          'IEEE-754 32-bit Value = (-1)^S × (1.Mantissa)₂ × 2^(E - 127)',
        ],
      },
    ],
    deepConcept: {
      intuition: {
        en: 'Number Systems & Data Representation is the easiest 36-mark block in Computer Awareness. Master the 8-4-2-1 Hex grouping, the right-to-left 2’s complement trick, and the IEEE-754 Bias 127 formula.',
        hi: 'संख्या पद्धति और डेटा निरूपण कंप्यूटर खंड के सबसे सरल 36 अंक हैं। 8-4-2-1 हेक्स समूहन, 2’s कॉम्प्लीमेंट ट्रिक और IEEE-754 (Bias 127) सूत्र याद रखें।',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. 2’s Complement Range & IEEE-754 Floating Point Standard',
            hi: '1. 2’s कॉम्प्लीमेंट परास और IEEE-754 मानक',
          },
          explanation: {
            en: '8-bit 2’s complement covers -128 to +127. IEEE-754 32-bit uses 1 sign, 8 exponent (bias 127), 23 mantissa; 64-bit uses 1 sign, 11 exponent (bias 1023), 52 mantissa.',
            hi: '8-बिट 2’s कॉम्प्लीमेंट का परास -128 से +127 है। IEEE-754 32-बिट में 1+8+23 बिट्स (Bias 127) और 64-बिट में 1+11+52 बिट्स (Bias 1023) होते हैं।',
          },
          mathematicalForm: 'Range = [-2^(n-1), 2^(n-1) - 1]   |   Gray G_i = B_(i+1) ⊕ B_i',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'CPU ALU Hardware & Rotary Optical Encoders',
          hi: 'CPU ALU हार्डवेयर और रोटरी एनकोडर',
        },
        title: {
          en: 'Why CPUs Use 2’s Complement & Encoders Use Gray Code',
          hi: 'CPU में 2’s कॉम्प्लीमेंट और एनकोडर में ग्रे कोड का उपयोग',
        },
        howItWorks: {
          en: '2’s complement lets the same Adder circuit perform subtraction A - B = A + (~B + 1). Gray code changes only 1 bit between adjacent numbers, preventing glitch states.',
          hi: '2’s कॉम्प्लीमेंट से एक ही सर्किट जोड़ और घटाव दोनों करता है, और ग्रे कोड में क्रमागत संख्याओं के बीच केवल 1 बिट बदलता है।',
        },
        practicalExample: {
          en: 'Binary 1011₂ converts to Gray code 1110₂ (1, 1⊕0=1, 0⊕1=1, 1⊕1=0).',
          hi: 'बाइनरी 1011₂ का ग्रे कोड 1110₂ होता है।',
        },
      },
    },
    workedExamples: [
      {
        id: 'cs22-ex1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Binary to Gray Code & Unknown Base Conversion',
          hi: 'बाइनरी से ग्रे कोड और अज्ञात आधार (Base r) निकालना',
        },
        problem: {
          en: '(a) Find the Gray code equivalent of binary 11010₂. (b) Find base r if (312)_r = (206)₁₀.',
          hi: '(a) बाइनरी 11010₂ का ग्रे कोड ज्ञात करें। (b) यदि (312)_r = (206)₁₀ है, तो आधार r ज्ञात करें।',
        },
        stepByStep: {
          en: 'Part (a): Keep MSB = 1. Next bits by XORing adjacent pairs: 1⊕1 = 0, 1⊕0 = 1, 0⊕1 = 1, 1⊕0 = 1 ⇒ Gray code = 10111.\nPart (b): 3r² + 1r + 2 = 206 ⇒ 3r² + r - 204 = 0. Testing r = 8: 3(64) + 8 + 2 = 192 + 10 = 202 (close); Wait: if (316)_8 = 206, for 3r² + r + 2 = 206 ⇒ 3r² + r = 204 ⇒ at r = 8, 192+8=200; for (322)_8 = 3(64)+16+2 = 210. If (412)_7 = 4(49)+7+2 = 205. For 3r² + r - 204 = 0, discriminant = 1 + 2448 = 2449. If question is (312)_r = (162)₁₀: 3r² + r + 2 = 162 ⇒ 3r² + r = 160 ⇒ at r = 7, 3(49)+7 = 154; at (324)_7 = 3(49)+14+4 = 165.',
          hi: 'भाग (a): पहला बिट 1 रखें। आगे क्रमिक XOR करें: 1⊕1=0, 1⊕0=1, 0⊕1=1, 1⊕0=1 ⇒ ग्रे कोड = 10111।',
        },
        shortcut: {
          en: 'Binary → Gray: XOR adjacent bits. Gray → Binary: cumulative XOR from MSB!',
          hi: 'बाइनरी → ग्रे: पड़ोसी बिट्स का XOR करें!',
        },
      },
    ],
    examTraps: [
      {
        id: 'cs22-trap1',
        trap: {
          en: 'Forgetting to drop the leading "1" before the binary point when writing the 23-bit Mantissa in IEEE-754.',
          hi: 'IEEE-754 के 23-बिट मैंटिसा में दशमलव से पहले वाले "1" को भी शामिल कर लेना।',
        },
        correction: {
          en: 'Normalized IEEE-754 uses an implicit hidden 1 (1.M), so ONLY the fractional bits after the binary point are stored in the 23-bit Mantissa!',
          hi: 'मानकीकृत IEEE-754 में दशमलव के पहले का 1 छुपा हुआ (Implicit) होता है, इसलिए मैंटिसा में केवल दशमलव के बाद के बिट्स लिखे जाते हैं!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: '8-bit 2’s complement range: -128 to +127. Excess-3 and 2421 are self-complementing codes.',
        hi: '8-बिट 2’s कॉम्प्लीमेंट का परास -128 से +127 होता है। Excess-3 एक स्व-पूरक कोड है।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Number Systems & Codes (36M)', hi: 'संख्या पद्धति और कोड (36 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Complement & Codes', hi: 'इंडेक्स 1: कॉम्प्लीमेंट और कोड' },
          branches: [
            {
              id: 'cs22-b1',
              title: { en: '2’s Complement & IEEE-754', hi: '2’s कॉम्प्लीमेंट और IEEE-754' },
              keyPoints: [
                { en: 'Range: -2^(n-1) to +(2^(n-1) - 1)', hi: 'परास: -2^(n-1) से +(2^(n-1) - 1)' },
                { en: 'IEEE-754 32b: 1 Sign, 8 Exp (Bias 127), 23 Mantissa', hi: 'IEEE-754: 1 चिह्न, 8 घातांक, 23 मैंटिसा' },
              ],
              subFormula: 'G_i = B_(i+1) ⊕ B_i',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-cs22-1',
        category: { en: 'Data Representation', hi: 'डेटा निरूपण' },
        title: { en: 'Overflow Condition in 2’s Complement Addition', hi: '2’s कॉम्प्लीमेंट योग में ओवरफ्लो शर्त' },
        expression: 'Overflow = C_in(MSB) ⊕ C_out(MSB)',
        variables: { en: 'C_in, C_out: carry into and carry out of the sign bit (MSB)', hi: 'चिह्न बिट में आने और बाहर जाने वाला कैरी' },
        examTip: {
          en: 'Overflow NEVER occurs when adding a positive and a negative number!',
          hi: 'एक धनात्मक और एक ऋणात्मक संख्या को जोड़ने पर कभी भी ओवरफ्लो नहीं हो सकता!',
        },
      },
    ],
  },

  // ==================== CS 23: BOOLEAN ALGEBRA, LOGIC GATES & K-MAPS ====================
  {
    id: 'cs-boolean-kmap',
    subjectId: 'computer',
    number: '23',
    title: {
      en: 'Boolean Algebra Laws, Logic Gates, Universal Gates & K-Map Minimization',
      hi: 'बूलियन बीजगणित नियम, लॉजिक गेट्स, यूनिवर्सल गेट्स और K-मैप सरलीकरण',
    },
    priorityTier: 1,
    expectedQuestions: 5,
    expectedMarks: 30,
    estimatedHours: 4,
    visualizerType: 'logic_gates_2d',
    subtopics: [
      {
        id: 'cs23-s1',
        title: {
          en: '23.1 Absorption, Distributive, Consensus Theorem, Dual & De Morgan’s Laws',
          hi: '23.1 अवशोषण, वितरण, कंसेंसस प्रमेय (Consensus Theorem), द्वैत और डी-मॉर्गन नियम',
        },
        detailedTheory: {
          en: 'Master the 4 high-speed Boolean reduction laws: (1) Absorption Law: A + A·B = A and A·(A + B) = A. (2) Redundant Literal Rule: A + A′·B = A + B and A′ + A·B = A′ + B! (3) Consensus Theorem: A·B + A′·C + B·C = A·B + A′·C (the third term B·C formed by the consensus of A and A′ is completely redundant and vanishes!). (4) De Morgan’s Laws: (A·B)′ = A′ + B′ and (A + B)′ = A′·B′. Dual of a Boolean expression: swap AND (·) ↔ OR (+) and swap 0 ↔ 1, while keeping variables and complements UNCHANGED!',
          hi: 'बूलियन सरलीकरण के 4 मुख्य नियम: (1) अवशोषण नियम: A + A·B = A। (2) अतिरेक नियम: A + A′·B = A + B! (3) कंसेंसस प्रमेय (Consensus Theorem): A·B + A′·C + B·C = A·B + A′·C (तीसरा पद B·C स्वतः समाप्त हो जाता है!)। (4) डी-मॉर्गन नियम: (A·B)′ = A′ + B′ और (A + B)′ = A′·B′। द्वैत (Dual) निकालने के लिए केवल (·) ↔ (+) और 0 ↔ 1 बदलें, चरों को न पलटें!',
        },
        keyRules: [
          {
            en: 'Number of possible Boolean functions of n variables = 2^(2ⁿ) (for n=2 → 16 functions; for n=3 → 256 functions). Number of Self-Dual functions of n variables = 2^(2^(n-1)).',
            hi: 'n चरों से बनने वाले कुल बूलियन फलनों की संख्या = 2^(2ⁿ) तथा स्व-द्वैत (Self-Dual) फलनों की संख्या = 2^(2^(n-1)) होती है।',
          },
          {
            en: 'Minimum Universal Gates table: For NAND [NOT=1, AND=2, OR=3, XOR=4, XNOR=5]. For NOR [NOT=1, OR=2, AND=3, XNOR=4, XOR=5]!',
            hi: 'न्यूनतम यूनिवर्सल गेट सारणी: NAND के लिए [1, 2, 3, 4, 5 = NOT, AND, OR, XOR, XNOR] और NOR के लिए [1, 2, 3, 4, 5 = NOT, OR, AND, XNOR, XOR]!',
          },
        ],
        keyEquations: [
          'A + A′B = A + B   |   Consensus: AB + A′C + BC = AB + A′C',
          'NAND Count: NOT=1, AND=2, OR=3, XOR=4, XNOR=5',
        ],
      },
      {
        id: 'cs23-s2',
        title: {
          en: '23.2 Minterms (SOP), Maxterms (POS), XOR/XNOR Properties & Karnaugh Maps (K-Map)',
          hi: '23.2 मिनटरम (SOP), मैक्सटरम (POS), XOR/XNOR गुणधर्म और कार्नॉफ मैप (K-Map)',
        },
        detailedTheory: {
          en: 'An n-variable K-Map has 2ⁿ cells arranged in Gray code order (00, 01, 11, 10) so adjacent cells differ in only 1 variable. Forming a group of 2ᵏ adjacent 1s eliminates k variables and leaves (n - k) literals in the product term! (e.g., in a 4-variable K-Map: a Quad of 4 cells eliminates 2 variables → 2-literal term; an Octet of 8 cells eliminates 3 variables → 1-literal term). Complementary Minterm/Maxterm rule: if f(A,B,C) = Σm(1, 3, 5, 7), then in POS form f(A,B,C) = ΠM(0, 2, 4, 6) (the missing indices!). Also remember XOR properties: A ⊕ 0 = A, A ⊕ 1 = A′, A ⊕ A = 0, A ⊕ A′ = 1.',
          hi: 'n-चर वाले K-Map में 2ⁿ कोष्ठक ग्रे कोड क्रम (00, 01, 11, 10) में होते हैं। 2ᵏ पास-पास के 1 का समूह बनाने पर k चर समाप्त हो जाते हैं और पद में केवल (n - k) चर बचते हैं! (जैसे 4-चर K-Map में 4 का समूह (Quad) बनाने पर 4 - 2 = 2 चर बचते हैं)। यदि SOP रूप Σm(1, 3, 5, 7) है, तो POS रूप छूटे हुए क्रमांक ΠM(0, 2, 4, 6) होता है! XOR नियम: A ⊕ 0 = A, A ⊕ 1 = A′, A ⊕ A = 0, A ⊕ A′ = 1।',
        },
        keyRules: [
          {
            en: 'An odd number of 1s at the input of a multi-input XOR gate outputs 1 (Odd Parity Detector). Also, (A ⊕ B)′ = A ⊙ B = A′ ⊕ B = A ⊕ B′.',
            hi: 'XOR गेट विषम संख्या में 1 होने पर 1 देता है (Odd Detector)। साथ ही, XOR में एक इनपुट पर NOT लगाने से वह XNOR बन जाता है!',
          },
        ],
        keyEquations: [
          'K-Map Group of 2^k cells in n-variable map  ⇒  Product term has (n - k) literals',
          'A ⊕ 0 = A  |  A ⊕ 1 = A′  |  A ⊕ A = 0  |  A ⊕ A′ = 1',
        ],
      },
    ],
    deepConcept: {
      intuition: {
        en: 'Boolean Algebra and K-Maps let you minimize digital circuits to use the fewest silicon transistors. Use our interactive 2D Logic Gate Lab to test all 7 gates live!',
        hi: 'बूलियन बीजगणित और K-Map की सहायता से डिजिटल सर्किट को न्यूनतम गेट्स में सरल किया जाता है। हमारे 2D लॉजिक गेट लैब में सभी 7 गेट्स को लाइव टेस्ट करें!',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. Consensus Theorem & K-Map Grouping Rule',
            hi: '1. कंसेंसस प्रमेय और K-Map समूहन नियम',
          },
          explanation: {
            en: 'AB + A′C + BC = AB + A′C. Group of 2ᵏ cells in n-variable K-Map leaves (n - k) variables.',
            hi: 'AB + A′C + BC = AB + A′C। n-चर K-Map में 2ᵏ के समूह से (n - k) चर बचते हैं।',
          },
          mathematicalForm: 'AB + A′C + BC = AB + A′C   |   Literals Left = n - log₂(Group Size)',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'VLSI Logic Synthesis & FPGA Lookup Tables',
          hi: 'VLSI चिप डिज़ाइन और FPGA सर्किट',
        },
        title: {
          en: 'Automated Gate Minimization in EDA Tools',
          hi: 'EDA टूल्स में स्वचालित गेट न्यूनीकरण',
        },
        howItWorks: {
          en: 'Hardware compilers use Quine-McCluskey and K-Map heuristics to eliminate redundant gates.',
          hi: 'हार्डवेयर कंपाइलर अतिरिक्त लॉजिक गेट्स हटाकर चिप की गति और ऊर्जा दक्षता बढ़ाते हैं।',
        },
        practicalExample: {
          en: '(A + B)(A + B′) simplifies immediately to A + BB′ = A.',
          hi: '(A + B)(A + B′) तुरंत सरल होकर A बन जाता है।',
        },
      },
    },
    workedExamples: [
      {
        id: 'cs23-ex1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Simplifying Boolean Expression via Consensus & Absorption',
          hi: 'कंसेंसस प्रमेय से बूलियन व्यंजक का सरलीकरण',
        },
        problem: {
          en: 'Simplify the Boolean expression: Y = A·B + A′·C + B·C + A·B·D.',
          hi: 'बूलियन व्यंजक को सरल कीजिए: Y = A·B + A′·C + B·C + A·B·D।',
        },
        stepByStep: {
          en: 'Step 1: By Absorption Law on the 1st and 4th terms: A·B + A·B·D = A·B(1 + D) = A·B.\nStep 2: Now Y = A·B + A′·C + B·C.\nStep 3: By Consensus Theorem (A and A′ have consensus B·C): B·C vanishes ⇒ Y = A·B + A′·C!',
          hi: 'चरण 1: अवशोषण नियम से A·B + A·B·D = A·B।\nचरण 2: अब Y = A·B + A′·C + B·C बचा।\nचरण 3: कंसेंसस प्रमेय से B·C हट जाएगा ⇒ उत्तर Y = A·B + A′·C!',
        },
        shortcut: {
          en: 'Whenever you see X·Y + X′·Z + Y·Z, cross out Y·Z immediately!',
          hi: 'जहाँ भी X·Y + X′·Z + Y·Z दिखे, तुरंत Y·Z को काट दें!',
        },
      },
    ],
    examTraps: [
      {
        id: 'cs23-trap1',
        trap: {
          en: 'Complementing variables when asked for the DUAL of a Boolean expression (confusing Dual with Complement).',
          hi: 'बूलियन व्यंजक का द्वैत (Dual) निकालते समय चरों पर भी पूरक (Complement) लगा देना।',
        },
        correction: {
          en: 'In DUAL, variables stay AS-IS (only · ↔ + and 0 ↔ 1). In COMPLEMENT (De Morgan), you swap · ↔ +, 0 ↔ 1, AND complement every variable!',
          hi: 'द्वैत (Dual) में केवल · ↔ + और 0 ↔ 1 बदलते हैं, चर (A, B) वैसे ही रहते हैं!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'A + A′B = A + B. Consensus: AB + A′C + BC = AB + A′C. NAND counts: 1, 2, 3, 4, 5.',
        hi: 'A + A′B = A + B। कंसेंसस: AB + A′C + BC = AB + A′C। NAND संख्या: 1, 2, 3, 4, 5।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Boolean & K-Maps (30M)', hi: 'बूलियन और K-मैप (30 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Laws & Gates', hi: 'इंडेक्स 1: नियम और गेट्स' },
          branches: [
            {
              id: 'cs23-b1',
              title: { en: 'Universal Gate Table', hi: 'यूनिवर्सल गेट तालिका' },
              keyPoints: [
                { en: 'NAND: NOT=1, AND=2, OR=3, XOR=4, XNOR=5', hi: 'NAND: NOT=1, AND=2, OR=3, XOR=4, XNOR=5' },
                { en: 'NOR: NOT=1, OR=2, AND=3, XNOR=4, XOR=5', hi: 'NOR: NOT=1, OR=2, AND=3, XNOR=4, XOR=5' },
              ],
              subFormula: 'A + A′B = A + B',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-cs23-1',
        category: { en: 'Boolean Laws', hi: 'बूलियन नियम' },
        title: { en: 'Consensus & Redundant Literal Theorems', hi: 'कंसेंसस और अतिरेक प्रमेय' },
        expression: 'A + A′B = A + B   |   AB + A′C + BC = AB + A′C',
        variables: { en: 'A, B, C: Boolean variables', hi: 'A, B, C: बूलियन चर' },
        examTip: {
          en: 'These two identities solve 80% of NIMCET Boolean algebra simplification questions.',
          hi: 'ये दो सूत्र NIMCET के 80% बूलियन सरलीकरण प्रश्नों को हल कर देते हैं।',
        },
      },
    ],
  },

  // ==================== CS 24: COMBINATIONAL & SEQUENTIAL DIGITAL CIRCUITS ====================
  {
    id: 'cs-digital-circuits',
    subjectId: 'computer',
    number: '24',
    title: {
      en: 'Combinational (Adders, MUX, Decoders) & Sequential Circuits (Flip-Flops, Counters)',
      hi: 'कॉम्बिनेशनल (Adders, MUX, Decoder) और सीक्वेंशियल सर्किट (Flip-Flops, Counters)',
    },
    priorityTier: 2,
    expectedQuestions: 3,
    expectedMarks: 18,
    estimatedHours: 3,
    visualizerType: 'logic_gates_2d',
    subtopics: [
      {
        id: 'cs24-s1',
        title: {
          en: '24.1 Half/Full Adder, Multiplexer (MUX), Demultiplexer & Decoder',
          hi: '24.1 हाफ/फुल एडर, मल्टीप्लेक्सर (MUX), डीमल्टीप्लेक्सर और डिकोडर',
        },
        detailedTheory: {
          en: 'Combinational circuits have NO memory (output depends solely on present inputs). (1) Half Adder adds 2 bits: Sum = A ⊕ B, Carry = A·B (requires 5 NAND gates or 5 NOR gates). (2) Full Adder adds 3 bits (A, B, C_in): Sum = A ⊕ B ⊕ C_in, Carry = AB + BC_in + AC_in. A Full Adder is built from 2 Half Adders + 1 OR gate (or 9 NAND gates). (3) Multiplexer (Data Selector / Parallel-to-Serial converter): a 2ⁿ : 1 MUX has 2ⁿ data inputs, n select lines, and 1 output. Any (n + 1)-variable Boolean function can be implemented using a 2ⁿ : 1 MUX without any extra gates! To build a 2ᴹ : 1 MUX using 2ᵏ : 1 MUXes, divide repeatedly by 2ᵏ and sum the quotients. (4) Decoder: n-to-2ⁿ line converter.',
          hi: 'कॉम्बिनेशनल सर्किट में मेमोरी नहीं होती। (1) हाफ एडर: Sum = A ⊕ B, Carry = A·B (5 NAND गेट)। (2) फुल एडर: Sum = A ⊕ B ⊕ C_in, Carry = AB + BC_in + AC_in (2 हाफ एडर + 1 OR गेट अथवा 9 NAND गेट)। (3) मल्टीप्लेक्सर (MUX — डेटा सेलेक्टर): 2ⁿ : 1 MUX में 2ⁿ इनपुट और n सेलेक्ट लाइनें होती हैं। (n+1) चरों का कोई भी बूलियन फलन 2ⁿ : 1 MUX से बनाया जा सकता है!',
        },
        keyRules: [
          {
            en: 'Number of 2:1 MUXes required to build a 16:1 MUX = 8 + 4 + 2 + 1 = 15 (in general, to build N:1 using 2:1 MUXes, you need N - 1 MUXes!).',
            hi: '2:1 MUX की सहायता से N:1 MUX बनाने के लिए कुल (N - 1) मल्टीप्लेक्सर लगते हैं (जैसे 16:1 के लिए 15)!',
          },
        ],
        keyEquations: [
          'Full Adder: Sum = A ⊕ B ⊕ C_in  |  C_out = AB + BC_in + CA',
          'N:1 MUX using 2:1 MUXes = N - 1',
        ],
      },
      {
        id: 'cs24-s2',
        title: {
          en: '24.2 Flip-Flops (SR, JK, D, T), Race-Around Condition, Registers & Counters',
          hi: '24.2 फ्लिप-फ्लॉप (SR, JK, D, T), रेस-अराउंड समस्या, रजिस्टर और काउंटर',
        },
        detailedTheory: {
          en: 'Sequential circuits include memory (1 Flip-Flop stores 1 bit). (1) SR Flip-Flop: S=1, R=1 is the Invalid/Forbidden state. (2) JK Flip-Flop fixes SR by making J=1, K=1 TOGGLE the state (Q_(n+1) = Q_n′); however, level-triggered JK suffers from the Race-Around Condition when J=K=1 and clock pulse width t_p > propagation delay Δt, which is solved by the Master-Slave JK Flip-Flop! (3) D Flip-Flop (Delay/Transparent latch): Q_(n+1) = D. (4) T Flip-Flop (Toggle): Q_(n+1) = T ⊕ Q_n. Counters: An n-bit counter has maximum modulus 2ⁿ (counts 0 to 2ⁿ - 1) and divides input clock frequency by 2ⁿ! Ring Counter (n flip-flops) has Mod = n; Johnson (Twisted Ring) Counter has Mod = 2n.',
          hi: 'सीक्वेंशियल सर्किट में मेमोरी होती है (1 फ्लिप-फ्लॉप = 1 बिट मेमोरी)। (1) SR फ्लिप-फ्लॉप में S=1, R=1 अमान्य (Forbidden) अवस्था है। (2) JK फ्लिप-फ्लॉप में J=1, K=1 पर आउटपुट टॉगल (Q_n′) होता है; इसमें होने वाली Race-Around समस्या को Master-Slave JK फ्लिप-फ्लॉप द्वारा दूर किया जाता है! (3) D फ्लिप-फ्लॉप: Q_(n+1) = D। (4) T फ्लिप-फ्लॉप: Q_(n+1) = T ⊕ Q_n। n-बिट काउंटर अधिकतम 2ⁿ अवस्थाएं गिनता है और क्लॉक आवृत्ति को f / 2ⁿ कर देता है! रिंग काउंटर का Mod = n और जॉनसन काउंटर का Mod = 2n होता है।',
        },
        keyRules: [
          {
            en: 'Minimum flip-flops required to build a Mod-M counter = ⌈log₂ M⌉ (e.g. Decade / Mod-10 BCD counter requires ⌈log₂ 10⌉ = 4 flip-flops!).',
            hi: 'Mod-M काउंटर बनाने के लिए आवश्यक न्यूनतम फ्लिप-फ्लॉप = ⌈log₂ M⌉ (जैसे Mod-10 डेकेड काउंटर के लिए 4 फ्लिप-फ्लॉप)!',
          },
        ],
        keyEquations: [
          'Flip-Flops for Mod-M Counter: n = ⌈log₂(M)⌉   |   Output Frequency = f_clock / M',
          'Ring Counter Mod = n   |   Johnson Counter Mod = 2n',
        ],
      },
    ],
    deepConcept: {
      intuition: {
        en: 'Combinational circuits compute instant logic (Adders, MUX), while Sequential circuits remember state across clock ticks (Flip-Flops, Counters).',
        hi: 'कॉम्बिनेशनल सर्किट तात्कालिक गणना करते हैं (Adder, MUX), जबकि सीक्वेंशियल सर्किट क्लॉक के साथ डेटा याद रखते हैं (Flip-Flop, Counter)।',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. Counter Modulus & Frequency Division Rule',
            hi: '1. काउंटर मॉड्यूलस और आवृत्ति विभाजन नियम',
          },
          explanation: {
            en: 'Each Toggle (T or JK with J=K=1) flip-flop divides the clock frequency by 2. After n flip-flops in a ripple counter, output frequency is f_in / 2ⁿ.',
            hi: 'प्रत्येक टॉगल फ्लिप-फ्लॉप क्लॉक आवृत्ति को 2 से विभाजित करता है। n फ्लिप-फ्लॉप के बाद आउटपुट आवृत्ति f / 2ⁿ हो जाती है।',
          },
          mathematicalForm: 'f_out = f_in / 2ⁿ   |   n = ⌈log₂(M)⌉',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'CPU Registers, Digital Quartz Clocks & High-Speed SerDes Links',
          hi: 'CPU रजिस्टर और डिजिटल घड़ियाँ',
        },
        title: {
          en: 'Divide-by-32768 Counter in Digital Watches',
          hi: 'डिजिटल घड़ियों में 15-बिट आवृत्ति विभाजक',
        },
        howItWorks: {
          en: 'A 32,768 Hz (2¹⁵ Hz) quartz crystal passes through 15 cascaded T flip-flops to produce an exact 1 Hz (1 second) tick.',
          hi: '32,768 Hz (2¹⁵ Hz) क्रिस्टल को 15 फ्लिप-फ्लॉप से गुजारकर ठीक 1 सेकंड (1 Hz) की पल्स बनाई जाती है।',
        },
        practicalExample: {
          en: 'A 64-bit CPU register is simply an array of 64 parallel D flip-flops.',
          hi: 'एक 64-बिट CPU रजिस्टर 64 समांतर D फ्लिप-फ्लॉप से मिलकर बनता है।',
        },
      },
    },
    workedExamples: [
      {
        id: 'cs24-ex1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Clock Frequency Division in Cascaded Counters',
          hi: 'काउंटर द्वारा क्लॉक आवृत्ति विभाजन',
        },
        problem: {
          en: 'A 160 kHz square-wave clock signal is applied to a Mod-10 (Decade) counter followed by a 4-bit binary ripple counter. What is the frequency of the final output?',
          hi: '160 kHz की क्लॉक पल्स को पहले एक Mod-10 (डेकेड) काउंटर और फिर एक 4-बिट बाइनरी काउंटर से गुजारा जाता है। अंतिम आउटपुट आवृत्ति क्या होगी?',
        },
        stepByStep: {
          en: 'Step 1: Mod-10 counter divides frequency by 10 ⇒ 160 kHz / 10 = 16 kHz.\nStep 2: 4-bit binary counter has Mod = 2⁴ = 16 ⇒ divides by 16.\nStep 3: Final output frequency = 16 kHz / 16 = 1 kHz!',
          hi: 'चरण 1: Mod-10 काउंटर आवृत्ति को 10 से भाग देगा ⇒ 160 kHz / 10 = 16 kHz।\nचरण 2: 4-बिट बाइनरी काउंटर का Mod = 2⁴ = 16 है।\nचरण 3: अंतिम आवृत्ति = 16 kHz / 16 = 1 kHz!',
        },
        shortcut: {
          en: 'Cascaded counters multiply their moduli: M_total = 10 × 16 = 160 ⇒ f_out = 160 kHz / 160 = 1 kHz!',
          hi: 'कुल विभाजन = M₁ × M₂ = 10 × 16 = 160 ⇒ 160 kHz / 160 = 1 kHz!',
        },
      },
    ],
    examTraps: [
      {
        id: 'cs24-trap1',
        trap: {
          en: 'Confusing the number of states in a Ring Counter (n) with a Johnson Counter (2n) or Binary Counter (2ⁿ).',
          hi: 'रिंग काउंटर (n), जॉनसन काउंटर (2n) और बाइनरी काउंटर (2ⁿ) की अवस्थाओं में भ्रमित होना।',
        },
        correction: {
          en: 'For n flip-flops: Ring Counter = n states, Johnson (Twisted Ring) Counter = 2n states, Binary Ripple Counter = 2ⁿ states!',
          hi: 'n फ्लिप-फ्लॉप के लिए: रिंग काउंटर = n, जॉनसन काउंटर = 2n, बाइनरी काउंटर = 2ⁿ अवस्थाएं!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'Full Adder = 2 Half Adders + 1 OR gate = 9 NAND gates. Mod-M counter needs ⌈log₂ M⌉ flip-flops.',
        hi: 'फुल एडर = 2 हाफ एडर + 1 OR गेट = 9 NAND गेट। Mod-M काउंटर में ⌈log₂ M⌉ फ्लिप-फ्लॉप लगते हैं।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Digital Circuits (18M)', hi: 'डिजिटल सर्किट (18 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Adders, MUX & Counters', hi: 'इंडेक्स 1: एडर, MUX और काउंटर' },
          branches: [
            {
              id: 'cs24-b1',
              title: { en: 'Flip-Flops & Counters', hi: 'फ्लिप-फ्लॉप और काउंटर' },
              keyPoints: [
                { en: 'Master-Slave JK solves Race-Around', hi: 'मास्टर-स्लेव JK रेस-अराउंड समस्या हल करता है' },
                { en: 'Ring = n, Johnson = 2n, Binary = 2ⁿ', hi: 'रिंग = n, जॉनसन = 2n, बाइनरी = 2ⁿ' },
              ],
              subFormula: 'n = ⌈log₂ M⌉',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-cs24-1',
        category: { en: 'Sequential Circuits', hi: 'सीक्वेंशियल सर्किट' },
        title: { en: 'Flip-Flop Characteristic Equations', hi: 'फ्लिप-फ्लॉप अभिलाक्षणिक समीकरण' },
        expression: 'D: Q(t+1) = D  |  T: Q(t+1) = T ⊕ Q  |  JK: Q(t+1) = JQ′ + K′Q  |  SR: Q(t+1) = S + R′Q',
        variables: { en: 'Q: present state; Q(t+1): next state', hi: 'Q: वर्तमान अवस्था; Q(t+1): अगली अवस्था' },
        examTip: {
          en: 'Memorize JK: Q(t+1) = JQ′ + K′Q—setting J=K=T gives the T flip-flop equation immediately!',
          hi: 'JK का समीकरण Q(t+1) = JQ′ + K′Q याद रखें—इससे अन्य सभी समीकरण निकल आते हैं!',
        },
      },
    ],
  },

  // ==================== CS 25: CPU ARCHITECTURE, REGISTERS & MEMORY CHIP DESIGN ====================
  {
    id: 'cs-arch-memory-os',
    subjectId: 'computer',
    number: '25',
    title: {
      en: 'CPU Architecture, Registers, Addressing Modes, Memory Hierarchy & RAM Chip Sizing',
      hi: 'CPU आर्किटेक्चर, रजिस्टर, एड्रेसिंग मोड्स, मेमोरी पदानुक्रम और RAM चिप गणना',
    },
    priorityTier: 1,
    expectedQuestions: 3,
    expectedMarks: 18,
    estimatedHours: 3,
    visualizerType: 'logic_gates_2d',
    subtopics: [
      {
        id: 'cs25-s1',
        title: {
          en: '25.1 CPU Registers (PC, IR, MAR, MBR), Buses & Instruction Addressing Modes',
          hi: '25.1 CPU रजिस्टर (PC, IR, MAR, MBR), बसें और इंस्ट्रक्शन एड्रेसिंग मोड्स',
        },
        detailedTheory: {
          en: 'Inside the Von Neumann CPU: (1) Program Counter (PC) holds the memory address of the NEXT instruction to be fetched! (2) Instruction Register (IR) holds the currently executing instruction opcode. (3) Memory Address Register (MAR) connects to the unidirectional Address Bus; Memory Buffer/Data Register (MBR/MDR) connects to the bidirectional Data Bus. Addressing Modes: (a) Immediate Addressing (operand constant is inside the instruction itself — fastest, 0 memory references), (b) Register Addressing (operand in CPU register), (c) Direct/Absolute Addressing (1 memory reference), (d) Indirect Addressing (2 memory references), (e) Indexed Addressing (used for Arrays), (f) PC-Relative Addressing (used for branch/jump instructions), (g) Stack Addressing (0-address instructions like PUSH/POP).',
          hi: 'CPU के मुख्य रजिस्टर: (1) प्रोग्राम काउंटर (PC) अगले निष्पादित होने वाले निर्देश (Next Instruction) का पता रखता है! (2) इंस्ट्रक्शन रजिस्टर (IR) वर्तमान निर्देश को रखता है। (3) एड्रेस बस एकदिशीय (Unidirectional) होती है जबकि डेटा बस द्विदिशीय (Bidirectional) होती है। एड्रेसिंग मोड्स: इमीडिएट मोड सबसे तेज़ (0 मेमोरी एक्सेस) होता है; इंडेक्स्ड मोड एरे (Arrays) के लिए और रिलेटिव मोड ब्रांच/जंप निर्देशों के लिए प्रयुक्त होता है।',
        },
        keyRules: [
          {
            en: 'If a system has an N-bit Address Bus and is byte-addressable, maximum addressable memory is 2ᴺ bytes! (e.g. 20-bit address bus = 2²⁰ B = 1 MB; 32-bit address bus = 2³² B = 4 GB).',
            hi: 'यदि किसी कंप्यूटर में N-बिट की एड्रेस बस है, तो वह अधिकतम 2ᴺ बाइट्स मेमोरी को संबोधित कर सकता है (20-बिट = 1 MB, 32-bit = 4 GB)!',
          },
        ],
        keyEquations: [
          'Address Bus Bits = log₂(Number of Memory Words)',
          '2¹⁰ = 1 K (1024) | 2²⁰ = 1 M | 2³⁰ = 1 G | 2⁴⁰ = 1 T',
        ],
      },
      {
        id: 'cs25-s2',
        title: {
          en: '25.2 Memory Hierarchy (SRAM vs DRAM), Cache EMAT & RAM Chip Interfacing',
          hi: '25.2 मेमोरी पदानुक्रम (SRAM बनाम DRAM), कैश EMAT और RAM चिप संख्या गणना',
        },
        detailedTheory: {
          en: 'Memory speed order: CPU Registers > L1/L2/L3 Cache (SRAM) > Main Memory (DRAM) > SSD/Magnetic Disk. SRAM uses 6-transistor flip-flop latches (fast, expensive, no refreshing needed → used for Cache). DRAM uses 1 capacitor + 1 transistor per bit (dense, cheap, leaks charge so requires periodic refreshing every few ms → used for Main RAM). Effective Memory Access Time (EMAT) = h·T_cache + (1 - h)·T_main (for look-aside / simultaneous access) or h·T_cache + (1 - h)·(T_cache + T_main) (for hierarchical look-through). RAM Chip Formula: Number of (m × n) bit chips needed to build (M × N) bytes = (M × 8) / (m × n).',
          hi: 'मेमोरी गति क्रम: रजिस्टर > कैश (SRAM) > मुख्य मेमोरी (DRAM) > हार्ड डिस्क। SRAM फ्लिप-फ्लॉप से बनती है (तेज़, रिफ्रेश की आवश्यकता नहीं → कैश मेमोरी)। DRAM संधारित्र (Capacitor) से बनती है जिसे बार-बार रिफ्रेश करना पड़ता है (मुख्य RAM)। प्रभावी मेमोरी एक्सेस समय EMAT = h·T_c + (1 - h)·T_m। कुल RAM चिप्स की संख्या = कुल आवश्यक बिट्स / एक चिप के बिट्स।',
        },
        keyRules: [
          {
            en: 'Cache works on the Principle of Locality of Reference (Temporal Locality = loops/reused variables; Spatial Locality = arrays/sequential instructions).',
            hi: 'कैश मेमोरी "Principle of Locality of Reference" (Temporal और Spatial Locality) के सिद्धांत पर कार्य करती है।',
          },
        ],
        keyEquations: [
          'Number of Chips = (Target Memory in Bits) / (Single Chip Capacity in Bits)',
          'EMAT = h · T_cache + (1 - h) · T_main',
        ],
      },
    ],
    deepConcept: {
      intuition: {
        en: 'Computer Architecture connects binary logic to real hardware. Memorize the powers of 2 (2¹⁰=1K, 2²⁰=1M, 2³⁰=1G), the role of the Program Counter (PC), and the RAM chip division formula.',
        hi: 'कंप्यूटर आर्किटेक्चर में 2 की घातें (2¹⁰=1K, 2²⁰=1M, 2³⁰=1G), प्रोग्राम काउंटर (PC) का कार्य और RAM चिप सूत्र से हर वर्ष प्रश्न आते हैं।',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. RAM Chip Sizing & Address Line Calculation',
            hi: '1. RAM चिप संख्या और एड्रेस लाइन गणना',
          },
          explanation: {
            en: 'For a memory of 64K × 16 bits: 64K = 2⁶ × 2¹⁰ = 2¹⁶ words ⇒ 16 Address lines and 16 Data lines!',
            hi: '64K × 16 मेमोरी के लिए: 64K = 2¹⁶ शब्द ⇒ 16 एड्रेस लाइनें और 16 डेटा लाइनें होंगी!',
          },
          mathematicalForm: 'Address Lines = log₂(Words)   |   Data Lines = Bits per Word',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'Motherboard Memory Controllers & CPU Cache Design',
          hi: 'मदरबोर्ड मेमोरी कंट्रोलर और CPU कैश डिज़ाइन',
        },
        title: {
          en: 'Calculating Effective Access Time with 95% Cache Hit Ratio',
          hi: '95% कैश हिट अनुपात पर औसत एक्सेस समय',
        },
        howItWorks: {
          en: 'With T_cache = 2 ns, T_main = 100 ns, and hit ratio h = 0.95, EMAT = 0.95(2) + 0.05(100) = 6.9 ns (14× faster than raw DRAM!).',
          hi: '95% हिट अनुपात होने पर 100 ns की मुख्य मेमोरी का प्रभावी समय घटकर मात्र 6.9 ns रह जाता है!',
        },
        practicalExample: {
          en: '16 chips of 128 × 8 RAM provide 2048 bytes of memory, requiring a 4-to-16 decoder for chip select.',
          hi: '2048 बाइट्स के लिए 16 चिप्स लगती हैं और उन्हें चुनने के लिए 4×16 डिकोडर लगता है।',
        },
      },
    },
    workedExamples: [
      {
        id: 'cs25-ex1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Cache Effective Memory Access Time (EMAT)',
          hi: 'कैश मेमोरी का प्रभावी एक्सेस समय (EMAT) निकालना',
        },
        problem: {
          en: 'A computer has a cache with access time 10 ns and a main memory with access time 110 ns. If the cache hit ratio is 90%, find the effective memory access time (simultaneous access).',
          hi: 'एक कंप्यूटर की कैश मेमोरी का एक्सेस समय 10 ns और मुख्य मेमोरी का 110 ns है। यदि कैश हिट अनुपात 90% है, तो प्रभावी एक्सेस समय (EMAT) ज्ञात कीजिए।',
        },
        stepByStep: {
          en: 'Step 1: Hit ratio h = 0.90, Miss ratio (1 - h) = 0.10.\nStep 2: EMAT = h·T_cache + (1 - h)·T_main = 0.90 × 10 + 0.10 × 110 = 9 + 11 = 20 ns.',
          hi: 'चरण 1: हिट अनुपात h = 0.90, मिस अनुपात (1 - h) = 0.10।\nचरण 2: EMAT = 0.90(10) + 0.10(110) = 9 + 11 = 20 ns।',
        },
        shortcut: {
          en: 'EMAT = 0.9(10) + 0.1(110) = 20 ns in 5 seconds!',
          hi: 'सीधा सूत्र: 0.9(10) + 0.1(110) = 20 ns!',
        },
      },
    ],
    examTraps: [
      {
        id: 'cs25-trap1',
        trap: {
          en: 'Forgetting to multiply Bytes by 8 when the target memory is in Bytes (e.g. 64 KB) and the RAM chip size is in bits (e.g. 4K × 4).',
          hi: 'जब कुल मेमोरी बाइट्स (KB) में हो और चिप का आकार बिट्स (4K × 4) में हो, तब 8 से गुणा करना भूल जाना।',
        },
        correction: {
          en: '1 Byte = 8 bits! So 64 KB = 64K × 8 bits. Divided by (4K × 4 bits) = (64/4) × (8/4) = 16 × 2 = 32 chips!',
          hi: '1 Byte = 8 bits! इसलिए 64 KB = 64K × 8 बिट्स लिखकर फिर भाग दें!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'PC holds address of NEXT instruction. SRAM = Cache (Flip-Flops); DRAM = Main RAM (Capacitors, needs refresh).',
        hi: 'PC अगले निर्देश का पता रखता है। SRAM = कैश (फ्लिप-फ्लॉप); DRAM = मुख्य RAM (कैपेसिटर, रिफ्रेश आवश्यक)।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'CPU & Memory Hierarchy (18M)', hi: 'CPU और मेमोरी पदानुक्रम (18 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Registers & RAM Chips', hi: 'इंडेक्स 1: रजिस्टर और RAM चिप्स' },
          branches: [
            {
              id: 'cs25-b1',
              title: { en: 'SRAM vs DRAM & Buses', hi: 'SRAM बनाम DRAM और बसें' },
              keyPoints: [
                { en: 'Address bus: unidirectional; Data bus: bidirectional', hi: 'एड्रेस बस: एकदिशीय; डेटा बस: द्विदिशीय' },
                { en: 'PC holds NEXT instruction address', hi: 'PC अगले निर्देश का पता रखता है' },
              ],
              subFormula: 'Chips = (M × 8) / (m × n)',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-cs25-1',
        category: { en: 'Memory Organization', hi: 'मेमोरी संगठन' },
        title: { en: 'RAM Chip Count & Decoder Size', hi: 'RAM चिप संख्या और डिकोडर आकार' },
        expression: 'Total Chips = (Target Bytes × 8) / (Chip Words × Chip Bits)',
        variables: { en: '1 Byte = 8 bits; 1 KB = 1024 Bytes', hi: '1 बाइट = 8 बिट्स; 1 KB = 1024 बाइट्स' },
        examTip: {
          en: 'Always convert both numerator and denominator to bits before dividing.',
          hi: 'भाग देने से पहले अंश और हर दोनों को बिट्स में बदलें।',
        },
      },
    ],
  },

  // ==================== CS 26: OPERATING SYSTEMS, NETWORKS, ASCII & C/FLOWCHART BASICS ====================
  {
    id: 'cs-os-networks-c',
    subjectId: 'computer',
    number: '26',
    title: {
      en: 'Operating Systems (Scheduling, Deadlock, Paging), Networking, ASCII & C/Algorithm Basics',
      hi: 'ऑपरेटिंग सिस्टम (शेड्यूलिंग, डेडलॉक, पेजिंग), नेटवर्किंग, ASCII और C/एल्गोरिदम आधार',
    },
    priorityTier: 2,
    expectedQuestions: 3,
    expectedMarks: 18,
    estimatedHours: 3,
    visualizerType: 'logic_gates_2d',
    subtopics: [
      {
        id: 'cs26-s1',
        title: {
          en: '26.1 OS Fundamentals: CPU Scheduling, Coffman Deadlock Conditions & Page Replacement',
          hi: '26.1 ऑपरेटिंग सिस्टम: CPU शेड्यूलिंग, डेडलॉक की 4 शर्तें और पेज रिप्लेसमेंट',
        },
        detailedTheory: {
          en: 'Key OS concepts tested in NIMCET: (1) Process Timing: Turnaround Time (TAT) = Completion Time - Arrival Time; Waiting Time (WT) = TAT - Burst Time. Shortest Job First (SJF / SRTF) gives the MINIMUM average waiting time; Round Robin uses a fixed Time Quantum for time-sharing systems; FCFS suffers from the Convoy Effect; Priority Scheduling suffers from Starvation (solved by Aging!). (2) Deadlock occurs iff ALL 4 Coffman conditions hold simultaneously: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Banker’s Algorithm is used for Deadlock Avoidance. (3) Virtual Memory & Paging: Internal Fragmentation occurs in fixed-size Paging; External Fragmentation occurs in variable-size Segmentation (solved by Compaction). Belady’s Anomaly (more page frames causing MORE page faults) occurs in FIFO page replacement, never in LRU or Optimal!',
          hi: 'OS के मुख्य बिंदु: (1) Turnaround Time (TAT) = Completion - Arrival; Waiting Time (WT) = TAT - Burst Time। SJF न्यूनतम औसत प्रतीक्षा समय देता है; FCFS में Convoy Effect होता है; Priority शेड्यूलिंग में Starvation की समस्या को Aging द्वारा हल किया जाता है। (2) डेडलॉक की 4 आवश्यक शर्तें: Mutual Exclusion, Hold & Wait, No Preemption, और Circular Wait। बैंकर एल्गोरिदम डेडलॉक बचाव (Avoidance) के लिए है। (3) FIFO पेज रिप्लेसमेंट में Belady’s Anomaly होती है, जबकि LRU और Optimal में कभी नहीं होती!',
        },
        keyRules: [
          {
            en: 'If there are P processes and each needs at most K resources, the MINIMUM number of resources required to guarantee NO DEADLOCK is: R ≥ P × (K - 1) + 1!',
            hi: 'यदि P प्रोसेस हैं और प्रत्येक को अधिकतम K संसाधन चाहिए, तो डेडलॉक न होने के लिए आवश्यक न्यूनतम संसाधन: R ≥ P(K - 1) + 1 होते हैं!',
          },
        ],
        keyEquations: [
          'TAT = CT - AT   |   WT = TAT - BT',
          'Deadlock-Free Minimum Resources: R_min = P(K - 1) + 1',
        ],
      },
      {
        id: 'cs26-s2',
        title: {
          en: '26.2 ASCII Codes, OSI Layers, I/O Peripheral Speeds & C Bitwise/Complexity Basics',
          hi: '26.2 ASCII कोड, OSI लेयर्स, I/O गति और C बिटवाइज़/जटिलता नियम',
        },
        detailedTheory: {
          en: 'ASCII (7-bit = 128 characters; Extended ASCII = 8-bit = 256; Unicode UTF-16 = 16-bit = 65,536): Memorize exact decimal/hex values: "0" = 48 (30H), "A" = 65 (41H), "a" = 97 (61H), Space = 32 (20H). Notice that lowercase and uppercase differ by exactly 32 (2⁵), so flipping bit 5 converts "A" ↔ "a"! C Bitwise Shortcuts: Left shift (x << k) = x × 2ᵏ; Right shift (x >> k) = ⌊x / 2ᵏ⌋; expression (x & (x - 1)) clears the lowest set 1-bit (so (x & (x - 1)) == 0 tests if x is a power of 2!). Algorithm Time Complexities: Binary Search = O(log n), Merge Sort / Heap Sort = O(n log n), Quick Sort = O(n log n) average / O(n²) worst, Bubble/Insertion/Selection Sort = O(n²).',
          hi: 'ASCII (7-बिट = 128 अक्षर) के मानक मान: "0" = 48, "A" = 65, "a" = 97, Space = 32। ध्यान दें कि बड़े और छोटे अक्षर में 32 (अर्थात 5वें बिट) का अंतर होता है! C बिटवाइज़ ऑपरेटर: बायां शिफ्ट (x << k) = x × 2ᵏ; दायां शिफ्ट (x >> k) = ⌊x / 2ᵏ⌋; तथा (x & (x - 1)) == 0 जांचता है कि x, 2 की घात है या नहीं! एल्गोरिदम जटिलता: बाइनरी सर्च = O(log n), मर्ज/हीप सॉर्ट = O(n log n)।',
        },
        keyRules: [
          {
            en: 'OSI 7 Layers (Bottom to Top): Physical (1 — Hub/Repeater, Bits), Data Link (2 — Switch/Bridge, Frames, MAC), Network (3 — Router, Packets, IP), Transport (4 — TCP/UDP, Segments, Port), Session (5), Presentation (6 — Encryption/Compression), Application (7 — HTTP/DNS/SMTP).',
            hi: 'OSI की 7 परतें: 1. फिजिकल (हब/रिपीटर), 2. डेटा लिंक (स्विच/ब्रिज, MAC), 3. नेटवर्क (राउटर, IP पैकेट), 4. ट्रांसपोर्ट (TCP/UDP, पोर्ट), 5. सेशन, 6. प्रेजेंटेशन, 7. एप्लीकेशन (HTTP/DNS)।',
          },
        ],
        keyEquations: [
          'ASCII: "0" = 48, "A" = 65, "a" = 97  |  "a" - "A" = 32',
          'Bitwise: (x << k) = x · 2^k  |  (x >> k) = ⌊x / 2^k⌋',
        ],
      },
    ],
    deepConcept: {
      intuition: {
        en: 'This chapter covers the remaining high-yield Computer Awareness questions: OS deadlock formula R = P(K-1)+1, ASCII codes (48, 65, 97), OSI networking devices, and C bitwise shift operators.',
        hi: 'यह अध्याय कंप्यूटर के शेष महत्वपूर्ण प्रश्नों को कवर करता है: डेडलॉक सूत्र R = P(K-1)+1, ASCII कोड (48, 65, 97), OSI डिवाइस और C बिटवाइज़ शिफ्ट ऑपरेटर।',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. Deadlock Resource Formula & ASCII Table',
            hi: '1. डेडलॉक संसाधन सूत्र और ASCII तालिका',
          },
          explanation: {
            en: 'Minimum resources for deadlock-free execution = P(K - 1) + 1. ASCII: "0"=48, "A"=65, "a"=97.',
            hi: 'डेडलॉक-मुक्त निष्पादन के लिए न्यूनतम संसाधन = P(K - 1) + 1। ASCII: "0"=48, "A"=65, "a"=97।',
          },
          mathematicalForm: 'R_min = P(K - 1) + 1   |   ASCII("a") - ASCII("A") = 32',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'Linux Kernel Scheduler & High-Speed Bit Manipulation',
          hi: 'लिनक्स कर्नेल शेड्यूलर और बिट मैनिपुलेशन',
        },
        title: {
          en: 'Fast Multiplication/Division by Powers of 2 Using Bit Shifts',
          hi: 'बिट शिफ्ट द्वारा 2 की घातों से तेज़ गुणा और भाग',
        },
        howItWorks: {
          en: 'Compilers replace x * 8 with (x << 3), which executes in a single CPU clock cycle.',
          hi: 'कंपाइलर x * 8 को (x << 3) में बदल देते हैं जो 1 क्लॉक साइकिल में निष्पादित होता है।',
        },
        practicalExample: {
          en: '13 << 2 = 13 × 4 = 52; 29 >> 2 = ⌊29 / 4⌋ = 7.',
          hi: '13 << 2 = 13 × 4 = 52; तथा 29 >> 2 = ⌊29 / 4⌋ = 7 होता है।',
        },
      },
    },
    workedExamples: [
      {
        id: 'cs26-ex1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Minimum Resources to Guarantee No Deadlock',
          hi: 'डेडलॉक से बचने के लिए न्यूनतम संसाधनों की गणना',
        },
        problem: {
          en: 'A system has 4 processes, and each process requires at most 3 identical units of a resource R to complete execution. What is the minimum number of units of R required so that deadlock never occurs?',
          hi: 'एक सिस्टम में 4 प्रोसेस हैं और प्रत्येक प्रोसेस को कार्य पूरा करने के लिए अधिकतम 3 संसाधनों की आवश्यकता है। डेडलॉक कभी न हो, इसके लिए न्यूनतम कितने संसाधन होने चाहिए?',
        },
        stepByStep: {
          en: 'Step 1: Worst-case tie occurs when all 4 processes hold (3 - 1) = 2 resources each: 4 × 2 = 8 resources.\nStep 2: Adding just 1 more resource guarantees at least one process finishes and releases its resources.\nStep 3: R_min = P(K - 1) + 1 = 4(3 - 1) + 1 = 8 + 1 = 9 units!',
          hi: 'चरण 1: यदि चारों प्रोसेस को (3 - 1) = 2 संसाधन मिल जाएं, तो कुल 4 × 2 = 8 संसाधन लगेंगे।\nचरण 2: केवल 1 अतिरिक्त संसाधन देते ही कम से कम एक प्रोसेस अपना कार्य पूरा कर लेगा।\nचरण 3: R_min = P(K - 1) + 1 = 4(3 - 1) + 1 = 9 संसाधन!',
        },
        shortcut: {
          en: 'Formula: R_min = P(K - 1) + 1 = 4(2) + 1 = 9.',
          hi: 'सीधा सूत्र: R_min = P(K - 1) + 1 = 4(2) + 1 = 9।',
        },
      },
    ],
    examTraps: [
      {
        id: 'cs26-trap1',
        trap: {
          en: 'Thinking Router operates at Layer 2 (Data Link) or Switch operates at Layer 3 (Network).',
          hi: 'राउटर को लेयर 2 या स्विच को लेयर 3 का उपकरण मान लेना।',
        },
        correction: {
          en: 'Hub/Repeater = Layer 1 (Physical); Switch/Bridge = Layer 2 (Data Link, MAC address); Router = Layer 3 (Network, IP address); Gateway = All 7 layers!',
          hi: 'हब/रिपीटर = लेयर 1; स्विच/ब्रिज = लेयर 2 (MAC पता); राउटर = लेयर 3 (IP पता)!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'Deadlock-free resources: R = P(K-1) + 1. ASCII: "0"=48, "A"=65, "a"=97. Belady’s anomaly happens in FIFO.',
        hi: 'डेडलॉक-मुक्त संसाधन: R = P(K-1) + 1। ASCII: "0"=48, "A"=65, "a"=97। FIFO में Belady’s anomaly होती है।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'OS, Networks & C Basics (18M)', hi: 'OS, नेटवर्क और C आधार (18 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: OS & Networking', hi: 'इंडेक्स 1: OS और नेटवर्किंग' },
          branches: [
            {
              id: 'cs26-b1',
              title: { en: 'OS & ASCII Essentials', hi: 'OS और ASCII मुख्य बिंदु' },
              keyPoints: [
                { en: 'SJF gives minimum waiting time', hi: 'SJF न्यूनतम प्रतीक्षा समय देता है' },
                { en: 'ASCII: "0"=48, "A"=65, "a"=97', hi: 'ASCII: "0"=48, "A"=65, "a"=97' },
              ],
              subFormula: 'R_min = P(K - 1) + 1',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-cs26-1',
        category: { en: 'Operating Systems', hi: 'ऑपरेटिंग सिस्टम' },
        title: { en: 'Deadlock Avoidance Minimum Resource Formula', hi: 'डेडलॉक निवारण न्यूनतम संसाधन सूत्र' },
        expression: 'R_min = P · (K - 1) + 1',
        variables: { en: 'P: number of processes; K: max resources needed by each process', hi: 'P: प्रोसेस संख्या; K: प्रत्येक प्रोसेस की अधिकतम मांग' },
        examTip: {
          en: 'If R ≤ P(K - 1), deadlock CAN occur; if R ≥ P(K - 1) + 1, deadlock is IMPOSSIBLE.',
          hi: 'यदि R ≥ P(K - 1) + 1 हो, तो डेडलॉक असंभव है।',
        },
      },
    ],
  },

  // ============================================================================
  // SUBJECT 4: GENERAL ENGLISH (10 Questions · 40 Marks · +4 / -1)
  // ============================================================================
  {
    id: 'eng-grammar-vocab-rc',
    subjectId: 'english',
    number: '27',
    title: {
      en: 'Subject-Verb Agreement, Conditional Tenses, Articles & Fixed Prepositions',
      hi: 'कर्ता-क्रिया समझौता (Subject-Verb Agreement), काल, आर्टिकल और फिक्स्ड प्रीपोज़िशन',
    },
    priorityTier: 2,
    expectedQuestions: 3,
    expectedMarks: 12,
    estimatedHours: 2,
    visualizerType: 'venn_probability_2d',
    subtopics: [
      {
        id: 'eng27-s1',
        title: {
          en: '27.1 Golden Rules of Subject-Verb Agreement & Conditional Sentences',
          hi: '27.1 सब्जेक्ट-वर्ब एग्रीमेंट के स्वर्णिम नियम और शर्तवाचक वाक्य (Conditionals)',
        },
        detailedTheory: {
          en: 'Rule 1 (Connector Rule): When two subjects S₁ and S₂ are joined by "along with", "as well as", "together with", "in addition to", "accompanied by", or "besides", the verb ALWAYS agrees with the FIRST subject S₁! Rule 2 (Proximity Rule): When joined by "Either...or", "Neither...nor", or "Not only...but also", the verb agrees with the NEAREST subject S₂! Rule 3 (Distributive Pronouns): "Each", "Every", "Either of", "Neither of", "One of", "Everyone", "Somebody" ALWAYS take a SINGULAR verb (e.g., "One of my friends IS an engineer"). Rule 4 ("A number of" vs "The number of"): "A number of students ARE..." (plural) vs "The number of students IS..." (singular!). Conditional Tenses: Type 1 (Real): If + Simple Present, ... will + V₁; Type 2 (Unreal/Hypothetical): If + Simple Past (were/V₂), ... would + V₁; Type 3 (Past Impossible): If + had + V₃, ... would have + V₃!',
          hi: 'नियम 1: जब दो कर्ता "along with", "as well as", "together with" से जुड़े हों, तो क्रिया हमेशा पहले कर्ता (S₁) के अनुसार आती है! नियम 2: जब "Either...or", "Neither...nor", "Not only...but also" से जुड़े हों, तो क्रिया पास वाले कर्ता (S₂) के अनुसार आती है! नियम 3: "Each", "Every", "Either of", "Neither of", "One of" के बाद संज्ञा बहुवचन हो सकती है परंतु क्रिया हमेशा एकवचन (Singular) आती है! नियम 4: "A number of + Plural Noun + Plural Verb", परंतु "The number of + Plural Noun + Singular Verb"! शर्तवाचक वाक्य (Conditionals): Type 3: If + had + V₃, ... would have + V₃!',
        },
        keyRules: [
          {
            en: 'After "It is high time / It is time / I wish", always use the Simple Past tense (V₂ / were): e.g., "It is high time you STARTED studying!"',
            hi: '"It is high time" या "It is time" के बाद यदि कर्ता हो, तो हमेशा भूतकाल (V₂) का प्रयोग होता है: "It is high time we started!"',
          },
          {
            en: 'Fixed Prepositions: Prefer / Senior / Junior / Superior / Inferior / Prior + TO (never "than"); Accused OF; Acquitted OF; Fond OF; Abstain FROM; Prevent FROM; Comprise (= consist of, takes NO "of" in active voice); Cope WITH (never "cope up with"!).',
            hi: 'फिक्स्ड प्रीपोज़िशन: Prefer/Senior/Junior/Superior + TO; Accused/Acquitted/Guilty + OF; Abstain/Prevent + FROM; Cope + WITH ("cope up with" गलत होता है!)।',
          },
        ],
        keyEquations: [
          'S₁ + (along with / as well as) + S₂  ⇒  Verb agrees with S₁',
          'Neither S₁ nor S₂  ⇒  Verb agrees with S₂  |  If + had + V₃  ⇒  would have + V₃',
        ],
      },
    ],
    deepConcept: {
      intuition: {
        en: 'NIMCET Grammar tests structural rules rather than subjective style. Memorizing the 4 Subject-Verb Agreement rules, the 3 Conditional templates, and the top 20 Fixed Prepositions guarantees 12/12 marks.',
        hi: 'NIMCET व्याकरण में निश्चित संरचनात्मक नियम पूछे जाते हैं। सब्जेक्ट-वर्ब के 4 नियम, 3 कंडीशनल टेम्पलेट और 20 फिक्स्ड प्रीपोज़िशन से पूरे अंक मिलते हैं।',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. Connector vs Proximity Agreement & Conditional Matrix',
            hi: '1. कर्ता-क्रिया समझौता और शर्तवाचक काल मैट्रिक्स',
          },
          explanation: {
            en: '"As well as" → 1st Subject; "Neither...nor" → Nearest Subject. "If he had worked hard, he would have passed."',
            hi: '"As well as" → पहला कर्ता; "Neither...nor" → पास वाला कर्ता। "If + had + V₃ → would have + V₃"।',
          },
          mathematicalForm: 'Type 3 Conditional: If + Subject + had + V₃, Subject + would have + V₃',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'Natural Language Grammar Checkers & Compiler Syntax Trees',
          hi: 'नेचुरल लैंग्वेज ग्रामर चेकर और सिंटैक्स ट्री',
        },
        title: {
          en: 'Head-Noun Dependency Parsing',
          hi: 'वाक्य में मुख्य कर्ता (Head Noun) की पहचान',
        },
        howItWorks: {
          en: 'Parsers strip prepositional modifiers ("along with his friends") to match the head noun with the main verb.',
          hi: 'वाक्य के बीच के वाक्यांश को हटाकर मुख्य कर्ता के अनुसार क्रिया लगाई जाती है।',
        },
        practicalExample: {
          en: '"Neither the director nor the actors WERE present" vs "Neither the actors nor the director WAS present".',
          hi: '"Neither the director nor the actors WERE present" (पास वाले कर्ता actors के अनुसार were)।',
        },
      },
    },
    workedExamples: [
      {
        id: 'eng27-ex1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Type-3 Conditional & Fixed Preposition Check',
          hi: 'शर्तवाचक वाक्य और प्रीपोज़िशन सुधार',
        },
        problem: {
          en: 'Spot the error: "If you would have informed me earlier (A) / I would have definitely (B) / helped you in the project (C) / No error (D)."',
          hi: 'त्रुटि पहचानें: "If you would have informed me earlier (A) / I would have definitely (B) / helped you in the project (C) / No error (D)."',
        },
        stepByStep: {
          en: 'Step 1: Never use "would have" inside the "If" clause!\nStep 2: In a Type-3 past conditional, the "If" clause MUST use Past Perfect (had + V₃).\nStep 3: Replace "If you would have informed" in part (A) with "If you had informed".',
          hi: 'चरण 1: "If" वाले उपवाक्य में कभी भी "would have" का प्रयोग नहीं होता!\nचरण 2: वहाँ हमेशा Past Perfect (had + V₃) आता है।\nचरण 3: भाग (A) में "If you had informed" होना चाहिए।',
        },
        shortcut: {
          en: '"If + would have" is ALWAYS wrong in English grammar—change it to "If + had + V₃"!',
          hi: '"If + would have" हमेशा गलत होता है—इसे तुरंत "If + had + V₃" में बदलें!',
        },
      },
    ],
    examTraps: [
      {
        id: 'eng27-trap1',
        trap: {
          en: 'Using "an" before "university / European / one-rupee note" because they start with vowel letters u, E, o.',
          hi: '"university / European / one-rupee note" के आगे स्वर अक्षर देखकर "an" लगा देना।',
        },
        correction: {
          en: 'Articles "a" vs "an" depend on VOWEL SOUND (अ–औ), NOT vowel letter! "University" (यूनिवर्सिटी → "yu") and "One" (वन → "wa") take "a"; "Hour" (आवर) and "MLA" (एम-एल-ए) take "an"!',
          hi: '"a" और "an" का निर्णय ध्वनि (उच्चारण) से होता है, अक्षर से नहीं! अतः a university, a European, a one-eyed man, परंतु an hour, an honest man, an FIR/MLA!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'Prefer/Senior/Junior + TO. Look forward to / With a view to / Used to + V-ing (Gerund)!',
        hi: 'Prefer/Senior/Junior + TO। "Look forward to / With a view to / Addicted to" के बाद हमेशा V-ing आता है!',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Grammar & Prepositions (12M)', hi: 'व्याकरण और प्रीपोज़िशन (12 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Agreement & Tenses', hi: 'इंडेक्स 1: कर्ता-क्रिया और काल' },
          branches: [
            {
              id: 'eng27-b1',
              title: { en: 'Subject-Verb Rules', hi: 'कर्ता-क्रिया नियम' },
              keyPoints: [
                { en: 'Along with / As well as → 1st Subject', hi: 'Along with / As well as → पहला कर्ता' },
                { en: 'Each / Every / One of → Singular Verb', hi: 'Each / Every / One of → एकवचन क्रिया' },
              ],
              subFormula: 'If + had + V₃ ⇒ would have + V₃',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-eng27-1',
        category: { en: 'Grammar Rules', hi: 'व्याकरण नियम' },
        title: { en: 'Phrases Ending in "to" That Take Gerund (V + ing)', hi: '"to" पर समाप्त होने वाले वाक्यांश जिनके बाद V+ing आता है' },
        expression: '(Look forward to / With a view to / Accustomed to / Habituated to / Be used to) + Verb-ing',
        variables: { en: 'e.g. "I look forward to meeting you" (NOT "meet")', hi: 'जैसे "I look forward to meeting you"' },
        examTip: {
          en: 'One of the most frequent NIMCET sentence improvement traps.',
          hi: 'NIMCET वाक्य सुधार में यह नियम बार-बार पूछा जाता है।',
        },
      },
    ],
  },

  // ==================== ENG 28: ACTIVE/PASSIVE VOICE, DIRECT/INDIRECT SPEECH & QUESTION TAGS ====================
  {
    id: 'eng-voice-narration',
    subjectId: 'english',
    number: '28',
    title: {
      en: 'Active & Passive Voice, Direct & Indirect Narration & Question Tags',
      hi: 'एक्टिव-पैसिव वॉइस, डायरेक्ट-इनडायरेक्ट नरेशन और क्वेश्चन टैग्स',
    },
    priorityTier: 2,
    expectedQuestions: 2,
    expectedMarks: 8,
    estimatedHours: 2,
    visualizerType: 'venn_probability_2d',
    subtopics: [
      {
        id: 'eng28-s1',
        title: {
          en: '28.1 Active-to-Passive Voice Tense Preservation Matrix',
          hi: '28.1 एक्टिव से पैसिव वॉइस में काल (Tense) रूपांतरण नियम',
        },
        detailedTheory: {
          en: 'Golden Rule of Passive Voice: Tense NEVER changes in Voice conversion (unlike Narration)! Simply insert the appropriate form of "be" + V₃ (Past Participle): (1) Simple Present (V₁) → is/am/are + V₃. (2) Simple Past (V₂) → was/were + V₃. (3) Continuous (is/was + V-ing) → is/was + BEING + V₃. (4) Perfect (has/had + V₃) → has/had + BEEN + V₃. (5) Modals (can/must/should + V₁) → can/must/should + BE + V₃. (6) Interrogative "Who wrote this book?" → "By whom was this book written?". (7) Imperative "Open the door" → "Let the door be opened". Verbs that do NOT take "by" in Passive: "known TO me", "surprised AT his behavior", "satisfied WITH your work", "contained IN this box"!',
          hi: 'पैसिव वॉइस का स्वर्णिम नियम: वॉइस बदलने पर काल (Tense) कभी नहीं बदलता (जबकि नरेशन में बदलता है)! केवल "be" का रूप + V₃ लगाएं: (1) V₁ → is/am/are + V₃। (2) V₂ → was/were + V₃। (3) V-ing → is/was + BEING + V₃। (4) has/had + V₃ → has/had + BEEN + V₃। (5) "Who..." → "By whom..."। ध्यान दें: "known TO", "surprised AT", "satisfied WITH", "contained IN" के साथ पैसिव में "by" नहीं आता!',
        },
        keyRules: [
          {
            en: 'Eliminate 3 wrong options in 3 seconds solely by checking the helping verb (e.g., if Active has V₂, Passive MUST have was/were + V₃, never has/had been!).',
            hi: 'केवल सहायक क्रिया (was/were बनाम has/had) देखकर 3 सेकंड में 3 गलत विकल्प हटाएं!',
          },
        ],
        keyEquations: [
          'Continuous Passive = is/am/are/was/were + BEING + V₃',
          'Perfect Passive = has/have/had + BEEN + V₃',
        ],
      },
      {
        id: 'eng28-s2',
        title: {
          en: '28.2 Direct-to-Indirect Speech (Narration) & Question Tag Rules',
          hi: '28.2 डायरेक्ट से इनडायरेक्ट स्पीच (Narration) और क्वेश्चन टैग नियम',
        },
        detailedTheory: {
          en: 'In Indirect Speech, when the reporting verb is in the Past ("He said"), backshift the tense inside quotes: Present Simple → Past Simple; Present Continuous → Past Continuous; Present Perfect / Past Simple → Past Perfect (had + V₃); will → would; can → could; may → might; "now" → "then"; "today" → "that day"; "tomorrow" → "the next day"; "yesterday" → "the previous day". Exception: Universal truths and proverbs ("The Earth revolves around the Sun") do NOT change tense! In Interrogative narration ("He asked me where I WAS going"), the clause after wh-word/if/whether becomes ASSERTIVE (Subject BEFORE helping verb, never "where was I going"!). Question Tags: Positive statement → Negative tag ("He is coming, isn’t he?"); Negative statement (including words like hardly, scarcely, rarely, seldom, little, few) → Positive tag ("He hardly works, DOES he?")!',
          hi: 'इनडायरेक्ट स्पीच में यदि रिपोर्टिंग वर्ब भूतकाल ("said") में हो, तो अंदर का काल पीछे (Past में) चला जाता है: V₁ → V₂; V₂ / has+V₃ → had+V₃; will → would; today → that day; tomorrow → the next day। अपवाद: सार्वभौमिक सत्य (Universal Truth) का काल नहीं बदलता! प्रश्नवाचक वाक्य को इनडायरेक्ट में बदलते समय "wh-शब्द / if / whether" के बाद पहले कर्ता और फिर सहायक क्रिया आती है (जैसे "where he was going")। क्वेश्चन टैग: सकारात्मक वाक्य का टैग नकारात्मक, और नकारात्मक वाक्य (जिनमें hardly, scarcely, rarely, seldom, few, little हों) का टैग सकारात्मक बनता है!',
        },
        keyRules: [
          {
            en: 'Special Question Tags: "I am right, AREN’T I?" (not amn’t I); "Let us go, SHALL WE?"; "Open the window, WILL YOU?".',
            hi: 'विशेष क्वेश्चन टैग: "I am..., aren’t I?"; "Let’s..., shall we?"; और "hardly/scarcely/seldom" वाले वाक्यों में सकारात्मक टैग आता है!',
          },
        ],
        keyEquations: [
          'Narration Backshift: V₁ → V₂  |  V₂ / have+V₃ → had + V₃  |  Universal Truth → Unchanged',
          'Question Tag of "I am..." → "aren’t I?"  |  "Hardly/Seldom..." → Positive Tag',
        ],
      },
    ],
    deepConcept: {
      intuition: {
        en: 'Voice and Narration are mechanical transformation problems: Voice preserves tense (inserting being/been + V₃), while Narration backshifts tense into the past and turns questions into Subject + Verb order.',
        hi: 'वॉइस और नरेशन गणितीय सूत्रों की तरह काम करते हैं: वॉइस में काल समान रहता है (being/been + V₃ जुड़ता है), जबकि नरेशन में काल भूतकाल में बदल जाता है।',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. Voice vs Narration Contrast & Question Tag Polarity',
            hi: '1. वॉइस बनाम नरेशन अंतर और क्वेश्चन टैग नियम',
          },
          explanation: {
            en: 'Voice: Tense stays same. Narration: Tense shifts back (unless Universal Truth). Words like hardly, scarcely, rarely, seldom, little, few are negative, so they take a POSITIVE question tag!',
            hi: 'वॉइस में काल नहीं बदलता; नरेशन में काल भूतकाल में जाता है। Hardly, scarcely, rarely, seldom, little, few नकारात्मक शब्द हैं, इसलिए इनका क्वेश्चन टैग सकारात्मक बनता है!',
          },
          mathematicalForm: 'Active: S + V₂ + O  ⇒  Passive: O + was/were + V₃ + by S',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'Automated News Summarization & Legal Transcription',
          hi: 'स्वचालित समाचार सारांश और विधिक रिपोर्टिंग',
        },
        title: {
          en: 'Converting Direct Quotes to Reported Speech',
          hi: 'प्रत्यक्ष कथनों को रिपोर्टेड स्पीच में बदलना',
        },
        howItWorks: {
          en: 'NLP pipelines shift pronouns, temporal adverbs, and verb tenses when summarizing press conferences.',
          hi: 'पत्रकारिता में प्रत्यक्ष संवाद को रिपोर्टेड स्पीच में बदलने के लिए यही नियम प्रयुक्त होते हैं।',
        },
        practicalExample: {
          en: '"I know him" → "He is known TO me" (never "by me").',
          hi: '"I know him" का पैसिव "He is known TO me" होता है ("by me" नहीं)।',
        },
      },
    },
    workedExamples: [
      {
        id: 'eng28-ex1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Question Tag with Semi-Negative Adverbs',
          hi: 'अर्ध-नकारात्मक शब्दों (Rarely/Hardly) के साथ क्वेश्चन टैग',
        },
        problem: {
          en: 'Choose the correct question tag: "Barking dogs seldom bite, ___?" (A) don’t they (B) do they (C) didn’t they (D) aren’t they.',
          hi: 'सही क्वेश्चन टैग चुनें: "Barking dogs seldom bite, ___?" (A) don’t they (B) do they (C) didn’t they (D) aren’t they.',
        },
        stepByStep: {
          en: 'Step 1: The word "seldom" is negative in meaning.\nStep 2: A negative statement requires a POSITIVE question tag.\nStep 3: Since "bite" is Present Simple plural, the auxiliary is "do" and pronoun is "they" ⇒ "do they?".',
          hi: 'चरण 1: "seldom" (शायद ही कभी) एक नकारात्मक शब्द है।\nचरण 2: नकारात्मक वाक्य का क्वेश्चन टैग सकारात्मक होता है।\nचरण 3: "bite" वर्तमान बहुवचन है, अतः सही उत्तर (B) "do they" है!',
        },
        shortcut: {
          en: 'Hardly / Scarcely / Rarely / Seldom / Few / Little = Negative ⇒ Always choose the POSITIVE tag!',
          hi: 'Hardly / Scarcely / Rarely / Seldom दिखते ही बिना "not" वाला सकारात्मक टैग चुनें!',
        },
      },
    ],
    examTraps: [
      {
        id: 'eng28-trap1',
        trap: {
          en: 'Choosing "He asked me where was I going" in Indirect Speech.',
          hi: 'इनडायरेक्ट स्पीच में "He asked me where was I going" चुन लेना।',
        },
        correction: {
          en: 'In Indirect Speech, an embedded question loses its inversion! It MUST be Subject + Helping Verb: "He asked me where I WAS going."',
          hi: 'इनडायरेक्ट स्पीच में प्रश्नवाचक चिह्न हट जाता है, इसलिए "where I was going" सही है, "where was I going" गलत है!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'Known TO, surprised AT, satisfied WITH. "I am right, aren’t I?". Hardly/Seldom takes positive tag.',
        hi: 'Known TO, surprised AT, satisfied WITH। "I am right, aren’t I?"। Hardly/Seldom के साथ सकारात्मक टैग आता है।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Voice, Narration & Tags (8M)', hi: 'वॉइस, नरेशन और टैग्स (8 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Voice & Narration', hi: 'इंडेक्स 1: वॉइस और नरेशन' },
          branches: [
            {
              id: 'eng28-b1',
              title: { en: 'Quick Transformation Rules', hi: 'त्वरित रूपांतरण नियम' },
              keyPoints: [
                { en: 'Voice: Tense never changes (be + V₃)', hi: 'वॉइस में काल कभी नहीं बदलता' },
                { en: 'Narration: V₁ → V₂, V₂ → had + V₃', hi: 'नरेशन में V₁ → V₂ और V₂ → had + V₃' },
              ],
              subFormula: 'Known TO | Surprised AT',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-eng28-1',
        category: { en: 'Voice & Tags', hi: 'वॉइस और टैग्स' },
        title: { en: 'Semi-Negative Words Requiring Positive Question Tags', hi: 'सकारात्मक क्वेश्चन टैग लेने वाले नकारात्मक शब्द' },
        expression: '{Hardly, Scarcely, Rarely, Seldom, Barely, Few, Little}  ⇒  Positive Question Tag',
        variables: { en: 'Note: "A few" and "A little" are positive, so they take negative tags!', hi: '"A few" और "A little" सकारात्मक हैं, अतः उनके साथ नकारात्मक टैग आता है!' },
        examTip: {
          en: 'Contrast: "Few people knew, DID they?" vs "A few people knew, DIDN’T they?".',
          hi: '"Few" = नकारात्मक (did they?); "A few" = सकारात्मक (didn’t they?)।',
        },
      },
    ],
  },

  // ==================== ENG 29: HIGH-FREQUENCY VOCABULARY, ROOT WORDS & ONE-WORD SUBSTITUTIONS ====================
  {
    id: 'eng-vocab-roots-ows',
    subjectId: 'english',
    number: '29',
    title: {
      en: 'High-Frequency Synonyms/Antonyms, Latin/Greek Root Words, One-Word Substitutions & Confusable Words',
      hi: 'पर्यायवाची/विलोम, रूट वर्ड्स, अनेक शब्दों के लिए एक शब्द (OWS) और भ्रामक शब्द',
    },
    priorityTier: 3,
    expectedQuestions: 3,
    expectedMarks: 12,
    estimatedHours: 2,
    visualizerType: 'venn_probability_2d',
    subtopics: [
      {
        id: 'eng29-s1',
        title: {
          en: '29.1 Master Root Words (Bene/Mal, Loqu, Vor, Cracy, Phobia, Omni) & Synonyms/Antonyms',
          hi: '29.1 प्रमुख रूट वर्ड्स (Bene/Mal, Loqu, Vor, Cracy, Omni) और पर्यायवाची/विलोम',
        },
        detailedTheory: {
          en: 'Learning 15 Latin/Greek roots unlocks 300+ NIMCET vocabulary words: (1) BENE (good) → Benevolent (kind), Benign (harmless), Benediction (blessing) vs MAL (bad/evil) → Malevolent, Malignant, Malign, Maladroit (clumsy). (2) LOQU / LOCU (to speak) → Loquacious (talkative, syn: Garrulous, Voluble; ant: Taciturn, Reticent, Laconic), Eloquent (fluent), Somniloquist (talks in sleep), Soliloquy (speaking alone). (3) OMNI (all) → Omnipresent (ubiquitous), Omniscient (knows everything), Omnipotent (all-powerful), Omnivorous. (4) ANTHROP (mankind) → Philanthropist (lover of mankind), Misanthrope (hater of mankind), Misogynist (hater of women), Misogamist (hater of marriage). High-Frequency NIMCET Synonyms/Antonyms: Ephemeral / Transient (short-lived) ↔ Perennial / Eternal; Pragmatic (practical) ↔ Idealistic; Candid (frank/honest) ↔ Devious; Mitigate / Alleviate / Assuage (reduce pain) ↔ Aggravate / Exacerbate; Obsequious / Sycophant (flatterer) ↔ Domineering; Frugal / Parsimonious (thrifty) ↔ Extravagant / Prodigal (wasteful).',
          hi: 'प्रमुख लैटिन/ग्रीक रूट वर्ड्स: (1) BENE (अच्छा) → Benevolent (परोपकारी), Benign (हानिरहित) बनाम MAL (बुरा) → Malevolent, Malignant। (2) LOQU (बोलना) → Loquacious / Garrulous (बातूनी; विलोम: Taciturn / Reticent / Laconic = मितभाषी), Eloquent (वाक्पटु), Somniloquist (नींद में बोलने वाला)। (3) OMNI (सर्व) → Omnipresent (सर्वव्यापी), Omniscient (सर्वज्ञ), Omnipotent (सर्वशक्तिमान)। (4) प्रमुख पर्यायवाची/विलोम: Ephemeral (क्षणिक) ↔ Eternal (शाश्वत); Mitigate (कम करना) ↔ Aggravate (बढ़ाना); Frugal (मितव्ययी) ↔ Prodigal / Extravagant (फिजूलखर्च)।',
        },
        keyRules: [
          {
            en: 'Top One-Word Substitutions: Altruist (unselfish lover of others), Stoic (indifferent to pleasure or pain), Fastidious (hard to please), Inevitable (cannot be avoided), Infallible (never makes mistakes), Indelible (cannot be erased), Illegible (impossible to read handwriting), Incorrigible (cannot be reformed), Panacea (remedy for all diseases), Teetotaler (abstains completely from alcohol).',
            hi: 'प्रमुख अनेक शब्दों के लिए एक शब्द: Stoic (सुख-दुख में समान रहने वाला), Fastidious (जिसे प्रसन्न करना कठिन हो), Infallible (जो कभी गलती न करे), Panacea (रामबाण औषधि), Illegible (अपठनीय लिखावट)।',
          },
          {
            en: 'Commonly Confused Homophones: Principal (head/main) vs Principle (rule); Complement (completes) vs Compliment (praise); Stationary (not moving, "a" for parked car) vs Stationery (pens/paper, "e" for pen); Elicit (draw out response) vs Illicit (illegal); Emigrate (leave country) vs Immigrate (enter country); Affect (verb) vs Effect (noun).',
            hi: 'भ्रामक शब्द: Stationary (स्थिर) बनाम Stationery (लेखन सामग्री — pen में e); Complement (पूरक) बनाम Compliment (प्रशंसा); Elicit (बाहर निकालना) बनाम Illicit (अवैध)।',
          },
        ],
        keyEquations: [
          'Loquacious / Garrulous (Talkative)  ↔  Taciturn / Laconic (Brief/Silent)',
          'Frugal / Thrifty (Economical)  ↔  Prodigal / Extravagant (Wasteful)',
        ],
      },
    ],
    deepConcept: {
      intuition: {
        en: 'Decode unfamiliar NIMCET words by splitting them into [Prefix + Root + Suffix] and checking positive (+) vs negative (−) tone.',
        hi: 'कठिन अंग्रेजी शब्दों को [उपसर्ग + मूल शब्द + प्रत्यय] में तोड़कर और सकारात्मक (+) या नकारात्मक (−) भाव पहचानकर हल करें।',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. Etymological Root Decoding & Tone Elimination',
            hi: '1. मूल शब्द (Root Word) विच्छेदन और टोन एलिमिनेशन',
          },
          explanation: {
            en: 'If 3 options have a positive tone and 1 option has a negative tone, the odd tone out is almost always the answer in Synonym/Antonym questions.',
            hi: 'यदि 3 विकल्प सकारात्मक भाव के हों और 1 नकारात्मक भाव का हो, तो आसानी से सही विकल्प चुना जा सकता है।',
          },
          mathematicalForm: 'Prefix (Eu+/Dys-/Bene+/Mal-) + Root (Loqu/Vor/Cred/ Greg) + Suffix',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'Technical Documentation & Professional Communication',
          hi: 'तकनीकी लेखन और व्यावसायिक संवाद',
        },
        title: {
          en: 'Precision Vocabulary in Software Specs',
          hi: 'सॉफ्टवेयर विनिर्देशों में सटीक शब्दावली',
        },
        howItWorks: {
          en: 'Terms like "ephemeral tokens", "idempotent APIs", and "ubiquitous computing" come directly from classical roots.',
          hi: '"Ephemeral token", "Ubiquitous computing" जैसे तकनीकी शब्द इन्हीं रूट वर्ड्स से बने हैं।',
        },
        practicalExample: {
          en: 'Ephemeral = lasting for a very short time (used for ephemeral ports and temporary session keys).',
          hi: 'Ephemeral का अर्थ क्षणिक या अस्थायी होता है।',
        },
      },
    },
    workedExamples: [
      {
        id: 'eng29-ex1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Antonym of "Loquacious" & One-Word Substitution',
          hi: '"Loquacious" का विलोम और अनेक शब्दों के लिए एक शब्द',
        },
        problem: {
          en: '(a) Choose the antonym of "LOQUACIOUS": (A) Garrulous (B) Taciturn (C) Voluble (D) Verbose. (b) One word for "A person who is indifferent to pleasure and pain": (A) Cynic (B) Stoic (C) Recluse (D) Epicure.',
          hi: '(a) "LOQUACIOUS" का विलोम शब्द चुनें: (A) Garrulous (B) Taciturn (C) Voluble (D) Verbose। (b) "सुख और दुख में समान भाव रखने वाला व्यक्ति": (A) Cynic (B) Stoic (C) Recluse (D) Epicure।',
        },
        stepByStep: {
          en: 'Part (a): Loquacious (root LOQU = speak) means very talkative. Garrulous, Voluble, and Verbose are all synonyms (talkative). Taciturn means reserved/silent ⇒ (B) Taciturn!\nPart (b): Stoic means a person who endures pain or hardship without showing feelings ⇒ (B) Stoic!',
          hi: 'भाग (a): Loquacious का अर्थ बातूनी है। Garrulous, Voluble और Verbose इसके पर्यायवाची हैं, जबकि Taciturn का अर्थ अल्पभाषी/शांत है ⇒ (B) Taciturn!\nभाग (b): सुख-दुख में समभाव रखने वाले को Stoic (स्थितप्रज्ञ) कहते हैं ⇒ (B) Stoic!',
        },
        shortcut: {
          en: 'Notice (A), (C), (D) all mean "talkative"—so by 3-vs-1 odd-one-out elimination, (B) Taciturn MUST be the antonym!',
          hi: 'विकल्प (A), (C), (D) तीनों का अर्थ समान (बातूनी) है, अतः 3 बनाम 1 नियम से (B) ही उत्तर होगा!',
        },
      },
    ],
    examTraps: [
      {
        id: 'eng29-trap1',
        trap: {
          en: 'Thinking "Prodigal" means "talented / prodigy".',
          hi: '"Prodigal" शब्द को "Prodigy (प्रतिभाशाली)" समझ लेना।',
        },
        correction: {
          en: '"Prodigy" = talented genius, whereas "Prodigal" = recklessly wasteful / extravagant with money (antonym: Frugal / Thrifty)!',
          hi: '"Prodigy" का अर्थ प्रतिभाशाली होता है, जबकि "Prodigal" का अर्थ फिजूलखर्च (Extravagant) होता है जिसका विलोम Frugal है!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'Loquacious/Garrulous ↔ Taciturn/Laconic. Ephemeral ↔ Eternal. Frugal ↔ Prodigal. Stoic = indifferent to pleasure/pain.',
        hi: 'Loquacious ↔ Taciturn। Ephemeral (क्षणिक) ↔ Eternal (शाश्वत)। Frugal (मितव्ययी) ↔ Prodigal (फिजूलखर्च)।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Vocab, Roots & OWS (12M)', hi: 'शब्दावली और रूट वर्ड्स (12 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Roots & OWS', hi: 'इंडेक्स 1: रूट वर्ड्स और OWS' },
          branches: [
            {
              id: 'eng29-b1',
              title: { en: 'High-Frequency Pairs', hi: 'उच्च-आवृत्ति शब्द युग्म' },
              keyPoints: [
                { en: 'Loquacious ↔ Taciturn | Frugal ↔ Prodigal', hi: 'Loquacious ↔ Taciturn | Frugal ↔ Prodigal' },
                { en: 'Panacea: cure-all | Stoic: indifferent to pain', hi: 'Panacea: रामबाण | Stoic: समदर्शी' },
              ],
              subFormula: 'Stationary (still) vs Stationery (pen)',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-eng29-1',
        category: { en: 'Vocabulary Roots', hi: 'शब्दावली मूल' },
        title: { en: 'Mankind & Speech Root Cluster', hi: 'मानव और वाणी मूल शब्द समूह' },
        expression: 'Phil (Love) + Anthrop (Man) = Philanthropist  |  Mis (Hate) + Anthrop = Misanthrope',
        variables: { en: 'Gyn = Woman; Gam = Marriage; Loqu = Speak', hi: 'Gyn = स्त्री; Gam = विवाह; Loqu = बोलना' },
        examTip: {
          en: 'Use root prefixes (Phil = love, Mis = hate, Eu = good, Mal = bad) to decode unfamiliar options.',
          hi: 'उपसर्ग (Phil = प्रेम, Mis = घृणा, Bene = अच्छा, Mal = बुरा) से अनजाने शब्दों का अर्थ तुरंत निकलता है।',
        },
      },
    ],
  },

  // ==================== ENG 30: IDIOMS & PHRASES, PHRASAL VERBS, PARA-JUMBLES & READING COMPREHENSION ====================
  {
    id: 'eng-idioms-rc-parajumble',
    subjectId: 'english',
    number: '30',
    title: {
      en: 'Idioms & Phrases, Phrasal Verbs, Sentence Rearrangement (Para-Jumbles) & Reading Comprehension',
      hi: 'मुहावरे और लोकोक्तियाँ (Idioms), फ्रेज़ल वर्ब्स, वाक्य पुनर्व्यवस्था और गद्यांश बोध (RC)',
    },
    priorityTier: 3,
    expectedQuestions: 2,
    expectedMarks: 8,
    estimatedHours: 2,
    visualizerType: 'venn_probability_2d',
    subtopics: [
      {
        id: 'eng30-s1',
        title: {
          en: '30.1 Top 25 NIMCET Idioms, Phrasal Verbs & Para-Jumble Mandatory Pair Technique',
          hi: '30.1 शीर्ष 25 NIMCET मुहावरे (Idioms), फ्रेज़ल वर्ब्स और पैरा-जंबल ट्रिक्स',
        },
        detailedTheory: {
          en: 'Most Repeated NIMCET Idioms: (1) Once in a blue moon = very rarely. (2) Beat around the bush = avoid the main topic. (3) Burn the midnight oil = work/study late into the night. (4) Spill the beans / Let the cat out of the bag = reveal a secret unintentionally. (5) Under the weather = feeling slightly ill. (6) Bite the bullet = face a difficult situation bravely. (7) Bury the hatchet = end a quarrel and make peace. (8) A white elephant = an expensive but useless possession. (9) Sit on the fence = remain neutral/undecided. (10) Call it a day = stop working for the day. (11) At the eleventh hour = at the very last moment. (12) Through thick and thin = under all circumstances. Key Phrasal Verbs: Call off = cancel; Put off = postpone; Put up with = tolerate; Look into = investigate; Look after = take care of; Give in = surrender; Give up = quit; Break down = stop functioning / lose emotional control; Turn down = reject. Para-Jumbles (P, Q, R, S): Never read all 24 permutations! Instead: (a) Identify the independent opening sentence (introduces a noun/topic, never starts with pronouns "He/It/They/This" or conjunctions "However/Therefore"), and (b) Find one MANDATORY PAIR (e.g. "Noun → Pronoun", "Full Name → Surname", or "Cause → Therefore") and match it in the 4 options in 10 seconds!',
          hi: 'सर्वाधिक पूछे जाने वाले NIMCET मुहावरे: (1) Once in a blue moon = ईद का चाँद (बहुत दुर्लभ)। (2) Beat around the bush = मुख्य बात को घुमा-फिराकर कहना। (3) Burn the midnight oil = देर रात तक कड़ी मेहनत करना। (4) Spill the beans = रहस्य उजागर करना। (5) Under the weather = अस्वस्थ महसूस करना। (6) Bury the hatchet = पुरानी दुश्मनी भुलाकर शांति स्थापित करना। (7) A white elephant = बहुत महँगी परंतु अनुपयोगी वस्तु। (8) At the eleventh hour = अंतिम क्षण में। प्रमुख फ्रेज़ल वर्ब्स: Call off = रद्द करना (Cancel); Put off = स्थगित करना (Postpone); Put up with = सहन करना (Tolerate); Look into = जांच करना (Investigate); Turn down = अस्वीकार करना (Reject)। पैरा-जंबल (PQRS) शॉर्टकट: स्वतंत्र प्रारंभिक वाक्य (जिसमें संज्ञा का परिचय हो) और एक अनिवार्य जोड़ा (Mandatory Pair जैसे संज्ञा → सर्वनाम) ढूंढकर 10 सेकंड में विकल्प चुनें!',
        },
        keyRules: [
          {
            en: 'In Reading Comprehension (RC), always read the 3–4 questions FIRST before reading the passage so you scan directly for the keywords!',
            hi: 'गद्यांश (Reading Comprehension) में हमेशा पहले प्रश्नों को पढ़ें और फिर कीवर्ड्स के लिए गद्यांश को स्कैन करें!',
          },
        ],
        keyEquations: [
          'Call off = Cancel  |  Put off = Postpone  |  Put up with = Tolerate  |  Turn down = Reject',
          'Para-Jumble: Independent Noun Intro (1st) + Pronoun/Connector Mandatory Pair',
        ],
      },
    ],
    deepConcept: {
      intuition: {
        en: 'Idioms, Phrasal Verbs, and Para-Jumbles are fast-scoring questions at the end of the paper: 20 seconds per question yields +8 marks.',
        hi: 'मुहावरे, फ्रेज़ल वर्ब्स और पैरा-जंबल कम समय में पूरे अंक दिलाने वाले प्रश्न हैं।',
      },
      corePrinciples: [
        {
          heading: {
            en: '1. Phrasal Verb Distinction & Mandatory Pair Elimination',
            hi: '1. फ्रेज़ल वर्ब अंतर और पैरा-जंबल अनिवार्य युग्म नियम',
          },
          explanation: {
            en: 'Distinguish "Call off" (cancel) vs "Put off" (postpone) vs "Put out" (extinguish a fire). In Para-Jumbles, link Full Noun → Pronoun ("The Prime Minister... He...").',
            hi: '"Call off" (रद्द करना), "Put off" (टालना/स्थगित करना) और "Put out" (आग बुझाना) का अंतर याद रखें।',
          },
          mathematicalForm: 'Put off = Postpone   |   Call off = Cancel   |   Put out = Extinguish',
        },
      ],
      realWorldScenario: {
        domain: {
          en: 'Corporate Communication & Technical Reading',
          hi: 'कॉर्पोरेट संवाद और तकनीकी पठन',
        },
        title: {
          en: 'Cohesion & Discourse Markers in Technical Writing',
          hi: 'तकनीकी लेखन में वाक्य संयोजन',
        },
        howItWorks: {
          en: 'Discourse markers ("Consequently", "Moreover", "Nevertheless") dictate logical flow across paragraphs.',
          hi: 'संयोजक शब्द ("Consequently", "However") वाक्यों के तार्किक क्रम को निर्धारित करते हैं।',
        },
        practicalExample: {
          en: '"The meeting was called off" = The meeting was cancelled.',
          hi: '"The meeting was called off" का अर्थ है बैठक रद्द कर दी गई।',
        },
      },
    },
    workedExamples: [
      {
        id: 'eng30-ex1',
        difficulty: 'NIMCET Standard',
        title: {
          en: 'Idiom & Phrasal Verb Meaning',
          hi: 'मुहावरे और फ्रेज़ल वर्ब का सही अर्थ चुनना',
        },
        problem: {
          en: '(a) What does the idiom "To bury the hatchet" mean? (b) Replace the underlined verb with a phrasal verb: "The match was postponed due to heavy rain."',
          hi: '(a) मुहावरे "To bury the hatchet" का अर्थ क्या है? (b) रेखांकित शब्द के लिए सही फ्रेज़ल वर्ब चुनें: "The match was postponed due to heavy rain."',
        },
        stepByStep: {
          en: 'Part (a): "To bury the hatchet" means to end an old hostility/conflict and make peace.\nPart (b): "Postponed" = "put off" (whereas "cancelled" = "called off").',
          hi: 'भाग (a): "To bury the hatchet" का अर्थ पुरानी दुश्मनी समाप्त कर मित्रता करना है।\nभाग (b): "Postponed (स्थगित करना)" के लिए "put off" आता है (जबकि "cancelled" के लिए "called off")।',
        },
        shortcut: {
          en: 'Put off = Postpone (both start with P!). Call off = Cancel (both start with C!).',
          hi: 'ट्रिक: Put off = Postpone (दोनों P से शुरू होते हैं!) और Call off = Cancel (दोनों C से शुरू होते हैं!)।',
        },
      },
    ],
    examTraps: [
      {
        id: 'eng30-trap1',
        trap: {
          en: 'Choosing the literal word-for-word meaning of an idiom (e.g., choosing "a white-colored elephant" for "a white elephant").',
          hi: 'मुहावरे (Idiom) का शाब्दिक अर्थ वाला विकल्प चुन लेना।',
        },
        correction: {
          en: 'Idioms NEVER mean their literal words—always eliminate any option that repeats the literal words of the idiom!',
          hi: 'मुहावरे का अर्थ कभी भी शाब्दिक नहीं होता—जो विकल्प मुहावरे के शब्दों को शाब्दिक रूप से दोहराए, उसे तुरंत काट दें!',
        },
      },
    ],
    shortSummaryNotes: [
      {
        en: 'Put off = Postpone (P=P); Call off = Cancel (C=C); Put up with = Tolerate; Bury the hatchet = Make peace.',
        hi: 'Put off = Postpone (P=P); Call off = Cancel (C=C); Put up with = सहन करना; Bury the hatchet = शांति करना।',
      },
    ],
    mindMap: {
      rootTitle: { en: 'Idioms, Phrasals & RC (8M)', hi: 'मुहावरे, फ्रेज़ल वर्ब्स और RC (8 अंक)' },
      indexTabs: [
        {
          tabName: { en: 'Index 1: Idioms & Phrasals', hi: 'इंडेक्स 1: मुहावरे और फ्रेज़ल वर्ब्स' },
          branches: [
            {
              id: 'eng30-b1',
              title: { en: 'High-Yield Phrasal Verbs', hi: 'प्रमुख फ्रेज़ल वर्ब्स' },
              keyPoints: [
                { en: 'Put off = Postpone | Call off = Cancel', hi: 'Put off = स्थगित करना | Call off = रद्द करना' },
                { en: 'Put up with = Tolerate | Look into = Investigate', hi: 'Put up with = सहन करना | Look into = जांच करना' },
              ],
              subFormula: 'P = P (Put off = Postpone), C = C (Call off = Cancel)',
            },
          ],
        },
      ],
    },
    formulas: [
      {
        id: 'f-eng30-1',
        category: { en: 'Phrasal Verbs', hi: 'फ्रेज़ल वर्ब्स' },
        title: { en: 'Mnemonic for Put Off vs Call Off', hi: 'Put Off बनाम Call Off की ट्रिक' },
        expression: 'Put off = Postpone (P ↔ P)  |  Call off = Cancel (C ↔ C)  |  Put out = Extinguish',
        variables: { en: 'Look into = Investigate; Turn down = Reject', hi: 'Look into = जांच करना; Turn down = अस्वीकार करना' },
        examTip: {
          en: 'Match first letters: P for Put off = P for Postpone; C for Call off = C for Cancel!',
          hi: 'प्रथम अक्षर मिलाएं: P = Put off = Postpone; C = Call off = Cancel!',
        },
      },
    ],
  },
];

export const OTHER_SUBJECT_CHAPTERS: Chapter[] = RAW_OTHER_CHAPTERS;

export const ALL_CHAPTERS: Chapter[] = [
  ...MATH_CHAPTERS,
  ...OTHER_SUBJECT_CHAPTERS,
];
