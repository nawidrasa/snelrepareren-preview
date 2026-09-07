/* Welke plaatsen wij noemen, en welke daarvan open zijn.
 *
 * GEGENEREERD uit data/winkels.js door app/src/plaatsstatus.ts. Niet met de
 * hand aanpassen: pas PLAATSEN of de winkels in winkels.js aan en draai
 * bouwvoorbereiding/generatoren/maak_plaatsstatus.py opnieuw.
 *
 * Dit bestand bestaat zodat de homepage, de plaatsenpagina en de foutpagina niet
 * de hele winkels.js hoeven te laden voor een lijstje plaatsen. Hoeveel winkels
 * er staan en of een plaats open is, is hier al uitgerekend door
 * aantalPerPlaats() en genoegIn() uit winkels.js zelf, dus er is maar een regel
 * en die staat daar.
 *
 * Per plaats: n (naam), winkels (hoeveel er zijn), open (1 of 0), pagina, en
 * lat/lon als middelpunt. Benoemde velden en geen rijtje op volgorde, want zo'n
 * rijtje ging bij de vorige uitbreiding meteen twee keer mis. */
const PLAATSSTATUS = [
  {"n":"Leeuwarden","winkels":6,"open":1,"pagina":"plaatspagina-leeuwarden.html","lat":53.20093,"lon":5.80592},
  {"n":"Drachten","winkels":0,"open":0,"pagina":"plaats-onder-drempel.html","lat":53.10746,"lon":6.08731},
  {"n":"Sneek","winkels":0,"open":0,"pagina":"plaats-onder-drempel.html","lat":53.03168,"lon":5.66435},
  {"n":"Heerenveen","winkels":0,"open":0,"pagina":"plaats-onder-drempel.html","lat":52.952,"lon":5.92967},
  {"n":"Harlingen","winkels":1,"open":0,"pagina":"plaats-onder-drempel.html","lat":53.17043,"lon":5.43451},
  {"n":"Franeker","winkels":0,"open":0,"pagina":"plaats-onder-drempel.html","lat":53.18964,"lon":5.54105},
  {"n":"Dokkum","winkels":1,"open":0,"pagina":"plaats-onder-drempel.html","lat":53.32467,"lon":6.00143},
  {"n":"Joure","winkels":0,"open":0,"pagina":"plaats-onder-drempel.html","lat":52.96515,"lon":5.79698},
  {"n":"Bolsward","winkels":0,"open":0,"pagina":"plaats-onder-drempel.html","lat":53.06627,"lon":5.53007},
  {"n":"Wolvega","winkels":0,"open":0,"pagina":"plaats-onder-drempel.html","lat":52.87739,"lon":6.00407},
  {"n":"Lemmer","winkels":0,"open":0,"pagina":"plaats-onder-drempel.html","lat":52.85171,"lon":5.70554},
  {"n":"Burgum","winkels":0,"open":0,"pagina":"plaats-onder-drempel.html","lat":53.19588,"lon":5.9939},
];
