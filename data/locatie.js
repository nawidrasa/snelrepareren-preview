/* Waar de bezoeker is: rekenen met punten, en de knop die om zijn locatie vraagt.
 *
 * Dit bestand staat los van winkels.js omdat de homepage het nodig heeft en de
 * winkellijst niet. Het bevat alleen rekenwerk en het gesprek met de browser;
 * er zit geen enkele winkel of prijs in.
 *
 * ER GAAT NIETS HET APPARAAT AF. Geen kaartdienst, geen reverse-geocoding, geen
 * enkel verzoek naar buiten. De coordinaten komen van de browser zelf, en welke
 * plaats daarbij hoort zoeken wij op in een lijst die wij al meeleveren. Dat is
 * geen detail: de privacyverklaring belooft met zoveel woorden dat je postcode
 * in je eigen browser blijft, en een locatieknop die dat zou breken maakt van
 * onze sterkste belofte een leugen.
 *
 * NIET VANZELF BIJ HET LADEN. getCurrentPosition opent een toestemmingsvenster,
 * en dat mag alleen na een tik van de bezoeker. Safari eist dat, Chrome straft
 * vensters af die vanzelf opengaan, en je krijgt per bezoeker maar een kans: gaat
 * die af voordat iemand weet waarom, dan is de toestemming voorgoed geweigerd.
 * Los daarvan zou het niet horen. Daarom hangt alles hieronder aan een knop.
 */

/* Hemelsbrede afstand in kilometers tussen twee punten [breedte, lengte].
   Hemelsbreed en niet over de weg: wij hebben geen routegegevens, en doen dus
   ook niet alsof. Dat staat er op het scherm bij.

   Deze functie stond in winkels.js. Hij is hierheen verhuisd toen de homepage
   hem ook nodig had: dezelfde formule op twee plekken is precies de fout die in
   dit project het vaakst is voorgekomen. */
function afstandKm(a, b) {
  if (!a || !b) return null;
  const R = 6371, rad = x => x * Math.PI / 180;
  const dLat = rad(b[0] - a[0]), dLon = rad(b[1] - a[1]);
  const h = Math.sin(dLat / 2) * Math.sin(dLat / 2)
    + Math.cos(rad(a[0])) * Math.cos(rad(b[0])) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}

/* De afstand zoals hij op het scherm hoort te staan.
   Onder de tien kilometer een cijfer achter de komma, daarboven niet: "12,3 km"
   suggereert een nauwkeurigheid die een postcodemiddelpunt niet heeft. */
function kmTekst(km) {
  if (km == null) return null;
  return (km < 10 ? km.toFixed(1).replace('.', ',') : String(Math.round(km))) + ' km';
}

/* ---------- hoe ver mag het zijn ---------- */

/* Ligt de dichtstbijzijnde plaats die wij kennen verder dan dit, dan zeggen wij
   dat wij daar nog niet zijn. Wij gaan iemand in Utrecht niet vertellen dat hij
   "in de buurt van Lemmer" is omdat dat toevallig ons zuidelijkste punt is. */
const LOCATIE_MAX_KM = 25;

/* De browser zegt er zelf bij hoe zeker hij is, in meters. Op een telefoon met
   GPS is dat een tiental meter; op een laptop zonder GPS gokt hij op het netwerk
   en zit hij er kilometers naast. Boven deze grens noemen wij het bij benadering
   en tonen wij geen precieze afstand, want dan zouden wij nauwkeurigheid
   suggereren die er niet is. */
const LOCATIE_ONNAUWKEURIG_M = 5000;

/* ---------- de plaats bij een punt ---------- */

/* De dichtstbijzijnde plaats uit een lijst, met de afstand erbij.
 *
 * De lijst is een reeks objecten met lat, lon en een naam. Zo kan de homepage
 * hem voeren met de twaalf plaatsen uit data/plaatsstatus.js, en een pagina die
 * data/postcodes.js al heeft met alle 469 postcodemiddelpunten. Geen van beide
 * heeft er een kaartdienst voor nodig.
 *
 * Geeft null als er niets binnen LOCATIE_MAX_KM ligt. Dat is een antwoord: het
 * betekent dat wij daar nog niet zijn.
 */
function dichtstbijzijnde(punt, lijst, maxKm) {
  if (!punt || !lijst || !lijst.length) return null;
  const grens = maxKm == null ? LOCATIE_MAX_KM : maxKm;
  let beste = null;
  for (const rij of lijst) {
    const km = afstandKm(punt, [rij.lat, rij.lon]);
    if (km == null) continue;
    if (beste === null || km < beste.km) beste = { km: km, rij: rij };
  }
  return beste && beste.km <= grens ? beste : null;
}

/* Dezelfde vraag, maar dan met de postcodetabel als bron. Alleen bruikbaar op
   een pagina die data/postcodes.js laadt. */
function plaatsBijPunt(punt, maxKm) {
  if (typeof POSTCODEPUNT === 'undefined') return null;
  const lijst = [];
  for (const pc in POSTCODEPUNT) {
    const r = POSTCODEPUNT[pc];
    lijst.push({ lat: r[0], lon: r[1], naam: r[2], pc: Number(pc) });
  }
  return dichtstbijzijnde(punt, lijst, maxKm);
}

/* ---------- de vraag aan de browser ---------- */

/* Vraagt de browser waar de bezoeker is en roept `klaar` aan met het antwoord.
 *
 * ALTIJD EEN ANTWOORD, NOOIT EEN DOODLOPEND EIND. Elk van de vier manieren
 * waarop dit misgaat heeft hier een eigen zin, en na elke fout kan de bezoeker
 * nog steeds zijn postcode intypen. Een knop die stilletjes niets doet is erger
 * dan geen knop.
 *
 * enableHighAccuracy staat uit: wij hoeven niet te weten op welke stoep iemand
 * staat, alleen in welke plaats. Dat scheelt accugebruik en het is netter om
 * niet meer te vragen dan je nodig hebt.
 */
function vraagLocatie(klaar) {
  if (typeof navigator === 'undefined' || !navigator.geolocation) {
    klaar({ goed: false, reden: 'onmogelijk',
      tekst: 'Je browser kan je locatie niet doorgeven. Vul je postcode in.' });
    return;
  }
  /* Zonder https geeft de browser geen locatie. Dat is geen storing maar een
     regel, en dan hoort er ook geen foutmelding te staan die op een storing
     lijkt. localhost telt als veilig, zodat dit tijdens het bouwen werkt. */
  if (typeof window !== 'undefined' && window.isSecureContext === false) {
    klaar({ goed: false, reden: 'onveilig',
      tekst: 'Je locatie werkt alleen op een beveiligde verbinding. Vul je postcode in.' });
    return;
  }
  navigator.geolocation.getCurrentPosition(
    function (pos) {
      const c = pos.coords;
      klaar({
        goed: true,
        punt: [c.latitude, c.longitude],
        meters: c.accuracy == null ? null : Math.round(c.accuracy),
        grof: c.accuracy != null && c.accuracy > LOCATIE_ONNAUWKEURIG_M,
      });
    },
    function (fout) {
      const zinnen = {
        1: 'Je hebt geen toestemming gegeven. Dat mag; vul je postcode in en het werkt net zo goed.',
        2: 'Je toestel kon je locatie niet bepalen. Vul je postcode in.',
        3: 'Het duurde te lang om je locatie te bepalen. Vul je postcode in.',
      };
      const redenen = { 1: 'geweigerd', 2: 'onbekend', 3: 'tetraag' };
      klaar({
        goed: false,
        reden: redenen[fout && fout.code] || 'onbekend',
        tekst: zinnen[fout && fout.code] || 'Wij konden je locatie niet bepalen. Vul je postcode in.',
      });
    },
    { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 },
  );
}

/* ---------- meenemen naar de volgende pagina ---------- */

/* De locatie blijft in de browser en verdwijnt zodra het tabblad dichtgaat.
 *
 * sessionStorage en niet localStorage, en niet het webadres. Niet het webadres,
 * omdat coordinaten persoonsgegevens zijn en een adres gedeeld, gekopieerd en
 * gelogd wordt. Niet localStorage, omdat wij dan iets op andermans apparaat
 * laten staan en dat moeten uitleggen en laten wissen; een tik op de knop is
 * goedkoop genoeg om dat niet waard te zijn.
 *
 * Alles in try/catch: in een privevenster en bij een browser die opslag
 * blokkeert gooit al het aanraken van sessionStorage een fout, en dan hoort de
 * pagina gewoon door te werken zonder locatie. */
const LOCATIE_SLEUTEL = 'snelrepareren-locatie';

function bewaarLocatie(punt, plaats, grof) {
  try {
    sessionStorage.setItem(LOCATIE_SLEUTEL, JSON.stringify({
      lat: punt[0], lon: punt[1], plaats: plaats || null, grof: !!grof,
    }));
  } catch (_) { /* geen opslag beschikbaar; dan reist de locatie niet mee */ }
}

function bewaardeLocatie() {
  try {
    const rauw = sessionStorage.getItem(LOCATIE_SLEUTEL);
    if (!rauw) return null;
    const l = JSON.parse(rauw);
    if (typeof l.lat !== 'number' || typeof l.lon !== 'number') return null;
    return l;
  } catch (_) { return null; }
}

function vergeetLocatie() {
  try { sessionStorage.removeItem(LOCATIE_SLEUTEL); } catch (_) { /* niets aan te doen */ }
}

/* Het speldje. Een plek, zodat hij op de homepage, in de kiezer en op de
   plaatspagina hetzelfde is. */
const SPELDJE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" '
  + 'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
  + '<path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>';
