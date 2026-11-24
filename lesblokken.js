/* ============================================================
   Lesblokken — de bouwstenen waarmee een les is opgebouwd.
   Elk blok is een object met een 'type'. Zie README voor de lijst.
   ============================================================ */

function blokHtml(b, ctx){
  var f = BLOKKEN[b.type];
  if (!f) return '<div class="blok blok-onbekend">Onbekend bloktype: <code>' + esc(b.type) + '</code></div>';
  var stof = b.toetsstof ? '<span class="stof-vlag" title="Dit is toetsstof">toetsstof</span>' : '';
  return '<section class="blok blok-' + esc(b.type) + '">' + stof + f(b, ctx || {}) + '</section>';
}

function blokkenHtml(lijst, ctx){
  if (!lijst || !lijst.length) {
    return '<div class="leegmelding" style="margin:0;"><b>Dit onderdeel is nog leeg</b>' +
      '<span>Vul het in <code>app.js</code>, of gebruik dit tabblad als schrijfblok in je aantekening.</span></div>';
  }
  return lijst.map(function(b){ return blokHtml(b, ctx); }).join('');
}

/* ---- Begrippen om overheen te hoveren (v106) ----
   In een tekst schrijf je [[Term]] of [[zichtbare tekst|Term]]. Staat
   die term in een begrippenblok van dezelfde les, dan wordt hij een
   woord met een stippellijn; hover (of tik) en je ziet de definitie in
   een pop-up, waarin term en definitie los te kopieren zijn. Staat de
   term niet in de les, dan blijft alleen de zichtbare tekst over.
   les.js vult HOVER_BEGRIPPEN voordat de les wordt getekend. */
var HOVER_BEGRIPPEN = {};
function zetHoverBegrippen(tabs){
  HOVER_BEGRIPPEN = {};
  (tabs || []).forEach(function(t){
    (t.blokken || []).forEach(function(b){
      if ((b.type === 'begrippen' || b.type === 'flashcards') && b.items) {
        b.items.forEach(function(k){
          if (k && k.begrip && k.definitie) {
            var sl = String(k.begrip).toLowerCase().trim();
            if (!HOVER_BEGRIPPEN[sl]) HOVER_BEGRIPPEN[sl] = k;
          }
        });
      }
    });
  });
}
var HOVER_RE = /\[\[([^\]|]+?)(?:\|([^\]]+?))?\]\]/g;
function zonderHoverMarkering(s){
  return String(s || '').replace(HOVER_RE, function(m, a){ return a; });
}
function hoverBegrip(zichtbaar, term){
  var ont = function(x){ return x.replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&'); };
  var k = HOVER_BEGRIPPEN[ont(term || zichtbaar).toLowerCase().trim()];
  if (!k) return zichtbaar;
  return '<span class="begrip-hover" tabindex="0">' + zichtbaar +
    '<span class="begrip-pop" role="tooltip">' +
      '<button type="button" class="begrip-pop-term kopieer" data-kopieer="' + esc(k.begrip) + '" title="Kopieer de term">' + esc(k.begrip) + '</button>' +
      '<button type="button" class="begrip-pop-def kopieer" data-kopieer="' + esc(k.definitie) + '" title="Kopieer de definitie">' + esc(k.definitie) + '</button>' +
      '<span class="begrip-pop-hint">Tik op de term of de definitie om te kopi\u00ebren</span>' +
    '</span></span>';
}

function rijkeTekst(s){
  // **dik**, *cursief*, `code`, [[begrip]] en alinea's op lege regels
  var t = esc(s || '');
  t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
       .replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>')
       .replace(/`([^`]+)`/g, '<code>$1</code>')
       .replace(HOVER_RE, function(m, a, b){ return hoverBegrip(a, b); });
  return t.split(/\n\s*\n/).map(function(p){
    return '<p>' + p.replace(/\n/g, '<br>') + '</p>';
  }).join('');
}

/* rijke tekst zonder alinea's, voor korte regels in de grafische blokken */
function rijkeInline(s){
  return rijkeTekst(s).replace(/^<p>/, '').replace(/<\/p>$/, '').replace(/<\/p><p>/g, '<br>');
}

var KADER_LABEL = { uitleg: 'Uitleg', waarschuwing: 'Let op', voorbeeld: 'Voorbeeld', slimmer: 'Slimmer werken', hardop: 'Hardop redeneren' };

var BLOKKEN = {

  tekst: function(b){
    /* punten onder een tekstblok werden tot v81 niet getoond; drie lessen
       hadden daardoor onzichtbare lijstjes (Governance sessie 1). */
    return (b.titel ? '<h2>' + esc(b.titel) + '</h2>' : '') +
      (b.html ? b.html : rijkeTekst(b.tekst)) +
      (b.punten && b.punten.length
        ? '<ul>' + b.punten.map(function(p){ return '<li>' + rijkeTekst(p).replace(/^<p>|<\/p>$/g, '') + '</li>'; }).join('') + '</ul>'
        : '');
  },

  /* ---- kaders ---- */
  uitleg: function(b){ return kader('uitleg', b); },
  waarschuwing: function(b){ return kader('waarschuwing', b); },
  voorbeeld: function(b){ return kader('voorbeeld', b); },
  slimmer: function(b){ return kader('slimmer', b); },
  hardop: function(b){
    return '<div class="kader kader-hardop"><div class="kader-kop">' +
      '<span class="kader-label">' + KADER_LABEL.hardop + '</span>' +
      (b.titel ? '<span class="kader-titel">' + esc(b.titel) + '</span>' : '') + '</div>' +
      '<div class="kader-body">' + rijkeTekst(b.tekst) +
      (b.stappen && b.stappen.length
        ? '<ol class="hardop-lijst">' + b.stappen.map(function(s){
            return '<li>' + esc(s) + '</li>';
          }).join('') + '</ol>'
        : '') + '</div></div>';
  },

  /* ---- leerdoelen ----
     Blijft bestaan voor losse gevallen, maar in een uitgewerkte les worden
     leerdoelen automatisch verplaatst naar het laatste tabblad 'Kun je dit?'
     (zie lesstof.js). */
  leerdoelen: function(b, ctx){
    return '<h2>' + esc(b.titel || 'Na dit onderdeel kun je') + '</h2>' +
      '<ul class="doelen">' + (b.items || []).map(function(d, i){
        var doel = typeof d === 'string' ? d : d.doel;
        var k = ctx.sleutel + '-doel-' + i;
        var af = lokaalWaar(k);
        return '<li class="doel' + (af ? ' af' : '') + '">' +
          '<button class="vink" data-vinkdoel="' + esc(k) + '">' + (af ? '✓' : '') + '</button>' +
          '<span>' + esc(doel) + '</span></li>';
      }).join('') + '</ul>';
  },

  /* ---- afvinklijst met uitleg per vaardigheid (laatste tabblad) ---- */
  checklist: function(b, ctx){
    var items = (b.items || []).map(function(d, i){
      var doel = typeof d === 'string' ? { doel: d } : d;
      var k = (ctx.sleutel || 'check') + '-kun-' + i;
      var af = lokaalWaar(k);
      return '<li class="kun' + (af ? ' af' : '') + '">' +
        '<button class="vink" data-vinkdoel="' + esc(k) + '">' + (af ? '✓' : '') + '</button>' +
        '<div class="kun-tekst"><span class="kun-doel">' + esc(doel.doel) + '</span>' +
        (doel.uitleg
          ? '<details class="kun-uitleg"><summary>Zo doe je dit</summary>' +
            '<div class="kun-body">' + rijkeTekst(doel.uitleg) + '</div></details>'
          : '') +
        '</div></li>';
    }).join('');
    return '<div class="blok-kop"><h2>' + esc(b.titel || 'Kun je dit?') + '</h2>' +
      '<span class="hint">vink alleen af wat je hardop kunt uitleggen</span></div>' +
      (b.tekst ? rijkeTekst(b.tekst) : '') +
      '<ul class="kunlijst">' + items + '</ul>';
  },

  /* ---- citaat ---- */
  citaat: function(b){
    return '<blockquote class="citaat"><p>' + esc(b.tekst) + '</p>' +
      (b.bron ? '<footer>' + esc(b.bron) + (b.jaar ? ' (' + esc(b.jaar) + ')' : '') +
        (b.url ? ' · <a href="' + esc(b.url) + '" target="_blank" rel="noopener">bron</a>' : '') +
        '</footer>' : '') + '</blockquote>';
  },

  /* ---- tabel ---- */
  tabel: function(b){
    return (b.titel ? '<h2>' + esc(b.titel) + '</h2>' : '') +
      '<div class="tabel-wrap"><table><thead><tr>' +
      (b.kop || []).map(function(k){ return '<th>' + esc(k) + '</th>'; }).join('') +
      '</tr></thead><tbody>' +
      (b.rijen || []).map(function(r){
        return '<tr>' + r.map(function(c){ return '<td>' + esc(c) + '</td>'; }).join('') + '</tr>';
      }).join('') + '</tbody></table></div>' +
      (b.noot ? '<p class="noot">' + esc(b.noot) + '</p>' : '');
  },

  /* ---- stap-voor-stap accordion ---- */
  stappen: function(b){
    return (b.titel ? '<h2>' + esc(b.titel) + '</h2>' : '') +
      '<div class="stappen">' + (b.items || []).map(function(s, i){
        return '<details class="stap"' + (i === 0 ? ' open' : '') + '><summary>' +
          '<span class="stap-nr">' + (i + 1) + '</span><span>' + esc(s.titel) + '</span></summary>' +
          '<div class="stap-body">' + rijkeTekst(s.tekst) + '</div></details>';
      }).join('') + '</div>';
  },

  /* ---- twee kolommen vergelijken ---- */
  vergelijking: function(b){
    function kolom(k, soort){
      return '<div class="verg-kolom verg-' + soort + '"><h3>' + esc(k.titel) + '</h3>' +
        (k.tekst ? rijkeTekst(k.tekst) : '') +
        (k.punten && k.punten.length
          ? '<ul>' + k.punten.map(function(p){ return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>'
          : '') + '</div>';
    }
    return (b.titel ? '<h2>' + esc(b.titel) + '</h2>' : '') +
      '<div class="vergelijking">' + kolom(b.links || {}, 'links') + kolom(b.rechts || {}, 'rechts') + '</div>';
  },

  /* ---- flashcards ---- */
  flashcards: function(b){
    /* Geen omdraaikaarten maar rustige blokken: links de term, rechts de
       definitie. Tik op een van de twee en je kopieert alleen dat stuk,
       zodat je ze los kunt plakken in Quizlet, Anki of je aantekeningen. */
    return '<div class="blok-kop"><h2>' + esc(b.titel || 'Flashcards') + '</h2>' +
      '<span class="hint">tik op een term of definitie om die te kopi\u00ebren</span></div>' +
      '<div class="kaartlijst">' + (b.kaarten || []).map(function(k){
        return '<div class="kaartrij">' +
          '<button type="button" class="kaart-term kopieer" data-kopieer="' + esc(k.begrip) + '">' +
          esc(k.begrip) + '</button>' +
          '<button type="button" class="kaart-def kopieer" data-kopieer="' + esc(k.definitie) + '">' +
          esc(k.definitie) + '</button>' +
          '</div>';
      }).join('') + '</div>';
  },

  /* ---- kernbegrippen met tooltip ---- */
  begrippen: function(b){
    return '<div class="blok-kop"><h2>' + esc(b.titel || 'Kernbegrippen') + '</h2>' +
      '<span class="hint">hover voor de definitie · klik om te kopiëren</span></div>' +
      '<div class="begrippen">' + (b.items || []).map(function(t){
        return '<button class="begrip" data-kopieer="' + esc(t.definitie) + '">' + esc(t.begrip) +
          (t.en ? '<span class="begrip-en">' + esc(t.en) + '</span>' : '') +
          '<span class="tooltip">' + esc(t.definitie) + '</span></button>';
      }).join('') + '</div>';
  },

  /* ---- oefening met modelantwoord ---- */
  oefening: function(b){
    return '<div class="oefening"><div class="oef-kop"><span class="kader-label">Oefening</span>' +
      (b.niveau ? '<span class="pil">' + esc(b.niveau) + '</span>' : '') + '</div>' +
      rijkeTekst(b.vraag) +
      (b.eigenAntwoord === false ? '' :
        '<textarea class="oef-veld" data-oef="' + esc(b.id || '') + '" placeholder="Schrijf hier je antwoord…"></textarea>') +
      '<details class="model"><summary>Modelantwoord</summary><div class="model-body">' +
      rijkeTekst(b.antwoord) + '</div></details></div>';
  },

  /* ---- video ---- */
  video: function(b){
    return '<div class="videoblok"><div class="video-tekst">' +
      '<span class="kader-label">Video</span>' +
      '<h3>' + esc(b.titel) + '</h3>' +
      (b.tekst ? '<p>' + esc(b.tekst) + '</p>' : '') +
      (b.duur ? '<span class="video-duur">' + esc(b.duur) + '</span>' : '') + '</div>' +
      '<a class="btn" href="' + esc(b.url) + '" target="_blank" rel="noopener">Bekijk video &rarr;</a></div>';
  },

  /* ---- quiz ---- */
  quiz: function(b, ctx){
    return '<div class="quiz" data-quiz="' + esc(ctx.sleutel || '') + '">' +
      '<div class="blok-kop"><h2>' + esc(b.titel || 'Check jezelf') + '</h2>' +
      '<span class="quiz-score" data-score>0 / ' + (b.vragen || []).length + '</span></div>' +
      (b.vragen || []).map(function(v, i){
        return '<div class="qvraag" data-vraag="' + i + '" data-juist="' + v.juist + '">' +
          '<p class="qtekst"><span class="qnr">' + (i + 1) + '</span>' + esc(v.vraag) + '</p>' +
          '<div class="qopties">' + (v.opties || []).map(function(o, j){
            return '<button class="qoptie" data-optie="' + j + '">' + esc(o) + '</button>';
          }).join('') + '</div>' +
          '<div class="quitleg" hidden>' + rijkeTekst(v.uitleg || '') + '</div></div>';
      }).join('') + '</div>';
  },

  /* ---- preview volgende les ---- */
  preview: function(b, ctx){
    var href = b.vakId && b.lesId
      ? 'les.html?vak=' + encodeURIComponent(b.vakId) + '&les=' + encodeURIComponent(b.lesId)
      : (ctx.volgendeHref || 'index.html');
    return '<a class="preview" href="' + href + '"><span class="kader-label">Volgende les</span>' +
      '<h3>' + esc(b.titel) + '</h3>' +
      (b.tekst ? '<p>' + esc(b.tekst) + '</p>' : '') +
      (b.punten && b.punten.length
        ? '<ul>' + b.punten.map(function(p){ return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>'
        : '') +
      '<span class="preview-actie">Vooruitkijken &rarr;</span></a>';
  },

  /* ==== Grafische blokken (v193, end-term-lessen) ====
     Let op: deze blokken gebruiken 'kop' en niet 'titel', zodat ze in een
     kern-tab geen eigen kopje in de kopjesbalk worden. */

  /* ---- in een oogopslag: per item naam, gekleurd label en een zin ---- */
  overzicht: function(b){
    return '<div class="graf graf-overzicht">' +
      (b.kop ? '<h3 class="graf-kop">' + esc(b.kop) + '</h3>' : '') +
      (b.items || []).map(function(it, i){
        return '<div class="ovz-item">' +
          '<div class="ovz-rij"><span class="ovz-naam">' + rijkeInline(it.naam) + '</span>' +
          (it.label ? '<span class="graf-label kleur-' + ((it.kleur !== undefined ? it.kleur : i) % 6) + '">' + esc(it.label) + '</span>' : '') +
          '</div>' +
          (it.tekst ? '<div class="ovz-tekst">' + rijkeTekst(it.tekst) + '</div>' : '') +
          (it.punten && it.punten.length ? '<ul class="graf-punten">' + it.punten.map(function(p){ return '<li>' + rijkeInline(p) + '</li>'; }).join('') + '</ul>' : '') +
          '</div>';
      }).join('') + '</div>';
  },

  /* ---- tijdlijn of stappen: nummer (of jaartal), kop, korte punten ---- */
  tijdlijn: function(b){
    return '<div class="graf graf-tijdlijn">' +
      (b.kop ? '<h3 class="graf-kop">' + esc(b.kop) + '</h3>' : '') +
      '<ol class="tl' + ((b.items || []).some(function(it){ return it.label; }) ? ' tl-labels' : '') + '">' + (b.items || []).map(function(it, i){
        var merk = it.label ? esc(it.label) : String(i + 1);
        return '<li class="tl-item"><div class="tl-merk' + (it.label ? ' tl-merk-tekst' : '') + '">' + merk + '</div>' +
          '<div class="tl-inhoud"><div class="tl-naam">' + rijkeInline(it.naam) + '</div>' +
          (it.tekst ? '<div class="tl-tekst">' + rijkeTekst(it.tekst) + '</div>' : '') +
          (it.punten && it.punten.length ? '<ul class="graf-punten">' + it.punten.map(function(p){ return '<li>' + rijkeInline(p) + '</li>'; }).join('') + '</ul>' : '') +
          '</div></li>';
      }).join('') + '</ol></div>';
  },

  /* ---- schema: vakjes die samen uitkomen op een begrip ---- */
  schema: function(b){
    var inv = b.invoer || [];
    var uit = b.uitkomst || {};
    return '<div class="graf graf-schema">' +
      (b.kop ? '<h3 class="graf-kop">' + esc(b.kop) + '</h3>' : '') +
      '<div class="sch-invoer sch-n' + Math.min(inv.length, 4) + '">' + inv.map(function(v){
        return '<div class="sch-vak"><div class="sch-naam">' + rijkeInline(v.naam) + '</div>' +
          (v.tekst ? '<div class="sch-tekst">' + rijkeInline(v.tekst) + '</div>' : '') + '</div>';
      }).join('') + '</div>' +
      '<div class="sch-pijl" aria-hidden="true"><span>↓</span>' + (b.pijl ? '<em>' + esc(b.pijl) + '</em>' : '') + '</div>' +
      '<div class="sch-uitkomst"><div class="sch-naam">' + rijkeInline(uit.naam) + '</div>' +
      (uit.tekst ? '<div class="sch-tekst">' + rijkeInline(uit.tekst) + '</div>' : '') + '</div></div>';
  },

  /* ---- examentip ---- */
  examentip: function(b){
    return '<div class="examentip"><span class="examentip-label">Exam tip</span>' + rijkeTekst(b.tekst) + '</div>';
  },

  /* ---- inklapbare volledige uitleg; bevat gewone blokken ---- */
  verdieping: function(b, ctx){
    return '<details class="verdieping"><summary><span class="verd-label">' + esc(b.kop || 'Read the full explanation') + '</span>' +
      '<span class="verd-pijl" aria-hidden="true">›</span></summary>' +
      '<div class="verd-body">' + (b.blokken || []).map(function(x){ return blokHtml(x, ctx); }).join('') + '</div></details>';
  },

  /* ---- bronnen ---- */
  bronnen: function(b){
    return '<h2>' + esc(b.titel || 'Bronnen') + '</h2><ol class="bronnen">' +
      (b.items || []).map(function(s){
        return '<li><span class="kopieer" data-kopieer="' + esc(s.apa || s.titel) + '">' +
          esc(s.apa || s.titel) + '</span>' +
          (s.url ? ' <a href="' + esc(s.url) + '" target="_blank" rel="noopener">openen</a>' : '') + '</li>';
      }).join('') + '</ol><p class="noot">Klik op een bron om de APA-verwijzing te kopiëren.</p>';
  }
};

function kader(soort, b){
  return '<div class="kader kader-' + soort + '"><div class="kader-kop">' +
    '<span class="kader-label">' + (KADER_LABEL[soort] || soort) + '</span>' +
    (b.titel ? '<span class="kader-titel">' + esc(b.titel) + '</span>' : '') + '</div>' +
    '<div class="kader-body">' + rijkeTekst(b.tekst) +
    (b.punten && b.punten.length
      ? '<ul>' + b.punten.map(function(p){ return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>'
      : '') + '</div></div>';
}

/* kleine opslaghulp voor losse vinkjes */
function lokaalWaar(k){ try { return localStorage.getItem(k) === 'af'; } catch(e){ return false; } }
function lokaalZet(k, v){ try { localStorage.setItem(k, v ? 'af' : 'open'); } catch(e){} }
