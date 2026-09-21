/* ============================================================
   De vakken van semester 1
   ============================================================

   Dit is de enige plek waar wordt bepaald welke vakken er zijn en
   welke onderdelen ze hebben. Het rooster doet daar niet aan mee:
   dat laat alleen zien wanneer je waar moet zijn.

   Per vak drie soorten groepen, in deze volgorde:

     Colleges          een onderdeel per sessie uit het programma
     Lecture slides    de uitgewerkte collegeslides
     (eigen groepen)   boek, opdrachten, naslag, wat er maar is

   Het programma zelf staat in VAK_VOORBEREIDING in ssms-inhoud.js.
   Wil je een sessie veranderen, doe dat daar; dit bestand volgt.

   Lesstof aan een sessie hangen kan op twee manieren:

     1. Schrijf LESSTOF['<vakId>/college-3'] en klaar.
     2. Zet in BOEKEN hieronder welke lesstof bij welke sessie hoort.
        Dan worden die stukken samengevoegd tot een lespagina, zoals
        H1 en H2 bij sessie 2 van Intro to Safety & Security.
   ============================================================ */

(function(){
  if (typeof DATA === 'undefined' || typeof VAK_VOORBEREIDING === 'undefined') return;

  /* ---------- wat er per vak is ---------- */

  var VAKKEN = [
    { id: 'intro-to-safety-security',        naam: 'Intro to Safety & Security' },
    { id: 'governance-policy',               naam: 'Governance & Policy' },
    { id: 'society-politics',                naam: 'Society & Politics' },
    { id: 'demystifying-research-methods',   naam: 'Demystifying Research Methods' },
    { id: 'fundamentals-of-academic-writing', naam: 'Fundamentals of Academic Writing' },
    { id: 'professional-skills',             naam: 'Professional Skills' }
  ];

  /* De uitgewerkte collegeslides. Komt er na een college een nieuwe bij,
     dan zet je hier een regel erbij en schrijf je de lesstof onder
     LESSTOF['<vakId>/slides-2']. Slides tellen niet mee voor de balk. */
  var SLIDES = {
    'intro-to-safety-security': [
      { id: 'slides-1', titel: 'Sessie 1 \u00b7 SSMS & what it\u2019s all about', duur: 45 }
    ],
    'society-politics': [
      { id: 'slides-1', titel: 'Sessie 1 \u00b7 Introductie en sociologische perspectieven', duur: 60 }
    ],
    'governance-policy': [
      { id: 'slides-1', titel: 'Sessie 1 \u00b7 Governance and Policy: an introduction', duur: 60 }
    ]
  };

  /* Boekhoofdstukken. De titel is voor de restlijst; de koppeling aan een
     sessie loopt via lesIds in VAK_VOORBEREIDING, zodat er maar één lijst
     is die kan verschuiven. */
  var BOEKEN = {
    'intro-to-safety-security': {
      groep: 'Overige hoofdstukken',
      delen: {
        h1:  'H1 Bringing safety and security together',
        h2:  'H2 Risk, safety and security as concepts',
        h3:  'H3 Twee kanten van dezelfde medaille',
        h4:  'H4 Safety versus security in de luchtvaart',
        h5:  'H5 Security- en safetycultuur',
        h6:  'H6 Gebruikerservaring op de luchthaven',
        h7:  'H7 De divergentie van safety en security',
        h8:  'H8 Voorbereiden om verrast te worden',
        h9:  'H9 Spanningen en synergie in management',
        h10: 'H10 Het snijvlak op de werkplek',
        h11: 'H11 Onderzoeks- en managementuitdagingen'
      }
    },
    'demystifying-research-methods': {
      groep: 'Boek',
      delen: {
        ch3:  'H3 De achtergrond van je onderzoek',
        ch4:  'H4 Centrale vraag en doelstelling',
        ch5:  'H5 Begripsafbakening en modelbouw',
        ch13: 'H13 Kwantitatieve data: voorbereiding'
      }
    }
  };

  /* Losse onderdelen die geen boek en geen slides zijn. */
  var EXTRA = {
    'demystifying-research-methods': [
      { id: 'conceptlist-1', groep: 'Extra naslagwerken', titel: 'Concept list deel 1 \u00b7 Intro to Research Methods', duur: 60 },
      { id: 'conceptlist-2', groep: 'Extra naslagwerken', titel: 'Concept list deel 2 \u00b7 Understanding the problem', duur: 35 },
      { id: 'conceptlist-3', groep: 'Extra naslagwerken', titel: 'Concept list deel 3 \u00b7 Planning your investigation', duur: 50 }
    ],
    'professional-skills': [
      { id: 'opdrachten', groep: 'Opdrachten', titel: 'De drie opdrachten \u00b7 aanpak per opdracht', duur: 30 }
    ],
    'fundamentals-of-academic-writing': [
      { id: 'naslagwerk', groep: 'Naslag',  titel: 'Engels academisch schrijven', duur: 40 },
      { id: 'rubric',     groep: 'Naslag',  titel: 'De beoordelingsrubric',       duur: 15 },
      { id: 'oefening-1', groep: 'Oefenen', titel: '"Europe\u2019s cocaine problem"', duur: 30 }
    ]
  };

  var STUDIEGIDS = [
    { id: 'overzicht',    groep: 'Het semester', titel: 'Semesteroverzicht',                duur: 20 },
    { id: 'intro',        groep: 'Per vak',      titel: 'Intro to Safety & Security',       duur: 15 },
    { id: 'governance',   groep: 'Per vak',      titel: 'Governance & Policy',              duur: 15 },
    { id: 'society',      groep: 'Per vak',      titel: 'Society & Politics',               duur: 15 },
    { id: 'drm',          groep: 'Per vak',      titel: 'Demystifying Research Methods',    duur: 15 },
    { id: 'writing',      groep: 'Per vak',      titel: 'Fundamentals of Academic Writing', duur: 15 },
    { id: 'skills',       groep: 'Per vak',      titel: 'Professional Skills',              duur: 20 },
    { id: 'deadlines',    groep: 'Planning',     titel: 'Alle toetsen en deadlines',        duur: 10 },
    { id: 'kalender',     groep: 'Planning',     titel: 'Academische kalender',             duur: 10 },
    { id: 'competenties', groep: 'Regels',       titel: 'Competenties en leerdoelen',       duur: 20 },
    { id: 'regels',       groep: 'Regels',       titel: 'Regels, rubrics en doorstroom',    duur: 15 }
  ];

  var STANDAARDDUUR = 45;

  /* ---------- opbouwen ---------- */

  /* Meerdere stukken lesstof achter elkaar plakken tot één lespagina.
     De vier tabbladen blijven vier; per tabblad komen de blokken onder
     elkaar met een kopje ertussen zodat je ziet waar je bent. */
  function voegSamen(vakId, ids, namen){
    var tabs = [];
    ids.forEach(function(id){
      var bron = LESSTOF[vakId + '/' + id];
      if (!bron) return;
      bron.forEach(function(tab){
        var doel = tabs.filter(function(t){ return t.id === tab.id; })[0];
        if (!doel) { doel = { id: tab.id, titel: tab.titel, blokken: [] }; tabs.push(doel); }
        /* Alleen een scheidingskopje als dit tabblad al inhoud van een ander
           hoofdstuk heeft. Tabbladen die maar van een hoofdstuk zijn, zoals
           'Core material: chapter 2', hebben die kop niet nodig. */
        if (ids.length > 1 && namen[id] && doel.blokken.length) {
          doel.blokken.push({ type: 'tekst', titel: namen[id], tekst: '' });
        }
        doel.blokken = doel.blokken.concat(tab.blokken || []);
      });
    });
    /* Vaste volgorde, zodat 'Core material: chapter 2' naast hoofdstuk 1
       staat en niet achteraan belandt. Onbekende tabbladen blijven achteraan. */
    var VOLGORDE = ['voor', 'kern', 'kern2', 'kern3', 'kern4', 'recap', 'toepassen', 'checken', 'kaarten'];
    tabs.sort(function(a, b){
      var ia = VOLGORDE.indexOf(a.id), ib = VOLGORDE.indexOf(b.id);
      if (ia < 0) ia = 99;
      if (ib < 0) ib = 99;
      return ia - ib;
    });

    return tabs.length ? tabs : null;
  }

  function collegesVan(vakId){
    var plan = VAK_VOORBEREIDING[vakId] || {};
    var boek = BOEKEN[vakId];
    var namen = (boek && boek.delen) || {};
    var gebruikt = {};

    var lijst = Object.keys(plan)
      .map(function(n){ return parseInt(n, 10); })
      .sort(function(a, b){ return a - b; })
      .map(function(n){
        var p = plan[n];

        /* Hoort er lesstof bij deze sessie en is die er nog niet? */
        var ids = (p.lesIds || []).filter(function(id){ return namen[id]; });
        if (ids.length && !LESSTOF[vakId + '/college-' + n]) {
          var samen = voegSamen(vakId, ids, namen);
          if (samen) LESSTOF[vakId + '/college-' + n] = samen;
        }
        ids.forEach(function(id){ gebruikt[id] = true; });

        return {
          id: 'college-' + n,
          groep: 'Colleges',
          titel: 'Sessie ' + n + ' \u00b7 ' + (p.onderwerp || 'Nog te bepalen'),
          voorbereiding: p.leeg ? '' : p.titel,
          duur: STANDAARDDUUR
        };
      });

    return { colleges: lijst, gebruikt: gebruikt };
  }

  function onderdelenVan(vakId){
    var uit = collegesVan(vakId);
    var lessen = uit.colleges;

    (SLIDES[vakId] || []).forEach(function(s){
      lessen.push({ id: s.id, groep: 'Lecture slides', titel: s.titel, duur: s.duur });
    });

    var boek = BOEKEN[vakId];
    if (boek) {
      Object.keys(boek.delen).forEach(function(id){
        if (uit.gebruikt[id]) return;          // hangt al aan een sessie
        lessen.push({ id: id, groep: boek.groep, titel: boek.delen[id], duur: 60 });
      });
    }

    (EXTRA[vakId] || []).forEach(function(l){ lessen.push(l); });
    return lessen;
  }

  function bouw(){
    var sem = DATA.semesters.filter(function(s){ return s.id === DATA.actiefSemester; })[0];
    if (!sem) return;

    var nieuw = VAKKEN.map(function(v){
      return { id: v.id, naam: v.naam, lessen: onderdelenVan(v.id) };
    });
    nieuw.push({ id: 'studiegids', naam: 'Studiegids semester 1', lessen: STUDIEGIDS });

    /* Vinkjes en notities hangen aan vakId plus lesId en staan in je
       browser, dus die overleven het opnieuw opbouwen gewoon. */
    sem.vakken = nieuw;
  }

  bouw();
})();
