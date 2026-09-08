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
  "Bolsward|Marktstraat 18":[53.06153,5.52086],
  "Burgum|Schoolstraat 7B":[53.19264,5.99058],
  "Dokkum|Aalsumerpoort 5A":[53.32788,6.00035],
  "Dokkum|Betterwird 2":[53.32706,5.98571],
  "Dokkum|Waagstraat 14A":[53.32592,5.99924],
  "Dokkum|Waagstraat 8":[53.32588,5.99878],
  "Drachten|Moleneind ZZ 13-A":[53.10639,6.097],
  "Drachten|Noorderbuurt 15":[53.10741,6.09781],
  "Drachten|Noorderbuurt 25A":[53.10771,6.09752],
  "Drachten|Noordkade 1":[53.10693,6.09837],
  "Drachten|Noordkade 3-b":[53.10695,6.09856],
  "Franeker|Ockingahiem 10":[53.18713,5.53974],
  "Franeker|Voorstraat 51A":[53.18638,5.54116],
  "Gorredijk|Stationsweg 24":[53.00547,6.06444],
  "Harlingen|Voorstraat 15":[53.17502,5.41689],
  "Heerenveen|Dracht 57":[52.95854,5.92485],
  "Heerenveen|K.R. Poststraat 1G":[52.96192,5.91957],
  "Heerenveen|Minckelersstraat 2":[52.9589,5.92465],
  "Joure|Midstraat 84":[52.96721,5.79599],
  "Leeuwarden|Berlikumermarkt 21":[53.2006,5.79833],
  "Leeuwarden|De Jokse 87":[53.21582,5.79391],
  "Leeuwarden|Egelantierstraat 2":[53.20949,5.82296],
  "Leeuwarden|Huizumerlaan 8":[53.19326,5.7992],
  "Leeuwarden|Nieuwe Oosterstraat 11":[53.20073,5.80165],
  "Leeuwarden|Nieuwestad 112":[53.20057,5.79404],
  "Leeuwarden|Peperstraat 5":[53.20092,5.79734],
  "Leeuwarden|Schrans 68":[53.19486,5.79845],
  "Leeuwarden|Voorstreek 45":[53.20349,5.79959],
  "Leeuwarden|Willem Alexanderplein 12":[53.18484,5.79026],
  "Leeuwarden|Wirdumerdijk 17":[53.2003,5.7971],
  "Leeuwarden|Wirdumerdijk 22":[53.19989,5.79678],
  "Lemmer|Nieuwedijk 7":[52.84395,5.70939],
  "Oosterwolde|Stationsstraat 6":[52.9907,6.29133],
  "Sneek|Bonserdyk 5":[53.03135,5.63903],
  "Sneek|Nauwe Burgstraat 3":[53.03267,5.6611],
  "Sneek|Oosterdijk 64":[53.03361,5.66483],
  "Stiens|Langebuorren 1":[53.2618,5.75783],
  "Surhuisterveen|De Kolk 10":[53.18173,6.16427],
  "Wolvega|Heerenveenseweg 80":[52.88238,6.00138],
  "Wolvega|Van Harenstraat 13":[52.87618,6.00119],
};
