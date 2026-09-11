/* ============================================================
   Governance & Policy — lecture slides, session 1
   Introduction (Dr. Gomez Llata, 11 September 2026)
   ============================================================

   Based on the lecturer's own slides. Note: this is a different
   lesson from LESSTOF['governance-policy/college-1'], which follows
   the book (McCormick ch. 1). This one follows what was covered in
   the lecture hall.

   English version. The structural bits stay as they are on purpose:
   the tab ids (voor, kern, toepassen, checken), the LESSTOF key, the
   group name 'Lecture slides' and the field names begrip/definitie
   are wiring, not text. Translating those breaks the app silently.

   More slides later? New block LESSTOF['governance-policy/slides-2']
   plus a line in SLIDES in vakken.js.
   ============================================================ */

LESSTOF['governance-policy/slides-1'] = [
  {
    id: 'voor', titel: 'Before the lecture',
    blokken: [
      { type: 'leerdoelen', items: [
        'Name the two things politics is about according to this lecture',
        'Explain what makes politics collective, including the four kinds of decision a group takes',
        'Tell power, authority and legitimacy apart and say what each one does',
        'Say what a policy is, including the part everyone forgets',
        'Distinguish state from government, and name the three elements of a nation state',
        'Name the three branches of government',
        'Tell government, governance, public governance and metagovernance apart',
        'For the Netherlands, Germany and Mexico, say where the highest legal authority sits and why that differs per country'
      ]},

      { type: 'uitleg', titel: 'What this lecture is',
        tekst: 'The opening lecture of Governance & Policy, given by **Dr. Gomez Llata** on 11 September. Three parts: the planning for part 1, the learning goals, and the basic concepts.\n\nThe basic concepts are what matters, and they run partly parallel to McCormick chapter 1. But the lecturer adds two concepts that are **not in the book**: public governance and metagovernance. Those can only be found in this lecture.' },

      { type: 'waarschuwing', titel: 'The seven learning goals of the course',
        tekst: 'The slide shows them with a line across the middle. Above the line they concern **bureaucracy**, which is the first half of the semester. Below the line, **policy making**, the second half.',
        punten: [
          '1. Identify the basic features of public organisations',
          '2. Explain the importance of organisation to the functioning of bureaucracies',
          '3. Conceptualise categories of bureaucratic employees, types of bureaucratic agencies, and the major factors shaping their work in different cultural contexts',
          '4. Distinguish public, private and mixed actors in the policy making process',
          '5. Distinguish the different phases of the policy making process',
          '6. Explain the challenges, problems and dilemmas policymakers face in different international contexts',
          '7. Explain how major obstacles and pathologies hinder the ideal of rational policy making and design'
        ] }
    ]
  },

  {
    id: 'kern', titel: 'Core material',
    blokken: [
      { type: 'tekst', titel: '1. What politics is about', toetsstof: true,
        tekst: 'The lecturer gives two things, and they belong together.\n\n**Communicating and reconciling different interests within a social group.** Politics starts from the fact that people do not want the same things.\n\n**Reaching and implementing collective decisions, by force if necessary.** Note that last part. Politics is not just talking until you agree; the possibility of enforcement is built in.\n\nThat second half is exactly what separates politics from a conversation or a negotiation between friends. What comes out is a decision that holds, including for those who were against it.' },

      { type: 'tekst', titel: '2. What makes politics collective', toetsstof: true,
        tekst: 'The answer: **membership of a social group** whose decisions affect its members. The lecturer lists family, school, church, nation and state in one breath. Politics is therefore not reserved for government.\n\nFour kinds of decision such a group takes, and you should be able to list them:',
        punten: [
          'Who is in the group and who is out',
          'How to share resources',
          'How to relate to other groups',
          'What to decide privately and what to decide collectively'
        ] },

      { type: 'uitleg', titel: 'Why the fourth one is the most interesting',
        tekst: 'The first three are decisions taken inside politics. The fourth is about the **boundary** of politics itself: what do we turn into a collective matter, and what do we leave to the individual?\n\nThink of debates about smoking, about what schools should teach, or about surveillance in public space. The real fight there is often not about the substance but about whether government should be involved at all.' },

      { type: 'citaat', titel: 'The definition of politics', toetsstof: true,
        tekst: 'All social activity that leads to the adoption of collective decisions. Political decisions bind the members of the group, including those who took no part in making them.',
        bron: 'Lecture slides, paraphrased' },

      { type: 'tekst', titel: '3. Power, authority and legitimacy', toetsstof: true,
        tekst: 'Three concepts you need to keep apart, and the lecturer deliberately puts them side by side.\n\n**Power** is the capacity to make and enforce political decisions.\n\n**Authority** is the **right** to do so.\n\n**Legitimacy** is the validation of those decisions. A government is legitimate when those subject to its rule recognise and accept its right to make decisions.\n\nThe order makes sense: power says you can, authority says you may, legitimacy says the people agree you may. You can hold power without authority, and authority on paper without legitimacy in practice.' },

      { type: 'slimmer', titel: 'Legitimacy is the concept McCormick does not single out',
        tekst: 'The book covers power and authority at length, but treats legitimacy inside its discussion of authority.\n\nThe lecturer makes it a separate, third concept. So if a question comes up about the difference between the three, that is a **lecture question**, not a book question. Make sure your answer says that legitimacy is about recognition by the governed, not about competence on paper.' },

      { type: 'tekst', titel: '4. What a policy is', toetsstof: true,
        tekst: 'The definition on the slide has three parts, and the middle one is almost always forgotten.\n\nA policy is **a decision, a non-decision, or an intention to make future decisions** in accordance with an overall objective.\n\nThat **non-decision** is not sloppiness. Deciding to do nothing is policy too, and it has consequences. Think of a government that deliberately leaves a problem unregulated. This connects directly to Lukes\u2019 second dimension of power from the book: power is also the capacity to keep something off the agenda.\n\nThe second part of the definition: policy is the **instrument** that turns political, collective decisions into permanent or semi-permanent rules, enforced by government agencies.' },

      { type: 'tekst', titel: '5. State and government', toetsstof: true,
        tekst: 'The lecturer asks it outright: what is the difference between a state and a government? The answer you should be able to give:\n\nA **(nation) state** consists of three elements: **territory, population and government**. The note on the slide puts it more sharply: the state is the political community formed by a territorial population subject to one government.\n\nA **government** is one of those three elements. The definition the lecturer gives: the institutions that make binding decisions for society. They offer **security and predictability** by making laws and decisions that are expected to be fair to everyone.\n\nThe state is therefore the larger whole, and it survives a change of government.' },

      { type: 'tabel', titel: 'The three branches of government', toetsstof: true,
        kop: ['Branch', 'What it does'],
        rijen: [
          ['Executive branch', 'Governing and taking decisions'],
          ['Legislative branch', 'Making law and scrutinising the executive'],
          ['Judiciary branch', 'Administering justice and guarding the constitution']
        ],
        noot: 'These three come back under metagovernance, because the question "who is the highest authority" is precisely about which of the three sits on top.' },

      { type: 'vergelijking', titel: 'Government versus governance', toetsstof: true,
        links: { titel: 'Government',
          tekst: 'All organisations through which we experience **public authority**.',
          punten: [
            'About institutions: who or what exists',
            'The three branches and the organisations around them',
            'Makes binding decisions for society',
            'Offers security and predictability'
          ] },
        rechts: { titel: 'Governance',
          tekst: 'The **process and quality** of ruling and steering.',
          punten: [
            'About the activity: how ruling happens and how well',
            'Requires coordination of a variety of actors',
            'Not exclusive to governments',
            'May involve trade unions, academics and specialists'
          ] } },

      { type: 'tekst', titel: '6. Public governance', toetsstof: true,
        tekst: 'This concept is **not in McCormick** and comes only from this lecture. Learn it separately.\n\nPublic governance is the **relationship** between government, meaning the three branches plus the political parties, and other social actors. The lecturer names two kinds:\n\n**Economic actors:** companies, transnational corporations, business.\n\n**Civil society actors:** NGOs, social movements, trade unions.\n\nThe question the lecturer adds is why these parties relate to each other at all. The answer: to collectively **identify, address and implement policies** for social problems. The examples on the slide: public health issues, climate change, minority rights and infrastructure.\n\nNotice the logic: every one of those is a problem no single party can solve alone. That is why public governance exists.' },

      { type: 'tekst', titel: '7. Metagovernance', toetsstof: true,
        tekst: 'This concept also comes only from the lecture. The description is short and a little cryptic: **the power of governing governance**, in other words the governing of governing.\n\nThe lecturer gives one practical clue: metagovernance is usually placed **at the highest end of authority**. Hence the question he then asks per country: who is the highest authority in legal terms, and which institution best represents metagovernance?\n\nThe trick in that question is that the answer is not automatically the head of state or the head of government. You have to look at the **constitution**, and each country gives a different answer.' },

      { type: 'tekst', titel: '8. The Netherlands as an example', toetsstof: true,
        tekst: 'The lecturer works through the Netherlands to illustrate government versus governance.\n\n**Government:** the executive is the prime minister and cabinet, on the slide **Rob Jetten**. The legislature is the Dutch parliament. The judiciary consists of judges and police.\n\n**Governance:** on top of that come economic actors and civil society actors, to produce, implement and enforce public policy.\n\nThen the metagovernance question: who is the highest authority in legal terms? The head of government, the prime minister? Or the head of state, the king? The answer the lecturer gives is that **the Dutch political system is a constitutional monarchy**.' },

      { type: 'vergelijking', titel: 'Germany and Mexico', toetsstof: true,
        links: { titel: 'Germany',
          tekst: 'A **parliamentary federal republic**.',
          punten: [
            'Head of government: the Federal Chancellor',
            'Head of state: the Federal President',
            'Reviewing the constitution produces three candidates: the Federal Constitutional Court, the Federal Chancellor and the Federal Parliament',
            'So the answer is not one person but an interplay, with a strong role for the constitutional court'
          ] },
        rechts: { titel: 'Mexico',
          tekst: 'A **presidential federal republic**.',
          punten: [
            'Head of government: the President',
            'Head of state: also the President, since the two coincide',
            'Yet reviewing the Mexican constitution produces the Supreme Court of Justice as highest legal authority',
            'The highest political office is therefore not automatically the highest legal authority'
          ] } },

      { type: 'slimmer', titel: 'The point of the three countries',
        tekst: 'Three countries, three systems, three different answers. That is exactly why the lecturer puts them side by side.\n\nIn the Netherlands there is a king as head of state next to a prime minister as head of government. In Germany those two are separate as well, but the constitution points to the constitutional court. In Mexico head of state and head of government are the same person, and **still** the highest legal authority sits with the Supreme Court.\n\nThe lesson: **you find metagovernance by reading the constitution, not by looking at who seems most powerful.** That is the difference between power and authority from point 3, applied to a country.' },

      { type: 'citaat', titel: 'How the lecture closes', toetsstof: true,
        tekst: 'Foucault describes power not as a possession but as an action: an action upon an action, on existing actions or on ones that may arise now or later. Power incites, seduces, makes things easier or harder, and in the extreme constrains or forbids. But it is always a way of acting upon a subject who is capable of acting.',
        bron: 'Michel Foucault, The Subject and Power \u00b7 paraphrased' },

      { type: 'uitleg', titel: 'Why that quote is there',
        tekst: 'It is not decoration at the end. Foucault shifts the question from *who has power* to *how does power work*.\n\nIn his picture nobody owns power like an object; power exists in what people do to each other. And the sharpest point: power presupposes that the person it acts on **can act**. Tying someone up completely is not power but violence; power works precisely on someone who has choices.\n\nThat connects to Lukes\u2019 three dimensions of power from the book, especially the third: shaping what people want is more effective than defeating what they want.' },

      { type: 'begrippen', items: [
        { begrip: 'Politics', definitie: 'all social activity leading to the adoption of collective decisions; those decisions bind the group\u2019s members, including those not involved in making them' },
        { begrip: 'Power', definitie: 'the capacity to make and enforce political decisions' },
        { begrip: 'Authority', definitie: 'the right to make and enforce political decisions' },
        { begrip: 'Legitimacy', definitie: 'the validation of political decisions: those subject to the rule recognise and accept the government\u2019s right to decide' },
        { begrip: 'Policy', definitie: 'a decision, a non-decision or an intention to make future decisions in line with an overall objective; the instrument turning collective decisions into enforced rules' },
        { begrip: '(Nation) state', definitie: 'the political community formed by a territorial population subject to one government; three elements: territory, population, government' },
        { begrip: 'Government', definitie: 'the institutions that make binding decisions for society; all organisations through which we experience public authority' },
        { begrip: 'Governance', definitie: 'the process and quality of ruling and steering; requires coordination of actors and is not exclusive to governments' },
        { begrip: 'Public governance', definitie: 'the relationship between government and economic and civil society actors, to collectively identify and address social problems' },
        { begrip: 'Metagovernance', definitie: 'the power of governing governance; usually placed at the highest end of authority and found by reading the constitution' },
        { begrip: 'Constitutional monarchy', definitie: 'a form of state in which a monarch is head of state within the limits of a constitution, with a head of government leading the executive' },
        { begrip: 'Parliamentary federal republic', definitie: 'a republic with constituent states in which the government depends on parliament, with head of state and head of government separated' },
        { begrip: 'Presidential federal republic', definitie: 'a republic with constituent states in which head of state and head of government coincide in one elected president' }
      ]}
    ]
  },

  {
    id: 'toepassen', titel: 'Applying it',
    blokken: [
      { type: 'stappen', titel: 'How to answer a metagovernance question about a country',
        items: [
          { titel: '1. Name the form of state', tekst: 'Monarchy or republic, unitary or federal, parliamentary or presidential. That determines which offices exist.' },
          { titel: '2. Separate head of state and head of government', tekst: 'Are those two people or one? Two in the Netherlands and Germany, one in Mexico.' },
          { titel: '3. Go to the constitution, not to the newspaper', tekst: 'The question asks who is the highest authority in legal terms. That is different from who has the most influence.' },
          { titel: '4. Look at the constitutional court', tekst: 'In Germany and Mexico the court comes forward. A court that can review legislation stands legally above both legislature and executive.' },
          { titel: '5. Tie it back to power, authority and legitimacy', tekst: 'Say who holds the power, who holds the authority, and where the legitimacy comes from. That is the difference between half an answer and a complete one.' }
        ] },

      { type: 'oefening', id: 'gp-s1-oef-1', niveau: 'basis',
        vraag: 'Explain the difference between power, authority and legitimacy, and give a situation in which each one makes the difference.',
        antwoord: 'Power is the capacity to make and enforce political decisions. Authority is the right to do so. Legitimacy is the validation of those decisions: a government is legitimate when those subject to its rule recognise and accept its right to decide.\n\nThe three can occur independently of each other, and that is where you see what they mean. An occupying force can hold power without authority: it can enforce decisions, but the population recognises no right to do so. A government in exile can hold authority without power: its claim is recognised, but it can enforce nothing. And a government can hold both power and authority on paper while legitimacy drains away, for instance after an election whose result a large share of the population refuses to accept. The competences still exist, but more and more coercion is needed to achieve the same result.\n\nThat last case is exactly why legitimacy matters in practice. Ruling on the basis of recognition is cheap, because people comply of their own accord. Ruling on the basis of coercion is expensive and fragile. For a safety and security professional this is not an abstraction: enforcement only works at scale when the rules are seen as legitimate.' },

      { type: 'oefening', id: 'gp-s1-oef-2', niveau: 'basis',
        vraag: 'The definition of policy also mentions the non-decision. Explain why that is in there and give an example.',
        antwoord: 'The non-decision is in the definition because doing nothing is also a choice with consequences, and because it is often a deliberate one. If policy consisted only of what a government actively decides, you would miss precisely what is often most telling: what it stays away from.\n\nAn example is a government that leaves a known problem unregulated for years, say a sector where abuses are documented but no legislation follows. No decision has been taken, yet the outcome is steered all the same: the existing situation persists, which favours the parties who benefit from it.\n\nThis connects directly to Lukes\u2019 second dimension of power from the book. There, power is precisely the capacity to keep issues off the agenda so that no decision has to be taken. The definition of policy from the lecture and that dimension of power describe the same phenomenon from two sides: one from what policy is, the other from who holds the power.\n\nA complete answer also includes the third part of the definition: an intention to make future decisions in line with an overall objective. Even an announced course that has not yet been implemented already shapes how others behave.' },

      { type: 'oefening', id: 'gp-s1-oef-3', niveau: 'gevorderd',
        vraag: 'Why is the answer to the metagovernance question in Mexico the Supreme Court, even though the President there is both head of state and head of government? Use the distinction between power and authority.',
        antwoord: 'At first glance the Mexican President looks like the obvious candidate. He is head of government and head of state, in a presidential system where the executive is strong, and he is directly elected. In terms of visible political power there is nobody above him.\n\nBut the lecturer\u2019s question explicitly asks about the highest authority in legal terms, and that is a question of authority, not of power. Reviewing the Mexican constitution brings out the Supreme Court of Justice, because that is the body which can determine whether the acts of the President and of the legislature fall within the constitution. Whoever gets to review the rules that bind everyone else stands legally at the top, even if they are politically less conspicuous.\n\nThat is the heart of metagovernance: it is not governing but the governing of governing. The court makes no policy and implements none, but sets the limits within which others do. That is precisely what the lecturer means by saying metagovernance is usually placed at the highest end of authority.\n\nGermany shows the same pattern with the Federal Constitutional Court alongside it, while the Netherlands as a constitutional monarchy sits differently again, with a king as head of state who lacks the political power of a president. Three countries, three answers, and in none of them is the answer simply the most powerful person. That is why the lecturer puts three side by side instead of one.' },

      { type: 'oefening', id: 'gp-s1-oef-4', niveau: 'gevorderd',
        vraag: 'A municipality wants to reduce residential burglary. Analyse this as a public governance problem, and explain what goes wrong if you treat it purely as a matter of government.',
        antwoord: 'As a government problem the answer comes quickly: the municipality sets policy, the police enforce it, the courts punish. Three branches, each with its role, done. The trouble is that this chain only kicks in once a burglary has happened, and that the institutions themselves control only a small share of the circumstances under which burglaries occur.\n\nAs a public governance problem it looks different. The relationship between government and two other kinds of actor comes into view. Economic actors: housing associations that decide on locks and lighting, insurers that set requirements and steer behaviour through premiums, builders and installers, shops selling security equipment. And civil society actors: residents\u2019 associations, neighbourhood initiatives, watch schemes, welfare organisations working with young people.\n\nThe reason those parties relate to each other is exactly what the lecturer describes: to collectively identify, address and implement policy for a social problem. None of them can do it alone. The municipality cannot replace locks in private homes, the housing association cannot enforce the law, the neighbourhood cannot change insurance conditions.\n\nSo two things go wrong in the pure government approach. You intervene at the wrong moment, after the fact rather than before it. And you use only the instruments government itself owns, while the most effective instruments, better locks and social control, sit in other hands. Coordination here is not a friendly addition but the core of the solution, and that is precisely why governance is needed as a concept alongside government.' }
    ]
  },

  {
    id: 'checken', titel: 'Check yourself',
    blokken: [
      { type: 'quiz', titel: 'Check yourself on lecture 1', vragen: [
        { vraag: 'What is politics about according to this lecture?',
          opties: ['Winning elections', 'Communicating and reconciling interests, plus reaching and implementing collective decisions, by force if necessary', 'Making laws', 'Running the state'],
          juist: 1,
          uitleg: 'Note the tail: **by force if necessary**. That is what separates politics from an ordinary negotiation.' },
        { vraag: 'What makes politics collective?',
          opties: ['That there is a vote', 'Membership of a social group whose decisions affect its members', 'That government is involved', 'That there are several parties'],
          juist: 1,
          uitleg: 'The lecturer lists family, school, church, nation and state in one breath. Politics is not reserved for government.' },
        { vraag: 'What is legitimacy?',
          opties: ['The capacity to enforce decisions', 'The right to make decisions', 'The validation of decisions: the governed recognise and accept the government\u2019s right to decide', 'A government obeying its own laws'],
          juist: 2,
          uitleg: 'Power is being able, authority is being allowed, legitimacy is the people agreeing that you are allowed.' },
        { vraag: 'Which part of the definition of policy is most often forgotten?',
          opties: ['The decision', 'The non-decision', 'The overall objective', 'The enforcement'],
          juist: 1,
          uitleg: 'Deciding to do nothing is policy too. This connects to Lukes\u2019 second dimension of power: keeping something off the agenda.' },
        { vraag: 'Which three elements make up a nation state?',
          opties: ['Constitution, parliament and court', 'Territory, population and government', 'People, language and history', 'Executive, legislative and judiciary'],
          juist: 1,
          uitleg: 'Government is one of the three. That is why the state survives a change of government.' },
        { vraag: 'What is the difference between government and governance according to this lecture?',
          opties: ['Government is national, governance international', 'Government is all organisations through which we experience public authority; governance is the process and quality of ruling', 'Government is democratic, governance technocratic', 'Governance is a modern word for government'],
          juist: 1,
          uitleg: 'And governance is **not exclusive to governments**: trade unions, academics and specialists may be part of it.' },
        { vraag: 'What is public governance?',
          opties: ['Government that is open to the public', 'The relationship between government and economic and civil society actors, to collectively address social problems', 'The running of state-owned companies', 'Policy made by citizens'],
          juist: 1,
          uitleg: 'This concept is **not in McCormick** and comes only from the lecture. The examples: public health, climate, minority rights, infrastructure.' },
        { vraag: 'What is metagovernance?',
          opties: ['Governance at European level', 'The power of governing governance, usually placed at the highest end of authority', 'Governing without a government', 'The theory behind governance'],
          juist: 1,
          uitleg: 'The governing of governing. You find it by reading the constitution, not by looking at who seems most powerful.' },
        { vraag: 'Which institution emerges in Mexico as the highest legal authority?',
          opties: ['The President', 'The federal parliament', 'The Supreme Court of Justice', 'The state governors'],
          juist: 2,
          uitleg: 'Even though the President there is both head of state and head of government. The highest political office is not automatically the highest legal authority.' },
        { vraag: 'What is Germany\u2019s form of state according to the slides?',
          opties: ['Constitutional monarchy', 'Parliamentary federal republic', 'Presidential federal republic', 'Parliamentary unitary state'],
          juist: 1,
          uitleg: 'With a Federal Chancellor as head of government and a Federal President as head of state, and the Federal Constitutional Court as a strong candidate for metagovernance.' },
        { vraag: 'What is the core of Foucault\u2019s conception of power that closes the lecture?',
          opties: ['Power is a possession of the state', 'Power is an action upon an action, working on people precisely because they are capable of acting', 'Power ultimately rests on violence', 'Power derives from legitimacy'],
          juist: 1,
          uitleg: 'Nobody owns power as an object. And power presupposes freedom to act: tying someone up completely is not power but violence.' }
      ]},

      { type: 'bronnen', items: [
        { apa: 'Gomez Llata Cazares, E. (2026). Governance & Policy, Lecture 1: Introduction [Lecture slides, 11 September]. The Hague University of Applied Sciences.' },
        { apa: 'Foucault, M. (1982). The subject and power. Critical Inquiry, 8(4), 777-795.' },
        { apa: 'McCormick, J., Hague, R., & Harrop, M. (2022). Comparative government and politics: An introduction (12th ed., Ch. 1). Bloomsbury Academic.' }
      ]},

      { type: 'preview', titel: 'Next time', vakId: 'governance-policy', lesId: 'slides-1',
        tekst: 'Session 2 on 18 September: Democracy and bureaucracy, on norms and values in building governance practices. Legitimacy and public governance from this lecture come straight back.',
        punten: ['Compulsory: Buckwalter & Balfour, chapter 2 of Quality of Governance', 'Available for download from the HHS library'] }
    ]
  }
];
