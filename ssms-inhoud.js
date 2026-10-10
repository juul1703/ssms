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
        "type": "uitleg",
        "tekst": "**From the lecture**\n\nThe lecture is titled **\"Safety, security and culture: two sides of the same coin?\"**, with three key words: **systems, losses, culture**. Its agenda: safety and security as one system problem; why reliability is not enough; safety culture and security culture; where the two cultures overlap, and clash.\n\n**Start with inclusive definitions.** \"Definitions shape the solutions we are able to see.\" With **narrow** definitions, safety and security become separate problems with separate solutions; with **inclusive** definitions, the overlap becomes visible and common approaches become possible. Leveson's question: **which definitions help us prevent losses most effectively?**\n\n**Three key definitions** on the slide (the book has four, including hazard analysis):\n**Safety**: freedom from accidents (losses).\n**Accident or mishap**: any undesired or unplanned event that results in a loss, as defined by system stakeholders.\n**Hazard**: a system state or set of conditions that, together with worst-case environmental conditions, will lead to a loss.\nA **loss** can be injury, property damage, pollution, mission loss, or reputational or business impact.\n\n**Hazard is roughly vulnerability.** Different language, similar system logic: safety speaks of hazards, security of vulnerabilities; both identify **system conditions that can open a path to loss**. The engineering task is to eliminate or control those conditions in design and operations."
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
        "type": "uitleg",
        "tekst": "**From the lecture**\n\n**Safety is not reliability**, on one slide. **Reliability**: components perform their stated requirements without failure. **Safety and security**: the system avoids unacceptable losses, **even when components work as designed**. Modern losses arise from design, human factors, management, procedures, regulation and changing environments, not only from component failure."
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
        "type": "uitleg",
        "tekst": "**From the lecture**\n\n**Intentional or accidental: the path changes, the loss does not.** The slide draws one hazardous **system state** reached by two routes, an **accidental cause** or a **hostile cause**, leading to the **same loss**. For Leveson, intentionality adds **causal scenarios**, but the goal remains preventing the hazardous system state and the loss.\n\n**Security: look beyond keeping intruders out.** Not only protecting information, not only keeping intruders out, but **preventing mission loss**. The question to ask: **what losses matter to the system and its stakeholders?**"
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
        "type": "uitleg",
        "tekst": "**From the lecture**\n\n**Systems thinking**, the lecture's slide: complex systems create losses through **interactions** between six elements: **technology, people, management, rules, procedures and environment**. Together they produce system behaviour. That is why STAMP and STPA analyse **unsafe control and interactions, not only broken components**.\n\n**Putting chapters 3 and 5 together** (the closing slide): **system** (identify losses, hazards and vulnerabilities), **analysis** (consider accidental and intentional causal paths), **culture** (build shared awareness and resilience). \"Integrated thinking does not mean pretending safety and security are identical.\""
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
          },
          {
            "begrip": "Inclusive versus narrow definitions",
            "definitie": "Narrow definitions make safety and security separate problems with separate solutions; inclusive definitions make the overlap visible and allow common approaches (lecture 4)."
          },
          {
            "begrip": "Mission loss",
            "definitie": "The loss of the system’s ability to fulfil its purpose; the lecture says security should focus on preventing it, not only on protecting information or keeping intruders out."
          },
          {
            "begrip": "Six elements of a complex system (list)",
            "definitie": "From the lecture: 1. Technology. 2. People. 3. Management. 4. Rules. 5. Procedures. 6. Environment. Losses arise from their interactions."
          },
          {
            "begrip": "System, analysis, culture (list)",
            "definitie": "Putting chapters 3 and 5 together: 1. System: identify losses, hazards and vulnerabilities. 2. Analysis: consider accidental and intentional causal paths. 3. Culture: build shared awareness and resilience."
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
        "titel": "From systems theory to security culture",
        "vakId": "intro-to-safety-security",
        "lesId": "h5",
        "tekst": "Leveson solves the security problem inside the safety analysis. In chapter 5 Jore takes the question into the organisation: can security culture stand as a concept of its own, next to safety culture?",
        "punten": [
          "What the In Amenas attack showed about security culture",
          "Gerring’s eight criteria for a sound concept",
          "Why safety concepts cannot simply be carried over to security"
        ]
      }
    ]
  }
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
        "type": "uitleg",
        "tekst": "**From the lecture**\n\n**What do we mean by culture?** The slide's definition: **a common set of beliefs, attitudes, practices and behaviours that are perceived, internalised and shared across an organisation.** Culture makes safety or security a **shared responsibility**, not only a specialist task. But similar definitions also create a problem: **are these really different cultures?**\n\n**Why security culture is attractive**, four reasons on the slide:\n**Shared awareness**: security becomes everyone's concern.\n**Weak signals**: people notice and communicate unusual signs.\n**Mindfulness**: organisations stay attentive to changing threats.\n**Resilience**: organisations prepare for multiple possible threats.\nJore's view: security culture is **promising**, especially in complex, volatile threat environments."
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
        "type": "uitleg",
        "tekst": "**From the lecture**\n\n**But can we simply copy safety culture?** The slide sets the two side by side:\n\n**Safety culture** relies on openness, learning from incidents, a just culture and sharing information.\n**The security challenge**: adversaries hide their intentions, information may be confidential, suspicion may matter, and attackers adapt strategically.\nSo \"practices that strengthen safety can sometimes create tension with security.\"\n\n**The conceptual problem**: security culture is familiar but still difficult to define and measure, on three counts:\n**Overlap**: definitions often resemble safety culture.\n**Boundaries**: is security culture a subculture of safety culture, or of organisational culture?\n**Measurement**: clear indicators and links to performance are limited.\n\"A useful concept needs both **practical relevance** and **clear differentiation** from neighbouring concepts\": Gerring's criteria in one sentence."
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
        "type": "uitleg",
        "tekst": "**From the lecture**\n\n**Key takeaways** of the lecture: \"Think in systems. Think in losses.\"\n1. Safety and security can **share analysis methods**.\n2. **Reliable components do not guarantee a safe system.**\n3. Culture can support **awareness, learning and resilience**.\n4. Safety and security cultures **overlap, but important tensions remain**.\n\n**The final question**, a likely exam question: **when should safety and security be integrated, and when should they remain distinct?** A good answer uses both chapters: integrate the **analysis** (Leveson: one system, one set of losses, accidental and intentional paths), but keep the **culture** partly distinct where security needs confidentiality and suspicion that a safety culture of openness would undermine (Jore)."
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
          },
          {
            "begrip": "Culture (organisational)",
            "definitie": "A common set of beliefs, attitudes, practices and behaviours that are perceived, internalised and shared across an organisation (lecture 4)."
          },
          {
            "begrip": "Why security culture is attractive (list)",
            "definitie": "1. Shared awareness: everyone’s concern. 2. Weak signals: people notice and report unusual signs. 3. Mindfulness: attentive to changing threats. 4. Resilience: prepared for multiple threats."
          },
          {
            "begrip": "Safety culture versus the security challenge (list)",
            "definitie": "Safety culture: 1. openness, 2. learning from incidents, 3. just culture, 4. sharing information. Security challenge: 1. adversaries hide intentions, 2. confidential information, 3. suspicion may matter, 4. attackers adapt strategically."
          },
          {
            "begrip": "The conceptual problem of security culture (list)",
            "definitie": "1. Overlap: definitions resemble safety culture. 2. Boundaries: a subculture of what? 3. Measurement: few clear indicators or links to performance."
          },
          {
            "begrip": "Key takeaways of lecture 4 (list)",
            "definitie": "1. Safety and security can share analysis methods. 2. Reliable components do not guarantee a safe system. 3. Culture supports awareness, learning and resilience. 4. The two cultures overlap, but tensions remain."
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
        "type": "quiz",
        "titel": "Eight questions on lecture 4",
        "vragen": [
          {
            "vraag": "According to the lecture, what do narrow definitions of safety and security lead to?",
            "opties": [
              "Common approaches",
              "Separate problems with separate solutions",
              "Better measurement",
              "More resilience"
            ],
            "juist": 1,
            "uitleg": "Inclusive definitions make the overlap visible and common approaches possible."
          },
          {
            "vraag": "In security language, the equivalent of a hazard is a:",
            "opties": [
              "Threat",
              "Vulnerability",
              "Mishap",
              "Mission"
            ],
            "juist": 1,
            "uitleg": "Both are system conditions that can open a path to loss."
          },
          {
            "vraag": "For Leveson, what does intentionality add?",
            "opties": [
              "A different kind of loss",
              "Extra causal scenarios, while the goal stays preventing the hazardous state",
              "A separate analysis method",
              "Nothing at all"
            ],
            "juist": 1,
            "uitleg": "Accidental and hostile causes lead to the same system state and the same loss."
          },
          {
            "vraag": "Which statement fits \"safety is not reliability\"?",
            "opties": [
              "A system is safe when all components work",
              "Losses can occur even when components work as designed",
              "Reliability always reduces safety",
              "Safety is only about component failure"
            ],
            "juist": 1,
            "uitleg": "Modern losses come from design, people, management, procedures, regulation and environment too."
          },
          {
            "vraag": "Security should focus on:",
            "opties": [
              "Keeping intruders out",
              "Protecting information",
              "Preventing mission loss",
              "Punishing attackers"
            ],
            "juist": 2,
            "uitleg": "Ask which losses matter to the system and its stakeholders."
          },
          {
            "vraag": "Which is NOT one of the four reasons security culture is attractive?",
            "opties": [
              "Weak signals",
              "Mindfulness",
              "Resilience",
              "Confidentiality"
            ],
            "juist": 3,
            "uitleg": "Shared awareness, weak signals, mindfulness, resilience. Confidentiality is part of the security challenge."
          },
          {
            "vraag": "Why can safety culture not simply be copied to security?",
            "opties": [
              "Security has no culture",
              "Openness and information sharing can clash with confidentiality and adversaries who adapt",
              "Safety culture is outdated",
              "Security is only technical"
            ],
            "juist": 1,
            "uitleg": "\"Practices that strengthen safety can sometimes create tension with security.\""
          },
          {
            "vraag": "Which three problems make security culture hard to use as a concept?",
            "opties": [
              "Cost, time and staff",
              "Overlap, boundaries and measurement",
              "Law, ethics and politics",
              "Size, speed and scope"
            ],
            "juist": 1,
            "uitleg": "Definitions overlap with safety culture, the boundaries are unclear, and measurement is limited."
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
        "titel": "From culture to the profession",
        "vakId": "intro-to-safety-security",
        "lesId": "h7",
        "tekst": "Jore looks at the organisation from the inside. In chapter 7 Brooks and Coole look at the people who do the work, and at why safety and security have grown apart as professions.",
        "punten": [
          "Why safety and security developed as separate fields",
          "What that divergence means for the professional in practice"
        ]
      }
    ]
  }
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
    5:  { onderwerp: 'Safety en security managen (Corr)', titel: 'Geen leeswerk vooraf', lesIds: [] },
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
    3: { onderwerp: '16 regels voor formele, academische stijl', titel: 'Brightspace checken', lesIds: ['naslagwerk', 'summary'] },
    4: { onderwerp: '5 tips voor goede zinnen', titel: 'Brightspace checken', lesIds: [] },
    5: { onderwerp: 'Oefenexamen in Remindo, op de campus (15 oktober, 14:45-16:45)', titel: 'Task 2 inleveren · oefenexamen 15 oktober', lesIds: ['rubric', 'summary'] },
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
