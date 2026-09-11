/* ============================================================
   Governance & Policy — session 1
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
   ============================================================ */

LESSTOF['governance-policy/college-1'] = [
  {
    id: 'voor', titel: 'Before the lecture',
    blokken: [
      { type: 'leerdoelen', items: [
        'Explain what political science and social science are, and why they are harder to do than natural science',
        'Name the six sub-fields of political science and say where comparative politics stands apart',
        'List the six benefits of comparison and illustrate each with an example',
        'Tell government and governance apart, and explain why you need both concepts',
        'Name the three features of politics and set the two opposing conceptions of politics against each other',
        'Distinguish power from authority, and apply Lukes\u2019 three dimensions of power to a case',
        'Recognise Weber\u2019s three sources of authority in practice',
        'Explain what a typology is, why no generally accepted one exists, and what the Democracy Index and Freedom House measure'
      ]},

      { type: 'uitleg', titel: 'What this chapter is about',
        tekst: 'Every field has its own vocabulary. This chapter supplies the one for Governance & Policy: **government, governance, politics, power, authority**, plus the question of how you classify political systems.\n\nThe authors warn you straight away: the meaning of those terms is contested. That is not sloppiness but a feature of the social sciences. Definitions are never static and get fine-tuned as we learn more.\n\nFor the exam that means: do not memorise one definition, but learn what the argument is about.' },

      { type: 'waarschuwing', titel: 'Two pairs that will get muddled',
        tekst: 'The two traps in this chapter, and immediately the two things most often examined.\n\n**Government versus governance.** Government is the institutions; governance is the process of collective decision-making.\n\n**Power versus authority.** Power is the capacity to act; authority is the acknowledged right to do so.\n\nPut those four words in a row now and the rest of the chapter follows by itself.' }
    ]
  },

  {
    id: 'kern', titel: 'Core material',
    blokken: [
      { type: 'tekst', titel: '1. Why you want to understand government', toetsstof: true,
        tekst: 'The chapter opens with the American election of 3 November 2020 and the storming of the Capitol on 6 January 2021. That is not scene-setting but a deliberate case.\n\nThe questions the authors attach are the questions of the whole course: how can a country with such a long democratic history end up in violence of this kind? How can so many people be convinced of fraud when the evidence points overwhelmingly the other way? And how did the system hold in the end?\n\nThe point they make: you can answer those questions in part by studying your own system, but you get much further by **comparing**, by looking at how different countries approach similar needs and problems.' },

      { type: 'tekst', titel: '2. Social science and political science', toetsstof: true,
        tekst: 'The word *science* comes from the Latin **scientia**, knowledge. Until the nineteenth century it had a broad meaning; after that it was attached mainly to the natural sciences, and the social sciences went their own way.\n\n**Social scientists** (anthropologists, economists, geographers, historians, political scientists, sociologists) study the institutions we build, the rules we agree, the processes we use, our underlying motives, and the outcomes of our interactions.\n\nThe heart of the difficulty: human behaviour is unpredictable and resists being tied down to unchanging rules. That is why the social sciences are in many ways **harder** to study than the natural sciences, not easier.\n\n**Political science** is the branch of social science that focuses on government and politics: how institutions are structured, what role leaders play, how elections work, and why people behave as they do politically.' },

      { type: 'tabel', titel: 'The sub-fields of political science', toetsstof: true,
        kop: ['Sub-field', 'Subject matter'],
        rijen: [
          ['Comparative politics', 'Comparing government and politics in different settings'],
          ['International relations', 'Relations between states: diplomacy, foreign policy, international organisations, war and peace'],
          ['National politics', 'Government and politics within one state: institutions and processes'],
          ['Political philosophy', 'How we think about politics: authority, ethics, freedom'],
          ['Political theory', 'Abstract or generalised approaches to understanding political phenomena'],
          ['Public policy', 'The positions governments take or avoid']
        ],
        noot: 'The division differs by country and academic tradition. Law, methodology, political economy and public administration are sometimes counted as well.' },

      { type: 'tekst', titel: 'How the field itself has changed', toetsstof: true,
        tekst: 'The comparative study of government and politics has been shaken up in recent decades. The old focus on a handful of states has widened thanks to the dramatic rise in the **number and variety** of countries available to study.\n\nFive forces are named: the end of colonialism, the beginning and end of the Cold War, the new interest in authoritarianism, the shifting global balance of power, and the worrying signs of new threats to democracy in recent years.\n\nTogether these demand a **more global approach** to understanding similarities and differences.' },

      { type: 'waarschuwing', titel: 'The practical problem: the playing field is not level',
        tekst: 'This is the box **Exploring Problems 1**, and it is examinable because it concerns the reliability of your own conclusions.\n\nSome countries are studied far more deeply than others, and **language is a potent barrier**. In English there is a vast body of research on western Europe and the United States, partly because that is where so many comparativists work and partly because those are the two academic and publishing giants. There is also a lot on countries western scholars find interesting: China, France, Germany, India, Japan, Mexico, Nigeria and Russia.\n\nFar less has been published on smaller European states, on English-speaking countries with small populations such as Australia, Canada and New Zealand, on most Latin American and sub-Saharan African states, or on smaller Asian states.\n\nRelatively little has been published about **authoritarian regimes**, partly because little data is available and partly because it is hard to ask questions there to which honest answers might be expected. In countries such as North Korea and Syria field research is all but impossible.\n\n**The consequence:** you always face the danger that your conclusions about comparative politics rest on an **incomplete sample**. The questions the book adds: should you rely less on academic work and more on reliable media and reports of international organisations? And if so, can you build the analysis and context you need on those, or does your comparison end up skewed?' },

      { type: 'uitleg', titel: 'Why comparison is so central',
        tekst: 'Comparison is one of the oldest tools of political science, found in the work of Aristotle, and at the same time one of the most ordinary human activities: it lies behind almost every choice you make.\n\nSome go further and say the scientific study of politics unavoidably **is** comparative. The formulation to know: comparison is the methodological core of the scientific study of politics.' },

      { type: 'tekst', titel: '3. The six benefits of comparison', toetsstof: true,
        tekst: 'The chapter uses Covid-19 as a way in. The same pandemic, very different outcomes:\n\n**China** had an early peak of nearly 7,000 cases in a single day in February 2020, then 20 to 50 a day for the rest of the year. By June 2021: fewer than three deaths per million inhabitants, vaccination rate 16 per cent.\n\n**The United States** went from few cases in March 2020 to a peak of 70,000 in July and more than 200,000 in December. By June 2021: about 1,800 deaths per million inhabitants, vaccination rate 51 per cent.\n\n**The Democratic Republic of Congo** saw modest peaks and had reported just over a thousand deaths in total, with barely 4,000 people vaccinated in a country of nearly 87 million.\n\nThe figures themselves say nothing about **cause**. The explanation is partly medical and cultural, but certainly also political: China is an authoritarian regime that can act quickly regardless of public opinion, and moreover a unitary state governed from the centre. The US is a federation in which states had much control over their own responses, with an administration slow to acknowledge the seriousness. The DRC is poor and unstable with weak health care and infrastructure. And with the Chinese figures there is the question of how far they can be trusted.' },

      { type: 'tabel', titel: 'The six benefits in a row', toetsstof: true,
        kop: ['Benefit', 'What it delivers'],
        rijen: [
          ['Description', 'Establishing the core facts: how governments are structured, how institutions work, how they perform'],
          ['Context', 'Knowing whether what you see is usual or unusual, efficient or not'],
          ['Rules', 'Drawing up regularities about politics, though these yield theories and tendencies rather than laws'],
          ['Understanding', 'Understanding yourself, those around you and the global system better'],
          ['Prediction', 'Predicting the outcome of political events, with all the limits that involves'],
          ['Making choices', 'Learning from each other\u2019s successes and mistakes and adapting policy']
        ] },

      { type: 'tekst', titel: 'Making choices: the education example', toetsstof: true,
        tekst: 'Just as people can learn from each other, so can states. Despite all their differences, citizens often have similar hopes, challenges and concerns. States can use each other as **laboratories**: learning from successes and mistakes, and adapting policy from elsewhere to their own circumstances.\n\nThe example: spending on education, measured as a percentage of GDP, is **roughly the same** in all major regions of the world. Logically the results should therefore be roughly the same too. They are not.\n\nLiteracy rates range from about **65 per cent in sub-Saharan Africa** to **99 per cent in the EU and North America**. Latin America sits at 94 per cent and the Middle East at 79, while both regions spend about 4.5 per cent of GDP on education. East Asia spends relatively little, 4.2 per cent, and still reaches 96 per cent.\n\nThe question that follows is precisely a policy question: **what can regions with low figures learn from regions with high ones** about how best to spend education money? Without comparison you could not even ask it, because you would not know that equal spending produces such unequal results.' },

      { type: 'tekst', titel: '4. Context: the six Spanish-speaking states of Central America', toetsstof: true,
        tekst: 'The textbook example of what context does. Costa Rica, El Salvador, Guatemala, Honduras, Nicaragua and Panama resemble each other closely: **all independent in 1821**, ethnically similar, Catholic, populations between 5 and 17 million, and all with a history of military government and authoritarianism.\n\nAnd yet: Costa Rica and Panama have built relatively strong economies, with a per capita gross domestic product up to **five times** that of their neighbours, and relatively strong political systems. Costa Rica ranks as a democracy, while neighbouring Nicaragua ranks as an authoritarian regime, and the poverty and instability of Honduras and Guatemala make them major sources of migration to the US.\n\nThe question the chapter asks and does not answer is exactly the question of this course: **what explains that difference?** Equal starting position, divergent outcome.' },

      { type: 'tekst', titel: '5. Rules: what comparison does and does not yield', toetsstof: true,
        tekst: 'The natural sciences produce laws that let you predict phenomena. The social sciences produce no laws but **theories, tendencies, likelihoods and aphorisms**. The most famous of the latter is Lord Acton: power tends to corrupt, and absolute power tends to corrupt absolutely.\n\nFive regularities that have come out of comparative research:',
        punten: [
          '1. All governments can count on the votes of only a minority of the electorate',
          '2. In developed democracies incumbents are re-elected more than half the time, partly through their exploitation of state resources',
          '3. Incumbent parties rarely win much more than 60 per cent of the vote, and never twice within the same spell in office',
          '4. Incumbents typically lose support from term to term',
          '5. In democracies the alternation of parties and leaders in office is usual'
        ] },

      { type: 'citaat', titel: 'Why studying one country is not enough', toetsstof: true,
        tekst: 'Dogan and Pelassy sum up the problem: because you understand a single case only in the light of many cases, and because you perceive the particular only against the background of the general, international comparison vastly increases the chance of explaining political phenomena. The researcher who studies just one country may take as normal what a comparativist immediately recognises as abnormal.',
        bron: 'After Dogan & Pelassy (1990), paraphrased' },

      { type: 'tekst', titel: '6. Prediction: the point of dispute', toetsstof: true,
        tekst: 'Comparison helps with prediction. From research on European countries using **proportional representation** we know it is closely tied to more parties winning seats and to coalition governments. And if contracting out public services to private agencies increases cost-effectiveness in one country, you can expect something similar elsewhere.\n\nBut there is sharp criticism. **Karl Popper** argued that long-term predictions are possible only for systems that are well-isolated, stationary and recurrent, and that human society is not one of them.\n\nSharper still was an opinion piece in the New York Times arguing that political science had failed spectacularly at prediction and wasted colossal amounts of time and money. No political scientist foresaw the break-up of the Soviet Union, the rise of Al Qaeda, or the Arab Spring. An award-winning study was cited concluding that chimps randomly throwing darts at the possible outcomes would have done almost as well as the experts.\n\nThe authors\u2019 reply is nuanced and that is what you need to know: the problem lies less with comparison as an approach than with its **practicalities**. Results depend on the number and combination of cases, the depth of information per case, the reliability of the data, the research methods used, and how far your own assumptions shape the work. Politics has been studied in a structured way for barely a century.' },

      { type: 'tekst', titel: 'Theory and comparison: four problems', toetsstof: true,
        tekst: 'This is the box **Using Theory 1**. Theory is a key part of achieving understanding: it opens your mind to different ways of seeing. For comparative politics it means developing and using principles and concepts that can explain everything from the formation of states to the character of institutions, democratisation, the methods of dictators and the behaviour of voters.\n\nFour problems face the theorist.\n\n**Too much choice.** The field is so broad that it includes numerous theoretical approaches, ranging from the general to the specific. Sidney Verba once described that diversity as bordering on anarchic. Others see the variety as a strength: Przeworski argues it allows comparativists to be **opportunists** who use whatever approach works best.\n\n**Fad and preference.** The value of theory is compromised by its being the victim of fad, fashion and individual preference. For every approach proposed there is a long line of critics waiting to shoot it down. At times the debate about competing approaches seems livelier than the one about their practical application.\n\n**Shaky foundations.** The natural sciences develop theories well supported by evidence, broadly accepted, and usable for laws, experiments and predictions. The social sciences suffer greater uncertainties, if only because they try to understand human behaviour, producing theories subject to stronger doubts.\n\n**Western tilt.** Political theory has been criticised for leaning too much on ideas from the Western tradition, a consequence of the large number of political scientists working in Western states. As comparison takes a more global approach, there are calls for more inclusiveness. That widens an already broad range of approaches, but universal theories will remain hard to develop while large parts of the world stay **relatively under-studied**.' },

      { type: 'tekst', titel: '7. Government: the institutions', toetsstof: true,
        tekst: 'Small groups can decide without procedures. A family talks it out, and the agreement is **self-executing**: those who make it carry it out themselves. That does not work for cities and states, which need procedures and institutions to make and enforce decisions.\n\nThe broad definition: **government consists of all those institutions endowed with public authority and charged with reaching and executing decisions for a community.** That puts police, military, bureaucrats and judges all inside government, even though they do not reach office through elections.\n\nThe word is also used in four other ways: for the group of people who govern, for a specific administration, for the form of the system of rule, and for the character of administration.' },

      { type: 'tabel', titel: 'The institutions of government', toetsstof: true,
        kop: ['Institution', 'Role', 'Examples'],
        rijen: [
          ['Executive', 'Governing, making policy, providing direction', 'Presidents, prime ministers, ministers, cabinets'],
          ['Legislature', 'Representing citizens, making law, forming governments', 'Parliaments, Congresses, National Assemblies'],
          ['Judiciary', 'Upholding and interpreting the constitution', 'Supreme courts, constitutional courts'],
          ['Bureaucracy', 'Implementing policy', 'Departments, ministries, agencies'],
          ['Political parties', 'Offering alternatives, fielding candidates, forming governments and oppositions', 'Conservatives, liberals, socialists, greens, nationalists']
        ] },

      { type: 'tekst', titel: '8. Hobbes and the classic case for government', toetsstof: true,
        tekst: 'The classic argument comes from **Thomas Hobbes** (1588-1679) in *Leviathan* (1651). His reasoning: humans have an uncanny ability to turn ambition into conflict. Without a common power to keep them in awe they are in a condition of war of every man against every man, and life is solitary, poor, nasty, brutish and short.\n\nTo avoid that, people set up a **commonwealth** that reduces all their wills, by plurality of voices, into one will. Anarchy becomes order, and room opens for peace and mutually beneficial cooperation.\n\nIn a democracy government supplies predictability: citizens and businesses can plan ahead because laws are made in a standardised fashion, take competing opinions into account, and are consistently applied.\n\nBut, and this is the core: **government creates its own dangers**. The risk of Hobbes\u2019 commonwealth is that it abuses its authority. Hence the central task of this course: how do you secure the benefits of government while limiting its inherent dangers?' },

      { type: 'tekst', titel: '9. Governance: the process', toetsstof: true,
        tekst: 'Where government suggests a relatively **static** world of institutions, **governance** highlights the process and quality of collective decision-making. The emphasis is on the activity of governing.\n\nThat is why you can speak of **global governance** but not of a world government. There is no global government, but there are international organisations such as the UN, thousands of treaties forming international law, and constant interaction between governments, corporations and interest groups. Together that amounts to a process of governance.\n\nGovernance is less about the command-and-control function and more about public regulation, a role political leaders and bureaucrats in democracies **share** with other bodies. Note the formulation to remember: governance is a **supplement** to the concept of government, not a replacement.\n\nThe **European Union** is the example the chapter works out. The EU has institutions that look like a government, including an elected European Parliament and a Court of Justice, but they are better regarded as a system of governance. They develop policies and laws and oversee implementation, but can only do as much as the treaties and the member states allow. Regard them as servants of the integration process rather than as the government of the EU.\n\nGovernance has also become the word for the **quality** of rule. Good governance is at a minimum accountable, transparent, efficient, responsive and inclusive. Those are ideals: even countries at the top of the rankings have flaws.' },

      { type: 'tekst', titel: '10. Politics: three features and two conceptions', toetsstof: true,
        tekst: 'An exact definition of politics is difficult, because the term is used in so many ways. When the Chinese Communist Party changed the law in Hong Kong in 2020 to obstruct the opposition, was it **playing** politics or preventing it?\n\nThree features are clear:',
        punten: [
          'It is a **collective activity**, between people. A lone castaway on an island cannot engage in politics; two can',
          'It involves **deciding**: a course to take or avoid, or a disagreement to resolve',
          'Once reached, a political decision becomes **policy** for the group, binding everyone, including those who continue to resist. That resistance is itself political'
        ] },

      { type: 'vergelijking', titel: 'Two conceptions of politics', toetsstof: true,
        links: { titel: 'Politics as serving the community',
          tekst: 'The line from **Aristotle**.',
          punten: [
            'Man is by nature a political animal: politics is unavoidable and at the same time the highest human activity',
            'People express their nature as reasoning, virtuous beings only by taking part in a community that seeks the common interest',
            'In the ideal constitution citizens rule in the interests of all, not because checks and balances force them but because they see it as right',
            'Politics as a peaceful process of open discussion leading to decisions acceptable to all stakeholders'
          ] },
        rechts: { titel: 'Politics as a struggle for power',
          tekst: 'The line from **Lasswell, Clausewitz and Mao**.',
          punten: [
            'Politics is a competitive struggle for power and resources between people and groups seeking their own advantage',
            'Narrow concerns take precedence over collective benefits, and those in authority place their own goals above the community\u2019s',
            'The methods spill over into manipulation, corruption and sometimes violence and bloodshed',
            'Lasswell: who gets what, when, how. A process with winners and losers'
          ] } },

      { type: 'slimmer', titel: 'The reversal that earns marks',
        tekst: 'Clausewitz said war is the continuation of politics by other means, and Mao that war is politics with bloodshed.\n\nThe chapter turns that around, and that is exactly the kind of observation that lifts an answer: you could as easily say that **politics is the continuation of war by other means**, or that politics is war without bloodshed.\n\nReality rarely measures up to the ideal. In an answer, always name both conceptions and say which fits the case in front of you.' },

      { type: 'tekst', titel: '11. Power: the capacity to act', toetsstof: true,
        tekst: 'The word comes from the Latin **potere**, to be able. Bertrand Russell therefore saw power as the production of intended effects. The greater your capacity to determine your own fate, the more power you have.\n\nCalling China powerful means it is well placed to define and achieve its goals and to stop others from blocking them.\n\nNote the distinction the chapter draws between **power to** and **power over**: the ability to achieve goals versus exercising control over others. Most analyses concern the second.\n\nAnd note the nuance about **negative power**: every state has some power, if only the ability to oblige a reaction from bigger states. Syrian refugees and asylum-seekers from Honduras may seem powerless, but both groups spark policy responses from the countries they affect.' },

      { type: 'tabel', titel: 'Lukes\u2019 three dimensions of power', toetsstof: true,
        kop: ['Dimension', 'Core question', 'How it works'],
        rijen: [
          ['First', 'Who prevails when preferences conflict?', 'Decision-making. Decisions are made on issues with an observable conflict of interests'],
          ['Second', 'Who controls whether preferences are expressed?', 'Non-decision-making. Decisions are prevented on issues with an observable conflict of interests'],
          ['Third', 'Who shapes preferences?', 'Ideological. Potential issues are kept out of politics altogether']
        ],
        noot: 'As you move along, the conception of power becomes more subtle but also stretched beyond its normal use.' },

      { type: 'tekst', titel: '12. The three dimensions with their examples', toetsstof: true,
        tekst: '**First dimension.** Measures power by whose views prevail when the actors hold conflicting views. The greater the correspondence between your views and the decisions reached, the more influence. Concrete and measurable. The example: despite repeated mass shootings, leaders of both major American parties refuse to impose meaningful limits on gun ownership, amounting to an elite conspiracy to keep guns widely available.\n\n**Second dimension.** The capacity to keep issues **off the agenda**, so that they are never discussed. Bachrach and Baratz: whoever, consciously or unconsciously, creates barriers to the public airing of policy conflicts has power. The example: under the Taliban in Afghanistan, fear of reprisals discourages people from expressing support for women\u2019s rights and democracy. In that way the Taliban render democracy a non-issue.\n\n**Third dimension.** Concerns not the expression but the **formation** of preferences: a manipulated consensus, in which the flow of information is managed so that disputes never arise. The example is the influenza pandemic of 1918-1920, the **Spanish flu**. It infected perhaps one in three people, with estimates of up to 100 million deaths, but news of it was strictly controlled in the worst-affected countries out of concern for morale as the First World War drew to a close. The only country where open reporting was allowed was **Spain**, which is why it carries that name.' },

      { type: 'uitleg', titel: 'The conclusion you should be able to draw',
        tekst: 'The most efficient power is the one that shapes information and preferences, because then the first and second dimensions never come into play.\n\nPower is therefore not only about whose preference wins. You must also ask **whose opinions are kept out of the debate**, and in what wider context those preferences were formed.\n\nThe chapter draws the line explicitly to the selective briefings offered by many governments about the seriousness of Covid-19 in 2020.' },

      { type: 'tekst', titel: '13. Authority: the acknowledged right to rule', toetsstof: true,
        tekst: 'Authority is in some ways **more fundamental** to understanding government than politics or power. Where power is the capacity to act, authority is the **acknowledged right** to do so.\n\nIt exists when subordinates accept that superiors can give legitimate orders. Russia may exercise power over Russians in Ukraine, the Baltic states and Kazakhstan, but its formal **authority stops at the Russian border**.\n\n**Max Weber** held that in a relationship of authority the ruled implement the command as if they had adopted it spontaneously, for its own sake. That makes authority a more efficient form of control than brute power.\n\nAnd then the nuance that often goes wrong: authority is **more than voluntary compliance**. Acknowledging the authority of your state does not mean you always agree with its laws; it means only that you accept its right to make laws and your own obligation to obey. That is precisely how authority provides the foundation for the state.' },

      { type: 'stappen', titel: 'Weber\u2019s three sources of authority', toetsstof: true,
        items: [
          { titel: 'Tradition', tekst: 'The accepted way of doing things. Think of hereditary monarchy.' },
          { titel: 'Charisma', tekst: 'Intense commitment to a leader and their message. Tied to a person and therefore fragile.' },
          { titel: 'Legal-rational norms', tekst: 'Based on the rule-governed powers of an office, not of a person. Dominant in democracies.' },
          { titel: 'Additions to Weber', tekst: 'The chapter adds two: competence, or at least the perception that leaders know what they are doing, and the extent to which leaders represent the moral values and ideological goals of their followers.' }
        ] },

      { type: 'tekst', titel: '14. Regime and political system', toetsstof: true,
        tekst: 'These two are often used as synonyms, and that is not right.\n\nA **regime** describes a political **type**: a democracy, a dictatorship, an elitist system, a neoliberal regime.\n\nA **political system** summarises the **parts** that make up the political life of a state or community. David Easton: a political system can be designated as the interactions through which values are authoritatively allocated for a society, and that is what distinguishes it from other systems in its environment.\n\nThe word regime has unfortunately acquired a **pejorative ring** and is used mainly for authoritarian or illegitimate systems: the Putin regime, the Maduro regime. **Regime change** then stands for the removal of a government considered illegitimate.\n\nBut the term is more neutral and clinical than that usage suggests. You can simply call Sweden a democratic regime, with a political system as the space within which Swedish politics takes place.\n\nIn democratic regimes government is influenced by interest groups, parties, media, corporations and public opinion. In authoritarian regimes government often lacks autonomy and effectively becomes the **property** of a dominant individual or elite.' },

      { type: 'tekst', titel: '15. Typologies: three historical attempts', toetsstof: true,
        tekst: 'There are nearly 200 national political systems and hundreds of thousands of local ones. A **typology** brings order to that. The ideal typology is simple, consistent, logical and as useful to a casual observer as to a political scientist. That ideal has never been reached: political scientists disagree about the criteria, the groups, the labels and even which country belongs where. There is therefore **no generally accepted typology**.\n\n**Aristotle** made the first attempt, classifying the 158 city-states of Ancient Greece. Between roughly 500 and 338 BCE these were small settlements with differing forms of rule: a laboratory. He used two dimensions, the **number** of people involved in governing and the **form** of government, meaning whether rulers governed in the common interest or their own. That produced six classes, from democracy to tyranny.\n\n**Montesquieu** distinguished three types in *The Spirit of the Laws* (1748): **republican** systems in which the people or some of them hold supreme power, **monarchical** systems in which one person rules on the basis of fixed and established laws, and **despotic** systems in which one person rules on the basis of their own priorities and perspectives.\n\nThe **Three Worlds**, current during the Cold War, was less a scholarly model than a Western response to geopolitics: a First World of wealthy democratic industrialised states, a Second World of communist systems, and a Third World of poorer, less democratic and less developed states.' },

      { type: 'waarschuwing', titel: 'Why the Three Worlds fell out of use',
        tekst: 'The system was simple and evocative, and the term Third World still conjures up images of poverty, underdevelopment, corruption and instability.\n\nThe criticism you need to know has three parts. The typology was **more descriptive than analytical**. It was **pejorative** in its ranking. And it was **simplistic**: treating almost all states of Africa, Asia and Latin America as a single Third World was always asking too much given their political and economic differences.' },

      { type: 'tabel', titel: 'The two typologies this book uses', toetsstof: true,
        kop: ['', 'Democracy Index', 'Freedom in the World'],
        rijen: [
          ['Maintained by', 'Economist Intelligence Unit, UK', 'Freedom House, US'],
          ['Scale', 'Score out of 10', 'Score out of 100'],
          ['Categories', 'Full democracy, flawed democracy, hybrid, authoritarian', 'Free, partly free, not free'],
          ['Norway', '9.81 full democracy', '100 free'],
          ['United States', '7.92 flawed democracy', '83 free'],
          ['India', '6.61 flawed democracy', '67 partly free'],
          ['Nigeria', '4.10 hybrid', '45 partly free'],
          ['Russia', '3.31 authoritarian', '20 not free'],
          ['North Korea', '1.08 authoritarian', '3 not free']
        ],
        noot: 'The results are not identical but overlap strongly, and both have identified the same worrying reversals in the health of democracy in recent years.' },

      { type: 'tekst', titel: '16. Economies and societies as extra measures', toetsstof: true,
        tekst: 'Alongside political rankings the book uses economic and social data. The link between politics and economics is so intimate that a whole field exists for it: **political economy**. The claim: good governance is more likely to go hand in hand with a successful economy, bad governance less so.\n\nThe core measure is **gross domestic product**, the value of the total domestic and foreign output of a country\u2019s residents in a year, converted to dollars. Caveats: accuracy varies by country and the conversion raises questions about exchange rates.\n\nMore important is the distinction: GDP measures **absolute** size but takes no account of population. Divide by population and you get **per capita GDP**, which gives a better sense of relative economic size. Luxembourg has a GDP of 71 billion dollars and Nigeria 448 billion, but per head that is 114,704 against 2,230.\n\nFor social needs the book uses the **Human Development Index** from UNDP, built from life expectancy, literacy, educational enrolment and per capita GDP, with four classes from Very High to Low. Most wealthy democracies are in the top 30; Niger ranked last on the 2020 index, at 187.' },

      { type: 'waarschuwing', titel: 'The nuance the chapter ends on',
        tekst: 'The obvious conclusion is that wealthy democracies meet their people\u2019s needs better than poor authoritarian systems. It is not that simple.\n\nCitizens of democracies are, overall, wealthier, healthier and happier, but you should not overlook the sometimes enormous divisions **within** states. All states are divided along several planes: gender, wealth, ethnicity and religion. The book goes on to give many examples of political systems that have failed to be inclusive or to achieve equal opportunity.' },

      { type: 'begrippen', items: [
        { begrip: 'Political science', definitie: 'the study of the theory and practice of government and politics: the structure and dynamics of institutions, processes and political behaviour' },
        { begrip: 'Social science', definitie: 'the study of human society and of the structured interactions among people within it' },
        { begrip: 'Comparative politics', definitie: 'the systematic study of government and politics in different countries, to understand them better by drawing out contrasts and similarities' },
        { begrip: 'Theory', definitie: 'an abstract or generalised approach to explaining or understanding a phenomenon, supported by a significant body of hard evidence' },
        { begrip: 'Government', definitie: 'the institutions and processes through which societies are governed' },
        { begrip: 'Institution', definitie: 'a formal or informal organisation or practice with rules and procedures, marked by durability and internal complexity' },
        { begrip: 'Governance', definitie: 'the process by which decisions, laws and policies are made, with or without the input of formal institutions' },
        { begrip: 'Politics', definitie: 'the process by which people negotiate and compete in making and executing shared or collective decisions' },
        { begrip: 'Power', definitie: 'the capacity to bring about intended effects; sometimes used broadly as influence, sometimes narrowly as getting one\u2019s way by threats' },
        { begrip: 'Authority', definitie: 'the right to rule; authority creates its own power so long as people accept that the person in authority has the right to decide' },
        { begrip: 'Regime', definitie: 'a political type, based on a set of principles, norms, rules and decision-making procedures' },
        { begrip: 'Political system', definitie: 'the interactions and institutions that make up a regime' },
        { begrip: 'Typology', definitie: 'the system by which types are classified according to their common features' },
        { begrip: 'Gross domestic product', definitie: 'the value of the total domestic and foreign output by residents of a country in a given year' }
      ]}
    ]
  },

  {
    id: 'toepassen', titel: 'Applying it',
    blokken: [
      { type: 'uitleg', titel: 'Case: Nigeria',
        tekst: 'The chapter spotlights Nigeria because all the concepts of this session are visible there at once.\n\n**Political form.** Federal presidential republic with 36 states and a Federal Capital Territory. State formed in 1960, current constitution from 1999. President for a maximum of two four-year terms. Bicameral legislature: House of Representatives with 360 members, Senate with 109. Federal Supreme Court with 14 members.\n\n**Electoral system.** The president must win a majority of all votes cast and at least 25 per cent in two-thirds of the states. Two runoffs are possible.\n\n**The problem of instability.** Since independence in 1960 Nigeria has seen three periods of civilian government, five successful and several attempted coups, a civil war, and nearly 30 years of military rule. Only in **2015** did a sitting president lose to a challenger for the first time.\n\n**Economy and governance.** Heavy reliance on oil leaves the size and health of the economy, and government revenues, dependent on the oil price. Much of the oil wealth has been squandered or stolen, feeding the corruption that is rife at every level. The population is expected to double in 25 years.\n\n**Divisions.** Divided by ethnicity, which handicaps efforts to build national identity. Separated by religion, with a mainly Muslim north and a non-Muslim south, and contested pressure from the north to expand the reach of sharia. Regional disparities are fundamental: a dry and poor north, a south better endowed in resources and services. The oil lies in the south-east or offshore, while much of the profit goes to elites elsewhere.\n\n**Rankings.** Democracy Index 4.10, recently upgraded from authoritarian to **hybrid**. Freedom House 45, partly free. HDI: Low. GDP 448 billion dollars, per capita 2,230 dollars.' },

      { type: 'stappen', titel: 'How to analyse a case with this chapter',
        items: [
          { titel: '1. Separate government from governance', tekst: 'Which institutions exist, and separately: how does the process of deciding run, and how well? A country can have every institution on paper and still be badly governed.' },
          { titel: '2. Ask who has power, in all three dimensions', tekst: 'Not only who wins the decisions, but also which issues never reach the agenda and whose preferences were shaped in advance.' },
          { titel: '3. Distinguish power from authority', tekst: 'Can the ruler act, and do the ruled accept their right to act? Whoever has power without authority must use coercion, and that is expensive.' },
          { titel: '4. Determine the regime type', tekst: 'Use the Democracy Index and Freedom House side by side. Where they differ, that difference says something in itself.' },
          { titel: '5. Find a comparison case', tekst: 'Preferably a country similar on many points but different in outcome, such as Costa Rica against Nicaragua. That isolates what makes the difference.' },
          { titel: '6. Name what you do not know', tekst: 'The reliability of your data, the limited selection of cases, your own assumptions. That is not a weakness in your answer but the sign that you have understood the chapter.' }
        ] },

      { type: 'oefening', id: 'gp-c1-oef-1', niveau: 'basis',
        vraag: 'Explain the difference between government and governance, and use the European Union to show why you need both concepts.',
        antwoord: 'Government refers to the institutions and offices through which societies are governed: executive, legislature, judiciary, bureaucracy and political parties. It is a relatively static concept, focused on who or what exists. Governance refers to the process of collective decision-making, so to the activity of governing and to its quality.\n\nThe EU makes clear why government alone is not enough. The EU has institutions that look a great deal like a government: a directly elected European Parliament, a Court of Justice, an executive apparatus that prepares policy and oversees implementation. If you used only the concept of government, you would have to conclude that the EU has a government, and that does not match reality. Those institutions can only do what the treaties and the member states allow them to do. They are better understood as servants of the integration process than as the government of the EU.\n\nThe concept of governance does capture it. It describes the interplay of institutions, treaties and member states out of which decisions emerge without there being a single ruling authority. The same holds globally: there is no world government, but there is global governance, made up of international organisations, thousands of treaties and constant interaction between states, corporations and interest groups.\n\nThe point to make explicit in an answer: governance is a supplement to government, not a replacement. You need both, because without the first you miss the structure and without the second you miss the process and the quality.' },

      { type: 'oefening', id: 'gp-c1-oef-2', niveau: 'basis',
        vraag: 'Why does the chapter call authority in some ways more fundamental than power? Use Weber in your answer.',
        antwoord: 'Power is the capacity to act and to bring about intended effects. Authority is the acknowledged right to do so. The difference lies in the recognition by those over whom it is exercised.\n\nWeber put it sharply: in a relationship of authority the ruled implement the command as if they had adopted it spontaneously, for its own sake. That makes authority a more efficient form of control than brute power. Whoever has only power must constantly deploy coercion, supervision and threat, which is costly and fragile. Whoever has authority gets compliance almost for free, because people hold themselves to the rule.\n\nThe example the chapter uses is Russia: it exercises power over Russians in Ukraine, the Baltic states and Kazakhstan, but its formal authority stops at the border. Power can therefore reach further than authority, and precisely where it does, exercising it is expensive and contested.\n\nA nuance to include: authority is more than voluntary compliance. Acknowledging the authority of your state does not mean you agree with every law. It means you accept its right to make laws and your own obligation to obey them. That is exactly why authority provides the foundation for the state: it survives disagreement about individual decisions.\n\nWeber distinguished three sources: tradition, charisma and legal-rational norms. The chapter adds two that weigh heavily today: competence, or at least the perception that leaders know what they are doing, and the ability of leaders to represent the moral values and ideological goals of their followers.' },

      { type: 'oefening', id: 'gp-c1-oef-3', niveau: 'gevorderd',
        vraag: 'Apply Lukes\u2019 three dimensions of power to how governments handle information during a pandemic. Use both the Spanish flu and Covid-19.',
        antwoord: 'In the first dimension you measure power by whose views prevail when they conflict. During Covid-19 you see that in visible conflicts over lockdowns, masks and vaccine mandates: which party, ministry or level of government won? In the United States individual states had considerable room of their own, so that struggle ran at several levels at once, while China as a unitary state could decide from the centre regardless of public opinion. Whoever wins more often has more power, and here that is fairly directly readable from the decisions taken.\n\nIn the second dimension the point is keeping issues off the agenda. Here it is not that a debate is lost but that it is never held. Think of the question of whether the numbers were counted correctly. The chapter notes that the figures themselves say nothing about the accuracy or completeness of reporting, and that with the Chinese data there was a question of trust. Where asking such questions is risky or impossible, the second dimension is at work: the conflict exists but never reaches public debate.\n\nIn the third dimension the preferences themselves are shaped by managing the flow of information, so that the dispute never arises. The Spanish flu is the purest example. That pandemic infected perhaps one in three people, with estimates of up to a hundred million deaths, but in the worst-affected countries the news was censored out of concern for morale at the end of the First World War. Spain was the only country where open reporting was allowed, and that is precisely why the disease carries that name to this day. The naming is itself the evidence of the exercise of power: the country that censored least got the disease named after it.\n\nWith Covid-19 the same dimension works more subtly, through the selective briefings many governments offered about the seriousness of the threat. Whoever determines what people know determines what they want, and after that needs to win no debate at all.\n\nThe conclusion you should draw is that the third dimension is the most efficient, precisely because the first two then never come into play. For an analysis that means: never look only at whose preference won, but also at whose view stayed out of the debate and in what context those preferences were formed.' },

      { type: 'oefening', id: 'gp-c1-oef-4', niveau: 'gevorderd',
        vraag: 'The six Spanish-speaking states of Central America are very similar yet differ sharply in outcome. Explain why this example shows exactly what comparison delivers, and which benefits of comparison are at work here.',
        antwoord: 'The strength of the example lies in what is equal. Costa Rica, El Salvador, Guatemala, Honduras, Nicaragua and Panama all became independent in 1821, are ethnically similar, are Catholic countries, have populations between roughly five and seventeen million, and all have a history of military government and authoritarianism. So many similarities make the differences all the more telling, because the usual explanations fall away.\n\nAnd the differences are large. Costa Rica and Panama have built relatively strong economies, with a per capita gross domestic product up to five times that of their neighbours, and relatively strong political systems. Costa Rica ranks as a democracy, while neighbouring Nicaragua ranks as an authoritarian regime. The poverty and instability of Honduras and Guatemala make them major sources of unauthorised migration to the United States.\n\nThe benefit most clearly at work here is context. Without the neighbours you could say of Costa Rica that it is democratic and leave it at that. Placed next to Nicaragua it becomes a question: why there and not here, with so much shared history? That is exactly Dogan and Pelassy\u2019s point, that the researcher who studies one country may take as normal what a comparativist immediately recognises as abnormal.\n\nDescription is also at work, since you first have to establish the facts about the six systems, and so is understanding, since the contrast forces you to look for explanations beyond culture or history, which after all are shared. Finally it touches on making choices: if comparable countries reach such divergent outcomes, they can in principle learn from each other, and the question of which choices made the difference is immediately a policy question.\n\nWhat the example does not do, and this belongs in a good answer, is answer the question. The chapter poses the question of the contextual explanations and leaves it open. That is honest: in the social sciences comparison yields no laws but theories, tendencies and likelihoods, and the outcome depends on the number of cases, the quality of the data and the assumptions you bring.' },

      { type: 'oefening', id: 'gp-c1-oef-5', niveau: 'gevorderd',
        vraag: 'Assess the criticism that political science has failed at prediction. What is the chapter\u2019s reply?',
        antwoord: 'The criticism is sharp and comes from two directions. Karl Popper argued on principle that long-term predictions are possible only for systems that are well-isolated, stationary and recurrent, and that human society is not one of them. That is not a reproach to researchers but a statement about the nature of the object.\n\nThe second line is empirical and harsher. An opinion piece in the New York Times argued that political science had failed spectacularly and wasted colossal amounts of time and money, pointing out that no political scientist foresaw the break-up of the Soviet Union, the rise of Al Qaeda or the Arab Spring. An award-winning study was cited concluding that chimps randomly throwing darts at the possible outcomes would have done almost as well as the experts.\n\nAgainst that, comparison does produce usable expectations. From research on European countries with proportional representation we know that system is tied to more parties in parliament and to coalition governments. And if contracting out public services to private agencies increases cost-effectiveness in one country, a similar effect elsewhere is a reasonable expectation. These are not prophecies about one-off events but expectations about structural relationships, and that is precisely where the field is strong.\n\nThe chapter\u2019s reply is that the problem lies less with comparison as an approach than with its practical execution. The results of research depend on the number and combination of cases, the depth of information per case, the reliability of the data, the chosen method, and how far assumptions and biases steer the work. On top of that, government and politics have been studied in a structured manner for barely a century, much remains poorly understood, and there are still vigorous debates about meaning and interpretation.\n\nThe most honest answer therefore acknowledges both sides: the criticism of predicting one-off political shocks is largely justified, but it generalises wrongly to the whole field. Comparison has opened new horizons as we learned more about the variety of forms in which government and politics exist, and that is a different kind of yield from prediction.' },

      { type: 'uitleg', titel: 'The discussion questions from the book',
        tekst: 'These sit at the end of the chapter and are exactly the kind of question that returns in an exam. Run through them before you move on.',
        punten: [
          'Is it justifiable to describe comparison as the methodological core of the scientific study of politics?',
          'Can we really understand government and politics without comparison?',
          'Which is the most important of the benefits of comparison?',
          'Where does politics begin and end?',
          'Who has power, who does not, and how do we know?',
          'What are the strengths and weaknesses of the Democracy Index and Freedom in the World as ways of classifying political systems?'
        ] }
    ]
  },

  {
    id: 'checken', titel: 'Check yourself',
    blokken: [
      { type: 'quiz', titel: 'Check yourself on chapter 1', vragen: [
        { vraag: 'What is the difference between government and governance?',
          opties: ['Government is national, governance international', 'Government describes the institutions, governance the process of collective decision-making', 'Government is democratic, governance authoritarian', 'They mean the same thing'],
          juist: 1,
          uitleg: 'Government is the relatively static concept of institutions; governance stresses the **activity** of ruling and its quality. Governance is a supplement, not a replacement.' },
        { vraag: 'Why can you speak of global governance but not of a world government?',
          opties: ['Because the UN has no army', 'Because there is no global government, but there are international organisations, treaties and constant interaction that together form a decision-making process', 'Because states are sovereign and therefore never cooperate', 'Because the term government applies only to democracies'],
          juist: 1,
          uitleg: 'Exactly the example the chapter uses to show why you need the concept of governance: there is a process without a government.' },
        { vraag: 'What is the difference between power and authority?',
          opties: ['Power is legal, authority illegal', 'Power is the capacity to act, authority the acknowledged right to do so', 'Power belongs to dictatorships, authority to democracies', 'Authority is a stronger form of coercion'],
          juist: 1,
          uitleg: 'Weber: under authority the ruled implement the command as if they had adopted it themselves. That is why authority is more efficient than brute power.' },
        { vraag: 'Which of Lukes\u2019 dimensions concerns keeping issues off the agenda?',
          opties: ['The first', 'The second', 'The third', 'None of the three'],
          juist: 1,
          uitleg: 'The second dimension is non-decision-making: there is an observable conflict of interests, but no decision is taken because the issue never reaches debate.' },
        { vraag: 'Why is the flu of 1918-1920 called the Spanish flu?',
          opties: ['Because it began in Spain', 'Because Spain was hit hardest', 'Because Spain was the only country where open reporting was allowed', 'Because a Spanish doctor discovered it'],
          juist: 2,
          uitleg: 'In the worst-affected countries the news was censored out of concern for morale at the end of the First World War. A textbook case of the **third** dimension of power.' },
        { vraag: 'Which three features of politics does the chapter name?',
          opties: ['Collective, decision-making, and binding as policy for the group', 'Democratic, peaceful and public', 'National, formal and legal', 'Ideological, economic and cultural'],
          juist: 0,
          uitleg: 'One castaway cannot engage in politics; two can. And whoever keeps resisting the decision taken is thereby engaging in politics as well.' },
        { vraag: 'Who described politics as "who gets what, when, how"?',
          opties: ['Aristotle', 'Max Weber', 'Harold Lasswell', 'Thomas Hobbes'],
          juist: 2,
          uitleg: 'Lasswell (1936), and that formulation belongs to the conception of politics as competitive struggle, against the Aristotelian conception of politics as serving the community.' },
        { vraag: 'Which two dimensions did Aristotle use to classify the Greek city-states?',
          opties: ['Rich against poor, and large against small', 'The number of people governing, and whether they govern in the common or their own interest', 'Democratic against authoritarian, and stable against unstable', 'Military against civilian, and religious against secular'],
          juist: 1,
          uitleg: 'Those two dimensions produced six classes, from democracy to tyranny. It is also one of the earliest examples of comparative politics at work.' },
        { vraag: 'What is the difference between a regime and a political system?',
          opties: ['A regime is authoritarian, a political system democratic', 'A regime is a political type, a political system summarises the parts that make up a state\u2019s political life', 'A regime is temporary, a political system permanent', 'There is no difference'],
          juist: 1,
          uitleg: 'The word regime has acquired a negative ring, but it is really neutral: you can simply call Sweden a democratic regime.' },
        { vraag: 'What was the main substantive criticism of the Three Worlds typology?',
          opties: ['It was too complicated for the media', 'It was more descriptive than analytical, pejorative in its ranking, and simplistic', 'It covered only Europe', 'It was based on economic rather than political data'],
          juist: 1,
          uitleg: 'Treating almost all states of Africa, Asia and Latin America as a single Third World was asking too much given their political and economic differences.' },
        { vraag: 'Why does the book use per capita GDP alongside GDP?',
          opties: ['Because per capita GDP is measured more accurately', 'Because GDP measures absolute size and takes no account of population', 'Because GDP is available only for democracies', 'Because per capita GDP solves exchange rate problems'],
          juist: 1,
          uitleg: 'Nigeria has a far larger economy than Luxembourg, but per head it is 2,230 against 114,704 dollars. Only then do you see relative size.' },
        { vraag: 'What nuance does the chapter end on about wealthy democracies?',
          opties: ['That they perform better in everything than authoritarian regimes', 'That their citizens are on the whole wealthier and healthier, but that divisions within states can be enormous', 'That their figures are unreliable', 'That authoritarian regimes perform better on social measures'],
          juist: 1,
          uitleg: 'All states are divided along lines of gender, wealth, ethnicity and religion. Averages hide that division.' }
      ]},

      { type: 'bronnen', items: [
        { apa: 'McCormick, J., Hague, R., & Harrop, M. (2022). Comparative government and politics: An introduction (12th ed., Ch. 1). Bloomsbury Academic.' },
        { apa: 'Lukes, S. (2021). Power: A radical view (3rd ed.). Palgrave Macmillan.' },
        { apa: 'Dogan, M., & Pelassy, D. (1990). How to compare nations: Strategies in comparative politics (2nd ed.). Chatham House.' }
      ]},

      { type: 'preview', titel: 'Next time', vakId: 'governance-policy', lesId: 'college-1',
        tekst: 'Session 2 on 18 September: Democracy and bureaucracy, on norms and values in building governance practices. The concepts from this session come straight back: how does the power of an executive relate to its authority, and where does bureaucracy sit in the distinction between government and governance?',
        punten: ['Compulsory: Buckwalter & Balfour, chapter 2 of Quality of Governance', 'Take the government versus governance distinction with you, it is the thread'] }
    ]
  }
];
