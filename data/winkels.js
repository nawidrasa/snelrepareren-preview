/* De winkels op snelrepareren.nl.

   ER IS NOG GEEN ENKELE ECHTE WINKEL AANGESLOTEN. De zes hieronder zijn verzonnen
   voorbeelden, zodat het ontwerp te beoordelen is. Ze stonden tot 7 september los
   in vier pagina's, in twee verschillende versies: de kiezer had andere winkels
   dan de plaatspagina, dus wie doorklikte kwam bij een winkel die hij niet had
   gezien. Nu is er een lijst.

   DE SCHAKELAAR HIERONDER IS BELANGRIJK. Zet VOORBEELDEN op false en de hele site
   laat overal de eerlijke lege staat zien: geen winkels, geen cijfers, geen
   beoordelingen. Dat is wat er moet gebeuren op de dag dat het echte domein
   eraan hangt, zolang er geen winkel is aangesloten. Het is één regel, geen
   herbouw, en dat is precies waarom deze lijst hier staat en niet in de pagina's.

   Gemaakt om met de hand te lezen. Zodra er echte winkels zijn, komen die uit de
   database en wordt dit bestand gegenereerd, net als data/kiezer.js. */

const VOORBEELDEN = true;

const WINKELDATA = {
  /* Verzonnen. Elk veld dat een claim doet (cijfer, aantal beoordelingen,
     poliscontrole, erkenning) is verzonnen en mag nooit als echt worden gepresenteerd.
     De gele strook bovenaan elke pagina zegt dat ook.

     g en gb zijn het cijfer en het aantal beoordelingen OP GOOGLE, niet van ons.
     Ze heetten c en b, en zo stonden ze op de site alsof het onze cijfers waren.
     kw is de trede op de kwaliteitsladder: kopie, incell, softoled, oem, refurb,
     origineel. Hier stond service, compatibel en origineel, drie namen die
     nergens anders in het project bestaan; daardoor vond het kwaliteitsfilter in
     de preview nooit iets zodra het echt ging filteren.
     Ons eigen aantal staat in eigen en is nul. Dat is geen tijdelijk gebrek: het
     match-moment levert ongeveer een halve beoordeling per dag voor heel
     Friesland, dus een winkel heeft er na een jaar vijf tot tien terwijl hij er
     op Google honderden heeft (analyse 03 A4). Tot ons eigen systeem iets
     betekent, tonen wij Google met bronvermelding en zeggen wij dat erbij. */
  voorbeelden: [
    {n:'Telefoonhulp Leeuwarden',i:'T',plaats:'Leeuwarden',buurt:'Centrum',a:'Nieuwestad 112',km:1.4,
     g:'9,1',gb:48,vers:'nieuwste Google-beoordeling 3 dagen geleden',keur:1,keurdatum:'12 aug 2026',
     polistot:'1 jan 2027',glink:'#',eigen:0,erk:'Apple IRP',jaren:12,vest:1,
     tijd:'Klaar terwijl je wacht',min:35,vandaag:1,gar:'12 maanden garantie',kw:'oem',niv:.33,
     open:'Open tot 18:00',betaal:['Pin','Contant','Apple Pay','iDEAL'],f:1.0,uit:0},
    {n:'FixPoint Friesland',i:'F',plaats:'Leeuwarden',buurt:'Centrum',a:'Wirdumerdijk 22',km:0.6,
     g:'8,7',gb:112,vers:'nieuwste Google-beoordeling 1 week geleden',keur:1,keurdatum:'28 jul 2026',
     polistot:'1 apr 2027',glink:'#',eigen:0,erk:'Samsung erkend',jaren:8,vest:3,
     tijd:'Vandaag klaar',min:120,vandaag:1,gar:'12 maanden garantie',kw:'oem',niv:.44,
     open:'Open tot 17:30',betaal:['Pin','Apple Pay','iDEAL'],f:1.05,uit:'nieuw'},
    {n:'De Schermwerkplaats',i:'S',plaats:'Leeuwarden',buurt:'Centrum',a:'Voorstreek 45',km:0.9,
     g:'9,4',gb:26,vers:'nieuwste Google-beoordeling 5 dagen geleden',keur:1,
     keurdatum:'3 sep 2026',polistot:'1 sep 2027',glink:'#',eigen:0,erk:null,jaren:6,vest:1,
     tijd:'Morgen klaar',min:1440,vandaag:0,gar:'24 maanden garantie',kw:'origineel',niv:.78,
     open:'Open tot 17:00',betaal:['Pin','Contant'],f:1.2,uit:0},
    {n:'Studio Repair Huizum',i:'R',plaats:'Leeuwarden',buurt:'Schrans en Huizum',a:'Huizumerlaan 8',km:2.3,
     g:'8,9',gb:19,vers:'nieuwste Google-beoordeling 2 weken geleden',keur:1,
     keurdatum:'19 jun 2026',polistot:'1 jul 2027',glink:'#',eigen:0,erk:null,jaren:4,vest:1,
     tijd:'Vandaag klaar',min:180,vandaag:1,gar:'12 maanden garantie',kw:'oem',niv:.5,
     open:'Open tot 18:00',betaal:['Pin','Apple Pay'],f:1.08,uit:0},
    {n:'Mobiel Service Schrans',i:'M',plaats:'Leeuwarden',buurt:'Schrans en Huizum',a:'Schrans 68',km:1.5,
     g:'8,2',gb:63,vers:'nieuwste Google-beoordeling 4 maanden geleden',keur:0,glink:'#',eigen:0,erk:null,jaren:9,vest:1,
     tijd:'1 tot 2 werkdagen',min:2880,vandaag:0,gar:'6 maanden garantie',kw:'kopie',niv:.1,
     open:'Gesloten, opent morgen 09:00',oud:1,betaal:['Pin','Contant'],f:.9,uit:0},
    {n:'Camminghaburen Telecom',i:'C',plaats:'Leeuwarden',buurt:'Camminghaburen',a:'Egelantierstraat 2',km:3.8,
     g:'8,5',gb:8,vers:'nieuwste Google-beoordeling 3 weken geleden',keur:0,glink:'#',eigen:0,erk:null,jaren:3,vest:1,
     tijd:'1 tot 2 werkdagen',min:2880,vandaag:0,gar:'12 maanden garantie',kw:'oem',niv:.28,
     open:'Open tot 18:00',betaal:['Pin'],f:.96,uit:0},
  ],

  /* Vooringevulde vermeldingen: winkels die wij uit openbare bronnen kennen maar
     die zich niet hebben aangemeld. Ook deze zijn nu verzonnen. Bij livegang komen
     hier echte namen te staan, met de knop om de vermelding in een klik te laten
     verwijderen (besluit B11 en J9). Geen cijfers, geen beoordelingen. */
  vermeldingen: [
    {n:'Telecomwinkel Zaailand',i:'Z',plaats:'Leeuwarden',a:'Zaailand 106',km:0.5},
    {n:'GSM Hoek Leeuwarden',i:'G',plaats:'Leeuwarden',a:'Sint Jacobsstraat 14',km:0.7},
  ],

  /* Echte, aangesloten winkels. Leeg, en dat blijft zo tot er een winkel is die
     zich heeft aangemeld en van wie wij het polisblad hebben gezien. */
  echt: [],
  echteVermeldingen: [],
};

/* ---------- HIERONDER IS LOGICA, HIERBOVEN ZIJN GEGEVENS ----------

   Draait er een server, dan wordt dit bestand niet geserveerd zoals het hier
   staat: `app/src/winkeldata.ts` maakt het opnieuw met de winkels uit de
   database erboven en ALLES VANAF DEZE STREEP LETTERLIJK OVERGENOMEN. Zo staat
   de logica op één plek en kan hij niet uit elkaar lopen met de gegenereerde
   versie.

   Wat je hierboven ziet, is dus alleen wat de preview laat zien: verzonnen
   voorbeelden zodat het ontwerp te beoordelen is. Op de echte site komen de
   winkels uit de database, en staat er niets zolang er niemand is aangesloten.

   Verplaats deze streep niet en verwijder hem niet. controle.py kijkt of hij er
   staat, want zonder streep weet de generator niet waar de gegevens ophouden. */

const WINKELS = VOORBEELDEN ? WINKELDATA.voorbeelden : WINKELDATA.echt;
const VERMELDINGEN = VOORBEELDEN ? WINKELDATA.vermeldingen : WINKELDATA.echteVermeldingen;

/* Hulpjes die elke pagina gebruikt, zodat de regels overal hetzelfde zijn. */
const winkelsIn = plaats =>
  WINKELS.filter(w => w.plaats.toLowerCase() === String(plaats).trim().toLowerCase());

/* De volgorde die wij op 'Hoe wij rangschikken' beloven: eerst de poliscontrole, dan
   een controleerbare erkenning, dan of de prijs recent is bevestigd, dan het
   Google-cijfer en het aantal Google-beoordelingen. Betalen verandert hier niets aan.
   Zodra een winkel genoeg eigen beoordelingen heeft, wegen die mee; die drempel
   moet nog gekozen worden en staat open bij Nawid. */
const cijferVan = w => (w.g ? parseFloat(String(w.g).replace(',', '.')) : 0);

const rangschik = ws => ws.slice().sort((a, b) =>
  ((b.keur ? 1 : 0) - (a.keur ? 1 : 0)) || ((b.erk ? 1 : 0) - (a.erk ? 1 : 0)) ||
  ((a.oud ? 1 : 0) - (b.oud ? 1 : 0)) ||
  (cijferVan(b) - cijferVan(a)) || ((b.gb || 0) - (a.gb || 0)) ||
  /* Gelijke stand op naam, anders verspringt de volgorde per keer tekenen. Dit
     is dezelfde regel als in app/src/rangschikking.ts en die twee horen gelijk
     te blijven; een toets vergelijkt ze. */
  String(a.n).localeCompare(String(b.n), 'nl'));

/* Het label bij een winkel, met de datum van de controle erbij. Dat is de kern:
   wij zeggen niet dat de winkel goedgekeurd is, wij zeggen dat wij op die dag het
   polisblad hebben gezien. Zonder datum wordt het vanzelf een keurmerk in de
   beleving van de bezoeker, en dat mogen wij niet zijn (analyse 03 A5, 05 V3).
   Staat hier zodat het op alle vier de pagina's letterlijk hetzelfde is. */
const keurlabel = w => 'Polis gecontroleerd ' + w.keurdatum;

const waarom = w => [w.keur ? 'polis gecontroleerd ' + w.keurdatum : null, w.erk || null,
  w.g ? 'cijfer ' + w.g + ' op Google' : null,
  w.oud ? 'prijs niet recent bevestigd' : null].filter(Boolean).join(' &middot; ');

/* Hoeveel winkels er per plaats zijn. De plaatsenlijst en de foutpagina noemden
   deze aantallen los, dus die konden gaan afwijken van wat de plaatspagina toont. */
/* Wat wij zelf aan beoordelingen hebben. Nul is het eerlijke antwoord en het is
   ook het antwoord dat de site jarenlang geeft. */
const eigenBeoordelingen = w =>
  w.eigen ? w.eigen + (w.eigen === 1 ? ' beoordeling via ons' : ' beoordelingen via ons')
          : 'nog geen beoordelingen via ons';

/* Het Google-cijfer, altijd met de bron erbij. Zonder die woorden leest een
   bezoeker het als ons oordeel over de winkel. */
const googleCijfer = w => (w.g ? w.g + ' op Google (' + (w.gb || 0) + ')' : 'nog geen cijfer op Google');

/* De feiten onder een winkelnaam: erkenning, jaren, vestigingen.
 *
 * Alleen wat wij van deze winkel weten. Bij de verzonnen voorbeelden staat
 * alles ingevuld; bij een echte winkel weten wij het aantal jaren en het aantal
 * vestigingen niet, want daar vragen wij niet naar. Die regels blijven dan weg
 * in plaats van "undefined jaar in Leeuwarden" te tonen, en dat is precies de
 * fout die deze site al drie keer heeft gehad. */
const feitenVan = w => [
  w.erk || null,
  w.jaren ? w.jaren + ' jaar in ' + w.plaats : null,
  w.vest > 1 ? w.vest + ' vestigingen' : null,
].filter(Boolean).join(' &middot; ');

/* Hoe ver weg, als wij het weten. Wij hebben van een echte winkel alleen een
   adres en geen coördinaten, dus meestal weten wij het niet. */
const afstandVan = w => (w.km == null ? null : String(w.km).replace('.', ',') + ' km');

/* De naam van een onderdeelkwaliteit.
 *
 * De zes onderste zijn de ladder uit de gidsen en uit de database. De drie
 * daarboven zijn de namen die in de ontwerpschets werden gebruikt; die staan
 * hier alleen zodat de verzonnen voorbeelden blijven kloppen. Zij horen niet in
 * nieuwe gegevens terecht te komen: de ladder is de ladder. */
const KWALITEITSNAAM = {
  kopie: 'kopie of compatibel', incell: 'incell', softoled: 'soft OLED',
  oem: 'OEM of hard OLED', refurb: 'refurbished origineel', origineel: 'origineel',
  compatibel: 'compatibel onderdeel', service: 'service pack',
};
const kwaliteitsnaam = k => KWALITEITSNAAM[k] || 'onderdeel niet gespecificeerd';

/* Hoe lang het duurt, in woorden. De winkel vult minuten in; een bezoeker leest
   liever "morgen klaar" dan "1440 minuten". */
const doorlooptijd = a => {
  if (!a || a.m == null) return null;
  if (a.m <= 45) return 'Klaar terwijl je wacht';
  if (a.v) return 'Vandaag klaar';
  if (a.m <= 60 * 24) return 'Morgen klaar';
  return Math.round(a.m / (60 * 24)) + ' werkdagen';
};

/* De garantie, als de winkel er een gaf. Geen garantie noemen is beter dan een
   aantal maanden verzinnen: dit is een belofte van de winkel, niet van ons. */
const garantieVan = a => (a && a.g ? a.g + ' maanden garantie' : null);

/* De link naar het profiel van een winkel. Een echte winkel heeft een nummer en
   krijgt een eigen adres; de verzonnen voorbeelden delen de ontwerppagina. */
const winkelLink = w => (w.id ? 'winkel-' + w.id + '-' + w.slug : 'winkelprofiel.html');

/* Wat deze winkel voor een model en reparatie vraagt.
 *
 * Bij een echte winkel komt dat uit de prijzen die hij zelf in het portaal
 * invulde: `w.p` is een tabel met sleutel "model|reparatie|kwaliteit". Bij de
 * verzonnen voorbeelden is er geen tabel en wordt het bedrag afgeleid uit de
 * landelijke band, wat te zien is aan `niv`.
 *
 * Geeft null als deze winkel deze reparatie niet doet. Dat is een echt
 * antwoord en geen nul: niet elke winkel doet elke reparatie. */
const aanbod = (w, model, rep, kw) => {
  if (w.p) {
    const treffers = Object.entries(w.p)
      .filter(([sleutel]) => {
        const [m, r, k] = sleutel.split('|');
        return m === model && r === rep && (!kw || kw === 'alle' || k === kw);
      })
      .map(([, waarde]) => waarde);
    if (!treffers.length) return null;
    return treffers.sort((a, b) => a.b - b.b)[0];
  }
  if (w.niv == null || typeof bandVan !== 'function') return null;
  /* Ook de schets houdt zich aan het kwaliteitsfilter. Deed hij dat niet, dan
     gaf dat filter in de preview altijd alle winkels terug en zag je pas op de
     echte site dat het iets doet. Een knop die niets doet en er wel uitziet
     alsof, is erger dan geen knop. */
  if (kw && kw !== 'alle' && w.kw !== kw) return null;
  const b = bandVan(model, rep);
  if (!b) return null;
  const [lo, , hi] = b;
  return {
    b: Math.max(lo, Math.round((lo + (hi - lo) * w.niv) / 5) * 5 - 1),
    m: w.min, v: w.vandaag, g: parseInt(w.gar, 10) || null, k: w.kw,
  };
};

/* Waarom een winkel in het blok Uitgelicht staat. Sinds besluit 3.1 is het hele
   product gratis en verkopen wij nog niets, dus kan daar op dit moment alleen
   'nieuw' staan: het deel van de vertoningen dat wij vrijhouden voor winkels die
   net zijn aangesloten. Zodra er betaald kan worden, komt 'betaald' erbij. Het
   label moet zeggen welke van de twee het is; anders leest een bezoeker elke
   uitgelichte winkel als een betalende. */
const uitgelichtReden = w =>
  w.uit === 'betaald' ? 'Betaalde plek' : w.uit ? 'Nieuw op de site' : null;

const aantalPerPlaats = plaats => winkelsIn(plaats).length;

/* ---------- het match-moment ----------

   Dit stond drie keer in de site, letterlijk hetzelfde, met een verzonnen
   telefoonnummer erin gebakken: op de plaatspagina, in de kiezer en op het
   winkelprofiel. Drie kopieën van hetzelfde venster lopen uit elkaar, en dit is
   niet zomaar een venster: het is het moment waarop wij tellen dat wij iemand
   naar een winkel hebben gestuurd, en het enige moment waarop iemand het recht
   krijgt om die winkel later te beoordelen (voorwaarden artikel 6).

   Wat er nu gebeurt als er een server is: het nummer komt uit de database, het
   match-moment wordt geteld, en de bezoeker krijgt een sleutel waarmee hij
   straks één beoordeling mag plaatsen. Zonder server (de ontwerpschets op
   GitHub Pages) valt hij terug op het nummer dat bij de winkel staat, en dan
   staat er eerlijk bij dat er niets wordt vastgelegd. */

let laatsteMatch = null;

/* De knop staat in een tekstsjabloon, en daar past geen winkelobject in. Het
   nummer in de lijst wel. */
const belWinkel = i => belMatch(WINKELS[i]);

async function belMatch(w) {
  const d = document.getElementById('matchdlg');
  laatsteMatch = null;

  let nummer = w.tel || null;
  let geteld = false;
  if (w.id) {
    try {
      const a = await fetch('/api/match', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ winkel_id: w.id, soort: 'bel' }),
      });
      if (a.ok) {
        const uit = await a.json();
        nummer = uit.telefoon || nummer;
        laatsteMatch = uit.bewijs;
        geteld = true;
      }
    } catch (fout) {
      /* Geen server, of hij ligt eruit. De bezoeker moet nog steeds kunnen
         bellen: het nummer is openbaar en staat op de gevel. Alleen het tellen
         en het beoordelen gaan dan niet door, en dat zeggen wij eronder. */
    }
  }

  document.getElementById('matchinhoud').innerHTML = `
    <h3>Bel ${w.n}</h3>
    <p class="waar">Je spreekt de winkel rechtstreeks. Wij zitten er niet tussen en rekenen niets.</p>
    ${nummer
      ? `<div class="nummer"><b class="num">${nummer}</b><a class="belknop" href="tel:${String(nummer).replace(/\s/g, '')}">${MATCHTEL}Bellen</a></div>`
      : `<div class="nummer"><span class="num">Deze winkel gaf geen telefoonnummer door.</span></div>`}
    <div class="streep"></div>
    ${geteld ? `
    <p class="vraag">Wil je anderen straks helpen?</p>
    <p class="vraaguitleg">Laat je e-mailadres achter, dan vragen wij over twee dagen hoe het ging. Zo weten anderen bij welke winkel het goed zit.</p>
    <input type="email" id="matchmail" placeholder="je@email.nl">
    <div class="knoppen">
      <button class="btn btn-lijn" onclick="document.getElementById('matchdlg').close()">Nee, bedankt</button>
      <button class="btn btn-groen" onclick="matchJa()">Ja, herinner mij</button>
    </div>
    <p class="klein">Wij gebruiken je adres alleen voor deze ene vraag en verwijderen het daarna. Afmelden kan met een klik.</p>`
    : `
    <p class="vraaguitleg">Dit is de ontwerpschets, dus wij leggen niets vast en sturen niets. Op de echte site kun je hier vragen of wij je over twee dagen herinneren om de winkel te beoordelen.</p>
    <div class="knoppen">
      <button class="btn btn-groen" onclick="document.getElementById('matchdlg').close()">Sluiten</button>
    </div>`}`;
  d.showModal();
}

async function matchJa() {
  const veld = document.getElementById('matchmail');
  const email = (veld?.value || '').trim();
  if (!email) { veld?.focus(); return; }
  try {
    const a = await fetch('/api/match/herinnering', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ bewijs: laatsteMatch, email }),
    });
    if (!a.ok) throw new Error((await a.json()).fout || 'Er ging iets mis.');
  } catch (fout) {
    /* Eerlijk zijn is hier belangrijker dan netjes zijn: een groen vinkje boven
       een mislukte opslag is het ergste wat een formulier kan doen. */
    document.getElementById('matchinhoud').insertAdjacentHTML('beforeend',
      `<p class="klein" style="color:var(--amber)">Dat lukte niet: ${fout.message} Je kunt gewoon bellen.</p>`);
    return;
  }
  document.getElementById('matchinhoud').innerHTML = `
    <div class="gelukt">
      <div class="bal">${MATCHVINK}</div>
      <h3>Afgesproken</h3>
      <p class="waar" style="margin-bottom:18px">Over twee dagen sturen wij je één e-mail met de vraag hoe het ging. Verder hoor je niets van ons.</p>
      <button class="btn btn-groen" style="width:100%" onclick="document.getElementById('matchdlg').close()">Sluiten</button>
    </div>`;
}

const MATCHTEL = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>';
const MATCHVINK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
