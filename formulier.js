/* Formulieren versturen naar de backend.
 *
 * Tot fase 4 toonden alle zes de formulieren een bedanktscherm zonder dat er
 * iets gebeurde. Dit bestand verstuurt ze echt.
 *
 * Twee dingen die hier bewust in zitten:
 *
 *  - ZONDER SERVER BLIJFT ALLES WERKEN. Open je een pagina rechtstreeks van de
 *    schijf, of staat de backend uit, dan toont het formulier hetzelfde
 *    bedanktscherm als altijd, met een regel erbij dat het niet echt verstuurd
 *    is. Anders zou de ontwerpschets stuk gaan zodra je hem los bekijkt.
 *
 *  - EEN FOUT KOMT BIJ HET VELD TE STAAN. De backend geeft terug welk veld het
 *    is; die krijgt de melding en de aandacht, in plaats van een rode regel
 *    bovenaan waarvan niemand weet waar hij bij hoort.
 */

/** Is er een backend? Een bestand op de schijf heeft geen server om te vragen. */
const HEEFT_SERVER = location.protocol === "http:" || location.protocol === "https:";

/** Stuurt een formulier op. Geeft {goed, fout, veld} terug, of {goed:true, schets:true}. */
async function verstuur(pad, gegevens) {
  if (!HEEFT_SERVER) return { goed: true, schets: true };
  try {
    const antwoord = await fetch(pad, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(gegevens),
    });
    const uit = await antwoord.json();
    if (antwoord.ok) return uit;
    return { goed: false, fout: uit.fout ?? "Er ging iets mis.", veld: uit.veld };
  } catch (e) {
    // De server antwoordde niet, of niet met iets bruikbaars. Dat is geen fout
    // van de bezoeker, maar zijn bericht is wel weg, dus dat zeggen wij. Dit is
    // NIET hetzelfde als "er draait geen server": dan staat er straks een echte
    // bezoeker die zijn melding kwijt is, en die heeft niets aan de mededeling
    // dat hij naar een ontwerpschets kijkt.
    return { goed: true, mislukt: true };
  }
}

/** Zet een foutmelding bij het veld waar hij hoort. */
function toonFout(uit, formulierId) {
  const oud = document.querySelector(".veldfout");
  if (oud) oud.remove();
  document.querySelectorAll(".fout").forEach((e) => e.classList.remove("fout"));

  const veld = uit.veld && document.getElementById(uit.veld);
  const melding = document.createElement("p");
  melding.className = "veldfout";
  melding.setAttribute("role", "alert");
  melding.textContent = uit.fout;

  if (veld) {
    veld.classList.add("fout");
    veld.closest("label, .veld, div")?.appendChild(melding);
    veld.focus();
  } else {
    document.getElementById(formulierId)?.prepend(melding);
    melding.scrollIntoView({ block: "center" });
  }
}

/** Wisselt het formulier voor het bedanktscherm. */
function toonBedankt(formulierId, bedanktId, voorbehoud) {
  document.getElementById(formulierId)?.classList.add("verborgen");
  const bedankt = document.getElementById(bedanktId);
  bedankt?.classList.remove("verborgen");
  const tekst = voorbehoud === "schets"
    ? "Let op: dit is de ontwerpschets. Er draait geen server, dus er is niets verstuurd en niets opgeslagen."
    : voorbehoud === "mislukt"
      ? "Let op: wij konden je bericht nu niet ontvangen, dus er is niets opgeslagen. Probeer het straks nog een keer, of mail ons op hallo@snelrepareren.nl."
      : null;
  if (tekst && bedankt && !bedankt.querySelector(".schetsregel")) {
    const p = document.createElement("p");
    p.className = "schetsregel";
    p.setAttribute("role", "alert");
    p.textContent = tekst;
    bedankt.appendChild(p);
  }
  window.scrollTo(0, 0);
}

/* Koppelt een knop aan een formulier. `verzamel` levert de gegevens op; geeft
 * hij null terug, dan is er iets mis en gebeurt er niets. */
function koppel({ knop, pad, formulier, bedankt, verzamel, klaar }) {
  const k = document.getElementById(knop);
  if (!k) return;
  /* OP SUBMIT EN NIET OP CLICK.
   *
   * Hier hing alleen een click op de knop, en de velden zaten in een div. Dan
   * doet Enter in een veld helemaal niets: je typt je e-mailadres, drukt op
   * Enter zoals iedereen doet, en er gebeurt niets. Op een telefoon staat er
   * bovendien een gewone terugtoets op het toetsenbord in plaats van "ga".
   *
   * De wikkel is nu een echt formulier en wij luisteren naar submit. Dan werkt
   * Enter vanzelf, precies zoals de browser het al twintig jaar doet. De
   * click-tak blijft staan voor een pagina die nog geen form heeft; die valt
   * niet stil terwijl de rest omgaat. */
  const vorm = document.getElementById(formulier);
  const doel = vorm && vorm.tagName === "FORM" ? vorm : k;
  doel.addEventListener(doel === k ? "click" : "submit", async (e) => {
    e.preventDefault();
    const gegevens = verzamel();
    if (!gegevens) return;

    const oudeTekst = k.textContent;
    k.disabled = true;
    k.textContent = "Bezig...";
    const uit = await verstuur(pad, gegevens);
    k.disabled = false;
    k.textContent = oudeTekst;

    if (!uit.goed) return toonFout(uit, formulier);
    if (klaar) klaar(uit);
    toonBedankt(formulier, bedankt, uit.schets ? "schets" : uit.mislukt ? "mislukt" : null);
  });
}

/* De opmaak van een veldfout. Staat hier zodat elke pagina hem heeft zonder
 * dat er in twaalf bestanden dezelfde regels bij moeten. */
const stijl = document.createElement("style");
stijl.textContent = `
  .veldfout{color:var(--rood,#B91C1C);font-size:13.5px;margin:6px 0 0;font-weight:600}
  .fout{border-color:var(--rood,#B91C1C) !important}
  .schetsregel{margin-top:16px;font-size:13px;color:var(--inkt-3,#6B7480);
    background:var(--amber-soft,#FEF3C7);border-radius:12px;padding:10px 14px;display:inline-block}
`;
document.head.appendChild(stijl);

window.snelFormulier = { verstuur, koppel, toonFout, toonBedankt, HEEFT_SERVER };
