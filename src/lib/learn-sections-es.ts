/**
 * Traducciones al español del contenido de la página PokéEscuela (Learn).
 * Solo los títulos de subsecciones y los bloques de contenido necesitan traducción aquí;
 * los títulos de sección se gestionan mediante las claves i18n `learn.sections.*`.
 */

export const SECTIONS_ES = [
  {
    id: "intro",
    subsections: [
      {
        title: "Los Campeonatos de Videojuegos",
        content: [
          { text: "**El VGC (Video Game Championships)** es el formato competitivo oficial de Pokémon organizado por **The Pokémon Company International**. Utiliza los **Combates Dobles** — cada jugador selecciona 4 de sus 6 Pokémon para llevar a cada partida." },
          { text: "Los partidos se juegan en los propios videojuegos de Pokémon (actualmente **Pokémon Escarlata y Púrpura / Champions**). Los jugadores construyen equipos de 6, respetando el reglamento vigente, y se enfrentan al **mejor de 3**." },
          { text: "El VGC cuenta con una floreciente escena competitiva mundial con **Campeonatos Regionales**, **Internacionales** y **Campeonatos Mundiales** celebrados cada año. Los jugadores ganan **Puntos de Clasificación (PC)** para clasificarse al Mundial.", tip: { type: "did-you-know", text: "¡Los Campeonatos Mundiales de VGC existen desde 2009. El bote de premios ha aumentado cada año, y los mejores jugadores pueden llevarse becas y premios en metálico!" } },
        ],
      },
      {
        title: "Combates Dobles vs Individuales",
        content: [
          { text: "A diferencia de los Individuales de Smogon (6v6, un Pokémon a la vez), el VGC es un **formato Dobles** — dos Pokémon de cada lado del terreno en todo momento. Esto **cambia fundamentalmente la estrategia**." },
          { text: "En Dobles puedes apuntar a **cualquiera** de los Pokémon rivales, usar movimientos que afectan a varios objetivos (**movimientos de área** como Terremoto u Onda Ígnea), y **apoyar a tu compañero** con movimientos como Señuelo, Ayuda o Viento Afín." },
          { text: "El **posicionamiento**, el **orden de acción** y la **lectura de las decisiones del rival** se vuelven aún más importantes cuando 4 Pokémon interactúan simultáneamente.", tip: { type: "pro", text: "Los Dobles son fundamentalmente una cuestión de interacciones entre 4 Pokémon en el terreno. Piénsalo como una partida de ajedrez 2v2 — la posición de tu compañero cuenta tanto como la tuya." } },
        ],
      },
      {
        title: "Vista Previa del Equipo y Selección de 4",
        content: [
          { text: "Antes de cada partida, ambos jugadores ven los 6 Pokémon de cada equipo (**Team Preview**). Luego eliges cuáles **4 llevar** al combate." },
          { text: "Esta mecánica de **'Selección de 4'** es crucial — no siempre llevas los mismos 4 Pokémon. Según el equipo rival, ajustas tu selección para obtener el **mejor enfrentamiento**.", tip: { type: "champions", text: "En Champions, la Vista Previa muestra el sprite de cada Pokémon, sus tipos y su etiqueta de tier. ¡Úsala para identificar rápidamente la estrategia rival y planificar tu selección de 4!" } },
          { text: "Construir un equipo flexible con **varios 'modos'** o buenos Pokémon para distintos enfrentamientos es la clave del éxito." },
        ],
      },
    ],
  },
  {
    id: "teambuilding",
    subsections: [
      {
        title: "El Rompecabezas de los 6 Pokémon",
        content: [
          { text: "Un equipo VGC sólido no son solo 6 Pokémon individualmente poderosos — es una **unidad cohesionada** donde cada miembro tiene un rol y cubre las debilidades de los demás." },
          { text: "Empieza eligiendo un **'dúo'** — 2 o 3 Pokémon que funcionan bien juntos. Puede ser un ponedor de clima + usuario (`Torkoal + Meganium`), una pareja de Espacio Raro (`Hatterene + Torkoal`), o un combo de control de velocidad (`Whimsicott + Farigiraf`).", tip: { type: "champions", text: "¡Consulta la sección Mejores Dúos de la página META — nuestra simulación de 1M de combates muestra qué parejas tienen los mejores porcentajes de victoria. Gliscor + Archaludon domina actualmente con un 71%!" } },
          { text: "Luego rellena los huecos restantes con Pokémon que **contrarresten las amenazas** a las que tu dúo es débil, aporten **condiciones de victoria alternativas** y te den **flexibilidad** en la Vista Previa." },
        ],
      },
      {
        title: "Roles a Cubrir",
        content: [
          { text: "**Control de Velocidad:** Ponedores de Viento Afín (`Whimsicott`, `Talonflame`), ponedores de Espacio Raro (`Hatterene`, `Oranguru`), usuarios de Viento Hielo/Electrocañón. **Controlar quién actúa primero gana partidas.**" },
          { text: "**Amenazas Ofensivas:** Necesitas Pokémon capaces de infligir daño significativo. **Mezcla atacantes físicos y especiales** para no quedarte bloqueado por una única stat defensiva." },
          { text: "**Apoyo y Redirección:** Pokémon como `Amoonguss` (Polvo Ira), `Clefable` (Señuelo) o `Indeedee` (Rencor, prioridad de Inversión) protegen a tus amenazas clave.", tip: { type: "pro", text: "Todo gran equipo tiene al menos un Pokémon 'pegamento' — un apoyo que no arrasa por sí mismo pero permite que todo lo demás funcione. Incineroar con Finta + Intimidación es el GOAT de este rol." } },
          { text: "**Columna Vertebral Defensiva:** Al menos un Pokémon resistente que aguante golpes y aporte utilidad — usuarios de **Intimidación**, propagadores de **Quemadura** o redirigidores duros." },
        ],
      },
      {
        title: "Sinergia de Tipos y Cobertura",
        content: [
          { text: "Asegúrate de que tu equipo **no sea demasiado vulnerable** a un solo tipo. Si 3 o más Pokémon comparten una debilidad (p. ej., todos débiles a Tierra), un único `Terremoto` puede devastarte.", tip: { type: "warning", text: "Trampa común: cargar de tipos Acero porque son individualmente fuertes. Tu equipo se derrumbará ante un solo Terremoto u Onda Ígnea de un tipo Fuego." } },
          { text: "Verifica que tu equipo pueda golpear **cada tipo** por al menos daño neutro. La tabla de cobertura del **creador de equipos de Champions Lab** te ayuda a visualizarlo." },
          { text: "Piensa en las **inmunidades** y **resistencias**. Un Pokémon de tipo **Volador** o con **Levitación** es ideal junto a un usuario de Terremoto. Un tipo **Acero** resiste ¡10 tipos!" },
        ],
      },
      {
        title: "Puntos de Estadísticas (PS) en Champions",
        content: [
          { text: "En Champions, el sistema clásico **EV/IV** se reemplaza por los **Puntos de Estadísticas (PS)** — un sistema de asignación más simple y estratégico.", tip: { type: "champions", text: "¡Cada Pokémon recibe 66 Puntos de Estadísticas para distribuir, con un máximo de 32 en cualquier stat. Cada punto cuenta — sin PS desperdiciados!" } },
          { text: "**Repartos comunes:** `32/32/2/0/0/0` (dos stats al máximo + un poco extra), `32/0/2/32/0/0` (ofensivo + dureza), `32/0/32/0/0/2` (tanque puro). Los 2 PS restantes son tu inversión 'tech'." },
          { text: "**Los umbrales de velocidad** son especialmente importantes con los PS. Ten claro si necesitas `32 en Velocidad` para superar amenazas clave, o si puedes invertir en otro lado para ganar resistencia.", tip: { type: "pro", text: "Un error común es siempre maximizar la Velocidad. Muchos Pokémon como Farigiraf, Snorlax y Torkoal no necesitan Velocidad — invierte en PS y Ataque/At. Esp. para el máximo impacto." } },
        ],
      },
    ],
  },
  {
    id: "types",
    subsections: [
      {
        title: "Los 18 Tipos",
        content: [
          { text: "Existen **18 tipos** en Pokémon, cada uno con sus propias interacciones ofensivas y defensivas. **Dominar los enfrentamientos de tipos** es la base del juego competitivo." },
          { text: "**Tipos ofensivos clave:** Hada (supera a Dragón, Siniestro, Lucha), Tierra (supera a **5 tipos** por super efectivo, solo resistido por Bicho y Planta), Hielo (supera a Dragón, Tierra, Volador, Planta)." },
          { text: "**Tipos defensivos clave:** Acero (**¡resiste 10 tipos!**), Hada (inmune a Dragón, resiste Lucha, Bicho, Siniestro), Agua (resiste 4 tipos).", tip: { type: "did-you-know", text: "El tipo Acero es tan dominante defensivamente que 49 de los 159 Pokémon del roster de Champions pueden aprender un movimiento Acero para contrarrestarlo. ¡Ten siempre un plan contra el Acero!" } },
        ],
      },
      {
        title: "Combinaciones Ofensivas Comunes",
        content: [
          { text: "**Hielo + Tierra:** Resistido por solo un puñado de Pokémon (tipos Agua/Bicho). Cobertura neutra increíble — por eso `Garchomp` con Terremoto + movimiento Hielo es tan dominante." },
          { text: "**Hada + Fuego:** El Hada gestiona Dragón/Siniestro/Lucha, el Fuego gestiona Acero/Bicho/Planta — golpeando **casi todo** de forma neutra.", tip: { type: "pro", text: "Mega-Gardevoir (Hada) + Arcanine (Fuego) es un ejemplo clásico de este dúo ofensivo. ¡Juntos pueden amenazar a casi todo el metajuego!" } },
          { text: "**Fantasma + Lucha:** El Fantasma es inmune a Normal y Lucha, el Lucha es super efectivo contra Normal y Acero. Juntos golpean todo de forma al menos neutra excepto los tipos Normal/Fantasma." },
          { text: "**Agua + Planta:** El Agua golpea Fuego/Tierra/Roca, la Planta gestiona Agua/Tierra/Roca desde un ángulo distinto. Cobertura neutra muy sólida." },
        ],
      },
      {
        title: "Estrategia de Mega-Evolución",
        content: [
          { text: "**La Mega-Evolución** transforma a un Pokémon en una **forma más poderosa** en pleno combate, aumentando sus stats y a veces **cambiando su tipo o su habilidad**.", tip: { type: "champions", text: "Champions ofrece las Megas clásicas (Garchomp, Kangaskhan, Metagross) Y exclusivas inéditas (Mega-Meganium, Mega-Feraligatr, Mega-Tatsugiri). ¡Experiméntalas en el Creador de Equipos!" } },
          { text: "Cada equipo solo puede **Mega-Evolucionar a un Pokémon** por combate — elige sabiamente cuál aprovecha más el aumento de poder." },
          { text: "Las **Megapiedras** ocupan el hueco de objeto, por lo que los Pokémon Mega no pueden llevar otros objetos como la Vidasfera o el Pañuelo Elegido." },
          { text: "Algunas Mega-Evoluciones **cambian de habilidad** durante el turno de Mega-Evolución (p. ej., `Mega-Kangaskhan` adquiere **Amor Filial**). Planifica con cuidado tu primer turno de Mega.", tip: { type: "warning", text: "¡Si tu Mega usa Intimidación en su forma base (como Gyarados), la Mega-Evolución elimina la Intimidación. A veces es mejor NO Mega-evolucionar en el turno 1 si necesitas ese ciclo de Intimidación!" } },
        ],
      },
    ],
  },
  {
    id: "strategies",
    subsections: [
      {
        title: "Equipos de Viento Afín",
        content: [
          { text: "**Viento Afín** duplica la Velocidad de tu equipo durante **4 turnos**. Es el control de velocidad más común en VGC, utilizado por Pokémon como `Whimsicott`, `Talonflame`, `Pelipper` y `Tornadus`." },
          { text: "**Estrategia:** Abre con tu ponedor de Viento Afín + un atacante potente. Pon el Viento Afín **en el turno 1**, luego arrasa con tus Pokémon más rápidos en los turnos siguientes.", tip: { type: "pro", text: "Whimsicott es el mejor ponedor de Viento Afín gracias a Bromista — le da prioridad +1 al Viento Afín, lo que hace que casi siempre vaya primero. Combínalo con Farigiraf para dobles ataques devastadores." } },
          { text: "**Contrajuego:** Usa Finta sobre el ponedor de Viento Afín, emplea tu propio control de velocidad (Viento Afín rival o Espacio Raro), o usa **movimientos prioritarios** para saltarte el aumento de velocidad." },
        ],
      },
      {
        title: "Equipos de Espacio Raro",
        content: [
          { text: "**Espacio Raro** invierte el orden de velocidad durante **5 turnos** — los **Pokémon más lentos actúan primero**. Esto permite que Pokémon extremadamente poderosos pero lentos como `Torkoal`, `Snorlax` y `Hatterene` dominen.", tip: { type: "champions", text: "¡Nuestra simulación de 1M muestra que Espacio Raro con Slowbro es el arquetipo n.º1 con un 65,6% de victorias! La increíble dureza de Slowbro lo hace casi imposible de impedir que prepare." } },
          { text: "**Estrategia:** Protege a tu ponedor de Espacio Raro (a menudo combinándolo con **Señuelo/Polvo Ira**), pon el Espacio Raro y luego desata atacantes lentos y poderosos." },
          { text: "**Construcción:** Tus barredores de Espacio Raro deben tener una **Velocidad mínima** — en Champions, eso significa `0 PS en Velocidad`. Cada punto de Velocidad perdido cuenta bajo Espacio Raro." },
          { text: "**Contrajuego:** Noquea o usa **Mofa** al ponedor, usa Otra Vez junto con Espacio Raro en tu propio Pokémon, o lleva Pokémon rápidos que puedan amenazar al ponedor antes de que actúe." },
        ],
      },
      {
        title: "Equipos de Clima",
        content: [
          { text: "**El clima** (Sol, Lluvia, Arena, Nieve) potencia ciertos tipos y activa habilidades como **Nado Rápido**, **Clorofila**, **Ímpetu Arena** y **Quitanieves**." },
          { text: "**☀️ Sol:** Puesto por `Sequía` (`Torkoal`). Potencia los movimientos Fuego, debilita los de Agua. Activa Clorofila. Se combina con tipos Fuego potentes y usuarios de **Rayo Solar**." },
          { text: "**🌧️ Lluvia:** Puesta por `Llovizna` (`Pelipper`). Potencia el Agua, debilita el Fuego. Activa Nado Rápido. Los equipos de Lluvia ejercen presión con **movimientos de área de Agua** potenciados.", tip: { type: "did-you-know", text: "¡Pelipper + Kingdra (Nado Rápido) fue uno de los dúos VGC más icónicos de todos los tiempos. En Champions, Pelipper + Azumarill o Primarina desempeña un papel similar!" } },
          { text: "**🏜️ Arena:** Puesta por `Chorro Arena` (`Tyranitar`, `Hippowdon`). Otorga un **aumento de Def. Esp.** a los tipos Roca, inflige daño residual. Activa barredores de Ímpetu Arena como `Excadrill`." },
        ],
      },
      {
        title: "Goodstuff / Equilibrio",
        content: [
          { text: "**'Goodstuff'** significa construir un equipo de Pokémon individualmente fuertes que no dependen de un arquetipo específico. El objetivo es la **flexibilidad y la regularidad**." },
          { text: "Estos equipos sobresalen en la **Vista Previa** porque tienen respuesta para todo — no pierden automáticamente ante ningún enfrentamiento.", tip: { type: "champions", text: "El Equilibrio es el arquetipo n.º2 en nuestra simulación con un 54,4% de victorias. Es la estrategia más accesible para principiantes porque no requiere la ejecución perfecta de un único plan de juego." } },
          { text: "Incluye una mezcla de **opciones de control de velocidad**, **presión ofensiva** y **utilidad defensiva**. La Intimidación, la redirección y los movimientos prioritarios son imprescindibles." },
          { text: "Los equipos Goodstuff recompensan el **buen juego durante la partida** y la adaptación. Debes **superar al rival** en lugar de apoyarte en una única preparación." },
        ],
      },
      {
        title: "Hiper Ofensiva",
        content: [
          { text: "**La Hiper Ofensiva** prioriza infligir el **máximo daño** lo más rápido posible. La filosofía: *'Si noqueo a sus Pokémon lo bastante rápido, no pueden responder.'*" },
          { text: "Suele incluir potentes ponedores de **Viento Afín** o usuarios de **Pañuelo Elegido**, movimientos de área potentes (`Onda Ígnea`, `Avalancha`, `Brillo Mágico`) y apoyo de **Ayuda**." },
          { text: "**Riesgo:** Si no consigues KO rápidos, te quedarás sin herramientas defensivas para recuperarte. Los equipos HO **viven y mueren** por su inercia en el inicio de la partida.", tip: { type: "warning", text: "La Hiper Ofensiva es un arma de doble filo. Si el rival lee tu jugada del turno 1 y usa Protección correctamente, puedes quedarte inmediatamente atrás. Ten siempre un Plan B de apertura." } },
        ],
      },
    ],
  },
  {
    id: "ingame",
    subsections: [
      {
        title: "Selección de Apertura",
        content: [
          { text: "Elegir la **apertura** correcta (tus 2 primeros Pokémon) es crucial. Quieres **establecer una ventaja** o montar tu condición de victoria pronto." },
          { text: "Considera: ¿Necesito control de velocidad? ¿**Amenazo sus aperturas probables**? ¿Debo proteger a un Pokémon clave con redirección?" },
          { text: "Ten una **apertura por defecto** para tu equipo, pero mantente flexible. Adáptate al equipo rival en la **Vista Previa**.", tip: { type: "pro", text: "Anota tus aperturas por defecto y tus aperturas 'anti-Espacio Raro' antes de un torneo. Tener un plan listo significa decisiones más rápidas y seguras bajo presión." } },
        ],
      },
      {
        title: "Protección y Predicciones",
        content: [
          { text: "`Protección` es el **movimiento más importante del VGC**. Bloquea todos los movimientos durante un turno (con algunas excepciones como `Amago`). Casi todos los Pokémon deberían tenerlo." },
          { text: "**Usa Protección para:** explorar movimientos rivales, hacer durar los turnos de Espacio Raro/Viento Afín, asegurar un cambio seguro, bloquear un **doble objetivo** predecible.", tip: { type: "did-you-know", text: "¡En los Campeonatos Mundiales de 2023, el ganador tenía Protección en 5 de sus 6 Pokémon. El único sin ella era un atacante bloqueado por el Pañuelo Elegido. Protección es REALMENTE así de importante!" } },
          { text: "**Predecir la Protección rival** es clave para sacar ventaja. Si crees que van a usar Protección, emplea un **movimiento de preparación**, cambia, o apunta a su compañero." },
        ],
      },
      {
        title: "Cambios y Posicionamiento",
        content: [
          { text: "Cambiar de Pokémon en Dobles es **más arriesgado** que en Individuales — siempre estás vulnerable en el otro hueco. Pero **los buenos cambios ganan partidas**." },
          { text: "Cambia para traer un Pokémon con **ventaja de tipo**, para activar la **Intimidación**, o para posicionarte para un mejor **final de partida**.", tip: { type: "pro", text: "El 'ciclo de Intimidación' es una técnica potente — meter y sacar a Incineroar/Arcanine para bajar repetidamente el Ataque rival. ¡Los Pokémon con Intimidación siempre están muy demandados!" } },
          { text: "Piensa en tus **'2 del fondo'** — los Pokémon que no has abierto. Planifica **cómo y cuándo** entran. Guárdalos para el momento adecuado." },
        ],
      },
      {
        title: "Final de Partida y Condiciones de Victoria",
        content: [
          { text: "Las partidas de VGC se deciden a menudo en los **últimos 2 o 3 turnos**. Identifica pronto tu **condición de victoria**: ¿cuál de tus Pokémon puede concluir la partida?" },
          { text: "**Escenarios comunes de final de partida:** un barredor rápido que limpia a los Pokémon debilitados, un Pokémon resistente que estira el reloj, un Espacio Raro que arrasa con 2-3 pegadores lentos." },
          { text: "**Preserva tu condición de victoria** durante toda la partida. No sacrifiques a tu barredor de final de partida por un daño menor al principio.", tip: { type: "warning", text: "Uno de los mayores errores de principiante: intercambiar a tu mejor Pokémon pronto por un KO sobre algo que no importa. Pregúntate siempre '¿quién cierra esta partida?' y mantenlo sano." } },
        ],
      },
    ],
  },
  {
    id: "moves",
    subsections: [
      {
        title: "Movimientos que Debes Conocer Sí o Sí",
        content: [
          { text: "**`Protección`** — Bloquea todos los ataques durante 1 turno. El movimiento más importante del VGC — para llevar en **casi todo**." },
          { text: "**`Finta`** — Movimiento prioritario +3 que retrocede (solo primer turno). Interrumpe preparaciones, garantiza daño residual. Usado por `Incineroar`, `Lopunny`, `Mienshao`." },
          { text: "**`Señuelo` / `Polvo Ira`** — Redirige los movimientos de objetivo único hacia el usuario. Permite a tus Pokémon clave prepararse o atacar con seguridad." },
          { text: "**`Viento Afín`** — Duplica la Velocidad de tu equipo durante 4 turnos. El principal movimiento de control de velocidad en la mayoría de formatos." },
          { text: "**`Espacio Raro`** — Invierte el orden de velocidad durante 5 turnos. Permite a los poderosos pero lentos dominar." },
          { text: "**`Ayuda`** — Aumenta el ataque de tu compañero en un **50%** ese turno. Amplificador de daño gratuito sin contrapartida.", tip: { type: "pro", text: "¡Ayuda es uno de los movimientos más infravalorados del VGC. Ese +50% puede transformar un 2HKO en un OHKO, dando la vuelta por completo a la partida a tu favor. Además tiene prioridad +5!" } },
        ],
      },
      {
        title: "Objetos Equipados Clave",
        content: [
          { text: "**Banda Focus** — Sobrevive a cualquier ataque con 1 PS. Esencial en Pokémon frágiles de preparación y ponedores de Espacio Raro." },
          { text: "**Pañuelo Elegido** — Aumenta la Velocidad un **50%** pero te bloquea en un único movimiento. Permite a Pokémon superar amenazas que normalmente no podrían adelantar." },
          { text: "**Chaleco Asalto** — Aumenta la Def. Esp. un **50%** pero impide los movimientos de estado. Ideal en Pokémon ofensivos resistentes como `Farigiraf` y `Goodra`.", tip: { type: "did-you-know", text: "Farigiraf con Chaleco Asalto es uno de los sets más populares en el meta actual de Champions. Le permite sobrevivir a ataques especiales que normalmente no aguantaría, convirtiéndolo en un tanque imparable." } },
          { text: "**Vidasfera** — Aumenta el daño un **30%** a costa de un 10% de PS por ataque. Para Pokémon que necesitan potencia sin quedar bloqueados por el Pañuelo." },
          { text: "**Baya Zidra** — Restaura el **25% de PS** cuando se baja del 50%. Longevidad fiable para Pokémon resistentes y apoyos." },
          { text: "**Gafas Protectoras** — Inmunidad al daño por clima y a los movimientos de polvo (`Espora`, `Somnífero`). Contramedida clave contra Amoonguss." },
        ],
      },
      {
        title: "Movimientos de Área",
        content: [
          { text: "**Los movimientos de área** golpean a ambos rivales (y a veces a tu compañero). En Dobles, un movimiento que golpea a 2 Pokémon inflige el **75% de su daño normal** a cada uno." },
          { text: "**Mejores movimientos de área:** `Terremoto` (Tierra, físico, golpea a rivales Y a compañero), `Onda Ígnea` (Fuego, especial, solo rivales), `Avalancha` (Roca, físico, solo rivales, **posibilidad de retroceso**), `Brillo Mágico` (Hada, especial, solo rivales).", tip: { type: "champions", text: "¡Nuestra simulación muestra a Premio Gordo (59,3% vict.), Fuerza Equina (59,3% vict.) y Paliza (58,9% vict.) como los movimientos con mejor porcentaje de victoria. Consulta la página META para el ranking completo!" } },
          { text: "Cuidado con los **movimientos que golpean a aliados** como `Terremoto` y `Surf` — asegúrate de que tu compañero resiste, es inmune, o hay un usuario de **Vasta Guardia** presente." },
        ],
      },
    ],
  },
  {
    id: "tournament",
    subsections: [
      {
        title: "Leer el Metajuego",
        content: [
          { text: "El **'meta'** designa las estrategias, Pokémon y estructuras de equipo populares que se utilizan actualmente. **Evoluciona constantemente** a medida que los jugadores innovan y aparecen contraestrategias." },
          { text: "Consulta los resultados de torneos en VictoryRoadVGC, **la página META de Champions Lab** y los recursos comunitarios. Conoce lo que es popular para **prepararte para ello**.", tip: { type: "champions", text: "¡Nuestra página META se alimenta de una simulación de 1M de combates que clasifica cada Pokémon, movimiento, dúo y arquetipo por porcentaje real de victoria. Úsala para detectar tendencias antes que tus rivales!" } },
          { text: "No te limites a copiar los equipos top — entiende **POR QUÉ** funcionan. ¿Qué enfrentamientos ganan? ¿Cuál es su plan de juego? ¿Cuáles son sus debilidades?" },
        ],
      },
      {
        title: "Práctica y Ladder",
        content: [
          { text: "Juega en **Pokémon Showdown** (simulador de combate online) para probar tu equipo antes de llevarlo a un torneo. Apunta a una clasificación alta para validarlo." },
          { text: "**Lleva un seguimiento de tus partidas:** anota contra qué pierdes, qué aperturas te incomodan y qué Pokémon nunca llevas. Esos datos te ayudan a **afinar** tu equipo.", tip: { type: "pro", text: "Lleva una hoja de cálculo sencilla: equipo rival, tus aperturas, victoria/derrota, notas. Tras más de 20 partidas, emergen patrones claros sobre contra qué sufre tu equipo." } },
          { text: "Entrénate en **enfrentamientos específicos** con amigos o en grupos de práctica. El entrenamiento al **mejor de 3 (Bo3)** es esencial para estar listo en torneos." },
        ],
      },
      {
        title: "La Mentalidad",
        content: [
          { text: "Los torneos de VGC son largos — los Regionales pueden durar **7-9 rondas**. La **resistencia mental** cuenta tanto como la fuerza del equipo." },
          { text: "Mantente **hidratado**, come bien y haz descansos entre rondas. Una mente clara toma mejores decisiones bajo presión." },
          { text: "**No te tiltes** tras una derrota. Todo gran jugador pierde partidas. Concéntrate en la siguiente ronda y en lo que puedes controlar.", tip: { type: "did-you-know", text: "Wolfe Glick, Campeón del Mundo 2016, terminó 6-3 en varios Regionales antes de ganar el Mundial. La regularidad y la resiliencia mental superan cualquier resultado individual." } },
          { text: "Analiza tus partidas entre rondas si es posible. ¿**Jugaste mal** o tuviste **mala suerte**? Saber distinguirlo evita repetir errores." },
        ],
      },
      {
        title: "Puntos de Clasificación y Clasificación",
        content: [
          { text: "Gana **Puntos de Clasificación (PC)** obteniendo buenos resultados en torneos oficiales: eventos locales, Regionales, Internacionales y Eventos Especiales." },
          { text: "Necesitas un determinado **umbral de PC** para clasificarte al **Campeonato Mundial**. El umbral varía según la región y la temporada." },
          { text: "El camino al Mundial es una **maratón, no un sprint**. Rendimientos regulares en varios eventos cuentan más que una única victoria afortunada.", tip: { type: "pro", text: "Céntrate en entrar al Día 2 con regularidad antes que en ganarlo todo. Una serie de Top 16 da más PC que un Top 4 afortunado." } },
        ],
      },
    ],
  },
  {
    id: "advanced",
    subsections: [
      {
        title: "Cálculo de Daño",
        content: [
          { text: "Saber **cuánto daño** infligen tus ataques es crucial. Usa una calculadora de daño (como la integrada en el **motor de Champions Lab**) para comprobar los benchmarks." },
          { text: "Los **'benchmarks'** son cálculos clave: ¿Puede mi Pokémon **hacer OHKO** a una amenaza común? ¿Puede **sobrevivir** a un ataque específico? Estos benchmarks guían tu reparto de PS.", tip: { type: "champions", text: "Usa nuestro Battle Bot para probar enfrentamientos específicos. Utiliza la fórmula de daño completa incluyendo reducción de área, clima, habilidades y objetos para resultados precisos." } },
          { text: "Los repartos de PS no son solo `32 At / 32 Vel`. Los mejores jugadores hacen **'creep'** — añaden justo la resistencia necesaria para sobrevivir a ataques clave manteniendo la potencia ofensiva." },
        ],
      },
      {
        title: "Apilar Control de Velocidad",
        content: [
          { text: "Algunos equipos usan **varias formas** de control de velocidad. Por ejemplo, `Viento Afín + Viento Hielo`, o `Espacio Raro + Onda Trueno`." },
          { text: "Esta flexibilidad permite **adaptarse en plena partida**. Si tu primer control de velocidad es bloqueado, tienes uno de repuesto." },
          { text: "**Técnica avanzada:** Los equipos con 'palanca de Espacio Raro' pueden jugar a **velocidad rápida O lenta**, eligiendo según el enfrentamiento.", tip: { type: "pro", text: "Los equipos más flexibles pueden ganar tanto con Viento Afín como con Espacio Raro. Tener a Snorlax (lento) y Garchomp (rápido) en el mismo equipo te da ambos modos." } },
        ],
      },
      {
        title: "Condicionamiento de Hueco",
        content: [
          { text: "El rival hace predicciones basadas en lo que **espera de ti**. El **'condicionamiento'** consiste en establecer patrones y luego romperlos." },
          { text: "**Ejemplo:** Usa Protección con el Pokémon A durante dos turnos, condicionando al rival a ignorarlo. En el turno 3, **ataca** con el Pokémon A cuando no lo espera." },
          { text: "Al más alto nivel, el VGC es un juego de **lecturas y contra-lecturas**. Los mejores jugadores son **impredecibles** y se adaptan a los hábitos rivales.", tip: { type: "did-you-know", text: "Los jugadores japoneses de VGC son famosos por sus 'hard reads' — predicciones audaces como el doble objetivo sobre un cambio anticipado. Es arriesgado pero devastadoramente eficaz cuando funciona." } },
        ],
      },
      {
        title: "Análisis de Team Reports",
        content: [
          { text: "Tras los grandes torneos, los mejores jugadores publican **'team reports'** — explicaciones detalladas de su equipo, sus sets y sus estrategias." },
          { text: "Estudia estos reports para entender el **pensamiento de alto nivel**. Presta atención a los repartos de PS (qué sobreviven / qué noquean), las elecciones de apertura y las explicaciones de plan de juego.", tip: { type: "pro", text: "Al leer un team report, céntrate en la sección 'tabla de enfrentamientos' — te dice qué pensaba el jugador de cada arquetipo común y cómo planeaba derrotarlo." } },
          { text: "La **página META** de Champions Lab y el **Battle Bot** te permiten probar y analizar estas estrategias por ti mismo." },
        ],
      },
    ],
  },
  {
    id: "tools",
    subsections: [
      {
        title: "La Pokédex",
        content: [
          { text: "La página de inicio de Champions Lab es una **Pokédex completa y buscable** que presenta los 159 Pokémon del roster de Champions. Recorre la cuadrícula, filtra por tipo y busca por nombre para encontrar cualquier Pokémon al instante." },
          { text: "Haz clic en cualquier tarjeta para abrir una **ficha de estadísticas detallada** que muestra las stats base, el tipo, las habilidades y el repertorio completo de movimientos. Es tu referencia principal para construir un equipo.", tip: { type: "pro", text: "Usa los botones de filtro de tipo de la parte superior para afinar los resultados. ¿Buscas un tipo Agua para completar tu equipo? Un solo clic muestra todas las opciones del roster." } },
          { text: "Cada tarjeta muestra los totales de **Puntos de Estadísticas (PS)**, los tipos y un sprite animado de calidad. Las tarjetas están coloreadas por tipo principal para escanear visualmente el roster de un vistazo." },
          { text: "Las **Mega-Evoluciones** se muestran junto a sus formas base. La ficha detallada incluye comparativas completas de stats para ver exactamente cuánta potencia bruta gana una Mega." },
        ],
      },
      {
        title: "Creador de Equipos",
        content: [
          { text: "El **Creador de Equipos** es tu taller para crear equipos competitivos de VGC. Añade hasta 6 Pokémon, asigna movimientos, habilidades y objetos equipados, y distribuye los Puntos de Estadísticas con un slider intuitivo." },
          { text: "La **tabla de cobertura** en la parte superior de tu equipo se actualiza en tiempo real. Mapea la cobertura ofensiva y las debilidades defensivas de tu equipo sobre los 18 tipos, ayudándote a detectar lagunas peligrosas antes de combatir.", tip: { type: "pro", text: "Mira atentamente la tabla de cobertura. Si un tipo aparece en rojo, tu equipo es peligrosamente vulnerable a él. Cambia un Pokémon por uno que resista o sea inmune a ese tipo." } },
          { text: "¿No sabes por dónde empezar? Carga uno de los **equipos predefinidos** construidos por el motor de simulación. Son composiciones probadas de arquetipos de alto rendimiento que puedes usar tal cual o personalizar.", tip: { type: "champions", text: "La función 'Sugerencias' analiza tu equipo actual en tiempo real y recomienda Pokémon que cubren las lagunas de cobertura. Comprueba los tipos contra los que tu equipo sufre y sugiere contras sólidas." } },
          { text: "**Importa y exporta** tus equipos como códigos compactos para compartir. Envía tu equipo a amigos, guárdalo para más tarde, o pega equipos encontrados en la red. El formato es rápido y fácil de compartir." },
          { text: "Cada hueco de Pokémon te permite elegir entre **todos los movimientos y habilidades** disponibles en el formato Champions. El slider de PS reparte tus 66 puntos totales entre las 6 stats, con un máximo de 32 en cada una.", tip: { type: "did-you-know", text: "Puedes elegir tu Mega-Evolución directamente en el Creador de Equipos. Solo un Pokémon por equipo puede Mega-Evolucionar — escoge la Mega que mejor respalde tu estrategia global." } },
        ],
      },
      {
        title: "Probador de Equipos",
        content: [
          { text: "El **Probador de Equipos** te permite enfrentar dos equipos en una simulación completa dirigida por IA. Construye o importa dos equipos, define el número de combates (de 10 a 1000) y observa los resultados desplegarse con barras de progreso animadas." },
          { text: "Los resultados muestran los **porcentajes globales de victoria** de cada equipo con estadísticas detalladas. Lanza más combates para mayor confianza en los números.", tip: { type: "pro", text: "Lanza al menos 100 combates para obtener resultados fiables. Las muestras pequeñas (10 a 20 combates) pueden ser engañosas por críticos aleatorios, fallos y variancias de efectos secundarios." } },
          { text: "El panel de **Análisis de Apertura** desglosa los porcentajes de victoria para cada combinación de apertura posible. Haz clic en cualquier apertura para revelar un **árbol de estrategia** que explica el razonamiento turno a turno de la IA para ese enfrentamiento." },
          { text: "Recorre los **escenarios de combate** individuales para reproducir partidas específicas. Cada escenario muestra el log completo de combate con los movimientos usados, el daño infligido, los cambios de clima y los KO en orden cronológico." },
          { text: "¿Quieres modificar algo? El botón **Editar Equipo** te permite modificar cualquiera de los dos equipos directamente desde la pantalla de resultados y relanzar la simulación sin empezar de cero.", tip: { type: "champions", text: "Usa el Probador de Equipos para practicar enfrentamientos específicos. ¿Te preguntas si tu equipo puede con el arquetipo meta más popular? Importa ambos equipos, lanza 200 combates y deja que los datos hablen." } },
        ],
      },
      {
        title: "Battle Bot",
        content: [
          { text: "El **Battle Bot** lanza un combate VGC en dobles completo desde la Vista Previa hasta el KO final, completamente controlado por IA. Observa el combate desarrollarse en tiempo real con sprites animados, barras de PS y efectos de movimientos." },
          { text: "Cada turno se registra en el **diario de combate** con todos los detalles: cifras de daño, activaciones de habilidades, cambios de clima y terreno, aumentos de stats y estados alterados. Nada se oculta." },
          { text: "El motor de decisión de la IA evalúa los **enfrentamientos de tipos, umbrales de velocidad, umbrales de PS y movimientos disponibles** para elegir la mejor jugada en cada turno. Sopesa los cambios, los tiempos de Protección, los movimientos de área y la selección de objetivos.", tip: { type: "did-you-know", text: "La IA del Battle Bot evalúa cada combinación posible de acciones en cada turno, incluyendo doble Protección, cambios y movimientos de área. Elige la jugada con el valor esperado más alto." } },
          { text: "Usa el Battle Bot para **visualizar cómo se comporta tu equipo** en la práctica. Muestra si tu plan de juego realmente funciona cuando ambos bandos juegan con inteligencia." },
          { text: "El **sistema de replay** te permite recorrer los combates terminados turno a turno. Repasa los momentos críticos, descubre dónde se decantó la partida y aprende de las elecciones de la IA.", tip: { type: "pro", text: "Tras construir un equipo nuevo, lanza entre 5 y 10 partidas de Battle Bot y ve los replays. Detectarás rápidamente qué Pokémon caen con demasiada facilidad, qué movimientos no se usan nunca y qué aperturas funcionan mejor." } },
        ],
      },
      {
        title: "Calculadora de Daño",
        content: [
          { text: "La **Calculadora de Daño** muestra los rangos exactos de daño entre cualquier atacante y defensor en el formato Champions. Selecciona dos Pokémon, elige un movimiento y ve el daño mínimo y máximo al instante." },
          { text: "La calculadora usa la **fórmula de daño completa** incluyendo Puntos de Estadísticas, habilidades, objetos equipados, clima, terreno, aumentos de stats, efectividad de tipo, STAB, reducción de movimientos de área y golpes críticos. Nada se aproxima." },
          { text: "Los resultados están **codificados por color** para una lectura rápida: rojo significa OHKO garantizado, naranja significa 2HKO, amarillo significa 3HKO y verde significa que el defensor sobrevive cómodamente.", tip: { type: "pro", text: "Usa la calculadora para encontrar benchmarks de PS. Por ejemplo, comprueba si invertir 12 PS en PS permite a tu Pokémon sobrevivir a un ataque específico. Esos pequeños ajustes de stats ganan partidas reales." } },
          { text: "La disposición en pantalla dividida coloca al **atacante a la izquierda** y al **defensor a la derecha** con el daño mostrado claramente entre ellos. Invierte los roles con un simple clic para comprobar el enfrentamiento inverso." },
          { text: "Todos los cálculos usan la **fórmula oficial de daño de Gen 9** adaptada al sistema de Puntos de Estadísticas de Champions, de modo que los números coinciden exactamente con lo que ocurre en el motor de simulación.", tip: { type: "champions", text: "La Calculadora de Daño usa el mismo motor que el Battle Bot y el Probador de Equipos. Los números que ves aquí son idénticos a lo que se juega en un combate completo de IA." } },
        ],
      },
      {
        title: "Análisis META",
        content: [
          { text: "La **página META** se alimenta de los datos de más de **1 000 000 de combates simulados** entre equipos competitivos generados aleatoriamente. Cada Pokémon, movimiento, habilidad y dúo se clasifica por porcentaje real de victoria." },
          { text: "La **tabla de clasificación de Pokémon** muestra el porcentaje de uso y de victoria de cada Pokémon del roster. Ordena por porcentaje de victoria para encontrar los mejores picks, o por uso para ver lo más popular." },
          { text: "**Los Mejores Dúos** revela las combinaciones de dos Pokémon con los mejores porcentajes de victoria. Son parejas con sinergia probada en miles de combates, y constituyen excelentes puntos de partida para equipos nuevos.", tip: { type: "champions", text: "Los datos de los Mejores Dúos se actualizan a medida que avanzan las simulaciones. Vuelve con regularidad para ver si han aparecido nuevas combinaciones o si el meta ha evolucionado en una nueva dirección." } },
          { text: "**El Análisis de Arquetipos** desglosa los porcentajes de victoria por estilo de equipo: Espacio Raro, Viento Afín, Clima, Equilibrio e Hiper Ofensiva. Descubre qué grandes estrategias rinden mejor ahora mismo." },
          { text: "**Las Clasificaciones de Movimientos** muestran qué movimientos tienen los mejores porcentajes globales de victoria. Estos datos te ayudan a elegir entre opciones similares. ¿Es más eficaz Pirotecnia u Onda Ígnea? Los resultados de simulación te dan una respuesta clara.", tip: { type: "pro", text: "Detecta movimientos con porcentajes de victoria altos pero poco uso. Son joyas ocultas que la mayoría de jugadores aún no ha adoptado. Usarlos antes de que el meta los alcance te da una ventaja real." } },
          { text: "Paneles adicionales cubren la **distribución de tipos**, los **desgloses de equipos de torneo** y los **insights de sinergia**. La página META es la herramienta más rica en datos de Champions Lab para entender el paisaje competitivo." },
        ],
      },
    ],
  },
];
