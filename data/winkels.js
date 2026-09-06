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
     keurmerk, erkenning) is verzonnen en mag nooit als echt worden gepresenteerd.
     De gele strook bovenaan elke pagina zegt dat ook. */
  voorbeelden: [
    {n:'Telefoonhulp Leeuwarden',i:'T',plaats:'Leeuwarden',buurt:'Centrum',a:'Nieuwestad 112',km:1.4,
     c:'9,1',b:48,vers:'nieuwste beoordeling 3 dagen geleden',keur:1,erk:'Apple IRP',jaren:12,vest:1,
     tijd:'Klaar terwijl je wacht',min:35,vandaag:1,gar:'12 maanden garantie',kw:'service',niv:.33,
     open:'Open tot 18:00',betaal:['Pin','Contant','Apple Pay','iDEAL'],f:1.0,uit:0},
    {n:'FixPoint Friesland',i:'F',plaats:'Leeuwarden',buurt:'Centrum',a:'Wirdumerdijk 22',km:0.6,
     c:'8,7',b:112,vers:'nieuwste beoordeling 1 week geleden',keur:1,erk:'Samsung erkend',jaren:8,vest:3,
     tijd:'Vandaag klaar',min:120,vandaag:1,gar:'12 maanden garantie',kw:'service',niv:.44,
     open:'Open tot 17:30',betaal:['Pin','Apple Pay','iDEAL'],f:1.05,uit:1},
    {n:'De Schermwerkplaats',i:'S',plaats:'Leeuwarden',buurt:'Centrum',a:'Voorstreek 45',km:0.9,
     c:'9,4',b:26,vers:'nieuwste beoordeling 5 dagen geleden',keur:1,erk:null,jaren:6,vest:1,
     tijd:'Morgen klaar',min:1440,vandaag:0,gar:'24 maanden garantie',kw:'origineel',niv:.78,
     open:'Open tot 17:00',betaal:['Pin','Contant'],f:1.2,uit:0},
    {n:'Studio Repair Huizum',i:'R',plaats:'Leeuwarden',buurt:'Schrans en Huizum',a:'Huizumerlaan 8',km:2.3,
     c:'8,9',b:19,vers:'nieuwste beoordeling 2 weken geleden',keur:1,erk:null,jaren:4,vest:1,
     tijd:'Vandaag klaar',min:180,vandaag:1,gar:'12 maanden garantie',kw:'service',niv:.5,
     open:'Open tot 18:00',betaal:['Pin','Apple Pay'],f:1.08,uit:0},
    {n:'Mobiel Service Schrans',i:'M',plaats:'Leeuwarden',buurt:'Schrans en Huizum',a:'Schrans 68',km:1.5,
     c:'8,2',b:63,vers:'nieuwste beoordeling 4 maanden geleden',keur:0,erk:null,jaren:9,vest:1,
     tijd:'1 tot 2 werkdagen',min:2880,vandaag:0,gar:'6 maanden garantie',kw:'compatibel',niv:.1,
     open:'Gesloten, opent morgen 09:00',oud:1,betaal:['Pin','Contant'],f:.9,uit:0},
    {n:'Camminghaburen Telecom',i:'C',plaats:'Leeuwarden',buurt:'Camminghaburen',a:'Egelantierstraat 2',km:3.8,
     c:'8,5',b:8,vers:'nieuwste beoordeling 3 weken geleden',keur:0,erk:null,jaren:3,vest:1,
     tijd:'1 tot 2 werkdagen',min:2880,vandaag:0,gar:'12 maanden garantie',kw:'service',niv:.28,
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

const WINKELS = VOORBEELDEN ? WINKELDATA.voorbeelden : WINKELDATA.echt;
const VERMELDINGEN = VOORBEELDEN ? WINKELDATA.vermeldingen : WINKELDATA.echteVermeldingen;

/* Hulpjes die elke pagina gebruikt, zodat de regels overal hetzelfde zijn. */
const winkelsIn = plaats =>
  WINKELS.filter(w => w.plaats.toLowerCase() === String(plaats).trim().toLowerCase());

/* De volgorde die wij op 'Hoe wij rangschikken' beloven: eerst het keurmerk, dan
   een controleerbare erkenning, dan of de prijs recent is bevestigd, dan het
   cijfer en het aantal beoordelingen. Betalen verandert hier niets aan. */
const rangschik = ws => ws.slice().sort((a, b) =>
  (b.keur - a.keur) || ((b.erk ? 1 : 0) - (a.erk ? 1 : 0)) || ((a.oud ? 1 : 0) - (b.oud ? 1 : 0)) ||
  (parseFloat(b.c.replace(',', '.')) - parseFloat(a.c.replace(',', '.'))) || (b.b - a.b));

const waarom = w => [w.keur ? 'keurmerk' : null, w.erk || null, 'cijfer ' + w.c,
  w.oud ? 'prijs niet recent bevestigd' : null].filter(Boolean).join(' &middot; ');

/* Hoeveel winkels er per plaats zijn. De plaatsenlijst en de foutpagina noemden
   deze aantallen los, dus die konden gaan afwijken van wat de plaatspagina toont. */
const aantalPerPlaats = plaats => winkelsIn(plaats).length;
