/* ============================================================
   SSMS inhoud — lessen bij The Coupling of Safety and Security
   plus de studiegids van semester 1 (modulehandleiding 2026-2027).

   Laad dit bestand na lesstof.js in index.html en les.html:
     <script src="ssms-inhoud.js"></script>
   ============================================================ */

LESSTOF["intro-to-safety-security/h1"] = [
  {
    "id": "voor",
    "titel": "Before you start",
    "blokken": [
      {
        "type": "leerdoelen",
        "items": [
          {
            "doel": "Explain why the question \"what is the difference between safety and security\" is a practical question rather than a linguistic one",
            "uitleg": "Never start from the dictionary definition. Say straight away what the answer is really about: **who is responsible, who pays, and which measure follows**.\n\nDo it in three sentences. First: English has two words, Dutch has one, so the language does not help you. Then: the distinction decides which department, which law and which budget is up. Finally an example where that difference matters, such as a fire that was started deliberately versus a fire caused by a short circuit: same damage, different owner of the problem."
          },
          {
            "doel": "Sketch the historical development of safety: from installation, through organisation, to society",
            "uitleg": "Remember three stops and one movement: the view keeps getting **wider**.\n\nFirst the installation: making technology safe, better machines and barriers. Then the organisation: the realisation that management, procedures and culture cause accidents, with the 1980s as the turning point. Then society: systemic risks, legislation and public expectations. Name Perrow at the second stop, because he moved the blame from the operator to the system."
          },
          {
            "doel": "Sketch the historical development of security: from state security, through own vulnerability, to 9/11 and after",
            "uitleg": "Three stops here too, but with a different movement: from **outside to inside**.\n\nFirst security as a matter for the state: defence against an enemy. Then the realisation that organisations are themselves vulnerable and must protect themselves. Then 9/11, which institutionalised security: new agencies, mandatory screening, budgets and rules that did not exist before.\n\nPut the two timelines side by side when you explain it. Safety broadens, security moves into the organisation itself. That is exactly why they fit together so badly."
          },
          {
            "doel": "Name and apply the two academic axes of distinction, and explain why they sometimes give different answers",
            "uitleg": "Axis 1 is **intentionality**: was there intent or not. Axis 2 is **origin and effect**: does the harm move from the system to the environment, or from the environment to the system.\n\nPractise on one case and walk both axes, in that order. For an employee who opens a valve out of grievance, axis 1 says security (intent) and axis 2 says safety (harm moves from inside to outside). The axes clashing is not your mistake: it is the point of the section. So close with the question that actually matters, namely which measure you need."
          },
          {
            "doel": "Name the three vantage points of the book and place each chapter on one of them",
            "uitleg": "The three are the **conceptual** vantage point (what do the concepts mean), the **organisational** one (how does it work inside an organisation) and the **societal or institutional** one (what do politics, law and the public do with it).\n\nAttach every chapter you read to one of the three straight away; write it in your notes. That is how you see why Leveson and Brooks & Coole appear to contradict each other: they stand on different vantage points and are therefore not answering the same question."
          },
          {
            "doel": "Explain why safety science and security science are young and fragmented fields, and why that matters for your profession",
            "uitleg": "Name three causes: both fields are **young**, both are assembled from separate disciplines (engineering, psychology, public administration, criminology), and they have **no shared vocabulary**.\n\nThe consequence for you is concrete: there is no standard answer to look up, so you have to justify your choice. Say exactly that in an exam. Two people using good sources can reach different recommendations, and the difference lies in their vantage point."
          },
          {
            "doel": "Name the four structural tensions that arise when organisations have to deliver safety and security at the same time",
            "uitleg": "Learn them as four **collisions**, not four loose words: opposing measures (an emergency exit must open, a secured door must stay shut), different departments and budgets, different kinds of knowledge and language, and different rules and regulators.\n\nUse them as a checklist on a case: walk the four and you will almost always find where it goes wrong. Tension three runs deeper than it looks, because those two groups do not even share the same way of reasoning about risk."
          },
          {
            "doel": "Argue why \"safe enough\" is a political rather than a technical question",
            "uitleg": "The reasoning has three steps. Every measure costs something: money, freedom, convenience or trust. Engineering can calculate how **large** a risk is, but not which **residual risk** is acceptable. So somebody decides that, and that choice distributes burdens across parties.\n\nTie it to the opening line of the chapter: the safer it gets, the more we demand. The bar moves with it, so without an explicit agreement on \"safe enough\" the answer is always \"more\"."
          }
        ]
      },
      {
        "type": "uitleg",
        "titel": "Meet this book first",
        "tekst": "You are reading an **edited volume**, not a textbook. Eleven chapters by different authors who disagree with each other quite sharply. That is not editorial sloppiness, it is the design.\n\nThe book grew out of a **three-day workshop** of the NeTWork think tank, held in June 2018 at the abbey of Royaumont near Paris, funded by FonCSI, a French research foundation for industrial safety culture. Researchers from different countries and disciplines sat together for three days on one question: how do safety and security relate to each other?\n\nThe two editors are **Kenneth Pettersen Gould** (University of Stavanger, Norway, background in societal safety and organisational research) and **Corinne Bieder** (ENAC, the French civil aviation university in Toulouse, background in aviation safety).\n\nThis first chapter is their introduction. It does two things: it gives you the **history and the concepts** you need to follow the rest, and it gives you the **map** of the book."
      },
      {
        "type": "slimmer",
        "titel": "Why this chapter matters more than it looks",
        "tekst": "Introductory chapters are often skipped. Do not skip this one, for one reason: it is the only chapter that explains **why the rest contradicts itself**.\n\nLeveson (ch3) says the distinction between safety and security hardly matters. Brooks and Coole (ch7) say they are two completely different professions with barely any overlap. That looks like a quarrel, but it is not: they are looking at the same thing from different vantage points. Chapter 1 gives you the three vantage points that let you see it.\n\nPractically: take **three things** away from this chapter. The timeline, the two axes of distinction, and the three vantage points. Everything you read afterwards you hang on one of those three."
      }
    ]
  },
  {
    "id": "kern",
    "titel": "Core material: chapter 1",
    "blokken": [
      {
        "type": "tekst",
        "titel": "Introduction: why expectations keep rising",
        "toetsstof": true,
        "tekst": "I start with the sentence the whole book rests on. The editors phrase it as a general societal trend:\n\n**The safer and more secure our organisations and institutions become, the more safety we demand of them.**\n\nRead that twice, because it is counter-intuitive. You would expect the call for safety to fall as things get safer. The opposite happens.\n\nThe figures bear out the first half. Many of the greatest threats to health and safety at work have been pushed back, certainly in Europe and North America. But at the same time industrial safety has become **broader**. Far more attention went to the **new systemic risks** that modern societies generate themselves, and to the idea that local vulnerabilities are influenced by **global events**.\n\nThat is the tension you will see through the whole book: expectations rise faster than what organisations can actually deliver."
      },
      {
        "type": "voorbeeld",
        "tekst": "**Why rising demands are logical**\n\nIt sounds unreasonable, but there is an ordinary mechanism behind it. Think of a level crossing.\n\nAs long as people die every year at unguarded crossings, a partly protected crossing is an improvement. Once every crossing has barriers and something rarely happens, each incident suddenly becomes **big news**. An investigation is demanded, someone is held responsible, and the standard goes up again.\n\nThe improvement itself moves the bar. That is exactly why demands pile up while performance improves. And exactly why chapter 1 says you have to take the question \"what is safe enough\" seriously, because otherwise the answer is always \"more\"."
      },
      {
        "type": "tekst",
        "titel": "1.1 Where safety and security come from",
        "toetsstof": true,
        "tekst": "Now the history. Safety first, then security. You need both tracks to understand why they are so hard to slot into each other.\n\nSafety has long been a core concern of organisations, especially since the rise of **hazardous technologies and activities**. In sectors such as energy, chemicals, transport, water and healthcare, safety is a core concept in **policy, regulation and management** at the same time. That trio matters: safety does not sit only in the technology, but also in the law and in the way an organisation is set up.\n\nAs a result there are now well-established institutional and management strategies, collaborations and practices around preventing incidents and accidents. Keeping these effective counts as important for the protection of hazardous technology, for two reasons:\n\n1. They are built on **previous incidents**. Every rule in a safety regulation has usually been paid for with damage at some point.\n2. They form a **dynamic but fragile organisational web of safety defences** (Macrae, 2014). The word \"web\" is deliberate: not a wall, but a network of partly overlapping defences that requires constant maintenance."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**The turn in the 1980s**\n\nFrom the 1980s onwards something important happened in thinking about safety. Fed by a better understanding of **how** and **why** accidents happen, attention turned to how accidents and disasters are caused by **societal developments**, and not only by broken parts or inattentive workers.\n\nTwo names you need to know:\n\n**Barry Turner**, *Man-made Disasters* (1978). Disasters do not fall out of the sky; they are preceded by a long incubation period in which signals are missed or misread. Organisations build their own disaster, over years, without noticing.\n\n**Charles Perrow**, *Normal Accidents* (1984). Perrow argues that in certain high-risk systems major accidents are **inevitable**. Not through bad luck or sloppiness, but because of the nature of the system itself.\n\nThat argument became influential and stimulated interest in two things at once: the **limits to safety**, and the **possibilities of organisational competence**. So on the one hand: how far can we get? And on the other: what can a well-organised organisation actually achieve?\n\nThat second question is exactly what chapter 8 (La Porte) and chapter 9 (Schulman) pursue, with their work on high reliability organisations."
      },
      {
        "type": "uitleg",
        "tekst": "**Why Perrow matters here**\n\nPerrow distinguishes two properties of systems: **interactive complexity** (parts influence each other in ways designers did not foresee) and **tight coupling** (there is no slack between the steps, so a disturbance propagates immediately).\n\nIf a system scores high on both, then accidents are, according to Perrow, normal in the statistical sense: to be expected, not exceptional. Nuclear power plants are his standard example.\n\nYou do not need Perrow in detail for this course, but you do need this: the idea changes the question. Not \"how do we prevent all accidents\", but **\"how much risk do we accept, and who decides that\"**. That is the question chapter 1 arrives at in section 1.4."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**1.1 continued — where security comes from**\n\nSecurity has a completely different ancestry, and that explains much of the later friction.\n\n**Phase 1, until around 1989: security is state security.** Security was strongly tied to the state and to protection against threats from **foreign states**. For civil industries, security was only a theme insofar as those organisations contributed to the **military defence capability** of a state. A chemical plant did safety, but security was in principle a matter for the military and the intelligence services.\n\n**Phase 2, late 1980s: the gaze turns inward.** When the Cold War ended, political attention shifted to peace and international human rights. And, more important for our field, a growing awareness emerged of societies’ **own vulnerability** to malicious acts such as sabotage and terrorism. The threat no longer came by definition from another state.\n\n**Phase 3, until 2001: still small beer.** Until the attacks in New York on 11 September 2001, security threats formed a much **smaller part** of the total regulatory and management scope than other dangers, namely major accidents and disasters. That is a crucial detail: security existed, but it was subordinate.\n\n**Phase 4, after 9/11: everything changes.** We have since become far more familiar with malicious attacks that may include suicide operations. Partly because of that changed threat type, the public feels a kind of **free-floating dread** that is reinforced by terrorist attacks (LaPorte, 2006)."
      },
      {
        "type": "uitleg",
        "tekst": "**What \"free-floating dread\" precisely means**\n\nThis concept is subtler than \"people are afraid\". Ordinary fear has an **object**: you are afraid of crossing the road, and the fear disappears once you are on the other side.\n\nFree-floating dread has no fixed object. It is a general sense of threat that attaches itself to changing things: a rucksack on the metro, a crowd, a noise. It does not subside when a specific danger disappears, because it was never attached to that danger.\n\nWhy this matters for your field: policy that responds to such dread can be **objectively successful** and **subjectively fail**. You lower the probability of an attack, but the feeling remains, so the call for measures remains too. That is the same mechanism as the opening line of the chapter, now seen from the security side."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**What happened institutionally after 9/11**\n\nThe consequences of that shift were concrete and visible:\n\n- **New policy concepts** appeared, along with new management and organisational perspectives for a secure society.\n- The public called for **better preparedness**, with an emphasis on **prevention** in particular.\n- New **requirements and forms of accountability** developed.\n\nThe standard example the editors give: in the United States the **Transportation Security Administration (TSA)** was created after the **Aviation and Transportation Security Act** was passed in November 2001. The TSA now sits under the **Department of Homeland Security**. The authors refer to the 9/11 Commission Report of 2004, and add that there have been comparable developments in European countries.\n\nNote what is actually happening: **security tasks are placed inside civil aviation**, a sector that until that moment was entirely built around safety. That is the birth of the interface this book investigates, and at the same time the birth of the problem."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Four consequences of that interface**\n\nThe growing emphasis on security and its risk-reducing measures leads to an obvious interface between safety and security management in hazardous industries. The authors name four concrete consequences. I list them, because this is examinable material:\n\n**1. A new category of threats.** Leaders and analysts had to understand a completely new category of threats and incorporate it into their existing frames of thinking.\n\n**2. New collaborations and domains.** Forms of collaboration and operational domains emerged that were not a starting point of existing strategies and practices before 9/11.\n\n**3. Doubt about what already existed.** Doubt arose about the effectiveness of a fair part of the existing approaches to protecting hazardous technology. That is a painful point: it is not only about adding something, but about whether what was already in place is any good.\n\n**4. The interactions are far from obvious.** And this is the most underestimated point in the whole chapter: the interactions between safety and security turn out not to be obvious at all, **especially not in normal situations**. Subtle mutual influences occur. Pettersen and Bjørnskau (2015) showed with field research that safety and security practices in some cases even **work against each other**."
      },
      {
        "type": "waarschuwing",
        "tekst": "**Note the words \"in normal situations\"**\n\nThis is a detail students consistently skip, and it is the most interesting part.\n\nDuring a **crisis** it is usually clear enough how safety and security relate: there is an attack, or there is an accident, and everyone knows who is responsible for what.\n\nThe friction sits in the **ordinary Tuesday morning**. A door that fire safety says must open and security says must stay shut. A logbook that safety says must be public and security says must not. An employee who according to safety must report everything and according to security may pass nothing on.\n\nThat is where they collide, every day, in small ways. And there is barely any research on it, as section 1.4 will admit."
      },
      {
        "type": "voorbeeld",
        "tekst": "**Four collisions in practice**\n\nTo make it concrete, with examples in the spirit of the chapter:\n\n**Emergency exit.** Safety wants it to open from the inside at all times. Security wants it unusable from the outside and wants nobody slipping out unseen.\n\n**Reporting.** Safety wants you to report near-misses without punishment, because without reports you learn nothing. Security wants to know who did what when, and links behaviour to persons.\n\n**Publishing.** Safety investigation publishes its reports so the whole sector can learn. Security investigation deliberately does not publish vulnerabilities, because that is a manual for the attacker.\n\n**Access.** Safety wants emergency responders to reach everything quickly. Security wants as few people as possible to reach anything.\n\nIn all four cases **nobody is wrong**. That is precisely what makes it hard: it is not a misunderstanding you resolve with a good conversation, it is a genuine conflict of goals."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**The big question that follows**\n\nOut of those collisions comes a very practical organisational question, and it returns in almost every chapter of this book:\n\n**Should organisations have two separate units for safety and security, or should they merge the two?**\n\nThe authors note that many organisations, industries and institutions **hesitate** about this. That word is chosen deliberately. They are not saying the answer is known and people are too slow; they are saying there is no answer.\n\nAnd that is immediately your professional question. When you later write an SSMS recommendation on how to organise a safety function, this is the question you will be judged on."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Systemic risks and the political context**\n\nThere is a third movement, alongside the safety history and the security history. It is more political-economic, and the chapter mentions it briefly but emphatically.\n\nFor both safety and security, hazards and threats are increasingly defined as **systemic risks**: products of modern society itself. Local vulnerabilities are understood as influenced by **global events and processes**, for instance within **digitalisation**.\n\nThis development coincides with a transformation of both safety and security policy towards broader fields and **shared responsibilities**, with attention to societal, civil, homeland and human issues.\n\nAnd these changes must be seen in combination with the growth of **risk management** as an answer to policy demands. That growth in turn connects to a broader pattern of **neoliberal influence**, characterised by far-reaching **deregulation, privatisation and outsourcing**."
      },
      {
        "type": "uitleg",
        "tekst": "**What that neoliberal remark means for your field**\n\nThis is a political observation, and the authors do not develop it. But it is important enough to translate, because you see the effect every day.\n\nThe reasoning: if government **deregulates** (fewer detailed rules), **privatises** (tasks move to companies) and **outsources** (work moves to subcontractors), then direct steering on safety disappears. What replaces it? **Risk management**. No longer \"you must do X\", but \"you must demonstrate that you control your risks\".\n\nThree consequences you should be able to name:\n\n1. Safety becomes something you **demonstrate with documents**, not only something you do. Paperwork starts to count as performance.\n2. Responsibility becomes **dispersed** across client, contractor and subcontractor. After an incident the first question is who was actually responsible.\n3. Room appears for **differences in interpretation**, because the standard is no longer prescribed but filled in by the party itself.\n\nThis also explains why safety and security are so hard to integrate: they are often delivered by different parties, under different contracts. Bongiovanni (ch6) shows this concretely for airports."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**The conclusion of section 1.1**\n\nThe authors close their historical part with a sharp formulation worth knowing by heart:\n\nWhereas the grey area between security and safety could once still be reduced to the problem of **defining the difference between an accident and a criminal act**, safety and security can no longer ignore each other. Not in concepts, not in policy, and not in management practice. And, they add in brackets: **if they ever could**.\n\nThat last clause is more than a stylistic flourish. Without it you are saying: they used to be separate, now they are not, so we must build something new. With it you are saying: the separation was always artificial, and we only got away with it as long as the grey area looked small.\n\nThat is a far more radical claim, because then the problem is not new; only our **simplification** has stopped working."
      },
      {
        "type": "tekst",
        "titel": "1.2 Why defining is so devilishly hard",
        "toetsstof": true,
        "tekst": "Now the concepts themselves. The chapter starts cautiously: there may be **little difference** between feeling *safe* and feeling *secure* (Ale, 2009). But if you assume the concepts are not fully analogous, clear definition remains a challenge (Boholm et al., 2016).\n\nTwo causes are named.\n\n**Cause 1: language.** Many languages have only one word for safety and security, unlike English. Dutch is a perfect example: it uses \"veiligheid\" for both, and has to improvise with \"beveiliging\", \"sociale veiligheid\" or simply the English term.\n\n**Cause 2: double usage.** There are many academic definitions on the one hand and everyday speech on the other. Together they produce ambiguity. \"I don’t feel safe here\" from a resident means something different from \"safety\" in a risk analysis, but it is the same word."
      },
      {
        "type": "uitleg",
        "tekst": "**A language problem you will meet in the Netherlands**\n\nNotice what the language problem does in practice. A Dutch municipal safety memorandum says \"veiligheid\", and that one word covers fire safety, road safety, organised crime, burglary and the feeling of safety all at once.\n\nThat is not sloppiness by the municipality, that is the language. But the effect is that the memorandum **places measures side by side that have nothing to do with each other**, and that a discussion about priorities becomes impossible: you are comparing apples and pears under one word.\n\nIf your programme teaches you to make explicit in a recommendation **which kind of safety** you mean, you are doing exactly what this chapter asks. And that is not nitpicking: it is the precondition for a usable recommendation."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Axis 1 — the distinction by intentionality**\n\nThe academic definitions refer mainly to **two types of distinction**. This is the first and best known.\n\n**Safety** deals with *hazards* and with **non-intentional or accidental risks**.\n**Security** deals with **malicious threats and intentional risks**.\n\nThe core question is therefore: **did somebody do this on purpose?**\n\nThis axis is intuitive and often works well. A scaffold that collapses is safety; an attack on that scaffold is security. But it has two weak spots you need to know:\n\n1. **You often do not know.** At the moment things go wrong, nobody knows whether it was intentional. The fire is burning; intent is established months later. Yet action is needed **now**.\n2. **It makes no difference to the damage.** A factory that explodes creates the same devastation whether it was intentional or not. That is precisely the argument with which **Leveson** in chapter 3 sets the whole axis aside."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Axis 2 — the distinction by origin and effect**\n\nThe second axis is less well known but analytically sharper. It is not about intent but about the **direction of the harm**.\n\n**Safety** is the ability of the **system not to harm the environment**.\n**Security** is the ability of the **environment not to harm the system**.\n\nSo: does the arrow point outwards or inwards?\n\nA chemical plant discharging poison harms the environment: safety. A burglar entering the plant is the environment harming the system: security.\n\nSome authors combine both axes into more refined schemes, to do justice to differences in usage between domains. There the system-environment axis is enriched with a third possibility: the ability of a system not to harm **itself**. That is the **SEMA framework** of Piètre-Cambacédès and Chaudet (2010)."
      },
      {
        "type": "uitleg",
        "tekst": "**Why a third direction was needed**\n\nWhy make \"the system harms itself\" a separate category? Take a machine that destroys itself through wear without anyone being injured and without the environment noticing anything.\n\nWith two directions that fits nowhere: the environment does nothing, and the environment suffers nothing. Yet it is clearly a safety issue, and in practice an expensive one.\n\nThe three directions in SEMA are therefore: system outwards, outside towards system, and system towards itself. You do not need SEMA in detail, but you do need to know that the simple dichotomy does not capture everything and that authors have therefore proposed refinements."
      },
      {
        "type": "tekst",
        "tekst": "**The two axes side by side**"
      },
      {
        "type": "tabel",
        "kop": [
          "",
          "Axis 1: intentionality",
          "Axis 2: origin—effect"
        ],
        "rijen": [
          [
            "Core question",
            "Did someone do it on purpose?",
            "Which way does the harm move?"
          ],
          [
            "Safety",
            "hazards, non-intentional and accidental risks",
            "the system does not harm the environment"
          ],
          [
            "Security",
            "malicious threats, intentional risks",
            "the environment does not harm the system"
          ],
          [
            "Refinement",
            "combinations of both axes",
            "plus: the system does not harm itself (SEMA)"
          ],
          [
            "Weak spot",
            "intent is often known only afterwards",
            "the system boundary is a choice, not a fact"
          ],
          [
            "Cited in",
            "Ale (2009); Smith & Brooks (2012)",
            "Boholm et al. (2016); Piètre-Cambacédès & Bouissou (2013)"
          ]
        ],
        "noot": "This table is the most practical summary of section 1.2. If you can reproduce it from memory, you can open almost any case in this course."
      },
      {
        "type": "voorbeeld",
        "tekst": "**The two axes on one case, and what then happens**\n\nCase: an employee at a water treatment plant, frustrated about being dismissed, opens a valve. Untreated water enters the river.\n\n**Axis 1, intentionality.** He did it on purpose. So: **security**.\n\n**Axis 2, direction of the harm.** The system harms the environment, the river. So: **safety**.\n\nTwo axes, two different answers. That is not a flaw in your reasoning; this is exactly the grey area the book is about. Note as well that the perpetrator stands **inside** the system, while axis 2 defines security as something coming from outside.\n\nHow to handle this professionally: you do not quietly pick one axis and pretend it is obvious. You **state** that the axes diverge, you explain the consequences (who is responsible, who investigates, which measure follows), and only then do you give your recommendation. That difference between \"giving an opinion\" and \"showing a trade-off\" is exactly the difference between vocational and bachelor level."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Distinguish, or simply manage everything?**\n\nDespite all attempts to refine the distinction, the authors say one question keeps returning: should you distinguish the two **at all**, or should you simply manage all hazards as well as possible, whether they make us feel unsafe or insecure? That question comes from **Young and Leveson (2014)**, and Leveson develops the position fully in chapter 3.\n\nA central concept for achieving both is **risk management**. See Blokland and Reniers in chapter 2, and the editors themselves in chapter 11.\n\nBut, the authors warn immediately, it is not settled there either. There is much confusion about:\n- what you may **expect** from risk analysis (Short, 1992),\n- **how** you carry it out,\n- and whether it is the **same** for safety and security (Jore, 2019).\n\nNotice how this chapter always has the same shape: here is a proposed solution, and here is why it does not close the matter. That is not a weakness of the book, that is the state of the field."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**How science and technology widen the gap**\n\nYou would expect more science and better technology to bring the concepts closer together. Often the opposite happens. The conceptual differences between safety and security have in many contexts been **further magnified** by science and technology. The example the authors work out is the airport.\n\nIn daily operations, security screeners and safety personnel have:\n- **different training**,\n- **different technology**,\n- and they **work in completely different ways**.\n\nOn top of that, the different **regulatory frameworks** and the nature of some **contracts** at airports reinforce that separation still further (Bongiovanni, 2016).\n\nThink through what that means. Two groups of people on the same site, with the same overarching aim, who have not followed each other’s training, cannot operate each other’s equipment, fall under different rules and sometimes work for different employers. You do not integrate that with a joint newsletter."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**And still people have to decide**\n\nHere comes the sentence that in my view matters most for your future profession.\n\nHowever separate the two worlds are, the behaviour of individual employees or organisations protecting themselves against threats and hazards requires **decisions without it having been settled whether this is safety or security**.\n\nAnd who takes those decisions? The authors are explicit: **\"ordinary workers\"**, managers, HSE professionals, security officers and other professionals.\n\nThat is the gap between theory and practice in this field. Academics debate the correct definition; the guard at the door has to decide right now whether to open it.\n\nThe consequence for you: a recommendation that only works after someone has correctly classified the distinction is not a usable recommendation. It has to work in the situation where that distinction is not settled."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**The three vantage points of the book**\n\nHowever blurred the dividing lines, the contributions in this book show how safety and security come together from different scientific positions and contexts. The editors distinguish **three vantage points**, and you should know which chapter sits where.\n\n**1. Conceptual** — what **are** these things, and which words do we use?\nBlokland & Reniers (ch2), Jore (ch5)\n\n**2. Technical and methodological** — how do we analyse, design and measure?\nLeveson (ch3), Wipf (ch4), Bongiovanni (ch6)\n\n**3. Management and practice** — who does what, in which organisation, and where does it collide?\nBrooks & Coole (ch7), La Porte (ch8), Boustras (ch10), Schulman (ch9)\n\nThe chapters show that doing safety **and** security is a fairly **generic feature** of organisations, and for many organisations even inseparable from their existence. But as **professional fields** they have developed differently, supported by quite separate scientific and technological fields.\n\nOne more nuance: some parts of professional safety and security practice rest on highly specialised and rigorous knowledge, while other parts are **routinised by convention, rule or law** (Short, 1992). That is why, alongside technical knowledge and methods, **empirical study** is needed of the organisations and systems in which safety and security develop and interact. That is precisely what La Porte argues for in chapter 8."
      },
      {
        "type": "uitleg",
        "tekst": "**Why the vantage point decides who is \"right\"**\n\nUse these three vantage points as glasses and the book falls into place.\n\nFrom the **technical** vantage point Leveson is right: if the consequences are the same and your control measure is the same, why run two analyses?\n\nFrom the **management** vantage point Brooks and Coole are right: if the training, the professional bodies, the knowledge domains and the legislation differ, then these are two professions, however much you want to integrate.\n\nFrom the **conceptual** vantage point Blokland and Reniers are right: without clear words you do not even know what you are talking about.\n\nNone of the three is wrong. They answer different questions. If you show that in an exam answer or a paper, you show that you understand the book as a whole rather than three separate chapters."
      },
      {
        "type": "tekst",
        "titel": "1.3 The state of the science",
        "toetsstof": true,
        "tekst": "Both fields are **relatively young** as scientific communities. That sounds like a detail for researchers, but it has direct consequences for your profession, which I will explain.\n\n**Safety science** is usually described as research aimed at better protection: preventing danger or the risk of injury. But the production of safety knowledge turns out to be **diverse**: it varies by context and mixes approaches from different disciplines (Le Coze, Pettersen & Reiman). Safety managers too form a diverse and growing community, although some boundaries have emerged, for instance within **Occupational Health and Safety (OHS)** (Hale, 2019).\n\nAnd then comes an observation to remember. The technical requirements for safety differ enormously depending on the type of hazard. Moreover, many requirements are **legal or economic** and stem from **policy rather than science**. More precisely: they stem from the institutional and organisational goals in the safety strategy and safety climate of a supranational regulator, a national or local government, or a company.\n\n**Security science** is just as diverse, just as multidisciplinary, and has an **even less sharply defined** structure of knowledge and skills (Smith & Brooks, 2012). The same remedy applies as with safety: security becomes far easier to define once you tie it to a **specific context** and to the corresponding concepts, theories and models."
      },
      {
        "type": "uitleg",
        "tekst": "**What \"many requirements come from policy, not science\" means for you**\n\nThis sentence looks innocent but is sharp. It says that a fair part of what we call \"safety requirements\" does not follow from research into what works, but from **legislation, costs and political goals**.\n\nThree practical consequences:\n\n1. **Complying with the rules is not the same as being safe.** You can be fully compliant and still have an unsafe situation, and the other way round.\n2. **The question \"where does this requirement come from\" is always legitimate.** From research, from a law, from an insurer, or from an incident ten years ago? That determines how much weight you give it.\n3. **As an adviser you have to speak both languages.** What works according to research, **and** what is required by the rules. They do not coincide, and pretending they do makes your advice unusable.\n\nThis is one of the things that sets this book apart from an ordinary textbook: it tells you not only what the field knows, but also how **shaky** part of that knowledge is."
      },
      {
        "type": "voorbeeld",
        "tekst": "**Security culture: how shaky it can be**\n\nThe authors give an illustration themselves, and this pointer to chapter 5 is worth having.\n\nSissel Jore notes that an **accident investigation report** used the concept of *security culture* as one of the important explanatory factors behind the outcome of a terrorist attack. Many **Norwegian petroleum companies** also apply security culture as a means of security improvement.\n\nThe concept clearly has a counterpart in *safety culture*, and in theory it can be defined and researched. But, and this is the point: it is applied with **little technical support and analysis**.\n\nTranslated: an explanation is being given for an attack with fatalities, using a concept whose precise meaning and measurement are not settled. And companies are being steered on that basis.\n\nThe conclusion the editors draw: the dividing lines blur not only between security and safety, but also between **scientific approaches and management**. In theory as well as in practice."
      },
      {
        "type": "tekst",
        "titel": "1.4 The limits of what technology and bureaucracy can do",
        "toetsstof": true,
        "tekst": "We come to the most fundamental part of the chapter.\n\nThat there are **limits** to bureaucratic and technical performance in the pursuit of safety and security is unmistakable. Accidents **and** malicious attacks will happen, and uncertainties will remain (Short, 1992).\n\nThe authors quote Schulman from chapter 9, and this is a statement to remember:\n\nThere are always **more ways in which a complex system can fail** than ways in which it works correctly as designed.\n\nAnd then the security aggravation comes on top: hostile strategy adds **extra possibilities for calamity**, because vulnerabilities are treated as **strategic targets**.\n\nThat difference is essential. In safety, chance is your opponent, and chance does not search deliberately for your weakest point. In security there is a thinking adversary who **seeks out and selects** your vulnerabilities. That is precisely why Blokland and Reniers’ third level of distinction in chapter 2, about the nature of the uncertainty, matters so much."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Three questions the chapter passes on to you**\n\nThree questions follow from those limits. The authors do not answer them; they pass them on to the field and to the reader.\n\n**Question 1: what is safe and secure enough?**\nAs long as you do not answer that, every level is too little, because something can always be added.\n\n**Question 2: what do the new demands mean for the people?**\nSafety and security generate new demands, even demands for stronger integration. What are the implications for the people in organisations and institutions that manage technologies which keep growing in scale and complexity?\n\n**Question 3: who is strengthened and who gets the strain?**\nWho becomes more powerful or more important through this development, and who instead experiences more tension and conflict? For this question the authors point to La Porte in chapter 8.\n\nQuestion 3 is the most mature of the three, and at the same time the one students most often skip. Every safety measure **distributes** something: authority, budget, status, workload. Anyone who fails to name that writes a recommendation that only works on paper."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**The four concrete tensions**\n\nThe chapter makes those abstract questions concrete with four tensions. These four are excellent exam material, because they are short and sharp.\n\n**Tension 1: merge or keep separate.** Many organisations hesitate between two separate units for safety and security, or one merged treatment. There is no proven right answer.\n\n**Tension 2: regulators get tasks without a knowledge base.** Security is added to the scope of some safety authorities, for instance in aviation at **EASA** and the French civil aviation authority. But with **very limited input from research** on how to deal conceptually and practically with that extended scope. Policy is therefore being made in an area where science has no answer yet.\n\n**Tension 3: transparency collides.** A further possible problem concerns transparency and the sharing of data and experience. The illustration the authors give is the **publication of research**: security research may demand **confidentiality** about results, while safety management and safety research strive for **maximum openness**. Those are two opposing information regimes, not two styles.\n\n**Tension 4: the research is lopsided.** Most research and literature on the relationship between safety and security focuses on **engineering aspects** such as design and risk analysis methods, plus some work on conceptual issues. Despite all the years in which safety and security have coexisted, there appears to be **limited research** into how they are managed in practice at all levels. A few field studies do confirm a **tension** between safety and security in daily activities. Further research into the interactions is therefore needed."
      },
      {
        "type": "uitleg",
        "tekst": "**Why tension 3 runs deeper than it looks**\n\nI single out tension 3, because that is the one students skim over fastest.\n\nSafety grew great **through** openness. The whole learning process of aviation, for example, runs on public accident reports: one accident, learned from worldwide. That is not a by-product, it is the **working mechanism**.\n\nSecurity works the other way round. A public report on how someone got in is a **manual**. There, openness increases the risk.\n\nSo if you merge the two, one of them has to surrender its most important learning mechanism. Merge them under a security regime and safety loses its public learning cycle. Merge them under a safety regime and you publish vulnerabilities.\n\nThat is not a small practical problem you solve with a confidentiality clause. It is a **structural conflict**, and one of the strongest arguments **against** naive integration. Remember this if you ever have to advise on merging: this is your heaviest counter-argument."
      },
      {
        "type": "tekst",
        "tekst": "**Key concepts from chapter 1**"
      },
      {
        "type": "begrippen",
        "items": [
          {
            "begrip": "Systemic risk",
            "definitie": "Risk seen as a product of modern society as a whole, in which local vulnerabilities are influenced by global events and processes."
          },
          {
            "begrip": "Societal safety",
            "definitie": "The broadening of industrial safety to the societal level: safety as a property of a society, not only of an installation or workplace."
          },
          {
            "begrip": "Societal security",
            "definitie": "Security at societal level, focused on societies’ own vulnerability to malicious acts rather than on threats from hostile states."
          },
          {
            "begrip": "Intentionality",
            "definitie": "The first axis of distinction: safety concerns non-intentional, accidental risks; security concerns intentional, malicious threats."
          },
          {
            "begrip": "System-environment axis",
            "definitie": "The second axis of distinction: safety is the ability of the system not to harm the environment; security is the ability of the environment not to harm the system."
          },
          {
            "begrip": "SEMA framework",
            "definitie": "The refinement by Piètre-Cambacédès and Chaudet (2010) that extends the system-environment axis with the ability of a system not to harm itself."
          },
          {
            "begrip": "Free-floating dread",
            "definitie": "Public dread without a fixed object, described by LaPorte, reinforced by terrorist attacks and not disappearing when a specific danger disappears."
          },
          {
            "begrip": "Web of safety defences",
            "definitie": "The dynamic but fragile whole of organisational defences against incidents, built on previous incidents (Macrae, 2014)."
          },
          {
            "begrip": "Normal accidents",
            "definitie": "Perrow’s thesis (1984) that major accidents in certain high-risk systems are inevitable because of the nature of those systems themselves."
          },
          {
            "begrip": "Occupational Health and Safety",
            "definitie": "The subfield of occupational safety and health, within which clearer professional boundaries have formed than in safety science as a whole."
          },
          {
            "begrip": "Neoliberal influence",
            "definitie": "The broader pattern of deregulation, privatisation and outsourcing within which the growth of risk management as a policy solution must be understood."
          },
          {
            "begrip": "Vantage point",
            "definitie": "The position from which the convergence of safety and security is viewed: conceptual, technical-methodological, or management and practice."
          }
        ]
      },
      {
        "type": "citaat",
        "tekst": "Whereas the grey area between security and safety could once be reduced to the question of what distinguishes an accident from a criminal act, they can no longer ignore each other, if they ever could.",
        "bron": "Working translation of the closing claim of section 1.1, Pettersen Gould & Bieder",
        "jaar": "2020"
      },
      {
        "type": "waarschuwing",
        "tekst": "**Three mistakes I keep seeing**\n\n**Mistake 1: assuming safety and security reinforce each other.** The chapter says the opposite. The practices can work against each other, and precisely in normal, everyday situations the interactions are anything but obvious.\n\n**Mistake 2: mixing up the two axes.** Axis 1 is about intent. Axis 2 is about the direction of the harm. Those are two independent ways of distinguishing, not two phrasings of the same thing. They can give different answers on the same case, and that is informative.\n\n**Mistake 3: thinking this chapter offers a solution.** It does not, and that is deliberate. It gives you the map, the concepts and the open questions. Anyone who writes \"the solution of chapter 1\" in an exam has not read it."
      },
      {
        "type": "tekst",
        "titel": "1.5 The structure of the book",
        "toetsstof": true,
        "tekst": "The chapters are not divided into sections, but the order runs roughly from **conceptual**, through **technical and methodological**, to **empirical research, management and practice**. The authors explicitly note that there is a fair amount of **overlap** between chapters.\n\nThe final chapter (ch11) summarises the main challenges and problems that become visible when you put the contributions side by side, and discusses a number of key points for an **interconnected research agenda** for safety and security."
      },
      {
        "type": "tekst",
        "tekst": "**The eleven chapters, with vantage point**"
      },
      {
        "type": "tabel",
        "kop": [
          "Ch",
          "Author(s)",
          "Vantage point",
          "Core in one sentence"
        ],
        "rijen": [
          [
            "1",
            "Pettersen Gould & Bieder",
            "introduction",
            "How safety and security grew historically, why they now converge, and how this book is built."
          ],
          [
            "2",
            "Blokland & Reniers",
            "conceptual",
            "A risk perspective: what connects and separates safety and security under uncertainty about effects on objectives."
          ],
          [
            "3",
            "Leveson",
            "technical",
            "System safety engineering can handle safety and security scenarios; design flaws cannot be eliminated in advance."
          ],
          [
            "4",
            "Wipf",
            "technical",
            "Game theory on a case from light helicopter operations; similarities and differences between assessment techniques."
          ],
          [
            "5",
            "Jore",
            "conceptual",
            "Security culture as a promising but conceptually shaky notion, tested against an attack on an Algerian oil facility."
          ],
          [
            "6",
            "Bongiovanni",
            "technical",
            "An end-user perspective and design methods at the airport; look beyond the legal and managerial."
          ],
          [
            "7",
            "Brooks & Coole",
            "management",
            "Safety and security diverge as professions; within their own knowledge domains the synergies are limited."
          ],
          [
            "8",
            "La Porte",
            "management",
            "Which organisational puzzles arise when safety and security are demanded simultaneously of large technical organisations?"
          ],
          [
            "9",
            "Schulman",
            "management",
            "High reliability management as a possible common framework, with the tensions that creates."
          ],
          [
            "10",
            "Boustras",
            "management",
            "Safety and security from the workplace: emerging risks and new drivers."
          ],
          [
            "11",
            "Bieder & Pettersen Gould",
            "synthesis",
            "The research and management challenges that emerge from all the contributions together."
          ]
        ],
        "noot": "The vantage point column comes from section 1.2, where the editors attach the authors to a vantage point; the last column is their own summary in 1.5."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**The chapter summaries, expanded**\n\nBelow is what the editors themselves announce per chapter. Read this quickly now, and come back to it after each chapter. That way you keep seeing where you are on the map.\n\n**Chapter 2 — Blokland & Reniers.** Take a risk perspective and focus on what connects and distinguishes safety and security in situations with uncertainty about effects on individual, organisational or societal objectives. For risk analysis purposes they sketch safety and security largely in the same way, but they also argue for differences relating to effects, objectives and uncertainty.\n\n**Chapter 3 — Leveson.** Shows how methods from system safety engineering can be developed so that they cover both safety and security scenarios. The approach accepts that **design flaws cannot be eliminated before use**, and that the complexity of many systems calls for new and more comprehensive models of causality. The chapter shows how engineering tools based on systems theory can treat safety and security in an integrated way.\n\n**Chapter 4 — Wipf.** Uses a **game-theoretical approach** on an empirical case from light helicopter operations to assess safety and security issues in combination. The chapter illustrates the similarities and differences between assessment techniques.\n\n**Chapter 5 — Jore.** Acknowledges that security science is moving towards **softer measures**, and argues that security culture is a promising concept for organisations because it can make security a priority and a shared responsibility. She compares it with the far more widely applied safety culture. The soundness of the concept is discussed through an investigation report on a terrorist attack on an internationally run Algerian oil facility, and the discussion is structured with criteria for **conceptual adequacy**.\n\n**Chapter 6 — Bongiovanni.** Is method-oriented and takes an **end-user perspective** on safety and security. Focusing on the airport security environment, and security screening in particular, he shows the possible benefits of looking beyond the legal and managerial perspectives that appear to dominate both safety and security management. His claim: this way organisations can spend fewer resources on the **\"eternal spoilsports\"** of loss prevention and create more value for users.\n\n**Chapter 7 — Brooks & Coole.** Explains how safety and security, although they share an overarching driver of societal wellbeing, **diverge as separate professions**. They consider security within the context of corporate security and safety within the context of occupational health and safety, and conclude that, viewed within their professions and the supporting professional knowledge domains, there is **limited synergy**.\n\n**Chapter 8 — La Porte.** Asks which organisational design and operational puzzles arise when organisations and public institutions are required to deliver both \"safety in operations\" and \"security against external threat\", while their core technologies grow in scale and complexity. Building on experience from a **field study of large technical organisations**, the chapter formulates questions that arise when safety and security become mixed operational challenges, and sketches a guide for further empirical research. It also addresses the strategic implications for **top leadership**, who face both external threats and the growing social complexity of operations.\n\n**Chapter 9 — Schulman.** Building on earlier research into **high-reliability management**, focuses on the management challenge of the convergence of safety and security. He discusses how high reliability can function as a common framework for safety and security, and which challenges come with bringing both under one larger management framework.\n\n**Chapter 10 — Boustras.** Explores safety and security from the perspective of the **workplace**, and argues that emerging risks and new drivers create new areas of attention at the interface. Because the work-related consequences and the direct economic impact for organisations are **less visible**, government agencies and regulatory pressure become more of a backbone, with increasing demands on the workplace."
      },
      {
        "type": "tekst",
        "tekst": "**The two positions the book keeps apart**"
      },
      {
        "type": "vergelijking",
        "links": {
          "titel": "Integrate",
          "tekst": "Safety and security are at heart the same problem and should be tackled together.",
          "punten": [
            "Leveson (ch3): the same analysis, only extra causal scenarios",
            "Blokland & Reniers (ch2): security as a subset of safety",
            "Schulman (ch9): high reliability as a common framework",
            "Strong argument: the consequences are identical, so why two systems?"
          ]
        },
        "rechts": {
          "titel": "Keep separate",
          "tekst": "Safety and security are different professions with different knowledge, rules and information regimes.",
          "punten": [
            "Brooks & Coole (ch7): limited synergy between the professions",
            "Different training, technology and working methods at airports",
            "Openness versus confidentiality as colliding regimes",
            "Strong argument: integrating on paper does not resolve the conflict in practice"
          ]
        }
      }
    ]
  },
  {
    "id": "toepassen",
    "titel": "Applying it",
    "blokken": [
      {
        "type": "uitleg",
        "titel": "What you can do with this chapter",
        "tekst": "Chapter 1 gives you no method but it does give you a **way of looking**. Below I turn that into something usable: a fixed order for opening a situation, and exercises to see whether it has landed.\n\nThe core of bachelor level in this field: do not pick safety or security and then plough ahead, but **show that you have seen the tension** and then choose with reasons."
      },
      {
        "type": "stappen",
        "titel": "Opening a situation with chapter 1",
        "items": [
          {
            "titel": "Describe the situation factually, without a label",
            "tekst": "Who, what, where, when. Do not yet stick \"this is a security issue\" on it. That label steers your analysis and you are often wrong if you attach it too early."
          },
          {
            "titel": "Test axis 1: was it intentional?",
            "tekst": "Is there a party doing this on purpose, or wanting to? Note: the answer may be \"unknown\", and that is itself a finding. As the chapter says, people have to decide without this being settled."
          },
          {
            "titel": "Test axis 2: which way does the harm move?",
            "tekst": "Does the system harm the environment, does the environment harm the system, or does the system harm itself? Draw a circle with an arrow if it helps. Also state explicitly where you place the system boundary, because that choice determines your outcome."
          },
          {
            "titel": "Compare the two answers",
            "tekst": "If they agree, you have a straightforward case. If they differ, you are in the grey area, and that is your most important finding, not your problem."
          },
          {
            "titel": "Choose your vantage point",
            "tekst": "Is the question conceptual (what is this?), technical-methodological (how do I analyse or design this?) or management and practice (who does what, and where does it collide?). That determines which chapters you reach for and what kind of answer fits."
          },
          {
            "titel": "Find the collision",
            "tekst": "Which measure for the one weakens the other? Think of the four classic collisions: emergency exit, reporting, publishing, access. If you find none, you probably have not looked hard enough."
          },
          {
            "titel": "Name the distribution",
            "tekst": "Who is strengthened and who gets the strain? Which budget, which authority, which workload shifts? This is question 3 from section 1.4 and the part most often missing from student recommendations."
          },
          {
            "titel": "State what \"enough\" is, and who decides",
            "tekst": "Without an answer to \"safe enough\", every measure is too little. So say explicitly which level you propose, what you base it on, and who owns that decision."
          }
        ]
      },
      {
        "type": "oefening",
        "id": "h1-oef-1",
        "niveau": "basis",
        "vraag": "Explain why the end of the Cold War and 11 September 2001 together form the turning point for security in civil, hazardous industries. Treat both moments separately.",
        "antwoord": "Before the end of the Cold War, security was mainly state security: protection against threats from hostile states. Civil industry came into view only insofar as it contributed to the military defence capability of a state. Security was therefore in principle not a task for a chemical plant or an airport. The end of the Cold War produced the first shift: political attention moved to peace and international human rights, and at the same time awareness grew that societies are themselves vulnerable to malicious acts such as sabotage and terrorism. The threat no longer had to come from a state. Even so, until 2001 security remained a small part of the regulatory and management scope compared with major accidents and disasters. 9/11 produced the second shift: attacks that may include suicide operations became a familiar category, the public developed a free-floating dread reinforced by attacks, and new policy concepts appeared, new institutions such as the TSA after the Aviation and Transportation Security Act of November 2001, and new requirements and forms of accountability with an emphasis on prevention. Together those two moments mean that security tasks ended up with civil organisations built entirely around safety, and that is where the interface this book investigates arises."
      },
      {
        "type": "oefening",
        "id": "h1-oef-2",
        "niveau": "basis",
        "vraag": "A hospital wants to better secure its emergency department after incidents of aggression. The security officer proposes closing the side entrance at night. Analyse with both axes and name the collision.",
        "antwoord": "Axis 1, intentionality: aggression against staff is intentional, so the threat the measure targets falls under security. Axis 2, direction of the harm: the environment, in this case visitors turning aggressive, harms the system, so this too points to security. Both axes give the same answer, so at first sight this is a clear security issue. The collision sits in the measure, not in the problem. A closed side entrance is a classic access collision: security wants as few people as possible to enter, safety wants patients and responders to reach the place quickly. With a closed side entrance, escape routes and approach routes get longer, which in the event of a fire or an unstable patient can cost lives. There is also a distribution question: the staff at the main entrance get the crowding and the aggression on top, while the staff at the side entrance get quiet. A recommendation that only says \"close it\" or only \"keep it open\" misses the point; you have to state what each choice costs and to whom."
      },
      {
        "type": "oefening",
        "id": "h1-oef-3",
        "niveau": "gevorderd",
        "vraag": "A chemical company wants to merge safety and security into one department. Write three arguments for and three against, each explicitly based on chapter 1.",
        "antwoord": "For. First, hazards and threats are nowadays both understood as systemic risks in which local vulnerabilities connect to global processes such as digitalisation, so you analyse them best in combination. Second, in daily practice employees already have to take decisions without it being settled whether something is safety or security; the chapter explicitly mentions ordinary workers, managers, HSE professionals and security officers, so a separated structure does not fit the actual work. Third, the subtle mutual influences between the two are visible precisely in normal situations, and you only see them if someone looks at both at once. Against. First, safety and security practices can work against each other, as Pettersen and Bjørnskau showed; those conflicts do not disappear by hanging them under one manager, they merely become invisible. Second, the information regimes collide structurally: safety management and safety research strive for maximum openness, while security research may demand confidentiality, and merging means one of the two surrenders its learning mechanism. Third, as professional fields they developed differently, supported by separate scientific and technological fields, with different training, technology, working methods, regulatory frameworks and sometimes different contracts. Conclusion for the recommendation: the chapter offers no proven answer and establishes that organisations hesitate about this, so a defensible recommendation names the tensions and states explicitly which price one is willing to pay."
      },
      {
        "type": "oefening",
        "id": "h1-oef-4",
        "niveau": "gevorderd",
        "vraag": "The authors write that safety and security can no longer ignore each other, \"if they ever could\". What does that clause change about the claim?",
        "antwoord": "It changes the nature of the claim from historical to conceptual. Without the clause the statement is a description of change: safety and security used to be genuinely separate, new threats and systemic risks mean they no longer are, so we must build something new. With the clause it is suggested that the separation was always artificial, and that we got away with it as long as the grey area looked small and could be reduced to the question of whether something was an accident or a criminal act. What has changed is then not reality but the tenability of our simplification. That has two consequences. First, you cannot solve the problem by slotting new security tasks neatly into existing safety structures, because those structures are themselves built on the assumption that is now wobbling. Second, it explains why the book devotes so much attention to definitions: if the separation was never sharp, the first question is not how you integrate but what exactly you thought you were keeping apart."
      },
      {
        "type": "oefening",
        "id": "h1-oef-5",
        "niveau": "gevorderd",
        "vraag": "Why do the authors call it problematic that regulators such as EASA are given security as well? Connect your answer to what the chapter says about the state of the research.",
        "antwoord": "The problem is not the extension itself but the absence of a knowledge base beneath it. Security is added to the scope of safety authorities such as EASA and the French civil aviation authority, but with very limited input from research on how to handle that broader scope conceptually and practically. That connects directly to the fourth tension: most research and literature focuses on engineering aspects such as design and risk analysis methods, with some conceptual work alongside, while there is limited research into how safety and security are managed in practice at all levels. The few field studies that exist moreover confirm tension between the two in daily activities. So a regulator is given an extra task in an area where science cannot yet say how that task relates to the existing one, while there are indications that the two bite each other. The risk is that the extension is arranged on paper, that existing safety routines remain the frame, and that the tension is passed down to the people in operations who have to resolve it in their daily work."
      },
      {
        "type": "oefening",
        "id": "h1-oef-6",
        "niveau": "gevorderd",
        "vraag": "Devise your own case in which the two axes give different answers, and explain what that means for the question of who should carry out the investigation.",
        "antwoord": "An example case: a maintenance technician at a wind farm deliberately skips an inspection in order to go home earlier, after which a nacelle catches fire and the surrounding area is threatened. Axis 1 points towards security, because skipping the check was intentional; although the intent was not aimed at harm but at saving time, which is already a reason to be careful with this axis. Axis 2 points towards safety, because the system, the wind farm, harms the environment. The perpetrator moreover sits inside the system boundary, while axis 2 defines security as something coming from outside. For the investigation question this is decisive. Under a safety frame the question becomes why skipping that check was possible and attractive: workload, planning, the design of the procedure, missing feedback. Under a security frame the question becomes who did it and whether sanctions should follow. That second question produces a culprit and a file; the first produces an improvement that prevents the next case. At the same time it collides with the information regime: under a safety frame you want an open report without punishment, under a security frame you want traceability to persons. Naming that difference, and its consequences for who investigates and what is learned, is the actual professional contribution here."
      }
    ]
  },
  {
    "id": "checken",
    "titel": "Check yourself",
    "blokken": [
      {
        "type": "uitleg",
        "titel": "How to get the most out of this",
        "tekst": "Do the quiz first without turning back. Being wrong is useful: the explanation under each answer says not only what is right but also why the other option was tempting.\n\nAfterwards, test yourself out loud. If you can retell the timeline, the two axes, the three vantage points, the four tensions and the three open questions without your notes, this chapter has landed. Whatever you cannot retell, you do not know yet, however familiar it felt while reading."
      },
      {
        "type": "quiz",
        "titel": "Check yourself on chapter 1",
        "vragen": [
          {
            "vraag": "What is the opening claim of the chapter about societal expectations?",
            "opties": [
              "As things get safer, the call for safety declines",
              "The safer organisations become, the more safety we demand of them",
              "Safety is mainly a technical problem",
              "Public opinion plays no role in safety policy"
            ],
            "juist": 1,
            "uitleg": "Counter-intuitive but central. The improvement itself moves the bar, so demands rise faster than performance."
          },
          {
            "vraag": "What was security mainly tied to until the end of the Cold War?",
            "opties": [
              "Cybercrime",
              "State security and threats from foreign states",
              "Occupational safety on the shop floor",
              "Shoplifting and vandalism"
            ],
            "juist": 1,
            "uitleg": "Civil industry came into view only insofar as it contributed to the **military defence capability** of a state."
          },
          {
            "vraag": "What happened in safety thinking from the 1980s onwards, according to the chapter?",
            "opties": [
              "Accidents were traced back to technical failure",
              "Attention turned to societal causes and organisational characteristics",
              "Safety was merged with security",
              "Statistics was abandoned as a method"
            ],
            "juist": 1,
            "uitleg": "Turner and Perrow showed that hazards connect to organisational characteristics, and that major accidents in certain systems are inevitable."
          },
          {
            "vraag": "What is the core of the second axis of distinction?",
            "opties": [
              "Whether the perpetrator acted intentionally",
              "Whether the incident was reported",
              "Whether the system harms the environment or the environment harms the system",
              "Whether the damage is financial or physical"
            ],
            "juist": 2,
            "uitleg": "Intent belongs to the **first** axis. Axis 2 is exclusively about the direction in which the harm moves."
          },
          {
            "vraag": "What does the SEMA framework add?",
            "opties": [
              "A scale for risk levels",
              "The possibility that a system harms itself",
              "A list of threat types",
              "A method for cost-benefit analysis"
            ],
            "juist": 1,
            "uitleg": "Piètre-Cambacédès and Chaudet (2010) enrich the system-environment axis with a third direction, because the dichotomy does not capture everything."
          },
          {
            "vraag": "What does the chapter say about the interaction between safety and security practices?",
            "opties": [
              "They almost always reinforce each other",
              "They are completely unrelated",
              "They can work against each other, and precisely in normal situations the interactions are not obvious",
              "They have become identical in practice"
            ],
            "juist": 2,
            "uitleg": "Pettersen and Bjørnskau (2015) demonstrated this with field research. Note especially \"in normal situations\": the friction sits in daily work, not in the crisis."
          },
          {
            "vraag": "Why do science and technology widen the difference at airports?",
            "opties": [
              "Because the technology is too expensive",
              "Because screeners and safety personnel have different training, technology and working methods",
              "Because there is too little staff",
              "Because the airport has no safety policy"
            ],
            "juist": 1,
            "uitleg": "Different regulatory frameworks and the nature of some contracts reinforce that separation still further."
          },
          {
            "vraag": "Why do safety research and security research collide around publication?",
            "opties": [
              "Security research is more expensive",
              "Security may demand confidentiality while safety strives for maximum openness",
              "Safety research does not use peer review",
              "Security may only be published by government"
            ],
            "juist": 1,
            "uitleg": "A **structural** conflict between two information regimes. On integration, one of the two surrenders its most important learning mechanism."
          },
          {
            "vraag": "What does Schulman claim about complex systems, according to chapter 1?",
            "opties": [
              "They rarely fail if the design is good",
              "There are more ways in which they can fail than ways in which they work correctly",
              "They are safer the larger they are",
              "Their failure can always be traced back to human error"
            ],
            "juist": 1,
            "uitleg": "And hostile strategy adds possibilities to that, because vulnerabilities are treated as **strategic targets**."
          },
          {
            "vraag": "What is the problem with extending EASA’s scope to security?",
            "opties": [
              "EASA has no mandate",
              "There is barely any research saying how to handle that broader scope conceptually and practically",
              "Security belongs to the police",
              "Aviation has no security problems"
            ],
            "juist": 1,
            "uitleg": "A knowledge gap. Most research is about engineering and concepts, little about managing both in practice."
          },
          {
            "vraag": "What does the chapter say about where many technical safety requirements come from?",
            "opties": [
              "Almost all of them come from scientific research",
              "Many requirements are legal or economic and stem from policy rather than science",
              "They are set by insurers",
              "They are standardised worldwide"
            ],
            "juist": 1,
            "uitleg": "They stem from the institutional and organisational goals of regulators, governments or companies. Complying with the rules is therefore not the same as being safe."
          },
          {
            "vraag": "Which three vantage points do the editors distinguish?",
            "opties": [
              "Legal, economic, technical",
              "Conceptual; technical and methodological; management and practice",
              "Prevention, repression, aftercare",
              "Individual, organisational, societal"
            ],
            "juist": 1,
            "uitleg": "Conceptual (Blokland & Reniers, Jore), technical-methodological (Leveson, Wipf, Bongiovanni), and management and practice (Brooks & Coole, La Porte, Boustras, Schulman)."
          },
          {
            "vraag": "Which question from section 1.4 is about the distribution of burdens?",
            "opties": [
              "What is safe and secure enough?",
              "Who is strengthened and who experiences more tension and conflict?",
              "How much does a measure cost?",
              "Which technology is most effective?"
            ],
            "juist": 1,
            "uitleg": "The authors point to La Porte in chapter 8 for this. Every measure distributes authority, budget, status and workload."
          },
          {
            "vraag": "What is the function of this introductory chapter within the book?",
            "opties": [
              "It gives the solution the rest builds on",
              "It gives the history, the concepts and the map, and leaves the questions open",
              "It refutes the other chapters",
              "It describes one case in detail"
            ],
            "juist": 1,
            "uitleg": "The chapter deliberately gives no solution. That is the point: it makes visible why the following chapters can contradict each other."
          }
        ]
      },
      {
        "type": "bronnen",
        "titel": "Sources for chapter 1",
        "items": [
          {
            "apa": "Pettersen Gould, K., & Bieder, C. (2020). Safety and security: The challenges of bringing them together. In C. Bieder & K. Pettersen Gould (Eds.), The coupling of safety and security (pp. 1–8). Springer."
          },
          {
            "apa": "Ale, B. (2009). Risk: An introduction. The concepts of risk, danger and chance. Routledge."
          },
          {
            "apa": "Boholm, M., Möller, N., & Hansson, S. O. (2016). The concepts of risk, safety, and security: Applications in everyday language. Risk Analysis, 36(2), 320–338."
          },
          {
            "apa": "Hale, A. (2019). From national to European frameworks for understanding the role of occupational health and safety specialists. Safety Science, 115, 435–445."
          },
          {
            "apa": "LaPorte, T. R. (2006). Challenges of assuring high reliability when facing suicide terrorism. In P. Auerswald et al. (Eds.), Seeds of disasters. Cambridge University Press."
          },
          {
            "apa": "Macrae, C. (2014). Close calls: Managing risk and resilience in airline flight safety. Springer."
          },
          {
            "apa": "Perrow, C. (1984). Normal accidents: Living with high-risk technologies. Basic Books."
          },
          {
            "apa": "Pettersen, K. A., & Bjornskau, T. (2015). Organizational contradictions between safety and security. Safety Science, 71, 167–177."
          },
          {
            "apa": "Piètre-Cambacédès, L., & Bouissou, M. (2013). Cross-fertilization between safety and security engineering. Reliability Engineering & System Safety, 110, 110–126."
          },
          {
            "apa": "Piètre-Cambacédès, L., & Chaudet, C. (2010). The SEMA referential framework. International Journal of Critical Infrastructure Protection, 3, 55–66."
          },
          {
            "apa": "Short, J. F. (1992). Organizations, uncertainties, and risk. Westview Press."
          },
          {
            "apa": "Smith, C., & Brooks, D. J. (2012). Security science: The theory and practice of security. Butterworth-Heinemann."
          },
          {
            "apa": "Turner, B. A. (1978). Man-made disasters. Wykeham Press."
          },
          {
            "apa": "Young, W., & Leveson, N. (2014). An integrated approach to safety and security based on systems theory. Communications of the ACM, 57(2), 31–35."
          }
        ]
      },
      {
        "type": "preview",
        "titel": "From history to foundations",
        "vakId": "intro-to-safety-security",
        "lesId": "h2",
        "tekst": "Chapter 1 showed that the concepts run into each other and why that grew historically. Chapter 2 tries to put a foundation under them, with one ISO definition as the starting point.",
        "punten": [
          "Why the words \"unsafety\" and \"unsecurity\" barely exist, and why that is a problem",
          "Risk as the effect of uncertainty on objectives",
          "Objectives as vectors, and the 90-degree criterion for conflict",
          "Three levels at which safety and security differ according to Blokland and Reniers"
        ]
      }
    ]
  }
];
LESSTOF["intro-to-safety-security/h2"] = [
  {
    "id": "voor",
    "titel": "Before you start",
    "blokken": [
      {
        "type": "leerdoelen",
        "items": [
          "Explain why standardised definitions are necessary for safety and security science",
          "Reproduce the ISO definition of risk word for word and apply it",
          "Explain Blokland and Reniers’ definition of \"objectives\" and use it as a starting point",
          "Name the three elements that must be present for risk to exist",
          "Explain the fundamental difference between risk and safety",
          "Name the three levels at which safety and security differ: effect, objectives and uncertainty",
          "Explain what the vector approach to objectives and the 90-degree criterion mean",
          "Give definitions of safety, security and unsecurity as this chapter proposes them"
        ]
      },
      {
        "type": "uitleg",
        "titel": "What this chapter is about",
        "tekst": "This chapter is written by **Peter J. Blokland** and **Genserik L. Reniers** of the Safety and Security Science Group (S3G) at TU Delft. Reniers also works in Brussels and Antwerp.\n\nEveryone has an intuitive understanding of risk, safety and security, and to a degree that understanding is universal. But as soon as you try to get to the bottom of what those words mean, you end up in a **semantic debate** and in **ontological discussions**.\n\nThe authors’ aim: break that deadlock by proposing a common semantic and ontological ground, with the concept of **\"objectives\"** as the central starting point."
      },
      {
        "type": "slimmer",
        "titel": "How to keep this chapter straight",
        "tekst": "This chapter stacks definitions on top of each other. Miss one link and the rest collapses. So while you read, write this chain on a single sheet:\n\nobjectives → risk (ISO) → safety → security → unsecurity\n\nAnd note at each step: **which word is added?** At security, \"intentional\" is added. At unsecurity, \"alignment is low\" and \"likelihood is high\" are added. That way you remember it without cramming."
      },
      {
        "type": "waarschuwing",
        "titel": "Ontology and semantics, briefly",
        "tekst": "**Semantics** is about the meaning of words. **Ontology** is about what actually exists: what **is** a risk to a thing? The chapter deals with both at once, so the authors are not only claiming better words, but also a better picture of what we are actually talking about."
      }
    ]
  },
  {
    "id": "kern2",
    "titel": "Core material: chapter 2",
    "blokken": [
      {
        "type": "tekst",
        "titel": "2.1 Introduction — two persistent misconceptions",
        "toetsstof": true,
        "tekst": "The chapter starts with two views the authors regard as untenable.\n\n**Misconception 1: risk and safety are opposites.** This is often asserted, but understanding is growing that it is only **partly** true and does not fit the more modern, more comprehensive views of risk and safety (see the work of Aven).\n\n**Misconception 2: safety and security are entirely separate fields.** That is how they are often seen: separate areas of expertise, studied apart from each other. Other views emphasise the **similarities** and even treat the two as synonyms (Boholm et al., 2016).\n\nThe questions of the chapter are then: how do these concepts relate to each other, and how does a contemporary and inclusive view of them help in understanding and tackling the issues involved?"
      },
      {
        "type": "tekst",
        "titel": "2.2 The concepts — from specialist to holistic",
        "toetsstof": true,
        "tekst": "Views of and awareness about safety, security and risk have evolved in recent years: from a **narrow, specialist perspective** towards a more **holistic** picture and approach.\n\nBut, and this is the heart of the complaint, that understanding is **not necessarily shared**. Everyone grasps what the words mean, in their own experience. As soon as you open a discussion about what these concepts really are and how they should be studied or addressed, you most probably end up in ontological and semantic debates, because of the diverging views, perceptions and definitions that exist side by side."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**2.2.1 Why standardisation matters**\n\nScience, including the domain of risk and safety, depends heavily on clear and shared definitions of concepts and on well-defined parameters. Precise definitions deliver three things:\n\n1. **standardisation**,\n2. **better communication**,\n3. **unambiguous sharing of knowledge**.\n\nThe authors use a telling comparison from Brazma (2001): our ability to combine information from independent experiments depends on standards, just as **manufacturing standards** are needed to make components from different manufacturers fit together."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**2.2.2 Synonyms and antonyms — the gap in the vocabulary**\n\nAnyone searching safety and security science for unambiguous definitions and parameters that clearly connect safety, security and risk will be disappointed. The safety science literature shows that the question \"what is safety\" can be answered in **many ways**, and that a clear definition of the **opposite** is almost impossible to find.\n\nThe conclusion is twofold:\n- there is **no** widely accepted semantic basis in safety and security science;\n- there is **equally** no standardisation for naming the antonyms, the words that denote a lack of safety or security.\n\nA perfect word for the absence of safety would be **\"unsafety\"**, but it is barely used in scientific literature."
      },
      {
        "type": "tekst",
        "tekst": "**Table 2.1 — Google Scholar hits, 27 March 2018**"
      },
      {
        "type": "tabel",
        "kop": [
          "Concept",
          "Hits",
          "Concept",
          "Hits"
        ],
        "rijen": [
          [
            "Risk",
            "4,770,000",
            "Uncertainty",
            "3,930,000"
          ],
          [
            "Safety",
            "3,450,000",
            "Unsafety",
            "8,800"
          ],
          [
            "Security",
            "3,290,000",
            "Unsecurity",
            "40,800"
          ],
          [
            "Accident",
            "3,110,000",
            "Insecurity",
            "1,090,000"
          ],
          [
            "Incident",
            "3,160,000",
            "Mishap",
            "77,500"
          ],
          [
            "Disaster",
            "2,800,000",
            "Catastrophe",
            "899,000"
          ],
          [
            "Hazard",
            "3,340,000",
            "Danger",
            "2,770,000"
          ],
          [
            "Injury",
            "1,900,000",
            "Loss",
            "5,810,000"
          ]
        ],
        "noot": "You do not need the numbers by heart, but you do need the ratio: \"safety\" scores 3.45 million, \"unsafety\" 8,800. That gap of roughly a factor of 400 is the authors’ whole argument."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Why not \"insecurity\"?**\n\nFinding a common word that covers the antonym of security is even harder. The problem lies in the meaning of the common word: the Oxford Living Dictionary defines **insecurity** as \"uncertainty or anxiety about oneself\" and \"a lack of confidence\".\n\nThe authors ask the rhetorical question whether that is what people mean when they talk about security issues in safety and security science today. Their answer: no, and that is why it is sensible to use the word **\"unsecurity\"**, as a deliberate term for the absence of security."
      },
      {
        "type": "tekst",
        "titel": "2.3 Standard definitions, risk and objectives",
        "toetsstof": true,
        "tekst": "Standard definitions for safety and security are missing. For **risk** it is different. There are many views and definitions of risk, but there **is** a comprehensive, standardised definition. The **International Organization for Standardization (ISO)** defines risk as:\n\nthe effect of uncertainty on objectives.\n\n*(ISO 31000.)*\n\nBy taking that definition as a reference you can define safety, security **and** their antonyms in a comparable, unambiguous and comprehensive way. That is precisely what this chapter does. **Safety** in the broadest sense then becomes:\n\nSafety is the condition, or the set of circumstances, in which the likelihood of negative effects on objectives is low."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Safety-I and Safety-II: from loss to performance**\n\nRisk and safety, where safety is taken broadly here to include security, are closely related, and understanding of both concepts has evolved in a **comparable way**: from a pure loss perspective to a more comprehensive picture that takes in both negative effects (loss) and positive effects (gain).\n\nWithin safety science too, awareness is growing that the domain is not only about protection against loss (**Safety-I**), but also about the condition of **excellent performance** in achieving and safeguarding objectives (**Safety-II**). That distinction comes from Hollnagel (2014).\n\nThe core of the authors’ complaint: nowadays risk, safety and security are linked to what you actually **want** and how you get it. But the most obvious part of that, **the objectives**, is often forgotten in definitions. While the concept of \"objective\" is perhaps the single most important element for understanding risk, safety and security."
      },
      {
        "type": "citaat",
        "tekst": "Objectives are those things, tangible and intangible, that individuals, organisations or society want, need, pursue, try to obtain or aim at. Also conditions, situations or possessions already acquired and maintained as a desired or necessary state, consciously and explicitly or unconsciously and tacitly.",
        "bron": "Working translation of the definition of \"objectives\" in Blokland & Reniers, chapter 2",
        "jaar": "2020"
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**2.3.2 Why that definition is so broad**\n\nNotice everything the definition of \"objectives\" pulls in. That is not sloppiness, that is the point.\n\n- **tangible and intangible** (money and buildings, but also reputation and trust)\n- the **individual, organisational and societal** level\n- objectives **still to be achieved** and conditions **already achieved** that you want to maintain\n- **consciously and explicitly** formulated and **unconsciously and tacitly** present\n\nThat last one is the most underestimated part. Your physical integrity is an objective you never wrote down, but you have it. That is exactly why risk can exist without anyone ever having formulated a goal."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**2.3.3 Connecting risk and safety — the three elements**\n\nOn the basis of the ISO definition the connection looks like this. For risk to **exist**, all three of these elements must be present:\n\n1. **objectives**\n2. **effects** that can touch those objectives\n3. **uncertainty** connected to these elements\n\nSafety, including security, mainly concerns the **objectives** and the **effects** that can touch those objectives.\n\nUnderstanding risk **and** safety therefore requires four things at once: understanding which objectives matter, which effects can touch those objectives, how **likely** those effects are, and how **large the impact** of those effects with their likelihood is. For safety it holds that the likelihood is **low**."
      },
      {
        "type": "tekst",
        "tekst": "**2.3.4 The only fundamental difference between risk and safety**"
      },
      {
        "type": "vergelijking",
        "links": {
          "titel": "Risk",
          "tekst": "Concerns an **uncertain future state**.",
          "punten": [
            "Requires objectives, effects and uncertainty",
            "Looks ahead",
            "Expressed in likelihood and consequence"
          ]
        },
        "rechts": {
          "titel": "Safety",
          "tekst": "Concerns **certain, actual conditions**.",
          "punten": [
            "Mainly concerns objectives and effects",
            "Looks at the state as it is",
            "Expressed as: the likelihood of negative effects is low"
          ]
        }
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Positive and negative effects**\n\nFor the effects there is a simple but important rule:\n\n- If the effects are **positive**, they **increase** safety, because they support the objectives involved.\n- If the effects are **negative**, they **decrease** safety, in other words they increase **unsafety**, because they detract from the objectives involved.\n\nNotice how this follows directly from the choice of definition. Because safety is defined through effects on objectives, safety can add up and subtract. That is impossible in a definition that treats safety as the absence of accidents."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**2.3.5 Quality of perception**\n\nApart from the actual conditions and possible future outcomes, risk, safety and security will **always differ from person to person**, because of differences in objectives and in the values attached to them.\n\nThat is why the authors state: risk, safety and security are **constructs in people’s minds**. Everyone has different objectives, or values the same objectives differently, and that produces different perceptions of the same reality.\n\nMoreover, every person has their own unique perception of reality, because reality always requires **interpretation** and can only be perceived. So there always remains a residual level of uncertainty and a residual lack of understanding, different for each person.\n\nThe consequence for the field: safety science should strive for the **highest possible quality of perception**, in which the deviation between reality as it is and the perception of it is as small as possible."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**2.3.6 Constraints**\n\nPursuing or safeguarding objectives always comes with effects of uncertainty, originating from all kinds of **risk sources**.\n\nAnyone managing risk while pursuing safety and security must therefore **identify** the risk sources and the associated risks. Pursuing and safeguarding objectives requires that certain risk levels are **not exceeded**. Those limits are called **constraints**, and you have to include them in risk management and respect them as soon as safety is at stake.\n\nRemember this word: **constraint** returns in chapter 3 with Leveson as the core of the entire STAMP model, only worked out technically there."
      },
      {
        "type": "tekst",
        "titel": "2.4 The three levels of distinction",
        "toetsstof": true,
        "tekst": "Now the question the chapter has to answer: what makes security the same as safety, and what sets them apart? The authors distinguish **three levels**. This is the first.\n\nFirst a distinction you need. Risk professionals mainly try to determine the **level of risk** once risks have been identified. But assessing the **nature of the risk** is an important additional element:\n\n- **Level of risk**: the level of impact of the effects on objectives, positive and negative, combined with the associated level of uncertainty. Usually expressed as a combination of likelihoods and consequences.\n- **Nature of risk**: relates more to the **sources** of the risk and to how risks arise and develop.\n\nIn **ISO Guide 73** a risk source is defined as an element which alone or in combination has the potential to give rise to risk. And it is precisely in understanding possible risk sources that the difference between safety and security lies."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Security as a subset of safety**\n\nBuilding on ISO 31000 and ISO Guide 73, safety can be seen as \"a condition or set of circumstances in which the likelihood of negative effects of uncertainty on objectives is low\".\n\nIf you take safety that generally, then security is no more than a **subset of safety**. After all: if the likelihood of negative effects of uncertainty on objectives is low, that also means a secure condition exists.\n\nThe first and most obvious distinction arises at the level of the **effects**: these can be **intentional** or **unintentional (accidental)**.\n\n- If the negative effects on objectives are **intentional**, it is appropriate and correct to use the term **security** instead of safety.\n- It is therefore also **incorrect** to use the term security when the effects involved are unintentional.\n\nTerrorists deliberately want to cause damage and suffering: they intentionally increase the likelihood of negative effects on the objectives of the groups or parts of society they want to terrorise. Criminals deliberately act against laws that protect societal, organisational or individual objectives.\n\nThat brings the authors to:\n\n**Security is the condition or set of circumstances in which the likelihood of intentional negative effects on objectives is low.**"
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**2.4.2 Distinction at the level of \"objectives\"**\n\nThe second and more fundamental distinction lies in the objectives involved.\n\nA typical feature of a security situation is the involvement of **multiple parties**, at least two. That brings different perceptions into play, and therefore different objectives. One party tries to achieve, maintain and protect a set of objectives; one or more opposing parties take a different view and may deliberately try to affect those objectives **negatively**.\n\nFrom that perspective: security issues are situations or circumstances in which **different, non-aligned objectives** of stakeholders collide."
      },
      {
        "type": "voorbeeld",
        "tekst": "**Objectives as vectors: the 90-degree criterion**\n\nThink of objectives as **vectors**: arrows pointing in a particular direction. Then you can determine (non-)alignment **geometrically**.\n\nSuppose fully aligned objectives have a deviation of **0 degrees**. As soon as the deviation becomes **more than 90 degrees**, it is clear the objectives are **conflicting**: achieving one party’s goal then causes negative effects on the other party’s objectives.\n\nThe management conclusion the authors draw: in security management it is **crucial to discover the presence of different, opposing objectives**. Detecting that is the actual security task."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**The definition of unsecurity**\n\nBuilding on the definition of security from 2.4.1 and on the alignment perspective from 2.4.2, the authors arrive at a definition of the antonym:\n\n**Unsecurity is the condition or set of circumstances in which the alignment of objectives is low and in which the likelihood of intentional negative effects on objectives is high.**\n\nNote that it contains **two conditions**: low alignment **and** high likelihood. Terrorism, the authors say, is a very clear illustration of non-alignment, because many terrorist objectives are exactly opposed to the societal, organisational and individual objectives they turn against."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**2.4.3 Distinction at the level of \"uncertainty\"**\n\nThe third distinction concerns uncertainty, and it has direct methodological consequences.\n\n**With safety, statistics work.** Safety science and safety management often lean on **statistical data** to develop theories and build measures. That is possible because the nature of unintentional effects means the **same events repeat** in other situations and circumstances. Moreover, every individual can be included for objectives that are strongly aligned, such as preserving your physical integrity. That yields an enormous amount of data on which to build theories and measures with statistical instruments.\n\n**With security, statistics work poorly.** In security issues the intentional nature and the non-alignment of objectives lead to **repeated attempts to devise new tactics and techniques** for achieving those non-aligned objectives. That makes it far harder to rely on statistical data when determining specific uncertainties.\n\nThe conclusion is methodological: **other instruments** can and must be used to determine levels of risk and of safety or security, such as **game-theoretical models**. That is precisely what Wipf does in chapter 4."
      },
      {
        "type": "tekst",
        "tekst": "**The chapter’s whole argument in four steps**"
      },
      {
        "type": "stappen",
        "items": [
          {
            "titel": "Risk arises as soon as there are objectives",
            "tekst": "Conscious or unconscious, stated or not. Without an objective there is no risk, because there is nothing for an effect to act on."
          },
          {
            "titel": "Risk becomes a safety or unsafety matter as soon as objectives are attached to a situation",
            "tekst": "Namely to a specific situation or set of circumstances containing specific risk sources, which produce possible effects of uncertainty on objectives."
          },
          {
            "titel": "As soon as more than one party is involved, conflicting objectives can arise",
            "tekst": "That leads to deliberate negative effects of uncertainty on the objectives of one of the two parties. At that moment safety matters become security matters."
          },
          {
            "titel": "Intentionality also changes the nature of the uncertainty",
            "tekst": "Safety becomes security when conflicting objectives between parties arise, because the conflict makes the negative effects intentional, and that intentionality also changes the nature of the uncertainty. That is the chapter’s closing argument."
          }
        ]
      },
      {
        "type": "tekst",
        "tekst": "**The three levels of distinction summarised**"
      },
      {
        "type": "tabel",
        "kop": [
          "Level",
          "With safety",
          "With security",
          "Consequence"
        ],
        "rijen": [
          [
            "Effect",
            "unintentional, accidental",
            "intentional",
            "a different word is appropriate"
          ],
          [
            "Objectives",
            "objectives of one party",
            "at least two parties, non-aligned objectives",
            "detecting the conflict is the core task"
          ],
          [
            "Uncertainty",
            "events repeat, statistics work",
            "the adversary keeps renewing tactics",
            "game theory instead of statistics"
          ]
        ],
        "noot": "These three rows are the skeleton of section 2.4 and the most likely exam topic from this chapter."
      },
      {
        "type": "tekst",
        "tekst": "**Key concepts from chapter 2**"
      },
      {
        "type": "begrippen",
        "items": [
          {
            "begrip": "Risk (ISO 31000)",
            "definitie": "The effect of uncertainty on objectives. Requires objectives, effects and uncertainty to be present together."
          },
          {
            "begrip": "Objectives",
            "definitie": "Everything individuals, organisations or society want, need or pursue, tangible and intangible, still to be achieved or already achieved and maintained, consciously or unconsciously."
          },
          {
            "begrip": "Safety",
            "definitie": "The condition or set of circumstances in which the likelihood of negative effects of uncertainty on objectives is low."
          },
          {
            "begrip": "Security",
            "definitie": "The condition or set of circumstances in which the likelihood of intentional negative effects on objectives is low. A subset of safety in the broad sense."
          },
          {
            "begrip": "Unsafety",
            "definitie": "The absence of safety. A word that according to the authors should exist but is barely used in scientific literature."
          },
          {
            "begrip": "Unsecurity",
            "definitie": "The condition in which the alignment of objectives is low and the likelihood of intentional negative effects on objectives is high."
          },
          {
            "begrip": "Level of risk",
            "definitie": "The magnitude of the impact of effects on objectives combined with the associated level of uncertainty; usually likelihood times consequence."
          },
          {
            "begrip": "Nature of risk",
            "definitie": "The character of the risk, tied to the risk sources and to how risks arise and develop. This is where the difference between safety and security sits."
          },
          {
            "begrip": "Risk source",
            "definitie": "According to ISO Guide 73, an element which alone or in combination has the potential to give rise to risk."
          },
          {
            "begrip": "Alignment of objectives",
            "definitie": "The degree to which the objectives of parties point the same way. Above a deviation of 90 degrees they are conflicting."
          },
          {
            "begrip": "Constraints",
            "definitie": "Risk levels that may not be exceeded if objectives are to be pursued and safeguarded."
          },
          {
            "begrip": "Quality of perception",
            "definitie": "The degree to which the perception of reality matches reality itself; according to the authors the aim of safety science."
          },
          {
            "begrip": "Safety-I and Safety-II",
            "definitie": "Hollnagel’s distinction: protection against loss versus the condition of performing excellently in achieving objectives."
          }
        ]
      },
      {
        "type": "waarschuwing",
        "tekst": "**Watch out for these three traps**\n\n**1. Risk is not the opposite of safety.** That is at best partly true. The real difference: risk concerns an uncertain future state, safety concerns actual, certain conditions.\n\n**2. \"Intentional\" refers to the effect, not to the event.** The definition says: intentional negative **effects on objectives**. Someone doing something deliberately without it touching your objectives does not produce a security issue.\n\n**3. Unsecurity is not simply \"no security\".** It contains two conditions: low alignment **and** a high likelihood of intentional negative effects. Leave one out and your definition is wrong."
      },
      {
        "type": "tekst",
        "titel": "2.5 The chapter’s conclusion",
        "toetsstof": true,
        "tekst": "The authors summarise briefly what they have done: they described the concepts of risk, safety and security, set out their similarities and differences, and then proposed a **semantic and ontological foundation** for safety and security science. In doing so they introduced a definition of **objectives** as the central starting point for the study and management of risk, safety and security."
      }
    ]
  },
  {
    "id": "toepassen",
    "titel": "Applying it",
    "blokken": [
      {
        "type": "stappen",
        "titel": "Dissecting a case with Blokland and Reniers’ model",
        "items": [
          {
            "titel": "Name the objectives, including the tacit ones",
            "tekst": "What does this party want to achieve or maintain? Do not forget the unconscious objectives: physical integrity, reputation, continuity. They are rarely written down but they determine what counts as a negative effect."
          },
          {
            "titel": "Name the risk sources",
            "tekst": "Which elements can, alone or in combination, give rise to risk? This is the nature of risk, not its level."
          },
          {
            "titel": "Determine whether the negative effects are intentional",
            "tekst": "If so, the term security is appropriate. If not, it is incorrect to speak of security."
          },
          {
            "titel": "Count the parties and measure the alignment",
            "tekst": "Are there at least two parties? Do their objectives point more than 90 degrees apart? Then they are conflicting and you have a security situation."
          },
          {
            "titel": "Choose your method based on the type of uncertainty",
            "tekst": "If the events repeat, you can use statistics. If the opposing party keeps renewing its tactics, you need game-theoretical models."
          },
          {
            "titel": "Formulate the constraints",
            "tekst": "Which risk levels may not be exceeded if the objectives are to hold? That is your concrete management assignment."
          }
        ]
      },
      {
        "type": "oefening",
        "id": "h2-oef-1",
        "niveau": "basis",
        "vraag": "Why do the authors take the ISO definition of risk as their starting point rather than a definition of safety?",
        "antwoord": "Because there are no standard definitions for safety and security, while for risk there is one. Despite the many opinions and definitions of risk, there exists a comprehensive, standardised ISO definition: risk is the effect of uncertainty on objectives. That definition works as an anchor because you can derive safety, security and their antonyms from it in a comparable, unambiguous and comprehensive way. Without such an anchor you end up precisely in the semantic and ontological discussion the chapter wants to break open, and you lose the standardisation needed for communication and for combining knowledge from independent research."
      },
      {
        "type": "oefening",
        "id": "h2-oef-2",
        "niveau": "basis",
        "vraag": "Explain why security is a subset of safety according to this chapter, and why the authors nevertheless need three levels of distinction.",
        "antwoord": "If you define safety very generally as the condition in which the likelihood of negative effects of uncertainty on objectives is low, then security logically falls under it: if that likelihood is low, a secure condition also exists. Security is then simply the part of safety in which the effects are intentional. But that inclusion alone gets you nowhere: you do not know when you should use the word security, how such a situation is constructed, or which method to choose. That is why the authors work out three levels. At the level of effect, intentionality decides which word is appropriate. At the level of objectives it turns out that security always presupposes multiple parties with non-aligned goals. At the level of uncertainty it turns out the methodology has to change because an adversary adapts their tactics."
      },
      {
        "type": "oefening",
        "id": "h2-oef-3",
        "niveau": "gevorderd",
        "vraag": "The authors state that risk, safety and security are constructs in people’s minds. Does that claim clash with their pursuit of standardisation? Argue your answer.",
        "antwoord": "At first sight it does: if these concepts differ per person because people have different objectives and value the same objectives differently, why would you standardise them? The authors’ answer is that two different things are being standardised. What differs per person is the content: which objectives matter and how heavily they weigh. What has to be standardised is the conceptual framework with which you describe and compare that content. In fact, precisely because the content is subjective, a shared framework is needed, otherwise you cannot put perceptions side by side. That fits their notion of quality of perception: the aim is to make the deviation between reality and the perception of it as small as possible, and that is only achievable if you can express several people’s perceptions in the same language."
      },
      {
        "type": "oefening",
        "id": "h2-oef-4",
        "niveau": "gevorderd",
        "vraag": "A municipality places concrete blocks against vehicle ramming at a market. Analyse the situation at all three levels of distinction, and say where the model strains.",
        "antwoord": "Effect level: the threat the measure targets is intentional, so the term security is appropriate. But the blocks themselves can cause unintentional negative effects, for instance tripping or obstruction of emergency services, and that is a safety matter. One measure therefore produces effects in both categories. Objectives level: there are at least two parties. The municipality wants to protect visitors and keep the market running; an attacker wants to hit precisely those visitors, so the objectives point far more than 90 degrees apart. At the same time there are parties with partly aligned goals who still object, such as market traders who lose their delivery access. Uncertainty level: statistics help little here, because ramming incidents are rare and attackers adapt their method, for instance by choosing another access point or another weapon. Game-theoretical models fit better. Where the model strains: the vector approach suggests a measurable angle, but in practice objectives are rarely formulated sharply enough to measure alignment, and many of those involved have unconscious objectives that only become visible once the measure is in place."
      }
    ]
  },
  {
    "id": "checken",
    "titel": "Check yourself",
    "blokken": [
      {
        "type": "quiz",
        "titel": "Check yourself on chapter 2",
        "vragen": [
          {
            "vraag": "How does ISO define risk?",
            "opties": [
              "Likelihood times consequence",
              "The effect of uncertainty on objectives",
              "The possibility of loss",
              "The absence of safety"
            ],
            "juist": 1,
            "uitleg": "This definition is the anchor of the whole chapter. Likelihood times consequence is a common **expression** of the level of risk, not the definition itself."
          },
          {
            "vraag": "Which three elements must be present for risk to exist?",
            "opties": [
              "Perpetrator, target, supervision",
              "Likelihood, consequence, exposure",
              "Objectives, effects, uncertainty",
              "Source, pathway, receptor"
            ],
            "juist": 2,
            "uitleg": "Objectives, effects and uncertainty. Of these, safety mainly concerns the objectives and the effects."
          },
          {
            "vraag": "What, according to the chapter, is the only fundamental difference between risk and safety?",
            "opties": [
              "Risk is measurable and safety is not",
              "Risk concerns an uncertain future state, safety concerns certain actual conditions",
              "Risk is negative and safety positive",
              "Risk is technical and safety organisational"
            ],
            "juist": 1,
            "uitleg": "This is exactly what section 2.3.4 says. Positive effects increase safety, negative effects increase unsafety."
          },
          {
            "vraag": "Which term do the authors deliberately use for the absence of security?",
            "opties": [
              "Insecurity",
              "Unsecurity",
              "Non-security",
              "Threat"
            ],
            "juist": 1,
            "uitleg": "In everyday use, insecurity means uncertainty about oneself and a lack of confidence, which does not cover what the field means."
          },
          {
            "vraag": "At what deviation between objective vectors do the authors speak of conflicting objectives?",
            "opties": [
              "More than 30 degrees",
              "More than 45 degrees",
              "More than 90 degrees",
              "Exactly 180 degrees"
            ],
            "juist": 2,
            "uitleg": "Above 90 degrees, achieving one party’s goal causes negative effects on the other party’s objectives."
          },
          {
            "vraag": "Why do statistics work poorly for security issues?",
            "opties": [
              "There are too few researchers",
              "Security data are classified",
              "Adversaries keep devising new tactics and techniques",
              "Security cannot be quantified"
            ],
            "juist": 2,
            "uitleg": "Intentionality and non-alignment lead to continuous renewal of tactics, so events do not repeat in the same way. That is why **game-theoretical models**, among others, are needed."
          },
          {
            "vraag": "What is the difference between level of risk and nature of risk?",
            "opties": [
              "Level concerns impact and uncertainty, nature concerns the sources and the development of the risk",
              "Level is qualitative, nature quantitative",
              "Level applies to safety, nature to security",
              "There is no difference"
            ],
            "juist": 0,
            "uitleg": "And it is precisely in understanding the **risk sources**, the nature of risk, that the authors locate the difference between safety and security."
          },
          {
            "vraag": "What does the definition of \"objectives\" include?",
            "opties": [
              "Only explicitly formulated corporate goals",
              "Only tangible possessions",
              "Also unconscious and unstated desired conditions",
              "Only goals you still have to achieve"
            ],
            "juist": 2,
            "uitleg": "The definition is deliberately broad: tangible and intangible, still to be pursued and already acquired, conscious **and** unconscious."
          },
          {
            "vraag": "What is a constraint in this chapter?",
            "opties": [
              "A legal obligation",
              "A risk level that may not be exceeded",
              "A budget limitation",
              "An identified risk source"
            ],
            "juist": 1,
            "uitleg": "Pursuing and safeguarding objectives requires that certain risk levels are not exceeded. This concept returns with **Leveson** as the core of STAMP."
          }
        ]
      },
      {
        "type": "bronnen",
        "titel": "Sources for chapter 2",
        "items": [
          {
            "apa": "Blokland, P. J., & Reniers, G. L. (2020). The concepts of risk, safety, and security: A fundamental exploration and understanding of similarities and differences. In C. Bieder & K. Pettersen Gould (Eds.), The coupling of safety and security (pp. 9–16). Springer."
          },
          {
            "apa": "Aven, T. (2014). What is safety science? Safety Science, 67, 15–20."
          },
          {
            "apa": "Blokland, P., & Reniers, G. (2017). Safety and performance: Total respect management (TR3M). Nova Science Publishers."
          },
          {
            "apa": "Boholm, M., Möller, N., & Hansson, S. O. (2016). The concepts of risk, safety, and security: Applications in everyday language. Risk Analysis, 36(2), 320–338."
          },
          {
            "apa": "Brazma, A. (2001). On the importance of standardisation in life sciences. Bioinformatics, 17(2), 113–114."
          },
          {
            "apa": "Hollnagel, E. (2014). Safety-I and Safety-II: The past and future of safety management. Ashgate."
          },
          {
            "apa": "ISO 31000: Risk management. International Organization for Standardization."
          },
          {
            "apa": "ISO Guide 73: Risk management vocabulary. International Organization for Standardization."
          }
        ]
      },
      {
        "type": "preview",
        "titel": "From definitions to design",
        "vakId": "intro-to-safety-security",
        "lesId": "h3",
        "tekst": "Blokland and Reniers look for the difference. Leveson does the opposite in chapter 3: she picks a definition that removes the difference, and shows what that buys you in engineering.",
        "punten": [
          "Why definitions according to Leveson are not right or wrong, but useful or unhelpful",
          "Hazard, vulnerability, and why safety is not the same as reliability",
          "STAMP, CAST and STPA, worked out on an aircraft braking system"
        ]
      }
    ]
  }
];
LESSTOF["intro-to-safety-security/h3"] = [
  {
    "id": "voor",
    "titel": "Before you start",
    "blokken": [
      {
        "type": "leerdoelen",
        "items": [
          "Explain why, according to Leveson, there are no right or wrong definitions, only useful ones",
          "Reproduce the four definitions of this chapter: safety, accident, hazard and hazard analysis",
          "Explain why hazards are defined as system states and not as properties of the environment",
          "Explain why safety and security are not the same as reliability",
          "Argue why the focus in security is too narrow if it rests only on information and keeping intruders out",
          "Use the Stuxnet example to show that intentionality matters little for the control measure",
          "Tell STAMP, CAST and STPA apart and say what you use each one for",
          "Follow an STPA analysis on an aircraft braking system, including the security extension"
        ]
      },
      {
        "type": "uitleg",
        "titel": "What this chapter is about",
        "tekst": "**Nancy Leveson** is a professor at MIT and one of the best-known names in system safety engineering. Her book *Engineering a Safer World* (2012) is the basis of this chapter.\n\nHer claim: whether safety and security overlap depends entirely on how you define them. Definitions are **made by people**, and whoever defines can include or exclude anything they like. So the real question is not which definition is correct, but **what a definition implies** for solving the problem, and which definition leads to the most effective way of achieving the property you want to achieve.\n\nShe therefore proposes an **inclusive definition** that combines safety and security, and then works out three practical consequences."
      },
      {
        "type": "slimmer",
        "titel": "The structure of this chapter",
        "tekst": "The chapter has a tight skeleton. Hold on to it and you will not get lost in the braking system example.\n\n1. Definitions (3.1)\n2. Consequence 1: safety and security are not the same as reliability (3.2)\n3. Consequence 2: security must go beyond information and keeping intruders out (3.3)\n4. Consequence 3: a paradigm shift towards systems theory is needed, with STAMP, CAST and STPA (3.4)\n5. Conclusion (3.5)\n\nThe extended braking system example belongs entirely to point 4, and its purpose is to show that security only enters **at the very end** of the analysis."
      }
    ]
  },
  {
    "id": "kern",
    "titel": "Core material: chapter 3",
    "blokken": [
      {
        "type": "tekst",
        "titel": "3.1 Definitions are boring but necessary",
        "toetsstof": true,
        "tekst": "Definitions are needed for effective communication. There is no right or wrong definition, only the definition we choose to use.\n\nBut that choice has consequences. If we limit our definition of safety and security, we effectively limit the **overlap** between them as well. And limited definitions may also limit the **solutions** to the problem. If instead we start from more inclusive and more practical definitions, overlap and common approaches become possible.\n\nThat is the whole strategy of this chapter: do not argue about who is right, but choose the definition that leaves the most solution space open."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**How differently safety gets defined**\n\nSafety has been part of engineering for at least a hundred years, and as a societal concern it is far older. Leveson points to large differences:\n\n- **Engineers** use a precise definition.\n- **Social scientists** often use far less carefully constructed definitions, and sometimes change them depending on context or purpose.\n- The definition also differs **by industry**. Some limit safety and accidents to events affecting human life and injury. Commercial aviation historically defined safety in terms of **hull losses**, the loss of an aircraft fuselage.\n- Some industries with serious political sensitivities, such as **nuclear power**, have proposed politically useful definitions that are almost unusable for design work."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**The four definitions you need to know by heart**\n\nLeveson picks the most inclusive definition, which arose in the US defence industry after the Second World War.\n\n**Safety is freedom from accidents (losses).**\n\n**An accident or mishap is any undesired or unplanned event that results in a loss, as defined by the system stakeholders.**\n\nLosses may be: loss of human life or injury, damage to equipment or property, environmental pollution, **mission loss** (failing to fulfil the mission), negative business impact such as reputational damage, delay of a product launch or legal entanglements, and more.\n\nNote the two crucial properties of this definition:\n1. It says **nothing** about the difference between unintentional and deliberate causes.\n2. It limits the causes **in no way at all**.\n\nWith that, security is already inside it by definition."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Hazard: the most important concept in safety engineering**\n\n**A hazard is a system state or set of conditions that, together with certain (worst-case) environmental conditions, will lead to a loss.**\n\nThis is subtle and many students stumble over it. In safety engineering, hazards are defined as states of **the system**, not of the environment.\n\nWhy? The ultimate goal of safety engineering is to eliminate losses. But some conditions leading to a loss lie outside the control of the designer or operator, and therefore outside the boundary of the system being designed and operated. For practical reasons, hazards are therefore defined as **system states that designers and operators never want to occur** and so try to eliminate or, where that is impossible, to control."
      },
      {
        "type": "voorbeeld",
        "tekst": "**The weather and the mountain**\n\nThe term hazard is sometimes used loosely for things outside the system boundary, such as bad weather or high mountains in aviation. According to Leveson that is incorrect.\n\nThe hazard is **not** the bad weather or the mountain. The hazard is:\n- the aircraft being adversely affected by the bad weather, or\n- the aircraft violating the minimum separation from the mountain.\n\nWe cannot eliminate the weather or the mountain. We can design and operate our system so that the threat they pose disappears. Constraints or controls might then consist of designing the aircraft to withstand the weather, or of operational rules to stay away from the weather or the mountain.\n\nThe goal of designers and operators is therefore to identify the system hazards, defined as falling within their own control, and to eliminate or control them in design and operations."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Hazard and vulnerability are the same thing**\n\nIn security the equivalent term for hazard is **vulnerability**: a weakness in a product that leaves it open to a loss.\n\nIn the most general sense, security can be defined as the system state that is free of threats or vulnerabilities, that is, of potential losses. Hazard and vulnerability are essentially **equivalent** here.\n\nThis is one of the strongest moves in the chapter: two fields with two vocabularies turn out to be using the same concept."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Hazard analysis and the goal of safety engineering**\n\n**Hazard analysis is the process of identifying the causal scenarios of hazards.**\n\nHazard analysis usually considers only scenarios made up of unintentional events. Including security merely requires **adding a few extra causal scenarios** to the process. That addition yields all the information you need to prevent losses that are normally seen as security problems.\n\nLeveson gives an example. An operator does the wrong thing because they are accidentally confused about the state of the system, for instance believing a valve is already closed and therefore not closing it. That incorrect information may come from a **sensor failure** delivering wrong information, or from a **hostile actor** deliberately supplying false information.\n\nIn the analysis, that produces **more paths** to the hazardous state, which you have to handle in design or operations. But it does not necessarily change the way the designer or operator tries to prevent that unsafe behaviour.\n\n**The goal of safety engineering is to eliminate or control hazard scenarios in design and operations.**\n\nFinally, Leveson regards the difference between physical security and cybersecurity as irrelevant, except that cybersecurity targets only one aspect of the system design and therefore has a **narrower scope**. Physical system security nowadays almost always involves software components, so cybersecurity is usually a **part** of physical system security."
      },
      {
        "type": "tekst",
        "titel": "3.2 Safety and security are not the same as reliability",
        "toetsstof": true,
        "tekst": "There is much confusion between safety and reliability, while they are two very different properties.\n\nWhen systems were relatively simple, consisted purely of electromechanical parts and could be analysed or tested exhaustively, design flaws leading to loss could largely be found and removed **before** the system went into use. What remained as a cause of loss were mainly **physical failures**.\n\nThe traditional hazard analysis techniques date from that era, the 1970s and earlier:\n- **fault tree analysis (FTA)**\n- **HAZOP**, in the chemical industry\n- **event tree analysis**, in the nuclear industry\n- **FMECA**, failure modes and criticality analysis\n\nFor those relatively simple systems, component reliability was a handy **proxy** for safety, because most accidents arose from component failure. The techniques were accordingly designed to find component failures that can lead to a loss."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Why that proxy no longer works**\n\nSince the introduction of computer control and software into critical systems, from roughly **1980** onwards, system complexity has grown **exponentially**.\n\nThe core of the problem: **system design errors, that is, systems engineering errors, cannot be eliminated before use** and are today a major cause of accidents. On top of that there is more recognition that losses can be connected to human factors design, management, operational procedures, regulatory and social factors, and to changes within the system or its environment **over time**. That holds for safety and for security alike.\n\nThe two claims you need to know, both counter-intuitive:\n\n1. System components can be **perfectly reliable**, meaning they meet their stated requirements and therefore do not fail, and accidents still happen. In fact, that happens often.\n2. System components and even the system as a whole can be **unreliable** while the system is nonetheless safe.\n\nDefining safety or security in terms of reliability therefore does not work for the systems we build today. You do not prevent losses simply by preventing system or component failures."
      },
      {
        "type": "tekst",
        "titel": "3.3 The focus in security has to be broader",
        "toetsstof": true,
        "tekst": "Too often the focus in security, and certainly in cybersecurity, is on protecting **information**. But there are important losses that have nothing to do with information and that are largely ignored. Those losses concern **mission assurance**.\n\nThe loss of electricity production from the grid or from a nuclear plant, or the loss of a spacecraft’s scientific mission, is just as important as a loss of information. In some respects more so.\n\nThere is a practical argument alongside it. Keeping people out of systems has proved almost impossible, certainly for cyber systems connected to the outside world. Keeping malicious actors out of your system therefore looks like **no effective way** of solving the security problem."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Why intentionality matters little for the solution**\n\nIntentionality does indeed differ between safety and security. But according to Leveson, intentionality is **not very important** when you analyse safety and security and want to prevent losses.\n\nHer argument: that difference is irrelevant from a safety engineering perspective as soon as the **consequences are the same**. Whether a chemical plant explosion results from a deliberate or an unintentional act, the result is the same: harmful to the system and to its environment.\n\nIntentionality simply adds **extra causal scenarios** to the hazard analysis. The techniques for finding and preventing those causal scenarios can be **identical**.\n\nNote how directly this clashes with Blokland and Reniers in chapter 2, who make intentionality their first level of distinction. Both are right within their own purpose: they want to separate the concepts, she wants a shared design approach."
      },
      {
        "type": "voorbeeld",
        "tekst": "**Stuxnet, written out in full**\n\nThe Stuxnet worm targeted the Iranian nuclear programme. Leveson dissects the case using her own concepts. Learn this list by heart; it is the model example of the whole chapter.\n\n- **Loss:** damage to the reactor, specifically to the centrifuges.\n- **Hazard / vulnerability:** the centrifuges are damaged by spinning too fast.\n- **Constraint that had to be enforced:** the centrifuges must never spin above a maximum rotation speed.\n- **Hazardous control action that occurred:** issuing an \"increase speed\" command while the centrifuges were already at maximum speed.\n- **Possible causal scenario:** the operator or software controller believed the centrifuges were spinning slower than maximum.\n\nAnd now the punchline. That mistaken belief could be unintentional, a human or software error, or, as in this case, deliberate. But whichever it was, **the most effective control measures are the same in both cases**: for instance a mechanical interlock that makes excessive speed physically impossible, or an analogue tachometer.\n\nLeveson adds a warning: security problems need not start outside the system. Breaches can start **from within** and cause severe damage to the environment."
      },
      {
        "type": "tekst",
        "titel": "3.4 The paradigm shift: from chains to systems theory",
        "toetsstof": true,
        "tekst": "Finding more effective solutions requires rethinking the foundation under our current solutions: the **causality models** we assume underlie safety and security problems.\n\nTraditionally, accidents or losses are seen as the result of a **chain of failure events**: A fails and causes B to fail, and so on until the loss occurs. That model is called the **domino model**, or more recently the **Swiss cheese model** of accident causation. It has been around a long time. But our engineered systems are utterly different from the systems that used to exist, and the model no longer fully explains the causes of today’s accidents.\n\nA paradigm shift is therefore needed, towards a causality model based on **systems theory**. Systems theory emerged around the middle of the last century, precisely to deal with the growing complexity of the systems we were building."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**STAMP: safety as a control problem**\n\n**STAMP** stands for **System-Theoretic Accident Model and Processes** (Leveson, 2012).\n\nInstead of treating accidents as the result of chains of failure events, STAMP treats safety and security as a **dynamic control problem**. The aim is enforcing **constraints** on the behaviour of the system as a whole: on the behaviour of individual components and on the **interactions between** components.\n\nExamples of such system constraints:\n- in the Stuxnet case: controlling the rotation speed of the centrifuges to limit wear;\n- maintaining minimum separation between aircraft or cars;\n- never letting chemicals or radiation escape from a plant;\n- not exposing workers to hazards in the workplace;\n- a bomb must never detonate without positive action by an authorised person.\n\nThe core in one sentence: STAMP **extends the traditional causality model** so that it covers more than failures alone."
      },
      {
        "type": "tekst",
        "tekst": "**CAST and STPA: two tools on one model**"
      },
      {
        "type": "vergelijking",
        "links": {
          "titel": "CAST",
          "tekst": "**Causal Analysis based on System Theory.** For analysing the cause of losses that **have already occurred**.",
          "punten": [
            "Looks backwards",
            "The causes may include both unintentional and deliberate acts",
            "Security-related losses have already been analysed with it"
          ]
        },
        "rechts": {
          "titel": "STPA",
          "tekst": "**System-Theoretic Process Analysis.** For identifying possible causes of losses that **have not yet happened** but could occur in future.",
          "punten": [
            "Looks forward: hazard analysis by identifying loss scenarios",
            "Delivers information about design and operations",
            "Designers and operators can eliminate or control the causal scenarios found"
          ]
        }
      },
      {
        "type": "waarschuwing",
        "tekst": "**Keep these three names apart**\n\n**STAMP** is only a theoretical **model**. On top of that model, all kinds of new and more powerful tools can be built.\n\n**CAST** is such a tool, for losses that **have already happened**.\n\n**STPA** is such a tool, for losses that **have not yet happened**.\n\nAnyone calling STAMP a method, or STPA a model, has not read the chapter carefully."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**The example: an aircraft wheel braking system**\n\nTo show what STPA delivers and how safety and security are handled in an integrated way, Leveson uses an aircraft **wheel braking system**.\n\nThe system-level hazards around deceleration are, for instance:\n\n- **H-4.1** Deceleration is insufficient on landing, during a rejected take-off or while taxiing.\n- **H-4.2** Asymmetric deceleration steers the aircraft towards other objects.\n- **H-4.3** Deceleration occurs after the V1 point during take-off.\n\nThe **V1 point** is the point at which braking during take-off is dangerous and continuing the take-off is safer than aborting it."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**The functional control structure (Fig. 3.1)**\n\nSTPA is carried out on a **functional model** of the system, not on a physical diagram. In the example, the control structure looks like this:\n\n- The **flight crew** (people) controls the **Brake System Control Unit (BSCU)**.\n- The BSCU consists of an **autobrake controller** and a **hydraulic controller**, both of which in today’s aircraft contain a good deal of software.\n- The BSCU controls the **hydraulic controller**, which issues the actual physical commands to the wheel brakes.\n- The flight crew can **also send commands directly** to the hydraulic braking system to decelerate.\n\nThat last, direct route is not a detail. It later produces one of the scenarios in which a correct braking command is nonetheless not executed."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Step 1 — Identifying unsafe control actions**\n\nThe analysis starts in **exactly the same way** for safety and for security. Nothing extra is needed for security until the end of the process.\n\nFirst the possible **unsafe or unsecure control actions** (UCAs) are identified, along four fixed columns:\n\n1. Not providing the control action causes a hazard.\n2. Providing it causes a hazard.\n3. Too early, too late, or in the wrong order.\n4. Stopped too soon, or applied too long.\n\nThese four columns are the engine of STPA. They force you through every way a control action can go wrong, including when nothing is broken."
      },
      {
        "type": "tekst",
        "tekst": "**Table 3.1 — Unsafe control actions for the BSCU (partial)**"
      },
      {
        "type": "tabel",
        "kop": [
          "Control action",
          "Not providing causes hazard",
          "Providing causes hazard",
          "Too early / too late / wrong order",
          "Stopped too soon / applied too long"
        ],
        "rijen": [
          [
            "Brake",
            "UCA-1: BSCU Autobrake does not provide the Brake control action during landing roll when the BSCU is armed [H-4.1]",
            "UCA-2: BSCU Autobrake provides Brake during a normal take-off [H-4.3, H-4.6]. UCA-5: BSCU Autobrake provides Brake with an insufficient level of braking during landing roll [H-4.1]. UCA-6: BSCU Autobrake provides Brake with directional or asymmetrical braking during landing roll [H-4.1, H-4.2]",
            "UCA-3: BSCU Autobrake provides Brake too late (more than TBD seconds) after touchdown [H-4.1]",
            "UCA-4: BSCU Autobrake stops providing Brake too early (before TBD taxi speed is reached) when the aircraft is landing [H-4.1]"
          ]
        ],
        "noot": "TBD means \"to be determined\": the precise value is fixed later in the design. Six UCAs out of one control action, and this is only a partial example."
      },
      {
        "type": "tekst",
        "tekst": "**Table 3.2 — Unsafe control actions for the flight crew (partial)**"
      },
      {
        "type": "tabel",
        "kop": [
          "Control action",
          "Not providing causes hazard",
          "Providing causes hazard",
          "Too early / too late / wrong order",
          "Stopped too soon / applied too long"
        ],
        "rijen": [
          [
            "Power Off BSCU",
            "UCA-1: the crew does not power off the BSCU when abnormal WBS behaviour occurs [H-4.1, H-4.4, H-7]",
            "UCA-2: the crew powers off the BSCU when anti-skid functionality is needed and the WBS is functioning normally [H-4.1, H-7]",
            "The crew powers off the BSCU too early, before the autobrake or anti-skid behaviour is completed while it is still needed [H-4.1, H-7]",
            "Not applicable"
          ]
        ],
        "noot": "The core of this table: in STPA, people are treated like **any other system component**. Exactly the same four columns, no separate human error category. WBS stands for wheel braking system."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Step 2 — Scenarios leading to those UCAs**\n\nThe next step is identifying the **scenarios** that can lead to these unsafe control actions. Those scenarios include the ordinary failure scenarios that the traditional techniques (FTA, FMECA, HAZOP) also find, but almost always **more than that**.\n\nTake UCA-1: the autobrake does not activate although it is armed. Pilots can be busy during touchdown, which is why this braking system lets them set automatic braking after touchdown. The hazard analysis question is then: **why** would that unsafe control action occur?\n\n**Scenario 1.** UCA-1 can occur if the BSCU incorrectly believes the aircraft has already come to a stop. One possible reason for that incorrect belief is that the feedback received during landing roll momentarily indicates **zero speed**. That feedback can briefly read zero during anti-skid operation, even though the aircraft is not stationary.\n\n**Scenario 2.** The BSCU is armed and the aircraft begins the landing roll. The BSCU does not provide the brake action because it incorrectly believes the aircraft is still airborne and has not yet landed. That incorrect belief arises when the touchdown indication is not received at touchdown. That can happen through:\n- **aquaplaning** of the wheels on a wet runway, so insufficient wheel speed;\n- **delayed** wheel speed or weight-on-wheels feedback due to the filtering used;\n- **conflicting** air and ground indications after a crosswind landing;\n- **failure** of the wheel speed sensors;\n- **failure** of the air/ground switches;\n- and more.\n\nThe consequence: insufficient deceleration may be provided on landing [H-4.1]."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Step 3 — And only now does security come in**\n\nThis is the heart of the chapter. To include causes related to security, **only one extra possibility** has to be considered:\n\nIdentify how the scenarios, for example the specified feedback and other information, could be affected by an **adversary**.\n\nMore precisely: how could feedback and other information be **injected, spoofed, tampered with, intercepted or leaked** to an adversary?\n\nFor the scenario above, that yields these additional causes, for instance:\n- an adversary **spoofs** feedback indicating insufficient wheel speed;\n- wheel speed becomes **delayed** because an adversary carries out a **denial of service (DoS)** attack;\n- correct wheel speed feedback is **intercepted and blocked** by an adversary;\n- an adversary **powers off** the wheel speed sensors.\n\nNote that these four lines occupy exactly the same place in the analysis as the sensor failure from scenario 2. That is the proof of Leveson’s claim: security is not a separate analysis, but an extra column of causes within the same analysis."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Step 4 — When the correct action is provided but not executed**\n\nScenarios also have to be created for situations in which a **correct and safe control action is provided but not executed**. In this example: the BSCU sends the braking command, but the brakes are not applied.\n\n**Scenario 3.** The BSCU sends a Brake command, but the brakes are not applied because the wheel braking system was earlier placed in an **alternative braking mode** that bypasses the BSCU. Consequence: insufficient deceleration may be provided on landing [H-4.1].\n\n**Scenario 4.** The BSCU sends a Brake command, but the brakes are not applied due to **insufficient hydraulic pressure** (pump failure, hydraulic leak, and so on). Consequence: [H-4.1].\n\n**Scenario 5.** The BSCU sends a Brake command, the brakes are applied, but the aircraft does not decelerate because of a **wet runway** on which the wheels aquaplane. Consequence: [H-4.1].\n\nAnd once again security is brought in by asking the same question: how could adversaries interact with the control process to cause the unsafe control actions?\n\n**Scenario 6.** The BSCU sends a Brake command, but the brakes are not applied because an adversary **injected a command** placing the wheel braking system in an alternative braking mode. Consequence: [H-4.1].\n\nNotice the symmetry: scenario 6 is the security version of scenario 3, with exactly the same consequences and largely the same control measures."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Step 5 — People get the same treatment**\n\nSTPA can treat people in the same way as hardware and software. Table 3.2 shows the crew’s responsibility to power off the BSCU.\n\n**Crew-UCA-1:** the crew does not power off the BSCU when abnormal WBS behaviour occurs [H-4.1, H-4.4].\n\n**Scenario 1 for Crew-UCA-1:** abnormal WBS behaviour occurs and a BSCU fault indication is provided to the crew. The crew does not power off the BSCU because the **operating procedures did not specify** that the crew should power off the BSCU upon receiving a BSCU fault indication.\n\nNote where the cause lies: not with an inattentive pilot, but with a gap in the procedure. That is characteristic systems-theoretical thinking. Leveson notes that sophisticated human factors considerations could be included here, but that this falls outside the scope of this short chapter."
      },
      {
        "type": "tekst",
        "titel": "3.5 What we can conclude from this argument",
        "toetsstof": true,
        "tekst": "Safety and security can be handled with a **common approach and an integrated analysis process**, provided they are defined appropriately. The definitions common in the defence industry offer that possibility.\n\nBut other limitations also have to be removed to speed up success with these two properties, which according to Leveson really are **two sides of the same coin**:\n\n1. **Safety analysis** must be extended beyond reliability analysis.\n2. **Security** must be broadened beyond its current narrow focus on information security and keeping intruders out.\n3. A **paradigm shift** is needed: away from accidents as a chain of failure events and hazard analysis techniques based on reliability theory, towards causality models and hazard analysis techniques based on **systems theory**."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Does it actually work?**\n\nLeveson answers that question herself. The systems-theoretical approach to safety engineering and the associated integrated approach to safety and security have been **compared experimentally** with current approaches many times, and also **compared empirically** by companies on their own systems.\n\nIn all those comparisons, by now around a hundred, the systems-theoretical and integrated approaches have proved superior to the traditional ones. They are currently used on critical systems worldwide and in almost every industry, and in particular in the **automotive industry and aviation**, where autonomy is advancing fast."
      },
      {
        "type": "tekst",
        "tekst": "**Key concepts from chapter 3**"
      },
      {
        "type": "begrippen",
        "items": [
          {
            "begrip": "Safety (Leveson)",
            "definitie": "Freedom from accidents, that is, from losses. The definition limits the causes in no way at all, so security is automatically included."
          },
          {
            "begrip": "Accident / mishap",
            "definitie": "Any undesired or unplanned event that results in a loss, as defined by the system stakeholders."
          },
          {
            "begrip": "Hazard",
            "definitie": "A system state or set of conditions that, together with worst-case environmental conditions, will lead to a loss. Always within the designer’s control."
          },
          {
            "begrip": "Vulnerability",
            "definitie": "The security equivalent of a hazard: a weakness in a product that leaves it open to a loss."
          },
          {
            "begrip": "Hazard analysis",
            "definitie": "The process of identifying the causal scenarios of hazards."
          },
          {
            "begrip": "Reliability",
            "definitie": "The degree to which components meet their stated requirements. No longer a valid proxy for safety: reliable components can jointly cause an accident, and unreliable systems can be safe."
          },
          {
            "begrip": "Mission assurance",
            "definitie": "Ensuring the system fulfils its mission; losses of this kind are often ignored in security because the focus lies on information."
          },
          {
            "begrip": "Swiss cheese model",
            "definitie": "The more recent name for the domino model: accidents as a chain of failure events. No longer fully explains today’s accidents."
          },
          {
            "begrip": "STAMP",
            "definitie": "Theoretical causality model treating safety and security as a dynamic control problem: enforcing constraints on system behaviour and on interactions between components."
          },
          {
            "begrip": "CAST",
            "definitie": "A tool built on STAMP for analysing the causes of losses that have already occurred."
          },
          {
            "begrip": "STPA",
            "definitie": "A tool built on STAMP for identifying possible causes of losses that have not yet occurred."
          },
          {
            "begrip": "Unsafe control action",
            "definitie": "A control action that can lead to a hazard, along four axes: not provided, provided, wrong timing or order, stopped too soon or applied too long."
          },
          {
            "begrip": "Constraint",
            "definitie": "A requirement on system behaviour that must be enforced, such as: the centrifuges must never spin above a maximum rotation speed."
          },
          {
            "begrip": "V1 point",
            "definitie": "The point during take-off after which braking is dangerous and continuing the take-off is safer than aborting."
          }
        ]
      },
      {
        "type": "waarschuwing",
        "tekst": "**The three classic misreadings of this chapter**\n\n**1. \"Leveson says there is no difference between safety and security.\"** No. She says intentionality does differ, but that the difference is **irrelevant for the analysis and the solution** as soon as the consequences are the same.\n\n**2. \"A hazard is a danger in the environment.\"** No. A hazard is a **system state** within the designer’s control. The mountain is not a hazard; flying too close to the mountain is.\n\n**3. \"If all components are reliable, the system is safe.\"** No. Perfectly reliable components can jointly cause an accident, and an unreliable system can be safe."
      },
      {
        "type": "citaat",
        "tekst": "There is no right or wrong definition, only the one we choose to use. The question is what a definition implies for solving the problem it delimits.",
        "bron": "Working translation of Leveson’s opening claim, chapter 3",
        "jaar": "2020"
      }
    ]
  },
  {
    "id": "toepassen",
    "titel": "Applying it",
    "blokken": [
      {
        "type": "stappen",
        "titel": "Running an STPA analysis yourself, simplified",
        "items": [
          {
            "titel": "Define the losses",
            "tekst": "What do the stakeholders absolutely not want to lose? Think broadly: lives, equipment, the environment, the mission itself, reputation, legal position."
          },
          {
            "titel": "Define the system hazards",
            "tekst": "Which system states lead, together with worst-case environmental conditions, to those losses? Stay within what the designer can control. Number them, such as H-4.1, so you can refer back to them."
          },
          {
            "titel": "Draw the functional control structure",
            "tekst": "Who or what controls what, and which feedback goes where? Include people as ordinary components. Do not forget direct routes that bypass the main controller."
          },
          {
            "titel": "Walk the four columns for every control action",
            "tekst": "Not provided, provided, wrong timing or order, stopped too soon or applied too long. For each UCA, note which hazard it causes."
          },
          {
            "titel": "Devise scenarios for why a UCA would occur",
            "tekst": "Usually it comes down to an incorrect belief by the controller about the system state, and to missing, delayed or wrong feedback. Do this also for the case where the correct action is provided but not executed."
          },
          {
            "titel": "Only now add the adversary",
            "tekst": "How could information be injected, spoofed, tampered with, intercepted or leaked? Every existing scenario line thereby gets a security variant, in exactly the same place."
          },
          {
            "titel": "Translate scenarios into requirements and design",
            "tekst": "The scenarios found become safety and security requirements, and you design them into the system. In the Stuxnet case: a mechanical interlock and an analogue gauge."
          }
        ]
      },
      {
        "type": "oefening",
        "id": "h3-oef-1",
        "niveau": "basis",
        "vraag": "Explain why Leveson chooses the definition from the defence industry, and what that choice implies for where security sits.",
        "antwoord": "She chooses it because it is the most inclusive: safety is freedom from accidents, and an accident is any undesired or unplanned event resulting in a loss as the stakeholders define it. What is decisive is what the definition does not say. It draws no distinction between unintentional and deliberate causes and limits the causes in no way at all. Security therefore falls inside it automatically. The consequence is that security does not become a separate analytical track but an extension of the causes within the same hazard analysis. That fits her strategy: definitions are not right or wrong, but a limited definition also limits the solution space, while an inclusive definition makes a common approach possible."
      },
      {
        "type": "oefening",
        "id": "h3-oef-2",
        "niveau": "basis",
        "vraag": "Why was reliability once a usable substitute for safety, and why is it no longer?",
        "antwoord": "When systems were relatively simple, consisted purely of electromechanical parts and could be analysed and tested exhaustively, design flaws could largely be found and removed before the system went into use. What remained as a cause of loss were mainly physical failures, that is, component failures. Component reliability was therefore a handy proxy for safety, and the classic techniques such as FTA, HAZOP, event tree analysis and FMECA were built precisely on that. Since roughly 1980, with computer control and software in critical systems, complexity has grown exponentially and system design errors can no longer be eliminated before use. Moreover, losses are also connected to human factors, management, procedures, regulation and change over time. Components can be perfectly reliable while accidents still happen, and an unreliable system can be safe. The proxy has therefore lapsed."
      },
      {
        "type": "oefening",
        "id": "h3-oef-3",
        "niveau": "gevorderd",
        "vraag": "Compare the role of intentionality in Leveson (ch3) and in Blokland and Reniers (ch2). Can both be right?",
        "antwoord": "Blokland and Reniers make intentionality their first level of distinction: if the negative effects on objectives are intentional, the term security is appropriate, and otherwise it is not. Leveson holds that intentionality does differ but is not very important in analysis and prevention, because the difference is irrelevant once the consequences are the same; it only adds extra causal scenarios. Both can be right because they answer different questions. Blokland and Reniers work conceptually and semantically: they want a vocabulary with which to describe and distinguish situations, and there intentionality is distinguishing. Leveson works technically and methodologically: she wants the approach that prevents the most losses, and there the only thing that counts is whether the control measure changes. Where it genuinely rubs is at Blokland and Reniers’ third level, the nature of the uncertainty: if an adversary adapts their tactics, the set of causal scenarios is not stable, and that is a real objection to the idea that a few extra scenarios settle the matter."
      },
      {
        "type": "oefening",
        "id": "h3-oef-4",
        "niveau": "gevorderd",
        "vraag": "Take scenario 2 from the braking example (the touchdown indication is not received). Show that the security causes fit in exactly the same place in the analysis, and explain why that supports Leveson’s claim.",
        "antwoord": "In scenario 2 the BSCU incorrectly believes the aircraft is still airborne, because the touchdown indication does not arrive. The unintentional causes are aquaplaning, delay caused by filtering, conflicting air and ground indications in a crosswind, and failure of the wheel speed sensors or the air/ground switches. The security causes are that an adversary spoofs insufficient wheel speed, that wheel speed is delayed by a DoS attack, that correct feedback is intercepted and blocked, or that the sensors are powered off. Note that each security cause has a counterpart in the list of unintentional causes: spoofing against sensor failure, DoS against filter delay, powering off against sensor loss. They produce the same incorrect belief in the same controller, lead to the same UCA and the same hazard H-4.1. That supports Leveson’s claim: security requires no second analysis, but one extra question at the end of the existing one, namely how information could be injected, spoofed, tampered with, intercepted or leaked."
      },
      {
        "type": "oefening",
        "id": "h3-oef-5",
        "niveau": "gevorderd",
        "vraag": "Why does Leveson call the framing of hazards as system states a practical choice rather than a philosophical position?",
        "antwoord": "Because the ultimate goal is eliminating losses, while some conditions leading to loss lie beyond the power of designer and operator and therefore outside the boundary of the designed system. You cannot remove the weather or the mountain. If you defined hazards as those external conditions, your analysis would produce conclusions nobody can act on. By defining hazards as system states you never want to occur, every hazard found automatically becomes a state you can do something about, in design or in operations. That makes the definition an instrument for action rather than a description of the world, and that is exactly the line Leveson sets out in section 3.1: choose the definition that makes the most effective solution possible."
      }
    ]
  },
  {
    "id": "checken",
    "titel": "Check yourself",
    "blokken": [
      {
        "type": "quiz",
        "titel": "Check yourself on chapter 3",
        "vragen": [
          {
            "vraag": "How does Leveson define safety?",
            "opties": [
              "The absence of risk",
              "Freedom from accidents, that is, from losses",
              "The reliability of all components",
              "The ability of the system not to harm the environment"
            ],
            "juist": 1,
            "uitleg": "And an accident is any undesired or unplanned event resulting in a loss, as defined by the stakeholders. The definition does **not** limit the causes, so security is included."
          },
          {
            "vraag": "What, according to Leveson, is a hazard?",
            "opties": [
              "A dangerous phenomenon in the environment",
              "A system state that, together with worst-case environmental conditions, leads to a loss",
              "An event resulting in injury",
              "A weakness in software"
            ],
            "juist": 1,
            "uitleg": "Hazards lie within the designer’s control. Not the mountain, but the aircraft violating minimum separation from the mountain."
          },
          {
            "vraag": "What is the security equivalent of a hazard?",
            "opties": [
              "Threat",
              "Vulnerability",
              "Attack vector",
              "Exploit"
            ],
            "juist": 1,
            "uitleg": "A weakness in a product that leaves it open to a loss. Leveson calls hazard and vulnerability essentially equivalent."
          },
          {
            "vraag": "Which statement about reliability is correct according to this chapter?",
            "opties": [
              "Reliable components guarantee a safe system",
              "An unreliable system can be safe",
              "Safety is a subset of reliability",
              "Reliability is for hardware and safety for software"
            ],
            "juist": 1,
            "uitleg": "And the other way round: perfectly reliable components can jointly cause accidents. You do not prevent losses by preventing failures alone."
          },
          {
            "vraag": "In the Stuxnet case, what was the constraint that had to be enforced?",
            "opties": [
              "The software must not be modified",
              "The centrifuges must never spin above a maximum rotation speed",
              "No USB stick may be connected",
              "The operator must always confirm"
            ],
            "juist": 1,
            "uitleg": "The hazard was the centrifuges being damaged by spinning too fast; the hazardous control action was an increase-speed command at already maximum speed."
          },
          {
            "vraag": "Why does it matter little in Stuxnet whether the error was deliberate?",
            "opties": [
              "Because the perpetrator could not be found anyway",
              "Because the most effective control measures are the same in both cases",
              "Because intent cannot be proven legally",
              "Because the damage stayed limited"
            ],
            "juist": 1,
            "uitleg": "For instance a mechanical interlock or an analogue tachometer. Intentionality mainly adds **extra causal scenarios**."
          },
          {
            "vraag": "What exactly is STAMP?",
            "opties": [
              "An analysis method",
              "A theoretical causality model",
              "A software package",
              "A certification standard"
            ],
            "juist": 1,
            "uitleg": "STAMP is the model. CAST and STPA are the tools built on it."
          },
          {
            "vraag": "What do you use CAST for?",
            "opties": [
              "For losses that may still happen",
              "For losses that have already occurred",
              "For certifying software",
              "For training operators"
            ],
            "juist": 1,
            "uitleg": "CAST looks backwards, STPA looks forward. The causes CAST finds may be unintentional as well as deliberate."
          },
          {
            "vraag": "Along which four axes are unsafe control actions identified?",
            "opties": [
              "People, machine, method, environment",
              "Likelihood, consequence, exposure, duration",
              "Not provided, provided, wrong timing or order, stopped too soon or applied too long",
              "Design, build, use, maintenance"
            ],
            "juist": 2,
            "uitleg": "These four columns are the engine of STPA, and they apply to human controllers such as the flight crew too."
          },
          {
            "vraag": "When does security enter the STPA process?",
            "opties": [
              "Immediately, when defining the losses",
              "When drawing the control structure",
              "Only at the end, as an extra question about the scenarios",
              "In a separate parallel analysis"
            ],
            "juist": 2,
            "uitleg": "The analysis runs identically until the end. Then one question is added: how could information be injected, spoofed, tampered with, intercepted or leaked?"
          },
          {
            "vraag": "What is Leveson’s objection to the Swiss cheese model?",
            "opties": [
              "It is too complicated",
              "It no longer fully explains the causes of today’s accidents",
              "It ignores human failure",
              "It has never been tested empirically"
            ],
            "juist": 1,
            "uitleg": "The model sees accidents as a chain of failure events, but our engineered systems are utterly different from those of the past."
          },
          {
            "vraag": "Why is the focus on information security too narrow, according to Leveson?",
            "opties": [
              "Information is not valuable",
              "Important losses concern mission assurance, such as the loss of electricity production",
              "Cybersecurity is too expensive",
              "Information security has already been solved"
            ],
            "juist": 1,
            "uitleg": "And besides, keeping people out of connected systems has proved almost impossible, so excluding intruders is not an effective solution strategy."
          }
        ]
      },
      {
        "type": "bronnen",
        "titel": "Sources for chapter 3",
        "items": [
          {
            "apa": "Leveson, N. (2020). Safety and security are two sides of the same coin. In C. Bieder & K. Pettersen Gould (Eds.), The coupling of safety and security (pp. 17–27). Springer."
          },
          {
            "apa": "Leveson, N. G. (2012). Engineering a safer world. MIT Press."
          },
          {
            "apa": "Leveson, N. G., & Thomas, J. P. (2018). STPA handbook.",
            "url": "http://psas.scripts.mit.edu/home/get_file.php?name=STPA_handbook.pdf"
          },
          {
            "apa": "Young, W., & Leveson, N. G. (2014). An integrated approach to safety and security based on systems theory. Communications of the ACM, 57(2), 31–35."
          }
        ]
      },
      {
        "type": "preview",
        "titel": "From systems theory to game theory",
        "vakId": "intro-to-safety-security",
        "lesId": "h4",
        "tekst": "Leveson solves the security problem inside the safety analysis. In chapter 4 Wipf picks up exactly the point Blokland and Reniers made: if the adversary thinks along with you, you need game theory.",
        "punten": [
          "An empirical case from light helicopter operations",
          "What game-theoretical models can and cannot do",
          "Similarities and differences between assessment techniques"
        ]
      }
    ]
  }
];
LESSTOF["intro-to-safety-security/h4"] = [
{ id: "voor", titel: "Voorbereiding", blokken: [
{ type: "leerdoelen", items: ["Uitleggen waarom safety en security in de luchtvaart traditioneel gescheiden zijn, en welke ICAO-definities daaraan ten grondslag liggen", "De dreigingsmatrix van Wipf reproduceren en uitleggen waarom er twee lege cellen in zitten", "De drie aanvalsvormen op satellietnavigatie (jamming, meaconing, spoofing) onderscheiden en met elkaar vergelijken op kosten, kennis en pakkans", "De drie kwaliteitsmaten van een navigatiedienst noemen: reliability, availability en integrity", "Uitleggen wat een speltheoretische benadering is en welke elementen je nodig hebt om een echte situatie als spel te modelleren", "Het HEMS-voorbeeld ontleden in spelers, strategieën, situaties en uitkomsten", "Uitleggen waarom Wipf stelt dat safety en security alleen verschillen in het aantal spelers", "De paradox verklaren waarom kwetsbare infrastructuur zo zelden wordt aangevallen"] },
{ type: "uitleg", titel: "Wie is Wipf en waar komt dit hoofdstuk vandaan", tekst: "**Heinz Wipf** werkt bij Airnav Consulting in Zürich. Hij is geen academicus maar een luchtvaartprofessional met jarenlange ervaring in risicomanagement voor luchtverkeersleiding. Zijn eerdere werk gaat over risicomanagement in air traffic control.\n\nDat merk je aan het hoofdstuk. Het is technisch, kort, en steunt op een echte praktijkcasus: **HEMS**, oftewel helicopter emergency medical services, de traumahelikopters. Die vliegen in Zwitserland in bergachtig gebied, bij slecht zicht, met satellietnavigatie als enige bron om te weten waar ze zijn.\n\nWipf hoort in het boek bij de **technisch-methodologische** invalshoek. Waar Leveson (hoofdstuk 3) systeemtheorie gebruikt om safety en security samen te brengen, probeert Wipf hetzelfde met **speltheorie**. En hij komt daarmee precies uit bij het punt dat Blokland en Reniers in hoofdstuk 2 maakten: zodra er een tegenstander meedenkt, werkt statistiek niet meer en heb je een ander model nodig." },
{ type: "slimmer", titel: "Hoe je dit hoofdstuk leest", tekst: "Dit is het meest technische hoofdstuk van het boek, met formules, radiofrequentie-jargon en tabellen. Laat je daar niet door afschrikken. De techniek is het decor, niet het punt.\n\nWat je eruit moet halen, in volgorde van belang:\n\n1. De **dreigingsmatrix** met de twee lege cellen. Dat is de kern.\n2. Het idee dat safety en security **hetzelfde probleem zijn met een ander aantal spelers**. Dat is de conclusie.\n3. De **drie aanvalsvormen** en waarom de goedkoopste het makkelijkst te ontdekken is.\n4. De vraag waarom **kwetsbare infrastructuur zelden wordt aangevallen**.\n\nDe speltheoretische classificatie (paragraaf 4.3.5) hoef je niet tot in detail te kennen, maar je moet wel kunnen uitleggen wat een zero-sum game is en waarom dit voorbeeld er een is." }
] },
{ id: "kern", titel: "Kernstof", blokken: [
{ type: "tekst", titel: "4.1 Waarom de luchtvaart de twee domeinen uit elkaar houdt", toetsstof: true, tekst: "Het hoofdstuk begint bij de oorsprong van de scheiding, en die is heel concreet: **ICAO**, de International Civil Aviation Organization, publiceert in de bijlagen bij het Verdrag van Chicago twee verschillende definities.\n\n**Security** is \"het beveiligen van de burgerluchtvaart tegen daden van wederrechtelijke inmenging\" (acts of unlawful interference).\n\n**Safety** is \"de toestand waarin risico's die samenhangen met luchtvaartactiviteiten, gerelateerd aan of ter directe ondersteuning van de exploitatie van luchtvaartuigen, zijn teruggebracht en beheerst tot een aanvaardbaar niveau\".\n\nDie twee definities hebben directe gevolgen voor wie wat doet. Security wordt afgehandeld door **rechtshandhavingsinstanties en luchthavens**. Safety hangt af van **personeel, procedures en apparatuur**, en dat is vooral het terrein van **luchtvaartmaatschappijen en luchtverkeersdienstverleners**.\n\nDus: twee definities, twee soorten organisaties, twee bevoegdheden. Precies de situatie die hoofdstuk 1 beschreef als \"de luchthaven waar screeners en safetypersoneel een andere opleiding, andere technologie en andere werkwijze hebben\"." },
{ type: "uitleg", titel: "Wat \"unlawful interference\" precies betekent", tekst: "Deze term is belangrijk omdat hij de hele securitydefinitie in de luchtvaart draagt. \"Wederrechtelijke inmenging\" omvat kapingen, sabotage, aanslagen op luchthavens en vliegtuigen, en ook het opzettelijk verstoren van navigatie- en communicatiesignalen.\n\nMerk op dat de definitie dus niet over de **schade** gaat maar over de **wederrechtelijkheid**. Een vliegtuig dat neerstort door een gestoord navigatiesignaal is een safety-incident als de storing per ongeluk was, en een security-incident als iemand het expres deed. Zelfde crash, ander etiket, andere organisatie die het onderzoekt.\n\nDat is precies de eerste onderscheidingsas uit hoofdstuk 1, intentionaliteit, nu vastgelegd in internationaal recht." },
{ type: "tekst", titel: "De casus: traumahelikopters bij slecht zicht", toetsstof: true, tekst: "Wipf beschrijft de achtergrond van zijn voorbeeld. In de afgelopen jaren is uit ervaring met lichte helikopteroperaties voor rampenbestrijding, search and rescue en HEMS gebleken dat er behoefte is aan een steeds bredere inzetbaarheid **onder alle weersomstandigheden**.\n\nHet gebruik van **GNSS** (Global Navigation Satellite Systems, waarvan GPS het bekendste is) als primaire navigatiebron bij slecht zicht lag daarom voor de hand. Door gewichtsbeperkingen en de topografie zijn die signalen vaak **de enige manier** om een positie te bepalen. Een lichte helikopter in de Alpen kan geen zware back-upsystemen meenemen.\n\nNu de kwetsbaarheid. De signalen die de ontvanger nodig heeft om zijn positie te schatten worden uitgezonden over een **openbaar toegankelijk radiofrequentiekanaal**. Dat kanaal heeft twee soorten problemen:\n\n- **Voortplantingseffecten** die samenhangen met de vlieghouding en het antennepatroon van de ontvanger kunnen de kwaliteit van de navigatieoplossing aantasten. Dat is natuurkunde.\n- Het kanaal is gevoelig voor **ruis en interferentie** vanuit verschillende radiobronnen.\n\nEn dan de scharnierzin van het hoofdstuk: als zulke uitzendingen **opzettelijk** zijn, kun je ze classificeren als wederrechtelijke inmenging. Dus de eerste categorie is safety-gerelateerd, de tweede is een securitykwestie. Zelfde ontvanger, zelfde verstoring, zelfde risico voor de piloot, maar de bron bepaalt het domein." },
{ type: "tekst", titel: "De dreigingsmatrix: het skelet van het hele hoofdstuk", toetsstof: true, tekst: "Wipf kijkt naar de scheiding vanuit **systems engineering**. Het idee: er is een systeem, er is een omgeving (in het Duits *Umsystem*), en er is een systeemgrens. Dreigingen en gevaren kunnen van binnen het systeem komen (intrasystem) of van buiten (extrasystem).\n\nDe filosofie van systems engineering sluit aan bij het gezegde dat **hazards leiden tot safety-incidenten op dezelfde manier als vulnerabilities leiden tot security-incidenten**. Dat is exact wat Leveson in hoofdstuk 3 ook zei: hazard en vulnerability zijn equivalent.\n\nWipf formaliseert dat in een 2 bij 2 matrix, tabel 4.1 in het boek:" },
{ type: "tabel", kop: ["Aanvaller ↓ / Slachtoffer →", "Systeem", "Omgeving"], rijen: [["**Systeem**", "n.v.t.", "Safety"], ["**Omgeving**", "Security", "n.v.t."]] },
{ type: "tekst", tekst: "Lees hem zo. Als het **systeem** de **omgeving** schaadt, is dat safety: de fabriek die gif loost, het vliegtuig dat neerstort op een woonwijk. Als de **omgeving** het **systeem** schaadt, is dat security: de aanvaller die het navigatiesignaal stoort.\n\nDit is letterlijk de tweede onderscheidingsas uit hoofdstuk 1, de systeem-omgeving-as, in tabelvorm." },
{ type: "waarschuwing", titel: "De twee lege cellen zijn het interessantste deel", tekst: "Wipf merkt op dat de formalisering **twee cellen** oplevert die niet worden geadresseerd: systeem tegen systeem, en omgeving tegen omgeving.\n\nWaarom is dat belangrijk? Omdat het laat zien dat de klassieke tweedeling **onvolledig** is. Wat als een systeem zichzelf schaadt? Dat was precies de derde richting die het SEMA-raamwerk in hoofdstuk 1 toevoegde. En wat als de omgeving de omgeving schaadt, dus als bijvoorbeeld twee aanvallers elkaar dwarszitten, of natuurlijke ruis een aanval maskeert?\n\nWipf laat de cellen leeg en zegt er weinig over. Maar de les is: als je de wereld in een 2 bij 2 matrix stopt, krijg je altijd vier cellen, en de twee waar je geen naam voor hebt vertellen je waar je theorie tekortschiet." },
{ type: "tekst", titel: "Synergie of gemeenschappelijkheid?", toetsstof: true, tekst: "Als Wipf wordt gevraagd wat de **synergieën** zijn tussen safety en security, herformuleert hij de vraag liever als: wat zijn de **gemeenschappelijkheden** (commonalities)?\n\nDat is een subtiel maar belangrijk verschil. Synergie suggereert dat de twee elkaar versterken als je ze combineert. Gemeenschappelijkheid vraagt alleen wat ze delen. Wipf gaat voor de tweede, voorzichtigere vraag.\n\nDe vraag die hij vervolgens stelt is de hoofdvraag van het hoofdstuk: moeten de twee velden verschillend worden behandeld, of is hun **eenwording denkbaar**, ondanks het bestaan van verschillende autoriteiten en jurisdicties?" },
{ type: "tekst", titel: "4.2 Het economisch goed: een radiofrequentiekanaal", toetsstof: true, tekst: "Wipf noemt het object van zijn analyse een \"economisch goed\": het **radiofrequentiekanaal** waarover de satellietsignalen komen. Het voorbeeld is volgens hem relevant en geldig omdat satellietnavigatiesignalen op grote schaal worden gebruikt voor allerlei **kritieke infrastructuur en gevaarlijke operaties**. Niet alleen helikopters, maar ook scheepvaart, energienetten, telecom, financiële systemen die op GPS-tijd draaien.\n\nZo'n kanaal kun je beschrijven met twee simpele maten uit de informatietheorie van Shannon:\n\n- de **bandbreedte**,\n- de **signaal-ruisverhouding** (signal-to-noise ratio).\n\nWipf breidt die tweede maat uit: hij neemt ook het vermogen van eventuele storende signalen mee. De maat wordt dan **signaal tegenover (ruis plus interferentie)**.\n\nDe ontvanger laat alleen signalen door binnen de kanaalbandbreedte en onderdrukt de rest. Dat betekent dat een storing alleen effectief is als ze **qua formaat bij de bandbreedte past**. Bij meaconing en spoofing is dat automatisch zo, want het storende signaal is identiek aan het originele." },
{ type: "uitleg", titel: "Waarom die technische details er voor jou toe doen", tekst: "Je hoeft geen radiotechniek te kennen. Maar één inzicht uit deze paragraaf is algemeen bruikbaar.\n\nEen aanvaller heeft **niet oneindig veel keuzes**. Elk radiokanaal wordt beschreven in vijf dimensies: frequentie, tijd, ruimte, modulatie en polarisatie. Van die vijf liggen er vier vast door het kanaal zelf. Alleen polarisatie blijft over om te optimaliseren. En de vrije variabelen voor de stoorder zijn eigenlijk maar twee: **de duur en het uitgestraalde vermogen**.\n\nDat is het patroon dat je in elke securityanalyse terugziet. De tegenstander lijkt onbeperkt vrij, maar de fysica, de economie en de detectiekans perken zijn opties in tot een klein, tel baar setje. En zodra het telbaar is, kun je het analyseren. Dat is de brug naar speltheorie." },
{ type: "tekst", titel: "De drie aanvalsvormen", toetsstof: true, tekst: "Wipf onderscheidt drie manieren om satellietnavigatie te verstoren. Ken ze alle drie, want ze komen terug in de tabellen en in de conclusie.\n\n**Jamming.** Het uitzenden van radiosignalen met voldoende vermogen en zulke eigenschappen dat ontvangers niet meer goed werken. Simpel gezegd: het signaal overstemmen met lawaai. Er zijn vier signaalklassen mogelijk: continuous wave, chirp, pulsen en ruis.\n\n**Meaconing.** Het ontvangen, vertragen en met groter vermogen opnieuw uitzenden van een signaal. Bij de ontvangende antenne worden het gewenste en het ongewenste signaal opgeteld, wat het systeem in verwarring brengt. Ook de grond- en satellietgebaseerde correctiesignalen (augmentation) kunnen hier gevoelig voor zijn, vooral als het correcte differentiële signaal wordt onderdrukt door een sterker signaal met valse correcties.\n\n**Spoofing.** Een techniek om een ontvanger te laten vastklikken op legitiem ogende **valse** signalen. De aanval injecteert misleidende informatie en kan daarmee uiteindelijk zelfs de vlucht overnemen.\n\nLet op de oplopende raffinement. Jamming zegt \"je krijgt niets\". Meaconing zegt \"je krijgt iets wat een beetje klopt\". Spoofing zegt \"je krijgt iets wat helemaal lijkt te kloppen maar het niet doet\". Dat laatste is het gevaarlijkst, omdat de piloot niet merkt dat er iets mis is." },
{ type: "voorbeeld", titel: "Waarom spoofing enger is dan jamming", tekst: "Stel je een piloot voor in de wolken boven een Alpendal.\n\nBij **jamming** verdwijnt de positie van het scherm. Dat is heel vervelend, maar de piloot **weet** dat hij een probleem heeft. Hij klimt, versnelt, gaat naar een veilige hoogte, breekt de missie af.\n\nBij **spoofing** blijft de positie keurig op het scherm staan. Alleen klopt hij niet. De piloot denkt dat hij midden in het dal zit terwijl hij naar de bergwand vliegt. Hij doet niets, want er is niets om op te reageren.\n\nDat is de kern van tabel 4.6 straks: bij jamming is de kans dat het slachtoffer **situationeel bewustzijn** krijgt hoog, bij meaconing en spoofing laag. En daarom is de goedkoopste aanval, jamming, ook de minst gevaarlijke." },
{ type: "tekst", titel: "Wat een navigatiedienst moet beloven", toetsstof: true, tekst: "Een luchtverkeersdienstverlener die gevaarlijke vluchtoperaties ondersteunt, moet de gebruiker **drie waarschijnlijkheden** melden:" },
{ type: "stappen", items: [{ titel: "Reliability", tekst: "(betrouwbaarheid, ook continuity of service genoemd): je gebruikt de dienst en verliest hem niet." }, { titel: "Availability", tekst: "(beschikbaarheid): je vraagt de dienst en je krijgt hem." }, { titel: "Integrity", tekst: "(integriteit): de geleverde informatie klopt." }] },
{ type: "tekst", tekst: "Alle drie bevatten de voorwaarde dat de geleverde signalen binnen gespecificeerde foutmarges in ruimte en tijd vallen.\n\nMerk op hoe de drie aanvalsvormen zich hiertoe verhouden. Jamming raakt reliability en availability. Spoofing raakt integrity, het meest verraderlijke van de drie, want het systeem lijkt te werken terwijl de informatie vals is.\n\nWipf voegt toe: de **constante aanwezigheid van interferentie uit natuurlijke bronnen** is belangrijk. Ook zonder kwaadwillende storing moet de ontvanger omgaan met ruis. En het signaalvermogen neemt af naarmate het radiopad langer wordt. Beide factoren zijn relevant als je speltheorie toepast, met name in het geval dat er **geen** aanvaller is. Dat wordt straks belangrijk." },
{ type: "tekst", titel: "4.3 Speltheorie in de praktijk", toetsstof: true, tekst: "Wipf geeft toe dat de titel van deze paragraaf klinkt als een tegenspraak, maar hij wil het toch praktisch maken.\n\n**Speltheorie** is een tak van de wiskunde die een analytische benadering biedt van situaties van praktische aard. De situaties zijn spelen met verschillende partijen met gemeenschappelijke of tegengestelde belangen. Voor bepaalde gevallen zijn wiskundige oplossingen mogelijk. Het gaat om echte spelen zoals kaartspellen of schaak, maar ook om echte problemen in politiek, economie of oorlogvoering. De theorie is recent ook toegepast op **terrorisme**.\n\nWipf probeert **klassieke speltheorie** toe te passen op een echt probleem. Dat betekent: spelers kunnen strategiseren, beslissen en handelen, waarbij toeval en verborgen of onvolledige informatie meespelen.\n\nEen spel bestaat uit vier elementen:" },
{ type: "stappen", items: [{ titel: "Spelers", tekst: "(individuen of organisaties)" }, { titel: "Strategieën", tekst: "(een plan, doelstellingen, beslissingen en handelingen)" }] },
{ type: "tekst", tekst: "3. **Situaties**" },
{ type: "stappen", items: [{ titel: "Een opbrengst", tekst: "van deelname (utility, nut)" }] },
{ type: "tekst", tekst: "Kort samengevat: een theorie van wiskundige modellen wordt toegepast om onderling afhankelijke spelers met hun beslissingen en handelingen te formaliseren, onder een conditie van **conflict of samenwerking**." },
{ type: "uitleg", titel: "Wat \"strategiseren\" betekent in speltheorie", tekst: "Wipf definieert het in een voetnoot: een plan hebben van wat je wilt bereiken, **terwijl je rekening houdt met de intenties van de andere betrokken partijen**.\n\nDat tweede deel is wat speltheorie onderscheidt van gewone optimalisatie. Bij optimalisatie zoek je de beste oplossing gegeven vaste omstandigheden. Bij speltheorie zijn de omstandigheden niet vast: ze hangen af van wat de ander doet, en die ander houdt op zijn beurt rekening met jou.\n\nPrecies daarom past het bij security en niet bij safety. Zwaartekracht past zijn strategie niet aan als jij een vangnet ophangt. Een aanvaller wel." },
{ type: "tekst", titel: "Waarom de elementen discreet moeten zijn", toetsstof: true, tekst: "Om een echte situatie te modelleren, moeten de elementen **discreet** zijn, dus in eindige verzamelingen te beschrijven. Wipf stelt dat dat in zijn voorbeeld lukt, met één uitzondering: het uitgestraalde vermogen P van de stoorder, dat in principe continu is.\n\nZijn oplossing is elegant. Als een aanvaller zijn impact wil maximaliseren terwijl hij de kans op ontdekking minimaliseert, dan is dat vermogen **begrensd**. Dus kun je het terugbrengen tot twee waarden: P = {0, Pmax}. Die twee waarden zijn gelijk aan **afzien van een aanval** of **een aanval uitvoeren**.\n\nDit is een mooi voorbeeld van hoe je een technisch continu probleem omzet in een discreet beslisprobleem: niet \"hoeveel vermogen\", maar \"aanvallen of niet\"." },
{ type: "tekst", titel: "4.3.1 De spelers", toetsstof: true, tekst: "De volledige opzet heeft **drie** spelers, samengevat in tabel 4.2:" },
{ type: "tabel", kop: ["Speler", "Deelname aan coalitie", "Belang"], rijen: [["Gebruiker (U)", "ja", "ja"], ["Dienstverlener (P)", "nee", "ja"], ["Aanvaller (A)", "ja", "ja"]] },
{ type: "tekst", tekst: "Er bestaat wel een belangencoalitie tussen gebruiker en dienstverlener, maar die is niet sterk genoeg om de dienstverlener actief in het spel te laten meedoen. De reden: **grote investeringen**, zoals het upgraden of vervangen van satellieten. Zulke acties hebben een negatieve impact op het nut van de dienstverlener, dat wordt berekend als kosten tegenover aantal gebruikers. Daarom wordt de dienstverlener **uitgesloten** uit het spel.\n\nIn een voetnoot voegt Wipf toe: de dienstverlener wordt alleen indirect geraakt door de aanval, tenzij zijn eigen assets worden getroffen. En de gebruiker heeft weinig invloed op de dienstverlener om bijvoorbeeld het zendvermogen te verhogen." },
{ type: "voorbeeld", titel: "De dienstverlener die niet meedoet", tekst: "Dit is een patroon dat je overal tegenkomt en dat je moet herkennen.\n\nEen piloot in nood zou graag willen dat de satellietoperator sterker gaat zenden. Maar de operator bedient miljoenen gebruikers, van wie er één aangevallen wordt. Een systeemupgrade kost miljarden. Voor de operator is het rationeel om **niets** te doen.\n\nVertaal het naar een Nederlandse context: een gemeente die één ondernemer heeft die last heeft van inbraken, en een politiecapaciteit die op de hele stad is berekend. De ondernemer wil meer surveillance, de gemeente rekent in kosten per inwoner. De partij die het meest zou kunnen helpen, heeft de minste prikkel.\n\nBij een securityanalyse moet je dus altijd vragen: **wie zit er in het spel, en wie zit erbij maar doet niet mee?**" },
{ type: "tekst", titel: "4.3.2 De beschikbare strategieën", toetsstof: true, tekst: "De mogelijke strategieën vormen eindige verzamelingen. De opzet: één aanvaller (A) en één slachtoffer, de GNSS-gebruiker (U), in een vlucht bij slecht zicht (IMC, instrument meteorological conditions), onder instrumentvliegregels (IFR), **zonder redundantie in navigatie**. De aanvaller wil het gebruik van dat enige systeem onmogelijk maken.\n\nDat vraagt om een **offensieve** strategie bij de aanvaller en een **defensieve** bij de gebruiker.\n\n**Strategieën van de aanvaller:**\n\nS_A = {jamming, meaconing, spoofing}\n\nVoor de locatie van de stoorder zijn er opties: vast, mobiel op de grond, of in de lucht. Wipf beperkt zich tot de **vaste** optie, en legt uit waarom. Een mobiele stoorder is moeilijker te ontdekken, maar een vliegend doelwit gericht storen vanaf een voertuig is lastig omdat het wegennet niet samenvalt met de projectie van de vliegroute. Een stoorder in de lucht biedt aanvalsvoordelen, maar de operationele kosten zijn aanzienlijk en zo'n stoorder is makkelijk te ontdekken en te lokaliseren.\n\n**Strategieën van de gebruiker**, puur defensief:\n\nS_U = {spectrum- en signaalmonitoring, het verminderen van de koppeling tussen ontvangende antenne en de zender van de aanvaller, het minimaliseren van de blootstellingstijd}" },
{ type: "tekst", titel: "4.3.3 De situaties: de vluchtfasen", toetsstof: true, tekst: "De situaties worden bepaald door de **vluchtfase** en de behoefte aan een precieze positie in die fase. De gebruiker rekent op de drie waarschijnlijkheden (reliability, availability, integrity) die de dienstverlener opgeeft. Die worden geschat uit empirische storingsfrequenties of betrouwbaarheidsberekeningen. Samen met de bijbehorende blootstellingstijden levert dat storingskansen op.\n\nDe vluchtfasen zijn: taxi, takeoff, departure/climb, en-route/cruise, approach, landing, taxi. Een vluchtfase eindigt en een nieuwe begint op beslissing vanuit de cockpit. Grondbewegingen worden voor de eenvoud weggelaten, dus:\n\nFP = {Takeoff, Departure, En-route, Approach, Landing}\n\nDe blootstellingstijden verschillen enorm, en dat is de kern van tabel 4.3:" },
{ type: "tabel", kop: ["Vluchtfase", "Blootstellingstijd", "In uren", "Hoogte boven antenne aanvaller", "Kriticiteit"], rijen: [["Takeoff", "10 sec", "0,0028", "50 m", "Hoog"], ["Departure", "5 min", "0,083", "200 m", "Middel"], ["En-route", "45 min", "0,75", "2000 m", "Laag"], ["Approach", "5 min", "0,083", "200 m", "Middel"], ["Landing", "30 sec", "0,0083", "20 m", "Hoog"]] },
{ type: "tekst", tekst: "Lees deze tabel goed, want hij bevat een **tegenintuïtief** inzicht.\n\nJe zou verwachten dat de fase met de langste blootstelling, en-route met 45 minuten, het gevaarlijkst is. Het omgekeerde is waar. En-route vlieg je op 2000 meter, ver van een stoorder op de grond. De radiopaddemping neemt toe met het kwadraat van de afstand (a = 1/r²). Bij takeoff en landing zit je op 50 en 20 meter, dus vlak bij een eventuele stoorder, en heb je bovendien geen tijd en geen hoogte om te reageren.\n\nEr is dus een **intrinsieke relatie** tussen blootstellingstijd en hoogte boven de antenne van een potentiële stoorder. Die relatie maakt het mogelijk om de kans te operationaliseren dat je positie verliest door een stoorder op de grond tijdens een specifieke vluchtfase." },
{ type: "tekst", titel: "Wat er gebeurt als het signaal wegvalt", toetsstof: true, tekst: "De risico's voor het slachtoffer hangen af van de status van het signaal:\n\n- Is het signaal **in gebruik** en wordt er een kritieke vluchtfase gevlogen, dan leidt signaalverlies tot een gevaarlijke situatie en het **risico op een ongeval**.\n- Moet het signaal nog worden **opgepikt** maar is het niet beschikbaar, dan wordt de missie afgebroken en is er **economisch verlies**.\n\nDie tweedeling is belangrijk. Niet elke aanval eindigt in een crash. De meeste eindigen in een afgebroken vlucht, dus in geld en in een patiënt die niet wordt opgehaald.\n\nDe aanvaller kan zijn stoorvermogen naar eigen inzicht kiezen. Maar **te veel vermogen uitstralen verhoogt de Probability of Intercept (POI)**, de kans om ontdekt te worden door een monitoringproces. Wordt de aanval ontdekt, dan onderneemt het slachtoffer een ontwijkende actie en is de aanval mislukt. Bovendien kan ontdekking leiden tot lokalisatie door een bevoegde autoriteit. De aanvaller moet dus een **afweging** maken.\n\nWipf toont in figuur 4.5 monitoringresultaten van normale helikoptermissies in Zwitserland, waarbij de kwaliteit van de dienst herhaaldelijk verslechterd blijkt. De kleuren geven de ernst van mogelijke radiofrequentie-interferentie aan. Met andere woorden: dit is geen theoretisch probleem. Er wordt daadwerkelijk gemeten dat het signaal regelmatig wordt verstoord." },
{ type: "tekst", titel: "De kosten van de aanvaller", toetsstof: true, tekst: "Tabel 4.4 is een van de belangrijkste tabellen van het hoofdstuk. Hij zet de drie aanvalsvormen naast elkaar op kosten, benodigde kennis en pakkans:" },
{ type: "tabel", kop: ["Aanval", "Investering in apparatuur", "Kennis", "Kans op ontdekking (POI)"], rijen: [["Jamming", "1.000 euro", "Laag", "Hoog"], ["Meaconing", "10.000 euro", "Middel", "Laag"], ["Spoofing", "100.000 euro", "Hoog", "Laag"]] },
{ type: "tekst", tekst: "*Elke stap omhoog kost een factor tien meer en vraagt meer kennis, maar wordt veel moeilijker te ontdekken.*\n\nWat je hieruit moet halen: de goedkoopste aanval is de luidste. Voor duizend euro en weinig kennis kun je een signaal overstemmen, maar iedereen met monitoring ziet het meteen. Voor een ton en veel kennis kun je een vliegtuig stilletjes de verkeerde kant op sturen.\n\nDit is ook waarom de beveiliging van kritieke infrastructuur zo'n lastig kosten-batenprobleem is. Je kunt je makkelijk wapenen tegen de jammer van duizend euro. Tegen de spoofer van een ton is dat veel moeilijker, en die aanvaller heeft er ook veel meer voor over." },
{ type: "tekst", titel: "4.3.4 De uitkomsten van het spel", toetsstof: true, tekst: "De uitkomsten moeten potentiële winsten laten zien op het gebied van kosten, risico en nut. Wipf kiest ervoor de kosten in het risico op te nemen. Het risico R voor de aanvaller benadert hij als:\n\n**R = (I + K) × POI**\n\nwaarbij I de investering in apparatuur is, K de kennis, I + K samen de totale kosten, en POI de kans dat een monitoringinstantie in het gestoorde gebied de aanval ontdekt.\n\nDit is een handige formule om te onthouden. Het risico van de aanvaller is wat hij kwijt is als hij gepakt wordt, maal de kans dat hij gepakt wordt. Precies zoals risico voor het slachtoffer kans maal gevolg is.\n\nDe **winstmatrix** (tabel 4.5) zet de drie aanvalsvormen tegenover de vier reacties van het slachtoffer: geen actie, klimmen, versnellen, klimmen en versnellen. In elke cel staat een winst (1) of verlies (–1) voor beide spelers:" },
{ type: "tabel", kop: ["Aanvaller ↓ / Slachtoffer →", "Geen actie", "Klimmen", "Versnellen", "Klimmen en versnellen"], rijen: [["Jamming", "A wint, U verliest", "A verliest, U wint", "A verliest, U wint", "A verliest, U wint"], ["Meaconing", "A wint, U verliest", "A verliest, U wint", "A verliest, U wint", "A verliest, U wint"], ["Spoofing", "A wint, U verliest", "A verliest, U wint", "A verliest, U wint", "A verliest, U wint"]] },
{ type: "tekst", tekst: "In dit voorbeeld is de winst van de aanvaller vanzelfsprekend het verlies van het slachtoffer. Dat maakt het een **zero-sum** spel, daar komen we zo op terug.\n\nOp het eerste gezicht suggereert deze matrix een strategisch voordeel voor aanvallen: alleen als het slachtoffer niets doet, wint de aanvaller. Maar, zegt Wipf, de matrix laat niet het hele plaatje zien. Tabel 4.6 voegt toe hoe waarschijnlijk het is dat de aanval wordt **ontdekt** en dus dat er een operationele actie volgt:" },
{ type: "tabel", kop: ["Aanval", "Kans dat het slachtoffer situationeel bewustzijn krijgt"], rijen: [["Jamming", "Hoog"], ["Meaconing", "Laag"], ["Spoofing", "Laag"]] },
{ type: "tekst", tekst: "De kans op ontdekking is bij meaconing en spoofing ongeveer **twee ordes van grootte**, dus een factor honderd, kleiner dan bij jamming, door het verschil in signaalformaat.\n\nCombineer de twee tabellen en je ziet het echte plaatje. Bij jamming wint het slachtoffer bijna altijd, want hij merkt het en reageert. Bij spoofing wint de aanvaller bijna altijd, want het slachtoffer blijft in de kolom \"geen actie\" zitten omdat hij niet weet dat er iets aan de hand is." },
{ type: "tekst", titel: "De paradox: waarom infrastructuur zo zelden wordt aangevallen", toetsstof: true, tekst: "Hier komt Wipf met een observatie die verder reikt dan de luchtvaart.\n\nTechnische infrastructuur die een **gemeenschappelijk goed** levert, toegankelijk voor het publiek, wordt **zelden aangevallen**. Een mogelijke verklaring: de aanvaller of zijn bondgenoten hebben de dienst die ze willen verstoren **zelf nodig** voor hun eigen doelen. Er hangt een algemeen aanvaard nut aan dit goed.\n\nTwee voetnoten maken het concreet. Ten eerste: in hedendaagse conflictgebieden blijven mobiele telefoonmasten werken, hoewel ze voor oorlogshandelingen worden gebruikt. Ten tweede: er zijn fysieke aanvallen op afzonderlijke vliegtuigen, maar niet op de infrastructuur die het vliegen ondersteunt, zoals kwetsbare assets van luchtverkeersleiding of luchthavendiensten.\n\nIn zo'n geval moet de winstmatrix worden aangepast om die situaties weer te geven en het **Nash-evenwicht** te vinden, wat een verklaring zou kunnen geven voor dit verschijnsel." },
{ type: "uitleg", titel: "Wat een Nash-evenwicht is", tekst: "Genoemd naar John Nash, wiens artikel uit 1951 Wipf citeert. Een Nash-evenwicht is een situatie waarin **geen enkele speler zijn uitkomst kan verbeteren door alleen zijn eigen strategie te veranderen**, gegeven wat de anderen doen.\n\nToegepast op infrastructuur: als beide partijen het GPS-signaal nodig hebben, dan is \"allebei niet aanvallen\" een evenwicht. Wie als eerste aanvalt, verliest zelf ook zijn navigatie. Niemand heeft een prikkel om af te wijken.\n\nDat verklaart iets wat je anders niet snapt: waarom kwetsbare, openbaar toegankelijke, goedkoop te verstoren systemen jarenlang ongemoeid blijven. Niet omdat ze goed beveiligd zijn, maar omdat aanvallen niemand iets oplevert.\n\nEn het geeft meteen de waarschuwing erbij: dat evenwicht houdt alleen stand zolang de aanvaller het systeem zelf nodig heeft. Een aanvaller die niets te verliezen heeft, of een alternatief heeft, zit niet meer in dat evenwicht." },
{ type: "tekst", titel: "4.3.5 De speltheoretische classificatie", toetsstof: true, tekst: "Wipf classificeert zijn voorbeeld volgens de gangbare kenmerken van spelen. Het meest voor de hand liggende kenmerk is het **aantal spelers**. Een spel kan één, twee of n spelers hebben, en spelers hoeven geen individuen te zijn: het kan een groep zijn met gemeenschappelijke belangen, of zelfs een federatie van organisaties.\n\nDan volgt de tabel die de hele stelling van het hoofdstuk draagt, tabel 4.7:" },
{ type: "tabel", kop: ["Spelers", "Actiedomein", "Speltype", "Benadering", "Voorbeeld"], rijen: [["0", "Safety", "Niet-strategisch", "Beschrijvende wiskunde", "Automaten"], ["1", "Safety", "Niet-strategisch", "Optimalisatie", "Sociotechnische systemen"], ["2", "Security", "Strategisch", "Speltheoretisch", "Competitie"], ["3 of meer", "Security", "Strategisch", "Speltheoretisch", "Samenwerking"]] },
{ type: "tekst", tekst: "Wipf neemt bewust ook de **lege verzameling** (nul spelers) en de **eenheidsverzameling** (één speler) op, om een mogelijk uniforme benadering onder speltheoretische noemer voor te stellen.\n\n**Nul spelers** is een puur machine-tegen-machine-interactie, tenzij kunstmatige intelligentie actief meedoet. Een sensor die een klep aanstuurt, zonder mens en zonder tegenstander.\n\n**Eén speler** heet ook een één-persoonsspel. Zonder rivalen hoeft de speler alleen zijn beschikbare strategieën op te sommen om een optimale uitkomst te kiezen. Zodra kansen meespelen, wordt het ingewikkelder; daar gaat de **beslistheorie** over. Of, zoals vaak gezegd: de enkele speler speelt **een spel tegen de natuur**, waarbij de natuur onverschillig is voor wat de speler beslist.\n\nDat laatste is de scherpste formulering van het verschil tussen safety en security die je in het hele boek vindt. Bij safety speel je tegen de natuur, en de natuur reageert niet op jou. Bij security speel je tegen iemand die wél reageert." },
{ type: "voorbeeld", titel: "Waarom de natuur onverschillig is en de aanvaller niet", tekst: "Zet een hek om een bouwput. De zwaartekracht gaat niet op zoek naar een gat in het hek. Het risico dat iemand erin valt, is nu gewoon kleiner. Dat is safety: één speler, optimalisatie, statistiek werkt.\n\nZet een hek om een bouwterrein tegen diefstal. De dief loopt langs het hek, zoekt het gat, of neemt een ladder. Jouw maatregel verandert **zijn** gedrag, en zijn gedrag verandert de waarde van jouw maatregel. Dat is security: twee spelers, strategisch, en statistiek over het verleden zegt weinig over wat hij morgen doet.\n\nDit is precies wat Blokland en Reniers in hoofdstuk 2 bedoelden met het derde onderscheidingsniveau, de aard van de onzekerheid. Wipf geeft er de wiskundige vorm aan." },
{ type: "tekst", titel: "Constant-sum, eindig, bi-matrix, matrix", toetsstof: true, tekst: "Nog een paar classificatiekenmerken die Wipf noemt.\n\n**Vallen de doelstellingen samen of botsen ze?** Constant-sum spelen tonen een volledig conflicterende situatie, pure competitie, zonder communicatie tussen de tegenstanders. Dat leidt tot **onvolledige informatie aan beide kanten**. Dobbelen is een voorbeeld: de gezamenlijke rijkdom van de spelers blijft constant, alleen de verdeling verandert.\n\n**Is het spel eindig?** Dat hangt af van de eindigheid van de verzamelingen (spelers, strategieën, situaties). Bovendien mag het spel geen onbepaalde duur hebben. In de praktijk bestaat er een **venster om te handelen**: de vluchtfase.\n\n**Bi-matrix en matrix.** Een eindig niet-coöperatief spel tussen twee spelers heet een **bi-matrix-spel**. Het wordt gespecificeerd door twee matrices A en U van dezelfde afmeting m bij n, de winstmatrices van beide spelers. Speler A kiest een rij, speler U kiest een kolom. Als de som van beide winsten in elke cel **nul** is, wordt het bi-matrix-spel een **matrix-spel**.\n\nTabel 4.8 laat zien dat dit voorbeeld een matrix-spel is:" },
{ type: "tabel", kop: ["Kenmerk", "Dit voorbeeld", "Bi-matrix-spel", "Matrix-spel"], rijen: [["Aantal spelers", "2", "2", "2"], ["Niet-coöperatief", "ja", "ja", "ja"], ["Eindig", "ja", "ja", "ja"], ["Zero-sum", "ja", "nee", "ja"], ["Strategisch", "ja", "ja", "ja"]] },
{ type: "tekst", tekst: "Wat je hieruit moet onthouden: het HEMS-voorbeeld is een **tweepersoons, niet-coöperatief, eindig, zero-sum, strategisch spel**. Elk van die vijf woorden is een keuze van Wipf, en elk is te betwisten. Zero-sum bijvoorbeeld klopt alleen als de aanvaller niets te verliezen heeft bij een mislukte aanval, en dat spreekt zijn eigen formule R = (I + K) × POI tegen." },
{ type: "tekst", titel: "4.4 Conclusie", toetsstof: true, tekst: "Wipf heeft geprobeerd een echt probleem zo te structureren dat het toegankelijk wordt voor een speltheoretische oplossing. Het lijkt erop dat de twee aspecten safety en security **in één verenigde oplossingsruimte** kunnen worden beoordeeld.\n\nBeide velden blijken **verschillende deelverzamelingen van een fundamentelere superset**. Formeler gezegd: de synergie tussen safety en security wordt uitsluitend gerationaliseerd in het **aantal N van betrokken instanties of spelers**. Er is dus een verleiding om speltheorie te zien als een mogelijk verenigend kader.\n\nEen relevante vraag is in beeld gekomen: waarom is kwetsbare basisinfrastructuur zoals radiokanalen in het luchtvervoer zo zelden het doelwit van uitgebreide elektronische aanvallen? Een mogelijk antwoord is het **nut dat de infrastructuur heeft voor alle conflicterende partijen**. Bij openbaar toegankelijke radiokanalen kan dat nut zich zelfs uitstrekken tot het verzamelen van informatie over de tegenstander." },
{ type: "waarschuwing", titel: "Wat Wipf beweert en wat hij niet beweert", tekst: "Wipf zegt dat safety en security **kunnen** worden geanalyseerd in één ruimte en dat het verschil zit in het aantal spelers. Dat is een sterke en elegante claim.\n\nWat hij **niet** zegt: dat de organisaties, de wetten of de beroepen moeten samengaan. Hij noemt in de inleiding expliciet het bestaan van \"verschillende autoriteiten en jurisdicties\" als een gegeven.\n\nZijn claim is dus **analytisch**, niet **organisatorisch**. Je kunt safety en security met hetzelfde wiskundige gereedschap bekijken, terwijl de brandweer en de politie gescheiden blijven. Vergelijk dat met Leveson (hoofdstuk 3), die ook zegt dat je één analyse kunt doen, en met Brooks en Coole (hoofdstuk 7), die zullen zeggen dat de beroepen niet samengaan. Die drie spreken elkaar minder tegen dan het lijkt." },
{ type: "tekst", titel: "4.5 Vooruitblik", toetsstof: true, tekst: "Er zijn andere situaties in de luchtvaart waar speltheorie een geschikte manier lijkt om interacties te modelleren, met name tussen **luchtvaartmaatschappijen, luchtverkeersdienstverleners en luchthavens**.\n\nWipf verwijst naar een typisch voorbeeld waarin luchthavensecurity een negatieve invloed heeft op professionals die zich met vliegveiligheid bezighouden, beschreven en geanalyseerd door Pettersen en anderen (2015). Dat is hetzelfde artikel dat hoofdstuk 1 aanhaalde als bewijs dat safety- en securitypraktijken elkaar kunnen tegenwerken.\n\nAnders dan de niet-coöperatieve aard van het HEMS-voorbeeld, zijn die partijen betrokken in een **coalitiespel**, omdat ze de mogelijkheid hebben om op verschillende manieren samen te werken voor wederzijds voordeel. Bovendien zou het voor de industrie gunstig zijn als **regelgevende en toezichthoudende activiteiten** in zulke modellen zouden worden opgenomen.\n\nMerk op wat Wipf hiermee zegt: het niet-coöperatieve, zero-sum spel tussen aanvaller en piloot is het **simpelste** geval. De echte managementpuzzels, tussen partijen die wél kunnen samenwerken, zijn coöperatieve spelen met drie of meer spelers, de onderste rij van tabel 4.7. Daar gaat hoofdstuk 8 (La Porte) en hoofdstuk 9 (Schulman) over." },
{ type: "begrippen", titel: "Kernbegrippen uit hoofdstuk 4", items: [{ begrip: "Unlawful interference", definitie: "Wederrechtelijke inmenging; de kern van de ICAO-definitie van security in de luchtvaart. Omvat kapingen, sabotage en het opzettelijk verstoren van signalen." }, { begrip: "GNSS", definitie: "Global Navigation Satellite Systems, de verzamelnaam voor satellietnavigatie zoals GPS en Galileo. Bij lichte helikopters bij slecht zicht vaak de enige positiebron." }, { begrip: "HEMS", definitie: "Helicopter Emergency Medical Services, de traumahelikopters. De empirische casus van het hoofdstuk." }, { begrip: "Dreigingsmatrix", definitie: "De 2 bij 2 matrix van Wipf met aanvaller en slachtoffer als systeem of omgeving. Systeem schaadt omgeving is safety, omgeving schaadt systeem is security. Twee cellen blijven leeg." }, { begrip: "Umsystem", definitie: "Duits voor omgeving in de systems engineering-tekening; alles buiten de systeemgrens." }, { begrip: "Jamming", definitie: "Uitzenden van radiosignalen met genoeg vermogen om ontvangers te laten falen. Goedkoop, weinig kennis, hoge pakkans." }, { begrip: "Meaconing", definitie: "Ontvangen, vertragen en met meer vermogen opnieuw uitzenden van een signaal, zodat de ontvanger in verwarring raakt. Middenklasse in kosten, lage pakkans." }, { begrip: "Spoofing", definitie: "De ontvanger laten vastklikken op valse signalen die legitiem lijken, waarmee uiteindelijk de vlucht kan worden overgenomen. Duur, veel kennis, lage pakkans." }, { begrip: "Reliability, availability, integrity", definitie: "De drie waarschijnlijkheden die een navigatiedienst moet garanderen: de dienst niet verliezen, de dienst krijgen als je erom vraagt, en correcte informatie." }, { begrip: "Signaal tegenover ruis plus interferentie", definitie: "De door Wipf uitgebreide kwaliteitsmaat van een radiokanaal, die naast natuurlijke ruis ook opzettelijke storing meeneemt." }, { begrip: "Probability of Intercept (POI)", definitie: "De kans dat een aanval wordt ontdekt door een monitoringproces. Stijgt met het uitgestraalde vermogen." }, { begrip: "Speltheorie", definitie: "Tak van de wiskunde die situaties met meerdere partijen met gemeenschappelijke of tegengestelde belangen analyseert. Bestaat uit spelers, strategieën, situaties en nut." }, { begrip: "Strategiseren", definitie: "Een plan hebben van wat je wilt bereiken, terwijl je rekening houdt met de intenties van de andere partijen." }, { begrip: "Spel tegen de natuur", definitie: "Het één-persoonsspel waarin de tegenpartij niet reageert op de beslissingen van de speler. Volgens Wipf het model van safety." }, { begrip: "Zero-sum spel", definitie: "Spel waarin de winst van de ene speler precies het verlies van de ander is. Het HEMS-voorbeeld is er een." }, { begrip: "Bi-matrix-spel en matrix-spel", definitie: "Eindig niet-coöperatief spel tussen twee spelers, beschreven door twee winstmatrices. Sommeren de winsten in elke cel tot nul, dan is het een matrix-spel." }, { begrip: "Nash-evenwicht", definitie: "Situatie waarin geen speler zijn uitkomst kan verbeteren door alleen zijn eigen strategie te veranderen. Verklaart waarom gedeelde infrastructuur zelden wordt aangevallen." }, { begrip: "Coalitiespel", definitie: "Spel waarin partijen kunnen samenwerken voor wederzijds voordeel; volgens Wipf het model voor de relatie tussen luchtvaartmaatschappijen, luchtverkeersleiding en luchthavens." }] }
] },
{ id: "toepassen", titel: "Toepassen", blokken: [
{ type: "stappen", titel: "Een situatie modelleren als spel, in zes stappen", items: [{ titel: "Tel de spelers, en bepaal wie meedoet.", tekst: "Wie heeft belang én wie neemt deel? Een partij met belang die niet meedoet (zoals de satellietoperator) hoort niet in het spel, maar wel in je analyse van waarom hij niet meedoet." }, { titel: "Bepaal het aantal spelers en daarmee het domein.", tekst: "Nul of één speler: safety, optimalisatie, statistiek. Twee of meer: security, strategisch, speltheorie. Dit is de kern van tabel 4.7." }, { titel: "Maak de strategieën eindig.", tekst: "Wat kan de aanvaller? Wat kan het slachtoffer? Beperk continue variabelen tot beslissingen: aanvallen of niet, klimmen of niet." }, { titel: "Bepaal de situaties en hun kriticiteit.", tekst: "Waar in het proces is het slachtoffer het kwetsbaarst? Let op de combinatie van blootstellingstijd, nabijheid en reactiemogelijkheid, niet alleen op duur." }, { titel: "Bereken de kosten en het risico van de aanvaller.", tekst: "Investering plus kennis, maal pakkans. Welke strategie is voor de aanvaller rationeel, gegeven dat een ontdekte aanval mislukt?" }, { titel: "Zoek het evenwicht en vraag of het houdbaar is.", tekst: "Heeft de aanvaller het systeem zelf nodig? Dan is niet-aanvallen mogelijk een Nash-evenwicht. Zo niet, dan is dat evenwicht er niet en moet je de verdediging serieus nemen." }] },
{ type: "oefening", id: "h4-oef-1", niveau: "basis", vraag: "Leg uit waarom de dreigingsmatrix van Wipf twee lege cellen heeft, en verbind dat met het SEMA-raamwerk uit hoofdstuk 1.", antwoord: "De matrix zet aanvaller en slachtoffer allebei uit als systeem of omgeving. Systeem schaadt omgeving is safety; omgeving schaadt systeem is security. Daarmee blijven twee combinaties over die geen naam krijgen: systeem tegen systeem en omgeving tegen omgeving. Wipf noemt ze expliciet als niet-geadresseerd. De eerste lege cel is precies wat het SEMA-raamwerk van Piètre-Cambacédès en Chaudet toevoegt aan de klassieke tweedeling: het vermogen van een systeem om zichzelf niet te schaden. Een machine die zichzelf sloopt door slijtage, of software die het eigen systeem laat vastlopen, past in geen van beide klassieke categorieën maar is duidelijk een veiligheidsvraagstuk. De les is dat een formele tweedeling altijd laat zien waar de theorie tekortschiet, en dat de lege cellen aanwijzen wat er nog moet worden benoemd." },
{ type: "oefening", id: "h4-oef-2", niveau: "basis", vraag: "Een aanvaller heeft duizend euro en weinig technische kennis. Welke aanval kiest hij, wat is de kans dat hij slaagt, en waarom?", antwoord: "Met duizend euro en weinig kennis is jamming de enige haalbare optie; meaconing en spoofing vragen een factor tien tot honderd meer geld en aanzienlijk meer kennis. Jamming heeft echter een hoge Probability of Intercept: het signaalformaat wijkt af van het originele signaal, dus monitoring pikt het snel op. Tabel 4.6 zegt dat de kans op situationeel bewustzijn bij het slachtoffer dan hoog is. Zodra de piloot merkt dat zijn positie wegvalt, klimt hij of versnelt hij, en volgens de winstmatrix verliest de aanvaller in alle drie de reactiekolommen. De aanval slaagt alleen als het slachtoffer niets doet, en dat is bij jamming onwaarschijnlijk omdat het verlies van signaal zichtbaar is. Conclusie: de goedkope aanval is de luidste en daarmee de minst effectieve. Het risico voor de aanvaller, berekend als kosten maal pakkans, is bovendien relatief hoog ondanks de lage kosten, juist door die hoge pakkans." },
{ type: "oefening", id: "h4-oef-3", niveau: "gevorderd", vraag: "Wipf stelt dat safety en security alleen verschillen in het aantal spelers. Vergelijk die stelling met de drie onderscheidingsniveaus van Blokland en Reniers uit hoofdstuk 2. Waar vallen ze samen en waar niet?", antwoord: "Blokland en Reniers onderscheiden op effect (intentioneel of niet), op doelstellingen (één partij of meerdere met niet-uitgelijnde doelen) en op onzekerheid (statistiek werkt of de tegenstander past zijn tactiek aan). Wipfs stelling valt vrijwel samen met het tweede en derde niveau. Zodra er twee of meer spelers zijn, zijn er per definitie meerdere partijen met eigen doelstellingen, en in een zero-sum spel staan die doelen recht tegenover elkaar, wat bij Blokland en Reniers een afwijking van meer dan negentig graden is. En het onderscheid tussen een spel tegen de natuur (die niet reageert) en een strategisch spel (waarin de ander wél reageert) is exact het derde niveau: de aard van de onzekerheid verandert omdat de tegenpartij meedenkt. Waar ze niet samenvallen is het eerste niveau. Voor Wipf is intentionaliteit geen apart criterium; het volgt automatisch uit het bestaan van een tweede speler met een strategie. Blokland en Reniers benoemen intentionaliteit wel apart, omdat zij een taalkundig kader willen: wanneer mag je het woord security gebruiken. Wipf wil een rekenkader: wanneer heb je speltheorie nodig. Voor de begripsvorming is het eerste nuttig, voor de methodekeuze het tweede. De stellingen vullen elkaar dus aan in plaats van elkaar tegen te spreken." },
{ type: "oefening", id: "h4-oef-4", niveau: "gevorderd", vraag: "Verklaar met het Nash-evenwicht waarom mobiele telefoonmasten in conflictgebieden blijven werken, en benoem onder welke voorwaarde die verklaring niet meer opgaat.", antwoord: "Beide strijdende partijen gebruiken het mobiele netwerk voor hun eigen communicatie en operaties. Wie het netwerk uitschakelt, treft daarmee ook zichzelf. In speltheoretische termen: de strategie \"netwerk vernietigen\" levert voor de partij die haar kiest een lagere uitkomst op dan \"netwerk laten staan\", gegeven dat de ander het netwerk ook gebruikt. Geen van beide kan zijn positie verbeteren door eenzijdig af te wijken, dus \"allebei niet aanvallen\" is een Nash-evenwicht. Wipf noemt dat het nut van het gemeenschappelijk goed voor alle conflicterende partijen, en voegt toe dat het nut zich kan uitstrekken tot het afluisteren van de tegenstander, wat het evenwicht nog stabieler maakt. De verklaring valt weg zodra een partij het goed niet meer nodig heeft: omdat zij een eigen alternatief heeft, omdat zij wordt geleid door doelen waarbij eigen verlies niet telt, of omdat zij het conflict wil laten escaleren ongeacht de kosten. Op dat moment is er geen gedeeld nut meer, geen evenwicht meer, en wordt de infrastructuur alsnog een doelwit. Voor kritieke infrastructuur betekent dat: de historische veiligheid van een systeem zegt weinig zodra het type tegenstander verandert." }
] },
{ id: "checken", titel: "Checken", blokken: [
{ type: "quiz", titel: "Check jezelf op hoofdstuk 4", vragen: [{ vraag: "Hoe definieert ICAO security in de luchtvaart?", opties: ["Het beheersen van risico's tot een aanvaardbaar niveau", "Het beveiligen van de burgerluchtvaart tegen daden van wederrechtelijke inmenging", "Het beschermen van passagiers tegen letsel", "Het waarborgen van de integriteit van navigatiesignalen"], juist: 1, uitleg: "De definitie draait om wederrechtelijkheid, niet om de schade. De safety-definitie gaat juist over risico's beheersen tot een aanvaardbaar niveau." }, { vraag: "Welke cel in de dreigingsmatrix hoort bij safety?", opties: ["Omgeving schaadt systeem", "Systeem schaadt omgeving", "Systeem schaadt systeem", "Omgeving schaadt omgeving"], juist: 1, uitleg: "Dit is de tweede onderscheidingsas uit hoofdstuk 1 in tabelvorm. Omgeving schaadt systeem is security, en de andere twee cellen blijven leeg." }, { vraag: "Welke aanval is het goedkoopst en het makkelijkst te ontdekken?", opties: ["Spoofing", "Meaconing", "Jamming", "Meaconing en spoofing zijn even goedkoop"], juist: 2, uitleg: "Jamming kost ongeveer duizend euro, vraagt weinig kennis en heeft een hoge Probability of Intercept omdat het signaalformaat afwijkt van het origineel." }, { vraag: "Waarom is spoofing gevaarlijker dan jamming?", opties: ["Omdat het meer vermogen gebruikt", "Omdat het slachtoffer niet merkt dat er iets mis is en dus niet reageert", "Omdat het vanuit de lucht wordt uitgevoerd", "Omdat het de satellieten zelf beschadigt"], juist: 1, uitleg: "De kans op situationeel bewustzijn is bij spoofing een factor honderd kleiner. Het slachtoffer blijft in de kolom \"geen actie\" en de aanvaller wint." }, { vraag: "Welke van de drie kwaliteitsmaten van een navigatiedienst wordt door spoofing het meest aangetast?", opties: ["Reliability", "Availability", "Integrity", "Bandbreedte"], juist: 2, uitleg: "Integrity is de correctheid van de geleverde informatie. Bij spoofing werkt het systeem ogenschijnlijk, maar de informatie is vals." }, { vraag: "Waarom is de vluchtfase en-route volgens Wipf het minst kritiek, ondanks de langste blootstelling?", opties: ["Omdat er dan geen satellieten in zicht zijn", "Omdat de helikopter dan ver van een stoorder op de grond zit en de radiopaddemping met het kwadraat van de afstand toeneemt", "Omdat de piloot dan op automatische piloot vliegt", "Omdat er dan altijd een tweede navigatiesysteem is"], juist: 1, uitleg: "Bij takeoff en landing zit de helikopter op 20 tot 50 meter van een mogelijke stoorder, met nauwelijks reactietijd. Kriticiteit gaat over nabijheid en reactiemogelijkheid, niet over duur." }, { vraag: "Waarom wordt de dienstverlener uit het spel uitgesloten?", opties: ["Omdat hij geen belang heeft", "Omdat de investeringen die actieve deelname zou vragen zijn nut negatief beïnvloeden", "Omdat hij de aanvaller is", "Omdat speltheorie maximaal twee spelers toestaat"], juist: 1, uitleg: "Hij heeft wel belang, maar upgraden of vervangen van satellieten kost meer dan het voor de kosten-per-gebruiker oplevert. Belang zonder deelname." }, { vraag: "Hoe berekent Wipf het risico van de aanvaller?", opties: ["Kans maal gevolg voor het slachtoffer", "Investering plus kennis, maal de kans op ontdekking", "Uitgestraald vermogen maal blootstellingstijd", "Bandbreedte gedeeld door signaal-ruisverhouding"], juist: 1, uitleg: "R = (I + K) × POI. Wat de aanvaller kwijt is als hij gepakt wordt, maal de kans dat hij gepakt wordt." }, { vraag: "Wat kenmerkt volgens Wipf een spel met één speler?", opties: ["Het is een securityvraagstuk", "Het is een spel tegen de natuur, die onverschillig is voor de beslissingen van de speler", "Het vereist een Nash-evenwicht", "Het is per definitie coöperatief"], juist: 1, uitleg: "Dat is het model van safety: optimalisatie en beslistheorie, zonder tegenstander die reageert." }, { vraag: "Wat is een zero-sum spel?", opties: ["Een spel zonder winnaar", "Een spel waarin de winst van de een precies het verlies van de ander is", "Een spel met nul spelers", "Een spel zonder strategie"], juist: 1, uitleg: "Het HEMS-voorbeeld is er een: de winst van de aanvaller is het verlies van het slachtoffer. Daarmee is het een matrix-spel in plaats van een bi-matrix-spel." }, { vraag: "Waarom wordt gedeelde infrastructuur volgens Wipf zelden aangevallen?", opties: ["Omdat ze zeer goed beveiligd is", "Omdat aanvallen technisch onmogelijk is", "Omdat de aanvaller of zijn bondgenoten de dienst zelf nodig hebben", "Omdat de straffen hoog zijn"], juist: 2, uitleg: "Het gedeelde nut maakt niet-aanvallen tot een Nash-evenwicht. Voorbeelden: telefoonmasten in oorlogsgebied, en het ontbreken van aanvallen op luchtverkeersleiding." }, { vraag: "Waarin zit volgens de conclusie van Wipf de synergie tussen safety en security?", opties: ["In de gedeelde wetgeving", "In het samenvoegen van de organisaties", "Uitsluitend in het aantal betrokken spelers", "In dezelfde opleiding van professionals"], juist: 2, uitleg: "Beide zijn deelverzamelingen van een fundamentelere superset, en het aantal spelers N bepaalt welke deelverzameling je hebt." }] },
{ type: "bronnen", items: [{'apa': 'Wipf, H. (2020). Safety versus security in aviation. In C. Bieder & K. Pettersen Gould (Eds.), The coupling of safety and security (pp. 29–41). Springer.'}, {'apa': 'Wipf, H. (2014). Risk management in air traffic control: Operators risk back to basics. In Aviation risk and safety management. Springer.'}, {'apa': 'Shannon, C. E. (1948). A mathematical theory of communication. Bell System Technical Journal, 27, 379–623.'}, {'apa': 'Golany, B., et al. Nature plays with dice, terrorists do not: Allocating resources to counter strategic versus probabilistic risks. European Journal of Operational Research, 192(1).'}, {'apa': 'Nash, J. F. (1951). Non-cooperative games. Annals of Mathematics, 54, 286–295.'}, {'apa': 'Scaramuzza, M., et al. (2015). GNSS RFI detection: Finding the needle in the haystack. ION GNSS, Tampa.'}, {'apa': 'Pettersen, K. A., et al. (2015). Organizational contradictions between safety and security. Safety Science, 71, 167–177.'}] },
{ type: "preview", titel: "Van getallen naar cultuur", tekst: "Wipf en Leveson waren technisch en optimistisch: één analyseruimte voor beide domeinen. Jore zet in hoofdstuk 5 een heel ander instrument op tafel, security culture, en vraagt of dat begrip wel stevig genoeg is om op te bouwen.", punten: ['Waarom security science richting zachte maatregelen beweegt', 'Wat safety culture wel heeft en security culture nog niet', 'De aanslag op In Amenas als toetssteen'] }
] }
];

LESSTOF["intro-to-safety-security/h5"] = [
  {
    "id": "voor",
    "titel": "Before you start",
    "blokken": [
      {
        "type": "leerdoelen",
        "items": [
          "Reproduce the facts of the In Amenas attack and explain why it put the concept of security culture on the map",
          "Explain why, according to Jore, the distinction between safety and security rests on malicious intent rather than on intentionality",
          "Name the five features of a strong security culture from the Statoil report",
          "List and apply Gerring’s eight criteria for conceptual adequacy",
          "Judge, criterion by criterion, how security culture scores, and reproduce Jore’s conclusion",
          "Explain why concepts such as just culture and weak signals cannot simply be carried over from safety to security",
          "Explain the distinction between \"understanding separately\" and \"treating separately\"",
          "Argue why Jore wants to keep the concept despite all her objections"
        ]
      },
      {
        "type": "uitleg",
        "titel": "Who Jore is and what this chapter does",
        "tekst": "**Sissel Jore** works at the University of Stavanger in Norway, the same university as editor Pettersen Gould. She specialises in security in the petroleum sector and in the question of how to demarcate security as a scientific concept.\n\nThis chapter belongs to the **conceptual** vantage point of the book, together with Blokland and Reniers (chapter 2). But where they build definitions, Jore does something else: she takes a concept already used in practice, **security culture**, and tests whether it is solid enough.\n\nHer approach is a good example of how to assess a concept scientifically. She uses a fixed checklist, Gerring’s eight criteria, and walks through them one by one. That is a method you can use yourself on any buzzword you meet in your field."
      },
      {
        "type": "slimmer",
        "titel": "The question in the title",
        "tekst": "The title of the chapter is a question: dual or distinct phenomena? So: are safety culture and security culture **two sides of the same thing** (dual), or **two different things** (distinct)?\n\nJore’s answer is subtle, and it is the sentence to take away from this chapter:\n\n**Security and safety culture should be understood separately, but in practice should not be treated separately.**\n\nRead the chapter with that sentence in mind. Everything Jore does is explain why both halves of it hold."
      }
    ]
  },
  {
    "id": "kern2",
    "titel": "Core material: chapter 5",
    "blokken": [
      {
        "type": "tekst",
        "titel": "5.1 In Amenas: the facts",
        "toetsstof": true,
        "tekst": "The chapter opens with a case you need to know.\n\nOn **16 January 2013** the largest terrorist attack in the history of the oil and gas industry took place, at the Algerian oil facility **In Amenas**. Thirty-two heavily armed terrorists attacked the installation, where almost **800 employees** were present. Many were taken hostage in a siege lasting **four days**, in the middle of the Algerian desert. The terrorists killed **40 people from 10 countries**, among them **five employees of Statoil**, the Norwegian state oil company now called Equinor.\n\nAfterwards, Statoil set up an **investigation committee** to establish the relevant chain of events and to enable Statoil to improve its security, risk assessment and crisis preparedness.\n\nThe conclusion of the investigation report: Statoil had put a **security risk management system** in place, but the company’s overall **capacity and culture** needed strengthening in order to respond to security risks in volatile and complex environments. The report described **security culture** as an important explanatory factor behind the outcome of the attack, and as an important instrument for improving security."
      },
      {
        "type": "waarschuwing",
        "tekst": "**Why that one sentence carries the whole chapter**\n\nNotice what the report does. It uses security culture in **two ways at once**:\n\n1. as an **explanation** of what went wrong (it was lacking, hence the outcome),\n2. as a **solution** for the future (build it, and things will go better).\n\nThat is a heavy load for a concept to carry. If you partly explain an attack with forty deaths by the absence of something, and then instruct companies to build that something, you had better know precisely what it is and how to measure it. And that is exactly where it pinches, as chapter 1 already announced: the concept is applied with little technical support."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Why security culture suddenly turned up everywhere**\n\nFor many companies, malicious threats such as terrorism form a **new context**. Managing such threats is often called \"security\", in contrast to \"safety\", which refers to managing risks **not** caused by actors intending to do harm.\n\nWith that new responsibility for security in the private sector, new management concepts and instruments have emerged to help organisations fulfil that role: **security risk management systems, security risk analysis, and security culture**.\n\nWhat all these concepts have in common: they all have their **counterpart in safety management**, and are now being adopted and applied to the security domain.\n\nBut, Jore warns immediately, transferring concepts to a new area is not necessarily unproblematic. Compared with safety, security is a relatively young academic field, and \"security culture\" is a term that appears **rarely in the literature**.\n\nEven so, the recommendation in the Statoil report has led to strongly increased attention for security culture in the petroleum sector. According to a 2015 study, **half** of the Norwegian petroleum companies studied actively applied security culture as a means of security improvement."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**The questions of the chapter**\n\nSafety and security are both elements of **organisational culture**. How, then, should organisations relate to this new concept of security culture?\n\nJore asks three questions:\n\n1. How **adequate** is the concept of security culture?\n2. What **relationship** exists between safety culture and security culture?\n3. Should the two be seen as a **duality** or as **separate**?\n\nAdequacy is discussed through the way the concept is used in the In Amenas report, with **Gerring’s criteria for conceptual goodness** as the yardstick."
      },
      {
        "type": "tekst",
        "titel": "5.2 The real distinction: malicious intent",
        "toetsstof": true,
        "tekst": "If security culture is to be seen as something other than safety culture, you first need to know what the domains of safety and security involve, and where they touch.\n\nIn everyday use, \"safety\" and \"security\" both evoke associations of freedom from threat and harm. Although they are often treated as synonyms, they also carry different meanings. They are often used to distinguish between managing hazards without malicious intent (safety) and managing threats from rational people **with** malicious intent, such as sabotage, hacking or terrorism (security).\n\nAnd now comes the move that sets Jore apart from Blokland and Reniers. She argues:\n\n**It is malicious intent that distinguishes safety from security, and not intentionality as such, because intentionality plays a role in safety too.**\n\nHer argument runs in three steps:\n\n1. The organisational safety literature has long recognised that accidents are not random, but the result of insufficient resources, organisation and planning.\n2. Human **intention** sometimes plays a role in causing accidents: employees sometimes **deliberately** deviate from standard procedures. Organisations have to design robust measures that take that into account.\n3. It follows that **criminal behaviour does not belong to security alone**. Safety also involves rational actors who knowingly break rules, for instance through drug use or by not wearing protective equipment.\n\nConclusion: **neither intentionality nor criminality** is sufficient to distinguish safety from security. The difference must therefore lie in the **malicious intent of an actor who genuinely means to cause harm**."
      },
      {
        "type": "uitleg",
        "tekst": "**Why this is a sharper axis than the one in chapter 1**\n\nChapter 1 gave you the intentionality axis: did someone do it on purpose? Jore shows that axis is too coarse.\n\nTake an employee who deliberately does not wear safety goggles because he finds them irritating. That is intentional. It is even a violation. But it is not security, because he does not want to **harm anyone**. He just wants rid of the goggles.\n\nTake an employee who deliberately does not wear them in order to cause an accident and hurt the company. Same action, but now it is security.\n\nThe difference lies not in \"on purpose\" but in \"on purpose in order to harm\". That is the precision Jore adds. Remember it as: **intent is not enough, it is about intent to harm.**"
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Two properties of security that change everything**\n\nJore names two features of security that make the domain fundamentally different from safety.\n\n**First:** security is often threatened by **external threats** that generally lie beyond organisations’ ability to know and handle fully. You can know your own plant in detail. You cannot know the plans of a terrorist group.\n\n**Second:** such risks are **not as directly coupled to profit and the production system** as safety risks are. An accident on the shop floor hits your production and your costs directly. An attack is far more loosely connected to them.\n\nFrom that follows a hard observation: **even a company with an optimal security culture can still become the target of a terrorist attack and suffer great damage.**\n\nAnd then the critical question with which Jore closes the section: a hostage situation or terrorist attack is an event of **extremely low probability**. Is it then meaningful to apply the concept of culture to such extreme events, in the same way as in safety?"
      },
      {
        "type": "voorbeeld",
        "tekst": "**Why culture works differently for rare events**\n\nSafety culture works partly because there is **feedback**. A plant has small incidents, near misses and reports every month. A culture that responds well to them sees the effect: fewer incidents, better reporting. The culture learns from its own data.\n\nWith a terrorist attack that feedback is absent. Most companies never experience one. You can have a beautiful security culture for ten years and never know whether it makes any difference, because nothing ever happens. And if something does happen, one event is too little to judge a culture by.\n\nThat is the core of Jore’s doubt. Culture is an instrument that learns from repetition. For an individual organisation, terrorism almost never repeats."
      },
      {
        "type": "tekst",
        "titel": "5.3 What the report actually says about security culture",
        "toetsstof": true,
        "tekst": "The Statoil report concluded that Statoil had **not developed a culture** in which it was generally recognised that security was everyone’s shared responsibility, and that a **holistic approach** to security management was lacking.\n\nConcretely:\n\n- Security was **not organised as a corporate function independent of safety**.\n- Security was **not recognised in its own distinctive characteristics**.\n- There was a lack of **management involvement**.\n- Security was generally **not well understood** within the organisation.\n\nThe ability to understand and respond to changes in the environment was, according to the committee, characteristic of companies with a strong security culture. Such companies share five features (table 5.1 in the book):"
      },
      {
        "type": "stappen",
        "items": [
          {
            "titel": "Hands-on security leadership",
            "tekst": "with access to top management and the ability to drive the security agenda throughout the company."
          },
          {
            "titel": "High and clearly stated ambitions",
            "tekst": "for the security capacity, which is treated as a **discipline separate from safety**, with clear goals and dedicated professionals."
          },
          {
            "titel": "Sufficient capacity and competence",
            "tekst": "to identify and respond to the security challenges the company faces."
          }
        ]
      },
      {
        "type": "tekst",
        "tekst": "4. A **holistic approach** to managing security risks, as an integrated part of core processes and deliveries.\n5. **Transparent, inclusive, active and authoritative risk management processes**, run by an organisation able to identify and act on potential threats.\n\nJore accepts that the way the committee uses the concept, and its recommendations, match the common understanding of how you build a security culture. But the recommendation to build a security culture **separate from safety** may be more problematic than it seems. If organisations put resources into building a strong security culture, such programmes ought to rest on a **scientific foundation**.\n\nHence the question: how does the concept of security culture hold up under scientific scrutiny?"
      },
      {
        "type": "waarschuwing",
        "tekst": "**See the tension inside the five features themselves**\n\nLook again at features 2 and 4. Feature 2 says: treat security as a **discipline separate from safety**. Feature 4 says: approach security **holistically, as an integrated part of core processes**.\n\nThat is not necessarily contradictory, but it is the tension the whole book is about, in a single table. Separate as a discipline, integrated as a practice. And that is exactly where Jore ends up: understand separately, treat together."
      },
      {
        "type": "tekst",
        "titel": "5.4 The yardstick: Gerring’s eight criteria",
        "toetsstof": true,
        "tekst": "According to **Gerring** (1999), concepts are crucial for the functioning and development of science. Conceptual adequacy should be seen as an attempt to satisfy **eight criteria** (table 5.2):"
      },
      {
        "type": "tabel",
        "kop": [
          "Criterion",
          "Question"
        ],
        "rijen": [
          [
            "**Familiarity**",
            "How familiar is the concept to different audiences?"
          ],
          [
            "**Resonance**",
            "Does the chosen term ring true?"
          ],
          [
            "**Parsimony**",
            "How concise are the term and its list of defining attributes?"
          ],
          [
            "**Coherence**",
            "How internally consistent are the instances and attributes?"
          ],
          [
            "**Differentiation**",
            "How differentiated are the instances and attributes from those of neighbouring concepts?"
          ],
          [
            "**Depth**",
            "How many accompanying properties are shared by the instances covered by the definition?"
          ],
          [
            "**Theoretical utility**",
            "How useful is the concept within a wider field of inferences?"
          ],
          [
            "**Field utility**",
            "How useful is the concept within a field of related instances and attributes?"
          ]
        ],
        "noot": "These eight criteria are the structure of the rest of the chapter. Section 5.5 does the first two, 5.6 the middle four, 5.7 the last two."
      },
      {
        "type": "slimmer",
        "tekst": "**Use this list yourself**\n\nThese eight criteria are a tool you can use for the rest of your degree. Every time you meet a buzzword – resilience, mindfulness, safety leadership, zero trust – you can run it past these eight questions.\n\nYou will notice that many concepts score high on the first two (everybody knows them, they sound right) and low on the middle four (nobody knows exactly what they mean or how they differ from the neighbouring concept). That is exactly the pattern Jore finds for security culture."
      },
      {
        "type": "tekst",
        "titel": "5.5 Familiarity and resonance: high",
        "toetsstof": true,
        "tekst": "Security today involves more than technical solutions and physical protection; it is about managing threats from **rational, strategic actors**. A component covering perception, shared understanding and the management of threats therefore looks like a welcome contribution to the field. For that reason security culture **seems** a promising instrument for improving corporate security.\n\nThe degree to which a new concept is \"logical\" or intuitively clear depends, according to Gerring, largely on how far it fits with, or clashes with, established usage in everyday language and within a specialised language community.\n\n**Safety culture** is a well-established concept, familiar to lay people, professionals and academics. The Statoil report described security culture as a common set of beliefs, attitudes, practices and behaviours that are perceived, internalised and shared across geographical units and levels. That definition matches how organisational culture, safety culture and security culture are often defined.\n\nThe term \"safety culture\" was first used as an explanatory factor in the investigation after the **Chernobyl** nuclear disaster in **1986**. Since then, safety culture has been seen across several sectors as crucial for preventing accidents. Although the term and the methods for measuring and achieving it remain contested, the concept is broadly accepted and applied as a contributing factor to organisational safety.\n\nBy leaning on the connotations of that established concept, security culture suggests that security **too** can be achieved with the same instruments.\n\n**Verdict:** security culture is familiar and resonates well. Two of the eight criteria met."
      },
      {
        "type": "tekst",
        "titel": "5.6 Parsimony, coherence, differentiation and depth: low",
        "toetsstof": true,
        "tekst": "Now the four criteria where it goes wrong.\n\n**The concept is new and the literature is thin.** Although the report’s definition, understanding and recommendations connect to existing theoretical perspectives, the concept is new in the academic literature. The literature on security culture is small compared with the enormous body of research and the diverse perspectives on safety culture. It has mainly been developed within the **nuclear, chemical and aviation industries**, building on existing theories from safety culture research. With a few exceptions, little has been written about how to achieve an optimal security culture.\n\nThe consequence: security culture **lacks clear indicators or attributes, is poorly defined and operationalised, and lacks research connecting security to organisational performance**.\n\n**The definitions are sector-bound and threat-bound.** Existing definitions of security culture are tied to a specific sector, and often to a specific threat. Most work using the term concerns **information security**, not sabotage or terrorism. The literature therefore fails to account for the **polysemy** of the security field: the fact that security means many different things.\n\nIt follows that security culture is **not an overarching phenomenon** covering every possible security threat. Although all security threats are crimes, their modus operandi, target selection and motivation differ enormously, and they have to be tackled in very different ways."
      },
      {
        "type": "voorbeeld",
        "tekst": "**Why one culture does not cover all threats**\n\nA data breach through a phishing email, an angry ex-employee sabotaging a pump, and an armed raid on a drilling platform are all three security. All three are crimes.\n\nBut the culture that prevents the first (not clicking links, taking passwords seriously) has nothing to do with the culture that prevents the second (recognising the signals of a colleague going off the rails) and even less with the third (knowing where to go under attack and how to shield information about the location).\n\nThat is what Jore means by polysemy. If \"security culture\" has to cover all three, it no longer means anything specific. If it covers one, it is not an overarching concept. It is one or the other."
      },
      {
        "type": "tekst",
        "tekst": "**The biggest problem: differentiation from neighbouring concepts.** Perhaps the greatest challenge with the term is how it relates to and differs from similar terms such as **organisational culture** and **safety culture**.\n\nMost of the academic literature using the term argues for a holistic perspective and holds that security culture should be seen as an **integrated part of safety culture**. When the attributes of security culture are defined, they are often **described in the same way as safety culture**, without the specific characteristics of security being taken into account.\n\nThat makes the concepts hard to tell apart, theoretically and practically. The theoretical perspectives on security culture do not explain the relations between organisational, safety and security culture, and leave the fundamental questions unanswered: **is security culture a subculture of safety culture or of organisational culture, and what relationship exists between them?**"
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**A legal sting in the tail**\n\nFor companies in the petroleum sector, the differences and overlap between safety and security culture have real consequences.\n\nUnder the Norwegian **Petroleum Framework Regulation** (article 15), companies are obliged to build a **safety culture**. If security culture is seen as a **subculture of safety culture**, that means companies are **legally obliged** to build a security culture too.\n\nThat is a neat example of how an apparently academic question (is it a subculture?) has direct legal consequences (is it mandatory?). Exactly what chapter 1 warned about: many requirements come from policy and law, not from science."
      },
      {
        "type": "tekst",
        "titel": "5.7 Theoretical and field utility: mixed",
        "toetsstof": true,
        "tekst": "Concepts are the building blocks of all theoretical structures. How does security culture sit within the wider science of security?\n\nHere Jore makes an observation about the whole security field that you need to know. With a few exceptions, the security field **lacks theories about organisational security**. Most of the literature consists of **normative theories** about how to achieve security, without building on research. The reason: security has traditionally been connected to **the military and the police**, and was therefore regarded as **classified material**.\n\nThe concept of security culture is rarely used, and the academic literature describing the core elements of security science does **not even mention** it. There are therefore no studies describing how to build a security culture and how it fits within corporate security.\n\nAnd yet, Jore says, security culture could be a **promising contribution** to the literature, because security science is moving **towards softer measures** such as awareness, mindfulness and resilience. A concept like security culture could act as a **unifying concept** for how corporate security management is carried out.\n\nThe condition: to be useful for theory building, theoretical development is needed based on **empirical studies** of the role of security culture and how it influences security in organisations."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**What is needed: drawing boundaries**\n\nTo advance theoretical development, it is important to establish relations with neighbouring concepts such as safety culture. If the definitions overlap heavily, the phenomena become hard to distinguish, and the newer literature attempting to operationalise the concept uses **the same descriptions, attributes and indicators**.\n\nThere is therefore a need to **articulate the overlap and the boundaries** of the concepts. In addition, it should be investigated whether a good safety culture is a **precondition** for a good security culture, and the other way round."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**What is not transferable: just culture and weak signals**\n\nIn practice every organisation has a culture, or a set of subcultures, which you would expect to influence safety and security. But it is not necessarily beneficial simply to transfer theories and concepts from safety to security. Many aspects of the use of the term are **not directly transferable** to a security context. Jore gives three examples that form the heart of her objection.\n\n**Just culture.** What does a \"just culture\" mean in the context of security, when the attacker has malicious intent? Just culture is the safety principle that you may report errors without punishment, because the organisation learns more from openness than from fear. But that principle assumes the person who made the error meant no harm. With a saboteur that assumption is nonsense. This touches the possibility of **transparency and openness outside trusted circles**.\n\n**Everyone committed to security.** The report states that Statoil should have a culture in which every employee is committed to security. But is that possible, or even desirable? Does a security culture mean being **suspicious** of colleagues and others? And is **distrust** not at odds with building a safety culture?\n\n**Weak signals.** Detecting and learning from weak signals, a core idea from safety, is problematic when perpetrators are **strategic** and have no interest in revealing their plans."
      },
      {
        "type": "uitleg",
        "tekst": "**Why these are three versions of the same problem**\n\nAll three examples come down to the same thing, and it is one of the most important insights of the book as a whole.\n\nSafety culture is built on **trust and openness**. Report your errors, share what you see, learn together. That works because nothing in the system is against you. Gravity, fatigue and wear have no agenda.\n\nSecurity presupposes an **adversary**. And as soon as there is an adversary, openness can be used against you, trust can be abused, and the adversary hides the very signals you would want to pick up.\n\nSo if you transfer safety culture to security, you transfer its **engine**, trust, into a context where that engine is the vulnerability. That is not a detail you fix with a good definition. It is a structural difference, the same one chapter 1 labelled as openness versus confidentiality."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**In practice: used, but without effect on the organisation**\n\nTheoretical discussions are often abstract and belong in academic circles. But the adequacy of security culture has practical relevance, because the concept is not only a theoretical term but also a **pragmatic instrument** introduced in several petroleum companies after the In Amenas report was published.\n\nA study of the use of the term by Norwegian petroleum companies concluded that, although half of the companies used the term, that use appeared to have **no direct influence on how they organised their security system**. The companies rejecting the concept gave as their reason the **difficulty of separating security culture from safety culture**.\n\nThere is therefore a practical need to **operationalise** security culture. But safety research already tells us that culture in an organisational context covers almost everything an organisation does, which makes the impact of culture on safety hard to measure. The same holds for security culture.\n\nMoreover, safety research contains a debate about the relation between culture and **what actually happens** in organisations. The fact that the concept of safety culture is itself contested makes transferring perspectives from safety to security difficult."
      },
      {
        "type": "voorbeeld",
        "tekst": "**Using a term without changing anything**\n\nThe finding from that Norwegian study is a classic you will meet in any organisation. Half the companies say \"we are working on security culture\". But if you look at how they have arranged their security, it does not differ from the companies that never use the term.\n\nThat means the term functions as a **label**, not as an **instrument**. You stick it on what you were doing anyway. That is a risk with any popular concept: it gives the impression of change without the change itself.\n\nFor you as a future adviser, the question is therefore not \"does this organisation use the concept\" but \"what does this organisation do differently since it started using the concept\". If the answer is \"nothing\", you have your finding."
      },
      {
        "type": "tekst",
        "titel": "5.8 Conclusions",
        "toetsstof": true,
        "tekst": "Jore draws four conclusions, and they do not all point the same way. That is precisely why you need all four.\n\n**Conclusion 1: the concept is needed.** There is undoubtedly a need for the concept of security culture in today’s threat landscape. In complex and volatile environments such as In Amenas, companies should introduce systems that generate awareness of external threats and offer ways of dealing with them. For such threats, **clear tactical warnings**, with specific information about where, when and how an adversary may attack, will **rarely occur**. Organisations must therefore aim for **resilience against multiple threats**, including low-probability security scenarios. Those are all arguments for a strong organisational culture with a collective **security mindfulness** that seeks out weak signals and strives for resilience.\n\n**Conclusion 2: the concept is poorly demarcated, but that is no reason to reject it.** Although security culture looks superficially like a promising avenue, its operationalisation and demarcation are so imprecise that using the concept can be **counterproductive**. But, and this is the twist: the same can be said of safety culture, so that is not an argument for rejecting the concept.\n\n**Conclusion 3: in practice a duality.** From a practical point of view an organisation has to deal with safety risks **and** security risks; both influence the organisational culture. From a practical perspective there is therefore a need to see these concepts as a **duality** and not as separate phenomena. Security threats have a different dynamic from safety risks, and because of that security is often **neglected** in organisations. That is the advantage of the concept of security culture: it makes security a **priority and a shared responsibility**.\n\n**Conclusion 4: it will grow more important, not less.** As digitalisation increases in every sector and more digital assets are connected to the internet, organisations will have to increase their attention to security threats, with the **cultural component** playing an important role, because **technical solutions will not be sufficient**. Security culture should therefore be developed further as a theoretical and a practical element. Security science is moving towards softer measures such as awareness, mindfulness and resilience, all of them important components of security culture."
      },
      {
        "type": "waarschuwing",
        "tekst": "**The formula from the abstract, once more**\n\nJore sums it up herself in one sentence, which also appears in the abstract:\n\n**Security and safety culture should be understood separately, but must not be treated as separate in practice.**\n\nBoth halves are supported. Understand separately, because malicious intent, external threat, low probability and the unusability of just culture and weak signals show that this really is something else. Do not treat separately, because an organisation has only one culture, because both kinds of risk influence that culture, and because a separate security culture turns out in practice to be inseparable from safety culture.\n\nThat is not fence-sitting. It is the only position that does justice to both findings."
      },
      {
        "type": "tekst",
        "tekst": "**Key concepts from chapter 5**"
      },
      {
        "type": "begrippen",
        "items": [
          {
            "begrip": "In Amenas",
            "definitie": "Algerian gas facility where on 16 January 2013 thirty-two terrorists began a four-day siege; 40 people from 10 countries were killed, among them five Statoil employees. The largest terrorist attack in the history of the oil and gas industry."
          },
          {
            "begrip": "Statoil",
            "definitie": "Norwegian state oil company, now Equinor, which set up the investigation committee whose report identified security culture as an explanatory factor and as a solution."
          },
          {
            "begrip": "Security culture",
            "definitie": "A common set of beliefs, attitudes, practices and behaviours around security, shared across units and levels. Familiar and resonant, but poorly defined, operationalised and demarcated."
          },
          {
            "begrip": "Safety culture",
            "definitie": "The established counterpart concept, first used as an explanatory factor after Chernobyl in 1986. Broadly accepted, but itself contested in definition and measurement."
          },
          {
            "begrip": "Malicious intent",
            "definitie": "According to Jore the real distinction between safety and security. Not intent as such, since deliberate rule-breaking occurs in safety too, but the intention to cause harm."
          },
          {
            "begrip": "Conceptual adequacy",
            "definitie": "The degree to which a concept satisfies Gerring’s eight criteria: familiarity, resonance, parsimony, coherence, differentiation, depth, theoretical utility, field utility."
          },
          {
            "begrip": "Polysemy",
            "definitie": "The phenomenon of one word carrying many different meanings. Security covers information security, sabotage, terrorism and more, with very different modus operandi and motives."
          },
          {
            "begrip": "Just culture",
            "definitie": "The safety principle that errors can be reported without punishment so the organisation learns. According to Jore not transferable to security, because the attacker is malicious."
          },
          {
            "begrip": "Weak signals",
            "definitie": "Small early indications that safety work seeks out in order to prevent accidents. Problematic in security, because strategic perpetrators deliberately hide their plans."
          },
          {
            "begrip": "Security mindfulness",
            "definitie": "The collective alertness to external threats that Jore advocates, aimed at seeking out weak signals and at resilience."
          },
          {
            "begrip": "Resilience",
            "definitie": "An organisation’s ability to withstand multiple threats and recover, including low-probability scenarios; according to Jore the aim for threats without clear tactical warning."
          },
          {
            "begrip": "Duality",
            "definitie": "Jore’s conclusion about the relation between safety and security culture: two sides of the same organisational culture, to be understood separately but not treated separately."
          },
          {
            "begrip": "Petroleum Framework Regulation",
            "definitie": "Norwegian regulation obliging petroleum companies to build a safety culture; if security culture is a subculture of it, that obligation extends to security as well."
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
        "titel": "Assessing a concept with Gerring, in eight steps",
        "items": [
          {
            "titel": "Familiarity.",
            "tekst": "Do the people who have to use the concept know it? If so, from where? Often from a neighbouring concept, and that is a risk in itself."
          },
          {
            "titel": "Resonance.",
            "tekst": "Does it sound right, does it fit existing usage? Careful: this is a superficial criterion, and it is exactly where buzzwords score high."
          },
          {
            "titel": "Parsimony.",
            "tekst": "Can you define the concept in one sentence with a short list of attributes? If not, it probably covers too much."
          },
          {
            "titel": "Coherence.",
            "tekst": "Do all the cases falling under it belong together? For security culture: do phishing, sabotage and terrorism fit under one culture?"
          },
          {
            "titel": "Differentiation.",
            "tekst": "What sets the concept apart from its neighbours? If the attributes are literally the same as the neighbouring concept’s, you do not have a new concept but a new label."
          },
          {
            "titel": "Depth.",
            "tekst": "Do the cases share more than just the defining attributes? The richer the shared properties, the more useful the concept."
          },
          {
            "titel": "Theoretical utility.",
            "tekst": "Can you predict or explain anything with it, within a broader theory? Are there empirical studies linking the concept to outcomes?"
          },
          {
            "titel": "Field utility.",
            "tekst": "Does the concept help practitioners do their work differently? Or do they use it as a label for what they were already doing?"
          }
        ]
      },
      {
        "type": "oefening",
        "id": "h5-oef-1",
        "niveau": "basis",
        "vraag": "Explain why Jore argues that intentionality is not sufficient to distinguish safety from security, and which criterion she puts in its place.",
        "antwoord": "Jore points out that intention plays a role within safety too. The organisational safety literature has long recognised that accidents are not random and that employees sometimes deliberately deviate from procedures, for instance through drug use or by not wearing protective equipment. That is intentional and sometimes even criminal, but it is not security, because the employee does not want to harm anyone. Neither intentionality nor criminality is therefore sufficient as a distinguishing criterion. The distinction lies, she argues, in the malicious intent of an actor who genuinely means to cause harm. That is sharper than the intentionality axis of chapter 1: not \"did someone do it on purpose\" but \"did someone do it on purpose in order to harm\". The practical consequence: the same action, such as not wearing safety goggles, falls under safety or security depending on the aim of the person doing it."
      },
      {
        "type": "oefening",
        "id": "h5-oef-2",
        "niveau": "basis",
        "vraag": "Walk through Gerring’s eight criteria for security culture and give Jore’s verdict on each in one sentence.",
        "antwoord": "Familiarity: high, because it leans on the well-known concept of safety culture. Resonance: high, the term sounds logical and fits established usage. Parsimony: low, the concept lacks clear indicators and attributes and is poorly defined. Coherence: low, because existing definitions are sector- and threat-bound and the literature ignores the polysemy of security, so phishing, sabotage and terrorism do not sit coherently under one concept. Differentiation: low, and according to Jore the biggest problem, because the attributes of security culture are described in the same way as those of safety culture and the relation to organisational and safety culture is left unanswered. Depth: low, there is hardly any research linking security culture to organisational performance. Theoretical utility: potentially present, since security science is moving towards softer measures and could use a unifying concept, but not yet realised for lack of empirical studies. Field utility: limited, since half the Norwegian petroleum companies use the term without it influencing how they arrange their security, and the other half reject it because it cannot be separated from safety culture."
      },
      {
        "type": "oefening",
        "id": "h5-oef-3",
        "niveau": "gevorderd",
        "vraag": "Jore argues that just culture is not transferable to security. Work out why, and connect it to the transparency problem from chapter 1.",
        "antwoord": "Just culture is a safety principle that lets employees report errors and near misses without fear of punishment, because the organisation learns more from openness than from concealment. The principle assumes the person who made the error acted in good faith and that the organisation as a whole benefits from sharing the information. In security the adversary is malicious by definition. A saboteur who reports his \"error\" does not exist, and information about vulnerabilities you share openly reaches the attacker. Openness, the engine of just culture, thereby becomes a vulnerability. Jore formulates this as a limit on transparency and openness outside trusted circles. This is exactly the third tension from chapter 1: safety strives for maximum openness, security may demand confidentiality, and those two information regimes collide structurally. The consequence for security culture is that you cannot adopt one of the most powerful instruments of safety culture, and that a security culture nonetheless built on openness makes the organisation more vulnerable rather than safer."
      },
      {
        "type": "oefening",
        "id": "h5-oef-4",
        "niveau": "gevorderd",
        "vraag": "Jore concludes that safety and security culture should be understood separately but not treated separately. Is that a contradiction? Support your answer with both halves of her argument.",
        "antwoord": "It is not a contradiction, because \"understanding\" and \"treating\" concern different things. Understanding separately concerns the analysis: security is distinguished by malicious intent, is threatened from outside by parties you cannot know, is loosely coupled to profit and production, involves events of extremely low probability, and does not permit safety instruments such as just culture and learning from weak signals. Anyone ignoring that and treating security culture as a copy of safety culture ends up with a concept without distinguishing power, exactly the deficiency Gerring's differentiation criterion exposes. Not treating separately concerns practice: an organisation has one culture or a set of subcultures, both kinds of risk influence that culture, and companies that tried to build a separate security culture ran aground because they could not detach it from safety culture. Moreover, security is often neglected in organisations, and the practical advantage of the concept is precisely that it makes security a priority and a shared responsibility within the existing culture. The two halves therefore complement each other: distinguish sharply in your analysis, so you know which instruments are and are not transferable, and then integrate into one organisational culture, because in practice there is no second culture to house it in."
      }
    ]
  },
  {
    "id": "checken",
    "titel": "Check yourself",
    "blokken": [
      {
        "type": "quiz",
        "titel": "Check yourself on chapter 5",
        "vragen": [
          {
            "vraag": "What happened at In Amenas on 16 January 2013?",
            "opties": [
              "A gas leak with dozens of deaths",
              "A terrorist attack by 32 armed men with a four-day siege, 40 dead from 10 countries",
              "A cyberattack on the control system of the installation",
              "A strike that turned violent"
            ],
            "juist": 1,
            "uitleg": "The largest terrorist attack in the history of the oil and gas industry, with five Statoil employees among the dead."
          },
          {
            "vraag": "In which two ways did the Statoil report use the concept of security culture?",
            "opties": [
              "As a definition and as a measuring instrument",
              "As an explanatory factor behind the outcome and as an instrument for improving security",
              "As a legal obligation and as a financial item",
              "As a subculture of safety culture and as an independent discipline"
            ],
            "juist": 1,
            "uitleg": "Explanation and solution at once. That is a heavy load for a concept that barely appears in the literature."
          },
          {
            "vraag": "What, according to Jore, is the real distinction between safety and security?",
            "opties": [
              "Intentionality",
              "Whether a crime has been committed",
              "Malicious intent: the intention to cause harm",
              "Whether the threat comes from inside or outside"
            ],
            "juist": 2,
            "uitleg": "Intent and criminality occur in safety too, for instance with an employee who knowingly breaks rules without wanting to harm anyone."
          },
          {
            "vraag": "Which of the following is NOT a feature of a strong security culture according to the Statoil report?",
            "opties": [
              "Hands-on security leadership with access to top management",
              "Security treated as a discipline separate from safety",
              "A reporting system entirely separated from safety",
              "A holistic approach as part of the core processes"
            ],
            "juist": 2,
            "uitleg": "The five features are leadership, ambitions as a separate discipline, capacity and competence, a holistic approach, and transparent risk management processes."
          },
          {
            "vraag": "After which disaster was safety culture first used as an explanatory factor?",
            "opties": [
              "Bhopal 1984",
              "Chernobyl 1986",
              "Piper Alpha 1988",
              "Deepwater Horizon 2010"
            ],
            "juist": 1,
            "uitleg": "Since then safety culture has been seen across sectors as crucial for accident prevention, although its definition and measurement remain contested."
          },
          {
            "vraag": "On which two of Gerring’s criteria does security culture score high?",
            "opties": [
              "Parsimony and coherence",
              "Familiarity and resonance",
              "Differentiation and depth",
              "Theoretical utility and field utility"
            ],
            "juist": 1,
            "uitleg": "The concept is familiar and sounds logical because it leans on safety culture. That is also where the risk sits: it suggests the same instruments will work."
          },
          {
            "vraag": "What does Jore call the greatest challenge for the concept of security culture?",
            "opties": [
              "That it is too technical",
              "That it is not differentiated from organisational culture and safety culture",
              "That it is too expensive to implement",
              "That it is only used in Norway"
            ],
            "juist": 1,
            "uitleg": "Its attributes are described in the same way as those of safety culture, and the question whether it is a subculture remains unanswered."
          },
          {
            "vraag": "Why is most security research normative rather than empirical, according to Jore?",
            "opties": [
              "Because security is too new to research",
              "Because security traditionally belonged to the military and the police and was regarded as classified",
              "Because companies will not share data",
              "Because no journals exist for it"
            ],
            "juist": 1,
            "uitleg": "As a result the field lacks theories of organisational security, and the literature on security science does not even mention the concept of security culture."
          },
          {
            "vraag": "Why is just culture not transferable to security, according to Jore?",
            "opties": [
              "Because security has no errors",
              "Because the principle assumes openness and good faith, while the attacker is malicious",
              "Because security does not use reporting systems",
              "Because just culture legally applies only to safety"
            ],
            "juist": 1,
            "uitleg": "Openness is the engine of just culture, and in a security context that very openness becomes a vulnerability."
          },
          {
            "vraag": "What did the study of Norwegian petroleum companies using security culture find?",
            "opties": [
              "They had fewer incidents",
              "Using the term had no direct influence on how they organised their security system",
              "They had set up a separate security department",
              "They had all abandoned safety culture"
            ],
            "juist": 1,
            "uitleg": "The term functioned as a label, not as an instrument. Companies that rejected it said the reason was that it could not be separated from safety culture."
          },
          {
            "vraag": "Why is the poor demarcation of security culture not a reason to reject the concept, according to Jore?",
            "opties": [
              "Because the concept is legally required",
              "Because safety culture has exactly the same shortcomings and is still widely used",
              "Because there is no alternative",
              "Because the petroleum sector has already introduced it"
            ],
            "juist": 1,
            "uitleg": "Anyone rejecting security culture on grounds of imprecise demarcation would have to reject safety culture on the same grounds."
          },
          {
            "vraag": "What is Jore’s final conclusion about the relation between safety and security culture?",
            "opties": [
              "They are identical and should be merged",
              "They are completely separate and should be organised apart",
              "They should be understood separately but not treated separately in practice",
              "Security culture should replace safety culture"
            ],
            "juist": 2,
            "uitleg": "Understood separately because of malicious intent and non-transferable instruments; not treated separately because an organisation has only one culture."
          }
        ]
      },
      {
        "type": "bronnen",
        "items": [
          {
            "apa": "Jore, S. H. (2020). Security and safety culture: Dual or distinct phenomena? In C. Bieder & K. Pettersen Gould (Eds.), The coupling of safety and security (pp. 43–51). Springer."
          },
          {
            "apa": "Gerring, J. (1999). What makes a concept good? A criterial framework for understanding concept formation in the social sciences. Polity, 31(3), 357–393."
          },
          {
            "apa": "Jore, S. H. (2017). The conceptual and scientific demarcation of security in contrast to safety. European Journal for Security Research, 1–18."
          },
          {
            "apa": "Jore, S. H. (2017). Security culture: A sufficient explanation for a terrorist attack? In Risk, Reliability and Safety: Proceedings of ESREL 2016 (pp. 467–474). CRC Press."
          },
          {
            "apa": "Statoil ASA (2013). The In Amenas attack: Report of the investigation into the terrorist attack on In Amenas."
          },
          {
            "apa": "Antonsen, S. (2017). Safety culture: Theory, method and improvement. CRC Press."
          },
          {
            "apa": "Hopkins, A. (2006). Studying organisational cultures and their effects on safety. Safety Science, 44(10), 875–889."
          },
          {
            "apa": "Larsen, C. I., & Østensjø, C. (2015). Operatørselskapene i petroleumssektoren sitt syn på sikringskultur. Master’s thesis, University of Stavanger."
          },
          {
            "apa": "Malcolmson, J. (2009). What is security culture? Does it differ in content from general organisational culture? IEEE Carnahan Conference on Security Technology, 361–366."
          },
          {
            "apa": "Van Nunen, K., Sas, M., Reniers, G., Vierendeels, G., Ponnet, K., & Hardyns, W. (2018). An integrative conceptual framework for physical security culture in organisations. Journal of Integrated Security Science, 2(1), 25–32."
          }
        ]
      },
      {
        "type": "preview",
        "titel": "From culture to the user",
        "tekst": "Jore looks at the organisation from the inside. In chapter 6 Bongiovanni turns the camera around and looks from the traveller who has to pass through security at the airport.",
        "punten": [
          "Why the legal and managerial perspectives dominate airport security",
          "What an end-user perspective and design methods can add",
          "How to spend less on loss prevention and deliver more value to users"
        ]
      }
    ]
  }
];
LESSTOF["intro-to-safety-security/h6"] = [
{ id: "voor", titel: "Voorbereiding", blokken: [
{ type: "leerdoelen", items: ["Het dilemma van risicomanagement uitleggen dat Bongiovanni als vertrekpunt neemt, en wat \"eternal killjoys\" betekent", "Uitleggen waarom kritieke infrastructuren safety en security in twee aparte functies hebben georganiseerd, en waarom dat volgens de literatuur niet meer volstaat", "Definiëren wat een safety- en securityervaring is en waarom een eindgebruikersperspectief in dit veld ongebruikelijk is", "De drie fasen van design thinking volgens Liedtka noemen en per fase de instrumenten beschrijven", "Een stakeholdermap, een user-persona en een user-journey map uitleggen en zelf opstellen", "De twee ideatielenzen derive en utilize uitleggen en toepassen", "De drie benaderingen van luchthavensafety en -security (juridisch, managerial, design) op alle zeven dimensies vergelijken", "De beperkingen van het model benoemen die Bongiovanni zelf aangeeft"] },
{ type: "uitleg", titel: "Wie is Bongiovanni en wat is dit voor hoofdstuk", tekst: "**Ivano Bongiovanni** werkt aan de University of Queensland in Brisbane, Australië. Zijn promotieonderzoek ging over de kwetsbaarheid van Australische luchthavens voor safety- en securityverstoringen. Hij is dus iemand die de luchthaven van binnenuit kent, en vervolgens iets ongewoons doet: hij pakt methoden uit de **designwereld** en past die toe op beveiliging.\n\nHet hoofdstuk hoort bij de **technisch-methodologische** invalshoek van het boek, maar de methode is compleet anders dan die van Leveson (systeemtheorie) of Wipf (speltheorie). Design thinking is geen wiskunde. Het is een gestructureerde manier om vanuit de **gebruiker** te denken.\n\nHet is ook het kortste inhoudelijke hoofdstuk van het boek, en het meest praktisch. Je krijgt hier instrumenten die je in een projectgroep morgen kunt gebruiken." },
{ type: "slimmer", titel: "Waar dit hoofdstuk past in het geheel", tekst: "Hoofdstuk 1 zei dat het meeste onderzoek over safety en security gaat over **engineering** en over **concepten**, en nauwelijks over hoe mensen het in de praktijk ervaren. Bongiovanni vult precies dat gat, maar dan vanuit een onverwachte hoek: niet de medewerker, maar de **passagier**.\n\nZijn stelling in één zin: safety en security worden op luchthavens bekeken door een **juridische** bril en een **managementbril**, en er ontbreekt een derde bril, die van de **gebruiker**. Tabel 6.2 aan het eind van het hoofdstuk zet die drie brillen naast elkaar. Die tabel is het belangrijkste wat je uit dit hoofdstuk moet meenemen." },
{ type: "tekst", titel: "Het dilemma waarmee het hoofdstuk opent", toetsstof: true, tekst: "Bongiovanni begint zijn abstract met wat hij een **onontkoombaar organisatorisch dilemma** van risicomanagement noemt. Lees het twee keer, want alles in het hoofdstuk hangt eraan.\n\n**Als risicomanagement effectief is**, gebruikt het organisatiemiddelen om grotere schade te vermijden. Je geeft geld uit en er gebeurt niets, wat precies de bedoeling was.\n\n**Als risicomanagement niet effectief is**, voegt het kosten toe aan risico's die toch niet beheerst worden. Je geeft geld uit en er gebeurt alsnog iets.\n\nIn beide gevallen zie je vooral **kosten**. Wat je niet ziet is **waarde**. En dat botst met de groeiende druk om **tastbare waarde te leveren aan eindgebruikers**.\n\nSafety- en securitymanagement richten zich op het beperken van risico's van safety- of securityaard. Dit hoofdstuk bouwt een **op design gebaseerd raamwerk** om de toekomst van safety en security in een luchthavensecurityomgeving opnieuw te bedenken, en stelt een methode voor om tastbare, positieve waarde voor eindgebruikers te leveren. De focus ligt op luchthavensecurity, waar **externe gebruikers een safety- en securityervaring beleven**." },
{ type: "uitleg", titel: "Waarom dit dilemma zo hardnekkig is", tekst: "Denk aan een brandweercommandant die om budget vraagt. Zijn beste argument is: \"Vorig jaar is er niets gebeurd.\" Maar dat is precies wat de wethouder gebruikt om te bezuinigen: \"Er gebeurt nooit iets, waarom kost het zoveel?\"\n\nPreventie heeft een **bewijsprobleem**. Het succes is onzichtbaar, want het succes is dat er niets is. Alleen de kosten zijn zichtbaar.\n\nBongiovanni wil dat probleem niet oplossen door beter uit te leggen wat je voorkomt. Hij wil het oplossen door safety en security ook iets **positiefs** te laten opleveren, zodat het niet alleen kosten zijn. Dat is een fundamenteel andere strategie, en het is de reden dat hij naar de gebruiker kijkt." }
] },
{ id: "kern", titel: "Kernstof", blokken: [
{ type: "tekst", titel: "6.1 Inleiding: de systemische blik en wat die mist", toetsstof: true, tekst: "Ondanks hun traditionele conceptuele scheiding binnen het domein van risico, ervaren safety- en securitymanagement op organisatieniveau **steeds meer functionele verbindingen**.\n\nSynergieën tussen safety en security zijn in de literatuur verkend vanuit een **systemisch perspectief**, met als uiteindelijk doel het beter beschermen van **kritieke infrastructuren** (Critical Infrastructures, CI's) tegen onbedoelde én bedoelde gebeurtenissen. Dat kan door de kwetsbaarheid te verlagen, door de verdediging te verbeteren, of allebei.\n\nMaar: **organisatiestudies die zich richten op de eindgebruiker** van de safety- en securityervaring zijn **minder gebruikelijk**. Daarom stelt Bongiovanni een conceptueel raamwerk voor dat een eindgebruikersperspectief in safety en security opneemt. Het uiteindelijke doel is het leggen van de fundamenten voor het **innoveren** van de safety- en securityervaring in kritieke infrastructuren." },
{ type: "tekst", titel: "6.2 Achtergrond: waarom twee aparte functies ontstonden", toetsstof: true, tekst: "In moderne organisaties worden safety en security vaak beschouwd als twee aparte sets van vraagstukken. Kritieke infrastructuren zijn buitengewoon gevoelig voor de kans op en de gevolgen van verstoringen van hun operatie. In hun risicomanagement hebben de meeste CI's een ongekende mate van **granulariteit en specialisatie** ontwikkeld rond safety en security. Dat heeft geleid tot het ontstaan van **twee aparte organisatiefuncties**.\n\nDe typische kenmerken en organiserende principes daarvan zijn in de literatuur beschreven (Pettersen & Bjørnskau, 2015, het artikel dat in bijna elk hoofdstuk terugkomt). Ze komen voort uit de ontologie zelf van safety en security, gedefinieerd door de **afwezigheid of aanwezigheid van kwaadwillende intentie** achter de risico's. Dat is exact de as die Jore in hoofdstuk 5 aanscherpte." },
{ type: "tekst", titel: "Waarom de scheiding niet meer volstaat", toetsstof: true, tekst: "Safety en security zijn **systemische eigenschappen**. Hun nette scheiding was een geldige aanpak voor risicomanagement in tijden waarin systemen vooral uit **elektromechanische onderdelen** bestonden. Dat is precies het argument van Leveson uit hoofdstuk 3, en Bongiovanni citeert haar hier ook.\n\nModerne systemen worden echter steeds meer gebouwd als een combinatie van subsystemen, waarbij **emergente eigenschappen** vaak onvoorspelbaar zijn. Het bewijs daarvoor is de toenemende relevantie van de **cyberaspecten** van safety (in mindere mate) en security (het merendeel), naast hun traditionele fysieke aard.\n\nVerschillende onderzoeken concluderen dat er behoefte is aan een **holistischer** benadering van safety en security. In het bijzonder: het negeren van de aard van de oorzaken van systemische ongevallen (kwaadwillend versus accidenteel) en het focussen op **constraints** die zouden voorkomen dat systemen kwetsbaar zijn voor safety- én securityongevallen. Ook dit is Leveson, letterlijk.\n\nEen holistische benadering moet worden gebouwd rond de **gemeenschappelijkheden** tussen safety en security, en daarvoor zijn in de literatuur verschillende opties voorgesteld (Piètre-Cambacédès & Bouissou, 2013)." },
{ type: "voorbeeld", titel: "Wat een emergente eigenschap is", tekst: "Een emergente eigenschap is iets wat het geheel heeft, maar geen van de delen. Water is nat, maar een waterstofatoom en een zuurstofatoom zijn dat niet.\n\nOp een luchthaven: het bagagesysteem werkt, de screening werkt, de boarding werkt. Maar als de screening vertraging oploopt, stapelen passagiers zich op in een ruimte die daar niet voor is ontworpen, en ontstaat er een gedrangrisico dat in geen van de drie subsystemen bestond. Dat risico is emergent.\n\nZolang systemen simpel waren, kon je ze deel voor deel beoordelen. Nu niet meer. Dat is waarom Bongiovanni, net als Leveson, zegt dat je naar het geheel moet kijken. Zijn eigen bijdrage: het geheel omvat ook de **mens die erdoorheen loopt**." },
{ type: "tekst", titel: "Vier kenmerken die het hoofdstuk uitwerkt", toetsstof: true, tekst: "Bongiovanni bouwt voort op vier kenmerken uit die holistische literatuur:\n\n**(a)** een **strategisch** standpunt over safety en security,\n**(b)** een **missiegedreven** benadering,\n**(c)** aandacht voor een **brede groep stakeholders**,\n**(d)** **co-design** van safety en security in complexe, sociotechnische systemen.\n\nDaarnaast wil het hoofdstuk een **uitweg** bieden uit een van de meest dwingende dilemma's van safety- en securitymanagement als onderdeel van organisatorisch risicomanagement: processen die veel middelen vergen om **gebeurtenissen met hoge impact en lage waarschijnlijkheid** te voorkomen, en die gewoonlijk **geen tastbare, positieve waarde** voor gebruikers opleveren buiten het voorkómen van verlies.\n\nPiètre-Cambacédès en Bouissou noemden safety en security daarom **\"eternal killjoys\"**: eeuwige spelbrekers. Ze zeggen altijd nee, ze kosten altijd tijd, en ze leveren nooit iets leuks op. Dat is de term uit de samenvatting in hoofdstuk 1, en dit is waar hij vandaan komt." },
{ type: "tekst", titel: "Het kernbegrip: de safety- en securityervaring", toetsstof: true, tekst: "Om die uitweg te vinden, werkt Bongiovanni het begrip **safety- en securityervaring** uit:\n\n**De combinatie van organisatiebeleid en -management en systeemkenmerken (mens, technologie, enzovoort) rond safety en security, zoals \"beleefd\" door eindgebruikers.**\n\nLet op het woord \"beleefd\" (lived). Het gaat niet om wat de organisatie **doet** aan safety en security, maar om wat de gebruiker daarvan **merkt en voelt**. Voor de passagier is de screening niet een set procedures maar een ervaring: wachten, schoenen uit, een bak, een portaal, iemand die je tas openmaakt.\n\nOm een holistisch perspectief op safety- en securityervaringen te configureren dat **waarde oplevert voor gebruikers**, kiest Bongiovanni een **designperspectief**." },
{ type: "tekst", titel: "Design thinking als methode", toetsstof: true, tekst: "Bongiovanni postuleert de geschiktheid van **design thinking** als methodologie om safety en security te innoveren als een holistische gebruikerservaring. Hij geeft vier redenen:\n\n1. Door **problem-framing en re-framing** pakt design thinking problemen aan die, zoals safety en security, **meerdere perspectieven** kennen, typisch voor complexe systemen.\n2. Design thinking is een **leergedreven, mensgerichte** benadering, geschikt om gedragsverandering en menselijke factoren vorm te geven.\n3. Het benut de kracht van **samenwerking** tussen teams en van stakeholderbetrokkenheid om **individuele cognitieve biases** te verminderen.\n4. Het synthetiseert de behoeften van gebruikers met wat **technologisch haalbaar** en **economisch levensvatbaar** is, om gebruikerswaarde op te leveren. Dat is de klassieke definitie van Tim Brown uit de Harvard Business Review.\n\nHij neemt het raamwerk van **Jeanne Liedtka (2015)** over, in drie fasen:\n\n- **(A) Data verzamelen** over gebruikersbehoeften\n- **(B) Ideeën genereren**\n- **(C) Testen**\n\nEn hij bouwt voort op onderzoek naar safety- en securitymanagement op internationale luchthavens in **Australië**, zijn eigen eerdere werk." },
{ type: "uitleg", titel: "Wat \"problem-framing en re-framing\" betekent", tekst: "Framing is de manier waarop je een probleem formuleert. En de formulering bepaalt welke oplossingen je ziet.\n\nFrame 1: \"Hoe krijgen we passagiers sneller door de screening?\" Oplossingen: meer lanes, snellere scanners, strengere instructies.\n\nFrame 2: \"Hoe maken we de screening minder stressvol?\" Oplossingen: betere informatie vooraf, vriendelijkere medewerkers, minder onzekerheid over wat er komt.\n\nFrame 3: \"Hoe zorgen we dat passagiers de screening als waardevol ervaren?\" Oplossingen: nu wordt het interessant, en nu kom je bij wat Bongiovanni voorstelt.\n\nRe-framing is het bewust wisselen tussen die formuleringen. Design thinking dwingt je daartoe. Traditioneel risicomanagement zit vast in frame 1." },
{ type: "tekst", titel: "6.3 Design-led innovatie: het uitgangspunt", toetsstof: true, tekst: "Designgeïnspireerde methoden vragen om het **heroverwegen van de betekenis van dingen** en om verder te kijken dan wat we er gewoonlijk mee doen (Verganti, 2009).\n\nOp luchthavens zijn safety en security traditioneel georganiseerd rond **wettelijke eisen die in een managementcontext worden geïmplementeerd**. Een van de meest gebruikelijke plekken voor luchthavensecurity zijn de **security screening points**, waar passagiers worden verzocht verboden voorwerpen af te staan en door röntgenportalen moeten lopen terwijl hun bagage wordt gescand.\n\nBongiovanni erkent dat safety en security verschillende betekenissen en toepassingen hebben afhankelijk van de betrokken stakeholders en de locatie, maar hij richt zich op de screeningpunten als **de plek waar externe gebruikers** (passagiers en algemeen publiek) hun safety- en securityervaring beleven.\n\nAanname: de designmethoden worden toegepast in een **teamsetting**, met deelnemers zoals designers, luchthavenmanagers en passagiers, die de opdracht hebben de safety- en securityervaring te verbeteren." },
{ type: "tekst", titel: "Fase A: Data verzamelen over gebruikersbehoeften", toetsstof: true, tekst: "**Stap 1: de stakeholdermap.** Een stakeholdermap van de safety- en securityervaring op luchthavens zou de **externe gebruikers in het centrum** plaatsen, omringd door een systeem van actoren: schoonmakers, luchtvaartmedewerkers, winkelpersoneel, safety- en securityfunctionarissen, enzovoort. Al die actoren dragen bij aan het vormgeven van de safety- en securityervaring van gebruikers.\n\nHet erkennen van de **verscheidenheid en specificiteit van gebruikerscategorieën** is een van de grondbeginselen van design thinking en een kerncomponent van het bouwen van een positieve ervaring. Dat staat in scherp contrast met traditionele luchthavensafety en -security, die externe gebruikers **als één brede categorie** beschouwt, met weinig tot geen ruimte voor maatwerk." },
{ type: "waarschuwing", titel: "Dit is het punt waar het traditionele model breekt", tekst: "In de wet en in het management is een passagier een passagier. Iedereen dezelfde regels, dezelfde screening, dezelfde rij. Dat heet gelijkheid en het heeft goede redenen, onder meer dat je niet wilt dat een aanvaller een \"makkelijke categorie\" kan uitkiezen.\n\nMaar vanuit de ervaring bekeken bestaat \"de passagier\" niet. Er is de bange oma en de gehaaste zakenvrouw, en die beleven exact dezelfde procedure totaal anders. Design thinking begint bij dat verschil. Alles wat volgt, persona's, journey maps, ideatie, is een manier om dat verschil bruikbaar te maken zonder de gelijke behandeling in de procedure zelf los te laten." },
{ type: "tekst", tekst: "**Stap 2: user-persona's.** User-persona maps vatten categorieën gebruikers samen in **beknopte maar diepe** representaties. Ze kunnen worden gemaakt op basis van data uit **interviews** met passagiers die security screening ondergaan. Bongiovanni geeft twee voorbeelden, en die moet je kennen omdat ze door het hele hoofdstuk terugkomen.\n\n**Alfred (64).** Empathisch, prijsbewust en gezinsgericht. Een incidentele reiziger die eens per jaar naar zijn dochter in het buitenland vliegt. Hij heeft een oprechte passie voor het leren van nieuwe dingen. Risicomijdend: Alfred houdt ervan als hij en zijn gezin zich veilig voelen. Hij heeft er geen moeite mee om kleine \"papercuts\" te verdragen, zoals bureaucratie en tijdverlies, als het uiteindelijke doel veiligheid is. Hij praat graag met mensen, ook met de securitymedewerkers bij de screening. Hij is fan van de tv-serie \"Airport Security\", omdat hij de orde en vastberadenheid bewondert die daarin worden getoond.\n\n**Wendy (41).** Een gedreven zakenvrouw: punctueel, vastberaden, carrièregericht. Wendy heeft geen tijd te verliezen. Bewust single, marketingmanager, reist twee keer per week voor haar werk. Slim en succesvol, ze kan niet zonder haar mobiele telefoon. Wendy ervaart security als een **ergernis** en maakt soms ruzie met de securitymedewerkers. Ze snapt niet waarom luchthavensecurity zo omslachtig is, aangezien er de laatste tijd geen terreuraanslagen zijn geweest. Ze zou liever wat extra tijd besteden aan werken of winkelen dan aan wachten bij de security.\n\n**Stap 3: user-journey mapping.** Zodra voldoende gebruikerscategorieën zijn bekeken, wordt **user-journey mapping** gebruikt om de **touchpoints** in kaart te brengen waardoor de safety- en securityervaring wordt beleefd. Dat kan interactie zijn met specifieke producten (digitale technologie), mensen (medewerkers) of diensten (het schoonmaken van de vloer bij de screening).\n\nUser-journey maps helpen de bestaande gebruikerservaring te visualiseren om **empathie** met gebruikers op te bouwen, en leggen zo de basis voor verbetering. Belangrijk is het identificeren van de touchpoints die de ervaring het **meest** bepalen.\n\nVoor Alfred onderscheidt Bongiovanni vijf fasen: 1. Oriëntatie (research), 2. Aankoop, 3. Voorbereiding, 4. Transfer, 5. Security screening. Elk wordt afgezet tegen wat Alfred **voelt** en **doet**:" },
{ type: "tabel", kop: ["Fase", "Wat Alfred voelt", "Wat Alfred doet (touchpoints)"], rijen: [["Oriëntatie", "\"Security is een serieuze zaak.\" \"Er is zoveel informatie, het is overweldigend.\"", "Vraagt familie en vrienden om een goed reisbureau. Kiest er een en gaat langs. Krijgt alle safety-, security- en douane-informatie van de reisagent."], ["Aankoop", "\"Ik kan niet wachten om cadeaus voor mijn dochter te kopen!\"", "Koopt een stevige, veilige koffer. Koopt cadeaus die veilig vervoerd kunnen worden."], ["Voorbereiding", "\"Als ik vroeg begin met inpakken, voel ik me meer ontspannen en geniet ik meer van mijn reis.\"", "Pakt in. Print alle documenten: ticket, reisinformatie, terreurwaarschuwingen."], ["Transfer", "\"Als ik dingen overhaast, voel ik me gestrest en dat is geen prettig gevoel.\"", "Neemt ruim de tijd voor de security screening. Leest zoveel mogelijk borden over het securityproces. Checkt zo vroeg mogelijk in."], ["Security screening", "\"Dit proces is zo fascinerend.\" \"Ik ben echt nieuwsgierig naar security screening.\"", "Leest alle aanwijzingen. Bereidt zich ruim van tevoren voor. Praat met de medewerkers en vraagt informatie. Ondergaat de screening."]] },
{ type: "tekst", tekst: "*Tabel 6.1 uit het boek. Merk op dat de screening zelf pas de vijfde fase is: de ervaring begint thuis, weken eerder.*\n\nAlfreds journey map verschilt duidelijk van die van Wendy. Dat suggereert dat hun safety- en securityervaringen **verschillend ontworpen** moeten worden.\n\n**Stap 4: painpoints.** Na het bekijken van de journey maps kunnen **painpoints** worden geïdentificeerd, die het startpunt vormen voor verbeteringsinspanningen. In deze fase zijn **gebruikersinterviews** essentieel om rijkere kwalitatieve inzichten te produceren." },
{ type: "voorbeeld", titel: "Wendy's journey map, die Bongiovanni niet uitschrijft", tekst: "Het boek geeft alleen Alfreds map. Maak zelf die van Wendy, als oefening, want het contrast is de hele les.\n\nOriëntatie: doet ze niet, ze weet het al. Aankoop: online, in twee minuten, tussen twee vergaderingen. Voorbereiding: één handbagage die altijd klaarstaat. Transfer: zo laat mogelijk, taxi tot de deur. Security screening: \"Waarom staat die man mijn laptop nog een keer te scannen.\" Telefoon in de hand tot het laatste moment. Ergernis, soms een woordenwisseling.\n\nZelfde procedure, zelfde luchthaven, zelfde medewerkers. Totaal andere ervaring. Alfreds painpoint is te veel informatie. Wendy's painpoint is tijd. Een verbetering voor de een (meer uitleg) is een verslechtering voor de ander." },
{ type: "tekst", titel: "Fase B: Ideeën genereren", toetsstof: true, tekst: "Om het bedenken van innovatieve ideeën te vergemakkelijken, stelt Bongiovanni voor om verschillende **gestructureerde ideatielenzen** te gebruiken (Recker & Rosemann). Kortheidshalve beschrijft hij er twee.\n\n**Lens 1: Derive (afleiden).** Andere industrieën of bedrijven verkennen op zoek naar **vergelijkbare problemen**, en bestaande oplossingen voor die problemen identificeren om er inspiratie uit af te leiden. Derive vereist het vermogen om echte oplossingen onder te dompelen in een context waar ze niet vandaan komen. Google noemt dit in zijn Design Sprint Kit het \"Comparable Problem\".\n\nHet voorbeeld: Wendy gaat meerdere keren per week door de screening. Dat is, zoals de literatuur aangeeft (Redden, 2013), een **stressvolle ervaring** voor passagiers, met mogelijke gevolgen voor gezondheid en veiligheid. Hoe zou een bedrijf als **Amazon** een stressvrije ervaring bieden op een van zijn meest krappe touchpoints? Amazon verzamelt zoveel mogelijk klantinformatie om persoonlijkere diensten te bieden. Dat zou kunnen suggereren dat safety- en securitymedewerkers hun houding aanpassen aan Wendy, als ze wisten dat zij een vastberaden persoon is die geen tijd wil verspillen bij de screening.\n\n**Lens 2: Utilize (benutten).** Focussen op de **onderbenutte assets** in een industrie, bedrijfsmodel of gebruikerservaring, en originele manieren bedenken om hun onbenutte potentieel te gebruiken.\n\nHet voorbeeld: Alfred, de incidentele reiziger, bij de screening. Welke **ongebruikte assets** zou het luchthavenmanagement beter willen benutten? De **klantfeedback** die veel luchthavens aan het eind van de screening vragen is een voorbeeld om de gevoelens en tijd van de passagier te benutten. Alfred vindt het interessant en praat graag; die tijd en die belangstelling zijn nu een ongebruikt bezit.\n\n**Filteren.** Het uiteindelijke doel van gestructureerde ideatie is om **zoveel mogelijk ideeën** te produceren en ze aan alle deelnemers te presenteren, om de samenwerking te behouden. Maar om de ideegeneratie vruchtbaar te maken, moet een **beperkt aantal** oplossingen worden gefilterd op haalbaarheid, potentiële impact, winstgevendheid, enzovoort. Dat kan in één of meerdere rondes, door deelnemers te laten **stemmen** op een of meer winnende ideeën." },
{ type: "waarschuwing", titel: "Het Amazon-voorbeeld heeft een scherpe rand", tekst: "Bongiovanni presenteert het Amazon-idee als inspiratie, maar denk even door wat het betekent: **securitymedewerkers die hun gedrag aanpassen op basis van een profiel van de passagier**.\n\nDat raakt direct aan drie dingen die je in dit vak leert. Privacy: wie beheert dat profiel? Gelijke behandeling: mag een \"vastberaden\" passagier een andere behandeling krijgen dan een \"nerveuze\"? En security zelf: als het profiel bepaalt hoe streng je wordt gecontroleerd, dan is het profiel het nieuwe doelwit van de aanvaller.\n\nBongiovanni werkt dat niet uit. Jij moet het wel kunnen benoemen. Een designidee dat de gebruikerservaring verbetert kan de securitywaarde verlagen. Dat is geen reden om het idee weg te gooien, het is een reden om het te toetsen, en precies daar gaat fase C over." },
{ type: "tekst", titel: "Fase C: Testen", toetsstof: true, tekst: "Testen betekent **experimenteren** met de oplossingen die het meest haalbaar zijn en het meest bijdragen aan praktische impact.\n\nTer vereenvoudiging neemt Bongiovanni aan dat de deelnemers een **speciale security screening-app** hebben bedacht, **SecScreenApp**, met Wendy als doelgebruiker. De app zou het volgende kunnen doen:\n\n- Een **locatiegebaseerde melding** sturen als de gebruiker het screeninggebied binnenkomt, met verzoek om activering.\n- **Informatie** geven over het screeningproces: geschatte wachttijd, geschatte tijd tot de gate, enzovoort.\n- Informatie bieden over de laatste **aanbiedingen in de duty free**, met de mogelijkheid om producten of diensten te reserveren voor later (een kapper, een koffie bij een specifiek café).\n- Een **interactief feedbackformulier** bevatten voor vóór en na de screening.\n- De gebruiker **waarschuwen wanneer de telefoon weg moet**, omdat de screening nadert.\n\nEen **storyboard** geeft een weergave van de stappen in de nieuw ontworpen ervaring, en stelt deelnemers in staat te bepalen welke fasen met gebruikers **getest** moeten worden en welke zonder test kunnen worden **geprototypet**. Figuur 6.1 in het boek toont zo'n storyboard voor SecScreenApp." },
{ type: "voorbeeld", titel: "Kijk wat de app eigenlijk doet", tekst: "Loop de vijf functies nog eens langs en let op wat ze voor Wendy oplossen.\n\nWachttijd en tijd tot de gate: haar grootste painpoint is onzekerheid over tijd. Nu weet ze het. De duty free-aanbiedingen en het reserveren van een koffie: haar wachttijd wordt omgezet in iets wat ze wél wil, en de luchthaven verdient eraan. De waarschuwing om de telefoon weg te doen: ze komt niet meer in conflict met de medewerker die zegt dat ze haar telefoon moet opbergen. Het feedbackformulier: haar ergernis krijgt een uitlaatklep die niet de medewerker is.\n\nMerk op wat de app **niet** doet: hij verandert niets aan de screening zelf. De scanners, de regels, de controle blijven identiek. Alleen de ervaring eromheen verandert. Dat is precies de belofte van Bongiovanni: waarde toevoegen zonder de beveiliging aan te tasten. Of dat lukt, moet de test uitwijzen, en daar is hij zelf eerlijk over." },
{ type: "tekst", titel: "6.4 Discussie: de drie benaderingen naast elkaar", toetsstof: true, tekst: "Bongiovanni gebruikte design thinking om de safety- en securityervaring van externe gebruikers van luchthavens te verkennen en voorwaarden te scheppen om die te innoveren, met de screening als specifiek voorbeeld. Data verzamelen, ideeën genereren en testen zijn allemaal fundamentele fasen.\n\nMaar, zegt hij, **safety- en securityprofessionals helpen hun gebruikers beter te kennen** is misschien wel de belangrijkste prioriteit. Een gebruikersgerichte benadering van safety en security is **geen natuurlijk perspectief**. Safety en security zijn zelden de kernactiviteit van organisaties.\n\nDe benadering sluit aan bij oproepen in de literatuur voor een holistisch perspectief dat de sterke punten van beide benut voor wederzijds voordeel. Bongiovanni omarmt een **gebruikersgericht perspectief**, wat een verschuiving betekent ten opzichte van de traditionele **juridische en managementoverwegingen**. Tabel 6.2 zet die drie benaderingen naast elkaar, en dit is de belangrijkste tabel van het hoofdstuk:" },
{ type: "tabel", kop: ["", "Juridische benadering", "Managementbenadering", "Designbenadering"], rijen: [["**Focus**", "De wet", "Middelen en doelen", "Gebruikers"], ["**Missie**", "Nul onbedoelde ongevallen (safety); nul bedoelde incidenten (security)", "Risico's efficiënt beperken", "Gebruikers verrukken (delight)"], ["**Drijfveer voor innovatie**", "Veranderingen in maatschappelijke praktijken doen regelgeving veranderen", "Veranderingen in regelgeving, bedrijfsdoelen en budget doen managementpraktijken veranderen", "Veranderingen in gebruikersbehoeften en \"jobs to be done\" veranderen het ervaringsontwerp"], ["**Leidende innovator**", "De wetgever", "De verlichte manager", "De user experience designer"], ["**Bron van innovatie**", "Top-down", "Top-down en bottom-up", "Bottom-up"], ["**Safety en security gescheiden of gecombineerd?**", "Gescheiden: twee verschillende regimes", "Gescheiden of gecombineerd, afhankelijk van middelen en doelen", "Gecombineerd: beide zijn componenten van de gebruikerservaring"], ["**Overkoepelende vraag**", "\"We moeten voldoen aan specifieke normen voor safety- en securitygebeurtenissen op de luchthaven\"", "\"We moeten voldoen aan regelgeving én de meest efficiënte mix van middelen inzetten én onze bedrijfsdoelen halen\"", "\"We moeten safety en security een gedenkwaardige ervaring maken voor onze gebruikers\""]], noot: "Leer de rijen \"focus\", \"gescheiden of gecombineerd\" en \"overkoepelende vraag\" uit je hoofd. Daarmee kun je de drie benaderingen in elke casus herkennen." },
{ type: "uitleg", titel: "Waarom deze tabel het antwoord is op de vraag van het hele boek", tekst: "Kijk naar de rij \"gescheiden of gecombineerd\". De vraag die het hele boek stelt, moeten safety en security samen of apart, krijgt hier een verrassend antwoord: **het hangt af van vanuit welke bril je kijkt**.\n\nJuridisch zijn het twee regimes, want er zijn twee sets wetten en twee soorten toezichthouders. Dat is een feit, geen mening.\n\nManagerial hangt het af van middelen en doelen. Een grote luchthaven kan twee afdelingen betalen, een kleine niet.\n\nVanuit de gebruiker zijn ze **per definitie gecombineerd**, want de passagier maakt geen onderscheid. Die loopt door één rij, langs één portaal, en ervaart één ding.\n\nDus het antwoord op \"samen of apart\" is niet ja of nee. Het is: bepaal eerst welke vraag je stelt. Dat is een volwassener antwoord dan de meeste hoofdstukken geven." },
{ type: "tekst", titel: "De beperkingen die Bongiovanni zelf noemt", toetsstof: true, tekst: "Voortbouwend op het samenwerkingsperspectief van design thinking is **brede stakeholderbetrokkenheid** opgenomen in de aanpak. En het leveren van een **gedenkwaardige** safety- en securityervaring beantwoordt aan de oproep om het dilemma van risicomanagement te overwinnen: een functie die middelen gebruikt om verliezen te voorkomen in plaats van tastbare waarde te creëren.\n\nMaar Bongiovanni is eerlijk over drie beperkingen:\n\n1. Het conceptuele en methodologische model is **nog niet getest** op een luchthaven.\n2. Vanuit generaliseerbaarheid suggereert het model een toepassing op luchthavens; de geschiktheid voor **andere kritieke infrastructuren** moet nog worden getoetst. Wel laat onderzoek zien dat een gebruikersgerichte benadering in veel omgevingen bruikbaar is.\n3. Het model is **complementair**, geen vervanging: het voegt een gebruikersgericht perspectief toe naast het juridische en managementperspectief dat luchthavens traditioneel hanteren.\n\nDe kernboodschap: een aanvullend, gebruikersgericht perspectief op safety en security, naast de juridische en managementbenadering. Die concepten kunnen worden uitgebreid naar andere CI's, bijvoorbeeld **elektriciteitsonderstations, treinstations, of bij grote evenementen stadions**, om een innovatieve benadering van safety en security mogelijk te maken die **verder gaat dan loss prevention**." },
{ type: "begrippen", titel: "Kernbegrippen uit hoofdstuk 6", items: [{ begrip: "Dilemma van risicomanagement", definitie: "Effectief risicomanagement kost middelen en levert onzichtbaar succes; ineffectief risicomanagement kost middelen en levert alsnog schade. In beide gevallen is alleen de kostenkant zichtbaar." }, { begrip: "Eternal killjoys", definitie: "Term van Piètre-Cambacédès en Bouissou voor safety en security als functies die veel middelen vergen voor gebeurtenissen met hoge impact en lage waarschijnlijkheid, en geen positieve waarde opleveren buiten loss prevention." }, { begrip: "Kritieke infrastructuur (CI)", definitie: "Systemen zoals luchthavens, energienetten en stations die buitengewoon gevoelig zijn voor de kans op en de gevolgen van verstoringen." }, { begrip: "Safety- en securityervaring", definitie: "De combinatie van organisatiebeleid, management en systeemkenmerken rond safety en security zoals beleefd door eindgebruikers." }, { begrip: "Emergente eigenschap", definitie: "Kenmerk van een systeem als geheel dat niet in de afzonderlijke subsystemen aanwezig is en vaak onvoorspelbaar is; de reden dat moderne systemen holistisch moeten worden bekeken." }, { begrip: "Design thinking", definitie: "Leergedreven, mensgerichte methode die door problem-framing en re-framing complexe problemen aanpakt, samenwerking gebruikt om biases te verminderen, en gebruikersbehoeften verbindt met wat technisch haalbaar en economisch levensvatbaar is." }, { begrip: "Liedtka's drie fasen", definitie: "Data verzamelen over gebruikersbehoeften, ideeën genereren, testen." }, { begrip: "Stakeholdermap", definitie: "Weergave van alle actoren rond de gebruiker die de ervaring mede vormgeven: schoonmakers, luchtvaartpersoneel, winkelmedewerkers, safety- en securityfunctionarissen." }, { begrip: "User-persona", definitie: "Beknopte maar diepe representatie van een gebruikerscategorie, gebouwd op interviewdata; in dit hoofdstuk Alfred en Wendy." }, { begrip: "User-journey map", definitie: "Weergave van de touchpoints waarlangs een ervaring wordt beleefd, afgezet tegen wat de gebruiker voelt en doet per fase." }, { begrip: "Touchpoint", definitie: "Contactmoment tussen gebruiker en product, persoon of dienst dat de ervaring mede bepaalt." }, { begrip: "Painpoint", definitie: "Knelpunt in de gebruikerservaring dat als startpunt dient voor verbetering." }, { begrip: "Derive", definitie: "Ideatielens waarbij je oplossingen uit andere industrieën voor vergelijkbare problemen naar je eigen context overbrengt." }, { begrip: "Utilize", definitie: "Ideatielens waarbij je onderbenutte assets in een bedrijfsmodel of ervaring identificeert en nieuw benut." }, { begrip: "Storyboard", definitie: "Stapsgewijze weergave van een nieuw ontworpen ervaring, om te bepalen wat getest moet worden en wat direct geprototypet kan worden." }, { begrip: "Jobs to be done", definitie: "Het onderliggende doel waarvoor een gebruiker een product of dienst \"inhuurt\"; in de designbenadering de drijfveer voor innovatie." }] }
] },
{ id: "toepassen", titel: "Toepassen", blokken: [
{ type: "stappen", titel: "Een safety- en securityervaring herontwerpen, in acht stappen", items: [{ titel: "Bepaal de locatie van de ervaring.", tekst: "Waar beleeft de externe gebruiker safety en security? Op een luchthaven de screening; op een station de poortjes en de perrons; in een stadion de toegangscontrole." }, { titel: "Teken de stakeholdermap met de gebruiker in het midden.", tekst: "Wie raakt de ervaring allemaal aan? Vergeet de schoonmaker en het winkelpersoneel niet; die worden altijd vergeten." }, { titel: "Bouw minstens twee contrasterende persona's op basis van interviews.", tekst: "Niet één \"gemiddelde gebruiker\" maar twee die elkaars tegenpool zijn, zoals Alfred en Wendy. Het contrast is je informatie." }, { titel: "Maak per persona een journey map.", tekst: "Fasen van vóór de aankomst tot na de controle, met per fase wat de gebruiker voelt en doet. Markeer de touchpoints die de ervaring het sterkst bepalen." }, { titel: "Identificeer painpoints, per persona apart.", tekst: "Verwacht dat ze verschillen en soms tegengesteld zijn. Dat is geen probleem maar de kern van je ontwerpopgave." }, { titel: "Genereer ideeën met derive en utilize.", tekst: "Welke industrie heeft dit probleem al opgelost? Welke asset ligt hier ongebruikt: tijd, aandacht, feedback, ruimte?" }, { titel: "Filter met stemmen op haalbaarheid, impact en winstgevendheid.", tekst: "Voeg zelf een vierde criterium toe dat Bongiovanni niet noemt: verandert dit idee de securitywaarde? Zo ja, dan hoort het niet door de filter zonder aparte toets." }, { titel: "Maak een storyboard en bepaal wat je test.", tekst: "Welke stappen kun je prototypen zonder gebruikers, en welke moet je met echte gebruikers testen? Test altijd de stappen die de beveiliging raken." }] },
{ type: "oefening", id: "h6-oef-1", niveau: "basis", vraag: "Leg het dilemma van risicomanagement uit waarmee Bongiovanni begint, en leg uit hoe zijn benadering daar een uitweg voor wil bieden.", antwoord: "Het dilemma is dat risicomanagement in beide gevallen alleen kosten laat zien. Is het effectief, dan gebruikt het middelen om grotere schade te vermijden, maar het resultaat is dat er niets gebeurt en dat is onzichtbaar. Is het niet effectief, dan zijn de middelen uitgegeven en treedt de schade alsnog op. Piètre-Cambacédès en Bouissou noemen safety en security daarom eternal killjoys: functies die veel vergen om zeldzame maar ernstige gebeurtenissen te voorkomen en geen tastbare waarde opleveren buiten loss prevention. Dat botst met de groeiende druk op organisaties om waarde te leveren aan eindgebruikers. Bongiovanni's uitweg is niet om het succes van preventie beter uit te leggen, maar om safety en security zelf iets positiefs te laten opleveren. Hij definieert daarvoor de safety- en securityervaring zoals beleefd door de gebruiker, en gebruikt design thinking om die ervaring te herontwerpen zodat ze waarde toevoegt, bijvoorbeeld door informatie, tijdwinst of diensten die de wachttijd nuttig maken. De beveiliging blijft gelijk; wat verandert is dat de gebruiker er iets aan overhoudt, waardoor de functie niet langer alleen kosten is." },
{ type: "oefening", id: "h6-oef-2", niveau: "basis", vraag: "Beschrijf de drie fasen van Liedtka en noem per fase de instrumenten die Bongiovanni gebruikt.", antwoord: "Fase A is data verzamelen over gebruikersbehoeften. Instrumenten: een stakeholdermap met de externe gebruiker in het centrum en alle actoren eromheen; user-persona's die gebruikerscategorieën samenvatten op basis van interviews, zoals Alfred en Wendy; user-journey maps die per fase van de reis de touchpoints, gevoelens en handelingen in kaart brengen; en het identificeren van painpoints met behulp van aanvullende interviews. Fase B is ideeën genereren. Instrumenten: gestructureerde ideatielenzen, waarvan Bongiovanni er twee beschrijft: derive, het overbrengen van oplossingen uit andere industrieën voor vergelijkbare problemen, met Amazon als voorbeeld; en utilize, het benutten van onderbenutte assets, met de klantfeedback als voorbeeld. Daarna filteren op haalbaarheid, impact en winstgevendheid door te stemmen. Fase C is testen. Instrumenten: een concreet prototype zoals de SecScreenApp met vijf functies, en een storyboard dat de stappen van de nieuwe ervaring weergeeft en bepaalt welke stappen met gebruikers getest moeten worden en welke direct geprototypet kunnen worden." },
{ type: "oefening", id: "h6-oef-3", niveau: "gevorderd", vraag: "Het Amazon-voorbeeld suggereert dat securitymedewerkers hun houding aanpassen aan een profiel van de passagier. Beoordeel dit idee vanuit alle drie de benaderingen uit tabel 6.2 en geef aan welke toets het idee zou moeten doorstaan.", antwoord: "Vanuit de designbenadering is het idee aantrekkelijk: Wendy's painpoint is tijdverlies en ergernis, en een medewerker die weet dat zij vastberaden en gehaast is, kan haar sneller en met minder wrijving door de screening helpen. Dat verrukt de gebruiker, wat de missie van deze benadering is. Vanuit de juridische benadering is het problematisch: de wet vereist gelijke behandeling en specifieke normen voor screening, en een profiel dat gedrag van medewerkers stuurt raakt aan privacyregels en aan het beginsel dat niemand op basis van kenmerken lichter of zwaarder gecontroleerd wordt. Vanuit de managementbenadering is de vraag of het efficiënt en betaalbaar is om profielen te beheren, medewerkers te trainen in het gebruik ervan en de aansprakelijkheid te dragen als het misgaat. Daarbovenop komt een securitytoets die Bongiovanni niet expliciet noemt maar die uit de rest van het boek volgt: zodra een profiel bepaalt hoe je wordt behandeld, wordt het profiel zelf een doelwit voor een aanvaller, die zich zal voordoen als de categorie met de minste wrijving. Het idee zou dus alleen door de filter mogen als het de screeningprocedure zelf ongemoeid laat en alleen de ervaring eromheen aanpast, zoals de SecScreenApp doet met informatie en diensten, en niet de strengheid van de controle. Dat is precies het onderscheid tussen waarde toevoegen en beveiliging verlagen." },
{ type: "oefening", id: "h6-oef-4", niveau: "gevorderd", vraag: "Bongiovanni concludeert dat het antwoord op de vraag \"safety en security samen of apart\" afhangt van de benadering. Leg dat uit met tabel 6.2 en beoordeel of dat een bevredigend antwoord is op de hoofdvraag van het boek.", antwoord: "In de rij over scheiding of combinatie geeft elke benadering een ander antwoord. Juridisch zijn safety en security twee regimes, omdat er twee sets regelgeving en twee soorten toezichthouders bestaan; dat is een institutioneel feit, zoals hoofdstuk 1 en hoofdstuk 4 ook beschrijven. Managerial hangt het af van middelen en doelen: een organisatie kan kiezen voor twee afdelingen of één, afhankelijk van budget en strategie. Vanuit de designbenadering zijn ze gecombineerd, omdat de gebruiker beide beleeft als één ervaring en geen onderscheid maakt tussen het portaal dat wapens zoekt en de vloer die schoon moet zijn. Dat is een bevredigend antwoord in de zin dat het de schijnbare tegenspraak tussen de hoofdstukken oplost: Leveson en Wipf integreren op analyseniveau, Brooks en Coole scheiden op beroepsniveau, en Bongiovanni laat zien dat die posities niet botsen maar bij verschillende vragen horen. Het is minder bevredigend als je een organisatiebesluit moet nemen, want dan moet je alsnog kiezen, en de tabel zegt alleen dat de keuze afhangt van je perspectief. De waarde zit erin dat je die keuze expliciet kunt maken: benoem welke bril je opzet en waarom, in plaats van te doen alsof er één juist antwoord is." }
] },
{ id: "checken", titel: "Checken", blokken: [
{ type: "quiz", titel: "Check jezelf op hoofdstuk 6", vragen: [{ vraag: "Wat is het dilemma van risicomanagement volgens Bongiovanni?", opties: ["Risico's zijn niet meetbaar", "Effectief of niet, risicomanagement laat alleen kosten zien en geen tastbare waarde", "Managers begrijpen risico niet", "Safety en security spreken elkaar tegen"], juist: 1, uitleg: "Bij succes gebeurt er niets, wat onzichtbaar is; bij falen zijn de kosten gemaakt en is er alsnog schade." }, { vraag: "Wie noemden safety en security \"eternal killjoys\"?", opties: ["Leveson en Young", "Pettersen en Bjørnskau", "Piètre-Cambacédès en Bouissou", "Liedtka en Brown"], juist: 2, uitleg: "Functies die veel middelen vergen voor zeldzame gebeurtenissen en geen positieve waarde opleveren buiten loss prevention." }, { vraag: "Waarom volstaat de nette scheiding van safety en security volgens het hoofdstuk niet meer?", opties: ["Omdat de wetgeving is veranderd", "Omdat moderne systemen uit subsystemen bestaan met onvoorspelbare emergente eigenschappen", "Omdat security duurder is geworden", "Omdat passagiers erom vragen"], juist: 1, uitleg: "De scheiding werkte toen systemen elektromechanisch waren. Het bewijs van de verandering is de opkomst van cyberaspecten." }, { vraag: "Hoe definieert Bongiovanni de safety- en securityervaring?", opties: ["Het aantal incidenten per jaar", "De set procedures op een luchthaven", "De combinatie van beleid, management en systeemkenmerken rond safety en security, zoals beleefd door eindgebruikers", "De tevredenheid van medewerkers"], juist: 2, uitleg: "Het woord beleefd is de kern: het gaat om wat de gebruiker merkt, niet om wat de organisatie doet." }, { vraag: "Wat zijn de drie fasen van Liedtka's design thinking?", opties: ["Analyseren, ontwerpen, implementeren", "Data verzamelen over gebruikersbehoeften, ideeën genereren, testen", "Framing, re-framing, prototyping", "Wet, management, gebruiker"], juist: 1, uitleg: "Elke fase heeft eigen instrumenten: persona's en journey maps, ideatielenzen, storyboards." }, { vraag: "Waarin verschilt de designbenadering het scherpst van de traditionele luchthavensecurity bij het kijken naar gebruikers?", opties: ["Design gebruikt meer technologie", "Traditionele security ziet externe gebruikers als één brede categorie; design erkent de verscheidenheid van gebruikers", "Design negeert de regelgeving", "Traditionele security is goedkoper"], juist: 1, uitleg: "Het erkennen van gebruikerscategorieën is een grondbeginsel van design thinking en de basis voor een positieve ervaring." }, { vraag: "Wat is het grootste verschil tussen Alfred en Wendy?", opties: ["Hun leeftijd", "Alfred vindt security fascinerend en neemt er de tijd voor; Wendy ervaart het als tijdverlies en ergernis", "Alfred reist vaker", "Wendy is bang voor terrorisme"], juist: 1, uitleg: "Zelfde procedure, totaal andere ervaring. Daarom moeten hun ervaringen verschillend worden ontworpen." }, { vraag: "Wat is de ideatielens \"utilize\"?", opties: ["Oplossingen uit andere industrieën overnemen", "Onderbenutte assets in een bedrijfsmodel of ervaring identificeren en nieuw benutten", "Gebruikers laten stemmen", "Een storyboard maken"], juist: 1, uitleg: "Het voorbeeld is de klantfeedback na de screening, die de tijd en belangstelling van Alfred benut. Derive is de andere lens." }, { vraag: "Welke functie zit niet in de SecScreenApp?", opties: ["Locatiegebaseerde melding bij het screeninggebied", "Geschatte wachttijd en tijd tot de gate", "Een snellere rij voor gebruikers van de app", "Een waarschuwing wanneer de telefoon weg moet"], juist: 2, uitleg: "De app verandert niets aan de screening zelf. Hij verandert alleen de ervaring eromheen: informatie, diensten, feedback." }, { vraag: "Wat is volgens tabel 6.2 de missie van de designbenadering?", opties: ["Nul incidenten", "Efficiënt risico's beperken", "Gebruikers verrukken", "Voldoen aan de wet"], juist: 2, uitleg: "Nul incidenten is de juridische missie, efficiënt beperken de managementmissie." }, { vraag: "Hoe beantwoordt de designbenadering de vraag of safety en security gescheiden of gecombineerd moeten zijn?", opties: ["Gescheiden, want het zijn twee regimes", "Afhankelijk van middelen en doelen", "Gecombineerd, want beide zijn componenten van de gebruikerservaring", "De vraag is niet relevant"], juist: 2, uitleg: "De passagier maakt geen onderscheid. Juridisch zijn het twee regimes, managerial hangt het af van de situatie." }, { vraag: "Welke beperking noemt Bongiovanni zelf van zijn model?", opties: ["Het is te duur", "Het is nog niet getest op een luchthaven", "Het werkt alleen in Australië", "Het vervangt de juridische benadering"], juist: 1, uitleg: "Bovendien moet de geschiktheid voor andere kritieke infrastructuren nog worden getoetst, en is het model complementair, geen vervanging." }] },
{ type: "bronnen", items: [{'apa': 'Bongiovanni, I. (2020). User safety and security experience: Innovation through design-inspired methods in airports. In C. Bieder & K. Pettersen Gould (Eds.), The coupling of safety and security (pp. 53–61). Springer.'}, {'apa': 'Bongiovanni, I. (2016). Assessing vulnerability to safety and security disruptions in Australian airports. Queensland University of Technology.'}, {'apa': 'Bongiovanni, I., & Newton, C. (2019). Toward an epidemiology of safety and security risks: An organizational vulnerability assessment in international airports. Risk Analysis.'}, {'apa': 'Brown, T. (2008). Design thinking. Harvard Business Review, 86(6), 84–92.'}, {'apa': 'Liedtka, J. (2015). Perspective: Linking design thinking with innovation outcomes through cognitive bias reduction. Journal of Product Innovation Management, 32(6), 925–938.'}, {'apa': 'Piètre-Cambacédès, L., & Bouissou, M. (2013). Cross-fertilization between safety and security engineering. Reliability Engineering & System Safety, 110, 110–126.'}, {'apa': 'Redden, S. M. (2013). How lines organize compulsory interaction, emotion management, and "emotional taxes". Management Communication Quarterly, 27(1), 121–149.'}, {'apa': 'Verganti, R. (2009). Design driven innovation. Harvard Business Press.'}, {'apa': 'Young, W., & Leveson, N. (2014). An integrated approach to safety and security based on systems theory. Communications of the ACM, 57(2), 31–35.'}] },
{ type: "preview", titel: "Van gebruiker naar beroep", tekst: "Bongiovanni liet zien dat safety en security vanuit de gebruiker één ding zijn. Brooks en Coole laten in hoofdstuk 7 zien dat ze vanuit de professional juist twee dingen zijn, met eigen kennis, eigen opleidingen en beperkte overlap.", punten: ['Corporate security tegenover occupational health and safety als twee beroepen', 'Wat een kennisdomein is en waarom dat de scheiding verklaart', 'Waarom de synergieën binnen de beroepen beperkt zijn, ondanks een gedeeld doel'] }
] }
];

LESSTOF["intro-to-safety-security/h7"] = [
{ id: "voor", titel: "Voorbereiding", blokken: [
{ type: "leerdoelen", items: ["De onderzoeksvraag van het hoofdstuk reproduceren en uitleggen waarom hij via kennisdomeinen wordt beantwoord", "Uitleggen wat een beroep (profession) is, welke kenmerken het heeft en waarom een kennisdomein daarvoor het belangrijkste is", "Uitleggen waarom security en safety allebei nog geen erkend beroep zijn, en wat hun status verschillend maakt", "De belangrijkste kennismodellen noemen: ASIS, Brooks, Coole, SIA en INSHPO", "De vijf kenniscategorieën van corporate security en de zes van OHS reproduceren en tegenover elkaar zetten", "Precies aangeven waar de overlap zit (risicomanagement, controls, management, professionele praktijk) en waar de polariteit (hazard tegenover threat, technologie, theorie, wetgeving)", "De conclusie van Brooks en Coole reproduceren: overeenkomsten alleen op abstract niveau, verschillen expliciet in de praktijk, en de beroepen divergeren verder", "Deze conclusie plaatsen tegenover Leveson, Wipf en Bongiovanni"] },
{ type: "uitleg", titel: "Wie zijn Brooks en Coole en wat is dit voor hoofdstuk", tekst: "**David Brooks** en **Michael Coole** werken aan Edith Cowan University in Joondalup, West-Australië. Brooks is de co-auteur van *Security Science: The Theory and Practice of Security* (Smith & Brooks, 2013), het boek dat in hoofdstuk 1 en 5 al werd aangehaald als de standaardpoging om security als wetenschap af te bakenen. Coole heeft gepubliceerd over de opleiding van fysieke beveiligingsprofessionals.\n\nDat maakt dit hoofdstuk anders dan de vorige. Leveson, Wipf en Bongiovanni keken naar **methoden**. Brooks en Coole kijken naar **beroepen**: wat moet iemand weten om het werk te doen, wie bepaalt dat, en welke opleidingen en verenigingen dragen dat uit. Het hoofdstuk hoort bij de invalshoek **management en praktijk**.\n\nEn het is het hoofdstuk met de scherpste conclusie van het boek: safety en security zijn **twee verschillende beroepen die steeds verder uit elkaar groeien**." },
{ type: "slimmer", titel: "Lees dit hoofdstuk als tegenwicht", tekst: "Tot nu toe wees het boek de ene kant op. Leveson: één analyse. Wipf: één oplossingsruimte. Bongiovanni: één gebruikerservaring. Dit hoofdstuk wijst de andere kant op, en dat is precies waarom de redacteuren het hebben opgenomen.\n\nWat je moet begrijpen is dat Brooks en Coole de anderen **niet tegenspreken**. Ze kijken naar iets anders. De anderen vragen: kun je safety en security met hetzelfde gereedschap analyseren? Brooks en Coole vragen: is de persoon die dat gereedschap hanteert dezelfde persoon, met dezelfde opleiding, in hetzelfde beroep? Hun antwoord op die tweede vraag is nee.\n\nHou dus in je hoofd: **analytische eenheid is iets anders dan beroepsmatige eenheid**. Hoofdstuk 4 zei dat al in een bijzin. Hoofdstuk 7 maakt er een heel betoog van." }
] },
{ id: "kern", titel: "Kernstof", blokken: [
{ type: "tekst", titel: "7.1 Hetzelfde doel, verschillende basis", toetsstof: true, tekst: "Het hoofdstuk opent met wat safety en security delen. Beide hebben vergelijkbare doelen: het bieden van **maatschappelijk welzijn** (social wellness) door het managen van voorzienbare risico's. Op het abstracte niveau is er weinig dat deze begrippen onderscheidt.\n\nMaar op het niveau van **professionele kennis** komen safety en security voort uit een **verschillende basis**. Het onderscheid ontstaat door verschillen in:\n\n1. de **maatschappelijke positie** van het beroep,\n2. de **taakgerelateerde kenniscategorieën**,\n3. en, het belangrijkst, de **beroepspraktijk**.\n\nBrooks en Coole citeren Jore (hoofdstuk 5): safety en security gebruiken vaak **dezelfde concepten**, terwijl die een **verschillende betekenis en toepassing** hebben. Dat is precies wat Jore vond bij security culture: zelfde woord, andere lading. Zulke verschillende opvattingen roepen **spanningen** op tussen de beroepen.\n\nOm de synergieën en spanningen beter te begrijpen, moet je de **doelstellingen** en de **taakgerelateerde kennis** begrijpen die de beroepspraktijk vormen en ondersteunen." },
{ type: "tekst", titel: "De maatschappelijke drijfveer achter professionalisering", toetsstof: true, tekst: "Naarmate de samenleving complexer wordt en haar leden **risicomijdender**, ontstaat er een grotere behoefte aan meer professionaliteit in veel beroepsvelden. Safety en security zijn twee zulke beroepen die allebei streven naar professionalisering.\n\nLet op de logica: het is dezelfde trend als de openingszin van hoofdstuk 1. Hoe veiliger het wordt, hoe meer veiligheid we eisen, en hoe meer we eisen dat de mensen die het leveren **echte professionals** zijn, met opleiding, standaarden en een kennisbasis.\n\nDe concepten safety en security proberen allebei hetzelfde doel te bereiken, verbetering van maatschappelijk welzijn, wat leidt tot de opvatting dat er **conceptuele synergieën** zijn. Daarom is het belangrijk een helder begrip van beide vast te stellen.\n\n**De onderzoeksvraag van het hoofdstuk:**\n\n**Laten de kenniscategorieën van safety- en securitywetenschap professionele divergentie zien?**" },
{ type: "uitleg", titel: "Waarom deze vraag via kennis wordt beantwoord", tekst: "Er zijn veel manieren om te vragen of twee beroepen hetzelfde zijn. Je kunt kijken naar wat ze verdienen, hoe ze heten, of ze bij dezelfde vereniging zitten.\n\nBrooks en Coole kiezen voor **kennis**: wat moet je weten om het werk te kunnen? Dat is een slimme keuze, omdat kennis het meest stabiele kenmerk van een beroep is. Titels veranderen, organisatiestructuren veranderen, maar wat een arts moet weten om arts te zijn, verandert traag.\n\nEn het is toetsbaar. Je kunt opleidingen vergelijken, competentiekaders naast elkaar leggen, en kijken of dezelfde onderwerpen terugkomen. Dat is precies wat ze doen, en daarom is het hoofdstuk vol tabellen." },
{ type: "tekst", titel: "7.2 De twee beroepsdomeinen die worden vergeleken", toetsstof: true, tekst: "Om te kunnen vergelijken moet je eerst afbakenen. Brooks en Coole doen dat asymmetrisch, en dat is een bewuste keuze die je moet kennen.\n\n**Safety** wordt bekeken in de context van **Occupational Health and Safety (OHS)**, de professionele praktijk van arbeidsveiligheid en -gezondheid.\n\n**Security** is niet zo afgebakend, gezien zijn **multidimensionale** of **veelzijdige** karakter. Daarom wordt security bekeken in de context van **Corporate Security**, losjes gedefinieerd als **het bieden van bescherming om de doelen van een organisatie te bereiken** (Walby & Lippert, 2014).\n\nMerk op wat hier gebeurt. OHS is een natuurlijk afgebakend veld: het gaat over de werkplek, en daar is wetgeving voor. Corporate security is een **keuze** uit een veel breder continuüm dat loopt van nationale veiligheid tot buurtveiligheid. Dat verschil in afbakenbaarheid komt aan het eind van het hoofdstuk terug als een van de oorzaken van de divergentie." },
{ type: "tekst", titel: "7.3 Wat een beroep is", toetsstof: true, tekst: "In de hedendaagse samenleving zijn er veel **opkomende beroepen**. Voor die beroepen is de ontwikkeling van **vakpraktijk** (vocational practice) naar **beroep** (profession) uitdagend, vooral op het punt van maatschappelijke erkenning.\n\nTwee definities die je moet kennen:\n\nEen **praktijkdomein** is een activiteitengebied of kennisveld waarover een culturele groep beroepsmatige invloed of controle heeft.\n\nEen **cultureel domein** deelt systemen van gemeenschappelijke betekenis, die voor een beroep zijn gearticuleerd en gecodificeerd in een **kennisdomein** (body of knowledge) waarover de groep consensus heeft.\n\nEen professional heeft de volgende kenmerken:\n\n- overeengekomen en gehandhaafde **gedragsnormen**,\n- **opleidingsnormen**,\n- **professionele ontwikkeling**,\n- een **college van vakgenoten** (college of peers),\n- en een **duidelijk en formeel kennisdomein**.\n\nHet belangrijkste kenmerk van een beroep is het ondersteunende **academische kennisdomein**. Zo'n kennisdomein heeft een **systematische en inclusieve structuur**, met **logische relaties tussen concepten**, en is **voorspellend** in functie. De interne structuur zorgt voor voorspelbaarheid, consistentie en betrouwbaarheid, zodat doeltreffendheid en logica de boventoon voeren in professionele uitkomsten.\n\nDe slotzin van deze paragraaf is de spil van het hoofdstuk: **academische kennis onderbouwt en legitimeert daarmee professioneel werk** (Abbott, 1988)." },
{ type: "voorbeeld", titel: "Wat het verschil is tussen een vak en een beroep", tekst: "Een loodgieter en een arts kunnen allebei uitstekend zijn in wat ze doen. Toch noemen we het ene een vak en het andere een beroep. Waarom?\n\nDe arts heeft een beschermde titel, een tuchtcollege, een verplichte opleiding met accreditatie, een beroepsvereniging die de normen bepaalt, en een kennisdomein dat is vastgelegd in handboeken en richtlijnen. Een arts die de richtlijn negeert, kan worden aangesproken door zijn vakgenoten.\n\nDat is de lat waar Brooks en Coole safety en security langs leggen. En hun bevinding is dat **geen van beide** die lat haalt, maar dat safety er dichterbij zit. Waarom, dat komt hierna." },
{ type: "tekst", titel: "7.4 Het kennisdomein van security", toetsstof: true, tekst: "Het beroep security heeft de status van beroep **nog niet bereikt**, omdat het de kenmerken van een gedefinieerd kennisdomein mist. Jore zegt het scherp: het huidige kennisdomein in het securityveld is **grotendeels gefragmenteerd en gesegmenteerd**.\n\nToch zijn opleiders en industriële groepen begonnen een eigen kennisdomein te ontwikkelen. Brooks en Coole beschrijven vier pogingen.\n\n**1. ASIS International (2009).** ASIS, de grootste internationale beroepsvereniging voor security, organiseerde jaarlijks een symposium van praktijkmensen en academici om kernkenniscategorieën te ontwikkelen, gericht op Amerikaanse universiteiten. In 2009 leverde dat een securitykennisdomein op met **18 categorieën**:" },
{ type: "tabel", kop: ["Fysieke beveiliging", "Personeelsbeveiliging", "Informatiebeveiligingssystemen"], rijen: [["Onderzoek (investigations)", "Loss prevention", "Risicomanagement"], ["Juridische aspecten", "Noodplanning", "Brandbeveiliging"], ["Crisismanagement", "Rampenmanagement", "Contraterrorisme"], ["Inlichtingen", "Bescherming van bestuurders", "Geweld op de werkplek"], ["Misdaadpreventie", "CPTED", "Architectuur en engineering"]] },
{ type: "tekst", tekst: "*Tabel 7.1 uit het boek. CPTED staat voor Crime Prevention Through Environmental Design, misdaadpreventie via de inrichting van de omgeving.*\n\n**2. Brooks (2009).** Brooks zelf stelde **13 kenniscategorieën** voor, verdeeld in kern- en ondersteunende categorieën.\n- **Kern:** security risk management, business continuity en response, fysieke beveiliging, beveiligingstechnologie, personeelsbeveiliging, industriële beveiliging.\n- **Ondersteunend:** onder meer recht, onderzoek, fire life safety, en safety.\n\nDie categorieën kwamen uit een analyse van **104 internationale securityopleidingen** in Australië, Zuid-Afrika, het Verenigd Koninkrijk en de Verenigde Staten. Ze werden samengevoegd tot een securityraamwerk (Smith & Brooks, 2013). Het raamwerk beschouwt de **breedte** van security, terwijl traditionele securitykennis zich vooral richtte op elektronische, personele en fysieke beveiliging. Ter vergelijking: volwassener beroepen putten **selectief** uit verwante disciplines om hun specialisatie te definiëren.\n\nLet op dat safety in dit model een **ondersteunende** categorie van security is. Dat is een aanwijzing voor de asymmetrie die later terugkomt.\n\n**3. Het Enterprise Security Competency Model (University of Phoenix, 2015).** Een studie die ASIS koppelde aan de academische wereld en een **vijflagenmodel** opleverde. De vierde laag bevat de industriebrede technische categorieën: risico, personeelsbeveiliging, fysieke beveiliging, cyber, onderzoek en crisismanagement.\n\n**4. Coole en anderen (2017).** Een recente studie die met een **culturele domeinanalyse** de kennis van fysieke beveiliging ontwikkelde. Zoals Coole stelt: fysieke beveiliging ligt binnen het vak security, waar de fysieke-beveiligingsprofessional **beschermend advies** geeft. De studie articuleerde de kennisgebieden met bijbehorende leerdoelen:" },
{ type: "tabel", kop: ["Professionele taak", "Kenniscategorieën", "Leerdoelen"], rijen: [["Diagnose", "Concept van security, recht, securityrisico, beoordelingen, survey", "Het securityrisico van een organisatie in context plaatsen"], ["Inferentie", "Securitytheorieën, fysiek, preventie, human factors, planning en ontwerp", "Een fysiek beveiligingssysteem begrijpen en toepassen"], ["Behandeling", "Beveiligingstechnologie, detectie, fysiek, vertraging, respons en procedureel", "Een beschermingssysteem aanbevelen en ontwerpen"], ["Professionele praktijk", "Informatie, business, ontwerp, project, contract en onderzoeksvaardigheden", "Kennis inzetten om doelen te bereiken"]] },
{ type: "tekst", tekst: "*Tabel 7.2 uit het boek. Let op de drie taken diagnose, inferentie en behandeling: dat is de structuur van een medisch consult, bewust gekozen om security als beroep te laten klinken.*\n\nDeze studies zijn niet uitputtend, maar ze laten zien dat er een kennisdomein voor corporate security **in ontwikkeling** is en dat na verloop van tijd consensus kan ontstaan. Brooks en Coole citeren Criscuoli (1988): security is **geen intuïtie of gezond verstand**, maar bevat een complex kennisdomein dat het vermogen vereist om passende beveiligingsmaatregelen voor te schrijven voor specifieke omstandigheden." },
{ type: "tekst", titel: "7.4.1 Synthese: vijf kenniscategorieën van corporate security", toetsstof: true, tekst: "Uit die studies destilleren Brooks en Coole de meer consensuele kenniscategorieën (tabel 7.3). Dit is de helft van de vergelijking die straks komt, dus ken hem goed." },
{ type: "tabel", kop: ["Kennis", "Beschrijving"], rijen: [["**Dreigingen en risico's**", "Wetgeving en regelgeving; oorzaak en intentie bij misdaad; security- en criminologische theorieën, modellen en strategieën in misdaadpreventie; risico en security risk management; human factors"], ["**Beheersing van dreigingen en risico's**", "Diagnose, inferentie en behandeling; fysieke beveiligingscontrols; technologische controls; personeelscontrols; cybersecurity en informatiecontrols; werkplekbeoordeling, surveys en audits; werkplekontwerp en planning; business continuity management bij incident, crisis, noodsituatie en herstel"], ["**Securitymanagement**", "Securitymanagement, organisatiecultuur en maatschappelijke context; dreigings- en risicobeoordeling; besluitvorming bij risico; monitoren, evalueren en valideren van controls; beleid en procedures; specifieke industriële risico's, controls en regelgeving; governance"], ["**Onderliggende technische en gedragsdiscipline**", "Systemen, mens en technologie als biologisch systeem; sociale en individuele psychologie; engineering en technologie"], ["**Professionele praktijk**", "Securityinformatie; communicatie, consultatie, ontwerp en verandering; organisaties, projectmanagement, contractmanagement, strategische en operationele planning, bedrijfsbelangen"]] },
{ type: "tekst", titel: "7.5 Het kennisdomein van safety", toetsstof: true, tekst: "Net als security heeft safety de status van beroep met een robuuste ondersteunende academische discipline **nog niet bereikt**. Het Safety Institute of Australia (SIA) stelt zelf dat health and safety nog een opkomend beroep is dat historisch niet goed gedefinieerd is geweest, lokaal noch mondiaal.\n\nHet gevolg is dat safety een kennisdomein mist: er zijn aanzienlijke verschillen tussen OHS-opleidingen aan Australische universiteiten, en de professionele grenzen in het safetyberoep zijn zwak.\n\nIn de Australische context zijn er twee belangrijke pogingen tot een kennisdomein.\n\n**1. Het SIA Model of OHS Practice (2012).** Het Safety Institute of Australia presenteerde een professioneel OHS-opleidingsprogramma via dit model. Zoals Pryor stelt, resulteerde dat in de ontwikkeling en publicatie van het **OHS Body of Knowledge**. Het doel was het verkrijgen van **accreditatie door Australische universiteiten** om de beroepspraktijk van safety te ondersteunen.\n\nDe onderdelen van het model (tabel 7.4):" },
{ type: "tabel", kop: ["Consulteren en relaties opbouwen", "Werken in een organisatiecontext"], rijen: [["Informatie verzamelen", "Een conceptueel raamwerk toepassen"], ["Het probleem of de situatie begrijpen", "Diagnosticeren en het denken articuleren"], ["Handelingsopties ontwikkelen", "Beslissen over handelingsopties"], ["Operationaliseren", "Acties implementeren"], ["Implementatie monitoren", "Verandering evalueren"], ["Professionele praktijk evalueren", "Rapporteren aan sleutelpersonen"]] },
{ type: "tekst", tekst: "Merk op dat dit model geen **inhoudelijke** kennis beschrijft maar een **werkwijze**: de stappen die een OHS-professional doorloopt. Dat is een ander soort kennisdomein dan de ASIS-lijst.\n\n**2. Het INSHPO OHS Professional Capability Framework (2017).** De International Network of Safety and Health Practitioner Organisations ontwikkelde dit raamwerk als een consensusinstrument om een hogere standaard van bekwaamheid voor OHS-professionals te bevorderen. **Bekwaamheid** (capability) is daarin gedefinieerd als de toegepaste theoretische kennis die de beroepspraktijk onderbouwt, samen met sectorspecifieke kennis. Het raamwerk is een matrix met **zes kenniscategorieën** (tabel 7.5):" },
{ type: "tabel", kop: ["Kennis", "Onderwerpen"], rijen: [["**Gevaren en risico's**", "Oorzaken in gezondheid, psychosociaal, safety en milieu; gevaren in proces, taakanalyse, methoden, gedrag en factoren; risico als onzekerheid, gevaren, kriticiteit en maat"], ["**Beheersing van gevaren en risico's**", "Beheersprincipes, proces, werkplekontwerp, barrières, procedures en administratie; mitigatie met noodparaatheid en gezondheidseffecten"], ["**Safety- en gezondheidsmanagement**", "Safetymanagement, organisatiecultuur, recht, regelgeving en maatschappelijke context; risicobeoordeling en besluitvorming; monitoren, evalueren en valideren van controls; OHS-informatiemanagement, communicatie, consultatie en verandermanagement"], ["**Rol en functie**", "Ethiek en professionele praktijken"], ["**Technische en gedragsdiscipline**", "Systemen, de mens als biologisch systeem; sociale en individuele psychologie; statistiek, kwantitatieve analyse, wetenschap en engineering"], ["**Managementwetenschap**", "Organisaties, projectmanagement, strategische en operationele planning, bedrijfsbelangen"]] },
{ type: "tekst", tekst: "Ook deze studies zijn niet uitputtend, maar ze laten een **ontwikkelend internationaal kennisdomein** zien dat consensus wint. En er is een duidelijke drang bij de relevante beroepsverenigingen om **hoger onderwijs te integreren** binnen de kennisdomeinen." },
{ type: "tekst", titel: "7.5.1 Synthese: zes kenniscategorieën van OHS", toetsstof: true, tekst: "Tabel 7.6 vat de meer consensuele safetycategorieën samen. Dit is de andere helft van de vergelijking." },
{ type: "tabel", kop: ["Kennis", "Beschrijving"], rijen: [["**Gevaren en risico's**", "Wetgeving en normen; oorzaken in gezondheid, safety en milieu; modellen van gezondheidseffecten, vermoeidheid, ongevallen en milieuschade; risicomanagement; methoden voor gevarenanalyse"], ["**Beheersing van gevaren en risico's**", "Diagnose, inferentie en behandeling; fysieke controls; proces- en werkplekcontrols; procedurele controls"], ["**Safety- en gezondheidsmanagement**", "Safetymanagement, operationaliseren, organisatiecultuur en maatschappelijke context; recht en regelgeving; monitoren, evalueren en valideren van controls; OHS-informatie; communicatie, consultatie, relaties opbouwen en verandermanagement"], ["**Rol en functie**", "Ethiek, professionele praktijken; evalueren van de praktijk"], ["**Technische en gedragsdiscipline**", "Systemen, de mens als biologisch systeem; sociale en individuele psychologie; statistiek, analyse, wetenschap en engineering"], ["**Managementwetenschap**", "Projectmanagement, strategische en operationele planning, bedrijfsbelangen"]] },
{ type: "waarschuwing", titel: "Zet de twee synthesetabellen naast elkaar", tekst: "Doe dit nu, voordat je verder leest. Leg tabel 7.3 (security) en tabel 7.6 (safety) naast elkaar en kijk naar de linkerkolom.\n\nSecurity: dreigingen en risico's; beheersing; securitymanagement; technische en gedragsdiscipline; professionele praktijk.\n\nSafety: gevaren en risico's; beheersing; safety- en gezondheidsmanagement; rol en functie; technische en gedragsdiscipline; managementwetenschap.\n\nOp het eerste gezicht lijken ze sterk op elkaar. Vijf van de zes categorieën hebben een tegenhanger. Dat is precies wat Brooks en Coole in de volgende paragraaf \"cursory alignment\" noemen: oppervlakkige overeenkomst.\n\nKijk nu naar het eerste woord van de eerste rij. **Threats** tegenover **hazards**. Dreigingen tegenover gevaren. Dat ene woord is het hele verschil, en de rest van het hoofdstuk legt uit waarom." },
{ type: "tekst", titel: "7.6 De vergelijking: waar het overeenkomt en waar het uiteenloopt", toetsstof: true, tekst: "De twee synthesetabellen werden samengevoegd om kenniscategorieën over beide beroepen heen te articuleren. Er bleek een duidelijke **overeenstemming** op vier punten:\n\n1. **risicomanagement**," },
{ type: "stappen", items: [{ titel: "controls", tekst: "(beheersmaatregelen)," }] },
{ type: "tekst", tekst: "3. **management**,\n4. **professionele praktijk**.\n\nDaartegenover stonden **polariteiten** op drie punten:" },
{ type: "stappen", items: [{ titel: "hazards tegenover threats", tekst: "(gevaren tegenover dreigingen)," }] },
{ type: "tekst", tekst: "2. **technologieën**,\n3. **onderliggende theorieën**.\n\nDe overeenkomsten in kennis lieten, oppervlakkig, een zekere mate van professionele overeenstemming zien. Maar zodra die categorieën worden bekeken als **beroepstaak**, is er **beperkte overeenstemming in context, reikwijdte en praktijk**.\n\nNu werken Brooks en Coole elk punt uit." },
{ type: "tekst", titel: "Risicomanagement: dezelfde norm, andere kijk", toetsstof: true, tekst: "Beide beroepen doen aan risicomanagement en gebruiken daarvoor dezelfde norm: **ISO 31000:2018**. Het SIA OHS-model annoteert die norm, en in security presenteren Smith en Brooks hem. Jore stelt dat in praktisch security risk management dezelfde perspectieven en risicoanalysemethoden lijken te worden gedeeld met safety.\n\n**Maar de benadering van risicomanagement is verschillend.**\n\n**Safety** bekijkt risico vanuit **hazards**: gevaren die iemand blootstellen aan letsel of verlies.\n\n**Security** bekijkt risico vanuit **threat**: de **doelgerichte intentie en het vermogen van een tegenstander**. Met andere woorden, het doel van security is het minimaliseren van het risico op kwaadwillende daden (Sandia, 2013). Threat is het centrale thema in het begrijpen, managen en toepassen van security risk management.\n\nDit is exact het eerste onderscheidingsniveau van Blokland en Reniers (hoofdstuk 2) en de kwaadwillende intentie van Jore (hoofdstuk 5), maar nu vanuit het beroep bekeken. Dezelfde ISO-norm, hetzelfde woord \"risico\", maar de securityprofessional en de safetyprofessional zoeken naar iets anders." },
{ type: "tekst", titel: "Onderliggende theorieën: ongevallen tegenover misdaad", toetsstof: true, tekst: "De onderliggende theorieën voor safety richten zich op de **werkplek**, en op de daaruit voortvloeiende **gezondheidseffecten en niet-kwaadwillende ongevallen**.\n\nSecurity richt zich op **misdaad en misdaadpreventie**, als gevolg van kwaadwillende dreigingsactoren.\n\nDat betekent dat de theoretische basis van beide beroepen uit **verschillende wetenschappen** komt. Safety leunt op ergonomie, arbeidsgeneeskunde, human factors, ongevalstheorie. Security leunt op **criminologie**. Een safetyprofessional heeft niet geleerd hoe daders doelwitten kiezen. Een securityprofessional heeft niet geleerd hoe vermoeidheid tot fouten leidt." },
{ type: "tekst", titel: "Controls: dezelfde stappen, andere maatregelen", toetsstof: true, tekst: "Safety en security beheersen geïdentificeerde risico's allebei via **diagnose, inferentie en behandeling**. Voor beide beroepen omvat beheersing proces, werkplekontwerp, en fysieke, personele en procedurele mitigatie.\n\nMaar de beheersing moet rekening houden met de vraag of de veroorzaker **kwaadwillend** is of dat het om een **ongeluk** gaat. Hoewel safetycontrols ook intentionaliteit kunnen meewegen, zoals Jore aangeeft, is intentie een **significante factor** bij securitycontrols.\n\nDaaruit volgt een concreet verschil in wat de maatregelen zijn:\n\n**Securitycontrols** richten zich op **fysieke verharding** om te **ontmoedigen** (deter) en te **vertragen** (delay), met **technologie** om te **detecteren** en **personeel** om te **reageren**.\n\n**Safetycontrols** bestaan uit **mensgerichte** benaderingen, gericht op **menselijke fouten** en **naleving** (compliance)." },
{ type: "voorbeeld", titel: "Deter, delay, detect, respond", tekst: "Die vier woorden zijn de kern van fysieke beveiliging, en je gaat ze in je opleiding nog vaak tegenkomen.\n\nEen hek **ontmoedigt** (deter): de dader ziet dat het moeite kost en kiest misschien een ander doelwit. Een tweede hek en een slot **vertragen** (delay): het kost tijd om erdoorheen te komen. Een camera en een sensor **detecteren** (detect): er gaat een alarm af. Een beveiliger of de politie **reageert** (respond): iemand komt de dader tegenhouden.\n\nDe logica is een wedloop: de vertraging moet langer duren dan de tijd tussen detectie en respons. Anders is de dader weg voordat iemand er is.\n\nVergelijk dat met een safetycontrol tegen struikelen: een gele streep, een leuning, een instructie, een cursus. Geen wedloop, geen tegenstander. Alleen mensen die je helpt om geen fout te maken. Zelfde woord, controls, totaal andere logica." },
{ type: "tekst", titel: "Wetgeving: overeenkomst in naam, verschil in inhoud", toetsstof: true, tekst: "Kennis van wetgeving en regelgeving suggereert overeenkomst tussen beide beroepen, maar de wetgeving zelf is **verschillend**.\n\nIn Australië regelt de wetgeving **expliciet** de veiligheid op de werkplek. Zoals WorkSafe Victoria stelt: het is wettelijk verplicht om een voldoende gekwalificeerd persoon in dienst te nemen of in te schakelen om te adviseren over zaken die de gezondheid en veiligheid van werknemers raken.\n\nDaartegenover heeft security **geen wetgeving over de beroepspraktijk**, behalve de verplichting om een politievergunning te halen om in delen van de sector te werken.\n\nEn dan een belangrijke observatie: **soms drijft de wetgeving van safety de behoefte aan security**, om mensen te beschermen tegen voorzienbare gebeurtenissen. Als de wet zegt dat je werknemers moet beschermen tegen geweld op de werkvloer, dan heb je daarvoor beveiliging nodig. Safety is dan de juridische reden, security het middel." },
{ type: "uitleg", titel: "Waarom dat wettelijke verschil zo zwaar weegt", tekst: "Denk terug aan de definitie van een beroep: opleidingsnormen, gedragsnormen, een college van vakgenoten. Wetgeving die zegt \"je moet een gekwalificeerde safetyadviseur hebben\" creëert in één klap een **markt** voor gekwalificeerde adviseurs, een **reden** voor universiteiten om accreditatie te zoeken, en een **norm** waaraan de adviseur moet voldoen.\n\nSecurity heeft dat niet. Iedereen mag zich securityadviseur noemen. Er is geen wet die zegt dat een bedrijf er een nodig heeft. Dus is er minder druk op opleidingen om te standaardiseren, en minder reden voor een beroepsvereniging om normen af te dwingen.\n\nDat verklaart waarom safety, ondanks alle onvolkomenheden, verder is op de weg naar beroep dan security. Niet omdat de kennis beter is, maar omdat de wet erom vraagt. Precies wat hoofdstuk 1 zei: veel eisen komen uit beleid, niet uit wetenschap." },
{ type: "tekst", titel: "Afbakenbaarheid: het structurele verschil", toetsstof: true, tekst: "Security is **multidimensionaal** en omvat veel diverse beroepspraktijken. Security zit op een **continuüm van nationale veiligheid tot buurtveiligheid** (Brooks, Coole & Corkill, 2018). Daarom is de praktijk van security moeilijk te definiëren zonder expliciete context.\n\nSafety is daarentegen algemeen bekend binnen de werkplek als **OHS**. Daarom heeft OHS een **expliciete context**, wat resulteert in een veel makkelijker definieerbaar kennisdomein, opleidingsdoelen en accreditatie op universitair niveau.\n\nDat sluit de cirkel met paragraaf 7.2. Brooks en Coole moesten security afbakenen tot corporate security om te kunnen vergelijken, terwijl safety zichzelf al afbakent tot de werkplek. Die asymmetrie is geen methodologisch ongemak; het is een van de bevindingen." },
{ type: "tekst", titel: "7.7 De divergentie", toetsstof: true, tekst: "Het hoofdstuk stelde de vraag: laten de kenniscategorieën professionele divergentie zien? Het antwoord in vier stappen.\n\n**Stap 1: op abstract niveau zijn er overeenkomsten.** Niet in de laatste plaats de drang naar maatschappelijk welzijn. Zonder context valt te betogen dat safety en security vergelijkbare beroepsactiviteiten zijn, die dus door een gemeenschappelijk kennisdomein zouden kunnen worden ondersteund. **Maar overeenkomsten bestaan alleen op het abstracte niveau.**\n\n**Stap 2: vanuit kennis en praktijk is de context uniek.** Elk beroep bekijkt zijn doelen vanuit een eigen, onderscheiden context. Bij risicomanagement bekijkt safety risico vanuit gevarenmanagement, security vanuit kwaadwillende dreigingen. Beheersing van risico's toonde ook overeenkomst, maar de inferentie van de behandeling verschilt naargelang de veroorzaker kwaadwillend is of dat het een onbedoelde keten van gebeurtenissen is.\n\n**Stap 3: samenvoegen verdunt.** Het samenvoegen van de beroepen safety en security tot één praktijk **verdunt alleen hun begrip en hun grenzen**. Wel suggereert INSHPO dat de safetyprofessional een securityfunctie heeft. Maar die functie ligt in het algemeen in **life safety**, een opvatting die Smith en Brooks ondersteunen met de stelling dat **life safety-systemen voorrang hebben op securityeisen**.\n\n**Stap 4: de divergentie neemt toe.** Hoewel safety de behoefte aan security kan aandrijven, wordt security bereikt via een eigen kennisdomein. De divergentie tussen de twee beroepen zal worden aangedreven door drie krachten:\n\n1. grotere **aversie tegen maatschappelijk risico**," },
{ type: "stappen", items: [{ titel: "hogere verwachtingen", tekst: "van beroepen," }] },
{ type: "tekst", tekst: "3. beide beroepen die streven naar **beroepsstatus**.\n\nOf elk beroep zal uitgroeien tot een maatschappelijk erkend beroep valt nog te bezien, maar deze factoren zullen de divergentie tussen occupational safety en corporate security **vergroten**." },
{ type: "uitleg", titel: "Life safety heeft voorrang, en wat dat betekent", tekst: "Die ene zin, \"life safety systems take precedence over security requirements\", is de enige plek in het hoofdstuk waar de twee beroepen elkaar in de praktijk raken, en ze raken elkaar in een **hiërarchie**.\n\nConcreet: een nooddeur moet van binnen altijd open kunnen, ook al wil security hem dicht houden. Een brandmelding overrulet een toegangscontrole. Als de brandweer erin moet, gaat het hek open.\n\nDat is het klassieke botsingspunt uit hoofdstuk 1, de nooddeur, maar nu met een antwoord: bij conflict wint safety. Niet omdat safety belangrijker is, maar omdat het risico op doden bij brand groter en zekerder is dan het risico bij een inbraak.\n\nOnthoud dat als vuistregel, en onthoud ook dat het een vuistregel is. Bij een aanslag met gewapende daders klopt de rangorde ineens niet meer, want dan is de gesloten deur wat levens redt." },
{ type: "tekst", titel: "7.8 Conclusie", toetsstof: true, tekst: "Brooks en Coole vatten samen. Het hoofdstuk verkende de professionele synergieën en polariteiten tussen safety en security binnen organisaties, via de blik van professionele kennisdomeinen, met security als corporate security en safety als OHS.\n\nOp abstract niveau hebben safety en security duidelijke overeenkomsten, maar in de praktijk zijn er **expliciete verschillen**. Overeenkomsten bestaan binnen de professionele praktijk, maar dat zijn **generieke bekwaamheden** die van alle beroepen worden verwacht: projectmanagement, communicatie, planning. Op oppervlakkig niveau bestaat gemeenschappelijke kennis rond risicomanagement, risicobeheersing en onderliggende theorieën, maar de verschillen zijn expliciet:\n\n- **Safetyrisico** richt zich op **hazard**, met **accidentele** drijvers.\n- **Securityrisico** richt zich op **threat**, met **kwaadwillende intentie** als drijver.\n- Safety beschouwt **gezondheidseffecten en niet-kwaadwillende ongevallen**.\n- Security beschouwt **misdaad en misdaadpreventie**.\n\nDaarom zijn er binnen de beroepen safety en security, ondersteund door hun kennisdomeinen, **beperkte synergieën** in onderliggende theorie en praktijk. Safety en security zijn **twee verschillende beroepen die verder uiteen zullen groeien** naarmate elk streeft naar beroepsstatus." },
{ type: "waarschuwing", titel: "De scherpste stelling van het boek, en de nuance erin", tekst: "\"Two distinct professions that will further diverge\" is de stevigste uitspraak in het hele boek. Maar lees de nuance mee.\n\nTen eerste: Brooks en Coole zeggen niet dat ze zouden **moeten** divergeren. Ze voorspellen dat ze **zullen** divergeren, gedreven door professionalisering. Het is een observatie over waar de beroepen heen bewegen, niet een advies.\n\nTen tweede: ze zeggen dat samenvoegen het begrip **verdunt**. Dat is een argument tegen naïeve integratie, niet tegen samenwerking. Twee beroepen kunnen samenwerken zonder samen te smelten. Artsen en verpleegkundigen doen dat elke dag.\n\nTen derde: de overeenkomsten die ze wél vinden, risicomanagement, controls, management, professionele praktijk, zijn niet niks. Het zijn precies de gebieden waar een SSMS-opleiding je in beide beroepen inzetbaar maakt." },
{ type: "begrippen", titel: "Kernbegrippen uit hoofdstuk 7", items: [{ begrip: "Social wellness", definitie: "Maatschappelijk welzijn; het gedeelde overkoepelende doel van safety en security, bereikt door het managen van voorzienbare risico's." }, { begrip: "Occupational Health and Safety (OHS)", definitie: "De professionele praktijk van arbeidsveiligheid en -gezondheid; de context waarin Brooks en Coole safety bekijken." }, { begrip: "Corporate security", definitie: "Het bieden van bescherming om de doelen van een organisatie te bereiken; de context waarin security wordt bekeken, gekozen omdat security zelf te breed is." }, { begrip: "Beroep (profession)", definitie: "Beroepsgroep met overeengekomen gedragsnormen, opleidingsnormen, professionele ontwikkeling, een college van vakgenoten en een formeel kennisdomein." }, { begrip: "Kennisdomein (body of knowledge)", definitie: "Systematische, inclusieve kennisstructuur met logische relaties tussen concepten en een voorspellende functie; het belangrijkste kenmerk van een beroep, dat professioneel werk legitimeert." }, { begrip: "Praktijkdomein", definitie: "Activiteitengebied of kennisveld waarover een culturele groep beroepsmatige invloed of controle heeft." }, { begrip: "ASIS International", definitie: "Grootste internationale beroepsvereniging voor security; publiceerde in 2009 een securitykennisdomein met 18 categorieën." }, { begrip: "CPTED", definitie: "Crime Prevention Through Environmental Design; misdaadpreventie via de inrichting van de fysieke omgeving. Een van de ASIS-categorieën." }, { begrip: "Diagnose, inferentie, behandeling", definitie: "De drie professionele taken in het model van Coole, bewust ontleend aan de medische praktijk, die in beide beroepen terugkomen als structuur van risicobeheersing." }, { begrip: "SIA Model of OHS Practice", definitie: "Australisch model dat de werkwijze van een OHS-professional beschrijft in stappen, bedoeld om universitaire accreditatie te verkrijgen." }, { begrip: "INSHPO Capability Framework", definitie: "Internationaal raamwerk met zes kenniscategorieën voor OHS-professionals; capability is toegepaste theoretische kennis plus sectorspecifieke kennis." }, { begrip: "Hazard", definitie: "Gevaar dat iemand blootstelt aan letsel of verlies; het risicobegrip van safety, met accidentele drijvers." }, { begrip: "Threat", definitie: "De doelgerichte intentie en het vermogen van een tegenstander; het risicobegrip van security, met kwaadwillende drijvers." }, { begrip: "Deter, delay, detect, respond", definitie: "De logica van securitycontrols: fysieke verharding om te ontmoedigen en te vertragen, technologie om te detecteren, personeel om te reageren." }, { begrip: "Life safety", definitie: "De bescherming van mensenlevens bij noodsituaties zoals brand; het enige gebied waar de safetyprofessional een securityfunctie heeft, en dat voorrang heeft op securityeisen." }, { begrip: "ISO 31000:2018", definitie: "De internationale risicomanagementnorm die beide beroepen gebruiken, met een verschillende invulling van wat risico is." }, { begrip: "Securitycontinuüm", definitie: "De reeks van nationale veiligheid tot buurtveiligheid waarop security zich bevindt, wat security zonder expliciete context ondefinieerbaar maakt." }] }
] },
{ id: "toepassen", titel: "Toepassen", blokken: [
{ type: "stappen", titel: "Twee beroepen vergelijken via hun kennisdomein, in zeven stappen", items: [{ titel: "Baken beide beroepen af tot een vergelijkbare context.", tekst: "Brooks en Coole kozen OHS en corporate security. Zonder afbakening vergelijk je een werkplek met een continuüm van staat tot straat." }, { titel: "Verzamel de gezaghebbende kennismodellen.", tekst: "Beroepsverenigingen, accreditatiekaders, competentiemodellen, analyses van opleidingen. Voor security: ASIS, Brooks, Coole. Voor safety: SIA, INSHPO." }, { titel: "Synthetiseer per beroep de consensuele categorieën.", tekst: "Wat komt in meerdere modellen terug? Dat is de kern; de rest is sectorspecifiek." }, { titel: "Leg de synthesetabellen naast elkaar en markeer de overeenkomsten.", tekst: "Verwacht overeenstemming op generieke professionele vaardigheden: risicomanagement, management, communicatie, projectmanagement." }, { titel: "Zoek de polariteiten in de eerste woorden.", tekst: "Hazard tegenover threat, ongeval tegenover misdaad, ergonomie tegenover criminologie. Het verschil zit vaak in het object, niet in de werkwijze." }, { titel: "Toets elke overeenkomst op de beroepstaak.", tekst: "Dezelfde categorienaam betekent niet dezelfde taak. Vraag per categorie: wat doet de professional concreet, en zou de ander dat kunnen?" }, { titel: "Kijk naar de externe drijvers.", tekst: "Wetgeving, maatschappelijke risicoaversie, verwachtingen van beroepen. Die bepalen of de beroepen naar elkaar toe of van elkaar af bewegen." }] },
{ type: "oefening", id: "h7-oef-1", niveau: "basis", vraag: "Leg uit waarom Brooks en Coole security afbakenen tot corporate security en safety tot OHS, en wat die asymmetrie zegt over de twee beroepen.", antwoord: "Safety kent een natuurlijke afbakening: het wordt algemeen begrepen als arbeidsveiligheid en -gezondheid, gebonden aan de werkplek, met expliciete wetgeving. Daardoor heeft OHS een duidelijke context en is het kennisdomein relatief makkelijk te definiëren, inclusief leerdoelen en universitaire accreditatie. Security is multidimensionaal en ligt op een continuüm van nationale veiligheid tot buurtveiligheid, waardoor de praktijk zonder expliciete context niet te definiëren is. Om überhaupt te kunnen vergelijken, moeten Brooks en Coole security dus kunstmatig inperken tot corporate security, gedefinieerd als het bieden van bescherming om organisatiedoelen te bereiken. Die asymmetrie is geen methodologisch detail maar een bevinding op zich: het ene beroep bakent zichzelf af, het andere moet worden afgebakend. Dat verklaart mede waarom safety verder is op de weg naar beroepsstatus en waarom het kennisdomein van security volgens Jore gefragmenteerd en gesegmenteerd blijft." },
{ type: "oefening", id: "h7-oef-2", niveau: "basis", vraag: "Beide beroepen gebruiken ISO 31000. Leg uit waarom dat volgens Brooks en Coole toch niet betekent dat ze hetzelfde risicomanagement bedrijven.", antwoord: "ISO 31000 is een procesnorm: hij beschrijft hoe je risico's identificeert, analyseert, evalueert en behandelt, maar niet waarnaar je zoekt. Safety vult het proces in vanuit hazards: gevaren die iemand blootstellen aan letsel of verlies, met accidentele drijvers, en theorieën over gezondheidseffecten en ongevallen. Security vult hetzelfde proces in vanuit threat: de doelgerichte intentie en het vermogen van een tegenstander, met kwaadwillende drijvers, en theorieën uit de criminologie over misdaad en misdaadpreventie. De methodologische stappen zijn identiek, wat Jore ook constateert, maar het object waarop ze worden toegepast en de kennis die nodig is om dat object te begrijpen verschillen fundamenteel. Een safetyprofessional zoekt naar wat mis kan gaan; een securityprofessional zoekt naar wie iets wil laten misgaan en wat die daarvoor kan. De gedeelde norm verhult dus een verschil in inhoud, en dat verschil werkt door tot in de controls: mensgericht en gericht op fouten en naleving bij safety, gericht op deter, delay, detect en respond bij security." },
{ type: "oefening", id: "h7-oef-3", niveau: "gevorderd", vraag: "Brooks en Coole stellen dat samenvoegen van de beroepen hun begrip verdunt. Bongiovanni stelt dat safety en security vanuit de gebruiker één ding zijn. Kunnen beide gelijk hebben? Werk uit wat dat betekent voor de inrichting van een organisatie.", antwoord: "Ja, en het verschil zit in het niveau waarop ze kijken. Bongiovanni kijkt naar de ervaring van de eindgebruiker, voor wie de screening op een luchthaven één beleving is, ongeacht welke professional welk deel ervan levert. Brooks en Coole kijken naar de kennis en opleiding van degenen die het werk doen, en constateren dat de safetyprofessional gevaren, ongevallen en ergonomie kent, terwijl de securityprofessional dreigingen, misdaad en criminologie kent. Beide beweringen kunnen tegelijk waar zijn: één geïntegreerde ervaring, geleverd door twee gescheiden beroepen. Voor de inrichting van een organisatie betekent dat dat je twee dingen moet scheiden die vaak worden verward: de organisatie van de kennis en de organisatie van de levering. Kennis, opleiding en beroepsontwikkeling blijven per beroep gescheiden, omdat samenvoegen het begrip verdunt. De levering, het ontwerp van de ervaring en de coördinatie op de werkvloer, moeten daarentegen geïntegreerd zijn, omdat de gebruiker geen onderscheid maakt en omdat de beroepen elkaar in de praktijk tegenkomen bij nooddeuren, toegangscontrole en meldingen. Dat vraagt om een structuur waarin twee disciplines onder één coördinatie werken, met een expliciete hiërarchie voor conflictgevallen zoals de voorrangsregel dat life safety boven securityeisen gaat. Het antwoord op de vraag van het boek is dan niet samenvoegen of scheiden, maar scheiden in kennis en integreren in praktijk." },
{ type: "oefening", id: "h7-oef-4", niveau: "gevorderd", vraag: "Brooks en Coole noemen drie krachten die de divergentie zullen vergroten. Beoordeel of die krachten ook in Nederland werken, en of er tegenkrachten zijn.", antwoord: "De drie krachten zijn grotere aversie tegen maatschappelijk risico, hogere verwachtingen van beroepen, en het streven van beide beroepen naar erkende beroepsstatus. Alle drie zijn in Nederland herkenbaar. Risicoaversie zie je in de toenemende eisen na incidenten, precies de mechaniek uit hoofdstuk 1. Hogere verwachtingen van beroepen zie je in de professionalisering van de veiligheidskundige, met eigen registers en certificeringen, en in de opkomst van registers voor beveiligingsadviseurs. Het streven naar beroepsstatus zie je aan beide kanten: veiligheidskunde heeft geaccrediteerde opleidingen en een beroepsvereniging, en de securitysector werkt aan eigen keurmerken. Er zijn echter ook tegenkrachten die Brooks en Coole niet noemen. Ten eerste ontstaan er opleidingen, zoals SSMS zelf, die bewust beide domeinen in één curriculum onderbrengen en professionals afleveren die in beide kennisdomeinen thuis zijn. Ten tweede vraagt de markt, met name bij kritieke infrastructuur en grote evenementen, steeds vaker om integrale veiligheidsadviseurs die beide talen spreken. Ten derde dwingt regelgeving rond kritieke infrastructuur, zoals Europese richtlijnen voor weerbaarheid, organisaties om safety en security in één weerbaarheidsplan te vatten. De conclusie is dat de beroepen op het niveau van kennis en beroepsvereniging inderdaad uiteen kunnen groeien, terwijl er op het niveau van de arbeidsmarkt en de opleidingen een tegenbeweging naar integrale profielen bestaat. Beide bewegingen tegelijk zijn precies wat je als SSMS-student ervaart: je leert twee kennisdomeinen die elk hun eigen richting op bewegen, om ze in de praktijk samen te brengen." }
] },
{ id: "checken", titel: "Checken", blokken: [
{ type: "quiz", titel: "Check jezelf op hoofdstuk 7", vragen: [{ vraag: "Wat is de onderzoeksvraag van Brooks en Coole?", opties: ["Moeten safety en security worden samengevoegd?", "Laten de kenniscategorieën van safety- en securitywetenschap professionele divergentie zien?", "Welk beroep is belangrijker?", "Kunnen safetyprofessionals securitytaken uitvoeren?"], juist: 1, uitleg: "Ze beantwoorden de vraag via kennisdomeinen, omdat kennis het meest stabiele en toetsbare kenmerk van een beroep is." }, { vraag: "In welke contexten worden safety en security in dit hoofdstuk vergeleken?", opties: ["Nationale veiligheid en verkeersveiligheid", "Occupational Health and Safety en corporate security", "Brandveiligheid en cybersecurity", "Luchtvaartsafety en luchthavensecurity"], juist: 1, uitleg: "Safety bakent zichzelf af tot de werkplek; security moest worden ingeperkt omdat het op een continuüm van staat tot buurt ligt." }, { vraag: "Wat is volgens het hoofdstuk het belangrijkste kenmerk van een beroep?", opties: ["Een hoog salaris", "Een beschermde titel", "Een ondersteunend academisch kennisdomein", "Een vergunning van de overheid"], juist: 2, uitleg: "Zo'n kennisdomein heeft een systematische structuur, logische relaties tussen concepten en een voorspellende functie, en legitimeert professioneel werk." }, { vraag: "Hoeveel kenniscategorieën bevat het ASIS-securitymodel uit 2009?", opties: ["6", "13", "18", "25"], juist: 2, uitleg: "Van fysieke beveiliging tot CPTED. Brooks stelde zelf 13 categorieën voor, verdeeld in kern en ondersteunend." }, { vraag: "Welke drie professionele taken vormen de structuur van risicobeheersing in beide beroepen?", opties: ["Plannen, uitvoeren, controleren", "Diagnose, inferentie, behandeling", "Deter, delay, detect", "Identificeren, analyseren, evalueren"], juist: 1, uitleg: "Bewust ontleend aan de medische praktijk om het werk als beroep te positioneren." }, { vraag: "Op welke vier punten vonden Brooks en Coole overeenstemming tussen de kennisdomeinen?", opties: ["Wetgeving, technologie, theorie, ethiek", "Risicomanagement, controls, management, professionele praktijk", "Hazards, threats, misdaad, ongevallen", "Opleiding, accreditatie, vergunning, salaris"], juist: 1, uitleg: "Daartegenover stonden polariteiten op hazards tegenover threats, technologie en onderliggende theorie." }, { vraag: "Wat is het verschil tussen hazard en threat?", opties: ["Hazard is groter dan threat", "Hazard is een gevaar dat blootstelt aan letsel of verlies; threat is de doelgerichte intentie en het vermogen van een tegenstander", "Hazard is fysiek, threat is digitaal", "Er is geen verschil"], juist: 1, uitleg: "Safety bekijkt risico vanuit hazards met accidentele drijvers, security vanuit threats met kwaadwillende intentie." }, { vraag: "Waarop richten securitycontrols zich volgens het hoofdstuk?", opties: ["Menselijke fouten en naleving", "Fysieke verharding om te ontmoedigen en te vertragen, technologie om te detecteren, personeel om te reageren", "Training en bewustwording", "Ergonomie en werkplekontwerp"], juist: 1, uitleg: "Safetycontrols zijn juist mensgericht, met aandacht voor menselijke fouten en compliance." }, { vraag: "Wat is het verschil in wetgeving tussen beide beroepen in Australië?", opties: ["Security heeft strengere wetgeving", "Safety heeft expliciete wetgeving die een gekwalificeerde adviseur verplicht; security heeft geen wetgeving over de beroepspraktijk behalve een vergunning", "Beide hebben dezelfde wetgeving", "Geen van beide heeft wetgeving"], juist: 1, uitleg: "Dat verklaart mede waarom safety verder is op de weg naar beroepsstatus." }, { vraag: "Wat is volgens Smith en Brooks de verhouding tussen life safety en securityeisen?", opties: ["Security gaat altijd voor", "Life safety-systemen hebben voorrang op securityeisen", "Ze zijn gelijkwaardig", "Dat hangt af van de organisatie"], juist: 1, uitleg: "Life safety is het enige gebied waar de safetyprofessional volgens INSHPO een securityfunctie heeft." }, { vraag: "Wat gebeurt er volgens Brooks en Coole als je de beroepen samenvoegt tot één praktijk?", opties: ["De kosten dalen", "Het begrip en de grenzen van beide worden verdund", "De kwaliteit stijgt", "Er ontstaat een nieuw beroep"], juist: 1, uitleg: "Samenvoegen is niet hetzelfde als samenwerken. Het argument is tegen naïeve integratie, niet tegen coördinatie." }, { vraag: "Welke drie krachten zullen de divergentie vergroten?", opties: ["Technologie, globalisering, digitalisering", "Grotere aversie tegen maatschappelijk risico, hogere verwachtingen van beroepen, en het streven naar beroepsstatus", "Wetgeving, budget, terrorisme", "Opleidingen, verenigingen, overheid"], juist: 1, uitleg: "Het is een voorspelling over waar de beroepen heen bewegen, geen advies dat ze uiteen moeten." }] },
{ type: "bronnen", items: [{'apa': 'Brooks, D. J., & Coole, M. (2020). Divergence of safety and security. In C. Bieder & K. Pettersen Gould (Eds.), The coupling of safety and security (pp. 63–73). Springer.'}, {'apa': 'Abbott, A. (1988). The system of professions: An essay on the division of expert labour. University of Chicago Press.'}, {'apa': 'ASIS International (2009). Security body of knowledge.'}, {'apa': 'Brooks, D. J. (2009). What is security: Definition through knowledge categorization. Security Journal, 23(3), 225–239.'}, {'apa': 'Brooks, D. J., Coole, M., & Corkill, J. (2018). Revealing community security within the Australian security continuum. Security Journal, 31(1), 53–72.'}, {'apa': 'Coole, M., Brooks, D. J., & Minnaar, A. (2017). Educating the physical security professional: Developing a science based curriculum. Security Journal, 1–24.'}, {'apa': 'Criscuoli, E. J. (1988). The time has come to acknowledge security as a profession. Annals of the American Academy of Political and Social Science, 498(1), 98–107.'}, {'apa': 'INSHPO (2017). The occupational health and safety professional capability framework: A global framework for practice.'}, {'apa': 'Jore, S. H. (2017). The conceptual and scientific demarcation of security in contrast to safety. European Journal for Security Research.'}, {'apa': 'Pryor, P. (2015). Accredited OHS professional education: A step change for OHS capability. Safety Science, 18, 5–12.'}, {'apa': 'Smith, C. L., & Brooks, D. J. (2013). Security science: The theory and practice of security. Butterworth-Heinemann.'}, {'apa': 'Walby, K., & Lippert, R. K. (2014). Corporate security in the 21st century. Palgrave Macmillan.'}] },
{ type: "preview", titel: "Van beroep naar organisatie", tekst: "Brooks en Coole keken naar wat professionals weten. La Porte kijkt in hoofdstuk 8 naar wat er gebeurt als een grote technische organisatie beide tegelijk moet leveren, en welke puzzels dat oplevert voor wie de organisatie leidt.", punten: ['Wat een grootschalige technische organisatie is en waarom die zo bijzonder is', 'Welke organisatorische en operationele puzzels ontstaan als safety en security tegelijk worden geëist', 'Een gids voor empirisch onderzoek, en wat de hoogste leiding ermee moet'] }
] }
];

LESSTOF["intro-to-safety-security/h8"] = [
{ id: "voor", titel: "Voorbereiding", blokken: [
{ type: "leerdoelen", items: ["Uitleggen wat een grootschalige technische organisatie is en waarom La Porte juist daar zijn ervaring vandaan haalt", "Het verschil in ritme tussen safety- en securityfuncties beschrijven, en waarom dat verschil spanning oplevert", "De vijf oriënterende onderzoeksvragen van La Porte reproduceren", "Uitleggen wat een gedachte-experiment in de trant van \"hoe is het om daar te zijn\" inhoudt en waarvoor het dient", "De vier situaties en de operationele aannames benoemen, met nadruk op padafhankelijkheid", "De 2x2-matrix van safety- en securityregimes reproduceren, met per cel voorbeelden en de sleutelvraag", "De vier condities beschrijven die de ervaring van operators vormen", "Uitleggen wat versterkte complexiteit, apraxisch potentieel en schakelregimes zijn", "De aanname en twee hypothesen over schakelprotocollen reproduceren", "De verplichtingen van de hoogste leiding uit paragraaf 8.6 noemen en uitleggen wat \"voorbereiden op verrassing\" betekent"] },
{ type: "uitleg", titel: "Wie is La Porte en waarom is dit hoofdstuk zo anders", tekst: "**Todd La Porte** is emeritus hoogleraar politieke wetenschappen aan de University of California, Berkeley. Hij is een van de grondleggers van het onderzoek naar **High Reliability Organizations** (HRO's): organisaties die met intrinsiek gevaarlijke technologie werken en toch bijna nooit een ramp meemaken. Kerncentrales, vliegdekschepen, luchtverkeersleiding. Hij bestudeerde die organisaties tientallen jaren van binnenuit, en deed vijf jaar lang periodiek veldonderzoek bij een Amerikaans kernwapenlaboratorium.\n\nDat verklaart de toon van dit hoofdstuk. Het is geen betoog met een stelling en een bewijs. Het is een **onderzoeksagenda**: een ervaren waarnemer die zegt \"dit is wat ik heb gezien, dit is wat we nog niet weten, en zo zou je het kunnen onderzoeken\". La Porte noemt het zelf een \"prospectieve gids voor avontuurlijke empirische waarnemers\".\n\nHij waarschuwt bovendien in een voetnoot dat ruimtegebrek hem dwingt tot een \"ongebruikelijk cryptische, spaarzame uitleg\". Dat merk je. Dit hoofdstuk is compact, associatief, en soms half uitgeschreven. Deze les vult in wat hij laat liggen." },
{ type: "slimmer", titel: "Hoe je een onderzoeksagenda leest", tekst: "Bij de meeste hoofdstukken kun je vragen: wat is de conclusie? Bij dit hoofdstuk is dat de verkeerde vraag. La Porte trekt geen conclusies; hij formuleert **vragen, aannames en hypothesen** die iemand nog moet toetsen.\n\nWat je dus moet kunnen:\n\n1. De **vragen** reproduceren die hij stelt.\n2. De **aannames** kennen waarmee hij werkt, vooral padafhankelijkheid.\n3. De **2x2-matrix** uit je hoofd kunnen tekenen, met voorbeelden en sleutelvragen.\n4. De **twee hypothesen** over schakelprotocollen begrijpen.\n5. Uitleggen wat hij bedoelt met **voorbereiden op verrassing** en wat dat van de leiding vraagt.\n\nOnthoud ook waar dit hoofdstuk zit in het boek: het is de eerste van de drie management-hoofdstukken, en het is de brug tussen Brooks en Coole (twee beroepen) en Schulman (één managementkader)." }
] },
{ id: "kern", titel: "Kernstof", blokken: [
{ type: "tekst", titel: "8.1 De vraag van het hoofdstuk", toetsstof: true, tekst: "In het afgelopen decennium is de **publieke aandrang** op zowel safety- als securityprocessen toegenomen, terwijl de primaire verwachting blijft dat organisaties **betrouwbaar hun operatie of missie** uitvoeren. Het samenvoegen van die capaciteiten omvat activiteiten die vaak **moeilijk te integreren** zijn.\n\nDe centrale vraag, letterlijk uit de tekst:\n\n**Welke puzzels in organisatieontwerp en operatie ontstaan wanneer \"safety in de operatie\" en daarna \"security tegen externe dreiging\" worden geëist van organisaties en publieke instellingen, terwijl hun kerntechnologieën groeien in schaal en complexiteit?**\n\nLet op de volgorde in de titel en in de vraag: safety, **en dan** security. Dat \"en dan\" is geen toeval. Het is de historische volgorde uit hoofdstuk 1, en het wordt straks een van de belangrijkste variabelen: wie er eerst was.\n\nHet essay verkent de mogelijke implicaties, zet een raamwerk op voor empirisch onderzoek, en eindigt met **opdrachten voor bestuurders en sleutelfiguren in de operatie**." },
{ type: "tekst", titel: "Waar de kennis vandaan komt", toetsstof: true, tekst: "La Porte vermeldt in een voetnoot dat zijn opvattingen zijn gevormd door intensief veldonderzoek bij **grootschalige technische organisaties die intrinsiek gevaarlijke systemen bedienen**. Elk daarvan stond voor grote safety- en securityuitdagingen, terwijl ze buitengewone betrouwbaarheid bereikten:\n\n- kerncentrales,\n- vliegdekschepen,\n- luchtverkeersleiding, de centrale empirische settings van het HRO-project,\n- en vooral een Amerikaans kernwapenlaboratorium van het Department of Energy, vijf jaar lang regelmatig bestudeerd.\n\nDat laatste is belangrijk. Een kernwapenlab is misschien wel de enige plek ter wereld waar safety (radioactief materiaal, explosieven, chemicaliën) en security (spionage, sabotage, diefstal van materiaal) allebei permanent op het hoogste niveau moeten zijn. Het is het extreme geval, en daarom het meest leerzame." },
{ type: "tekst", titel: "8.2 De uitgangspunten: waarom spanning te verwachten is", toetsstof: true, tekst: "Safety- en securityfuncties streven allebei naar het waarborgen van condities die een breed scala aan verzwakkende, mogelijk dodelijke gebeurtenissen vermijden. La Porte noemt dat treffend het **waarborgen van niet-gebeurtenissen** (assuring non-events). Precies het dilemma van Bongiovanni uit hoofdstuk 6: succes is dat er niets gebeurt.\n\nMaar de twee functies verschillen in bron en in ritme:\n\n**Safety** hangt samen met **interne, onvrijwillige condities en gedragingen**. Safetyfuncties worden **vaker geactiveerd, op lagere intensiteit**. Elke dag kleine dingen.\n\n**Security** hangt samen met **opzettelijke daden van externe vijandige actoren die uit zijn op vernietiging**. Securityfuncties worden **zelden geactiveerd, meestal met relatief hoge intensiteit**. Bijna nooit iets, en dan ineens alles.\n\nIn beide gevallen wordt **paraatheid voor snelle respons** hoog gewaardeerd. En omdat alle operationele omgevingen **hardnekkige, onherleidbare ambiguïteit en intrinsiek gevaar** herbergen, zullen er operationele verrassingen en \"inbreuken op de beveiliging\" zijn. Dat is geen falen; dat is de aard van het werk." },
{ type: "uitleg", titel: "Het ritmeverschil is de bron van de spanning", tekst: "Dit is de eerste echt nieuwe bijdrage van La Porte aan het boek, en hij formuleert hem in één zin. Safety is vaak en zacht. Security is zelden en hard.\n\nDenk aan wat dat doet met mensen. Een safetyteam heeft elke week iets te doen: een melding, een inspectie, een bijna-ongeluk. Ze zijn zichtbaar, ze hebben resultaten, ze zijn ingesleten in de dagelijkse routine. Een securityteam wacht. Maanden, jaren. Ze oefenen, ze controleren, maar er gebeurt niets. Tot er iets gebeurt, en dan moeten ze in seconden de hele organisatie overnemen.\n\nTwee teams met totaal verschillende werkritmes, verschillende ideeën over wat \"een goede dag\" is, en verschillende claims op middelen. Het ene team kan zijn nut elke week aantonen, het andere alleen door te zeggen \"er is niets gebeurd\". Dat is een recept voor spanning nog voordat er een inhoudelijk conflict is." },
{ type: "tekst", titel: "Wat analisten en leiders mogen verwachten", toetsstof: true, tekst: "Analisten en ontwerpers moeten verwachten dat de dynamiek en cultuur van safety- en securitywaarborging **voldoende verschillend** zijn om onvermijdelijk legitieme, voortdurend overlappende, soms elkaar versterkende, soms **incommensurabele** vaardigheden en praktijken op te leveren.\n\nDat woord incommensurabel is de kern. Het betekent: **niet op één maat te brengen**. Niet gewoon verschillend, maar verschillend op een manier waarop je ze niet tegen elkaar kunt afwegen met een gemeenschappelijke rekeneenheid.\n\nOperationele leiders mogen daarom verwachten dat er, minstens informeel, **accommodaties** ontstaan tussen vertegenwoordigers van safety- en securityeenheden om spanning en conflict te beperken. De mensen op de werkvloer regelen het onderling, zonder dat het in een beleidsstuk staat.\n\nDe spanningen worden waarschijnlijk **verergerd** wanneer hedendaagse maatstaven van **efficiëntie** worden opgenomen in de criteria voor effectiviteit. La Porte merkt in een voetnoot op dat in de meeste safety- en securitydiscussies de continuïteit van de operatie stilzwijgend op de tweede plaats komt na een veilige omgeving, terwijl in managementdiscours het omgekeerde geldt. Twee werelden die elk het andere doel als bijzaak zien.\n\nHet gevolg: de operationele dynamiek kan **instabiel** worden en beleidsreacties **disfunctioneel**." },
{ type: "tekst", titel: "De vijf oriënterende vragen", toetsstof: true, tekst: "Welke analytische vragen worden urgent als er krachtige publieke eisen zijn om safety- en securityprocessen sterk te verbeteren en te integreren met de kernfuncties van de operatie? La Porte stelt er vijf. Ken ze, want ze structureren de rest van het hoofdstuk." },
{ type: "stappen", items: [{ titel: "In welke mate versterken safety, security en betrouwbare operatie elkaar, en in welke mate belemmeren ze elkaar zodanig dat spanning en conflict ontstaan?", tekst: "Werk dat uit per interactiepaar: safety-security, safety-operatie, security-operatie." }] },
{ type: "tekst", tekst: "2. **Naarmate het potentieel voor spanning tussen safety en security toeneemt, welke organisatiebeleidsmaatregelen en praktijken beperken of verergeren bestaande operationele disfuncties?**" },
{ type: "stappen", items: [{ titel: "In welke mate variëren de spanningen als functie van verschillende soorten institutionele kwaliteitsborgende beperkingen", tekst: "die samenhangen met safety-, security- en operationele activiteiten in de relevante domeinen? En **als functie van verschillende nationale regelgevingspatronen?**" }] },
{ type: "stappen", items: [{ titel: "Welke processen voor het anticiperen op, managen van en omgaan met mogelijk disfunctionele dynamiek worden gepraktiseerd?", tekst: "Onder welke omstandigheden worden ze ingezet?" }] },
{ type: "tekst", tekst: "5. **Wat zijn de dynamiek en de gevolgen van relatieve budgetdaling?**\n\nDit zijn veeleisende vragen, afgeleid van conceptuele speculatie, analytische vermoedens en de ervaring van diepgaande waarnemers. **\"Thick descriptions\"** in de antwoorden zijn schaars. Scherp analytisch werk moet nog worden gedaan. Aanzienlijk kwalitatief observationeel veldwerk is noodzakelijk, en buitengewoon veeleisend. Waar moeten schaarse onderzoeksmiddelen heen? Wat volgt is een soort **prospectieve gids** voor avontuurlijke empirische waarnemers." },
{ type: "uitleg", titel: "Wat \"thick description\" betekent", tekst: "De term komt van de antropoloog Clifford Geertz. Een \"dunne\" beschrijving zegt: de man knipperde met zijn oog. Een \"dikke\" beschrijving zegt: de man knipoogde naar zijn collega om aan te geven dat de baas het niet moest horen, en de collega begreep dat omdat ze dit al jaren zo doen.\n\nLa Porte zegt dus: we hebben nauwelijks beschrijvingen van hoe safety en security **werkelijk** samen worden gedaan op de werkvloer, met alle betekenissen, gewoonten en stilzwijgende afspraken die erbij horen. We hebben modellen en definities, maar geen verhalen van binnenuit.\n\nDat is precies het gat dat hoofdstuk 1 aanwees: het meeste onderzoek gaat over engineering en concepten, bijna niets over de praktijk. La Porte stelt voor hoe je dat gat gaat vullen." },
{ type: "tekst", titel: "8.3 Het gedachte-experiment: hoe is het om daar te zijn", toetsstof: true, tekst: "La Porte begint met een gedachte-experiment van het type **\"what's it like to be there\"**. Het doel is drieledig:\n\n1. intuïtief, conceptueel geïnformeerd **verbeelden** op gang brengen,\n2. onderzoek suggereren in de geest van **\"wat moeten we hierna weten\"**,\n3. de basis leggen voor hypothesen en studies in formeler analytisch discours.\n\nDe opdracht: hoe is het om centraal betrokken te zijn bij het uitvoeren van safety- of securityfuncties in een **zeer betrouwbaar presterende** grote publieke of productieorganisatie? Kies er een die in **rustige harmonie** verkeerde, en waar nu de spanning oploopt. Identificeer situaties waarin safety en security, als ze elk effectief worden gedaan, elkaar **overlappen en dan dreigen op te heffen**. Stel je voor hoe organisatienormen en praktijken zich mengen op manieren die tegenstrijdige sets van vaardigheden en interacties oproepen. Hoe worden die tegenstrijdigheden herkend? Welke condities maken het moeilijk ze te vermijden?\n\nEn dan de grotere vragen: welke nationale institutionele condities stellen operators, burgers en maatschappelijke leiders in staat om zich **\"voor te bereiden op verrassing\"**, om **\"onvoorbereid te zijn\"**? In welke mate beperken die condities de kans op institutionele veerkracht bij ernstige tekorten in maatschappelijke veiligheid of nationale veiligheid?" },
{ type: "voorbeeld", titel: "Elkaar opheffen als beide goed worden gedaan", tekst: "Dit is het scherpste idee in het hoofdstuk, en het is subtiel. Het gaat niet om safety die slecht wordt gedaan en daarom security schaadt. Het gaat om safety die **goed** wordt gedaan en **daardoor** security ondermijnt, en andersom.\n\nEen kerncentrale. Safety eist dat elke medewerker overal snel bij kan in een noodgeval, en dat procedures en tekeningen van de installatie breed bekend zijn zodat iedereen weet wat te doen. Hoe beter dat is geregeld, hoe veiliger. Security eist dat toegang strikt gecompartimenteerd is en dat tekeningen van de installatie geheim blijven. Hoe beter dat is geregeld, hoe beter beveiligd.\n\nAllebei uitstekend uitgevoerd, en ze heffen elkaar op. Niet door een fout, maar door hun eigen succes. Dat is wat La Porte bedoelt met \"organisatorische maalstromen\", en het is een ander soort probleem dan een botsing die je met een compromis oplost." },
{ type: "tekst", titel: "A. Eerste oriëntatie: neem het standpunt van de operator", toetsstof: true, tekst: "Neem het standpunt van de **operators**, de leden van de teams die de wisselende taakeisen uitvoeren en effectieve netwerkervaringen waarborgen binnen grootschalige organisaties. Zoek groepen die de intrinsieke spanningen van het integreren van de verschillende intensiteiten van safety- en securityregimes **zelfverzekerd hebben begrensd**, onder het oog van waakzame toezichthouders. Hoe zouden de operators zulke situaties framen?\n\nDe antwoorden hangen deels af van de stilzwijgende en expliciete functies, taken en sociale structuren die onder de primaire begrippen zijn geclusterd, safety, security, operatie, en deels van de activiteiten die in het veld worden uitgevoerd door de actoren aan wie safety- of securitymissies zijn toegewezen. **Die denken dat dat is wat ze doen**, voegt La Porte er droog aan toe. Wat mensen denken dat hun taak is, en wat ze feitelijk doen, valt niet altijd samen.\n\nBij het onderzoeken van deze situaties moet je uitgaan van de volgende begrenzende verwachtingen. Verwacht sterk uiteenlopende operationele settings.\n\n**Situatie 1.** De meeste organisaties werken in een situatie waarin safetyactiviteiten en securityfuncties (waakzaamheid) elkaar in de dagelijkse interactie **overwegend aanvullen**. De vereiste activiteiten zijn bescheiden en vallen binnen versterkte, deconflicterende toleranties. Velen zitten in de **\"satisficing zone\"** voor safety- en securitymanagementeisen: goed genoeg, niet optimaal, en niemand heeft daar last van.\n\n**Situatie 2.** Interne spanningen rond safety en security variëren als reactie op de mate van **waargenomen externe druk** om safety- en/of securitymaatregelen in verschillende delen van de operatie te verhogen." },
{ type: "tekst", titel: "B. Operationele aannames", toetsstof: true, tekst: "Twee aannames waarmee La Porte werkt, en die je moet kennen omdat ze de richting van alles wat volgt bepalen.\n\n**Aanname over gevaar.** Huidige technische en omgevingsveranderingen zullen de relatief gevaarlijke aard van operaties **voortdurend vergroten**, zodat een hogere dichtheid van zowel safety- als securityregimes zal worden geëist.\n\n**Aanname over beleid.** Beleidseisen roepen **vrijwel nooit** om een openlijke vermindering van safety- of securitycapaciteit zodra die is gevestigd. \"Gevaarpotentieel\" en \"omgevingskwetsbaarheid\" veranderen in **één richting**: groter intern gevaar, grotere externe kwetsbaarheid.\n\nDat is de openingsstelling van hoofdstuk 1 in zijn hardste vorm: het gaat alleen maar omhoog. Nooit wordt er een beveiligingslaag weggehaald omdat de dreiging is afgenomen.\n\n**Situatie 3.** De technische kern en actiedynamiek van elk operationeel domein hangen samen met functioneel goed doorgelichte vaardigheids- en gezagsrelaties, binnen en tussen organisaties. Die worden uitgevoerd door teams die variëren van **geen enkele overlap** tussen operationeel, safety- en securitypersoneel, dus gescheiden silo's, tot teams waarin **dezelfde leden alle drie de functies** uitvoeren in verschillende, volledig geïntegreerde, netwerkachtige arrangementen. Daarbij horen erkende actieopties en geneste gezagsconfiguraties.\n\n**Situatie 4: padafhankelijkheid.** Dit is de belangrijkste van de vier. Padafhankelijkheidseffecten zijn **bepalend**. Elke setting wordt in de tijd gevormd door **\"wie er het eerst was\"**: degenen die de aanvankelijke operationele dynamiek van primair belang vestigen, bepalen het speelveld voor de ervaring van wie later komt. Daarom worden organisatiereacties op de eis van beleidsmakers om safety en security te integreren **overwegend gevormd door welke functie, safety of security, het eerst was gevestigd**. Spanningen tussen safety en security zullen, als ze ontstaan, waarschijnlijk **verschillende verschijningsvormen** aannemen afhankelijk van de vestigingsvolgorde." },
{ type: "uitleg", titel: "Waarom padafhankelijkheid het hele hoofdstuk draagt", tekst: "Padafhankelijkheid is een begrip uit de economie en de sociologie: de keuzes van vroeger beperken de keuzes van nu, ook als de omstandigheden zijn veranderd. Het klassieke voorbeeld is het QWERTY-toetsenbord: ooit ontworpen om typemachines niet te laten vastlopen, nu onveranderbaar omdat iedereen het heeft geleerd.\n\nToegepast op dit hoofdstuk: een luchthaven die vijftig jaar safety heeft gedaan en na 2001 security erbij krijgt, is een compleet andere organisatie dan een militaire basis die altijd security heeft gedaan en nu strengere arbeidsveiligheid moet invoeren. In de eerste is security de nieuwkomer die zich moet invechten tegen een gevestigde safetycultuur. In de tweede is het andersom.\n\nDezelfde eis, integreer safety en security, levert dus twee totaal verschillende conflicten op. Dat is waarom je nooit kunt zeggen \"zo integreer je safety en security\" zonder eerst te vragen: wie was hier het eerst? De titel van het hoofdstuk, \"Doing safety, and then security\", is één van die twee paden." },
{ type: "tekst", titel: "8.4 Interacties en uitkomsten verbeelden: de vier condities", toetsstof: true, tekst: "Neem nu, binnen die verwachtingen (die in het veld getoetst moeten worden), de rol aan van experimentator en waarnemer bij het verkennen van de gedragsdynamiek die waarschijnlijk ontstaat na aanhoudende eisen tot integratie van beide regimes. Stel je bij elke conditie in tabel 8.1 voor wat het effect is op de dagelijkse netwerkdynamiek van operators en middenmanagers. Welke gedragingen zouden een waarnemer moeten opvallen?\n\nTwee vragen vooraf: welke vaardigheden en ervaringen zijn nodig voor soepele, effectieve reacties in de domeinen waarin je gewoonlijk werkt? En welke reacties zijn waarschijnlijk als politieke toezichthouders of regelgevers nieuwe safety- of securityveranderingen zouden eisen?\n\nDe vier condities die de ervaring van operators vormen (tabel 8.1):" },
{ type: "stappen", items: [{ titel: "Robuustheid", tekst: "van de safety- en securitycondities (V1) en de **beleidseisen** (V2)" }, { titel: "Gelaagdheid", tekst: "van de safety- en securitymaatregelen van de organisatie" }, { titel: "Relatieve operationele schaal", tekst: "zoals weerspiegeld in de regimes" }, { titel: "Publieke verwachting", tekst: "en stilzwijgend begrip" }] },
{ type: "tekst", tekst: "La Porte behandelt condities 1 en 2 het uitvoerigst, en 3 en 4 kort." },
{ type: "tekst", titel: "Conditie 1: de 2x2-matrix van uitgangssituaties", toetsstof: true, tekst: "Variaties in de operationele condities (V1) en de potentiële operationele veranderingen die worden geïmpliceerd door toegenomen beleidseisen tot integratie (V2).\n\nEen **optimale uitgangssituatie** is er een waarin (i) safety- en (ii) securitycapaciteiten worden gezien als volledig gevestigd en bevredigend aanwezig op de verwachte gevaarniveaus: \"alles is in orde\", wat het niveau van de verwachte capaciteit ook is. Maar situaties variëren en eisen tot verbetering kunnen escaleren, waardoor regimes moeten intensiveren en volledig geïntegreerd raken. Zulke veranderingen in beleidsaandrang kunnen de ervaringen en interacties van operators met het middenmanagement dramatisch beïnvloeden, en bestaande operationele evenwichten verstoren.\n\nFiguur 8.1 zet de mogelijke uitgangssituaties in een matrix, met Amerikaanse voorbeelden:" },
{ type: "tabel", kop: ["", "**Security goed op orde (Hi)**", "**Security moet beter (Lo)**"], rijen: [["**Safety goed op orde (Hi)**", "**Cel I:** kerncentrales, nucleaire vliegdekschepen", "**Cel II:** NASA, elektriciteitsnet, luchtvaart, transport"], ["**Safety moet beter (Lo)**", "**Cel III:** inlichtingen-IT, militaire eenheden, wapenlaboratoria", "**Cel IV:** ziekenhuizen, lokale en regionale overheid"]] },
{ type: "tekst", tekst: "*Teken deze matrix tot je hem uit je hoofd kent. Elke cel heeft een eigen sleutelvraag, en die vragen zijn de kern van de toetsstof.*\n\n**Cel I, Hi/Hi: beide volledig gevestigd en in stand gehouden.** Dit is een **zeldzame** combinatie. Interne gevaren en dreigingen voor het systeem worden als aanzienlijk beschouwd en herbergen potentieel voor tactische of strategische aanval, dus een verhoogd noodplan. Voorbeelden: nucleaire vliegdekschepen en kernenergieproductie. **Sleutelvraag: wat gebeurt er als de middelen om dit in stand te houden worden overweldigd?**\n\n**Cel II, Hi/Lo: operatie en safety goed gevestigd, security moet omhoog.** Denk aan civiele organisaties die te maken krijgen met toenemende vijandigheid en dreiging, met daaropvolgende eisen om de securitycapaciteit \"op te schalen\". Voorbeelden: NASA, luchtvaart, transport. **Sleutelvraag: krijgen de gevestigde safetygroepen de flexibiliteit om zich aan te passen en effectief te blijven? Worden hun middelen weggehaald naar securityfuncties?**\n\n**Cel III, Lo/Hi: security goed gevestigd, safety moet omhoog.** Denk aan quasi- of volledig militaire organisaties die onder druk komen om letsel en intern veroorzaakte schade aan faciliteiten te verminderen met opgeschaalde safetysystemen. Voorbeelden: Amerikaanse wapenlaboratoria, vroeger vliegdekschepen, sommige inlichtingendiensten, lokale politiekorpsen. **Sleutelvraag: kunnen de operaties van de securitygroep de safetynieuwkomers aanvullen?**\n\n**Cel IV, Lo/Lo: beide moeten omhoog.** De organisatie zit \"in een diep gat\": een geschiedenis van letsel en schade aan de omgeving, en nu geconfronteerd met vijandige acties van nabije groepen, dus onder dwang. In het verleden was er beperkte behoefte en een stilzwijgende publieke verwachting voor alle publieke instellingen, door beperkte externe dreiging en een beperkt waargenomen intern gevaar (behalve niet-menselijke dreigingen zoals brand, weer en aardbeving). Voorbeelden: NASA, NOAA, academische en analytische organisaties. **Sleutelvraag: in welke mate beseffen leiders de steile toename van middelen die de publieke eisen waarschijnlijk vergen?**\n\n**De analytische uitdaging:** bedenk omstandigheden die deze variaties vertonen. Voorspel, op basis van welke opvattingen over organisatiedynamiek je ook aanhangt, enkele zeer waarschijnlijke oplossingen voor de spanningen die je hebt opgeroepen. En dan twee centrale vragen: hoe eenvoudig kon je dynamieken benoemen die in veldobservatie gezocht kunnen worden? Waar zitten de analytische tekorten?" },
{ type: "voorbeeld", titel: "Cel II is het Nederlandse verhaal", tekst: "La Porte geeft Amerikaanse voorbeelden, maar cel II is precies het pad dat hoofdstuk 1 beschreef voor de Europese luchtvaart: decennialang safety, en na 2001 ineens security erbij, onder druk van EASA en nationale toezichthouders.\n\nZijn sleutelvraag voor die cel is dus jouw sleutelvraag: wat gebeurt er met een gevestigde safetyorganisatie als er een securityfunctie bovenop komt? Krijgt safety de ruimte om zich aan te passen, of worden mensen en budget weggetrokken? Dat is exact wat Pettersen en Bjørnskau in 2015 in Noorwegen onderzochten, en wat ze vonden was dat de twee elkaar in de weg zaten.\n\nDenk ook aan Nederlandse voorbeelden per cel. Cel I: Borssele, de Kernfysische Dienst. Cel II: Schiphol, ProRail, waterschappen. Cel III: Defensie, de AIVD. Cel IV: een gemiddelde gemeente of een regionaal ziekenhuis na een incident. Het model is niet Amerikaans; alleen de voorbeelden zijn dat." },
{ type: "tekst", titel: "Conditie 2: gelaagdheid bij escalerende gevaren en dreigingen", toetsstof: true, tekst: "Naarmate intrinsieke gevaren en externe kwetsbaarheden toenemen, zullen we waarschijnlijk een reeks **gelaagde, steeds strengere en strijdbaardere** operationele reacties zien op de eisen tot geïntegreerde capaciteit. Die ontvouwen zich als functie van toenemend intern gevaar en escalerende externe dreiging.\n\nAanvullende safety- en securityfuncties worden opgelegd **binnen en bovenop** de toegenomen eisen aan technische training en vaardigheid die nodig zijn om de kerntechnologieën en infrastructuren te bedienen. Die toevoegingen variëren van lokale safetyprogramma's op de werkplek tot **volledige systeembescherming tegen externe aanval** op hoge alertheid.\n\nFiguur 8.2 geeft de lagen schematisch weer, van \"safety first\" naar \"security first\":\n\n**Safety als eerste prioriteit:**\n- werkplekveiligheid, alleen safety: interieur en transport op het terrein\n- lokale gevaarlijke stoffen: chemische en stralingsparaatheid en inventaris\n- brandbestrijdingscapaciteit\n- waakzaamheid op drugsgebruik, met testen\n\n*Verschuiving naar security:*\n\n- IT-firewalls\n- fysieke inbraak\n- geïmporteerd chemisch en biologisch gevaar\n- inbreuk door personeel: beveiligde zones, grenscontrole, 24-uurs surveillance\n- aanvalsteams, eerste responders, inlichtingen- en contra-inlichtingencapaciteit\n\n**Security als eerste prioriteit.**\n\nNaast die lagen noemt de figuur de **centrale uitdagingen**: betrouwbaar opereren gedurende **meerdere werkgeneraties**, en het vergroten van betrouwbaarheid in het licht van systeemverrassingen en slimme tegenstanders, terwijl je **enige onvoorbereidheid** moet accepteren.\n\nDe specifieke safetygevaren en securitydreigingen zijn zichtbaar in veel moderne organisaties, publiek en privaat. Reacties erop versterken ook verschillende centrale managementuitdagingen. **Al deze lagen waren zichtbaar in de operatie van grote kernwapenfaciliteiten.** De lezer kent waarschijnlijk andere gevaarlijke of bedreigde settings die andere vormen of lagen van respons hebben ingevoerd, capaciteiten en gedragingen die **grotendeels onzichtbaar** zijn voor de meeste institutionele waarnemers. Die verschijnselen verdienen zorgvuldige kwalitatieve beschrijving." },
{ type: "uitleg", titel: "Wat \"werkgeneraties\" betekent en waarom het ertoe doet", tekst: "Een werkgeneratie is de tijd dat een groep mensen in een organisatie werkt voordat ze wordt vervangen, ruwweg vijftien tot twintig jaar. Een kerncentrale gaat zestig jaar mee. Een kernwapenlab bestaat al tachtig jaar. Dat zijn drie, vier werkgeneraties.\n\nHet probleem: de mensen die de eerste beveiligingslaag hebben ontworpen en weten waarom hij er is, zijn met pensioen. Hun opvolgers erven de laag zonder de reden. En hun opvolgers erven de laag plus drie nieuwe lagen, zonder de reden van geen van alle.\n\nZo stapelen lagen zich op zonder dat iemand ze nog als geheel begrijpt. Elke laag was ooit een goed antwoord op een echte dreiging. Samen vormen ze een structuur die niemand meer kan overzien. Dat is de opmaat naar wat La Porte in paragraaf 8.5 \"versterkte complexiteit\" noemt." },
{ type: "tekst", titel: "Conditie 3: relatieve sociale schaal", toetsstof: true, tekst: "Hoe groter de sociale schaal, hoe complexer, gedifferentieerder en interactiever of onderling afhankelijker de organisatie, en hoe waarschijnlijker het ontstaan van **drievoudig geneste** gezagspatronen (operatie, safety, security) en **latente weerstandsnetwerken**.\n\nLa Porte verwacht dat wanneer operaties massaal en zeer complex zijn, safety **diffuser** is, een gematigd deel van het geheel, terwijl security **relatief beperkt** is, \"in de schaduw, klaar om tevoorschijn te komen\".\n\nVerschillende operationele evenwichtstoestanden variëren van een stabiel, beperkt safetyregime (met security grotendeels latent) tot volledige integratie. Vier korte voorbeelden:" },
{ type: "tabel", kop: ["Organisatie", "Safety", "Security"], rijen: [["Onderwijs", "klein", "minuscuul"], ["Luchtverkeersleiding", "duidelijk aanwezig", "bescheiden, latent, klaar om het commando over te nemen"], ["Vliegdekschepen", "bescheiden", "bescheiden, en op de loer"], ["Wapenlaboratorium", "zichtbaar en voortdurend manifest", "zichtbaar en voortdurend manifest"]] },
{ type: "tekst", tekst: "Let op het patroon: bij bijna elke organisatie is security **latent**. Het is er, maar het houdt zich stil totdat het nodig is. Alleen in het wapenlab zijn beide voortdurend zichtbaar. Dat is de ene organisatie waar La Porte vijf jaar rondliep." },
{ type: "tekst", titel: "Conditie 4: publieke verwachting", toetsstof: true, tekst: "Organisaties die de integratie van safety- en securitysystemen proberen te vergroten, doen dat in de context van het **publieke begrip van en de aandrang op** effectieve programma's, en de gebruikelijke **onwil om die te financieren**.\n\nDat varieert sterk, van (a) beperkte ervaring, hoge verwachting en tegenzin om te betalen (Lo), tot (b) helder besef van de risico's en bereidheid de kosten te dragen, met enige vergevingsgezindheid en tolerantie voor de worsteling die erbij hoort (Hi).\n\n**\"Beste gevallen\" zijn zeldzaam** en omvatten de ervaring met kerncentrales, nationale wapenlaboratoria en onderzeebootoperaties. Precies de organisaties waar het publiek het gevaar begrijpt en daarom bereid is te betalen en fouten te vergeven." },
{ type: "tekst", titel: "8.5 Versterkte complexiteit en schakelregimes", toetsstof: true, tekst: "Tot nu toe is betoogd dat institutioneel beleid en technische ontwikkelingen voortdurend leiden tot **extra gevaarverhogende functies** die veilig moeten worden uitgevoerd, vaak vergezeld van een toenemend potentieel voor of kosten van **massale schade**, fysiek en psychologisch. Daardoor intensiveren de eisen van publiek en toezichthouders voor zowel safety- als securityversterkende maatregelen, met de expliciete verwachting dat ongewenste gebeurtenissen en schade effectief worden **tenietgedaan**.\n\nDie inspanningen worden gelanceerd in operationele domeinen die al een buitengewone verscheidenheid vertonen in:\n\n(i) hun gevestigde uitgangscondities,\n(ii) het scala aan opkomende tegen-dreigingen,\n(iii) de heterogeniteit van securityresponsmaatregelen,\n(iv) een reeks eisen en dynamieken van operators en toezichthouders met aanzienlijk spannings- en incommensurabiliteitspotentieel.\n\nEr zijn waarschijnlijk **patronen die zelfs aandachtige waarnemers zijn ontgaan**. Een bijzonder interessant patroon wil verkend worden: patronen waarvan de subtiliteit en aanwezigheid waarschijnlijk over het hoofd worden gezien zonder relatief zorgvuldig veldonderzoek.\n\nDat hangt samen met de eerste centrale uitdaging van het begin: **identificeer operationele situaties waarin functionele overlap tussen safety en security, als beide effectief worden gedaan, elkaar teniet doet.** Dat zijn **organisatorische maalstromen** waarin normen en praktijken zich mengen op manieren die tegenstrijdige sets van vaardigheden en interacties oproepen. Ze confronteren operationele teams en managers in niches van hoge spanning, en kunnen de plek zijn van **onverwachte manieren van omgaan** ermee." },
{ type: "tekst", titel: "Apraxisch potentieel", toetsstof: true, tekst: "Scherper geformuleerd: de opeenstapeling van goed presterende safety- en securityversterkende functies en teams komt ook met, en vereist, **coördinerende en regelgevend borgende netwerken en personeel** die op de bestaande operationele gemeenschap zijn geënt of erin zijn ingebed.\n\nIn feite worden sociale complexiteiten **versterkt** (amplified) op manieren die vaak vroegere relaties **vervormen** en een hoog **\"apraxisch\" potentieel** herbergen. Dat stelt operationeel personeel voor de hardnekkige uitdaging om **\"on the ground\"** accommodaties te ontwikkelen die het destructieve potentieel van intrinsiek incommensurabele activiteiten verminderen." },
{ type: "uitleg", titel: "Wat apraxie betekent en waarom La Porte dat woord kiest", tekst: "Apraxie is een medische term: het onvermogen om een bekende handeling uit te voeren, terwijl je spieren, zintuigen en begrip intact zijn. De patiënt weet wat een sleutel is, wil de deur openen, kan zijn hand bewegen, en toch lukt het niet. De verbinding tussen weten en doen is verbroken.\n\nLa Porte gebruikt het voor organisaties. Een organisatie met apraxisch potentieel heeft alle onderdelen: bekwame safetymensen, bekwame securitymensen, procedures, budget. En toch kan ze, op het moment dat het moet, de handeling niet uitvoeren, omdat de coördinatie tussen al die goed functionerende delen is vastgelopen. Niemand faalt, en toch werkt het niet.\n\nDat is wat er gebeurt als je lagen blijft stapelen. Elke laag is competent. Het geheel is verlamd. En de enige remedie die La Porte ziet, zijn de informele afspraken die mensen op de werkvloer onderling maken." },
{ type: "tekst", titel: "Schakelregimes", toetsstof: true, tekst: "Organisatorische vaardigheidsgroepen vertonen **duale of parallelle** safety- en securitycompetenties, elk met mogelijk verschillende operationele regels. Die situatie zou kunnen leiden tot geplande en geoefende regimes die **schakelen** van (a) overwegend safetyprocessen naar securityprocessen, of van (b) overwegend securityregimes naar safetynadruk, wanneer condities ontstaan waarover **\"hoge consensus\"** bestaat.\n\nEr zijn hardnekkige gevallen die hoge consensus laten zien over de condities voor het overschakelen van safety- naar securityprioriteit, dus van safety-waarborging naar security-versterking. **Omslagpunten** (tipping points) worden herkend door alle operationele en toezichthoudende institutionele en juridische entiteiten, wat de organisatorische grond voor het doorvoeren van operationele veranderingen effent.\n\nStel je voor wat van operators en managers verwacht kan worden bij zo'n dissonant potentieel. La Porte formuleert **een aanname en twee hypothesen**. Dit is het meest concrete deel van het hoofdstuk, dus leer het precies.\n\n**Aanname.** Door steeds heterogenere gevaarlijke operaties over sterk uiteenlopende dienstverleningsgebieden is er een groeiend scala aan verschillende situaties die **bekend zijn bij ervaren operators ter plaatse**, maar die **buiten het kennisbereik liggen van de meeste hogere managers**, tenzij die directe, \"dicht bij het gevaar\" operationele ervaring hebben in het relevante domein.\n\n**Hypothese 1.** Operators en \"dicht bij het gevaar\"-managers ontwikkelen, om verwarring te beperken bij snel ontvouwende safety- of securitybedreigende situaties, **regels van engagement en operationele activiteiten met hoge consensus** over het overschakelen van het ene proces naar het andere. Elke set heeft activiteiten en triggers die **die van de andere niet versterken**.\n\n**Hypothese 2.** **Schakelprotocollen** van de ene set prioriteiten en procedures naar de andere zijn hoofdzakelijk het domein van **\"dicht bij het gevaar\" werkgroepen en het leidinggevend management** op dat niveau." },
{ type: "voorbeeld", titel: "Het omslagpunt op een station", tekst: "Een groot treinstation draait in safetymodus: mensen moeten vlot doorstromen, nooduitgangen zijn open, medewerkers helpen reizigers. Dan komt er een melding van een verdacht pakket.\n\nHet omslagpunt is het moment waarop de stationsmanager, of vaker de dienstdoende coördinator op het perron, zegt: we gaan over naar securitymodus. Nu worden zones afgesloten, worden mensen tegengehouden in plaats van doorgelaten, gaan er deuren dicht die net nog open moesten.\n\nWat La Porte zegt: dat omslagpunt wordt niet bepaald door de directie in het hoofdkantoor. Het wordt herkend en uitgevoerd door de mensen op het perron, die hebben geleerd, vaak informeel, welke signalen het schakelen rechtvaardigen. En de securityprocedures die dan ingaan versterken de safetyprocedures niet; ze vervangen ze. Dat is hypothese 1 en 2 in één voorbeeld." },
{ type: "tekst", titel: "Wat volgt voor management en onderzoek", toetsstof: true, tekst: "Naarmate patronen van onbekende, riskante situaties en nieuwe dreigingen intensiveren, groeit voor de **hoogste leiding** de noodzaak om:\n\n(i) aan te dringen op het aannemen van **nieuwe vaardigheden**,\n(ii) het vermogen tot **interne schakeling** te **legitimeren**, via personeels- en teamontwikkeling en training,\n(iii) blijvende **steun van toezichthouders** te verzekeren voor zulke duale capaciteiten,\n(iv) **publiek begrip en geduld** voor de respectieve behoeften in stand te houden en te vergroten.\n\nTegelijkertijd vergroten de condities die de noodzaak veroorzaken om (i) systeemsafety te intensiveren, dus bekende gevaren sterk te verminderen, en (ii) agressieve externe aanvallen af te weren die bedoeld zijn om te verlammen of te vernietigen, dus de afwezigheid van roofzuchtig lijden te waarborgen, ook de **operationele sociale complexiteit tot voorbij zorgvuldig begrip**.\n\nEn dan de zin die de titel van het hoofdstuk verklaart:\n\n**Terwijl diepe kennis sommige verrassingen beperkt, garanderen interne schaal en toenemende complexiteit ze. En vijandige externe pogingen tot misleiding en het zoeken van destructief voordeel dulden hardnekkige, onvermijdelijke onvoorbereidheid.**\n\nWat als het ervaren van verrassing en onvoorbereidheid te verwachten zou zijn, en ervaren zou worden **zonder schuld** en met enige sympathie voor degenen dicht bij het gevaar? Welke patronen zouden dan zichtbaar kunnen, misschien moeten, worden bij analisten en leiders?" },
{ type: "tekst", titel: "8.6 Voorbereiden op (legitieme) verrassing, op (legitieme) onvoorbereidheid", toetsstof: true, tekst: "Een belangrijke opkomende analytische uitdaging zou de ontwikkeling zijn van geloofwaardige **vaardigheden, normen en praktijken** rond \"voorbereiden op verrassing\" tijdens de invoering van maatregelen die safety of security moeten verbeteren.\n\nVerrassingen in elk van beide domeinen zijn waarschijnlijk **systematisch verschillend**. Dat is een functie van onderscheiden (a) bronnen van relatief gevaar en technisch of sociaal veroorzaakte kwetsbaarheden en systeemcomplexiteit, en (b) maatschappelijke variaties in publiek bewustzijn en acceptatie van verrassingen (onvolledige voorspelling) en institutionele onvoorbereidheid, vooral tegenover de agressiviteit van tegenstanders en hun succes in het vinden van zwakheden.\n\nWelke overkoepelende verantwoordelijkheden en verplichtingen voor missie- en institutionele leiders zouden daaruit volgen?\n\nBekwaam hoger leiderschap zou faciliteren: (a) de ontwikkeling van **waakzame betrouwbaarheid en empathie** voor ervaren safety- en securityresponders en -stewards, en (b) het ontstaan van institutionele culturen die hoge waarde hechten aan **geduld en vergeving**, evenzeer als aan leren en verantwoording.\n\nDat brengt drie leiderschapsverplichtingen met zich mee:\n\n**1. Weersta oproepen tot \"efficiënte\" schraalheid.** Het uitdunnen van waakzaamheid, met als gevolg toenemende maatschappelijke ongerustheid. Leg de blijvende dilemma's uit die samenhangen met kortetermijn-ongeduld en de politieke neiging om de waakzaamheid die volgende werkgeneraties nodig hebben, **te weinig middelen** te geven.\n\n**2. Verzeker organisatorisch en publiek begrip** van de stewardship-rollen van safety en security en hun fundamentele bijdragen.\n\n**3. Vergroot het gevoel van eer en de middelen**, boven de operationele kosten, voor safety- en securitystewards. En, in de woorden van La Porte, herinner ons aan onze onderliggende afhankelijkheid van degenen die zich in feite hebben aangemeld om **een kogel op te vangen, ernstige brandwonden of zwaar letsel op te lopen namens ons**." },
{ type: "uitleg", titel: "Waarom dit een radicaal ander soort advies is", tekst: "Bijna elk managementadvies gaat over efficiënter worden: minder verspilling, minder overhead, minder mensen die \"niets doen\". La Porte zegt het tegenovergestelde. Waakzaamheid ziet er van buiten uit als niets doen. De beveiliger die staat te wachten, de safety officer die de zoveelste inspectie loopt zonder iets te vinden. Dat is wat een efficiëntiedenker wil wegsnijden, en dat is precies wat een organisatie met gevaarlijke technologie in leven houdt.\n\nZijn tweede punt is even ongebruikelijk: bouw een cultuur van **vergeving**. Niet omdat fouten niet erg zijn, maar omdat verrassing onvermijdelijk is, en een organisatie die elke verrassing afstraft, leert haar mensen om verrassingen te verbergen. Dat is de just culture uit hoofdstuk 5, maar dan uitgebreid tot security, precies waar Jore twijfelde of het kon.\n\nHet derde punt, eer en middelen voor mensen die letterlijk hun lichaam inzetten, is bijna een moreel appel. Het hoort thuis in een boek over management omdat La Porte gelooft dat je waakzaamheid niet krijgt van mensen die zich niet gezien voelen." },
{ type: "tekst", titel: "Nawoord", toetsstof: true, tekst: "Aandringen op versterkte operatie van zowel safety- als securityfuncties in kritieke organisaties en instellingen wordt steeds waarschijnlijker en noodzakelijker. Reageren op die eisen, het domein van institutionele leiders, senior managers en vooral **ervaren leidinggevende veteranen**, daagt organisaties in een breed spectrum van het maatschappelijk leven al uit. Degenen die verantwoordelijk zijn, nemen de taak vaak op **met weinig voorbereiding en beperkte ervaring**.\n\nSnel vooruitgang boeken in het begrijpen van de condities voor hun harmonieuze samenvoeging én het potentieel voor verlammende disfuncties, vooral de bronnen van intern operationeel conflict, is essentieel. Die verbetering zoeken wordt een grote uitdaging voor de gemeenschap van analytisch scherpe waarnemers van organisatieleven.\n\nDit essay raakt slechts enkele van de meer voor de hand liggende variaties aan. Het overzien van de hoofdstukken van dit boek onthult iets van de bredere reikwijdte van factoren en de breedte van de uitdaging van het weten. **We staan nog net voorbij de startlijn.** Een gedetailleerd beeld van hoe deze factoren de uitkomsten vormen wacht op een aanzienlijke toename van empirische kennis en rigoureus veldwerk, vaak van de meest veeleisende soort. En het is werk dat waarschijnlijk net zo intrigerend en interessant is als belangrijk." },
{ type: "begrippen", titel: "Kernbegrippen uit hoofdstuk 8", items: [{ begrip: "High Reliability Organization (HRO)", definitie: "Organisatie die met intrinsiek gevaarlijke technologie werkt en toch buitengewone betrouwbaarheid bereikt; kerncentrales, vliegdekschepen, luchtverkeersleiding. Het onderzoeksproject waar La Porte uit put." }, { begrip: "Niet-gebeurtenissen waarborgen", definitie: "De kerntaak van safety en security: ervoor zorgen dat schadelijke gebeurtenissen niet plaatsvinden. Succes is onzichtbaar." }, { begrip: "Incommensurabel", definitie: "Niet op één gemeenschappelijke maat te brengen; safety- en securitypraktijken zijn soms zo verschillend dat je ze niet tegen elkaar kunt afwegen." }, { begrip: "Informele accommodatie", definitie: "De onderlinge afspraken die mensen op de werkvloer maken om spanning tussen safety- en securityeenheden te beperken, buiten het formele beleid om." }, { begrip: "Thick description", definitie: "Beschrijving van gedrag inclusief de betekenissen, gewoonten en stilzwijgende afspraken eromheen; volgens La Porte ontbreken die voor de praktijk van safety en security." }, { begrip: "Gedachte-experiment \"hoe is het om daar te zijn\"", definitie: "Onderzoeksmethode waarbij je je verbeeldt hoe het is om safety of security uit te voeren in een betrouwbare organisatie, om hypothesen te genereren." }, { begrip: "Satisficing zone", definitie: "Toestand waarin safety- en securityeisen goed genoeg worden vervuld zonder optimalisatie, en waarin de meeste organisaties in normale tijden verkeren." }, { begrip: "Padafhankelijkheid", definitie: "Het principe dat \"wie er het eerst was\" de dynamiek bepaalt; spanningen nemen een andere vorm aan afhankelijk van of safety of security eerst was gevestigd." }, { begrip: "De 2x2-matrix", definitie: "Vier uitgangssituaties naar robuustheid van safety en security: beide hoog (kerncentrales), safety hoog en security laag (NASA, luchtvaart), safety laag en security hoog (wapenlabs, militairen), beide laag (ziekenhuizen, lokale overheid)." }, { begrip: "Gelaagdheid", definitie: "De opeenstapeling van steeds strengere safety- en securitylagen als reactie op escalerende gevaren en dreigingen, van werkplekveiligheid tot contra-inlichtingen." }, { begrip: "Werkgeneratie", definitie: "De periode waarin één groep mensen een organisatie bemant; kritieke organisaties moeten betrouwbaar opereren over meerdere werkgeneraties heen." }, { begrip: "Latente security", definitie: "Security die in de meeste organisaties in de schaduw aanwezig is, klaar om het commando over te nemen als het nodig is." }, { begrip: "Versterkte complexiteit", definitie: "De toename van sociale complexiteit door het stapelen van goed functionerende functies en de coördinerende netwerken die daarbij horen, wat vroegere relaties vervormt." }, { begrip: "Apraxisch potentieel", definitie: "Het risico dat een organisatie met alle onderdelen intact toch de benodigde handeling niet kan uitvoeren, doordat de coördinatie tussen de delen is vastgelopen." }, { begrip: "Organisatorische maalstroom", definitie: "Situatie waarin safety en security, beide effectief uitgevoerd, elkaar tenietdoen en tegenstrijdige vaardigheden oproepen." }, { begrip: "Schakelregime", definitie: "Gepland en geoefend overschakelen van overwegend safety- naar securityprocessen of andersom, bij condities waarover hoge consensus bestaat." }, { begrip: "Omslagpunt (tipping point)", definitie: "Het moment waarop alle betrokken partijen erkennen dat van safety- naar securityprioriteit moet worden geschakeld." }, { begrip: "Dicht bij het gevaar", definitie: "De operators en direct leidinggevenden die de situaties kennen die hogere managers niet kennen, en die volgens de hypothesen de schakelprotocollen beheersen." }, { begrip: "Voorbereiden op verrassing", definitie: "Het ontwikkelen van vaardigheden, normen en praktijken die ervan uitgaan dat verrassing en onvoorbereidheid onvermijdelijk zijn, en die daar zonder schuld en met vergeving mee omgaan." }, { begrip: "Steward", definitie: "La Portes term voor de safety- en securityprofessional als hoeder, die eer en middelen verdient boven de operationele kosten." }] }
] },
{ id: "toepassen", titel: "Toepassen", blokken: [
{ type: "stappen", titel: "Een organisatie plaatsen en de spanning voorspellen, in zeven stappen", items: [{ titel: "Bepaal wie er het eerst was.", tekst: "Is deze organisatie gebouwd op safety en kwam security er later bij, of andersom? Dat bepaalt welke functie de gevestigde cultuur heeft en welke de nieuwkomer is." }, { titel: "Plaats de organisatie in de matrix.", tekst: "Hoe robuust zijn safety en security nu? Welke cel? Stel de bijbehorende sleutelvraag." }, { titel: "Beschrijf het ritmeverschil.", tekst: "Hoe vaak en hoe intens wordt safety geactiveerd, en hoe vaak en hoe intens security? Wie is zichtbaar en wie is latent?" }, { titel: "Tel de lagen.", tekst: "Welke safety- en securitylagen zijn er in de loop van de tijd bovenop elkaar gelegd? Weet iemand nog waarom elke laag er is?" }, { titel: "Zoek de maalstromen.", tekst: "Waar heffen goed uitgevoerde safety en goed uitgevoerde security elkaar op? Denk aan toegang, informatie, nooduitgangen, meldingen." }, { titel: "Vind het omslagpunt en wie het beheerst.", tekst: "Wanneer schakelt de organisatie van safety- naar securitymodus? Wie beslist dat feitelijk? Zit dat bij de mensen dicht bij het gevaar, zoals de hypothesen voorspellen?" }, { titel: "Toets de leiding aan de drie verplichtingen.", tekst: "Weerstaat ze efficiëntiedruk op waakzaamheid? Legt ze uit wat stewards doen? Geeft ze eer en middelen, en ruimte voor vergeving bij verrassing?" }] },
{ type: "oefening", id: "h8-oef-1", niveau: "basis", vraag: "Leg uit wat La Porte bedoelt met het verschil in ritme tussen safety- en securityfuncties, en waarom dat verschil op zichzelf al spanning oplevert.", antwoord: "Safetyfuncties hangen samen met interne, onvrijwillige condities en gedragingen en worden vaak geactiveerd op lage intensiteit: dagelijks kleine meldingen, inspecties en bijna-ongelukken. Securityfuncties hangen samen met opzettelijke daden van externe vijandige actoren en worden zelden geactiveerd, maar dan met hoge intensiteit. Dat ritmeverschil levert spanning op nog voordat er een inhoudelijk conflict is. Het safetyteam is zichtbaar, heeft voortdurend resultaten en is ingesleten in de routine; het securityteam wacht, oefent en kan zijn nut alleen aantonen door te wijzen op wat niet is gebeurd. Beide claimen middelen en paraatheid, maar met verschillende bewijslast. Voeg daar de eis van efficiëntie aan toe, en de functie die het minst vaak zichtbaar iets doet komt als eerste onder druk. La Porte verwacht daarom dat de dynamiek en culturen van beide voldoende verschillend zijn om incommensurabele praktijken op te leveren, en dat operationele leiders informele accommodaties tussen de eenheden mogen verwachten om de spanning te beperken." },
{ type: "oefening", id: "h8-oef-2", niveau: "basis", vraag: "Teken de 2x2-matrix van La Porte, plaats een Nederlandse organisatie in elke cel en formuleer per cel de sleutelvraag.", antwoord: "De assen zijn de robuustheid van het safetyregime en van het securityregime. Cel I, beide hoog: de kerncentrale Borssele; sleutelvraag: wat gebeurt er als de middelen om beide in stand te houden worden overweldigd? Cel II, safety hoog en security laag: Schiphol of ProRail, organisaties met een lange safetytraditie die na 2001 security erbij kregen; sleutelvraag: krijgen de gevestigde safetygroepen de ruimte om zich aan te passen, of worden hun middelen naar security weggetrokken? Cel III, safety laag en security hoog: Defensie of een inlichtingendienst die strengere arbeidsveiligheid moet invoeren; sleutelvraag: kunnen de securityoperaties de safetynieuwkomers aanvullen? Cel IV, beide laag: een middelgrote gemeente of een regionaal ziekenhuis na een reeks incidenten, met beperkte ervaring en een publiek dat wel eist maar niet wil betalen; sleutelvraag: beseffen de leiders de steile toename van middelen die de publieke eisen vergen? De matrix is geen ranglijst; elke cel beschrijft een eigen uitgangssituatie met een eigen probleem, en de padafhankelijkheid bepaalt hoe de spanning bij integratie zich zal uiten." },
{ type: "oefening", id: "h8-oef-3", niveau: "gevorderd", vraag: "La Porte stelt twee hypothesen over schakelprotocollen. Leg ze uit, bedenk hoe je ze in het veld zou toetsen, en geef aan wat het voor de hoogste leiding betekent als ze kloppen.", antwoord: "De aanname is dat ervaren operators ter plaatse een groeiend aantal situaties kennen die hogere managers niet kennen, tenzij die zelf dicht bij het gevaar hebben gewerkt. Hypothese 1 stelt dat operators en direct leidinggevenden, om verwarring te beperken bij snel ontvouwende dreigingen, regels van engagement met hoge consensus ontwikkelen over het overschakelen van safety- naar securityprocessen en andersom, waarbij de activiteiten en triggers van de ene set die van de andere niet versterken. Hypothese 2 stelt dat die schakelprotocollen hoofdzakelijk het domein zijn van de werkgroepen dicht bij het gevaar en hun directe leiding, niet van het hoger management. Toetsen zou vragen om kwalitatief veldwerk: meelopen met operationele teams in organisaties uit verschillende cellen van de matrix, incidenten en oefeningen observeren, en vastleggen wie feitelijk het omslagpunt herkent en uitroept, welke signalen daarvoor gelden, of die signalen zijn vastgelegd of alleen mondeling worden overgedragen, en of de procedures die daarna ingaan de vorige vervangen of aanvullen. Interviews met hoger management zouden dan moeten uitwijzen of zij die regels kennen. Als de hypothesen kloppen, heeft de hoogste leiding een taak die ze zelf niet kan uitvoeren: ze moet het schakelen legitimeren en faciliteren via training en teamontwikkeling, steun van toezichthouders verzekeren voor duale capaciteiten, en publiek begrip onderhouden, terwijl de feitelijke beslissing op de werkvloer ligt. Dat vraagt om vertrouwen in mensen die iets weten wat de leiding niet weet, en dat is precies waarom La Porte in paragraaf 8.6 pleit voor waakzame betrouwbaarheid, empathie en vergeving in plaats van sturing en afrekening." },
{ type: "oefening", id: "h8-oef-4", niveau: "gevorderd", vraag: "Verbind het begrip apraxisch potentieel met de eerste centrale vraag van het hoofdstuk, en leg uit waarom La Porte informele accommodaties op de werkvloer ziet als het enige tegenwicht.", antwoord: "De eerste centrale vraag is in welke mate safety, security en betrouwbare operatie elkaar versterken dan wel belemmeren, en in het gedachte-experiment wordt dat aangescherpt tot: waar heffen safety en security elkaar op als beide effectief worden uitgevoerd. Dat is geen conflict door slecht werk maar door goed werk, zoals open toegang voor noodhulp die botst met compartimentering tegen indringers. Elke laag die wordt toegevoegd om safety of security te versterken brengt eigen coördinerende en borgende netwerken en personeel mee, geënt op de bestaande operatie. Zo wordt de sociale complexiteit versterkt: relaties vervormen en de organisatie krijgt een hoog apraxisch potentieel, het onvermogen om een handeling uit te voeren terwijl alle onderdelen intact zijn, omdat de coördinatie tussen competente delen is vastgelopen. Formeel beleid kan dat niet oplossen, omdat het probleem juist ontstaat door het stapelen van formeel beleid: elke nieuwe regel is een nieuwe laag. Wat overblijft zijn de accommodaties die operators en direct leidinggevenden onderling ontwikkelen, de informele afspraken over wanneer welk regime geldt, wie wat mag en hoe de tegenstrijdigheid in de praktijk wordt gladgestreken. Die zijn onzichtbaar voor de meeste waarnemers en daarom vraagt La Porte om thick descriptions. Voor de leiding betekent het dat ze die informele oplossingen niet moet wegregelen in naam van efficiëntie of uniformiteit, maar moet erkennen, legitimeren en beschermen, omdat ze het enige zijn wat de organisatie handelingsbekwaam houdt." }
] },
{ id: "checken", titel: "Checken", blokken: [
{ type: "quiz", titel: "Check jezelf op hoofdstuk 8", vragen: [{ vraag: "Uit welk onderzoek put La Porte zijn opvattingen?", opties: ["Enquêtes onder managers", "Veldonderzoek bij grootschalige technische organisaties met gevaarlijke systemen, waaronder vijf jaar bij een kernwapenlaboratorium", "Analyse van ongevalsrapporten", "Laboratoriumexperimenten"], juist: 1, uitleg: "Kerncentrales, vliegdekschepen en luchtverkeersleiding waren de settings van het HRO-project." }, { vraag: "Hoe verschillen safety- en securityfuncties in ritme?", opties: ["Safety is zeldzaam en intens, security is frequent en mild", "Safety wordt vaak geactiveerd op lage intensiteit, security zelden op hoge intensiteit", "Beide worden even vaak geactiveerd", "Security wordt nooit geactiveerd"], juist: 1, uitleg: "Dat ritmeverschil is op zichzelf al een bron van spanning over zichtbaarheid en middelen." }, { vraag: "Wat betekent incommensurabel?", opties: ["Onmeetbaar groot", "Niet op één gemeenschappelijke maat te brengen en dus niet tegen elkaar af te wegen", "Tegenstrijdig", "Onbelangrijk"], juist: 1, uitleg: "Sommige safety- en securitypraktijken zijn niet gewoon verschillend, maar niet vergelijkbaar met een gedeelde rekeneenheid." }, { vraag: "Welke situatie noemt La Porte bepalend?", opties: ["Situatie 1: functies vullen elkaar aan", "Situatie 2: spanning varieert met externe druk", "Situatie 3: teams variëren van silo's tot volledig geïntegreerd", "Situatie 4: padafhankelijkheid, wie er het eerst was"], juist: 3, uitleg: "Spanningen nemen een andere vorm aan afhankelijk van of safety of security eerst was gevestigd." }, { vraag: "Welke organisaties staan in cel I van de matrix (safety hoog, security hoog)?", opties: ["NASA en het elektriciteitsnet", "Ziekenhuizen en lokale overheid", "Kerncentrales en nucleaire vliegdekschepen", "Wapenlaboratoria en inlichtingendiensten"], juist: 2, uitleg: "Een zeldzame combinatie. Sleutelvraag: wat gebeurt er als de middelen om dit in stand te houden op raken?" }, { vraag: "Wat is de sleutelvraag bij cel II (safety hoog, security laag)?", opties: ["Kunnen securityoperaties de safetynieuwkomers aanvullen?", "Krijgen gevestigde safetygroepen de ruimte om zich aan te passen, of worden hun middelen naar security weggetrokken?", "Beseffen leiders de kosten?", "Wat gebeurt er als de middelen op raken?"], juist: 1, uitleg: "Dit is het pad van de civiele luchtvaart na 2001, en het pad dat de titel van het hoofdstuk beschrijft." }, { vraag: "Wat verwacht La Porte over security in de meeste grote organisaties?", opties: ["Dat het de dominante functie is", "Dat het relatief beperkt en latent is, in de schaduw, klaar om tevoorschijn te komen", "Dat het is samengevoegd met safety", "Dat het ontbreekt"], juist: 1, uitleg: "Alleen in het wapenlab zijn safety en security beide voortdurend zichtbaar." }, { vraag: "Waar komt de term apraxie vandaan en wat betekent hij bij La Porte?", opties: ["Uit de economie; het betekent inefficiëntie", "Uit de geneeskunde; het onvermogen een bekende handeling uit te voeren terwijl alle onderdelen intact zijn", "Uit de wiskunde; het betekent onoplosbaar", "Uit het recht; het betekent onbevoegd"], juist: 1, uitleg: "Een organisatie met competente delen die als geheel verlamd raakt door versterkte complexiteit." }, { vraag: "Wat stelt hypothese 2 over schakelprotocollen?", opties: ["Ze worden opgesteld door de directie", "Ze staan in de wet", "Ze zijn hoofdzakelijk het domein van werkgroepen dicht bij het gevaar en hun directe leiding", "Ze bestaan niet"], juist: 2, uitleg: "De aanname daarbij is dat hogere managers de relevante situaties niet kennen, tenzij ze zelf dicht bij het gevaar hebben gewerkt." }, { vraag: "Welke van de volgende is géén leiderschapsverplichting uit paragraaf 8.6?", opties: ["Weerstand bieden aan efficiëntiedruk die waakzaamheid uitdunt", "Begrip verzekeren voor de stewardship-rollen van safety en security", "Alle schakelbeslissingen centraliseren bij het topmanagement", "Eer en middelen geven aan safety- en securitystewards"], juist: 2, uitleg: "Centraliseren gaat juist in tegen de hypothesen: de schakeling hoort bij de mensen dicht bij het gevaar." }, { vraag: "Wat bedoelt La Porte met \"voorbereiden op verrassing\"?", opties: ["Je hoeft je niet voor te bereiden", "Vaardigheden, normen en praktijken ontwikkelen die ervan uitgaan dat verrassing onvermijdelijk is en daar zonder schuld mee omgaan", "Alle mogelijke scenario's uitwerken", "Verrassingen voorkomen door meer regels"], juist: 1, uitleg: "Diepe kennis beperkt verrassing, maar schaal en complexiteit garanderen haar, en tegenstanders zoeken actief naar zwakke plekken." }, { vraag: "Hoe karakteriseert La Porte de stand van het onderzoek in zijn nawoord?", opties: ["Het is afgerond", "We staan net voorbij de startlijn; er is aanzienlijk meer empirisch veldwerk nodig", "Het is niet nodig", "Het is mislukt"], juist: 1, uitleg: "Het hoofdstuk is een onderzoeksagenda, geen conclusie. Dat sluit aan bij het vierde knelpunt uit hoofdstuk 1." }] },
{ type: "bronnen", items: [{'apa': 'La Porte, T. R. (2020). Doing safety … and then security: Mixing operational challenges. Preparing to be surprised. In C. Bieder & K. Pettersen Gould (Eds.), The coupling of safety and security (pp. 75–85). Springer.'}, {'apa': 'La Porte, T. R. (1996). High reliability organizations: Unlikely, demanding and at risk. Journal of Contingencies and Crisis Management, 4(2), 60–71.'}, {'apa': 'La Porte, T. R. (2018). Observing amplified socio-technical complexity: Challenges for technology assessment regarding energy transitions. In C. Büscher, J. Schippl, & P. Sumpf (Eds.), Energy as a sociotechnical problem (pp. 245–261). Routledge.'}, {'apa': 'La Porte, T. R. (2018). Preparing for anomalies, revealing the invisible: Public organizational puzzles. Risk, Hazards & Crisis in Public Policy, 9(4).'}] },
{ type: "preview", titel: "Van puzzels naar kader", tekst: "La Porte stelt de vragen. Schulman probeert in hoofdstuk 9 een antwoord: kan high reliability management het gemeenschappelijke kader zijn waaronder safety en security samen kunnen worden gemanaged, en wat kost dat?", punten: ['Wat high reliability management precies inhoudt', 'Welke spanningen ontstaan als je security onder dat kader brengt', 'Waar de synergie zit en waar de grenzen'] }
] }
];

LESSTOF["intro-to-safety-security/h9"] = [
{ id: "voor", titel: "Voorbereiding", blokken: [
{ type: "leerdoelen", items: ["Uitleggen waarom Schulman de uitspraak van de CEO een \"gemakkelijke onwaarheid\" noemt, en wat de vraag van het hoofdstuk is", "Definiëren wat een High Reliability Organization is en wat \"high reliability\" daar betekent, inclusief het onderscheid tussen probabilistisch en deterministisch", "De klassieke HRO-strategie reproduceren: lage input-variantie plus lage proces-variantie geeft lage output-variantie, en de ironie daarin uitleggen", "Uitleggen wat precursors, de precursor zone en precursor resilience zijn, met voorbeelden", "Beschrijven wie reliability professionals zijn en waarom ze niet worden gedefinieerd door diploma's", "Het onderscheid tussen failure en vulnerability uitleggen, met het Germanwings-voorbeeld", "Uitleggen wat design-based vulnerability is en waarom het internet het extreme voorbeeld is", "De vier spanningen tussen safety- en securitymanagement benoemen", "De grond voor overlap benoemen: het managen van representational error", "Uitleggen wat \"higher resolution reliability\" vergt en waarom Schulman toch voor integratie pleit"] },
{ type: "uitleg", titel: "Wie is Schulman en hoe verhoudt hij zich tot La Porte", tekst: "**Paul Schulman** is verbonden aan Mills College en de University of California, Berkeley. Samen met Emery Roe schreef hij *High Reliability Management* (2008) en *Reliability and Risk* (2016). Hij hoort tot dezelfde onderzoeksgroep als La Porte, en bouwt in dit hoofdstuk letterlijk voort op het HRO-werk uit hoofdstuk 8.\n\nHet verschil tussen de twee hoofdstukken is het verschil tussen een vraag en een antwoord. La Porte stelt: welke puzzels ontstaan als je safety en security tegelijk eist? Schulman probeert: kan high reliability management het gemeenschappelijke kader zijn waarbinnen je die puzzels aanpakt?\n\nZijn antwoord is voorzichtig positief. Niet omdat safety en security hetzelfde zijn, hij werkt de verschillen uitvoerig uit, maar omdat ze allebei rusten op één ding: het **managen van fouten**. En dat, zegt hij, is precies wat HRO's al doen." },
{ type: "slimmer", titel: "De structuur van dit hoofdstuk", tekst: "Het hoofdstuk heeft drie delen en die volgorde is de redenering.\n\n**9.1** legt uit hoe safety in HRO's wordt gemanaged. Dat is de meetlat.\n**9.2** legt uit waarom security anders is en op vier punten botst met die meetlat.\n**9.3** zoekt wat er ondanks die botsingen overlapt, en concludeert dat integratie beter is dan scheiding.\n\nAls je die drie stappen kunt navertellen, met per stap de kernbegrippen, ken je het hoofdstuk. De valkuil is om bij 9.2 te blijven hangen en te denken dat Schulman tegen integratie is. Hij is er juist voor, maar hij verdient dat standpunt door eerst alle bezwaren op te sommen." },
{ type: "tekst", titel: "De opening: een gemakkelijke onwaarheid", toetsstof: true, tekst: "Schulman begint met een anekdote. Op een conferentie over safetymanagement, georganiseerd door een grote toezichthouder op nutsbedrijven, kwam infrastructuursecurity ter sprake. De CEO van een groot nutsbedrijf zei: **\"Als we ons safetymanagement goed doen, dan regelt dat security ook wel.\"**\n\nSchulman beschouwde dat als een **gemakkelijke onwaarheid** (convenient untruth). Gemakkelijk, omdat het de CEO ontslaat van een tweede programma, een tweede budget, een tweede zorg. Onwaar, omdat het niet klopt, en de rest van het hoofdstuk legt uit waarom.\n\nEr is een stevig debat onder onderzoekers en praktijkmensen over de vraag of **hetzelfde managementkader binnen één organisatie** ruimte kan bieden aan effectief safety- én securitymanagement.\n\nOnderzoek naar **High Reliability Organizations** heeft zich gericht op organisaties zoals kerncentrales, commerciële luchtvaart, luchtverkeersleidingscentra en beheerders van elektriciteitsnetten, met extreem goed ontwikkelde betrouwbaarheidsstrategieën in zowel technisch ontwerp als managementsystemen, ter bescherming tegen storingen die catastrofale ongevallen kunnen veroorzaken.\n\nDie organisaties zijn, als kritieke infrastructuren, ook **potentiële hoogwaardige doelwitten voor terroristische aanslagen**. Maar uit het onderzoek is **niet duidelijk** of HRO's in hun betrouwbaarheidsstrategieën tegelijk safety- én securitydoelen adresseren.\n\nDit essay vergelijkt de belangrijkste variabelen en de strategie van een organisatie die naar high reliability management streeft, eerst met een **safetymissie** en dan met een **securitymissie**." }
] },
{ id: "kern", titel: "Kernstof", blokken: [
{ type: "tekst", titel: "9.1 Wat een HRO is en wat high reliability betekent", toetsstof: true, tekst: "Het meest opvallende kenmerk van HRO's is dat zij **technische systemen managen die kunnen falen met catastrofale gevolgen**: grootschalige verstoring van kritieke diensten en mogelijk veel doden.\n\n\"High reliability\" betekent voor een HRO dat er beschermingen tegen die storingen of ongevallen aanwezig zijn die ze **uitsluiten** (preclude), en wel **niet alleen probabilistisch, maar deterministisch**." },
{ type: "uitleg", titel: "Probabilistisch tegenover deterministisch", tekst: "Dit is een van de belangrijkste onderscheidingen uit het hoofdstuk.\n\n**Probabilistisch** uitsluiten: de kans op een kernsmelting is één op een miljoen reactorjaren. Klein, maar niet nul. Je accepteert een restrisico en je rekent ermee.\n\n**Deterministisch** uitsluiten: een kernsmelting **mag niet gebeuren**, punt. Er is geen aanvaardbare kans. Je organiseert alles zo dat de gebeurtenis uitgesloten is, niet onwaarschijnlijk.\n\nDat is een fundamenteel andere houding. Een gewone organisatie doet risicomanagement: kans maal gevolg, en dan prioriteren. Een HRO doet dat ook, maar bovenop een set gebeurtenissen die simpelweg niet mogen voorkomen, wat de kans ook is. Die set heet de **precluded events**, de uitgesloten gebeurtenissen.\n\nOnthoud dit, want in 9.2 zal Schulman zeggen dat security **nooit** deze deterministische standaard kan halen. Dat is een van zijn kernargumenten." },
{ type: "tekst", tekst: "Een belangrijk managementkenmerk van die betrouwbaarheid is de bescherming tegen **fouten** die tot die uitgesloten gebeurtenissen zouden kunnen leiden, en vooral tegen **representational errors**: verkeerde inschattingen, verkeerde specificaties en misverstanden over de systemen die worden gemanaged, die kunnen leiden tot beslissingen en handelingen die falen en ongevallen uitlokken.\n\nIn die zin is betrouwbaarheidsstrategie tegelijk een commitment aan safety, want **je kunt safety niet waarborgen zonder betrouwbaarheid**. Maar het gaat om **systeemsafety**, niet om individuele ongevallen zoals uitglijden, struikelen en vallen. Dat laatste is het domein van OHS uit hoofdstuk 7; HRO's richten zich op het systeem." },
{ type: "tekst", titel: "Robuustheid van technische systemen", toetsstof: true, tekst: "De technische systemen die worden gemanaged zijn **goed begrepen** qua werkingsprincipes en volwassenheid van het technisch ontwerp. Dit zijn **geen grenstechnologieën** waarvan de werking experimenteel is in kennis en ervaring. Veel, zo niet alle, operatie en onderhoud is zorgvuldig geanalyseerd, inclusief risicoanalyse, en wordt uitgevoerd onder uitgebreide procedures. In de Verenigde Staten is het bijvoorbeeld **bij federale wet verboden** om een kerncentrale \"buiten de analyse\" te bedienen.\n\nRobuustheid wordt ondersteund door technische ontwerpen met:\n\n- **redundantie** van kerncomponenten,\n- **back-upsystemen** ter compensatie van het uitvallen van primaire systemen,\n- geplande en zelfs **geautomatiseerde uitschakelprotocollen** om de operatie in veilige modus te stoppen bij dreiging van een groot ongeval.\n\n**Niet-operatie heeft altijd voorrang** boven het blijven leveren van output bij verhoogd risico. Een HRO gaat liever uit dan door.\n\nDe betrouwbaarheid van componenten wordt vaak gedefinieerd als hoe goed hun ontwerp voldoet aan de operationele eisen en hoe zelden ze falen. Maar betrouwbaarheid kan niet volledig door ontwerp alleen worden bepaald. Componenten moeten worden **geïnspecteerd, bediend en onderhouden** binnen de ontwerpspecificaties. Dat vereist bescherming door het management tegen fouten die die processen kunnen ondermijnen. Het waarborgen van de **integriteit van managementinformatie, besluitvorming en controleprocessen** om fouten te voorkomen is een belangrijk kenmerk van managementbetrouwbaarheid.\n\nDit is Levesons argument uit hoofdstuk 3 vanuit de managementkant: betrouwbaarheid van componenten is niet genoeg, het systeem eromheen moet ook betrouwbaar zijn." },
{ type: "tekst", titel: "De klassieke HRO-strategie en haar ironie", toetsstof: true, tekst: "Een klassieke HRO-managementstrategie is gebaseerd op deze formule:\n\n**Lage input-variantie** (in externe middelen, ondersteuning, eisen en omstandigheden rond de organisatie), gekoppeld aan **lage proces-variantie** (operaties gebonden aan procedures en zorgvuldige voorafgaande analyse en planning), leidt tot **lage output-variantie** (voorspelbare en betrouwbare prestaties).\n\nBeheersing van input- en proces-variantie zijn sleutelelementen in het stabiliseren van prestaties.\n\nMaar, en Schulman noemt dit **ironisch**, die beheersing is gegrond in het besef dat de sleutel tot high reliability **niet** een rigide onveranderlijkheid is van technische, management- en organisatieprocessen, maar het **managen van fluctuaties** in taakuitvoering en omstandigheden, om die binnen aanvaardbare **bandbreedtes** te houden en buiten gevaarlijke of **onbestudeerde** condities.\n\nVeel organisatieprocessen die high reliability ondersteunen, waaronder hoge aandacht en zorg bij specifieke taken, laterale communicatie en vertrouwen tussen afdelingen, en gedeelde betekenisgeving rond de uitvoering van plannen en beslissingen, zijn **vergankelijk** onder de druk van het dagelijkse werk en moeten voortdurend worden gemonitord en vernieuwd." },
{ type: "voorbeeld", titel: "Waarom rigiditeit niet hetzelfde is als betrouwbaarheid", tekst: "Stel je een controlekamer voor waar alles precies volgens het boekje gaat, elke dag hetzelfde, geen afwijking. Dat klinkt betrouwbaar. Maar wat gebeurt er als er iets voorkomt wat niet in het boekje staat?\n\nEen echte HRO werkt anders. De operators weten dat de temperatuur tussen X en Y moet blijven, en ze sturen voortdurend bij. Kleine afwijkingen zijn normaal en worden gecorrigeerd. Grote afwijkingen, richting het onbekende, worden meteen gestopt. Het is geen stilstand, het is voortdurende beweging binnen een band.\n\nEn de dingen die dat mogelijk maken, aandacht, vertrouwen tussen afdelingen, gedeeld begrip, verslijten vanzelf. Aandacht verslapt, vertrouwen wordt niet meer onderhouden, mensen gaan aannemen dat ze elkaar begrijpen. Een HRO moet die dingen actief blijven vernieuwen, anders is de betrouwbaarheid van gisteren morgen weg. Dat is de vergankelijkheid waar Schulman het over heeft." },
{ type: "tekst", titel: "Precursors en de precursor zone", toetsstof: true, tekst: "Ter ondersteuning van dit bandbreedtemanagement worden **precursorcondities** die tot uitgesloten gebeurtenissen kunnen leiden zorgvuldig geïdentificeerd, geanalyseerd en uitgesloten.\n\nHRO's beginnen met de kernset van **onaanvaardbare gebeurtenissen**, en analyseren **achterwaarts** naar condities, fysiek en organisatorisch, die langs bepaalde causale ketens uiteindelijk tot significante mogelijkheden van zulke gebeurtenissen zouden kunnen leiden.\n\nDie **precursor zone** groeit typisch naar buiten, om extra precursorcondities op te nemen op basis van zorgvuldiger analyse en ervaring. De precursors zijn in feite **leading indicators** van potentiële storingen en krijgen zorgvuldige aandacht van operators, supervisors en hogere managers.\n\nSommige precursors zijn in feite **zwakke signalen**, waarop **receptoren** op veel niveaus van de organisatie zijn afgestemd. Voorbeelden van precursors uit HRO-onderzoek:\n\n- apparatuur die de rand van de maximaal toegestane condities nadert, zoals temperatuur of druk;\n- **te veel lawaai of te veel mensen** in een controlekamer;\n- **stilte of prikkelbaarheid** bij een individuele operator;\n- **achterstanden** in het afhandelen van correctieve actierapporten;\n- een beweging naar **onbestudeerde condities** in welke operationele of onderhoudsactiviteit dan ook.\n\nIn zijn effectiviteit biedt dit proces van precursormanagement een speciaal soort **precursor resilience**: organisaties kunnen de nadering van precursorzones identificeren en zich er snel van terugtrekken, terwijl ze robuustheid in prestaties en output behouden." },
{ type: "uitleg", titel: "Let op wat er in die lijst staat", tekst: "Kijk nog eens naar de voorbeelden. Twee gaan over techniek: temperatuur, druk. Drie gaan over **mensen en organisatie**: lawaai in de controlekamer, een stille operator, achterstanden in de administratie.\n\nDat is de kern van HRO-denken. Een precursor is niet alleen een meter die in het rood gaat. Het is ook een collega die ongewoon stil is, of een stapel rapporten die niet wordt afgehandeld. Die dingen voorspellen storingen net zo goed als een druksensor, maar ze staan op geen enkel dashboard.\n\nVergelijk met Jore in hoofdstuk 5: zij twijfelde of het leren van zwakke signalen bij security werkt, omdat de dader ze verbergt. Hier zie je wat er bij safety onder zwakke signalen wordt verstaan, en waarom het daar wél werkt: de temperatuur verbergt zich niet." },
{ type: "tekst", titel: "Laterale communicatie en cultuur", toetsstof: true, tekst: "Een ander belangrijk element in HRO-betrouwbaarheidsmanagement is het bestaan van **veel laterale communicatie**, dus zijwaarts, tussen afdelingen, in plaats van alleen omhoog en omlaag. Dat is belangrijk om de **systeemfocus** te behouden en te voorkomen dat er lokaal wordt gehandeld zonder de bredere effecten te overwegen. Er is veel samenwerking tussen afdelingen in werkplanningssessies, incidentonderzoeken, procedurele reviews en procedureherzieningen.\n\nDaarnaast is er een breed gedeelde **cultuur** die die kenmerken ondersteunt. Die cultuur ondersteunt het managen naar **worst-case mogelijkheden** en niet alleen naar waarschijnlijkheid, in veel besluitvormings- en planningsactiviteiten. Er wordt hoge waarde en veel persoonlijk aanzien toegekend aan mensen die **fantasievolle voorbeelden** kunnen geven van mogelijke causale paden naar worst-case uitkomsten.\n\nDe cultuur benadrukt ook breed verspreide, geïndividualiseerde verantwoordelijkheden voor het **detecteren van fouten**, zoals je uitspreken om ze te corrigeren, en voor het identificeren van precursors en het verbeteren van procedures. In één HRO namen veel mensen, tot in de controlekamer en de onderhoudswerkplaats, actief deel aan het proces van procedureherziening. In belangrijke opzichten **\"bezitten\"** die mensen de procedures.\n\nIn één kerncentrale gaven mensen op verschillende niveaus aan dat zonder voortdurende verbetering de bestaande betrouwbaarheid waarschijnlijk niet zou standhouden, door het intreden van **zelfgenoegzaamheid** (complacency)." },
{ type: "tekst", titel: "Reliability professionals", toetsstof: true, tekst: "Een belangrijk voorbeeld van de cultuur van verantwoordelijkheid die tot op het individu reikt, is het belang van mensen die Schulman en Roe **reliability professionals** noemen. Wie zijn dat?\n\nHet zijn individuen met een **bijzonder perspectief** op betrouwbaarheid, cognitief en normatief. Ze **mengen formele deductieve kennis met ervaringskennis** in hun begrip van de systemen die ze bedienen en managen. Hun beeld van \"het systeem\" is **groter dan hun formele rol**, specialisatie en functieomschrijving. Ze **internaliseren** in hun identiteit de betrouwbare en veilige werking van hun systemen.\n\nIn die zin zijn ze \"professionals\" namens betrouwbaarheid en safety, maar ze worden **niet gedefinieerd door specifieke diploma's of certificeringen**.\n\nZe zijn te vinden in veel functies op veel niveaus: onder controleoperators, productie- en onderhoudspersoneel, technisch personeel, middenmanagers en supervisors, afdelingshoofden, en CEO's of directeuren. Wat hun formele functie ook is, ze richten zich op het identificeren van precursorcondities die safety aantasten, **inclusief hun eigen prestatievermogen**.\n\nZe kunnen ook helpen hun eigen afdeling te bewaken tegen een **praktische drift** weg van betrouwbaarheid en safety, omdat ze in hun bredere systeemperspectief nadenken over de systeemrisico's en gevolgen van veranderingen die zij of anderen in hun eigen taakdomein aanbrengen." },
{ type: "waarschuwing", titel: "Dit staat haaks op Brooks en Coole", tekst: "Hoofdstuk 7 zei: een beroep wordt gedefinieerd door een formeel kennisdomein, opleidingsnormen en certificering. Schulman zegt: de mensen die een HRO betrouwbaar houden, worden **niet** gedefinieerd door diploma's. Het is een houding, een perspectief, een identiteit.\n\nDat is geen tegenspraak maar een aanvulling, en het is belangrijk voor hoe je over je eigen toekomst denkt. Brooks en Coole beschrijven wat je op papier moet kunnen om safety- of securityprofessional te heten. Schulman beschrijft wat je in je hoofd moet hebben om er daadwerkelijk een te zijn: het systeem groter zien dan je eigen taak, je eigen zwakke plekken kennen, en de betrouwbaarheid van het geheel als jouw zaak beschouwen.\n\nHet eerste haal je met een opleiding. Het tweede moet je zelf worden." },
{ type: "tekst", titel: "Verrassing zonder onzekerheid", toetsstof: true, tekst: "Al die elementen weerspiegelen het breed benadrukte idee dat er, ondanks alle voorafgaande anticipatie en analyse, procedures, redundanties en uitschakelbeschermingen, **nog steeds potentieel voor verrassingen** is in de technische systemen, en een constante behoefte aan waakzaamheid en organisatieverbetering.\n\nMaar het is belangrijk om te beseffen dat HRO's, in hun erkenning van verrassing en hun strategie van precursor resilience, in de dagelijkse operatie **nauwelijks met grote onzekerheid** worden geconfronteerd. Met hun gevestigde technologie, uitgebreide planning, anticipatie en analyse is het **niet \"het onverwachte managen\"** wat HRO's doen. In plaats daarvan, door te managen naar mogelijkheid en een worst-case invalshoek toe te voegen aan planning en analyse, **vergroten ze hun verwachtingen**: ze formaliseren een aanpak om zelfgenoegzaamheid te vermijden en voegen scenario's toe aan hun voorafgaande analyse.\n\nDit is een subtiel maar cruciaal punt, en het is de scharnier naar 9.2. HRO's zijn goed in het managen van wat ze kunnen **voorzien**, en ze rekken voortdurend op wat ze voorzien. Maar ze werken met een technologie die ze kennen en een tegenpartij, de natuur, die niet reageert. Security is precies het geval waarin dat niet meer geldt." },
{ type: "tekst", titel: "9.2 Security: failure tegenover vulnerability", toetsstof: true, tekst: "Een voor de hand liggend verschil tussen safety- en securitymanagement is de **primaat van vijandige intentie**. HRO's waren mogelijk \"verhard\" tegen externe aanvallen, en hun managementsystemen waren goed georganiseerd tegen onbedoelde fouten in operatie en onderhoud, maar ze waren **niet goed voorbereid** op bescherming tegen **opzettelijke en strategische interne sabotage** door handelingen met destructieve intentie.\n\nDat is een bijzondere uitdaging in het \"managen van het onverwachte\". Het is één ding om operationele **risico's op falen** te identificeren en te managen; het is iets anders om **kwetsbaarheid voor destructieve intentie** te identificeren en te managen.\n\nDan volgt de zin die hoofdstuk 1 al citeerde: **er zijn altijd meer manieren waarop een complex systeem kan falen dan waarop het correct kan werken zoals ontworpen.** Maar vijandige strategie, extern en intern, kan **extra mogelijkheden tot rampspoed** toevoegen, doordat kwetsbaarheden worden behandeld als **strategische doelwitten**. En als aanvallen op die kwetsbaarheden **niet de overleving van de aanvallers hoeven te omvatten**, worden de mogelijkheden nog groter." },
{ type: "tekst", titel: "Het Germanwings-voorbeeld", toetsstof: true, tekst: "Een voorbeeld is de strategie van luchtvaartmaatschappijen na 9/11 om de **cockpitdeur** te verharden tegen indringing van buitenaf door mogelijke terroristen onder de passagiers.\n\nIronisch en tragisch genoeg leidde het aanpakken van dat probleem tot een **wederkerige kwetsbaarheid**: een saboteur die al **in** de cockpit zit. Op **Germanwings-vlucht 9525** vergrendelde een suïcidale copiloot, terwijl de gezagvoerder even de cockpit uit was, de deur, maakte zichzelf daarmee onaantastbaar, en vloog het vliegtuig tegen een berghelling.\n\nHet beschermen van de cockpit tegen indringing van buitenaf **creëerde een nieuwe kwetsbaarheid** en een gelegenheid voor een andere vorm van aanval.\n\nBetrouwbaarheid en safety bereiken tegenover de natuur of onbedoelde menselijke handelingen is al moeilijk genoeg. Het wordt een andere uitdaging wanneer **het falen zelf deel uitmaakt van een lerend systeem** dat tegenstrategie kan ontwikkelen om het falen te bevorderen." },
{ type: "uitleg", titel: "Waarom Germanwings het perfecte voorbeeld is", tekst: "Dit is het beste voorbeeld in het hele boek, en het verdient dat je het helemaal begrijpt.\n\nDe versterkte cockpitdeur was een **uitstekende securitymaatregel**. Hij loste precies het probleem op waarvoor hij was bedoeld: kapers die de cockpit binnendringen. Niemand kan zeggen dat de maatregel fout was.\n\nMaar hij verplaatste de kwetsbaarheid. Voorheen kon een gezagvoerder die buitengesloten was de deur openbreken. Nu niet meer. En de enige die daarvan profiteerde, was degene die al binnen was en kwaad wilde.\n\nDat is wat Schulman bedoelt met \"wederkerige kwetsbaarheid\". Bij safety verplaats je risico's ook, maar de natuur zoekt de nieuwe zwakke plek niet op. Bij security wel. Elke deur die je dichtdoet, is een deur waarachter iemand zich kan verschansen. Vergelijk het met de nooddeur uit hoofdstuk 1 en de voorrangsregel uit hoofdstuk 7: bij Germanwings won security van safety, en dat kostte 150 mensen het leven." },
{ type: "tekst", titel: "Design-based vulnerability", toetsstof: true, tekst: "Kwetsbaarheid komt in veel vormen, wat saboteurs veel opties geeft. Kwetsbaarheid betekent risicoblootstelling, maar ook een **aangeboren vermogen om geschaad te worden**.\n\nEén vorm van kwetsbaarheid ontstaat door **bewuste ontwerpstrategie**, waarbij potentiële slachtoffers zelf richting schade bewegen: ze maken een aanval waarschijnlijker en/of ernstiger. Voorbeelden: woonwijken in **overstromingsgebieden**, hoge gebouwen en wegen op **aardbevingsbreuklijnen**, huizen in **bosgebieden** met verhoogde blootstelling aan natuurbranden.\n\nEen spectaculair voorbeeld van design-based vulnerability is **het internet** en zijn kwetsbaarheid voor cyberaanvallen.\n\nEr is betoogd dat het internet nu kan worden aangevallen **vanaf elke locatie, op elke schaal, en met een breed scala aan precisie**. Geen enkel natuurlijk systeem op aarde zou kunnen overleven met zo'n extreme mate van kwetsbaarheid. Maar het internet is geen natuurlijk systeem. **We hebben het toegestaan, aangemoedigd en ontworpen** om te evolueren tot deze hoge mate van kwetsbaarheid.\n\nHet internet is momenteel een van de belangrijkste kritieke infrastructuren, met tegelijk **de meest uitgebreide maatschappelijke afhankelijkheid en de hoogste kwetsbaarheid** van elk systeem dat mensen ooit hebben gemaakt.\n\nElk nieuw element dat we aan internetconnectiviteit toevoegen, of elke uitbreiding van functies en capaciteit, introduceert **extra kwetsbaarheden**, vaak in meerdere dimensies. Deze **ontwerpperversiteit**, waarin elk nieuw ontwerpelement het aantal kwetsbaarheden voor virussen, hacking of fraude vergroot, is een groeiende uitdaging voor onze processen van voorspelling en begrip.\n\nHet is moeilijk in te zien hoe internetsecurity onder deze omstandigheden succesvol kan worden gemanaged door **individuele organisatiestrategie**, of effectief kan worden aangepakt in lokaal of regionaal beleid. Bij uitbreiding lijkt het beheersen van design-based vulnerability te vragen om **grootschaliger maatschappelijke regulering** dan organisatorisch eigenbelang of zelfs sectorbrede zelfregulering zou kunnen bieden." },
{ type: "uitleg", titel: "Waarom dit het einde is van het HRO-model als oplossing", tekst: "Let goed op wat Schulman hier doet. Het HRO-model werkt omdat de organisatie **haar eigen systeem beheerst**. De kerncentrale bepaalt haar eigen ontwerp, haar eigen procedures, haar eigen personeel.\n\nBij design-based vulnerability geldt dat niet. Een ziekenhuis dat op het internet is aangesloten, is kwetsbaar door het ontwerp van iets wat het niet beheerst. Het kan zijn eigen firewall verbeteren, maar niet het internet.\n\nDaarmee zegt Schulman dat een deel van security **buiten het bereik van elke individuele organisatie** ligt, en dus buiten het bereik van high reliability management op organisatieniveau. Dat is een fundamentele beperking, en hij legt de oplossing bij regulering op maatschappelijk niveau. Hou dit vast, want het is een van de argumenten die hoofdstuk 11 oppakt." },
{ type: "tekst", titel: "Symbolische doelwitten en de onmogelijkheid van uitsluiting", toetsstof: true, tekst: "Voor een terrorist hoeft **niet elk doelwit hoogwaardig** te zijn in termen van verstoring en doden. Terreur is ontworpen om **publieke angst en onzekerheid** te veroorzaken, en om beleidsreacties uit woede uit te lokken die kunnen leiden tot het opofferen van andere waarden die een samenleving koestert. Zo kunnen doelwitten een **symbolische waarde** hebben ver boven elke fysieke vernietiging. Zelfs aanvallen op marginale doelwitten, of aanvallen die mislukken, kunnen angst en een gevoel van kwetsbaarheid in een bevolking veroorzaken.\n\nSecuritymanagement kan **nauwelijks het management van alles** zijn. Schulman citeert Boin en Smith: de meeste verstandige mensen zouden het erover eens zijn dat het onmogelijk is elke samenzwering te verijdelen en elk individu of elke groep met kwade bedoelingen op te sporen.\n\nDaaruit volgt een van de belangrijkste conclusies van het hoofdstuk:\n\n**High reliability securitymanagement kan realistisch gezien niet stijgen tot de standaard van uitgesloten gebeurtenissen die voor safety in HRO's wordt nagestreefd, en het zal waarschijnlijk ook niet effectief door afzonderlijke organisaties worden nagestreefd.**\n\nDat is het antwoord op de CEO. Zijn safetyprogramma kan streven naar deterministische uitsluiting. Zijn securityprogramma kan dat per definitie niet. Dus het eerste kan het tweede niet \"ook wel regelen\"." },
{ type: "tekst", titel: "Managementcontrolevariabelen", toetsstof: true, tekst: "Strategische kwetsbaarheid voegt extra uitdagingen toe. Doelwitten kunnen **extern en intern** zijn. Een organisatie heeft een set controls voor interne operaties: hiërarchisch gezag, procedurele eisen, training, aannemen en ontslaan, surveillance. Maar ze heeft **weinig controlevariabelen** voor de kwetsbaarheid van **externe infrastructuren**, of voor het uitvallen van goederen of diensten van andere organisaties waarvan ze afhankelijk is.\n\nBovendien kunnen aanvallen die niet worden voorkomen, **gecoördineerde noodrespons en herstel** vergen onder omstandigheden die voor elke individuele organisatie of groep organisaties moeilijk effectief te managen zijn. Schulman citeert Boin en Smith opnieuw: plannen voor crisis- en rampenmanagement hebben vaak een sterk symbolisch karakter en bieden weinig houvast voor wie moet reageren op onvoorziene en onvoorstelbare gebeurtenissen. Plannen zijn alleen nuttig als ze zijn getest en verfijnd en als de mensen hun rollen en interacties kennen." },
{ type: "tekst", titel: "Het risico van risicobeoordeling", toetsstof: true, tekst: "Overweeg ook **de risico's van risicobeoordelingen zelf** wanneer ze op kwetsbaarheid worden toegepast. Het doel van risicoanalyse is risico's te identificeren, te rangschikken op belang en waarschijnlijkheid, en aandacht en middelen te prioriteren.\n\nMaar securitykwetsbaarheidsbeoordelingen zouden, **als ze bekend worden**, hun eigen nauwkeurigheid kunnen ondermijnen door de tegenstrategie die ze bij vijandige strategen kunnen oproepen. Ze zouden potentiële terroristen kunnen **aantrekken** naar wat als kwetsbaar is aangemerkt, of juist het risico verhogen voor doelwitten die als laag risico zijn beoordeeld. Waarom zou een aanvaller zich niet richten op wat de **minst waarschijnlijke en mogelijk minst verdedigde** doelwitten lijken?\n\nOok de rol van precursormanagement en het zoeken naar leading indicators en zwakke signalen kan beperkt zijn in securitymanagement, omdat daders alles zullen doen om potentiële precursoracties en informatie **geheim te houden** of zelfs hun intenties te **verhullen met valse signalen**." },
{ type: "voorbeeld", titel: "Het risicoregister als kaart voor de aanvaller", tekst: "Dit is een probleem dat in geen enkel safetyhandboek staat, omdat het bij safety niet bestaat.\n\nEen gemeente maakt een risicoanalyse van haar evenementen. Bovenaan staat de kerstmarkt: veel mensen, weinig toegangscontrole, hoge symbolische waarde. Daar gaat het budget heen: betonblokken, cameratoezicht, extra beveiligers. Onderaan staat de wekelijkse boerenmarkt: weinig mensen, lage prioriteit, geen maatregelen.\n\nNu lekt die analyse uit, of wordt hij openbaar gemaakt in een raadsstuk. Voor de aanvaller is het een kaart. De kerstmarkt is nu zwaar beveiligd, dus die valt af. De boerenmarkt staat expliciet aangemerkt als onbeschermd.\n\nBij safety is een gepubliceerde risicoanalyse alleen maar nuttig: iedereen weet waar de gevaren zitten en kan ermee rekening houden. Bij security is diezelfde analyse een dubbelzijdig wapen. Dat is de reden dat het transparantieconflict uit hoofdstuk 1 zo diep zit: het gaat niet alleen om gevoeligheden, maar om de vraag of je analyse zichzelf ondermijnt zodra hij bekend wordt." },
{ type: "tekst", titel: "De vier spanningen tussen safety- en securitymanagement", toetsstof: true, tekst: "Gegeven die uitdagingen is het niet verrassend dat sommige benaderingen van kwetsbaarheidsmanagement conflicteren met de dominante benaderingen in safetymanagement. Schulman noemt er vier. Ken ze alle vier, want ze zijn de kern van de toetsstof over dit hoofdstuk.\n\n**1. Anticipatie tegenover aanpassingsvermogen.** De nadruk op anticipatie en voorafgaande analyse, passend bij betrouwbaar safetymanagement van gevestigde technische systemen, kan **rigiditeit** introduceren en de **resilience en adaptiviteit** ondermijnen die nodig zijn voor snelle reacties op onverwachte aanvallen.\n\n**2. Informatie beperken tegenover laterale communicatie.** De noodzaak om de verspreiding van informatie over sleutelplannen, beslissingen en prioriteiten binnen een organisatie te **beperken**, om tegen-leren door interne of externe vijanden te voorkomen, kan conflicteren met het **systeemperspectief**, ondersteund door uitgebreide laterale communicatie, waarop HRO's steunen.\n\n**3. Verharding tegenover toegankelijkheid.** Zelfs de inspanning om doelwitten te verharden met **\"guns, gates, and guards\"**, zoals in het Germanwings-voorbeeld, kan securityprotocollen laten conflicteren met de **gemakkelijke toegang** die nodig is voor samenwerkende operaties en besluitvorming.\n\n**4. Securitykaders tegenover noodcoördinatie.** De kaders voor fysieke en informatiebeveiliging kunnen ook de **snelle interorganisatorische coördinatie** van noodrespons na een aanval belemmeren.\n\nMerk op dat alle vier de spanningen dezelfde vorm hebben: een sterk punt van HRO-safetymanagement (anticipatie, open communicatie, toegankelijkheid, coördinatie) wordt bij security een kwetsbaarheid. Dat is precies wat Jore in hoofdstuk 5 al zag bij just culture en zwakke signalen, nu uitgewerkt op managementniveau." },
{ type: "tekst", titel: "9.3 De grond voor overlap: het managen van fouten", toetsstof: true, tekst: "Zelfs gegeven de verschillen en mogelijke tegenstrijdigheden kan nog steeds worden betoogd dat er constructieve overlap of \"synergieën\" kunnen zijn in het streven naar high reliability management van beide missies.\n\nZoals in het workshopprospectus werd opgemerkt: falen in beide kan leiden tot **\"vergelijkbare uiteindelijke gevolgen\"**, die vergelijkbare nood- en crisismanagementbenaderingen kunnen vergen. Schulman voegt tussen haakjes een waarschuwing toe: bij terreuraanslagen kunnen **eerste responders zelf deel uitmaken van de beoogde doelwitten**. Ook dat is een verschil dat je moet kennen.\n\n**De belangrijkste grond** voor overlap is de gemeenschappelijke behoefte in beide missies om **fouten te identificeren en te minimaliseren**. Managementbetrouwbaarheid is gegrond in het managen van fouten, inclusief de fouten van misperceptie, misidentificatie en misverstand. Het constante zoeken naar die vormen van representational error, het voortdurend bevragen van aannames, en het accepteren van de mogelijkheid van verrassing zijn onderliggende strategische en culturele kenmerken van high reliability management voor safety.\n\nZe zijn nuttig om **zelfgenoegzaamheid en hoogmoed** af te weren, gemoedstoestanden die de flexibiliteit en verbeelding kunnen ondermijnen die nuttig zijn bij het voorzien van en voorbereiden op terreuraanslagen. De **patroonherkenningsvaardigheden** van reliability professionals zijn eveneens nuttig voor het snel identificeren van zowel zich ontvouwende systeemstoringen als voortschrijdende terroristische aanvallen.\n\nDe focus op precursorcondities en -indicatoren is ook belangrijk voor beide missies. Leren om potentiële precursors van terreuraanslagen te herkennen is al een belangrijk onderdeel van securitymanagement. Ook hier is de steun aan reliability professionals belangrijk: zij zoeken en detecteren zwakke signalen. In organisaties met high reliability management is er over het algemeen **ontvankelijkheid voor woordvoerders van een verwaarloosd perspectief**. Uitspraken als **\"ik bevind me op onbekend terrein\"** of **\"ik voel me niet comfortabel bij deze actie\"** worden serieus genomen, vooral wanneer degenen die ze uitspreken ook de bevoegdheid hebben om **het werk stil te leggen of acties te vetoën**." },
{ type: "uitleg", titel: "Wat er precies overlapt, en wat niet", tekst: "Schulman is hier heel precies, en je moet het net zo precies kunnen navertellen.\n\nWat **niet** overlapt: de deterministische standaard (security haalt hem niet), de inhoud van de analyse (falen tegenover kwetsbaarheid), de open communicatie (security beperkt informatie), de precursors zelf (de dader verbergt ze).\n\nWat **wel** overlapt: de **houding**. Het voortdurend bevragen van aannames. Het zoeken naar wat je zelf verkeerd ziet. Het serieus nemen van de collega die zegt \"hier klopt iets niet\". Het afwijzen van zelfgenoegzaamheid. Het vermogen om patronen te herkennen. En de bevoegdheid om te stoppen.\n\nDat is niet niks. Het is precies de cultuur die La Porte in hoofdstuk 8 bedoelde met waakzaamheid, en die Jore in hoofdstuk 5 security mindfulness noemde. Schulman geeft er het HRO-vocabulaire aan." },
{ type: "tekst", titel: "De uitdagingen van integratie: higher resolution", toetsstof: true, tekst: "Het zal **niet gemakkelijk** zijn om beide missies onder een groter kader van high reliability management te brengen. Dat vereist het ontwikkelen van zowel een **bredere scope en langere tijdshorizon** van anticipatie als, tegelijkertijd, een **meer gedistribueerde deelname** aan foutdetectie en precursor resilience.\n\nEen **anticipatie met hogere resolutie** houdt in: een breder scala aan informatie verzamelen en meer verbeelding toepassen op de analyse van externe én interne dreigingen, over een reeks van schalen, reikwijdtes en tijd.\n\n**Verruimde tijdshorizonten** voor anticipatie en planning zouden zowel **langzame safety- als kwetsbaarheidsvraagstukken** kunnen blootleggen, zoals de eerder beschreven design-based vulnerability, of zelfs **klimaatverandering**, die in de loop van de tijd groeien.\n\nVerbeterde anticipatie zal waarschijnlijk gepaard moeten gaan met een **bredere schaal** van betrouwbaarheidsmanagement, inclusief het herkennen van **interorganisatorische en zelfs internationale precursors** van ongevallen of aanvallen, en het vermogen om verdediging en respons op die internationale schaal te managen." },
{ type: "tekst", titel: "Teams als eerste responders", toetsstof: true, tekst: "Teams kunnen ook belangrijk zijn om de organisatorische resilience bij falen of aanval te vergroten. In veel gevallen functioneren reliability professionals in teams effectief als **eerste responders** na falen of aanval, waarbij ze hun ervaring en effectiviteit in patroonherkenning snel inzetten om actie te sturen die schade beperkt of herstel versnelt.\n\nHet voorbeeld dat Schulman geeft: de rol van de Amerikaanse **luchtverkeersleiders** bij het snel leegmaken van het luchtruim na het begin van de aanslagen van 9/11. Dat is een noodresponsrol **in dienst van zowel safety als security**. De luchtverkeersleiders waren getraind op safety, herkenden binnen minuten een ongekende securitysituatie, en handelden zonder draaiboek.\n\nOrganisaties kunnen hun reliability professionals trainen en ondersteunen om hun vaardigheden te gebruiken als middel om zowel de anticipatie op kwetsbaarheid als het vermogen tot resilience te verbeteren, ter ondersteuning van betrouwbaarheid in de bevordering van beide missies." },
{ type: "tekst", titel: "9.4 Conclusie", toetsstof: true, tekst: "Het is mogelijk, op basis van het bovenstaande, dat het toepassen van een overlappend high reliability managementkader op beide missies niet alleen beide kan versterken, maar ook daadwerkelijk kan **beschermen tegen het ondermijnen van elkaar**.\n\nDe **foutgevoeligheid** aan de basis van high reliability management kan ook worden toegepast op het identificeren van en reageren op leading precursor indicators van **de ene missie die de andere ondermijnt**. Met andere woorden: de Germanwings-situatie, waarin een securitymaatregel een safetykwetsbaarheid schiep, is precies het soort precursor dat een HRO zou moeten kunnen opvangen, als het maar naar beide kijkt.\n\nHet is belangrijk om zorgvuldig na te denken over die versterkte betrouwbaarheid en hoe die **verloren zou kunnen gaan** voor beide doelen als ze als **gescheiden processen** zouden worden behandeld en alleen in aparte managementdomeinen gemanaged.\n\nDat is het slot, en het is zorgvuldig geformuleerd. Schulman zegt niet dat integratie makkelijk is; hij heeft vier spanningen opgesomd. Hij zegt dat scheiding een specifiek risico oplevert: dat niemand ziet wanneer de ene missie de andere ondermijnt. Integratie onder een HRO-kader is de manier om dat risico te managen." },
{ type: "begrippen", titel: "Kernbegrippen uit hoofdstuk 9", items: [{ begrip: "Gemakkelijke onwaarheid", definitie: "Schulmans typering van de stelling dat goed safetymanagement security \"ook wel regelt\"; gemakkelijk omdat het een tweede programma bespaart, onwaar omdat security de safetystandaard niet kan halen." }, { begrip: "High Reliability Organization (HRO)", definitie: "Organisatie die technische systemen met catastrofaal faalpotentieel managet, met beschermingen die die storingen deterministisch uitsluiten." }, { begrip: "Precluded events", definitie: "De uitgesloten gebeurtenissen die een HRO niet als kans maar als onaanvaardbaar behandelt; het vertrekpunt van achterwaartse analyse." }, { begrip: "Deterministisch tegenover probabilistisch", definitie: "Uitsluiten dat iets gebeurt, tegenover de kans erop klein houden. Safety in HRO's streeft naar het eerste; security kan realistisch alleen het tweede." }, { begrip: "Representational error", definitie: "Verkeerde inschatting, specificatie of begrip van het gemanagede systeem; de foutsoort waartegen HRO-management vooral beschermt." }, { begrip: "Systeemsafety", definitie: "Veiligheid van het systeem als geheel, in tegenstelling tot individuele ongevallen zoals struikelen en vallen; de prioriteit van HRO's." }, { begrip: "Lage variantie-formule", definitie: "Lage input-variantie plus lage proces-variantie geeft lage output-variantie; de klassieke HRO-strategie." }, { begrip: "Bandbreedtemanagement", definitie: "Het managen van fluctuaties binnen aanvaardbare grenzen en buiten onbestudeerde condities, in plaats van rigide onveranderlijkheid." }, { begrip: "Onbestudeerde condities", definitie: "Toestanden van het systeem die niet vooraf zijn geanalyseerd; een HRO trekt zich daaruit terug, en het bedienen van een kerncentrale buiten de analyse is in de VS bij wet verboden." }, { begrip: "Precursor", definitie: "Conditie die langs een causale keten tot een uitgesloten gebeurtenis kan leiden; een leading indicator, technisch of organisatorisch." }, { begrip: "Precursor zone", definitie: "De verzameling precursorcondities, die groeit naarmate analyse en ervaring toenemen." }, { begrip: "Precursor resilience", definitie: "Het vermogen om de nadering van een precursorzone te herkennen en zich er snel uit terug te trekken met behoud van prestaties." }, { begrip: "Laterale communicatie", definitie: "Communicatie tussen afdelingen, nodig om het systeemperspectief te behouden; conflicteert met de securitybehoefte om informatie te beperken." }, { begrip: "Reliability professional", definitie: "Persoon met een systeemperspectief groter dan de eigen rol, die formele en ervaringskennis mengt, betrouwbaarheid internaliseert, en niet wordt gedefinieerd door diploma's." }, { begrip: "Praktische drift", definitie: "Het geleidelijk wegglijden van een afdeling van betrouwbaarheid en safety, waartegen reliability professionals waken." }, { begrip: "Zelfgenoegzaamheid (complacency)", definitie: "De gemoedstoestand die betrouwbaarheid ondermijnt en die HRO-cultuur actief bestrijdt door verwachtingen te blijven vergroten." }, { begrip: "Failure tegenover vulnerability", definitie: "Het risico dat een systeem faalt, tegenover de blootstelling aan destructieve intentie die kwetsbaarheden als strategische doelwitten behandelt." }, { begrip: "Wederkerige kwetsbaarheid", definitie: "Een nieuwe kwetsbaarheid die ontstaat door het oplossen van een andere; de versterkte cockpitdeur die de Germanwings-copiloot onaantastbaar maakte." }, { begrip: "Design-based vulnerability", definitie: "Kwetsbaarheid die door bewuste ontwerpkeuzes is gecreëerd, zoals bouwen in overstromingsgebied of het internet." }, { begrip: "Ontwerpperversiteit", definitie: "Het verschijnsel dat elk nieuw ontwerpelement het aantal kwetsbaarheden vergroot, kenmerkend voor het internet." }, { begrip: "Symbolisch doelwit", definitie: "Doelwit dat voor een terrorist waardevol is door de angst die een aanval veroorzaakt, ongeacht de fysieke schade." }, { begrip: "Risico van risicobeoordeling", definitie: "Het gevaar dat een bekende kwetsbaarheidsanalyse aanvallers naar onbeschermde doelwitten stuurt en zichzelf zo ondermijnt." }, { begrip: "Higher resolution reliability", definitie: "Anticipatie met bredere scope, langere tijdshorizon, meer verbeelding en meer gedistribueerde deelname aan foutdetectie; wat nodig is om beide missies onder één kader te brengen." }] }
] },
{ id: "toepassen", titel: "Toepassen", blokken: [
{ type: "stappen", titel: "Een organisatie beoordelen op HRO-kenmerken voor beide missies, in acht stappen", items: [{ titel: "Benoem de uitgesloten gebeurtenissen.", tekst: "Welke gebeurtenissen mogen simpelweg niet voorkomen, wat de kans ook is? Maak een aparte lijst voor safety en voor security, en vraag bij de tweede of deterministische uitsluiting realistisch is." }, { titel: "Analyseer achterwaarts naar precursors.", tekst: "Welke fysieke en organisatorische condities kunnen naar die gebeurtenissen leiden? Neem ook de organisatorische mee: achterstanden, stilte, drukte." }, { titel: "Toets de precursors op verbergbaarheid.", tekst: "Welke precursors kan een tegenstander verbergen of vervalsen? Die werken bij security niet zoals bij safety." }, { titel: "Zoek de reliability professionals.", tekst: "Wie in deze organisatie ziet het systeem groter dan zijn eigen taak, en heeft de bevoegdheid om te stoppen? Zitten zij op beide missies of alleen op safety?" }, { titel: "Loop de vier spanningen langs.", tekst: "Waar botst anticipatie met aanpassingsvermogen, informatiebeperking met laterale communicatie, verharding met toegankelijkheid, securitykaders met noodcoördinatie?" }, { titel: "Zoek wederkerige kwetsbaarheden.", tekst: "Welke securitymaatregel heeft een safetykwetsbaarheid geschapen, en andersom? Dat zijn de precursors van de ene missie die de andere ondermijnt." }, { titel: "Bepaal wat buiten bereik ligt.", tekst: "Welke kwetsbaarheden zijn design-based en liggen buiten de controle van de organisatie? Daar helpt geen intern management; daar is regulering nodig." }, { titel: "Beoordeel de resolutie.", tekst: "Is de tijdshorizon lang genoeg voor langzame dreigingen? Is de schaal breed genoeg voor interorganisatorische precursors? Is de deelname aan foutdetectie breed genoeg?" }] },
{ type: "oefening", id: "h9-oef-1", niveau: "basis", vraag: "Leg uit waarom Schulman de uitspraak van de CEO een gemakkelijke onwaarheid noemt, en onderbouw dat met het onderscheid tussen deterministisch en probabilistisch.", antwoord: "De CEO stelt dat goed safetymanagement security ook wel regelt. Schulman noemt dat gemakkelijk omdat het de organisatie een tweede programma bespaart, en onwaar omdat de twee missies een fundamenteel andere standaard hebben. Safety in een HRO streeft naar deterministische uitsluiting van een kernset van gebeurtenissen: die mogen niet voorkomen, ongeacht de kans, en de organisatie analyseert achterwaarts naar alle precursors en sluit die uit. Dat werkt omdat de technologie gevestigd en begrepen is en omdat de tegenpartij, de natuur of onbedoelde menselijke fouten, niet reageert op de maatregelen. Security kan die standaard niet halen. Er zijn meer manieren om te falen dan om correct te werken, vijandige strategie voegt daar mogelijkheden aan toe door kwetsbaarheden als doelwit te kiezen, aanvallers hoeven niet te overleven, doelwitten kunnen puur symbolisch zijn, en het is onmogelijk elke samenzwering te verijdelen. High reliability securitymanagement kan dus alleen probabilistisch werken en wordt bovendien niet effectief door één organisatie gedragen. Een safetyprogramma dat naar uitsluiting streeft, kan daarom nooit automatisch een securityprogramma zijn dat die uitsluiting niet kan bereiken." },
{ type: "oefening", id: "h9-oef-2", niveau: "basis", vraag: "Beschrijf het Germanwings-voorbeeld en leg uit welk algemeen principe Schulman ermee illustreert.", antwoord: "Na 9/11 versterkten luchtvaartmaatschappijen de cockpitdeur zodat terroristen onder de passagiers niet konden binnendringen. Dat was een geslaagde securitymaatregel tegen het probleem waarvoor hij was bedoeld. Maar op Germanwings-vlucht 9525 vergrendelde een suïcidale copiloot, terwijl de gezagvoerder kort de cockpit had verlaten, diezelfde deur, maakte zichzelf onaantastbaar en vloog het toestel tegen een berg. De maatregel had een wederkerige kwetsbaarheid geschapen: bescherming tegen een aanvaller van buiten werd bescherming voor een aanvaller van binnen. Het principe dat Schulman illustreert is dat security verschilt van safety doordat het falen zelf deel uitmaakt van een lerend systeem. Bij safety verplaatsen maatregelen risico's, maar de natuur zoekt de nieuwe zwakke plek niet op. Bij security wel: elke afgesloten route is een route waarachter iemand zich kan verschansen, en elke verdediging schept een nieuwe aanvalsmogelijkheid. Daarom is het managen van kwetsbaarheid iets anders dan het managen van faalrisico, en daarom pleit Schulman aan het eind voor een kader dat precursors van de ene missie die de andere ondermijnt kan opvangen." },
{ type: "oefening", id: "h9-oef-3", niveau: "gevorderd", vraag: "Schulman noemt vier spanningen tussen safety- en securitymanagement en vindt toch gronden voor integratie. Werk uit wat precies overlapt en wat niet, en beoordeel of zijn conclusie houdbaar is.", antwoord: "De vier spanningen zijn dat anticipatie rigiditeit kan geven waar security aanpassingsvermogen vraagt, dat informatiebeperking botst met de laterale communicatie waarop HRO's steunen, dat verharding met guns, gates and guards botst met de toegankelijkheid die samenwerking vergt, en dat securitykaders de snelle interorganisatorische noodcoördinatie kunnen belemmeren. Wat niet overlapt is dus de inhoud: de deterministische standaard, de aard van de dreiging, de openheid van informatie, en de zichtbaarheid van precursors, die een dader verbergt of vervalst. Wat wel overlapt is de houding en de vaardigheid: het voortdurend zoeken naar representational error, het bevragen van aannames, het accepteren van verrassing, het afweren van zelfgenoegzaamheid en hoogmoed, de patroonherkenning van reliability professionals, en de cultuur waarin \"ik bevind me op onbekend terrein\" serieus wordt genomen en gepaard gaat met de bevoegdheid om te stoppen. Daarnaast overlappen de gevolgen en dus de noodrespons, met de kanttekening dat eerste responders bij terreur zelf doelwit kunnen zijn. Schulmans conclusie is houdbaar als je haar precies leest: hij zegt niet dat integratie de spanningen oplost, maar dat scheiding een specifiek risico schept, namelijk dat niemand ziet wanneer de ene missie de andere ondermijnt, zoals bij Germanwings. Een gedeeld kader met foutgevoeligheid kan die precursors opvangen. De zwakte van zijn conclusie is dat hij higher resolution reliability vraagt, bredere scope, langere horizon, meer deelname, zonder te laten zien dat een organisatie dat kan betalen of organiseren, en dat hij zelf heeft betoogd dat design-based vulnerability buiten organisatiebereik ligt. Integratie is dus houdbaar als managementhouding, maar niet als belofte dat één organisatie beide missies volledig kan dragen." },
{ type: "oefening", id: "h9-oef-4", niveau: "gevorderd", vraag: "Verbind het risico van risicobeoordeling uit hoofdstuk 9 met het transparantieconflict uit hoofdstuk 1 en de just culture-discussie uit hoofdstuk 5. Wat betekent dat voor een organisatie die één risicoregister voor safety en security wil bijhouden?", antwoord: "Hoofdstuk 1 signaleerde dat safety maximale openheid nastreeft terwijl security vertrouwelijkheid kan eisen. Hoofdstuk 5 werkte dat uit voor just culture: openheid over fouten is de motor van leren bij safety, maar wordt een kwetsbaarheid zodra er een kwaadwillende tegenpartij is. Hoofdstuk 9 geeft er het scherpste mechanisme bij: een securitykwetsbaarheidsbeoordeling die bekend wordt, ondermijnt haar eigen nauwkeurigheid, omdat aanvallers zich kunnen richten op wat als laag risico en dus onbeschermd is aangemerkt, of juist worden aangetrokken door wat als kwetsbaar is benoemd. Bij safety is dat probleem afwezig: een openbaar risicoregister helpt iedereen, want de natuur leest niet mee. Voor een organisatie die één register wil bijhouden betekent dat dat het register twee tegengestelde informatieregimes moet dragen. Het safetydeel wint aan waarde naarmate het breder wordt gedeeld, in lijn met de laterale communicatie van HRO's. Het securitydeel verliest waarde naarmate het breder wordt gedeeld, en kan actief schade doen. Eén register is daarom alleen verantwoord als het gelaagd is: een gedeeld deel voor wat beide missies raakt, zoals de wederkerige kwetsbaarheden waar de ene maatregel de andere ondermijnt, en een afgeschermd deel voor de rangorde van securitydoelwitten. Dat vraagt om expliciete afspraken over wie welk deel ziet, en om het besef dat de mensen die de gedeelde precursors moeten herkennen, de reliability professionals, toegang nodig hebben tot beide, terwijl de brede organisatie dat niet heeft. Het conflict verdwijnt niet door integratie; het wordt een ontwerpvraag over toegang." }
] },
{ id: "checken", titel: "Checken", blokken: [
{ type: "quiz", titel: "Check jezelf op hoofdstuk 9", vragen: [{ vraag: "Wat zei de CEO waarmee Schulman zijn hoofdstuk opent?", opties: ["Security is belangrijker dan safety", "Als we ons safetymanagement goed doen, regelt dat security ook wel", "Safety en security moeten gescheiden blijven", "Security is onbetaalbaar"], juist: 1, uitleg: "Schulman noemt het een gemakkelijke onwaarheid: gemakkelijk omdat het een tweede programma bespaart, onwaar omdat security de safetystandaard niet kan halen." }, { vraag: "Wat betekent high reliability voor een HRO?", opties: ["Dat de kans op falen kleiner is dan één procent", "Dat catastrofale storingen niet alleen probabilistisch maar deterministisch worden uitgesloten", "Dat er nooit onderhoud nodig is", "Dat alle componenten redundant zijn"], juist: 1, uitleg: "De kernset van uitgesloten gebeurtenissen wordt behandeld als onaanvaardbaar, ongeacht de kans." }, { vraag: "Wat is een representational error?", opties: ["Een fout in een rapport", "Een verkeerde inschatting, specificatie of begrip van het gemanagede systeem", "Een fout van een vertegenwoordiger", "Een technische storing"], juist: 1, uitleg: "Het is de foutsoort waartegen HRO-management vooral beschermt, en de grond voor overlap met security." }, { vraag: "Wat is de ironie in de klassieke HRO-formule volgens Schulman?", opties: ["Dat lage variantie hoge kosten geeft", "Dat beheersing van variantie niet rigiditeit betekent maar het managen van fluctuaties binnen bandbreedtes", "Dat HRO's toch falen", "Dat procedures niet worden gevolgd"], juist: 1, uitleg: "De processen die dat mogelijk maken, aandacht, vertrouwen, gedeeld begrip, zijn vergankelijk en moeten steeds worden vernieuwd." }, { vraag: "Welke van de volgende is een organisatorische precursor uit HRO-onderzoek?", opties: ["Een druk boven de maximumwaarde", "Een temperatuur aan de rand van het toegestane", "Stilte of prikkelbaarheid bij een individuele operator", "Een defecte sensor"], juist: 2, uitleg: "Precursors zijn ook menselijk en organisatorisch: te veel mensen in de controlekamer, achterstanden in correctieve rapporten." }, { vraag: "Waardoor worden reliability professionals gedefinieerd?", opties: ["Door hun diploma's en certificeringen", "Door hun functie in het organogram", "Door een systeemperspectief groter dan hun rol en het internaliseren van betrouwbaarheid als deel van hun identiteit", "Door hun anciënniteit"], juist: 2, uitleg: "Ze zijn te vinden op elk niveau, van controlekamer tot CEO, en mengen formele met ervaringskennis." }, { vraag: "Wat illustreert het Germanwings-voorbeeld?", opties: ["Dat cockpitdeuren te zwak zijn", "Dat een securitymaatregel een wederkerige kwetsbaarheid kan scheppen", "Dat piloten beter gescreend moeten worden", "Dat safety belangrijker is dan security"], juist: 1, uitleg: "Bescherming tegen indringing van buiten werd bescherming voor een aanvaller van binnen. Falen maakt deel uit van een lerend systeem." }, { vraag: "Waarom is het internet het spectaculaire voorbeeld van design-based vulnerability?", opties: ["Omdat het oud is", "Omdat we het zelf hebben ontworpen tot een systeem dat vanaf elke locatie en op elke schaal kan worden aangevallen", "Omdat het door de overheid wordt beheerd", "Omdat het geen firewalls heeft"], juist: 1, uitleg: "Elk nieuw element voegt kwetsbaarheden toe: ontwerpperversiteit. Beheersing vraagt maatschappelijke regulering, niet alleen organisatiestrategie." }, { vraag: "Waarom kan security volgens Schulman niet de standaard van uitgesloten gebeurtenissen halen?", opties: ["Omdat het te duur is", "Omdat het onmogelijk is elke samenzwering te verijdelen en doelwitten ook symbolisch kunnen zijn", "Omdat er geen wetgeving is", "Omdat securityprofessionals niet gecertificeerd zijn"], juist: 1, uitleg: "Terreur is ontworpen om angst te veroorzaken; zelfs mislukte aanvallen op marginale doelwitten werken." }, { vraag: "Wat is het risico van risicobeoordeling bij security?", opties: ["Dat de beoordeling te duur is", "Dat een bekende kwetsbaarheidsanalyse aanvallers naar onbeschermde doelwitten stuurt en zichzelf ondermijnt", "Dat de beoordeling verouderd raakt", "Dat niemand de beoordeling leest"], juist: 1, uitleg: "Bij safety helpt openbaarheid; bij security kan de analyse zelf een kaart voor de aanvaller worden." }, { vraag: "Welke van de volgende is géén van de vier spanningen die Schulman noemt?", opties: ["Anticipatie tegenover aanpassingsvermogen", "Informatiebeperking tegenover laterale communicatie", "Budget voor safety tegenover budget voor security", "Verharding tegenover toegankelijkheid"], juist: 2, uitleg: "De vierde spanning is die tussen securitykaders en snelle interorganisatorische noodcoördinatie." }, { vraag: "Wat is de belangrijkste grond voor overlap tussen beide missies?", opties: ["Dezelfde wetgeving", "De gemeenschappelijke behoefte om fouten te identificeren en te minimaliseren", "Dezelfde technologie", "Hetzelfde budget"], juist: 1, uitleg: "Foutgevoeligheid, het bevragen van aannames en het accepteren van verrassing weren zelfgenoegzaamheid af, wat beide missies nodig hebben." }, { vraag: "Welk voorbeeld geeft Schulman van reliability professionals als eerste responders voor beide missies?", opties: ["Brandweerlieden bij een chemische brand", "Amerikaanse luchtverkeersleiders die na het begin van 9/11 het luchtruim leegmaakten", "Beveiligers op een luchthaven", "Operators in een kerncentrale"], juist: 1, uitleg: "Getraind op safety, herkenden ze binnen minuten een ongekende securitysituatie en handelden zonder draaiboek." }, { vraag: "Wat is de conclusie van Schulman?", opties: ["Safety en security moeten gescheiden blijven", "Een overlappend HRO-kader kan beide versterken en beschermen tegen het ondermijnen van elkaar, wat bij scheiding verloren gaat", "Security moet ondergeschikt zijn aan safety", "HRO's zijn niet geschikt voor security"], juist: 1, uitleg: "De foutgevoeligheid kan ook worden toegepast op precursors van de ene missie die de andere ondermijnt." }] },
{ type: "bronnen", items: [{'apa': 'Schulman, P. R. (2020). Safety and security: Managerial tensions and synergies. In C. Bieder & K. Pettersen Gould (Eds.), The coupling of safety and security (pp. 87–95). Springer.'}, {'apa': 'Roe, E., & Schulman, P. (2008). High reliability management. Stanford University Press.'}, {'apa': 'Roe, E., & Schulman, P. (2016). Reliability and risk: The challenge of managing interconnected critical infrastructures. Stanford University Press.'}, {'apa': 'Schulman, P. (1993). The negotiated order of organizational reliability. Administration & Society, 25(3), 353–372.'}, {'apa': 'La Porte, T., & Consolini, P. (1991). Working in practice but not in theory: Theoretical challenges of high reliability organizations. Journal of Public Administration Research and Theory, 1(1), 19–47.'}, {'apa': 'Boin, A., & Smith, D. (2006). Terrorism and critical infrastructures: Implications for public-private crisis management. Public Money & Management, 26(5), 295–304.'}, {'apa': 'Dombrowski, P., & Demchak, C. (2015). Thinking systemically about security and resilience in an era of cybered conflict. In J. Richet (Ed.), Cybersecurity policies and strategies for cyberwarfare prevention (pp. 367–382). IGI Global.'}, {'apa': 'Pettersen, K. A., & Schulman, P. (2016). Drift, adaptation, resilience and reliability: An empirical clarification. Safety Science, 117.'}, {'apa': 'Pettersen, K. A., & Bjørnskau, T. (2015). Organizational contradictions between safety and security. Safety Science, 71, 167–177.'}] },
{ type: "preview", titel: "Van de HRO naar de gewone werkplek", tekst: "Schulman keek naar kerncentrales en luchtverkeersleiding, de extreme gevallen. Boustras brengt het in hoofdstuk 10 terug naar de gewone werkplek, waar de meeste mensen werken en waar de gevolgen van security minder zichtbaar zijn.", punten: ["Welke nieuwe risico's en drijvers het snijvlak op de werkplek veranderen", 'Waarom overheid en regelgeving daar de ruggengraat worden', 'Wat dat betekent voor de eisen aan werkgevers'] }
] }
];

LESSTOF["intro-to-safety-security/h10"] = [
{ id: "voor", titel: "Voorbereiding", blokken: [
{ type: "uitleg", titel: "Over dit hoofdstuk", tekst: "**Auteur:** George Boustras, CERIDES (Excellence in Innovation and Technology), European University Cyprus, Nicosia.\n\n**Kern in één zin:** cyberdreiging, radicalisering en de economische crisis komen alle drie samen bij de individuele werknemer, en daarmee ontstaat een nieuw vakgebied op het snijvlak van safety en security." },
{ type: "leerdoelen", items: ["Uitleggen waarom Boustras stelt dat safety steeds afhankelijker wordt van security", "De vier verbindende factoren benoemen en per factor het mechanisme beschrijven", "De korte- en langetermijneffecten van securityincidenten op de werkplek onderscheiden", "Uitleggen wat sociale uitsluiting als gemeenschappelijke route betekent", "Het slotverschil tussen safety en security in termen van juridische verantwoordelijkheid reproduceren"] }
] },
{ id: "kern", titel: "Kernstof", blokken: [
{ type: "tekst", titel: "10.1 Inleiding: een nieuw verhaal voor werkplekveiligheid", tekst: "Sinds de eeuwwisseling hebben zich veel securitykwesties met grote impact voorgedaan. Grootschalig, zoals de aanslagen in **Parijs, Brussel, Nice, Londen en Madrid**, en kleinschalig, zoals mesaanvallen in Israël en eenlingen (lone wolves).\n\nBoustras maakt een observatie die je moet onthouden: als categorie gebeurtenissen worden de zeldzame episodes van begin deze eeuw, 9/11, 7/7 in Londen, Atocha in Madrid, **steeds \"gewoner\"**. Episodes van geweld rond radicalisering, cyberaanvallen en toegenomen angst voor een **CBRN-aanval** (chemisch, biologisch, radiologisch, nucleair, bijvoorbeeld een vuile bom) creëren ook voor werkplekken een complexe securityomgeving.\n\nTwee opkomende thema's krijgen de hoofdrol:\n\n**Radicalisering** is een opkomend vraagstuk voor arbeidsveiligheid en -gezondheid, en illustreert de moeilijkheid van westerse samenlevingen om een mechanisme te verklaren dat voorheen onbekende vormen van maatschappelijke onrust aan de oppervlakte brengt.\n\n**Cybercriminaliteit**, een product van de grootschalige ontwikkeling van informatietechnologie, kan leiden tot nieuwe en onvoorziene interacties tussen werkplekken die voorheen niets met elkaar te maken hadden. De afhankelijkheid van moderne samenlevingen en werkomgevingen van digitale systemen laat de mogelijke impact van zulke aanvallen zien.\n\nWat beide gemeen hebben, en dit is de rode draad van het hoofdstuk: **ze worden gedreven door de menselijke factor**." },
{ type: "uitleg", titel: "waarom dit hoofdstuk het boek afmaakt", tekst: "Tot nu toe ging het boek over installaties, systemen, organisaties en beroepen. Boustras brengt het terug naar de plek waar de meeste mensen werken: een kantoor, een school, een ziekenhuis, een fabriekshal.\n\nZijn punt is dat de grote securitythema's daar aankomen in een vorm die geen enkele beveiliger herkent. Niet als een aanval, maar als een collega die zich uitgesloten voelt, als een medewerker die na een aanslag in het nieuws niet meer durft te reizen, als een systeem dat plat ligt en mensen thuis houdt.\n\nDaarmee is dit het hoofdstuk dat het dichtst bij jouw toekomstige praktijk staat. De meeste SSMS'ers gaan niet bij een kernwapenlab werken." },
{ type: "tekst", tekst: "Verder is de gecombineerde inspanning rond **bescherming van kritieke infrastructuur** een \"test bed\" dat de onderlinge verbondenheid van deze nieuwe securitydreigingen bewijst. Die opkomende risico's raken de infrastructuur, de werkomgeving én de werknemer.\n\nTegelijkertijd zijn safetykwesties sterk beïnvloed door de nog altijd doorwerkende **economische neergang** en de bijproducten daarvan, namelijk toegenomen psychosociale problemen op het werk. Veiligheid in de werkomgeving, veiligheidssystemen en bevoegde autoriteiten zijn **slachtoffer van bezuinigingsmaatregelen** die met de financiële crisis samenhangen. Financiële onzekerheid en toegenomen mediahysterie rond security leiden tot nóg meer psychosociale problemen.\n\nBoustras verwijst naar **Ulrich Beck** en diens *Risk Society*: er is een nieuwe set maatschappelijke condities ontstaan, cyberdreiging, radicalisering, economische crisis, die de werkplek en de werknemer raken. Die condities brengen safety en security dichter bij elkaar en creëren een complexere en dynamischer omgeving dan voorheen.\n\nDat is volgens hem een **nieuw verhaal (narrative) voor werkplekveiligheid**, waarin een causale verbinding wordt geconstrueerd: securitygerelateerde episodes raken safety, zowel op het niveau van het werk als van de samenleving. Er moet dus een nieuw type risico worden meegewogen, een type dat **per definitie een grote onzekerheid erft**. Die onzekerheid is inherent doordat het risico afhankelijk is van **menselijk gedrag**." },
{ type: "tekst", titel: "10.2 Veranderingen in de fysieke werkomgeving", tekst: "Securityincidenten hebben dramatische korte- en langetermijneffecten op de werkplek. Boustras onderscheidt ze consequent, en dat onderscheid is toetsstof.\n\n**Direct en zichtbaar:** fysiek letsel en verlies van levens hebben een directe, onmiddellijke impact op de dagelijkse operatie van de organisatie.\n\n**Traag en onzichtbaar:** psychosociale problemen hebben zowel korte- als langetermijnimpact. **PTSS**, depressie en andere stressgerelateerde ziekten raken de werkplek organisatorisch én financieel. Stressgerelateerde ziekten op het werk hebben directe kosten voor het sociale verzekeringsstelsel." },
{ type: "tekst", titel: "Het voorbeeld van de eerste responders na 9/11", tekst: "Na de instorting van de Twin Towers in New York in 2001 bedekte een **giftige wolk**, met daarin onder meer asbest, de wijde omgeving. De effecten op de ruim **40.000 eerste responders en hulpverleners** waren zowel kort- als langdurig. Er is gerapporteerd dat ten minste **vier sterfgevallen** onder eerste responders zijn gekoppeld aan aandoeningen van de bovenste luchtwegen, en dat **honderden brandweerlieden** met pensioen zijn gegaan vanwege gezondheidseffecten." },
{ type: "waarschuwing", titel: "dit is de kern van het hoofdstuk in één voorbeeld", tekst: "9/11 wordt in het hele boek behandeld als het securityincident bij uitstek: de aanslag die het vakgebied veranderde, de reden dat de TSA bestaat, het moment waarop de cockpitdeur werd verstevigd.\n\nBoustras kijkt naar dezelfde gebeurtenis en ziet iets anders: **een arbeidsveiligheidsprobleem**. Asbest, luchtwegaandoeningen, vervroegde pensionering. Dat zijn klassieke OHS-thema's, veroorzaakt door een securityincident, en ze speelden zich jaren later af.\n\nDat is precies wat hij bedoelt met het snijvlak. Niet dat safety en security hetzelfde zijn, maar dat een securityincident zich vertaalt in safetygevolgen bij individuele werknemers, met een vertraging van jaren." },
{ type: "tekst", titel: "Gevolgen op organisatieniveau", tekst: "Securityincidenten kunnen grootschalig zijn (9/11, 7/7) of kleinschalig (een mogelijke inbreuk op het terrein van de organisatie). De **risicobeoordeling wordt hervormd** om ook securityaspecten mee te nemen, vooral de aspecten die direct met safety samenhangen. Een voorbeeld is de ontwikkeling van een securitybeleid of het opzetten van een registratiemechanisme, handmatig of automatisch, bemand of elektronisch, om een poging tot brandstichting te voorkomen of erop te reageren.\n\nEn dan een concrete organisatieontwikkeling die je moet kennen: **laagrisicobedrijven, zoals kantooromgevingen, proberen steeds vaker de taken van de security officer en de safety officer samen te voegen.** Dat is precies de vraag uit hoofdstuk 1, hier beantwoord door de praktijk: waar de risico's laag zijn, wordt geïntegreerd, meestal om kosten te besparen." },
{ type: "tekst", titel: "Vertrouwen als beschadigd goed", tekst: "Naast de eerder beschreven effecten hebben aanvallen op de werkplek nóg een gevolg. Hoewel een securityincident een kwaadwillende, meestal vooraf geplande handeling is, laten studies zien dat securityincidenten op de werkplek invloed hebben op de manier waarop **werknemers vertrouwen ervaren tegenover hun werkgever**.\n\nDe belangrijkste verworvenheid van de werknemer, namelijk de verantwoordelijkheid van de eigenaar of manager om een veilige en gezonde werkplek te bieden, wordt **in twijfel getrokken**. Het is daarom cruciaal om het belang van **integratie van security in de arbo-planning** van de organisatie te benadrukken. De rol van de leiding vóór, tijdens en na een crisis is cruciaal voor het vermogen van een organisatie om te reageren en terug te keren naar een functionele toestand.\n\nTerroristen kiezen doorgaans **emblematische werkgevers en werkplekken** om mediadekking te bereiken, ook om ideologische redenen. De literatuur suggereert dat **persoonlijke voorbereiding nog steeds laag is**, zelfs in landen die al emblematische securityincidenten en terreuraanslagen hebben meegemaakt: minder dan de helft van de bevolking heeft voorbereidende maatregelen genomen.\n\nSecurityincidenten op de werkplek creëren directe problemen met langdurige effecten, maar tegelijkertijd creëert de samenleving een **\"mechanisme\" waarin die gebeurtenissen niet lang na hun optreden worden weggepoetst**. Daarom wordt de opkomst van de behoefte aan een **security culture**, vergelijkbaar met de vermeende vestiging van een safety culture op individueel, organisatorisch en nationaal niveau, belangrijk.\n\nBoustras voegt daar een argument aan toe dat direct aansluit op Jore in hoofdstuk 5: je zou kunnen stellen dat **security- en safetycultuur elkaar ontmoeten omdat ze allebei in de eerste plaats op het individu zijn gericht**. Hij onderbouwt dat met drie verwijzingen: Guldenmund (de meeste empirische studies van safety culture richten zich op individuele houdingen, percepties en gedragspatronen), Mearns en Yule (safety als centrale waarde is het bepalende moment voor elke organisatie die aan een positieve safety culture begint, ongeacht de nationale context), en Smith (de verschuiving van security na de Koude Oorlog van het nationale niveau naar het niveau van gemeenschap en individu)." },
{ type: "tekst", titel: "10.3 Cyber en de veiligheid op de werkplek", tekst: "Cyberaanvallen komen steeds vaker voor en kunnen aanzienlijke impact hebben op de werkplek en op het welzijn van de werknemer.\n\n**Op organisatieniveau.** Een aanval kan betekenen: verlies van gevoelige data, wat kan leiden tot **tijdelijke of permanente sluiting** van het bedrijf. Hoogrisico-operaties kunnen worden geraakt met de mogelijkheid van **operationele of fysieke schade**. Boustras verwijst naar berichtgeving na de aanslagen in Brussel in 2016 over voorbereidend werk voor een mogelijke terroristische operatie in een of meer van de **nucleaire installaties in België**.\n\n**Op maatschappelijk niveau.** Bijzondere aandacht verdient de relatie tussen cybersecurity op de werkplek en de veiligheid en betrouwbaarheid van **kritieke infrastructuur**. Energie-infrastructuur is de belangrijkste dragende pijler van nationale en internationale economische activiteit. Onderbrekingen kunnen ernstige schade veroorzaken aan de bredere werkplek.\n\n**Domino-effecten** van onderbrekingen in kritieke infrastructuur kunnen onder meer ernstige financiële schade veroorzaken. Boustras citeert een krantenbericht: honderden winkels in het zuidoosten van Londen en Noord-Kent moesten sluiten, en forenzen spraken van uiterst beangstigende omstandigheden op de weg toen de verkeerslichten uitvielen.\n\nModerne infrastructuren functioneren als een **\"system of systems\"** met veel interacties, verbindingen en onderlinge afhankelijkheden. Schade door een cyberaanval op de werkplek van één infrastructuursysteem kan dus **cascaderen** en leiden tot storingen in alle verwante en afhankelijke infrastructuren, wat uiteindelijk de bredere economie en samenleving raakt. Die onderlinge verbindingen en afhankelijkheden kunnen **digitaal, fysiek, geografisch of logisch** zijn." },
{ type: "uitleg", titel: "onthoud die vier soorten afhankelijkheid", tekst: "De indeling komt van Rinaldi en collega's en is standaardstof in kritieke-infrastructuurstudies.\n\n**Digitaal:** systeem A stuurt data naar systeem B. Valt A uit, dan blindvliegt B.\n**Fysiek:** systeem A levert een product aan B. Geen stroom, geen pompstation.\n**Geografisch:** A en B liggen toevallig op dezelfde plek. Eén brand in één tunnel raakt stroom, glasvezel en water tegelijk.\n**Logisch:** A en B hangen samen via menselijk gedrag of markten. Geen betaalverkeer, dus mensen gaan hamsteren, dus de winkelketen loopt vast.\n\nDie vierde is de lastigste, en de meest onderschatte. Hij loopt via mensen, niet via kabels." },
{ type: "tekst", titel: "10.4 Radicalisering en de werkplek", tekst: "Een opkomend risico voor safety en security op de werkplek is **radicalisering**: een proces waarbij individuen worden blootgesteld aan extremistisch materiaal met direct effect op hun sociale gedrag en hun opvattingen over samenleving en rechtvaardigheid. Mechanismen zoals **persoonlijk onrecht of wraak** en bestaande of zich ontwikkelende psychologische problemen verklaren de overgang van geradicaliseerd individu naar terrorist.\n\nBoustras signaleert een gat in de literatuur: ondanks mediaberichten dat de daders van de meeste recente aanslagen \"homegrown, geradicaliseerde jongeren\" waren, is er **geen literatuur** die de relatie tussen radicalisering en de werkomgeving belicht. Dit hoofdstuk probeert die parameters te benoemen.\n\nDe redenering verloopt in stappen:\n\n**Stap 1.** De relatie tussen menselijk gedrag en veiligheid op de werkplek is rechtstreeks: rationeel of irrationeel gedrag leidt tot het ontstaan van ongevallen.\n\n**Stap 2.** Rapportages van aangehouden terroristen noemen als oorzakelijke factoren voor radicalisering verschillende vormen van **discriminatie** (vooral rond religieuze of politieke kwesties) en **pesten** als gevolg van die discriminatie.\n\n**Stap 3.** Discriminatie op de werkplek heeft een lange geschiedenis. Boustras citeert Huang en Kleiner: in de jaren zestig en zeventig vochten zwarte mensen en vrouwen voor hun rechten, in de jaren tachtig en negentig homoseksuelen en lesbiennes, en nu gaat het tussen werkgevers en werknemers met **religie op de werkplek** als strijdtoneel.\n\n**Stap 4.** Religieuze discriminatie op de werkplek kan **formeel en informeel** voorkomen. Religieuze grappen, uitsluiting op religieuze gronden en het bagatelliseren van religieuze overtuigingen kunnen een omgeving creëren waarin **persoonlijk onrecht en wraakzucht** worden gekweekt.\n\n**Stap 5.** En dan het scherpste punt: ongeacht de intensiteit van de opmerkingen of gedragingen kan **waargenomen discriminatie** (perceived discrimination) verschillende effecten hebben. Of de discriminatie nu breed of verhuld is, **wat het meest telt is hoe de werknemer haar ervaart**.\n\nDe resultaten van waargenomen uitsluiting zijn voelbaar op de werkplek en in de samenleving. Verkuyten benadrukt de rol van discriminatie als leidende factor naar radicalisering. De populaire pers beschrijft terroristen als \"normale\" mensen tot een bepaalde leeftijd, met informele, precaire of formele arbeidsrelaties.\n\nPesten en discriminatie hebben dus **dubbele effecten**: op de werkplek (ziekteverzuim, met sociale en economische gevolgen) en op het slachtoffer (psychosociale problemen)." },
{ type: "waarschuwing", titel: "de subtiliteit van \"perceived discrimination\"", tekst: "Dit is het punt waar veel studenten te snel overheen lezen. Boustras zegt niet dat elke werkplek discrimineert. Hij zegt dat de **waarneming** van de werknemer bepalend is, niet de intentie van de collega die de grap maakte.\n\nDat is voor jouw beroep belangrijk om twee redenen. Ten eerste kun je perceptie niet wegnemen door te zeggen \"zo was het niet bedoeld\". Ten tweede is perceptie wél meetbaar, met dezelfde instrumenten waarmee je subjectieve veiligheid meet: enquêtes, gesprekken, meldingen.\n\nDaarmee wordt radicalisering een thema dat via arbeidsveiligheid benaderbaar is. Niet met een securityaanpak van opsporing en verdenking, maar met een safetyaanpak van klimaatmeting en meldstructuren. Dat is de brug die Boustras slaat." },
{ type: "tekst", titel: "10.5 De financiële crisis en psychosociale problemen", tekst: "De economische crisis die in 2008 begon met de val van **Lehman Brothers** heeft in delen van de westerse wereld sporen achtergelaten. **Zuid-Europese landen** droegen het grootste deel van de gevolgen; voor sommige landen werd de economische crisis ook een sociale crisis.\n\nBoustras betoogt dat de effecten van de financiële crisis een **verbindende factor** tussen safety en security kunnen zijn. De crisis had impact op de arbeidsmarkt en op de volksgezondheid. Veranderingen op de arbeidsmarkt betekenden een toename van **werkloosheid, tijdelijk en zwart werk**. Lagere lonen, onzekerheid en informele werktijden schetsen een dramatisch beeld met duidelijke gevolgen voor gezondheid en veiligheid van werknemers.\n\nEen direct gevolg is de toename van **psychosociale problemen** op de werkplek. Die hebben directe effecten op de organisatie en het personeel: **angst, pesten, mobbing en depressie** leiden onder meer tot een toename van arbeidsongevallen.\n\nDan volgt de kernredenering van de paragraaf:\n\n**Onzekerheid en wanhoop leiden tot verschillende vormen van extreem gedrag, wat de achtergrond creëert voor potentiële aanvallen en agressie, wat op zijn beurt leidt tot sociale uitsluiting.**\n\nEn Boustras merkt op: hier zijn **overeenkomsten met het proces dat naar radicalisering leidt**, zoals in 10.4 beschreven.\n\nHistorische analyse toont dat financiële crises **politieke ontwrichting en politieke radicalisering** veroorzaken. De economische crisis is de drijvende kracht geweest achter de opkomst van extremistische politieke partijen in Europa, die anti-globalisering, anti-immigratie en anti-buitenlander-retoriek verkochten.\n\nDe conclusie van de paragraaf, en het scharnier van het hele hoofdstuk:\n\n**Sociale uitsluiting komt naar voren als de verbindende factor tussen de mechanismen die tot safety- en tot securityincidenten kunnen leiden.**" },
{ type: "tekst", titel: "10.6 Conclusies", tekst: "Het doel van het hoofdstuk was factoren te beschrijven die veiligheid op de werkplek herdefiniëren: het snijvlak van safety en security. Het hoofdstuk heeft laten zien hoe specifieke factoren en casussen, cybersecurity, bescherming van kritieke infrastructuur, radicalisering, de **\"verbindende punten\"** kunnen zijn tussen security en safety.\n\nBoustras is expliciet over de status van zijn betoog: **zonder de empirische analyse die nodig is om causale verbanden vast te stellen**, geven de verkende factoren wel aan hoe safety en security elkaar steeds meer ontmoeten **op het niveau van de individuele werknemer**, met zowel causale verbindingen naar als gevolgen voor de organisatie.\n\nIn dat perspectief moeten veel werkplekrisico's worden gezien als sterk afhankelijk van **menselijk gedrag** en als uitkomst van psychologische processen. Psychosociale problemen hangen samen met securityincidenten en de bijbehorende mediahysterie, die werknemers verontrusten en langdurige gevoelens van angst creëren. Politieke radicalisering en de financiële crisis hebben **sociale uitsluiting als gemeenschappelijke route** die tot securityincidenten kan leiden.\n\nDaaruit volgt een concreet voorstel. We moeten nadenken over de **participatie van werknemers** in safety én security, terwijl werknemers tot nu toe vooral als onderdeel van safetyinspanningen werden gezien. Formele vormen van werknemersparticipatie in de ontwikkeling van safetybeleid, via de **wettelijk verplichte instelling van arbo-commissies**, zouden kunnen worden nagevolgd voor het vestigen van een security culture op de werkplek. **Training, risicobeoordeling en het aannemen van beleid zouden voor beide culturen standaard moeten zijn.**\n\nEn dan de slotzin van het hoofdstuk, die je uit je hoofd moet kennen:\n\n**Een fundamenteel verschil tussen safety en security is dat er bij safety een wettelijke verplichting rust op de eigenaar of manager, waarmee de verantwoordelijkheid is gepersonaliseerd. Bij security is dat niet het geval, omdat de staatsautoriteiten de ruggengraat vormen. Dat heeft opnieuw gevolgen voor strategische prioriteiten en de ontwikkeling van prikkels.**" },
{ type: "uitleg", titel: "waarom die slotzin zoveel verklaart", tekst: "Hier komt alles samen. Brooks en Coole zeiden in hoofdstuk 7 dat safety wetgeving heeft en security niet. Boustras legt uit wat dat doet met **prikkels**.\n\nBij safety is er één persoon aanwijsbaar verantwoordelijk: de werkgever. Die kan worden aangesproken, beboet en vervolgd. Daardoor is er een directe reden om te investeren, ook als er niets gebeurt.\n\nBij security is de staat de ruggengraat. De werkgever kan denken: terrorisme is een taak van de politie en de inlichtingendiensten, niet van mij. Dat is juridisch grotendeels waar, en het is precies de reden dat security op de gemiddelde werkplek onderbelicht blijft.\n\nVoor jou als adviseur betekent dat: als je een organisatie wilt bewegen tot securityinvesteringen, kun je niet leunen op de wet zoals bij safety. Je moet een ander argument vinden: continuïteit, reputatie, vertrouwen van werknemers, of de safetygevolgen die Boustras beschrijft." },
{ type: "begrippen", titel: "Kernbegrippen uit hoofdstuk 10", items: [{ begrip: "Snijvlak van safety en security", definitie: "het nieuwe aandachtsgebied binnen arbeidsveiligheid waar securitydreigingen zich vertalen in safetygevolgen voor de individuele werknemer." }, { begrip: "CBRN", definitie: "chemisch, biologisch, radiologisch en nucleair; het dreigingstype waarvan de angst, bijvoorbeeld voor een vuile bom, bijdraagt aan de complexe securityomgeving van werkplekken." }, { begrip: "Psychosociale problemen", definitie: "PTSS, depressie, angst, pesten en mobbing; de traag werkende gevolgen van securityincidenten en economische onzekerheid, met directe kosten voor organisatie en sociale zekerheid." }, { begrip: "Radicalisering", definitie: "proces waarbij individuen door blootstelling aan extremistisch materiaal hun sociale gedrag en hun opvattingen over samenleving en rechtvaardigheid zien veranderen." }, { begrip: "Waargenomen discriminatie", definitie: "de ervaring van uitsluiting door de werknemer, ongeacht de intensiteit of intentie van het gedrag; volgens Boustras bepalender dan de discriminatie zelf." }, { begrip: "Sociale uitsluiting", definitie: "de gemeenschappelijke route die zowel vanuit radicalisering als vanuit economische crisis naar securityincidenten kan leiden." }, { begrip: "System of systems", definitie: "moderne infrastructuur als geheel van systemen met interacties en onderlinge afhankelijkheden, waardoor schade kan cascaderen." }, { begrip: "Vier soorten afhankelijkheid", definitie: "digitaal, fysiek, geografisch en logisch; de manieren waarop infrastructuren met elkaar verbonden zijn." }, { begrip: "Emblematisch doelwit", definitie: "werkgever of werkplek die door terroristen wordt gekozen vanwege mediadekking en ideologische betekenis." }, { begrip: "Arbo-commissie als model", definitie: "de wettelijk verplichte werknemersparticipatie in safetybeleid, die volgens Boustras kan worden nagevolgd voor security culture." }, { begrip: "Gepersonaliseerde verantwoordelijkheid", definitie: "bij safety rust de wettelijke plicht op de eigenaar of manager; bij security vormen staatsautoriteiten de ruggengraat, met andere prikkels als gevolg." }] }
] },
{ id: "toepassen", titel: "Toepassen", blokken: [
{ type: "oefening", id: "h10-oef-1", niveau: "basis", vraag: "Leg uit waarom Boustras 9/11 gebruikt als voorbeeld van een safetyprobleem en niet alleen van een securityprobleem.", antwoord: "Na de instorting van de Twin Towers bedekte een giftige wolk met onder meer asbest de omgeving. Ruim 40.000 eerste responders en hulpverleners werden blootgesteld, met korte- en langetermijneffecten: ten minste vier sterfgevallen zijn gekoppeld aan aandoeningen van de bovenste luchtwegen en honderden brandweerlieden gingen vervroegd met pensioen vanwege gezondheidseffecten. Dat zijn klassieke arbeidsveiligheids- en arbeidsgezondheidsthema's, veroorzaakt door een securityincident, en met een vertraging van jaren. Het voorbeeld illustreert de kernstelling van het hoofdstuk: safety en security zijn niet hetzelfde, maar securityincidenten vertalen zich op het niveau van de individuele werknemer in safetygevolgen, zowel fysiek als psychosociaal, en die gevolgen verschijnen vaak pas lang nadat de aandacht voor het incident is weggeëbd." },
{ type: "oefening", id: "h10-oef-2", niveau: "gevorderd", vraag: "Boustras noemt sociale uitsluiting de verbindende factor tussen safety en security. Werk uit hoe hij daar via twee verschillende routes op uitkomt, en beoordeel hoe sterk dat argument is.", antwoord: "De eerste route loopt via radicalisering. Aangehouden terroristen noemen discriminatie, vooral religieus of politiek, en het daaruit voortvloeiende pesten als oorzakelijke factoren. Op de werkplek kan religieuze discriminatie formeel of informeel optreden, via grappen, uitsluiting of het bagatelliseren van overtuigingen, en daarbij is niet de intensiteit maar de waarneming van de werknemer bepalend. Waargenomen uitsluiting kweekt persoonlijk onrecht en wraakzucht, en Verkuyten benoemt discriminatie als leidende factor naar radicalisering. De tweede route loopt via de financiële crisis. Die leidde tot werkloosheid, tijdelijk en zwart werk, lagere lonen en onzekerheid, en daarmee tot psychosociale problemen als angst, pesten en depressie. Onzekerheid en wanhoop leiden tot extreem gedrag, dat de achtergrond vormt voor aanvallen en agressie, wat op zijn beurt tot sociale uitsluiting leidt; historisch veroorzaken financiële crises bovendien politieke radicalisering en de opkomst van extremistische partijen. Beide routes eindigen dus bij hetzelfde punt. Het argument is sterk als hypothese omdat het twee losstaande maatschappelijke ontwikkelingen aan één mechanisme koppelt dat op de werkplek meetbaar en beïnvloedbaar is, via werkklimaat, meldstructuren en participatie. Het is zwak als bewijs, en Boustras erkent dat zelf: zonder empirische analyse zijn de causale verbanden niet vastgesteld, en het gaat om een exploratieve benadering. Bovendien is sociale uitsluiting zo'n breed begrip dat het risico bestaat dat het alles verklaart en daarmee niets, precies het bezwaar dat Jore in hoofdstuk 5 tegen security culture inbracht op het criterium differentiation." }
] },
{ id: "checken", titel: "Checken", blokken: [
{ type: "tekst", tekst: "Dit hoofdstuk sluit af met de kernbegrippen en oefeningen in de vorige tabbladen. Loop ze na en kijk of je ze zonder aantekeningen kunt navertellen." }
] }
];

LESSTOF["intro-to-safety-security/h11"] = [
{ id: "voor", titel: "Voorbereiding", blokken: [
{ type: "uitleg", titel: "Over dit hoofdstuk", tekst: "**Auteurs:** de twee redacteuren van het boek, Corinne Bieder (ENAC, Toulouse) en Kenneth Pettersen Gould (Universiteit van Stavanger).\n\n**Kern in één zin:** een gedeelde definitie is misschien niet eens een zinnig doel; wat safety en security wél delen is een onderzoeksagenda op macroniveau, over hoe de wereldwijde trends van de risicosamenleving onvoorziene en verborgen effecten hebben op de praktijk van organisaties." },
{ type: "leerdoelen", items: ["Uitleggen waarom conceptuele overeenstemming volgens de redacteuren geen zinnig doel hoeft te zijn", "De tweedeling in het boek reproduceren tussen auteurs die intentionaliteit en auteurs die kwaadwillende intentie als criterium nemen", "Uitleggen wat \"de problemen definiëren op basis van onze oplossingen\" betekent", "De tegenstelling vertrouwen tegenover wantrouwen benoemen", "De drie soorten trade-offs beschrijven", "Uitleggen wat een globale benadering van organisatieonderzoek vraagt in termen van schalen en actoren"] }
] },
{ id: "kern", titel: "Kernstof", blokken: [
{ type: "tekst", titel: "11.1 Inleiding", tekst: "Na recente gebeurtenissen en rampen, en nu dreigingen en gevaren steeds meer worden gedefinieerd als **systemische risico's en producten van de moderne samenleving**, komen safety en security samen in zowel regelgeving als de ambities van het management.\n\nDe vraag: wat betekent het dat safety en security vermengd raken in het management van gevaarlijke technologieën en activiteiten? Ondanks hun schijnbare of intuïtieve nabijheid op conceptueel niveau, laten safety en security **nuances en verschillen** zien zodra je leiderschap en praktijken analyseert. Technologieën en activiteiten verschillen ook in het aantal en de typen dreigingen en gevaren waarmee ze te maken hebben. Antwoorden zijn dus **complexer dan de conceptuele overeenkomsten suggereren**." },
{ type: "tekst", titel: "11.2 De implicaties van definities", tekst: "Vanuit onderzoek én management lijkt het definiëren van safety en security een natuurlijk vertrekpunt. Velen lijken een **eenduidig begrip** te verwachten, zodat wetenschappers en praktijkmensen in alle sectoren \"dezelfde taal spreken\".\n\nMaar, zeggen de redacteuren, alleen al op basis van de verschillende opvattingen in dit boek is conceptuele overeenstemming **makkelijker gezegd dan gedaan**. Brooks en Coole identificeren duidelijke verschillen in het onderliggende kennisdomein tussen de beroepen, ook al bestaat er enige overlap rond risicomanagement.\n\nEn dan de opvallendste zin van de paragraaf:\n\n**Misschien is een gedeelde definitie helemaal geen zinnig doel om na te streven**, omdat safety- en securitykennis sterk variëren afhankelijk van onder meer gevaren en dreigingen, disciplinaire benadering, regelgevende context en praktijk." },
{ type: "waarschuwing", titel: "dit is een verrassende wending", tekst: "Het boek opende in hoofdstuk 1 met het definitieprobleem, en hoofdstuk 2 was volledig gewijd aan het bouwen van een gedeeld begrippenkader. En nu zeggen de redacteuren aan het eind: misschien moeten we dat helemaal niet willen.\n\nDat is geen zwakte maar het resultaat van elf hoofdstukken. Als Leveson, Wipf, Jore, Brooks en Coole, Schulman en Boustras allemaal met een net iets ander onderscheid werken, en ze hebben allemaal gelijk binnen hun eigen domein, dan is de conclusie dat de definitie **contextafhankelijk** is en niet universeel.\n\nWat dan wel? De redacteuren verschuiven de gedeelde grond van **definities** naar een **onderzoeksagenda**. Niet: wat betekenen deze woorden voor iedereen? Maar: welke vraag moeten beide velden samen beantwoorden?" },
{ type: "tekst", titel: "11.2.1 Gedefinieerd naar wat we willen voorkomen", tekst: "Zowel safety als security worden gezien als **vrijheid van schade**. Als managementstrategie leiden ze allebei tot preventie of minimalisering van ongewenste gevolgen voor mensen, milieu en eigendom. Ze delen dus een gemeenschappelijk doel in **loss prevention**.\n\nMaar zodra je focust op de ongewenste gebeurtenissen en de causale factoren die worden geëlimineerd, verschillen ze. In alle hoofdstukken wordt erkend dat de betrokkenheid van **menselijke intentie als oorzaak** een belangrijk verschil markeert in hoe gebeurtenissen worden beschouwd, gemanaged en voorkomen.\n\nDe redacteuren maken de balans op, en dit rijtje is uitstekende toetsstof omdat het het hele boek in één zin ordent:\n\n**Intentionaliteit als hoofdonderscheid:** Blokland & Reniers, Leveson, Bongiovanni, Boustras.\n\n**Genuanceerder, met kwaadwillende intentie of \"de primaat van vijandige intentie\" als criterium:** Jore, Brooks & Coole, Wipf, La Porte, en Schulman (van wie de term \"primacy of hostile intent\" komt)." },
{ type: "tekst", titel: "11.2.2 Risico als overkoepelend kader", tekst: "Volgens Leveson en Bongiovanni doen de conceptuele oefeningen rond de termen er niet echt toe. In Levensons benadering zijn safety en security beide bronnen van **verlies van controle** over een systeem, zonder dat onderscheid nodig is; securitygebeurtenissen hebben een gelijkwaardige status aan technisch falen of menselijke fout. De twee combineren soepel door securitydreigingen toe te voegen aan safetygevaren.\n\nMaar dan komt de scherpste methodologische waarschuwing van het hele boek. Het definiëren van safety én security als een **dynamisch besturingsprobleem** is een manier om de kwestie te framen waardoor **de oplossing die al beschikbaar is voor safety ook op security toepasbaar wordt gemaakt**. Zoals tijdens de workshop werd gezegd:\n\n**We moeten oppassen dat we \"de problemen definiëren op basis van onze oplossingen\".**" },
{ type: "uitleg", titel: "waarom dit zo'n belangrijke waarschuwing is", tekst: "Dit is een denkfout waar iedereen gevoelig voor is, en niet alleen in dit vakgebied.\n\nAls je een uitstekende hamer hebt, ga je problemen beschrijven als spijkers. Leveson heeft een uitstekend systeemtheoretisch instrument dat werkt voor safety. Als zij vervolgens security definieert als \"ook een besturingsprobleem\", dan is het geen wonder dat haar instrument erop past: ze heeft het probleem zo geformuleerd dat het past.\n\nDat maakt haar niet fout. Het maakt haar aanpak **circulair**, en dat is iets wat je bij elk model moet kunnen herkennen. Vraag altijd: is dit probleem zo beschreven omdat het zo is, of omdat de auteur er een oplossing voor heeft?" },
{ type: "tekst", tekst: "Blokland en Reniers gebruiken een breed toegepaste definitie van risico als referentie. Een belangrijke uitdaging bij de beweging van safety en security naar risico is dat beide begrippen **ten onrechte een absolute vrijheid van risico kunnen communiceren** die in de risicowetenschap niet besloten ligt.\n\nVeel van de grootste risico's die we nu kennen zijn, hoe verschillend hun oorzaken ook, allemaal **producten van menselijke activiteiten die als noodzakelijk worden gezien**. Risico's komen dus voort uit activiteiten die we moeten of willen ondernemen, en kunnen **niet door de wetenschap worden \"weggemanaged\"**. Politieke eisen om zowel safety als security kunnen politici en toezichthouders zelf in verwarring brengen, en **onrealistische en ongerechtvaardigde verwachtingen** creëren. De foutmarges kunnen veranderen, maar het risico blijft zolang de activiteiten doorgaan.\n\nDat heeft de benadering van onzekerheid in risicoonderzoek verbreed. Een belangrijke vraag is of onzekerheid **positief of negatief** is: is het bij kerncentrales of luchtvaartmaatschappijen goed of slecht om onzekerheden te hebben? Verschilt dat per dreiging of gevaar?\n\nBovendien hangt hoeveel een activiteit voor ons betekent sterk samen met ons oordeel of het risico de moeite waard is. Zowel de beoordeling als het management van risico's wordt dus beïnvloed door **individuele en sociale factoren**. De redacteuren voorspellen twee patronen, gebaseerd op de theorie van **sociale amplificatie van risico**:\n\n- Waar de vraag naar safety en security **stijgt**, zoals na een ramp of aanslag, moeten we verwachten dat de risicoperceptie wordt **versterkt** en dat normen strenger worden dan een directe schatting rechtvaardigt.\n- Waar de vraag **laag** is, bijvoorbeeld bij activiteiten met grote kortetermijnvoordelen en onzekere gevolgen zoals **mobiele digitale communicatietechnologie**, moeten we verwachten dat risico's worden **gedempt** en normen soepeler zijn." },
{ type: "tekst", titel: "11.2.3 Bij safety vertrouwen we, bij security wantrouwen we", tekst: "Deze paragraaftitel is de scherpste formulering van het transparantieconflict in het hele boek, en je moet hem kennen.\n\nWaar safety, althans in principe, een staat heeft bereikt waarin **openheid en het delen van informatie** worden erkend als criteria voor verbetering, is security eerder een **wereld van geheimhouding**, zowel voor aanvallers als voor potentiële doelwitorganisaties, die hun kwetsbaarheid niet willen vergroten door hun kenmerken te onthullen.\n\nEen van de securitydreigingen die meer aandacht heeft gekregen zijn **insider events**, treurig geïllustreerd door de **Germanwings**-ramp in 2015, waarbij de crash bewust werd veroorzaakt door de copiloot.\n\nEn dan de kern: de mogelijkheid van werknemers die **enerzijds worden vertrouwd** vanwege hun bijdrage aan safety en **tegelijkertijd worden gewantrouwd** als potentiële securitydreiging, is een uitdaging voor organisaties, conceptueel én praktisch. Dat sluit direct aan bij de vraag van Jore in hoofdstuk 5 of een security culture betekent dat je achterdochtig moet zijn tegenover collega's.\n\nBovendien: **toegang krijgen tot het veld** voor onderzoekers, of zelfs informatie uitwisselen met experts, wordt een uitdaging zodra security in het spel is. Dat verklaart mede waarom het empirisch onderzoek waar La Porte om vroeg zo schaars is.\n\nDe conclusie van deze paragraaf: het adresseren van de onderlinge verbanden is **niet zo simpel als de twee \"mengen\"** met een brede risicobenadering of de scope van bestaande benaderingen uitbreiden. Zoals Schulman laat zien, omvat security **kwetsbaarheidsvariabelen buiten de grenzen van organisaties**. Dat vraagt om voorzichtigheid: laat je niet **verblinden door conceptuele elegantie of door methodologische oplossingen die al beschikbaar zijn**." },
{ type: "tekst", titel: "11.3 Trade-offs tussen safety en security", tekst: "Het verkennen van synergieën en spanningen bracht drie dingen aan het licht: de respectieve **beroepen**, de **middelen** waar beide naar streven, en enige conceptuele en methodologische **rivaliteit** tussen wetenschappelijke kaders en gemeenschappen. Organisaties hebben een zekere mate van beide nodig, maar er kunnen belangrijke **trade-offs** tussen zitten.\n\n**Trade-off 1: aandacht, middelen en macht.** De securitywereld is sterk veranderd. De redacteuren citeren Jore uit de workshop: het was vroeger een politiezaak met geclassificeerde informatie, tegenwoordig doen veel mensen aan security, private bedrijven en het maatschappelijk middenveld, van de beveiliger in het hotel en op de luchthaven tot de corporate security officer. De verspreiding van security als activiteit ging gepaard met de **structurering van security als beroep**, met eigen taken, kennisdomein en beroepsgemeenschappen, gescheiden van safety.\n\nNu security een groeiende zorg is voor gevaarlijke industrieën, **concurreren safety en security meer dan ooit binnen organisaties om aandacht, middelen en macht**. Zoals La Porte stelt, hangt de vorm van die managementuitdaging af van het **historische pad**: welke van de twee er eerst was en welke mix al bestaat. Het introduceren van een nieuwe managementfunctie betekent middelen toewijzen die ook het bestaande **machtsevenwicht en de zeggenschap** tussen functies kunnen veranderen.\n\n**Trade-off 2: het overplanten van concepten en methoden.** De schijnbare nabijheid maakt het voor onderzoekers verleidelijk om de scope van concepten en methoden van het ene gebied naar het andere uit te breiden.\n\nDe redacteuren geven een concreet voorbeeld uit hun eigen wereld: de onderzoeksagenda van de Europese Commissie voor de luchtvaart. Safety was historisch het kernthema van **ACARE** (Advisory Council for Aviation Research and innovation in Europe). De laatste jaren is de safety-werkgroep de **Safety and Security-werkgroep** geworden, en de versie 2017 van de Strategic Research and Innovation Agenda bevat een grote securitysectie met een onderzoeksbudget dat security benadrukt.\n\nMaar hoewel safety en security dicht genoeg bij elkaar liggen om in een gedeelde onderzoeksagenda te verschijnen, wordt het snijvlak nog steeds grotendeels benaderd **door experts uit één van beide domeinen**, met concepten, theorieën en methoden uit dat ene domein.\n\nEn dan de ironische observatie: wat we daarbij vergeten is dat je zo niet alleen onderzoeksbenaderingen overplant, maar ook hun **(stilzwijgende) grondaannames**, die vaak impliciet blijven. Voorbeeld: safety streeft ernaar dat **iedereen binnen de organisatie informatie deelt**, en safetyonderzoek is gebaseerd op goed ontwikkelde samenwerking tussen onderzoekers en praktijkmensen. **Door een securitybril bekeken zijn diezelfde uitgangspunten niet vanzelfsprekend.** Het begrijpen van de onderliggende premissen is dus essentieel, en dezelfde redenering geldt omgekeerd voor de beweging van security naar safety." },
{ type: "tekst", titel: "11.4 De maatschappelijke convergentie van safety en security", tekst: "Het management van safety en security in organisaties staat **niet los van maatschappelijke verwachtingen en veranderingen**. Zoals Brooks en Coole stellen: de samenleving wordt complexer en haar leden risicomijdender, of het risico nu met safety of met security samenhangt.\n\nTerwijl het niveau van safety en security in de loop van de tijd is **gestegen**, zijn risicopercepties **anders geëvolueerd** en is de algehele **acceptatie van risico gedaald**. Dat is de openingsstelling van hoofdstuk 1, nu onderbouwd met risicoperceptieonderzoek.\n\nDe veiligste aannames voor de toekomst lijken: technologie **én samenleving** worden complexer, onzekerheid zal er volop zijn, en er zullen **nieuwe kwetsbaarheden** ontstaan.\n\nDe redacteuren geloven dat safety en security in organisaties niet losstaan van de bredere patronen van **neoliberale invloed**, gekenmerkt door vergaande deregulering, privatisering en uitbesteding. Individuen hebben vandaag **veel meer doelen en veel meer te verliezen** dan vroeger, terwijl hun **vertrouwen in instituties is gedaald**.\n\nEr is één thema uit de risicosamenlevingsthese dat safety- en securityonderzoek al hebben opgepakt: de erkenning dat het **onmogelijk is alles vooraf te anticiperen en te beheersen** en dat er aanvullende strategieën nodig zijn. Die denklijn is erkend door **HRO-theorie** eind jaren tachtig en begin jaren negentig, door de ontwikkelingen rond **mindful organizing** (Weick en Sutcliffe), en recenter door **resilience engineering**. Alle drie dagen ze managementmodellen uit die op hiërarchische controle berusten, en ze komen samen op gedeelde vragen:\n\n- Hoe bereid je je voor om verrast te worden?\n- Hoe manage je het onverwachte?\n- Wat is er nodig om onzekerheid te erkennen en je daarnaar te ontwikkelen, op maatschappelijk én organisatorisch niveau?\n\nMaar, en dit is het gat dat het boek aanwijst: **er is weinig gedaan aan de vraag hoe de wereldwijde trends van de risicosamenleving onvoorziene en \"verborgen\" effecten meebrengen op de safety- en securitypraktijk van organisaties.** Misschien is het juist **hier**, als een macro-globale benadering van organisatieonderzoek, dat de twee velden een **gedeelde onderzoeksagenda** tegenkomen.\n\nDe redacteuren wijzen daarbij op La Portes bijdrage: de verplichtingen van leiderschap om **voorbij de grenzen van de eigen organisatie** te reiken, om het \"uitdunnen van waakzaamheid\" te voorkomen, om organisatorisch en publiek begrip te verzekeren voor de stewardship-rollen, en om eer en middelen voor safety- en securitystewards te vergroten.\n\nTot slot een observatie over **tijdshorizonten**. De theoretische ontwikkelingen in safety science in de jaren negentig, bij La Porte, Rasmussen en Reason, benadrukten de impact van organisatorische en institutionele aspecten, met tijdlijnen die ver terugliepen en stroomopwaarts van de operatie lagen. Bij security moeten dreigingen zoals terreuraanslagen, zowel om ze te verklaren als om ertegen te beschermen, mogelijk worden gerelateerd aan **nóg langer lopende verschijnselen**, zoals radicalisering bij Boustras, met tijdlijnen die **verder reiken dan technologisch ontwerp, organisatorische beslissingen, regelgeving en wetten**." },
{ type: "tekst", titel: "11.5 Een globale benadering ontwikkelen", tekst: "Als we een globale benadering willen ontwikkelen om organisaties te bestuderen, moeten we **verschillende schalen tegelijk** in beschouwing nemen. Sterker nog: het bereik aan schalen dat nodig is om de interacties tussen safety en security te begrijpen, is mogelijk **groter dan wanneer je safety of security afzonderlijk** bestudeert.\n\nDrie onderbouwingen uit het boek:\n\n- **Pettersen en Bjørnskau** wezen op de impact van EU-securityregelgeving op de arbeidsomstandigheden van luchtvaartmedewerkers en de invloed daarvan op safety in het veld: van Europees beleid tot individuele werkdruk.\n- **Schulman** benadrukt de beperkingen van een uitsluitend organisatiegerichte blik, omdat organisaties weinig of geen controle hebben over externe kwetsbaarheidsvariabelen.\n- **Boustras** bespreekt de noodzaak van meerdere schalen rond de link tussen radicalisering als internationaal vraagstuk en werkplekrisico's op individueel niveau.\n\nOmgekeerd geldt: met steeds meer onderling verbonden systemen en kritieke infrastructuren kan **één individuele kwaadwillende daad wereldwijde safetygevolgen** hebben, direct, indirect of beide.\n\nDie interacties tussen verschijnselen en actoren op zeer verschillende niveaus roepen vragen op. Twee voorbeelden die de redacteuren geven, en die je moet kennen omdat ze het abstracte concreet maken:\n\n**De motivatievraag.** Wat is de motivatie, nog los van de middelen, voor een bedrijf om eigen middelen te prioriteren en te besteden aan het voorkomen van een kwaadwillende aanval die hoog op de maatschappelijke agenda staat, maar met een **zeer lage kans op een incident bij dat specifieke bedrijf**? Dat is precies het prikkelprobleem waar Boustras in zijn slotzin op wees.\n\n**De bevoegdheidsvraag.** Bij de aanslag op de luchthaven van Brussel in 2016 meldde het hoofd van de luchthavensecurity dat leden van zijn crisisteam **moeilijk vanuit buiten de luchthaven bij de crisisruimte konden komen**, omdat de beveiliging ter plaatse onder verantwoordelijkheid van de overheid viel. De reikwijdte van verantwoordelijkheid en de ruimte om safety, security en hun samenhang tijdens een crisis te managen, is dus een probleem op zich." },
{ type: "voorbeeld", titel: "waarom het Brusselse voorbeeld zo pijnlijk is", tekst: "Het crisisteam kon zijn eigen crisisruimte niet in, omdat een andere organisatie de toegang controleerde.\n\nDit is de nooddeur uit hoofdstuk 1, de voorrangsvraag uit hoofdstuk 7 en de vierde spanning van Schulman uit hoofdstuk 9, allemaal tegelijk, en dan echt gebeurd op de dag dat het ertoe deed. Securitykaders belemmeren de snelle coördinatie van noodrespons.\n\nOnthoud dit als je ooit een crisisplan beoordeelt. De vraag is niet alleen wie er in het crisisteam zit, maar of dat team er fysiek bij kan komen als de securitymaatregelen actief zijn, en wie daar dan over gaat." },
{ type: "tekst", titel: "Meerdere actoren", tekst: "Naast de uitdaging van meerdere schalen is er de noodzaak om **meerdere actoren tegelijk** te adresseren, en helder te zijn over welke actoren en op welke niveaus onderzoek wordt gedaan. Een macrobenadering suggereert ook het opnemen van actoren die in safety- en securityonderzoek niet gebruikelijk zijn. Drie voorbeelden uit het boek:\n\n- **Brooks en Coole**: de twee onderscheiden **beroepsgemeenschappen** moeten elk als zodanig worden meegenomen.\n- **Wipf**: **de aanvaller**, die vanuit een safetystandpunt niet \"bestaat\", wordt een actor waarmee je rekening moet houden.\n- **Bongiovanni**: **de eindgebruiker**, centraal in design thinking, maar grotendeels afwezig in safetymanagementbenaderingen binnen de luchtvaart." },
{ type: "tekst", titel: "Slotopmerking", tekst: "Relevante empirische beschrijvingen van hoe wereldwijde trends onvoorziene en verborgen effecten meebrengen op de safety- en securitypraktijk van organisaties zijn nog **schaars**. Deels door de onderzoeksomgeving die nodig is om toegang te krijgen tot securitygerelateerde aspecten, deels door de trade-offs tussen onderzoeksthema's en -gemeenschappen, en deels door de uitdagingen van meerdere schalen, dimensies en aspecten.\n\nOm **vertekening te minimaliseren**, zou empirisch onderzoek het beste worden opgezet en uitgevoerd door **onderzoeksteams met zowel safety- als securityonderzoekers**. Ze samenbrengen zal hopelijk leiden tot betere definities van de schalen, tijdlijnen en actoren die relevant zijn om te onthullen hoe wereldwijde trends onvoorziene en verborgen effecten meebrengen.\n\nDat is de laatste zin van het boek, en hij is bescheiden. Geen model, geen oplossing, geen definitie. Een aanbeveling over hoe je een onderzoeksteam samenstelt." },
{ type: "begrippen", titel: "Kernbegrippen uit hoofdstuk 11", items: [{ begrip: "Conceptuele overeenstemming als niet-doel", definitie: "de stelling dat een gedeelde definitie van safety en security misschien geen zinnig streven is, omdat kennis varieert met gevaar, discipline, regelgeving en praktijk." }, { begrip: "De tweedeling in het boek", definitie: "Blokland & Reniers, Leveson, Bongiovanni en Boustras nemen intentionaliteit als hoofdonderscheid; Jore, Brooks & Coole, Wipf, La Porte en Schulman nemen kwaadwillende intentie of de primaat van vijandige intentie." }, { begrip: "Het probleem definiëren op basis van je oplossing", definitie: "de denkfout waarbij je een vraagstuk zo formuleert dat het instrument dat je al hebt erop past." }, { begrip: "Risico kan niet worden weggemanaged", definitie: "veel grote risico's komen voort uit activiteiten die we noodzakelijk vinden; foutmarges veranderen, het risico blijft zolang de activiteit doorgaat." }, { begrip: "Sociale amplificatie van risico", definitie: "het patroon dat risicopercepties na een ramp worden versterkt en normen strenger worden, terwijl ze bij activiteiten met grote kortetermijnvoordelen juist worden gedempt." }, { begrip: "In safety we trust, in security we distrust", definitie: "de tegenstelling tussen safety als wereld van openheid en delen, en security als wereld van geheimhouding, met de werknemer die tegelijk vertrouwd en gewantrouwd wordt." }, { begrip: "Insider event", definitie: "securitydreiging van binnenuit, met Germanwings 2015 als illustratie." }, { begrip: "Trade-off om aandacht, middelen en macht", definitie: "de concurrentie binnen organisaties tussen safety en security, waarvan de vorm afhangt van het historische pad." }, { begrip: "Overplanten van grondaannames", definitie: "het risico dat je met een methode ook haar impliciete uitgangspunten meeneemt, zoals de safetyaanname dat iedereen informatie deelt." }, { begrip: "Risicosamenleving", definitie: "het kader van Beck waarin technologie en samenleving complexer worden, onzekerheid toeneemt en vertrouwen in instituties daalt, tegen de achtergrond van deregulering, privatisering en uitbesteding." }, { begrip: "Macro-globale onderzoeksagenda", definitie: "het gedeelde terrein van beide velden, namelijk hoe wereldwijde trends onvoorziene en verborgen effecten hebben op de praktijk van organisaties." }, { begrip: "Nieuwe actoren", definitie: "de beroepsgemeenschappen, de aanvaller en de eindgebruiker, die in klassiek safetyonderzoek niet voorkomen maar in een gedeelde agenda wel meetellen." }] }
] },
{ id: "toepassen", titel: "Toepassen", blokken: [
{ type: "oefening", id: "h11-oef-1", niveau: "basis", vraag: "Leg uit wat de redacteuren bedoelen met \"het probleem definiëren op basis van onze oplossingen\", en pas het toe op Leveson.", antwoord: "De uitdrukking waarschuwt tegen een circulaire redenering waarbij je een vraagstuk zo formuleert dat het instrument dat je al bezit er vanzelf op past. Toegepast op Leveson: zij definieert zowel safety als security als een dynamisch besturingsprobleem, waarin verlies van controle centraal staat en waarin een securitygebeurtenis dezelfde status heeft als een technische storing of een menselijke fout. Binnen die formulering combineren de twee soepel: je voegt securitydreigingen toe aan de bestaande safetygevaren en de bijbehorende faalscenario's aan de scenario's die de analyse al kende. Maar precies die framing maakt de oplossing die al voor safety beschikbaar was, STPA op basis van systeemtheorie, automatisch toepasbaar op security. De redacteuren zeggen niet dat Leveson ongelijk heeft; vanuit systems engineering en het ontwerpen van controls is het behandelen van beide op dezelfde manier natuurlijk en haalbaar. Ze zeggen dat de conclusie deels in de vraagstelling zit ingebakken, en dat je die stap zichtbaar moet maken voordat je hem accepteert." },
{ type: "oefening", id: "h11-oef-2", niveau: "gevorderd", vraag: "De redacteuren stellen dat een gedeelde definitie misschien geen zinnig doel is, maar wijzen wel een gedeelde onderzoeksagenda aan. Leg uit waarom dat geen tegenspraak is, en beschrijf wat die agenda inhoudt.", antwoord: "Het is geen tegenspraak omdat definitie en agenda over verschillende dingen gaan. Een definitie moet universeel gelden om nuttig te zijn, en juist dat blijkt onhaalbaar: safety- en securitykennis variëren sterk met de gevaren en dreigingen, de disciplinaire benadering, de regelgevende context en de praktijk, en de auteurs in het boek gebruiken al minstens twee verschillende criteria, intentionaliteit tegenover kwaadwillende intentie. Bovendien blijkt het overplanten van definities riskant, omdat je met een begrippenkader ook de stilzwijgende grondaannames meeneemt, zoals de safetyaanname dat iedereen binnen de organisatie informatie deelt, die door een securitybril juist niet vanzelfsprekend is. Een onderzoeksagenda hoeft daarentegen niet universeel te zijn maar gedeeld: beide velden kunnen dezelfde vraag stellen zonder dezelfde woorden te gebruiken. Die gedeelde vraag is volgens de redacteuren macro-globaal, namelijk hoe de wereldwijde trends van de risicosamenleving, groeiende complexiteit van technologie en samenleving, toenemende onzekerheid, dalend institutioneel vertrouwen, en de patronen van deregulering, privatisering en uitbesteding, onvoorziene en verborgen effecten meebrengen op de safety- en securitypraktijk van organisaties. Om die vraag te beantwoorden is onderzoek nodig dat meerdere schalen tegelijk hanteert, van Europees beleid tot individuele werkdruk en van internationale radicalisering tot een werkplekconflict, en dat actoren meeneemt die klassiek buiten beeld blijven: de twee beroepsgemeenschappen, de aanvaller en de eindgebruiker. En het moet worden uitgevoerd door gemengde teams van safety- en securityonderzoekers, om de vertekening te beperken die ontstaat wanneer één domein de kaders levert." }
] },
{ id: "checken", titel: "Checken", blokken: [
{ type: "tekst", tekst: "Dit hoofdstuk sluit af met de kernbegrippen en oefeningen in de vorige tabbladen. Loop ze na en kijk of je ze zonder aantekeningen kunt navertellen." }
] }
];

/* De registratie van Intro to Safety & Security staat onderaan dit bestand,
   bij COLLEGES en BOEK. Twee oudere blokken die hier stonden deden hetzelfde
   met langere titels en overschreven elkaar; die zijn verwijderd. */

/* ============================================================
   Vakinfo — SSMS jaar 1, semester 1, modulehandleiding 2026-2027
   The Hague University of Applied Sciences

   Zelfde blokstructuur als de lessen, zodat alles in één
   omgeving staat.
   ============================================================ */



/* ---------------------------------------------------------- */

LESSTOF['studiegids/overzicht'] = [
  {
    id: 'module', titel: 'De module',
    blokken: [
      { type: 'uitleg', titel: 'Wat je hier vindt',
        tekst: 'Alles uit de modulehandleiding **Y1 Semester 1, 2026-2027** van Safety and Security Management Studies aan de Haagse Hogeschool. Docenten, vakcodes, leerdoelen, literatuur, toetsvormen, wegingen, het sessieprogramma per vak, de deadlines en de academische kalender.\n\nLet op wat de handleiding zelf zegt: het programma was bij publicatie nog **voorlopig** en kan veranderen, onder andere door de beschikbaarheid van gastdocenten. Je wordt geacht Brightspace en MyTimetable regelmatig te controleren.' },

      { type: 'tabel', titel: 'Module structuur: welk vak in welk semester',
        kop: ['Semester 1', 'Semester 2'],
        rijen: [
          ['Intro to Safety & Security', 'Business & Quality Management'],
          ['Governance & Policy', 'Law & Compliance'],
          ['Society & Politics', 'Psychology & Crime'],
          ['Demystifying Research Methods', 'Applied Research Techniques'],
          ['Fundamentals of Academic Writing', 'Professional Writing Skills'],
          ['Professional Skills', 'Research Project']
        ],
        noot: 'Semester 1 is wat nu speelt; semester 2 staat erbij zodat je ziet waar het naartoe loopt.' },

      { type: 'tabel', titel: 'Studielast semester 1', toetsstof: true,
        kop: ['Vak', 'Vorm', 'Contacturen (45 min)', 'Zelfstudie (60 min)', 'Studiepunten', 'Toetsing en weging'],
        rijen: [
          ['Intro to Safety & Security', 'Lecture', '42', '126', '6 ECTS', 'Midterm 50%, eindtoets 50%'],
          ['Governance & Policy', 'Lecture', '42', '126', '6 ECTS', 'Midterm 50%, eindtoets 50%'],
          ['Society & Politics', 'Lecture', '42', '126', '6 ECTS', 'Midterm 50%, eindtoets 50%'],
          ['Demystifying Research Methods', 'Lecture, workshop', '28', '84', '4 ECTS', 'Cumulatieve toets 100%'],
          ['Fundamentals of Academic Writing', 'Lecture, workshop', '21', '63', '3 ECTS', 'Examen 100%'],
          ['Professional Skills', 'Lecture, workshop', '35', '105', '5 ECTS', 'Groepspresentatie midterm 25%, individuele opdracht 25%, eindpresentatie 50%']
        ],
        noot: 'Samen 30 ECTS. Reken op ongeveer drie keer zoveel zelfstudie als contacttijd bij de drie grote theorievakken.' },

      { type: 'tekst', titel: 'Regels die voor de hele module gelden', toetsstof: true,
        tekst: 'Je wordt geacht **Brightspace** regelmatig te raadplegen voor meldingen, en je universitaire e-mailaccount in de gaten te houden. Dat is essentieel om op de hoogte te blijven van planning, toetsing, deadlines en cursusinhoud.\n\nVerschillende vakken binnen één module kunnen **verschillende regels** hebben. Je wordt daarom sterk aangeraden de details per vak zorgvuldig te bestuderen.\n\nSinds 2022 volgen **alle projecten dezelfde regels** voor het meewegen van activiteitsniveau in cijfers en voor herkansingsbeleid. Die staan uitgewerkt in de projecthandleidingen.\n\nVoor verdere informatie verwijst de handleiding naar de **Programme and Examination Regulations (PER)**, oftewel de OER.' },

      { type: 'waarschuwing', titel: 'Aanwezigheid: let op het onderscheid',
        tekst: 'De standaardregel bij vrijwel elk vak: aanwezigheid bij colleges is **niet verplicht** maar wel sterk aanbevolen.\n\nMaar er zijn twee harde uitzonderingen:\n\n1. **Gastcolleges zijn verplicht.** Bij Intro to Safety & Security zijn dat de sessies 7 en 9 tot en met 15, en bij Professional Skills sessie 7.\n2. **Geplande data en deadlines** voor presentaties, workshops, in-class opdrachten, toetsen en excursies moeten zonder uitzondering worden gehaald.\n\nBij Demystifying Research Methods komt daar nog bij dat alle lessen op de campus zijn en dat er in principe geen livestreams of opnames worden aangeboden.' }
    ]
  }
];

/* ---------------------------------------------------------- */

LESSTOF['studiegids/intro'] = [
  {
    id: 'over', titel: 'Over het vak',
    blokken: [
      { type: 'tekst', titel: 'Kerngegevens', toetsstof: true,
        tekst: '**Vak:** Intro to Safety & Security\n**Code:** SSMS-1T1-24\n**Docenten:** Jonathan Michael Corr (J.M.Corr@hhs.nl) en Enrique Gomez Llata Cazares (E.G.GomezLlataCazares@hhs.nl)\n**Vorm:** hoorcollege, 42 contacturen, 126 uur zelfstudie\n**Studiepunten:** 6 ECTS' },

      { type: 'tekst', titel: 'Waar het vak over gaat', toetsstof: true,
        tekst: 'Dit is een **funderingsvak**: een introductie op de SSMS-opleiding en op het beroepsveld.\n\nHet behandelt de inhoudelijke werkterreinen van de SSMS-professional, de verschillende **interventionistische opties** die de SSMS-praktijkbeoefenaar open staan, en de verschillende **stakeholderbenaderingen** die SSMS-professionals kunnen inzetten om risico\u2019s effectief te managen en safety en security te verbeteren.\n\nEén aangewezen college gaat specifiek over de structuur, logica en geest van het SSMS-programma aan THUAS zelf.\n\nHet vak bevat **gastcolleges** door recent afgestudeerde SSMS\u2019ers of externe partners, die je een realistisch en levendig beeld geven van je toekomstige loopbaan in het SSMS-beroep.' },

      { type: 'tekst', titel: 'De vier leerdoelen', toetsstof: true,
        tekst: 'Deze vier zijn de officiële leerdoelen. Ze bepalen waarop je wordt getoetst.\n\n**1.** Je kunt de verschillende domeinen van safety en security die in het SSMS-programma aan bod komen **conceptualiseren**.\n\n**2.** Je kunt de relevantie en het belang uitleggen van verschillende **stakeholdermanagement-benaderingen** voor safety- en securitymanagement in verschillende internationale omgevingen.\n\n**3.** Je kunt de structuur en de hoofdgedachten van het SSMS-programma en het **multidisciplinaire karakter** ervan samenvatten.\n\n**4.** Je kunt uitleggen hoe geselecteerde elementen rond **risicomanagement en resilience** kunnen worden toegepast in de context van internationale safety en security.' },

      { type: 'voorbeeld', titel: 'Wat die leerdoelen betekenen voor je tentamen',
        tekst: 'Leerdoel 1 en 4 zijn de leerdoelen die direct uit het boek komen. Leerdoel 1 gaat over conceptualiseren, dus over precies dat wat hoofdstuk 1 en 2 doen: welke domeinen bestaan er en hoe verhouden ze zich. Leerdoel 4 leunt op de hoofdstukken over risicomanagement en resilience, dus hoofdstuk 2, 9 en 10.\n\nLeerdoel 2, stakeholdermanagement, komt terug in de hoofdstukken 5 en 6, en in college 4.\n\nLeerdoel 3 komt niet uit het boek maar uit het aangewezen college over de opleiding zelf. Dat is precies het soort stof dat je mist als je alleen leest en niet naar college gaat.' },

      { type: 'tekst', titel: 'Literatuur', toetsstof: true,
        tekst: 'Bieder, C. & Petterson Gould, K. (red.) (2020). *The coupling of safety and security: Exploring interrelations in theory and practice.* Cham: Springer Nature.\n\nDe pdf is **gratis online beschikbaar**, het boek is open access.\n\nDe handleiding voegt toe: aanvullende verplichte literatuur kan door individuele docenten worden opgegeven gedurende de cursus.' }
    ]
  },
  {
    id: 'toetsing', titel: 'Toetsing',
    blokken: [
      { type: 'tabel', titel: 'Toetsing midterm en eindtoets', toetsstof: true,
        kop: ['', 'Details'],
        rijen: [
          ['Type toets', 'Midterm: schriftelijke toets in Remindo. Eindtoets: mondelinge toets (oral assessment)'],
          ['Toetsmateriaal', 'Alle cursusliteratuur en collegeslides'],
          ['Type product', 'N.v.t.'],
          ['Inleverprotocol', 'N.v.t.'],
          ['Criteria', 'Instructies worden in de les gegeven'],
          ['Weging', 'Midterm 50%, eindtoets 50%'],
          ['Beoordelingsprocedure', 'N.v.t.'],
          ['Cijfer voldoende vanaf', 'Midterm 5,5 of hoger. Eindtoets 5,5 of hoger. Schaal 1 tot 10']
        ] },

      { type: 'tabel', titel: 'Toetsmomenten', toetsstof: true,
        kop: ['Toets', 'Eerste gelegenheid', 'Tweede gelegenheid'],
        rijen: [
          ['Midterm', 'november 2026', 'januari 2027'],
          ['Eindtoets', 'februari 2027', 'april 2027']
        ],
        noot: 'Exacte datum, tijd en locatie staan in het rooster.' },

      { type: 'waarschuwing', titel: 'De eindtoets is mondeling, en dat verandert alles',
        tekst: 'Dit vak is het enige theorievak van het semester met een **mondelinge eindtoets**. Governance & Policy en Society & Politics hebben allebei twee schriftelijke toetsen.\n\nWat dat praktisch betekent:\n\n- Je kunt niet gokken op meerkeuze. Je moet de stof **kunnen vertellen**.\n- Het toetsmateriaal is expliciet "alle cursusliteratuur en collegeslides", dus ook de gastcolleges waarvan alleen slides bestaan.\n- Terugbladeren kan niet. Wat je niet paraat hebt, heb je niet.\n\nDaarom staat er in elke les hier een onderdeel Checken. Gebruik dat serieus: navertellen zonder aantekeningen is precies wat die eindtoets van je vraagt.' }
    ]
  },
  {
    id: 'programma', titel: 'Programma',
    blokken: [
      { type: 'tabel', titel: 'De zestien sessies', toetsstof: true,
        kop: ['Sessie', 'Onderwerp', 'Docent', 'Voorbereiding'],
        rijen: [
          ['1', 'Introductie: de opleiding en het vakgebied', 'Corr & Gomez Llata', ''],
          ['2', 'Safety- en securityinterventies', 'Gomez Llata', 'Bieder, hoofdstuk 1 en 2'],
          ['3', 'Communication matters', 'Corr', ''],
          ['4', 'Stakeholders, actoren en de invloed van cultuur', 'Gomez Llata', 'Bieder, hoofdstuk 3 en 5'],
          ['5', 'Safety en security managen', 'Corr', ''],
          ['6', 'Resilience in safety en security', 'Corr', 'Bieder, hoofdstuk 7 en 9'],
          ['7', 'Tales from the field (alumnus)', 'Gastspreker', 'Aanwezigheid verplicht'],
          ['8', 'Recap en tentamenvoorbereiding', 'Corr & Gomez Llata', 'Bieder, hoofdstuk 10'],
          ['\u2014', 'Midterm-toets en POP-week', '', ''],
          ['9', 'Tales from the field', 'Gastspreker', 'Aanwezigheid verplicht'],
          ['10', 'Crime, safety en security', 'Matczak', 'Aanwezigheid verplicht'],
          ['11', 'Artificial intelligence in security risk', 'Voss', 'Aanwezigheid verplicht'],
          ['12', 'De human security approach', 'De Ryck', 'Aanwezigheid verplicht'],
          ['13', 'Nog te bepalen', '', ''],
          ['14', 'Industrial safety in action', 'Ren', 'Aanwezigheid verplicht'],
          ['15', 'Applied security risk management', 'Ekici', 'Aanwezigheid verplicht'],
          ['16', 'Recap en tentamenvoorbereiding', 'Corr & Gomez Llata', ''],
          ['\u2014', 'Eindtoets (mondeling)', '', '']
        ],
        noot: 'Bij publicatie van de module manual stond dit programma nog als voorlopig te boek en het kan veranderen, onder andere door de beschikbaarheid van gastdocenten. Houd Brightspace en MyTimetable bij. Let op hoeveel gastcolleges verplicht zijn: sessie 7 en 9 tot en met 15.' },

      { type: 'tekst', titel: 'Regels bij dit vak', toetsstof: true,
        tekst: 'Aanwezigheid bij de colleges is **niet verplicht**, maar sterk aanbevolen om het vak succesvol af te ronden.\n\n**Gastcolleges moeten worden bijgewoond.**\n\nGeplande data en deadlines voor presentaties, workshops, in-class opdrachten, toetsen en excursies moeten zonder uitzondering worden gehaald.' }
    ]
  }
];

/* ---------------------------------------------------------- */

LESSTOF['studiegids/governance'] = [
  {
    id: 'over', titel: 'Over het vak',
    blokken: [
      { type: 'tekst', titel: 'Kerngegevens', toetsstof: true,
        tekst: '**Vak:** Governance & Policy\n**Code:** SSMS-1T2-22\n**Docenten:** Dr. Ines Trigo de Sousa (I.M.R.deSousa@hhs.nl), Dr. Enrique Gomez Llata (E.G.GomezLlataCazares@hhs.nl), Dr. Marc-Oliver Del Grosso (M.O.DelGrosso@hhs.nl)\n**Vorm:** hoorcollege, 42 contacturen, 126 uur zelfstudie\n**Studiepunten:** 6 ECTS' },

      { type: 'tekst', titel: 'Waar het vak over gaat', toetsstof: true,
        tekst: 'Het vertrekpunt is een observatie over je toekomstige beroep: de meeste safety- en securitymanagementprofessionals besteden een groot deel van hun tijd aan **werken in en omgaan met bureaucratieën**. De handleiding definieert die als min of meer permanente, hiërarchisch gestructureerde, doelgerichte organisaties die zijn ontworpen om gecentraliseerde besluiten, oftewel "policies", te laten uitvoeren door personeel op lagere niveaus.\n\n**Eerste deel van de cursus.** Het functioneren van publieke, dus gouvernementele bureaucratieën: brandweerkorpsen, scholen, ministeries, legers, politie, inlichtingendiensten en gemeenten. Welke soorten mensen bevolken de bureaucratische wereld, en in welke politieke context moeten zij opereren? Doel is een realistisch beeld van wat overheidsinstanties feitelijk doen en waarom, met aandacht voor verschillen in bestuurssystemen en bureaucratieën wereldwijd.\n\n**Tweede deel van de cursus.** Beleid en besluitvorming in organisaties. Dat kan gaan om publieke en private organisaties, dus overheden en bedrijven, maar ook om mengvormen zoals hybride en maatschappelijke organisaties. Aan de hand van analytisch te onderscheiden fasen in het beleidsproces en op basis van wetenschappelijke literatuur krijg je inzicht in de uitdagingen, problemen en dilemma\u2019s waar beleidsmakers in hun besluitvorming mee te maken hebben, en in hoe zij daar in de praktijk mee omgaan.\n\nAan het eind ken je een aantal grote obstakels en **pathologieën** die het ideaal van een rationele beleidspraktijk in de weg staan.' },

      { type: 'tekst', titel: 'De zeven leerdoelen', toetsstof: true,
        tekst: '**1.** Je kunt de basiskenmerken van publieke organisaties identificeren.\n\n**2.** Je kunt het belang van organisatie voor het functioneren van bureaucratieën uitleggen.\n\n**3.** Je kunt verschillende categorieën bureaucratische medewerkers, typen bureaucratische instanties en de belangrijkste factoren die hun werk vormgeven in verschillende culturele contexten conceptualiseren.\n\n**4.** Je kunt onderscheid maken tussen publieke en private actoren, en ook tussen mengvormen van publieke en private organisaties in verschillende internationale contexten in het beleidsproces.\n\n**5.** Je kunt de verschillende fasen van het beleidsproces onderscheiden.\n\n**6.** Je kunt de uitdagingen, problemen en dilemma\u2019s uitleggen waar beleidsmakers in verschillende internationale contexten in hun besluitvorming mee te maken hebben.\n\n**7.** Je kunt uitleggen hoe een aantal grote obstakels en pathologieën het ideaal van rationele beleidsvorming en beleidsontwerp in de weg staat.' },

      { type: 'tekst', titel: 'Literatuur', toetsstof: true,
        tekst: '**Hoofdtekst.** McCormick, J., Hague, R., & Harrop, M. (2022). *Comparative government and politics: An introduction* (12e druk). Bloomsbury Academic.\n\n**Verplichte artikelen.**\n- Buckwalter, N. D., & Balfour, D. L. (2020). Democratic Legitimacy in Bureaucratic Structures: A Precarious Balance. In: Paanakker, Masters & Huberts (red.), *Quality of Governance*. Palgrave Macmillan. Dit is hoofdstuk 2 van dat boek; het boek is te downloaden via de bibliotheek van de HHS.\n- Huberts, L., Kaptein, M., & de Koning, B. (2022). Integrity Scandals of Politicians: A Political Integrity Index. *Public Integrity*, 24(3), 329-341.\n- Levi-Faur, D. (2012). From "big government" to "big governance". *The Oxford handbook of governance*, 3-18.\n\n**Reader via WebEDU, voor het tweede deel van het semester.** Er is een reader samengesteld met alle relevante literatuur, te bestellen in de online WebEDU-store. Daarin zitten:\n- Allison, G., & Zelikow, P. (1999). Introduction, in: *Essence of decision. Explaining the Cuban Missile Crisis*, 1-12.\n- House, E. R. (1974). The Politics of Evaluation in Higher Education. *The Journal of Higher Education*, 45(8), 618-627.\n- Weiss, C. H. (1987). Where Politics and Evaluation Research Meet. In Palumbo (red.), *The Politics of Program Evaluation*, 47-70.\n\n**Aanbevolen.** Sørensen, E., & Torfing, J. (2018). Governance on a bumpy road from enfant terrible to mature paradigm. *Critical Policy Studies*, 12(3), 350-359.' }
    ]
  },
  {
    id: 'toetsing', titel: 'Toetsing',
    blokken: [
      { type: 'tabel', titel: 'Toetsing midterm en eindtoets', toetsstof: true,
        kop: ['', 'Details'],
        rijen: [
          ['Type toets', 'Midterm: individuele schriftelijke toets. Eindtoets: individuele schriftelijke toets'],
          ['Toetsmateriaal', 'Alle cursusliteratuur en collegeslides'],
          ['Type product', 'N.v.t. voor beide'],
          ['Inleverprotocol', 'N.v.t. voor beide'],
          ['Criteria', 'Zie de (herkansings)toets en het antwoordmodel'],
          ['Weging', 'Midterm 50%, eindtoets 50%'],
          ['Beoordelingsprocedure', 'Zie de (herkansings)toets en het antwoordmodel'],
          ['Cijfer voldoende vanaf', '5,5 of hoger voor beide, schaal 1 tot 10']
        ] },

      { type: 'tabel', titel: 'Toetsmomenten',
        kop: ['Toets', 'Eerste gelegenheid', 'Tweede gelegenheid'],
        rijen: [
          ['Midterm', 'november 2026', 'zie rooster'],
          ['Eindtoets', 'februari 2027', 'zie rooster']
        ] }
    ]
  },
  {
    id: 'programma', titel: 'Programma',
    blokken: [
      { type: 'tabel', titel: 'Deel 1 \u00b7 de acht sessies tot de midterm', toetsstof: true,
        kop: ['Sessie', 'Onderwerp en datum', 'Docent', 'Voorbereiding'],
        rijen: [
          ['1', 'Governance and Policy: an introduction \u00b7 11 sep, 13.00-14.30', 'Dr. Gomez Llata',
           'McCormick, Hague & Harrop (2022), Chapter 1'],
          ['2', 'Democracy and bureaucracy: norms and values in building governance practices \u00b7 18 sep, 13.00-14.30', 'Dr. Gomez Llata',
           'Compulsory reading: the text "Democracy Legitimacy in Bureaucratic Structures: A Precarious Balance" corresponds to chapter 2 in Paanakker H., Masters A., Huberts L. (Eds), Quality of Governance, Palgrave Macmillan'],
          ['3', 'Executives and Bureaucracies \u00b7 25 sep, 13.00-14.30', 'Dr. de Sousa',
           'McCormick, Hague & Harrop (2022), Chapters 8 & 10'],
          ['4', 'Political participation and political parties \u00b7 2 okt, 13.00-14.30', 'Dr. de Sousa',
           'McCormick, Hague & Harrop (2022), Chapters 13 & 15'],
          ['5', 'The development of a paradigm: from Government to Governance \u00b7 9 okt, 13.00-14.30', 'Dr. Gomez Llata',
           'Compulsory reading: Levi-Faur, D. (2012), pp. 3-18. Recommended reading: S\u00f8rensen & Torfing (2018), pp. 350-359'],
          ['6', 'Public Governance: a case study \u00b7 16 okt, 13.00-14.30', 'Dr. Gomez Llata',
           'Compulsory reading: Leo Huberts, Kaptein & Bart de Koning (2022), Integrity Scandals of Politicians: A Political Integrity Index, Public Integrity, 24:3, 329-341'],
          ['7', 'Interest Groups and Public Policy \u00b7 30 okt, 13.00-14.30', 'Dr. de Sousa',
           'McCormick, Hague & Harrop (2022), Chapters 16 & 17'],
          ['8', 'Recap and exam preparation \u00b7 6 nov, 13.00-14.30', 'Dr. Gomez Llata & Dr. de Sousa', ''],
          ['\u2014', 'Midterm-toets en POP-week', '', '']
        ],
        noot: 'Dit deel komt uit het document "G&P Part 1 Program and sources 2026-27" van de docenten, niet uit de module manual. De volgorde verschilt daar: in de manual stond Executives op sessie 2 en de les over normen en waarden op sessie 6. Houd dit schema aan. Tussen 16 en 30 oktober zit de herfstvakantie, vandaar het gat.' },

      { type: 'tabel', titel: 'Deel 2 \u00b7 sessie 9 tot 16, uit de module manual', toetsstof: true,
        kop: ['Sessie', 'Onderwerp', 'Docent', 'Voorbereiding'],
        rijen: [
          ['9', 'Introductie tot besluitvorming', 'Dr. Del Grosso', 'Allison, pp. 1-12'],
          ['10', 'Agenda setting', 'Dr. Del Grosso', ''],
          ['11', 'Policy formulation', 'Dr. Del Grosso', ''],
          ['12', 'Policy implementation 1', 'Dr. Del Grosso', ''],
          ['13', 'Policy implementation 2', 'Dr. Del Grosso', ''],
          ['14', 'Policy evaluation', 'Dr. Del Grosso', 'House, pp. 618-627; Weiss, pp. 47-70'],
          ['15', 'Policy making in practice', 'Dr. Del Grosso', ''],
          ['16', 'Overzicht en tentamenvoorbereiding', 'Dr. Del Grosso', ''],
          ['\u2014', 'Eindtoets', '', '']
        ],
        noot: 'Voor deel 2 is er nog geen apart programmadocument van de docent. Merk de tweedeling op: sessie 1 tot 8 gaan over governance en bureaucratie, sessie 9 tot 16 over de beleidscyclus. De midterm dekt het eerste blok, de eindtoets het tweede.' },

      { type: 'tekst', titel: 'Regels bij dit vak',
        tekst: 'Aanwezigheid is niet verplicht maar sterk aanbevolen. Gastcolleges moeten worden bijgewoond. Geplande data en deadlines voor presentaties, workshops, in-class opdrachten, toetsen en excursies moeten zonder uitzondering worden gehaald.' }
    ]
  }
];

/* ---------------------------------------------------------- */

LESSTOF['studiegids/society'] = [
  {
    id: 'over', titel: 'Over het vak',
    blokken: [
      { type: 'tekst', titel: 'Kerngegevens', toetsstof: true,
        tekst: '**Vak:** Society & Politics\n**Code:** SSMS-1T3-21\n**Docenten:** Dr. Menandro S. Abanes (M.S.Abanes@hhs.nl) en Dr. Ines Trigo de Sousa (I.M.R.deSousa@hhs.nl)\n**Vorm:** hoorcollege, 42 contacturen, 126 uur zelfstudie\n**Studiepunten:** 6 ECTS' },

      { type: 'tekst', titel: 'Waar het vak over gaat', toetsstof: true,
        tekst: 'Dit vak geldt als een van de essentiële academische **"moederdisciplines"** van safety and security studies. Het combineert sociologie en politicologie.\n\nSociologie gaat vooral over de manier waarop mensen samenleven en met elkaar omgaan in samenlevingen. Politiek is, in de definitie van **Laswell** die de handleiding aanhaalt, de vraag "wie krijgt wat, wanneer en hoe".\n\nPolitieke instituties en politici beslissen ook over de regels die safety en security direct beïnvloeden: van het stellen van normen en het handhaven van naleving, via misdaad- en terrorismebestrijding en het surveilleren van burgers, tot het voeren van oorlog. Die processen verschillen sterk per land, vaak afhankelijk van het **regimetype** en van de ideologische en waardeoriëntatie van de regeringsmeerderheid.\n\n**Eerste deel.** Sociologische perspectieven, waarmee je je eigen ervaringen leert plaatsen binnen de grotere schaal van de samenleving, gekenmerkt door sociale structuur en systeem. Je leert vertrouwde situaties in een nieuw licht zien en nieuwe betekenis vinden in oude en nieuwe manieren van doen. Er zijn drie hoofdthema\u2019s: **identiteit, sociale orde en stratificatie**. Elk van die drie levert een eigen vraagstuk op voor safety- en securitymanagement.\n\n**Tweede deel.** De basis van de politicologie: verschillende regimetypen (democratisch, hybride, autoritair, totalitair), hun instituties en functioneren, regimeverandering, politieke ideologieën, en factoren die bepalen hoe politiek uitpakt, zoals staten, naties, identiteit, sociale druk en buitenlandse invloed. Voorbeelden komen uit actuele politieke gebeurtenissen of uit bekende historische casussen.' },

      { type: 'tekst', titel: 'De vijf leerdoelen', toetsstof: true,
        tekst: '**1.** Je identificeert belangrijke klassieke en hedendaagse sociologische perspectieven, en sociologische concepten rond identiteit, sociale stratificatie en sociale orde in verschillende internationale contexten, en hoe die zich verhouden tot vraagstukken van safety en security.\n\n**2.** Je interpreteert je eigen beoordeling van bepaalde situaties sociologisch, met safety- en securityvraagstukken in gedachten.\n\n**3.** Je legt de basisbeginselen en concepten uit waarop staten en politieke systemen van democratische en autoritaire regimes zijn gebaseerd.\n\n**4.** Je maakt onderscheid tussen verschillende ideologieën en regimetypen die wereldwijd bestaan.\n\n**5.** Je zet abstracte concepten als democratisering, macht of gezag om in concrete voorbeelden uit de echte wereld, en andersom.' },

      { type: 'tekst', titel: 'Literatuur', toetsstof: true,
        tekst: 'Let op: dit vak heeft **verschillende boeken voor de twee toetsen**.\n\n**Midterm.** Macionis, J. J., & Plummer, K. (2012). *Sociology: A global introduction* (5e druk). Pearson Education Ltd.\n\n**Eindtoets.** McCormick, J., Hague, R., & Harrop, M. (2022). *Comparative government and politics: An introduction* (12e druk). Bloomsbury Academic. Dit is hetzelfde boek als bij Governance & Policy.' },

      { type: 'waarschuwing', titel: 'Wijziging ten opzichte van vorig jaar',
        tekst: 'De handleiding meldt in appendix 4 expliciet: de literatuur voor de **eindtoets van Society & Politics** verandert op zijn minst gedeeltelijk. Er kan een laatste gelegenheid tot toetsing zijn onder de oude literatuur.\n\nDit is de enige inhoudelijke wijziging die in appendix 4 wordt genoemd. Controleer voor je een tweedehands boek koopt dus Brightspace.' }
    ]
  },
  {
    id: 'toetsing', titel: 'Toetsing',
    blokken: [
      { type: 'tabel', titel: 'Toetsing midterm en eindtoets', toetsstof: true,
        kop: ['', 'Details'],
        rijen: [
          ['Type toets', 'Beide individuele schriftelijke toetsen'],
          ['Toetsmateriaal', 'Alle cursusliteratuur en collegeslides'],
          ['Type product', 'N.v.t.'],
          ['Inleverprotocol', 'N.v.t.'],
          ['Criteria', 'Zie de (herkansings)toets en het antwoordmodel'],
          ['Weging', 'Midterm 50%, eindtoets 50%'],
          ['Beoordelingsprocedure', 'Zie de (herkansings)toets en het antwoordmodel'],
          ['Cijfer voldoende vanaf', '5,5 of hoger voor beide, schaal 1 tot 10']
        ] },

      { type: 'tabel', titel: 'Toetsmomenten', toetsstof: true,
        kop: ['Toets', 'Eerste gelegenheid', 'Tweede gelegenheid'],
        rijen: [
          ['Midterm', '13 november 2026', 'zie rooster'],
          ['Eindtoets', 'februari 2027', 'zie rooster']
        ],
        noot: 'Dit is het enige vak waarvan de handleiding een exacte midterm-datum noemt.' }
    ]
  },
  {
    id: 'programma', titel: 'Programma',
    blokken: [
      { type: 'tabel', titel: 'Sessie 1 tot 8: sociologie (Dr. Abanes)', toetsstof: true,
        kop: ['Sessie', 'Onderwerp', 'Voorbereiding in Macionis & Plummer'],
        rijen: [
          ['1', 'Introductie, sociologische perspectieven en methoden', 'H1 (pp. 4-14 en 21-25), H2 (pp. 33-52), H4 (pp. 106-116)'],
          ['2', 'Identiteit 1: de sociale constructie van het dagelijks leven', 'H7. Opdracht: toepassing van sociologische perspectieven'],
          ['3', 'Identiteit 2: etniciteit en migratie', 'H11'],
          ['4', 'Sociale orde 1: cultuur, sociale bewegingen', 'H5 (pp. 144-158), H16 (pp. 563-567)'],
          ['5', 'Sociale orde 2: controle en deviantie', 'H17'],
          ['6', 'Sociale stratificatie 1: groepen, organisaties, netwerksamenleving', 'H6'],
          ['7', 'Sociale stratificatie 2: sociale scheidslijnen, klasse', 'H8'],
          ['8', 'Risicosamenleving, steden en ruimtes', 'H23 (pp. 795-797), H24 (p. 830, pp. 841-849, p. 855)']
        ],
        noot: 'Sessie 8 over de risicosamenleving is de directe brug naar Intro to Safety & Security: dat is het sociologische fundament onder het begrip systemisch risico uit hoofdstuk 1 van Bieder.' },

      { type: 'tabel', titel: 'Sessie 9 tot 16: politicologie (Dr. Trigo de Sousa)', toetsstof: true,
        kop: ['Sessie', 'Onderwerp', 'Voorbereiding in McCormick, Hague & Harrop'],
        rijen: [
          ['9', 'Introductie. Politiek, staten en naties', 'Hoofdstuk 3'],
          ['10', 'Politieke cultuur en politieke ideologieën', 'Hoofdstuk 4'],
          ['11', 'Democratic rule', 'Hoofdstuk 5'],
          ['12', 'Democratische instituties: media en verkiezingen', 'Hoofdstuk 12 en 14'],
          ['13', 'Authoritarian rule', 'Hoofdstuk 6'],
          ['14', 'Hybride regimes en het democratiseringsproces', 'Nog te bepalen'],
          ['15', 'Politieke economie', 'Hoofdstuk 18'],
          ['16', 'Recap en tentamenvoorbereiding', '']
        ] },

      { type: 'tekst', titel: 'Regels bij dit vak',
        tekst: 'Aanwezigheid is niet verplicht maar sterk aanbevolen. Gastcolleges moeten worden bijgewoond. Geplande data en deadlines voor presentaties, workshops, in-class opdrachten, toetsen en excursies moeten zonder uitzondering worden gehaald.' }
    ]
  }
];

/* ---------------------------------------------------------- */

LESSTOF['studiegids/drm'] = [
  {
    id: 'over', titel: 'Over het vak',
    blokken: [
      { type: 'tekst', titel: 'Kerngegevens', toetsstof: true,
        tekst: '**Vak:** Demystifying Research Methods (DRM)\n**Code:** SSMS-1RM1-25\n**Docent:** Jonas Carinhas (J.F.DaCostaCarinhas@hhs.nl)\n**Vorm:** hoorcollege en workshop, 28 contacturen, 84 uur zelfstudie\n**Studiepunten:** 4 ECTS\n**Categorie:** trackvak, geen theorievak' },

      { type: 'tekst', titel: 'Waar het vak over gaat', toetsstof: true,
        tekst: 'Elk onderzoek moet een helder doel hebben, dat vastlegt waar het onderzoek over gaat en op welke manieren.\n\nIn dit vak maak je kennis met onderzoeksmethoden als **analytische gereedschapskist** voor toegepast onderzoek, en met de gangbare toepassing daarvan binnen safety en security. Je raakt vertrouwd met basisprincipes en concepten van toegepast onderzoek, en met hun onderlinge verbanden en toepassingen. Je leert ook je eigen **applied research design** formuleren, inclusief het afbakenen van onderzoeksproblemen, het ontwikkelen van adequate onderzoeksdoelstellingen, hoofdvragen, deelvragen, en het identificeren van mogelijke onderzoeksbeperkingen.\n\nDeze vaardigheden zijn essentieel, niet alleen binnen SSMS maar in elke toegepaste onderzoeksomgeving. DRM is de **eerste in een reeks vakken van de Research Methods-track**, die je de analytische en onderzoeksvaardigheden bijbrengt die je nodig hebt voor opdrachten, rapporten en je bachelorscriptie, en voor het oplossen van praktische problemen in je latere werk.' },

      { type: 'tekst', titel: 'De zeven leerdoelen', toetsstof: true,
        tekst: '**1.** Je past basale toegepaste onderzoeksconcepten toe op verschillende safety- en securitysituaties en contexten.\n\n**2.** Je voert basaal vooronderzoek uit naar een safety- en securityonderwerp met het **6W-probleemanalysekader** op verschillende typen literatuur.\n\n**3.** Je onderscheidt de belangrijkste concepten en variabelen van een safety- en securitystudie, en onderzoekt hun onderlinge verbanden.\n\n**4.** Je evalueert verschillende onderzoeksvragen op type, helderheid, focus, relevantie, haalbaarheid, complexiteit, bias en ethiek, binnen verschillende safety- en securitycontexten.\n\n**5.** Je beoordeelt het onderzoeksdesign, inclusief de onderzoeksbenadering, het onderzoeksprobleem, de doelstelling, de hoofdvraag en de deelvragen van verschillende safety- en securitystudies.\n\n**6.** Je beoordeelt safety- en securitystudies op mogelijke beperkingen, zoals beschikbaarheid van of toegang tot data, steekproefgrootte of representativiteit, generaliseerbaarheid van resultaten, tijd- of budgetbeperkingen, en andere relevante beperkingen.\n\n**7.** Je formuleert je eigen applied research design, met een onderzoeksprobleem, doelstelling, hoofdvraag en **twee deelvragen** voor een safety- en securityonderwerp.' },

      { type: 'tekst', titel: 'Literatuur',
        tekst: 'Er hoeft geen literatuur te worden aangeschaft. Alle teksten en oefeningen worden op Brightspace aangeboden.' }
    ]
  },
  {
    id: 'toetsing', titel: 'Toetsing',
    blokken: [
      { type: 'waarschuwing', titel: 'Dit vak toetst compleet anders dan de rest',
        tekst: 'Geen midterm en eindtoets, maar **één cumulatieve toets in drie meetmomenten** plus **drie quizzes** die je allemaal moet halen.\n\nJe kunt het vak dus niet redden met één goede tentamenweek. Het loopt het hele semester door, en een gemist quizmoment moet je herkansen.' },

      { type: 'tabel', titel: 'Toetsing', toetsstof: true,
        kop: ['', 'Details'],
        rijen: [
          ['Type toets', 'Cumulatieve toets met meerkeuzevragen en open vragen, afgenomen op drie meetmomenten door het semester heen, plus drie quizzes'],
          ['Toetsmateriaal', 'Alle literatuur en materialen op Brightspace: PowerPoints, casestudy\u2019s, workshopoefeningen en huisopdrachten'],
          ['Type product', 'Remindo-toets, Brightspace-quizzes'],
          ['Inleverprotocol', 'Remindo-toets, Brightspace-quizzes'],
          ['Criteria', 'De cumulatieve MC-toets moet met een 5,5 of hoger worden beoordeeld om het vak te halen. Je moet een Pass hebben voor de drie quizzes'],
          ['Weging', 'MC cumulatieve toets is 100% van het eindcijfer: moment 1 telt voor 20%, moment 2 voor 50% en moment 3 voor 30%. Quizzes zijn pass/fail'],
          ['Beoordelingsprocedure', 'Zie de (herkansings)toets en het antwoordmodel'],
          ['Cijfer voldoende vanaf', 'Midterm 5,5 of hoger, eindtoets 5,5 of hoger. Quizzes: alle drie halen']
        ] },

      { type: 'tabel', titel: 'Toetsmomenten', toetsstof: true,
        kop: ['Onderdeel', 'Moment 1', 'Moment 2', 'Moment 3', 'Herkansing'],
        rijen: [
          ['Cumulatieve toets', 'november 2026 (20%)', 'december 2026 (50%)', 'februari 2027 (30%)', 'zie rooster'],
          ['Quizzes', 'week 4', 'week 7', 'week 14', 'zie rooster']
        ],
        noot: 'Moment 2 in december weegt de helft van je hele cijfer. Dat is het zwaarste losse toetsmoment van je hele semester.' }
    ]
  },
  {
    id: 'programma', titel: 'Programma',
    blokken: [
      { type: 'tabel', titel: 'De dertien sessies', toetsstof: true,
        kop: ['Sessie', 'Onderwerp', 'Vorm'],
        rijen: [
          ['1', 'Intro to Research Methods deel 1: de rol van toegepaste wetenschappen in SSMS', 'College. Voorbereiding: lees de cursushandleiding'],
          ['2', 'Intro to Research Methods deel 2: groepswerk, kernconcepten toepassen op korte SSMS-casussen', 'Workshop'],
          ['3', 'Intro to Research Methods deel 3: quiz over kernconcepten, voorbereiding CT1', 'Quiz'],
          ['4', 'Understanding the problem deel 1: het 6W-probleemanalysekader en bronnen; concepten, variabelen en relaties', 'College'],
          ['5', 'Understanding the problem deel 2: groepswerk met het 6W-kader', 'Workshop'],
          ['6', 'Understanding the problem deel 3: quiz over het 6W-kader, voorbereiding CT2', 'Quiz'],
          ['7', 'Intro to Research Methods deel 2, herkansing: herkansingsquiz kernconcepten', 'Quiz'],
          ['8', 'Intro to Research Methods deel 3, herkansing: quiz kernconcepten', 'Quiz'],
          ['—', 'CT1-toets', ''],
          ['9', 'Planning your investigation deel 1: een applied research design (ARD) bouwen en beperkingen identificeren', 'College'],
          ['10', 'Planning your investigation deel 2: ARD bouwen en beperkingen identificeren', 'Workshop'],
          ['11', 'Planning your investigation deel 3: quiz over ARD bouwen en beperkingen', 'Quiz'],
          ['—', 'CT2-toets', ''],
          ['12', 'Integrating the whole process: onderzoekskeuzes beoordelen over een volledige casus, advies voor Research Problem volgend semester, recap en vragen', 'College'],
          ['13', 'Planning your investigation deel 3, herkansing: quiz over ARD', 'Quiz'],
          ['—', 'CT3-toets', '']
        ],
        noot: 'Voorbereiding staat bij vrijwel elke sessie als "Check Brightspace". Het patroon per blok is vast: college, workshop, quiz.' },

      { type: 'tekst', titel: 'Regels bij dit vak', toetsstof: true,
        tekst: 'Dit vak heeft de strengste en meest uitgewerkte regels van het semester.\n\n**Aanwezigheid.** Niet verplicht bij colleges en workshops, maar sterk aanbevolen: wat in die sessies wordt behandeld bereidt je direct voor op de toetsen. Alle lessen zijn **fysiek op de campus**. Tenzij anders aangekondigd worden er **geen livestreams of opnames** aangeboden.\n\n**Brightspace.** Je wordt geacht regelmatig te kijken voor updates over inhoud, planning, toetsdetails en andere aankondigingen. Het is jouw verantwoordelijkheid om op de hoogte te blijven.\n\n**AI en integriteit.** Alle individuele opdrachten en taken moeten worden uitgevoerd **zonder hulp van ongeautoriseerde tools of andere mensen**. Het gebruik van AI-tools zoals ChatGPT of Gemini voor taken die individueel moeten worden gemaakt geldt als een **schending van de academische integriteit**. De handleiding voegt twee praktische argumenten toe: je hebt tijdens toetsen geen toegang tot die tools, en hun output haalt vaak niet het vereiste academische niveau.\n\n**Voorzieningen.** THUAS biedt studenten met een beperking extra tijd, middelen en begeleiding. Na overleg met je toegewezen academic advisor kunnen aanpassingen worden gemaakt zodat je volledig aan de cursus en de toetsing kunt deelnemen. Aanpassingen kunnen niet worden gemaakt als deze officiële procedure niet is gevolgd.' },

      { type: 'waarschuwing', titel: 'Over die AI-regel',
        tekst: 'Deze omgeving valt hier niet onder: je gebruikt hem om de stof te leren, niet om een individuele opdracht te laten maken.\n\nMaar het onderscheid is scherp. Studiemateriaal doornemen, jezelf overhoren, uitleg vragen bij iets wat je niet snapt: dat is leren. Een opdracht die individueel moet worden gemaakt door een AI laten schrijven: dat is een integriteitsschending, met de bijbehorende gevolgen.\n\nDe handleiding noemt die regel alleen bij DRM expliciet, maar ga er niet vanuit dat hij elders niet geldt.' }
    ]
  }
];

/* ---------------------------------------------------------- */

LESSTOF['studiegids/writing'] = [
  {
    id: 'over', titel: 'Over het vak',
    blokken: [
      { type: 'tekst', titel: 'Kerngegevens', toetsstof: true,
        tekst: '**Vak:** Fundamentals of Academic Writing\n**Code:** SSMS-1S2-20\n**Docenten:** Senj Temple (S.E.Temple@hhs.nl) en Simone Hackett (S.E.Hackett@hhs.nl)\n**Vorm:** hoorcollege en workshop, 21 contacturen, 63 uur zelfstudie\n**Studiepunten:** 3 ECTS' },

      { type: 'tekst', titel: 'Waar het vak over gaat', toetsstof: true,
        tekst: 'De cursus geeft je gevorderde gereedschappen voor het **schrijven in het Engels**, voor je studie, je onderzoek en de werkvloer. Goed kunnen schrijven in een academische en professionele context is cruciaal voor succes in het SSMS-veld.\n\nDe handleiding zegt daar iets belangrijks bij: **goed Engels spreken garandeert niet dat je goed schrijft**. Dat zijn verschillende vaardigheden.\n\nDe focus ligt op de fundamenten van academisch en professioneel schrijven: hoe je alinea\u2019s structureert, hoe je **cohesie en coherentie** in een tekst maakt, hoe je beknopte zinnen bouwt, en hoe je een formele en professionele schrijfstijl produceert. Er is ook aandacht voor **parafraseren**.\n\nEr wordt aandacht besteed aan interpunctie, werkwoordstijden en andere grammatica-aspecten, maar je wordt geacht die zaken zelf bij te schaven in **zelfstudie**, met materiaal uit een toolbox op Brightspace. De slotzin van de introductie is een waarschuwing: academisch schrijven is veel meer dan goede grammatica of weten waar een komma hoort.' },

      { type: 'tekst', titel: 'De vijf leerdoelen', toetsstof: true,
        tekst: '**1.** Je kunt academische tekst schrijven die bestaat uit alinea\u2019s met topic sentences, en ideeën ontwikkelen met technieken voor cohesie en coherentie.\n\n**2.** Je kunt academische zinnen produceren van passende lengte, structuur en grammaticale nauwkeurigheid.\n\n**3.** Je kunt tekst produceren in de passende, formele academische schrijfstijl.\n\n**4.** Je kunt de kernpunten in een geschreven tekst identificeren.\n\n**5.** Je kunt parafraseren.' },

      { type: 'tekst', titel: 'Literatuur',
        tekst: 'Er hoeft geen literatuur te worden aangeschaft. Alle teksten en oefeningen worden door de docent op Brightspace aangeboden.' }
    ]
  },
  {
    id: 'toetsing', titel: 'Toetsing',
    blokken: [
      { type: 'tabel', titel: 'Toetsing', toetsstof: true,
        kop: ['', 'Details'],
        rijen: [
          ['Type toets', 'Schriftelijk examen in Remindo'],
          ['Toetsmateriaal', 'Het eindexamen lijkt op de schrijfopdrachten die je tijdens de cursus hebt gemaakt'],
          ['Type product', 'N.v.t.'],
          ['Inleverprotocol', 'N.v.t.'],
          ['Criteria', 'Zie de beoordelingsformulieren in appendix 2'],
          ['Weging', '100%'],
          ['Beoordelingsprocedure', 'Zie de beoordelingsformulieren in appendix 2'],
          ['Cijfer voldoende vanaf', '5,5 of hoger, schaal 1 tot 10']
        ] },

      { type: 'tabel', titel: 'Toetsmomenten', toetsstof: true,
        kop: ['Onderdeel', 'Datum'],
        rijen: [
          ['Oefenexamen', '15 oktober 2026'],
          ['Eindexamen (100%)', '14 december 2026'],
          ['Herkansing', 'zie rooster voor eerste en tweede gelegenheid']
        ],
        noot: 'Let op: het eindexamen valt in december, dus vóór de kerstvakantie en ruim vóór de tentamens van de theorievakken in februari.' },

      { type: 'tekst', titel: 'De beoordelingsrubric', toetsstof: true,
        tekst: 'De rubric heeft **vijf criteria**, elk beoordeeld op een schaal van 1 tot 4, dus maximaal 20 punten:\n\n1. **Content** — representeert je samenvatting de kern en de hoofdpunten van de originele tekst?\n2. **Paraphrasing** — is de tekst herschreven of zitten er stukken van het origineel in? Wordt vakjargon consistent gebruikt?\n3. **Paragraphs (coherence and cohesion)** — heldere alineastructuur, topic sentences, logische opbouw?\n4. **Sentence structure, grammatical range and accuracy** — breedte aan zinsstructuren, correcte grammatica, interpunctie en spelling?\n5. **Style** — consistent formeel en academisch, zonder informeel taalgebruik?\n\nOm te slagen mag je **op geen enkel criterium een 1 scoren**. Dat is een aparte eis bovenop je puntentotaal.' },

      { type: 'tabel', titel: 'Omrekentabel punten naar cijfer', toetsstof: true,
        kop: ['Punten', 'Cijfer', 'Punten', 'Cijfer'],
        rijen: [
          ['20', '10', '12', '6'],
          ['19', '9,5', '11', '5,5 (net voldoende)'],
          ['18', '9', '10', '5,1'],
          ['17', '8,5', '9', '4,7'],
          ['16', '8', '8', '4,3'],
          ['15', '7,5', '7', '3,9'],
          ['14', '7', '6', '3,5'],
          ['13', '6,5', '5', '3']
        ],
        noot: 'Elf van de twintig punten is precies voldoende. Dat komt neer op gemiddeld iets meer dan een 2 op elk van de vijf criteria, mits je nergens een 1 haalt.' }
    ]
  },
  {
    id: 'programma', titel: 'Programma',
    blokken: [
      { type: 'tabel', titel: 'De acht sessies', toetsstof: true,
        kop: ['Sessie', 'Onderwerp', 'Vorm', 'Opdracht'],
        rijen: [
          ['1', 'Wat is een alinea? Wat is een topic sentence?', 'College', ''],
          ['2', '6 tips voor het schrijven van goede alinea\u2019s', 'College', 'Task 1'],
          ['3', '10 kenmerken van een formelere, academische schrijfstijl', 'College', ''],
          ['4', '5 tips voor het schrijven van goede zinnen', 'College', ''],
          ['5', 'Oefenexamen in Remindo', 'Oefenexamen in een computerlokaal op de campus', 'Task 2'],
          ['6', 'Technieken om zinnen te combineren', 'College', 'Task 3'],
          ['7', 'Hoe je parafraseert', 'College', ''],
          ['8', 'Veelgemaakte fouten en review', 'College', ''],
          ['—', 'Examen', '', '']
        ],
        noot: 'Voorbereiding staat bij elke sessie als "zie Brightspace voor specifieke informatie".' },

      { type: 'tekst', titel: 'Regels bij dit vak', toetsstof: true,
        tekst: 'Aanwezigheid is niet verplicht maar sterk aanbevolen. Daarnaast gelden drie specifieke punten:\n\n**1. De taken zijn de voorbereiding op het examen.** Tijdens de cursus worden meerdere schrijfopdrachten gegeven, want schrijven is een vaardigheid die je moet oefenen. Je krijgt feedback waarmee je ziet wat goed gaat en wat nog bijgeschaafd moet. Deze taken zijn **hetzelfde als de opdracht in het eindexamen**, dat 100% van je cijfer bepaalt. De taken worden op Brightspace geüpload als Word-document of pdf.\n\n**2. Peer feedback is een essentieel onderdeel.** Bij verschillende schrijfopdrachten krijg je een partner toegewezen om feedback te geven en te ontvangen, volgens de rubric bij die taak.\n\n**3. Grammatica is jouw eigen verantwoordelijkheid.** Werkwoordstijden, betrekkelijke bijzinnen, conditionals, interpunctie, parallelle structuur en comma splices scherp je zelf bij met het materiaal onder "course information" op Brightspace. Er wordt in de colleges weinig tot geen tijd aan besteed, vanwege tijdgebrek.' },

      { type: 'slimmer', titel: 'Waarom dit vak makkelijk onderschat wordt',
        tekst: 'Drie studiepunten, acht sessies, geen boek. Het ziet er klein uit.\n\nMaar de opzet is uitgesproken: één examen dat 100% telt, en de opdrachten tijdens de cursus zijn letterlijk dezelfde soort taak. Wie de taken serieus maakt en de feedback verwerkt, doet het examen in feite voor de vierde keer. Wie ze overslaat, doet het voor het eerst.\n\nEn de rubric is streng op één punt: een enkele 1 op een van de vijf criteria betekent een onvoldoende, hoe goed de rest ook is. Kijk dus vooral naar je zwakste criterium, niet naar je gemiddelde.' }
    ]
  }
];

/* ---------------------------------------------------------- */

LESSTOF['studiegids/skills'] = [
  {
    id: 'over', titel: 'Over het vak',
    blokken: [
      { type: 'tekst', titel: 'Kerngegevens', toetsstof: true,
        tekst: '**Vak:** Professional Skills\n**Code:** SSMS-1S1-23\n**Docenten:** Gohar Baghdasaryan (coördinator, G.Baghdasaryan@hhs.nl), Andrew Pearce (A.G.H.Pearce@hhs.nl), Boudewijn Wisse (B.M.Wisse@hhs.nl), Jonathan Corr (j.m.corr@hhs.nl), Siddik Ekici (S.Ekici@hhs.nl)\n**Vorm:** hoorcollege en workshop, 35 contacturen, 105 uur zelfstudie\n**Studiepunten:** 5 ECTS' },

      { type: 'tekst', titel: 'Waar het vak over gaat', toetsstof: true,
        tekst: 'De professional skills-track vertrekt vanuit een erkenning: om effectief te worden in je toekomstige safety- en securityberoep heb je **meer nodig** dan de analytische vaardigheden, academische kennis, methodologieën en gereedschappen uit de theorievakken.\n\nVan de SSMS-afgestudeerde wordt verwacht dat hij of zij securityoplossingen implementeert, safety risk assessments uitvoert, breed advies geeft over security risk management, en effectief is in allerlei andere activiteiten in het beroepsveld. Daarvoor heb je vaardigheden nodig om **effectief om te gaan met bedrijfsleiders, managers en professionals op alle niveaus** in organisatiehiërarchieën. Verder wordt van je verwacht dat je opereert met passende gevoeligheid voor organisatiecontexten, complexe projecten managet, en casussen presenteert of rapporten schrijft die zijn toegesneden op de behoeften van beleidsmakers, bestuurders, uitvoerders of analisten.\n\n**Het theoretische deel** biedt inzicht in communicatie, public speaking, personal branding, interpersoonlijke conflictoplossing, teamwork, leiderschap, consultancyvaardigheden en projectmanagement.\n\n**Het praktijkgerichte deel** draait om het geven van presentaties en algemeen professioneel gedrag, zoals punctualiteit en passende communicatiestijlen.' },

      { type: 'tekst', titel: 'De vijf leerdoelen', toetsstof: true,
        tekst: '**1.** Je ontwikkelt constructieve samenwerking met diverse stakeholders in verschillende disciplines en culturele achtergronden.\n\n**2.** Je past passende communicatiestijlen aan voor verschillende doelgroepen, situaties en doelstellingen.\n\n**3.** Je gebruikt relevante digitale tools, inclusief AI, voor het genereren van professionele producten en efficiënte communicatie van bevindingen en innovatieve ideeën.\n\n**4.** Je bouwt de vaardigheden om safety- en securityprojecten en -teams effectief te leiden, met zelfregulatie en professionaliteit.\n\n**5.** Je zet activiteiten en middelen die nodig zijn voor een specifiek doel om in een plan.' },

      { type: 'voorbeeld', titel: 'De AI-paradox tussen twee vakken',
        tekst: 'Leerdoel 3 hier zegt letterlijk dat je relevante digitale tools **inclusief AI** moet gebruiken voor het maken van professionele producten.\n\nBij Demystifying Research Methods staat dat het gebruik van AI-tools voor individuele opdrachten een schending van de academische integriteit is.\n\nDat is geen tegenspraak maar wel iets om scherp te houden. Bij Professional Skills is AI onderdeel van het beroepsproduct dat je leert maken. Bij DRM is de individuele opdracht juist bedoeld om te toetsen of **jij** het kunt. Kijk dus per vak, en bij twijfel per opdracht, wat is toegestaan.' },

      { type: 'tekst', titel: 'Literatuur', toetsstof: true,
        tekst: 'Er hoeft geen literatuur te worden aangeschaft. De docenten leveren het meeste leesmateriaal via weblinks op de sessieslides of via Brightspace.\n\n**Verplichte teksten.**\n- Amsel, T. T. (2019). An Urban Legend Called: "The 7/38/55 Ratio Rule." *European Polygraph*, 13(2), 95-99.\n- Giles, H. (2016). Communication Accommodation Theory. In *The International Encyclopedia of Communication Theory and Philosophy* (pp. 1-7). Wiley.\n- Intercultural Relations and Globalization (2015). In *The SAGE Encyclopedia of Intercultural Competence*.\n- Żemojtel-Piotrowska, M., & Piotrowski, J. (2023). Hofstede\u2019s Cultural Dimensions Theory. In *Encyclopedia of Sexual Psychology and Behavior* (pp. 1-4). Springer.\n\n**Aanbevolen, niet verplicht.**\n- Avolio, B. J., & Bass, B. M. (1991). *The full range of leadership development.* Sage.\n- Block, P. (2011). *Flawless consulting: A guide to getting your expertise used* (3e druk). Pfeiffer.\n- Ohiagu, O. P. (2022). Revisiting McLuhan\u2019s Thoughts on Medium as Message in the Digital Era. *Zaria Journal of Communication*, 7(1).\n- Pease, B., & Pease, A. (2006). *The definitive book of body language.* Random House.' }
    ]
  },
  {
    id: 'toetsing', titel: 'Toetsing',
    blokken: [
      { type: 'tabel', titel: 'Toetsing', toetsstof: true,
        kop: ['', 'Details'],
        rijen: [
          ['Type toets', 'Twee mondelinge toetsen (groepspresentaties) en een schriftelijke toets (individuele opdracht)'],
          ['Toetsmateriaal', 'Teksten en aanvullende oefeningen van de docenten, allemaal via weblinks beschikbaar op Brightspace'],
          ['Type product', 'N.v.t.'],
          ['Inleverprotocol', 'Zie het inleverprotocol in appendix A.2.3 en de cursushandleiding'],
          ['Criteria', 'Zie de Professional Skills beoordelingsformulieren in de appendices'],
          ['Weging', 'Midterm groepspresentatie 25%, midterm individuele opdracht 25%, eindpresentatie in groep 50%'],
          ['Cijfer voldoende vanaf', 'Een pass, of een 5,5 of hoger op schaal 1 tot 10']
        ] },

      { type: 'tabel', titel: 'Deadlines', toetsstof: true,
        kop: ['Onderdeel', 'Eerste gelegenheid', 'Herkansing'],
        rijen: [
          ['Midterm groepspresentatie', 'semester 1, week 10 (9 tot 11 november 2026)', 'semester 1, week 17 (januari 2027)'],
          ['Midterm individuele opdracht', 'semester 1, week 10 (donderdag 12 november, vóór 23:59)', 'semester 1, week 17 (maandag 11 januari 2027, vóór 23:59)'],
          ['Eindpresentatie in groep', 'semester 1, week 20 (1 tot 3 februari 2027)', 'semester 2, week 4 (maart 2027)']
        ],
        noot: 'Week 10 is de drukste week van je semester: presentatie én individuele deadline, allebei in dezelfde week. In het inleverprotocol staat als herkansingsdeadline overigens week 15 genoemd; controleer dat op Brightspace.' },

      { type: 'tekst', titel: 'De individuele opdracht: cv en motivatiebrief', toetsstof: true,
        tekst: 'De midterm individuele opdracht bestaat uit een **cv en een cover letter**. Het inleverprotocol is streng en gedetailleerd:\n\n**Inleveren.** Upload de vacaturetekst (de **volledige tekst in het Engels, geen weblink**), plus je cv en motivatiebrief, plus eventuele diploma\u2019s of certificaten van relevante trainingen. Alles in het Engels en **samengevoegd in één pdf-bestand**. Noem het bestand naar je eigen naam en de functietitel, bijvoorbeeld "T. Smith_junior consultant". Uploaden in de map Submission Point op Brightspace.\n\n**Opmaak.** Gebruik **bij elkaar passende templates** voor je cv en brief. Het cv mag niet langer zijn dan één A4. De motivatiebrief telt **tussen de 350 en 400 woorden**. Gebruik waar passend visuals: foto, afbeeldingen, iconen.\n\n**Taalvaardigheid.** Spelling en grammatica correct. Tekststructuur en argumentatie helder en logisch.' },

      { type: 'tekst', titel: 'Waarop het cv en de brief worden beoordeeld', toetsstof: true,
        tekst: 'Er zijn tien criteria plus een controle op het inleverprotocol. Een **niet-aangevinkt vakje bij het protocol betekent dat je inzending is afgewezen**. Je slaagt bij minimaal **7 van de 10** criteria.\n\n**Cv.**\n1. **Relevantie en aansluiting op de functie-eisen.** Het cv laat duidelijk zien hoe je vaardigheden, ervaring en kwalificaties aansluiten op de specifieke eisen van de baan, met inhoud die is toegesneden op de competenties en verantwoordelijkheden uit de vacature.\n2. **Helderheid en structuur.** Goed georganiseerd, makkelijk te lezen, logisch opgebouwd, met kopjes, bullets en beknopte taal, zodat de belangrijkste informatie opvalt.\n3. **Kwantificeerbare prestaties en impact.** Specifieke resultaten die je bijdrage kwantificeren, zoals cijfers, percentages of niveaus, bijvoorbeeld taalniveaus als basic, fluent of A1, B2.\n4. **Professionele presentatie en opmaak.** Schoon, professioneel en foutloos: consistent lettertype en -grootte, passend gebruik van witruimte, templates en visuals, en aandacht voor spelling, grammatica en interpunctie.\n5. **Relevante vaardigheden.** Een sectie met relevante technische én soft skills, met vaktermen die in het vakgebied gangbaar zijn en aansluiten op de vacature.\n\n**Motivatiebrief.**\n6. **Maatwerk en relevantie.** Specifiek toegesneden op de functie en de organisatie, met vermelding van de bedrijfsnaam en verwijzingen naar specifieke onderdelen van de vacature.\n7. **Structuur en opmaak.** Duidelijke inleiding, kern en conclusie, met correcte alinea-indeling, regelafstand, professioneel lettertype, passende marges en consistente uitlijning.\n8. **Verhaallijn.** Een pakkende, beknopte opening die meteen je interesse in de rol en het bedrijf laat zien. De kern geeft concrete voorbeelden van relevante ervaring en vaardigheden. De conclusie vat je geschiktheid samen, spreekt enthousiasme uit en bevat een **call to action**.\n9. **Professionele toon en taalgebruik.** Consistent professioneel, helder en beknopt, zonder jargon, fouten of informele uitdrukkingen.\n10. **Bewijs van onderzoek en aansluiting op bedrijfswaarden.** De brief laat zien dat je het bedrijf hebt onderzocht en de missie, waarden en cultuur begrijpt, met verbanden tussen jouw achtergrond en de doelen van het bedrijf.' },

      { type: 'tekst', titel: 'De midterm groepspresentatie: zeventien criteria', toetsstof: true,
        tekst: 'Beoordeling is **pass/fail**. Je slaagt bij minimaal **9 van de 17** criteria, en je moet **minstens 1 criterium per sectie** halen.\n\n**I. Content en Q&A.**\n1. De presentatie weerspiegelt alle eisen van de opdracht.\n2. De zwakke en sterke aspecten van verbale en non-verbale communicatie worden grondig besproken.\n3. Er worden relevante voorbeelden gegeven die conclusies en ideeën met bewijs onderbouwen.\n4. Presentatoren tonen volledige kennis door vragen te beantwoorden met uitleg en uitwerking.\n\n**II. Structuur en organisatie.**\n5. De presentatie is goed gestructureerd en heeft een helder doel en onderwerp.\n6. De presentatietijd is gelijk verdeeld over de presentatoren.\n\n**III. Delivery.**\n7. Presentatoren houden de aandacht van het hele publiek vast met direct oogcontact en kijken zelden op hun notities.\n8. Presentatoren variëren in volume en intonatie om de aandacht vast te houden en kernpunten te benadrukken.\n9. Presentatoren gebruiken geen stopwoorden.\n10. Presentatoren spreken in een passend tempo.\n11. Presentatoren zijn professioneel gekleed volgens de principes van business attire.\n\n**IV. Slides: layout, design en taal.**\n12. Alle visuals zijn aantrekkelijk qua grootte, kwaliteit, kleur en vorm, en ondersteunen de inhoud.\n13. Lettertypen zijn zorgvuldig gekozen om leesbaarheid te vergroten en kernpunten te benadrukken.\n14. De achtergrond versterkt tekst of andere afbeeldingen.\n15. De ruimte op de slide is verantwoord gebruikt, met een goede verdeling tussen tekst en beeld.\n16. De presentatie bevat geen spel- of grammaticafouten.\n\n**V. Reflectie op projectplanning en teamwork.**\n17. De reflectie op de uitvoering van het project en op het teamwork benoemt tekortkomingen en richt zich op toekomstige verbeteringen.' },

      { type: 'tabel', titel: 'De eindpresentatie: vier gewogen criteria', toetsstof: true,
        kop: ['Criterium', 'Weging', 'Waar het over gaat'],
        rijen: [
          ['Content, organisatie en Q&A', '40%', 'Goed gestructureerd, helder doel en onderwerp, relevante voorbeelden en feiten, conclusies onderbouwd met bewijs. De inhoud reflecteert alle vereiste elementen van de opdracht. Studenten tonen volledige kennis bij het beantwoorden van vragen'],
          ['Delivery', '25%', 'Aandacht van het publiek vasthouden met oogcontact, variatie in volume en intonatie, geen stopwoorden, passend tempo, tijd gelijk verdeeld, professioneel gekleed volgens business attire'],
          ['Slides: layout, design en taal', '20%', 'Consistente en aantrekkelijke visuals die de inhoud ondersteunen, doordachte lettertypen, achtergrond die tekst versterkt, verantwoord gebruik van slideruimte, geen spel- of grammaticafouten'],
          ['Projectmanagement, teamwork en constructieve feedback', '15%', 'Het project is een groepsinspanning en de bijdrage van de leden is zichtbaar en duidelijk geïllustreerd. De reflectie op planning en teamwork is uitzonderlijk professioneel en productief, benoemt tekortkomingen en richt zich op verbetering. Potentiële risicofactoren voor het projectsucces worden helder benoemd, met suggesties om ze te ondervangen']
        ],
        noot: 'Anders dan de midterm is dit geen pass/fail maar een cijfer van 1 tot 10 per criterium, waarna de gewogen som je totaalcijfer is.' }
    ]
  },
  {
    id: 'programma', titel: 'Programma',
    blokken: [
      { type: 'tabel', titel: 'De elf sessies', toetsstof: true,
        kop: ['Sessie', 'Onderwerp', 'Docent', 'Voorbereiding'],
        rijen: [
          ['1', 'Kick-off. Communicatievaardigheden in safety en security', 'G. Baghdasaryan', 'Pease & Pease (2006), plus de teksten op de slides'],
          ['2', 'Communiceren van ongunstig nieuws', 'G. Baghdasaryan', 'Giles (2016), Ohiagu (2022), plus de slides'],
          ['3', 'Jouw communicatiestijl. Public speaking en presentatievaardigheden', 'G. Baghdasaryan', 'Amsel (2019), plus de slides'],
          ['4', 'Interpersoonlijk conflictmanagement', 'G. Baghdasaryan', 'Zie de teksten op de slides'],
          ['5', 'Intro to AI in safety en security', 'B. Wisse', 'Zie de teksten op de slides'],
          ['6', 'Branding als safety- en securityprofessional', 'G. Baghdasaryan', 'Żemojtel-Piotrowska & Piotrowski (2023), plus de slides'],
          ['7', 'Sollicitaties en sollicitatiegesprekken', 'Gastcollege (nog te bepalen)', 'Aanwezigheid verplicht'],
          ['—', 'Midterm-toets en POP-week', '', ''],
          ['8', 'Leiderschapsvaardigheden', 'A. Pearce', 'Avolio & Bass (1991), plus de slides'],
          ['9', 'Consultancyvaardigheden', 'J. Corr', 'Block (2011), plus de slides'],
          ['10', 'Projectmanagementvaardigheden', 'S. Ekici', 'Zie de teksten en de slides'],
          ['11', 'Projectmanagementvaardigheden', 'S. Ekici', 'Zie de teksten en de slides'],
          ['—', 'Eindtoets en POP-week', '', '']
        ],
        noot: 'Sessie 6 over personal branding en sessie 7 over sollicitaties bereiden je direct voor op de individuele opdracht met cv en motivatiebrief, die in week 10 moet worden ingeleverd.' },

      { type: 'tekst', titel: 'Regels bij dit vak', toetsstof: true,
        tekst: 'Aanwezigheid is niet verplicht maar sterk aanbevolen. Gastcolleges moeten worden bijgewoond. Geplande data en deadlines voor presentaties en inleveringen moeten zonder uitzondering worden gehaald.\n\n**Te laat is gezakt.** Studenten of werkgroepen die te laat zijn bij de toets, of dat nu de presentatie of de online inlevering betreft, **zakken voor de toets en gaan naar de herkansing**. Dat staat er zo hard.\n\n**Individuele verlaging binnen een groepscijfer.** Bij een geconstateerd lagere bijdrage van een individuele student behoudt de tutor het recht het individuele cijfer te verlagen, om drie redenen:\n\n- **gebrek aan deelname aan groepsactiviteiten**, bijvoorbeeld het missen van vergaderingen, niet communiceren met de groep en de tutor, of tijdens de presentatie geen vragen kunnen beantwoorden;\n- **significant lage kwaliteit van de bijdrage** aan het groepswerk, waardoor het totaalresultaat daalt, bijvoorbeeld merkbaar zwakke inhoud die ondanks feedback niet verbetert;\n- **tekortkomingen in het leveren van vereist werk**, zoals te late inleveringen en onprofessioneel gedrag.' }
    ]
  }
];

/* ---------------------------------------------------------- */

LESSTOF['studiegids/deadlines'] = [
  {
    id: 'alles', titel: 'Alle toetsen',
    blokken: [
      { type: 'uitleg', titel: 'Alles op één rij',
        tekst: 'Hieronder alle toetsen en deadlines van semester 1 bij elkaar, in chronologische volgorde. Zo zie je waar de pieken zitten.\n\nWaar de handleiding geen exacte datum geeft, staat de maand. Controleer de precieze data in het rooster en op Brightspace.' },

      { type: 'tabel', titel: 'Chronologisch overzicht', toetsstof: true,
        kop: ['Wanneer', 'Vak', 'Wat', 'Gewicht'],
        rijen: [
          ['week 4', 'Demystifying Research Methods', 'Quiz 1', 'pass/fail, verplicht'],
          ['15 oktober 2026', 'Fundamentals of Academic Writing', 'Oefenexamen in Remindo', 'geen'],
          ['week 7', 'Demystifying Research Methods', 'Quiz 2', 'pass/fail, verplicht'],
          ['9 tot 11 november 2026 (week 10)', 'Professional Skills', 'Midterm groepspresentatie', '25%'],
          ['12 november 2026, 23:59 (week 10)', 'Professional Skills', 'Midterm individuele opdracht: cv en motivatiebrief', '25%'],
          ['13 november 2026', 'Society & Politics', 'Midterm, schriftelijk', '50%'],
          ['november 2026', 'Intro to Safety & Security', 'Midterm in Remindo', '50%'],
          ['november 2026', 'Governance & Policy', 'Midterm, schriftelijk', '50%'],
          ['november 2026', 'Demystifying Research Methods', 'Cumulatieve toets moment 1', '20%'],
          ['14 december 2026', 'Fundamentals of Academic Writing', 'Eindexamen in Remindo', '100%'],
          ['december 2026', 'Demystifying Research Methods', 'Cumulatieve toets moment 2', '50%'],
          ['week 14', 'Demystifying Research Methods', 'Quiz 3', 'pass/fail, verplicht'],
          ['januari 2027 (week 17)', 'Professional Skills', 'Herkansing midterm presentatie en individuele opdracht (11 januari, 23:59)', ''],
          ['januari 2027', 'Intro to Safety & Security', 'Herkansing midterm', ''],
          ['1 tot 3 februari 2027 (week 20)', 'Professional Skills', 'Eindpresentatie in groep', '50%'],
          ['februari 2027', 'Intro to Safety & Security', 'Eindtoets, mondeling', '50%'],
          ['februari 2027', 'Governance & Policy', 'Eindtoets, schriftelijk', '50%'],
          ['februari 2027', 'Society & Politics', 'Eindtoets, schriftelijk', '50%'],
          ['februari 2027', 'Demystifying Research Methods', 'Cumulatieve toets moment 3', '30%'],
          ['maart 2027 (sem 2, week 4)', 'Professional Skills', 'Herkansing eindpresentatie', ''],
          ['april 2027', 'Intro to Safety & Security', 'Herkansing eindtoets', '']
        ] },

      { type: 'waarschuwing', titel: 'Drie momenten om nu al vrij te houden',
        tekst: '**Week 10, november 2026.** Vier toetsen in één week: de groepspresentatie, de individuele cv-opdracht, en de midterms van de drie theorievakken, plus moment 1 van DRM. Dit is de zwaarste week van het semester, met afstand.\n\n**Half december 2026.** Het eindexamen Academic Writing dat 100% telt, en moment 2 van DRM dat de helft van dat cijfer bepaalt. Twee weken vóór de kerstvakantie.\n\n**Eind januari en februari 2027.** De eindpresentatie in week 20 en daarna alle eindtoetsen, inclusief het mondeling van Intro to Safety & Security.\n\nDe rustige periodes zijn september en de eerste helft van oktober, en de tweede helft van januari. Gebruik die om vooruit te werken, want in november en februari zit er geen ruimte meer in.' }
    ]
  }
];

/* ---------------------------------------------------------- */

LESSTOF['studiegids/competenties'] = [
  {
    id: 'comp', titel: 'De negen competenties',
    blokken: [
      { type: 'uitleg', titel: 'Waarom dit ertoe doet',
        tekst: 'Elk leerdoel van elk vak hangt aan een of meer van deze negen competenties. Dat is niet alleen administratie: als je in een toets of opdracht moet laten zien dat je iets "kunt", is dit de taal waarin dat wordt beoordeeld.\n\nDe competenties gelden voor **jaar 1**.' },

      { type: 'tekst', titel: 'Competentie 1: Collaboration', toetsstof: true,
        tekst: 'Bereidheid en vermogen om met anderen samen te werken aan safety en security in een **multidisciplinaire en multiculturele** omgeving, ter ondersteuning van betrokkenen bij het realiseren van gemeenschappelijke doelen.\n\nSafety- en securityspecialisten balanceren tussen verschillende belangen en agenda\u2019s, brengen accurate informatie over, stellen vertrouwen in andere partijen en moedigen hen aan hun kennis en vaardigheden te delen. Zij kunnen constructieve relaties opbouwen en onderhouden met andere professionals en instanties, en informatie en expertise delen met als doel samen te werken aan een veiliger omgeving.' },

      { type: 'tekst', titel: 'Competentie 2: Organisation', toetsstof: true,
        tekst: 'Vermogen om de dynamiek en effecten van **politieke en bestuurlijke krachten** binnen en buiten de organisatie in te schatten, te begrijpen en ernaar te handelen.' },

      { type: 'tekst', titel: 'Competentie 3: Communication', toetsstof: true,
        tekst: 'Vermogen om informatie en ideeën over risico\u2019s, ideeën en oplossingen helder en gericht over te brengen aan een publiek van **specialisten en/of niet-specialisten**.\n\nSafety- en securityspecialisten kunnen een communicatiewijze kiezen die optimaal past bij verschillende situaties, partners en doelstellingen. Zij beheersen verschillende middelen van communicatie, mondeling en schriftelijk, grondig, en kunnen effectief gebruikmaken van ICT-tools.' },

      { type: 'tekst', titel: 'Competentie 4: Analytical and investigative capabilities', toetsstof: true,
        tekst: 'Vermogen om complexe data te analyseren, te structureren en zo nodig te herstructureren, met onderscheid tussen **primaire en secundaire kwesties**.\n\nSafety- en securityspecialisten zijn nieuwsgierig en kunnen kritisch, coherent en logisch denken, verbanden en onderliggende mechanismen zien, en geldige conclusies trekken en gevolgen evalueren. Daarnaast kunnen zij data uit managementinformatiesystemen interpreteren met het oog op potentiële risico\u2019s. Zij kunnen beoordelen of informatie accuraat en betrouwbaar is.' },

      { type: 'tekst', titel: 'Competentie 5: Decisiveness', toetsstof: true,
        tekst: 'Vermogen om tot **realistische, onderbouwde en uitvoerbare** conclusies te komen over mogelijke alternatieven, op basis van beschikbare informatie.' },

      { type: 'tekst', titel: 'Competentie 6: Result orientation', toetsstof: true,
        tekst: 'Vermogen om concrete doelstellingen en prioriteiten te formuleren en te stellen. Safety- en securityspecialisten kunnen bepalen hoeveel tijd het afronden van een taak vergt, en welke activiteiten en middelen nodig zijn om de overkoepelende doelstellingen te bereiken.' },

      { type: 'tekst', titel: 'Competentie 7: Innovativeness', toetsstof: true,
        tekst: 'Vermogen om securityvraagstukken vanuit **verschillende invalshoeken** te benaderen, met nieuwe en originele ideeën en oplossingen, en om gevestigde denkpatronen te doorbreken.' },

      { type: 'tekst', titel: 'Competentie 8: Leadership', toetsstof: true,
        tekst: 'Vermogen om projecten, werkgroepen en teams rond safety en security te leiden en aan te sturen.\n\nDaarnaast passen safety- en securityspecialisten **zelfregulatie** toe in de omgang met andere professionals. Zo kunnen zij dialogen en discussies leiden over het te bereiken doel, en verschillende partijen en actoren faciliteren om aan die realisatie bij te dragen. Zij weten hoe zij **interne betrokkenheid** bij de safety- en securitycultuur in een organisatie creëren.' },

      { type: 'tekst', titel: 'Competentie 9: Reflectiveness', toetsstof: true,
        tekst: 'Safety- en securityspecialisten zijn **zelfkritisch** en in staat hun rol te positioneren ten opzichte van het maatschappelijk belang. Zij kunnen op gestructureerde wijze terugkijken en reflecteren op hun eigen professionele handelen, en leren van opgedane ervaringen. Zij kunnen de maatschappelijke impact van safety- en securityproblemen én van oplossingen inschatten. Zij kunnen verschillende waarden tegen elkaar afwegen, zoals **vrijheid, gelijkheid, innovatie en continuïteit**.' }
    ]
  },
  {
    id: 'matrix', titel: 'Leerdoelmatrix',
    blokken: [
      { type: 'uitleg', titel: 'Welk leerdoel hangt aan welke competentie',
        tekst: 'De cijfers in de laatste kolom verwijzen naar de negen competenties op het vorige tabblad. Zo zie je waar je aan wordt afgemeten.' },

      { type: 'tabel', titel: 'Intro to Safety & Security', toetsstof: true,
        kop: ['Leerdoel', 'Competenties'],
        rijen: [
          ['Je kunt de verschillende domeinen van safety en security in het SSMS-programma conceptualiseren', '1, 2, 4, 7'],
          ['Je kunt de relevantie en het belang van stakeholdermanagement-benaderingen uitleggen in verschillende internationale omgevingen', '1, 4, 7'],
          ['Je kunt de structuur en hoofdgedachten van het SSMS-programma en het multidisciplinaire karakter samenvatten', '1, 7'],
          ['Je kunt uitleggen hoe elementen rond risicomanagement en resilience worden toegepast in internationale safety en security', '4, 7']
        ] },

      { type: 'tabel', titel: 'Governance & Policy', toetsstof: true,
        kop: ['Leerdoel', 'Competenties'],
        rijen: [
          ['Basiskenmerken van publieke organisaties identificeren', '2, 4'],
          ['Het belang van organisatie voor het functioneren van bureaucratieën uitleggen', '1, 2, 4, 7'],
          ['Categorieën bureaucratische medewerkers, typen instanties en vormende factoren in culturele contexten conceptualiseren', '1, 2, 4, 7'],
          ['Onderscheid maken tussen publieke, private en gemengde actoren in het beleidsproces', '1, 2, 4, 7'],
          ['De fasen van het beleidsproces onderscheiden', '2, 4, 7'],
          ['Uitdagingen, problemen en dilemma\u2019s van beleidsmakers uitleggen in internationale contexten', '2, 4, 7'],
          ['Uitleggen hoe obstakels en pathologieën rationele beleidsvorming in de weg staan', '4, 7']
        ] },

      { type: 'tabel', titel: 'Society & Politics', toetsstof: true,
        kop: ['Leerdoel', 'Competenties'],
        rijen: [
          ['Sociologische perspectieven en concepten rond identiteit, stratificatie en sociale orde identificeren', '2, 4, 7'],
          ['Situaties met safety- en securityvraagstukken sociologisch interpreteren', '2, 4, 7'],
          ['Kernbegrippen en mijlpalen in de internationale geschiedenis van politieke theorie en vergelijkende politiek definiëren', '4, 7'],
          ['De basisbeginselen van staatsinstituties in democratische en autoritaire regimes uitleggen', '2, 4, 7'],
          ['Onderscheid maken tussen ideologieën en regimetypen wereldwijd', '2, 7'],
          ['Abstracte concepten als democratisering, staatsfalen of macht en gezag omzetten in concrete voorbeelden en andersom', '1, 2, 4, 7']
        ] },

      { type: 'tabel', titel: 'Demystifying Research Methods', toetsstof: true,
        kop: ['Leerdoel', 'Competenties'],
        rijen: [
          ['Basale toegepaste onderzoeksconcepten toepassen op safety- en securitysituaties', '4, 5'],
          ['Vooronderzoek doen met het 6W-probleemanalysekader op verschillende typen literatuur', '4, 5'],
          ['Hoofdconcepten en variabelen van een studie onderscheiden en hun verbanden onderzoeken', '4, 5'],
          ['Onderzoeksvragen evalueren op type, helderheid, focus, relevantie, haalbaarheid, complexiteit, bias en ethiek', '4, 5, 6'],
          ['Het onderzoeksdesign beoordelen: benadering, probleem, doelstelling, hoofdvraag en deelvragen', '4, 5, 6'],
          ['Studies beoordelen op beperkingen: databeschikbaarheid, steekproef, generaliseerbaarheid, tijd en budget', '4, 5, 6'],
          ['Een eigen applied research design formuleren met probleem, doelstelling, hoofdvraag en twee deelvragen', '4, 5, 6']
        ] },

      { type: 'tabel', titel: 'Fundamentals of Academic Writing en Professional Skills', toetsstof: true,
        kop: ['Leerdoel', 'Vak', 'Competenties'],
        rijen: [
          ['Academische tekst schrijven met topic sentences, cohesie en coherentie', 'Academic Writing', '3'],
          ['Academische zinnen produceren van passende lengte, structuur en grammaticale nauwkeurigheid', 'Academic Writing', '3'],
          ['Tekst produceren in de passende formele academische stijl', 'Academic Writing', '3'],
          ['De kernpunten in een geschreven tekst identificeren', 'Academic Writing', '3'],
          ['Parafraseren', 'Academic Writing', '3'],
          ['Constructieve samenwerking ontwikkelen met diverse stakeholders in verschillende disciplines en culturen', 'Professional Skills', '1'],
          ['Communicatiestijlen aanpassen aan doelgroep, situatie en doelstelling', 'Professional Skills', '3'],
          ['Activiteiten en middelen voor een doel omzetten in een plan', 'Professional Skills', '6'],
          ['Digitale tools inclusief AI gebruiken voor professionele producten en communicatie van bevindingen', 'Professional Skills', '7'],
          ['Safety- en securityprojecten en teams leiden met zelfregulatie en professionalisme', 'Professional Skills', '8']
        ] },

      { type: 'voorbeeld', titel: 'Wat je uit deze matrix kunt aflezen',
        tekst: 'Competentie **4, analytisch en onderzoekend vermogen**, en competentie **7, innovativiteit**, komen bij bijna elk theorievak terug. Dat is het hart van jaar 1: leren analyseren en verbanden zien.\n\nCompetentie **3, communicatie**, hangt volledig aan Academic Writing en Professional Skills. De schrijfvakken zijn dus geen bijzaak; ze dragen in hun eentje een van de negen competenties.\n\nCompetentie **9, reflectiveness**, hangt in semester 1 aan geen enkel leerdoel. Die komt later.' }
    ]
  }
];

/* ---------------------------------------------------------- */

LESSTOF['studiegids/kalender'] = [
  {
    id: 'kal', titel: 'Kalender',
    blokken: [
      { type: 'tabel', titel: 'Vakanties en vrije dagen 2026-2027', toetsstof: true,
        kop: ['Periode', 'Van', 'Tot en met'],
        rijen: [
          ['Herfstvakantie', 'maandag 19 oktober 2026', 'vrijdag 23 oktober 2026'],
          ['THiNK FeST', 'donderdag 5 november 2026', ''],
          ['Kerstvakantie', 'maandag 21 december 2026', 'vrijdag 1 januari 2027'],
          ['Voorjaarsvakantie', 'maandag 22 februari 2027', 'vrijdag 26 februari 2027'],
          ['Paasweekend', 'vrijdag 26 maart 2027', 'maandag 29 maart 2027'],
          ['Meivakantie', 'maandag 26 april 2027', 'vrijdag 30 april 2027'],
          ['Koningsdag', 'dinsdag 27 april 2027', ''],
          ['Bevrijdingsdag', 'woensdag 5 mei 2027', ''],
          ['Hemelvaart', 'donderdag 6 mei 2027', 'vrijdag 7 mei 2027'],
          ['Pinksteren', 'maandag 17 mei 2027', ''],
          ['Zomervakantie', 'maandag 19 juli 2027', 'vrijdag 27 augustus 2027']
        ] },

      { type: 'tekst', titel: 'Hoe het studiejaar is opgebouwd', toetsstof: true,
        tekst: 'De dertien principes voor jaarplanning en vakantieperiodes:\n\n1. Een studiejaar bestaat uit **42 onderwijsweken**.\n2. De hogeschool verdeelt een studiejaar in twee semesters van **20 weken**, vakanties niet meegerekend, elk bestaande uit twee periodes van 10 weken, met een week verlenging na het tweede semester.\n3. Die extra week is bedoeld voor afronding van het jaar: herkansingen, certificering, bezwaren.\n4. Minoren zijn verdeeld in blokken van 10 weken. Afhankelijk van de minor duurt die een blok of een semester.\n5. Het studiejaar begint in de werkweek waarin **1 september** valt. Valt 1 september in een weekend, dan start het jaar de maandag daarna.\n6. In de week vóór het eerste semester, "week 0", die in de zomervakantie valt, kunnen opleidingen herkansingen plannen.\n7. Omdat die week in een vakantieperiode valt, worden er geen reguliere onderwijsactiviteiten gepland, behalve introducties voor eerstejaars.\n8. Voor de herfst-, voorjaars-, mei- en zomervakantie en voor de kerstvakantie worden de adviesdata van OCW voor de regio Haaglanden gevolgd.\n9. De Haagse Hogeschool heeft een meivakantie van **één week**.\n10. THiNK FeST valt op de donderdag van de negende week van het eerste semester.\n11. De gebouwen zijn gesloten op officiële feestdagen, op Goede Vrijdag en op de vrijdag daarna.\n12. Deze principes leiden ongeveer eens per vijf tot zes jaar tot een extra week, bijvoorbeeld in 2024.\n13. Er vinden **geen toetsen of lessen plaats tijdens de Dodenherdenking op 4 mei vanaf 20:00 uur**. Het laatste tijdstip is 4 mei om 19:00 uur.' },

      { type: 'tekst', titel: 'Het verschil tussen holiday en recess', toetsstof: true,
        tekst: 'De handleiding maakt een onderscheid dat je moet kennen, want het bepaalt of je in een vakantie toch iets moet doen.\n\n**Holidays.** Geen activiteiten vereist of verplicht voor de studie. Dit geldt voor periodes waarin de gebouwen gesloten zijn.\n\n**Recess.** Geen geroosterde onderwijsactiviteiten, **maar wel projecten en herkansingen of toetsen**. Dit is het geval tijdens de herfst-, voorjaars-, mei- en zomervakantie.\n\nOftewel: in een recess kan er wel degelijk een toets gepland staan. De herfst-, voorjaars-, mei- en zomervakantie sluiten aan op de vakantieplanning van het primair en voortgezet onderwijs in de regio Haaglanden en volgen de adviesdata van OCW voor regio Midden.' }
    ]
  }
];

/* ---------------------------------------------------------- */

LESSTOF['studiegids/regels'] = [
  {
    id: 'inleveren', titel: 'Inleverprotocol',
    blokken: [
      { type: 'tekst', titel: 'Het algemene inleverprotocol', toetsstof: true,
        tekst: 'Dit protocol geldt als beoordelingscriterium bij ingeleverde producten. Voldoe je er niet aan, dan kan je inzending worden **afgewezen** nog voordat naar de inhoud wordt gekeken.\n\n**Deadline.** Het product is op tijd ingeleverd via Brightspace.\n\n**Omvang.** De rapportage voldoet aan het minimum en maximum aantal A4\u2019s zoals vereist in het beoordelingsformulier.\n\n**Opmaak.** Er wordt één lettertype en tekengrootte gebruikt, bij voorkeur **Times New Roman 12**.\n\n**Titelpagina.** Het document heeft een titelpagina met titel en datum, het vak, de klas en indien van toepassing het projectgroepnummer, voornamen, achternamen, studentnummers en studente-mails, en de naam van de docent of beoordelaar.\n\n**Layout.** Hoofdstukken en paragrafen hebben nummers en kopjes; pagina\u2019s zijn correct genummerd.\n\n**Bronvermelding.** Bronvermelding in **APA-stijl**.\n\n**Taalvaardigheid.** Spelling en grammatica correct. Tekststructuur en argumentatie in orde.' },

      { type: 'slimmer', titel: 'Maak hier één keer een sjabloon van',
        tekst: 'Dit protocol keert het hele jaar terug. Maak nu één Word-sjabloon met Times New Roman 12, een correcte titelpagina, genummerde kopjes en paginanummers, en bewaar het.\n\nDat scheelt je bij elke inlevering een half uur, en belangrijker: het haalt de kans weg dat een goed stuk werk wordt afgewezen op iets wat niets met de inhoud te maken heeft.' }
    ]
  },
  {
    id: 'doorstroom', titel: 'Doorstroom en toelating',
    blokken: [
      { type: 'tekst', titel: 'De Leidse master Crisis and Security Management', toetsstof: true,
        tekst: 'Binnen het bestaande SSMS-curriculum zijn onderdelen aangewezen als **vereiste units** om als SSMS-student na afstuderen een gegarandeerde plek te krijgen in de masteropleiding **Crisis and Security Management (CSM)** van de Universiteit Leiden.\n\nBelangrijke voorwaarden:\n\n- De plek wordt alleen aangeboden aan het **huidige jaar 4-cohort** van SSMS-studenten.\n- Het aantal kandidaten is beperkt. Selectie gebeurt op basis van meerdere eisen, waaronder je algehele prestaties in SSMS gedurende de eerste drie jaar.\n- Word je geselecteerd, dan word je rechtstreeks benaderd door SSMS. **Krijg je geen formele uitnodiging, dan ben je niet toelaatbaar** tot de master.\n\n**Minimaal GPA van 7,5** voor alle onderstaande vakken per jaar samen:\n\n*Jaar 2:* Safety Risk Management, Geopolitics & National Security, Conflict studies & Peacebuilding, Culture, Policy & Management, Quantitative & Qualitative Data Analysis.\n\n*Jaar 3:* Managing Corporate Challenges, Research Consultancy Project.\n\nAlle bovenstaande criteria moeten **uiterlijk aan het eind van jaar 3** zijn behaald.\n\nDaarnaast minimaal een **7,5 voor elk** van deze onderdelen in jaar 4: de geschreven thesis en de thesisverdediging.\n\n**Engelse taaleis:** geen.\n\nVoor vragen: admissionCSM@fgga.leidenuniv.nl' },

      { type: 'tekst', titel: 'Toelating tot het stageprogramma in jaar 3', toetsstof: true,
        tekst: 'De volgende vakken moeten zijn gehaald met een gemiddeld cijfer (GPA) van minimaal **7,5** om te worden toegelaten tot het SSMS-stageprogramma in jaar 3:\n\n**Jaar 1:**\n1. Governance & Policy\n2. Business & Quality Management\n3. Professional Skills 1\n4. Professional Abilities 2\n5. Professional Abilities 3 (Assessment)\n6. Professional Abilities 4 (Assessment)\n\n**Jaar 2:** Culture, Policy & Management, Safety Risk Management, Project.' },

      { type: 'waarschuwing', titel: 'Wat dit betekent voor dit semester',
        tekst: 'Twee van de zes jaar 1-vakken op de stagelijst zitten in dit semester: **Governance & Policy** en **Professional Skills**.\n\nEen 5,5 halen is genoeg om over te gaan. Maar als je stage wilt lopen in jaar 3, en zeker als je naar de Leidse master wilt, heb je gemiddeld een **7,5** nodig op die vakken. Dat is een compleet ander doel dan "gehaald".\n\nHet is verstandig dat nu te weten in plaats van in jaar 2. Governance & Policy is niet het vak om te laten liggen.' },

      { type: 'tekst', titel: 'Studieadvies jaar 4', toetsstof: true,
        tekst: 'De resultaten van de volgende onderzoeksmethodenvakken worden meegewogen in de studieadviesprocedure voor jaar 4:\n\n*Jaar 2:* Project, QQDA-cursus.\n*Jaar 3:* Research Consultancy Project.\n\nBovendien moeten studenten **alle SSMS-groepsprojecten** en **alle onderdelen van de keuzeruimte in jaar 3** succesvol hebben afgerond voordat zij aan jaar 4 beginnen. Voor verdere informatie verwijst de handleiding naar de Jaar 4-handleiding.' }
    ]
  }
];

/* ============================================================
   De studiegids registreren als vak op het homescreen.
   ============================================================ */



/* ============================================================
   Lesstof — Demystifying Research Methods (DRM)
   Naar: Verhoeven, N. (2019). Doing Research (hoofdstuk 3, 4, 5, 13)
         Tulder, R. van (2018). Skill Sheets A14, A15

   Vier hoofdstukken, zelfde opzet als Intro to Safety & Security:
   Voorbereiding / Kernstof / Toepassen / Checken.
   ============================================================ */

/* ============================================================
   HOOFDSTUK 3 — De achtergrond van je onderzoek
   ============================================================ */

LESSTOF['demystifying-research-methods/ch3'] = [
  {
    id: 'voor', titel: 'Voorbereiding',
    blokken: [
      { type: 'leerdoelen', items: [
        'De aanleiding (reden) van een onderzoek herkennen en opschrijven',
        'De 6W-methode toepassen om die aanleiding uit te werken',
        'Het verschil uitleggen tussen vooronderzoek en hoofdonderzoek',
        'Weten waar je informatie zoekt tijdens het vooronderzoek'
      ]},
      { type: 'uitleg', titel: 'Waar dit hoofdstuk over gaat',
        tekst: 'Toegepast onderzoek doe je nooit zomaar. Er is altijd een **aanleiding**: een verschil tussen de situatie die je aantreft en de situatie die gewenst is. Dat hoeft niet negatief te zijn, maar er is wel altijd iets dat om een analyse of om maatregelen vraagt.\n\nDit hoofdstuk (Verhoeven, hoofdstuk 3) leert je hoe je die aanleiding **opschrijft** met behulp van de 6W-methode, en hoe je in de fase daarna, het **vooronderzoek**, op zoek gaat naar wat er al bekend is over je onderwerp.' }
    ]
  },
  {
    id: 'kern', titel: 'Kernstof',
    blokken: [
      { type: 'tekst', titel: '3.1 De aanleiding herkennen', toetsstof: true,
        tekst: 'De aanleiding is de achtergrond, oftewel de reden om onderzoek te starten naar een bepaalde situatie. Is er geen aanleiding, dan heeft onderzoeken geen zin.\n\nEen aanleiding kan leiden tot zowel een **kennisvraag** (fundamenteel onderzoek) als een **praktijkvraag** (toegepast onderzoek). Onderzoek kan zelfs allebei tegelijk zijn: het beantwoorden van een praktische vraag terwijl je tegelijk een bestaand model of een bestaande theorie toetst.' },
      { type: 'voorbeeld', titel: 'Twee aanleidingen',
        tekst: 'Zorg voor ouderen: een hoogleraar signaleert dat de huidige zorg voor ouderen met dementie aan een herziening toe is. Onderzoek kan worden gebruikt om nieuwe vormen van dementiezorg te introduceren.\n\nInterne communicatie: het management merkt dat medewerkers steeds minder e-mail gebruiken en overstappen op sociale media en clouddiensten. Is dat waar, en wat betekent het voor wie nog wél veel e-mail gebruikt?' },
      { type: 'tekst', titel: 'Hoe je een aanleiding herkent', toetsstof: true,
        tekst: 'Een aanleiding is niet altijd meteen duidelijk. Een goede **eerste briefing** helpt je op weg. Laat de opdrachtgever eerst zijn verhaal vertellen: wat is er gebeurd, met wie, wanneer, waarom? De aanleiding zit in de antwoorden op die vragen. Is hij niet duidelijk, vraag er dan gericht naar, maar pas nadat je de opdrachtgever hebt laten uitpraten.' },
      { type: 'begrippen', titel: 'Kernbegrip', items: [
        { begrip: 'Aanleiding van onderzoek', definitie: 'De reden(en) waarom je een onderzoeksproject start.' }
      ]},
      { type: 'tekst', titel: '3.2 De aanleiding uitschrijven met de 6W-methode', toetsstof: true,
        tekst: 'Een handig hulpmiddel bij het schrijven van de aanleiding is de **6W-methode**. In hoofdstuk 4 kom je deze methode opnieuw tegen bij het opstellen van de centrale vraag. De methode bestaat uit zes vragen die je als onderzoeker over het project stelt. Migchelbrink (2002) introduceerde de formule als de 5xW+H-formule: vijf vragen beginnen met een W, en één met een H.' },
      { type: 'stappen', titel: 'De 6W-methode', items: [
        { titel: 'Wat is het probleem?', tekst: 'Hoe is het gedefinieerd? Is duidelijk wat het inhoudt? Ontbreekt er iets, en zo ja, wat?' },
        { titel: 'Van wie is het probleem?', tekst: 'Of: wie is er verantwoordelijk? Je onderzoekt wie de spelers zijn, oftewel wie erbij betrokken is.' },
        { titel: 'Wanneer is het probleem ontstaan?', tekst: 'Bepaal het tijdstip waarop het probleem voor het eerst optrad.' },
        { titel: 'Waarom is het een probleem?', tekst: 'Probeer de werkelijke reden achter het probleem vast te stellen. Dat betekent bijbedoelingen en verborgen agenda\u2019s uitsluiten.' },
        { titel: 'Waar doet het probleem zich voor?', tekst: 'Zijn sommige aspecten van het probleem belangrijker dan andere? Kun je specifieke probleemgebieden afbakenen?' },
        { titel: 'Wat is de oorzaak van het probleem?', tekst: 'Wat is de reden? Waarom is het onderzoek nodig?' }
      ]},
      { type: 'voorbeeld', titel: 'De 6W-methode toegepast: patiënttevredenheid Mercy Hospital',
        tekst: 'Een groot ziekenhuis laat onderzoek doen naar de tevredenheid van patiënten in de polikliniek, na een aantal klachten in het voorjaar van 2015.\n\n**1. Wat is het probleem?** In hoeverre zijn de patiënten van de polikliniek van Mercy Hospital tevreden over de zorg die ze daar krijgen, en welke suggesties voor verbetering hebben zij?\n**2. Van wie is het probleem?** De patiënten zijn het onderwerp van onderzoek. De aanbevelingen gaan naar het ziekenhuis: de zorgverleners. Zij zijn misschien niet het onderwerp, maar wel geïnteresseerd in de resultaten.\n**3. Wanneer ontstond het probleem?** In het voorjaar van 2015.\n**4. Waarom is het een probleem?** Klachten over de service tasten de kwaliteit van de zorg aan, waardoor patiënten elders hulp zoeken. Het ziekenhuis wil zijn klantenbestand niet verliezen.\n**5. Waar doet het probleem zich voor?** In de polikliniek.\n**6. Wat is de oorzaak?** De klachten over de service in de polikliniek.' },
      { type: 'begrippen', titel: 'Kernbegrip', items: [
        { begrip: '6W-methode', definitie: 'Methode om de aanleiding van je onderzoek te bepalen aan de hand van zes vragen: wat, van wie, wanneer, waarom, waar, wat is de oorzaak.' }
      ]},
      { type: 'tekst', titel: '3.3 Gegevens verzamelen tijdens het vooronderzoek', toetsstof: true,
        tekst: 'Centrale vragen worden meestal breed geformuleerd: "onderzoek naar ziekteverzuim", "klanttevredenheidsonderzoek", "onderzoek naar interne communicatie van een bedrijf". De eerste stap is dat je jezelf inleest in het onderwerp en de vraaggebieden zo goed mogelijk afbakent. Je checkt ook of er al iets over is gepubliceerd, en of er modellen zijn die mogelijk oplossingen bieden (zie hoofdstuk 4 en 5). Kortom: je verzamelt informatie. Deze fase heet **vooronderzoek**.' },
      { type: 'tekst', titel: 'Vooronderzoek is probleemanalyse', toetsstof: true,
        tekst: 'Er bestaat veel verwarring over de term "vooronderzoek". Wanneer is er sprake van vooronderzoek, en is het nodig? Wanneer eindigt het en begint het hoofdonderzoek? Vooronderzoek vindt uiteraard plaats vóór het hoofdonderzoek. Hoe doe je vooronderzoek?\n\n- Je zoekt achtergrondinformatie over je onderwerp.\n- Je zoekt literatuur over eerder gepresenteerde onderzoeksresultaten.\n- Je verzamelt materiaal door met een paar mensen te praten.\n\nKortom, je verdiept je in het onderwerp en je bakent het af. Vooronderzoek heet daarom ook wel **probleemanalyse**. Soms blijkt tijdens de probleemanalyse dat het probleem (en de aanleiding ervoor) enigszins anders is dan aanvankelijk gedacht. Dat is geen ramp: het probleem kan tijdens de probleemanalyse alsnog helder worden gedefinieerd.' },
      { type: 'voorbeeld', titel: 'Percepties van gezond voedsel',
        tekst: 'In 2009 deed Wageningen Universiteit onderzoek naar de associaties die consumenten hebben tussen gezondheid en biologisch voedsel. Tijdens het vooronderzoek werd duidelijk dat mensen voor biologisch voedsel kiezen omdat ze het als een gezond alternatief beschouwen. Wat uit dit vooronderzoek niet duidelijk werd, is **waarom** mensen het precies gezond vinden en welke associaties zij daarbij hebben. Eten ze biologisch omdat ze het schoner vinden, of omdat ze denken dat het gezonde stoffen bevat zoals antioxidanten en vitamines? Dat werd de eigenlijke reden voor het onderzoek, waaraan ruim 500 consumenten van biologisch voedsel deelnamen.' },
      { type: 'begrippen', titel: 'Kernbegrip', items: [
        { begrip: 'Vooronderzoek', definitie: 'Onderzoeksfase waarin je informatie verzamelt over het onderzoeksonderwerp. Ook wel probleemanalyse genoemd.' }
      ]},
      { type: 'tekst', titel: 'Waar zoek je informatie?', toetsstof: true,
        tekst: 'Informatie wordt gedurende het hele onderzoeksproject verzameld: als onderdeel van je vooronderzoek als je literatuuronderzoek doet, en steevast tijdens de tweede fase van je onderzoek.\n\nDe eerste plek om te zoeken is het **archief of documentatiecentrum van de opdrachtgever**. Daar vind je documenten die de reden voor het onderzoek verduidelijken, zoals notulen van vergaderingen, financiële overzichten, organogrammen en beleidsplannen.' }
    ]
  },
  {
    id: 'toepassen', titel: 'Toepassen',
    blokken: [
      { type: 'stappen', titel: 'Van signaal naar onderzoekbare aanleiding', items: [
        { titel: 'Laat de opdrachtgever vertellen', tekst: 'Vraag niet meteen door. Laat eerst het hele verhaal komen: wat is er gebeurd, met wie, wanneer, waarom.' },
        { titel: 'Loop de 6W-vragen langs', tekst: 'Wat, van wie, wanneer, waarom, waar, wat is de oorzaak. Schrijf bij elke vraag een kort antwoord op, ook als je het antwoord nog voorlopig vindt.' },
        { titel: 'Bepaal of het kennis- of praktijkvraag is (of beide)', tekst: 'Wil de opdrachtgever vooral weten hoe iets werkt, of vooral wat hij eraan kan doen? Vaak is het allebei.' },
        { titel: 'Start het vooronderzoek', tekst: 'Zoek in het archief van de opdrachtgever, zoek naar bestaande literatuur en modellen, en spreek een paar mensen. Doel: het probleem scherper krijgen, niet meteen de vragenlijst schrijven.' },
        { titel: 'Herzie de aanleiding zo nodig', tekst: 'Blijkt tijdens het vooronderzoek dat het probleem anders ligt dan gedacht? Pas de aanleiding aan. Dat hoort bij een goede probleemanalyse.' }
      ]},
      { type: 'oefening', id: 'ch3-oef-1', niveau: 'basis',
        vraag: 'Een gemeente merkt dat het aantal meldingen van overlast in het centrum sinds de zomer flink is gestegen. Beantwoord de 6W-vragen voor deze casus.',
        antwoord: '1. Wat is het probleem? Een toename van meldingen van overlast in het centrum sinds de zomer. 2. Van wie is het probleem? Bewoners en ondernemers in het centrum als melders; de gemeente als verantwoordelijke voor de openbare orde. 3. Wanneer is het ontstaan? Sinds de zomer van dit jaar. 4. Waarom is het een probleem? Overlast tast de leefbaarheid en het ondernemersklimaat aan, en de gemeente wil escalatie voorkomen. 5. Waar doet het zich voor? In het centrum, mogelijk op specifieke pleinen of straten. 6. Wat is de oorzaak? Nog niet bekend; dat is precies waarom onderzoek nodig is.' },
      { type: 'oefening', id: 'ch3-oef-2', niveau: 'gevorderd',
        vraag: 'Leg uit waarom vooronderzoek ook wel probleemanalyse wordt genoemd, en waarom het geen probleem is als de aanleiding tijdens het vooronderzoek verandert.',
        antwoord: 'Vooronderzoek bestaat uit het zoeken naar achtergrondinformatie, literatuur en gesprekken met betrokkenen. Al die activiteiten zijn erop gericht het probleem scherper te krijgen: je analyseert het probleem voordat je het hoofdonderzoek start. Daarom heet deze fase ook probleemanalyse. Het is geen probleem als de aanleiding tijdens die analyse verandert, omdat het hele doel van vooronderzoek is om je eerste, vaak grove beeld van de situatie te toetsen en aan te scherpen. Het voorbeeld van het onderzoek naar biologisch voedsel laat dat zien: pas tijdens het vooronderzoek werd duidelijk dat niet de vraag óf mensen het gezond vinden interessant was, maar waaróm. Een aanleiding bijstellen op basis van vooronderzoek is dus een teken dat de probleemanalyse goed werkt, niet dat er iets misging.' }
    ]
  },
  {
    id: 'checken', titel: 'Checken',
    blokken: [
      { type: 'quiz', titel: 'Check jezelf', vragen: [
        { vraag: 'Wat is de aanleiding van onderzoek?',
          opties: ['De onderzoeksvraag', 'De reden(en) om een onderzoeksproject te starten', 'Het antwoord op het onderzoek', 'De doelgroep van het onderzoek'],
          juist: 1, uitleg: 'Zonder aanleiding heeft onderzoek geen zin: er moet een verschil zijn tussen de aangetroffen en de gewenste situatie.' },
        { vraag: 'Wie introduceerde de 5xW+H-formule waarop de 6W-methode is gebaseerd?',
          opties: ['Verhoeven', 'Migchelbrink', 'Verschuren en Doorewaard', 'Kahneman'],
          juist: 1, uitleg: 'Migchelbrink (2002) gebruikte deze formule bij probleemanalyse en -afbakening.' },
        { vraag: 'Welke vraag hoort niet bij de 6W-methode?',
          opties: ['Wat is het probleem?', 'Van wie is het probleem?', 'Hoe meet ik het probleem?', 'Wat is de oorzaak van het probleem?'],
          juist: 2, uitleg: 'De 6W-methode gaat over het probleem zelf begrijpen, niet over meten. Dat laatste heet operationaliseren en komt later aan bod.' },
        { vraag: 'Hoe wordt vooronderzoek ook wel genoemd?',
          opties: ['Hoofdonderzoek', 'Probleemanalyse', 'Operationalisering', 'Datacollectie'],
          juist: 1, uitleg: 'Tijdens het vooronderzoek verdiep je je in het onderwerp en bepaal je de afbakening ervan.' },
        { vraag: 'Waar zoek je als eerste naar informatie tijdens het vooronderzoek?',
          opties: ['Op sociale media', 'In het archief of documentatiecentrum van de opdrachtgever', 'Bij de concurrent', 'In de krant'],
          juist: 1, uitleg: 'Daar vind je bijvoorbeeld notulen, financiële overzichten, organogrammen en beleidsplannen die de aanleiding verduidelijken.' }
      ]},
      { type: 'bronnen', items: [
        { apa: 'Verhoeven, N. (2019). Doing Research: The Hows and Whys of Applied Research (Ch. 3). Boom uitgevers.' }
      ]},
      { type: 'preview', titel: 'Van aanleiding naar centrale vraag', vakId: 'demystifying-research-methods', lesId: 'ch4',
        tekst: 'Nu je weet hoe je een aanleiding herkent en uitschrijft, is de volgende stap het formuleren van een goede centrale vraag en doelstelling.',
        punten: ['De 6W-methode opnieuw gebruiken, nu om de vraag te formuleren', 'Tien criteria voor een goede centrale vraag', 'Deelvragen: nuttig of noodzakelijk?'] }
    ]
  }
];

/* ============================================================
   HOOFDSTUK 4 — De centrale vraag en doelstelling
   ============================================================ */

LESSTOF['demystifying-research-methods/ch4'] = [
  {
    id: 'voor', titel: 'Voorbereiding',
    blokken: [
      { type: 'leerdoelen', items: [
        'Een goede centrale vraag formuleren met behulp van de juiste vragen en (mogelijke) deelvragen',
        'Een goede doelstelling formuleren',
        'De tien criteria voor een goede centrale vraag toepassen',
        'Uitleggen wanneer je kiest voor een vraag en wanneer voor een hypothese',
        'De valkuil van substitutie van Kahneman herkennen bij het formuleren van vragen'
      ]},
      { type: 'uitleg', titel: 'Waar dit hoofdstuk over gaat',
        tekst: 'Zodra je de aanleiding voor je onderzoek hebt geformuleerd, weet je waarom onderzoek nodig is. Maar je hebt nog geen helder beeld van de **hoofdvraag** en het **doel** van je onderzoek. Dat is waar dit hoofdstuk (Verhoeven, hoofdstuk 4) over gaat, aangevuld met twee skill sheets van Van Tulder (A14 en A15) die specifiek over het kiezen en formuleren van de juiste onderzoeksvraag gaan.\n\nDe centrale vraag en de doelstelling worden samen ook wel de **probleemstelling** genoemd.' }
    ]
  },
  {
    id: 'kern', titel: 'Kernstof',
    blokken: [
      { type: 'tekst', titel: '4.1 De centrale vraag stellen', toetsstof: true,
        tekst: 'Het formuleren van de centrale vraag is het belangrijkste aspect van een onderzoeksproject. Zonder een goede probleemstelling is je onderzoeksproject een **"ongeleid projectiel"**: je hebt geen idee welke richting het op moet. Je kunt geen deugdelijke conclusies trekken, laat staan de juiste aanbevelingen doen.\n\nGoed onderzoek gaat niet zozeer over het geven van de juiste antwoorden, maar vooral over het stellen van de **juiste vragen**. Daarom moet je veel aandacht besteden aan het formuleren van de centrale vraag.\n\nJe bedenkt de centrale vraag niet altijd zelf: in toegepast onderzoek presenteert de opdrachtgever hem vaak al. Maar jij kunt hem helpen die vraag correct te formuleren, zodat je hem ook goed kunt beantwoorden.' },
      { type: 'tekst', titel: 'Terminologie', toetsstof: true,
        tekst: 'Bij het definiëren van de kernvraag gebruiken onderzoekers verschillende termen: centrale vraag, probleemstelling, research question, hoofdvraag. Dit boek werkt met:\n\n**Centrale vraag** — de hoofdvraag die je met je onderzoek wilt beantwoorden.\n**Doelstelling** — het doel, de functie van het onderzoek, voor jou als onderzoeker en voor de organisatie of opdrachtgever.\n\n**Centrale vraag + Doelstelling = Probleemstelling.**\n\nDe probleemstelling is de kernvraag (of hoofdvraag) waar het onderzoek antwoord op geeft. Tijdens het onderzoek stel je meer vragen dan alleen de hoofdvraag: vragen over de inhoud, het ontwerp, de analyse en de rapportage. Voor die laatste vragen gebruik je niet de term "centrale vraag". Een centrale vraag kan verschillende **deelvragen** bevatten die het probleem verduidelijken. Dat zijn een tussenstap richting het onderzoek. Vragen die je tijdens de analyse beantwoordt, heten **analysevragen**.' },
      { type: 'begrippen', titel: 'Kernbegrippen', items: [
        { begrip: 'Centrale vraag', definitie: 'De hoofdvraag die je met je onderzoek beoogt te beantwoorden.' },
        { begrip: 'Doelstelling', definitie: 'Het doel, de functie van het onderzoek, voor de onderzoeker en de organisatie of opdrachtgever.' },
        { begrip: 'Deelvragen', definitie: 'Vragen die je gebruikt om de centrale vraag uit te werken.' },
        { begrip: 'Analysevragen', definitie: 'Specifieke beoordelingsvragen die je beantwoordt tijdens je analyse.' }
      ]},
      { type: 'tekst', titel: '4.1.1 De 6W-methode herhaald', toetsstof: true,
        tekst: 'Het klinkt zo simpel: formuleer de centrale vraag, oftewel de hoofdvraag van je onderzoek. Maar zo eenvoudig is het niet. Die vraag moet alles omvatten, je onderzoek moet hem kunnen beantwoorden, de opdrachtgever moet hem kunnen onderschrijven, en hij moet aan de eisen van je studie voldoen.\n\nDe 6W-methode uit hoofdstuk 3 kun je hier opnieuw gebruiken, nu voor het formuleren van de centrale vraag:\n\n1. Begin met vraag 6: het antwoord is de reden voor je onderzoek.\n2. Ga dan naar vraag 1: daar vind je het antwoord op de vraag wat precies de situatie is die je onderzoekt. Dit is waar je de basis voor je centrale vraag vindt.\n3. Beantwoord daarna vraag 2 tot en met 5: die helpen je het probleem compleet te maken.' },
      { type: 'voorbeeld', titel: 'De 6W-methode uitgewerkt: excellentie op middelbare scholen',
        tekst: 'Momenteel gaat veel aandacht uit naar excellente leerlingen op middelbare scholen, die steeds vaker apart worden onderwezen. Stel je doet onderzoek naar deze excellente leerlingen.\n\n1. **Wat:** achterhalen wat excellente leerlingen motiveert om te studeren.\n2. **Wie:** excellente leerlingen op middelbare scholen.\n3. **Wanneer:** sinds de invoering van speciale programma\u2019s op middelbare scholen.\n4. **Waarom:** zonder de juiste motivatie hebben leerlingen de verkeerde houding en missen ze creativiteit, wat tot lagere cijfers leidt.\n5. **Waar:** beperkt tot de speciale excellentieprogramma\u2019s.\n6. **Wat is de reden:** de programma\u2019s draaien al een paar jaar; het is tijd voor evaluatieonderzoek naar de impact op motivatie, via houding en creativiteit.\n\nDe centrale vraag wordt dan: welk effect hebben excellentieprogramma\u2019s op studiemotivatie, creativiteit en leerhouding, en daarmee op de studieresultaten van excellente leerlingen in het voortgezet onderwijs?' },
      { type: 'waarschuwing', titel: 'Deelvragen zijn geen enquêtevragen',
        tekst: 'Deelvragen kun je niet direct gebruiken in een vragenlijst of interview; ze zijn daar te abstract of te breed voor. Om dat wel te kunnen, moet je abstracte begrippen omzetten naar meetbare begrippen, oftewel naar vragen voor een enquête. Dat heet **operationalisering** en komt in een later hoofdstuk aan bod.' },
      { type: 'tekst', titel: '4.1.2 Kenmerken van de centrale vraag', toetsstof: true,
        tekst: 'Of je nu theoretische vragen oplost met fundamenteel onderzoek of praktijkvragen aanpakt met toegepast onderzoek: de centrale vraag omvat altijd de belangrijkste vraag die je als onderzoeker uiteindelijk wilt weten en kunnen beantwoorden aan het eind van je onderzoek.' },
      { type: 'tabel', titel: 'Tabel: soorten centrale vragen', toetsstof: true,
        kop: ['Type vraag', 'Voorbeeld'],
        rijen: [
          ['Beschrijvend', 'Welke stages kiezen technische studenten aan hogescholen? Zijn er verschillen tussen instellingen?'],
          ['Definiërend', 'Wat is het profiel van bezoekers aan de Hermitage in Sint-Petersburg?'],
          ['Verklarend', 'Waarom lezen middelbare scholieren minder boeken?'],
          ['Voorspellend', 'Welke ontwikkelingen op het gebied van drones worden de komende vijf jaar verwacht?'],
          ['Vergelijkend', 'Wat is het verband tussen eetgewoonten en gezondheid? Is er een verschil tussen lager en hoger opgeleiden?'],
          ['Evaluerend', 'Hoe beoordelen burgers de dienstverlening van de gemeente?'],
          ['Voorschrijvend', 'Welke verbetervoorstellen kunnen de kwaliteit van de dienstverlening bij een café verbeteren?'],
          ['Trends volgend', 'Welke trends zijn te zien in koopgedrag bij webshops sinds 2000?'],
          ['Ontwerpend', 'Hoe kan een gebouw worden aangepast aan de voorwaarden voor een gezonde werkomgeving?']
        ],
        noot: 'Het type centrale vraag bepaalt vaak grotendeels hoe je je data gaat verzamelen.' },
      { type: 'tekst', titel: 'Criteria voor de centrale vraag', toetsstof: true,
        tekst: 'Een goede centrale vraag voldoet aan meerdere criteria. Hieronder staat een checklist die je helpt bij het formuleren van je centrale vraag.' },
      { type: 'stappen', titel: 'Tien criteria voor een goede centrale vraag', items: [
        { titel: '1. Is het een heldere vraag met een vraagteken?', tekst: 'Formuleer hem echt als vraag, niet als onderwerp of stelling.' },
        { titel: '2. Is hij verbonden met de doelstelling?', tekst: 'Vraag en doel horen onlosmakelijk samen. "Hoe tevreden zijn klanten van supermarkt X met het assortiment?" hoort bij het doel om op basis van de bevindingen aanbevelingen te doen over uitbreiding of aanpassing van het assortiment.' },
        { titel: '3. Is helder welke kennis nodig is?', tekst: 'Welke aspecten zijn belangrijk: gedrag, motieven, feiten, meningen of percepties van mensen? En vraagt dat om kwalitatieve of kwantitatieve methoden?' },
        { titel: '4. Is helder over wie het gaat?', tekst: 'Van wie heeft de onderzoeker informatie nodig, oftewel welk domein dekt de centrale vraag?' },
        { titel: '5. Is de tijdsperiode duidelijk?', tekst: 'Soms ontbreekt een specifieke periode, en dat is niet per se een gebrek. Als het onderzoek in het heden plaatsvindt en niet wordt herhaald, is dat cross-sectioneel onderzoek en hoeft er geen periode genoemd te worden.' },
        { titel: '6. Zijn er deelvragen gesteld?', tekst: 'Deelvragen splitsen de centrale vraag in behapbare stukken.' },
        { titel: '7. Is specificatie in analysevragen mogelijk?', tekst: 'Kun je uit de centrale vraag (en deelvragen) analysevragen afleiden die je via analyse kunt beantwoorden?' },
        { titel: '8. Is er een relatie met de aannames over de resultaten?', tekst: 'De centrale vraag is een vraag over een specifieke situatie of bijvoorbeeld een effect. De aanname is dat je de vraag alleen stelt als je een verwachting hebt over de uitkomst.' },
        { titel: '9. Is de centrale vraag compleet?', tekst: 'Een veelgemaakte fout: de formulering is onvolledig. "Wat zijn de redenen voor het hoge ziekteverzuim bij personeel van Ludlow College in Hartford?" kun je pas beantwoorden nadat je eerst hebt onderzocht of er wel sprake is van hoog verzuim door ziekte. Dan pas kun je onderzoeken waarom. Er is dan een deelvraag nodig.' },
        { titel: '10. Zijn vraag en doelstelling onafhankelijk en objectief?', tekst: 'Formuleer als onafhankelijke, objectieve onderzoeker, los van de motieven van de opdrachtgever. Als een bank onderzoek naar interne communicatie laat doen met als eigenlijk doel het ontslaan van lastige medewerkers, dan loopt je onderzoek het risico voor dat doel te worden misbruikt. Een onbevooroordeelde centrale vraag kan dat voorkomen.' }
      ]},
      { type: 'voorbeeld', titel: 'Communicatie in het ziekenhuis',
        tekst: 'Communicatie in een ziekenhuis is cruciaal. Patiënten en hun familie moeten begrijpen wat de stand van hun gezondheid is en welke behandeling wordt voorgesteld. Dat is nog uitdagender als patiënten niet dezelfde taal spreken als hun behandelaars, zoals vaak het geval is bij migranten. In 2010 onderzocht de Universiteit Utrecht hoe de communicatie met anderstaligen verloopt. De centrale vraag was: welke communicatie-interventies gebruiken Nederlandse verpleegkundigen in hun contact met patiënten uit etnische minderheden die slecht Nederlands spreken, en wat zijn hun motieven daarvoor?' },
      { type: 'tekst', titel: '4.2 Deelvragen: nuttig of noodzakelijk?', toetsstof: true,
        tekst: 'Vaak bestaat de centrale vraag uit één hoofdzin. Maar soms wil je eerst trends vaststellen en daarna de redenen ervoor achterhalen, waardoor je vraag lastig leesbaar wordt als je alles in één zin probeert te vangen.\n\nEen oplossing is meerdere vragen stellen in plaats van één lange. Een andere oplossing: een brede, algemene centrale vraag met daarna een aantal deelvragen die aspecten verduidelijken (doelgroep, eenheden, onderwerpen, tijdschema).\n\nDeelvragen helpen je het probleem uit te werken, geven je een centrale vraag die goed te onderzoeken is, en bakenen het onderzoek verder af, wat de haalbaarheid verhoogt. Je kunt elke deelvraag apart beantwoorden, bijvoorbeeld door een deelstudie op te zetten.' },
      { type: 'tekst', titel: 'Twee manieren om tot deelvragen te komen', toetsstof: true,
        tekst: '**Ontrafelen en hergroeperen** (Verschuren & Doorewaard). Je splitst je centrale vraag in een aantal eenvoudige begrippen. Die begrippen zijn het onderwerp van de deelvragen die je moet formuleren. Een handig instrument daarvoor is een **boomdiagram**: je splitst het te ontleden begrip in stappen op basis van een aantal vragen over de aard van de centrale vraag, bijvoorbeeld: onder wie, waarom, waarover, wanneer, hoe.\n\n**De 6W-methode.** Ook hier kun je de zes vragen gebruiken om tot goede deelvragen te komen.' },
      { type: 'tekst', titel: 'Criteria voor deelvragen', toetsstof: true,
        tekst: 'Ongeacht de gebruikte methode moeten deelvragen aan een paar criteria voldoen:\n\n- deelvragen zijn **relevant**, dus geen gewauwel;\n- deelvragen **overlappen niet**, maar vullen elkaar aan;\n- deelvragen **specificeren de begrippen** in de centrale vraag, bijvoorbeeld als vergelijking of als effect.' },
      { type: 'voorbeeld', titel: 'Twee voorbeelden van deelvragen',
        tekst: '**De mooie kanalen van Venetië.** Centrale vraag: hoe beoordelen buitenlandse toeristen de Venetiaanse kanalen als toeristische attractie? Deelvragen: wat weten bezoekers van Venetië over de Venetiaanse kanalen? Welke soorten toeristen bezoeken Venetië het vaakst? Hoe beoordelen buitenlandse toeristen de sfeer van de Venetiaanse kanalen?\n\n**Voortijdig schoolverlaten.** Een onderwijsbestuur onderscheidt traditionele risicofactoren (cognitieve aspecten, thuisproblemen, leerproblemen) en verborgen risicofactoren (motivatieproblemen, verkeerde studiekeuze). Centrale vraag: wat is bekend over de verborgen factoren die voortijdig schoolverlaten beïnvloeden? Deelvragen: hoe kan de groep die gevoelig is voor verborgen factoren worden herkend? Wat doen leerlingen die gevoelig zijn voor verborgen factoren? Welke maatregelen zijn genomen om voortijdig schoolverlaten te voorkomen, en wat zijn de belangrijkste knelpunten bij die maatregelen?' },
      { type: 'tekst', titel: '4.3 De doelstelling formuleren', toetsstof: true,
        tekst: 'Wat is het doel van je onderzoek? Waar dient het voor? Wat hoop je te bereiken met de onderzoeksresultaten? Naast die overwegingen heeft onderzoek ook heel praktische doelen, meestal geformuleerd vanuit het perspectief van de opdrachtgever. Een goed geformuleerde doelstelling herken je aan de volgende kenmerken:\n\n- heeft een **kerndefinitie** (niet te specifiek);\n- vertelt je welk **type onderzoek** het is: kwalitatief of kwantitatief;\n- geeft de **praktijkrelevantie** aan;\n- vermeldt de **doelen en eisen van de opdrachtgever**.' },
      { type: 'voorbeeld', titel: 'De Atlantische kustlijn',
        tekst: 'Er liggen veel plannen klaar om toeristische voorzieningen langs de Atlantische kustlijn te ontwikkelen, zoals vakantiehuizen en pretparken voor gezinnen. Niet iedereen is het daarmee eens: voor- en tegenstanders botsen voortdurend. Stel dat de autoriteiten in Maine je vragen de haalbaarheid van het HomeAway-clusterproject te onderzoeken. Je doelstelling zou kunnen zijn: door middel van kwalitatief onderzoek de kansen en beperkingen van de plannen voor de HomeAway-clusterontwikkeling vanuit verschillende perspectieven (bewoners, bedrijfsleven, natuurbehoud, de economie van Maine en de politiek) onderzoeken, zodat je aanbevelingen kunt doen over de haalbaarheid van de plannen. Geen sinecure.\n\nSoms is de doelstelling al duidelijk vanuit de centrale vraag zelf. Vraag je bijvoorbeeld om aanbevelingen, zoals "hoe kan de service in het bedrijfsrestaurant worden verbeterd?", dan zit het doel al in de vraag: de service verbeteren.' },
      { type: 'tekst', titel: 'A15 — Vraag of hypothese kiezen', toetsstof: true,
        tekst: 'Van Tulder (skill sheet A15) legt uit dat je bij het ontwerpen van een onderzoeksvraag twee beslissingen moet nemen: (A) formuleer je een vraag of een hypothese, en (B) stel je één enkele vraag of meerdere (deel)vragen?\n\n**Vraag versus hypothese.** Vragen zijn vaak flexibel en nodigen uit tot algemene antwoorden, terwijl hypotheses restrictiever zijn en je dwingen preciezer te antwoorden. Vragen zijn geschikter in de vroegere fasen van je onderzoek, of als je nog niet veel over een onderwerp weet. Hypotheses zijn vooral nuttig in latere fasen van een onderzoeksproject, nadat je je theoretisch kader hebt afgerond en beter bekend bent met het onderwerp.\n\nVermijd algemene en beschrijvende vragen of hypotheses. De vraag "Welke halfgeleiderstrategie voert het management van Philips?" specificeert het onderzoeksdoel maar vaag en nodigt uit tot een "interpretatieve beschrijving": zoveel mogelijk informatie opschrijven die je over een onderwerp kunt vinden. Een betere vraag: "Hoe verhoudt de strategie van Philips op het gebied van halfgeleiders zich tot de strategie van zijn belangrijkste concurrenten?" Nog specifieker: "Halfgeleiders gelden als de kerntechnologie van microelektronica. Waarom verkocht Philips zijn halfgeleiderdivisie in 2006?"' },
      { type: 'citaat',
        tekst: 'Keep it as simple as possible, but not simpler.',
        bron: 'Albert Einstein, geciteerd in Van Tulder, skill sheet A15' },
      { type: 'tekst', titel: 'De valkuil van falsificatie en de onderzoeksparadox', toetsstof: true,
        tekst: 'Hypotheses kunnen ook worden geformuleerd om **falsificatie** te vergemakkelijken: een principe uit vooral de natuurwetenschappen, waarbij je een theorie verwerpt zodra je één voorbeeld vindt dat de hypothese weerlegt. In de sociale wetenschappen is dit principe niet altijd toepasbaar. Je krijgt te maken met een paradox door het gebrek aan afstand tussen onderzoeksobject en onderzoekssubject: hoe overtuigender je een voorspelling presenteert, hoe groter de kans dat je klanten erop reageren en zo de loop van de gebeurtenissen veranderen, waardoor de voorspelling juist niet uitkomt. Paradoxaal genoeg wordt het succes van een sociaal wetenschapper soms afgemeten aan de beperkte voorspellende waarde van zijn of haar theorieën.' },
      { type: 'tekst', titel: 'Tip 1 en tip 2 bij het formuleren van je vraag', toetsstof: true,
        tekst: '**Tip 1:** lees je onderzoeksvraag of hypothese hardop, en vraag jezelf af of je dat in het openbaar zou durven doen. Denk je dat je meteen een antwoord zou kunnen geven? Ben je zelf geïnteresseerd in het antwoord? Twijfel je: heroverweeg dan je vraag of herformuleer hem.\n\n**Tip 2:** gebruik geen lange zinnen in je onderzoeksvraag. Probeer niet alles in één zin te proppen. Maak meerdere zinnen. Gebruik directe, actieve formuleringen. Specificeer: koppel het probleem aan de regio, het land, het bedrijf, de persoon of de tijd waar je onderzoek naar doet. Lees het opnieuw hardop, en als de vraag niet "loopt", splits hem dan in ten minste twee zinnen.' },
      { type: 'tekst', titel: 'De functie van een vragenhiërarchie', toetsstof: true,
        tekst: 'Als je kortere zinnen gebruikt en je onderwerp specificeert in je onderzoeksvraag, eindig je vaak met meerdere vragen in plaats van één enkele. Je eerste vraag moet altijd het basisprobleem benoemen dat tot je onderzoeksproject heeft geleid. Daarna formuleer je subsidiaire vragen die de oorspronkelijke vraag in specifiekere vragen opdelen. Dit heet een **vragenhiërarchie** (Emory & Cooper, 1991). Zo’n hiërarchie loopt doorgaans:\n\n- van algemeen naar specifiek;\n- van meer theoretische naar meer empirische vragen;\n- van vragen die uit secundaire bronnen te beantwoorden zijn naar vragen die primaire data nodig hebben.' },
      { type: 'tekst', titel: 'Tip 3 en tip 4', toetsstof: true,
        tekst: '**Tip 3:** als je je onderzoek baseert op een vragenhiërarchie, stel de vragen dan in een logische volgorde. Kijk als vaste regel eerst naar de theoretische en conceptuele uitwerking van het probleem. Pas daarna kun je verdere beschrijving en analyse afronden. Als je weet welke functie conceptuele en theoretische verheldering heeft vóórdat je met empirisch testen begint, reflecteer dat dan ook in de opbouw van je verslag of scriptie. De volgorde van je vragenhiërarchie is ook de volgorde van je onderzoeksrapport.\n\n**Tip 4:** bedenk een "pakkende titel" die je basisvraag dekt. Dat helpt je aandacht te richten op de kernvraag en motiveert je om het project af te maken. Je onderzoeksvraag en titel moeten minstens één persoon motiveren: jezelf. En als jij gemotiveerd bent door de vraag, motiveert dat waarschijnlijk ook anderen. Maak je leidende vraag zo helder en simpel dat je hem makkelijk kunt reproduceren wanneer dat nodig is.' },
      { type: 'tekst', titel: 'A14 — Zes suggesties om verdwaling te voorkomen', toetsstof: true,
        tekst: 'Van Tulder (skill sheet A14) waarschuwt: als je zonder heldere vraag begint, vooral wanneer je een vast model toepast in de praktijk, loop je het risico een **"oplossing op zoek naar een probleem"** te formuleren. Consultants en econometristen krijgen dat verwijt vaak: ze vertrekken vanuit geïdealiseerde of sterk geformaliseerde modellen. Als de echte wereld niet volgens het model gedraagt, wordt dat behandeld als een afwijking van het ideaal in plaats van als een teken van de werkelijkheid. Om die valkuil te vermijden, geeft hij zes suggesties.' },
      { type: 'stappen', titel: 'Zes suggesties bij het kiezen van een goede vraag', items: [
        { titel: '1. Wat wil ik weten versus wat kan ik weten', tekst: 'Je zit altijd tussen twee uitersten. Begin als vuistregel met de meer kwalitatieve vraag: wat wil ik weten? Pas als dat helder is, overweeg je welke (kwantitatieve) data je kunnen helpen de hoofdvraag te beantwoorden.' },
        { titel: '2. Houd rekening met je tijdsbestek', tekst: 'Hoe korter de tijd die je hebt: hoe meer je eerste vraag ook je laatste vraag moet zijn; hoe bescheidener je onderzoeksvraag moet zijn; hoe meer je moet voortbouwen op wat anderen als "goede vragen voor verder onderzoek" hebben aangedragen.' },
        { titel: '3. Zorg dat je kritisch en creatief kunt zijn', tekst: 'Een onderzoeksproject dat niet de moeite waard is om goed te doen, lijdt altijd aan een gebrek aan maatschappelijke relevantie. Doorloop daarbij vijf kritische W-vragen: wat is het probleem (met oorzaken en gevolgen); waarom is dit een relevant probleem; wie heeft er iets mee te maken; waar bestaat het probleem; wanneer doet het probleem zich specifiek voor.' },
        { titel: '4. Stel een lijst kernwoorden op', tekst: 'De meeste kernwoorden komen terug in je onderzoeksvraag. Ze helpen je te focussen op de belangrijkste onderwerpen en maken het makkelijker relevante bronnen te vinden in bibliotheken en databases.' },
        { titel: '5. Bepaal vooraf je toegevoegde waarde', tekst: 'De praktische relevantie van een onderzoeksproject zit vaak in één samenvatting, één tabel, één figuur of één redeneerlijn. Wees bescheiden, en specificeer vooraf wat je in elk geval wilt opleveren: een overzicht, een tabel, een grafiek, een redeneerlijn, of iets anders. Dat voorkomt intellectuele overstretch.' },
        { titel: '6. Bedenk wat voor onderzoeksvraag jij zelf graag leest', tekst: 'Kijk naar ander onderzoek. Welke vraag sprak je aan: een die je aan het denken zette, een die je zelf al kon beantwoorden, een die aan een theoretisch probleem raakte, of een die een praktisch probleem van individuele actoren raakte?' }
      ]},
      { type: 'waarschuwing', titel: 'Pas op voor substitutie (Kahneman)',
        tekst: 'Nobelprijswinnaar Daniel Kahneman (2011) waarschuwt voor een verraderlijke denkfout: het **substitutieprincipe**. Als er niet snel een bevredigend antwoord op een moeilijke vraag wordt gevonden, zoekt je snelle, intuïtieve brein (systeem 1) een verwante vraag die makkelijker is, en beantwoordt die in plaats daarvan. Die vervangende vraag vraagt minder diep nadenken (systeem 2), maar kan volledig irrelevant zijn voor de eigenlijke vraag.\n\nMakkelijke vragen zijn niet per se zinloos, maar kunnen volstrekt ontoereikend zijn, zeker vanuit onderzoeksoogpunt.' },
      { type: 'tabel', titel: 'Voorbeelden van substitutie (Kahneman)',
        kop: ['Doelvraag', 'Wordt vervangen door'],
        rijen: [
          ['Hoe tevreden ben je tegenwoordig met je leven?', 'Wat is mijn stemming op dit moment?'],
          ['Hoe populair zal de president over zes maanden zijn?', 'Hoe populair is de president op dit moment?'],
          ['Hoe zouden financiële adviseurs die ouderen misleiden gestraft moeten worden?', 'Hoeveel boosheid voel ik als ik denk aan financiële roofdieren?'],
          ['Deze vrouw doet mee aan de voorverkiezing. Hoe ver zal ze komen in de politiek?', 'Ziet deze vrouw eruit als een politieke winnaar?']
        ] }
    ]
  },
  {
    id: 'toepassen', titel: 'Toepassen',
    blokken: [
      { type: 'stappen', titel: 'Een centrale vraag opstellen en toetsen', items: [
        { titel: 'Formuleer een eerste versie met de 6W-methode', tekst: 'Begin bij vraag 6 (de reden), ga dan naar vraag 1 (wat is de situatie), en werk vraag 2 tot en met 5 verder uit.' },
        { titel: 'Kies vraag of hypothese', tekst: 'Weet je nog weinig van het onderwerp of ben je in een vroege onderzoeksfase? Kies een vraag. Heb je al een theoretisch kader en een goed onderbouwde verwachting? Overweeg een hypothese.' },
        { titel: 'Loop de tien criteria van Verhoeven langs', tekst: 'Vraagteken, doelstelling, benodigde kennis, doelgroep, tijdsperiode, deelvragen, analysevragen, aannames, volledigheid, onafhankelijkheid.' },
        { titel: 'Lees hem hardop (tip 1 en 2 van Van Tulder)', tekst: 'Zou je hem in het openbaar durven stellen? Loopt de zin? Is hij kort genoeg? Splits zo nodig in meerdere zinnen.' },
        { titel: 'Check op substitutie', tekst: 'Heb je de echte, moeilijke vraag beantwoord, of ben je stiekem overgestapt op een makkelijker verwante vraag?' },
        { titel: 'Formuleer pas daarna de deelvragen', tekst: 'Gebruik ontrafelen-en-hergroeperen of de 6W-methode. Zorg dat ze relevant zijn, niet overlappen, en de centrale vraag specificeren.' },
        { titel: 'Formuleer de doelstelling', tekst: 'Kerndefinitie, type onderzoek, praktijkrelevantie, doelen van de opdrachtgever.' }
      ]},
      { type: 'oefening', id: 'ch4-oef-1', niveau: 'basis',
        vraag: 'Een gemeente wil weten "hoe het zit met de jeugdwerkloosheid". Leg aan de hand van de tien criteria uit waarom dit nog geen goede centrale vraag is, en herschrijf hem.',
        antwoord: 'De vraag voldoet op meerdere punten niet. Er staat geen vraagteken en geen scherp geformuleerde vraag (criterium 1). Onduidelijk is welke kennis nodig is: gaat het om cijfers (kwantitatief) of om ervaringen van jongeren (kwalitatief)? (criterium 3). Ook is niet duidelijk over wie het precies gaat: alle jongeren in de gemeente, een bepaalde leeftijdsgroep, of een specifieke wijk? (criterium 4), en ontbreekt een tijdsperiode (criterium 5). Een betere centrale vraag, gekoppeld aan een doelstelling: "Hoe heeft de jeugdwerkloosheid onder 16- tot 27-jarigen in gemeente X zich de afgelopen vijf jaar ontwikkeld, en welke factoren verklaren deze ontwikkeling?" met als doelstelling: door middel van kwantitatief onderzoek de ontwikkeling van jeugdwerkloosheid in kaart brengen, zodat de gemeente gerichte maatregelen kan nemen.' },
      { type: 'oefening', id: 'ch4-oef-2', niveau: 'gevorderd',
        vraag: 'Leg met het substitutieprincipe van Kahneman uit waarom de vraag "Hoe tevreden zijn medewerkers over hun leidinggevende?" risico loopt op een vertekend antwoord, en hoe je dat risico met een goede centrale vraag kunt beperken.',
        antwoord: 'Volgens Kahneman vervangt het snelle, intuïtieve brein een moeilijke vraag vaak door een makkelijkere verwante vraag als er niet snel een goed antwoord voorhanden is. "Hoe tevreden ben ik over mijn leidinggevende" is een complexe, samengestelde vraag die nadenken over meerdere aspecten vergt: communicatie, aansturing, waardering, eerlijkheid. Een respondent kan die vraag onbewust vervangen door de veel makkelijkere vraag "Hoe voel ik me nu, op dit moment, over mijn werk?", waardoor het antwoord meer over actuele stemming gaat dan over een doordacht oordeel over leiderschap. Je beperkt dit risico door de centrale vraag te specificeren in concrete deelvragen die telkens één aspect bevragen, bijvoorbeeld: hoe beoordelen medewerkers de communicatie van hun leidinggevende, hoe beoordelen zij de erkenning die zij krijgen, en hoe beoordelen zij de besluitvorming? Specifieke, concrete vragen laten minder ruimte voor onbewuste substitutie dan één brede, abstracte vraag.' }
    ]
  },
  {
    id: 'checken', titel: 'Checken',
    blokken: [
      { type: 'quiz', titel: 'Check jezelf', vragen: [
        { vraag: 'Wat is de probleemstelling volgens Verhoeven?',
          opties: ['Alleen de centrale vraag', 'Alleen de doelstelling', 'De centrale vraag plus de doelstelling', 'De aanleiding van het onderzoek'],
          juist: 2, uitleg: 'Centrale vraag + doelstelling = probleemstelling. Dit is de kernvraag die het hele onderzoek beantwoordt.' },
        { vraag: 'Wanneer gebruik je volgens Van Tulder eerder een hypothese dan een vraag?',
          opties: ['Bij een heel nieuw, onbekend onderwerp', 'In een latere onderzoeksfase, na afronding van het theoretisch kader', 'Alleen bij kwalitatief onderzoek', 'Nooit; hypotheses horen niet bij onderzoek'],
          juist: 1, uitleg: 'Vragen passen bij vroege fasen of onbekende onderwerpen; hypotheses zijn preciezer en passen bij een verdere onderzoeksfase.' },
        { vraag: 'Wat is het substitutieprincipe van Kahneman?',
          opties: ['Het vervangen van kwalitatief door kwantitatief onderzoek', 'Het onbewust vervangen van een moeilijke vraag door een makkelijkere, verwante vraag', 'Het vervangen van de centrale vraag door deelvragen', 'Het vervangen van een hypothese door een vraag'],
          juist: 1, uitleg: 'Systeem 1 (snel, intuïtief) grijpt naar een makkelijkere vraag als er niet snel een bevredigend antwoord op de echte vraag is.' },
        { vraag: 'Welke van deze centrale vraag-typen hoort bij "welke ontwikkelingen op het gebied van drones worden de komende vijf jaar verwacht"?',
          opties: ['Beschrijvend', 'Vergelijkend', 'Voorspellend', 'Ontwerpend'],
          juist: 2, uitleg: 'Deze vraag gaat over toekomstige ontwikkelingen en is daarmee voorspellend van aard.' },
        { vraag: 'Waarom moeten deelvragen elkaar aanvullen in plaats van overlappen?',
          opties: ['Om het onderzoek langer te maken', 'Om ervoor te zorgen dat je met de deelvragen samen de centrale vraag dekt zonder onnodig dubbel werk', 'Omdat overlappende vragen verboden zijn door de opdrachtgever', 'Om de doelstelling te kunnen schrappen'],
          juist: 1, uitleg: 'Overlappende deelvragen leveren dubbel werk op zonder extra inzicht; aanvullende deelvragen dekken samen het hele probleem.' },
        { vraag: 'Wat is een vragenhiërarchie (Emory & Cooper)?',
          opties: ['Een lijst met verboden vragen', 'Een opeenvolging van vragen van algemeen naar specifiek en van theoretisch naar empirisch', 'De volgorde waarin je respondenten interviewt', 'Een ranglijst van de belangrijkste onderzoekers'], 
          juist: 1, uitleg: 'De hiërarchie loopt van algemeen naar specifiek, van theoretisch naar empirisch, en van secundaire naar primaire bronnen.' }
      ]},
      { type: 'bronnen', items: [
        { apa: 'Verhoeven, N. (2019). Doing Research: The Hows and Whys of Applied Research (Ch. 4). Boom uitgevers.' },
        { apa: 'Tulder, R. van (2018). Skill Sheets A14 (Choosing Appropriate Questions) & A15 (Formulating the Research Question). Routledge.' },
        { apa: 'Kahneman, D. (2011). Thinking, Fast and Slow. Farrar, Straus and Giroux.' }
      ]},
      { type: 'preview', titel: 'Van vraag naar model', vakId: 'demystifying-research-methods', lesId: 'ch5',
        tekst: 'Nu je een goede centrale vraag kunt formuleren, is de volgende stap het afbakenen van de begrippen daarin en het bouwen van een conceptueel model.',
        punten: ['Concept-as-intended en stipulatieve definities', 'Het conceptueel model in drie onderdelen', 'Causale versus wederkerige relaties'] }
    ]
  }
];

/* ============================================================
   HOOFDSTUK 5 — Begripsafbakening en modelbouw
   ============================================================ */

LESSTOF['demystifying-research-methods/ch5'] = [
  {
    id: 'voor', titel: 'Voorbereiding',
    blokken: [
      { type: 'leerdoelen', items: [
        'De begrippen in je centrale vraag definiëren (5.1)',
        'Aannames formuleren over de verwachte resultaten van je onderzoek (5.2)',
        'Die aannames structureren in een conceptueel model (5.2)',
        'Argumenten voor je aannames onderbouwen met theorieën en modellen uit je vooronderzoek (5.2)'
      ]},
      { type: 'uitleg', titel: 'Waar dit hoofdstuk over gaat',
        tekst: 'In toegepast onderzoek los je vraagstukken op die in de wereld om je heen spelen. Je begint niet bij nul: je kunt goed gebruikmaken van (bestaande) modellen en theorieën en je onderzoek daarop inrichten. Dat is een effectieve en betrouwbare manier van werken.\n\nMaar voordat je dat doet, moet je eerst de **begrippen** in je centrale vraag goed afbakenen. Dat geeft je onderzoeksproject structuur en helderheid. Het laat ook je omgeving, oftewel de stakeholders, zien waar je onderzoek over gaat, en, minstens zo belangrijk, waar het **niet** over gaat.' }
    ]
  },
  {
    id: 'kern', titel: 'Kernstof',
    blokken: [
      { type: 'voorbeeld', titel: 'Eetgewoonten (dieetonderzoek Motivaction)',
        tekst: 'In 2015 onderzocht Motivaction in opdracht van het Voedingscentrum de eetgewoonten van de Nederlandse bevolking (Keuchenius & Van der Lelij, 2015). De nadruk lag op duurzaamheid van eetgewoonten en op voedselverspilling in verschillende sociale klassen. Ze baseerden hun onderzoeksontwerp op het **Mentality Model**, dat is gebaseerd op verschillende typen sociale klassen en groepen in de Nederlandse samenleving. Elke groep heeft eigen waarden, waaraan bepaalde aannames zijn gekoppeld. Specifieke eetgewoonten worden geassocieerd met die waarden.' },
      { type: 'tekst', titel: '5.1 Begripsafbakening', toetsstof: true,
        tekst: 'Zodra het doel en de vraaggebieden van je onderzoek helder zijn, kun je de volgende stap zetten: je verheldert de begrippen die in je centrale vraag worden gebruikt. Je kunt niet zomaar van vraag naar vragenlijst springen! Doe je dat wel, dan loop je het risico op onnauwkeurigheden bij het verzamelen van informatie.\n\nGa je bijvoorbeeld onderzoek doen naar de "lifestyle" van jongeren, dan moet je eerst definiëren wat je met lifestyle bedoelt.' },
      { type: 'voorbeeld', titel: 'Ziekteverzuim (1)',
        tekst: 'Stel je doet onderzoek in een bedrijf naar de vraag: "Hoe kan ziekteverzuim succesvol worden teruggedrongen?" Vanzelfsprekend stel je eerst vast of er een probleem is: hoe hoog is het ziekteverzuim? Vervolgens ga je mensen interviewen met een vragenlijst. Je benadert alle medewerkers die verzuimd hebben: mensen die thuis zijn met griep, net uit het ziekenhuis komen, lijden aan een burn-out, ernstig ziek zijn, of op weg naar een arbeidsongeschiktheidsuitkering. Is dat de juiste aanpak?\n\nHet voorbeeld laat zien dat je respondenten kunt verwarren als je de termen in je vraag niet duidelijk definieert. Die begrippen kunnen op zeer verschillende manieren worden beschreven, vanuit het perspectief van de organisatie én vanuit het perspectief van het personeel.\n\nVanuit de organisatie kun je ziekteverzuim beschrijven als: het totaal aantal ziektedagen per organisatie per jaar; de gemiddelde duur van verzuim per jaar; het totaal aantal werkdagen van personeel gedeeld door al het verzuim; of het percentage van de totale werktijd dat de medewerker afwezig was door ziekte.\n\nVanuit het personeel kun je ziekteverzuim beschrijven als: ziekte door gezondheidsproblemen; ziekte door psychosociale problemen; of ziekte door emotionele problemen.' },
      { type: 'tekst', titel: 'Subjectiviteit en het gevaar van verkeerde vragen', toetsstof: true,
        tekst: 'Een ander aspect is de **subjectiviteit** van de respondenten, omdat sommige mensen sneller geneigd zijn zich ziek te voelen en thuis te blijven dan anderen. Definieer je de begrippen niet goed, dan kom je nergens: je stelt een grote kans op de verkeerde vragen, zoals in het voorbeeld. Je zou niet aan iemand die op het punt staat arbeidsongeschikt te worden verklaard vragen: "Wanneer hoop je weer aan het werk te gaan?"\n\nLet op: je definieert de begrippen, je werkt hier nog geen vragen voor je vragenlijst uit. Je zorgt op dit punt nog niet dat de begrippen "onderzoekbaar" zijn. Dat aspect, **operationalisering**, wordt later behandeld.' },
      { type: 'tekst', titel: 'Concept-as-intended', toetsstof: true,
        tekst: 'Het eerste dat je doet is vaststellen wat je bedoelt wanneer je een specifiek begrip gebruikt (**concept-as-intended**). Het begrip "lifestyle" in jongerenonderzoek wordt bijvoorbeeld beschreven als "de groep waartoe jongeren zichzelf rekenen op het gebied van kleding en muziek" (De Volkskrant, 24 november 2005).\n\nEr zijn meerdere redenen waarom het definiëren van het begrip noodzakelijk is:\n\n- De betekenis van het begrip ligt **vast** en is helder gedurende het hele onderzoek.\n- Je bakent duidelijk de **grenzen** van je onderzoek af: wat je wel en wat je niet van plan bent te onderzoeken (Van Buuren & Hummel, 1997).\n- De afbakening van het begrip bepaalt welke informatie tijdens de dataverzameling moet worden verzameld.\n\nKortom, je bakent het domein van je onderzoeksproject af.' },
      { type: 'begrippen', titel: 'Kernbegrip', items: [
        { begrip: 'Begripsafbakening (concept-as-intended)', definitie: 'Vaststellen wat je bedoelt wanneer je een specifiek begrip gebruikt.' }
      ]},
      { type: 'tekst', titel: 'Stipulatieve definitie', toetsstof: true,
        tekst: 'Hoe kom je tot de juiste definitie, oftewel de meest werkbare definitie voor jouw onderzoek? Bij theoretisch onderzoek zoeken onderzoekers meestal in de wetenschappelijke literatuur. Die definities zijn voor toegepast onderzoek meestal ongeschikt omdat ze te breed zijn. Verschuren en Doorewaard (2010) bevelen daarom zogenoemde **stipulatieve definities** aan: definities die specifiek voor jouw onderzoeksproject gelden. De definitie begint dan met: "In de context van dit onderzoek betekent [begrip] ...".\n\nBelangrijk is dat de definities werkbaar zijn: houd rekening met de drie eerder genoemde redenen om te definiëren. Bedenk ook dat definities niet alleen aangeven wat binnen het begrip valt, maar ook wat erbuiten valt. Met andere woorden: wat valt binnen en wat valt buiten de grenzen van je onderzoek?' },
      { type: 'voorbeeld', titel: 'Ziekteverzuim (2), stipulatief gedefinieerd',
        tekst: 'Ziekteverzuim is een begrip dat voor interpretatie vatbaar is: het is ambigu. Mensen bepalen zelf of ze ziek zijn of niet. Soms zijn ze niet ziek in de strikte zin van het woord (fysiek lijden aan een ziekte). Emotionele en psychologische factoren kunnen een rol spelen bij verzuim. Daarom moet onderscheid worden gemaakt tussen fysieke en psychologische redenen om zich ziek te melden. Hopstaken (1994) verdeelt ziekteverzuim in haar onderzoek in drie typen:\n\n- **wit**: er zijn aantoonbare gezondheidsproblemen;\n- **grijs**: het is niet duidelijk of er aantoonbare gezondheidsproblemen zijn, maar zo voelt het wel;\n- **zwart**: gezondheidsproblemen zijn niet de oorzaak van het verzuim.\n\nOp deze manier geeft Hopstaken op stipulatieve wijze aan wat zij bedoelt met "ziekteverzuim" en "hoog ziekteverzuim".' },
      { type: 'begrippen', titel: 'Kernbegrip', items: [
        { begrip: 'Stipulatieve definitie', definitie: 'Een definitie van een begrip die specifiek voor een bepaald onderzoek geldt.' }
      ]},
      { type: 'tekst', titel: '5.2 Modellen en aannames', toetsstof: true,
        tekst: 'Nadat je de begrippen hebt gedefinieerd, formuleer je de aannames die je hebt over de resultaten van je onderzoek, onderbouwd met uitspraken en bevindingen uit eerder onderzoek. Je kunt een model gebruiken om die aannames te structureren. Je presenteert je model in een vereenvoudigde **diagramstijl**, ook wel een **onderzoeksmodel** of **conceptueel model** genoemd. Daarin laat je zien welke factoren een rol spelen in je onderzoek en welke relatie je tussen die factoren verwacht.' },
      { type: 'tekst', titel: 'Het conceptueel model', toetsstof: true,
        tekst: 'Een model is een vereenvoudigde weergave van de werkelijkheid (of een deel daarvan); erin laat je zien wat je verwacht dat je onderzoeksbevindingen zullen laten zien.\n\nEr zijn veel manieren om een model te maken, maar belangrijk is dat het alle aspecten toont die in je begripsdefinities zijn opgenomen. Daarom wordt het vaak een **conceptueel model** genoemd, bestaand uit drie onderdelen:\n\n1. de **elementen** van het afgebakende domein;\n2. **bouwstenen**: alle belangrijke begrippen en/of factoren die een rol spelen in de centrale vraag;\n3. alle mogelijke **relaties** die je tussen deze factoren verwacht te vinden.' },
      { type: 'voorbeeld', titel: 'Het Social Impact Model',
        tekst: 'Een voorbeeld van zo\u2019n model is het Social Impact Model (Van der Kooi, 2014). Het domein is de impact van sociale media. Het bestaat uit vijf elementen, van "reach" tot "impact": **reach, influence, engagement, action, impact**. Deze elementen bestaan op hun beurt uit bouwstenen, die per element zijn uitgewerkt. De onderlinge relaties worden weergegeven door een piramide in oplopende mate van invloed.' },
      { type: 'tekst', titel: 'Causale en wederkerige relaties', toetsstof: true,
        tekst: 'In sommige gevallen weerspiegelt het model **causale relaties**. Causale relaties zijn een bijzonder type relatie: het verband tussen oorzaak en effect. In andere gevallen kan het gaan om **wederkerige relaties** (two-way relationships) (Swanborn, 2010; Verschuren & Doorewaard, 2015).\n\nBij een wederkerige relatie heeft de pijl twee pijlpunten: dit toont dat de onderzoeker verwacht een tweerichtingsrelatie (of correlatie) te vinden tussen twee bouwstenen. Bijvoorbeeld tussen opleidingsniveau en inkomen: hoe hoger de opleiding, hoe hoger het inkomen, en andersom, hoe hoger het inkomen, hoe hoger de opleiding. De aanname is dan: "Er is een relatie tussen opleidingsniveau en inkomen."\n\nHeeft de pijl slechts één pijlpunt, dan wordt een **effect** op het inkomensniveau verwacht: als iemand een hoger opleidingsniveau heeft, dan zal hij of zij een hoger inkomen hebben. De relatie heeft dan een **richting**: een causale relatie, of oorzaak-gevolgrelatie.' },
      { type: 'begrippen', titel: 'Kernbegrippen', items: [
        { begrip: 'Conceptueel model', definitie: 'Vereenvoudigde weergave van de werkelijkheid waarin (binnen het domein) de belangrijkste begrippen van het onderzoek en de verwachte relaties daartussen worden getoond.' },
        { begrip: 'Wederkerige relatie', definitie: 'Correlatie tussen twee bouwstenen/factoren in een model, weergegeven met een pijl met twee pijlpunten.' },
        { begrip: 'Causale relatie', definitie: 'Oorzaak-gevolgrelatie, weergegeven met een pijl met één pijlpunt.' }
      ]},
      { type: 'voorbeeld', titel: 'Een conceptueel model van inkomensniveau',
        tekst: 'Een model kan aannames weergeven over de effecten op inkomensniveau. Het model is niet uitputtend, het is slechts een voorbeeld. De aanname is dat leeftijd, opleidingsniveau, functieniveau en werkervaring allemaal invloed hebben op inkomen. De pijlen met één pijlpunt geven aan dat deze kenmerken niet alleen correleren met inkomen, maar dat de onderzoeker ook een richting in die correlatie verwacht, dus een effect:\n\n- opleidingsniveau heeft een **positief effect** op inkomensniveau: wie hoger is opgeleid, verdient naar verwachting ook meer;\n- werkervaring heeft een **positieve invloed** op inkomensniveau: meer werkervaring leidt naar verwachting tot een hoger inkomen;\n- functieniveau heeft een **positief effect** op inkomen;\n- leeftijd heeft een **positieve invloed** op inkomensniveau.\n\nEr zijn ook pijlen die in beide richtingen lopen tussen de verschillende factoren onderling, bijvoorbeeld tussen opleidingsniveau, functieniveau en werkervaring. Dat betekent dat de onderzoeker verwacht dat er ook een relatie tussen die factoren bestaat die niet puur toevallig is: een wederkerige relatie.' },
      { type: 'tekst', titel: 'Aannames formuleren op basis van je model', toetsstof: true,
        tekst: 'De relaties in je model geven aan wat je verwachtingen of aannames zijn over de bevindingen, in elk geval bij een **deductieve** (theorietoetsende) onderzoeksstrategie. Je aanname is uiteraard geen slag in de lucht: je moet die kunnen onderbouwen met degelijke argumenten. Daarvoor gebruik je de theorieën en modellen uit je vooronderzoek.' },
      { type: 'voorbeeld', titel: 'Onderzoek naar ziekteverzuim (3): de theorie van gepland gedrag',
        tekst: 'Om een model te maken voor haar onderzoek naar ziekteverzuim gebruikte Hopstaken de **theorie van gepland gedrag** (Ajzen, 1987; Ajzen & Fishbein, 1980; Hopstaken, 1994). Dit model laat zien hoe je kunt vaststellen of mensen zich op een bepaalde manier zullen gedragen, bijvoorbeeld door ziekteverzuim, door hen te vragen of ze van plan zijn zich op een bepaalde manier te gedragen. Die "intentie" wordt op haar beurt bepaald door **attitude** (wat is je mening? wat is je houding?) en **sociale normen** (wat denken mensen om je heen?) ten aanzien van het gedrag. Een andere beïnvloedende factor is **zelfcontrole** (ga ik het echt doen?). Ook eventuele "barrières" die het gedrag kunnen beïnvloeden worden meegenomen. Dit is een lastig wetenschappelijk model dat vaak wordt gebruikt om gedrag te verklaren. Dit gedragsmodel is een **causaal conceptueel model**, omdat het model wordt gebruikt om aan te geven wat gedrag veroorzaakt en wat de gevolgen zijn.\n\nHet **Mentality Model** werd gebruikt voor onderzoek naar eetgewoonten in sociale klassen in Nederland (Keuchenius & Van der Lelij, 2015). In dit model bestaat een set aannames over eetgewoonten per sociale klasse. Tijdens het onderzoek is bekeken in hoeverre de door Motivaction gevonden eetgewoonten met die verwachtingen overeenkwamen. Een voorbeeld van het dieet van de traditionele burgerij is: "Behoudende burgers eten van oudsher aardappelen, zuivelproducten en veel fruit. Ze houden helemaal niet van buitenlandse gerechten en alternatieve vleesvervangers: wat ze niet kennen, dat willen ze niet. Hun eetgewoonten zijn vaak duurzaam omdat ze zuinig zijn en niets weggooien."' },
      { type: 'tekst', titel: 'Wanneer bouw je een model?', toetsstof: true,
        tekst: 'Modelbouw gebeurt vooral bij kwantitatief, fundamenteel onderzoek. Onderzoekers die toegepast onderzoek doen, gebruiken modellen veel minder vaak. Toch zijn ze nuttige instrumenten om de factoren die een rol spelen in je onderzoek en de relaties die je daartussen verwacht te visualiseren. Zelfs als het model niet op een bestaande theorie is gebaseerd, of als je een praktisch probleem onderzoekt, is het nog steeds een goed idee om je onderzoek op deze manier te structureren.' }
    ]
  },
  {
    id: 'toepassen', titel: 'Toepassen',
    blokken: [
      { type: 'stappen', titel: 'Van vraag naar conceptueel model', items: [
        { titel: 'Onderstreep de kernbegrippen in je centrale vraag', tekst: 'Elk begrip dat voor meerdere uitleg vatbaar is, moet je afbakenen.' },
        { titel: 'Formuleer per begrip het concept-as-intended', tekst: 'Wat bedoel jij ermee, in de context van dit specifieke onderzoek?' },
        { titel: 'Maak er een stipulatieve definitie van', tekst: 'Begin met "In de context van dit onderzoek betekent ... " en benoem expliciet wat wel en wat niet binnen het begrip valt.' },
        { titel: 'Zoek een bestaand model of bouw er zelf een', tekst: 'Kijk in je vooronderzoek naar theorieën en modellen die al bestaan voor jouw onderwerp.' },
        { titel: 'Benoem de elementen, bouwstenen en relaties', tekst: 'Welke factoren spelen een rol? Welke relaties verwacht je daartussen: causaal (één pijlpunt) of wederkerig (twee pijlpunten)?' },
        { titel: 'Formuleer de aannames in woorden', tekst: 'Vertaal elke pijl in het model naar een zin: "X heeft een positief effect op Y" of "Er is een relatie tussen X en Y."' },
        { titel: 'Onderbouw elke aanname', tekst: 'Met welke theorie, welk eerder onderzoek of welk model uit je vooronderzoek onderbouw je deze verwachting?' }
      ]},
      { type: 'oefening', id: 'ch5-oef-1', niveau: 'basis',
        vraag: 'Waarom moet je bij het onderzoeken van "werkstress" eerst het begrip afbakenen voordat je een vragenlijst maakt?',
        antwoord: 'Werkstress is, net als ziekteverzuim, een ambigu begrip dat vanuit verschillende perspectieven anders kan worden ingevuld: vanuit de organisatie (bijvoorbeeld gemeten in verzuimdagen of productiviteitsverlies) en vanuit het personeel (bijvoorbeeld gevoelens van overbelasting, spanning in het privéleven, of lichamelijke klachten). Zonder een concept-as-intended en een stipulatieve definitie loop je het risico dat respondenten allemaal iets anders onder werkstress verstaan, waardoor je vragenlijst mensen verkeerde of onduidelijke vragen stelt en je data niet goed vergelijkbaar zijn. Door eerst te definiëren wat je in dit specifieke onderzoek onder werkstress verstaat, en wat daarbuiten valt, bepaal je tegelijk welke informatie je tijdens de dataverzameling nodig hebt, en voorkom je dat je de verkeerde mensen de verkeerde vragen stelt.' },
      { type: 'oefening', id: 'ch5-oef-2', niveau: 'gevorderd',
        vraag: 'Teken in woorden een conceptueel model voor de centrale vraag "In hoeverre beïnvloeden leiderschapsstijl en werkdruk het verloop onder personeel?" Benoem de elementen, de bouwstenen en het type relatie, en onderbouw één aanname.',
        antwoord: 'Het domein is personeelsverloop binnen een organisatie. De elementen van het model zijn leiderschapsstijl, werkdruk en personeelsverloop, met verloop als de bouwsteen die uiteindelijk verklaard moet worden. Leiderschapsstijl en werkdruk zijn de verklarende bouwstenen. Tussen leiderschapsstijl en verloop teken je een pijl met één pijlpunt: een causale relatie, met de aanname dat een sturende, weinig ondersteunende leiderschapsstijl een positief effect heeft op verloop (dus: meer verloop veroorzaakt). Tussen werkdruk en verloop teken je eveneens een pijl met één pijlpunt: hogere werkdruk heeft een positief effect op verloop. Tussen leiderschapsstijl en werkdruk kun je een pijl met twee pijlpunten tekenen, een wederkerige relatie, omdat je verwacht dat een bepaalde leiderschapsstijl samenhangt met een hogere of lagere werkdruk zonder dat je vooraf een duidelijke richting vaststelt. De aanname "werkdruk heeft een positief effect op verloop" onderbouw je met bestaande theorie uit je vooronderzoek, bijvoorbeeld onderzoek naar burn-out en de theorie van gepland gedrag: hoge werkdruk beïnvloedt de attitude van medewerkers ten opzichte van hun baan negatief, wat de intentie om te vertrekken vergroot, wat weer samenhangt met daadwerkelijk verloop.' }
    ]
  },
  {
    id: 'checken', titel: 'Checken',
    blokken: [
      { type: 'quiz', titel: 'Check jezelf', vragen: [
        { vraag: 'Wat is concept-as-intended?',
          opties: ['Een vragenlijstitem', 'Wat je bedoelt wanneer je een specifiek begrip gebruikt', 'Een statistische toets', 'Een type conceptueel model'],
          juist: 1, uitleg: 'Dit is de eerste stap in begripsafbakening: vaststellen wat je precies bedoelt met een begrip in je centrale vraag.' },
        { vraag: 'Waarom raden Verschuren en Doorewaard stipulatieve definities aan voor toegepast onderzoek?',
          opties: ['Omdat wetenschappelijke definities meestal te breed zijn voor toegepast onderzoek', 'Omdat stipulatieve definities korter zijn', 'Omdat de opdrachtgever dat altijd eist', 'Omdat ze verplicht zijn volgens de wet'],
          juist: 0, uitleg: 'Wetenschappelijke definities uit de literatuur zijn vaak te algemeen; een stipulatieve definitie is toegesneden op jouw specifieke onderzoek.' },
        { vraag: 'Uit welke drie onderdelen bestaat een conceptueel model?',
          opties: ['Vraag, hypothese, conclusie', 'Elementen, bouwstenen, relaties', 'Steekproef, methode, resultaat', 'Inleiding, kern, slot'],
          juist: 1, uitleg: 'De elementen van het afgebakende domein, de bouwstenen (begrippen/factoren) en de verwachte relaties daartussen.' },
        { vraag: 'Wat geeft een pijl met twee pijlpunten in een conceptueel model aan?',
          opties: ['Een causale relatie', 'Een wederkerige relatie (correlatie zonder vastgestelde richting)', 'Geen enkele relatie', 'Een verplicht verband volgens de wet'],
          juist: 1, uitleg: 'Een pijl met één pijlpunt duidt op een causale (oorzaak-gevolg) relatie; twee pijlpunten duiden op een wederkerige relatie.' },
        { vraag: 'Welk model gebruikte Hopstaken om ziekteverzuim te verklaren?',
          opties: ['Het Social Impact Model', 'Het Mentality Model', 'De theorie van gepland gedrag', 'Het 6W-model'],
          juist: 2, uitleg: 'Ze gebruikte de theorie van gepland gedrag van Ajzen en Fishbein, waarin attitude, sociale normen en zelfcontrole de intentie tot gedrag bepalen.' },
        { vraag: 'In welk type onderzoek wordt modelbouw het vaakst toegepast?',
          opties: ['Kwalitatief, toegepast onderzoek', 'Kwantitatief, fundamenteel onderzoek', 'Alleen bij casestudies', 'Nooit bij toegepast onderzoek'],
          juist: 1, uitleg: 'Onderzoekers die toegepast onderzoek doen gebruiken modellen minder vaak, maar ze blijven nuttig om factoren en relaties te visualiseren.' }
      ]},
      { type: 'bronnen', items: [
        { apa: 'Verhoeven, N. (2019). Doing Research: The Hows and Whys of Applied Research (Ch. 5). Boom uitgevers.' },
        { apa: 'Ajzen, I., & Fishbein, M. (1980). Understanding attitudes and predicting social behavior. Prentice-Hall.' },
        { apa: 'Verschuren, P., & Doorewaard, H. (2015). Het ontwerpen van een onderzoek. Boom Lemma.' }
      ]},
      { type: 'preview', titel: 'Van model naar variabelen', vakId: 'demystifying-research-methods', lesId: 'ch13',
        tekst: 'Je conceptueel model bestaat uit factoren met relaties ertussen. Zodra je data hebt verzameld, worden die factoren variabelen die je moet klaarmaken voor analyse.',
        punten: ['Wat een variabele precies is', 'Onafhankelijke versus afhankelijke variabelen', 'Software voor kwantitatieve analyse'] }
    ]
  }
];

/* ============================================================
   HOOFDSTUK 13 — Kwantitatieve data verwerken: voorbereiding
   ============================================================ */

LESSTOF['demystifying-research-methods/ch13'] = [
  {
    id: 'voor', titel: 'Voorbereiding',
    blokken: [
      { type: 'leerdoelen', items: [
        'Uitleggen wat variabelen zijn en hoe je ze kunt gebruiken',
        'Het verschil tussen onafhankelijke en afhankelijke variabelen benoemen',
        'Welke software je kunt gebruiken voor kwantitatieve analyse'
      ]},
      { type: 'uitleg', titel: 'Waar dit hoofdstuk over gaat',
        tekst: 'Dit hoofdstuk gaat over hoe je de kwantitatieve analyse voorbereidt. Deze fase begint zodra je het veldwerk, oftewel de dataverzameling, hebt afgerond. Voordat je begint aan de analyse, moet je weten wat je met je informatie kunt doen, en vooral wat je er **niet** mee kunt doen. Dat begint bij het begrijpen van het begrip **variabele**, dat je in dit hoofdstuk leert kennen.' }
    ]
  },
  {
    id: 'kern', titel: 'Kernstof',
    blokken: [
      { type: 'tekst', titel: '13.1.1 Variabelen', toetsstof: true,
        tekst: 'Zodra je je analyse gaat voorbereiden, kom je vaktaal tegen die gangbaar is in de statistiek. Een van de meest gebruikte termen is het werkwoord **variabele**.\n\nTen eerste is een variabele een **kenmerk (attribuut)** van een object, een geval, of van een persoon die aan je onderzoek deelneemt. Deze variabele kan veranderen in termen van zijn waarde. "Leeftijd" (van de respondent) is bijvoorbeeld een variabele: de ene persoon kan 49 zijn, een ander 12 jaar oud. "Geslacht" (man of vrouw) is een andere variabele. Deze kenmerken, of demografische gegevens, maken deel uit van de vragenlijst. Hun antwoorden zijn de variabele.\n\nDaarnaast kunnen variabelen ook een weergave zijn van gedrag, een mening of een beoordeling van bepaalde zaken en onderwerpen in het onderzoek. Je kunt bijvoorbeeld onderzoek doen naar buurtvoorzieningen. Ook die kwesties worden met vragenlijsten onderzocht. "Mening over de buurtbus" (eens, neutraal of oneens) is dan een variabele.\n\nTot slot kan een variabele bestaan uit een set **items**, namelijk alle mogelijke waarden die de variabele kan hebben. De variabele leeftijd loopt van "0" tot "100". Meningen lopen van "helemaal mee eens" tot "helemaal mee oneens". Voor geslacht zou dat "man" en "vrouw" zijn.' },
      { type: 'tekst', titel: 'Categorieën', toetsstof: true,
        tekst: 'Ten slotte kan een variabele bestaan uit een set **categorieën**, namelijk alle mogelijke waarden die de variabele kan hebben. Categorieën worden uitgedrukt als cijfers. Voor de variabele "geslacht" krijgen mannen bijvoorbeeld een "0" en vrouwen een "1". Voor "opleidingsniveau" zou je basisonderwijs een "1" geven, voortgezet onderwijs een "2", hbo een "3", wo-bachelor een "4", master een "5", en promotie (PhD) een "6". Voor "leeftijd" geldt: als iemand 39 is, voer je "39" in.\n\nWat betekenen deze variabelen? Het betekent dat je een nummer, een cijfer, toekent aan een observatie, een meting. Voor leeftijd is dat vrij duidelijk: iemand van 40 is twee keer zo oud als iemand van 20. Met andere woorden, je kunt deze waarden gebruiken om dingen te berekenen. Datzelfde geldt echter niet zomaar voor "opleidingsniveau". Is iemand met een universitaire graad twee keer zo hoog opgeleid als iemand die de middelbare school heeft afgerond? Nee, zo werkt het niet. Sommige variabelen kunnen worden gebruikt voor berekeningen, andere niet. In een later hoofdstuk (13.2 van het originele boek) wordt uitgelegd hoe dat precies werkt via **meetniveaus**.' },
      { type: 'begrippen', titel: 'Kernbegrippen', items: [
        { begrip: 'Variabele', definitie: 'Een kenmerk (attribuut) van een object, geval of persoon dat kan variëren in waarde. Kan bestaan uit een set items of categorieën.' },
        { begrip: 'Categorie', definitie: 'Een mogelijke waarde van een variabele, uitgedrukt als een cijfer.' }
      ]},
      { type: 'tekst', titel: 'Onafhankelijke of afhankelijke variabelen?', toetsstof: true,
        tekst: 'Grofweg zijn er twee groepen variabelen:\n\n**Onafhankelijke variabelen.** Ook wel **oorzaakvariabelen** (of predictors) genoemd, omdat ze situaties manipuleren; de onafhankelijke variabele zelf staat vast, maar veroorzaakt een verandering.\n\n**Afhankelijke variabelen:** dit zijn variabelen die veranderen onder invloed van onafhankelijke variabelen. Een andere term die voor dit type variabele wordt gebruikt is **effectvariabele**.\n\nIn een diagram ziet dat er zo uit:\n\nOnafhankelijke variabele = Oorzaakvariabele = Predictor\nAfhankelijke variabele = Effectvariabele = Consequence variable' },
      { type: 'tabel', titel: 'De twee soorten variabelen op een rij',
        kop: ['Term', 'Synoniemen'],
        rijen: [
          ['Onafhankelijke variabele', 'Oorzaakvariabele, predictor'],
          ['Afhankelijke variabele', 'Effectvariabele, consequence variable']
        ] },
      { type: 'tekst', titel: 'Waarom dit onderscheid zo belangrijk is', toetsstof: true,
        tekst: 'Het onderscheid tussen onafhankelijke en afhankelijke variabelen is zeer belangrijk. Het bepaalt onder meer de **structuur van je analyse**. Wil je bijvoorbeeld het effect van opleidingsniveau op inkomen voorspellen, dan is opleidingsniveau de onafhankelijke variabele (oorzaak) en inkomen de afhankelijke variabele (effect). De pijl in het bijbehorende model is het effect dat opleidingsniveau heeft op inkomen, dus een causale relatie.' },
      { type: 'begrippen', titel: 'Kernbegrippen', items: [
        { begrip: 'Onafhankelijke variabele', definitie: 'Ook wel oorzaakvariabele of predictor. Manipuleert situaties; staat zelf vast, maar veroorzaakt verandering.' },
        { begrip: 'Afhankelijke variabele', definitie: 'Ook wel effectvariabele. Verandert onder invloed van onafhankelijke variabelen.' }
      ]},
      { type: 'tekst', titel: '13.1.2 Software voor kwantitatieve analyse', toetsstof: true,
        tekst: 'Softwareprogramma\u2019s zoals **SPSS, Excel, STATA, R, S-plus, SAS, AMOS en LISREL** worden allemaal gebruikt voor kwantitatieve analyse.\n\n**SPSS** is de methode die doorgaans wordt gebruikt in Doing Research. IBM, de softwarefabrikant, brengt jaarlijks een nieuwe versie uit. Nieuwere versies verschillen vooral qua vormgeving, minder qua programma-inhoud. Studenten kunnen via een licentie voor ongeveer 15 dollar per jaar met SPSS werken, met de mogelijkheid de licentie voor een paar dollar extra te verlengen.\n\nDaarnaast wordt **R** genoemd als alternatief, met groeiende belangstelling vanuit universiteiten.' },
      { type: 'voorbeeld', titel: 'Effect van opleiding op inkomen',
        tekst: 'Figuur 13.1 uit het boek illustreert het onderscheid: een pijl loopt van "Education" naar "Income". De pijl representeert het effect dat opleidingsniveau heeft op inkomen, dus een causale relatie. Opleiding is hier de onafhankelijke variabele (oorzaak), inkomen de afhankelijke variabele (effect).' }
    ]
  },
  {
    id: 'toepassen', titel: 'Toepassen',
    blokken: [
      { type: 'stappen', titel: 'Variabelen herkennen en indelen', items: [
        { titel: 'Bepaal wat het kenmerk is', tekst: 'Is het een demografisch gegeven (leeftijd, geslacht), een gedraging, een mening, of een beoordeling?' },
        { titel: 'Bepaal het meetniveau in gewone taal', tekst: 'Kun je met de waarden rekenen, zoals bij leeftijd, of zijn het alleen categorieën zonder rekenkundige betekenis, zoals opleidingsniveau of geslacht?' },
        { titel: 'Bepaal of het een oorzaak- of een effectvariabele is', tekst: 'Kijk naar je conceptueel model uit hoofdstuk 5: welke pijl wijst naar welke variabele? Waar de pijl vandaan komt is onafhankelijk (oorzaak); waar hij naartoe wijst is afhankelijk (effect).' },
        { titel: 'Kies je software', tekst: 'SPSS is de standaard in dit vak; R is een groeiend alternatief. Voor eenvoudige beschrijvende analyses volstaat soms Excel of Google Forms.' }
      ]},
      { type: 'oefening', id: 'ch13-oef-1', niveau: 'basis',
        vraag: 'Je onderzoekt of het aantal uren slaap invloed heeft op de concentratie van studenten tijdens college. Benoem de onafhankelijke en de afhankelijke variabele, en leg uit waarom.',
        antwoord: 'De onafhankelijke variabele (de oorzaak, predictor) is het aantal uren slaap: dit is de variabele waarvan je het effect wilt onderzoeken en die je (in een experiment) zou kunnen manipuleren. De afhankelijke variabele (het effect, consequence variable) is de concentratie tijdens college: dit is de variabele die naar verwachting verandert onder invloed van het aantal uren slaap. In een conceptueel model zou je dit weergeven met een pijl van "uren slaap" naar "concentratie", wat een causale relatie aangeeft: meer slaap zou dan een positief effect hebben op concentratie.' },
      { type: 'oefening', id: 'ch13-oef-2', niveau: 'gevorderd',
        vraag: 'Leg uit waarom je met de variabele "leeftijd" wel rekenkundig kunt werken, maar met de variabele "opleidingsniveau" (gecodeerd van 1 tot 6) niet zomaar, ook al zijn het allebei variabelen met cijfermatige categorieën.',
        antwoord: 'Bij leeftijd hebben de cijfers een echte, betekenisvolle rekenkundige verhouding: iemand van 40 is werkelijk twee keer zo oud als iemand van 20, en het verschil tussen 20 en 30 jaar is even groot als tussen 30 en 40 jaar. De cijfers weerspiegelen de onderliggende werkelijkheid op een schaal met gelijke afstanden en een betekenisvol nulpunt. Bij opleidingsniveau zijn de cijfers 1 tot en met 6 alleen labels voor categorieën in een bepaalde volgorde: ze geven aan dat wo-master (5) hoger is dan hbo (3), maar niet dat iemand met een master twee keer zo hoog opgeleid is als iemand met een mbo-diploma, en het verschil tussen categorie 1 en 2 hoeft inhoudelijk niet gelijk te zijn aan het verschil tussen categorie 5 en 6. Het cijfer is hier een ordening, geen meeteenheid. Dit onderscheid heet het meetniveau van een variabele, en het bepaalt welke rekenkundige bewerkingen en welke statistische toetsen je wel en niet mag gebruiken: bij leeftijd mag je bijvoorbeeld een gemiddelde berekenen dat inhoudelijk klopt, bij opleidingsniveau is een gemiddelde cijfer minder zinvol te interpreteren dan bijvoorbeeld de meest voorkomende categorie.' }
    ]
  },
  {
    id: 'checken', titel: 'Checken',
    blokken: [
      { type: 'quiz', titel: 'Check jezelf', vragen: [
        { vraag: 'Wat is een variabele?',
          opties: ['Een vaste waarde die nooit verandert', 'Een kenmerk van een object, geval of persoon dat kan variëren in waarde', 'Een synoniem voor centrale vraag', 'Een type conceptueel model'],
          juist: 1, uitleg: 'Denk aan leeftijd, geslacht, of een mening: allemaal kenmerken die per respondent kunnen verschillen.' },
        { vraag: 'Hoe wordt een onafhankelijke variabele ook wel genoemd?',
          opties: ['Effectvariabele', 'Oorzaakvariabele of predictor', 'Consequence variable', 'Stipulatieve variabele'],
          juist: 1, uitleg: 'De onafhankelijke variabele manipuleert situaties en veroorzaakt een verandering in de afhankelijke variabele.' },
        { vraag: 'Wat is de afhankelijke variabele in het model "opleiding → inkomen"?',
          opties: ['Opleiding', 'Inkomen', 'Beide', 'Geen van beide'],
          juist: 1, uitleg: 'Inkomen is de variabele die verandert onder invloed van opleiding (de oorzaak), en is dus de afhankelijke of effectvariabele.' },
        { vraag: 'Waarom kun je met de categorieën van "opleidingsniveau" niet zomaar rekenen zoals met leeftijd?',
          opties: ['Omdat opleidingsniveau geen variabele is', 'Omdat de cijfers alleen een volgorde van categorieën aangeven, geen betekenisvolle afstand of verhouding', 'Omdat opleidingsniveau altijd tekstueel wordt ingevoerd', 'Omdat SPSS dat niet toestaat'],
          juist: 1, uitleg: 'De cijfers bij opleidingsniveau zijn labels voor een volgorde, geen meeteenheid met gelijke afstanden, zoals bij leeftijd wel het geval is.' },
        { vraag: 'Welk softwareprogramma noemt Verhoeven als de standaardmethode in Doing Research?',
          opties: ['Excel', 'SPSS', 'Python', 'Google Forms'],
          juist: 1, uitleg: 'SPSS is de in dit boek gebruikte methode; R wordt genoemd als groeiend alternatief.' }
      ]},
      { type: 'bronnen', items: [
        { apa: 'Verhoeven, N. (2019). Doing Research: The Hows and Whys of Applied Research (Ch. 13). Boom uitgevers.' }
      ]},
      { type: 'preview', titel: 'Terug naar het overzicht', vakId: 'demystifying-research-methods', lesId: 'ch3',
        tekst: 'Je hebt nu de hele lijn doorlopen: van aanleiding, via centrale vraag en conceptueel model, naar het klaarmaken van je data voor analyse.',
        punten: ['Ga terug naar hoofdstuk 3 om de hele redenering nog eens door te lopen', 'Gebruik het stappenplan uit hoofdstuk 5 bij je eigen onderzoeksproject'] }
    ]
  }
];

/* ============================================================
   Registreren als hoofdstukken van het vak Demystifying
   Research Methods, en de lege collegeplekken overschrijven,
   net als bij Intro to Safety & Security.
   ============================================================ */

/* De subnavigatie binnen een tabblad zat hier vroeger. Die is vervangen
   door de echte subtabbladen in lesextra.js: één paragraaf tegelijk, met
   een afvinkknop en een 'verder'-knop onderaan. */

/* ============================================================
   Voorbereiding per college — voedt het kopje Deadlines.

   De sleutel is het sessienummer: het hoeveelste college van dat vak
   in je rooster. Op het homescreen zie je hoogstens de eerstvolgende
   per vak, zodat het geen waslijst wordt.

   lesIds verwijzen naar de hoofdstukken hierboven: staan die allemaal
   afgevinkt, dan verdwijnt de regel vanzelf.
   ============================================================ */
var VAK_VOORBEREIDING = {

  /* Per sessie: het onderwerp van die les (uit de module manual) en wat je
     ervoor moet doen. lesIds verwijzen naar de onderdelen van dit vak; staan
     die allemaal afgevinkt, dan verdwijnt de regel vanzelf. Sessies zonder
     leeswerk staan er ook in, zodat je altijd ziet wat eraan komt. */

  'intro-to-safety-security': {
    1:  { onderwerp: 'Introductie: de opleiding en het vakgebied', titel: 'Geen leeswerk vooraf', leeg: true, lesIds: [] },
    2:  { onderwerp: 'Safety- en securityinterventies', titel: 'Bieder H1 en H2 gelezen', lesIds: ['h1', 'h2'] },
    3:  { onderwerp: 'Communication matters', titel: 'Geen leeswerk vooraf', leeg: true, lesIds: [] },
    4:  { onderwerp: 'Stakeholders, actoren en cultuur', titel: 'Bieder H3 en H5 gelezen', lesIds: ['h3', 'h5'] },
    5:  { onderwerp: 'Safety en security managen', titel: 'Geen leeswerk vooraf', leeg: true, lesIds: [] },
    6:  { onderwerp: 'Resilience in safety en security', titel: 'Bieder H7 en H9 gelezen', lesIds: ['h7', 'h9'] },
    7:  { onderwerp: 'Tales from the field (alumnus)', titel: 'Gastcollege: aanwezigheid verplicht', lesIds: [] },
    8:  { onderwerp: 'Recap en tentamenvoorbereiding', titel: 'Bieder H10 gelezen · daarna de midterm', lesIds: ['h10'] },
    9:  { onderwerp: 'Tales from the field', titel: 'Gastcollege: aanwezigheid verplicht', lesIds: [] },
    10: { onderwerp: 'Crime, safety en security (Matczak)', titel: 'Gastcollege: aanwezigheid verplicht', lesIds: [] },
    11: { onderwerp: 'AI in security risk (Voss)', titel: 'Gastcollege: aanwezigheid verplicht', lesIds: [] },
    12: { onderwerp: 'De human security approach (De Ryck)', titel: 'Gastcollege: aanwezigheid verplicht', lesIds: [] },
    13: { onderwerp: 'Nog te bepalen', titel: 'Onderwerp staat nog niet vast', leeg: true, lesIds: [] },
    14: { onderwerp: 'Industrial safety in action (Ren)', titel: 'Gastcollege: aanwezigheid verplicht', lesIds: [] },
    15: { onderwerp: 'Applied security risk management (Ekici)', titel: 'Gastcollege: aanwezigheid verplicht', lesIds: [] },
    16: { onderwerp: 'Recap en tentamenvoorbereiding', titel: 'Daarna de eindtoets (mondeling)', lesIds: [] }
  },

  /* Deel 1 (sessie 1 t/m 8) volgt het document 'G&P Part 1 Program and
     sources 2026-27' van de docent, niet de module manual: de onderwerpen
     staan daar in een andere volgorde en met data erbij.
     Deel 2 (sessie 9 t/m 16) komt nog uit de manual. */
  'governance-policy': {
    1:  { onderwerp: 'Governance and Policy: an introduction (Gomez Llata) \u00b7 11 sep',
          titel: 'McCormick H1 lezen', lesIds: [] },
    2:  { onderwerp: 'Democracy and bureaucracy: norms and values in building governance practices (Gomez Llata) \u00b7 18 sep',
          titel: 'Verplicht: Buckwalter & Balfour lezen, hoofdstuk 2 van Quality of Governance', lesIds: [] },
    3:  { onderwerp: 'Executives and bureaucracies (De Sousa) \u00b7 25 sep',
          titel: 'McCormick H8 en H10 lezen', lesIds: [] },
    4:  { onderwerp: 'Political participation and political parties (De Sousa) \u00b7 2 okt',
          titel: 'McCormick H13 en H15 lezen', lesIds: [] },
    5:  { onderwerp: 'The development of a paradigm: from government to governance (Gomez Llata) \u00b7 9 okt',
          titel: 'Verplicht: Levi-Faur (2012), p. 3-18 \u00b7 aanbevolen: S\u00f8rensen & Torfing (2018), p. 350-359', lesIds: [] },
    6:  { onderwerp: 'Public governance: a case study (Gomez Llata) \u00b7 16 okt',
          titel: 'Verplicht: Huberts, Kaptein & De Koning (2022), p. 329-341', lesIds: [] },
    7:  { onderwerp: 'Interest groups and public policy (De Sousa) \u00b7 30 okt',
          titel: 'McCormick H16 en H17 lezen', lesIds: [] },
    8:  { onderwerp: 'Recap and exam preparation (Gomez Llata & De Sousa) \u00b7 6 nov',
          titel: 'Daarna de midterm en de POP-week', lesIds: [], leeg: true },
    9:  { onderwerp: 'Introductie besluitvorming', titel: 'Allison & Zelikow lezen, p. 1-12', lesIds: [] },
    10: { onderwerp: 'Agendasetting', titel: 'Geen leeswerk vooraf', lesIds: [], leeg: true },
    11: { onderwerp: 'Beleidsformulering', titel: 'Geen leeswerk vooraf', lesIds: [], leeg: true },
    12: { onderwerp: 'Beleidsimplementatie 1', titel: 'Geen leeswerk vooraf', lesIds: [], leeg: true },
    13: { onderwerp: 'Beleidsimplementatie 2', titel: 'Geen leeswerk vooraf', lesIds: [], leeg: true },
    14: { onderwerp: 'Beleidsevaluatie', titel: 'House (p. 618-627) en Weiss (p. 47-70) lezen', lesIds: [] },
    15: { onderwerp: 'Beleid maken in de praktijk', titel: 'Geen leeswerk vooraf', lesIds: [], leeg: true },
    16: { onderwerp: 'Overzicht en tentamenvoorbereiding', titel: 'Daarna de eindtoets', lesIds: [], leeg: true }
  },

  'society-politics': {
    1:  { onderwerp: 'Sociologische perspectieven en methoden', titel: 'Macionis H1 (p. 4-14, 21-25), H2 (p. 33-52), H4 (p. 106-116)', lesIds: [] },
    2:  { onderwerp: 'Identiteit 1: sociale constructie van het dagelijks leven', titel: 'Macionis H7 lezen · opdracht sociologische perspectieven', lesIds: [] },
    3:  { onderwerp: 'Identiteit 2: etniciteit en migratie', titel: 'Macionis H11 lezen', lesIds: [] },
    4:  { onderwerp: 'Sociale orde 1: cultuur en sociale bewegingen', titel: 'Macionis H5 (p. 144-158) en H16 (p. 563-567) lezen', lesIds: [] },
    5:  { onderwerp: 'Sociale orde 2: controle en deviantie', titel: 'Macionis H17 lezen', lesIds: [] },
    6:  { onderwerp: 'Stratificatie 1: groepen, organisaties, netwerksamenleving', titel: 'Macionis H6 lezen', lesIds: [] },
    7:  { onderwerp: 'Stratificatie 2: sociale scheidslijnen en klasse', titel: 'Macionis H8 lezen', lesIds: [] },
    8:  { onderwerp: 'Risicosamenleving, steden en ruimte', titel: 'Macionis H23 (p. 795-797) en H24 (p. 830, 841-849, 855) lezen', lesIds: [] },
    9:  { onderwerp: 'Politiek, staten en naties', titel: 'McCormick H3 lezen', lesIds: [] },
    10: { onderwerp: 'Politieke cultuur en ideologieën', titel: 'McCormick H4 lezen', lesIds: [] },
    11: { onderwerp: 'Democratisch bestuur', titel: 'McCormick H5 lezen', lesIds: [] },
    12: { onderwerp: 'Democratische instituties: media en verkiezingen', titel: 'McCormick H12 en H14 lezen', lesIds: [] },
    13: { onderwerp: 'Autoritair bestuur', titel: 'McCormick H6 lezen', lesIds: [] },
    14: { onderwerp: 'Hybride regimes en democratisering', titel: 'Literatuur nog te bepalen', lesIds: [] },
    15: { onderwerp: 'Politieke economie', titel: 'McCormick H18 lezen', lesIds: [] },
    16: { onderwerp: 'Recap en tentamenvoorbereiding', titel: 'Daarna de eindtoets', lesIds: [] }
  },

  'demystifying-research-methods': {
    1:  { onderwerp: 'Intro research methods 1: rol van toegepaste wetenschap', titel: 'Course manual doorlezen', lesIds: [] },
    2:  { onderwerp: 'Intro research methods 2: workshop kernbegrippen', titel: 'Brightspace checken', lesIds: [] },
    3:  { onderwerp: 'Intro research methods 3: quiz 1', titel: 'Quiz 1 over de kernbegrippen · voorbereiden op CT1', lesIds: ['ch3'] },
    4:  { onderwerp: 'Het probleem begrijpen 1: 6W, begrippen en variabelen', titel: 'Brightspace checken', lesIds: ['ch3', 'ch4'] },
    5:  { onderwerp: 'Het probleem begrijpen 2: workshop 6W', titel: 'Brightspace checken', lesIds: [] },
    6:  { onderwerp: 'Het probleem begrijpen 3: quiz 2', titel: 'Quiz 2 over het 6W-raamwerk · voorbereiden op CT2', lesIds: ['ch5'] },
    7:  { onderwerp: 'Herkansing quiz 1', titel: 'Alleen als je quiz 1 niet gehaald hebt', leeg: true, lesIds: [] },
    8:  { onderwerp: 'Herkansing quiz 2', titel: 'Alleen als je quiz 2 niet gehaald hebt · daarna CT1', lesIds: [] },
    9:  { onderwerp: 'Onderzoek plannen 1: het ARD en beperkingen', titel: 'Brightspace checken', lesIds: ['ch5'] },
    10: { onderwerp: 'Onderzoek plannen 2: workshop ARD', titel: 'Brightspace checken', lesIds: [] },
    11: { onderwerp: 'Onderzoek plannen 3: quiz 3', titel: 'Quiz 3 over het ARD en beperkingen · daarna CT2', lesIds: ['ch13'] },
    12: { onderwerp: 'Het hele proces integreren', titel: 'Brightspace checken', lesIds: [] },
    13: { onderwerp: 'Herkansing quiz 3', titel: 'Alleen als je quiz 3 niet gehaald hebt · daarna CT3', lesIds: [] }
  },

  'fundamentals-of-academic-writing': {
    1: { onderwerp: 'Wat is een alinea? Wat is een topic sentence?', titel: 'Brightspace checken', lesIds: ['naslagwerk'] },
    2: { onderwerp: '6 tips voor goede alinea\u2019s', titel: 'Task 1 inleveren op Brightspace', lesIds: [] },
    3: { onderwerp: '10 kenmerken van formele, academische stijl', titel: 'Brightspace checken', lesIds: ['naslagwerk'] },
    4: { onderwerp: '5 tips voor goede zinnen', titel: 'Brightspace checken', lesIds: [] },
    5: { onderwerp: 'Oefenexamen in Remindo, op de campus', titel: 'Task 2 inleveren · oefenexamen 15 oktober', lesIds: ['rubric'] },
    6: { onderwerp: 'Technieken om zinnen te combineren', titel: 'Task 3 inleveren', lesIds: ['oefening-1'] },
    7: { onderwerp: 'Hoe je parafraseert', titel: 'Brightspace checken', lesIds: [] },
    8: { onderwerp: 'Veelgemaakte fouten en review', titel: 'Daarna het examen (100%, 14 december)', lesIds: ['rubric'] }
  },

  'professional-skills': {
    1:  { onderwerp: 'Kick-off: communicatie in safety en security', titel: 'Pease & Pease (2006) lezen · lichaamstaal', lesIds: [] },
    2:  { onderwerp: 'Slecht nieuws communiceren', titel: 'Giles (2016) en Ohiagu (2022) lezen', lesIds: [] },
    3:  { onderwerp: 'Je communicatiestijl, public speaking en presenteren', titel: 'Amsel (2019) lezen · de 7/38/55-mythe', lesIds: [] },
    4:  { onderwerp: 'Interpersoonlijk conflictmanagement', titel: 'Slides en leeslinks checken', lesIds: [] },
    5:  { onderwerp: 'Intro AI in safety en security (Wisse)', titel: 'Slides en leeslinks checken', lesIds: [] },
    6:  { onderwerp: 'Personal branding als safety- en securityprofessional', titel: 'Żemojtel-Piotrowska & Piotrowski (2023) lezen · Hofstede', lesIds: ['opdrachten'] },
    7:  { onderwerp: 'Sollicitaties en gesprekken (gastcollege)', titel: 'Gastcollege: aanwezigheid verplicht · daarna de midterm', lesIds: [] },
    8:  { onderwerp: 'Leiderschapsvaardigheden (Pearce)', titel: 'Avolio & Bass (1991) lezen', lesIds: [] },
    9:  { onderwerp: 'Consultancy skills (Corr)', titel: 'Block (2011) lezen', lesIds: [] },
    10: { onderwerp: 'Projectmanagement 1 (Ekici)', titel: 'Slides en leeslinks checken', lesIds: ['opdrachten'] },
    11: { onderwerp: 'Projectmanagement 2 (Ekici)', titel: 'Slides checken · daarna de eindpresentatie', lesIds: [] }
  }

};

/* ============================================================
   Course manual per vak — getoond op het vak-homescreen
   (vak.html?vak=<vakId>). Vul aan zodra je de handleiding van
   een vak hebt; de sleutel is hetzelfde vakId als hierboven.
   ============================================================ */
var VAK_MANUAL = {

  'intro-to-safety-security': {
    // Zet de pdf in de map 'manuals' naast je andere bestanden en pas de naam hier aan.
    pdf: 'manuals/Y1_manual_intro_ssms.pdf',
    pdfNaam: 'Module manual \u00b7 Intro to Safety & Security (2.1)',
    studiegids: 'intro',
    intro: 'Funderingsvak dat de domeinen van safety en security introduceert, plus de stakeholderbenaderingen van de SSMS-professional.',
    regels: [
      { label: 'Code',        waarde: 'SSMS-1T1-24' },
      { label: 'Docenten',    waarde: 'Jonathan Corr, Enrique Gomez Llata Cazares' },
      { label: 'Studiepunten', waarde: '6 ECTS · 42 contacturen · 126 uur zelfstudie' },
      { label: 'Literatuur',  waarde: 'Bieder & Pettersen Gould (2020), The Coupling of Safety and Security (open access)' },
      { label: 'Midterm',     waarde: 'Remindo, schriftelijk · 50% · november 2026' },
      { label: 'Eindtoets',   waarde: 'Mondeling · 50% · februari 2027' },
      { label: 'Voldoende',   waarde: '5,5 of hoger voor beide toetsen' },
      { label: 'Let op',      waarde: 'Gastcolleges zijn verplicht (sessie 7 en 9 tot en met 15)' }
    ],
    /* Uitklapbaar per onderdeel, zodat je niet voor elk detail de pdf opent.
       Vul dit aan met de tekst uit de handleiding van het vak. */
    samenvatting: [
      { titel: 'Wat je hier leert',
        tekst: 'Funderingsvak dat je de **domeinen** van safety en security laat zien, de **interventies** die je als SSMS-professional kunt inzetten, en de **stakeholderbenaderingen** waarmee je risico\u2019s beheerst. E\u00e9n college gaat over de opbouw van de opleiding zelf.',
        punten: [
          'Domeinen van safety en security conceptualiseren',
          'Stakeholdermanagement in internationale context uitleggen',
          'De structuur en het multidisciplinaire karakter van SSMS samenvatten',
          'Risicomanagement en resilience toepassen op internationale casussen'
        ] },
      { titel: 'Opbouw en leesschema',
        tekst: 'Zestien sessies. Het hele boek zit **v\u00f3\u00f3r de midterm**; daarna is het toepassen en verbreden met gastcolleges.',
        punten: [
          'Sessie 2 · hoofdstuk 1 en 2',
          'Sessie 4 · hoofdstuk 3 en 5',
          'Sessie 6 · hoofdstuk 7 en 9',
          'Sessie 8 · hoofdstuk 10, daarna midterm en POP-week'
        ] },
      { titel: 'Toetsing',
        tekst: 'Midterm schriftelijk in Remindo (50%, november 2026) en een **mondelinge** eindtoets (50%, februari 2027). Beide moeten een 5,5 of hoger zijn. Toetsmateriaal is alle cursusliteratuur \u00e9n de collegeslides, dus ook die van gastcolleges.' },
      { titel: 'Aanwezigheid en regels',
        tekst: 'Colleges zijn niet verplicht maar wel sterk aanbevolen. **Gastcolleges zijn wel verplicht.** Geplande data voor presentaties, workshops, opdrachten, toetsen en excursies zijn hard.\n\nHet programma stond bij publicatie nog als voorlopig in de handleiding en kan veranderen, onder andere door de beschikbaarheid van gastdocenten. Houd Brightspace en MyTimetable bij.' }
    ]
  },

  'demystifying-research-methods': {
    pdf: 'manuals/Y1_manual_drm.pdf',
    pdfNaam: 'Demystifying Research Methods course manual (2026-2027)',
    studiegids: 'drm',
    intro: 'Eerste vak van de Research Methods-track. Je leert een eigen applied research design opzetten, met probleem, doelstelling, hoofdvraag en twee deelvragen, en je leert bestaand onderzoek beoordelen.',
    regels: [
      { label: 'Code',        waarde: 'SSMS-1RM1-25' },
      { label: 'Docenten',    waarde: 'Jonas Carinhas (j.f.dacostacarinhas@hhs.nl), Ilse Lindhout (i.j.lindhout@student.hhs.nl)' },
      { label: 'Studiepunten', waarde: '4 ECTS \u00b7 28 contacturen \u00b7 84 uur zelfstudie' },
      { label: 'Literatuur',  waarde: 'Alles op Brightspace. Boek: Verhoeven, Doing Research (5e of 6e druk), gratis via de HHS-bibliotheek' },
      { label: 'Toetsing',    waarde: 'Cumulatieve toets in drie delen: CT1 20%, CT2 50%, CT3 30%' },
      { label: 'Quizzes',     waarde: 'Q1 week 4, Q2 week 7, Q3 week 14 \u00b7 pass/fail \u00b7 alle drie halen is verplicht' },
      { label: 'Voldoende',   waarde: '5,5 of hoger voor de cumulatieve toets, plus een pass voor alle drie de quizzes' },
      { label: 'Herkansing',  waarde: 'E\u00e9n toets van 120 minuten over alles, telt voor 100% \u00b7 semester 2, maart-april' },
      { label: 'Let op',      waarde: 'AI-tools bij individuele opdrachten gelden als schending van de academische integriteit' }
    ],
    samenvatting: [
      { titel: 'Waar dit vak over gaat',
        tekst: 'Je krijgt de gereedschapskist voor **applied research** in safety en security: van eerste analyse tot een af onderzoeksontwerp. Het is het eerste vak van de Research Methods-track en de basis voor je opdrachten, rapporten en uiteindelijk je scriptie.',
        punten: [
          'Kernbegrippen toepassen op echte safety- en securitysituaties',
          'Vooronderzoek doen met het 6W-raamwerk',
          'Onderzoeksvragen, ontwerpen en beperkingen van bestaand onderzoek beoordelen',
          'Zelf een applied research design formuleren'
        ], bladzijde: 'hoofdstuk 1' },

      { titel: 'De zeven leerdoelen',
        tekst: 'De toetsmatrix is per leerdoel opgebouwd, dus dit is letterlijk je leerlijst.',
        punten: [
          '1. Basisbegrippen van applied research toepassen op verschillende contexten',
          '2. Vooronderzoek doen met het 6W-raamwerk op verschillende soorten literatuur',
          '3. Kernbegrippen en variabelen van een studie onderscheiden en hun verbanden onderzoeken',
          '4. Onderzoeksvragen beoordelen op type, helderheid, focus, relevantie, haalbaarheid, complexiteit, bias en ethiek',
          '5. Een onderzoeksontwerp beoordelen: benadering, probleem, doelstelling, hoofdvraag en deelvragen',
          '6. Beperkingen beoordelen: databeschikbaarheid, toegang, steekproefgrootte, representativiteit, generaliseerbaarheid, tijd en budget',
          '7. Zelf een applied research design formuleren met probleem, doelstelling, hoofdvraag en twee deelvragen'
        ], bladzijde: 'hoofdstuk 2' },

      { titel: 'Literatuur en materiaal',
        tekst: 'Alles wat je nodig hebt staat op **Brightspace**: slides, workshop- en huiswerkopdrachten, de conceptlijst met uitleg en video\u2019s, alle quizzes en fragmenten uit methodenboeken.\n\nHet boek is Verhoeven, *Doing Research*, vijfde of zesde druk. Gratis online via de HHS-bibliotheek, een paar fysieke exemplaren in de bibliotheek, of tweedehands van oudere SSMS\u2019ers.\n\nBelangrijk bij verschillen in definities: **de definities uit de Brightspace-materialen gaan v\u00f3\u00f3r**, ook als een ander boek het net anders zegt.',
        bladzijde: 'hoofdstuk 3' },

      { titel: 'Toetsing: drie delen plus drie quizzes',
        tekst: 'Er is \u00e9\u00e9n cumulatieve toets, verdeeld over drie momenten. Je eindcijfer komt uit het totaal over alle drie.',
        punten: [
          'CT1 \u00b7 20 meerkeuzevragen \u00b7 30 minuten \u00b7 20% \u00b7 november \u00b7 nadruk op toepassen (75%)',
          'CT2 \u00b7 6 meerkeuze en 4 open vragen \u00b7 60 minuten \u00b7 50% \u00b7 december \u00b7 6W en het eigen ontwerp',
          'CT3 \u00b7 20 meerkeuzevragen \u00b7 30 minuten \u00b7 30% \u00b7 februari \u00b7 nadruk op evalueren (circa 60%)',
          'Q1 over deel 1, Q2 over deel 2, Q3 over deel 3 \u00b7 via Brightspace \u00b7 pass/fail, met resits',
          'Toetsstof is alle literatuur en materialen op Brightspace tot de toetsdatum, slides en opdrachten inbegrepen'
        ], bladzijde: 'hoofdstuk 4' },

      { titel: 'Hoe je cijfer wordt berekend',
        tekst: 'De punten worden geschaald naar 1000 in Osiris: CT1 200, CT2 500, CT3 300. Een zwak deel kan dus gecompenseerd worden; CT1 telt maar voor een vijfde.\n\nTwee dingen om te weten. Er geldt een **gokcorrectie** bij de meerkeuzevragen: scoor je onder die grens, dan is het cijfer automatisch een 1. En de **cesuur wordt aangepast aan de moeilijkheid**: niet 55% van het maximum, maar 60% van de top 5% hoogste scores wordt de 5,5. Daarom weet je je cijfer pas nadat alle drie de momenten zijn geweest.',
        punten: [
          'Losse delen herkansen kan niet',
          'De herkansing is \u00e9\u00e9n toets van 120 minuten over CT1, CT2 en CT3 samen en telt voor 100%',
          'De cesuur van de herkansing is dezelfde als die van de eerste gelegenheid'
        ], bladzijde: 'hoofdstuk 5' },

      { titel: 'De open vragen van CT2, en waar de punten zitten',
        tekst: 'Je krijgt vier korte academische teksten en schrijft daaruit een compleet applied research design van ongeveer 250 woorden voor een opdrachtgever. Baseer je antwoorden **alleen op de aangeleverde teksten**; alleen bij je beperkingen mag je verder redeneren.',
        punten: [
          'Doelstelling (5 punten) met 2 tot 3 kernacties, elk beginnend met een werkwoord (identificeren, analyseren)',
          'E\u00e9n hoofdvraag (7 punten) van 15 tot 30 woorden, aansluitend op opdrachtgever \u00e9n doelstelling',
          'Twee deelvragen (7 punten) die samen de hoofdvraag helpen beantwoorden',
          'Twee beperkingen (6 punten): benoemen levert 1 punt per stuk op, de onderbouwing van de impact 2 punten per stuk',
          'De SSMS-norm voor elke vraag: toegepast, gefocust, relevant, helder, haalbaar, complex genoeg, open, neutraal geformuleerd en ethisch'
        ], bladzijde: 'appendix 5' },

      { titel: 'Weekprogramma',
        tekst: 'Elke ronde heeft dezelfde vorm: college, workshop, quiz. Je gaat alleen naar **je eigen ingedeelde workshopslot**, want je werkt in vaste groepen. Neem schrijfgerei of een laptop mee.',
        punten: [
          'Week 2 college 1 en week 3 workshop 1 \u00b7 intro research methods \u00b7 week 4 quiz 1',
          'Week 5 college 2 en week 6 workshop 2 \u00b7 6W, begrippen en variabelen \u00b7 week 7 quiz 2',
          'Herfstvakantie, daarna week 8 en 9 de resits van quiz 1 en 2 \u00b7 week 10 CT1',
          'Week 12 college 3 en week 13 workshop 3 \u00b7 applied research design en beperkingen \u00b7 week 14 quiz 3',
          'Week 15 CT2 \u00b7 week 17 college 4 over het hele proces \u00b7 week 18 resit quiz 3 \u00b7 week 20 CT3',
          'Semester 2 week 5 of 6 \u00b7 herkansing'
        ], bladzijde: 'hoofdstuk 6' },

      { titel: 'Regels bij dit vak',
        tekst: 'Aanwezigheid bij colleges en workshops is **niet verplicht maar sterk aangeraden**: wat daar behandeld wordt is precies wat de toets vraagt. Alles is fysiek op de campus; er zijn geen livestreams of opnames tenzij anders gezegd.\n\nJe wordt geacht Brightspace bij te houden voor wijzigingen in inhoud, planning en toetsing. Individuele opdrachten maak je zonder hulp van anderen of van AI-tools; dat geldt als schending van de academische integriteit, en in de toets heb je die tools sowieso niet.\n\nHeb je een aanpassing nodig vanwege een beperking, dan loopt dat via je studieloopbaanbegeleider. Zonder dat offici\u00eble traject kunnen er geen aanpassingen worden gemaakt.',
        bladzijde: 'hoofdstuk 7' },

      { titel: 'De conceptlijst: wat je uit je hoofd moet kennen',
        tekst: 'De conceptlijst in de bijlage is de kern van de toetsstof en volgt de drie delen van het vak.',
        punten: [
          'Deel 1 \u00b7 informele en systematische aanpak, onderzoek, fundamenteel tegenover toegepast, probleem, doelstelling, hoofd- en deelvragen, onderzoeksethiek, data, informatie, feit, theorie, raamwerk, mening, denkfouten en cognitieve biases, kwalitatief en kwantitatief, leestechnieken, deductief en inductief, mixed- en multi-method, triangulatie, holisme',
          'Deel 2 \u00b7 onderzoeksproject, voor- en achtergrondonderzoek, 6W, onderzoeksvoorstel, casestudy, bronnen en citeren, primair en secundair, witte en grijze literatuur, peer review',
          'Deel 3 \u00b7 applied research design, afbakening, soorten onderzoeksvragen, beperkingen, generaliseerbaarheid, populatie en steekproef, representativiteit, onafhankelijke, afhankelijke, controle-, storende, mediërende en modererende variabelen, verbanden tussen variabelen, hypothese, betrouwbaarheid, validiteit, conceptueel raamwerk en model'
        ], bladzijde: 'appendix 7' }
    ]
  }


};

/* ============================================================
   Professional Skills — de drie opdrachten als aanpakles
   (2026-27 PS Mid-term #1, Mid-term #2, End-term)

   Doel: niet de opdracht uitvoeren, maar laten zien hoe je hem
   aanpakt. Geen kant-en-klare voorbeeldantwoorden, wel de route:
   welke theorie waar, in welke volgorde, en waar de rubric op let.
   ============================================================ */

LESSTOF['professional-skills/opdrachten'] = [
  {
    id: 'analyse', titel: 'Opdracht 1 · Communicatieanalyse',
    blokken: [
      { type: 'uitleg', titel: 'Waar dit om gaat',
        tekst: 'Midterm, **groepsopdracht**, pass/fail. Je analyseert de verbale en non-verbale communicatie van een politicus of erkend safety/security-professional (ook uit een internationale of humanitaire organisatie) tijdens een speech, officiële bijeenkomst of onderhandeling.\n\n**Duur:** maximaal 15 minuten presenteren, plus 15 minuten voor vragen en feedback. Deadline: semester 1, week 10 (9 tot 11 november 2026). Herkansing: week 17, met een **nieuwe video** van een ander evenement of andere spreker(s).' },

      { type: 'tabel', titel: 'Welke theorie hoort bij welk deel van je analyse',
        kop: ['Onderdeel', 'Theorie', 'Wat je ermee doet'],
        rijen: [
          ['Publiek bepalen', 'Audience profiling model (Manning & Reece)', 'Bepaal wie het publiek van de spreker is'],
          ['Aanpassingsgedrag', 'Communication Accommodation Theory (Giles)', 'Zoek voorbeelden van convergentie, divergentie en maintenance: past de spreker zich aan het publiek aan, juist niet, of houdt hij zijn eigen stijl vast?'],
          ['Verbaal versus non-verbaal', '7/38/55-regel (Mehrabian, via Amsel)', 'Interpreteer de verhouding tussen woorden, toon en lichaamstaal in de impact van de boodschap'],
          ['Cultuurverschillen', 'Hofstede’s Cultural Dimensions', 'Vergelijk hoe cultuur de communicatiestijl van de spreker beïnvloedt, vooral relevant bij internationale sprekers']
        ] },

      { type: 'stappen', titel: 'Aanpak in vijf stappen',
        items: [
          { titel: '1. Kies een video die genoeg oplevert',
            tekst: 'Een landleider, politicus, of hooggeplaatste vertegenwoordiger van een internationale organisatie, tijdens een publieke speech, top of onderhandeling. **De rubric eist expliciet "genoeg data"**: één of twee gebaren of een paar accessoires is niet genoeg. Kies dus een fragment van een paar minuten met zichtbare mimiek, houding én hoorbare stem, niet een korte soundbite.' },
          { titel: '2. Kijk minstens twee keer, met een ander doel per keer',
            tekst: 'Eerste keer: alleen kijken, algemene indruk. Tweede keer: noteer per theorie uit de tabel hierboven wat je ziet. Noteer per observatie het **tijdstip in de video**, zodat je later een screenshot of clip kunt terugvinden voor je slides.' },
          { titel: '3. Sorteer je observaties in sterk en zwak',
            tekst: 'Maak twee kolommen. Vraag jezelf bij elke observatie: ondersteunt dit de boodschap, of verstoort het die? Een spreker kan sterk zijn in woordkeuze maar zwak in oogcontact; benoem dat apart, niet als één oordeel over "de spreker".' },
          { titel: '4. Vertaal observaties naar conclusies én aanbevelingen',
            tekst: 'Dit is de stap waar groepen vaak punten laten liggen. Een observatie ("hij kijkt veel naar zijn notities") is geen conclusie. Een conclusie legt uit **wat dat betekent voor het publiek of de onderhandeling** ("dit kan overkomen als onzekerheid, wat het vertrouwen van de tegenpartij kan schaden"). De rubric vraagt expliciet om **zowel waardering voor sterke punten als kritiek op zwakke punten**; sla het eerste niet over.' },
          { titel: '5. Bouw de presentatie in de vereiste volgorde',
            tekst: 'Korte inleiding, de communicatieanalyse zelf, conclusie met aanbevelingen, afsluiting. Gebruik screenshots, gifs of korte fragmenten uit de video om je observaties te tonen, niet alleen te vertellen. Verdeel de spreektijd gelijk over de groep.' }
        ] },

      { type: 'waarschuwing', titel: 'Waar groepen op struikelen',
        tekst: '**Te weinig data.** De rubric wijst dit met naam: 1 tot 2 gebaren of accessoires analyseren is onvoldoende.\n\n**Observaties zonder theorie.** "Hij communiceerde slecht" is geen analyse. Elke observatie moet je kunnen koppelen aan een van de vier theorieën uit de tabel.\n\n**Alleen kritiek, geen waardering, of andersom.** Beide moeten in je conclusie zitten.\n\n**Ongelijke spreektijd.** Dit is een apart rubriccriterium, dus plan het net zo bewust als de inhoud.' },

      { type: 'checklist', titel: 'Kun je dit straks laten zien?',
        tekst: 'Gebaseerd op de 17 criteria uit het beoordelingsformulier, gegroepeerd. Je slaagt bij minimaal 9 van de 17, met minstens 1 per sectie. Vink alleen af wat je groep daadwerkelijk kan laten zien.',
        items: [
          { doel: 'De presentatie dekt alle onderdelen van de opdracht en bespreekt zwakke én sterke aspecten grondig',
            uitleg: 'Loop je vier theorieën uit de tabel langs: staat elke theorie zichtbaar in je slides, met minstens één voorbeeld?' },
          { doel: 'Elke conclusie is onderbouwd met een concreet voorbeeld uit de video',
            uitleg: 'Check per conclusie: heb ik een screenshot, tijdstip of citaat erbij staan, of beweer ik het alleen?' },
          { doel: 'De groep kan vragen beantwoorden met uitleg, niet alleen met een kort antwoord',
            uitleg: 'Oefen dit vooraf: laat iemand buiten je groep een lastige vraag stellen over je zwakste observatie.' },
          { doel: 'De presentatie is helder gestructureerd en de tijd is gelijk verdeeld',
            uitleg: 'Zet een klok tijdens het oefenen. Verdeel niet alleen de tijd maar ook de onderdelen vooraf op naam.' },
          { doel: 'Jullie houden oogcontact, variëren in volume en tempo, en gebruiken geen stopwoorden',
            uitleg: 'Neem een oefenronde op en kijk terug; dit hoor je zelf niet altijd tijdens het presenteren.' },
          { doel: 'De slides zijn consistent, leesbaar en ondersteunen het verhaal in plaats van het te herhalen',
            uitleg: 'Test: zou iemand die alleen de slides ziet, zonder jullie stem, de kern nog snappen?' },
          { doel: 'De reflectie op teamwork benoemt concrete verbeterpunten, niet alleen "het ging goed"',
            uitleg: 'Bespreek dit als groep vóór de presentatie, niet pas als afsluitende zin die je er snel bij verzint.' }
        ] }
    ]
  },

  {
    id: 'cv', titel: 'Opdracht 2 · Cv en motivatiebrief',
    blokken: [
      { type: 'uitleg', titel: 'Waar dit om gaat',
        tekst: 'Midterm, **individuele opdracht**, pass/fail bij minimaal 7 van de 10 criteria. Je zoekt een echte vacature in het safety- of securityveld en schrijft daar een cv en motivatiebrief voor.\n\n**Deadline:** donderdag 12 november, vóór 23:59. Herkansing: maandag 11 januari 2027, vóór 23:59, met een **nieuwe vacature**.' },

      { type: 'tabel', titel: 'Welke theorie hoort bij welk deel',
        kop: ['Onderdeel', 'Theorie', 'Wat je ermee doet'],
        rijen: [
          ['Jezelf presenteren', 'Audience profiling model (Manning & Reece)', 'Bepaal wie je lezer is: de recruiter, de hiring manager, en wat die wil zien'],
          ['Aansluiten op de werkgever', 'Communication Accommodation Theory (Giles)', 'Stem je toon en woordkeuze af op de communicatiestijl van de organisatie']
        ] },

      { type: 'stappen', titel: 'Aanpak in zes stappen',
        items: [
          { titel: '1. Vind een écht bestaande vacature',
            tekst: 'In het safety- of securityveld, iets waar je tijdens of na je opleiding op zou kunnen solliciteren. Bewaar de volledige tekst; je moet die straks als platte tekst inleveren, geen weblink.' },
          { titel: '2. Analyseer de functie-eisen',
            tekst: 'Maak een lijstje van gevraagde kwalificaties en competenties. Dit lijstje gebruik je later om te checken of je cv ze allemaal raakt.' },
          { titel: '3. Onderzoek de organisatiecultuur',
            tekst: 'Bekijk de website, sociale media en advertenties van de werkgever. Is de toon formeel of informeel? Zakelijk of missiegedreven? Dit bepaalt de toon van je motivatiebrief, dus doe dit vóórdat je gaat schrijven, niet achteraf.' },
          { titel: '4. Bouw je cv rond de functie-eisen',
            tekst: 'Niet je hele geschiedenis, maar wat aansluit op stap 2. Gebruik waar mogelijk **kwantificeerbare resultaten**: cijfers, percentages, taalniveaus als A1/B2 of basic/fluent. Eén A4, met een sectie relevante vaardigheden (technisch én soft skills) in de taal van het vakgebied.' },
          { titel: '5. Schrijf de motivatiebrief in drie delen',
            tekst: 'Pakkende opening die je interesse in déze rol en dít bedrijf toont, met de bedrijfsnaam erin. Kern met concrete voorbeelden die aansluiten op de functie-eisen. Afsluiting die je geschiktheid samenvat, enthousiasme uitspreekt en een call to action bevat. 350 tot 400 woorden, niet meer, niet minder.' },
          { titel: '6. Controleer tegen het inleverprotocol',
            tekst: 'Dit is losstaand van de inhoud, maar een gemist vinkje bij het protocol betekent automatisch afwijzing, ongeacht hoe goed je cv is.' }
        ] },

      { type: 'waarschuwing', titel: 'Het inleverprotocol is hard, niet een suggestie',
        tekst: 'Eén pdf-bestand met vacaturetekst, cv en motivatiebrief samengevoegd, allemaal in het Engels. Bestandsnaam: je naam plus de functietitel, bijvoorbeeld "T. Smith_junior consultant". Uploaden in de map Submission Point op Brightspace.\n\nEen **niet-aangevinkt vakje bij het protocol** in het beoordelingsformulier betekent dat je inzending wordt afgewezen, nog vóórdat er naar de inhoud wordt gekeken. Check dit dus als allerlaatste stap, apart van je inhoudelijke check.' },

      { type: 'checklist', titel: 'Kun je dit straks laten zien?',
        tekst: 'Gebaseerd op de 10 beoordelingscriteria. Je slaagt bij minimaal 7 van de 10.',
        items: [
          { doel: 'Mijn cv laat zien hoe mijn vaardigheden en ervaring aansluiten op déze specifieke vacature',
            uitleg: 'Leg je lijstje uit stap 2 naast je cv. Staat elk gevraagd punt er expliciet in, of moet de lezer het zelf bedenken?' },
          { doel: 'Mijn cv is overzichtelijk met kopjes en bullets, en de belangrijkste dingen springen eruit',
            uitleg: 'Laat iemand anders 10 seconden naar je cv kijken en vraag wat ze zich herinneren.' },
          { doel: 'Mijn cv bevat concrete, meetbare resultaten in plaats van alleen taken',
            uitleg: 'Herschrijf elke taakomschrijving als een resultaat: niet "hielp bij X" maar "droeg bij aan X met resultaat Y".' },
          { doel: 'Mijn cv en brief zijn foutloos in spelling, opmaak en lettertype, en gebruiken bij elkaar passende templates',
            uitleg: 'Lees je brief hardop voor; foute zinsconstructies hoor je eerder dan je ze ziet.' },
          { doel: 'Mijn brief is echt geschreven voor déze organisatie, met de bedrijfsnaam en een verwijzing naar de vacaturetekst',
            uitleg: 'Zou deze brief ook passen bij een andere vacature? Zo ja, is hij nog niet specifiek genoeg.' },
          { doel: 'Mijn brief heeft een duidelijke opbouw: inleiding, kern, conclusie met call to action',
            uitleg: 'Streep elke alinea aan met welk van de drie doelen hij dient; een alinea zonder duidelijk doel schrap je.' },
          { doel: 'De toon van mijn brief past bij de organisatiecultuur die ik heb onderzocht',
            uitleg: 'Vergelijk je eigen woordkeuze met die op de website van het bedrijf: formeel tegenover informeel, zakelijk tegenover missiegedreven.' }
        ] }
    ]
  },

  {
    id: 'eindproject', titel: 'Eindopdracht · Safe and sound for fun',
    blokken: [
      { type: 'uitleg', titel: 'Waar dit om gaat',
        tekst: 'Eindtoets, **groepsopdracht**, cijfer 1-10 via gewogen criteria. Je bent ingehuurd door een organisatie (pretpark, dierentuin, safaripark, circus of casino, zelf te kiezen) om de belangrijkste risico’s te onderzoeken en veiligheidsmaatregelen voor personeel en bezoekers voor te stellen.\n\n**Publiek:** het management en de securityafdeling van de organisatie. **Duur:** maximaal 25 minuten, plus 15 minuten voor feedback. Deadline: semester 1, week 20 (1 tot 3 februari 2027). Herkansing: semester 2, week 4, met een **ander object**.' },

      { type: 'tabel', titel: 'Welke theorie hoort bij welk deel',
        kop: ['Onderdeel', 'Theorie', 'Wat je ermee doet'],
        rijen: [
          ['Communicatie van de maatregelen', 'McLuhan, "The medium is the message"', 'Kies communicatiekanalen die passen bij wat je communiceert, niet zomaar vijf kanalen op een rijtje'],
          ['Risico-analyse', 'Risk Breakdown Structure', 'Structureer de risico’s van je gekozen locatie hiërarchisch, van hoofdcategorieën naar specifieke risico’s'],
          ['Klantrelatie en advies', 'Peter Block, consulting model (of vergelijkbaar)', 'Positioneer jezelf als adviseur van het park, niet als buitenstaander die alleen kritiek levert'],
          ['Leiderschap (indien van toepassing)', 'Full Range Leadership Model (Avolio & Bass, of vergelijkbaar)', 'Als je een groepsleider had, benoem welke leiderschapsstijl je hebt ervaren']
        ] },

      { type: 'stappen', titel: 'Aanpak in zeven stappen',
        items: [
          { titel: '1. Kies je object en verdeel rollen',
            tekst: 'Pretpark, aquapark, safaripark, dierentuin, circus, casino, of een vergelijkbare attractie. Verdeel taken binnen de groep zodat iedereen een duidelijk onderdeel heeft.' },
          { titel: '2. Verzamel data over risico’s',
            tekst: 'Via media-berichten en statistieken over incidenten bij vergelijkbare locaties, of door zelf een bezoek te brengen en observaties te verzamelen. De bronnenlijst in de manual is een startpunt, geen verplichte literatuur.' },
          { titel: '3. Analyseer met een Risk Breakdown Structure',
            tekst: 'Zet de verzamelde data om in een hiërarchische structuur: hoofdcategorieën van risico (bijvoorbeeld attractieveiligheid, publieksstromen, dierenwelzijn bij een dierentuin) met daaronder specifieke risico’s per categorie.' },
          { titel: '4. Formuleer maatregelen',
            tekst: 'Voor zowel personeel als bezoekers. Staat er al iets over veiligheid op de officiële website van je gekozen locatie, bouw daar dan op voort met iets nieuws of een verbetering, in plaats van te herhalen wat er al staat.' },
          { titel: '5. Kies minstens vijf communicatiekanalen',
            tekst: 'Waarmee je die maatregelen effectief overbrengt op personeel én bezoekers. Denk aan het verschil tussen een boodschap voor personeel (interne kanalen) en voor bezoekers (publieke kanalen), en waarom het ene kanaal beter past dan het andere.' },
          { titel: '6. Reflecteer op je eigen proces',
            tekst: 'Drie concrete verbeterpunten en drie dingen die goed gingen, over zowel de uitvoering van het project als het teamwork zelf.' },
          { titel: '7. Bouw de presentatie in de vaste, verplichte volgorde',
            tekst: 'Introductie van de groep en taakverdeling, korte introductie van de organisatie, data en voorbeelden van incidenten, de risicoanalyse, de voorgestelde maatregelen, de communicatiekanalen, en de reflectie op teamwork. Deze volgorde staat vast in de opdracht; sla geen onderdeel over.' }
        ] },

      { type: 'waarschuwing', titel: 'Waar groepen op struikelen',
        tekst: 'De **presentatiestructuur is verplicht**, niet een suggestie: alle zeven onderdelen moeten erin, in die volgorde. Ontbreekt er één, dan mis je punten op "Content / Organisatie", het zwaarst wegende criterium (40%).\n\nDe **bronnenlijst in de manual is optioneel**, geen verplichte literatuur; gebruik hem alleen als startpunt voor je eigen onderzoek.\n\nVeiligheidsmaatregelen die je alleen **herhaalt** van de officiële website leveren geen punten op; het moet iets nieuws zijn of een verbetering.' },

      { type: 'tabel', titel: 'Waar de punten zitten',
        kop: ['Criterium', 'Weging', 'Kernvraag om jezelf te stellen'],
        rijen: [
          ['Content, organisatie en Q&A', '40%', 'Staan alle verplichte onderdelen erin, onderbouwd met bewijs, en kunnen we vragen beantwoorden met uitleg?'],
          ['Delivery', '25%', 'Houden we oogcontact, variëren we in volume en tempo, is de tijd gelijk verdeeld, kleden we ons professioneel?'],
          ['Slides: layout, design en taal', '20%', 'Zijn de visuals consistent en ondersteunend, is er geen spel- of grammaticafout blijven staan?'],
          ['Projectmanagement, teamwork en feedback', '15%', 'Is de bijdrage van elk groepslid zichtbaar, en is onze reflectie concreet in plaats van vrijblijvend?']
        ],
        noot: 'Dit is een gewogen cijfer, geen pass/fail: elk criterium krijgt een cijfer 1-10, en de gewogen som is je eindcijfer.' }
    ]
  }
];

/* ============================================================
   Course manual — Professional Skills, in dezelfde vorm als
   Demystifying Research Methods hierboven.
   ============================================================ */
(function(){
  if (typeof VAK_MANUAL === 'undefined') return;

  VAK_MANUAL['professional-skills'] = {
    pdf: 'manuals/Y1_manual_professional_skills.pdf',
    pdfNaam: 'Professional Skills course manual (2026-27)',
    studiegids: 'skills',
    intro: 'Praktijkgericht vak naast de theorievakken: communicatie, public speaking, personal branding, conflictoplossing, teamwork, leiderschap, consultancy en projectmanagement, getoetst met twee groepspresentaties en één individuele opdracht.',
    regels: [
      { label: 'Code',        waarde: 'SSMS-1S1-23' },
      { label: 'Docenten',    waarde: 'Gohar Baghdasaryan (coördinator), Andrew Pearce, Boudewijn Wisse, Jonathan Corr, Siddik Ekici' },
      { label: 'Studiepunten', waarde: '5 ECTS · 35 contacturen · 105 uur zelfstudie' },
      { label: 'Literatuur',  waarde: 'Geen aanschaf nodig; teksten via weblinks op Brightspace' },
      { label: 'Midterm groep',   waarde: 'Communicatieanalyse, pass/fail · 25% · week 10' },
      { label: 'Midterm individueel', waarde: 'Cv en motivatiebrief, pass/fail · 25% · week 10' },
      { label: 'Eindtoets',   waarde: 'Groepspresentatie "Safe and sound for fun", gewogen cijfer · 50% · week 20' },
      { label: 'Let op',      waarde: 'Te laat bij een toetsmoment betekent automatisch zakken voor dat onderdeel, direct naar de herkansing' }
    ],
    samenvatting: [
      { titel: 'Wat je hier leert',
        tekst: 'Naast je analytische en academische vakken heb je vaardigheden nodig om **effectief om te gaan met mensen op alle niveaus** in een organisatie: communiceren, presenteren, jezelf presenteren, conflicten oplossen, samenwerken, leiden, adviseren en projecten managen.',
        punten: [
          'Constructief samenwerken met uiteenlopende stakeholders en achtergronden',
          'Je communicatiestijl aanpassen aan doelgroep, situatie en doel',
          'Digitale tools, inclusief AI, gebruiken voor professionele producten',
          'Projecten en teams leiden met zelfregulatie en professionaliteit',
          'Activiteiten en middelen omzetten in een uitvoerbaar plan'
        ] },

      { titel: 'Drie toetsmomenten, drie vormen',
        tekst: 'Twee **groepspresentaties** (pass/fail bij de midterm, gewogen cijfer bij de eindtoets) en één **individuele schriftelijke opdracht** (pass/fail). Alle drie hebben een eigen aanpakles hiernaast, met de theorie, de stappen en de rubriccriteria als checklist.',
        punten: [
          'Opdracht 1 · communicatieanalyse van een politicus of professional · groep · week 10',
          'Opdracht 2 · cv en motivatiebrief bij een echte vacature · individueel · week 10',
          'Eindopdracht · "Safe and sound for fun"-project · groep · week 20'
        ] },

      { titel: 'Te laat is direct zakken',
        tekst: 'Dit vak is strenger dan de theorievakken over deadlines. Studenten of werkgroepen die te laat zijn bij een toetsmoment, presentatie of online inlevering, **zakken voor dat onderdeel** en gaan direct naar de herkansing. Er is geen coulance.' },

      { titel: 'De AI-paradox met DRM',
        tekst: 'Leerdoel 3 vraagt letterlijk om digitale tools **inclusief AI** te gebruiken voor professionele producten. Bij Demystifying Research Methods geldt AI-gebruik bij individuele opdrachten juist als schending van de academische integriteit. Geen tegenspraak, wel iets om per vak en per opdracht scherp te houden.' }
    ]
  };
})();

/* ============================================================
   Het vak registreren, net als Intro to Safety & Security en DRM:
   één les "Opdrachten" met de drie assignments als tabbladen,
   die de losse collegeplekken uit het rooster vervangt.
   ============================================================ */

/* ============================================================
   Fundamentals of Academic Writing (FAW) — drie lessen naast
   de studiegidspagina studiegids/writing:
   1. naslagwerk  — algemene regels voor Engels academisch schrijven
   2. rubric      — de beoordelingsrubric zelf, kort en praktisch
   3. oefening-1  — het cocaïne-artikel als aanpakoefening

   Bronnen: FAW 2025-2026 Rubric and Conversion Chart, Dimensions of
   Rubric Explained, en de meegeleverde schrijfopdracht met artikel.
   ============================================================ */

LESSTOF['fundamentals-of-academic-writing/naslagwerk'] = [
  {
    id: 'opbouw', titel: 'Opbouw',
    blokken: [
      { type: 'uitleg', titel: 'Waarom dit een apart naslagwerk is',
        tekst: 'Bij dit vak telt maar **één criterium van de vijf** rechtstreeks over grammatica; de andere vier gaan over hoe je een tekst **opbouwt en formuleert**. Dat is precies het soort kennis dat je niet één keer leest en onthoudt, maar telkens even terugzoekt. Dit naslagwerk zet het overzichtelijk op een rijtje: opbouw, zinsniveau, cohesie, en lay-out. Gebruik het als naslag tijdens het schrijven, niet als iets om in één keer uit je hoofd te leren.\n\nDe voorbeelden staan in het Engels, want dat is de taal waarin je dit moet kunnen **toepassen**, niet alleen herkennen.' },

      { type: 'begrippen', titel: 'Coherence versus cohesion: het verschil dat je moet kennen',
        items: [
          { begrip: 'Coherence (macro-niveau)',
            definitie: 'gaat over de retorische opbouw van de hele tekst: is er een heldere paragraafindeling, heeft elke alinea een topic sentence, worden argumenten uitgewerkt en onderbouwd, en is duidelijk wat het doel en publiek van de tekst is? Coherence is de vraag "klopt de logica van dit stuk als geheel?"' },
          { begrip: 'Cohesion (micro-niveau)',
            definitie: 'gaat over de expliciete verbindingen tussen zinnen en alinea’s: verwijswoorden, synoniemen, signaalwoorden. Cohesion is de vraag "zie ik hoe deze zin aan de vorige vastzit?"' }
        ] },

      { type: 'stappen', titel: 'Een alinea opbouwen die aan coherence voldoet',
        items: [
          { titel: '1. Begin met een topic sentence',
            tekst: 'De eerste zin van een alinea zegt waar die alinea over gaat. Een lezer die alleen de eerste zin van elke alinea leest, moet de structuur van je hele tekst kunnen volgen.' },
          { titel: '2. Werk het idee uit, herhaal het niet',
            tekst: 'De zinnen na de topic sentence onderbouwen, verklaren of illustreren die zin. Een alinea die alleen hetzelfde idee herhaalt in andere woorden, voegt niets toe.' },
          { titel: '3. Houd één onderwerp per alinea aan',
            tekst: 'Zodra je overstapt naar een nieuw idee, begint een nieuwe alinea. Dit is de meest voorkomende coherence-fout: te veel in één alinea proppen.' },
          { titel: '4. Zorg dat de volgorde van je alinea’s een logica volgt',
            tekst: 'Bijvoorbeeld van algemeen naar specifiek, van oorzaak naar gevolg, of chronologisch. De lezer moet nooit terug hoeven te bladeren om een verband te snappen.' }
        ] }
    ]
  },

  {
    id: 'cohesie', titel: 'Cohesie',
    blokken: [
      { type: 'uitleg', titel: 'Zeven manieren om zinnen aan elkaar te knopen',
        tekst: 'Cohesion-technieken zorgen dat een lezer de verbanden tussen zinnen ziet zonder dat jij het met zoveel woorden hoeft te zeggen. Hieronder dezelfde voorbeeldtekst, telkens geannoteerd op één techniek. In de brontekst is elke techniek gemarkeerd binnen dezelfde vier zinnen, zodat je ziet dat ze **tegelijk** in één lopende tekst voorkomen, niet als losse trucjes.' },

      { type: 'voorbeeld', titel: 'De basiszin',
        tekst: '"Last Sunday, in a carriage of an idle passenger train in a railway depot in Nijmegen, there was a serious explosion. It blew out doors and windows of the carriage, and one man, who may have caused the blast himself, was killed. However, it is uncertain if the incident was a suicide attempt."' },

      { type: 'tabel', titel: 'Wat er onder de motorkap gebeurt',
        kop: ['Techniek', 'Waar je op let'],
        rijen: [
          ['Verwijswoorden (reference)', '"It" in de tweede zin verwijst duidelijk terug naar "explosion" uit de eerste zin, zonder dat woord te herhalen'],
          ['Synoniemen', '"explosion" en "the blast" verwijzen naar hetzelfde, met een ander woord, zodat de tekst niet eentonig wordt'],
          ['Lexicale ketens', 'woorden uit hetzelfde betekenisveld lopen door de tekst: carriage, doors, windows, train, depot horen allemaal bij "spoorwegongeval"'],
          ['Nieuwe versus bekende informatie', 'elke zin herhaalt kort iets bekends (het ongeval) voordat hij iets nieuws toevoegt (wie er stierf, of het opzet was), zodat de lezer nooit de draad kwijtraakt'],
          ['Grammatica: lidwoorden', '"a serious explosion" (nieuw, onbepaald lidwoord) wordt in de volgende zin "the blast" (bekend, bepaald lidwoord)'],
          ['Signaalwoorden (discourse markers)', '"however" aan het begin van de derde zin kondigt een tegenstelling aan: wat je net las wordt genuanceerd'],
          ['Samenvattende woorden', 'een woord als "incident" in de laatste zin vat de hele gebeurtenis in één term samen']
        ],
        noot: 'Dit lijstje is niet compleet, maar wel de kern. Check bij het herlezen van je eigen tekst: kan een lezer bij elke "it", "this" of "however" meteen zeggen waar dat naar terugwijst?' }
    ]
  },

  {
    id: 'stijl', titel: 'Formele stijl',
    blokken: [
      { type: 'uitleg', titel: 'Wat "academisch" op zinsniveau betekent',
        tekst: 'Dit is het rijtje waar studenten in de praktijk de meeste punten laten liggen bij het criterium **Style**, omdat het gaat om gewoontes die je in spreektaal juist aanleert. Elke regel hieronder komt letterlijk uit het cursusmateriaal.' },

      { type: 'vergelijking', titel: 'Informeel tegenover academisch',
        links: { titel: 'Vermijd dit',
          punten: [
            'Persoonlijke toon: "I think", "we can see"',
            'De lezer aanspreken: "you will notice that..."',
            'Frasale werkwoorden: "get rid of"',
            'Vage woorden: "a big problem", "good", "bad", "interesting"',
            'Samentrekkingen: "won’t", "it’s"',
            'Retorische vragen: "Is dit niet precies het probleem?"',
            '"Opgeblazen" taal zonder onderbouwing: "an infinite number of"',
            '"Get"-constructies: "get tired"',
            'Stopwoorden: "really", "basically", "quite", "totally"',
            '"Etc." aan het einde van een opsomming',
            'Clichés: "last but not least", "in a nutshell"',
            'Niet-genderneutrale taal: "the CEO... he..."',
            'Zinnen die beginnen met And, But, Because, So',
            'Informele signaalwoorden: "Besides", "So", "Luckily"'
          ] },
        rechts: { titel: 'Gebruik dit',
          punten: [
            'Onpersoonlijke, geanonimiseerde toon',
            'Neutrale formuleringen zonder directe aanspreekvorm',
            'Eén werkwoord: "eliminate"',
            'Specifieke woorden: "a serious problem"',
            'Voluit geschreven vormen: "will not", "it is"',
            'Declaratieve zinnen die de conclusie direct stellen',
            'Onderbouwde, concrete claims',
            'Eén werkwoord: "to tire"',
            'Weglaten, of vervangen door een concreet woord',
            '"including" of een volledige opsomming',
            'Directe, concrete formuleringen',
            'Meervoud of herformulering: "CEOs... they..."',
            'Herformuleer zodat de zin op het onderwerp begint',
            'Formele verbindingswoorden: "Moreover", "Therefore", "Fortunately"'
          ] } },

      { type: 'tekst', titel: 'Vaktermen: wél gebruiken, mits toegankelijk',
        tekst: 'Anders dan de rest van dit lijstje is vakjargon in academisch schrijven juist **gewenst**, mits het voor een geïnteresseerde buitenstaander te volgen blijft. De rubric noemt dit expliciet bij het criterium Paraphrasing: consistent professioneel vocabulaire gebruiken telt mee als sterk punt, mits de rest van de zin nog steeds jouw eigen formulering is.' }
    ]
  },

  {
    id: 'layout', titel: 'Lay-out',
    blokken: [
      { type: 'tekst', titel: 'Wat wél bij dit vak hoort',
        tekst: 'Voor een academische samenvatting zoals je die bij dit vak schrijft, gelden een paar vaste lay-outafspraken:\n\n- **Lopende alinea’s, geen kopjes.** De opdrachten in dit vak zijn expliciet: "there should be no headings". Je tekst moet zijn logica tonen via topic sentences en signaalwoorden, niet via opgeknipte kopjes.\n- **Consistente alinea-afstand.** Of je nu inspringt of een witregel gebruikt tussen alinea’s, kies één systeem en houd dat de hele tekst vol.\n- **Woordentelling is hard.** Bij de voorbeeldopdracht staat een bandbreedte van 500 tot 600 woorden; dat is geen richtlijn maar een harde eis waarop je wordt beoordeeld.' },

      { type: 'waarschuwing', titel: 'Wat hier bewust niet in staat',
        tekst: 'Een **aanhef** (zoals "Dear...") of een afsluitende groet hoort niet bij dit vak. De schrijfvorm hier is een doorlopende academische tekst, geen brief of e-mail. Wil je juist weten hoe je een professionele brief of motivatiebrief opbouwt, inclusief aanhef en afsluiting, kijk dan bij Professional Skills; daar staat die aanpak uitgewerkt bij de cv-opdracht.' }
    ]
  }
];

/* ---------------------------------------------------------- */

LESSTOF['fundamentals-of-academic-writing/rubric'] = [
  {
    id: 'rubric', titel: 'Rubric en puntentelling',
    blokken: [
      { type: 'uitleg', titel: 'Hoe je precies wordt beoordeeld',
        tekst: 'Vijf criteria, elk 1 tot 4 punten, dus maximaal 20. Om te slagen mag je **nergens een 1** scoren, ongeacht je totaal. Dat betekent dat je zwakste criterium belangrijker is dan je gemiddelde.' },

      { type: 'tabel', titel: 'De vijf criteria: wat scheelt een 1 van een 4',
        kop: ['Criterium', 'Een 1 betekent', 'Een 4 betekent'],
        rijen: [
          ['Content', 'De samenvatting mist de kern of de hoofdpunten van de originele tekst', 'Volledig, accuraat begrip; alle belangrijke punten zijn geïdentificeerd en gepresenteerd'],
          ['Paraphrasing', 'Veel letterlijk gekopieerde zinnen of onbegrijpelijke parafrases; nauwelijks vakjargon', 'De tekst wijkt inhoudelijk significant af van het origineel maar draagt dezelfde ideeën over; consistent vakjargon'],
          ['Paragraphs (coherence & cohesion)', 'Geen duidelijke alineastructuur, geen topic sentences, lastig te volgen', 'Duidelijke, logische alinea’s met effectieve topic sentences; de tekst loopt naadloos'],
          ['Sentence structure, grammar & accuracy', 'Beperkte zinsvariatie, veel grammatica-, interpunctie- en spelfouten', 'Brede variatie aan zinsstructuren, vrijwel foutloos'],
          ['Style', 'Informele schrijfstijl, veel informeel taalgebruik', 'Consistent formeel en academisch, geen informeel taalgebruik']
        ] },

      { type: 'tabel', titel: 'Omrekentabel', toetsstof: true,
        kop: ['Punten', 'Cijfer', 'Punten', 'Cijfer'],
        rijen: [
          ['20', '10', '12', '6'],
          ['19', '9,5', '11', '5,5 (net voldoende)'],
          ['18', '9', '10', '5,1'],
          ['17', '8,5', '9', '4,7'],
          ['16', '8', '8', '4,3'],
          ['15', '7,5', '7', '3,9'],
          ['14', '7', '6', '3,5'],
          ['13', '6,5', '5', '3']
        ] },

      { type: 'preview', titel: 'De achtergrond bij elk criterium',
        vakId: 'fundamentals-of-academic-writing', lesId: 'naslagwerk',
        tekst: 'Deze rubric zegt wát er wordt beoordeeld. Het naslagwerk hiernaast laat zien hóé je daar met je tekst aan voldoet: opbouw, cohesie en formele stijl, met voorbeelden.' }
    ]
  }
];

/* ---------------------------------------------------------- */

LESSTOF['fundamentals-of-academic-writing/oefening-1'] = [
  {
    id: 'aanpak', titel: 'Oefening · "Europe’s cocaine problem"',
    blokken: [
      { type: 'uitleg', titel: 'De opdracht',
        tekst: 'Lees het artikel "How big is Europe’s cocaine problem, and what is the human cost?" (The Guardian, Annie Kelly, 11 juni 2024) en schrijf een samenvatting van **500 tot 600 woorden**.\n\nExplicieate eisen uit de opdracht:\n\n- Academische stijl, lopende alinea’s, **geen kopjes**\n- **Geen** geciteerd materiaal uit het origineel\n- Begrijpelijk voor iemand die het origineel niet heeft gelezen\n- **Bovenaan je samenvatting: het hoofdpunt van elke alinea, apart genoemd**\n\nDeze les helpt je met de aanpak. Je krijgt geen uitgewerkt voorbeeld, want dat zou precies het parafraseren zijn dat de opdracht van jou vraagt.' },

      { type: 'stappen', titel: 'Aanpak in zeven stappen',
        items: [
          { titel: '1. Lees actief, niet passief',
            tekst: 'Lees het artikel één keer helemaal door zonder te noteren. Lees het daarna een tweede keer en markeer per sub-kopje (het artikel heeft er zelf een aantal, zoals "How much cocaine is coming to Europe?") wat de kernclaim van dat stuk is.' },
          { titel: '2. Maak een lijst van hoofdpunten per onderdeel',
            tekst: 'Het artikel is zelf al opgedeeld in vraag-onderdelen: waar komt cocaïne vandaan, hoeveel komt er binnen, hoe komt het Europa in, wat kost het, wat zijn de gevolgen. Vat elk onderdeel in **één zin** samen, in je eigen woorden. Dit wordt de basis voor je alinea-indeling én voor het verplichte lijstje bovenaan.' },
          { titel: '3. Bepaal je alinea-indeling vóór je gaat schrijven',
            tekst: 'Niet elk sub-onderdeel van het artikel hoeft een eigen alinea te worden; sommige kun je samenvoegen. Beslis dit bewust, en schrijf per geplande alinea eerst de topic sentence, vóórdat je de rest invult.' },
          { titel: '4. Parafraseer op zinsniveau, niet op woordniveau',
            tekst: 'Een veelgemaakte fout is losse woorden vervangen door synoniemen terwijl de zinsstructuur van het origineel intact blijft; de rubric herkent dat als onvoldoende parafrase. Herschrijf in plaats daarvan de **hele gedachte** in je eigen zinsopbouw: verander waar nodig de volgorde van hoofd- en bijzin, of zet een actieve zin om in een passieve, of andersom.' },
          { titel: '5. Bouw cohesie tussen je alinea’s',
            tekst: 'Gebruik de technieken uit het naslagwerk: signaalwoorden tussen alinea’s, verwijswoorden binnen een alinea, en een bewuste opbouw van bekend naar nieuw. Het artikel zelf springt nogal tussen onderwerpen; jouw samenvatting hoeft die sprongen niet te kopiëren als jij een logischer volgorde ziet.' },
          { titel: '6. Check je stijl tegen het naslagwerk',
            tekst: 'Loop specifiek na: geen "you", geen samentrekkingen, geen vage woorden als "big" of "serious problem" zonder concretisering, geen zin die begint met "And" of "But".' },
          { titel: '7. Tel je woorden en schrijf het verplichte lijstje',
            tekst: 'Bovenaan de samenvatting: één regel per alinea met het hoofdpunt. Dit schrijf je pas als laatste, als je alinea-indeling definitief vaststaat, anders moet je het toch weer aanpassen.' }
        ] },

      { type: 'waarschuwing', titel: 'De cijfers uit het artikel zijn een valkuil op zich',
        tekst: 'Het artikel staat vol specifieke cijfers: 21% van de wereldwijde cocaïnegebruikers, 117 ton per jaar in het VK, 323 ton in beslag genomen door de EU in 2022, een prijsverschil tussen $1.000 in Colombia en €35.000 in Europa.\n\nDeze cijfers zijn feiten, geen quotes; je mag en moet ze overnemen. Maar **de zin eromheen moet wel je eigen formulering zijn**. "The UK’s National Crime Agency (NCA) estimates that 117 tonnes of cocaine a year is consumed in England, Scotland and Wales" mag niet letterlijk overgenomen worden, ook al staat het getal daarin vast.' },

      { type: 'checklist', titel: 'Check je concept tegen de rubric',
        tekst: 'Loop dit na vóórdat je je samenvatting als af beschouwt.',
        items: [
          { doel: 'Elk hoofdonderdeel van het artikel (herkomst, omvang, transportroutes, kosten, gevolgen) komt terug in mijn samenvatting',
            uitleg: 'Leg je stap 2-lijstje naast je concept: mist er een onderdeel, of heb je er per ongeluk twee samengevoegd tot één te dunne alinea?' },
          { doel: 'Geen enkele zin is direct overgenomen uit het artikel',
            uitleg: 'Zoek in je concept naar zinnen die je nog herkent uit het origineel qua opbouw, ook als je losse woorden hebt vervangen; herschrijf die zin volledig.' },
          { doel: 'Elke alinea heeft een topic sentence en blijft bij één onderwerp',
            uitleg: 'Lees alleen de eerste zin van elke alinea achter elkaar; vertelt dat de kern van het hele artikel?' },
          { doel: 'Mijn tekst gebruikt geen informele taal uit het stijl-overzicht',
            uitleg: 'Zoek specifiek op "you", samentrekkingen, en zinnen die met And, But of So beginnen.' },
          { doel: 'Mijn samenvatting is tussen de 500 en 600 woorden',
            uitleg: 'Tel dit pas als laatste stap; eerder tellen leidt tot kunstmatig oprekken of inkorten.' },
          { doel: 'Bovenaan staat het hoofdpunt per alinea, los van de samenvatting zelf',
            uitleg: 'Dit is een expliciete eis uit de opdracht en een makkelijk punt om te vergeten.' }
        ] }
    ]
  }
];

/* ============================================================
   Het vak registreren, zelfde patroon als Intro to Safety &
   Security, DRM en Professional Skills.
   ============================================================ */

/* ============================================================
   Intro to Safety & Security — Lecture slides
   Sessie 1: "SSMS & what it's all about" (9 september 2026)
   Corr & Gomez Llata Cazares

   Uitgeschreven als college, niet als slidekopie: de slides geven
   de rode draad, de tekst vult in wat de docent erbij vertelt.
   ============================================================ */

LESSTOF['intro-to-safety-security/slides-1'] = [
  {
    id: 'voor', titel: 'Voorbereiding',
    blokken: [
      { type: 'leerdoelen', items: [
        { doel: 'Uitleggen wat de vier officiële leerdoelen van dit vak zijn en waarop je wordt getoetst',
          uitleg: 'Deze vier staan in de studiegids en keren terug in elk college. Ze zijn geen formaliteit: de mondelinge eindtoets is er letterlijk op gebouwd.' },
        { doel: 'De drie werelden van SSMS benoemen en uitleggen waarom de opleiding ze samen behandelt',
          uitleg: 'Public safety, industrial safety en international security. De vraag die het hele vak draagt: waarom horen die bij elkaar?' },
        { doel: 'Het kernonderscheid tussen safety en security uitleggen aan de hand van menselijke intentie',
          uitleg: 'Dit is het belangrijkste begrip van college 1 en komt terug in vrijwel elk hoofdstuk van Bieder.' },
        { doel: 'Risico definiëren en het verschil uitleggen tussen "oude" en "moderne" risico’s',
          uitleg: 'Risico is het begrip dat safety en security met elkaar verbindt. De oud-modern-tweedeling komt uit de risicosamenlevingstheorie.' },
        { doel: 'De vier kerntaken van de safety- en securityprofessional opnoemen en in volgorde plaatsen',
          uitleg: 'Analyseren, ontwerpen, implementeren, evalueren. Dit is de beroepscyclus waar je hele opleiding omheen is gebouwd.' }
      ]},

      { type: 'uitleg', titel: 'Waar dit college over gaat',
        tekst: 'Dit is het openingscollege van de opleiding, en het heeft een dubbele functie. De helft gaat over **praktische zaken**: wie je docenten zijn, hoe het vak is opgebouwd, hoe je wordt getoetst. De andere helft is inhoudelijk en legt het fundament voor alles wat volgt.\n\nDat inhoudelijke deel bouwt een redenering op in vijf stappen: er zijn drie werelden van safety en security, die verschillen fundamenteel op één punt (menselijke intentie), maar ze delen wel één begrip (risico), dat begrip is de afgelopen decennia van karakter veranderd, en daarom bestaat jouw toekomstige beroep in de vorm waarin het nu bestaat.\n\nAls je maar één ding meeneemt uit dit college, laat het dan de vraag zijn die de docenten letterlijk op een slide zetten: **wat hebben al die soorten safety en security met elkaar gemeen?** Het antwoord, risico, is de spil van het hele curriculum.' },

      { type: 'tekst', titel: 'Praktisch: je docenten en het vak',
        tekst: '**Docenten.** Jonathan Michael Corr (J.M.Corr@hhs.nl), docent en academic advisor, met expertise in safety and security, consultancy, leadership, intelligence collection and analysis, en serious gaming. Enrique Gomez Llata Cazares (E.G.GomezLlataCazares@hhs.nl), docent, met expertise in globalisation processes, development studies, cultuur en politiek. Beiden zijn bereikbaar van maandag tot vrijdag, of dinsdag tot vrijdag afhankelijk van de docent.\n\n**Vakcode:** SSMS-1T1-24, 6 ECTS.\n\n**Literatuur:** Bieder, C. & Pettersen Gould, K. (red.) (2020). *The coupling of safety and security: Exploring interrelations in theory and practice.* Cham: Springer Nature. Het boek is **open access**, dus gratis legaal te downloaden via Springer.\n\n**Toetsing:** een midterm op dinsdag 10 november 2026, en een mondelinge eindtoets op 3 of 4 februari 2027 in de vorm van een individuele presentatie. Beide tellen voor 50%.' },

      { type: 'waarschuwing', titel: 'Let op de datum van de midterm',
        tekst: 'Op de slides van dit college staat de midterm op **dinsdag 10 november 2026**. In de studiegids staat alleen "november 2026" zonder dag.\n\nDe slides zijn hier specifieker, maar de handleiding zegt zelf dat het programma bij publicatie voorlopig was. Controleer de exacte datum dus in **MyTimetable en op Brightspace** voordat je iets vastlegt in je planning.\n\nHetzelfde geldt voor de eindtoets: de slides noemen 3 en 4 februari 2027, met een sterretje erbij dat aangeeft dat het nog niet definitief is.' }
    ]
  },

  {
    id: 'kern', titel: 'Kernstof',
    blokken: [
      { type: 'tekst', titel: '1. De vier leerdoelen van dit vak',
        toetsstof: true,
        tekst: 'De docenten zetten deze vier meteen in het openingscollege op tafel, en dat is niet toevallig. Ze bepalen precies waarop je in november en februari wordt beoordeeld.\n\n**1.** Je kunt de verschillende **domeinen** van safety en security die in het SSMS-programma aan bod komen conceptualiseren.\n\n**2.** Je kunt de relevantie en het belang uitleggen van verschillende **stakeholderbenaderingen** voor safety- en securitymanagement in verschillende internationale omgevingen.\n\n**3.** Je kunt de structuur en de hoofdgedachten van het SSMS-programma en het **multidisciplinaire karakter** ervan samenvatten.\n\n**4.** Je kunt uitleggen hoe geselecteerde elementen rond **risicomanagement en resilience** kunnen worden toegepast in de context van internationale safety en security.\n\nMerk op dat leerdoel 3 gaat over de **opleiding zelf**. Dat is ongebruikelijk, en het betekent dat dit college zelf toetsstof is. De structuur van SSMS die je hieronder ziet, moet je kunnen uitleggen.' },

      { type: 'tekst', titel: '2. De drie werelden van SSMS',
        toetsstof: true,
        tekst: 'De opleiding positioneert zichzelf op het snijvlak van drie werelden die in de praktijk vaak strikt gescheiden zijn:\n\n**Public safety.** De wereld van politie, brandweer, ambulance, gemeenten en welzijnsorganisaties. Het publieke domein, waar de overheid verantwoordelijk is voor de veiligheid van burgers.\n\n**Industrial safety, oftewel corporate security.** De wereld van bedrijven: de veiligheid van productieprocessen, werknemers, bedrijfsmiddelen en bedrijfscontinuïteit. Hier valt ook SHEQ onder: safety, health, environment and quality.\n\n**International security.** De wereld van veiligheidsdiensten, inlichtingendiensten, het leger, internationale organisaties en ngo’s, consultancybureaus en denktanks.\n\nDe kernboodschap van het college is dat een SSMS-professional **in het midden** staat en tussen deze werelden kan bewegen. Iemand die alleen politiewerk begrijpt, of alleen bedrijfsveiligheid, mist de verbanden die in de praktijk juist het probleem vormen.' },

      { type: 'uitleg', titel: 'Waarom dat midden een echte positie is, geen marketingpraatje',
        tekst: 'Het klinkt als een brochure-zin, "wij leiden breed op", maar er zit een concrete redenering achter.\n\nNeem een cyberaanval op het elektriciteitsnet. Dat is tegelijk een **internationale securitykwestie** (wie zit erachter, is het een statelijke actor?), een **industriële safetykwestie** (wat gebeurt er met de installaties, vallen er gewonden?), en een **publieke veiligheidskwestie** (wat doet de gemeente als een wijk dagenlang zonder stroom zit?).\n\nDrie specialisten uit drie werelden zien elk een derde van het probleem. Wat er dan mist, is iemand die de drie beelden aan elkaar knoopt. Dat is de rol die SSMS claimt.\n\nDit is ook precies wat leerdoel 3 met "multidisciplinair karakter" bedoelt, en wat in het boek van Bieder terugkomt als de vraag of safety en security überhaupt met dezelfde begrippen te vatten zijn.' },

      { type: 'tekst', titel: '3. Het kernonderscheid: menselijke intentie',
        toetsstof: true,
        tekst: 'Dit is het belangrijkste begrip van het hele college, en waarschijnlijk van het eerste deel van het vak.\n\nHet onderscheid tussen safety en security zit hem in **human intentionality**, menselijke intentie:\n\n**Safety management** richt zich op het tegengaan van natuurrampen, ongelukken, menselijke fouten en soortgelijke gebeurtenissen. Kenmerk: **er is geen kwaadwillende partij**. Niemand wil dat het misgaat.\n\n**Security management** richt zich op het tegengaan van opzettelijke tegenstanders, doelbewuste handelingen en criminaliteit. Kenmerk: **er is een actor die het expres doet**, en die zich aanpast aan jouw maatregelen.\n\nDat laatste is de scherpste consequentie. Een overstroming past zich niet aan je dijk aan. Een inbreker past zich wel aan je slot aan. Dat verschil bepaalt welke maatregelen zin hebben en hoe je ze moet blijven aanpassen.' },

      { type: 'vergelijking', titel: 'Safety tegenover security in de praktijk',
        links: { titel: 'Safety',
          tekst: 'Geen kwaadwillende tegenstander.',
          punten: [
            'Oorzaken: natuurgeweld, technisch falen, menselijke fout',
            'De dreiging past zich niet aan je maatregelen aan',
            'Cultuur van openheid: incidenten melden maakt het systeem veiliger',
            'Statistiek werkt goed: ongelukken volgen patronen',
            'Voorbeeld: een brandalarm, een veiligheidsprocedure bij een machine'
          ] },
        rechts: { titel: 'Security',
          tekst: 'Wel een kwaadwillende tegenstander.',
          punten: [
            'Oorzaken: opzet, criminaliteit, sabotage, aanslagen',
            'De dreiging past zich juist wél aan je maatregelen aan',
            'Cultuur van geheimhouding: informatie delen vergroot je kwetsbaarheid',
            'Statistiek werkt beperkt: de tegenstander verandert zijn methode',
            'Voorbeeld: toegangscontrole, screening van personeel'
          ] } },

      { type: 'tekst', titel: '4. Vier soorten safety en security, één gemene deler',
        toetsstof: true,
        tekst: 'De docenten geven vier definities die je uit je hoofd moet kennen, want ze zijn precies geformuleerd:\n\n**Physical safety.** De mate waarin mensen beschermd zijn, én zich beschermd voelen, tegen persoonlijk letsel door ongelukken en tegen rampen van niet-menselijke oorsprong.\n\n**Industrial safety.** Het voorkomen of verminderen van bedreigingen voor een onderneming, haar werknemers of haar omgeving, als gevolg van natuurlijke risico’s (bijvoorbeeld overstroming) en risico’s verbonden aan productieprocessen of logistiek (bijvoorbeeld infrastructuur).\n\n**Security** (corporate, internationaal, regionaal, fysiek, cyber, en zo verder). Het voorkomen of verminderen van het **moedwillig toebrengen van schade** aan burgers, werknemers, en publieke en private bezittingen.\n\n**Public security.** De mate waarin mensen beschermd zijn, én zich beschermd voelen, tegen persoonlijk letsel door criminaliteit, overtredingen en intimidatie door andere mensen.\n\nDe vraag die de docenten er meteen achteraan stellen: wat hebben deze vier gemeen? Het antwoord dat op de volgende slide verschijnt: **risico**.' },

      { type: 'slimmer', titel: 'Let op het woordje "en zich beschermd voelen"',
        tekst: 'Bij physical safety en public security staat er iets wat makkelijk over het hoofd wordt gezien: de mate waarin mensen beschermd zijn **én zich beschermd voelen**.\n\nDat is geen stijlbloempje. Het betekent dat veiligheid twee componenten heeft: een objectieve (hoeveel gebeurt er werkelijk) en een subjectieve (hoe veilig voelen mensen zich). Die twee lopen vaak uiteen. Criminaliteitscijfers kunnen dalen terwijl het onveiligheidsgevoel stijgt.\n\nVoor jouw toekomstige beroep is dat cruciaal: een maatregel die de statistiek verbetert maar het gevoel verslechtert, heeft maar half gewerkt. En bij industrial safety en security ontbreekt die gevoelscomponent in de definitie juist, wat op zich al iets zegt over hoe die velden naar hun taak kijken.' },

      { type: 'tekst', titel: '5. Risico, en hoe het van karakter veranderde',
        toetsstof: true,
        tekst: 'De definitie die je moet kennen:\n\n**Risico is onzekerheid over een mogelijk negatieve uitkomst (van een beslissing).** Uitgedrukt als: **waarschijnlijkheid × impact**.\n\nTwee dingen aan die definitie zijn belangrijk. Ten eerste zit er **onzekerheid** in: bij volledige zekerheid spreek je niet meer van risico. Ten tweede staat er "van een beslissing" tussen haakjes, wat suggereert dat risico’s vaak voortkomen uit keuzes die iemand maakt, niet uit puur toeval.\n\nDaarna maken de docenten een onderscheid dat je moet kunnen uitleggen, tussen "oude" en "moderne" risico’s.' },

      { type: 'tabel', titel: '"Oude" tegenover "moderne" risico’s',
        toetsstof: true,
        kop: ['', '"Oude" risico’s', '"Moderne" risico’s'],
        rijen: [
          ['Oorsprong', 'Natuurlijk, "god-given": aardbevingen, misoogsten, ziekten', 'Door mensen gemaakt, technologisch: kernenergie, cyberaanvallen, klimaatverandering'],
          ['Schaal', 'Kleinschalig, lokaal begrensd', 'Grootschalig, en gepolitiseerd'],
          ['Verdeling', 'Ongelijk verdeeld: trof de een wel en de ander niet', 'Gelijk verdeeld: raakt in principe iedereen, ongeacht positie']
        ],
        noot: 'De aanhalingstekens rond "oud" en "modern" staan er in het origineel ook. De docenten geven daarmee aan dat het geen strikte chronologie is: oude risico’s bestaan nog steeds.' },

      { type: 'uitleg', titel: 'Waarom "gelijk verdeeld" de meest omstreden claim is',
        tekst: 'Van de drie verschillen is dit degene waar je bij moet stilstaan, want hij is zowel het interessantst als het meest bekritiseerd.\n\nDe gedachte komt uit de risicosamenlevingstheorie van socioloog Ulrich Beck. Zijn stelling: bij een klassieke ramp, zoals een misoogst, waren de rijken beter beschermd dan de armen. Maar bij moderne risico’s zoals radioactieve neerslag of klimaatverandering helpt geld je maar tot op zekere hoogte. Beck vatte dat samen als: armoede is hiërarchisch, smog is democratisch.\n\nDe kritiek daarop is even belangrijk om te kennen: in de praktijk zijn moderne risico’s allesbehalve gelijk verdeeld. Klimaatverandering treft laaggelegen arme landen veel harder dan rijke. Wie zich verhuizing, verzekering of een generator kan veroorloven, staat er beter voor.\n\nHoud dat spanningsveld vast. Bij een mondelinge eindtoets is "ik ken de drie verschillen" een 5,5-antwoord; "ik ken ze én ik kan uitleggen waarom de derde omstreden is" is wat een hoger cijfer oplevert.' },

      { type: 'tekst', titel: '6. Wat de professional feitelijk doet: de vier kerntaken',
        toetsstof: true,
        tekst: 'Dit is de beroepscyclus waar je hele opleiding op is gebouwd. Vier taken, in deze volgorde:\n\n**1. Identificeren, analyseren en beoordelen van risicosituaties.** Oftewel: risicoanalyses maken. Dit is waar je begint, en waar Demystifying Research Methods je de gereedschappen voor geeft.\n\n**2. Ontwerpen en aanbevelen van haalbare safety- en securityinterventies.** Denk aan plannen, beleid, regelgeving en strategieën. Let op het woord **haalbaar**: een technisch perfecte oplossing die niemand kan betalen of uitvoeren, is geen aanbeveling.\n\n**3. Implementeren en coördineren van interventies.** Tactieken en methoden uitvoeren, instrumenten inzetten, op basis van informatie.\n\n**4. Evalueren van interventies en oplossingen.** De kernvraag: heeft het gewerkt? Dit is de stap die in de praktijk het vaakst wordt overgeslagen.\n\nDe cyclus is rond: de evaluatie in stap 4 levert de informatie voor een nieuwe analyse in stap 1.' },

      { type: 'tekst', titel: '7. Waar je dat mee doet: insecurities',
        tekst: 'De docenten zetten hier bewust een korte, open slide neer. De professional heeft te maken met onzekerheden rond:\n\n- **mensen** — gedrag, fouten, motieven, opleiding\n- **systemen** — hoe organisaties en processen zijn ingericht\n- **technologie** — wat die mogelijk maakt en welke nieuwe kwetsbaarheden ze schept\n- **overtuigingen** — wat mensen geloven over risico en veiligheid\n- **cultuur** — hoe er in een organisatie of land met veiligheid wordt omgegaan\n- **en veel meer**\n\nDe boodschap van die open opsomming is dat je vakgebied niet technisch is maar **sociotechnisch**: de techniek is zelden het lastigste deel, de mensen eromheen wel.' },

      { type: 'tekst', titel: '8. Connecting the dots: het klimaatvoorbeeld',
        toetsstof: true,
        tekst: 'Het college sluit het inhoudelijke deel af met een schema uit onderzoek van Ljungqvist (2017) naar de menselijke en maatschappelijke dimensies van klimaatverandering in het verleden. Het laat een ketting zien:\n\n**Klimaatverandering** (temperatuur, neerslag, droogte) beïnvloedt de **landbouwproductiviteit**, wat de **voedselvoorziening per hoofd** beïnvloedt (beschikbaarheid en prijs). Dat leidt langs drie sporen verder: naar **sociale onrust** en vervolgens **gewapende conflicten**; naar **migratie**, oftewel klimaatvluchtelingen; en naar **voedseltekorten**, ondervoeding en hongersnood, die weer leiden tot **epidemieën** en **slechte voedingstoestand**. Dat alles slaat terug op de **bevolking**: groei, omvang, sterfte.\n\nWaarom dit schema in het openingscollege staat: het is de illustratie van "connecting the dots". Een klimaatverschijnsel eindigt via een keten van tussenstappen in een gewapend conflict. Wie alleen naar het begin of alleen naar het eind van die keten kijkt, snapt niet wat er gebeurt.\n\nDit is ook direct leerdoel 4 in actie: risicomanagement en resilience toegepast in een internationale context.' },

      { type: 'begrippen', titel: 'Kernbegrippen uit college 1',
        items: [
          { begrip: 'Human intentionality', en: 'menselijke intentie',
            definitie: 'het kernonderscheid tussen safety en security: bij safety ontbreekt een kwaadwillende actor, bij security is die er wel en past die zich aan je maatregelen aan.' },
          { begrip: 'Risico', en: 'risk',
            definitie: 'onzekerheid over een mogelijk negatieve uitkomst van een beslissing, uitgedrukt als waarschijnlijkheid maal impact.' },
          { begrip: 'Physical safety',
            definitie: 'de mate waarin mensen beschermd zijn en zich beschermd voelen tegen persoonlijk letsel door ongelukken en rampen van niet-menselijke oorsprong.' },
          { begrip: 'Industrial safety',
            definitie: 'het voorkomen of verminderen van bedreigingen voor een onderneming, haar werknemers of omgeving door natuurlijke risico’s en risico’s in productieprocessen of logistiek.' },
          { begrip: 'Public security',
            definitie: 'de mate waarin mensen beschermd zijn en zich beschermd voelen tegen persoonlijk letsel door criminaliteit, overtredingen en intimidatie door anderen.' },
          { begrip: 'Security',
            definitie: 'het voorkomen of verminderen van het moedwillig toebrengen van schade aan burgers, werknemers en publieke of private bezittingen.' },
          { begrip: 'De drie werelden van SSMS',
            definitie: 'public safety, industrial safety oftewel corporate security, en international security; SSMS positioneert zich in het midden daarvan.' },
          { begrip: '"Moderne" risico’s',
            definitie: 'door mensen gemaakte, technologische risico’s die grootschalig en gepolitiseerd zijn en in principe iedereen gelijk raken, tegenover natuurlijke, kleinschalige en ongelijk verdeelde "oude" risico’s.' },
          { begrip: 'De vier kerntaken',
            definitie: 'risico’s analyseren, interventies ontwerpen en aanbevelen, interventies implementeren en coördineren, en interventies evalueren op effectiviteit.' },
          { begrip: 'SHEQ',
            definitie: 'safety, health, environment and quality: de bundeling van veiligheidstaken zoals die binnen bedrijven vaak is georganiseerd.' }
        ] }
    ]
  },

  {
    id: 'toepassen', titel: 'Toepassen',
    blokken: [
      { type: 'oefening', id: 'iss-c1-oef-1', niveau: 'basis',
        vraag: 'Leg uit waarom het onderscheid tussen safety en security niet zit in **hoe ernstig** de gevolgen zijn, maar in menselijke intentie. Geef een voorbeeld van een ernstig safety-incident en een klein security-incident.',
        antwoord: 'Het onderscheid ligt in de oorzaak, niet in de omvang van de schade. Bij safety gaat het om gebeurtenissen zonder kwaadwillende actor: natuurgeweld, technisch falen of menselijke fout. Bij security is er een partij die de schade doelbewust veroorzaakt. Die tweedeling zegt niets over ernst: een ontsnapping van giftige stoffen bij een chemische fabriek door een technische storing kan honderden slachtoffers maken en is een safety-incident, terwijl het stelen van een laptop uit een kantoorpand een security-incident is met beperkte schade.\n\nDe reden dat het onderscheid er toch toe doet, is dat het bepaalt welk type maatregel werkt. Bij safety kun je uitgaan van patronen: dezelfde technische storing gedraagt zich onder dezelfde omstandigheden hetzelfde, dus statistiek, standaardisatie en het delen van incidentinformatie maken het systeem veiliger. Bij security heb je te maken met een tegenstander die zich aanpast: zodra je een maatregel invoert, zoekt die naar een route eromheen. Daarom werkt openheid bij safety in je voordeel en bij security juist tegen je, en daarom moet een securitymaatregel voortdurend worden herzien terwijl een safetymaatregel langer meegaat.' },

      { type: 'oefening', id: 'iss-c1-oef-2', niveau: 'basis',
        vraag: 'Neem een concreet incident naar keuze, bijvoorbeeld een grote stroomstoring, en laat zien hoe alle drie de werelden van SSMS erin terugkomen.',
        antwoord: 'Neem een langdurige stroomstoring in een grote stad, veroorzaakt door een cyberaanval op de netbeheerder.\n\nDe internationale securitydimensie betreft de vraag wie erachter zit. Gaat het om criminelen die losgeld willen, om hacktivisten, of om een statelijke actor die de kwetsbaarheid van kritieke infrastructuur test? Dat bepaalt of dit een politiezaak is, een zaak voor de inlichtingendiensten, of zelfs een kwestie van internationale betrekkingen.\n\nDe industriële safetydimensie speelt bij de netbeheerder en bij aangesloten bedrijven. Vallen installaties op een gecontroleerde manier stil of ontstaat er gevaar bij het uitvallen van koeling, ventilatie of procesbesturing? Zijn er noodstroomvoorzieningen, en hoe lang houden die het vol? Hier gaat het om technische systemen en om de veiligheid van werknemers.\n\nDe publieke veiligheidsdimensie speelt bij gemeente en hulpdiensten. Verkeerslichten vallen uit, liften komen vast te zitten, mensen met thuiszorgapparatuur raken in de problemen, winkels kunnen niet pinnen, en na een tijd ontstaat er onrust of plundering. Dat vraagt om crisiscommunicatie, opvang en handhaving.\n\nWat het voorbeeld laat zien is dat geen van de drie specialisten het probleem in zijn geheel ziet. De netbeheerder denkt in installaties, de inlichtingendienst in daders, de gemeente in burgers. De coördinatie tussen die drie, en de vraag wie in de crisis waarover gaat, is precies het gat waar de SSMS-professional voor wordt opgeleid.' },

      { type: 'oefening', id: 'iss-c1-oef-3', niveau: 'gevorderd',
        vraag: 'De docenten stellen dat moderne risico’s "gelijk verdeeld" zijn. Beargumenteer waarom die stelling verdedigbaar is, en waarom er stevige kritiek op mogelijk is.',
        antwoord: 'De stelling is verdedigbaar omdat moderne risico\'s van karakter verschillen van klassieke rampen. Bij een misoogst of een lokale overstroming bepaalden bezit en positie in hoge mate of je getroffen werd: wie voorraden had of hoger woonde, ontsprong de dans. Bij radioactieve neerslag, luchtvervuiling, een pandemie of een systeemcrisis in het financiële stelsel werkt die bescherming veel minder goed. De uitstoot van een fabriek stopt niet bij de grens van een welvarende wijk, en een virus vraagt niet naar inkomen. Ulrich Beck vatte dat samen met de gedachte dat armoede hiërarchisch is maar smog democratisch. Daar komt bij dat moderne risico\'s door mensen zijn gemaakt en dus het gevolg zijn van collectieve keuzes, waardoor ze ook politiek van aard worden: er is altijd iemand aan te wijzen die de beslissing nam.\n\nDe kritiek is minstens zo sterk. In de praktijk blijken moderne risico\'s wel degelijk ongelijk te landen. Klimaatverandering treft laaggelegen en arme landen onevenredig hard, terwijl de uitstoot grotendeels elders is veroorzaakt. Binnen landen wonen armere bevolkingsgroepen vaker naast snelwegen, industrie of in overstromingsgevoelig gebied. En hoewel niemand immuun is, verschilt het vermogen om je aan te passen enorm: verzekeringen, verhuizen, medische zorg, een generator of een tweede woning zijn allemaal koopbaar. Dat verschuift de ongelijkheid van blootstelling naar veerkracht, maar heft haar niet op.\n\nDe genuanceerde conclusie is dat de stelling opgaat voor blootstelling maar niet voor kwetsbaarheid. Moderne risico\'s raken iedereen, maar ze raken niet iedereen even hard, en juist dat onderscheid is voor een safety- en securityprofessional relevant: het bepaalt waar je maatregelen het meeste effect hebben.' },

      { type: 'oefening', id: 'iss-c1-oef-4', niveau: 'gevorderd',
        vraag: 'Loop de vier kerntaken van de professional langs voor een concrete casus: het toenemende aantal steekincidenten onder jongeren in een middelgrote stad. Wat doe je in elke stap?',
        antwoord: 'Bij stap één, het identificeren, analyseren en beoordelen van de risicosituatie, begint het met feitelijk vaststellen wat er speelt. Hoeveel incidenten zijn er werkelijk, in welke wijken, op welke tijdstippen, met welke betrokkenen, en is er sprake van een stijging of van meer meldingsbereidheid? Daar hoort ook onderzoek naar achterliggende factoren bij: schooluitval, wapenbezit, groepsdynamiek, aanwezigheid van drugshandel. En het hoort te gaan over zowel objectieve veiligheid als het veiligheidsgevoel van bewoners, omdat die twee kunnen verschillen.\n\nBij stap twee, het ontwerpen en aanbevelen van haalbare interventies, komen de mogelijke maatregelen op tafel: preventieprogramma\'s op scholen, jongerenwerk, cameratoezicht op bepaalde plekken, wapencontroles, of samenwerking met ouders en sportverenigingen. Het woord haalbaar is hier het scherpst: elke maatregel kost geld, capaciteit en politiek draagvlak, en een voorstel dat de gemeente niet kan uitvoeren is geen advies. Ook moet je hier expliciet maken welke maatregel welk deel van het probleem aanpakt.\n\nBij stap drie, implementeren en coördineren, gaat het om de uitvoering: wie doet wat, in welke volgorde, met welke middelen, en hoe zorg je dat politie, gemeente, scholen en jongerenwerk niet langs elkaar heen werken. Hier blijkt vaak dat partijen verschillende doelen en verschillende informatie hebben.\n\nBij stap vier, evalueren, stel je vast of het gewerkt heeft. Dat is lastiger dan het lijkt: een daling in incidenten kan ook door iets anders komen, en een goede evaluatie probeert dat te onderscheiden. Bovendien meet je idealiter niet alleen de cijfers maar ook of bewoners zich veiliger voelen. De uitkomst voedt vervolgens weer een nieuwe analyse, waarmee de cyclus rond is.' },

      { type: 'oefening', id: 'iss-c1-oef-5', niveau: 'gevorderd',
        vraag: 'Beschrijf het klimaatschema van Ljungqvist in je eigen woorden en leg uit waarom het in een introductiecollege over safety en security thuishoort.',
        antwoord: 'Het schema laat een causale ketting zien die begint bij klimaatverandering, in de vorm van veranderingen in temperatuur, neerslag en droogte. Die veranderingen beïnvloeden de landbouwproductiviteit en daarmee de opbrengst van oogsten. Dat werkt door in de voedselvoorziening per hoofd van de bevolking, waarbij zowel beschikbaarheid als prijs een rol spelen. Vanaf dat punt splitst de keten zich. Eén lijn loopt via sociale onrust en wetteloosheid naar gewapende conflicten, rebellie en oorlog. Een tweede lijn loopt naar migratie, waarbij mensen wegtrekken uit gebieden die hun levensonderhoud niet meer bieden. Een derde lijn loopt via voedseltekorten en ondervoeding naar epidemieën en een verslechterde gezondheidstoestand. Al deze sporen slaan uiteindelijk terug op de bevolking zelf, in groeicijfers en omvang, wat de druk op het systeem opnieuw beïnvloedt.\n\nHet hoort in dit college thuis om drie redenen. Ten eerste is het de concrete invulling van wat de docenten connecting the dots noemen: geen enkele stap in de keten is op zichzelf een veiligheidsprobleem, maar de optelsom eindigt in gewapend conflict en massale migratie. Ten tweede laat het zien dat de scheiding tussen safety en security in de praktijk vervaagt. Het beginpunt is een klassiek safety-vraagstuk zonder kwaadwillende actor, terwijl het eindpunt onmiskenbaar security is, met intentie, geweld en tegenstanders. Ergens in de keten kantelt het van het één naar het ander, zonder dat er een duidelijk omslagpunt aan te wijzen valt. Ten derde illustreert het waarom de opleiding zich in het midden van drie werelden positioneert: een klimaatwetenschapper, een landbouwexpert en een veiligheidsanalist zien elk een deel van deze keten, en pas wie het geheel overziet begrijpt waarom een droogte jaren later in een conflict kan eindigen.' }
    ]
  },

  {
    id: 'checken', titel: 'Checken',
    blokken: [
      { type: 'quiz', titel: 'Check jezelf',
        vragen: [
          { vraag: 'Wat is volgens dit college het kernonderscheid tussen safety en security?',
            opties: ['De ernst van de gevolgen', 'Menselijke intentie', 'Of het publiek of privaat is', 'De omvang van de schade'],
            juist: 1,
            uitleg: 'Human intentionality. Bij safety ontbreekt een kwaadwillende actor, bij security is die er wel. Ernst en omvang zeggen niets over het onderscheid: een technische storing kan rampzalig zijn en een diefstal klein.' },
          { vraag: 'Hoe wordt risico in dit college gedefinieerd?',
            opties: ['De kans dat er iets misgaat', 'Waarschijnlijkheid maal impact', 'De schade gedeeld door de kosten', 'Het aantal incidenten per jaar'],
            juist: 1,
            uitleg: 'Risico is onzekerheid over een mogelijk negatieve uitkomst van een beslissing, uitgedrukt als waarschijnlijkheid maal impact. Alleen de kans is niet genoeg: een zeer waarschijnlijke gebeurtenis met verwaarloosbare gevolgen is een klein risico.' },
          { vraag: 'Welke drie werelden komen samen in SSMS?',
            opties: ['Politie, leger en brandweer', 'Public safety, industrial safety en international security', 'Preventie, repressie en nazorg', 'Lokaal, nationaal en internationaal'],
            juist: 1,
            uitleg: 'Public safety (het publieke domein), industrial safety oftewel corporate security (bedrijven), en international security (veiligheids- en inlichtingendiensten, leger, ngo\u2019s). SSMS positioneert zich in het midden.' },
          { vraag: 'Wat is volgens de indeling van "oude" en "moderne" risico\u2019s het kenmerk van moderne risico\u2019s?',
            opties: ['Natuurlijk, kleinschalig, ongelijk verdeeld', 'Door mensen gemaakt, grootschalig, gelijk verdeeld', 'Zeldzaam maar zeer ernstig', 'Alleen in westerse landen aanwezig'],
            juist: 1,
            uitleg: 'Moderne risico\u2019s zijn door mensen gemaakt en technologisch, grootschalig en gepolitiseerd, en in principe gelijk verdeeld. Op dat laatste punt is overigens stevige kritiek mogelijk.' },
          { vraag: 'Wat is de juiste volgorde van de vier kerntaken van de professional?',
            opties: ['Implementeren, analyseren, evalueren, ontwerpen', 'Analyseren, ontwerpen, implementeren, evalueren', 'Ontwerpen, implementeren, analyseren, evalueren', 'Evalueren, analyseren, ontwerpen, implementeren'],
            juist: 1,
            uitleg: 'Eerst risico\u2019s identificeren, analyseren en beoordelen. Dan haalbare interventies ontwerpen en aanbevelen. Dan implementeren en coördineren. Tot slot evalueren op effectiviteit, waarna de cyclus opnieuw begint.' },
          { vraag: 'Waarom werkt een cultuur van openheid wél bij safety maar niet bij security?',
            opties: ['Omdat safety minder ernstig is', 'Omdat er bij security een tegenstander is die van gedeelde informatie profiteert', 'Omdat securitywetgeving het verbiedt', 'Omdat safety-incidenten vaker voorkomen'],
            juist: 1,
            uitleg: 'Bij safety maakt het melden en delen van incidenten het systeem veiliger, omdat niemand er baat bij heeft dat het misgaat. Bij security vergroot het delen van je kwetsbaarheden juist het risico, omdat een tegenstander die informatie kan gebruiken.' }
        ] },

      { type: 'checklist', titel: 'Kun je dit navertellen?',
        tekst: 'De eindtoets van dit vak is **mondeling**. Vink alleen af wat je zonder aantekeningen hardop kunt uitleggen.',
        items: [
          { doel: 'Ik kan de vier leerdoelen van dit vak noemen',
            uitleg: 'Domeinen conceptualiseren, stakeholderbenaderingen uitleggen, de structuur van SSMS samenvatten, en risicomanagement en resilience toepassen op internationale casussen.' },
          { doel: 'Ik kan de drie werelden van SSMS benoemen en met een voorbeeld uitleggen waarom ze bij elkaar horen',
            uitleg: 'Gebruik een casus waarin alle drie tegelijk spelen, zoals een cyberaanval op kritieke infrastructuur; dat is overtuigender dan een opsomming.' },
          { doel: 'Ik kan het onderscheid safety en security uitleggen én uitleggen wat dat betekent voor maatregelen',
            uitleg: 'Het tweede deel is waar het om gaat: de aanpassende tegenstander, en de tegenstelling tussen openheid en geheimhouding.' },
          { doel: 'Ik kan risico definiëren en het verschil tussen oude en moderne risico’s uitleggen',
            uitleg: 'Inclusief de kanttekening bij "gelijk verdeeld": dat onderscheid maakt je antwoord sterker.' },
          { doel: 'Ik kan de vier definities van soorten safety en security uit mijn hoofd geven',
            uitleg: 'Physical safety, industrial safety, security en public security. Let op het element "en zich beschermd voelen" bij de eerste en de laatste.' },
          { doel: 'Ik kan de vier kerntaken in volgorde noemen en op een casus toepassen',
            uitleg: 'Analyseren, ontwerpen, implementeren, evalueren. Oefen dit met een casus die je zelf kiest, niet alleen met de opsomming.' },
          { doel: 'Ik kan uitleggen wat het klimaatschema laat zien en waarom het in dit vak staat',
            uitleg: 'De ketting van klimaat naar conflict, en het feit dat die begint bij safety en eindigt bij security zonder duidelijk omslagpunt.' }
        ] },

      { type: 'preview', titel: 'Sessie 2 · Safety and security interventions',
        vakId: 'intro-to-safety-security', lesId: 'h1',
        tekst: 'Het volgende college gaat over interventies, en daarvoor moet je hoofdstuk 1 en 2 van Bieder gelezen hebben. Die hoofdstukken bouwen precies voort op het onderscheid en het risicobegrip uit dit college.' }
    ]
  }
];

/* ============================================================
   De boekhoofdstukken van Intro to Safety & Security.

   De colleges van dit vak komen niet hier vandaan maar uit het
   programmablok onderaan dit bestand, dat ze uit VAK_VOORBEREIDING
   haalt en de datum en zaal uit je rooster overneemt.

   Lesstof voor een college schrijf je onder
   LESSTOF['intro-to-safety-security/college-N'].
   ============================================================ */


/* ============================================================
   Society & Politics — collegeles sessie 1
   Naar de eigen slides van Lecture 1 (Dr. Abanes), aangevuld met
   Macionis & Plummer (2012), hoofdstuk 1, 2 en 4.

   Zelfde opzet als de andere vakken: Voorbereiding, Kernstof,
   Toepassen, Checken.
   ============================================================ */

/* De les society-politics/slides-1 staat nu in society-slides-1.js. */


/* Society & Politics registreren, zodat de kaart er ook staat als je
   rooster nog niet is opgehaald. */

/* ============================================================
   Course manuals voor de drie vakken waarvan je de aparte
   handleiding nog niet hebt. Alles hieronder komt uit de Y1
   Semester 1 module manual. Zodra je een eigen course manual
   krijgt, zet je de pdf in de map 'manuals' en pas je alleen
   het veld pdf en pdfNaam aan.
   ============================================================ */
(function(){
  if (typeof VAK_MANUAL === 'undefined') return;

  VAK_MANUAL['governance-policy'] = {
    pdf: 'manuals/Y1_manual_governance_policy.pdf', pdfNaam: 'Module manual · Governance & Policy (2.2)',
    studiegids: 'governance',
    intro: 'Over hoe bureaucratieën werken en hoe beleid tot stand komt. De eerste helft gaat over publieke organisaties en governance, de tweede helft over de fasen van beleidsvorming en waar die in de praktijk vastlopen.',
    regels: [
      { label: 'Code',        waarde: 'SSMS-1T2-22' },
      { label: 'Docenten',    waarde: 'Ines Trigo de Sousa, Enrique Gomez Llata Cazares, Marc-Oliver Del Grosso' },
      { label: 'Studiepunten', waarde: '6 ECTS \u00b7 42 contacturen \u00b7 126 uur zelfstudie' },
      { label: 'Literatuur',  waarde: 'McCormick, Hague & Harrop (2022) plus een WebEDU-reader voor het tweede semesterdeel' },
      { label: 'Midterm',     waarde: 'Individueel schriftelijk \u00b7 50% \u00b7 november 2026' },
      { label: 'Eindtoets',   waarde: 'Individueel schriftelijk \u00b7 50% \u00b7 februari 2027' },
      { label: 'Voldoende',   waarde: '5,5 of hoger voor beide toetsen' },
      { label: 'Let op',      waarde: 'Dit vak staat op de lijst voor de stage in jaar 3: daarvoor tel je mee met een gemiddelde van 7,5' }
    ],
    samenvatting: [
      { titel: 'Wat je hier leert',
        tekst: 'Veel van je werk als safety- en securityprofessional speelt zich af binnen **bureaucratieën**: hiërarchische, doelgerichte organisaties waarin centrale beslissingen door lagere niveaus worden uitgevoerd. Denk aan brandweer, ministeries, politie, inlichtingendiensten en gemeenten.\n\nDe eerste helft gaat over hoe die organisaties werkelijk functioneren en in welke politieke context ze opereren, met aandacht voor verschillen tussen bestuurssystemen wereldwijd. De tweede helft gaat over beleidsvorming in publieke, private en hybride organisaties, en over de obstakels en pathologieën die het ideaal van rationeel beleid in de weg staan.' },
      { titel: 'De zeven leerdoelen',
        tekst: 'De toetsstof is per leerdoel opgebouwd.',
        punten: [
          '1. De basiskenmerken van publieke organisaties benoemen',
          '2. Uitleggen waarom organisatie belangrijk is voor het functioneren van bureaucratieën',
          '3. Categorieën ambtenaren en typen overheidsinstanties onderscheiden, plus de factoren die hun werk vormgeven in verschillende culturele contexten',
          '4. Publieke, private en gemengde actoren onderscheiden in het beleidsproces',
          '5. De verschillende fasen van het beleidsproces onderscheiden',
          '6. De uitdagingen en dilemma\u2019s van beleidsmakers uitleggen in internationale context',
          '7. Uitleggen hoe obstakels en pathologieën het ideaal van rationeel beleid ondermijnen'
        ] },
      { titel: 'Literatuur',
        tekst: 'Voor het eerste deel het boek van **McCormick, Hague & Harrop (2022)**, *Comparative Government and Politics*, twaalfde druk, plus drie losse teksten: Levi-Faur over de verschuiving van big government naar big governance, Buckwalter & Balfour over democratische legitimiteit in bureaucratische structuren (hoofdstuk 2 van *Quality of Governance*, te downloaden via de HHS-bibliotheek), en Huberts, Kaptein & De Koning over integriteitsschandalen van politici.\n\nVoor het tweede deel is er een **reader via de WebEDU-winkel** met Allison & Zelikow, House en Weiss. Aanbevolen maar niet verplicht: Sørensen & Torfing (2018).' },
      { titel: 'Toetsing',
        tekst: 'Twee individuele schriftelijke tentamens van elk 50%, in november 2026 en februari 2027, beide minimaal een 5,5. Toetsstof is alle cursusliteratuur **plus de collegeslides**. Voor de criteria en de beoordeling verwijst de handleiding naar het tentamen en de antwoordsleutel zelf.' },
      { titel: 'Aanwezigheid en regels',
        tekst: 'Colleges zijn niet verplicht maar sterk aanbevolen. Gastcolleges zijn wel verplicht. Geplande data en deadlines voor presentaties, workshops, opdrachten, toetsen en excursies zijn hard.' }
    ]
  };

  VAK_MANUAL['society-politics'] = {
    pdf: 'manuals/Y1_manual_society_politics.pdf', pdfNaam: 'Module manual · Society & Politics (2.3)',
    studiegids: 'society',
    intro: 'Sociologie in de eerste helft, politicologie in de tweede. Het vak geldt als een van de academische moederdisciplines van safety en security studies.',
    regels: [
      { label: 'Code',        waarde: 'SSMS-1T3-21' },
      { label: 'Docenten',    waarde: 'Menandro S. Abanes (sociologie), Ines Trigo de Sousa (politicologie)' },
      { label: 'Studiepunten', waarde: '6 ECTS \u00b7 42 contacturen \u00b7 126 uur zelfstudie' },
      { label: 'Literatuur',  waarde: 'Midterm: Macionis & Plummer (2012), Sociology. Eindtoets: McCormick, Hague & Harrop (2022)' },
      { label: 'Midterm',     waarde: 'Individueel schriftelijk \u00b7 50% \u00b7 13 november 2026' },
      { label: 'Eindtoets',   waarde: 'Individueel schriftelijk \u00b7 50% \u00b7 februari 2027' },
      { label: 'Voldoende',   waarde: '5,5 of hoger voor beide toetsen' },
      { label: 'Let op',      waarde: 'De literatuur voor de eindtoets verandert dit jaar deels; houd Brightspace bij' }
    ],
    samenvatting: [
      { titel: 'Wat je hier leert',
        tekst: 'Het vak combineert **sociologie** en **politicologie**. Sociologie gaat over hoe mensen samenleven en met elkaar omgaan; politiek is, in Laswells formulering, de vraag wie wat krijgt, wanneer en hoe.\n\nDe eerste helft behandelt drie sociologische hoofdthema\u2019s: **identiteit, sociale orde en stratificatie**, elk gekoppeld aan een safety- en securityvraagstuk. De tweede helft behandelt regimetypen (democratisch, hybride, autoritair, totalitair), hun instituties, regimeverandering, ideologieën, en de factoren die politiek vormgeven.' },
      { titel: 'De vijf leerdoelen',
        punten: [
          '1. Klassieke en hedendaagse sociologische perspectieven en begrippen rond identiteit, stratificatie en sociale orde herkennen, en hun relatie tot safety en security',
          '2. Situaties met safety- en securityvraagstukken sociologisch interpreteren',
          '3. De grondbeginselen uitleggen waarop staten en politieke systemen van democratische en autoritaire regimes berusten',
          '4. Ideologieën en regimetypen wereldwijd onderscheiden',
          '5. Abstracte begrippen als democratisering, macht en gezag omzetten in concrete voorbeelden, en omgekeerd'
        ] },
      { titel: 'Twee boeken, twee toetsen',
        tekst: 'Voor de **midterm** lees je Macionis & Plummer, *Sociology: A Global Introduction*, vijfde druk. Voor de **eindtoets** McCormick, Hague & Harrop, *Comparative Government and Politics*, twaalfde druk. Dat tweede boek gebruik je ook bij Governance & Policy, dus je hebt het maar één keer nodig.\n\nDe handleiding meldt bij de wijzigingen ten opzichte van vorig jaar dat de literatuur voor de eindtoets ten minste deels verandert, en dat er mogelijk een laatste toetsgelegenheid komt.' },
      { titel: 'Toetsing',
        tekst: 'Twee individuele schriftelijke tentamens van elk 50%. De midterm staat op **13 november 2026**, de eindtoets in februari 2027. Toetsstof is alle cursusliteratuur plus de collegeslides. Beide toetsen minimaal een 5,5.' },
      { titel: 'Aanwezigheid en regels',
        tekst: 'Colleges zijn niet verplicht maar sterk aanbevolen. Gastcolleges zijn wel verplicht: in week 3 staat het gastcollege over etniciteit en migratie. Geplande data en deadlines zijn hard.' }
    ]
  };

  VAK_MANUAL['fundamentals-of-academic-writing'] = {
    pdf: 'manuals/Y1_manual_FAW.pdf', pdfNaam: 'Module manual · Fundamentals of Academic Writing (3.2)',
    studiegids: 'writing',
    intro: 'Schrijfvak Engels: alinea\u2019s, cohesie en coherentie, zinsbouw, formele stijl en parafraseren. Eén examen aan het eind bepaalt je hele cijfer.',
    regels: [
      { label: 'Code',        waarde: 'SSMS-1S2-20' },
      { label: 'Docenten',    waarde: 'Senj Temple, Simone Hackett' },
      { label: 'Studiepunten', waarde: '3 ECTS \u00b7 21 contacturen \u00b7 63 uur zelfstudie' },
      { label: 'Literatuur',  waarde: 'Geen aanschaf nodig; alles staat op Brightspace' },
      { label: 'Oefenexamen', waarde: 'Remindo \u00b7 15 oktober 2026 \u00b7 telt niet mee' },
      { label: 'Examen',      waarde: 'Remindo \u00b7 100% \u00b7 14 december 2026' },
      { label: 'Voldoende',   waarde: '5,5 of hoger; geen enkele score van 1 op de rubric' },
      { label: 'Let op',      waarde: 'Grammatica polijst je zelf via de toolbox op Brightspace; daar is in college nauwelijks tijd voor' }
    ],
    samenvatting: [
      { titel: 'Wat je hier leert',
        tekst: 'Goed Engels spreken betekent niet dat je goed Engels schrijft. Dit vak richt zich op de **fundamenten** van academisch en professioneel schrijven: alinea\u2019s structureren, cohesie en coherentie aanbrengen, bondige zinnen bouwen, een formele stijl produceren en parafraseren.',
        punten: [
          '1. Academische tekst schrijven met alinea\u2019s, topic sentences, cohesie en coherentie',
          '2. Academische zinnen van passende lengte, structuur en grammaticale correctheid produceren',
          '3. Tekst in de gepaste formele academische stijl schrijven',
          '4. De kernpunten in een tekst herkennen',
          '5. Parafraseren'
        ] },
      { titel: 'Eén examen, honderd procent',
        tekst: 'Het eindexamen in Remindo bepaalt je hele cijfer en lijkt op de schrijftaken die je tijdens het vak hebt gemaakt. Er is een **oefenexamen op 15 oktober** dat niet meetelt, en dat je dus vooral moet gebruiken om te weten waar je staat.\n\nDe beoordeling loopt via een rubric met vijf onderdelen van elk 4 punten: content, paraphrasing, paragraphs, sentence structure en style. Je moet **op geen enkel onderdeel een 1 scoren** om te slagen; 11 van de 20 punten is een 5,5.' },
      { titel: 'Schrijftaken en peer feedback',
        tekst: 'Tijdens het vak lever je verschillende schrijftaken in via Brightspace, in Word of pdf. Die tellen niet mee voor je cijfer maar zijn wel dezelfde soort taak als het examen, dus ze zijn je oefenmateriaal.\n\n**Peer feedback is een vast onderdeel**: bij een aantal taken word je aan een partner gekoppeld om feedback te geven en te ontvangen aan de hand van de rubric.\n\nGrammatica, dus werkwoordstijden, betrekkelijke bijzinnen, voorwaardelijke zinnen, interpunctie, parallelle structuur en comma splices, polijst je zelf met de toolbox in de course information op Brightspace.' },
      { titel: 'Aanwezigheid en regels',
        tekst: 'Colleges zijn niet verplicht maar sterk aanbevolen om het vak te halen. Schrijven is een vaardigheid die je moet oefenen, en de feedback op je taken is de enige plek waar je vooraf hoort wat er nog niet goed genoeg is.' }
    ]
  };
})();

/* ============================================================
   Collegeomhulsels per vak, afgeleid uit het programma in de
   Year 1 Semester 1 module manual.

   Elk vak krijgt onder het kopje 'Colleges' een onderdeel per
   sessie, met het onderwerp en de voorbereiding erbij. De sessies
   komen uit VAK_VOORBEREIDING, zodat het programma maar op een
   plek staat.

   De omhulsels die rooster.js zelf maakt ('Les · vr 11 sep') worden
   hierdoor vervangen. De datum uit je rooster blijft wel behouden:
   sessie 1 krijgt de datum van je eerste college van dat vak,
   sessie 2 die van het tweede, enzovoort.

   Lesstof schrijf je onder LESSTOF['<vakId>/college-N'].
   ============================================================ */
