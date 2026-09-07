/* Het punt op de kaart van elke winkel: 'plaats|adres' naar [breedte, lengte].
 *
 * GEGENEREERD door bouwvoorbereiding/generatoren/maak_winkelpunten.py. Niet met
 * de hand aanpassen; draai dat script opnieuw.
 *
 * Bron: de Locatieserver van PDOK (Kadaster/BZK), open data van de overheid.
 * Eenmalig opgehaald bij het bouwen, zodat er tijdens een bezoek niets naar
 * buiten gaat.
 *
 * Een winkel zonder punt staat hier niet in. Die krijgt op de site geen
 * afstand te zien, en dat is met opzet: een gegokt punt geeft een verkeerde
 * afstand en stuurt iemand naar de verkeerde winkel. */
const WINKELPUNT = {
  "Dokkum|Waagstraat 14A":[53.32592,5.99924],
  "Harlingen|Voorstraat 15":[53.17502,5.41689],
  "Leeuwarden|Egelantierstraat 2":[53.20949,5.82296],
  "Leeuwarden|Huizumerlaan 8":[53.19326,5.7992],
  "Leeuwarden|Nieuwestad 112":[53.20057,5.79404],
  "Leeuwarden|Peperstraat 5":[53.20092,5.79734],
  "Leeuwarden|Schrans 68":[53.19485,5.79845],
  "Leeuwarden|Voorstreek 45":[53.20349,5.79959],
  "Leeuwarden|Willem Alexanderplein 12":[53.18484,5.79026],
  "Leeuwarden|Wirdumerdijk 17":[53.2003,5.7971],
  "Leeuwarden|Wirdumerdijk 22":[53.19989,5.79678],
};
