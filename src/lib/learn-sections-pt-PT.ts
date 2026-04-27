import { GraduationCap, Users, Shield, Brain, Target, Zap, Award, Sparkles, Monitor } from "lucide-react";

export const SECTIONS_PT_PT = [
  {
    id: "intro",
    title: "O que é VGC?",
    icon: GraduationCap,
    color: "teal",
    subsections: [
      {
        title: "Campeonatos de Videojogos",
        content: [
          { text: "**VGC (Video Game Championships)** é o formato competitivo oficial de Pokémon organizado pela **The Pokémon Company International**. Utiliza **Batalhas Duplas** – cada jogador seleciona 4 dos seus 6 Pokémon para cada jogo." },
          { text: "As partidas são jogadas nos jogos de vídeo Pokémon (atualmente **Pokémon Scarlet & Violet / Champions**). Os jogadores constroem equipas de 6, seguindo o conjunto de regras atual, e batalham num formato **melhor de 3** nos torneios principais." },
          { text: "O VGC tem uma cena competitiva global vibrante com **Campeonatos Regionais**, **Campeonatos Internacionais** e os **Campeonatos Mundiais** realizados anualmente. Os jogadores ganham **Pontos de Campeonato (CP)** para se qualificarem para os Mundiais.", tip: { type: "did-you-know", text: "Os Campeonatos Mundiais de VGC realizam-se desde 2009. O prémio tem aumentado todos os anos, e os melhores jogadores podem ganhar bolsas de estudo e prémios em dinheiro!" } },
        ],
      },
      {
        title: "Batalhas Duplas vs Singles",
        content: [
          { text: "Ao contrário do Smogon Singles (6v6, um Pokémon de cada vez), o VGC é um formato de **Duplas** – dois Pokémon de cada lado do campo em simultâneo. Isso **altera fundamentalmente a estratégia**." },
          { text: "Em Duplas, podes visar **qualquer** Pokémon do oponente, usar ataques que atingem vários alvos (**Ataques de área** como Earthquake, Heat Wave) e **apoiar o teu parceiro** com ataques como Follow Me, Helping Hand ou Tailwind." },
          { text: "**Posicionamento**, **ordem de turnos** e **antecipar as jogadas do oponente** tornam-se ainda mais críticos quando tens 4 Pokémon a interagir simultaneamente.", tip: { type: "pro", text: "As Duplas baseiam-se fundamentalmente nas interações entre 4 Pokémon no campo. Pensa nisso como uma partida de xadrez 2v2 – a posição do teu parceiro importa tanto como a tua." } },
        ],
      },
      {
        title: "Pré-visualização de Equipa & Levar 4",
        content: [
          { text: "Antes de cada jogo começar, ambos os jogadores veem os 6 Pokémon de cada equipa (**Pré-visualização de Equipa**). Depois escolhem quais **4 levar** para a batalha." },
          { text: "Esta mecânica de **'Levar 4'** é crucial – não levas sempre os mesmos 4 Pokémon. Dependendo da equipa do oponente, ajustas a tua seleção para teres a **melhor matchup**.", tip: { type: "champions", text: "Em Champions, a Pré-visualização mostra o sprite, tipos e emblema de tier de cada Pokémon. Usa isto para identificar rapidamente a estratégia do oponente e planear os teus 4!" } },
          { text: "Construir uma equipa flexível que tenha **vários 'modos'** ou bons Pokémon para diferentes matchups é a chave para o sucesso." },
        ],
      },
    ],
  },
  {
    id: "teambuilding",
    title: "Fundamentos de Construção de Equipas",
    icon: Users,
    color: "cyan",
    subsections: [
      {
        title: "O Puzzle dos 6 Pokémon",
        content: [
          { text: "Uma equipa VGC forte não são apenas 6 Pokémon individualmente poderosos – é uma **unidade coesa** onde cada membro serve um propósito e cobre as fraquezas dos outros." },
          { text: "Começa por escolher um **'core'** – 2-3 Pokémon que funcionam bem juntos. Pode ser um setter de clima + abusador (`Torkoal + Venusaur`), um par de Trick Room (`Hatterene + Torkoal`) ou um combo de controlo de velocidade (`Whimsicott + Kingambit`).", tip: { type: "champions", text: "Verifica a secção Melhores Cores na página META – a nossa simulação de 1M batalhas mostra quais os pares com as maiores taxas de vitória. Gliscor + Archaludon domina atualmente com 71%!" } },
          { text: "Depois preenche os espaços restantes com Pokémon que **lidam com ameaças** contra as quais o teu core é fraco, oferecem **condições alternativas de vitória** e dão-te **flexibilidade** na Pré-visualização de Equipa." },
        ],
      },
      {
        title: "Funções a Cobrir",
        content: [
          { text: "**Controlo de Velocidade:** Setters de Tailwind (`Whimsicott`, `Talonflame`), setters de Trick Room (`Hatterene`, `Oranguru`), utilizadores de Icy Wind/Electroweb. **Controlar quem move primeiro ganha jogos.**" },
          { text: "**Ameaças Ofensivas:** Precisas de Pokémon que causem dano significativo. **Mistura atacantes físicos e especiais** para que não possas ser bloqueado por uma única estatística defensiva." },
          { text: "**Suporte & Redirecionamento:** Pokémon como `Amoonguss` (Rage Powder), `Indeedee` (Follow Me) ou `Sableye` (Prankster Will-O-Wisp, Quash) protegem as tuas ameaças principais.", tip: { type: "pro", text: "Toda a grande equipa tem pelo menos um Pokémon 'cola' – um suporte que não varre sozinho mas capacita tudo o resto. Incineroar com Fake Out + Intimidate é o GOAT desta função." } },
          { text: "**Espinha Dorsal Defensiva:** Pelo menos um Pokémon robusto que aguente ataques e forneça utilidade – utilizadores de **Intimidate**, espalhadores de **Will-o-Wisp** ou redirectors resistentes." },
        ],
      },
      {
        title: "Sinergia de Tipos & Cobertura",
        content: [
          { text: "Garante que a tua equipa **não é demasiado fraca** a nenhum tipo. Se 3+ Pokémon partilharem uma fraqueza (ex: todos fracos a Ground), um único `Earthquake` pode devastar-te.", tip: { type: "warning", text: "Armadilha comum: carregar com tipos Steel porque são individualmente fortes. A tua equipa desmoronar-se-á perante um único Earthquake ou Heat Wave de um tipo Fire." } },
          { text: "Verifica que a tua equipa consegue atingir **cada tipo** com pelo menos dano neutro. O **gráfico de cobertura do construtor de equipas do Champions Lab** ajuda a visualizar isto." },
          { text: "Considera **imunidades** e **resistências**. Um **tipo Flying** ou **Levitate** é excelente ao lado de um utilizador de Earthquake. Um **tipo Steel** resiste 10 tipos!" },
        ],
      },
      {
        title: "Pontos de Estatística (SP) em Champions",
        content: [
          { text: "Em Champions, o tradicional sistema de **EV/IV** é substituído por **Pontos de Estatística (SP)** – um sistema de alocação mais simples e estratégico.", tip: { type: "champions", text: "Cada Pokémon recebe 66 Pontos de Estatística totais para distribuir, com um máximo de 32 numa única estatística. Isso significa que cada ponto importa – sem EVs desperdiçados!" } },
          { text: "**Distribuições comuns:** `32/32/2/0/0/0` (máximo em duas estatísticas + um pouco extra), `32/0/2/32/0/0` (ofensivo + defesa), `32/0/32/0/0/2` (tanque puro). Os 2 pontos restantes são o teu investimento 'técnico'." },
          { text: "**Tier de velocidade** são especialmente importantes com SP. Sabe se precisas de `32 Speed` para ultrapassar ameaças chave, ou se podes investir esses pontos noutro lugar para defesa.", tip: { type: "pro", text: "Um erro comum é maximizar sempre a Velocidade. Muitos Pokémon como Kingambit, Snorlax e Torkoal não precisam de Velocidade – investe em HP e Attack/SpA para máximo impacto." } },
        ],
      },
    ],
  },
  {
    id: "types",
    title: "Domínio das Matchups de Tipos",
    icon: Shield,
    color: "emerald",
    subsections: [
      {
        title: "Os 18 Tipos",
        content: [
          { text: "Existem **18 tipos** em Pokémon, cada um com as suas próprias interações ofensivas e defensivas. **Dominar as matchups de tipos** é a base do jogo competitivo." },
          { text: "**Tipos ofensivos chave:** Fairy (atinge Dragon, Dark, Fighting), Ground (atinge **5 tipos** SE, apenas resistido por Bug, Grass), Ice (atinge Dragon, Ground, Flying, Grass)." },
          { text: "**Tipos defensivos chave:** Steel (**resiste 10 tipos!**), Fairy (imune a Dragon, resiste Fighting, Bug, Dark), Water (resiste 4 tipos).", tip: { type: "did-you-know", text: "O tipo Steel é tão defensivamente dominante que 49 dos 159 Pokémon no roster de Champions podem aprender um ataque do tipo Steel para lidar com ele. Tens sempre de ter um plano para Steel!" } },
        ],
      },
      {
        title: "Combinações Ofensivas Comuns",
        content: [
          { text: "**Ice + Ground:** Apenas resistido por uma mão cheia de Pokémon (tipos Water/Bug). Cobertura neutra incrível – é por isso que `Garchomp` com Earthquake + ataque Ice é tão dominante." },
          { text: "**Fairy + Fire:** Fairy lida com Dragon/Dark/Fighting, Fire lida com Steel/Bug/Grass – atingindo **quase tudo** de forma neutra.", tip: { type: "pro", text: "Mega Gardevoir (Fairy) + Arcanine (Fire) é um exemplo clássico deste par ofensivo. Juntos podem ameaçar quase todo o metagame!" } },
          { text: "**Ghost + Fighting:** Ghost é imune a Normal e Fighting, Fighting é super efetivo contra Normal e Steel. Juntos atingem tudo com pelo menos dano neutro exceto tipos Normal/Ghost." },
          { text: "**Water + Grass:** Water atinge Fire/Ground/Rock, Grass lida com Water/Ground/Rock por um ângulo diferente. Cobertura neutra muito sólida." },
        ],
      },
      {
        title: "Estratégia de Mega Evolução",
        content: [
          { text: "**Mega Evolução** transforma um Pokémon numa **forma mais forte** durante a batalha, aumentando estatísticas e por vezes **mudando de tipo ou habilidade**.", tip: { type: "champions", text: "Champions apresenta tanto Megas clássicas (Garchomp, Kangaskhan, Metagross) COMO novas exclusivas (Mega Meganium, Mega Feraligatr, Mega Tatsugiri). Experimenta-as no Construtor de Equipas!" } },
          { text: "Cada equipa só pode **Mega Evoluir um Pokémon** por batalha – escolhe sabiamente qual Pokémon beneficia mais do aumento de poder." },
          { text: "**Mega Stones** ocupam o slot de item segurado, por isso Pokémon Mega não podem segurar outros items como Life Orb ou Choice Scarf." },
          { text: "Algumas Mega Evoluções **mudam habilidades** no turno em que Mega Evoluem (ex: `Mega Kangaskhan` ganha **Parental Bond**). Planeja cuidadosamente o teu primeiro turno de Mega.", tip: { type: "warning", text: "Se a tua Mega usa Intimidate na forma base (como Gyarados), Mega Evoluir remove Intimidate. Por vezes é melhor NÃO Mega no turno 1 se precisares desse ciclo de Intimidate!" } },
        ],
      },
    ],
  },
  {
    id: "strategies",
    title: "Estratégias Principais",
    icon: Brain,
    color: "amber",
    subsections: [
      {
        title: "Equipas de Tailwind",
        content: [
          { text: "**Tailwind** duplica a Velocidade da tua equipa durante **4 turnos**. É a forma mais comum de controlo de velocidade no VGC, usada por Pokémon como `Whimsicott`, `Talonflame`, `Pelipper` e `Tornadus`." },
          { text: "**Estratégia:** Começa com o teu setter de Tailwind + um atacante forte. Coloca Tailwind no **turno 1**, depois varre com os teus Pokémon mais rápidos nos turnos seguintes.", tip: { type: "pro", text: "Whimsicott é o melhor setter de Tailwind graças a Prankster – dá a Tailwind +1 prioridade, o que significa que quase sempre move primeiro. Emparelha-o com Kingambit para ataques duplos devastadores." } },
          { text: "**Contra-jogada:** Usa Fake Out no setter de Tailwind, usa o teu próprio controlo de velocidade (Tailwind oposto ou Trick Room), ou usa **ataques de prioridade** para contornar o aumento de velocidade." },
        ],
      },
      {
        title: "Equipas de Trick Room",
        content: [
          { text: "**Trick Room** inverte a ordem de velocidade durante **5 turnos** – os **Pokémon mais lentos movem primeiro**. Isso permite a Pokémon extremamente poderosos mas lentos como `Torkoal`, `Snorlax` e `Hatterene` dominarem.", tip: { type: "champions", text: "A nossa simulação de 1M batalhas mostra que Slowbro Trick Room é o arquétipo #1 com uma taxa de vitória de 65.6%! A defesa incrível de Slowbro torna quase impossível impedir a sua preparação." } },
          { text: "**Estratégia:** Protege o teu setter de Trick Room (frequentemente ao emparelhar com suporte de **Follow Me/Rage Powder**), coloca Trick Room, depois liberta poderosos atacantes lentos." },
          { text: "**Construção:** Os teus varredores de Trick Room devem ter **Velocidade mínima** – em Champions, isso significa `0 SP em Speed`. Cada ponto de Velocidade que reduzires importa sob Trick Room." },
          { text: "**Contra-jogada:** Derrota ou usa `Taunt` no setter, usa Imprison com Trick Room no teu próprio Pokémon, ou leva Pokémon rápidos que ameacem o setter antes de ele mover." },
        ],
      },
      {
        title: "Equipas de Clima",
        content: [
          { text: "**Clima** (Sun, Rain, Sand, Snow) aumenta certos tipos e permite habilidades como **Swift Swim**, **Chlorophyll**, **Sand Rush** e **Slush Rush**." },
          { text: "**☀️ Sun:** Colocado por `Drought` (`Torkoal`). Aumenta ataques Fire, enfraquece Water. Permite velocidade Chlorophyll. Emparelha com poderosos tipos Fire e utilizadores de **Solar Beam**." },
          { text: "**🌧️ Rain:** Colocado por `Drizzle` (`Pelipper`). Aumenta Water, enfraquece Fire. Permite Swift Swim. As equipas de Rain aplicam pressão com **ataques de área Water aumentados**.", tip: { type: "did-you-know", text: "Pelipper + Swift Swim Kingdra foi um dos cores VGC mais icónicos de sempre. Em Champions, Pelipper + Azumarill ou Primarina preenche um papel semelhante!" } },
          { text: "**🏜️ Sand:** Colocado por `Sand Stream` (`Tyranitar`, `Hippowdon`). Concede **aumento de SpD** a tipos Rock e causa dano residual. Permite varredores Sand Rush como `Excadrill`." },
        ],
      },
      {
        title: "Goodstuff / Equilíbrio",
        content: [
          { text: "**'Goodstuff'** significa construir uma equipa de Pokémon individualmente fortes que não dependam de um arquétipo específico. O objetivo é **flexibilidade e consistência**." },
          { text: "Estas equipas excedem na **Pré-visualização de Equipa** porque têm respostas para tudo – não perdem automaticamente para nenhuma matchup.", tip: { type: "champions", text: "Equilíbrio é o arquétipo #2 na nossa simulação com 54.4% WR. É a estratégia mais amigável para iniciantes porque não requer execução perfeita de um único plano de jogo." } },
          { text: "Inclui uma mistura de **opções de controlo de velocidade**, **pressão ofensiva** e **utilidade defensiva**. `Intimidate`, redirecionamento e ataques de prioridade são fundamentais." },
          { text: "As equipas Goodstuff recompensam **jogo forte no campo** e adaptação. Precisas de **superar o oponente** em vez de confiar numa única preparação." },
        ],
      },
      {
        title: "Hiper Ofensiva",
        content: [
          { text: "**Hiper Ofensiva** prioriza causar **máximo dano** o mais rápido possível. A filosofia: *'Se eu derrotar os Pokémon deles rapidamente, eles não podem revidar.'*" },
          { text: "Normalmente inclui utilizadores fortes de **Tailwind** ou **Choice Scarf**, poderosos ataques de área (`Heat Wave`, `Rock Slide`, `Dazzling Gleam`) e suporte de **Helping Hand**." },
          { text: "**Risco:** Se não conseguires derrotas rápidas, poderás não ter as ferramentas defensivas para recuperar. As equipas HO **vivem e morrem** pelo seu momentum inicial.", tip: { type: "warning", text: "Hiper Ofensiva é uma faca de dois gumes. Se o oponente antecipar a tua jogada do turno 1 e usar Protect corretamente, podes ficar para trás imediatamente. Tens sempre de ter um plano B de início." } },
        ],
      },
    ],
  },
  {
    id: "ingame",
    title: "Tomada de Decisões no Jogo",
    icon: Target,
    color: "rose",
    subsections: [
      {
        title: "Seleção de Início",
        content: [
          { text: "Escolher o **início** correto (os teus primeiros 2 Pokémon) é crítico. Queres **estabelecer uma vantagem** ou preparar a tua condição de vitória desde cedo." },
          { text: "Considera: Preciso de controlo de velocidade? Posso **ameaçar os prováveis inícios deles**? Preciso de proteger um Pokémon chave com redirecionamento?" },
          { text: "Tens um **início predefinido** para a tua equipa, mas sê flexível. Ajusta com base na equipa do oponente durante a **Pré-visualização de Equipa**.", tip: { type: "pro", text: "Escreve os teus inícios predefinidos e os inícios 'anti-Trick Room' antes de um torneio. Ter um plano pronto significa decisões mais rápidas e confiantes sob pressão." } },
        ],
      },
      {
        title: "Protect & Previsões",
        content: [
          { text: "`Protect` é o **ataque mais importante no VGC**. Bloqueia todos os ataques durante um turno (com algumas exceções como `Feint`). Quase todos os Pokémon devem ter Protect." },
          { text: "**Usa Protect para:** observar os ataques do oponente, prolongar os turnos de Trick Room/Tailwind, garantir uma troca segura, bloquear um **double-target** antecipado.", tip: { type: "did-you-know", text: "Nos Campeonatos Mundiais de 2023, o jogador vencedor usou Protect em 5 dos seus 6 Pokémon. O único sem era um atacante bloqueado por Choice. Protect é MESMO assim tão importante!" } },
          { text: "**Prever o Protect do oponente** é chave para ganhar vantagem. Se achares que vão usar Protect, usa um **ataque de preparação**, troca ou visam o parceiro deles." },
        ],
      },
      {
        title: "Trocas & Posicionamento",
        content: [
          { text: "Trocar em Duplas é **mais arriscado** do que em Singles – ainda és vulnerável no outro slot. Mas **trocas inteligentes ganham jogos**." },
          { text: "Troca para trazer um Pokémon com **vantagem de tipo**, para ativar **Intimidate**, ou para posicionar para um melhor **final de jogo**.", tip: { type: "pro", text: "O 'ciclo de Intimidate' é uma técnica poderosa – trocar Incineroar/Arcanine para dentro e fora para reduzir repetidamente o Attack do oponente. Pokémon com Intimidate estão sempre em demanda!" } },
          { text: "Pensa nos teus **'2 de trás'** – os Pokémon que não começaste. Planeja **como e quando** eles entram. Guarda-os para o momento certo." },
        ],
      },
      {
        title: "Final de Jogo & Condições de Vitória",
        content: [
          { text: "Os jogos de VGC são frequentemente decididos nos **últimos 2-3 turnos**. Identifica a tua **condição de vitória** desde cedo: qual dos teus Pokémon pode fechar o jogo?" },
          { text: "**Cenários comuns de final de jogo:** um varredor rápido a limpar Pokémon enfraquecidos, um Pokémon robusto a prolongar o temporizador, varredura de Trick Room com 2-3 atacantes lentos." },
          { text: "**Preserva a tua condição de vitória** ao longo do jogo. Não sacrifiques o teu varredor de final de jogo por dano residual no início.", tip: { type: "warning", text: "Um dos maiores erros de iniciantes: trocar o teu melhor Pokémon no início por uma derrota em algo que não importa. Pensa sempre 'quem fecha este jogo?' e mantém-os saudáveis." } },
        ],
      },
    ],
  },
  {
    id: "moves",
    title: "Ataques & Items Essenciais",
    icon: Zap,
    color: "blue",
    subsections: [
      {
        title: "Ataques Imprescindíveis",
        content: [
          { text: "**`Protect`** – Bloqueia todos os ataques durante 1 turno. O ataque mais importante no VGC – coloca-o em **quase tudo**." },
          { text: "**`Fake Out`** – Ataque de flinch com prioridade +3 (apenas no primeiro turno). Interrompe preparações, garante dano residual. Usado por `Incineroar`, `Lopunny`, `Mienshao`." },
          { text: "**`Follow Me` / `Rage Powder`** – Redireciona ataques de alvo único para o utilizador. Permite que os teus Pokémon chave preparem ou ataquem em segurança." },
          { text: "**`Tailwind`** – Duplica a Velocidade da tua equipa durante 4 turnos. A principal forma de controlo de velocidade na maioria dos formatos." },
          { text: "**`Trick Room`** – Inverte a ordem de velocidade durante 5 turnos. Permite que powerhouse lentos dominem." },
          { text: "**`Helping Hand`** – Aumenta o ataque do teu parceiro em **50%** nesse turno. Amplificador de dano gratuito sem desvantagens.", tip: { type: "pro", text: "Helping Hand é um dos ataques mais subestimados no VGC. Esse +50% pode transformar um 2HKO num OHKO, mudando completamente o jogo a teu favor. Também tem prioridade +5!" } },
        ],
      },
      {
        title: "Items Segurados Chave",
        content: [
          { text: "**Focus Sash** – Sobrevive a qualquer ataque com 1 HP. Essencial em Pokémon frágeis de preparação e setters de Trick Room." },
          { text: "**Choice Scarf** – Aumenta Velocidade em **50%** mas bloqueia-te num único ataque. Permite a Pokémon ultrapassarem ameaças que normalmente não conseguiriam." },
          { text: "**Assault Vest** – Aumenta SpD em **50%** mas impede ataques de estado. Excelente em Pokémon ofensivos robustos como `Kingambit` e `Goodra`.", tip: { type: "did-you-know", text: "Assault Vest Kingambit é um dos sets mais populares no meta atual de Champions. Permite a Kingambit sobreviver a ataques especiais que normalmente não conseguiria, transformando-o num tanque imparável." } },
          { text: "**Life Orb** – Aumenta dano em **30%** ao custo de 10% HP por ataque. Para Pokémon que precisam de poder sem estar bloqueados por Choice." },
          { text: "**Sitrus Berry** – Restaura **25% HP** quando abaixo de 50%. Longevidade fiável para Pokémon robustos e suporte." },
          { text: "**Safety Goggles** – Imunidade a dano de clima e ataques de pó (`Spore`, `Sleep Powder`). Contra-chave contra Amoonguss." },
        ],
      },
      {
        title: "Ataques de Área",
        content: [
          { text: "**Ataques de área** atingem ambos os oponentes (e por vezes o teu parceiro). Em Duplas, um ataque que atinge 2 Pokémon causa **75% do seu dano normal** a cada um." },
          { text: "**Melhores ataques de área:** `Earthquake` (Ground, físico, atinge inimigos E parceiro), `Heat Wave` (Fire, especial, apenas inimigos), `Rock Slide` (Rock, físico, apenas inimigos, **chance de flinch**), `Dazzling Gleam` (Fairy, especial, apenas inimigos).", tip: { type: "champions", text: "A nossa simulação mostra Body Slam (59.3% WR), High Horsepower (59.3% WR) e Beat Up (58.9% WR) como os ataques com maior taxa de vitória. Verifica a página META para o ranking completo de ataques!" } },
          { text: "Tem cuidado com **ataques que atingem aliados** como `Earthquake` e `Surf` – garante que o teu parceiro resiste, é imune, ou tens um utilizador de **Wide Guard** por perto." },
        ],
      },
    ],
  },
  {
    id: "tournament",
    title: "Preparação para Torneios",
    icon: Award,
    color: "orange",
    subsections: [
      {
        title: "Ler o Metagame",
        content: [
          { text: "O **'meta'** são as estratégias, Pokémon e estruturas de equipa populares atualmente. **Evolui constantemente** à medida que os jogadores inovam e se contra-atacam." },
          { text: "Verifica resultados de torneios no VictoryRoadVGC, **na página META do Champions Lab** e em recursos da comunidade. Sabe o que é popular para te **preparares para isso**.", tip: { type: "champions", text: "A nossa página META é alimentada por uma simulação de 1M batalhas que classifica cada Pokémon, ataque, core pair e arquétipo. Usa-a para detectar tendências antes dos teus oponentes!" } },
          { text: "Não copies apenas as equipas do topo – compreende **PORQUE** funcionam. Que matchups vencem? Qual é o plano de jogo? Quais são as fraquezas?" },
        ],
      },
      {
        title: "Prática & Ladder",
        content: [
          { text: "Joga no **Pokémon Showdown** (simulador de batalhas online) para testar a tua equipa antes de a levar a um torneio. Aponta para uma classificação alta na ladder para validar a tua equipa." },
          { text: "**Regista os teus jogos:** nota o que perdes, quais inícios te parecem maus e quais Pokémon raramente levas. Estes dados ajudam-te a **refinar** a tua equipa.", tip: { type: "pro", text: "Mantém uma folha de cálculo simples: equipa do oponente, os teus inícios, vitória/derrota, notas. Após 20+ jogos, padrões claros emergem sobre o que a tua equipa tem dificuldades." } },
          { text: "Pratica **matchups específicas** contra amigos ou em grupos de prática de torneios. Prática em **Bo3** (Melhor de 3) é essencial para preparação de torneios." },
        ],
      },
      {
        title: "Jogo Mental",
        content: [
          { text: "Os torneios de VGC são longos – os Regionais podem ter **7-9 rondas**. **Resistência mental** importa tanto quanto a força da equipa." },
          { text: "Mantém-te **hidratado**, come bem e faz pausas entre rondas. Uma mente clara toma melhores decisões sob pressão." },
          { text: "**Não percas a calma** após uma derrota. Todos os melhores jogadores perdem jogos. Foca-te na ronda seguinte e no que podes controlar.", tip: { type: "did-you-know", text: "Wolfe Glick, Campeão Mundial de 2016, teve resultados 6-3 em múltiplos Regionais antes de ganhar os Mundiais. Consistência e resiliência mental superam qualquer resultado individual." } },
          { text: "Revisa os teus jogos entre rondas se possível. **Erraste** ou tiveste **azar**? Saber a diferença previne erros repetidos." },
        ],
      },
      {
        title: "Pontos de Campeonato & Qualificação",
        content: [
          { text: "Ganha **Pontos de Campeonato (CP)** ao classificar-te bem em torneios sancionados: eventos locais, Regionais, Internacionais e Eventos Especiais." },
          { text: "Precisas de um certo **limiar de CP** para te qualificares para os **Campeonatos Mundiais**. O limiar varia por região e temporada." },
          { text: "O caminho para os Mundiais é uma **maratona, não uma sprint**. Colocações consistentes no topo em múltiplos eventos importam mais do que uma vitória de sorte.", tip: { type: "pro", text: "Foca-te em chegar ao Dia 2 consistentemente em vez de ganhar o evento todo. Uma série de Top 16 ganha mais CP do que um único Top 4 de sorte." } },
        ],
      },
    ],
  },
  {
    id: "advanced",
    title: "Técnicas Avançadas",
    icon: Sparkles,
    color: "purple",
    subsections: [
      {
        title: "Cálculo de Dano",
        content: [
          { text: "Saber **quanto dano** os teus ataques causam é crucial. Usa uma calculadora de dano (como a integrada no **motor do Champions Lab**) para verificar benchmarks." },
          { text: "**'Benchmarks'** são cálculos chave: O meu Pokémon consegue **OHKO** uma ameaça comum? Consegue **sobreviver** a um ataque específico? Estes benchmarks informam a tua distribuição de SP.", tip: { type: "champions", text: "Usa o nosso Battle Bot para testar matchups específicas. Ele usa a fórmula completa de dano incluindo redução de área, clima, habilidades e items para dar resultados precisos." } },
          { text: "As distribuições de SP não são apenas `32 Atk / 32 Spe`. Os melhores jogadores **'creep'** – adicionam apenas defesa suficiente para sobreviver a ataques chave enquanto mantêm poder ofensivo." },
        ],
      },
      {
        title: "Empilhamento de Controlo de Velocidade",
        content: [
          { text: "Algumas equipas usam **múltiplas formas** de controlo de velocidade. Por exemplo, `Tailwind + Icy Wind`, ou `Trick Room + Thunder Wave`." },
          { text: "Esta flexibilidade permite-te **adaptar durante o jogo**. Se o teu primeiro controlo de velocidade for bloqueado, tens um backup." },
          { text: "**Técnica avançada:** Equipas com 'toggle de Trick Room' podem jogar a **velocidade rápida ou lenta**, escolhendo com base na matchup.", tip: { type: "pro", text: "As equipas mais flexíveis podem vencer sob Tailwind E sob Trick Room. Ter Snorlax (lento) e Garchomp (rápido) na mesma equipa dá-te ambos os modos." } },
        ],
      },
      {
        title: "Condicionamento de Slot",
        content: [
          { text: "O teu oponente faz previsões baseadas no que **espera que faças**. **'Condicionamento'** significa estabelecer padrões e depois quebrá-los." },
          { text: "**Exemplo:** Usa Protect com o Pokémon A durante dois turnos, condicionando o oponente a ignorá-lo. No turno 3, **ataca** com o Pokémon A quando eles não esperam." },
          { text: "No nível mais alto, o VGC é um jogo de **leituras e contra-leituras**. Os melhores jogadores são **imprevisíveis** e adaptam-se às tendências do oponente.", tip: { type: "did-you-know", text: "Os jogadores japoneses de VGC são famosos pelas 'leituras duras' – fazer previsões ousadas como double-target numa troca esperada. É arriscado mas devastadoramente efetivo quando funciona." } },
        ],
      },
      {
        title: "Análise de Relatórios de Equipa",
        content: [
          { text: "Após torneios importantes, os melhores jogadores publicam **'relatórios de equipa'** – explicações detalhadas da sua equipa, sets e estratégias." },
          { text: "Estuda estes relatórios para compreender o **pensamento de alto nível**. Presta atenção às distribuições de SP (o que sobreviveram/derrubaram), escolhas de início e explicações do plano de jogo.", tip: { type: "pro", text: "Quando leres um relatório de equipa, foca-te na secção 'tabela de matchups' – ela diz-te o que o jogador pensava sobre cada arquétipo comum e como planeava vencê-los." } },
          { text: "A **página META** e o **Battle Bot** do Champions Lab permitem-te testar e analisar estas estratégias tu mesmo." },
        ],
      },
    ],
  },
  {
    id: "tools",
    title: "Guia das Funcionalidades do Champions Lab",
    icon: Monitor,
    color: "teal",
    subsections: [
      {
        title: "A Pokédex",
        content: [
          { text: "A página inicial do Champions Lab é uma **Pokédex completa e pesquisável** com todos os 159 Pokémon no roster de Champions. Navega pela grelha, filtra por tipo e procura por nome para encontrar qualquer Pokémon instantaneamente." },
          { text: "Clica em qualquer carta de Pokémon para abrir um **modal detalhado de estatísticas** mostrando estatísticas base, tipos, habilidades e o pool de ataques completo. Esta é a tua referência principal ao construir uma equipa.", tip: { type: "pro", text: "Usa os botões de filtro de tipo no topo para limitar resultados. À procura de um tipo Water para completar a tua equipa? Um único clique mostra todas as opções no roster." } },
          { text: "Cada carta mostra totais de **Pontos de Estatística (SP)**, tipos e um sprite animado de alta qualidade. As cartas são codificadas por cor pelo tipo primário para que possas verificar visualmente o roster de relance." },
          { text: "**Mega Evoluções** são mostradas ao lado das suas formas base. O modal de detalhes inclui comparações completas de estatísticas para que possas ver exatamente quanto poder bruto uma Mega ganha." },
        ],
      },
      {
        title: "Construtor de Equipas",
        content: [
          { text: "O **Construtor de Equipas** é o teu espaço de trabalho para criar equipas VGC competitivas. Adiciona até 6 Pokémon, atribui ataques, habilidades, items segurados e distribui Pontos de Estatística com um slider intuitivo." },
          { text: "O **gráfico de cobertura** no topo da tua equipa atualiza em tempo real. Mapeia a cobertura ofensiva da tua equipa e fraquezas defensivas nos 18 tipos, ajudando-te a detetar gaps perigosos antes de batalhares.", tip: { type: "pro", text: "Presta atenção ao gráfico de cobertura. Se um tipo está destacado a vermelho, a tua equipa é perigosamente fraca a ele. Troca por um Pokémon que resista ou seja imune a esse tipo." } },
          { text: "Não sabes por onde começar? Carrega uma das **equipas pré-definidas curadas** construídas pelo motor de simulação. Estas são composições comprovadas de arquétipos de topo que podes usar como estão ou personalizar.", tip: { type: "champions", text: "A funcionalidade 'Sugerido' analisa a tua equipa atual em tempo real e recomenda Pokémon que preenchem gaps de cobertura. Verifica contra que tipos a tua equipa tem dificuldades e sugere counters fortes." } },
          { text: "**Importa e exporta** as tuas equipas como códigos compactos partilháveis. Envia a tua equipa a amigos, guarda-a para mais tarde ou cola equipas que encontras online. O formato é rápido e fácil de partilhar em qualquer lugar." },
          { text: "Cada slot de Pokémon permite-te escolher entre **todos os ataques e habilidades** disponíveis no formato Champions. O slider de SP distribui os teus 66 pontos totais pelas 6 estatísticas, com um máximo de 32 em qualquer uma.", tip: { type: "did-you-know", text: "Podes escolher a tua Mega Evolução diretamente no Construtor de Equipas. Apenas um Pokémon por equipa pode Mega Evoluir, por isso escolhe a Mega que melhor suporta a tua estratégia global." } },
        ],
      },
      {
        title: "Testador de Equipas",
        content: [
          { text: "O **Testador de Equipas** permite-te enfrentar duas equipas numa simulação completa controlada por IA. Constrói ou importa duas equipas, define o número de batalhas (de 10 a 1000) e observa os resultados com barras de progresso animadas." },
          { text: "Os resultados mostram **taxas de vitória globais** para cada equipa juntamente com estatísticas detalhadas. Corre mais batalhas para maior confiança nos números.", tip: { type: "pro", text: "Corre pelo menos 100 batalhas para resultados fiáveis. Amostras pequenas (10 a 20 batalhas) podem ser enganosas devido a crits aleatórios, misses e variação de efeitos secundários." } },
          { text: "O painel de **Análise de Início** analisa taxas de vitória para todas as combinações de início possíveis. Clica em qualquer par de início para revelar um **fluxograma de estratégia** que explica o raciocínio turno a turno da IA para essa matchup." },
          { text: "Navega por **cenários de batalha** individuais para repetir jogos específicos. Cada cenário mostra o log completo da batalha com ataques usados, dano causado, mudanças de clima e derrotas em ordem cronológica." },
          { text: "Queres ajustar algo? O botão **Editar Equipa** permite-te modificar qualquer equipa diretamente do ecrã de resultados e reexecutar a simulação sem recomeçar.", tip: { type: "champions", text: "Usa o Testador de Equipas para praticar matchups específicos. Curioso se a tua equipa consegue lidar com o arquétipo meta do topo? Importa ambas as equipas, corre 200 batalhas e deixa os dados falarem." } },
        ],
      },
      {
        title: "Battle Bot",
        content: [
          { text: "O **Battle Bot** executa uma batalha dupla VGC completa desde a Pré-visualização de Equipa até ao KO final, controlada inteiramente por IA. Observa a batalha a decorrer em tempo real com sprites animados, barras de HP e efeitos de ataques." },
          { text: "Cada turno é registado no **feed de batalha** com detalhe completo: números de dano, ativações de habilidades, mudanças de clima e terreno, aumentos de estatísticas e condições de estado. Nada está escondido." },
          { text: "O motor de decisão de IA avalia **matchups de tipos, tiers de velocidade, limiares de HP e ataques disponíveis** para escolher a melhor jogada cada turno. Avalia trocas, timing de Protect, ataques de área e seleção de alvos.", tip: { type: "did-you-know", text: "A IA do Battle Bot avalia todas as combinações de ação possíveis cada turno, incluindo double Protect, trocas e ataques de área. Escolhe a jogada com o maior valor esperado." } },
          { text: "Usa o Battle Bot para **visualizar como a tua equipa se comporta** na prática. Mostra se o teu plano de jogo realmente funciona quando ambos os lados jogam de forma inteligente." },
          { text: "O **sistema de replay** permite-te percorrer batalhas completadas turno a turno. Revisa momentos críticos, vê onde o jogo mudou e aprende com as escolhas da IA.", tip: { type: "pro", text: "Depois de construir uma nova equipa, corre 5 a 10 jogos do Battle Bot e observa os replays. Vais rapidamente identificar quais Pokémon são derrotados facilmente, quais ataques ficam por usar e quais inícios funcionam melhor." } },
        ],
      },
      {
        title: "Calculadora de Dano",
        content: [
          { text: "A **Calculadora de Dano** mostra intervalos exatos de dano entre qualquer atacante e defensor no formato Champions. Seleciona dois Pokémon, escolhe um ataque e vê os danos mínimo e máximo instantaneamente." },
          { text: "A calculadora usa a **fórmula completa de dano** incluindo Pontos de Estatística, habilidades, items segurados, clima, terreno, aumentos de estatísticas, efetividade de tipo, STAB, redução de ataque de área e críticos. Nada é aproximado." },
          { text: "Os resultados são **codificados por cor** para leitura rápida: vermelho significa OHKO garantido, laranja significa 2HKO, amarelo significa 3HKO e verde significa que o defensor sobrevive confortavelmente.", tip: { type: "pro", text: "Usa a calculadora para encontrar benchmarks de SP. Por exemplo, verifica se investir 12 SP em HP permite ao teu Pokémon sobreviver a um ataque específico. Pequenos ajustes de estatísticas como este ganham jogos reais." } },
          { text: "O layout em ecrã dividido coloca o **atacante à esquerda** e o **defensor à direita** com o dano claramente exibido entre eles. Troca papéis com um único clique para verificar a matchup inversa." },
          { text: "Todos os cálculos usam a **fórmula oficial de dano da Gen 9** adaptada para o sistema de Pontos de Estatística de Champions, por isso os números correspondem exatamente ao que acontece no motor de simulação.", tip: { type: "champions", text: "A Calculadora de Dano executa o mesmo motor que alimenta o Battle Bot e o Testador de Equipas. Os números de dano que vês aqui são idênticos aos que se desenrolam numa batalha completa de IA." } },
        ],
      },
      {
        title: "Análise META",
        content: [
          { text: "A **página META** é alimentada por dados de mais de **1.000.000 de batalhas simuladas** entre equipas competitivas geradas aleatoriamente. Cada Pokémon, ataque, habilidade e core pair é classificado pela taxa de vitória real." },
          { text: "A **Tabela de Classificações de Pokémon** mostra taxa de uso e taxa de vitória para cada Pokémon no roster. Ordena por taxa de vitória para encontrar as escolhas mais fortes, ou por uso para ver o que é mais popular em todas as equipas." },
          { text: "**Melhores Cores** revela as combinações de dois Pokémon com maior taxa de vitória. Estes são pares com sinergia comprovada em milhares de batalhas, e fazem excelentes pontos de partida para novas equipas.", tip: { type: "champions", text: "Os dados de Melhores Cores atualizam à medida que corremos mais simulações. Verifica regularmente para ver se novas combinações emergiram ou se o meta mudou numa nova direção." } },
          { text: "**Análise de Arquétipos** analisa taxas de vitória por estilo de equipa: Trick Room, Tailwind, Clima, Equilíbrio e Hiper Ofensiva. Vê quais estratégias amplas estão a ter mais sucesso de momento." },
          { text: "**Classificações de Ataques** mostram quais os ataques com maiores taxas de vitória. Estes dados ajudam-te a escolher entre opções similares. Flamethrower ou Heat Wave são mais efetivos? Os resultados da simulação dão-te uma resposta clara.", tip: { type: "pro", text: "Fica de olho em ataques com alta taxa de vitória mas baixo uso. Estas são gemas escondidas que a maioria dos jogadores ainda não adotou. Usá-las antes do meta acompanhar dá-te uma vantagem real." } },
          { text: "Painéis adicionais cobrem **distribuição de tipos**, **análise de equipas de torneios** e **insights de sinergia**. A página META é a ferramenta mais rica em dados do Champions Lab para compreender o panorama competitivo." },
        ],
      },
    ],
  },
];

type Section = {
  id: string;
  title: string;
  icon: any;
  color: string;
  subsections: {
    title: string;
    content: {
      text?: string;
      tip?: { type: string; text: string };
      table?: any;
    }[];
  }[];
};
