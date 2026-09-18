# SSMS-leeromgeving — overdracht

Alles wat een nieuwe chat moet weten om hieraan verder te bouwen.
Stand: 17 september 2026, service worker **v78**.


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
| `ps-college-1.js` | Professional Skills sessie 1, non-verbale communicatie |
| `drm-conceptlist-1/2/3.js` | DRM conceptlijst, drie delen, onder Extra naslagwerken |
| `faw-writer-responsible.js` | FAW naslag: writer responsible writing |
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
drm-conceptlist-1.js
drm-conceptlist-2.js
drm-conceptlist-3.js
faw-writer-responsible.js
society-college-2.js
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

41 lessen, ruim 1.160 blokken.

**Engels** (nieuw geschreven of vertaald):

- Intro to Safety & Security: **Bieder H1, H2, H3 en H5** — sessie 2 (H1+H2)
  en sessie 4 (H3+H5), elk met een eigen kernstof-tab per hoofdstuk
- Governance & Policy sessie 1 (McCormick H1, en de slides)
- Governance & Policy sessie 2 (Buckwalter & Balfour, Quality of Governance H2)
- Society & Politics sessie 1 (slides) en **sessie 2 (Macionis H7)**, die
  laatste met 82 flashcards
- Professional Skills sessie 1 (non-verbale communicatie)
- DRM conceptlijst, drie delen, onder Extra naslagwerken
- FAW: writer responsible writing, onder Naslag

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
- **Bestandsnamen van pdf's.** Spaties, komma's en een spatie vóór `.pdf`
  geven 404's. Alleen letters, cijfers, underscores en streepjes.
- **Verkeerd boek bij een sessie.** "H2" van het ene boek is niet "H2" van het
  andere. Bij Governance sessie 2 is McCormick H2 bijna toegevoegd terwijl de
  verplichte stof Buckwalter & Balfour was. Check de auteur, niet het nummer.

## 10. Nog openstaand

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
