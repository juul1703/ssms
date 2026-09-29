/* ============================================================
   Governance & Policy, session 1
   Government and politics
   ============================================================

   Based on McCormick, Hague & Harrop (2022), Comparative
   Government and Politics, 12th ed., chapter 1.

   English version. The structural bits stay as they are on
   purpose: the LESSTOF key, the tab ids (voor, kern, toepassen,
   checken) and the field names begrip/definitie are wiring, not
   text. Translating those breaks the app silently.

   Another lesson for this course? New block underneath with
   LESSTOF['governance-policy/college-2'], or its own file.

   v101 (29 september 2026): de losse slides-les van sessie 1
   (governance-slides-1.js, LESSTOF['governance-policy/slides-1'])
   is hierin opgenomen, zonder inhoud te verliezen. Kernstof van 33
   naar 8 kopjes: zes groepen die het hoofdstuk volgen, met de
   collegestof als "From the lecture"-kaders, plus twee kopjes die
   alleen uit het college komen (public governance en metagovernance;
   de drie landen). Tijdnood-blok, beide quizzen, beide sets
   oefeningen, bronnen samengevoegd, en de flashcards van 14 naar
   48, met lijstkaarten.
   ============================================================ */

LESSTOF['governance-policy/college-1'] = [
  {
    "id": "voor",
    "titel": "Before you start",
    "blokken": [
      {
        "type": "leerdoelen",
        "items": [
          "Explain what political science and social science are, and why they are harder to do than natural science",
          "Name the six sub-fields of political science and say where comparative politics stands apart",
          "List the six benefits of comparison and illustrate each with an example",
          "Tell government and governance apart, and explain why you need both concepts",
          "Name the three features of politics and set the two opposing conceptions of politics against each other",
          "Distinguish power from authority, and apply Lukes’ three dimensions of power to a case",
          "Recognise Weber’s three sources of authority in practice",
          "Explain what a typology is, why no generally accepted one exists, and what the Democracy Index and Freedom House measure",
          "Name the two things politics is about according to this lecture",
          "Explain what makes politics collective, including the four kinds of decision a group takes",
          "Tell power, authority and legitimacy apart and say what each one does",
          "Say what a policy is, including the part everyone forgets",
          "Distinguish state from government, and name the three elements of a nation state",
          "Name the three branches of government",
          "Tell government, governance, public governance and metagovernance apart",
          "For the Netherlands, Germany and Mexico, say where the highest legal authority sits and why that differs per country"
        ]
      },
      {
        "type": "uitleg",
        "titel": "What this chapter is about",
        "tekst": "Every field has its own vocabulary. This chapter supplies the one for Governance & Policy: **government, governance, politics, power, authority**, plus the question of how you classify political systems.\n\nThe authors warn you straight away: the meaning of those terms is contested. That is not sloppiness but a feature of the social sciences. Definitions are never static and get fine-tuned as we learn more.\n\nFor the exam that means: do not memorise one definition, but learn what the argument is about."
      },
      {
        "type": "uitleg",
        "titel": "The lecture",
        "tekst": "The opening lecture of Governance & Policy, given by **Dr. Gomez Llata** on 11 September. Three parts: the planning for part 1, the learning goals, and the basic concepts.\n\nThe basic concepts are what matters, and they run partly parallel to McCormick chapter 1. But the lecturer adds concepts that are **not in the book**: legitimacy as a separate third concept, policy, public governance and metagovernance. They are in this lesson as From the lecture boxes and two From the lecture sections at the end of Core material."
      },
      {
        "type": "slimmer",
        "titel": "If you are short on time",
        "tekst": "In this order, and stop when you run out of time.\n\n**1. The To remember tab (10 minutes).** Book and lecture on one page.\n\n**2. The two From the lecture sections at the end of Core material (15 minutes).** Public governance and metagovernance, and the Netherlands, Germany and Mexico. These are only in the lecture, so you cannot find them in the book.\n\n**3. Sections 3 and 4 of Core material (25 minutes).** Government and governance, politics and power, with the lecture boxes on state and government, policy and power, authority and legitimacy.\n\n**4. Both quizzes in Check yourself (15 minutes).**\n\n**5. The rest of Core material (45 minutes).** Political science, comparison and the classification of political systems."
      },
      {
        "type": "waarschuwing",
        "titel": "The seven learning goals of the course",
        "tekst": "The slide shows them with a line across the middle. Above the line they concern **bureaucracy**, which is the first half of the semester. Below the line, **policy making**, the second half.",
        "punten": [
          "1. Identify the basic features of public organisations",
          "2. Explain the importance of organisation to the functioning of bureaucracies",
          "3. Conceptualise categories of bureaucratic employees, types of bureaucratic agencies, and the major factors shaping their work in different cultural contexts",
          "4. Distinguish public, private and mixed actors in the policy making process",
          "5. Distinguish the different phases of the policy making process",
          "6. Explain the challenges, problems and dilemmas policymakers face in different international contexts",
          "7. Explain how major obstacles and pathologies hinder the ideal of rational policy making and design"
        ]
      },
      {
        "type": "waarschuwing",
        "titel": "Two pairs that will get muddled",
        "tekst": "The two traps in this chapter, and immediately the two things most often examined.\n\n**Government versus governance.** Government is the institutions; governance is the process of collective decision-making.\n\n**Power versus authority.** Power is the capacity to act; authority is the acknowledged right to do so.\n\nPut those four words in a row now and the rest of the chapter follows by itself."
      }
    ]
  },
  {
    "id": "kern",
    "titel": "Core material: chapter 1",
    "blokken": [
      {
        "type": "tekst",
        "titel": "1. Government and political science",
        "toetsstof": true,
        "tekst": "**Why you want to understand government**\n\nThe chapter opens with the American election of 3 November 2020 and the storming of the Capitol on 6 January 2021. That is not scene-setting but a deliberate case.\n\nThe questions the authors attach are the questions of the whole course: how can a country with such a long democratic history end up in violence of this kind? How can so many people be convinced of fraud when the evidence points overwhelmingly the other way? And how did the system hold in the end?\n\nThe point they make: you can answer those questions in part by studying your own system, but you get much further by **comparing**, by looking at how different countries approach similar needs and problems."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Social science and political science**\n\nThe word *science* comes from the Latin **scientia**, knowledge. Until the nineteenth century it had a broad meaning; after that it was attached mainly to the natural sciences, and the social sciences went their own way.\n\n**Social scientists** (anthropologists, economists, geographers, historians, political scientists, sociologists) study the institutions we build, the rules we agree, the processes we use, our underlying motives, and the outcomes of our interactions.\n\nThe heart of the difficulty: human behaviour is unpredictable and resists being tied down to unchanging rules. That is why the social sciences are in many ways **harder** to study than the natural sciences, not easier.\n\n**Political science** is the branch of social science that focuses on government and politics: how institutions are structured, what role leaders play, how elections work, and why people behave as they do politically."
      },
      {
        "type": "tekst",
        "tekst": "**The sub-fields of political science**"
      },
      {
        "type": "tabel",
        "toetsstof": true,
        "kop": [
          "Sub-field",
          "Subject matter"
        ],
        "rijen": [
          [
            "Comparative politics",
            "Comparing government and politics in different settings"
          ],
          [
            "International relations",
            "Relations between states: diplomacy, foreign policy, international organisations, war and peace"
          ],
          [
            "National politics",
            "Government and politics within one state: institutions and processes"
          ],
          [
            "Political philosophy",
            "How we think about politics: authority, ethics, freedom"
          ],
          [
            "Political theory",
            "Abstract or generalised approaches to understanding political phenomena"
          ],
          [
            "Public policy",
            "The positions governments take or avoid"
          ]
        ],
        "noot": "The division differs by country and academic tradition. Law, methodology, political economy and public administration are sometimes counted as well."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**How the field itself has changed**\n\nThe comparative study of government and politics has been shaken up in recent decades. The old focus on a handful of states has widened thanks to the dramatic rise in the **number and variety** of countries available to study.\n\nFive forces are named: the end of colonialism, the beginning and end of the Cold War, the new interest in authoritarianism, the shifting global balance of power, and the worrying signs of new threats to democracy in recent years.\n\nTogether these demand a **more global approach** to understanding similarities and differences."
      },
      {
        "type": "waarschuwing",
        "tekst": "**The practical problem: the playing field is not level**\n\nThis is the box **Exploring Problems 1**, and it is examinable because it concerns the reliability of your own conclusions.\n\nSome countries are studied far more deeply than others, and **language is a potent barrier**. In English there is a vast body of research on western Europe and the United States, partly because that is where so many comparativists work and partly because those are the two academic and publishing giants. There is also a lot on countries western scholars find interesting: China, France, Germany, India, Japan, Mexico, Nigeria and Russia.\n\nFar less has been published on smaller European states, on English-speaking countries with small populations such as Australia, Canada and New Zealand, on most Latin American and sub-Saharan African states, or on smaller Asian states.\n\nRelatively little has been published about **authoritarian regimes**, partly because little data is available and partly because it is hard to ask questions there to which honest answers might be expected. In countries such as North Korea and Syria field research is all but impossible.\n\n**The consequence:** you always face the danger that your conclusions about comparative politics rest on an **incomplete sample**. The questions the book adds: should you rely less on academic work and more on reliable media and reports of international organisations? And if so, can you build the analysis and context you need on those, or does your comparison end up skewed?"
      },
      {
        "type": "uitleg",
        "tekst": "**Why comparison is so central**\n\nComparison is one of the oldest tools of political science, found in the work of Aristotle, and at the same time one of the most ordinary human activities: it lies behind almost every choice you make.\n\nSome go further and say the scientific study of politics unavoidably **is** comparative. The formulation to know: comparison is the methodological core of the scientific study of politics."
      },
      {
        "type": "tekst",
        "titel": "2. Comparison: benefits, context, rules and prediction",
        "toetsstof": true,
        "tekst": "**The six benefits of comparison**\n\nThe chapter uses Covid-19 as a way in. The same pandemic, very different outcomes:\n\n**China** had an early peak of nearly 7,000 cases in a single day in February 2020, then 20 to 50 a day for the rest of the year. By June 2021: fewer than three deaths per million inhabitants, vaccination rate 16 per cent.\n\n**The United States** went from few cases in March 2020 to a peak of 70,000 in July and more than 200,000 in December. By June 2021: about 1,800 deaths per million inhabitants, vaccination rate 51 per cent.\n\n**The Democratic Republic of Congo** saw modest peaks and had reported just over a thousand deaths in total, with barely 4,000 people vaccinated in a country of nearly 87 million.\n\nThe figures themselves say nothing about **cause**. The explanation is partly medical and cultural, but certainly also political: China is an authoritarian regime that can act quickly regardless of public opinion, and moreover a unitary state governed from the centre. The US is a federation in which states had much control over their own responses, with an administration slow to acknowledge the seriousness. The DRC is poor and unstable with weak health care and infrastructure. And with the Chinese figures there is the question of how far they can be trusted."
      },
      {
        "type": "tekst",
        "tekst": "**The six benefits in a row**"
      },
      {
        "type": "tabel",
        "toetsstof": true,
        "kop": [
          "Benefit",
          "What it delivers"
        ],
        "rijen": [
          [
            "Description",
            "Establishing the core facts: how governments are structured, how institutions work, how they perform"
          ],
          [
            "Context",
            "Knowing whether what you see is usual or unusual, efficient or not"
          ],
          [
            "Rules",
            "Drawing up regularities about politics, though these yield theories and tendencies rather than laws"
          ],
          [
            "Understanding",
            "Understanding yourself, those around you and the global system better"
          ],
          [
            "Prediction",
            "Predicting the outcome of political events, with all the limits that involves"
          ],
          [
            "Making choices",
            "Learning from each other’s successes and mistakes and adapting policy"
          ]
        ]
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Making choices: the education example**\n\nJust as people can learn from each other, so can states. Despite all their differences, citizens often have similar hopes, challenges and concerns. States can use each other as **laboratories**: learning from successes and mistakes, and adapting policy from elsewhere to their own circumstances.\n\nThe example: spending on education, measured as a percentage of GDP, is **roughly the same** in all major regions of the world. Logically the results should therefore be roughly the same too. They are not.\n\nLiteracy rates range from about **65 per cent in sub-Saharan Africa** to **99 per cent in the EU and North America**. Latin America sits at 94 per cent and the Middle East at 79, while both regions spend about 4.5 per cent of GDP on education. East Asia spends relatively little, 4.2 per cent, and still reaches 96 per cent.\n\nThe question that follows is precisely a policy question: **what can regions with low figures learn from regions with high ones** about how best to spend education money? Without comparison you could not even ask it, because you would not know that equal spending produces such unequal results."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Context: the six Spanish-speaking states of Central America**\n\nThe textbook example of what context does. Costa Rica, El Salvador, Guatemala, Honduras, Nicaragua and Panama resemble each other closely: **all independent in 1821**, ethnically similar, Catholic, populations between 5 and 17 million, and all with a history of military government and authoritarianism.\n\nAnd yet: Costa Rica and Panama have built relatively strong economies, with a per capita gross domestic product up to **five times** that of their neighbours, and relatively strong political systems. Costa Rica ranks as a democracy, while neighbouring Nicaragua ranks as an authoritarian regime, and the poverty and instability of Honduras and Guatemala make them major sources of migration to the US.\n\nThe question the chapter asks and does not answer is exactly the question of this course: **what explains that difference?** Equal starting position, divergent outcome."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Rules: what comparison does and does not yield**\n\nThe natural sciences produce laws that let you predict phenomena. The social sciences produce no laws but **theories, tendencies, likelihoods and aphorisms**. The most famous of the latter is Lord Acton: power tends to corrupt, and absolute power tends to corrupt absolutely.\n\nFive regularities that have come out of comparative research:",
        "punten": [
          "1. All governments can count on the votes of only a minority of the electorate",
          "2. In developed democracies incumbents are re-elected more than half the time, partly through their exploitation of state resources",
          "3. Incumbent parties rarely win much more than 60 per cent of the vote, and never twice within the same spell in office",
          "4. Incumbents typically lose support from term to term",
          "5. In democracies the alternation of parties and leaders in office is usual"
        ]
      },
      {
        "type": "tekst",
        "tekst": "**Why studying one country is not enough**"
      },
      {
        "type": "citaat",
        "toetsstof": true,
        "tekst": "Dogan and Pelassy sum up the problem: because you understand a single case only in the light of many cases, and because you perceive the particular only against the background of the general, international comparison vastly increases the chance of explaining political phenomena. The researcher who studies just one country may take as normal what a comparativist immediately recognises as abnormal.",
        "bron": "After Dogan & Pelassy (1990), paraphrased"
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Prediction: the point of dispute**\n\nComparison helps with prediction. From research on European countries using **proportional representation** we know it is closely tied to more parties winning seats and to coalition governments. And if contracting out public services to private agencies increases cost-effectiveness in one country, you can expect something similar elsewhere.\n\nBut there is sharp criticism. **Karl Popper** argued that long-term predictions are possible only for systems that are well-isolated, stationary and recurrent, and that human society is not one of them.\n\nSharper still was an opinion piece in the New York Times arguing that political science had failed spectacularly at prediction and wasted colossal amounts of time and money. No political scientist foresaw the break-up of the Soviet Union, the rise of Al Qaeda, or the Arab Spring. An award-winning study was cited concluding that chimps randomly throwing darts at the possible outcomes would have done almost as well as the experts.\n\nThe authors’ reply is nuanced and that is what you need to know: the problem lies less with comparison as an approach than with its **practicalities**. Results depend on the number and combination of cases, the depth of information per case, the reliability of the data, the research methods used, and how far your own assumptions shape the work. Politics has been studied in a structured way for barely a century."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Theory and comparison: four problems**\n\nThis is the box **Using Theory 1**. Theory is a key part of achieving understanding: it opens your mind to different ways of seeing. For comparative politics it means developing and using principles and concepts that can explain everything from the formation of states to the character of institutions, democratisation, the methods of dictators and the behaviour of voters.\n\nFour problems face the theorist.\n\n**Too much choice.** The field is so broad that it includes numerous theoretical approaches, ranging from the general to the specific. Sidney Verba once described that diversity as bordering on anarchic. Others see the variety as a strength: Przeworski argues it allows comparativists to be **opportunists** who use whatever approach works best.\n\n**Fad and preference.** The value of theory is compromised by its being the victim of fad, fashion and individual preference. For every approach proposed there is a long line of critics waiting to shoot it down. At times the debate about competing approaches seems livelier than the one about their practical application.\n\n**Shaky foundations.** The natural sciences develop theories well supported by evidence, broadly accepted, and usable for laws, experiments and predictions. The social sciences suffer greater uncertainties, if only because they try to understand human behaviour, producing theories subject to stronger doubts.\n\n**Western tilt.** Political theory has been criticised for leaning too much on ideas from the Western tradition, a consequence of the large number of political scientists working in Western states. As comparison takes a more global approach, there are calls for more inclusiveness. That widens an already broad range of approaches, but universal theories will remain hard to develop while large parts of the world stay **relatively under-studied**."
      },
      {
        "type": "tekst",
        "titel": "3. Government and governance",
        "toetsstof": true,
        "tekst": "**Government: the institutions**\n\nSmall groups can decide without procedures. A family talks it out, and the agreement is **self-executing**: those who make it carry it out themselves. That does not work for cities and states, which need procedures and institutions to make and enforce decisions.\n\nThe broad definition: **government consists of all those institutions endowed with public authority and charged with reaching and executing decisions for a community.** That puts police, military, bureaucrats and judges all inside government, even though they do not reach office through elections.\n\nThe word is also used in four other ways: for the group of people who govern, for a specific administration, for the form of the system of rule, and for the character of administration."
      },
      {
        "type": "tekst",
        "tekst": "**The institutions of government**"
      },
      {
        "type": "tabel",
        "toetsstof": true,
        "kop": [
          "Institution",
          "Role",
          "Examples"
        ],
        "rijen": [
          [
            "Executive",
            "Governing, making policy, providing direction",
            "Presidents, prime ministers, ministers, cabinets"
          ],
          [
            "Legislature",
            "Representing citizens, making law, forming governments",
            "Parliaments, Congresses, National Assemblies"
          ],
          [
            "Judiciary",
            "Upholding and interpreting the constitution",
            "Supreme courts, constitutional courts"
          ],
          [
            "Bureaucracy",
            "Implementing policy",
            "Departments, ministries, agencies"
          ],
          [
            "Political parties",
            "Offering alternatives, fielding candidates, forming governments and oppositions",
            "Conservatives, liberals, socialists, greens, nationalists"
          ]
        ]
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Hobbes and the classic case for government**\n\nThe classic argument comes from **Thomas Hobbes** (1588-1679) in *Leviathan* (1651). His reasoning: humans have an uncanny ability to turn ambition into conflict. Without a common power to keep them in awe they are in a condition of war of every man against every man, and life is solitary, poor, nasty, brutish and short.\n\nTo avoid that, people set up a **commonwealth** that reduces all their wills, by plurality of voices, into one will. Anarchy becomes order, and room opens for peace and mutually beneficial cooperation.\n\nIn a democracy government supplies predictability: citizens and businesses can plan ahead because laws are made in a standardised fashion, take competing opinions into account, and are consistently applied.\n\nBut, and this is the core: **government creates its own dangers**. The risk of Hobbes’ commonwealth is that it abuses its authority. Hence the central task of this course: how do you secure the benefits of government while limiting its inherent dangers?"
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Governance: the process**\n\nWhere government suggests a relatively **static** world of institutions, **governance** highlights the process and quality of collective decision-making. The emphasis is on the activity of governing.\n\nThat is why you can speak of **global governance** but not of a world government. There is no global government, but there are international organisations such as the UN, thousands of treaties forming international law, and constant interaction between governments, corporations and interest groups. Together that amounts to a process of governance.\n\nGovernance is less about the command-and-control function and more about public regulation, a role political leaders and bureaucrats in democracies **share** with other bodies. Note the formulation to remember: governance is a **supplement** to the concept of government, not a replacement.\n\nThe **European Union** is the example the chapter works out. The EU has institutions that look like a government, including an elected European Parliament and a Court of Justice, but they are better regarded as a system of governance. They develop policies and laws and oversee implementation, but can only do as much as the treaties and the member states allow. Regard them as servants of the integration process rather than as the government of the EU.\n\nGovernance has also become the word for the **quality** of rule. Good governance is at a minimum accountable, transparent, efficient, responsive and inclusive. Those are ideals: even countries at the top of the rankings have flaws."
      },
      {
        "type": "uitleg",
        "tekst": "**From the lecture**\n\nThe lecturer asks it outright: what is the difference between a state and a government? The answer you should be able to give:\n\nA **(nation) state** consists of three elements: **territory, population and government**. The note on the slide puts it more sharply: the state is the political community formed by a territorial population subject to one government.\n\nA **government** is one of those three elements. The definition the lecturer gives: the institutions that make binding decisions for society. They offer **security and predictability** by making laws and decisions that are expected to be fair to everyone.\n\nThe state is therefore the larger whole, and it survives a change of government.\n\nThe book lists five institutions of government (above); the lecture uses the classic three branches, the **trias politica**:"
      },
      {
        "type": "tabel",
        "kop": [
          "Branch",
          "What it does"
        ],
        "rijen": [
          [
            "Executive branch",
            "Governing and taking decisions"
          ],
          [
            "Legislative branch",
            "Making law and scrutinising the executive"
          ],
          [
            "Judiciary branch",
            "Administering justice and guarding the constitution"
          ]
        ],
        "noot": "These three come back under metagovernance, because the question \"who is the highest authority\" is precisely about which of the three sits on top."
      },
      {
        "type": "vergelijking",
        "links": {
          "titel": "Government",
          "tekst": "All organisations through which we experience **public authority**.",
          "punten": [
            "About institutions: who or what exists",
            "The three branches and the organisations around them",
            "Makes binding decisions for society",
            "Offers security and predictability"
          ]
        },
        "rechts": {
          "titel": "Governance",
          "tekst": "The **process and quality** of ruling and steering.",
          "punten": [
            "About the activity: how ruling happens and how well",
            "Requires coordination of a variety of actors",
            "Not exclusive to governments",
            "May involve trade unions, academics and specialists"
          ]
        }
      },
      {
        "type": "uitleg",
        "tekst": "**From the lecture: what a policy is**\n\nThe definition on the slide has three parts, and the middle one is almost always forgotten.\n\nA policy is **a decision, a non-decision, or an intention to make future decisions** in accordance with an overall objective.\n\nThat **non-decision** is not sloppiness. Deciding to do nothing is policy too, and it has consequences. Think of a government that deliberately leaves a problem unregulated. This connects directly to Lukes’ second dimension of power from the book: power is also the capacity to keep something off the agenda.\n\nThe second part of the definition: policy is the **instrument** that turns political, collective decisions into permanent or semi-permanent rules, enforced by government agencies."
      },
      {
        "type": "tekst",
        "titel": "4. Politics and power",
        "toetsstof": true,
        "tekst": "**Politics: three features and two conceptions**\n\nAn exact definition of politics is difficult, because the term is used in so many ways. When the Chinese Communist Party changed the law in Hong Kong in 2020 to obstruct the opposition, was it **playing** politics or preventing it?\n\nThree features are clear:",
        "punten": [
          "It is a **collective activity**, between people. A lone castaway on an island cannot engage in politics; two can",
          "It involves **deciding**: a course to take or avoid, or a disagreement to resolve",
          "Once reached, a political decision becomes **policy** for the group, binding everyone, including those who continue to resist. That resistance is itself political"
        ]
      },
      {
        "type": "tekst",
        "tekst": "**Two conceptions of politics**"
      },
      {
        "type": "vergelijking",
        "toetsstof": true,
        "links": {
          "titel": "Politics as serving the community",
          "tekst": "The line from **Aristotle**.",
          "punten": [
            "Man is by nature a political animal: politics is unavoidable and at the same time the highest human activity",
            "People express their nature as reasoning, virtuous beings only by taking part in a community that seeks the common interest",
            "In the ideal constitution citizens rule in the interests of all, not because checks and balances force them but because they see it as right",
            "Politics as a peaceful process of open discussion leading to decisions acceptable to all stakeholders"
          ]
        },
        "rechts": {
          "titel": "Politics as a struggle for power",
          "tekst": "The line from **Lasswell, Clausewitz and Mao**.",
          "punten": [
            "Politics is a competitive struggle for power and resources between people and groups seeking their own advantage",
            "Narrow concerns take precedence over collective benefits, and those in authority place their own goals above the community’s",
            "The methods spill over into manipulation, corruption and sometimes violence and bloodshed",
            "Lasswell: who gets what, when, how. A process with winners and losers"
          ]
        }
      },
      {
        "type": "slimmer",
        "tekst": "**The reversal that earns marks**\n\nClausewitz said war is the continuation of politics by other means, and Mao that war is politics with bloodshed.\n\nThe chapter turns that around, and that is exactly the kind of observation that lifts an answer: you could as easily say that **politics is the continuation of war by other means**, or that politics is war without bloodshed.\n\nReality rarely measures up to the ideal. In an answer, always name both conceptions and say which fits the case in front of you."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Power: the capacity to act**\n\nThe word comes from the Latin **potere**, to be able. Bertrand Russell therefore saw power as the production of intended effects. The greater your capacity to determine your own fate, the more power you have.\n\nCalling China powerful means it is well placed to define and achieve its goals and to stop others from blocking them.\n\nNote the distinction the chapter draws between **power to** and **power over**: the ability to achieve goals versus exercising control over others. Most analyses concern the second.\n\nAnd note the nuance about **negative power**: every state has some power, if only the ability to oblige a reaction from bigger states. Syrian refugees and asylum-seekers from Honduras may seem powerless, but both groups spark policy responses from the countries they affect."
      },
      {
        "type": "tekst",
        "tekst": "**Lukes’ three dimensions of power**"
      },
      {
        "type": "tabel",
        "toetsstof": true,
        "kop": [
          "Dimension",
          "Core question",
          "How it works"
        ],
        "rijen": [
          [
            "First",
            "Who prevails when preferences conflict?",
            "Decision-making. Decisions are made on issues with an observable conflict of interests"
          ],
          [
            "Second",
            "Who controls whether preferences are expressed?",
            "Non-decision-making. Decisions are prevented on issues with an observable conflict of interests"
          ],
          [
            "Third",
            "Who shapes preferences?",
            "Ideological. Potential issues are kept out of politics altogether"
          ]
        ],
        "noot": "As you move along, the conception of power becomes more subtle but also stretched beyond its normal use."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**The three dimensions with their examples**\n\n**First dimension.** Measures power by whose views prevail when the actors hold conflicting views. The greater the correspondence between your views and the decisions reached, the more influence. Concrete and measurable. The example: despite repeated mass shootings, leaders of both major American parties refuse to impose meaningful limits on gun ownership, amounting to an elite conspiracy to keep guns widely available.\n\n**Second dimension.** The capacity to keep issues **off the agenda**, so that they are never discussed. Bachrach and Baratz: whoever, consciously or unconsciously, creates barriers to the public airing of policy conflicts has power. The example: under the Taliban in Afghanistan, fear of reprisals discourages people from expressing support for women’s rights and democracy. In that way the Taliban render democracy a non-issue.\n\n**Third dimension.** Concerns not the expression but the **formation** of preferences: a manipulated consensus, in which the flow of information is managed so that disputes never arise. The example is the influenza pandemic of 1918-1920, the **Spanish flu**. It infected perhaps one in three people, with estimates of up to 100 million deaths, but news of it was strictly controlled in the worst-affected countries out of concern for morale as the First World War drew to a close. The only country where open reporting was allowed was **Spain**, which is why it carries that name."
      },
      {
        "type": "uitleg",
        "tekst": "**The conclusion you should be able to draw**\n\nThe most efficient power is the one that shapes information and preferences, because then the first and second dimensions never come into play.\n\nPower is therefore not only about whose preference wins. You must also ask **whose opinions are kept out of the debate**, and in what wider context those preferences were formed.\n\nThe chapter draws the line explicitly to the selective briefings offered by many governments about the seriousness of Covid-19 in 2020."
      },
      {
        "type": "uitleg",
        "tekst": "**From the lecture**\n\nThe lecturer gives two things, and they belong together.\n\n**Communicating and reconciling different interests within a social group.** Politics starts from the fact that people do not want the same things.\n\n**Reaching and implementing collective decisions, by force if necessary.** Note that last part. Politics is not just talking until you agree; the possibility of enforcement is built in.\n\nThat second half is exactly what separates politics from a conversation or a negotiation between friends. What comes out is a decision that holds, including for those who were against it.\n\nThe answer: **membership of a social group** whose decisions affect its members. The lecturer lists family, school, church, nation and state in one breath. Politics is therefore not reserved for government.\n\nFour kinds of decision such a group takes, and you should be able to list them:\n\n1. Who is in the group and who is out\n2. How to share resources\n3. How to relate to other groups\n4. What to decide privately and what to decide collectively\n\nThe first three are decisions taken inside politics. The fourth is about the **boundary** of politics itself: what do we turn into a collective matter, and what do we leave to the individual?\n\nThink of debates about smoking, about what schools should teach, or about surveillance in public space. The real fight there is often not about the substance but about whether government should be involved at all."
      },
      {
        "type": "citaat",
        "tekst": "All social activity that leads to the adoption of collective decisions. Political decisions bind the members of the group, including those who took no part in making them.",
        "bron": "Lecture slides, paraphrased"
      },
      {
        "type": "uitleg",
        "tekst": "**From the lecture: Foucault on power**\n\nIt is not decoration at the end. Foucault shifts the question from *who has power* to *how does power work*.\n\nIn his picture nobody owns power like an object; power exists in what people do to each other. And the sharpest point: power presupposes that the person it acts on **can act**. Tying someone up completely is not power but violence; power works precisely on someone who has choices.\n\nThat connects to Lukes’ three dimensions of power from the book, especially the third: shaping what people want is more effective than defeating what they want."
      },
      {
        "type": "citaat",
        "tekst": "Foucault describes power not as a possession but as an action: an action upon an action, on existing actions or on ones that may arise now or later. Power incites, seduces, makes things easier or harder, and in the extreme constrains or forbids. But it is always a way of acting upon a subject who is capable of acting.",
        "bron": "Michel Foucault, The Subject and Power · paraphrased"
      },
      {
        "type": "tekst",
        "titel": "5. Authority, regimes and political systems",
        "toetsstof": true,
        "tekst": "**Authority: the acknowledged right to rule**\n\nAuthority is in some ways **more fundamental** to understanding government than politics or power. Where power is the capacity to act, authority is the **acknowledged right** to do so.\n\nIt exists when subordinates accept that superiors can give legitimate orders. Russia may exercise power over Russians in Ukraine, the Baltic states and Kazakhstan, but its formal **authority stops at the Russian border**.\n\n**Max Weber** held that in a relationship of authority the ruled implement the command as if they had adopted it spontaneously, for its own sake. That makes authority a more efficient form of control than brute power.\n\nAnd then the nuance that often goes wrong: authority is **more than voluntary compliance**. Acknowledging the authority of your state does not mean you always agree with its laws; it means only that you accept its right to make laws and your own obligation to obey. That is precisely how authority provides the foundation for the state."
      },
      {
        "type": "tekst",
        "tekst": "**Weber’s three sources of authority**"
      },
      {
        "type": "stappen",
        "toetsstof": true,
        "items": [
          {
            "titel": "Tradition",
            "tekst": "The accepted way of doing things. Think of hereditary monarchy."
          },
          {
            "titel": "Charisma",
            "tekst": "Intense commitment to a leader and their message. Tied to a person and therefore fragile."
          },
          {
            "titel": "Legal-rational norms",
            "tekst": "Based on the rule-governed powers of an office, not of a person. Dominant in democracies."
          },
          {
            "titel": "Additions to Weber",
            "tekst": "The chapter adds two: competence, or at least the perception that leaders know what they are doing, and the extent to which leaders represent the moral values and ideological goals of their followers."
          }
        ]
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Regime and political system**\n\nThese two are often used as synonyms, and that is not right.\n\nA **regime** describes a political **type**: a democracy, a dictatorship, an elitist system, a neoliberal regime.\n\nA **political system** summarises the **parts** that make up the political life of a state or community. David Easton: a political system can be designated as the interactions through which values are authoritatively allocated for a society, and that is what distinguishes it from other systems in its environment.\n\nThe word regime has unfortunately acquired a **pejorative ring** and is used mainly for authoritarian or illegitimate systems: the Putin regime, the Maduro regime. **Regime change** then stands for the removal of a government considered illegitimate.\n\nBut the term is more neutral and clinical than that usage suggests. You can simply call Sweden a democratic regime, with a political system as the space within which Swedish politics takes place.\n\nIn democratic regimes government is influenced by interest groups, parties, media, corporations and public opinion. In authoritarian regimes government often lacks autonomy and effectively becomes the **property** of a dominant individual or elite."
      },
      {
        "type": "uitleg",
        "tekst": "**From the lecture**\n\nThree concepts you need to keep apart, and the lecturer deliberately puts them side by side.\n\n**Power** is the capacity to make and enforce political decisions.\n\n**Authority** is the **right** to do so.\n\n**Legitimacy** is the validation of those decisions. A government is legitimate when those subject to its rule recognise and accept its right to make decisions.\n\nThe order makes sense: power says you can, authority says you may, legitimacy says the people agree you may. You can hold power without authority, and authority on paper without legitimacy in practice.\n\n**Legitimacy is the concept McCormick does not single out.** The book covers power and authority at length, but treats legitimacy inside its discussion of authority.\n\nThe lecturer makes it a separate, third concept. So if a question comes up about the difference between the three, that is a **lecture question**, not a book question. Make sure your answer says that legitimacy is about recognition by the governed, not about competence on paper."
      },
      {
        "type": "tekst",
        "titel": "6. Classifying political systems",
        "toetsstof": true,
        "tekst": "**Typologies: three historical attempts**\n\nThere are nearly 200 national political systems and hundreds of thousands of local ones. A **typology** brings order to that. The ideal typology is simple, consistent, logical and as useful to a casual observer as to a political scientist. That ideal has never been reached: political scientists disagree about the criteria, the groups, the labels and even which country belongs where. There is therefore **no generally accepted typology**.\n\n**Aristotle** made the first attempt, classifying the 158 city-states of Ancient Greece. Between roughly 500 and 338 BCE these were small settlements with differing forms of rule: a laboratory. He used two dimensions, the **number** of people involved in governing and the **form** of government, meaning whether rulers governed in the common interest or their own. That produced six classes, from democracy to tyranny.\n\n**Montesquieu** distinguished three types in *The Spirit of the Laws* (1748): **republican** systems in which the people or some of them hold supreme power, **monarchical** systems in which one person rules on the basis of fixed and established laws, and **despotic** systems in which one person rules on the basis of their own priorities and perspectives.\n\nThe **Three Worlds**, current during the Cold War, was less a scholarly model than a Western response to geopolitics: a First World of wealthy democratic industrialised states, a Second World of communist systems, and a Third World of poorer, less democratic and less developed states."
      },
      {
        "type": "waarschuwing",
        "tekst": "**Why the Three Worlds fell out of use**\n\nThe system was simple and evocative, and the term Third World still conjures up images of poverty, underdevelopment, corruption and instability.\n\nThe criticism you need to know has three parts. The typology was **more descriptive than analytical**. It was **pejorative** in its ranking. And it was **simplistic**: treating almost all states of Africa, Asia and Latin America as a single Third World was always asking too much given their political and economic differences."
      },
      {
        "type": "tekst",
        "tekst": "**The two typologies this book uses**"
      },
      {
        "type": "tabel",
        "toetsstof": true,
        "kop": [
          "",
          "Democracy Index",
          "Freedom in the World"
        ],
        "rijen": [
          [
            "Maintained by",
            "Economist Intelligence Unit, UK",
            "Freedom House, US"
          ],
          [
            "Scale",
            "Score out of 10",
            "Score out of 100"
          ],
          [
            "Categories",
            "Full democracy, flawed democracy, hybrid, authoritarian",
            "Free, partly free, not free"
          ],
          [
            "Norway",
            "9.81 full democracy",
            "100 free"
          ],
          [
            "United States",
            "7.92 flawed democracy",
            "83 free"
          ],
          [
            "India",
            "6.61 flawed democracy",
            "67 partly free"
          ],
          [
            "Nigeria",
            "4.10 hybrid",
            "45 partly free"
          ],
          [
            "Russia",
            "3.31 authoritarian",
            "20 not free"
          ],
          [
            "North Korea",
            "1.08 authoritarian",
            "3 not free"
          ]
        ],
        "noot": "The results are not identical but overlap strongly, and both have identified the same worrying reversals in the health of democracy in recent years."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Economies and societies as extra measures**\n\nAlongside political rankings the book uses economic and social data. The link between politics and economics is so intimate that a whole field exists for it: **political economy**. The claim: good governance is more likely to go hand in hand with a successful economy, bad governance less so.\n\nThe core measure is **gross domestic product**, the value of the total domestic and foreign output of a country’s residents in a year, converted to dollars. Caveats: accuracy varies by country and the conversion raises questions about exchange rates.\n\nMore important is the distinction: GDP measures **absolute** size but takes no account of population. Divide by population and you get **per capita GDP**, which gives a better sense of relative economic size. Luxembourg has a GDP of 71 billion dollars and Nigeria 448 billion, but per head that is 114,704 against 2,230.\n\nFor social needs the book uses the **Human Development Index** from UNDP, built from life expectancy, literacy, educational enrolment and per capita GDP, with four classes from Very High to Low. Most wealthy democracies are in the top 30; Niger ranked last on the 2020 index, at 187."
      },
      {
        "type": "waarschuwing",
        "tekst": "**The nuance the chapter ends on**\n\nThe obvious conclusion is that wealthy democracies meet their people’s needs better than poor authoritarian systems. It is not that simple.\n\nCitizens of democracies are, overall, wealthier, healthier and happier, but you should not overlook the sometimes enormous divisions **within** states. All states are divided along several planes: gender, wealth, ethnicity and religion. The book goes on to give many examples of political systems that have failed to be inclusive or to achieve equal opportunity."
      },
      {
        "type": "tekst",
        "titel": "From the lecture: public governance and metagovernance",
        "toetsstof": true,
        "tekst": "**Public governance**\n\nThis concept is **not in McCormick** and comes only from this lecture. Learn it separately.\n\nPublic governance is the **relationship** between government, meaning the three branches plus the political parties, and other social actors. The lecturer names two kinds:\n\n**Economic actors:** companies, transnational corporations, business.\n\n**Civil society actors:** NGOs, social movements, trade unions.\n\nThe question the lecturer adds is why these parties relate to each other at all. The answer: to collectively **identify, address and implement policies** for social problems. The examples on the slide: public health issues, climate change, minority rights and infrastructure.\n\nNotice the logic: every one of those is a problem no single party can solve alone. That is why public governance exists.\n\n**Metagovernance**\n\nThis concept also comes only from the lecture. The description is short and a little cryptic: **the power of governing governance**, in other words the governing of governing.\n\nThe lecturer gives one practical clue: metagovernance is usually placed **at the highest end of authority**. Hence the question he then asks per country: who is the highest authority in legal terms, and which institution best represents metagovernance?\n\nThe trick in that question is that the answer is not automatically the head of state or the head of government. You have to look at the **constitution**, and each country gives a different answer."
      },
      {
        "type": "tekst",
        "titel": "From the lecture: who has the final say? Three countries",
        "toetsstof": true,
        "tekst": "The lecturer works through the Netherlands to illustrate government versus governance.\n\n**Government:** the executive is the prime minister and cabinet, on the slide **Rob Jetten** (prime minister since 23 February 2026, at the head of a minority cabinet of D66, VVD and CDA; see session 3). The legislature is the Dutch parliament. The judiciary consists of judges and police.\n\n**Governance:** on top of that come economic actors and civil society actors, to produce, implement and enforce public policy.\n\nThen the metagovernance question: who is the highest authority in legal terms? The head of government, the prime minister? Or the head of state, the king? The answer the lecturer gives is that **the Dutch political system is a constitutional monarchy**."
      },
      {
        "type": "vergelijking",
        "links": {
          "titel": "Germany",
          "tekst": "A **parliamentary federal republic**.",
          "punten": [
            "Head of government: the Federal Chancellor",
            "Head of state: the Federal President",
            "Reviewing the constitution produces three candidates: the Federal Constitutional Court, the Federal Chancellor and the Federal Parliament",
            "So the answer is not one person but an interplay, with a strong role for the constitutional court"
          ]
        },
        "rechts": {
          "titel": "Mexico",
          "tekst": "A **presidential federal republic**.",
          "punten": [
            "Head of government: the President",
            "Head of state: also the President, since the two coincide",
            "Yet reviewing the Mexican constitution produces the Supreme Court of Justice as highest legal authority",
            "The highest political office is therefore not automatically the highest legal authority"
          ]
        }
      },
      {
        "type": "slimmer",
        "tekst": "**The point of the three countries**\n\nThree countries, three systems, three different answers. That is exactly why the lecturer puts them side by side.\n\nIn the Netherlands there is a king as head of state next to a prime minister as head of government. In Germany those two are separate as well, but the constitution points to the constitutional court. In Mexico head of state and head of government are the same person, and **still** the highest legal authority sits with the Supreme Court.\n\nThe lesson: **you find metagovernance by reading the constitution, not by looking at who seems most powerful.** That is the difference between power and authority from point 3, applied to a country."
      },
      {
        "type": "begrippen",
        "items": [
          {
            "begrip": "Political science",
            "definitie": "the study of the theory and practice of government and politics: the structure and dynamics of institutions, processes and political behaviour"
          },
          {
            "begrip": "Social science",
            "definitie": "the study of human society and of the structured interactions among people within it"
          },
          {
            "begrip": "Comparative politics",
            "definitie": "the systematic study of government and politics in different countries, to understand them better by drawing out contrasts and similarities"
          },
          {
            "begrip": "Theory",
            "definitie": "an abstract or generalised approach to explaining or understanding a phenomenon, supported by a significant body of hard evidence"
          },
          {
            "begrip": "Government",
            "definitie": "the institutions and processes through which societies are governed"
          },
          {
            "begrip": "Institution",
            "definitie": "a formal or informal organisation or practice with rules and procedures, marked by durability and internal complexity"
          },
          {
            "begrip": "Governance",
            "definitie": "the process by which decisions, laws and policies are made, with or without the input of formal institutions"
          },
          {
            "begrip": "Politics",
            "definitie": "the process by which people negotiate and compete in making and executing shared or collective decisions"
          },
          {
            "begrip": "Power",
            "definitie": "the capacity to bring about intended effects; sometimes used broadly as influence, sometimes narrowly as getting one’s way by threats"
          },
          {
            "begrip": "Authority",
            "definitie": "the right to rule; authority creates its own power so long as people accept that the person in authority has the right to decide"
          },
          {
            "begrip": "Regime",
            "definitie": "a political type, based on a set of principles, norms, rules and decision-making procedures"
          },
          {
            "begrip": "Political system",
            "definitie": "the interactions and institutions that make up a regime"
          },
          {
            "begrip": "Typology",
            "definitie": "the system by which types are classified according to their common features"
          },
          {
            "begrip": "Gross domestic product",
            "definitie": "the value of the total domestic and foreign output by residents of a country in a given year"
          },
          {
            "begrip": "Legitimacy",
            "definitie": "the validation of political decisions: those subject to the rule recognise and accept the government’s right to decide"
          },
          {
            "begrip": "Policy",
            "definitie": "a decision, a non-decision or an intention to make future decisions in line with an overall objective; the instrument turning collective decisions into enforced rules"
          },
          {
            "begrip": "(Nation) state",
            "definitie": "the political community formed by a territorial population subject to one government; three elements: territory, population, government"
          },
          {
            "begrip": "Public governance",
            "definitie": "the relationship between government and economic and civil society actors, to collectively identify and address social problems"
          },
          {
            "begrip": "Metagovernance",
            "definitie": "the power of governing governance; usually placed at the highest end of authority and found by reading the constitution"
          },
          {
            "begrip": "Constitutional monarchy",
            "definitie": "a form of state in which a monarch is head of state within the limits of a constitution, with a head of government leading the executive"
          },
          {
            "begrip": "Parliamentary federal republic",
            "definitie": "a republic with constituent states in which the government depends on parliament, with head of state and head of government separated"
          },
          {
            "begrip": "Presidential federal republic",
            "definitie": "a republic with constituent states in which head of state and head of government coincide in one elected president"
          },
          {
            "begrip": "Nation state",
            "definitie": "Lecture: a political community of three elements, territory, population and government. The state survives a change of government."
          },
          {
            "begrip": "Trias politica",
            "definitie": "The three branches of government: the executive (governing and deciding), the legislature (making law and scrutinising the executive) and the judiciary (administering justice and guarding the constitution)."
          },
          {
            "begrip": "Head of state and head of government",
            "definitie": "The Netherlands: head of state King Willem-Alexander (constitutional monarchy), head of government Prime Minister Rob Jetten. In Mexico both roles are held by the president."
          },
          {
            "begrip": "Non-decision",
            "definitie": "Deliberately not deciding, which the lecture counts as policy too. It links to Lukes’ second dimension of power: keeping an issue off the agenda."
          },
          {
            "begrip": "Economic actors",
            "definitie": "In public governance: companies, transnational corporations and business."
          },
          {
            "begrip": "Civil society actors",
            "definitie": "In public governance: NGOs, social movements and trade unions."
          },
          {
            "begrip": "Hobbes and the state of nature",
            "definitie": "Hobbes argued that without government life would be \"solitary, poor, nasty, brutish and short\": the classic case for government as the provider of order and security."
          },
          {
            "begrip": "Lukes’ three dimensions of power",
            "definitie": "First: who prevails in open conflict (decision-making). Second: who keeps issues off the agenda (non-decision-making). Third: who shapes what people want (ideological power)."
          },
          {
            "begrip": "Legal-rational authority",
            "definitie": "Weber: authority based on the rule-governed powers of an office rather than of a person. Dominant in democracies."
          },
          {
            "begrip": "Charismatic authority",
            "definitie": "Weber: authority based on intense commitment to a leader and their message. Tied to a person, so fragile."
          },
          {
            "begrip": "Traditional authority",
            "definitie": "Weber: authority based on the accepted way of doing things, such as hereditary monarchy."
          },
          {
            "begrip": "Democracy Index",
            "definitie": "The Economist Intelligence Unit’s ranking, scored out of 10, with four categories: full democracy, flawed democracy, hybrid regime, authoritarian regime."
          },
          {
            "begrip": "Freedom in the World",
            "definitie": "Freedom House’s ranking, scored out of 100, with three categories: free, partly free, not free."
          },
          {
            "begrip": "Three Worlds system",
            "definitie": "The Cold War typology: a First World of wealthy democratic industrialised states, a Second World of communist systems, a Third World of poorer, less democratic states. Less a scholarly model than a Western response to geopolitics."
          },
          {
            "begrip": "Two conceptions of politics",
            "definitie": "1. Politics as serving the community (Aristotle): people realise their nature by taking part in a community seeking the common interest. 2. Politics as a struggle for power (Lasswell, Clausewitz, Mao): who gets what, when and how."
          },
          {
            "begrip": "The six sub-fields of political science (list)",
            "definitie": "1. Comparative politics. 2. International relations. 3. National politics. 4. Political philosophy. 5. Political theory. 6. Public policy."
          },
          {
            "begrip": "The six benefits of comparison (list)",
            "definitie": "1. Description: the core facts. 2. Context: is this usual or unusual? 3. Rules: regularities, theories and tendencies rather than laws. 4. Understanding: of ourselves and the world. 5. Prediction: with its limits. 6. Making choices: learning from others’ successes and mistakes."
          },
          {
            "begrip": "The five institutions of government (list)",
            "definitie": "1. Executive: governing and direction. 2. Legislature: representing, making law, forming governments. 3. Judiciary: upholding and interpreting the constitution. 4. Bureaucracy: implementing policy. 5. Political parties: offering alternatives and forming governments and oppositions."
          },
          {
            "begrip": "Lukes’ three dimensions of power (list)",
            "definitie": "1. Decision-making: who prevails when preferences conflict? 2. Non-decision-making: who controls whether preferences are expressed? 3. Ideological: who shapes preferences?"
          },
          {
            "begrip": "Weber’s three sources of authority (list)",
            "definitie": "1. Tradition. 2. Charisma. 3. Legal-rational norms. The chapter adds competence and representing followers’ moral values and goals."
          },
          {
            "begrip": "Power, authority and legitimacy (list)",
            "definitie": "1. Power: the capacity to make and enforce decisions (you can). 2. Authority: the right to do so (you may). 3. Legitimacy: recognition and acceptance by those ruled (they agree you may)."
          },
          {
            "begrip": "What politics is about, lecture (list)",
            "definitie": "1. Communicating and reconciling different interests within a social group. 2. Reaching and implementing collective decisions, by force if necessary."
          },
          {
            "begrip": "Four decisions of a social group (list)",
            "definitie": "1. Who is in and who is out. 2. How to share resources. 3. How to relate to other groups. 4. What to decide privately and what collectively."
          },
          {
            "begrip": "Three parts of a policy (list)",
            "definitie": "A policy is 1. a decision, 2. a non-decision, or 3. an intention to make future decisions, in line with an overall objective, turned into rules enforced by government agencies."
          },
          {
            "begrip": "The two typologies of the book (list)",
            "definitie": "1. Democracy Index (EIU, out of 10): full democracy, flawed democracy, hybrid, authoritarian. 2. Freedom in the World (Freedom House, out of 100): free, partly free, not free."
          },
          {
            "begrip": "Who has the final say, lecture (list)",
            "definitie": "1. The Netherlands: constitutional monarchy, king and prime minister. 2. Germany: parliamentary federal republic, interplay with a strong Constitutional Court. 3. Mexico: presidential federal republic, yet the Supreme Court is the highest legal authority."
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
        "type": "uitleg",
        "titel": "Case: Nigeria",
        "tekst": "The chapter spotlights Nigeria because all the concepts of this session are visible there at once.\n\n**Political form.** Federal presidential republic with 36 states and a Federal Capital Territory. State formed in 1960, current constitution from 1999. President for a maximum of two four-year terms. Bicameral legislature: House of Representatives with 360 members, Senate with 109. Federal Supreme Court with 14 members.\n\n**Electoral system.** The president must win a majority of all votes cast and at least 25 per cent in two-thirds of the states. Two runoffs are possible.\n\n**The problem of instability.** Since independence in 1960 Nigeria has seen three periods of civilian government, five successful and several attempted coups, a civil war, and nearly 30 years of military rule. Only in **2015** did a sitting president lose to a challenger for the first time.\n\n**Economy and governance.** Heavy reliance on oil leaves the size and health of the economy, and government revenues, dependent on the oil price. Much of the oil wealth has been squandered or stolen, feeding the corruption that is rife at every level. The population is expected to double in 25 years.\n\n**Divisions.** Divided by ethnicity, which handicaps efforts to build national identity. Separated by religion, with a mainly Muslim north and a non-Muslim south, and contested pressure from the north to expand the reach of sharia. Regional disparities are fundamental: a dry and poor north, a south better endowed in resources and services. The oil lies in the south-east or offshore, while much of the profit goes to elites elsewhere.\n\n**Rankings.** Democracy Index 4.10, recently upgraded from authoritarian to **hybrid**. Freedom House 45, partly free. HDI: Low. GDP 448 billion dollars, per capita 2,230 dollars."
      },
      {
        "type": "stappen",
        "titel": "How to analyse a case with this chapter",
        "items": [
          {
            "titel": "1. Separate government from governance",
            "tekst": "Which institutions exist, and separately: how does the process of deciding run, and how well? A country can have every institution on paper and still be badly governed."
          },
          {
            "titel": "2. Ask who has power, in all three dimensions",
            "tekst": "Not only who wins the decisions, but also which issues never reach the agenda and whose preferences were shaped in advance."
          },
          {
            "titel": "3. Distinguish power from authority",
            "tekst": "Can the ruler act, and do the ruled accept their right to act? Whoever has power without authority must use coercion, and that is expensive."
          },
          {
            "titel": "4. Determine the regime type",
            "tekst": "Use the Democracy Index and Freedom House side by side. Where they differ, that difference says something in itself."
          },
          {
            "titel": "5. Find a comparison case",
            "tekst": "Preferably a country similar on many points but different in outcome, such as Costa Rica against Nicaragua. That isolates what makes the difference."
          },
          {
            "titel": "6. Name what you do not know",
            "tekst": "The reliability of your data, the limited selection of cases, your own assumptions. That is not a weakness in your answer but the sign that you have understood the chapter."
          }
        ]
      },
      {
        "type": "oefening",
        "id": "gp-c1-oef-1",
        "niveau": "basis",
        "vraag": "Explain the difference between government and governance, and use the European Union to show why you need both concepts.",
        "antwoord": "Government refers to the institutions and offices through which societies are governed: executive, legislature, judiciary, bureaucracy and political parties. It is a relatively static concept, focused on who or what exists. Governance refers to the process of collective decision-making, so to the activity of governing and to its quality.\n\nThe EU makes clear why government alone is not enough. The EU has institutions that look a great deal like a government: a directly elected European Parliament, a Court of Justice, an executive apparatus that prepares policy and oversees implementation. If you used only the concept of government, you would have to conclude that the EU has a government, and that does not match reality. Those institutions can only do what the treaties and the member states allow them to do. They are better understood as servants of the integration process than as the government of the EU.\n\nThe concept of governance does capture it. It describes the interplay of institutions, treaties and member states out of which decisions emerge without there being a single ruling authority. The same holds globally: there is no world government, but there is global governance, made up of international organisations, thousands of treaties and constant interaction between states, corporations and interest groups.\n\nThe point to make explicit in an answer: governance is a supplement to government, not a replacement. You need both, because without the first you miss the structure and without the second you miss the process and the quality."
      },
      {
        "type": "oefening",
        "id": "gp-c1-oef-2",
        "niveau": "basis",
        "vraag": "Why does the chapter call authority in some ways more fundamental than power? Use Weber in your answer.",
        "antwoord": "Power is the capacity to act and to bring about intended effects. Authority is the acknowledged right to do so. The difference lies in the recognition by those over whom it is exercised.\n\nWeber put it sharply: in a relationship of authority the ruled implement the command as if they had adopted it spontaneously, for its own sake. That makes authority a more efficient form of control than brute power. Whoever has only power must constantly deploy coercion, supervision and threat, which is costly and fragile. Whoever has authority gets compliance almost for free, because people hold themselves to the rule.\n\nThe example the chapter uses is Russia: it exercises power over Russians in Ukraine, the Baltic states and Kazakhstan, but its formal authority stops at the border. Power can therefore reach further than authority, and precisely where it does, exercising it is expensive and contested.\n\nA nuance to include: authority is more than voluntary compliance. Acknowledging the authority of your state does not mean you agree with every law. It means you accept its right to make laws and your own obligation to obey them. That is exactly why authority provides the foundation for the state: it survives disagreement about individual decisions.\n\nWeber distinguished three sources: tradition, charisma and legal-rational norms. The chapter adds two that weigh heavily today: competence, or at least the perception that leaders know what they are doing, and the ability of leaders to represent the moral values and ideological goals of their followers."
      },
      {
        "type": "oefening",
        "id": "gp-c1-oef-3",
        "niveau": "gevorderd",
        "vraag": "Apply Lukes’ three dimensions of power to how governments handle information during a pandemic. Use both the Spanish flu and Covid-19.",
        "antwoord": "In the first dimension you measure power by whose views prevail when they conflict. During Covid-19 you see that in visible conflicts over lockdowns, masks and vaccine mandates: which party, ministry or level of government won? In the United States individual states had considerable room of their own, so that struggle ran at several levels at once, while China as a unitary state could decide from the centre regardless of public opinion. Whoever wins more often has more power, and here that is fairly directly readable from the decisions taken.\n\nIn the second dimension the point is keeping issues off the agenda. Here it is not that a debate is lost but that it is never held. Think of the question of whether the numbers were counted correctly. The chapter notes that the figures themselves say nothing about the accuracy or completeness of reporting, and that with the Chinese data there was a question of trust. Where asking such questions is risky or impossible, the second dimension is at work: the conflict exists but never reaches public debate.\n\nIn the third dimension the preferences themselves are shaped by managing the flow of information, so that the dispute never arises. The Spanish flu is the purest example. That pandemic infected perhaps one in three people, with estimates of up to a hundred million deaths, but in the worst-affected countries the news was censored out of concern for morale at the end of the First World War. Spain was the only country where open reporting was allowed, and that is precisely why the disease carries that name to this day. The naming is itself the evidence of the exercise of power: the country that censored least got the disease named after it.\n\nWith Covid-19 the same dimension works more subtly, through the selective briefings many governments offered about the seriousness of the threat. Whoever determines what people know determines what they want, and after that needs to win no debate at all.\n\nThe conclusion you should draw is that the third dimension is the most efficient, precisely because the first two then never come into play. For an analysis that means: never look only at whose preference won, but also at whose view stayed out of the debate and in what context those preferences were formed."
      },
      {
        "type": "oefening",
        "id": "gp-c1-oef-4",
        "niveau": "gevorderd",
        "vraag": "The six Spanish-speaking states of Central America are very similar yet differ sharply in outcome. Explain why this example shows exactly what comparison delivers, and which benefits of comparison are at work here.",
        "antwoord": "The strength of the example lies in what is equal. Costa Rica, El Salvador, Guatemala, Honduras, Nicaragua and Panama all became independent in 1821, are ethnically similar, are Catholic countries, have populations between roughly five and seventeen million, and all have a history of military government and authoritarianism. So many similarities make the differences all the more telling, because the usual explanations fall away.\n\nAnd the differences are large. Costa Rica and Panama have built relatively strong economies, with a per capita gross domestic product up to five times that of their neighbours, and relatively strong political systems. Costa Rica ranks as a democracy, while neighbouring Nicaragua ranks as an authoritarian regime. The poverty and instability of Honduras and Guatemala make them major sources of unauthorised migration to the United States.\n\nThe benefit most clearly at work here is context. Without the neighbours you could say of Costa Rica that it is democratic and leave it at that. Placed next to Nicaragua it becomes a question: why there and not here, with so much shared history? That is exactly Dogan and Pelassy’s point, that the researcher who studies one country may take as normal what a comparativist immediately recognises as abnormal.\n\nDescription is also at work, since you first have to establish the facts about the six systems, and so is understanding, since the contrast forces you to look for explanations beyond culture or history, which after all are shared. Finally it touches on making choices: if comparable countries reach such divergent outcomes, they can in principle learn from each other, and the question of which choices made the difference is immediately a policy question.\n\nWhat the example does not do, and this belongs in a good answer, is answer the question. The chapter poses the question of the contextual explanations and leaves it open. That is honest: in the social sciences comparison yields no laws but theories, tendencies and likelihoods, and the outcome depends on the number of cases, the quality of the data and the assumptions you bring."
      },
      {
        "type": "oefening",
        "id": "gp-c1-oef-5",
        "niveau": "gevorderd",
        "vraag": "Assess the criticism that political science has failed at prediction. What is the chapter’s reply?",
        "antwoord": "The criticism is sharp and comes from two directions. Karl Popper argued on principle that long-term predictions are possible only for systems that are well-isolated, stationary and recurrent, and that human society is not one of them. That is not a reproach to researchers but a statement about the nature of the object.\n\nThe second line is empirical and harsher. An opinion piece in the New York Times argued that political science had failed spectacularly and wasted colossal amounts of time and money, pointing out that no political scientist foresaw the break-up of the Soviet Union, the rise of Al Qaeda or the Arab Spring. An award-winning study was cited concluding that chimps randomly throwing darts at the possible outcomes would have done almost as well as the experts.\n\nAgainst that, comparison does produce usable expectations. From research on European countries with proportional representation we know that system is tied to more parties in parliament and to coalition governments. And if contracting out public services to private agencies increases cost-effectiveness in one country, a similar effect elsewhere is a reasonable expectation. These are not prophecies about one-off events but expectations about structural relationships, and that is precisely where the field is strong.\n\nThe chapter’s reply is that the problem lies less with comparison as an approach than with its practical execution. The results of research depend on the number and combination of cases, the depth of information per case, the reliability of the data, the chosen method, and how far assumptions and biases steer the work. On top of that, government and politics have been studied in a structured manner for barely a century, much remains poorly understood, and there are still vigorous debates about meaning and interpretation.\n\nThe most honest answer therefore acknowledges both sides: the criticism of predicting one-off political shocks is largely justified, but it generalises wrongly to the whole field. Comparison has opened new horizons as we learned more about the variety of forms in which government and politics exist, and that is a different kind of yield from prediction."
      },
      {
        "type": "uitleg",
        "titel": "The discussion questions from the book",
        "tekst": "These sit at the end of the chapter and are exactly the kind of question that returns in an exam. Run through them before you move on.",
        "punten": [
          "Is it justifiable to describe comparison as the methodological core of the scientific study of politics?",
          "Can we really understand government and politics without comparison?",
          "Which is the most important of the benefits of comparison?",
          "Where does politics begin and end?",
          "Who has power, who does not, and how do we know?",
          "What are the strengths and weaknesses of the Democracy Index and Freedom in the World as ways of classifying political systems?"
        ]
      },
      {
        "type": "tekst",
        "titel": "From the lecture",
        "tekst": "The exercises below come from the lecture: power, authority and legitimacy, policy, metagovernance and public governance."
      },
      {
        "type": "stappen",
        "titel": "How to answer a metagovernance question about a country",
        "items": [
          {
            "titel": "1. Name the form of state",
            "tekst": "Monarchy or republic, unitary or federal, parliamentary or presidential. That determines which offices exist."
          },
          {
            "titel": "2. Separate head of state and head of government",
            "tekst": "Are those two people or one? Two in the Netherlands and Germany, one in Mexico."
          },
          {
            "titel": "3. Go to the constitution, not to the newspaper",
            "tekst": "The question asks who is the highest authority in legal terms. That is different from who has the most influence."
          },
          {
            "titel": "4. Look at the constitutional court",
            "tekst": "In Germany and Mexico the court comes forward. A court that can review legislation stands legally above both legislature and executive."
          },
          {
            "titel": "5. Tie it back to power, authority and legitimacy",
            "tekst": "Say who holds the power, who holds the authority, and where the legitimacy comes from. That is the difference between half an answer and a complete one."
          }
        ]
      },
      {
        "type": "oefening",
        "id": "gp-s1-oef-1",
        "niveau": "basis",
        "vraag": "Explain the difference between power, authority and legitimacy, and give a situation in which each one makes the difference.",
        "antwoord": "Power is the capacity to make and enforce political decisions. Authority is the right to do so. Legitimacy is the validation of those decisions: a government is legitimate when those subject to its rule recognise and accept its right to decide.\n\nThe three can occur independently of each other, and that is where you see what they mean. An occupying force can hold power without authority: it can enforce decisions, but the population recognises no right to do so. A government in exile can hold authority without power: its claim is recognised, but it can enforce nothing. And a government can hold both power and authority on paper while legitimacy drains away, for instance after an election whose result a large share of the population refuses to accept. The competences still exist, but more and more coercion is needed to achieve the same result.\n\nThat last case is exactly why legitimacy matters in practice. Ruling on the basis of recognition is cheap, because people comply of their own accord. Ruling on the basis of coercion is expensive and fragile. For a safety and security professional this is not an abstraction: enforcement only works at scale when the rules are seen as legitimate."
      },
      {
        "type": "oefening",
        "id": "gp-s1-oef-2",
        "niveau": "basis",
        "vraag": "The definition of policy also mentions the non-decision. Explain why that is in there and give an example.",
        "antwoord": "The non-decision is in the definition because doing nothing is also a choice with consequences, and because it is often a deliberate one. If policy consisted only of what a government actively decides, you would miss precisely what is often most telling: what it stays away from.\n\nAn example is a government that leaves a known problem unregulated for years, say a sector where abuses are documented but no legislation follows. No decision has been taken, yet the outcome is steered all the same: the existing situation persists, which favours the parties who benefit from it.\n\nThis connects directly to Lukes’ second dimension of power from the book. There, power is precisely the capacity to keep issues off the agenda so that no decision has to be taken. The definition of policy from the lecture and that dimension of power describe the same phenomenon from two sides: one from what policy is, the other from who holds the power.\n\nA complete answer also includes the third part of the definition: an intention to make future decisions in line with an overall objective. Even an announced course that has not yet been implemented already shapes how others behave."
      },
      {
        "type": "oefening",
        "id": "gp-s1-oef-3",
        "niveau": "gevorderd",
        "vraag": "Why is the answer to the metagovernance question in Mexico the Supreme Court, even though the President there is both head of state and head of government? Use the distinction between power and authority.",
        "antwoord": "At first glance the Mexican President looks like the obvious candidate. He is head of government and head of state, in a presidential system where the executive is strong, and he is directly elected. In terms of visible political power there is nobody above him.\n\nBut the lecturer’s question explicitly asks about the highest authority in legal terms, and that is a question of authority, not of power. Reviewing the Mexican constitution brings out the Supreme Court of Justice, because that is the body which can determine whether the acts of the President and of the legislature fall within the constitution. Whoever gets to review the rules that bind everyone else stands legally at the top, even if they are politically less conspicuous.\n\nThat is the heart of metagovernance: it is not governing but the governing of governing. The court makes no policy and implements none, but sets the limits within which others do. That is precisely what the lecturer means by saying metagovernance is usually placed at the highest end of authority.\n\nGermany shows the same pattern with the Federal Constitutional Court alongside it, while the Netherlands as a constitutional monarchy sits differently again, with a king as head of state who lacks the political power of a president. Three countries, three answers, and in none of them is the answer simply the most powerful person. That is why the lecturer puts three side by side instead of one."
      },
      {
        "type": "oefening",
        "id": "gp-s1-oef-4",
        "niveau": "gevorderd",
        "vraag": "A municipality wants to reduce residential burglary. Analyse this as a public governance problem, and explain what goes wrong if you treat it purely as a matter of government.",
        "antwoord": "As a government problem the answer comes quickly: the municipality sets policy, the police enforce it, the courts punish. Three branches, each with its role, done. The trouble is that this chain only kicks in once a burglary has happened, and that the institutions themselves control only a small share of the circumstances under which burglaries occur.\n\nAs a public governance problem it looks different. The relationship between government and two other kinds of actor comes into view. Economic actors: housing associations that decide on locks and lighting, insurers that set requirements and steer behaviour through premiums, builders and installers, shops selling security equipment. And civil society actors: residents’ associations, neighbourhood initiatives, watch schemes, welfare organisations working with young people.\n\nThe reason those parties relate to each other is exactly what the lecturer describes: to collectively identify, address and implement policy for a social problem. None of them can do it alone. The municipality cannot replace locks in private homes, the housing association cannot enforce the law, the neighbourhood cannot change insurance conditions.\n\nSo two things go wrong in the pure government approach. You intervene at the wrong moment, after the fact rather than before it. And you use only the instruments government itself owns, while the most effective instruments, better locks and social control, sit in other hands. Coordination here is not a friendly addition but the core of the solution, and that is precisely why governance is needed as a concept alongside government."
      }
    ]
  },
  {
    "id": "checken",
    "titel": "Check yourself",
    "blokken": [
      {
        "type": "quiz",
        "titel": "Check yourself on chapter 1",
        "vragen": [
          {
            "vraag": "What is the difference between government and governance?",
            "opties": [
              "Government is national, governance international",
              "Government describes the institutions, governance the process of collective decision-making",
              "Government is democratic, governance authoritarian",
              "They mean the same thing"
            ],
            "juist": 1,
            "uitleg": "Government is the relatively static concept of institutions; governance stresses the **activity** of ruling and its quality. Governance is a supplement, not a replacement."
          },
          {
            "vraag": "Why can you speak of global governance but not of a world government?",
            "opties": [
              "Because the UN has no army",
              "Because there is no global government, but there are international organisations, treaties and constant interaction that together form a decision-making process",
              "Because states are sovereign and therefore never cooperate",
              "Because the term government applies only to democracies"
            ],
            "juist": 1,
            "uitleg": "Exactly the example the chapter uses to show why you need the concept of governance: there is a process without a government."
          },
          {
            "vraag": "What is the difference between power and authority?",
            "opties": [
              "Power is legal, authority illegal",
              "Power is the capacity to act, authority the acknowledged right to do so",
              "Power belongs to dictatorships, authority to democracies",
              "Authority is a stronger form of coercion"
            ],
            "juist": 1,
            "uitleg": "Weber: under authority the ruled implement the command as if they had adopted it themselves. That is why authority is more efficient than brute power."
          },
          {
            "vraag": "Which of Lukes’ dimensions concerns keeping issues off the agenda?",
            "opties": [
              "The first",
              "The second",
              "The third",
              "None of the three"
            ],
            "juist": 1,
            "uitleg": "The second dimension is non-decision-making: there is an observable conflict of interests, but no decision is taken because the issue never reaches debate."
          },
          {
            "vraag": "Why is the flu of 1918-1920 called the Spanish flu?",
            "opties": [
              "Because it began in Spain",
              "Because Spain was hit hardest",
              "Because Spain was the only country where open reporting was allowed",
              "Because a Spanish doctor discovered it"
            ],
            "juist": 2,
            "uitleg": "In the worst-affected countries the news was censored out of concern for morale at the end of the First World War. A textbook case of the **third** dimension of power."
          },
          {
            "vraag": "Which three features of politics does the chapter name?",
            "opties": [
              "Collective, decision-making, and binding as policy for the group",
              "Democratic, peaceful and public",
              "National, formal and legal",
              "Ideological, economic and cultural"
            ],
            "juist": 0,
            "uitleg": "One castaway cannot engage in politics; two can. And whoever keeps resisting the decision taken is thereby engaging in politics as well."
          },
          {
            "vraag": "Who described politics as \"who gets what, when, how\"?",
            "opties": [
              "Aristotle",
              "Max Weber",
              "Harold Lasswell",
              "Thomas Hobbes"
            ],
            "juist": 2,
            "uitleg": "Lasswell (1936), and that formulation belongs to the conception of politics as competitive struggle, against the Aristotelian conception of politics as serving the community."
          },
          {
            "vraag": "Which two dimensions did Aristotle use to classify the Greek city-states?",
            "opties": [
              "Rich against poor, and large against small",
              "The number of people governing, and whether they govern in the common or their own interest",
              "Democratic against authoritarian, and stable against unstable",
              "Military against civilian, and religious against secular"
            ],
            "juist": 1,
            "uitleg": "Those two dimensions produced six classes, from democracy to tyranny. It is also one of the earliest examples of comparative politics at work."
          },
          {
            "vraag": "What is the difference between a regime and a political system?",
            "opties": [
              "A regime is authoritarian, a political system democratic",
              "A regime is a political type, a political system summarises the parts that make up a state’s political life",
              "A regime is temporary, a political system permanent",
              "There is no difference"
            ],
            "juist": 1,
            "uitleg": "The word regime has acquired a negative ring, but it is really neutral: you can simply call Sweden a democratic regime."
          },
          {
            "vraag": "What was the main substantive criticism of the Three Worlds typology?",
            "opties": [
              "It was too complicated for the media",
              "It was more descriptive than analytical, pejorative in its ranking, and simplistic",
              "It covered only Europe",
              "It was based on economic rather than political data"
            ],
            "juist": 1,
            "uitleg": "Treating almost all states of Africa, Asia and Latin America as a single Third World was asking too much given their political and economic differences."
          },
          {
            "vraag": "Why does the book use per capita GDP alongside GDP?",
            "opties": [
              "Because per capita GDP is measured more accurately",
              "Because GDP measures absolute size and takes no account of population",
              "Because GDP is available only for democracies",
              "Because per capita GDP solves exchange rate problems"
            ],
            "juist": 1,
            "uitleg": "Nigeria has a far larger economy than Luxembourg, but per head it is 2,230 against 114,704 dollars. Only then do you see relative size."
          },
          {
            "vraag": "What nuance does the chapter end on about wealthy democracies?",
            "opties": [
              "That they perform better in everything than authoritarian regimes",
              "That their citizens are on the whole wealthier and healthier, but that divisions within states can be enormous",
              "That their figures are unreliable",
              "That authoritarian regimes perform better on social measures"
            ],
            "juist": 1,
            "uitleg": "All states are divided along lines of gender, wealth, ethnicity and religion. Averages hide that division."
          }
        ]
      },
      {
        "type": "quiz",
        "titel": "Check yourself on lecture 1",
        "vragen": [
          {
            "vraag": "What is politics about according to this lecture?",
            "opties": [
              "Winning elections",
              "Communicating and reconciling interests, plus reaching and implementing collective decisions, by force if necessary",
              "Making laws",
              "Running the state"
            ],
            "juist": 1,
            "uitleg": "Note the tail: **by force if necessary**. That is what separates politics from an ordinary negotiation."
          },
          {
            "vraag": "What makes politics collective?",
            "opties": [
              "That there is a vote",
              "Membership of a social group whose decisions affect its members",
              "That government is involved",
              "That there are several parties"
            ],
            "juist": 1,
            "uitleg": "The lecturer lists family, school, church, nation and state in one breath. Politics is not reserved for government."
          },
          {
            "vraag": "What is legitimacy?",
            "opties": [
              "The capacity to enforce decisions",
              "The right to make decisions",
              "The validation of decisions: the governed recognise and accept the government’s right to decide",
              "A government obeying its own laws"
            ],
            "juist": 2,
            "uitleg": "Power is being able, authority is being allowed, legitimacy is the people agreeing that you are allowed."
          },
          {
            "vraag": "Which part of the definition of policy is most often forgotten?",
            "opties": [
              "The decision",
              "The non-decision",
              "The overall objective",
              "The enforcement"
            ],
            "juist": 1,
            "uitleg": "Deciding to do nothing is policy too. This connects to Lukes’ second dimension of power: keeping something off the agenda."
          },
          {
            "vraag": "Which three elements make up a nation state?",
            "opties": [
              "Constitution, parliament and court",
              "Territory, population and government",
              "People, language and history",
              "Executive, legislative and judiciary"
            ],
            "juist": 1,
            "uitleg": "Government is one of the three. That is why the state survives a change of government."
          },
          {
            "vraag": "What is the difference between government and governance according to this lecture?",
            "opties": [
              "Government is national, governance international",
              "Government is all organisations through which we experience public authority; governance is the process and quality of ruling",
              "Government is democratic, governance technocratic",
              "Governance is a modern word for government"
            ],
            "juist": 1,
            "uitleg": "And governance is **not exclusive to governments**: trade unions, academics and specialists may be part of it."
          },
          {
            "vraag": "What is public governance?",
            "opties": [
              "Government that is open to the public",
              "The relationship between government and economic and civil society actors, to collectively address social problems",
              "The running of state-owned companies",
              "Policy made by citizens"
            ],
            "juist": 1,
            "uitleg": "This concept is **not in McCormick** and comes only from the lecture. The examples: public health, climate, minority rights, infrastructure."
          },
          {
            "vraag": "What is metagovernance?",
            "opties": [
              "Governance at European level",
              "The power of governing governance, usually placed at the highest end of authority",
              "Governing without a government",
              "The theory behind governance"
            ],
            "juist": 1,
            "uitleg": "The governing of governing. You find it by reading the constitution, not by looking at who seems most powerful."
          },
          {
            "vraag": "Which institution emerges in Mexico as the highest legal authority?",
            "opties": [
              "The President",
              "The federal parliament",
              "The Supreme Court of Justice",
              "The state governors"
            ],
            "juist": 2,
            "uitleg": "Even though the President there is both head of state and head of government. The highest political office is not automatically the highest legal authority."
          },
          {
            "vraag": "What is Germany’s form of state according to the slides?",
            "opties": [
              "Constitutional monarchy",
              "Parliamentary federal republic",
              "Presidential federal republic",
              "Parliamentary unitary state"
            ],
            "juist": 1,
            "uitleg": "With a Federal Chancellor as head of government and a Federal President as head of state, and the Federal Constitutional Court as a strong candidate for metagovernance."
          },
          {
            "vraag": "What is the core of Foucault’s conception of power that closes the lecture?",
            "opties": [
              "Power is a possession of the state",
              "Power is an action upon an action, working on people precisely because they are capable of acting",
              "Power ultimately rests on violence",
              "Power derives from legitimacy"
            ],
            "juist": 1,
            "uitleg": "Nobody owns power as an object. And power presupposes freedom to act: tying someone up completely is not power but violence."
          }
        ]
      },
      {
        "type": "bronnen",
        "items": [
          {
            "apa": "McCormick, J., Hague, R., & Harrop, M. (2022). Comparative government and politics: An introduction (12th ed., Ch. 1). Bloomsbury Academic."
          },
          {
            "apa": "Lukes, S. (2021). Power: A radical view (3rd ed.). Palgrave Macmillan."
          },
          {
            "apa": "Dogan, M., & Pelassy, D. (1990). How to compare nations: Strategies in comparative politics (2nd ed.). Chatham House."
          },
          {
            "apa": "Gomez Llata Cazares, E. (2026). Governance & Policy, Lecture 1: Introduction [Lecture slides, 11 September]. The Hague University of Applied Sciences."
          },
          {
            "apa": "Foucault, M. (1982). The subject and power. Critical Inquiry, 8(4), 777-795."
          },
          {
            "apa": "McCormick, J., Hague, R., & Harrop, M. (2022). Comparative government and politics: An introduction (12th ed., Ch. 1). Bloomsbury Academic."
          }
        ],
        "titel": "Sources for this lesson"
      },
      {
        "type": "preview",
        "titel": "Next time",
        "vakId": "governance-policy",
        "lesId": "college-1",
        "tekst": "Session 2 on 18 September: Democracy and bureaucracy, on norms and values in building governance practices. The concepts from this session come straight back: how does the power of an executive relate to its authority, and where does bureaucracy sit in the distinction between government and governance?",
        "punten": [
          "Compulsory: Buckwalter & Balfour, chapter 2 of Quality of Governance",
          "Take the government versus governance distinction with you, it is the thread"
        ]
      }
    ]
  }
];
