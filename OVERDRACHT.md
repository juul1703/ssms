# SSMS-leeromgeving — overdracht

Alles wat een nieuwe chat moet weten om hieraan verder te bouwen.
Stand: 21 september 2026, service worker **v92**.


## 1. Wat het is

Een statische website op GitHub Pages: de digitale leeromgeving voor het
eerste semester SSMS aan de Haagse Hogeschool. Geen server, geen build, geen
framework. Losse HTML-, CSS- en JS-bestanden in de hoofdmap.

- Repo-eigenaar: `juul1703`, repo `ssms`
- Live: https://juul1703.github.io/ssms/
- Oudere repo `leeromgeving-ssms-` wordt niet meer gebruikt.

Julie werkt vanaf iPhone en iPad en uploadt via de webinterface van GitHub.
Ze raakt de code niet aan; wijzigingen komen altijd als zip met kant-en-klare
bestanden.

## 2. De bestanden

| Bestand | Wat het doet |
|---|---|
| `index.html` | Homescreen: vakken, deadlines, rooster van vandaag |
| `vak.html` | Vakpagina |
| `les.html` | Lespagina |
| `styles.css` | Alle opmaak |
| `app.js` | Homescreen, deadlines, voortgang, afvinken, sessieberekening |
| `rooster.js` | Leest de MyTimetable iCal-link. Maakt geen vakken aan. |
| `vakken.js` | De enige plek waar staat welke vakken er zijn en welke onderdelen ze hebben |
| `vak.js` | Tekent de vakpagina |
| `les.js` | Tekent de lespagina: tabbladen, kopjesbalk, flashcardtab |
| `lesblokken.js` | Rendert de bloktypes binnen een les |
| `lesstof.js` | Opzoeken van lesstof |
| `lesextra.js` | Extra's op de lespagina |
| `ssms-inhoud.js` | Lesstof, `VAK_VOORBEREIDING`, `VAK_MANUAL`, de studiegids (~840 KB) |
| `governance-college-1.js` | Governance sessie 1, uit McCormick H1 |
| `governance-slides-1.js` | Governance sessie 1, uit de collegeslides |
| `governance-college-2.js` | Governance sessie 2, Buckwalter & Balfour uit Quality of Governance |
| `society-slides-1.js` | Society & Politics sessie 1, uit de collegeslides |
| `society-college-2.js` | Society & Politics sessie 2, Macionis H7 (micro-sociologie) |
| `society-college-3.js` | Society & Politics sessie 3, Macionis H11 (racism, ethnicities and migration) |
| `recap-society.js` | "To remember"-tabbladen voor Society slides-1, college-2 en college-3 |
| `recap-professional-skills.js` | "To remember" voor PS college-1 en college-2 |
| `recap-governance.js` | "To remember" voor Governance college-1 (boek plus college) en college-2 |
| `intro-h9.js` | Bieder H9 (Schulman), Engelse versie; tabblad-id `kern2`, zodat sessie 6 twee kernstof-tabs heeft |
| `intro-h7.js` | Bieder H7 (Brooks & Coole), Engelse versie; stond tot v84 in het Nederlands in `ssms-inhoud.js` |
| `society-college-1.js` | Society & Politics sessie 1, Macionis H1, H2 en H4 plus Lecture 1 (compleet) |
| `recap-intro.js` | "To remember" voor Intro slides-1 en de hoofdstukken H1, H2, H3, H5 (komen samen in college-2 en college-4) |
| `ps-college-1.js` | Professional Skills sessie 1, non-verbale communicatie |
| `ps-college-2.js` | Professional Skills sessie 2, slecht nieuws: CAT (Dragojevic e.a. 2016), kanalen, McLuhan, barrières |
| `drm-conceptlist-1/2/3.js` | DRM conceptlijst, drie delen, onder Extra naslagwerken |
| `faw-college-1.js` | FAW sessie 1: paragrafen en topic sentences (uit de slides en worksheets) |
| `faw-college-2.js` | FAW sessie 2: de zes technieken en de academische samenvatting |
| ~~`faw-writer-responsible.js`~~ | Vervangen door `faw-college-2.js` in v92; het bestand kan uit de repo |
| `sw.js` | Offline-cache, netwerk eerst |
| `manifest.webmanifest` | Naam en kleur op het beginscherm |
| `manuals/` | Zes module-pdf's, één per vak |

### Scriptvolgorde — dit luistert nauw

In alle drie de html-bestanden, in precies deze volgorde:

```
rooster.js
app.js
lesblokken.js
lesstof.js
ssms-inhoud.js
governance-college-1.js
governance-slides-1.js      <- losse lesbestanden hier
governance-college-2.js
society-slides-1.js
ps-college-1.js
ps-college-2.js
drm-conceptlist-1.js
drm-conceptlist-2.js
drm-conceptlist-3.js
faw-college-1.js
faw-college-2.js
society-college-2.js
society-college-3.js
recap-society.js
recap-professional-skills.js
recap-governance.js
recap-intro.js
society-college-1.js
intro-h7.js
vakken.js
vak.js of les.js            <- deze tekenen METEEN bij het laden
```

`vak.js` en `les.js` roepen `start()` aan zodra ze geladen zijn. Alles wat
inhoud levert moet er dus vóór staan. Een nieuw lesbestand achteraan zetten
betekent dat het netjes inlaadt en vervolgens genegeerd wordt.

## 3. Hoe een vak wordt opgebouwd

`vakken.js` bouwt alle vakken uit drie bronnen:

1. **Colleges** — één onderdeel per sessie, afgeleid uit `VAK_VOORBEREIDING`
   in `ssms-inhoud.js`. Titel wordt `Sessie N · <onderwerp>`, met de
   voorbereiding als grijze regel eronder.
2. **Lecture slides** — uitgewerkte collegeslides, in `SLIDES` in `vakken.js`.
   Tellen niet mee voor de voortgangsbalk (zie `teltMee` in `app.js`, dat
   filtert op de groepsnaam `Lecture slides`).
3. **Eigen groepen** — boek, opdrachten, naslag, in `BOEKEN` en `EXTRA`.

Sessies per vak: Intro 16, Governance 16, Society 16, DRM 13, FAW 8,
Professional Skills 11.

Boekhoofdstukken koppel je aan een sessie via `lesIds` in
`VAK_VOORBEREIDING`; `vakken.js` plakt die lesstof dan samen tot één
lespagina onder `college-N`. Bij Intro gebeurt dat voor sessie 2 (H1+H2),
4 (H3+H5), 6 (H7+H9) en 8 (H10). De rest staat onder "Overige hoofdstukken".

### Samenvoegen van hoofdstukken (`voegSamen` in `vakken.js`)

Tabbladen met hetzelfde id worden samengevoegd. Daarom krijgt elk hoofdstuk
zijn eigen kernstof-tab: `kern`, `kern2`, `kern3`. Twee dingen die daar sinds
september 2026 in zijn geregeld:

- Een scheidingskopje met de hoofdstuknaam komt er alleen als een tabblad
  inhoud van **twee** hoofdstukken mengt. Tabbladen van één hoofdstuk,
  zoals `kern2`, krijgen die kop niet.
- De tabvolgorde staat vast via de lijst `VOLGORDE`: voor, kern, kern2,
  kern3, kern4, toepassen, checken, kaarten. Zonder die lijst belandde
  `kern2` achter Checken.

## 4. Deadlines, sessies en achterstand

In `app.js`:

- `SEMESTER_START = new Date(2026, 8, 7)` — maandag 7 september. Alles in het
  rooster van vóór die datum telt niet als sessie.
- `VAK_START` — per vak een afwijkende startdatum, nu leeg.
- `sessiesVan(vakId)` — de sessies van een vak, ontdubbeld per dag. Zowel de
  eerstvolgende voorbereiding als de achterstand gebruiken deze functie.
- `achterstalligeVoorbereiding(nu)` — voorbereidingen van sessies die al
  geweest zijn en niet zijn afgevinkt. Slaat `leeg`-sessies over, en sessies
  waarvan alle gekoppelde lesstof al is afgevinkt.

Op het homescreen:

- Eigen deadlines: altijd, hoe ver weg ook
- Toetsen uit het rooster: pas vanaf 14 dagen (`TOETS_VENSTER`)
- Voorbereiding: die van het eerstvolgende college, één per vak
- Achterstand: bovenaan, met "x dagen te laat"
- `GEEN_TOETS` in `rooster.js` bevat `['demo']`, om een demo-toets te filteren

**Afvinken op het homescreen** (nieuw sinds v63). Elke deadlineregel heeft
links een rondje. Voorbereiding en achterstand gaan via `zetVoorAf`, eigen
deadlines krijgen `af: true` in de lijst van hun vak, net zoals de vakpagina
dat doet. Toetsen uit het rooster krijgen geen knop; daar staat een lege
`.dl-vink-leeg` zodat de regels uitgelijnd blijven. De handler
`vinkDeadlineAf(code)` zit in `app.js` en staat in de globale click-handler
vóór de `[data-vak]`-afhandeling, anders opent de regel het vak.

## 5. De lespagina — vaste opzet

Vijf tabbladen: Before you start, Core material (per hoofdstuk), Applying it,
Check yourself, Flashcards.

Het laatste wordt automatisch gemaakt door `metFlashcards()` in `les.js`, uit
alle `begrippen`- en `flashcards`-blokken, zonder dubbele termen. Flashcards
zijn geen omdraaikaarten maar blokken: links de term, rechts de definitie,
allebei aan te tikken om alleen dat stuk te kopiëren.

### De kopjesbalk

Kernstof wordt bij het tekenen opgesplitst in kopjes. Dit gebeurt in de
weergave, niet in de inhoud.

- Een nieuw kopje begint bij elk blok met een titel
- Blokken zonder titel horen bij het kopje erboven
- Bij minder dan twee titels blijft het tabblad heel
- **Sinds v76: alleen tabbladen waarvan het id begint met `kern` krijgen een
  kopjesbalk.** Op Voorbereiding, Toepassen en Checken is een titel dus
  gewoon een kop boven een blok. Dat staat in `stukkenVan()` in `les.js`.

Bovenaan een compacte balk: pijl terug, naam van het huidige kopje met
teller, pijl vooruit, en een pijltje om de balk in te klappen. Tik op de naam
en de volledige lijst klapt open, met per kopje een bolletje om het weer op
open te zetten. Onderaan elk kopje één knop rechts: Afvinken en verder.

Niets mag springen. Elke actie tekent het tabblad opnieuw; `zonderSprong()`
zet de scrollpositie terug. Voeg je een actie toe, gebruik die functie dan ook.

### Het tabblad "To remember" (recap, sinds v81)

Een zesde tabblad met de echte kernprincipes van de les op een rij: tabellen
en korte uitleg, afgesloten met een `hardop`-blok "Say it out loud". Id
`recap`, titel `To remember`. Het staat direct na de laatste kernstof-tab.

De recaps staan niet in de lesbestanden zelf maar per vak in een eigen
bestand (`recap-society.js`, later `recap-intro.js` enzovoort), met per les
`voegRecapToe('<vak>/<les>', { id: 'recap', ... })`. Die functie staat in
`lesstof.js`. Het recap-bestand moet dus **na** de lesbestanden en **voor**
`vakken.js` laden. Omdat het id niet met `kern` begint, komt er geen
kopjesbalk. `recap` staat ook in `VOLGORDE` in `vakken.js`, zodat een recap
die aan een boekhoofdstuk hangt bij samenvoegen op de goede plek komt.

Stand: Society (slides-1, college-2, college-3), Professional Skills
(college-1, college-2) en Governance (college-1, college-2) hebben een recap.
De recap van Governance sessie 1 dekt boek en college samen; slides-1 van
Governance heeft er bewust geen eigen. Intro: slides-1 (sessie 1),
H1+H2 (sessie 2) en H3+H5 (sessie 4). Bij Intro hangt de recap aan het
hoofdstuk; vakken.js voegt ze per sessie samen tot één To remember-tab, met
de hoofdstuknaam als tussenkop. Intro sessie 6: H7 heeft een recap (en is vertaald), H9 volgt. Nog te doen:
Intro sessie 8 (H10), DRM, FAW.

### Vertalen naar het Engels

Afspraak: alle lesstof wordt Engels, de bedrading blijft Nederlands. Klaar:
Intro H1, H2, H3, H5, H7 en (sinds v91) H9. Nog Nederlands: Intro slides-1, H4,
H6, H8, H10, H11, de studiegids, DRM en FAW. Werkwijze bij vertalen: het
hoofdstuk uit `ssms-inhoud.js` halen, als eigen bestand `intro-h<n>.js`
opnieuw opbouwen via een builder met JSON.stringify, scripttag toevoegen in
de drie html-bestanden en in `sw.js`, en de naam in `BOEKEN` in `vakken.js`
meevertalen.

### Zoekbalk en inklapknop (v85)

De zoekbalk in de les (`.leszoek-veld`) heeft dezelfde vorm als die op het
homescreen: pil, eigen vlak, schaduw, rondje als icoon. Hij staat sinds v86
in de bovenbalk zelf: klikken op het zoekknopje zet `hidden` van
`#leszoekVeld` uit en geeft `.les-top` de klasse `zoekt`, waarna het veld de
vrije breedte vult. De resultaten staan eronder in `#zoekUit`. Onder 560px
verdwijnt de Terug-link zolang er gezocht wordt. Op het homescreen
zitten de zoekbalk en de twee knoppen in `#toolsGroep`; de pijlknop
`#toolsInklap` klapt die groep in en uit. De stand wordt bewaard in
localStorage onder `ssms-tools`, en bij inklappen wordt het zoekveld geleegd.
In een les doet **één** knop dit werk: `#balkKnop`, die `lesextra.js` zelf in
de balk zet. Sinds v90 klapt die knop niet alleen de bovenbalk in (`.les-top`
krijgt `ingeklapt`) maar ook `#toolsGroep` met het zoekveld en de drie ronde
knoppen, en hij sluit een openstaand zoekveld. De stand staat in localStorage
onder `ssms-balk`. Er staat dus geen aparte inklapknop meer in `les.html`; de
code in `app.js` is alleen voor het homescreen.

### Zoeken binnen een les (nieuw in v77, knop sinds v78)

Boven de tabbladen staat een zoekveld dat de hele les doorzoekt: alle
tabbladen, alle blokken, alle velden. `tekstVanBlok()` loopt recursief door
een blok en plakt alle stringwaarden aan elkaar, zodat ook tabelrijen,
quizuitleg en flashcarddefinities meedoen. `zoekIndex()` bouwt daaruit een
lijst met per blok het tabblad en, in de kernstof, het kopje. Een treffer
toont het fragment met de term gemarkeerd; aantikken springt naar dat
tabblad en zet dat kopje open via `zetKeuze`. Zoeken begint vanaf twee
tekens, maximaal 25 treffers in beeld. Zit in `les.js`, met het veld in
`les.html` en de opmaak achteraan `styles.css`.

De balk staat standaard ingeklapt achter het vergrootglas in de knoppenbalk
bovenin, naast het menu en de licht/donker-knop. `zetZoekOpen()` regelt het
uitklappen, focust het veld, maakt het leeg bij sluiten en sluit de balk weer
zodra je een treffer aantikt. Escape sluit hem ook.

### Bloktypes in `lesblokken.js`

`tekst`, `uitleg`, `waarschuwing`, `voorbeeld`, `slimmer`, `hardop`,
`leerdoelen`, `checklist`, `citaat`, `tabel`, `stappen`, `vergelijking`,
`flashcards`, `begrippen`, `oefening`, `video`, `quiz`, `preview`, `bronnen`.

Velden: `titel`, `tekst`, `punten`, `toetsstof: true`; `kop` + `rijen` bij
tabellen; `vraag`/`antwoord`/`niveau` bij oefeningen; `vragen` met `opties`/
`juist`/`uitleg` bij quizzen; `items` bij begrippen en stappen; `kaarten` bij
flashcards; `apa` bij bronnen. In `tekst` werkt `**vet**` en `\n\n`.

Let op de veldnamen per type. Een fout veld levert `undefined` op het scherm
op, zonder foutmelding. `vergelijking` wil `links` en `rechts`, elk een
object met `titel`, `tekst` en `punten`, en kan dus maar twee kolommen. Voor
drie kolommen gebruik je `tabel`. `bronnen` wil `apa`, niet `titel` + `tekst`.

## 6. Welke lesstof er nu is

43 lessen, ruim 1.240 blokken.

**Engels** (nieuw geschreven of vertaald):

- Intro to Safety & Security: **Bieder H1, H2, H3 en H5** — sessie 2 (H1+H2)
  en sessie 4 (H3+H5), elk met een eigen kernstof-tab per hoofdstuk
- Governance & Policy sessie 1 (McCormick H1, en de slides)
- Governance & Policy sessie 2 (Buckwalter & Balfour, Quality of Governance H2)
- Society & Politics sessie 1 (slides) en **sessie 2 (Macionis H7)**, die
  laatste met 82 flashcards
- Professional Skills sessie 1 (non-verbale communicatie) en **sessie 2
  (communicating adverse information)**: twee kernstof-tabs (CAT; kanalen,
  medium en barrières), 76 flashcards
- DRM conceptlijst, drie delen, onder Extra naslagwerken
- FAW: writer responsible writing, sinds v80 de les van **sessie 2**
  (nog in de oude opzet: 15 kopjes, geen begrippenblok)
- Society & Politics **sessie 3 (Macionis H11)**, 9 kopjes, 75 flashcards

**Nog Nederlands:**

- Intro: Bieder H4 en H6 t/m H11
- DRM: H3, H4, H5, H13 uit Verhoeven
- FAW: naslag, rubric, één oefening
- Professional Skills: de drie opdrachten
- Studiegids: 11 onderdelen. Hoeft niet vertaald te worden.

Programma's uit de Year 1 manual staan voor alle zes vakken. Module manuals
staan voor alle zes in `manuals/`, met deze namen:

```
Y1_manual_intro_ssms.pdf
Y1_manual_governance_policy.pdf
Y1_manual_society_politics.pdf
Y1_manual_drm.pdf
Y1_manual_FAW.pdf
Y1_manual_professional_skills.pdf
```

De paden staan in `VAK_MANUAL` in `ssms-inhoud.js` en moeten **letterlijk**
kloppen. Spaties in bestandsnamen hebben al één keer een 404 opgeleverd.

## 7. Hoe je iets toevoegt

- **Nieuwe les bij een sessie:** nieuw bestand `<vak>-college-N.js` met
  `LESSTOF['<vakId>/college-N'] = [ ... ]`, scripttag in de drie
  html-bestanden op de juiste plek, bestand in `BESTANDEN` in `sw.js`,
  `VERSIE` ophogen.
- **Nieuwe collegeslides:** regel in `SLIDES` in `vakken.js` met `slides-2`,
  lesstof onder `LESSTOF['<vakId>/slides-2']`.
- **Programma aanpassen:** alleen `VAK_VOORBEREIDING`. De onderdelen en de
  deadlines volgen vanzelf.
- **Nieuw boek:** hoofdstukken in `BOEKEN` in `vakken.js`, lesstof onder
  `LESSTOF['<vakId>/<hoofdstukId>']`, `lesIds` invullen in
  `VAK_VOORBEREIDING`.

## 8. Werkafspraken met Julie

- Levering altijd als zip, met **alleen de gewijzigde en nieuwe bestanden**.
  Ze voegt ze toe aan de bestaande repo.
- **Noem de zip naar de aanpassing**, niet naar het versienummer.
- Zeg expliciet welke bestanden erin zitten.
- Uitleg in gewone taal, geen jargon zonder toelichting.
- Zeg meteen als iets volgens jou niet klopt, in plaats van het gewoon uit te
  voeren.
- Geen em-dashes, emoji's spaarzaam.
- Kleine stappen. Mag in meerdere opleveringen.
- **Lesstof in het Engels**, app-teksten en bedrading Nederlands. Reden: de
  studie is Engelstalig en ze wil de vaktermen kunnen gebruiken.
- **Kopjes per paragraaf**, niet fijner. Binnen die kopjes juist uitgebreid.
- **Flashcards ruim**: alle begrippen uit het hoofdstuk, met echte uitleg per
  kaart.

## 9. Valkuilen die al een keer hebben toegeslagen

- **Dubbele escapes.** In een JS-bron hoort `\n`, niet `\\n`. Dat laatste
  levert letterlijk de tekens `\n` op het scherm op. Is 266 keer gebeurd in
  `society-college-2.js` en 123 keer in `faw-writer-responsible.js`.
  Controleer met `grep -c '\\\\n' <bestand>`; de uitkomst moet 0 zijn.
  Eerder zat dezelfde fout in `ssms-inhoud.js` met `\\u00b7`.
- **`opFeed` in `rooster.js`.** Riep vroeger bij elke aanmelding
  `autoVakken()` aan, waardoor elk inhoudsbestand het werk van de vorige
  weggooide. `autoVakken` is nu helemaal verwijderd.
- **Laadvolgorde.** Zie punt 2. Een lesbestand ná `vak.js` of `les.js` laden
  betekent dat het niets doet.
- **`addAll` in `sw.js`.** Ontbrak één bestand uit `BESTANDEN`, dan mislukte
  de installatie volledig. Nu wordt er per bestand gecachet.
- **Cache.** `sw.js` is netwerk eerst, cache als vangnet.
- **Onzichtbare knop.** `.manual-knop` zette de achtergrond op papierkleur
  terwijl `.btn` de tekstkleur ook op papierkleur zette. Wit op wit.
- **Zoeken in `ssms-inhoud.js`.** Dat bestand bevat meerdere lessen met
  dezelfde kopjes. Baken altijd eerst de les af (`LESSTOF['x']` tot de
  volgende `LESSTOF[`) en zoek pas daarbinnen, met een controle dat er precies
  één match is. Veiliger nog: laad het bestand in Node, pas het object aan en
  schrijf alleen dat ene `LESSTOF`-blok terug met `JSON.stringify`.
- **Lijstjes onder een tekstblok.** Tot v81 toonde het bloktype `tekst`
  het veld `punten` niet. Drie lijstjes in Governance sessie 1 (de vijf
  regelmatigheden, de drie kenmerken van politiek, de vier soorten besluiten)
  waren daardoor onzichtbaar. Sinds v82 rendert `tekst` ook `punten`.
- **Bestandsnamen van pdf's.** Spaties, komma's en een spatie vóór `.pdf`
  geven 404's. Alleen letters, cijfers, underscores en streepjes.
- **Verkeerd boek bij een sessie.** "H2" van het ene boek is niet "H2" van het
  andere. Bij Governance sessie 2 is McCormick H2 bijna toegevoegd terwijl de
  verplichte stof Buckwalter & Balfour was. Check de auteur, niet het nummer.

- **Titels in kernstof.** Elk blok met een titel in een `kern`-tab wordt een
  eigen kopje in de balk. Geef in kernstof alleen de paragraafblokken en de
  Summary een titel; zet bij kaders de kop vetgedrukt als eerste regel in
  `tekst`, en laat tabellen en begrippen zonder titel.

## 10. Plan: collegeslides verwerken in de sessie (afgesproken, nog niet gebouwd)

Julie uploadt na elk college de slides. Aparte slides-lessen stoppen we
mee, want dat is dubbel werk. Werkwijze:

1. Julie zegt vak en sessie. Eerst een korte vergelijking in de chat:
   wat staat al in de les, wat is nieuw, wat spreekt het boek tegen.
2. Nieuwe stof die bij een bestaande paragraaf hoort, komt in die
   paragraaf van Core material, als herkenbaar blok "From the lecture"
   (voorstel: een eigen bloktype `college`, een kader met dat label, zodat
   het zichtbaar en doorzoekbaar is).
3. Stof die nergens bij past, krijgt een eigen kopje achteraan Core
   material: "From the lecture: <onderwerp>". Geen apart tabblad, dat
   brengt de dubbeling terug.
4. De recap krijgt bovenaan een blok "What the lecturer emphasised": waar
   de docent nadruk op legde is een toetssignaal.
5. Bestaande slides-lessen (Intro, Society en Governance sessie 1) worden
   stap voor stap in de sessieles opgenomen en uit `SLIDES` gehaald.
   Society sessie 1 heeft nog geen sessieles; die wordt H1, H2, H4 plus de
   slides (zie hieronder).

## 10a. To-do lijst (geparkeerd, 22 september)

1. ~~Society sessie 1~~ klaar sinds v89, inclusief To remember met "What the
   lecturer emphasised". De losse slides-les van Society is uit `SLIDES`
   gehaald; `society-slides-1.js` staat er nog tot Intro en Governance ook
   zijn omgezet.
2. ~~Intro H9~~ klaar sinds v91: vertaald, eigen kernstof-tab (`kern2`) en een
   recap. Sessie 6 is compleet. Volgende: **H10** voor sessie 8.
3. ~~FAW~~: sessie 1 en 2 zijn in v92 opnieuw gebouwd uit de slides en
   worksheets, met To remember, en het college is erin verwerkt. Let op: deze
   twee lessen hebben 10 en 14 flashcards, minder dan de norm van dertig,
   omdat het vak weinig begrippen kent en vooral vaardigheid is. Nog te doen:
   recaps voor **DRM** (sessies 3, 4, 6, 9, 11 en de conceptlijsten).
4. Rest van het vertaalwerk: Intro slides-1, H4, H6, H8, H10, H11, studiegids,
   DRM, FAW.
5. Society slides-1 opheffen zodra sessie 1 klaar is: de lecture zit dan in de
   sessieles. Idem voor Intro en Governance slides-1.

## 10b. Nog openstaand

- **Society & Politics sessie 1** (Macionis H1, H2 en H4). H1 is al
  geschreven (`society-h1.js`, zit in deze repo maar is nog niet bedraad);
  H2 en H4 volgen. Daarna moeten `lesIds: ['h1','h2','h4']` bij sessie 1 in
  `VAK_VOORBEREIDING`, moeten de drie hoofdstukken in `BOEKEN` bij
  `society-politics` komen, dat vak heeft nog geen boekgroep, en moeten de
  scripttag en `BESTANDEN` worden bijgewerkt.
- Vertalen van de resterende Nederlandse lessen, stapje voor stapje.
- Lesstof voor alle sessies die nu nog "nog leeg" heten.
- Governance & Policy deel 2 (sessie 9-16) heeft nog geen docentendocument.
- `tijdelijk.txt.` in `manuals/` kan weg.
