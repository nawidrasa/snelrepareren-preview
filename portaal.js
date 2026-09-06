/* Het portaal aansluiten op de backend.
 *
 * De pagina zelf blijft zoals hij is ontworpen. Dit script vervangt de vaste
 * voorbeeldwaarden door wat er echt in de database staat, en laat de knoppen
 * doen wat ze beloven.
 *
 * Zonder server blijft alles staan zoals het is: dan is portaal.html gewoon de
 * ontwerpschets, met een strook erboven die dat zegt. Dat is bewust, want
 * anders is het ontwerp niet meer te beoordelen zonder de hele backend op te
 * starten.
 */
(() => {
  const HEEFT_SERVER = location.protocol === "http:" || location.protocol === "https:";

  async function haal(pad, opties) {
    const antwoord = await fetch(pad, {
      headers: { "content-type": "application/json" },
      ...opties,
      body: opties?.lichaam ? JSON.stringify(opties.lichaam) : undefined,
    });
    const uit = await antwoord.json().catch(() => ({}));
    if (!antwoord.ok) throw Object.assign(new Error(uit.fout ?? "Er ging iets mis."), { code: antwoord.status, veld: uit.veld });
    return uit;
  }

  function melding(tekst, soort = "goed") {
    document.querySelector(".portaalmelding")?.remove();
    const p = document.createElement("div");
    p.className = `portaalmelding ${soort}`;
    p.setAttribute("role", "status");
    p.textContent = tekst;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 5000);
  }

  /* Uitgelogd: het portaal toont niets van een winkel. Dat is geen foutscherm
     maar de gewone staat voor wie de link niet meer heeft. */
  function toonUitgelogd() {
    document.body.innerHTML = `
      <div class="uitgelogd">
        <h1>Je bent niet ingelogd</h1>
        <p>Het portaal is alleen voor aangesloten winkels. Vul je e-mailadres in op de
           inlogpagina, dan sturen wij een link. Je hoeft geen wachtwoord te bedenken.</p>
        <p><a class="btn btn-groen" href="inloggen.html">Naar inloggen</a></p>
        <p class="klein"><a href="index.html">Terug naar snelrepareren.nl</a></p>
      </div>`;
  }

  /* De navigatieknoppen hebben hetzelfde data-p als de panelen, dus
     querySelector('[data-p="x"]') geeft de KNOP terug en niet het paneel. Dan
     doet alles wat erop volgt stilzwijgend niets. Altijd via deze functie. */
  function paneel(naam) {
    const el = document.querySelector(`section.paneel[data-p="${naam}"]`);
    if (!el) console.warn(`paneel ${naam} niet gevonden`);
    return el;
  }

  function vulTekst(kies, tekst) {
    const e = typeof kies === "string" ? document.querySelector(kies) : kies;
    if (e && tekst !== null && tekst !== undefined) e.textContent = tekst;
  }

  const eur = (n) => "€ " + Number(n).toLocaleString("nl-NL");

  async function start() {
    if (!HEEFT_SERVER) return schetsstrook();

    let mij;
    try {
      mij = await haal("/api/portaal/mij");
    } catch (fout) {
      if (fout.code === 401) return toonUitgelogd();
      return schetsstrook();
    }

    const w = mij.winkel;
    document.title = `Portaal ${w.naam}`;

    /* De gele strook zegt in het ontwerp dat alle cijfers voorbeelden zijn. Voor
       een ingelogde winkel klopt dat niet meer: dit zijn zijn eigen gegevens.
       Wat er dan wel toe doet, is dat de site zelf nog niet publiek is. */
    const strook = document.querySelector(".schets");
    if (strook) {
      strook.textContent =
        "Dit zijn je eigen gegevens. De site is nog niet openbaar, dus klanten zien je vermelding nog niet.";
    }

    // De kop en de zijkolom.
    vulTekst(".paginakop h1", `Goedemorgen, ${w.naam}`);
    vulTekst(".winkel b", w.naam);
    const av = document.querySelector(".winkel .av");
    if (av) av.textContent = (w.naam || "?").trim()[0].toUpperCase();

    // De cijfers op het overzicht. Geen verzonnen groei erbij: wij weten niet
    // hoe vorige maand was zolang er nog geen vorige maand is.
    const c = mij.cijfers;
    const stats = paneel("overzicht")?.querySelectorAll(".stat") ?? [];
    const waarden = [c.vertoningen, c.profiel, c.gebeld];
    stats.forEach((el, i) => {
      if (waarden[i] === undefined) return;
      vulTekst(el.querySelector(".num"), waarden[i].toLocaleString("nl-NL"));
      const op = el.querySelector(".op");
      if (op) { op.textContent = ""; op.className = "op flat"; }
    });
    document.querySelectorAll(".botstekst").forEach((el) => {
      el.textContent = c.nietMeegeteld
        ? `${c.nietMeegeteld} vertoningen zijn niet meegerekend omdat ze van bots kwamen. Wij tellen alleen echte mensen.`
        : "Er zijn de afgelopen dertig dagen geen bot-vertoningen weggefilterd.";
    });

    vulVertoningen(c);
    vulBeoordelingscijfers(mij);

    vulProfiel(w);
    await vulPrijzen();
    await vulCodevraag();
    if (mij.prijzenOud) toonBevestigWaarschuwing(mij.dagenSindsBevestiging);
    vulPolis(w);
    await vulMatches();
    await vulBeoordelingen();
    knoppen();
  }

  /* Het paneel Vertoningen. Geen groeipercentage: wij weten niet hoe vorige
     maand was zolang er geen vorige maand is, en een verzonnen pijltje omhoog
     is precies de ijdelheidsmetriek die dit dashboard niet wil zijn. */
  function vulVertoningen(c) {
    const p = paneel("vertoningen");
    if (!p) return;
    const stats = p.querySelectorAll(".stat");
    const waarden = [c.vertoningen, null, c.nietMeegeteld];
    stats.forEach((el, i) => {
      if (waarden[i] !== null && waarden[i] !== undefined) {
        vulTekst(el.querySelector(".num"), waarden[i].toLocaleString("nl-NL"));
      }
      const op = el.querySelector(".op");
      if (op && i !== 1) { op.textContent = ""; op.className = "op flat"; }
    });
    // Middelste tegel: het aandeel in Uitgelicht. Zolang niemand betaalt is dat
    // het deel dat wij voor nieuwe winkels vrijhouden.
    const uitgelicht = stats[1]?.querySelector(".num");
    if (uitgelicht) uitgelicht.textContent = "0";

    const rijen = document.getElementById("vrijen");
    if (!rijen) return;
    rijen.innerHTML = c.perPagina?.length
      ? c.perPagina.map((r) => `<tr><td>${veilig(r.pad)}</td><td>pagina</td>
          <td class="num">${r.aantal.toLocaleString("nl-NL")}</td><td class="num">-</td></tr>`).join("")
      : `<tr><td colspan="4" class="leegregel">Nog geen vertoningen. Zodra je profiel in een
         zoekresultaat staat, zie je hier op welke pagina's.</td></tr>`;
  }

  function vulBeoordelingscijfers(mij) {
    const p = paneel("beoordelingen");
    if (!p) return;
    const stats = p.querySelectorAll(".stat");
    const klanten = mij.cijfers.gebeld + mij.cijfers.route;
    const b = mij.beoordelingen;
    const waarden = [
      klanten.toLocaleString("nl-NL"),
      String(b.aantal),
      b.gemiddelde === null ? "-" : String(b.gemiddelde).replace(".", ","),
    ];
    const onder = [
      "gebeld of route opgevraagd",
      klanten ? `${Math.round((b.aantal / klanten) * 100)}% van de klanten` : "nog geen klanten via ons",
      b.aantal ? `over ${b.aantal} ${b.aantal === 1 ? "beoordeling" : "beoordelingen"}` : "nog geen beoordelingen",
    ];
    stats.forEach((el, i) => {
      vulTekst(el.querySelector(".num"), waarden[i]);
      const op = el.querySelector(".op");
      if (op) { op.textContent = onder[i]; op.className = "op flat"; }
    });
  }

  function schetsstrook() {
    if (document.querySelector(".portaalschets")) return;
    const d = document.createElement("div");
    d.className = "portaalschets";
    d.textContent =
      "Ontwerpschets: er draait geen server, dus alle cijfers en gegevens hieronder zijn voorbeelden.";
    document.body.prepend(d);
  }

  /* ---------- profiel en prijzen ---------- */

  function vulProfiel(w) {
    const p = paneel("profiel");
    if (!p) return;
    /* Op naam en niet op volgorde. Eerst stond hier `.kaart:first-of-type`, en
       dat matcht op het ELEMENTtype (div) en niet op de klasse, dus de selector
       gaf niets terug en het vullen deed stilzwijgend niets. Dat viel niet op
       omdat de vaste voorbeeldwaarden in het ontwerp toevallig dezelfde winkel
       waren. Een selector op positie is te breekbaar voor iets dat klopt moet zijn. */
    /* De id's staan hier letterlijk in getElementById en niet in een hulpfunctie
       met de naam als argument. Dat is expres: controle.py kijkt na of elk
       gezocht id op de pagina bestaat, en dat kan alleen als hij het ziet staan. */
    const zet = (el, waarde) => { if (el) el.value = waarde ?? ""; };
    zet(document.getElementById("p-naam"), w.naam);
    zet(document.getElementById("p-telefoon"), w.telefoon);
    zet(document.getElementById("p-adres"), w.adres);
    zet(document.getElementById("p-postcodeplaats"), [w.postcode, w.plaats].filter(Boolean).join(" "));
    zet(document.getElementById("p-omschrijving"), w.omschrijving);
  }

  /* ---------- de prijzentabel ----------
   *
   * De tabel bouwt zichzelf op uit de reparatiesoorten in de database, niet uit
   * een vaste lijst in de pagina. Twee dingen volgen daaruit:
   *
   *  - Een reparatie zonder kwaliteitsklassen (accu, laadpoort, camera) krijgt
   *    EEN prijsvak over de volle breedte, geen drie kolommen met dezelfde
   *    kwaliteitsnamen erboven. Anders suggereer je een keuze die er niet is.
   *  - Waterschade krijgt helemaal geen bedrag: dat is een diagnose vooraf en
   *    daarna een prijs op maat.
   */

  let TOESTELLEN = [];
  let HUIDIG_TOESTEL = null;

  async function vulPrijzen() {
    const kiezer = document.getElementById("prijstoestel");
    if (!kiezer) return;

    if (!TOESTELLEN.length) {
      const uit = await haal("/api/toestellen");
      TOESTELLEN = uit.toestellen ?? [];
    }
    if (!TOESTELLEN.length) {
      kiezer.innerHTML = "<option>Geen toestellen bekend</option>";
      document.getElementById("ptabel").innerHTML =
        `<p class="leegregel">Er staan nog geen toestellen in de catalogus.</p>`;
      return;
    }

    if (!HUIDIG_TOESTEL) HUIDIG_TOESTEL = TOESTELLEN[0].id;
    // Per merk gegroepeerd. Een platte lijst van tweehonderdveertig toestellen
    // is niet te doorzoeken; met optgroups springt de browser naar het merk
    // zodra je de eerste letters typt.
    const perMerk = new Map();
    for (const t of TOESTELLEN) {
      if (!perMerk.has(t.merk)) perMerk.set(t.merk, []);
      perMerk.get(t.merk).push(t);
    }
    kiezer.innerHTML = [...perMerk].map(([merk, lijst]) =>
      `<optgroup label="${veilig(merk)}">` + lijst.map((t) =>
        `<option value="${t.id}"${t.id === HUIDIG_TOESTEL ? " selected" : ""}>${veilig(t.naam)}</option>`
      ).join("") + `</optgroup>`
    ).join("");
    kiezer.onchange = async () => { HUIDIG_TOESTEL = Number(kiezer.value); await tekenPrijzen(); };
    await tekenPrijzen();
  }

  async function tekenPrijzen() {
    const el = document.getElementById("ptabel");
    if (!el) return;
    const { reparaties, kwaliteiten, prijzen } = await haal(`/api/portaal/prijzen/${HUIDIG_TOESTEL}`);

    const bij = (rep, kw) =>
      prijzen.find((p) => p.reparatietype_id === rep && (p.onderdeelkwaliteit_id ?? null) === (kw ?? null));

    /* Per kwaliteit een eigen regel, niet drie kolommen naast elkaar. De ladder
       heeft zes treden en die passen niet naast elkaar op een scherm; belangrijker
       is dat een winkel die alleen incell doet, dan geen plek zou hebben om dat
       in te vullen. Wat je niet doet, laat je leeg. */
    const prijsregel = (rep, kw) => {
      const p = bij(rep, kw?.id ?? null);
      const naam = kw ? veilig(kw.naam) : "Eén prijs, geen kwaliteitskeuze";
      return `<div class="kwregel">
        <span class="kwnaam">${naam}</span>
        <span class="inp"><span class="e">&euro;</span>
          <input inputmode="decimal" data-rep="${rep}" data-kw="${kw?.id ?? ""}"
                 value="${p ? Number(p.bedrag) : ""}" placeholder="leeg = doe ik niet"
                 aria-label="Prijs ${naam}"></span>
      </div>`;
    };

    const blok = (r) => {
      if (r.vorm === "offerte") {
        return `<div class="repblok">
          <div class="repkop"><b>${veilig(r.naam)}</b></div>
          <p class="repuitleg">Hier vul je geen bedrag in. Waterschade begint met een diagnose;
             de prijs volgt daarna en verschilt per toestel.</p></div>`;
      }
      const eerste = prijzen.find((p) => p.reparatietype_id === r.id);
      const regels = r.heeft_kwaliteit
        ? kwaliteiten.map((k) => prijsregel(r.id, k)).join("")
        : prijsregel(r.id, null);
      return `<div class="repblok">
        <div class="repkop"><b>${veilig(r.naam)}</b>
          <span class="tijdinp">
            <input inputmode="numeric" data-tijd="${r.id}" value="${eerste?.doorlooptijd_minuten ?? ""}"
                   placeholder="min" aria-label="Doorlooptijd in minuten voor ${veilig(r.naam)}">
            <span>minuten</span>
          </span>
          <label class="vandaag"><input type="checkbox" data-vandaag="${r.id}"
            ${eerste?.vandaag_klaar ? "checked" : ""}> vandaag klaar</label>
        </div>
        ${regels}</div>`;
    };

    el.innerHTML = reparaties.map(blok).join("") +
      `<p class="leegregel">Een leeg bedrag betekent: deze reparatie doe ik niet, of niet in die
        kwaliteit. Een bedrag zonder doorlooptijd wordt niet opgeslagen, want bij elke prijs op de
        site staat hoe lang het duurt.</p>`;

    const hint = document.getElementById("toestelhint");
    if (hint) {
      hint.textContent = prijzen.length
        ? `${prijzen.length} ${prijzen.length === 1 ? "prijs" : "prijzen"} ingevuld voor dit toestel`
        : "nog geen prijzen voor dit toestel";
    }
  }

  /* ---------- een ontbrekend modelnummer doorgeven ----------
   *
   * Van 125 toestellen kennen wij het nummer niet, omdat acht merken het nergens
   * publiceren dat na te trekken is. Winkels zien die toestellen dagelijks.
   * Wat zij insturen gaat NIET meteen op de site: het wordt eerst bekeken.
   */
  async function vulCodevraag() {
    const kiezer = document.getElementById("codetoestel");
    if (!kiezer) return;
    const { toestellen } = await haal("/api/portaal/zonder-code");

    if (!toestellen.length) {
      document.getElementById("codetoestel").closest(".kaart").hidden = true;
      return;
    }

    const perMerk = new Map();
    for (const t of toestellen) {
      if (!perMerk.has(t.merk)) perMerk.set(t.merk, []);
      perMerk.get(t.merk).push(t);
    }
    kiezer.innerHTML = [...perMerk].map(([merk, lijst]) =>
      `<optgroup label="${veilig(merk)}">` + lijst.map((t) =>
        `<option value="${t.id}" data-voorstel="${veilig(t.mijn_voorstel ?? "")}"
                 data-status="${veilig(t.mijn_status ?? "")}">${veilig(t.naam)}</option>`
      ).join("") + `</optgroup>`
    ).join("");

    const toonEigenVoorstel = () => {
      const gekozen = kiezer.selectedOptions[0];
      const code = gekozen?.dataset.voorstel;
      const status = gekozen?.dataset.status;
      const veld = document.getElementById("codeveld");
      const status_el = document.getElementById("codestatus");
      veld.value = code || "";
      status_el.className = "toel codestatus";
      status_el.textContent = !code ? ""
        : status === "overgenomen" ? `Je gaf ${code} door en die staat er inmiddels op. Bedankt.`
        : status === "afgewezen" ? `Je gaf ${code} door; die bleek niet te kloppen.`
        : `Je gaf ${code} door. Iemand kijkt ernaar.`;
    };
    kiezer.onchange = toonEigenVoorstel;
    toonEigenVoorstel();
  }

  async function codeVersturen() {
    const kiezer = document.getElementById("codetoestel");
    const veld = document.getElementById("codeveld");
    const status = document.getElementById("codestatus");
    status.className = "toel codestatus";
    try {
      await haal("/api/portaal/modelcode", {
        method: "POST",
        lichaam: { toestel_id: Number(kiezer.value), code: veld.value },
      });
      status.className = "toel codestatus goed";
      status.textContent = "Bedankt. Iemand kijkt ernaar voordat het op de site komt.";
      const gekozen = kiezer.selectedOptions[0];
      if (gekozen) {
        gekozen.dataset.voorstel = veld.value.trim().toUpperCase();
        gekozen.dataset.status = "open";
      }
    } catch (fout) {
      status.className = "toel codestatus fout";
      status.textContent = fout.message;
    }
  }

  /* Verzamelt wat er in de tabel staat en stuurt het op. */
  async function prijzenOpslaan() {
    const el = document.getElementById("ptabel");
    if (!el) return;
    const tijden = {};
    el.querySelectorAll("[data-tijd]").forEach((i) => { tijden[i.dataset.tijd] = i.value.trim(); });
    const vandaag = {};
    el.querySelectorAll("[data-vandaag]").forEach((i) => { vandaag[i.dataset.vandaag] = i.checked; });

    const rijen = [...el.querySelectorAll("[data-rep]")].map((i) => ({
      reparatietype_id: i.dataset.rep,
      onderdeelkwaliteit_id: i.dataset.kw || null,
      bedrag: i.value.trim(),
      doorlooptijd_minuten: tijden[i.dataset.rep] || "",
      vandaag_klaar: Boolean(vandaag[i.dataset.rep]),
      garantie_maanden: null,
    }));

    // Rijen zonder bedrag EN zonder eerdere prijs hoeven niet mee: dan valt er
    // niets te verwijderen en niets op te slaan.
    await haal("/api/portaal/prijzen", {
      method: "POST",
      lichaam: { toestel_id: HUIDIG_TOESTEL, prijzen: rijen },
    });
    await tekenPrijzen();
  }

  function toonBevestigWaarschuwing(dagen) {
    const el = document.querySelector(".bevestig");
    if (!el) return;
    el.textContent = `Je prijzen zijn ${dagen} dagen niet bevestigd. Na 90 dagen wegen ze lichter mee in de volgorde.`;
    el.classList.add("let");
  }

  function vulPolis(w) {
    const p = paneel("keurmerk");
    if (!p) return;
    const kop = p.querySelector("b");
    if (!kop) return;
    kop.textContent = w.polis_gezien_op
      ? `Polis gecontroleerd — gezien op ${datum(w.polis_gezien_op)}`
      : "Nog geen polis gecontroleerd";
  }

  const datum = (d) =>
    new Date(d).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });

  /* ---------- klussen ---------- */

  async function vulMatches() {
    const el = document.getElementById("matches");
    if (!el) return;
    const { matches } = await haal("/api/portaal/matches");
    if (!matches.length) {
      el.innerHTML = `<p class="leegregel">Nog niemand heeft via ons je nummer opgevraagd.
        Zodra dat gebeurt, staat het hier.</p>`;
      return;
    }
    const naam = { open: "Nog niet gemeld", afgerond: "Afgerond", niet_gekomen: "Niet gekomen" };
    el.innerHTML = matches.map((m) => `
      <div class="matchrij">
        <span><b>${m.toestel ?? "Toestel onbekend"}</b><small>${m.reparatietype_id ?? ""} &middot; ${datum(m.aangemaakt_op)}</small></span>
        <span class="st ${m.staat === "open" ? "open" : "gemeld"}">${naam[m.staat]}</span>
        ${m.staat === "open"
          ? `<span><button class="btn btn-groen btn-klein" data-klaar="${m.id}" data-staat="afgerond">Afgerond</button>
             <button class="btn btn-lijn btn-klein" data-klaar="${m.id}" data-staat="niet_gekomen">Niet gekomen</button></span>`
          : "<span></span>"}
      </div>`).join("");
  }

  /* ---------- beoordelingen ---------- */

  async function vulBeoordelingen() {
    const el = document.getElementById("beoordelingen");
    if (!el) return;
    const { beoordelingen } = await haal("/api/portaal/beoordelingen");
    if (!beoordelingen.length) {
      el.innerHTML = `<p class="leegregel">Nog geen beoordelingen via ons. Iedereen die via de site je
        nummer opvraagt en een adres achterlaat, krijgt na twee dagen de vraag hoe het ging.
        Je kunt niet kiezen wie dat is; dat staat in artikel 10 van de voorwaarden.</p>`;
      return;
    }
    el.innerHTML = beoordelingen.map((b) => `
      <div class="beoordeling">
        <div class="bkop"><span class="cijf num">${Number(b.cijfer)}</span>
          <b>${veilig(b.naam ?? "Anoniem")}</b>
          <span style="color:var(--inkt-3);font-size:13.5px">${b.plaats ? "uit " + veilig(b.plaats) : ""}</span>
          <span class="dat">${datum(b.aangemaakt_op)}</span></div>
        ${b.tekst ? `<p>${veilig(b.tekst)}</p>` : ""}
        ${b.reactie
          ? `<div class="antwoord"><b>Jouw reactie</b>${veilig(b.reactie)}</div>`
          : `<button class="btn btn-lijn btn-klein" data-reageer="${b.id}">Reageren</button>`}
      </div>`).join("");
  }

  const veilig = (t) => String(t ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- knoppen ---------- */

  function knoppen() {
    document.body.addEventListener("click", async (e) => {
      const t = e.target.closest("[data-klaar], [data-reageer]");
      if (!t) return;
      e.preventDefault();
      try {
        if (t.dataset.klaar) {
          await haal("/api/portaal/klaarmelden", {
            method: "POST",
            lichaam: { match_id: Number(t.dataset.klaar), staat: t.dataset.staat },
          });
          melding("Genoteerd. De uitnodiging om te beoordelen ging al automatisch naar de klant.");
          await vulMatches();
        } else {
          const reactie = prompt("Je reactie onder deze beoordeling:");
          if (!reactie) return;
          await haal("/api/portaal/reageren", {
            method: "POST",
            lichaam: { beoordeling_id: Number(t.dataset.reageer), reactie },
          });
          melding("Je reactie staat erbij.");
          await vulBeoordelingen();
        }
      } catch (fout) {
        melding(fout.message, "fout");
      }
    });

    // De prijzentabel: opslaan, en bevestigen zonder te wijzigen.
    document.getElementById("prijzenopslaan")?.addEventListener("click", async (e) => {
      e.preventDefault();
      try {
        await prijzenOpslaan();
        melding("Je prijzen zijn opgeslagen en bevestigd.");
      } catch (fout) {
        melding(fout.message, "fout");
      }
    });

    document.getElementById("prijzenbevestigen")?.addEventListener("click", async (e) => {
      e.preventDefault();
      try {
        const uit = await haal("/api/portaal/bevestigen", { method: "POST", lichaam: {} });
        melding(uit.aantal
          ? `${uit.aantal} ${uit.aantal === 1 ? "prijs" : "prijzen"} bevestigd. Je staat weer vooraan bij actualiteit.`
          : "Je hebt nog geen prijzen om te bevestigen.");
        document.querySelector(".bevestig")?.classList.remove("let");
        await tekenPrijzen();
      } catch (fout) {
        melding(fout.message, "fout");
      }
    });

    document.getElementById("codeversturen")?.addEventListener("click", (e) => {
      e.preventDefault();
      void codeVersturen();
    });

    // Opslaan van het profiel.
    /* Op id, niet "de eerste groene knop in dit paneel". Die selector pakte de
       knop van de prijzentabel, waardoor een klik daarop ALLEBEI de handelingen
       uitvoerde: de prijzen werden geweigerd en meteen daarna meldde het profiel
       dat alles was opgeslagen. Een groene melding boven een mislukte opslag is
       het ergste wat een formulier kan doen. */
    document.getElementById("profielopslaan")?.addEventListener("click", async (e) => {
      e.preventDefault();
      const lees = (el) => el?.value ?? "";
      // "8911 KX Leeuwarden" uit elkaar halen: de eerste twee stukken zijn de
      // postcode, de rest is de plaatsnaam (die uit meer woorden kan bestaan).
      const stukken = lees(document.getElementById("p-postcodeplaats")).trim().split(/\s+/);
      const heeftPostcode = /^\d{4}$/.test(stukken[0]) && /^[A-Za-z]{2}$/.test(stukken[1] ?? "");
      const postcode = heeftPostcode ? stukken.slice(0, 2).join(" ") : "";
      const plaats = (heeftPostcode ? stukken.slice(2) : stukken).join(" ");
      try {
        await haal("/api/portaal/profiel", {
          method: "POST",
          lichaam: {
            naam: lees(document.getElementById("p-naam")),
            telefoon: lees(document.getElementById("p-telefoon")),
            adres: lees(document.getElementById("p-adres")),
            postcode, plaats,
            omschrijving: lees(document.getElementById("p-omschrijving")),
          },
        });
        melding("Je gegevens zijn opgeslagen.");
      } catch (fout) {
        melding(fout.message, "fout");
      }
    });

    // Uitloggen.
    document.querySelector('a[href="inloggen.html"]')?.addEventListener("click", async (e) => {
      e.preventDefault();
      await fetch("/api/uitloggen", { method: "POST" }).catch(() => {});
      location.href = "inloggen.html";
    });
  }

  const stijl = document.createElement("style");
  stijl.textContent = `
    .portaalmelding{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:99;
      background:var(--groen-50,#ECFDF3);border:1.5px solid var(--groen-200,#A7F3D0);
      color:var(--inkt,#111827);padding:12px 18px;border-radius:14px;font-size:14.5px;
      max-width:min(90vw,52ch);box-shadow:0 8px 24px -12px rgba(0,0,0,.25)}
    .portaalmelding.fout{background:var(--rood-soft,#FEE2E2);border-color:var(--rood,#B91C1C)}
    .portaalschets{background:var(--amber-soft,#FEF3C7);color:var(--amber,#B45309);
      padding:10px 16px;font-size:13.5px;text-align:center;font-weight:600}
    .uitgelogd{max-width:52ch;margin:15vh auto;padding:0 24px;text-align:center}
    .uitgelogd h1{font-size:26px;margin-bottom:12px}
    .uitgelogd p{color:var(--inkt-2,#4A5878);line-height:1.6}
    .uitgelogd .klein{font-size:13.5px;margin-top:22px}
    .leegregel{color:var(--inkt-2,#4A5878);font-size:14.5px;line-height:1.6;margin:0;max-width:70ch}
    .bevestig.let{background:var(--amber-soft,#FEF3C7);color:var(--amber,#B45309);
      border-radius:12px;padding:10px 14px;font-weight:600}
  `;
  document.head.appendChild(stijl);

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
