/* ============================================================
   Governance & Policy, sessie 3
   Executives and bureaucracies (De Sousa, 25 september 2026)
   McCormick, Hague & Harrop, chapter 8 (Executives) en chapter 10
   (Bureaucracies), plus lecture 3.
   ============================================================

   Nieuw in v101. Twee kernstof-tabs: kern (hoofdstuk 8) en kern2
   (hoofdstuk 10), elk met de eigen hoofdsecties van het hoofdstuk
   als kopjes. Lecture 3 zit erin als "From the lecture"-kaders
   achteraan de secties. Julie heeft bij dit college geen
   aantekeningen gemaakt; haar aantekeningen van lecture 1 (head of
   state en head of government in Nederland, trias politica) zijn
   gebruikt waar ze hier horen. De recap staat in recap-governance.js.
   Engels; bedrading (LESSTOF-sleutel, tab-ids, veldnamen) blijft
   Nederlands.
   ============================================================ */

LESSTOF['governance-policy/college-3'] = [
  {
    "id": "voor",
    "titel": "Before you start",
    "blokken": [
      {
        "type": "leerdoelen",
        "items": [
          "Explain what a political executive is, what it does, and how it differs from the bureaucracy",
          "Distinguish head of state from head of government, and the dignified from the efficient parts of a constitution (Bagehot)",
          "Compare presidential, parliamentary, semi-presidential and authoritarian executives on election, dismissal, terms and the role of the cabinet",
          "Explain majority, coalition and minority government, and the three models of parliamentary government",
          "Explain cohabitation and the two subtypes of semi-presidentialism",
          "Explain why authoritarian executives have fewer constraints but also fewer guarantees",
          "Define bureaucracy, name its two roles, and describe Weber’s model and the lecture’s five principles",
          "Explain the spoils system, outsourcing, new public management and e-government, with their costs and benefits",
          "Describe departments, divisions, non-departmental public bodies and regulatory agencies",
          "Compare unified and departmental recruitment, and explain affirmative action",
          "Explain how bureaucracies work in authoritarian regimes: bureaucratic authoritarianism, the developmental state, crony capitalism and the predatory state"
        ]
      },
      {
        "type": "uitleg",
        "titel": "What to prepare for this session",
        "tekst": "Read: **McCormick, Hague & Harrop, *Comparative Government and Politics*, chapter 8 (Executives) and chapter 10 (Bureaucracies).** Lecture 3 (De Sousa, 25 September) covers both, in the opposite order: it starts with bureaucracies and ends with the types of executive.\n\nThis lesson follows the book: **Core material: chapter 8** first, then **Core material: chapter 10**, each with the chapter's own sections as headings. What the lecture adds or puts differently is in the From the lecture boxes at the end of each section."
      },
      {
        "type": "slimmer",
        "titel": "If you are short on time",
        "tekst": "In this order, and stop when you run out of time.\n\n**1. The To remember tab (15 minutes).** The comparison table of the four executives and the key terms of chapter 10 on one page.\n\n**2. The From the lecture boxes (15 minutes).** The lecture's definitions, Weber's five principles (which differ from the book's list), the timeline of bureaucracies, and the four types of executive with their examples.\n\n**3. Chapter 8: presidential, parliamentary and semi-presidential executives (30 minutes).** The lecture spends most of its time on the types. Learn Table 8.7 until you can fill it in from memory.\n\n**4. Chapter 10: origins and evolution, and how bureaucracies are organised (30 minutes).** Weber, the spoils system, outsourcing, new public management, and departments, divisions and agencies.\n\n**5. The quiz in Check yourself (10 minutes).**\n\nThe authoritarian sections of both chapters come last. They are in the reading, so they are exam material, but the lecture only gives them one slide."
      },
      {
        "type": "waarschuwing",
        "titel": "The book and the slides list Weber differently",
        "tekst": "The book gives Weber's model as five **features** (Figure 10.3): work, decisions, recruitment, careers and structure. The lecture gives five **principles**: centralisation, hierarchy, formalisation, standardisation and specialisation. They overlap but are not the same list. Learn both, and say which one you are using. The comparison is in the From the lecture box in chapter 10, section 2."
      },
      {
        "type": "waarschuwing",
        "titel": "Some facts in chapter 8 are out of date",
        "tekst": "The book was written around 2021, and several of its examples have moved on. Learn the arguments, not the current office-holders from the book.\n\n**Canada**: the chapter opens with Justin Trudeau's minority government. Trudeau stepped down in 2025; Mark Carney is now prime minister.\n**Brazil**: the Spotlight shows Jair Bolsonaro as president. Luiz Inácio Lula da Silva has been president since January 2023.\n**Bangladesh**: Table 8.2 lists Sheikh Hasina as prime minister \"since 2009\". She was forced out of office in August 2024.\n**New Zealand**: Table 8.2 has two errors. The prime minister of 1999 to 2008 is **Helen** Clark, not Jenny Clark, and **Jacinda Ardern** (not Arden) was in office from 2017 to January 2023, not \"2017 to now\".\n**The Netherlands** is the book's example of ministerial government. Since 23 February 2026 the prime minister is **Rob Jetten** (D66), at the head of a **minority** cabinet of D66, VVD and CDA: a good current example for the section on minority government.\n\nIn chapter 10, the horizontal axis of Figure 10.5 is mislabelled: the figure shows the UN's e-government scores, not government effectiveness."
      },
      {
        "type": "slimmer",
        "titel": "The thread running through both chapters",
        "tekst": "Two questions hold the session together. **Who leads?** That is the executive: the top slice of government that sets priorities, decides and takes the blame. **Who does the work?** That is the bureaucracy: the permanent officials who advise before a decision and implement it afterwards.\n\nThe executive is **politically accountable** and temporary; the bureaucracy is **permanent** and only indirectly accountable. Almost every problem in these chapters comes from that difference: how to keep a powerful executive in check (presidential, parliamentary and semi-presidential designs are three answers), and how to keep a permanent bureaucracy responsive to elected leaders (recruitment, political advisers, the ombudsman, outsourcing). This is also where session 2's balance between democracy and bureaucracy becomes concrete."
      }
    ]
  },
  {
    "id": "kern",
    "titel": "Core material: chapter 8",
    "blokken": [
      {
        "type": "tekst",
        "titel": "8.1 Understanding executives",
        "toetsstof": true,
        "tekst": "**The opening case: Canada, 2021.** Prime Minister Justin Trudeau called an election hoping to turn his minority government into a majority. His Liberals came **second in votes**, but thanks to the single-member plurality electoral system won the most seats: less than a third of the vote and 47 per cent of the seats. Trudeau formed a second **minority government**. A party rejected by more than two-thirds of voters found itself controlling the executive of a leading democracy. The case shows two things at once: the executive is where power sits, and how you get there depends on the rules of the system.\n\n**What an executive is.** The **political executive** lies at the heart of government and provides the political leadership that forms the highest level of administration: prime ministers, presidents, cabinets and ministers at national level, but also governors and mayors at lower levels. The institutional approach sees the executive as government's **energising force**: setting priorities, mobilising support, reacting to problems, resolving crises, making decisions and overseeing their execution. In authoritarian systems the executive is often the only institution that wields real power.\n\n**Executive versus bureaucracy.** Distinguish the **temporary political executive**, elected or appointed for fixed terms, who makes policy, from the **career bureaucrats** who put it into effect. Members of the political executive are chosen by political means, can be removed the same way, and are **accountable**: their desks are where the buck stops. The bureaucracy consists mainly of public employees **without direct public accountability**. Ministers at the top of departments come and go with the government; the vast majority of bureaucrats are unelected and stay.\n\n**Constraints.** In democracies, understanding the executive starts with **constitutional constraints**: executives are elected, bound by rules that limit their power, face regular re-election, and are judged by opinion polls and the media. In authoritarian regimes constitutional and electoral controls are absent or ineffective. The executive is limited less by the constitution than by **political realities**, and the office is patterned by informal relationships rather than formal rules.\n\n**Four types.** Presidential, parliamentary, semi-presidential and authoritarian. All four are ways of **dividing and controlling executive authority**. Presidential and semi-presidential systems set up checks and balances between executive, legislature and judiciary. In parliamentary systems the executive comes out of the legislature and survives only as long as it keeps the legislature's confidence, often inside a coalition. Authoritarian executives face fewer constraints. None of these is a fixed template: they change over time, vary between countries, and some states blend types or slowly move from one to another.\n\n**The executive is a collective body.** Presidents and prime ministers are the most visible, but they rely on advisers, ministers, bureaucrats and agencies. Executives do **not make laws** (legislatures do) and do **not interpret laws** (the judiciary does)."
      },
      {
        "type": "tabel",
        "kop": [
          "Role (Figure 8.1)",
          "What it means"
        ],
        "rijen": [
          [
            "Representation",
            "Representing voters’ interests in government, and the state in dealings with other governments"
          ],
          [
            "Execution",
            "Overseeing, through the bureaucracy, the execution of laws and policies and the maintenance of law and order"
          ],
          [
            "Making policy",
            "Defining the policy priorities and interests of government"
          ],
          [
            "Leadership",
            "Providing the overall direction of a government and a state"
          ],
          [
            "Appointments",
            "Appointing people to other senior positions in government"
          ],
          [
            "Security",
            "Defending the unity and integrity of the state against domestic and external threats"
          ],
          [
            "Crisis response",
            "Leading the government’s response to political, security, public safety and natural crises"
          ]
        ]
      },
      {
        "type": "uitleg",
        "tekst": "**Using Theory 8: leadership theories**\n\nLeadership, \"the capacity to lead by motivating or inspiring others to achieve common goals\", is critical to how executives perform, but hard to define: we know it when we see it. Political science has been slow to develop leadership theories; after World War II they were overtaken by structuralism and rational choice and have only recently revived (Peele, 2005; Helms, 2011). Most theories come from the corporate world:\n\n**Behavioural or style theory**: looks at how leaders behave; their traits can be copied or avoided. Study the actions.\n**Contingency or situational theory**: looks at context; the best leaders adjust to changing circumstances.\n**Great Man theory**: good leaders are born, with innate skills that cannot be learned.\n**Management or transactional theory**: supervising and organising, with rewards and punishments.\n**Participative theory**: leaders involve others in decisions and act as facilitators.\n**Power theory**: how leaders use power and influence to get things done.\n**Relationship theory**: how leaders focus on their interactions with others.\n\nThe book's own conclusion: political science still has much to learn from the corporate world."
      },
      {
        "type": "tekst",
        "tekst": "**Two dimensions: head of state and head of government.**\n\nThe **head of state** represents the state and is expected to rise above politics and work in the general interest of all citizens. In democracies much of the job is **symbolic**: hosting visiting leaders, state visits, leadership in times of war or national crisis.\n\nThe **head of government** is the political leader of a government: elected, appointed by elected politicians, or in authoritarian regimes coming to power by less transparent means. Heads of government make little effort to hide their party preferences and care more about keeping the support of their party and voters than about representing everyone, whatever they say.\n\n**Bagehot: dignified and efficient.** Walter Bagehot (*The English Constitution*, 1867) distinguished the **dignified parts** of a constitution (\"those which excite and preserve the reverence of the population\") from the **efficient parts** (\"those by which it, in fact, works and rules\"). In presidential systems such as the US, Mexico and Nigeria both are **combined in one office**. In parliamentary systems they are split between two people, which makes it easier to tell the symbolic from the political.\n\n**Heads of state in parliamentary systems** come in two forms. In **republics**, a non-executive president is elected by popular vote (Ireland), by parliament (Israel) or by a special electoral college (Germany: the national legislature plus regional representatives). More rarely, the head of state is a **monarch** who inherited the position: seven European countries have a **constitutional monarchy** (Belgium, Denmark, the Netherlands, Norway, Spain, Sweden, the UK), plus Andorra, Monaco, Liechtenstein and Luxembourg. Malaysia has a rare **elected** monarch. Constitutional monarchs stay out of politics, but royal influence can matter in times of crisis and transition.\n\n**In semi-presidential systems** the split is more complicated: the prime minister rarely strays into the head of state's duties, but the president straddles both offices. A popular president with a majority in the legislature is effectively both; an unpopular one without a majority falls back on the head-of-state role while the prime minister runs the government.\n\n**Women executives.** Since Sirimavo Bandaranaike became prime minister of Ceylon (now Sri Lanka) in 1960, more than four dozen countries have had women as national executives (Table 8.2: Indira Gandhi, Golda Meir, Margaret Thatcher, Angela Merkel and others). Several countries have close to equal numbers of women and men ministers, and women have moved from education and social policy into defence, finance and foreign affairs. But \"the glass remains well over half empty\": in most countries most ministers, legislators and top business executives are still men."
      },
      {
        "type": "tabel",
        "kop": [
          "Table 8.1 (selected)",
          "Head of state",
          "Selection",
          "Tenure"
        ],
        "rijen": [
          [
            "Germany (republic)",
            "President",
            "Elected by a joint Bundestag and Länder convention",
            "5 years"
          ],
          [
            "Austria (republic)",
            "President",
            "Direct popular vote, two rounds",
            "6 years"
          ],
          [
            "Italy (republic)",
            "President",
            "Joint session of parliament plus regional representatives",
            "7 years"
          ],
          [
            "India (republic)",
            "President",
            "College of federal and state assemblies",
            "5 years"
          ],
          [
            "Canada, Australia, Jamaica",
            "British monarch, represented by a Governor-General",
            "Governor-General nominated by the government, confirmed by the monarch",
            "At the monarch’s pleasure"
          ],
          [
            "Japan",
            "Emperor",
            "Heredity (eldest male)",
            "Life"
          ],
          [
            "Spain, Sweden, UK",
            "Monarch",
            "Heredity (Spain eldest male; Sweden and UK eldest child)",
            "Life"
          ],
          [
            "Malaysia",
            "Supreme head of state",
            "Elected by the rulers of the nine Malay states",
            "5 years"
          ]
        ]
      },
      {
        "type": "uitleg",
        "tekst": "**From the lecture**\n\nThe lecture defines the political executive as **the core of the government, the \"top slice\" of the administration**. It sets priorities, resolves crises, makes policies and decisions and supervises their implementation **by bureaucracies**. And one line to remember: **governing without a parliament or a judiciary is possible, but governing without an executive is not.**\n\nThe roles slide follows Figure 8.1: representing voters and the state, overseeing execution and law and order, defining priorities and direction, appointing senior members, defending the unity and integrity of the state, and leading the response to crises. The lecturer's notes add two points. Executives **do not make laws** (legislatures do) and **do not interpret them** (the judiciary does). And many of these roles are the same in authoritarian executives, except that those are not subject to constitutional limits.\n\nOn accountability, the notes put the contrast with bureaucracy sharply: political executives are chosen by political means and answer for their policies, usually in parliament. **Bureaucracies are not politically accountable**: civil servants are not directly accountable, only those at the very top, who tend to be appointed by the ruling government.\n\nYour notes from lecture 1 give the Dutch case for head of state and head of government: the head of government is the prime minister, **Rob Jetten**, and the head of state is the king, **Willem-Alexander**."
      },
      {
        "type": "tekst",
        "titel": "8.2 Presidential executives",
        "toetsstof": true,
        "tekst": "**Not all presidents are equal.** At one end, a president in a parliamentary system is a **figurehead**: a ceremonial head of state without executive powers. In the middle, the **presidential executive** is elected and plays a central political role. At the other end, many authoritarian regimes have presidents who have accumulated so much power that they are **quasi-monarchical dictators**. Mezey (2013): presidentialism is more than a constitutional category; it includes public perceptions, political actions and formal and informal power arrangements.\n\n**The democratic form.** A single person governs with authority derived from **popular election**, alongside an **independent legislature**. The president is normally directly elected, with a limit on the number of terms, directs the government, serves as head of state and appoints key officials (some subject to confirmation by the legislature). Both president and legislature have **fixed terms**; the president cannot dissolve the legislature, and the legislature can only remove the president through mechanisms such as **impeachment**. Neither can normally bring down the other, so each has some autonomy.\n\n**Strengths:**\n1. The fixed term gives **continuity**, avoiding the instability of coalitions.\n2. Winning requires **broad support** across the country.\n3. Elected by the whole country, the president can rise above **local squabbles** in the legislature.\n4. A natural **symbol of national unity**, at home and abroad.\n5. A separation of powers encourages **limited government**.\n\n**Weaknesses.** The key one: only one party can win the presidency; everyone else loses. Unless the president reaches across party lines, it is **winner-take-all**. **Deadlock** can arise when executive and legislature disagree. There is no natural rallying point for the opposition, no equivalent of the **Leader of the Opposition**. And presidents often face fragmented legislatures in which their party is a minority, so that in effect they **govern in a coalition** (Chaisty et al., 2018).\n\n**The United States.** Besides overseeing the execution of laws, the US president has explicit duties (commander-in-chief) interpreted over time as implying further powers: executive orders, statements, proclamations. But powers are **shared with Congress**:\n\n- the president is commander-in-chief, but only **Congress can declare war**;\n- the president appoints officials and signs treaties, but only with the **consent of the Senate**;\n- the president can **veto** legislation, but Congress can **override** the veto;\n- **Congress, not the president, controls the purse strings.**"
      },
      {
        "type": "voorbeeld",
        "tekst": "**Spotlight 8: Brazil**\n\nA federal presidential republic of 26 states plus a federal district, with a constitution from 1988. The president is directly elected for no more than two consecutive four-year terms; Congress has a Chamber of Deputies (513 members, elected by proportional representation) and a Senate (81 members, three per state).\n\nBrazil gives its president **more constitutional powers than the US**: issuing decrees in specified areas, declaring bills urgent (forcing a quick decision), initiating bills, and proposing a budget that takes effect month by month if Congress does not pass one.\n\nYet two features make it **harder** to bend Congress. First, proportional representation produces a very complex party landscape: after the 2018 elections, **30 parties** won seats and none had more than 52 of the 513. Second, **party discipline is exceptionally weak**: deputies switch parties mid-term and care more about resources for their districts than party loyalty. Presidents therefore build **informal coalitions** by handing out ministries to several parties. Melo and Pereira (2013) call the result **multi-party presidentialism**: a constitutionally strong president plus a robust system of checks and balances from political competition.\n\nThe lesson the book draws: coalitions in presidential systems are more informal, pragmatic and **unstable** than in European parliamentary systems, because the collapse of a coalition does not bring down the government, so there is less incentive to keep it together. Constitutions that seem to give the president a big role are deceptive."
      },
      {
        "type": "tekst",
        "tekst": "**An exception: South Africa.** South Africa has a president, but the president is **elected by the legislature**, not by the voters, and can be removed by a legislative vote. That nearly happened in 2018, when Jacob Zuma resigned rather than lose a vote of confidence over corruption charges. The same rare format is found only in Botswana and Myanmar. Its effect is hard to judge because one party, the ANC, has dominated since apartheid ended.\n\n**The separation of powers** is the defining feature of the democratic presidential system: executives lead and execute, legislatures make law and courts adjudicate. It is reinforced by a **separation of personnel**: neither the president nor cabinet members can sit in the legislature, and legislators must resign their seats to serve in government, so the president cannot easily buy votes with the promise of a job.\n\n**Different methods of election create different interests.** Legislators depend on voters in their home districts; the president alone has a **national constituency**. So the president pursues a national agenda, the legislature local and special interests. Despite the focus on one office, presidential government **divides power**: it forces executive and legislature to negotiate, \"ensuring the triumph of deliberation over dictatorship\"."
      },
      {
        "type": "uitleg",
        "tekst": "**From the lecture**\n\nThe lecture defines **presidentialism** as a form of rule in which a single chief executive (the president) is **both head of government and head of state**, using the authority from a popular election, but with an **independent legislature**. Unlike most prime ministers, the president also serves as head of state and appoints senior members of government. Both have **fixed terms** and **institutional autonomy** from each other: a member of the executive cannot be a member of the legislature at the same time. Legislators are usually elected in home districts, the president in a national ballot.\n\nThe lecturer's notes give the US separation of powers in four lines, the same four as the book: commander-in-chief but only Congress declares war; appointments (including Supreme Court judges) and treaties only with Senate approval; a veto that Congress can override; and Congress controlling the budget (\"the purse\"). Examples on the types slide: **the USA, Brazil and Mexico**."
      },
      {
        "type": "tekst",
        "titel": "8.3 Parliamentary executives",
        "toetsstof": true,
        "tekst": "**Organically linked to the legislature.** In a parliamentary system the head of government (usually a prime minister) is normally the leader of the largest party in the legislature, or of one of the coalition parties. The prime minister usually keeps a seat in the legislature, works alongside a **separate head of state**, and faces **neither a separate election nor term limits**. Appointments are rarely subject to confirmation. Two further differences with presidents: a prime minister can be **removed by losing a vote of confidence**, and can **call early elections**.\n\n**The key feature:** the power of the executive depends on the **party balance in the legislature** after elections. Three outcomes are possible.\n\n**Majority government.** One party wins a clear majority and its leader becomes prime minister with a strong mandate. With tight party discipline, the prime minister is in a strong position. Britain is the classic case: single-member plurality usually gives one party a working majority, the cabinet comes from the same party, and control of the parliamentary agenda is almost guaranteed. The opposition leader, the **Leader of the Opposition**, keeps up the pressure as a prime minister-in-waiting.\n\n**Coalition government.** No party wins a majority, so two or more parties, usually ideological neighbours, govern together. Success depends on the deal and on the number of parties. **Majority coalitions** are the most stable; coalitions with more and smaller partners less so; **minority coalitions** potentially the least. Coalitions are sometimes promised before an election, but usually negotiated after it, with the outgoing government staying on as a **caretaker**. Most deals take days; Belgium set a record of **541 days** in 2010-11 (11 parties in the chamber) and took 16 months again in 2019-20. Coalitions are the norm in continental Europe: Denmark has not had a majority government since 1909, Germany has had **grand coalitions** of Christian Democrats and Social Democrats, Italy is a different story.\n\n**Minority government.** No party has a majority and agreement is hard, so one party governs alone as a minority, or two as a **minority coalition**. Sweden's Social Democrats and Greens formed one of the weakest ever in 2014 (39 per cent of the seats), able to govern only with informal support from other parties."
      },
      {
        "type": "uitleg",
        "tekst": "**The Netherlands as a current example (own addition, not in the book)**\n\nThe cabinet sworn in on 23 February 2026 is a **minority coalition**: D66, VVD and CDA under Prime Minister **Rob Jetten** (D66), without a majority in the Tweede Kamer. That makes it a textbook case of the book's third outcome: for every law it needs the support of at least part of the opposition, exactly like the Swedish example. It also shows the caretaker phase at work: the previous cabinet stayed on until the new one was formed, four months after the October 2025 election."
      },
      {
        "type": "tekst",
        "tekst": "**Cabinets.** The **cabinet** or council of ministers exists in presidential systems too, but it is rarely as strong or used as much for policy; in parliamentary systems it often leads to **government by committee**. It is the main point of contact between the executive and the bureaucracy and can be a launch pad (or graveyard) for would-be prime ministers. Most ministers are also members of the legislature; some countries, such as Sweden, forbid this **dual mandate**.\n\n**Three models of parliamentary government** (Table 8.5), depending on the relationship between prime minister, cabinet and ministers:\n\n**Prime ministerial government** (Germany, UK): the prime minister dominates and deals directly with individual ministers, who are **followers**. Germany is a **chancellor democracy**: the Bundestag appoints the chancellor, accountability runs mainly through the chancellor's office, and the Basic Law says the chancellor \"shall determine, and be responsible for, the general policy guidelines\".\n\n**Cabinet government** (Finland): discussion in cabinet decides policy and ministers are **team players**. It encourages deliberation and collective leadership, and works best in smaller countries. In Finland the State Council has extensive decision-making authority by law and the prime minister is mainly its chair.\n\n**Ministerial government** (Italy, Japan, the Netherlands): individual ministers operate with little direction from the prime minister or cabinet; ministers are **leaders**. In the Netherlands the prime minister does not appoint, dismiss or reshuffle ministers: ministers serve **with, not under**, the formal leader, and owe more loyalty to their party. The prime minister is \"less a chief or an executive than a skilled conciliator\".\n\nNone of these models is fixed in a constitution: each is a matter of politics and tradition.\n\n**Presidentialisation.** There is concern that prime ministers have become **presidentialised**: more powerful and more prominent, because of media exposure (communications offices), their growing international role, and the need to coordinate increasingly complex governance (Poguntke and Webb, 2004)."
      },
      {
        "type": "waarschuwing",
        "tekst": "**Exploring Problems 8: what is the most effective design for an executive?**\n\nLeaders need enough power to do their jobs, but not so much that they become dictators (China, North Korea, Russia) and not so little that they are hamstrung (Israel, Italy, Japan). Rules are only part of the story; personality counts too. The book quotes Malvolio in *Twelfth Night*: \"Some are born great, some achieve greatness, and some have greatness thrust upon them\", and adds that you can swap in **weak** and **weakness**. The point, linking back to the contingency theory in Using Theory 8: **context is critical**. Most of the time an executive just needs to keep the system running; in a crisis such as Covid-19, far more is demanded.\n\nThe three questions the book leaves you with are good exam questions: is it better to separate executive and legislature, combine them, or divide the executive? How far do political culture and expectations shape what executives do? Which model lets leaders lead without accumulating too much power?"
      },
      {
        "type": "uitleg",
        "tekst": "**From the lecture**\n\nThe lecture: in parliamentary systems the executive is **organically linked** to the legislative assembly. Voters elect legislatures, which approve, and can remove, the governing party or parties. The winning party or parties appoint the head of government (the prime minister), who appoints the cabinet. The prime minister works with a separate **head of state**, usually a constitutional monarch or a ceremonial president. Decision-making is usually **collegial**, located in the cabinet led by the prime minister.\n\nThe lecturer's notes on the three outcomes: in a **majority government** one party wins a parliamentary majority, and the prime minister is strong as long as the party in parliament backs the decisions. **Coalition governments** are usually the norm in Western Europe, as majority or minority coalitions. A further note: **many presidents are elected in parliamentary systems as ceremonial heads of state** (Germany, Italy, Ireland). Examples on the types slide: **the UK, the Netherlands, Portugal, Canada, New Zealand and Australia**.\n\nYour notes from lecture 1 add the **trias politica**: the three branches of government, executive, legislative and judiciary. The whole of chapter 8 is about how the first of these relates to the second."
      },
      {
        "type": "tekst",
        "titel": "8.4 Semi-presidential executives",
        "toetsstof": true,
        "tekst": "**A combination with its own character.** In semi-presidential systems (also called **dual executives**) there is both an **elected president** and a **prime minister and cabinet accountable to the legislature**. The president is directly elected, acts as head of state and **shares** the role of head of government with a prime minister, who is usually appointed by the president but needs a majority in the legislature. The president usually has oversight and responsibility for **foreign and economic affairs** and can use **emergency powers**; the prime minister runs most **day-to-day domestic government** (Table 8.6).\n\nIt is one of the least studied forms, although used in about two dozen countries (Elgie, 2011). Some scholars call it the most common arrangement in Europe, but only by counting countries with weak presidencies (Austria, Iceland, Ireland) that are usually seen as parliamentary.\n\n**Two subtypes:**\n\n**Premier-presidential** (Finland, France, Poland): the president is popularly elected and selects the prime minister, but **only the legislature** can dismiss the prime minister and cabinet.\n**President-parliamentary** (Russia): the prime minister and cabinet answer to **both** the president and the legislature.\n\n**Cohabitation.** When the president's party or coalition controls the legislature, the president leads and the prime minister follows. When voters give the **opposition** a majority, the president has little choice but to appoint a prime minister from the opposition and work with them: **cohabitation**, in effect a grand coalition. An ambitious prime minister can use the post to prepare a run for the presidency.\n\n**France, the archetype.** The Fifth Republic was designed to escape the instability of the Fourth (23 prime ministers in 12 years, 1946-58) and built around Charles de Gaulle (1959-69).\n\nThe **president** guarantees national independence and the constitution, heads the armed forces, negotiates treaties, calls referendums, presides over the Council of Ministers, dissolves the National Assembly (but **cannot veto** legislation), appoints (but **cannot dismiss**) the prime minister, and appoints and dismisses other ministers on the prime minister's recommendation.\n\nThe **prime minister** deals mainly with domestic affairs (de Gaulle's \"price of milk\"), is appointed by the president but **accountable to the National Assembly**, and coordinates the ministers. The Assembly's power to force the government to resign through a vote of censure is the parliamentary component.\n\nCohabitation happened in 1986-88 (Mitterrand with Chirac) and 1997-2002 (Chirac with Jospin). Below the top, the council of ministers matters less than a parliamentary cabinet: more ritual than discussion, and ministers are more autonomous.\n\n**Russia: semi-presidentialism in an authoritarian regime.** Vladimir Putin, president 1999-2008 and again since 2012, has used the format to his own ends. He is head of state, commander-in-chief and guarantor of the constitution; he can suspend decisions of other state bodies, issue decrees and remove ministers without the Duma's consent; and the constitution charges him with \"defining the basic directions\" of domestic and foreign policy. After two terms he became **prime minister** under a placeholder president, Dmitry Medvedev, returned in 2012 after the term had been extended to six years, and in 2020 a referendum \"reset\" his terms, potentially allowing him to stay until 2036."
      },
      {
        "type": "tabel",
        "kop": [
          "Table 8.7",
          "Presidential",
          "Parliamentary",
          "Semi-presidential",
          "Authoritarian"
        ],
        "rijen": [
          [
            "Method of election",
            "Direct, whole country",
            "Indirect, via the legislature",
            "President direct; prime minister indirect",
            "President direct; monarchs unelected"
          ],
          [
            "Separate head of state?",
            "No",
            "Yes",
            "No",
            "No"
          ],
          [
            "Executive serves in legislature?",
            "No",
            "Yes",
            "Prime minister only",
            "No"
          ],
          [
            "Separation of powers?",
            "Yes",
            "No",
            "To some extent",
            "To a limited extent"
          ],
          [
            "Fixed terms?",
            "Yes",
            "No",
            "President only",
            "Yes, but no limit on the number"
          ],
          [
            "Dismissal",
            "End of term, lost election, impeachment, resignation",
            "Lost election, lost confidence vote, lost party leadership, resignation",
            "President as presidential; prime minister as parliamentary",
            "Loss of political support; death for monarchs"
          ],
          [
            "Role of cabinet",
            "Marginal, individualistic",
            "Central, collective",
            "Marginal, individualistic",
            "Marginal"
          ],
          [
            "Can it work with a legislature controlled by another party?",
            "Yes, but weakened",
            "Only as a minority government",
            "Yes, but weakened",
            "Yes, but unlikely to happen"
          ]
        ],
        "noot": "This table is the whole of chapter 8 on one page. If you can fill it in from memory, you can answer most comparison questions."
      },
      {
        "type": "uitleg",
        "tekst": "**From the lecture**\n\nThe lecture's definition: the semi-presidential or **dual executive** combines an elected president with an appointed prime minister and cabinet, who are accountable to parliament. **The parliament can bring down the prime minister and cabinet, but not the president.** The president performs political tasks, not only ceremonial ones. The prime minister is responsible for day-to-day domestic government, while the president keeps an oversight role, is responsible for foreign affairs and can take **emergency powers**, such as vetoing legislation or dissolving parliament. Examples on the types slide: **France, francophone African countries and Russia**.\n\nNote one small difference: the slide lists vetoing legislation as an emergency power, while the book says the French president **cannot** veto legislation. The slide describes the type in general; the book describes France. In an exam about France, go with the book."
      },
      {
        "type": "tekst",
        "titel": "8.5 Executives in authoritarian regimes",
        "toetsstof": true,
        "tekst": "**The opening case: Chad, 2021.** Idriss Déby, who came to power in a 1990 rebellion, had just been re-elected for a **sixth term** at 68. Instead of celebrating he went to the front line against rebels, was shot and died. He was replaced by a military junta headed by his son Mahamat, which critics called a \"dynastic coup\". The case sums up the section: huge power, few rules, and great personal risk.\n\n**Fewer constraints, fewer protections.** Authoritarian regimes have constitutions and rules too, but their executives face far fewer limits on executing policy, and far fewer formal protections of their person and tenure. Their powers reflect less the constitution than their **capacity to manipulate the system**, as long as they stay alive (Table 8.8).\n\n**Two kinds of authoritarian executive** (from chapter 6):\n\n**Absolute monarchs** control government, tolerate little opposition and keep the legislature and courts weak: historically Louis XIV and Peter the Great; today the Arab dynasties, King Mswati III of Eswatini and the Sultan of Brunei. They use a **patriarchal** style that stresses ruling over governing.\n\n**Presidential monarchs**, the most common form: presidents who function like monarchs, without most constitutional or political limits, often without real term limits or competitive elections. They go through the motions of re-election but manipulate the process by repressing opponents and rewarding loyalty. Déby won in 1996 and 2001, abolished term limits, and won again in 2006, 2011, 2016 and 2021. \"By this means, a dictator creates a dictatorship.\"\n\n**The dictator's dilemma** (Svolik, 2012). Dictators lack independent authorities that could enforce agreements, so they may use extreme methods but also face greater personal risk. They can use the military to repress, but once the regime depends on the military, the military gains leverage and may turn against it.\n\n**Personalism.** Presidential monarchs use their \"direct mandate\" to overshadow courts and legislature, though they rarely abolish them (they need courts and bureaucracy to keep things running). The central feature is the **lack of institutionalisation**; in its place is **personalism**. There is often no formal succession procedure, so potential successors fight before and after the leader goes. The leader must constantly neutralise rivals: **politics comes before policy**. And the price of defeat is high: democratic ex-leaders write memoirs and give paid lectures; ousted dictators may end in exile, prison or death.\n\n**Libya** shows what happens when government depends on one person. Muammar Gaddafi ruled from a 1969 coup without ever facing an election. In the 2011 civil war he was found hiding in a drainage pipe and beaten to death. With no succession arranged, the state fell apart; a UN-brokered government in 2015 failed and a second civil war followed.\n\n**Personalism is not absolute.** Many dictators are constrained by the military, ethnic leaders, landowners, business, the bureaucracy, multinationals and court factions. To survive they must share the perks of office with a coalition of supporters, which is why **personal rule is closely tied to corruption**: Marcos (Philippines), Mobutu (Zaire), Suharto (Indonesia), Ben Ali (Tunisia), Obiang (Equatorial Guinea).\n\n**Egypt** shows how hard the move to democracy is: Mubarak was ousted in 2011, Mohamed Morsi won the first truly competitive elections in 2012, was removed in a 2013 military coup led by General el-Sisi, who then won elections in 2014 and a widely condemned re-election in 2018. Egypt's other institutions were too weak to resist a return to personal rule.\n\n**Communist regimes** (China, Cuba, Laos, North Korea, Vietnam) intertwine executive, legislative and judicial power with one-party rule. In China, the formal bodies largely legitimise decisions already taken by the party (Saich, 2015), and power follows networks and standing rather than titles: Deng Xiaoping was \"paramount leader\" from 1978 to 1997 while by 1993 his only formal post was president of China's **bridge association**. After 2013 Xi Jinping tightened control and in 2018 had the two-term limit removed: \"the old days of the paramount leader of China are apparently back\".\n\n**Military leaders** are the ultimate authoritarian executive, now rarer, but many civilian leaders depend on keeping the military happy. Nigeria has had 15 leaders since 1960: six civilian, nine military; three were killed in coups and four removed but survived.\n\n**Why this matters:** authoritarian executives are **more common** than democratic ones. The 2020 Democracy Index counted 92 hybrid or authoritarian regimes against 75 full or flawed democracies."
      },
      {
        "type": "uitleg",
        "tekst": "**From the lecture**\n\nThe lecture's authoritarian slide in four lines: power is concentrated in the office of **the president, a monarch, or the head of a single political party**; monarchs are hereditary, while presidents may face elections or be appointed by a single party or even by the **army**; limits on holding office vary, but most are not limited by constitutions or change them to stay in power; and all other institutions are subject to the executive, whose leader is **both head of state and head of government**. Examples on the types slide: **China, the Democratic Republic of Congo, North Korea and Saudi Arabia**.\n\nThe lecturer's notes frame the whole comparison in one sentence: democratic and authoritarian executives are both defined by how the executive operates, and **the difference lies in subjecting executive power to constitutional limits**."
      },
      {
        "type": "checklist",
        "titel": "Summary",
        "toetsstof": true,
        "items": [
          "The political executive is the top tier of government: it sets priorities, makes policy, leads, responds to crises and oversees implementation by the bureaucracy. It does not make or interpret laws.",
          "Executives combine the roles of head of state (symbolic, above politics) and head of government (political, partisan). Bagehot calls these the dignified and the efficient parts of a constitution.",
          "In presidential executives a directly elected president is head of state and of government, alongside an independent legislature; fixed terms, separation of powers and of personnel. Strength: continuity; weakness: winner-take-all and deadlock.",
          "In parliamentary executives the government comes out of the legislature and depends on its confidence; power depends on the party balance: majority, coalition or minority government.",
          "Parliamentary government comes in three models: prime ministerial (Germany, UK), cabinet (Finland) and ministerial (Italy, Japan, the Netherlands).",
          "Semi-presidential executives combine an elected president and an appointed prime minister accountable to the legislature; subtypes premier-presidential and president-parliamentary; cohabitation when the legislature is controlled by the opposition. France is the archetype, Russia the authoritarian version.",
          "Authoritarian executives face fewer constraints but also fewer guarantees: absolute monarchs and presidential monarchs, personalism instead of institutions, no secure succession, politics before policy."
        ]
      },
      {
        "type": "begrippen",
        "items": [
          {
            "begrip": "Executive",
            "definitie": "The political institution responsible for overseeing the execution of laws and policies, and most often associated with national leadership. The \"top slice\" of government."
          },
          {
            "begrip": "Political executive versus bureaucracy",
            "definitie": "The political executive is temporary, chosen by political means and accountable; the bureaucracy is permanent, unelected and not directly accountable."
          },
          {
            "begrip": "Leadership",
            "definitie": "The capacity to lead by motivating or inspiring others to achieve common goals, ideally voluntarily but otherwise by threats and force."
          },
          {
            "begrip": "Head of state",
            "definitie": "The figurehead or ceremonial leader of a state, elected, appointed or, for monarchs, inherited. Expected to rise above politics."
          },
          {
            "begrip": "Head of government",
            "definitie": "The elected leader of a government, who comes to office through the support of voters for their party and platform. Openly partisan."
          },
          {
            "begrip": "Dignified and efficient parts (Bagehot)",
            "definitie": "Bagehot (1867): the dignified parts of a constitution excite and preserve the reverence of the population; the efficient parts are those by which it actually works and rules."
          },
          {
            "begrip": "Republic",
            "definitie": "A political system in which all members of government are elected or appointed by elected officials: there is no monarch."
          },
          {
            "begrip": "Constitutional monarchy",
            "definitie": "A state headed by a monarch whose political powers are severely limited by constitutional rules, as in the Netherlands. Contrast with an absolute monarch."
          },
          {
            "begrip": "Presidential executive",
            "definitie": "An arrangement in which executive and legislature are separately and directly elected and have separate powers and responsibilities."
          },
          {
            "begrip": "Separation of powers",
            "definitie": "Executive, legislature and judiciary have distinct but complementary powers, so that none can govern alone and all should govern together."
          },
          {
            "begrip": "Impeachment",
            "definitie": "The mechanism by which a legislature can remove a president in a presidential system, for instance for wrongdoing."
          },
          {
            "begrip": "Winner-take-all",
            "definitie": "The key weakness of presidential government: only one party can win the presidency and everyone else loses."
          },
          {
            "begrip": "Multi-party presidentialism",
            "definitie": "Melo and Pereira on Brazil: a constitutionally strong president who must build informal, unstable coalitions with many parties by handing out ministries."
          },
          {
            "begrip": "Parliamentary executive",
            "definitie": "An arrangement in which the executive emerges from the legislature, remains a member of it, remains accountable to it and must keep a working majority to stay in office."
          },
          {
            "begrip": "Vote of confidence",
            "definitie": "A vote in the legislature on whether the government still has its support. Losing it removes a prime minister in a parliamentary system."
          },
          {
            "begrip": "Majority government",
            "definitie": "One party wins a clear majority of seats; its leader becomes prime minister with a strong mandate."
          },
          {
            "begrip": "Coalition government",
            "definitie": "A government formed through an agreement between two or more parties that divide government posts between them."
          },
          {
            "begrip": "Minority government",
            "definitie": "A government of one party, or a minority coalition, without a majority in the legislature, which depends on support from other parties. The Dutch Jetten cabinet since 2026 is one."
          },
          {
            "begrip": "Caretaker government",
            "definitie": "The outgoing government that stays in place while a new coalition is negotiated after an election."
          },
          {
            "begrip": "Grand coalition",
            "definitie": "A coalition of the two largest parties, usually rivals, such as the German Christian Democrats and Social Democrats."
          },
          {
            "begrip": "Leader of the Opposition",
            "definitie": "In parliamentary systems, the leader of the largest opposition party: a prime minister-in-waiting who keeps the pressure on. Presidential systems have no equivalent."
          },
          {
            "begrip": "Cabinet",
            "definitie": "A body of the heads of the major government departments, also called a council of ministers. More important in parliamentary than in presidential systems."
          },
          {
            "begrip": "Dual mandate",
            "definitie": "Being a minister and a member of the legislature at the same time. Common in parliamentary systems, forbidden in some, such as Sweden."
          },
          {
            "begrip": "Chancellor democracy",
            "definitie": "The German form of prime ministerial government: the chancellor determines and is responsible for the general policy guidelines; ministers answer to the chancellor."
          },
          {
            "begrip": "Presidentialisation",
            "definitie": "The trend of prime ministers becoming more powerful and prominent, through media exposure, international summits and the need to coordinate complex policy."
          },
          {
            "begrip": "Semi-presidential executive",
            "definitie": "An arrangement in which an elected president coexists with an appointed prime minister and a separately elected legislature. Also called a dual executive."
          },
          {
            "begrip": "Premier-presidential system",
            "definitie": "A subtype of semi-presidentialism in which only the legislature can dismiss the prime minister and cabinet (France, Finland, Poland)."
          },
          {
            "begrip": "President-parliamentary system",
            "definitie": "A subtype of semi-presidentialism in which the prime minister and cabinet answer to both the president and the legislature (Russia)."
          },
          {
            "begrip": "Cohabitation",
            "definitie": "In semi-presidential systems: the presidency is held by one party and the legislature is controlled by another, so the president must work with a prime minister from the opposition."
          },
          {
            "begrip": "Authoritarian executive",
            "definitie": "A presidential executive or monarch whose powers face few constitutional or political limits."
          },
          {
            "begrip": "Absolute monarch",
            "definitie": "A hereditary ruler who controls government, tolerates little opposition and keeps legislature and courts weak (Saudi Arabia, Eswatini, Brunei)."
          },
          {
            "begrip": "Presidential monarch",
            "definitie": "A president who functions like a monarch, without most constitutional or political limits, winning manipulated elections. The most common authoritarian executive."
          },
          {
            "begrip": "Personalism",
            "definitie": "Rule based on the person of the leader rather than on institutions. The central feature of the authoritarian executive, with no secure succession."
          },
          {
            "begrip": "The four types of executive (list)",
            "definitie": "1. Presidential: elected president is head of state and government, independent legislature (USA, Brazil, Mexico). 2. Parliamentary: executive comes out of the legislature (UK, NL, Canada). 3. Semi-presidential: elected president plus prime minister accountable to parliament (France, Russia). 4. Authoritarian: power concentrated, few limits (China, DRC, North Korea, Saudi Arabia)."
          },
          {
            "begrip": "Seven roles of the executive (list)",
            "definitie": "1. Representation. 2. Execution (through the bureaucracy). 3. Making policy. 4. Leadership. 5. Appointments. 6. Security. 7. Crisis response. Not: making laws or interpreting them."
          },
          {
            "begrip": "Five strengths of presidential government (list)",
            "definitie": "1. Continuity from the fixed term. 2. Winning requires broad national support. 3. The president can rise above local interests. 4. A symbol of national unity. 5. Separation of powers encourages limited government."
          },
          {
            "begrip": "Weaknesses of presidential government (list)",
            "definitie": "1. Winner-take-all: only one party wins. 2. Deadlock between president and legislature. 3. No natural Leader of the Opposition. 4. Presidents often face fragmented legislatures and must govern as if in a coalition."
          },
          {
            "begrip": "US separation of powers (list)",
            "definitie": "1. Commander-in-chief, but only Congress declares war. 2. Appointments and treaties need the Senate’s consent. 3. The veto can be overridden by Congress. 4. Congress, not the president, controls the purse strings."
          },
          {
            "begrip": "Three outcomes in parliamentary systems (list)",
            "definitie": "1. Majority government: one party wins a majority; strong prime minister (UK). 2. Coalition government: two or more parties share power; majority coalitions most stable (Germany, Belgium). 3. Minority government: governs with outside support (Sweden 2014, the Netherlands 2026)."
          },
          {
            "begrip": "Three models of parliamentary government (list)",
            "definitie": "1. Prime ministerial: the prime minister dominates, ministers are followers (Germany, UK). 2. Cabinet: the cabinet decides together, ministers are team players (Finland). 3. Ministerial: ministers act with little direction, ministers are leaders (Italy, Japan, the Netherlands)."
          },
          {
            "begrip": "Seven leadership theories (list)",
            "definitie": "1. Behavioural or style. 2. Contingency or situational. 3. Great Man. 4. Management or transactional. 5. Participative. 6. Power. 7. Relationship."
          },
          {
            "begrip": "Powers of the French president (list)",
            "definitie": "1. Guarantor of independence and the constitution. 2. Heads the armed forces. 3. Negotiates treaties. 4. Calls referendums. 5. Presides over the Council of Ministers. 6. Dissolves the National Assembly, but cannot veto laws. 7. Appoints the prime minister, but cannot dismiss them."
          }
        ]
      }
    ]
  },
  {
    "id": "kern2",
    "titel": "Core material: chapter 10",
    "blokken": [
      {
        "type": "tekst",
        "titel": "10.1 Understanding bureaucracies",
        "toetsstof": true,
        "tekst": "**The opening case: New Zealand.** New Zealand routinely tops political, economic and social rankings. Part of the explanation is its reform of the public bureaucracy since the late 1980s, continued by the **Public Service Act 2020**: stronger links between departments, clear policy goals, easier movement of staff between agencies, and joint ventures of agency heads on priorities such as child poverty and climate change. (Its small size, under five million people, helps.)\n\n**What a bureaucracy does.** The study of **bureaucracy** (or the **civil service**) looks at the network of government departments and public agencies beneath the political executive. They have **two main jobs** (Figure 10.1):\n\n**Advice**: giving information and advice to political leaders **before** policy is made.\n**Implementation**: through **public administration**, overseeing and ensuring consistency in how laws, regulations and policies are carried out **after** they are agreed.\n\nThe department head supplying data to a minister, the tax inspector, the engineer investigating a plane crash and the person answering the phone at an agency are all part of it.\n\n**Wider than the departments.** Attention has shifted from permanent salaried staff to the wider system of **governance**: semi-independent agencies, local government, and the NGOs and private companies to which public programmes are **outsourced**. The terms public administration and **public management** cover the public sector in that wider sense. And any large organisation, a university, a party, a corporation, has its own bureaucracy with similar incentives and limits.\n\n**The stereotype.** Bureaucrats are associated with rigidity, hierarchy, lack of creativity and procedures that worked in the past: **red tape**. The stereotype is simplistic, and bureaucracies have changed a lot, driven by two themes in wealthier democracies: **outsourcing** and the move to the **internet**.\n\n**Measuring quality.** The World Bank's **Worldwide Governance Indicators** include **government effectiveness**: \"perceptions of the quality of public services, the quality of the civil service and the degree of its independence from political pressures\". Note the word **perceptions**: it is compiled from surveys and assessments, not measured directly. Democracies generally score well and authoritarian regimes badly (Figure 10.2): the Nordic countries near the top, **Singapore** with a perfect 100, Yemen (0.5) and Haiti (1.4) at the bottom. The rankings do not explain themselves.\n\n**Two exceptions.** **Greece** is a weak bureaucracy in a democracy: slow, inefficient, often corrupt, marked by clientelism, a weak state tradition, low social trust and \"the primacy of politics over a professional bureaucracy\" (Featherstone, 2020). **Singapore** is a strong bureaucracy in a flawed democracy: it inherited the British civil service, is a small city state, recruits and trains talent, and stresses leadership, clear goals and structured feedback (Wang, 2020).\n\n**Accountability.** Part of the mixed view of bureaucrats is about accountability. Political leaders can be voted out and are watched by media and polls; bureaucrats mainly answer to their own department. So accountability often rests on informal channels such as **whistleblowing**: going public with wrongdoing. It has exposed abuse, fraud and waste, but it is opportunistic rather than structured, reveals problems after they happen, and is high-risk for the whistleblower, as Edward Snowden's exile in Russia after his 2013 revelations about US surveillance shows."
      },
      {
        "type": "waarschuwing",
        "tekst": "**Exploring Problems 10: how can we keep bureaucrats accountable?**\n\nDuring the 2016 Brexit campaign, the EU was attacked for being run by \"unelected and unaccountable\" bureaucrats. The book calls this deceptive: **no** national civil servants are elected either, and senior EU staff are appointed by elected governments, just as at home. EU bureaucrats are **indirectly accountable**, like career bureaucrats everywhere.\n\nMax Weber already warned that bureaucracy's **expertise, permanence, scale and control of implementation** make it more than a conduit for political orders. Democracies have therefore broadened accountability: senior officials must answer not only to their minister, but also to the executive, to legislatures (which control the purse), to legislative committees and even to courts. **Outsourcing** changed the channels again, because contracts are tied to performance.\n\nA distinctively European tool is the **ombudsman**: a public watchdog that investigates claims of **maladministration**. The first was created in Sweden in 1809, followed by Finland (1919), other democracies after 1945 and the EU in 1995. There are now ombudsmen in about 90 countries, most at local or sectoral level. The Netherlands has a Nationale ombudsman.\n\nThe book's three questions: what are the best means of holding bureaucrats accountable? Should more countries adopt an ombudsman, or is outsourcing the better route? Is indirect accountability through appointed department heads enough?"
      },
      {
        "type": "uitleg",
        "tekst": "**From the lecture**\n\nThe lecture's definition: **bureaucracy** literally means **rule by officials**, from the French *bureau* and the Greek *kratos*. In modern terms it refers to **all salaried public officials (civil servants) who conduct the detailed business of public administration, advising on and applying policy decisions**. The two roles of the book, advice and implementation, are both in that sentence.\n\n**Organisation versus institution.** A slide the book does not have:\n\n**Organisation**: a system of means oriented to the performance of specific goals.\n**Institutionalisation**: the process in which social groups and organisations become **invested with authority** to perform specific tasks on behalf of a community and society.\n**Institution**: an organisation that **structures social order**, governing the behaviour of individuals in a community. It confers **stability and predictability of action**, a particular **rationality**, and a particular set of **values and norms**, all largely determined by context and history.\n\nSo a bureaucracy is more than an organisation that gets tasks done: once institutionalised, it carries its own values and norms. The lecturer's note links this directly to session 2's yin-yang of democratic and bureaucratic values.\n\n**Three views of bureaucracy:** as an **iron cage** (Weber: a form of social organisation that increases the predictability of government by applying general rules to specific cases, but can also trap people in rules), as a **machine**, and as **red tape**. The lecturer's notes add that these views follow political lines. **Conservative or right-wing**: government is at best a necessary evil; government means bureaucracy, which is inefficient by nature and must be curtailed. **Liberal or left-wing**: government should play an important role in society, and public bureaucracy can be made to do the job.\n\nOn accountability the lecturer's notes mention the **ombudsman** as one example of attempts to make public servants more accountable, adopted by most European bureaucracies after 1945."
      },
      {
        "type": "tekst",
        "titel": "10.2 Origins and evolution",
        "toetsstof": true,
        "tekst": "**Before the modern state.** Ancient empires had bureaucracies, most famously **China**: based on Confucian principles from the sixth century BCE, it created the first **meritocracy**, with officials earning their posts through examinations. In medieval Europe, clerical servants were agents of the **royal household**, serving the monarch personally. Many features of modern bureaucracy, **regular salaries, pensions and open recruitment**, grew out of efforts to move away from public employment as personal service to the monarch.\n\n**Weber.** The first systematic study was made by the German sociologist **Max Weber** (1864-1920). His model: a **disciplined hierarchy** in which salaried officials, recruited and promoted on **merit**, reach **rational decisions based on explicit rules**. Public service as **professional and legalistic**, not managerial and business-like. His main claim: bureaucracy makes the state more **efficient**, bringing the techniques of industry and military organisation to civil affairs."
      },
      {
        "type": "tabel",
        "kop": [
          "Figure 10.3: Weber’s model (book)",
          "Quality"
        ],
        "rijen": [
          [
            "Work",
            "A carefully defined division of tasks"
          ],
          [
            "Decisions",
            "Reached by methodically applying rules to particular cases"
          ],
          [
            "Recruitment",
            "Based on proven, or at least potential, competence"
          ],
          [
            "Careers",
            "Secure jobs and salaries; promotion by seniority and merit"
          ],
          [
            "Structure",
            "A disciplined hierarchy: lower officials subject to their superiors"
          ]
        ]
      },
      {
        "type": "tekst",
        "tekst": "**North America: the spoils system.** Weber was influential in continental Europe, much less in North America, where civil services developed pragmatically. The original US philosophy was government by the common person: almost every citizen was assumed qualified for almost every public job, and a professional civil service was seen as elitist. This populist view underpinned the **spoils system**, after Senator William Marcy's 1832 phrase \"to the victor belong the spoils\": a new president replaced nearly all federal employees with supporters. It lasted at least until the **Pendleton Act of 1883**, which created a Civil Service Commission to recruit on merit. Canada introduced the merit principle in 1908 and fully in 1918.\n\n**Growth.** Most countries created departments in a similar sequence: first **finance, law and order, defence and foreign affairs** (Britain's treasury dates back at least to 1066), later agriculture, trade and labour. The Great Depression and two world wars expanded government; the **welfare state** after World War II needed a massive apparatus for grants, allowances and pensions, with new departments for social security, education, health and housing, later environment and women's affairs. By the 1970s public employment was almost a third of the workforce in Britain and the Nordic countries.\n\n**Reform 1: outsourcing.** Declining faith in bureaucratic solutions led to **outsourcing**: employing private contractors for services previously provided by the bureaucracy, mainly to save money. Examples: garbage collection, water treatment, **security services**, IT support, managing schools and hospitals, even private prisons.\n\n**For:** competition between contractors encourages efficiency, customer satisfaction and lower costs, and makes it easier to end under-performance.\n**Against:** without careful choice and monitoring, service quality can fall; there is **less direct and political accountability**; newcomers have less knowledge and experience; and not everything can be outsourced (**policing**, for example).\n\n**Reform 2: new public management (NPM).** Introduced in the early 1980s by Reagan (US) and Thatcher (UK): use **private-sector methods** to improve efficiency and responsiveness, make managers more accountable, and **cut public spending** (Christensen and Lægreid, 2016). Its tools: splitting organisations up, creating autonomous and **single-purpose agencies**, giving managers freedom, and letting public and private providers compete for contracts. It was a sharp break with Weber's idea that a bureaucrat simply applies fixed rules.\n\n**New Zealand** went furthest, in \"the most comprehensive and radical set of reforms of any Western democracy\" (Pollitt and Bouckaert, 2017): heavy use of contracts, even for debt collection, and a **fall of almost 75 per cent** in central government bureaucrats between 1988 and 2000.\n\n**Size.** Interest in NPM has peaked, but its effects show in the numbers (Figure 10.4): the Nordic states have the largest public sectors (Norway above 30 per cent of the workforce), reflecting their welfare states; South Korea and Japan the smallest, Japan because many bureaucrats work locally, because of privatisation (Japan National Railways, NTT) and because of scandals.\n\n**Reform 3: e-government.** The newest trend: using the internet for communication between governments, departments and citizens, to find information, apply for benefits or make appointments. Most advanced in wealthy countries (Figure 10.5: Denmark first).\n\n**For:** easier access for citizens and lower costs.\n**Against:** risk of **cyberattacks**, easier **surveillance** of citizens, and political misuse such as the unauthorised transfer of data to companies or foreign states. Public suspicion grows with awareness that governments can access texts, calls and internet use in response to security threats. And internet access remains **unequal**, between and within countries (Australia's dispersed rural population)."
      },
      {
        "type": "uitleg",
        "tekst": "**From the lecture**\n\n**Weber's five principles in the lecture.** The slide defines modern bureaucracy (Weber) as **a structured hierarchy in which paid officials reach rational decisions by applying explicit rules to the facts before them**, and then gives five principles of modern bureaucratic organisation:\n\n**Centralisation**: decision-making concentrated in one particular location.\n**Hierarchy**: super- and subordination of services and persons.\n**Formalisation**: capturing actions, decisions and rules **in writing** (\"paperwork\").\n**Standardisation**: routinised behaviour on the basis of rules.\n**Specialisation**: limiting tasks on the basis of expertise and efficiency.\n\nHow they map onto the book's Figure 10.3: **hierarchy** = the book's structure; **specialisation** = the book's work (division of tasks); **standardisation** and **formalisation** together = the book's decisions (applying written rules to cases). The book's **recruitment** and **careers** (merit and secure careers) are not in the lecture's list, and the lecture's **centralisation** is not in the book's. Know both lists.\n\n**The timeline slide** gives the evolution in five stages:\n\n1. **Agents of royal households**: clerical servants serving under personal instruction from the ruler, crucial in collecting taxes and distributing royal charities.\n2. **Agents of the modern state**: regular salaries and open recruitment; public employment changes from personal service to civil service.\n3. **Early twentieth-century bureaucracies**: authority is impersonal but formal (rules and processes), hierarchical and centralised; bureaucracies become professionalised and legalistic. This is Weber's bureaucracy.\n4. **Mid to late twentieth century**: the public sector becomes more managerial and business-like; quality is determined by how civil servants are **recruited** and how they are **made accountable**.\n5. **Twenty-first century**: **new public management** (outsourcing public functions to private organisations) and **e-government** (easier access to public services, but more vulnerability to cyberattacks).\n\nThe lecturer's notes define NPM the same way as the book: a trend from the late twentieth century in which private company methods are used to improve efficiency and responsiveness, improve the independence and accountability of managers, and above all **cut public spending**."
      },
      {
        "type": "tekst",
        "titel": "10.3 How bureaucracies are organised",
        "toetsstof": true,
        "tekst": "Bureaucracies differ in structure and labels between countries, but there are three main levels: **departments, divisions and non-departmental public bodies**.\n\n**Departments (or ministries).** The centrepiece: usually **12 to 24**, almost always including foreign affairs, internal affairs, the economy, justice, health and the environment. They usually have **cabinet-level status**: headed by a secretary or minister who sits in the cabinet. The mix varies (the US has a cabinet-level Department of Veterans Affairs; Nigeria separate departments for energy, petroleum and power), and departments are renamed, split and merged as circumstances change (Britain's Brexit department 2016-20).\n\n**Inside a department.** Following Weber, the structure is hierarchical. At the top: **political appointees** (the minister and deputies), who come and go. Below: the **permanent career civil service**, headed by a senior official who runs the administration and forms the bridge between political and administrative levels. In theory ministers direct and bureaucrats execute. In practice, the **behavioural approach** shows it is more complicated: permanent officials have **longer service, deeper experience, more information and denser networks** than the transient minister, and ministers are usually poorly prepared to lead them.\n\n**Two factors increase political control:**\n1. The **number of appointments** a minister can make within the department: the more, the easier to impose a direction.\n2. **Political advisory staff**: advisers who are not part of the permanent staff act as the minister's eyes and ears. In France each minister has a **personal cabinet** of 15 to 20 advisers; the European Commission copies this model. Career bureaucrats know they can outlast a difficult minister; advisers know their job depends on supporting the current one."
      },
      {
        "type": "voorbeeld",
        "tekst": "**Spotlight 10: Japan**\n\nA unitary parliamentary democracy with a ceremonial emperor, and the book's example of a remarkably **powerful bureaucracy**.\n\n**Exclusive**: in 2017 only 1,900 of more than 20,500 candidates (9 per cent) passed the civil service entrance exam. The job has high status, good benefits and attractive post-retirement jobs in business and local government.\n\n**Why so powerful**: a relatively weak legislature and weak parties, a **high turnover of ministers** (short-lived administrations), close links between departments and the sectors they serve, and the power to issue **ordinances** that clarify the technical content of laws but often change their intent. A civil servant once joked that power in Japan is held \"90 per cent by bureaucrats and only 10 per cent by politicians\".\n\n**History**: the bureaucracy guided post-war reconstruction, closely intertwined with the ruling Liberal Democratic Party and big business: the model of a small, merit-based bureaucracy guiding growth by persuasion. In the 1990s this weakened through deflation, bribery scandals and globalised companies that no longer needed guidance. It remains powerful, professional, **male-dominated** and small."
      },
      {
        "type": "tekst",
        "tekst": "**Divisions.** Departments are split into **divisions** or sections, each responsible for part of the department's work. Table 10.1 gives Australia's Department of Home Affairs, whose divisions and agencies range from the **Border Force**, the Federal Police and the Security Intelligence Organization to the Criminal Intelligence Commission, the Centre for Counter-Terrorism Coordination and a Cyber Security Police Division: a good picture of how a security ministry is built.\n\nDivisions are \"the **workhorses** of government, the store of its experience\", and in practice where many important decisions are made. Organisation charts are misleading: information rarely moves smoothly up and down. Germany's federal ministries have divisions whose **concentration of expertise** lets them block or get around reforms from the top: **a monopoly of knowledge creates the potential to neutralise change**. Divisions also develop their own **in-house view**, which breeds cynicism towards the latest political initiative and frustrates new ministers.\n\n**Non-departmental public bodies (NDPBs).** Organisations at one remove from the departments, with at least semi-independence, growing in number everywhere: **state-owned entities** (postal or health services), agencies contracted to deliver services, **advisory** agencies and **regulatory** agencies. Created and funded by government, but free from day-to-day ministerial control. **Why they exist:**\n\n1. They are more **flexible and cheaper** than departments.\n2. They can be a response to short-term pressure to \"do something\".\n3. They let departments **focus on policymaking**.\n4. They **protect** day-to-day operations from political interference.\n\n**Regulatory agencies** oversee the implementation of regulations in areas such as natural monopolies (water, energy), communications, elections, food standards and the environment. They are increasing because some risks cannot be left to the private sector: weighing a new drug's benefits against its side effects is a job for public-minded experts, not profit-making companies. Britain has over 140 (from the Food Standards Agency to Ofcom). The US has the oldest system, starting with the Interstate Commerce Commission (1887-1995), and its commissioners do not report to the president and can only be dismissed for reasons set out in law. The **EU** has built an expanding set of specialised agencies (medicines, food safety, aviation and maritime safety, disease prevention) and often sets global standards."
      },
      {
        "type": "tekst",
        "titel": "10.4 How bureaucrats are recruited",
        "toetsstof": true,
        "tekst": "Recruitment is at the heart of the debate: how bureaucrats are selected tells you much about a bureaucracy. It connects to the debate about representation in legislatures: should the bureaucracy **look like** the people it serves, or serve everyone equally regardless of who they are?\n\n**Unified versus departmental recruitment.**\n\n**Unified recruitment** means recruitment to the civil service **as a whole**, not to a specific job: administration is seen as the art of judgement, requiring intelligence and education rather than technical knowledge. **Britain** is the example: a good administrator serves in several departments and is more rounded for it. A variation is recruitment to a **corps**: **France** recruits by competitive examination into bodies such as the Diplomatic Corps and the Finance Inspectorate, which are elites in which more than a third of members work outside their home corps at any time.\n\n**Departmental recruitment** means recruiting **specialists** with technical backgrounds to a specific department: economists for finance, medically trained staff for health. Staff who leave often go to similar private-sector jobs. It is common in countries with a relatively **weak state**: the **Netherlands**, New Zealand, the US. In the Netherlands each department sets its own recruitment standards, usually requiring prior expertise, and staff typically stay in the same department for their whole career (Andeweg and Irwin, 2020). The idea of an elite, unified civil service is weak or absent.\n\n**Affirmative action.** An exception to selection on merit: policies to overcome past discrimination by recruiting women, ethnic minorities and other under-represented groups, because the higher levels were dominated by men from middle- or upper-class families. **Arguments in favour:**\n\n1. Bureaucrats who belong to the group they deal with will **perform better** with that group.\n2. A varied public sector encourages **stability** in divided societies.\n3. A representative bureaucracy makes decisions more **acceptable** to the public.\n4. Employing minorities in the public sector **ripples through** the labour market.\n\n**Women.** In democracies women make up a **larger share** of the government workforce than of the labour force as a whole (Figure 10.6: Sweden over 70 per cent). This is due to affirmative action and to flexible working, parental leave and childcare, but also to the over-representation of women in secretarial, part-time and care jobs; they remain **under-represented at the top**. The book sees this as both a **cause** of women's unequal place in politics (their perspective is heard less) and a **reflection** of it."
      },
      {
        "type": "uitleg",
        "tekst": "**Using Theory 10: feminism**\n\nThe chapter uses the imbalance in bureaucracies to introduce feminism: \"the theory and advocacy of the political, economic and social equality of the sexes\". The study of politics is still dominated by men, and you cannot understand any field without multiple perspectives. Feminist ideas began in the late nineteenth century with the fight for rights such as the vote, and moved on to critiquing the **gendering of political institutions** and processes: how far they are fair, just, equitable and representative, and how far they incorporate feminist views and values.\n\nThere are many types: liberal, radical, Marxist, socialist, ecological, libertarian, postmodernist, Western and Third World. Bryson (2016): Western political theory \"has been almost entirely written by men\"; feminist theory asks why men have more power in virtually all societies and how that can change: it \"seeks to understand society in order to challenge and change it\". A newer idea is **governance feminism** (Halley et al., 2018): feminist ideas have entered the institutions of governance and changed laws and practices, from the vote to property rights and equal access to education and jobs."
      },
      {
        "type": "tekst",
        "titel": "10.5 Bureaucracies in authoritarian regimes",
        "toetsstof": true,
        "tekst": "**The contrast: Kenya.** Against New Zealand the book sets **Kenya**, a hybrid regime described as \"one of the most predatory states in Africa\", where paying bribes to police and bureaucrats is routine and public service corruption is \"rampant\". The causes are not fully understood beyond poverty, weak political leadership and ethnic divisions.\n\n**Same roles, different use.** Authoritarian bureaucracies have the same two roles, but used differently. **Advice**: autocrats want only advice that supports their control and benefits the elite. **Implementation**: the focus is on advancing the elite's interests, even at the cost of worse policy, hence the low scores on the Worldwide Governance Indicators. Figure 10.7 shows the most troubled states (Equatorial Guinea, Afghanistan, the DRC, Haiti, Somalia, Yemen) making little or no progress in 20 years; Haiti (earthquake 2010) and Yemen (civil war from 2014) got worse, while the end of war improved governance in Bosnia, Burundi, Ethiopia and Liberia.\n\n**Dictators need bureaucrats.** In most chapters the difference between democracies and authoritarian regimes is clear. Not here: dictators can manipulate or abolish elections and legislatures, but **they cannot govern without officials** to keep the country running. **Nigeria** is the example: its military governments always kept the bureaucracy (in 1983-99 the ruling council worked with a group of senior bureaucrats to implement its orders). Yet Nigeria has made no progress in government effectiveness since civilian rule returned in 1999, because of corruption built into society (149th of 179 in the 2020 Corruption Perceptions Index).\n\n**When authoritarian bureaucracies drive development.**\n\n**Bureaucratic authoritarianism** (Guillermo O'Donnell, 1973): bureaucrats in Argentina, Brazil, Chile and Uruguay ruthlessly pursued economic reform under the cover of repressive military rule. The pattern recurred in Indonesia and Malaysia, and in several cases helped pull countries **out** of authoritarianism.\n\n**The developmental state** (or hard state), first used by Johnson (1982) for **Japan**: a late-industrialising country pushed forward by active government intervention, with economic policy guided by powerful bureaucratic elites. Examples include flawed democracies (India, Indonesia, Malaysia, Thailand) and authoritarian regimes (China, Vietnam). Rapid growth can later create pressure to democratise. **China** moved from a revolutionary to a developmental state (So, 2015): its autonomy lets it make and implement policy, suppress dissent to reassure investors, and let bureaucrats turn state enterprises into profit-makers.\n\n**Crony capitalism**: development based on close relationships between officials and business, through tax breaks and favouritism in contracts and permits. Found in China and Russia, but also in democracies. Pei (2016) calls it \"collusion among elites\", more destructive than individual corruption because it undermines the state's organisational fabric and can turn local governments into \"local mafia states\". It prompted Xi Jinping's anti-corruption drive from 2012.\n\n**When they block development: the predatory state.** A state that works in the private interest of dominant groups (leaders, military, senior bureaucrats) rather than building the country's potential. Such states hover near failure: Burundi, the Central African Republic, Chad, the DRC, Guinea, Mali, Niger, Somalia, Sudan. Kalu et al. (2018) trace the problem to **colonialism**: post-colonial African states \"inherited governance structures that were designed to support exploitation of the masses for the benefit of a few\", and new \"big men\" built on them. **Resources** make it worse: **Equatorial Guinea**, ruled by Teodoro Obiang since 1979, found oil in the 1990s but is now one of the poorest and most corrupt countries, while the ruling family grew rich.\n\nIn many predatory states, public jobs are used as **political rewards** and to absorb unemployed graduates, and kinship obliges officials to favour their family and ethnic group. The result: bloated, over-politicised, inefficient bureaucracies and a **bureaucratic bourgeoisie** for whom public employment is \"the highway to riches\". Only recently, under international pressure, has the emphasis shifted to building **administrative capacity**.\n\n**A career path to power.** In both democracies and authoritarian regimes, a bureaucratic career can lead into the political elite. In **Russia**, after the Communist Party lost its role, the bureaucracy became the key path to high office (Huskey, 2010), producing an unrepresentative, closed elite in which \"the only protection comes from membership in an informal network or, increasingly, loyalty to the president\". Putin's centralisation created dozens of separate federal chains of command and an explosion of federal employees, strengthening his control.\n\n**Conclusion.** Authoritarian bureaucracies resemble democratic ones, but are used more openly for control and patronage, as was once common in democracies too, and so suffer more corruption and inefficiency."
      },
      {
        "type": "checklist",
        "titel": "Summary",
        "toetsstof": true,
        "items": [
          "A bureaucracy is the network of departments and agencies beneath the political executive, with two roles: advice before policy is made and implementation afterwards.",
          "Weber’s model is the starting point: a disciplined hierarchy of salaried, merit-recruited officials applying explicit rules. The lecture lists five principles: centralisation, hierarchy, formalisation, standardisation, specialisation.",
          "The US spoils system gave way to merit recruitment with the Pendleton Act (1883). Bureaucracies grew with the welfare state, then were reformed through outsourcing, new public management and e-government, each with costs and benefits.",
          "Bureaucracies are organised in departments (ministries), divisions and non-departmental public bodies, including regulatory agencies. Permanent officials often have the advantage over transient ministers; appointments and political advisers increase control.",
          "Recruitment is unified (Britain, France’s corps) or departmental (the Netherlands, New Zealand, the US); affirmative action aims at a more representative bureaucracy.",
          "Accountability is indirect and often informal (whistleblowing); the ombudsman is a structured alternative.",
          "In authoritarian regimes bureaucracies are indispensable: they can drive development (bureaucratic authoritarianism, the developmental state) or feed corruption (crony capitalism, the predatory state)."
        ]
      },
      {
        "type": "begrippen",
        "items": [
          {
            "begrip": "Bureaucracy",
            "definitie": "Literally, rule by officials (French bureau plus Greek kratos). The people and organisations that form the public administration: all salaried public officials who advise on and apply policy decisions."
          },
          {
            "begrip": "Public administration",
            "definitie": "The implementation of government policy."
          },
          {
            "begrip": "Advice and implementation",
            "definitie": "The two roles of bureaucracies: advising political leaders before policy is made, and overseeing its consistent implementation afterwards."
          },
          {
            "begrip": "Red tape",
            "definitie": "The classic image of bureaucracies tied up in procedures and rules, from the sixteenth-century habit of binding official documents in red tape."
          },
          {
            "begrip": "Iron cage",
            "definitie": "Weber’s image of bureaucracy: a form of organisation that makes government predictable by applying general rules to specific cases, but can also trap people in rationality and rules."
          },
          {
            "begrip": "Organisation",
            "definitie": "A system of means oriented to the performance of specific goals. From lecture 3."
          },
          {
            "begrip": "Institution",
            "definitie": "An organisation that structures social order and governs behaviour in a community; it confers stability and predictability, a particular rationality, and particular values and norms. From lecture 3."
          },
          {
            "begrip": "Institutionalisation",
            "definitie": "The process by which groups and organisations become invested with authority to perform specific tasks on behalf of a community and society. From lecture 3."
          },
          {
            "begrip": "Government effectiveness (World Bank)",
            "definitie": "One of the six Worldwide Governance Indicators: perceptions of the quality of public services and the civil service and its independence from political pressure."
          },
          {
            "begrip": "Whistleblowing",
            "definitie": "Going public with wrongdoing in a government department or large organisation, such as fraud, corruption or inefficiency. Informal, after the fact and risky (Snowden)."
          },
          {
            "begrip": "Ombudsman",
            "definitie": "A public official appointed by a legislature to investigate allegations of maladministration in the public sector. First in Sweden (1809)."
          },
          {
            "begrip": "Meritocracy",
            "definitie": "A system in which careers and leadership are based on talent, qualifications and achievement. Imperial China created the first, through examinations."
          },
          {
            "begrip": "Spoils system",
            "definitie": "A patronage system in which elected politicians hand out government jobs to supporters (\"to the victor belong the spoils\"). In the US until the Pendleton Act of 1883."
          },
          {
            "begrip": "Pendleton Act (1883)",
            "definitie": "The US law that created a Civil Service Commission to recruit federal employees on merit, ending the spoils system."
          },
          {
            "begrip": "Outsourcing",
            "definitie": "Employing private contractors to provide services previously provided by the public bureaucracy, such as waste collection, security services or prisons."
          },
          {
            "begrip": "New public management (NPM)",
            "definitie": "An approach from the 1980s (Reagan, Thatcher) that uses market principles and private-sector methods to make bureaucracy more efficient and responsive, and to cut spending."
          },
          {
            "begrip": "E-government",
            "definitie": "Using information and communication technology to provide public services; also called digital era governance."
          },
          {
            "begrip": "Department (ministry)",
            "definitie": "An administrative unit directly managed by a minister or secretary; hierarchical, often set up by statute, usually with cabinet-level status."
          },
          {
            "begrip": "Division",
            "definitie": "An operating unit of a department, responsible to the minister but often with considerable independence; the workhorse of government."
          },
          {
            "begrip": "Political advisers",
            "definitie": "Staff who serve a minister personally rather than the department, acting as the minister’s eyes and ears; in France a personal cabinet of 15 to 20."
          },
          {
            "begrip": "Non-departmental public body",
            "definitie": "An organisation at one or more removes from government, created and funded by it but free from day-to-day ministerial control."
          },
          {
            "begrip": "Regulatory agency",
            "definitie": "An independent government body created to set and enforce standards in a focused area, such as energy, food safety or communications."
          },
          {
            "begrip": "Unified recruitment",
            "definitie": "Recruitment to the civil service as a whole rather than to a specific job, valuing intelligence and education over technical knowledge (Britain; France’s corps)."
          },
          {
            "begrip": "Departmental recruitment",
            "definitie": "Recruiting people with technical backgrounds to a specific department or job (the Netherlands, New Zealand, the US)."
          },
          {
            "begrip": "Corps",
            "definitie": "In France, an elite body of civil servants recruited by competitive examination, such as the Finance Inspectorate, whose members often work outside their home corps."
          },
          {
            "begrip": "Affirmative action",
            "definitie": "Policies to overcome past discrimination by recruiting women, ethnic minorities and other under-represented groups into the bureaucracy."
          },
          {
            "begrip": "Feminism",
            "definitie": "The theory and advocacy of the political, economic and social equality of the sexes."
          },
          {
            "begrip": "Governance feminism",
            "definitie": "Halley et al. (2018): every form in which feminists and feminist ideas exert a governing will, through changed laws, institutions and practices."
          },
          {
            "begrip": "Bureaucratic authoritarianism",
            "definitie": "O’Donnell (1973): regimes in which bureaucrats impose economic reform and stability under the protection of a military government (Argentina, Brazil, Chile, Uruguay)."
          },
          {
            "begrip": "Developmental state",
            "definitie": "A state that intervenes heavily in the economy through regulation and planning, relying on an efficient bureaucratic elite (Johnson, 1982, on Japan; later China)."
          },
          {
            "begrip": "Crony capitalism",
            "definitie": "Economic development based on close ties between officials and business leaders: tax breaks and favouritism in contracts, permits and grants. \"Collusion among elites\" (Pei)."
          },
          {
            "begrip": "Predatory state",
            "definitie": "A state that works in the private interest of dominant groups (bureaucrats, the military, leaders) rather than building national potential (Equatorial Guinea)."
          },
          {
            "begrip": "Bureaucratic bourgeoisie",
            "definitie": "In predatory states, the class for whom public employment has become the highway to riches."
          },
          {
            "begrip": "Administrative capacity",
            "definitie": "The ability of a bureaucracy to address social problems through effective management and implementation of public policy."
          },
          {
            "begrip": "Weber’s five principles, lecture (list)",
            "definitie": "1. Centralisation: decisions in one location. 2. Hierarchy: super- and subordination. 3. Formalisation: rules and decisions in writing. 4. Standardisation: routine behaviour by rules. 5. Specialisation: tasks limited by expertise and efficiency."
          },
          {
            "begrip": "Weber’s model, book (list)",
            "definitie": "1. Work: a defined division of tasks. 2. Decisions: applying rules to cases. 3. Recruitment: on competence. 4. Careers: secure, promotion by seniority and merit. 5. Structure: a disciplined hierarchy."
          },
          {
            "begrip": "Timeline of bureaucracy (list)",
            "definitie": "1. Agents of royal households. 2. Agents of the modern state: salaries, open recruitment. 3. Early 20th century: impersonal, formal, hierarchical, professional (Weber). 4. Mid to late 20th century: managerial and business-like; recruitment and accountability decide quality. 5. 21st century: new public management and e-government."
          },
          {
            "begrip": "Three views of bureaucracy (list)",
            "definitie": "1. Iron cage (Weber): predictability through general rules. 2. Machine. 3. Red tape. Right-wing view: government means bureaucracy, inefficient, curtail it. Left-wing view: public bureaucracy can be made to do the job."
          },
          {
            "begrip": "Outsourcing: for and against (list)",
            "definitie": "For: 1. Competition. 2. Efficiency and customer care. 3. Lower costs. 4. Easier to end under-performance. Against: 5. Quality can fall without monitoring. 6. Less political accountability. 7. Less experience. 8. Not everything can be outsourced (policing)."
          },
          {
            "begrip": "E-government: for and against (list)",
            "definitie": "For: 1. Easier access for citizens. 2. Lower costs. Against: 3. Cyberattacks. 4. Easier surveillance of citizens. 5. Political misuse of data. 6. Unequal internet access."
          },
          {
            "begrip": "Three levels of bureaucratic organisation (list)",
            "definitie": "1. Departments or ministries (12 to 24, cabinet-level). 2. Divisions: the operating units. 3. Non-departmental public bodies, including regulatory agencies."
          },
          {
            "begrip": "Why non-departmental public bodies exist (list)",
            "definitie": "1. More flexible and cheaper. 2. A response to pressure to do something. 3. Departments can focus on policy. 4. Protection from political interference."
          },
          {
            "begrip": "Arguments for affirmative action (list)",
            "definitie": "1. Staff from the group served perform better with that group. 2. Stability in divided societies. 3. More acceptable decisions. 4. A ripple effect in the labour market."
          },
          {
            "begrip": "Channels of bureaucratic accountability (list)",
            "definitie": "1. The minister of the department. 2. The executive. 3. Legislatures and their committees (the purse). 4. Courts. 5. Contracts tied to performance (outsourcing). 6. The ombudsman. 7. Informally: whistleblowing."
          }
        ]
      }
    ]
  },
  {
    "id": "toepassen",
    "titel": "Applying it",
    "blokken": [
      {
        "type": "stappen",
        "titel": "A method for classifying any executive",
        "items": [
          {
            "titel": "How is the head of government chosen?",
            "tekst": "Directly by the voters, or by (and out of) the legislature? Direct points to presidential or semi-presidential; via the legislature to parliamentary."
          },
          {
            "titel": "Is there a separate head of state?",
            "tekst": "If the president is also head of government, it is presidential. A monarch or ceremonial president next to a prime minister points to parliamentary."
          },
          {
            "titel": "Who can remove whom?",
            "tekst": "Can the legislature bring down the government with a confidence vote? Can the president dissolve the legislature? Can the legislature remove the president only by impeachment?"
          },
          {
            "titel": "Is there a president with real power next to a prime minister?",
            "tekst": "Then it is semi-presidential. Ask who the prime minister answers to: only the legislature (premier-presidential) or also the president (president-parliamentary)."
          },
          {
            "titel": "Do the constitutional limits actually work?",
            "tekst": "Free elections, term limits that are respected, courts and legislature that can say no? If not, whatever the formal type, it is an authoritarian executive."
          }
        ]
      },
      {
        "type": "oefening",
        "id": "gov-c3-oef-1",
        "niveau": "basis",
        "vraag": "Classify the Dutch executive with the method above, and place it in one of the three models of parliamentary government. Name the head of state and the head of government, and say which of the three outcomes (majority, coalition, minority) describes the current cabinet.",
        "antwoord": "**Type: parliamentary.** The government comes out of the Tweede Kamer and depends on its confidence; the prime minister is not directly elected and has no fixed term; there is a separate head of state.\n\n**Head of state:** King Willem-Alexander, a constitutional monarch (hereditary, above politics, the dignified part in Bagehot's terms). **Head of government:** Prime Minister Rob Jetten (the efficient part).\n\n**Model: ministerial government.** The book's own example: the Dutch prime minister does not appoint, dismiss or reshuffle ministers; ministers serve with, not under, the prime minister and owe loyalty to their party. The prime minister is more a skilled conciliator than a chief.\n\n**Outcome: a minority coalition.** Since 23 February 2026, D66, VVD and CDA govern without a majority in the Tweede Kamer, so every law needs support from part of the opposition, like Sweden in 2014."
      },
      {
        "type": "oefening",
        "id": "gov-c3-oef-2",
        "niveau": "basis",
        "vraag": "Explain the difference between a head of state and a head of government, using Bagehot. Why is the difference easier to see in the United Kingdom than in the United States?",
        "antwoord": "The **head of state** represents the whole state, is expected to rise above politics and has a largely symbolic role: Bagehot's **dignified** part of the constitution, which \"excites and preserves the reverence of the population\". The **head of government** is the political leader who actually runs the government and is openly partisan: the **efficient** part, \"by which it in fact works and rules\".\n\nIn the **UK** the two are held by **different people**: the monarch (dignified) and the prime minister (efficient), so you can see which is which. In the **US** both roles are **combined in one office**, the president, who mixes the symbolic and the political: the same person hosts state visits as the nation's representative and fights partisan battles with Congress."
      },
      {
        "type": "oefening",
        "id": "gov-c3-oef-3",
        "niveau": "gevorderd",
        "vraag": "France, 1997: President Chirac's party loses the parliamentary election and the socialists win a majority in the National Assembly. Explain what happens next, which term describes it, and why this cannot happen in the same way in the United States.",
        "antwoord": "**What happens.** France is semi-presidential (premier-presidential): the president appoints the prime minister, but the prime minister must have the support of the National Assembly, which can force the government out with a vote of censure. With a socialist majority, Chirac had little choice but to appoint a socialist prime minister, **Lionel Jospin**, and share power with him until 2002.\n\n**The term: cohabitation.** The president keeps his hold on foreign affairs and defence and his formal powers (dissolving the Assembly, calling referendums), while the prime minister, backed by the Assembly, runs domestic policy. In effect it is a grand coalition between rivals, and a platform from which the prime minister can prepare a presidential run.\n\n**Why not in the US.** In a presidential system the government does not come out of Congress and does not need its confidence. A president facing a Congress controlled by the other party (divided government) stays in charge of the whole executive and appoints his own cabinet; the result is not power-sharing but possible **deadlock**, because each branch can block the other."
      },
      {
        "type": "oefening",
        "id": "gov-c3-oef-4",
        "niveau": "gevorderd",
        "vraag": "A municipality wants to outsource the surveillance of its parking garages and night-time city centre to a private security company. Use chapter 10 to give two arguments for and two against, and say where you would draw the line.",
        "antwoord": "**For.** (1) **Competition** between security companies encourages efficiency and lower costs, and the contract can be ended if the company under-performs. (2) Private companies can scale up and down more **flexibly** than a department, for instance for events or seasons.\n\n**Against.** (1) **Less political accountability**: citizens cannot hold a private guard to account through the council or elections in the way they can the police; accountability runs through the contract. (2) **Quality** can fall without careful selection and monitoring, and a newcomer may lack the knowledge and experience of the public service.\n\n**Where to draw the line.** The book gives the example itself: not everything can be outsourced, and **policing** is the standard case. Surveillance and reporting (watching, calling in) can reasonably be outsourced; the use of force, arrests and anything that needs the state's legal authority should stay public. A good answer also names monitoring: clear performance criteria in the contract, reporting duties, and a route for complaints, for example to the ombudsman."
      },
      {
        "type": "oefening",
        "id": "gov-c3-oef-5",
        "niveau": "gevorderd",
        "vraag": "A newly appointed minister of Justice and Security wants to change the direction of the ministry but meets resistance from senior officials. Use chapter 10 to explain why this happens and what the minister can do about it.",
        "antwoord": "**Why.** In theory ministers direct and bureaucrats execute, but the behavioural approach shows the reverse can happen. Permanent officials have **longer service, deeper experience, more information and denser networks** than a transient minister. **Divisions** hold a concentration of expertise, and \"a monopoly of knowledge creates the potential to neutralise change\" (the German example). Divisions also have their own **in-house view**, which breeds cynicism towards the latest political initiative. And career officials know they can **outlast** a difficult minister.\n\n**What the minister can do.** The book names two factors: (1) the **number of appointments** the minister can make within the department: the more key posts filled with people who share the direction, the easier; (2) **political advisory staff**, who are not part of the permanent staff and act as the minister's eyes and ears, as in the French ministerial cabinets. You could add the recruitment angle: in the Netherlands' departmental recruitment, officials often spend their whole career in one ministry, which makes the in-house view stronger."
      },
      {
        "type": "oefening",
        "id": "gov-c3-oef-6",
        "niveau": "gevorderd",
        "vraag": "Compare a developmental state with a predatory state. What role does the bureaucracy play in each, and what makes a country end up as one or the other? Give an example of each.",
        "antwoord": "**Developmental state.** The state intervenes heavily in the economy through regulation and planning, guided by an **efficient bureaucratic elite** that serves national development. Example: **Japan** after the war (Johnson, 1982), later South Korea and **China** (So, 2015), where state autonomy lets bureaucrats plan, reassure investors and make state enterprises profitable. Growth can later create pressure to democratise.\n\n**Predatory state.** The state serves the **private interests** of leaders, the military and senior bureaucrats instead of national potential. The bureaucracy is used for **patronage** (jobs as rewards, absorbing graduates), kinship ties oblige officials to favour family and ethnic group, and it becomes bloated and over-politicised: a **bureaucratic bourgeoisie**. Example: **Equatorial Guinea**, where oil wealth enriched the ruling family while most citizens stayed poor.\n\n**What decides it.** Kalu et al. (2018) point to **colonialism**: states that inherited institutions built to exploit the many for the few, and \"big men\" who built on them. **Resources** such as oil deepen the opportunities for corruption (the resource curse). And **crony capitalism** sits in between: even a developmental state like China can be eaten away by collusion between officials and business, which is why Xi launched an anti-corruption drive."
      }
    ]
  },
  {
    "id": "checken",
    "titel": "Check yourself",
    "blokken": [
      {
        "type": "quiz",
        "titel": "Sixteen questions on chapters 8 and 10",
        "vragen": [
          {
            "vraag": "Which of these does the political executive NOT do?",
            "opties": [
              "Set policy priorities",
              "Oversee the implementation of policy",
              "Interpret the law",
              "Lead the response to crises"
            ],
            "juist": 2,
            "uitleg": "Interpreting laws is the job of the judiciary; making them is the job of the legislature. The executive leads, decides and oversees implementation."
          },
          {
            "vraag": "According to the lecture, which statement is true?",
            "opties": [
              "Governing without an executive is possible, but not without a parliament",
              "Governing without a parliament or a judiciary is possible, but governing without an executive is not",
              "A government needs all three branches to exist",
              "The bureaucracy can replace the executive"
            ],
            "juist": 1,
            "uitleg": "The lecture’s line: you can govern without a parliament or courts (authoritarian regimes do), but never without an executive."
          },
          {
            "vraag": "Bagehot’s \"dignified\" part of the constitution refers to:",
            "opties": [
              "The parts that actually govern",
              "The parts that excite and preserve the reverence of the population",
              "The written constitution",
              "The judiciary"
            ],
            "juist": 1,
            "uitleg": "Dignified: the symbolic, reverence-inspiring parts (the head of state). Efficient: the parts by which the constitution actually works and rules (the head of government)."
          },
          {
            "vraag": "Which is a feature of a presidential executive?",
            "opties": [
              "The president can dissolve the legislature",
              "The government needs the confidence of the legislature",
              "Fixed terms, and neither president nor legislature can normally bring down the other",
              "The president usually sits in the legislature"
            ],
            "juist": 2,
            "uitleg": "Fixed terms and mutual independence; the legislature can only remove the president by impeachment. The other options describe parliamentary features."
          },
          {
            "vraag": "What does the book call the key weakness of presidential government?",
            "opties": [
              "Too many coalitions",
              "It is winner-take-all: only one party can win the presidency",
              "The president has no fixed term",
              "The head of state is unelected"
            ],
            "juist": 1,
            "uitleg": "Winner-take-all, plus the risk of deadlock and the lack of a natural Leader of the Opposition."
          },
          {
            "vraag": "In the United States, who controls the purse strings?",
            "opties": [
              "The president",
              "The Senate alone",
              "Congress",
              "The Supreme Court"
            ],
            "juist": 2,
            "uitleg": "Congress controls the budget. The president is commander-in-chief, but only Congress declares war; treaties and appointments need the Senate."
          },
          {
            "vraag": "A government of one party without a majority, relying on informal support from other parties, is a:",
            "opties": [
              "Majority government",
              "Grand coalition",
              "Minority government",
              "Caretaker government"
            ],
            "juist": 2,
            "uitleg": "A minority government. A caretaker government is the outgoing government that stays on during coalition talks."
          },
          {
            "vraag": "In which model of parliamentary government do ministers act with little direction from the prime minister or cabinet?",
            "opties": [
              "Prime ministerial government",
              "Cabinet government",
              "Ministerial government",
              "Chancellor democracy"
            ],
            "juist": 2,
            "uitleg": "Ministerial government (Italy, Japan, the Netherlands). Chancellor democracy is the German form of prime ministerial government."
          },
          {
            "vraag": "Cohabitation occurs when:",
            "opties": [
              "Two parties form a coalition in a parliamentary system",
              "A semi-presidential president faces a legislature controlled by the opposition",
              "A president and vice-president come from different parties",
              "A monarch and a prime minister disagree"
            ],
            "juist": 1,
            "uitleg": "Cohabitation is a semi-presidential phenomenon: the president must appoint a prime minister from the opposition majority, as Chirac did with Jospin (1997-2002)."
          },
          {
            "vraag": "In a president-parliamentary system such as Russia, the prime minister and cabinet answer to:",
            "opties": [
              "Only the legislature",
              "Only the president",
              "Both the president and the legislature",
              "The courts"
            ],
            "juist": 2,
            "uitleg": "Both. In a premier-presidential system (France, Finland, Poland) only the legislature can dismiss the prime minister and cabinet."
          },
          {
            "vraag": "What is the central feature of the authoritarian executive, according to the book?",
            "opties": [
              "Strong institutions",
              "A lack of institutionalisation, replaced by personalism",
              "Regular free elections",
              "A separate head of state"
            ],
            "juist": 1,
            "uitleg": "Personalism instead of institutions, which is why succession is so insecure and \"politics comes before policy\"."
          },
          {
            "vraag": "Which pair gives the two main roles of bureaucracies?",
            "opties": [
              "Legislation and adjudication",
              "Advice and implementation",
              "Representation and leadership",
              "Recruitment and accountability"
            ],
            "juist": 1,
            "uitleg": "Advice before policy is made, implementation after. Representation and leadership are executive roles."
          },
          {
            "vraag": "Which of these is one of Weber’s five principles on the lecture slide, but not in the book’s list?",
            "opties": [
              "Hierarchy",
              "Centralisation",
              "Careers",
              "Recruitment"
            ],
            "juist": 1,
            "uitleg": "Centralisation is only in the lecture’s list. Careers and recruitment are only in the book’s list; hierarchy is in both."
          },
          {
            "vraag": "The spoils system was ended in the US by:",
            "opties": [
              "New public management",
              "The Pendleton Act of 1883",
              "The Civil Service Act 1918",
              "The Public Service Act 2020"
            ],
            "juist": 1,
            "uitleg": "The Pendleton Act (1883) created a Civil Service Commission and merit recruitment. The Civil Service Act 1918 is Canadian; the Public Service Act 2020 is New Zealand’s."
          },
          {
            "vraag": "The Netherlands recruits civil servants mainly through:",
            "opties": [
              "Unified recruitment to the civil service as a whole",
              "Recruitment into elite corps",
              "Departmental recruitment of specialists",
              "The spoils system"
            ],
            "juist": 2,
            "uitleg": "Departmental recruitment: each department sets its own standards, and staff usually stay in one department. Unified recruitment is British; corps are French."
          },
          {
            "vraag": "A state in which bureaucrats guide rapid industrialisation through heavy intervention is a:",
            "opties": [
              "Predatory state",
              "Developmental state",
              "Crony capitalist state",
              "Failed state"
            ],
            "juist": 1,
            "uitleg": "The developmental state (Johnson on Japan). A predatory state serves the private interests of the elite instead."
          }
        ]
      },
      {
        "type": "checklist",
        "titel": "Can you do this before the assessment?",
        "items": [
          "Fill in Table 8.7 (the four executives) from memory",
          "Explain head of state versus head of government with Bagehot, and give the Dutch example",
          "Give the strengths and weaknesses of presidential government and the four US checks",
          "Explain majority, coalition and minority government, and the three models of parliamentary government",
          "Explain cohabitation and the two subtypes of semi-presidentialism, with France and Russia",
          "Explain why authoritarian executives are both less constrained and less secure",
          "Define bureaucracy, give its two roles, and give both versions of Weber’s model",
          "Walk through the timeline of bureaucracy, and give the pros and cons of outsourcing, NPM and e-government",
          "Explain departments, divisions, NDPBs and regulatory agencies, and why ministers struggle to control them",
          "Compare unified and departmental recruitment, and argue for or against affirmative action",
          "Explain bureaucratic authoritarianism, the developmental state, crony capitalism and the predatory state with an example each"
        ]
      },
      {
        "type": "bronnen",
        "titel": "Sources for this lesson",
        "items": [
          {
            "apa": "McCormick, J., Hague, R., & Harrop, M. (2022). Comparative government and politics (12th ed.), chapter 8: Executives. Bloomsbury."
          },
          {
            "apa": "McCormick, J., Hague, R., & Harrop, M. (2022). Comparative government and politics (12th ed.), chapter 10: Bureaucracies. Bloomsbury."
          },
          {
            "apa": "De Sousa (2026). Lecture 3: Executives and bureaucracies. Governance & Policy, SSMS Y1 2026/27, The Hague University of Applied Sciences."
          },
          {
            "apa": "Bagehot, W. (1867). The English constitution."
          },
          {
            "apa": "Weber, M. (1946). From Max Weber: Essays in sociology."
          },
          {
            "apa": "O’Donnell, G. (1973). Modernization and bureaucratic-authoritarianism."
          },
          {
            "apa": "Johnson, C. (1982). MITI and the Japanese miracle."
          },
          {
            "apa": "Rijksoverheid (2026). Kabinet-Jetten. https://www.rijksoverheid.nl/regering/over-de-regering/kabinetten-sinds-1945/kabinet-jetten"
          }
        ]
      }
    ]
  }
];
