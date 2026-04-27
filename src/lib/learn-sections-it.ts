/**
 * Italian translations for the PokéSchool (Learn) page content.
 * Only subsection titles and content blocks need translation here;
 * section titles are handled via the i18n `learn.sections.*` keys.
 */

export const SECTIONS_IT = [
  {
    id: "intro",
    subsections: [
      {
        title: "I Campionati di Videogiochi",
        content: [
          { text: "**Il VGC (Video Game Championships)** è il formato competitivo Pokémon ufficiale organizzato da **The Pokémon Company International**. Utilizza le **Lotte in Doppio** — ogni giocatore seleziona 4 dei suoi 6 Pokémon da portare in ogni partita." },
          { text: "Le partite si svolgono sui veri videogiochi Pokémon (attualmente **Pokémon Scarlatto & Violetto / Champions**). I giocatori costruiscono squadre di 6, rispettando il regolamento in vigore, e si affrontano in formato **migliore dei 3**." },
          { text: "Il VGC vanta una scena competitiva mondiale fiorente con **Campionati Regionali**, **Internazionali** e **Campionati del Mondo** organizzati ogni anno. I giocatori guadagnano **Punti di Classifica (PC)** per qualificarsi ai Mondiali.", tip: { type: "did-you-know", text: "I Campionati del Mondo VGC esistono dal 2009. Il montepremi è aumentato ogni anno, e i migliori giocatori possono vincere borse di studio e premi in denaro!" } },
        ],
      },
      {
        title: "Lotte in Doppio vs in Singolo",
        content: [
          { text: "A differenza dei Singoli Smogon (6v6, un Pokémon alla volta), il VGC è un **formato Doppio** — due Pokémon per lato del campo in ogni momento. Questo **cambia fondamentalmente la strategia**." },
          { text: "In Doppio, puoi prendere di mira **qualsiasi** dei Pokémon avversari, usare mosse che colpiscono più bersagli (**mosse ad area** come Terremoto, Vampata), e **supportare il tuo partner** con mosse come Sonoqui, Aiuto o Ventoincoda." },
          { text: "Il **posizionamento**, **l'ordine d'azione** e **la lettura delle decisioni avversarie** diventano ancora più importanti quando 4 Pokémon interagiscono simultaneamente.", tip: { type: "pro", text: "Il Doppio è fondamentalmente una questione di interazioni tra 4 Pokémon sul campo. Pensateci come a una partita a scacchi 2v2 — la posizione del vostro partner conta quanto la vostra." } },
        ],
      },
      {
        title: "Anteprima Squadra e Selezione di 4",
        content: [
          { text: "Prima di ogni partita, entrambi i giocatori vedono i 6 Pokémon di ogni squadra (**Anteprima Squadra**). Scegliete poi quali **4 portare** in battaglia." },
          { text: "Questa meccanica di **'Selezione di 4'** è cruciale — non portate sempre gli stessi 4 Pokémon. A seconda della squadra avversaria, aggiustate la vostra selezione per avere il **miglior matchup**.", tip: { type: "champions", text: "In Champions, l'Anteprima Squadra mostra lo sprite di ogni Pokémon, i suoi tipi e il suo badge di tier. Usatela per identificare rapidamente la strategia avversaria e pianificare la vostra selezione di 4!" } },
          { text: "Costruire una squadra flessibile con **più 'modalità'** o buoni Pokémon per diversi matchup è la chiave del successo." },
        ],
      },
    ],
  },
  {
    id: "teambuilding",
    subsections: [
      {
        title: "Il Puzzle dei 6 Pokémon",
        content: [
          { text: "Una squadra VGC solida non è semplicemente composta da 6 Pokémon individualmente potenti — è un'**unità coerente** in cui ogni membro ha un ruolo e copre le debolezze degli altri." },
          { text: "Iniziate scegliendo un **'duo'** — 2-3 Pokémon che funzionano bene insieme. Può essere un piazzatore di meteo + utilizzatore (`Torkoal + Méganium`), una coppia Trick Room (`Sorcilège + Torkoal`), o un combo di controllo di velocità (`Whimsicott + Roidécaille`).", tip: { type: "champions", text: "Consultate la sezione Migliori Duoi della pagina META — la nostra simulazione di 1M di battaglie mostra quali coppie hanno i migliori tassi di vittoria. Gliscor + Archaludon domina attualmente al 71%!" } },
          { text: "Riempite poi gli slot rimanenti con Pokémon che **controbilanciano le minacce** a cui il vostro duo è debole, apportano **condizioni di vittoria alternative** e vi danno **flessibilità** in Anteprima Squadra." },
        ],
      },
      {
        title: "Ruoli da Coprire",
        content: [
          { text: "**Controllo di Velocità:** Piazzatori di Ventoincoda (`Whimsicott`, `Flambusard`), piazzatori di Trick Room (`Sorcilège`, `Oranguru`), utilizzatori di Ventogelato/Elettrogelo. **Controllare chi agisce per primo fa vincere le partite.**" },
          { text: "**Minacce Offensive:** Avete bisogno di Pokémon in grado di infliggere danni significativi. **Mischiate attaccanti fisici e speciali** per non essere bloccati da un'unica stat difensiva." },
          { text: "**Supporto & Rindirizzamento:** Pokémon come `Lampignon` (Polvere Rabbia), `Deusolourdo` (Sonoqui) o `Méfiance` (Bagliore Funereo, Inversione di Priorità) proteggono le vostre minacce chiave.", tip: { type: "pro", text: "Ogni grande squadra ha almeno un Pokémon 'colla' — un supporto che non fa sweep da solo ma permette a tutto il resto di funzionare. Incineroar con Fintoattacco + Intimidazione è il GOAT di questo ruolo." } },
          { text: "**Spina Dorsale Difensiva:** Almeno un Pokémon resistente che incassa i colpi e apporta utilità — utilizzatori di **Intimidazione**, piazzatori di **Scottatura**, o rindirizzatori robusti." },
        ],
      },
      {
        title: "Sinergia di Tipi e Copertura",
        content: [
          { text: "Assicuratevi che la vostra squadra **non sia troppo vulnerabile** a un singolo tipo. Se 3+ Pokémon condividono una debolezza (es: tutti deboli a Terra), un singolo `Terremoto` può devastarvi.", tip: { type: "warning", text: "Trappola comune: concentrarsi sui tipi Acciaio perché sono individualmente forti. La vostra squadra crollerà di fronte a un singolo Terremoto o Vampata di tipo Fuoco." } },
          { text: "Verificate che la vostra squadra possa colpire **ogni tipo** per almeno danni neutri. La tabella di copertura del **Team Builder Champions Lab** vi aiuta a visualizzare questo." },
          { text: "Pensate alle **immunità** e **resistenze**. Un Pokémon di tipo **Volante** o con **Levitazione** è ideale al fianco di un utilizzatore di Terremoto. Un tipo **Acciaio** resiste a 10 tipi!" },
        ],
      },
      {
        title: "Punti Stat (PS) in Champions",
        content: [
          { text: "In Champions, il sistema classico **EV/IV** è sostituito dai **Punti Stat (PS)** — un sistema di allocazione più semplice e più strategico.", tip: { type: "champions", text: "Ogni Pokémon riceve 66 Punti Stat da distribuire, con un massimo di 32 in qualsiasi stat. Ogni punto conta — nessun PS sprecato!" } },
          { text: "**Distribuzioni comuni:** `32/32/2/0/0/0` (due stats max + un po' extra), `32/0/2/32/0/0` (offensivo + resistenza), `32/0/32/0/0/2` (tank puro). I 2 PS rimanenti sono il vostro investimento 'tech'." },
          { text: "**I paletti di velocità** sono particolarmente importanti con i PS. Sapete se avete bisogno di `32 Velocità` per superare minacce chiave, o se potete investire altrove per la resistenza.", tip: { type: "pro", text: "Un errore comune è massimizzare sempre la Velocità. Molti Pokémon come Roidécaille, Ronflex e Torkoal non hanno bisogno di Velocità — investite in PS e Attacco/Att. Sp. per un impatto massimo." } },
        ],
      },
    ],
  },
  {
    id: "types",
    subsections: [
      {
        title: "I 18 Tipi",
        content: [
          { text: "Esistono **18 tipi** in Pokémon, ognuno con le proprie interazioni offensive e difensive. **Padroneggiare i matchup di tipi** è la base del gioco competitivo." },
          { text: "**Tipi offensivi chiave:** Folletto (batti Drago, Buio, Lotta), Terra (batti **5 tipi** in superefficace, solo resistito da Coleottero, Erba), Ghiaccio (batti Drago, Terra, Volante, Erba)." },
          { text: "**Tipi difensivi chiave:** Acciaio (**resiste 10 tipi!**), Folletto (immunità al Drago, resiste Lotta, Coleottero, Buio), Acqua (resiste 4 tipi).", tip: { type: "did-you-know", text: "Il tipo Acciaio è così dominante difensivamente che 49 dei 159 Pokémon del roster Champions possono imparare una mossa Acciaio per contrastarlo. Abbiate sempre un piano contro l'Acciaio!" } },
        ],
      },
      {
        title: "Combinazioni Offensive Comuni",
        content: [
          { text: "**Ghiaccio + Terra:** Resistito solo da una manciata di Pokémon (tipi Acqua/Coleottero). Copertura neutra incredibile — ecco perché `Garchomp` con Terremoto + mossa Ghiaccio è così dominante." },
          { text: "**Folletto + Fuoco:** La Folletto gestisce Drago/Buio/Lotta, il Fuoco gestisce Acciaio/Coleottero/Erba — colpendo **quasi tutto** in modo neutro.", tip: { type: "pro", text: "Mega Gardevoir (Folletto) + Arcanin (Fuoco) è un esempio classico di questo duo offensivo. Insieme, possono minacciare quasi tutto il metagame!" } },
          { text: "**Spettro + Lotta:** Lo Spettro è immune al Normale e alla Lotta, la Lotta è superefficace contro il Normale e l'Acciaio. Insieme, colpiscono tutto almeno in neutro tranne i tipi Normale/Spettro." },
          { text: "**Acqua + Erba:** L'Acqua colpisce Fuoco/Terra/Roccia, l'Erba gestisce Acqua/Terra/Roccia da un angolo diverso. Copertura neutra molto solida." },
        ],
      },
      {
        title: "Strategia di Megaevoluzione",
        content: [
          { text: "**La Megaevoluzione** trasforma un Pokémon in una **forma più potente** in piena battaglia, potenziando le sue stats e a volte **cambiando il suo tipo o la sua abilità**.", tip: { type: "champions", text: "Champions propone le Megas classiche (Garchomp, Kangaskhan, Métalosse) E delle esclusive inedite (Mega Méganium, Mega Feralligator, Mega Tatogel). Sperimentatele nel Team Builder!" } },
          { text: "Ogni squadra può **Megaevolvere un solo Pokémon** per battaglia — scegliete saggiamente quale beneficia di più del potenziamento." },
          { text: "Le **Megapietre** occupano lo slot strumento, quindi i Pokémon Mega non possono tenere altri strumenti come l'Orbe Vita o le Bende Scelta." },
          { text: "Alcune Megaevoluzioni **cambiano abilità** durante il turno di Megaevoluzione (es: `Mega-Kangaskhan` acquisisce **Legame Parentale**). Pianificate attentamente il vostro primo turno di Mega.", tip: { type: "warning", text: "Se la vostra Mega usa Intimidazione nella sua forma base (come Léviator), la Megaevoluzione rimuove l'Intimidazione. A volte, è meglio NON Megaevolvere al turno 1 se avete bisogno di quel ciclo di Intimidazione!" } },
        ],
      },
    ],
  },
  {
    id: "strategies",
    subsections: [
      {
        title: "Squadre Ventoincoda",
        content: [
          { text: "**La Ventoincoda** raddoppia la Velocità della vostra squadra per **4 turni**. È il controllo di velocità più comune in VGC, usato da Pokémon come `Whimsicott`, `Flambusard`, `Oratoria` e `Boréas`." },
          { text: "**Strategia:** Iniziate con il vostro piazzatore di Ventoincoda + un attaccante potente. Piazzate la Ventoincoda **dal turno 1**, poi fate sweep con i vostri Pokémon più veloci nei turni successivi.", tip: { type: "pro", text: "Whimsicott è il miglior piazzatore di Ventoincoda grazie a Burla — dà alla Ventoincoda priorità +1, permettendole quasi sempre di agire per prima. Abbinatelo a Roidécaille per doppi attacchi devastatori." } },
          { text: "**Controgioco:** Fintoattaccate il piazzatore di Ventoincoda, usate il vostro proprio controllo di velocità (Ventoincoda avversaria o Trick Room), o usate **mosse prioritarie** per aggirare il potenziamento di velocità." },
        ],
      },
      {
        title: "Squadre Trick Room",
        content: [
          { text: "**Il Trick Room** inverte l'ordine di velocità per **5 turni** — i **Pokémon più lenti agiscono per primi**. Questo permette a Pokémon estremamente potenti ma lenti come `Torkoal`, `Ronflex` e `Sorcilège` di dominare.", tip: { type: "champions", text: "La nostra simulazione di 1M mostra che il Trick Room con Flagadoss è l'archetipo n°1 con un tasso di vittoria del 65,6%! La resistenza incredibile di Flagadoss lo rende quasi impossibile da impedire nello setup." } },
          { text: "**Strategia:** Proteggete il vostro piazzatore di Trick Room (spesso abbinandolo con **Sonoqui/Polvere Rabbia**), piazzate il Trick Room, poi scatenate potenti attaccanti lenti." },
          { text: "**Costruzione:** I vostri sweeper Trick Room devono avere una **Velocità minima** — in Champions, questo significa `0 PS in Velocità`. Ogni punto di Velocità perso conta sotto Trick Room." },
          { text: "**Controgioco:** Mettete K.O. o usate **Beffata** sul piazzatore, usate Possessio con il Trick Room sul vostro proprio Pokémon, o portate Pokémon veloci che possono minacciare il piazzatore prima che agisca." },
        ],
      },
      {
        title: "Squadre Meteo",
        content: [
          { text: "**Il meteo** (Sole, Pioggia, Sabbia, Neve) potenzia alcuni tipi e attiva abilità come **Nuotovelox**, **Clorofilla**, **Lettosablia** e **Spalaneve**." },
          { text: "**☀️ Sole:** Piazzato da `Siccità` (`Torkoal`). Potenzia le mosse Fuoco, indebolisce l'Acqua. Attiva la Clorofilla. Si abbina a potenti tipi Fuoco e utilizzatori di **Raggio Solare**." },
          { text: "**🌧️ Pioggia:** Piazzata da `Piovischio` (`Oratoria`). Potenzia l'Acqua, indebolisce il Fuoco. Attiva la Nuotovelox. Le squadre Pioggia esercitano pressione con **mosse ad area Acqua** potenziate.", tip: { type: "did-you-know", text: "Oratoria + Hyporoi (Nuotovelox) era uno dei duoi VGC più iconici di tutti i tempi. In Champions, Oratoria + Azumarill o Primarina gioca un ruolo simile!" } },
          { text: "**🏜️ Sabbia:** Piazzata da `Sabbia Fango` (`Tyranocif`, `Hippodocus`). Conferisce un **potenziamento di Dif. Sp.** ai tipi Roccia, infligge danni da chip. Attiva gli sweeper Lettosablia come `Excadrill`." },
        ],
      },
      {
        title: "Goodstuff / Equilibrio",
        content: [
          { text: "**'Goodstuff'** significa costruire una squadra di Pokémon individualmente forti che non dipendono da un archetipo specifico. L'obiettivo è la **flessibilità e la regolarità**." },
          { text: "Queste squadre eccellono in **Anteprima Squadra** perché hanno una risposta a tutto — non perdono automaticamente di fronte a un matchup.", tip: { type: "champions", text: "L'Equilibrio è l'archetipo n°2 nella nostra simulazione con il 54,4% di TV. È la strategia più accessibile ai principianti perché non richiede l'esecuzione perfetta di un unico piano di gioco." } },
          { text: "Includete un mix di **opzioni di controllo di velocità**, **pressione offensiva** e **utilità difensiva**. Intimidazione, rindirizzamento e mosse prioritarie sono dei must." },
          { text: "Le squadre Goodstuff ricompensano il **gioco solido in partita** e l'adattamento. Dovete **surclassare l'avversario** piuttosto che affidarsi a un unico setup." },
        ],
      },
      {
        title: "Iper Offensiva",
        content: [
          { text: "**L'Iper Offensiva** dà priorità all'infliggere il **massimo dei danni** il più rapidamente possibile. La filosofia: *'Se metto K.O. i loro Pokémon abbastanza in fretta, non possono contrattaccare.'*" },
          { text: "Include generalmente forti piazzatori di **Ventoincoda** o utilizzatori di **Bende Scelta**, mosse ad area potenti (`Vampata`, `Frana`, `Magiescudo`), e un supporto **Aiuto**." },
          { text: "**Rischio:** Se non fate KO rapidi, vi mancheranno gli strumenti difensivi per recuperare. Le squadre HO **vivono e muoiono** del loro momentum iniziale.", tip: { type: "warning", text: "L'Iper Offensiva è un'arma a doppio taglio. Se l'avversario legge il vostro gioco al turno 1 e usa Protezione correttamente, potete immediatamente prendere ritardo. Abbiate sempre un Piano B di lead." } },
        ],
      },
    ],
  },
  {
    id: "ingame",
    subsections: [
      {
        title: "Selezione del Lead",
        content: [
          { text: "Scegliere il giusto **lead** (i vostri 2 primi Pokémon) è cruciale. Volete **stabilire un vantaggio** o installare la vostra condizione di vittoria presto." },
          { text: "Considerate: Ho bisogno di controllo di velocità? **Minaccio i loro lead probabili**? Devo proteggere un Pokémon chiave con il rindirizzamento?" },
          { text: "Abbiate un **lead predefinito** per la vostra squadra, ma rimanete flessibili. Adattatevi in base alla squadra avversaria in **Anteprima Squadra**.", tip: { type: "pro", text: "Annotate i vostri lead predefiniti e i vostri lead 'anti-Trick Room' prima di un torneo. Avere un piano pronto significa decisioni più rapide e più sicure sotto pressione." } },
        ],
      },
      {
        title: "Protezione e Predizioni",
        content: [
          { text: "`Protezione` è la **mossa più importante del VGC**. Blocca tutte le mosse per un turno (con alcune eccezioni come `Finta`). Quasi ogni Pokémon dovrebbe averla." },
          { text: "**Usate Protezione per:** scovare le mosse avversarie, far durare i turni di Trick Room/Ventoincoda, assicurare un cambio sicuro, bloccare un **doppio targeting** prevedibile.", tip: { type: "did-you-know", text: "Ai Campionati del Mondo 2023, il vincitore aveva Protezione su 5 dei suoi 6 Pokémon. L'unico senza era un attaccante bloccato dalle Bende Scelta. Protezione è DAVVERO così importante!" } },
          { text: "**Prevedere la Protezione avversaria** è la chiave per prendere il sopravvento. Se pensate che la useranno, usate una **mossa di setup**, cambiate, o prendete di mira il loro partner." },
        ],
      },
      {
        title: "Switch e Posizionamento",
        content: [
          { text: "Cambiare Pokémon in Doppio è **più rischioso** che in Singolo — siete sempre vulnerabili sull'altro slot. Ma **i buoni switch fanno vincere le partite**." },
          { text: "Cambiate per portare un Pokémon con un **vantaggio di tipo**, per attivare l'**Intimidazione**, o per posizionarvi per un migliore **finale di partita**.", tip: { type: "pro", text: "Il 'ciclo di Intimidazione' è una tecnica potente — fat entrare e uscire Incineroar/Arcanin per abbassare ripetutamente l'Attacco avversaria. I Pokémon con Intimidazione sono sempre molto richiesti!" } },
          { text: "Pensate ai vostri **'2 in fondo'** — i Pokémon che non avete portato in lead. Pianificate **come e quando** entrano. Teneteli per il momento giusto." },
        ],
      },
      {
        title: "Fine Partita e Condizioni di Vittoria",
        content: [
          { text: "Le partite VGC si decidono spesso negli **ultimi 2-3 turni**. Identificate presto la vostra **condizione di vittoria**: quale dei vostri Pokémon può concludere la partita?" },
          { text: "**Scenari comuni di fine partita:** uno sweeper veloce che ripulisce i Pokémon indeboliti, un Pokémon resistente che fa scorrere il tempo, un Trick Room che fa sweep con 2-3 frantumatori lenti." },
          { text: "**Preservate la vostra condizione di vittoria** per tutta la partita. Non sacrificate il vostro sweeper di fine partita per danni minori all'inizio del gioco.", tip: { type: "warning", text: "Uno degli errori più grandi dei principianti: scambiare il vostro miglior Pokémon presto per un KO su qualcosa che non conta. Chiedetevi sempre 'chi conclude questa partita?' e tenetelo in buona salute." } },
        ],
      },
    ],
  },
  {
    id: "moves",
    subsections: [
      {
        title: "Mosse da Conoscere Assolutamente",
        content: [
          { text: "**`Protezione`** — Blocca tutti gli attacchi per 1 turno. La mossa più importante del VGC — da avere su **quasi tutto**." },
          { text: "**`Fintoattacco`** — Mossa prioritaria +3 che paralizza (solo primo turno). Perturba i setup, garantisce danni da chip. Usato da `Incineroar`, `Loputout`, `Miénfouet`." },
          { text: "**`Sonoqui` / `Polvere Rabbia`** — Rindirizza le mosse a bersaglio singolo verso l'utilizzatore. Permette ai vostri Pokémon chiave di fare setup o attaccare in sicurezza." },
          { text: "**`Ventoincoda`** — Raddoppia la Velocità della vostra squadra per 4 turni. La principale mossa di controllo di velocità nella maggior parte dei formati." },
          { text: "**`Trick Room`** — Inverte l'ordine di velocità per 5 turni. Permette ai potenti ma lenti di dominare." },
          { text: "**`Aiuto`** — Potenzia l'attacco del vostro partner del **50%** questo turno. Amplificatore di danni gratuito senza controindicazioni.", tip: { type: "pro", text: "Aiuto è una delle mosse più sottovalutate del VGC. Questo +50% può trasformare un 2HKO in OHKO, ribaltando completamente la partita a vostro favore. Ha anche priorità +5!" } },
        ],
      },
      {
        title: "Strumenti Chiave Tenuti",
        content: [
          { text: "**Baccaliegia** — Sopravvive a qualsiasi attacco con 1 PS. Essenziale sui Pokémon di setup fragili e sui piazzatori di Trick Room." },
          { text: "**Bende Scelta** — Potenzia la Velocità del **50%** ma vi blocca su una singola mossa. Permette a Pokémon di superare minacce che normalmente non potrebbero precedere." },
          { text: "**Veste Assalto** — Potenzia la Dif. Sp. del **50%** ma impedisce le mosse di stato. Ideale su Pokémon offensivi resistenti come `Roidécaille` e `Goodra`.", tip: { type: "did-you-know", text: "Roidécaille con Veste Assalto è uno dei set più popolari nella meta Champions attuale. Gli permette di sopravvivere ad attacchi speciali che normalmente non potrebbe, rendendolo un tank imprendibile." } },
          { text: "**Orbe Vita** — Potenzia i danni del **30%** a costo del 10% PS per attacco. Per i Pokémon che hanno bisogno di potenza senza essere bloccati dalle Bende." },
          { text: "**Baccacedro** — Ripristina **25% dei PS** sotto il 50%. Longevità affidabile per i Pokémon resistenti e i supporti." },
          { text: "**Occhiali Protettivi** — Immunità ai danni meteo e alle mosse polvere (`Spora`, `Sonnifero`). Contro chiave contro Lampignon." },
        ],
      },
      {
        title: "Mosse ad Area",
        content: [
          { text: "**Le mosse ad area** colpiscono entrambi gli avversari (e a volte il vostro partner). In Doppio, una mossa che colpisce 2 Pokémon infligge **75% dei suoi danni normali** a ciascuno." },
          { text: "**Migliori mosse ad area:** `Terremoto` (Terra, fisica, colpisce avversari E partner), `Vampata` (Fuoco, speciale, avversari solo), `Frana` (Roccia, fisica, avversari solo, **chance di tentennamento**), `Magiescudo` (Folletto, speciale, avversari solo).", tip: { type: "champions", text: "La nostra simulazione mostra Jackpot (59,3% TV), Grande Forza (59,3% TV) e Rouste (58,9% TV) come le mosse con il miglior tasso di vittoria. Consultate la pagina META per la classifica completa!" } },
          { text: "Fate attenzione alle **mosse che colpiscono gli alleati** come `Terremoto` e `Surf` — assicuratevi che il vostro partner resista, sia immune, o che un utilizzatore di **Schermaglia** sia presente." },
        ],
      },
    ],
  },
  {
    id: "tournament",
    subsections: [
      {
        title: "Leggere il Metagame",
        content: [
          { text: "Il **'meta'** designa le strategie, Pokémon e strutture di squadre popolari attualmente utilizzate. **Evoluzione costantemente** attraverso le innovazioni e le contro-strategie dei giocatori." },
          { text: "Consultate i risultati dei tornei su VictoryRoadVGC, **la pagina META di Champions Lab**, e le risorse della community. Sapete cosa è popolare per **prepararvi**.", tip: { type: "champions", text: "La nostra pagina META è alimentata da una simulazione di 1M di battaglie che classifica ogni Pokémon, mossa, duo e archetipo per tasso di vittoria reale. Usatela per individuare le tendenze prima dei vostri avversari!" } },
          { text: "Non limitatevi a copiare le squadre top — capite **PERCHÉ** funzionano. Quali matchup vincono? Qual è il loro piano di gioco? Quali sono le loro debolezze?" },
        ],
      },
      {
        title: "Pratica e Ladder",
        content: [
          { text: "Giocate su **Pokémon Showdown** (simulatore di battaglia online) per testare la vostra squadra prima di portarla in torneo. Puntate a un alto ranking per validare la vostra squadra." },
          { text: "**Tenete traccia delle vostre partite:** annotate contro cosa perdete, quali lead sono scomodi e quali Pokémon non portate mai. Questi dati vi aiutano a **affinare** la vostra squadra.", tip: { type: "pro", text: "Tenete un semplice foglio di calcolo: squadra avversaria, i vostri lead, vittoria/sconfitta, note. Dopo 20+ partite, emergono pattern chiari su contro cosa la vostra squadra fatica." } },
          { text: "Allenatervi su **matchup specifici** con amici o in gruppi di pratica. L'allenamento in **Bo3** (migliore dei 3) è essenziale per essere pronti in torneo." },
        ],
      },
      {
        title: "Il Mentale",
        content: [
          { text: "I tornei VGC sono lunghi — i Regionali possono durare **7-9 turni**. La **resistenza mentale** conta quanto la forza della squadra." },
          { text: "Rimanete **idratati**, mangiate bene e fate pause tra i turni. Una mente limpida prende decisioni migliori sotto pressione." },
          { text: "**Non tiltate** dopo una sconfitta. Ogni grande giocatore perde partite. Concentratevi sul turno successivo e su ciò che potete controllare.", tip: { type: "did-you-know", text: "Wolfe Glick, Campione del Mondo 2016, ha terminato 6-3 in diversi Regionali prima di vincere i Mondiali. La regolarità e la resilienza mentale battono qualsiasi risultato individuale." } },
          { text: "Analizzate le vostre partite tra i turni se possibile. Avete **giocato male**, o avete avuto **sfortuna**? Sapere fare la differenza evita errori ripetuti." },
        ],
      },
      {
        title: "Punti di Classifica e Qualificazione",
        content: [
          { text: "Guadagnate **Punti di Classifica (PC)** posizionandovi bene in tornei sanctionati: eventi locali, Regionali, Internazionali ed Eventi Speciali." },
          { text: "Avete bisogno di una certa **soglia di PC** per qualificarvi ai **Campionati del Mondo**. La soglia varia in base alla regione e alla stagione." },
          { text: "La strada verso i Mondiali è una **maratona, non uno sprint**. Prestazioni regolari su più eventi contano più di una singola vittoria fortunata.", tip: { type: "pro", text: "Concentratevi sull'accesso regolare al Giorno 2 piuttosto che a vincere tutto. Una serie di Top 16 frutta più PC di un Top 4 fortunato." } },
        ],
      },
    ],
  },
  {
    id: "advanced",
    subsections: [
      {
        title: "Calcolo dei Danni",
        content: [
          { text: "Sapere **quanti danni** infliggono i vostri attacchi è cruciale. Usate un calcolatore di danni (come quello integrato nel **motore di Champions Lab**) per verificare i benchmark." },
          { text: "I **'benchmark'** sono calcoli chiave: Il mio Pokémon può **fare un OHKO** su una minaccia comune? Può **sopravvivere** a un attacco specifico? Questi benchmark guidano la vostra distribuzione di PS.", tip: { type: "champions", text: "Usate il nostro Simulatore di Battaglia per testare matchup specifici. Utilizza la formula di danni completa includendo riduzione di area, meteo, abilità e strumenti per risultati precisi." } },
          { text: "Le distribuzioni di PS non sono solo `32 Att / 32 Vit`. I migliori giocatori **'creep'** — aggiungono giusto abbastanza resistenza per sopravvivere ad attacchi chiave mantenendo la potenza offensiva." },
        ],
      },
      {
        title: "Accumulo del Controllo di Velocità",
        content: [
          { text: "Alcune squadre usano **più forme** di controllo di velocità. Per esempio, `Ventoincoda + Ventogelato`, o `Trick Room + Tuononda`." },
          { text: "Questa flessibilità permette di **adattarsi in corso di partita**. Se il vostro primo controllo di velocità è bloccato, ne avete uno di riserva." },
          { text: "**Tecnica avanzata:** Le squadre a 'bivio Trick Room' possono giocare a **velocità rapida O lenta**, scegliendo in base al matchup.", tip: { type: "pro", text: "Le squadre più flessibili possono vincere sotto Ventoincoda E sotto Trick Room. Avere Ronflex (lento) e Garchomp (veloce) nella stessa squadra vi dà entrambe le modalità." } },
        ],
      },
      {
        title: "Condizionamento di Slot",
        content: [
          { text: "L'avversario fa predizioni basate su ciò che **si aspetta da voi**. Il **'condizionamento'** consiste nello stabilire pattern, poi nel romperli." },
          { text: "**Esempio:** Usate Protezione con il Pokémon A per due turni, condizionando l'avversario a ignorarlo. Al turno 3, **attaccate** con il Pokémon A quando non se l'aspetta." },
          { text: "Al più alto livello, il VGC è un gioco di **letture e contro-letture**. I migliori giocatori sono **imprevedibili** e si adattano alle abitudini avversarie.", tip: { type: "did-you-know", text: "I giocatori VGC giapponesi sono famosi per gli 'hard reads' — predizioni audaci come il doppio targeting su un cambio anticipato. È rischioso ma devastantemente efficace quando funziona." } },
        ],
      },
      {
        title: "Analisi dei Rapporti di Squadra",
        content: [
          { text: "Dopo i grandi tornei, i migliori giocatori pubblicano **'team reports'** — spiegazioni dettagliate della loro squadra, dei loro set e delle loro strategie." },
          { text: "Studiate questi rapporti per capire il **pensiero di alto livello**. Prestate attenzione alle distribuzioni di PS (a cosa sopravvivono/fanno KO), alle scelte di lead e alle spiegazioni del piano di gioco.", tip: { type: "pro", text: "Leggendo un team report, concentratevi sulla sezione 'tabella dei matchup' — vi dice cosa il giocatore pensava di ogni archetipo comune e come prevedeva di batterlo." } },
          { text: "La **pagina META** di Champions Lab e il **Simulatore di Battaglia** vi permettono di testare e analizzare queste strategie da soli." },
        ],
      },
    ],
  },
  {
    id: "tools",
    subsections: [
      {
        title: "Il Pokédex",
        content: [
          { text: "La homepage di Champions Lab è un **Pokédex completo e ricercabile** che presenta i 159 Pokémon del roster Champions. Scorrete la griglia, filtrate per tipo e cercate per nome per trovare qualsiasi Pokémon istantaneamente." },
          { text: "Cliccate su qualsiasi carta per aprire una **scheda di stats dettagliata** che mostra le stats base, il tipo, le abilità e il pool di mosse completo. È la vostra referenza principale per costruire una squadra.", tip: { type: "pro", text: "Usate i pulsanti di filtro tipo in alto per affinare i risultati. Cercate un tipo Acqua per completare la vostra squadra? Un solo clic mostra tutte le opzioni del roster." } },
          { text: "Ogni carta mostra i totali di **Punti Stat (PS)**, i tipi e uno sprite animato di qualità. Le carte sono colorate per tipo principale per scansionare visivamente il roster a colpo d'occhio." },
          { text: "Le **Megaevoluzioni** sono mostrate accanto alle loro forme base. La scheda dettagliata include confronti di stats completi per vedere esattamente quanta potenza bruta una Mega guadagna." },
        ],
      },
      {
        title: "Team Builder",
        content: [
          { text: "Il **Team Builder** è il vostro laboratorio per creare squadre VGC competitive. Aggiungete fino a 6 Pokémon, assegnate mosse, abilità, strumenti tenuti e distribuite i Punti Stat con uno slider intuitivo." },
          { text: "La **tabella di copertura** in cima alla vostra squadra si aggiorna in tempo reale. Mappa la copertura offensiva e le debolezze difensive della vostra squadra sui 18 tipi, aiutandovi a individuare le lacune pericolose prima di combattere.", tip: { type: "pro", text: "Guardate attentamente la tabella di copertura. Se un tipo è in rosso, la vostra squadra è pericolosamente vulnerabile a esso. Scambiate un Pokémon che resiste o è immune a quel tipo." } },
          { text: "Non sapete da dove cominciare? Caricate una delle **squadre preset** costruite dal motore di simulazione. Sono composizioni collaudate di archetipi performanti che potete usare così come sono o personalizzare.", tip: { type: "champions", text: "La funzionalità 'Suggerimenti' analizza la vostra squadra attuale in tempo reale e raccomanda Pokémon che colmano le lacune di copertura. Verifica i tipi contro cui la vostra squadra ha difficoltà e suggerisce counter solidi." } },
          { text: "**Importate ed esportate** le vostre squadre sotto forma di codici condivisibili compatti. Inviate la vostra squadra ad amici, salvatela per dopo, o incollate squadre trovate online. Il formato è rapido e facile da condividere." },
          { text: "Ogni slot di Pokémon vi permette di scegliere tra **tutte le mosse e tutte le abilità** disponibili nel formato Champions. Lo slider PS distribuisce i vostri 66 punti totali sulle 6 stats, con un massimo di 32 in ciascuna.", tip: { type: "did-you-know", text: "Potete scegliere la vostra Megaevoluzione direttamente nel Team Builder. Un solo Pokémon per squadra può Megaevolversi — scegliete la Mega che supporta meglio la vostra strategia globale." } },
        ],
      },
      {
        title: "Tester di Squadra",
        content: [
          { text: "Il **Tester di Squadra** vi permette di opporre due squadre in una simulazione completa pilotata da IA. Costruite o importate due squadre, definite il numero di battaglie (da 10 a 1000) e guardate i risultati dispiegarsi con barre di progresso animate." },
          { text: "I risultati mostrano i **tassi di vittoria globali** per ogni squadra con statistiche dettagliate. Lanciate più battaglie per una maggiore affidabilità nei numeri.", tip: { type: "pro", text: "Lanciate almeno 100 battaglie per risultati affidabili. I piccoli campioni (10-20 battaglie) possono essere fuorvianti a causa di critici casuali, miss e varianze di effetti secondari." } },
          { text: "Il pannello **Analisi del Lead** scompone i tassi di vittoria per ogni combinazione di lead possibile. Cliccate su qualsiasi lead per rivelare un **albero di strategia** che spiega il ragionamento turno per turno dell'IA per quel matchup." },
          { text: "Scorrete gli **scenari di battaglia** individuali per rigiocare partite specifiche. Ogni scenario mostra il log di battaglia completo con le mosse usate, i danni inflitti, i cambi meteo e i KO in ordine cronologico." },
          { text: "Volete modificare qualcosa? Il pulsante **Modifica Squadra** vi permette di modificare l'una o l'altra squadra direttamente dalla schermata dei risultati e di rilanciare la simulazione senza ricominciare da capo.", tip: { type: "champions", text: "Usate il Tester di Squadra per praticare matchup specifici. Vi chiedete se la vostra squadra può gestire l'archetipo meta più popolare? Importate entrambe le squadre, lanciate 200 battaglie e lasciate parlare i dati." } },
        ],
      },
      {
        title: "Simulatore di Battaglia",
        content: [
          { text: "Il **Simulatore di Battaglia** lancia una battaglia VGC in doppio completa dall'Anteprima Squadra al K.O. finale, interamente controllata dall'IA. Guardate la battaglia dispiegarsi in tempo reale con sprite animati, barre PS ed effetti di mosse." },
          { text: "Ogni turno è registrato nel **diario di battaglia** con tutti i dettagli: cifre di danni, attivazioni di abilità, cambiamenti di meteo e terreno, potenziamenti di stats e stati di condizione. Nulla è nascosto." },
          { text: "Il motore decisionale dell'IA valuta i **matchup di tipi, paletti di velocità, soglie di PS e mosse disponibili** per scegliere la mossa migliore a ogni turno. Pesa i cambi, i tempi di Protezione, le mosse ad area e la selezione di bersagli.", tip: { type: "did-you-know", text: "L'IA del Simulatore di Battaglia valuta ogni combinazione di azioni possibile a ogni turno, inclusa la doppia Protezione, i cambi e le mosse ad area. Sceglie la mossa con il valore atteso più alto." } },
          { text: "Usate il Simulatore di Battaglia per **visualizzare come si comporta la vostra squadra** in pratica. Mostra se il vostro piano di gioco funziona davvero quando entrambi i lati giocano in modo intelligente." },
          { text: "Il **sistema di replay** vi permette di scorrere le battaglie terminate turno per turno. Rivedete i momenti critici, vedete dove la partita è cambiata e imparate dalle scelte dell'IA.", tip: { type: "pro", text: "Dopo aver costruito una nuova squadra, lanciate 5-10 partite con il Simulatore di Battaglia e guardate i replay. Individuerete rapidamente quali Pokémon vengono messi K.O. troppo facilmente, quali mosse non vengono mai usate e quali lead funzionano meglio." } },
        ],
      },
      {
        title: "Calcolatore di Danni",
        content: [
          { text: "Il **Calcolatore di Danni** mostra le plage di danni esatte tra qualsiasi attaccante e difensore nel formato Champions. Selezionate due Pokémon, scegliete una mossa e vedete i danni minimi e massimi istantaneamente." },
          { text: "Il calcolatore usa la **formula di danni completa** includendo i Punti Stat, abilità, strumenti tenuti, meteo, terreno, potenziamenti di stats, efficacia di tipo, STAB, riduzione delle mosse ad area e colpi critici. Nulla è approssimato." },
          { text: "I risultati sono **codificati per colore** per una lettura rapida: rosso significa OHKO garantito, arancione significa 2HKO, giallo significa 3HKO, e verde significa che il difensore sopravvive comodamente.", tip: { type: "pro", text: "Usate il calcolatore per trovare benchmark di PS. Per esempio, verificate se investire 12 PS in PS permette al vostro Pokémon di sopravvivere a un attacco specifico. Questi piccoli aggiustamenti di stats fanno vincere vere partite." } },
          { text: "La disposizione a schermo condiviso pone l'**attaccante a sinistra** e il **difensore a destra** con i danni chiaramente visualizzati tra loro. Invertite i ruoli con un semplice clic per verificare il matchup inverso." },
          { text: "Tutti i calcoli usano la **formula ufficiale di danni Gen 9** adattata al sistema di Punti Stat Champions, quindi i numeri corrispondono esattamente a ciò che accade nel motore di simulazione.", tip: { type: "champions", text: "Il Calcolatore di Danni usa lo stesso motore del Simulatore di Battaglia e del Tester di Squadra. I numeri che vedete qui sono identici a ciò che si gioca in una battaglia IA completa." } },
        ],
      },
      {
        title: "Analisi META",
        content: [
          { text: "La **pagina META** è alimentata dai dati di oltre **1.000.000 di battaglie simulate** tra squadre competitive generate casualmente. Ogni Pokémon, mossa, abilità e duo è classificato per tasso di vittoria reale." },
          { text: "La **tabella di classifica Pokémon** mostra il tasso di utilizzo e il tasso di vittoria per ogni Pokémon del roster. Ordinate per tasso di vittoria per trovare i migliori pick, o per utilizzo per vedere cosa è più popolare." },
          { text: "**I Migliori Duoi** rivela le combinazioni di due Pokémon con i migliori tassi di vittoria. Sono coppie con sinergia comprovata su migliaia di battaglie, e costituiscono ottimi punti di partenza per nuove squadre.", tip: { type: "champions", text: "I dati dei Migliori Duoi si aggiornano attraverso le simulazioni. Tornate regolarmente per vedere se sono emerse nuove combinazioni o se la meta ha evoluto in una nuova direzione." } },
          { text: "**L'Analisi degli Archetipi** scompone i tassi di vittoria per stile di squadra: Trick Room, Ventoincoda, Meteo, Equilibrio e Iper Offensiva. Vedete quali grandi strategie performano meglio in questo momento." },
          { text: "**Le Classifiche di Mosse** mostrano quali mosse hanno i migliori tassi di vittoria globali. Questi dati vi aiutano a scegliere tra opzioni simili. Fuocobomba o Vampata è più efficace? I risultati della simulazione vi danno una risposta chiara.", tip: { type: "pro", text: "Individuate le mosse con alti tassi di vittoria ma bassa utilizzo. Sono gemme nascoste che la maggior parte dei giocatori non ha ancora adottato. Usarle prima che la meta le raggiunga vi dà un reale vantaggio." } },
          { text: "Pannelli aggiuntivi coprono la **distribuzione dei tipi**, **i breakdown delle squadre di torneo** e gli **insight di sinergia**. La pagina META è lo strumento più ricco di dati di Champions Lab per capire il panorama competitivo." },
        ],
      },
    ],
  },
];
