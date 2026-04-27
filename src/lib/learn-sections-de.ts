/**
 * German translations for the PokéSchool (Learn) page content.
 * Only subsection titles and content blocks need translation here;
 * section titles are handled via the i18n `learn.sections.*` keys.
 */

export const SECTIONS_DE = [
  {
    id: "intro",
    subsections: [
      {
        title: "Die Videospiel-Meisterschaften",
        content: [
          { text: "**Das VGC (Video Game Championships)** ist das offizielle Pokémon-Wettkampfformat, das von **The Pokémon Company International** organisiert wird. Es nutzt **Doppelkämpfe** — jeder Spieler wählt 4 seiner 6 Pokémon für jedes Match aus." },
          { text: "Die Matches werden auf den echten Pokémon-Videospielen gespielt (aktuell **Pokémon Karmesin & Purpur / Champions**). Die Spieler bauen Teams aus 6 Pokémon, halten sich an die aktuellen Regeln, und kämpfen im **Best-of-3**-Format." },
          { text: "Das VGC hat eine florierende globale Wettkampfszene mit **Regionalmeisterschaften**, **Internationalen Meisterschaften** und jährlichen **Weltmeisterschaften**. Spieler verdienen **Championship Points (CP)**, um sich für die Weltmeisterschaften zu qualifizieren.", tip: { type: "did-you-know", text: "Die VGC-Weltmeisterschaften existieren seit 2009. Der Preispool ist jedes Jahr gestiegen, und die besten Spieler können Stipendien und Geldpreise gewinnen!" } },
        ],
      },
      {
        title: "Doppelkämpfe vs. Einzelkämpfe",
        content: [
          { text: "Im Gegensatz zu Smogon-Einzelkämpfen (6v6, ein Pokémon zur Zeit) ist das VGC ein **Doppel-Format** — zwei Pokémon auf jeder Seite des Felds zu jeder Zeit. Das ändert die Strategie **grundlegend**." },
          { text: "Im Doppelkampf könnt ihr **jedes** gegnerische Pokémon anvisieren, Attacken nutzen, die mehrere Ziele treffen (**Spread-Attacken** wie `Earthquake`, `Heat Wave`), und euren **Partner unterstützen** mit Attacken wie `Follow Me`, `Helping Hand` oder `Tailwind`." },
          { text: "**Positionierung**, **Aktionsreihenfolge** und **das Lesen gegnerischer Entscheidungen** werden noch wichtiger, wenn 4 Pokémon gleichzeitig interagieren.", tip: { type: "pro", text: "Doppelkämpfe drehen sich grundlegend um die Interaktionen von 4 Pokémon auf dem Feld. Denkt daran wie an eine 2v2-Schachpartie — die Position eures Partners ist genauso wichtig wie eure eigene." } },
        ],
      },
      {
        title: "Team-Preview & Auswahl von 4",
        content: [
          { text: "Vor jedem Match sehen beide Spieler die 6 Pokémon des jeweils anderen (**Team Preview**). Anschließend wählt ihr, welche **4 ihr mitbringt**." },
          { text: "Diese **'Auswahl von 4'**-Mechanik ist entscheidend — ihr bringt nicht immer dieselben 4 Pokémon. Je nach gegnerischem Team passt ihr eure Auswahl an, um das **beste Matchup** zu haben.", tip: { type: "champions", text: "In Champions zeigt die Team Preview den Sprite jedes Pokémon, seine Typen und sein Tier-Badge. Nutzt sie, um die gegnerische Strategie schnell zu erkennen und eure Auswahl von 4 zu planen!" } },
          { text: "Ein flexibles Team mit **mehreren 'Modi'** oder guten Pokémon für verschiedene Matchups zu bauen, ist der Schlüssel zum Erfolg." },
        ],
      },
    ],
  },
  {
    id: "teambuilding",
    subsections: [
      {
        title: "Das Puzzle der 6 Pokémon",
        content: [
          { text: "Ein solides VGC-Team ist nicht einfach 6 individuell starke Pokémon — es ist eine **zusammenhängende Einheit**, in der jedes Mitglied eine Rolle hat und die Schwächen der anderen abdeckt." },
          { text: "Beginnt mit der Wahl eines **'Duos'** — 2-3 Pokémon, die gut zusammenarbeiten. Das kann ein Wetter-Setter + -Nutzer sein (`Torkoal + Meganium`), ein Trick-Room-Paar (`Indeedee + Torkoal`), oder ein Speed-Control-Combo (`Whimsicott + Baxcalibur`).", tip: { type: "champions", text: "Schaut euch die Best Duos-Sektion auf der META-Seite an — unsere Simulation von 1 Mio. Kämpfen zeigt, welche Paare die besten Siegraten haben. Gliscor + Archaludon dominiert aktuell mit 71 %!" } },
          { text: "Füllt die restlichen Slots mit Pokémon, die **Bedrohungen kontern**, gegen die euer Duo schwach ist, **alternative Siegbedingungen** bieten und euch **Flexibilität** im Team Preview geben." },
        ],
      },
      {
        title: "Zu deckende Rollen",
        content: [
          { text: "**Speed-Control:** `Tailwind`-Setter (`Whimsicott`, `Talonflame`), `Trick Room`-Setter (`Indeedee`, `Oranguru`), `Icy Wind`-/`Thunder Wave`-Nutzer. **Die Kontrolle darüber, wer zuerst agiert, gewinnt Matches.**" },
          { text: "**Offensive Bedrohungen:** Ihr braucht Pokémon, die hohen Schaden austeilen können. **Mischt physische und spezielle Angreifer**, damit ihr nicht von einer einzigen defensiven Stat blockiert werdet." },
          { text: "**Support & Redirection:** Pokémon wie `Amoonguss` (`Rage Powder`), `Maushold` (`Follow Me`) oder `Whimsicott` (`Foul Play`, `Prankster`) schützen eure Schlüssel-Pokémon.", tip: { type: "pro", text: "Jedes große Team hat mindestens ein 'Klebe'-Pokémon — ein Support, der selbst nicht sweepen kann, aber alles andere zum Laufen bringt. Incineroar mit `Fake Out` + `Intimidate` ist der GOAT dieser Rolle." } },
          { text: "**Defensives Rückgrat:** Mindestens ein widerstandsfähiges Pokémon, das Schläge einsteckt und Nutzen bringt — Nutzer von **Intimidate**, **Burn**-Setter, oder robuste Redirector." },
        ],
      },
      {
        title: "Typ-Synergie & Abdeckung",
        content: [
          { text: "Stellt sicher, dass euer Team **nicht zu anfällig** gegen einen einzelnen Typ ist. Wenn 3+ Pokémon dieselbe Schwäche teilen (z. B. alle schwach gegen Boden), kann ein einziges `Earthquake` euch vernichten.", tip: { type: "warning", text: "Typische Falle: Sich auf Stahl-Typen zu stürzen, weil sie einzeln stark sind. Euer Team bricht zusammen, wenn ein einziges Earthquake oder Heat Wave von einem Feuer-Typ kommt." } },
          { text: "Prüft, dass euer Team **jeden Typ** für mindestens neutralen Schaden treffen kann. Die Abdeckungs-Tabelle des **Champions Lab Team Builders** hilft euch dabei, das zu visualisieren." },
          { text: "Denkt an **Immunitäten** und **Resistenzen**. Ein Pokémon vom Typ **Flug** oder mit **Levitate** ist ideal neben einem `Earthquake`-Nutzer. Ein Typ **Stahl** resistiert 10 Typen!" },
        ],
      },
      {
        title: "Stat-Punkte (SP) in Champions",
        content: [
          { text: "In Champions wird das klassische **EV/IV**-System durch **Stat-Punkte (SP)** ersetzt — ein einfacheres und strategischeres Verteilungssystem.", tip: { type: "champions", text: "Jedes Pokémon erhält 66 Stat-Punkte zur Verteilung, mit einem Maximum von 32 in jeder beliebigen Stat. Jeder Punkt zählt — keine verschwendeten SP!" } },
          { text: "**Häufige Verteilungen:** `32/32/2/0/0/0` (zwei Stats maximiert + etwas Extra), `32/0/2/32/0/0` (offensiv + Defensive), `32/0/32/0/0/2` (reiner Tank). Die restlichen 2 SP sind euer 'Tech'-Investment." },
          { text: "**Speed-Stufen** sind besonders wichtig mit SP. Wisst, ob ihr `32 Speed` braucht, um Schlüssel-Bedrohungen zu outspeeden, oder ob ihr stattdessen in Verteidigung investieren könnt.", tip: { type: "pro", text: "Ein häufiger Fehler ist, Speed immer zu maximieren. Viele Pokémon wie Baxcalibur, Snorlax und Torkoal brauchen keinen Speed — investiert in HP und Angriff/Sp. Angriff für maximalen Impact." } },
        ],
      },
    ],
  },
  {
    id: "types",
    subsections: [
      {
        title: "Die 18 Typen",
        content: [
          { text: "Es gibt **18 Typen** in Pokémon, jeder mit eigenen offensiven und defensiven Interaktionen. **Die Matchup-Kenntnis** ist die Basis des kompetitiven Spiels." },
          { text: "**Wichtige offensive Typen:** Fee (schlägt Drache, Unlicht, Kampf), Boden (schlägt **5 Typen** super effektiv, nur von Käfer und Pflanze resistiert), Eis (schlägt Drache, Boden, Flug, Pflanze)." },
          { text: "**Wichtige defensive Typen:** Stahl (**resistiert 10 Typen!**), Fee (Immunität gegen Drache, resistiert Kampf, Käfer, Unlicht), Wasser (resistiert 4 Typen).", tip: { type: "did-you-know", text: "Der Stahl-Typ ist defensiv so dominant, dass 49 der 159 Pokémon im Champions-Roster eine Stahl-Attaque erlernen können, um ihn zu kontern. Habt immer einen Plan gegen Stahl!" } },
        ],
      },
      {
        title: "Häufige offensive Kombinationen",
        content: [
          { text: "**Eis + Boden:** Wird von nur einer Handvoll Pokémon resistiert (Wasser-/Käfer-Typen). Unglaubliche neutrale Abdeckung — deshalb ist `Garchomp` mit `Earthquake` + Eis-Attacke so dominant." },
          { text: "**Fee + Feuer:** Fee deckt Drache/Unlicht/Kampf, Feuer deckt Stahl/Käfer/Pflanze — zusammen treffen sie **fast alles** zumindest neutral.", tip: { type: "pro", text: "Mega Gardevoir (Fee) + Arcanine (Feuer) ist ein klassisches Beispiel für dieses offensives Duo. Zusammen können sie fast das gesamte Metagame bedrohen!" } },
          { text: "**Geist + Kampf:** Geist ist immun gegen Normal und Kampf, Kampf ist super effektiv gegen Normal und Stahl. Zusammen treffen sie alles zumindest neutral außer Normal/Geist." },
          { text: "**Wasser + Pflanze:** Wasser trifft Feuer/Boden/Gestein, Pflanze deckt Wasser/Boden/Gestein aus einem anderen Blickwinkel. Sehr solide neutrale Abdeckung." },
        ],
      },
      {
        title: "Mega-Evolutions-Strategie",
        content: [
          { text: "**Die Mega-Evolution** verwandelt ein Pokémon im Kampf in eine **stärkere Form**, erhöht seine Stats und ändert manchmal **seinen Typ oder seine Fähigkeit**.", tip: { type: "champions", text: "Champions bietet klassische Megas (Garchomp, Kangaskhan, Metagross) UND exklusive Neuerfindungen (Mega Meganium, Mega Feraligatr, Mega Togekiss). Experimentiert mit ihnen im Team Builder!" } },
          { text: "Jedes Team kann **nur ein einziges Pokémon pro Kampf mega-entwickeln** — wählt weise, welches am meisten vom Kraftschub profitiert." },
          { text: "**Mega-Stiene** belegen den Item-Slot, daher können Mega-Pokémon keine anderen Items wie `Life Orb` oder `Choice Scarf` tragen." },
          { text: "Einige Mega-Evolutionen **ändern ihre Fähigkeit** im Mega-Evolutions-Zug (z. B. erhält `Mega-Kangaskhan` **Parental Bond**). Plant euren ersten Mega-Zug sorgfältig.", tip: { type: "warning", text: "Wenn euer Mega `Intimidate` in seiner Basisform hat (wie Gyarados), entfernt die Mega-Evolution das Intimidate. Manchmal ist es besser, sich im Zug 1 **nicht** zu mega-entwickeln, wenn ihr diesen Intimidate-Zyklus braucht!" } },
        ],
      },
    ],
  },
  {
    id: "strategies",
    subsections: [
      {
        title: "Tailwind-Teams",
        content: [
          { text: "**Tailwind** verdoppelt die Speed eures Teams für **4 Züge**. Es ist die am häufigsten genutzte Speed-Control im VGC, eingesetzt von Pokémon wie `Whimsicott`, `Talonflame`, `Primarina` und `Tornadus`." },
          { text: "**Strategie:** Leitet mit eurem Tailwind-Setter + einem starken Angreifer. Setzt Tailwind **im Zug 1**, dann sweepen mit euren schnellsten Pokémon in den folgenden Zügen.", tip: { type: "pro", text: "Whimsicott ist der beste Tailwind-Setter dank `Prankster` — es gibt Tailwind eine Priorität von +1, sodass es fast immer als Erstes agiert. Paart es mit Baxcalibur für verheerende Doppelangriffe." } },
          { text: "**Counter-Spiel:** Nutzt `Fake Out` auf den Tailwind-Setter, nutzt eure eigene Speed-Control (gegnerischer Tailwind oder Trick Room), oder nutzt **Prioritäts-Attacken**, um den Speed-Boost zu umgehen." },
        ],
      },
      {
        title: "Trick-Room-Teams",
        content: [
          { text: "**Trick Room** kehrt die Speed-Reihenfolge für **5 Züge** um — die **langsamsten Pokémon agieren zuerst**. Das ermöglicht extrem starke, aber langsame Pokémon wie `Torkoal`, `Snorlax` und `Indeedee` zu dominieren.", tip: { type: "champions", text: "Unsere 1-Mio.-Simulation zeigt, dass Trick Room mit Slowbro der Nr.-1-Archetyp mit einer Siegrate von 65,6 % ist! Slowbros unglaubliche Widerstandsfähigkeit macht es fast unmöglich, den Setup zu verhindern." } },
          { text: "**Strategie:** Schützt euren Trick-Room-Setter (oft durch Kombination mit **Follow Me/Rage Powder**), setzt Trick Room auf, dann entfesselt mächtige langsame Angreifer." },
          { text: "**Teamaufbau:** Eure Trick-Room-Sweeper brauchen **minimale Speed** — in Champions bedeutet das `0 SP in Speed`. Jeder verlorene Speed-Punkt zählt unter Trick Room." },
          { text: "**Counter-Spiel:** Besiegt oder nutzt `Taunt` auf den Setter, setzt euren eigenen Trick Room auf, oder bringt schnelle Pokémon, die den Setter bedrohen können, bevor er agiert." },
        ],
      },
      {
        title: "Wetter-Teams",
        content: [
          { text: "**Das Wetter** (Sonne, Regen, Sand, Schnee) verstärkt bestimmte Typen und aktiviert Fähigkeiten wie **Swift Swim**, **Chlorophyll**, **Sand Rush** und **Slush Rush**." },
          { text: "**☀️ Sonne:** Gesetzt durch `Drought` (`Torkoal`). Verstärkt Feuer-Attacken, schwächt Wasser. Aktiviert Chlorophyll. Paart sich mit starken Feuer-Typen und **Sunny Day**-Nutzern." },
          { text: "**🌧️ Regen:** Gesetzt durch `Drizzle` (`Primarina`). Verstärkt Wasser, schwächt Feuer. Aktiviert Swift Swim. Regen-Teams üben Druck mit verstärkten **Spread-Wasser-Attacken** aus.", tip: { type: "did-you-know", text: "Primarina + Kingdra (Swift Swim) war eines der ikonischsten VGC-Duos aller Zeiten. In Champions spielen Primarina + Azumarill oder Primarina eine ähnliche Rolle!" } },
          { text: "**🏜️ Sand:** Gesetzt durch `Sand Stream` (`Tyranitar`, `Hippowdon`). Gewährt **Sp.-Vert.-Boost** für Gestein-Typen, fügt Chip-Schaden zu. Aktiviert Sand-Rush-Sweeper wie `Excadrill`." },
        ],
      },
      {
        title: "Goodstuff / Ausgewogenheit",
        content: [
          { text: "**'Goodstuff'** bedeutet, ein Team aus individuell starken Pokémon zu bauen, die nicht von einem bestimmten Archetyp abhängen. Das Ziel ist **Flexibilität und Konsistenz**." },
          { text: "Diese Teams glänzen im **Team Preview**, weil sie auf alles eine Antwort haben — sie verlieren nicht automatisch gegen ein bestimmtes Matchup.", tip: { type: "champions", text: "Ausgewogenheit ist der Nr.-2-Archetyp in unserer Simulation mit 54,4 % Siegrate. Das ist die zugänglichste Strategie für Anfänger, da sie keine perfekte Ausführung eines einzigen Spielplans erfordert." } },
          { text: "Bindet eine Mischung aus **Speed-Control-Optionen**, **offensivem Druck** und **defensivem Nutzen** ein. Intimidate, Redirection und Prioritäts-Attacken sind unverzichtbar." },
          { text: "Goodstuff-Teams belohnen **solides Spiel** und Anpassungsfähigkeit. Ihr müsst den Gegner **outplayen**, statt euch auf einen einzigen Setup zu verlassen." },
        ],
      },
      {
        title: "Hyper-Offensive",
        content: [
          { text: "**Hyper-Offensive** priorisiert die Zufügung von **maximalem Schaden** so schnell wie möglich. Die Philosophie: *'Wenn ich ihre Pokémon schnell genug besiege, können sie nicht zurückschlagen.'*" },
          { text: "Umfasst typischerweise starke **Tailwind**-Setter oder **Choice Scarf**-Nutzer, mächtige Spread-Attacken (`Heat Wave`, `Rock Slide`, `Dazzling Gleam`), und **Helping Hand**-Support." },
          { text: "**Risiko:** Wenn ihr keine schnellen KOs landet, fehlen euch defensive Werkzeuge zur Erholung. HO-Teams **leben und sterben** vom Momentum zu Spielbeginn.", tip: { type: "warning", text: "Hyper-Offensive ist ein zweischneidiges Schwert. Wenn der Gegner euer Spiel im Zug 1 liest und `Protect` korrekt nutzt, könnt ihr sofort ins Hintertreffen geraten. Habt immer einen Plan-B-Lead." } },
        ],
      },
    ],
  },
  {
    id: "ingame",
    subsections: [
      {
        title: "Lead-Auswahl",
        content: [
          { text: "Die Wahl des richtigen **Leads** (eurer ersten 2 Pokémon) ist entscheidend. Ihr wollt **einen Vorteil etablieren** oder eure Siegbedingung früh aufbauen." },
          { text: "Überlegt: Brauche ich Speed-Control? **Bedrohe ich ihre wahrscheinlichen Leads**? Muss ich ein Schlüssel-Pokémon mit Redirection schützen?" },
          { text: "Habt einen **Standard-Lead** für euer Team, aber bleibt flexibel. Passt euch an das gegnerische Team im **Team Preview** an.", tip: { type: "pro", text: "Notiert eure Standard-Leads und eure 'Anti-Trick-Room'-Leads vor einem Turnier. Einen Plan parat zu haben bedeutet schnellere und selbstbewusstere Entscheidungen unter Druck." } },
        ],
      },
      {
        title: "Protect & Vorhersagen",
        content: [
          { text: "`Protect` ist die **wichtigste Attacke im VGC**. Sie blockiert alle Attacken für einen Zug (mit einigen Ausnahmen wie `Feint`). Fast jedes Pokémon sollte sie haben." },
          { text: "**Nutzt Protect, um:** gegnerische Attacken zu scouten, Trick-Room-/Tailwind-Züge zu verlängern, einen sicheren Wechsel zu ermöglichen, vorhersagbares **Double-Targeting** zu blockieren.", tip: { type: "did-you-know", text: "Bei den Weltmeisterschaften 2023 hatte der Gewinner Protect auf 5 seiner 6 Pokémon. Das einzige ohne war ein Angreifer, der durch `Choice Scarf` festgelegt war. Protect ist WIRKLICH so wichtig!" } },
          { text: "**Den gegnerischen Protect vorherzusagen** ist der Schlüssel, um die Oberhand zu gewinnen. Wenn ihr denkt, dass sie Protect nutzen, setzt eine **Setup-Attacke** ein, wechselt, oder zielt auf ihren Partner." },
        ],
      },
      {
        title: "Wechsel & Positionierung",
        content: [
          { text: "Im Doppelkampf Pokémon zu wechseln ist **riskanter** als im Einzelkampf — ihr seid immer auf dem anderen Slot verwundbar. Aber **gute Wechsel gewinnen Matches**." },
          { text: "Wechselt, um ein Pokémon mit **Typenvorteil** hereinzubringen, um **Intimidate** zu aktivieren, oder um euch für ein besseres **Endgame** zu positionieren.", tip: { type: "pro", text: "Der 'Intimidate-Zyklus' ist eine mächtige Technik — Incineroar/Arcanine rein und raus zu schicken, um den gegnerischen Angriff wiederholt zu senken. Pokémon mit Intimidate sind immer sehr gefragt!" } },
          { text: "Denkt an eure **'2 auf der Bank'** — die Pokémon, die ihr nicht geleadet habt. Plant **wie und wann** sie eintreten. Bewahrt sie für den richtigen Moment auf." },
        ],
      },
      {
        title: "Endgame & Siegbedingungen",
        content: [
          { text: "VGC-Matches werden oft in den **letzten 2-3 Zügen** entschieden. Identifiziert früh eure **Siegbedingung**: Welches eurer Pokémon kann das Match beenden?" },
          { text: "**Häufige Endgame-Szenarien:** ein schneller Sweeper, der geschwächte Pokémon aufräumt, ein widerstandsfähiges Pokémon, das die Uhr herunterspielt, ein Trick Room, der mit 2-3 langsamen Schlägern sweepen kann." },
          { text: "**Bewahrt eure Siegbedingung** während des gesamten Matches. Opfert euren Endgame-Sweeper nicht für geringen Schaden zu Spielbeginn.", tip: { type: "warning", text: "Einer der größten Anfängerfehler: Euer bestes Pokémon früh zu traden für ein KO auf etwas, das nicht zählt. Fragt euch immer 'wer beendet dieses Match?' und haltet es gesund." } },
        ],
      },
    ],
  },
  {
    id: "moves",
    subsections: [
      {
        title: "Unbedingt zu kennende Attacken",
        content: [
          { text: "**`Protect`** — Blockiert alle Attacken für 1 Zug. Die wichtigste Attacke im VGC — auf **fast allem** zu haben." },
          { text: "**`Fake Out`** — Prioritäts-Attacke +3, die paralysiert (nur im ersten Zug). Stört Setups, garantiert Chip-Schaden. Genutzt von `Incineroar`, `Lopunny`, `Mienshao`." },
          { text: "**`Follow Me` / `Rage Powder`** — Leitet Einzelziel-Attacken auf den Nutzer um. Erlaubt euren Schlüssel-Pokémon, sich sicher zu setzen oder anzugreifen." },
          { text: "**`Tailwind`** — Verdoppelt die Speed eures Teams für 4 Züge. Die Haupt-Speed-Control in den meisten Formaten." },
          { text: "**`Trick Room`** — Kehrt die Speed-Reihenfolge für 5 Züge um. Erlaubt starken, langsamen Pokémon zu dominieren." },
          { text: "**`Helping Hand`** — Verstärkt die Attacke eures Partners um **50 %** in diesem Zug. Kostenloser Schadens-Booster ohne Nachteil.", tip: { type: "pro", text: "Helping Hand ist eine der am meisten unterschätzten Attacken im VGC. Diese +50 % können ein 2HKO in ein OHKO verwandeln und das Match komplett zu euren Gunsten drehen. Sie hat auch eine Priorität von +5!" } },
        ],
      },
      {
        title: "Wichtige Trage-Items",
        content: [
          { text: "**`Focus Sash`** — Überlebt jede Attacke mit 1 KP. Essenziell für fragile Setup-Pokémon und Trick-Room-Setter." },
          { text: "**`Choice Scarf`** — Verstärkt Speed um **50 %**, sperrt euch aber auf eine einzige Attacke fest. Erlaubt Pokémon, Bedrohungen zu outspeeden, die sie normalerweise nicht schaffen würden." },
          { text: "**`Assault Vest`** — Verstärkt Sp.-Vert. um **50 %**, verhindert aber Status-Attacken. Ideal für offensive, robuste Pokémon wie `Baxcalibur` und `Goodra`.", tip: { type: "did-you-know", text: "Baxcalibur mit Assault Vest ist eines der beliebtesten Sets in der aktuellen Champions-Meta. Es erlaubt ihm, spezielle Attacken zu überleben, die er normalerweise nicht überstehen würde, und macht ihn zu einem unaufhaltsamen Tank." } },
          { text: "**`Life Orb`** — Verstärkt Schaden um **30 %** auf Kosten von 10 % KP pro Attacke. Für Pokémon, die Kraft brauchen, ohne durch Choice Scarf gesperrt zu sein." },
          { text: "**`Sitrus Berry`** — Stellt **25 % der KP** wieder her, wenn sie unter 50 % fallen. Zuverlässige Langlebigkeit für robuste Pokémon und Supports." },
          { text: "**`Safety Goggles`** — Immunität gegen Wetter-Schaden und Pulver-Attacken (`Spore`, `Sleep Powder`). Schlüssel-Counter gegen Amoonguss." },
        ],
      },
      {
        title: "Spread-Attacken",
        content: [
          { text: "**Spread-Attacken** treffen beide Gegner (und manchmal euren Partner). Im Doppelkampf verursacht eine Attacke, die 2 Pokémon trifft, **75 % ihres normalen Schadens** an jedem." },
          { text: "**Beste Spread-Attacken:** `Earthquake` (Boden, physisch, trifft Gegner UND Partner), `Heat Wave` (Feuer, speziell, nur Gegner), `Rock Slide` (Gestein, physisch, nur Gegner, **Chance zu flinching**), `Dazzling Gleam` (Fee, speziell, nur Gegner).", tip: { type: "champions", text: "Unsere Simulation zeigt Thrash (59,3 % SR), Superpower (59,3 % SR) und Beat Up (58,9 % SR) als Attacken mit der besten Siegrate. Schaut auf die META-Seite für die vollständige Rangliste!" } },
          { text: "Achtet auf **Attacken, die Partner treffen**, wie `Earthquake` und `Surf` — stellt sicher, dass euer Partner resistiert, immun ist, oder ein **Wide Guard**-Nutzer dabei ist." },
        ],
      },
    ],
  },
  {
    id: "tournament",
    subsections: [
      {
        title: "Das Metagame lesen",
        content: [
          { text: "Das **'Meta'** bezeichnet die derzeit populären Strategien, Pokémon und Teamstrukturen. Es **entwickelt sich ständig** durch Innovationen und Gegenstrategien der Spieler." },
          { text: "Schaut euch Turnierergebnisse auf VictoryRoadVGC, die **META-Seite von Champions Lab** und Community-Ressourcen an. Wisst, was populär ist, um euch **darauf vorzubereiten**.", tip: { type: "champions", text: "Unsere META-Seite wird von einer Simulation von 1 Mio. Kämpfen gespeist, die jedes Pokémon, jede Attacke, jede Fähigkeit und jedes Duo nach tatsächlicher Siegrate ordnet. Nutzt sie, um Trends zu erkennen, bevor eure Gegner es tun!" } },
          { text: "Kopiert nicht einfach Top-Teams — versteht **WARUM** sie funktionieren. Welche Matchups gewinnen sie? Was ist ihr Spielplan? Was sind ihre Schwächen?" },
        ],
      },
      {
        title: "Praxis & Ladder",
        content: [
          { text: "Spielt auf **Pokémon Showdown** (Online-Kampfsimulator), um euer Team zu testen, bevor ihr es in ein Turnier bringt. Strebt eine hohe Ladder-Platzierung an, um euer Team zu validieren." },
          { text: "**Trackt eure Matches:** Notiert, gegen was ihr verliert, welche Leads unangenehm sind und welche Pokémon ihr nie mitbringt. Diese Daten helfen euch, euer Team zu **verfeinern**.", tip: { type: "pro", text: "Führt eine einfache Tabelle: gegnerisches Team, eure Leads, Sieg/Niederlage, Notizen. Nach 20+ Matches zeigen sich klare Muster, gegen was euer Team Probleme hat." } },
          { text: "Trainiert **spezifische Matchups** mit Freunden oder in Practice-Gruppen. Training im **Bo3** (Best-of-3) ist essenziell, um turnierbereit zu sein." },
        ],
      },
      {
        title: "Die mentale Stärke",
        content: [
          { text: "VGC-Turniere sind lang — Regionals können **7-9 Runden** dauern. **Mentale Widerstandsfähigkeit** zählt genauso viel wie Teamstärke." },
          { text: "Bleibt **hydratisiert**, esst gut und macht Pausen zwischen den Runden. Ein klarer Kopf trifft bessere Entscheidungen unter Druck." },
          { text: "**Tiltet nicht** nach einer Niederlage. Jeder große Spieler verliert Matches. Konzentriert euch auf die nächste Runde und darauf, was ihr kontrollieren könnt.", tip: { type: "did-you-know", text: "Wolfe Glick, Weltmeister 2016, beendete mehrere Regionals mit 6-3, bevor er die Weltmeisterschaften gewann. Konsistenz und mentale Widerstandsfähigkeit schlagen jedes einzelne Ergebnis." } },
          { text: "Analysiert eure Matches zwischen den Runden, wenn möglich. Habt ihr **schlecht gespielt**, oder hattet ihr **Pech**? Den Unterschied zu kennen, verhindert wiederholte Fehler." },
        ],
      },
      {
        title: "Championship Points & Qualifikation",
        content: [
          { text: "Verdient **Championship Points (CP)** durch gute Platzierungen in sanktionierten Turnieren: lokale Events, Regionals, Internationale Meisterschaften und Special Events." },
          { text: "Ihr braucht einen bestimmten **CP-Schwellenwert**, um euch für die **Weltmeisterschaften** zu qualifizieren. Der Schwellenwert variiert je nach Region und Saison." },
          { text: "Der Weg zu den Weltmeisterschaften ist ein **Marathon, kein Sprint**. Regelmäßige Leistungen über mehrere Events zählen mehr als ein einziger glücklicher Sieg.", tip: { type: "pro", text: "Konzentriert euch darauf, regelmäßig ins Day 2 zu kommen, anstatt alles zu gewinnen. Eine Serie von Top-16-Platzierungen bringt mehr CP als ein glückliches Top-4." } },
        ],
      },
    ],
  },
  {
    id: "advanced",
    subsections: [
      {
        title: "Schadensberechnung",
        content: [
          { text: "Zu wissen, **wie viel Schaden** eure Attacken verursachen, ist entscheidend. Nutzt einen Schadensrechner (wie den im **Champions Lab Engine**) um Benchmarks zu überprüfen." },
          { text: "**'Benchmarks'** sind Schlüsselberechnungen: Kann mein Pokémon einen **OHKO** auf eine gängige Bedrohung landen? Kann es **einer spezifischen Attacke überleben**? Diese Benchmarks leiten eure SP-Verteilung.", tip: { type: "champions", text: "Nutzt unseren Battle Bot, um spezifische Matchups zu testen. Er nutzt die vollständige Schadensformel inkl. Spread-Reduktion, Wetter, Fähigkeiten und Items für präzise Ergebnisse." } },
          { text: "SP-Verteilungen sind nicht nur `32 Angr. / 32 Init.`. Die besten Spieler **'creepen'** — fügen gerade genug Verteidigung hinzu, um Schlüssel-Attacken zu überleben, während sie die offensive Power halten." },
        ],
      },
      {
        title: "Kombinierte Speed-Control",
        content: [
          { text: "Einige Teams nutzen **mehrere Formen** von Speed-Control. Zum Beispiel `Tailwind + Icy Wind`, oder `Trick Room + Thunder Wave`." },
          { text: "Diese Flexibilität erlaubt es, **sich während des Matches anzupassen**. Wenn eure erste Speed-Control blockiert wird, habt ihr eine Ersatzoption." },
          { text: "**Fortgeschrittene Technik:** 'Switch-Trick-Room'-Teams können entweder **schnell ODER langsam** spielen, je nach Matchup.", tip: { type: "pro", text: "Die flexibelsten Teams können unter Tailwind UND unter Trick Room gewinnen. Wenn ihr Snorlax (langsam) und Garchomp (schnell) im selben Team habt, habt ihr beide Modi." } },
        ],
      },
      {
        title: "Slot-Conditioning",
        content: [
          { text: "Der Gegner macht Vorhersagen basierend auf dem, **was er von euch erwartet**. **'Conditioning'** bedeutet, Muster zu etablieren und sie dann zu brechen." },
          { text: "**Beispiel:** Nutzt `Protect` mit Pokémon A zwei Züge lang, sodass der Gegner gewöhnt wird, es zu ignorieren. Im Zug 3 **greift** Pokémon A an, wenn der Gegner es nicht erwartet." },
          { text: "Auf höchstem Niveau ist VGC ein Spiel von **Reads und Counter-Reads**. Die besten Spieler sind **unvorhersehbar** und passen sich an gegnerische Gewohnheiten an.", tip: { type: "did-you-know", text: "Japanische VGC-Spieler sind berühmt für 'hard reads' — gewagte Vorhersagen wie Double-Targeting auf einen vorhergesagten Wechsel. Das ist riskant, aber verheerend effektiv, wenn es klappt." } },
        ],
      },
      {
        title: "Team-Reports analysieren",
        content: [
          { text: "Nach großen Turnieren veröffentlichen die besten Spieler **'Team Reports'** — detaillierte Erklärungen ihres Teams, ihrer Sets und Strategien." },
          { text: "Studiert diese Reports, um **High-Level-Denken** zu verstehen. Achte auf SP-Verteilungen (was sie überleben/KOen), Lead-Entscheidungen und Spielplan-Erklärungen.", tip: { type: "pro", text: "Wenn ihr einen Team Report lest, konzentriert euch auf die 'Matchup-Tabelle' — sie sagt euch, was der Spieler von jedem gängigen Archetyp dachte und wie er vorhatte, ihn zu schlagen." } },
          { text: "Die **META-Seite** von Champions Lab und der **Battle Bot** erlauben es euch, diese Strategien selbst zu testen und zu analysieren." },
        ],
      },
    ],
  },
  {
    id: "tools",
    subsections: [
      {
        title: "Der Pokédex",
        content: [
          { text: "Die Startseite von Champions Lab ist ein **vollständiger, durchsuchbarer Pokédex**, der alle 159 Pokémon des Champions-Rosters zeigt. Durchstöbert das Raster, filtert nach Typ und sucht nach Namen, um jedes Pokémon sofort zu finden." },
          { text: "Klickt auf eine beliebige Karte, um eine **detaillierte Stat-Karte** zu öffnen, die Basis-Stats, Typ, Fähigkeiten und den kompletten Attacken-Pool zeigt. Das ist eure Hauptreferenz für den Teamaufbau.", tip: { type: "pro", text: "Nutzt die Typ-Filter-Buttons oben, um Ergebnisse zu verfeinern. Ihr sucht einen Wasser-Typ, um euer Team zu vervollständigen? Ein Klick zeigt alle Optionen des Rosters." } },
          { text: "Jede Karte zeigt die Gesamt-**Stat-Punkte (SP)**, die Typen und ein qualitativ hochwertiges Sprite. Die Karten sind nach Haupttyp farbcodiert, um das Raster auf einen Blick zu erfassen." },
          { text: "**Mega-Evolutionen** werden neben ihren Basisformen angezeigt. Die Detailkarte enthält vollständige Stat-Vergleiche, um genau zu sehen, wie viel rohe Kraft ein Mega gewinnt." },
        ],
      },
      {
        title: "Der Team-Ersteller",
        content: [
          { text: "Der **Team-Ersteller** ist eure Werkstatt für den Bau von VGC-Wettkampfteams. Fügt bis zu 6 Pokémon hinzu, weist Attacken, Fähigkeiten, Trage-Items zu und verteilt Stat-Punkte mit einem intuitiven Slider." },
          { text: "Die **Abdeckungs-Tabelle** oben in eurem Team aktualisiert sich in Echtzeit. Sie kartiert die offensive Abdeckung und defensive Schwächen eures Teams über alle 18 Typen und hilft euch, gefährliche Lücken vor dem Kampf zu erkennen.", tip: { type: "pro", text: "Schaut genau auf die Abdeckungs-Tabelle. Wenn ein Typ rot ist, ist euer Team dagegen gefährlich verwundbar. Tauscht ein Pokémon aus, das diesen Typ resistiert oder immun ist." } },
          { text: "Ihr wisst nicht, wo ihr anfangen sollt? Ladet eines der **voreingestellten Teams**, die von der Simulations-Engine gebaut wurden. Das sind erprobte Kompositionen leistungsstarker Archetypen, die ihr so nutzen oder anpassen könnt.", tip: { type: "champions", text: "Die 'Vorschläge'-Funktion analysiert euer aktuelles Team in Echtzeit und empfiehlt Pokémon, die Abdeckungslücken schließen. Sie prüft die Typen, gegen die euer Team Mühe hat, und schlägt solide Counter vor." } },
          { text: "**Importiert und exportiert** eure Teams als kompakte, teilbare Codes. Sendet euer Team an Freunde, speichert es für später, oder fügt Teams ein, die ihr online gefunden habt. Das Format ist schnell und einfach zu teilen." },
          { text: "Jeder Pokémon-Slot erlaubt die Wahl aus **allen verfügbaren Attacken und Fähigkeiten** im Champions-Format. Der SP-Slider verteilt eure 66 Gesamtpunkte auf die 6 Stats, mit einem Maximum von 32 in jedem.", tip: { type: "did-you-know", text: "Ihr könnt eure Mega-Evolution direkt im Team-Ersteller wählen. Nur ein Pokémon pro Team kann sich mega-entwickeln — wählt das Mega, das eure Gesamtstrategie am besten unterstützt." } },
        ],
      },
      {
        title: "Der Team-Tester",
        content: [
          { text: "Der **Team-Tester** erlaubt es euch, zwei Teams in einer vollständigen, KI-gesteuerten Simulation gegeneinander antreten zu lassen. Baut oder importiert zwei Teams, definiert die Anzahl der Kämpfe (10 bis 1000) und schaut zu, wie sich die Ergebnisse mit animierten Fortschrittsbalken entfalten." },
          { text: "Die Ergebnisse zeigen die **gesamten Siegraten** für jedes Team mit detaillierten Statistiken. Startet mehr Kämpfe für höhere Zuverlässigkeit der Zahlen.", tip: { type: "pro", text: "Startet mindestens 100 Kämpfe für verlässliche Ergebnisse. Kleine Stichproben (10-20 Kämpfe) können durch zufällige Crits, Misses und Varianzen in Sekundäreffekten irreführend sein." } },
          { text: "Das **Lead-Analyse**-Panel zerlegt die Siegraten für jede mögliche Lead-Kombination. Klickt auf einen beliebigen Lead, um einen **Strategie-Baum** zu enthüllen, der das zugweise Denken der KI für dieses Matchup erklärt." },
          { text: "Durchstöbert einzelne **Kampfszenarien**, um spezifische Matches nachzuspielen. Jedes Szenario zeigt das vollständige Kampf-Log mit genutzten Attacken, verursachtem Schaden, Wetter-Änderungen und KOs in chronologischer Reihenfolge." },
          { text: "Ihr wollt etwas ändern? Der **Team bearbeiten**-Button erlaubt es euch, eines der beiden Teams direkt vom Ergebnisbildschirm aus zu modifizieren und die Simulation neu zu starten, ohne von vorne zu beginnen.", tip: { type: "champions", text: "Nutzt den Team-Tester, um spezifische Matchups zu üben. Ihr fragt euch, ob euer Team den populärsten Meta-Archetyp schlagen kann? Importiert beide Teams, startet 200 Kämpfe und lasst die Daten sprechen." } },
        ],
      },
      {
        title: "Der Battle Bot",
        content: [
          { text: "Der **Battle Bot** startet einen kompletten VGC-Doppelkampf von der Team Preview bis zum finalen KO, komplett KI-gesteuert. Schaut zu, wie der Kampf in Echtzeit mit animierten Sprites, KP-Balken und Attacken-Effekten abläuft." },
          { text: "Jeder Zug wird im **Kampf-Log** mit allen Details festgehalten: Schadenszahlen, Fähigkeiten-Aktivierungen, Wetter- und Feld-Änderungen, Stat-Boosts und Status-Zustände. Nichts bleibt verborgen." },
          { text: "Die KI-Entscheidungs-Engine bewertet **Typ-Matchups, Speed-Stufen, KP-Schwellen und verfügbare Attacken**, um in jedem Zug den besten Zug zu wählen. Sie wägt Wechsel, Protect-Timings, Spread-Attacken und Zielauswahl ab.", tip: { type: "did-you-know", text: "Die Battle Bot KI bewertet jede mögliche Aktionskombination in jedem Zug, inklusive Double Protect, Wechsel und Spread-Attacken. Sie wählt den Zug mit dem höchsten Erwartungswert." } },
          { text: "Nutzt den Battle Bot, um **zu sehen, wie sich euer Team in der Praxis verhält**. Er zeigt, ob euer Spielplan wirklich funktioniert, wenn beide Seiten intelligent spielen." },
          { text: "Das **Replay-System** erlaubt es euch, beendete Kämpfe zugweise durchzugehen. Überprüft kritische Momente, seht, wo das Match kippte, und lernt von den Entscheidungen der KI.", tip: { type: "pro", text: "Nachdem ihr ein neues Team gebaut habt, startet 5-10 Battle Bot-Matches und schaut euch die Replays an. Ihr werdet schnell erkennen, welche Pokémon zu leicht besiegt werden, welche Attacken nie genutzt werden und welche Leads am besten funktionieren." } },
        ],
      },
      {
        title: "Der Schadensrechner",
        content: [
          { text: "Der **Schadensrechner** zeigt exakte Schadensbereiche zwischen beliebigen Angreifern und Verteidigern im Champions-Format. Wählt zwei Pokémon, wählt eine Attacke und seht sofort den minimalen und maximalen Schaden." },
          { text: "Der Rechner nutzt die **vollständige Schadensformel** inklusive Stat-Punkten, Fähigkeiten, Trage-Items, Wetter, Feld, Stat-Boosts, Typ-Effektivität, STAB, Spread-Reduktion und Crits. Nichts ist geschätzt." },
          { text: "Die Ergebnisse sind **farbkodiert** für schnelle Lesbarkeit: Rot bedeutet garantiertes OHKO, Orange bedeutet 2HKO, Gelb bedeutet 3HKO, und Grün bedeutet, dass der Verteidiger komfortabel überlebt.", tip: { type: "pro", text: "Nutzt den Rechner, um SP-Benchmarks zu finden. Prüft zum Beispiel, ob das Investieren von 12 SP in HP erlaubt, dass euer Pokémon einer spezifischen Attacke überlebt. Diese kleinen Stat-Anpassungen gewinnen echte Matches." } },
          { text: "Das geteilte Layout platziert den **Angreifer links** und den **Verteidiger rechts**, mit dem Schaden klar dazwischen angezeigt. Tauscht die Rollen mit einem Klick, um das umgekehrte Matchup zu prüfen." },
          { text: "Alle Berechnungen nutzen die **offizielle Schadensformel aus Gen 9**, angepasst an das Champions-Stat-Punkte-System, daher stimmen die Zahlen exakt mit dem überein, was in der Simulations-Engine passiert.", tip: { type: "champions", text: "Der Schadensrechner nutzt dieselbe Engine wie der Battle Bot und der Team-Tester. Die Zahlen, die ihr hier seht, sind identisch mit denen in einem vollständigen KI-Kampf." } },
        ],
      },
      {
        title: "Die META-Analyse",
        content: [
          { text: "Die **META-Seite** wird von Daten aus über **1 000 000 simulierten Kämpfen** zwischen zufällig generierten Wettkampfteams gespeist. Jedes Pokémon, jede Attacke, jede Fähigkeit und jedes Duo wird nach tatsächlicher Siegrate geordnet." },
          { text: "Die **Pokémon-Rangliste** zeigt Nutzungsrate und Siegrate für jedes Pokémon im Roster. Sortiert nach Siegrate, um die besten Picks zu finden, oder nach Nutzung, um zu sehen, was am populärsten ist." },
          { text: "**Best Duos** enthüllt Kombinationen von zwei Pokémon mit den besten Siegraten. Das sind Paare mit erprobter Synergie über tausende Kämpfe, und sie sind ausgezeichnete Ausgangspunkte für neue Teams.", tip: { type: "champions", text: "Die Best Duos-Daten aktualisieren sich mit den Simulationen. Schaut regelmäßig vorbei, um zu sehen, ob neue Kombinationen aufgetaucht sind oder sich das Meta in eine neue Richtung entwickelt hat." } },
          { text: "**Die Archetyp-Analyse** zerlegt Siegraten nach Teamstil: Trick Room, Tailwind, Wetter, Ausgewogenheit und Hyper-Offensive. Seht, welche großen Strategien aktuell am besten abschneiden." },
          { text: "**Die Attacken-Rangliste** zeigt, welche Attacken die besten gesamten Siegraten haben. Diese Daten helfen euch, zwischen ähnlichen Optionen zu wählen. Pyrobomb oder Heat Wave ist effektiver? Die Simulationsergebnisse geben eine klare Antwort.", tip: { type: "pro", text: "Sucht nach Attacken mit hohen Siegraten aber niedriger Nutzung. Das sind versteckte Schätze, die die meisten Spieler noch nicht übernommen haben. Sie zu nutzen, bevor das Meta sie einholt, gibt euch einen echten Vorteil." } },
          { text: "Zusätzliche Panels decken **Typen-Verteilung**, **Turnier-Team-Breakdowns** und **Synergie-Einblicke** ab. Die META-Seite ist das datenreichste Tool von Champions Lab, um die kompetitive Landschaft zu verstehen." },
        ],
      },
    ],
  },
];
