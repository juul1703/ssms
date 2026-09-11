/* ============================================================
   Society & Politics — lecture slides, session 1
   Introduction and sociological perspectives (Dr. Abanes)
   ============================================================

   Based on the lecturer's own Lecture 1 slides, filled out with
   Macionis & Plummer (2012), chapters 1, 2 and 4.

   Moved out of ssms-inhoud.js into its own file so it can be
   checked on its own. English version; the structural bits stay as
   they are on purpose: the LESSTOF key, the tab ids, the group name
   'Lecture slides' and the field names begrip/definitie are wiring,
   not text.
   ============================================================ */

LESSTOF['society-politics/slides-1'] = [
  {
    id: 'voor', titel: 'Before the lecture',
    blokken: [
      { type: 'leerdoelen', items: [
        'Explain what sociology is and why it is a way of looking rather than a body of facts',
        'Name Lenski\u2019s five types of society and say what changes at each step',
        'Tell Berger\u2019s invitation to sociology and Mills\u2019 sociological imagination apart, and apply both',
        'Point out the difference between a personal trouble and a public issue in a concrete case',
        'Describe the three classical perspectives (functionalism, conflict theory, symbolic interactionism), including the standard criticism of each',
        'Say what contemporary perspectives add, and what glocalisation means'
      ]},

      { type: 'uitleg', titel: 'What this lecture covers',
        tekst: 'This is the opening lecture of Society & Politics. The course has two halves and you should not mix them up.\n\nThe **first half of the semester is sociology** (Dr. Abanes, textbook Macionis & Plummer). The **second half is political science** (Dr. Trigo de Sousa, textbook McCormick, Hague & Harrop). The mid-term covers the sociology only.\n\nThis lecture lays the foundation: what sociology is, which types of society exist, how you learn to look sociologically, and through which three lenses you do it.' },

      { type: 'waarschuwing', titel: 'The date to note now',
        tekst: 'The slides put the mid-term on **13 November 2026**, the same date as in the module manual. The course carries 6 ECTS, mid-term and end-term count 50% each, and you need at least a 5.5 for both.' },

      { type: 'tabel', titel: 'The reading schedule for the first half', toetsstof: true,
        kop: ['Week', 'Topic', 'Macionis & Plummer'],
        rijen: [
          ['1', 'Introduction and sociological perspectives', 'Ch. 1, 2, 4'],
          ['2', 'Social construction of everyday life', 'Ch. 7'],
          ['3', 'Ethnicities and migration (guest lecture)', 'Ch. 11'],
          ['4', 'Culture and social movements', 'Ch. 5, 16'],
          ['5', 'Control and deviance', 'Ch. 17'],
          ['6', 'Groups, organisations and work', 'Ch. 6'],
          ['7', 'Social division and stratification', 'Ch. 8'],
          ['8', 'Risk society, cities and spaces, plus review', 'Ch. 23, 24']
        ],
        noot: 'The slides sometimes give more precise page numbers than the manual. Where they differ, follow the slides: that is what the lecturer examines.' }
    ]
  },

  {
    id: 'kern', titel: 'Core material',
    blokken: [
      { type: 'tekst', titel: '1. What sociology is', toetsstof: true,
        tekst: 'The definition on the slide is short: **sociology is the systematic study of human society**. The word to remember is *systematic*. Everyone has opinions about how people live together; sociology is the attempt to investigate that methodically rather than to have a view on it.\n\nThe lecturer puts four descriptions next to it that all make the same point: sociology is a **form of consciousness**, a **way of thinking**, a **critical way of seeing**, a **perspective**. Four words for one idea: sociology is not a subject but a lens.\n\nThe opening question of the lecture makes that concrete: why are you sitting in this lecture hall today? Your first answer is personal (I want this degree). The sociological answer is about compulsory education, about a labour market that asks for diplomas, about what counts as normal in your surroundings. Same act, different level of explanation.' },

      { type: 'uitleg', titel: 'Why this sits in a safety and security programme',
        tekst: 'The second opening question is: how can sociology make our society safer? The answer runs through the whole course. Crime, radicalisation, distrust of institutions, unequally distributed risk: these are not the sum of individual choices but patterns. If you look only at the individual, you design interventions that act at the wrong level.' },

      { type: 'tekst', titel: '2. Society and Lenski\u2019s typology', toetsstof: true,
        tekst: 'The definition: **a society is people who interact in a defined space and share a culture**. Three elements, then: interaction, space, shared culture.\n\nLenski\u2019s **sociocultural evolution** holds that societies change as their technology changes, and that the pace of change moves along with it: the more technological information is available, the faster it goes. That is immediately why our century feels so restless and an agrarian society did not.' },

      { type: 'tabel', titel: 'Lenski\u2019s five types', toetsstof: true,
        kop: ['Type', 'What it turns on'],
        rijen: [
          ['Hunting & gathering', 'Simple technology'],
          ['Horticultural & pastoral', 'Tools, land and livestock'],
          ['Agrarian', 'Technology and agriculture'],
          ['Industrial', 'Technology and machines'],
          ['Post-industrial', 'Networks, risk and surveillance']
        ],
        noot: 'Note the last row. Networks, risk and surveillance are exactly the three words your programme is about. That is no coincidence: it is the bridge to week 8 on the risk society.' },

      { type: 'tekst', titel: '3. Berger: the invitation to sociology', toetsstof: true,
        tekst: 'Peter Berger describes sociology as **seeing through** things and **looking behind closed doors**. His best-known formulation is **"seeing the general in the particular"**: recognising the pattern in a single concrete case.\n\nFor Berger the excitement of sociology lies in the moment when the familiar suddenly acquires meaning. Something you have walked past a thousand times turns out to be about something.\n\nThe line to know by heart is the **first wisdom of sociology: "things are not what they seem"**. Berger compares it to unwrapping presents: there is always another layer underneath.' },

      { type: 'tekst', titel: '4. Mills: the sociological imagination', toetsstof: true,
        tekst: 'C. Wright Mills calls the **sociological imagination** a quality of mind that lets you see the interplay between the individual and society. The structure of society can feel crushing; this habit of thought gives you a grip on it.\n\nThe diagram on the slide has two axes crossing each other. **Biography** against **history**, and **personal milieu (troubles)** against **public issues**. Where they meet is the sociological imagination.\n\nThe lecturer\u2019s example: one student who cannot pay tuition is a **personal trouble**. Millions of students carrying enormous debt is a **public issue**. The same experience, but at the second level it is no longer bad luck; it is a feature of the system.' },

      { type: 'slimmer', titel: 'How to keep Berger and Mills apart',
        tekst: 'They resemble each other, and that is exactly what an exam question aims at.\n\n**Berger** is about *depth*: looking beneath the surface, seeing the general in the particular. **Mills** is about *scale*: moving from the individual case up to structure and history.\n\nMnemonic: Berger looks down, Mills looks out.' },

      { type: 'tekst', titel: '5. Global village: if the world were 100 people', toetsstof: true,
        tekst: 'The slide scales the world population down to a hundred people, because inequality becomes visible at that scale.\n\n**Demographics:** 61 live in Asia, 13 in Africa, 12 in Europe, 14 in the Americas.\n**Wealth:** 20 people own 80% of world income.\n**Opportunity:** 50 have no secure food supply or steady work, and only 8 reach higher education.\n\nThe sociological question the lecturer attaches is not "how awful" but: **which structural forces produce this distribution and keep it in place?** That is the form of question you have to learn to ask in this course.' },

      { type: 'tekst', titel: '6. Theory and theoretical perspective', toetsstof: true,
        tekst: 'Two definitions that are easily confused and therefore often examined.\n\nA **theory** is "a statement of how and why specific facts are related". Concrete and testable.\n\nA **theoretical perspective** is "a basic image that guides thinking and research". Much broader: it determines which questions you ask at all.\n\nThe textbook case is **Durkheim\u2019s study of suicide**: he links the degree of social integration to the risk, distinguishing altruistic and egoistic forms among others. Why it is cited so often: it ties a social fact to a social cause rather than to an individual one.' },

      { type: 'tabel', titel: 'The three classical perspectives', toetsstof: true,
        kop: ['Functionalism', 'Conflict theory', 'Symbolic interactionism'],
        rijen: [
          ['A world of balance', 'A world of difference', 'A world of meaning'],
          ['Society is a system whose parts work together for stability and solidarity', 'Society consists of groups competing over scarce resources such as work and power', 'Society is the product of everyday interaction between people in a shared reality'],
          ['Durkheim, Spencer, Merton', 'Marx and later conflict theorists', 'Weber and Goffman'],
          ['Macro level', 'Macro level', 'Micro level'],
          ['Criticism: it explains away inequality within society', 'Criticism: it explains away shared values and mutual dependence', 'Criticism: it loses sight of larger structures and context']
        ] },

      { type: 'tekst', titel: '7. Functionalism in detail', toetsstof: true,
        tekst: 'The image is that of a **human body**: organs, meaning parts, keep the whole alive. For **Durkheim** it turns on the social bonds and solidarity that hold society together.\n\n**Structures** are how the parts fit; **functions** are how each part contributes to the whole. That distinction comes from Spencer and runs on through Merton.\n\n**Merton** adds the distinction you must know: **manifest functions** are the intended consequences, **latent functions** the unintended ones, and **dysfunctions** the undesirable ones. A university has knowledge transfer as a manifest function, the forming of friendships and relationships as a latent one, and reproducing inequality between those who can and cannot study as a dysfunction.' },

      { type: 'tekst', titel: '8. Conflict theory in detail', toetsstof: true,
        tekst: 'The image is an **arena of inequality** in which groups compete over scarce resources. That struggle is not a fault in the system but the engine of change.\n\n**Marx**: the history of all hitherto existing society is the history of class struggle. Later conflict theorists broadened that beyond social class to **gender, race and other forms of structured inequality**.\n\nThat "beyond class" matters for the exam: conflict theory is not the same thing as Marxism.' },

      { type: 'tekst', titel: '9. Symbolic interactionism in detail', toetsstof: true,
        tekst: 'This is the only one of the three at the **micro level**. Society is what people do together, sometimes called **social action**.\n\n**Weber**: human action, ideas, beliefs and meanings actively shape society, not only the other way round. That is a direct counter to a purely structural explanation.\n\n**Goffman**: we engage in **presentation of self**, using symbols to project an image of ourselves as if we were on a stage. Clothing, register, a uniform: all props.' },

      { type: 'tekst', titel: '10. Contemporary perspectives', toetsstof: true,
        tekst: 'The three classical perspectives are not the end point. What has been added since the second half of the twentieth century:\n\n**Several perspectives at once**, a multidisciplinary approach rather than a single explanatory model.\n\n**Other positions given a voice**: women, minorities, colonised populations, LGBTQ people, children. The point is not merely "their opinion too", but that from a different position you see different patterns.\n\n**Other voices**: postmodernism, and risk awareness as a theme in its own right.\n\n**Global perspectives**: interconnectedness across borders. And within that, **glocalisation**: the local response to global change. A global trend lands slightly differently everywhere, and that translation is itself the object of study.' },

      { type: 'begrippen', items: [
        { begrip: 'Sociology', definitie: 'the systematic study of human society; a way of thinking and of seeing critically, not a body of facts' },
        { begrip: 'Society', definitie: 'people who interact in a defined space and share a culture' },
        { begrip: 'Sociocultural evolution (Lenski)', definitie: 'societies change as their technology changes; more technological information means a faster pace of change' },
        { begrip: 'Seeing the general in the particular (Berger)', definitie: 'recognising the underlying pattern in a single concrete case' },
        { begrip: 'Sociological imagination (Mills)', definitie: 'the quality of mind that lets you see the interplay between biography and history, between personal troubles and public issues' },
        { begrip: 'Personal trouble versus public issue', definitie: 'the same problem at the individual level versus that problem as a feature of the structure' },
        { begrip: 'Theory', definitie: 'a statement of how and why specific facts are related' },
        { begrip: 'Theoretical perspective', definitie: 'a basic image that guides thinking and research' },
        { begrip: 'Manifest and latent functions', definitie: 'the intended versus the unintended consequences of a social part; undesirable consequences are called dysfunctions' },
        { begrip: 'Presentation of self (Goffman)', definitie: 'using symbols to project an image of yourself, as a performance on a stage' },
        { begrip: 'Glocalisation', definitie: 'the local response to global change' }
      ]}
    ]
  },

  {
    id: 'toepassen', titel: 'Applying it',
    blokken: [
      { type: 'stappen', titel: 'How to analyse a phenomenon sociologically',
        items: [
          { titel: '1. Describe the phenomenon as factually as you can', tekst: 'No explanation yet, only what can be observed. Who does what, where, how often.' },
          { titel: '2. Ask: is this a trouble or an issue?', tekst: 'Are these isolated cases or a pattern repeating across many people? That decides at which level you keep looking.' },
          { titel: '3. See through it (Berger)', tekst: 'What is the obvious explanation, and what lies beneath it? Formulate at least one explanation that is not about individual choice.' },
          { titel: '4. Put on all three lenses', tekst: 'What would a functionalist say this contributes to the whole? Which groups would a conflict theorist say are competing over what? Which meanings do the people involved construct themselves?' },
          { titel: '5. Name the blind spot', tekst: 'Every lens has a standard criticism. Say which one you are using and what it stops you from seeing. That is precisely what separates a good answer from half an answer.' }
        ] },

      { type: 'oefening', id: 'sp-c1-oef-1', niveau: 'basis',
        vraag: 'A municipality finds that young people in one neighbourhood are involved in antisocial behaviour more often than elsewhere. Frame this first as a personal trouble and then as a public issue, and explain what changes.',
        antwoord: 'As a personal trouble: these particular young people make poor choices, lack self-control, or come from families where things go wrong. The explanation sits with the individual and the family, and so does the intervention: conversations, punishment, case-by-case support.\n\nAs a public issue: in this neighbourhood the concentration of antisocial behaviour is structurally higher, and that is connected to features of the neighbourhood itself, such as unemployment, few facilities for young people, poor housing stock, limited routes out, and possibly a strained relationship with the police. The pattern repeats across generations of young people, even as the individuals change.\n\nWhat changes is the level of explanation and with it the point where policy can act. Under the first framing you keep treating cases; under the second you ask why this neighbourhood keeps producing such cases. For a safety and security professional that is the difference between treating symptoms and designing an intervention with a chance of working. This is exactly Mills\u2019 point: the question is not whether individual responsibility exists, but the observation that you cannot explain a recurring pattern by the characteristics of a constantly changing set of individuals.' },

      { type: 'oefening', id: 'sp-c1-oef-2', niveau: 'basis',
        vraag: 'Using Merton\u2019s pair of concepts, explain what manifest function, latent function and dysfunction CCTV in a shopping street can have.',
        antwoord: 'The manifest, that is intended, function is preventing and solving shoplifting and increasing the sense of safety: that is what the cameras were explicitly installed for.\n\nA latent, unintended function might be that shopkeepers get to know each other better because they have to decide about the surveillance together, or that the footage is later used for something it was not meant for, such as traffic research or monitoring crowd levels.\n\nA dysfunction is an undesirable consequence: displacement of crime into side streets without cameras, a sense of distrust among visitors, or a decline in informal supervision because people assume the camera has it covered. That last one is sociologically the most interesting, because the measure then undermines part of the very safety it was supposed to increase.' },

      { type: 'oefening', id: 'sp-c1-oef-3', niveau: 'gevorderd',
        vraag: 'The global village slide states that 20 out of 100 people own 80% of income, and asks which structural forces produce and sustain that distribution. Answer from conflict theory, and then explain what a functionalist would object.',
        antwoord: 'From conflict theory this distribution is not an accidental outcome but the result of competition over scarce resources in which some groups are structurally advantaged. Ownership of capital generates further income, which widens the lead; the rules of trade, taxation and property are set partly by parties with an interest in preserving their position; and access to education, of which the slide says only 8 in 100 reach higher education, acts as a filter that passes the distribution on to the next generation. In the broadened version of conflict theory not only class plays a part but also gender, race and the after-effects of colonisation, which explains why the distribution is geographically so skewed as well.\n\nA functionalist would object that unequal reward serves a function: it motivates people to study long and to take on difficult, important positions, and so keeps the whole running. From that perspective stratification is a mechanism that channels talent to where it yields the most for society.\n\nThe standard criticism of functionalism applies squarely here: it explains inequality away. It accounts for why there is a difference in reward, but not why that difference is so extreme, why it turns out to be so heritable, and why 50 in 100 have no food security or steady work when by its own logic that motivates nobody. The strongest answer uses both lenses and names that limit.' },

      { type: 'oefening', id: 'sp-c1-oef-4', niveau: 'gevorderd',
        vraag: 'Explain why Lenski\u2019s final category, the post-industrial society, is described as "networks, risk and surveillance", and what that means for your field.',
        antwoord: 'For Lenski the character of a society changes with its technology. Among hunter-gatherers, horticulturalists, agrarian and industrial societies the core technology is always about producing goods: tools, land and livestock, agricultural technique, machines. In the post-industrial society the core technology is the processing of information, and at that point what is scarce and valuable shifts from goods to knowledge, connections and access.\n\nThe three words follow from that. Networks, because society organises itself in connections rather than in fixed places and hierarchies. Risk, because the main threats no longer arise from natural scarcity but from our own technology and organisation: they are man-made, large in scale, and not neatly bounded. And surveillance, because a society running on information also steers by information, and therefore develops monitoring of what people do.\n\nFor safety and security this means your field does not study a timeless phenomenon but one specific historical type of society. Managing risk, gathering data and securing networks are precisely the characteristic occupations of this stage. That is also why Lenski\u2019s scheme returns in week 8 on the risk society: the theory you get as background in week 1 turns out at the end to be a description of your own professional practice.' }
    ]
  },

  {
    id: 'checken', titel: 'Check yourself',
    blokken: [
      { type: 'quiz', titel: 'Check yourself on lecture 1', vragen: [
        { vraag: 'What is the definition of sociology on the slide?',
          opties: ['The study of individual behaviour', 'The systematic study of human society', 'The study of political systems', 'The study of cultural practices'],
          juist: 1,
          uitleg: 'The word **systematic** is the hinge: it separates sociology from ordinary opinions about how people live together.' },
        { vraag: 'What does Lenski claim about sociocultural evolution?',
          opties: ['Societies always pass through the same five stages at the same speed', 'Societies change as their technology changes, and faster as more technological information becomes available', 'Societies change mainly through war', 'Societies change through population growth'],
          juist: 1,
          uitleg: 'Technology is the engine for Lenski, and the pace of change moves with the amount of technological information available.' },
        { vraag: 'What is the first wisdom of sociology according to Berger?',
          opties: ['Everything is connected to everything', '"Things are not what they seem"', 'Man is a social animal', 'Structure comes before action'],
          juist: 1,
          uitleg: 'Berger compares sociology to unwrapping presents: under every layer there is another one.' },
        { vraag: 'Someone loses their job in a region where one in five is unemployed. What does Mills call that?',
          opties: ['Only a personal trouble', 'A public issue', 'A latent function', 'Social action'],
          juist: 1,
          uitleg: 'At that scale you no longer explain it by the characteristics of the person; it has become a feature of the structure.' },
        { vraag: 'Which perspective operates at the micro level?',
          opties: ['Functionalism', 'Conflict theory', 'Symbolic interactionism', 'All three'],
          juist: 2,
          uitleg: 'Weber and Goffman look at everyday interaction and meaning-making; the other two look at society as a whole.' },
        { vraag: 'What is a latent function?',
          opties: ['An undesirable consequence', 'An intended consequence', 'An unintended consequence', 'A consequence that never occurs'],
          juist: 2,
          uitleg: 'Unintended is not the same as undesirable: the latter is what Merton calls a **dysfunction**.' },
        { vraag: 'What is the standard criticism of functionalism?',
          opties: ['It loses sight of larger structures', 'It explains away inequality within society', 'It explains away shared values', 'It is not empirically testable'],
          juist: 1,
          uitleg: 'If you describe society as a cooperating whole, you struggle with the question of whom that whole actually works for.' },
        { vraag: 'What does glocalisation mean?',
          opties: ['The worldwide spread of a single culture', 'The local response to global change', 'The disappearance of national borders', 'Local politics becoming global'],
          juist: 1,
          uitleg: 'A global trend lands slightly differently everywhere, and that translation is itself the object of study.' },
        { vraag: 'Why is Durkheim\u2019s study of suicide mentioned in this lecture?',
          opties: ['Because it was the first sociological study ever', 'As an example of a theory tying a social fact to a social cause', 'Because it refuted functionalism', 'As an example of symbolic interactionism'],
          juist: 1,
          uitleg: 'He links social integration to the risk instead of locating the explanation in the individual. That is what a theory does in the sociological sense.' }
      ]},

      { type: 'bronnen', items: [
        { apa: 'Abanes, M. S. (2026). Society & Politics, Lecture 1 [Lecture slides]. The Hague University of Applied Sciences.' },
        { apa: 'Macionis, J. J., & Plummer, K. (2012). Sociology: A global introduction (5th ed., Ch. 1, 2, 4). Pearson Education.' }
      ]},

      { type: 'preview', titel: 'Next time', vakId: 'society-politics', lesId: 'slides-1',
        tekst: 'Chapter 7: the social construction of everyday life. That is where today\u2019s micro level gets worked out: how the reality that feels so self-evident is made in interaction.',
        punten: ['Read Macionis & Plummer chapter 7', 'The assignment on applying sociological perspectives belongs to that week'] }
    ]
  }
];
