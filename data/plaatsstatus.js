/* Welke plaatsen wij noemen, en welke daarvan open zijn.
 *
 * GEGENEREERD uit data/winkels.js door app/src/plaatsstatus.ts. Niet met de
 * hand aanpassen: pas PLAATSEN of de winkels in winkels.js aan en draai
 * bouwvoorbereiding/generatoren/maak_plaatsstatus.py opnieuw.
 *
 * Dit bestand bestaat zodat de homepage niet de hele winkels.js hoeft te laden
 * voor drie namen. Of een plaats open is, is hier al uitgerekend door genoegIn()
 * uit winkels.js zelf, dus er is maar een regel en die staat daar.
 *
 * Per plaats: naam, 1 als hij open is en anders 0, en de pagina van die plaats. */
const PLAATSSTATUS = [
  ["Leeuwarden",1,"plaatspagina-leeuwarden.html"],
  ["Drachten",0,"plaats-onder-drempel.html"],
  ["Sneek",0,"plaats-onder-drempel.html"],
  ["Heerenveen",0,"plaats-onder-drempel.html"],
  ["Harlingen",0,"plaats-onder-drempel.html"],
  ["Franeker",0,"plaats-onder-drempel.html"],
  ["Dokkum",0,"plaats-onder-drempel.html"],
  ["Joure",0,"plaats-onder-drempel.html"],
  ["Bolsward",0,"plaats-onder-drempel.html"],
  ["Wolvega",0,"plaats-onder-drempel.html"],
  ["Lemmer",0,"plaats-onder-drempel.html"],
  ["Burgum",0,"plaats-onder-drempel.html"],
];
