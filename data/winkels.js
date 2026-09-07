/* De winkels op snelrepareren.nl.

   ER ZIJN TWEE SOORTEN WINKELS IN DIT BESTAND. Sinds 7 september staat Daily
   Phones er als echte, aangesloten winkel in (twee vestigingen, met toestemming).
   De zes onder `voorbeelden` zijn verzonnen, zodat het ontwerp te beoordelen is;
   die dragen op het scherm het merkje "Verzonnen voorbeeld" zodat een bezoeker
   ze niet voor echt aanziet. Ze stonden tot 7 september los
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
  /* km stond hier per winkel met de hand ingevuld. Dat was geen afstand maar een
     vast getal: wie in Drachten woonde zag nog steeds "0,6 km". Weg; de afstand
     wordt nu gerekend uit het adres en de postcode van de bezoeker. */
  voorbeelden: [
    {n:'Telefoonhulp Leeuwarden',i:'T',plaats:'Leeuwarden',buurt:'Centrum',a:'Nieuwestad 112',
     g:'4,6',gb:48,vers:'nieuwste Google-beoordeling 3 dagen geleden',keur:1,keurdatum:'12 aug 2026',
     polistot:'1 jan 2027',glink:'#',eigen:3,bs:[{c:9,t:'Scherm binnen een uur vervangen, prijs klopte met wat er stond.',n:'Marijke'},{c:8,t:'Netjes uitgelegd welk scherm ik kreeg en waarom dat scheelt.',n:'Bouke'}],erk:'Apple IRP',jaren:12,vest:1,
     tijd:'Klaar terwijl je wacht',min:35,vandaag:1,gar:'12 maanden garantie',kw:'oem',niv:.33,
     ot:'ma 09:30-18:00\ndi 09:30-18:00\nwo 09:30-18:00\ndo 09:30-21:00\nvr 09:30-18:00\nza 10:00-17:00',betaal:['Pin','Contant','Apple Pay','iDEAL'],f:1.0,uit:0},
    {n:'FixPoint Friesland',i:'F',plaats:'Leeuwarden',buurt:'Centrum',a:'Wirdumerdijk 22',
     g:'4,4',gb:112,vers:'nieuwste Google-beoordeling 1 week geleden',keur:1,keurdatum:'28 jul 2026',
     polistot:'1 apr 2027',glink:'#',eigen:5,bs:[{c:9,t:'Duidelijke prijs vooraf, geen verrassingen achteraf.',n:'Jeroen'},{c:7,t:'Reparatie prima, maar het duurde een dag langer dan gezegd.',n:'Sanne'}],erk:'Samsung erkend',jaren:8,vest:3,
     tijd:'Vandaag klaar',min:120,vandaag:1,gar:'12 maanden garantie',kw:'oem',niv:.44,
     ot:'ma 10:00-17:30\ndi 10:00-17:30\nwo 10:00-17:30\ndo 10:00-17:30\nvr 10:00-17:30\nza 10:00-16:00',betaal:['Pin','Apple Pay','iDEAL'],f:1.05,uit:'nieuw'},
    {n:'De Schermwerkplaats',i:'S',plaats:'Leeuwarden',buurt:'Centrum',a:'Voorstreek 45',
     g:'4,7',gb:26,vers:'nieuwste Google-beoordeling 5 dagen geleden',keur:1,
     keurdatum:'3 sep 2026',polistot:'1 sep 2027',glink:'#',eigen:2,bs:[{c:10,t:'Accu vervangen terwijl ik koffie dronk. Niks op aan te merken.',n:'Anouk'}],erk:null,jaren:6,vest:1,
     tijd:'Morgen klaar',min:1440,vandaag:0,gar:'24 maanden garantie',kw:'origineel',niv:.78,
     ot:'di 09:00-17:00\nwo 09:00-17:00\ndo 09:00-17:00\nvr 09:00-17:00\nza 09:00-16:00',betaal:['Pin','Contant'],f:1.2,uit:0},
    {n:'Studio Repair Huizum',i:'R',plaats:'Leeuwarden',buurt:'Schrans en Huizum',a:'Huizumerlaan 8',
     g:'4,5',gb:19,vers:'nieuwste Google-beoordeling 2 weken geleden',keur:1,
     keurdatum:'19 jun 2026',polistot:'1 jul 2027',glink:'#',eigen:1,bs:[{c:8,t:'Kleine zaak, snel geholpen, eerlijk advies over de kosten.',n:'Wietse'}],erk:null,jaren:4,vest:1,
     tijd:'Vandaag klaar',min:180,vandaag:1,gar:'12 maanden garantie',kw:'oem',niv:.5,
     ot:'ma 09:00-18:00\ndi 09:00-18:00\nwo 09:00-18:00\ndo 09:00-18:00\nvr 09:00-18:00',betaal:['Pin','Apple Pay'],f:1.08,uit:0},
    {n:'Mobiel Service Schrans',i:'M',plaats:'Leeuwarden',buurt:'Schrans en Huizum',a:'Schrans 68',
     g:'4,1',gb:63,vers:'nieuwste Google-beoordeling 4 maanden geleden',keur:0,glink:'#',eigen:0,bs:[],erk:null,jaren:9,vest:1,
     tijd:'1 tot 2 werkdagen',min:2880,vandaag:0,gar:'6 maanden garantie',kw:'kopie',niv:.1,
     ot:'ma 09:00-17:00\ndi 09:00-17:00\nwo 09:00-17:00\ndo 09:00-17:00\nvr 09:00-17:00',oud:1,betaal:['Pin','Contant'],f:.9,uit:0},
    {n:'Camminghaburen Telecom',i:'C',plaats:'Leeuwarden',buurt:'Camminghaburen',a:'Egelantierstraat 2',
     g:'4,3',gb:8,vers:'nieuwste Google-beoordeling 3 weken geleden',keur:0,glink:'#',eigen:0,erk:null,jaren:3,vest:1,
     tijd:'1 tot 2 werkdagen',min:2880,vandaag:0,gar:'12 maanden garantie',kw:'oem',niv:.28,
     ot:'ma 09:30-18:00\ndi 09:30-18:00\nwo 09:30-18:00\ndo 09:30-18:00\nvr 09:30-18:00\nza 10:00-17:00',betaal:['Pin'],f:.96,uit:0},
  ],

  /* Vooringevulde vermeldingen: winkels die wij uit openbare bronnen kennen maar
     die zich niet hebben aangemeld (besluit B11 en J9). Met de knop om de
     vermelding in een klik te laten verwijderen.

     ECHTE BEDRIJVEN, sinds 7 september. Hier staan de echte, bestaande
     reparatiewinkels in Leeuwarden uit het onderzoek in
     bouwvoorbereiding/WINKELS-FRIESLAND-onderzoek.md. Alleen naam en adres,
     precies wat de privacyverklaring als openbare bron noemt. GEEN cijfer, GEEN
     beoordeling, GEEN poliscontrole en GEEN afstand: dat zou een claim over een
     echt bedrijf zijn die wij niet mogen doen, en een verzonnen afstand hoort al
     helemaal niet bij een echte winkel.

     Alleen Leeuwarden, want dat is de enige plaatspagina in de preview. De rest
     van de provincie staat in het onderzoeksbestand en komt bij livegang uit de
     database; die mag hier gewoon bij, want de plaatspagina filtert sinds
     7 september met vermeldingenIn op plaats.

     Niet opgenomen: Mobile 4 All (Schrans 68). Dat is het echte adres van de
     verzonnen voorbeeldwinkel "Mobiel Service Schrans" hierboven; twee zaken op
     een adres op een pagina is verwarrend. Zodra de voorbeelden weg zijn (echte
     data), kan Mobile 4 All erbij. */
  vermeldingen: [
    {n:'MyTelecom',i:'M',plaats:'Leeuwarden',a:'Peperstraat 5'},
    {n:'Dyna Store',i:'D',plaats:'Leeuwarden',a:'Willem Alexanderplein 12'},
    {n:'M&S Telecom 4U',i:'M',plaats:'Leeuwarden',a:'Wirdumerdijk 17'},
  ],

  /* Echte, aangesloten en geverifieerde winkels.
     GEVERIFIEERD betekent hier: deze winkel heeft zich aangemeld en toestemming
     gegeven om vermeld te worden. Het betekent NIET dat wij zijn polisblad
     hebben gezien; daar is het aparte label "Polis gecontroleerd" voor, met de
     datum erbij. Daarom staat keur hieronder op 0.

     Daily Phones gaf toestemming (7 september 2026). Het is EEN bedrijf met TWEE
     winkels; "Smartphonestore Dokkum" is de tweede handelsnaam van de vestiging
     in Dokkum, met hetzelfde adres, hetzelfde nummer en dezelfde
     klantenservice-mail. Daarom staat Dokkum hier een keer en niet twee keer.

     Wat hier NIET staat, staat er met opzet niet: prijzen, doorlooptijd,
     garantie en onderdeelkwaliteit vult een winkel zelf in via het portaal. Die
     mag ik niet voor hem invullen. Zolang dat niet is gebeurd toont de kaart
     "op aanvraag", en dat klopt.

     Het Google-cijfer komt van hun eigen site (7 sep 2026), die "4,9 uit ruim
     500 reviews" zegt. 500 is dus een ondergrens, geen exact getal; lees het
     opnieuw op de dag dat je het toont. */
  echt: [
    {n:'Daily Phones',i:'D',plaats:'Harlingen',buurt:'Centrum',a:'Voorstraat 15',
     tel:'0519 347503',g:'4,9',gb:500,glink:'#',keur:0,erk:null,eigen:0,bs:[],uit:0},
    {n:'Daily Phones',i:'D',plaats:'Dokkum',buurt:'Centrum',a:'Waagstraat 14A',
     tel:'0519 347503',handelsnaam2:'Smartphonestore Dokkum',
     g:'4,9',gb:500,glink:'#',keur:0,erk:null,eigen:0,bs:[],uit:0},
  ],
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

/* De echte winkels doen ALTIJD mee, ook in de preview.
   Eerst stond hier alleen `voorbeelden` zodra VOORBEELDEN aanstond. Gevolg: wie
   in de kiezer postcode 8861 invulde kwam in Harlingen en las "nog geen winkel",
   terwijl Daily Phones daar aangesloten en geverifieerd is. Dat is precies het
   omgekeerde van wat wij willen zeggen.
   Het mag nu, omdat een bezoeker de twee soorten uit elkaar kan houden: elke
   kaart draagt Geverifieerd of Niet geverifieerd, en de gele strook zegt welke
   winkels verzonnen zijn. Zet VOORBEELDEN op false en alleen de echte blijven. */
const WINKELS = VOORBEELDEN
  ? WINKELDATA.echt.concat(WINKELDATA.voorbeelden.map(w => Object.assign({}, w, { verzonnen: true })))
  : WINKELDATA.echt;
const VERMELDINGEN = VOORBEELDEN ? WINKELDATA.vermeldingen : WINKELDATA.echteVermeldingen;

/* Vanaf hoeveel aangesloten winkels een plaats echt opengaat (besluit T4).
   Onder die drempel is een plaatspagina geen vergelijking maar een lijstje, en
   dan hoort er ook niet "vergelijk op prijs" boven te staan. Deze waarde staat
   ook in app/src/rangschikking.ts; de gegenereerde versie van dit bestand neemt
   hem daarvandaan mee. */
const DREMPEL_WINKELS = typeof DREMPEL_UIT_DE_SERVER === 'number' ? DREMPEL_UIT_DE_SERVER : 3;

/* ---------- eerst: alles wat van buiten komt, ontsnappen ----------

   DE REDEN, en die is niet theoretisch. Een winkel vult in het portaal zelf zijn
   NAAM in, een bezoeker schrijft zelf zijn BEOORDELING, en een winkel schrijft
   zelf zijn REACTIE daarop. Alle drie belanden ze op een publieke pagina in een
   tekstsjabloon dat via innerHTML in de pagina wordt gezet. Zonder ontsnappen is
   dat geen tekst meer maar opmaak: een winkelnaam als

       Winkel<img src=x onerror="...">

   voert die code uit bij iedereen die de plaatspagina of de kiezer opent. Dat is
   geen bedachte mogelijkheid; het is met precies die naam nagemeten op een
   draaiende server, op alle drie de invoerwegen. De veiligheidskoppen helpen
   hier niet: de pagina's hebben inline scripts, dus script-src staat op
   'unsafe-inline' en dan mag zo'n onerror gewoon.

   De regel: NOOIT een veld van een winkel of een bezoeker rechtstreeks in een
   tekstsjabloon zetten. Altijd esc(). Voor iets dat in een href komt: link().
   controle.py kijkt daarop na. */
const esc = w => String(w == null ? '' : w)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

/* Een adres uit de database in een href. Alleen deze schema's, want
   `javascript:...` in een href doet hetzelfde als een script in de pagina. */
const link = u => {
  const w = String(u == null ? '' : u).trim();
  if (/^(https?:|mailto:|tel:|\/|#)/i.test(w)) return esc(w);
  return '#';
};

/* ---------- postcode naar plaats en punt ----------

   WAAROM DIT ER IS. Het veld heette al "Plaats of postcode", maar wie een
   postcode intypte kreeg nul winkels: de tekst werd letterlijk als plaatsnaam
   gebruikt en "8911" is geen plaats.

   WAAR DE GEGEVENS VANDAAN KOMEN. Uit data/postcodes.js, een bestand dat wij
   zelf maken met de Locatieserver van PDOK, de open kaartdienst van de
   overheid. Daarin staat per Friese postcode het middelpunt en de plaatsnaam.

   HIER STOND EERST EEN LIJST MET REEKSEN, met de hand overgeschreven: 8900 tot
   8941 is Leeuwarden, en zo verder. Die is weg. Twee redenen. Zo'n lijst dekt
   alleen de plaatsen die iemand heeft opgeschreven, dus een Fries dorp dat er
   niet in stond kreeg "kennen wij niet". En de plaatsnaam stond dan op een
   andere plek dan het punt, dus die twee konden uit elkaar lopen. Nu komen ze
   uit dezelfde regel.

   ZONDER DIE TABEL WERKT DIT NIET, en dan zeggen wij ook niets: een postcode
   waarvan wij de plaats niet kennen, verzinnen wij niet. */

/* Ziet dit eruit als een postcode? Dan mag je er geen plaatsnaam van maken. */
const lijktOpPostcode = t => /^\d{4}\s*[a-zA-Z]{0,2}$/.test(String(t == null ? '' : t).trim());

/* De rij uit de postcodetabel: [breedte, lengte, plaats], of null. */
function postcodeRij(tekst) {
  const m = String(tekst == null ? '' : tekst).trim().match(/^(\d{4})\s*[a-zA-Z]{0,2}$/);
  if (!m || typeof POSTCODEPUNT === 'undefined') return null;
  return POSTCODEPUNT[Number(m[1])] || null;
}

/* De plaats bij een postcode, of null als wij hem niet kennen. */
function plaatsVanPostcode(tekst) {
  const rij = postcodeRij(tekst);
  return rij && rij[2] ? rij[2] : null;
}

/* Hulpjes die elke pagina gebruikt, zodat de regels overal hetzelfde zijn. */
const zelfdePlaats = (w, plaats) =>
  String(w.plaats || '').toLowerCase() === String(plaats).trim().toLowerCase();

const winkelsIn = plaats => WINKELS.filter(w => zelfdePlaats(w, plaats));

/* Vermeldingen horen net zo hard op plaats gefilterd als winkels. Dit stond er
   niet, en het werkte alleen zolang er toevallig alleen Leeuwarder vermeldingen
   in de data zaten. Bij de winkels ging het al een keer mis op precies dat
   punt: de merkpagina nam de hele lijst en zette daardoor Harlinger winkels in
   Leeuwarden. Een lijst die bij een plaats hoort, filtert op die plaats. */
const vermeldingenIn = plaats => VERMELDINGEN.filter(v => zelfdePlaats(v, plaats));

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
const keurlabel = w => 'Polis gecontroleerd ' + esc(w.keurdatum);

const waarom = w => [w.keur ? 'polis gecontroleerd ' + esc(w.keurdatum) : null, esc(w.erk) || null,
  w.g ? 'cijfer ' + esc(w.g) + ' op Google' : null,
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
const googleCijfer = w => (w.g ? esc(w.g) + ' op Google (' + esc(w.gb || 0) + ')' : 'nog geen cijfer op Google');

/* De feiten onder een winkelnaam: erkenning, jaren, vestigingen.
 *
 * Alleen wat wij van deze winkel weten. Bij de verzonnen voorbeelden staat
 * alles ingevuld; bij een echte winkel weten wij het aantal jaren en het aantal
 * vestigingen niet, want daar vragen wij niet naar. Die regels blijven dan weg
 * in plaats van "undefined jaar in Leeuwarden" te tonen, en dat is precies de
 * fout die deze site al drie keer heeft gehad. */
const feitenVan = w => [
  /* De erkenning stond hier ook in, en dan las de belangrijkste pagina van de
     site letterlijk "Apple IRP &middot; 7 jaar in Leeuwarden". Dat is een code
     uit onze database, geen zin voor een bezoeker. De erkenning is nu een merkje
     met logo (erkenningsMerken), en hier blijft staan wat echt een feitenregel
     is: hoe lang en met hoeveel vestigingen. */
  w.jaren ? esc(w.jaren) + ' jaar in ' + esc(w.plaats) : null,
  w.vest > 1 ? esc(w.vest) + ' vestigingen' : null,
].filter(Boolean).join(' &middot; ');

/* Hoe ver weg, als wij het weten. Wij hebben van een echte winkel alleen een
   adres en geen coördinaten, dus meestal weten wij het niet. */
/* ---------- afstand ----------

   ECHTE AFSTAND, GEEN VERZONNEN GETAL. Hier stond `w.km`: een vast getal dat bij
   elke winkel met de hand was ingevuld. Dat is geen afstand, want het hangt
   nergens van af; wie in Drachten woonde zag nog steeds "0,6 km" bij een winkel
   in Leeuwarden.

   Nu rekenen wij hem echt uit, uit twee punten: het middelpunt van de postcode
   die de bezoeker intypt (data/postcodes.js) en het adres van de winkel
   (data/winkelpunten.js). Allebei eenmalig opgehaald bij PDOK, de open
   geocodeerdienst van de overheid, en bij ons opgeslagen. Tijdens het bezoek
   gaat er dus niets naar buiten: de postcode blijft in de browser van de
   bezoeker.

   ZONDER POSTCODE GEEN AFSTAND. Weten wij niet waar iemand is, dan tonen wij
   niets. Dat is eerlijker dan een getal dat nergens op slaat. */

/* Waar de bezoeker is, als hij dat heeft verteld. Null tot dat moment. */
let BEZOEKERPUNT = null;

/* Zet het punt van de bezoeker uit zijn postcode. Geeft terug of het gelukt is. */
function zetBezoekerPunt(tekst) {
  BEZOEKERPUNT = puntVanPostcode(tekst);
  return BEZOEKERPUNT != null;
}

/* Het middelpunt van een postcode, uit dezelfde rij als de plaatsnaam. */
function puntVanPostcode(tekst) {
  const rij = postcodeRij(tekst);
  return rij ? [rij[0], rij[1]] : null;
}

/* Het punt van een winkel, op plaats en adres. */
function puntVanWinkel(w) {
  if (!w || typeof WINKELPUNT === 'undefined') return null;
  return WINKELPUNT[w.plaats + '|' + w.a] || null;
}

/* Hemelsbrede afstand in kilometers tussen twee punten [breedte, lengte].
   Hemelsbreed en niet over de weg: wij hebben geen routegegevens, en doen dus
   ook niet alsof. Dat staat er op het scherm bij. */
function afstandKm(a, b) {
  if (!a || !b) return null;
  const R = 6371, rad = x => x * Math.PI / 180;
  const dLat = rad(b[0] - a[0]), dLon = rad(b[1] - a[1]);
  const h = Math.sin(dLat / 2) * Math.sin(dLat / 2)
    + Math.cos(rad(a[0])) * Math.cos(rad(b[0])) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}

/* De afstand van de bezoeker tot deze winkel, in kilometers, of null. */
function afstandTot(w) {
  return afstandKm(BEZOEKERPUNT, puntVanWinkel(w));
}

/* De afstand zoals hij op het scherm staat, of null als wij hem niet weten.
   Onder de tien kilometer een cijfer achter de komma, daarboven niet: "12,3 km"
   suggereert een nauwkeurigheid die een postcodemiddelpunt niet heeft. */
const afstandVan = w => {
  const km = afstandTot(w);
  if (km == null) return null;
  return esc(km < 10 ? km.toFixed(1).replace('.', ',') : String(Math.round(km))) + ' km';
};

/* ---------- openingstijden ----------

   Het rooster staat als tekst in de database, een regel per dag die open is:
   "ma 09:30-18:00". Een dag die er niet in staat, is dicht.

   WAT WIJ HIER BEWUST NIET DOEN: zeggen dat een winkel NU open is. Dat rooster
   kent geen feestdagen, geen vakantie en geen middagsluiting, dus "nu open" zou
   op een handvol dagen per jaar onwaar zijn, en dan stuurt deze site iemand voor
   een dichte deur. Wij tonen het rooster en wat er VANDAAG geldt, en dat is wat
   wij kunnen waarmaken. */
const DAGNAMEN = { ma: 'maandag', di: 'dinsdag', wo: 'woensdag', do: 'donderdag',
                   vr: 'vrijdag', za: 'zaterdag', zo: 'zondag' };
const DAGVOLGORDE = ['ma', 'di', 'wo', 'do', 'vr', 'za', 'zo'];

/** Het rooster als lijst: [['ma','09:30','18:00'], ...]. Dichte dagen ontbreken. */
const roosterVan = w => String(w.ot || '').split('\n').map(r => {
  const m = r.trim().match(/^([a-z]{2}) (\d{2}:\d{2})-(\d{2}:\d{2})$/);
  return m ? [m[1], m[2], m[3]] : null;
}).filter(Boolean);

/** Welke dag het vandaag is, in onze afkortingen. Zondag is 0 in javascript. */
const vandaagKort = (nu = new Date()) => DAGVOLGORDE[(nu.getDay() + 6) % 7];

/* Wat er vandaag geldt, in woorden. Null als wij het rooster niet kennen; dan
   laat de pagina die regel weg in plaats van iets te verzinnen. */
const vandaagTekst = (w, nu = new Date()) => {
  const rooster = roosterVan(w);
  if (!rooster.length) return null;
  const dag = rooster.find(r => r[0] === vandaagKort(nu));
  return dag ? 'Vandaag ' + dag[1] + ' tot ' + dag[2] : 'Vandaag gesloten';
};

/** Is de winkel vandaag open? Voor het filter, niet voor een uitspraak over nu. */
const vandaagOpen = (w, nu = new Date()) =>
  roosterVan(w).some(r => r[0] === vandaagKort(nu));

/* Kan deze winkel de reparatie vandaag doen?
 *
 * Twee dingen moeten kloppen: de winkel heeft bij die prijs opgegeven dat het
 * dezelfde dag kan, EN hij is vandaag open. Zonder dat tweede stond er op een
 * zondag "Vandaag klaar" naast "Vandaag gesloten" op dezelfde kaart. Kent de
 * winkel ons zijn rooster niet, dan gaan wij af op wat hij bij de prijs zei. */
const kanVandaag = (w, a, nu = new Date()) =>
  Boolean(a && a.v && (!heeftRooster(w) || vandaagOpen(w, nu)));

/** Kent deze winkel ons zijn rooster? */
const heeftRooster = w => roosterVan(w).length > 0;

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

/* Haalt deze plaats de drempel? Zo niet, dan valt er niets te vergelijken en
   zegt de pagina dat, in plaats van te doen alsof. */
const genoegIn = plaats => aantalPerPlaats(plaats) >= DREMPEL_WINKELS;

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
/* Geeft het dialoogvenster de naam die er OP dat moment in staat.
 *
 * Dit venster krijgt zijn inhoud pas van het script, en die verschilt per
 * actie: "Bel <winkel>", "Afgesproken", "Vraag een prijs aan <winkel>". Er
 * stond dus geen kop in de HTML om naar te verwijzen, en een schermlezer
 * kondigde het venster aan als alleen "dialoog". De kop is er wel, hij komt
 * alleen later; dus leggen wij de koppeling ook later.
 */
/** Vult het matchvenster en zet de naam meteen goed. De kop verandert met de
 *  inhoud mee ("Bel X" wordt "Afgesproken"), dus de naam moet dat ook. */
function vulVenster(html) {
  const vak = document.getElementById('matchinhoud');
  if (!vak) return;
  vak.innerHTML = html;
  benoemVenster(document.getElementById('matchdlg'));
}

function benoemVenster(d) {
  if (!d) return;
  const kop = d.querySelector('h1,h2,h3,h4');
  if (!kop) return;
  if (!kop.id) kop.id = 'venstertitel-' + Math.random().toString(36).slice(2, 8);
  d.setAttribute('aria-labelledby', kop.id);
}

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

  vulVenster(`
    <h3>Bel ${esc(w.n)}</h3>
    <p class="waar">Je spreekt de winkel rechtstreeks. Wij zitten er niet tussen en rekenen niets.</p>
    ${nummer
      ? `<div class="nummer"><b class="num">${esc(nummer)}</b><a class="belknop" href="${link('tel:' + String(nummer).replace(/\s/g, ''))}">${MATCHTEL}Bellen</a></div>`
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
    </div>`}`);
  benoemVenster(d); d.showModal();
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
      `<p class="klein" style="color:var(--amber)">Dat lukte niet: ${esc(fout.message)} Je kunt gewoon bellen.</p>`);
    return;
  }
  vulVenster(`
    <div class="gelukt">
      <div class="bal">${MATCHVINK}</div>
      <h3>Afgesproken</h3>
      <p class="waar" style="margin-bottom:18px">Over twee dagen sturen wij je één e-mail met de vraag hoe het ging. Verder hoor je niets van ons.</p>
      <button class="btn btn-groen" style="width:100%" onclick="document.getElementById('matchdlg').close()">Sluiten</button>
    </div>`);
}

const MATCHTEL = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>';
const MATCHVINK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';

/* ---------- een reparatieverzoek naar de winkel ----------
 *
 * De knop staat ALLEEN bij een winkel met een portaalaccount (w.aan). Die heeft
 * ons zelf zijn adres gegeven en kan het verzoek ook zien. Een winkel die wij
 * uit een openbare bron hebben vermeld, weet niet dat hij op de site staat;
 * daar ongevraagd post naartoe sturen is de benadering waar wij vanaf zijn
 * gestapt, en de bezoeker zou wachten op een antwoord dat nooit komt.
 *
 * Wat de bezoeker vraagt, geeft de PAGINA mee. Dit bestand weet niet wat er in
 * de reparatiekiezer is aangetikt, en zou het moeten raden. */
/* De gegevens blijven HIER staan en gaan niet via een onclick-attribuut mee.
   Dat kan ook niet: de regels bevatten regeleindes, en een regeleinde in een
   attribuut breekt de JS-tekst waar het in staat. En een naam met een apostrof
   zou uit die tekst breken; esc() dekt HTML af, niet een JS-tekenreeks. */
let verzoekGegevens = null;

function verzoekDialoog(w, toestel, regels) {
  verzoekGegevens = { w, toestel, regels };
  vulVenster(`
    <h3>Vraag een prijs aan ${esc(w.n)}</h3>
    <p class="waar">De winkel antwoordt rechtstreeks aan jou. Wij zitten er niet tussen en rekenen niets.</p>
    <div class="nummer" style="display:block">
      <b style="font-size:15px">${esc(toestel)}</b>
      <div style="font-size:13.5px;color:var(--inkt-2);margin-top:4px;white-space:pre-line">${esc(regels)}</div>
    </div>
    <label class="veld"><input id="vznaam" placeholder=" " autocomplete="name"><span>Je naam</span></label>
    <label class="veld"><input id="vzmail" type="email" placeholder=" " autocomplete="email"><span>Je e-mailadres</span></label>
    <label class="veld"><input id="vztel" placeholder=" " autocomplete="tel"><span>Telefoon (mag leeg)</span></label>
    <label class="veld"><input id="vztoel" placeholder=" "><span>Iets erbij te zeggen? (mag leeg)</span></label>
    <div style="position:absolute;left:-9999px" aria-hidden="true"><label>Laat dit veld leeg<input id="website_url" tabindex="-1" autocomplete="off"></label></div>
    <div class="knoppen">
      <button class="btn btn-lijn" onclick="document.getElementById('matchdlg').close()">Annuleren</button>
      <button class="btn btn-groen" onclick="verzoekVerstuur()">Verstuur</button>
    </div>
    <p class="klein">Je naam, adres en toelichting gaan naar deze winkel en naar niemand anders. Wij bewaren ze 90 dagen en wissen ze daarna.</p>`);
  document.getElementById('matchdlg').showModal();
}

async function verzoekVerstuur() {
  const { w, toestel, regels } = verzoekGegevens;
  const veld = id => document.getElementById(id);
  const naam = (veld('vznaam').value || '').trim();
  const email = (veld('vzmail').value || '').trim();
  if (!naam) { veld('vznaam').focus(); return; }
  if (!email) { veld('vzmail').focus(); return; }
  try {
    const a = await fetch('/api/verzoek', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        winkel_id: w.id, naam, email,
        telefoon: (veld('vztel').value || '').trim(),
        toelichting: (veld('vztoel').value || '').trim(),
        website_url: (veld('website_url').value || '').trim(),
        toestel, regels,
      }),
    });
    if (!a.ok) throw new Error((await a.json()).fout || 'Er ging iets mis.');
  } catch (fout) {
    /* Zelfde regel als bij de belknop: liever eerlijk dan netjes. Een groen
       vinkje boven een verzoek dat nooit is verstuurd, is het ergste wat dit
       formulier kan doen. */
    document.getElementById('matchinhoud').insertAdjacentHTML('beforeend',
      `<p class="klein" style="color:var(--amber)">Dat lukte niet: ${esc(fout.message)} Je kunt de winkel gewoon bellen.</p>`);
    return;
  }
  vulVenster(`
    <div class="gelukt">
      <div class="bal">${MATCHVINK}</div>
      <h3>Verstuurd</h3>
      <p class="waar" style="margin-bottom:18px">Je vraag staat bij ${esc(w.n)}. Je krijgt een kopie in je mail. De winkel antwoordt rechtstreeks aan jou; wij kunnen geen antwoord beloven.</p>
      <button class="btn btn-groen" style="width:100%" onclick="document.getElementById('matchdlg').close()">Sluiten</button>
    </div>`);
}

/* ---------- betaalmethoden als merkjes ----------
 *
 * Ze stonden als "Pin &middot; Apple Pay &middot; iDEAL" achter een kaartje: vier
 * woorden op een rij die je moet lezen om te zien wat je zoekt. Als merkje zie je
 * het in een oogopslag.
 *
 * GEEN echte logo's. Het beeldmerk van iDEAL, Apple Pay of Mastercard is van hen,
 * en die mag je niet zomaar natekenen of overnemen; er horen merkregels bij en
 * daar hoort iemand naar te kijken voordat wij ze gebruiken. Wat hier staat is
 * een eigen pictogram plus de naam, in de kleur die erbij hoort. Wil Nawid de
 * echte merken, dan is dat een aparte stap met hun richtlijnen erbij. */
const BETAALICOON = {
  kaart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="3"/><path d="M2.5 10h19"/></svg>',
  biljet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2.5"/><circle cx="12" cy="12" r="2.6"/></svg>',
  telefoon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="6.5" y="2.5" width="11" height="19" rx="3"/><path d="M10.5 18.5h3"/></svg>',
  bank: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5 12 4l9 5.5"/><path d="M5 10.5v8M9.7 10.5v8M14.3 10.5v8M19 10.5v8"/><path d="M3 20.5h18"/></svg>',
};

/* Welk pictogram en welke kleur bij welke methode. Onbekende methode: het
   kaartje en de gewone inktkleur, want raden is erger dan neutraal. */
function betaalmerk(naam) {
  const t = String(naam).toLowerCase();
  const kies = t.includes('ideal') ? ['bank', '#C0006E']
    : t.includes('contant') || t.includes('cash') ? ['biljet', null]
    : t.includes('pay') ? ['telefoon', null]
    : ['kaart', null];
  const kleur = kies[1] ? ` style="color:${kies[1]}"` : '';
  return `<span class="betaalmerk"${kleur}>${BETAALICOON[kies[0]]}${esc(naam)}</span>`;
}

/* Het rooster als EEN regel: "ma-vr 09:30-18:00, za 10:00-17:00". Dagen met
   dezelfde tijden worden samengevat, want zeven regels onder elkaar is een
   tabel en dit is een kaart. Geeft null zonder rooster; dan laat de pagina de
   regel weg in plaats van een leeg klokje te tonen.
   Waarom niet vandaagTekst: die zegt "Vandaag gesloten", en dat staat al als
   merkje boven in de kaart. Twee keer hetzelfde op een kaart is een keer te
   veel. */
const vorigeDag = dag => DAGVOLGORDE[DAGVOLGORDE.indexOf(dag) - 1] ?? null;

function weekTekst(w) {
  const rooster = roosterVan(w);
  if (!rooster.length) return null;
  const per = new Map(rooster.map(([d, van, tot]) => [d, van + '-' + tot]));
  const blokken = [];
  for (const dag of DAGVOLGORDE) {
    const tijd = per.get(dag);
    if (!tijd) continue;
    const laatste = blokken[blokken.length - 1];
    if (laatste && laatste.tijd === tijd && laatste.tot === vorigeDag(dag)) laatste.tot = dag;
    else blokken.push({ van: dag, tot: dag, tijd });
  }
  return blokken
    .map(b => (b.van === b.tot ? b.van : b.van + '-' + b.tot) + ' ' + b.tijd)
    .join(', ');
}

/* ---------- het cijfer als sterren ----------
 *
 * Een getal alleen ("8,7") lees je pas als je het vergelijkt; sterren zie je.
 * Het cijfer staat er in cijfers naast, want vijf sterren voor een acht-komma-
 * zeven is een afronding en die hoort niet de enige waarheid te zijn.
 *
 * Het is het cijfer VAN GOOGLE. Dat staat er in woorden bij en dat moet zo
 * blijven: sterren zonder bron leest een bezoeker als ons oordeel over die
 * winkel, en wij hebben geen oordeel.
 */
const STER_VOL = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 3.5 2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.9l6-.9z"/></svg>';

function sterrenBalk(cijfer) {
  const n = Number(String(cijfer).replace(',', '.'));
  if (!(n > 0)) return '';
  /* Het cijfer loopt van 1 tot 5, want dat is de schaal die Google gebruikt en
     wij tonen het cijfer van Google. Vijf sterren, dus twintig procent per punt.
     Bij 4,4 is dat 88 procent van de rij. */
  const pct = Math.max(0, Math.min(100, n * 20));
  const rij = STER_VOL.repeat(5);
  /* De twee lagen heten sterrenleeg en sterrenvol en niet leeg en vol. Ze
     heetten wel zo, en "leeg" is op de kiezer al de lege staat van de
     winkellijst: een gestippeld vak met 22 pixels padding en gecentreerde
     tekst. Dat vak sloeg pardoes om de sterren heen en duwde de onderste rij 23
     pixels naar rechts, waardoor de twee rijen niet meer op elkaar lagen.
     Een component hoort zijn eigen onderdelen te benoemen. */
  return `<span class="sterren" role="img" aria-label="${esc(String(cijfer))} van de 5 op Google">`
    + `<span class="sterrenleeg">${rij}</span>`
    + `<span class="sterrenvol" style="width:${pct.toFixed(1)}%">${rij}</span></span>`;
}

/* ---------- het erkenningsmerkje ----------
 *
 * "Apple IRP" zegt niets. IRP is Independent Repair Provider: een reparateur die
 * officiële onderdelen bij Apple mag inkopen zonder een Apple-vestiging te zijn.
 * Uitgeschreven zegt het wel iets.
 *
 * DE ECHTE MERKLOGO'S. Nawid heeft ze aangeleverd en gekozen. Wat een merkje wel
 * en niet mag zeggen: een merk noemen en tonen om aan te wijzen over wie het
 * gaat, mag. De indruk wekken dat de merkhouder erachter staat, niet. Bij Apple
 * ligt dat extra nauw, want een Independent Repair Provider is uitdrukkelijk
 * GEEN erkende Apple-vestiging. Daarom staat de programmanaam voluit in het
 * merkje en noemen wij het nergens een keurmerk.
 *
 * Alles staat hier op een plek. Moeten de logo's er ooit uit, dan is dat deze
 * tabel en niets anders.
 */
const MERKEN = {
  'Apple IRP': {
    merk: 'Apple',
    claim: 'Independent Repair Provider',
    /* Wat het IS, in gewone woorden. Bewust ook wat het NIET is: dat is precies
       waar een merkje met een logo verkeerd gelezen kan worden. */
    uitleg: 'Een zelfstandige reparateur die officiële onderdelen, gereedschap en handleidingen '
      + 'van Apple mag inkopen voor reparaties buiten de garantie. Het is geen Apple Store en geen '
      + 'erkend servicepunt van Apple.',
    logo: '<svg class="lg lg-appel" viewBox="0 0 24 24" fill="currentColor" role="img" aria-label="Apple">'
      + '<path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 '
      + '10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 '
      + '9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 '
      + '15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 '
      + '16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 '
      + '3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>',
  },
  'Samsung erkend': {
    merk: 'Samsung',
    claim: 'Erkend reparateur',
    /* Geen uitleg: wij weten niet precies welk programma dit is en welke
       voorwaarden eraan hangen. Iets verzinnen is erger dan niets zeggen. */
    uitleg: null,
    logo: '<svg class="lg lg-samsung" viewBox="0 0 200.777 66" fill="#2d4f9e" role="img" '
      + 'aria-label="Samsung"><path d="M200.653 15.87C197.923.194 150.822-4.698 95.446 4.943 72.19 8.994 51.191 14.969 34.838 21.691c2.512.055 4.375.631 5.507 1.76.885.886 1.332 2.102 1.332 3.617v1.555h-5.43V27.25c0-1.144-.686-1.853-1.901-1.853-1.021 0-1.65.461-1.853 1.369a2.63 2.63 0 0 0 .022 1.084c.581 2.375 8.644 3.85 9.521 8.233.115.564.271 1.771.025 3.498-.503 3.535-3.609 4.899-7.563 4.899-5.519 0-7.761-2.614-7.761-6.218l.004-1.705h5.821l.003 2.124c0 1.194.868 1.853 2.05 1.853 1.12 0 1.774-.451 2-1.373.105-.424.151-1.049-.04-1.527-1.077-2.702-8.606-3.964-9.533-8.333-.207-.982-.224-1.818-.052-2.875a5.606 5.606 0 0 1 .482-1.511C9.333 33.398-1.278 42.732.124 50.791c2.733 15.678 49.833 20.565 105.208 10.924 24.342-4.237 46.226-10.58 62.881-17.688-.241.012-.475.038-.725.038-3.79 0-7.174-1.42-7.525-5.294-.062-.705-.073-1-.075-1.402l.002-8.906c0-.384.045-1.058.088-1.406.449-3.744 3.409-5.288 7.512-5.288 3.175 0 7.068.911 7.496 5.291.057.55.051 1.137.05 1.33v.841h-5.484v-1.255c0-.027-.008-.496-.068-.789-.09-.447-.471-1.483-2.033-1.483-1.543 0-1.943 1.038-2.043 1.484-.057.245-.084.597-.084.987v9.679c-.005.336.012.599.046.792.027.152.304 1.486 2.1 1.486 1.783 0 2.059-1.334 2.084-1.486.047-.262.053-.574.051-.792v-2.999h-2.158v-3.23h7.631v5.746c-.002.391-.008.68-.074 1.4-.092 1.016-.412 1.876-.914 2.611 17.663-8.387 27.947-17.57 26.563-25.512zM57.065 43.653l-2.778-18.876h-.1l-2.849 18.876h-5.855l3.938-21.317h9.553l3.914 21.317h-5.823zm28.162 0l-.129-18.511h-.094l-3.445 18.511h-5.495l-3.428-18.511h-.098l-.125 18.511h-5.445l.472-21.317h8.758l2.55 15.835h.125l2.557-15.835h8.754l.47 21.317h-5.427zm25.641-4.131c-.586 4.129-4.631 4.851-7.49 4.851-4.747 0-7.683-2.029-7.683-6.158l.003-1.684h5.751l.004 2.098c0 1.139.803 1.836 2.043 1.836 1.106 0 1.754-.444 1.979-1.356.104-.425.147-1.045-.037-1.513-1.06-2.651-8.53-3.95-9.438-8.251-.208-.975-.223-1.803-.052-2.849.632-3.899 4.374-4.709 7.386-4.709 2.694 0 4.655.588 5.831 1.764.877.878 1.321 2.083 1.321 3.582v1.538h-5.378v-1.357c0-1.162-.721-1.834-1.88-1.834-1.028 0-1.65.457-1.854 1.356a2.59 2.59 0 0 0 .026 1.072c.576 2.364 8.568 3.809 9.443 8.151.113.554.268 1.743.025 3.463zm19.918-1.937c.008.4-.031 1.199-.053 1.404-.328 3.512-2.84 5.297-7.447 5.297-4.625 0-7.139-1.785-7.465-5.297a16.957 16.957 0 0 1-.053-1.4V22.331h5.502V38.07c-.006.352.012.612.047.793.068.35.416 1.486 1.969 1.486 1.548 0 1.896-1.137 1.969-1.482.031-.186.05-.459.05-.798V22.331h5.481v15.254zm23.705 5.851h-7.656l-5.139-16.885h-.086l.285 16.885h-5.336v-21.1h7.977l4.75 16.22h.111l-.281-16.22h5.375v21.1z"/></svg>',
  },
};

/* Een erkenning die wij niet kennen, krijgt een schildje en de tekst zoals hij
   is opgeslagen. Raden welk merk erbij hoort zou erger zijn dan neutraal. */
const MERKSCHILD = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" '
  + 'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.5 4 6v6c0 4.4 '
  + '3.4 8.2 8 9.5 4.6-1.3 8-5.1 8-9.5V6z"/><path d="m8.8 12 2.2 2.2 4.2-4.4"/></svg>';

/* De merkjes van een winkel. w.erk is een tekst met komma's, want zo komt hij
   uit winkeldata.ts. */
function erkenningsMerken(w) {
  const lijst = erkenningenVan(w);
  if (!lijst.length) return '';
  return lijst.map(naam => {
    const m = MERKEN[naam];
    return '<span class="merkje"><span class="ic">' + (m ? m.logo : MERKSCHILD) + '</span>'
      + '<span class="tk"><b>' + (m ? m.claim : esc(naam)) + '</b></span></span>';
  }).join('');
}

/* GEVERIFIEERD OF NIET, en waarom dat merkje er moet staan.

   Op een plaatspagina staan twee soorten winkels onder elkaar, en die mag je
   nooit door elkaar halen. Een AANGESLOTEN winkel heeft zich aangemeld en
   toestemming gegeven; wij hebben contact met hem en hij kan zijn gegevens
   veranderen. Een VERMELDING kennen wij alleen uit openbare bronnen; die winkel
   weet misschien niet eens dat hij hier staat.

   Zonder merkje ziet een bezoeker dat verschil niet, en dan lijkt een winkel die
   nergens van weet net zo goed gecontroleerd als een die zich heeft aangemeld.

   Aangesloten winkels staan altijd BOVEN de vermeldingen. Dat is geen
   sorteerregel die je kunt omzetten, maar de opbouw van de pagina zelf: eerst de
   ranglijst met aangesloten winkels, daaronder het blok "Nog niet aangesloten".

   GEVERIFIEERD IS NIET HETZELFDE ALS GOEDGEKEURD. Het zegt: deze winkel heeft
   zich aangemeld en zijn gegevens bevestigd. Het zegt niets over zijn polis
   (daarvoor is het losse label "Polis gecontroleerd", mét datum) en niets over
   de kwaliteit van zijn werk. Die grens moet in de tekst blijven staan. */
/* MERKVINK en niet de naam die winkelprofiel.html al gebruikt: twee const met
   dezelfde naam in hetzelfde bereik is een SyntaxError die het HELE script van
   die pagina stillegt. Dat gebeurde ook echt, en je zag het alleen in de
   console: de pagina bleef staan met een lege lijst merkjes. */
const MERKVINK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" '
  + 'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';

/* VERZONNEN OF ECHT, en waarom dit los staat van geverifieerd.

   Sinds de echte winkels meedoen staan er in dezelfde lijst verzonnen
   voorbeelden en bestaande bedrijven. Allebei zijn ze "aangesloten", dus
   allebei dragen ze het merkje Geverifieerd. Zonder dit tweede merkje kan een
   bezoeker niet meer zien welke winkel verzonnen is, en dan is de gele strook
   bovenaan de enige waarschuwing: die zegt "de winkels in stap 3 zijn verzonnen"
   en dat is sinds vandaag niet meer waar voor allemaal.

   Het gaat om twee verschillende vragen. Geverifieerd: heeft deze winkel zich
   aangemeld? Verzonnen: bestaat deze winkel eigenlijk wel? Die tweede vraag
   hoort bij de kaart zelf te staan zolang de site een ontwerpschets is. */
function verzonnenMerk(w) {
  return w && w.verzonnen ? '<span class="chip chip-verzonnen">Verzonnen voorbeeld</span>' : '';
}

function verificatieMerk(aangesloten) {
  return aangesloten
    ? '<span class="chip chip-ver">' + MERKVINK + 'Geverifieerd</span>'
    : '<span class="chip chip-onver">Niet geverifieerd</span>';
}

/* Het rooster als losse regels, voor een kolom. weekTekst geeft er een regel van
   met komma's; in een smalle kolom leest dat als een brei. */
function weekRegels(w) {
  const t = weekTekst(w);
  return t ? t.split(', ') : [];
}

/* De naam van een erkenning zoals hij op het scherm hoort te staan: "Apple
   Independent Repair Provider" in plaats van "Apple IRP". Kennen wij hem niet,
   dan de opgeslagen tekst; raden is erger. */
function erkenningNaam(naam) {
  const m = MERKEN[naam];
  return m ? m.merk + ' ' + m.claim : String(naam);
}

/* De uitleg erbij, of null. */
const erkenningUitleg = naam => (MERKEN[naam] || {}).uitleg || null;

/* De erkenningen van een winkel als lijst met namen. */
const erkenningenVan = w => String(w.erk || '').split(',').map(t => t.trim()).filter(Boolean);
