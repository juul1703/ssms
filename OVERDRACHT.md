# SSMS-leeromgeving — overdracht

Alles wat een nieuwe chat moet weten om hieraan verder te bouwen.
Stand: 12 september 2026, service worker **v57**.

---

## 1. Wat het is

Een statische website op GitHub Pages: de digitale leeromgeving voor het
eerste semester SSMS aan de Haagse Hogeschool. Geen server, geen build,
geen framework. Losse HTML-, CSS- en JS-bestanden in de hoofdmap.

- Repo-eigenaar: **juul1703**
- Live: **https://juul1703.github.io/ssms/**
- Oudere repo `leeromgeving-ssms-` wordt niet meer gebruikt.

Julie werkt vanaf iPhone en iPad en uploadt via de webinterface van
GitHub. Ze raakt de code niet aan; wijzigingen komen **altijd als zip**
met kant-en-klare bestanden.

---

## 2. De bestanden

| Bestand | Wat het doet |
| --- | --- |
| `index.html` | Homescreen: vakken, deadlines, rooster van vandaag |
| `vak.html` | Vakpagina |
| `les.html` | Lespagina |
| `styles.css` | Alle opmaak |
| `app.js` | Homescreen, deadlines, voortgang, afvinken, sessieberekening |
| `rooster.js` | Leest de MyTimetable iCal-link. **Maakt geen vakken aan.** |
| `vakken.js` | De enige plek waar staat welke vakken er zijn en welke onderdelen ze hebben |
| `vak.js` | Tekent de vakpagina |
| `les.js` | Tekent de lespagina: tabbladen, kopjesbalk, flashcardtab |
| `lesblokken.js` | Rendert de bloktypes binnen een les |
| `lesstof.js` | Opzoeken van lesstof |
| `lesextra.js` | Extra's op de lespagina |
| `ssms-inhoud.js` | Lesstof, `VAK_VOORBEREIDING`, `VAK_MANUAL`, de studiegids (~845 KB) |
| `governance-college-1.js` | Governance sessie 1, uit McCormick H1 (Engels) |
| `governance-slides-1.js` | Governance sessie 1, uit de collegeslides (Engels) |
| `society-slides-1.js` | Society & Politics sessie 1, uit de collegeslides (Engels) |
| `ps-college-1.js` | Professional Skills sessie 1, non-verbale communicatie (Engels) |
| `sw.js` | Offline-cache, netwerk eerst |
| `manifest.webmanifest` | Naam en kleur op het beginscherm |

### Scriptvolgorde — dit luistert nauw

In alle drie de html-bestanden, in precies deze volgorde:

```
rooster.js
app.js
lesblokken.js
lesstof.js
ssms-inhoud.js
governance-college-1.js
governance-slides-1.js      ← losse lesbestanden hier
society-slides-1.js
ps-college-1.js
vakken.js
vak.js of les.js            ← deze tekenen METEEN bij het laden
```

`vak.js` en `les.js` roepen `start()` aan zodra ze geladen zijn. Alles wat
inhoud levert moet er dus **vóór** staan. Een nieuw lesbestand achteraan
zetten betekent dat het netjes inlaadt en vervolgens genegeerd wordt.

---

## 3. Hoe een vak wordt opgebouwd

`vakken.js` bouwt alle vakken uit drie bronnen:

1. **Colleges** — één onderdeel per sessie, afgeleid uit
   `VAK_VOORBEREIDING` in `ssms-inhoud.js`. Titel wordt
   `Sessie N · <onderwerp>`, met de voorbereiding als grijze regel eronder.
2. **Lecture slides** — uitgewerkte collegeslides, in `SLIDES` in
   `vakken.js`. **Tellen niet mee voor de voortgangsbalk** (zie `teltMee`
   in `app.js`, dat filtert op de groepsnaam `Lecture slides`).
3. **Eigen groepen** — boek, opdrachten, naslag, in `BOEKEN` en `EXTRA`.

Boekhoofdstukken koppel je aan een sessie via `lesIds` in
`VAK_VOORBEREIDING`; `vakken.js` plakt die lesstof dan samen tot één
lespagina onder `college-N`. Bij Intro gebeurt dat voor sessie 2 (H1+H2),
4 (H3+H5), 6 (H7+H9) en 8 (H10). De rest staat onder "Overige hoofdstukken".

### `VAK_VOORBEREIDING`

```js
'governance-policy': {
  1: { onderwerp: 'Governance and Policy: an introduction · 11 sep',
       titel: 'McCormick H1 lezen', lesIds: [] },
  8: { onderwerp: 'Recap and exam preparation · 6 nov',
       titel: 'Daarna de midterm', lesIds: [], leeg: true }
}
```

- `onderwerp` — onderwerp van die sessie
- `titel` — wat je moet voorbereiden; verschijnt als deadline
- `lesIds` — welke lesstof erbij hoort
- `leeg: true` — geen echte voorbereiding, geen deadline, telt niet als achterstand

---

## 4. Deadlines, sessies en achterstand

In `app.js`:

- `SEMESTER_START = new Date(2026, 8, 7)` — maandag 7 september. Alles
  in het rooster van vóór die datum telt niet als sessie. Dit staat er
  omdat Julie's introductiedag van 3 september onder Intro in haar rooster
  stond en het hele leesschema een sessie liet opschuiven.
- `VAK_START` — per vak een afwijkende startdatum, nu leeg.
- `sessiesVan(vakId)` — de sessies van een vak, ontdubbeld per dag. Zowel
  de eerstvolgende voorbereiding als de achterstand gebruiken deze functie,
  zodat ze niet uit de pas kunnen lopen.
- `achterstalligeVoorbereiding(nu)` — voorbereidingen van sessies die al
  geweest zijn en niet zijn afgevinkt. Slaat `leeg`-sessies over, en
  sessies waarvan alle gekoppelde lesstof al is afgevinkt.

Op het homescreen:

- Eigen deadlines: altijd, hoe ver weg ook
- Toetsen uit het rooster: pas vanaf 14 dagen (`TOETS_VENSTER`)
- Voorbereiding: die van het eerstvolgende college, één per vak
- Achterstand: bovenaan, met "x dagen te laat"
- `GEEN_TOETS` in `rooster.js` bevat `['demo']`, om een demo-toets te filteren

Voorbereiding is afvinkbaar (`voorAf` / `zetVoorAf`). Afgevinkt verdwijnt
hij van het homescreen en schuift op de vakpagina naar "Afgerond".

---

## 5. De lespagina — vaste opzet

**Vijf tabbladen: Voorbereiding, Kernstof, Toepassen, Checken, Flashcards.**

Het vijfde wordt automatisch gemaakt door `metFlashcards()` in `les.js`,
uit alle `begrippen`- en `flashcards`-blokken, zonder dubbele termen. Eigen
kaarten schrijven kan door zelf een tabblad met id `kaarten` op te nemen.
Flashcards zijn **geen omdraaikaarten** maar blokken: links de term, rechts
de definitie, allebei aan te tikken om alleen dat stuk te kopiëren.

Kernstof wordt bij het tekenen opgesplitst in kopjes. **Dit gebeurt in de
weergave, niet in de inhoud.**

- Een nieuw kopje begint bij elk blok met een `titel`
- Blokken zonder titel horen bij het kopje erboven
- Bij minder dan twee titels blijft het tabblad heel

Bovenaan een compacte balk: pijl terug, naam van het huidige kopje met
teller, pijl vooruit, en een pijltje om de balk in te klappen. Tik op de
naam en de volledige lijst klapt open, met per kopje een bolletje dat je
kunt aantikken om het weer op open te zetten.

Onderaan elk kopje één knop rechts: **Afvinken en verder →**, die het kopje
afvinkt en doorschuift. Bij het laatste kopje heet die "Kopje afvinken".

**Niets mag springen.** Elke actie tekent het tabblad opnieuw; `zonderSprong()`
zet de scrollpositie terug. Vijf plekken gebruiken dat. Voeg je een actie
toe, gebruik die functie dan ook.

Bij welk kopje je was wordt onthouden per les en per tabblad; of de balk
ingeklapt staat wordt globaal onthouden.

**Eis van Julie: bij herstructureringen mag er geen stof verloren gaan.**
Controleer dat expliciet door blokken voor en na te tellen.

### Bloktypes in `lesblokken.js`

`tekst`, `uitleg`, `waarschuwing`, `voorbeeld`, `slimmer`, `hardop`,
`leerdoelen`, `checklist`, `citaat`, `tabel`, `stappen`, `vergelijking`,
`flashcards`, `begrippen`, `oefening`, `video`, `quiz`, `preview`, `bronnen`.

Velden: `titel`, `tekst`, `punten`, `toetsstof: true`; `kop`+`rijen` bij
tabellen; `vraag`/`antwoord`/`niveau` bij oefeningen; `vragen` met
`opties`/`juist`/`uitleg` bij quizzen; `items` bij begrippen en stappen;
`kaarten` bij flashcards. In `tekst` werkt `**vet**` en `\n\n`.

**Let op de veldnamen per type.** Een fout veld levert `undefined` op het
scherm op, zonder foutmelding. `vergelijking` wil `links` en `rechts`, elk
een object met `titel`, `tekst` en `punten`, en kan dus maar **twee**
kolommen. Voor drie kolommen gebruik je `tabel`.

---

## 6. Welke lesstof er nu is

**Engels, nieuw geschreven of vertaald:**

- Governance & Policy sessie 1, uit McCormick H1 (33 kopjes)
- Governance & Policy sessie 1, uit de collegeslides (17 kopjes)
- Society & Politics sessie 1, uit de collegeslides (14 kopjes)
- Professional Skills sessie 1, non-verbale communicatie (14 kopjes)

**Nog Nederlands:**

- Intro to Safety & Security: H1 t/m H11 van Bieder & Pettersen Gould,
  plus collegeslides sessie 1
- Demystifying Research Methods: H3, H4, H5, H13 uit Verhoeven
- Fundamentals of Academic Writing: naslag, rubric, één oefening
- Professional Skills: de drie opdrachten
- Studiegids: 11 onderdelen. **Deze hoeft niet vertaald te worden.**

Programma's uit de Year 1 manual staan voor alle zes vakken
(16, 16, 16, 13, 8, 11 sessies). Course manuals staan voor alle zes.
Governance deel 1 volgt het aparte docentendocument, niet de manual.

Totaal: 45 lessen, 1.334 blokken.

---

## 7. Hoe je iets toevoegt

**Nieuwe les bij een sessie:** nieuw bestand `<vak>-college-N.js` met
`LESSTOF['<vakId>/college-N'] = [ ... ]`, scripttag in de drie
html-bestanden op de juiste plek, bestand in `BESTANDEN` in `sw.js`,
`VERSIE` ophogen.

**Nieuwe collegeslides:** regel in `SLIDES` in `vakken.js` met `slides-2`,
lesstof onder `LESSTOF['<vakId>/slides-2']`.

**Programma aanpassen:** alleen `VAK_VOORBEREIDING`. De onderdelen en de
deadlines volgen vanzelf.

**Nieuw boek:** hoofdstukken in `BOEKEN` in `vakken.js`, lesstof onder
`LESSTOF['<vakId>/<hoofdstukId>']`, `lesIds` invullen in `VAK_VOORBEREIDING`.

---

## 8. Werkafspraken met Julie

- Levering **altijd als zip**. Stuur bij twijfel álle gewijzigde bestanden
  mee; halve leveringen hebben eerder uren gekost.
- Uitleg in gewone taal, geen jargon zonder toelichting.
- Zeg meteen als iets volgens jou niet klopt of anders moet, in plaats van
  het gewoon uit te voeren.
- Geen em-dashes, emoji's spaarzaam.
- Kleine stappen. Grote herstructureringen zijn meerdere keren misgegaan.
- Bij vertalen: alleen de lesstof, niet de app-teksten. Reden: de studie is
  Engelstalig en ze wil de vaktermen kunnen gebruiken.
- Nog te doen bij literatuur met paragrafen: dan wil ze de doorklikknoppen
  in Kernstof **per paragraaf** in plaats van per subkopje.

---

## 9. Valkuilen die al een keer hebben toegeslagen

**`opFeed` in `rooster.js`.** Riep vroeger bij elke aanmelding
`autoVakken()` aan, waardoor elk inhoudsbestand het werk van de vorige
weggooide. Alleen het laatst geladen bestand overleefde. `autoVakken` is nu
helemaal verwijderd; het rooster maakt geen vakken meer aan.

**Laadvolgorde.** Zie punt 2. Een lesbestand ná `vak.js` of `les.js` laden
betekent dat het niets doet.

**`addAll` in `sw.js`.** Ontbrak één bestand uit `BESTANDEN`, dan mislukte
de installatie van de service worker volledig. Nu wordt er per bestand
gecachet en gaat hij door bij een ontbrekend bestand.

**Cache.** `sw.js` is netwerk eerst, cache als vangnet. Voorheen andersom,
waardoor nieuwe bestanden dagenlang onzichtbaar bleven.

**Dubbele escapes.** In `ssms-inhoud.js` stond ooit 74 keer `\\u00b7` en 132
keer `\\n` met dubbele backslash, waardoor er letterlijke tekst verscheen.

**Onzichtbare knop.** `.manual-knop` zette de achtergrond op papierkleur
terwijl `.btn` de tekstkleur ook op papierkleur zette. Wit op wit.

**Zoeken in `ssms-inhoud.js`.** Dat bestand bevat meerdere lessen met
dezelfde kopjes. Een zoekopdracht op "De zestien sessies" trof de tabel van
Intro in plaats van die van Governance en verwijderde de verkeerde.
**Baken altijd eerst de les af** (`LESSTOF['x']` tot de volgende
`LESSTOF[`) en zoek pas daarbinnen, met een controle dat er precies één
match is.

---

## 10. Nog openstaand

- De module manual als pdf in een map `manuals` onder de naam
  `Y1_Semester_1_Manual_SSMS_20262027.pdf`, dan werkt de knop bij Intro.
  De andere vijf vakken hebben `pdf: ''` en tonen daarom geen knop.
- Losse course manuals per vak, zodra Julie die krijgt.
- Vertalen van de resterende Nederlandse lessen, stapje voor stapje.
  Volgende logische stap: Bieder H1 en H2 samen, want die vormen samen
  één lespagina onder sessie 2.
- Lesstof voor alle sessies die nu nog "nog leeg" heten.
- Society & Politics heeft nog geen boekhoofdstukken (Macionis & Plummer).
- Governance & Policy deel 2 (sessie 9-16) heeft nog geen docentendocument.
