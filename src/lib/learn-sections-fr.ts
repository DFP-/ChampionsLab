/**
 * French translations for the PokéSchool (Learn) page content.
 * Only subsection titles and content blocks need translation here;
 * section titles are handled via the i18n `learn.sections.*` keys.
 */

export const SECTIONS_FR = [
  {
    id: "intro",
    subsections: [
      {
        title: "Les Championnats de Jeux Vidéo",
        content: [
          { text: "**Le VGC (Video Game Championships)** est le format Pokémon compétitif officiel organisé par **The Pokémon Company International**. Il utilise les **Combats en Double** — chaque joueur sélectionne 4 de ses 6 Pokémon à amener à chaque partie." },
          { text: "Les matchs se jouent sur les vrais jeux vidéo Pokémon (actuellement **Pokémon Écarlate & Violet / Champions**). Les joueurs construisent des équipes de 6, en respectant le règlement en vigueur, et s'affrontent en format **meilleur des 3**." },
          { text: "Le VGC possède une scène compétitive mondiale florissante avec des **Championnats Régionaux**, **Internationaux** et des **Championnats du Monde** organisés chaque année. Les joueurs gagnent des **Points de Classement (PC)** pour se qualifier aux Mondiaux.", tip: { type: "did-you-know", text: "Les Championnats du Monde VGC existent depuis 2009. La prize pool a augmenté chaque année, et les meilleurs joueurs peuvent remporter des bourses d'études et des prix en argent !" } },
        ],
      },
      {
        title: "Combats en Double vs en Simple",
        content: [
          { text: "Contrairement aux Simples Smogon (6v6, un Pokémon à la fois), le VGC est un **format Doubles** — deux Pokémon de chaque côté du terrain à tout moment. Cela **change fondamentalement la stratégie**." },
          { text: "En Double, vous pouvez cibler **n'importe lequel** des Pokémon adverses, utiliser des capacités touchant plusieurs cibles (**capacités de zone** comme Séisme, Vague de Chaleur), et **soutenir votre partenaire** avec des capacités comme Moi d'Abord, Main Aidante ou Vent Arrière." },
          { text: "Le **positionnement**, **l'ordre d'action** et **la lecture des décisions adverses** deviennent encore plus importants quand 4 Pokémon interagissent simultanément.", tip: { type: "pro", text: "Le Double est fondamentalement une question d'interactions entre 4 Pokémon sur le terrain. Pensez-y comme une partie d'échecs 2v2 — la position de votre partenaire compte autant que la vôtre." } },
        ],
      },
      {
        title: "Preview d'Équipe & Sélection de 4",
        content: [
          { text: "Avant chaque partie, les deux joueurs voient les 6 Pokémon de chaque équipe (**Team Preview**). Vous choisissez ensuite quels **4 amener** au combat." },
          { text: "Cette mécanique de **'Sélection de 4'** est cruciale — vous n'amenez pas toujours les mêmes 4 Pokémon. Selon l'équipe adverse, vous ajustez votre sélection pour avoir le **meilleur matchup**.", tip: { type: "champions", text: "Dans Champions, la Team Preview affiche le sprite de chaque Pokémon, ses types et son badge de tier. Utilisez-la pour identifier rapidement la stratégie adverse et planifier votre sélection de 4 !" } },
          { text: "Construire une équipe flexible avec **plusieurs 'modes'** ou de bons Pokémon pour différents matchups est la clé du succès." },
        ],
      },
    ],
  },
  {
    id: "teambuilding",
    subsections: [
      {
        title: "Le Puzzle des 6 Pokémon",
        content: [
          { text: "Une équipe VGC solide n'est pas juste 6 Pokémon individuellement puissants — c'est une **unité cohérente** où chaque membre a un rôle et couvre les faiblesses des autres." },
          { text: "Commencez par choisir un **'duo'** — 2-3 Pokémon qui fonctionnent bien ensemble. Cela peut être un poseur de météo + utilisateur (`Torkoal + Méganium`), une paire Distorsion (`Sorcilège + Torkoal`), ou un combo de contrôle de vitesse (`Whimsicott + Roidécaille`).", tip: { type: "champions", text: "Consultez la section Meilleurs Duos de la page MÉTA — notre simulation d'1M de combats montre quelles paires ont les meilleurs taux de victoire. Gliscor + Archaludon domine actuellement à 71% !" } },
          { text: "Remplissez ensuite les slots restants avec des Pokémon qui **contrent les menaces** auxquelles votre duo est faible, apportent des **conditions de victoire alternatives** et vous donnent de la **flexibilité** en Team Preview." },
        ],
      },
      {
        title: "Rôles à Couvrir",
        content: [
          { text: "**Contrôle de Vitesse :** Poseurs de Vent Arrière (`Whimsicott`, `Flambusard`), poseurs de Distorsion (`Sorcilège`, `Oranguru`), utilisateurs de Vent Glace/Électoile. **Contrôler qui agit en premier fait gagner les parties.**" },
          { text: "**Menaces Offensives :** Il vous faut des Pokémon capables d'infliger des dégâts importants. **Mélangez attaquants physiques et spéciaux** pour ne pas être bloqué par une seule stat défensive." },
          { text: "**Support & Redirection :** Des Pokémon comme `Lampignon` (Poudre Emoi), `Deusolourdo` (Moi d'Abord) ou `Méfiance` (Lueur Funèbre, Priorité Inversion) protègent vos menaces clés.", tip: { type: "pro", text: "Chaque grande équipe a au moins un Pokémon 'colle' — un support qui ne sweep pas lui-même mais permet à tout le reste de fonctionner. Incineroar avec Faux-Éclair + Intimidation est le GOAT de ce rôle." } },
          { text: "**Épine Dorsale Défensive :** Au moins un Pokémon résistant qui encaisse les coups et apporte de l'utilité — utilisateurs d'**Intimidation**, poseurs de **Brûlure**, ou redirecteurs costauds." },
        ],
      },
      {
        title: "Synergie de Types & Couverture",
        content: [
          { text: "Assurez-vous que votre équipe **n'est pas trop vulnérable** à un seul type. Si 3+ Pokémon partagent une faiblesse (ex : tous faibles au Sol), un seul `Séisme` peut vous dévaster.", tip: { type: "warning", text: "Piège courant : charger sur les types Acier parce qu'ils sont individuellement forts. Votre équipe s'effondrera face à un seul Séisme ou Vague de Chaleur d'un type Feu." } },
          { text: "Vérifiez que votre équipe peut toucher **chaque type** pour au moins des dégâts neutres. Le tableau de couverture du **créateur d'équipe Champions Lab** vous aide à visualiser cela." },
          { text: "Pensez aux **immunités** et **résistances**. Un Pokémon de type **Vol** ou avec **Lévitation** est idéal aux côtés d'un utilisateur de Séisme. Un type **Acier** résiste à 10 types !" },
        ],
      },
      {
        title: "Points de Stats (PS) dans Champions",
        content: [
          { text: "Dans Champions, le système classique **EV/IV** est remplacé par les **Points de Stats (PS)** — un système d'allocation plus simple et plus stratégique.", tip: { type: "champions", text: "Chaque Pokémon reçoit 66 Points de Stats à distribuer, avec un maximum de 32 dans n'importe quelle stat. Chaque point compte — pas de PS gaspillés !" } },
          { text: "**Répartitions courantes :** `32/32/2/0/0/0` (deux stats max + un peu extra), `32/0/2/32/0/0` (offensif + résistance), `32/0/32/0/0/2` (tank pur). Les 2 PS restants sont votre investissement 'tech'." },
          { text: "**Les paliers de vitesse** sont particulièrement importants avec les PS. Sachez si vous avez besoin de `32 Vitesse` pour dépasser des menaces clés, ou si vous pouvez investir ailleurs pour la résistance.", tip: { type: "pro", text: "Une erreur courante est de toujours maximiser la Vitesse. Beaucoup de Pokémon comme Roidécaille, Ronflex et Torkoal n'ont pas besoin de Vitesse — investissez en PV et Attaque/Att. Sp. pour un impact maximal." } },
        ],
      },
    ],
  },
  {
    id: "types",
    subsections: [
      {
        title: "Les 18 Types",
        content: [
          { text: "Il existe **18 types** dans Pokémon, chacun avec ses propres interactions offensives et défensives. **Maîtriser les matchups de types** est la base du jeu compétitif." },
          { text: "**Types offensifs clés :** Fée (bat Dragon, Ténèbres, Combat), Sol (bat **5 types** en super efficace, seulement résisté par Insecte, Plante), Glace (bat Dragon, Sol, Vol, Plante)." },
          { text: "**Types défensifs clés :** Acier (**résiste 10 types !**), Fée (immunité au Dragon, résiste Combat, Insecte, Ténèbres), Eau (résiste 4 types).", tip: { type: "did-you-know", text: "Le type Acier est si dominant défensivement que 49 des 159 Pokémon du roster Champions peuvent apprendre une capacité Acier pour le contrer. Ayez toujours un plan contre l'Acier !" } },
        ],
      },
      {
        title: "Combinaisons Offensives Courantes",
        content: [
          { text: "**Glace + Sol :** Résisté par une poignée de Pokémon seulement (types Eau/Insecte). Couverture neutre incroyable — c'est pourquoi `Garchomp` avec Séisme + capacité Glace est si dominant." },
          { text: "**Fée + Feu :** La Fée gère Dragon/Ténèbres/Combat, le Feu gère Acier/Insecte/Plante — touchant **presque tout** de façon neutre.", tip: { type: "pro", text: "Méga Gardevoir (Fée) + Arcanin (Feu) est un exemple classique de ce duo offensif. Ensemble, ils peuvent menacer presque tout le métagame !" } },
          { text: "**Spectre + Combat :** Le Spectre est immunisé au Normal et au Combat, le Combat est super efficace contre le Normal et l'Acier. Ensemble, ils touchent tout en au moins neutre sauf les types Normal/Spectre." },
          { text: "**Eau + Plante :** L'Eau touche Feu/Sol/Roche, la Plante gère Eau/Sol/Roche sous un angle différent. Couverture neutre très solide." },
        ],
      },
      {
        title: "Stratégie de Méga-Évolution",
        content: [
          { text: "**La Méga-Évolution** transforme un Pokémon en une **forme plus puissante** en plein combat, boostant ses stats et parfois **changeant son type ou son talent**.", tip: { type: "champions", text: "Champions propose les Mégas classiques (Garchomp, Kangaskhan, Métalosse) ET des exclusivités inédites (Méga Méganium, Méga Feralligator, Méga Tatogel). Expérimentez-les dans le Créateur d'Équipe !" } },
          { text: "Chaque équipe ne peut **Méga-Évoluer qu'un seul Pokémon** par combat — choisissez judicieusement lequel profite le plus du boost de puissance." },
          { text: "Les **Mégacailloux** occupent le slot d'objet, donc les Pokémon Méga ne peuvent pas tenir d'autres objets comme l'Orbe Vie ou l'Écharpe Choix." },
          { text: "Certaines Méga-Évolutions **changent de talent** lors du tour de Méga-Évolution (ex : `Méga-Kangaskhan` acquiert **Liens Familiaux**). Planifiez soigneusement votre premier tour de Méga.", tip: { type: "warning", text: "Si votre Méga utilise Intimidation sous sa forme de base (comme Léviator), la Méga-Évolution supprime l'Intimidation. Parfois, il vaut mieux NE PAS Méga évoluer au tour 1 si vous avez besoin de ce cycle d'Intimidation !" } },
        ],
      },
    ],
  },
  {
    id: "strategies",
    subsections: [
      {
        title: "Équipes Vent Arrière",
        content: [
          { text: "**Le Vent Arrière** double la Vitesse de votre équipe pendant **4 tours**. C'est le contrôle de vitesse le plus courant en VGC, utilisé par des Pokémon comme `Whimsicott`, `Flambusard`, `Oratoria` et `Boréas`." },
          { text: "**Stratégie :** Leadez avec votre poseur de Vent Arrière + un attaquant puissant. Posez le Vent Arrière **dès le tour 1**, puis sweepez avec vos Pokémon les plus rapides dans les tours suivants.", tip: { type: "pro", text: "Whimsicott est le meilleur poseur de Vent Arrière grâce à Farce — il donne au Vent Arrière une priorité +1, ce qui lui permet presque toujours d'aller en premier. Associez-le à Roidécaille pour des doubles attaques dévastatrices." } },
          { text: "**Contre-jeu :** Faux-Éclairez le poseur de Vent Arrière, utilisez votre propre contrôle de vitesse (Vent Arrière adverse ou Distorsion), ou utilisez des **capacités prioritaires** pour contourner le boost de vitesse." },
        ],
      },
      {
        title: "Équipes Distorsion",
        content: [
          { text: "**La Distorsion** inverse l'ordre de vitesse pendant **5 tours** — les **Pokémon les plus lents agissent en premier**. Cela permet à des Pokémon extrêmement puissants mais lents comme `Torkoal`, `Ronflex` et `Sorcilège` de dominer.", tip: { type: "champions", text: "Notre simulation d'1M montre que la Distorsion avec Flagadoss est l'archétype n°1 avec un taux de victoire de 65,6% ! La résistance incroyable de Flagadoss le rend presque impossible à empêcher de setup." } },
          { text: "**Stratégie :** Protégez votre poseur de Distorsion (souvent en le combinant avec **Moi d'Abord/Poudre Émoi**), posez la Distorsion, puis déchaînez de puissants attaquants lents." },
          { text: "**Construction :** Vos sweepers Distorsion doivent avoir une **Vitesse minimale** — dans Champions, cela signifie `0 PS en Vitesse`. Chaque point de Vitesse perdu compte sous Distorsion." },
          { text: "**Contre-jeu :** Mettez K.O. ou utilisez **Moquerie** sur le poseur, utilisez Entrave avec la Distorsion sur votre propre Pokémon, ou amenez des Pokémon rapides qui peuvent menacer le poseur avant qu'il n'agisse." },
        ],
      },
      {
        title: "Équipes Météo",
        content: [
          { text: "**La météo** (Soleil, Pluie, Sable, Neige) booste certains types et active des talents comme **Vitesse Nage**, **Chlorophylle**, **Turbo Sable** et **Slush Rush**." },
          { text: "**☀️ Soleil :** Posé par `Sécheresse` (`Torkoal`). Booste les capacités Feu, affaiblit l'Eau. Active la Chlorophylle. S'associe à de puissants types Feu et utilisateurs de **Rayon Soleil**." },
          { text: "**🌧️ Pluie :** Posée par `Drizzle` (`Oratoria`). Booste l'Eau, affaiblit le Feu. Active la Vitesse Nage. Les équipes Pluie exercent une pression avec des **capacités de zone Eau** boostées.", tip: { type: "did-you-know", text: "Oratoria + Hyporoi (Vitesse Nage) était l'un des duos VGC les plus iconiques de tous les temps. Dans Champions, Oratoria + Azumarill ou Primarina joue un rôle similaire !" } },
          { text: "**🏜️ Sable :** Posé par `Sable de Tempête` (`Tyranocif`, `Hippodocus`). Octroie un **boost de Déf. Sp.** aux types Roche, inflige des dégâts de chip. Active les sweepers Turbo Sable comme `Excadrill`." },
        ],
      },
      {
        title: "Goodstuff / Équilibre",
        content: [
          { text: "**'Goodstuff'** signifie construire une équipe de Pokémon individuellement forts qui ne dépendent pas d'un archétype spécifique. L'objectif est la **flexibilité et la régularité**." },
          { text: "Ces équipes excellent en **Team Preview** car elles ont une réponse à tout — elles ne perdent pas automatiquement face à un matchup.", tip: { type: "champions", text: "L'Équilibre est l'archétype n°2 dans notre simulation avec 54,4% de TV. C'est la stratégie la plus accessible aux débutants car elle ne nécessite pas l'exécution parfaite d'un seul plan de jeu." } },
          { text: "Incluez un mix d'**options de contrôle de vitesse**, de **pression offensive** et d'**utilité défensive**. L'Intimidation, la redirection et les capacités prioritaires sont des incontournables." },
          { text: "Les équipes Goodstuff récompensent le **jeu en partie solide** et l'adaptation. Vous devez **surjouer l'adversaire** plutôt que de vous reposer sur un seul setup." },
        ],
      },
      {
        title: "Hyper Offense",
        content: [
          { text: "**L'Hyper Offense** priorise l'infliction du **maximum de dégâts** le plus rapidement possible. La philosophie : *'Si je mets K.O. leurs Pokémon assez vite, ils ne peuvent pas riposter.'*" },
          { text: "Inclut généralement de forts poseurs de **Vent Arrière** ou utilisateurs d'**Écharpe Choix**, des capacités de zone puissantes (`Vague de Chaleur`, `Gravé Roc`, `Éclat Glaçant`), et un support **Main Aidante**." },
          { text: "**Risque :** Si vous ne faites pas de KO rapides, vous manquerez d'outils défensifs pour récupérer. Les équipes HO **vivent et meurent** de leur momentum en début de partie.", tip: { type: "warning", text: "L'Hyper Offense est une arme à double tranchant. Si l'adversaire lit votre jeu tour 1 et utilise Abri correctement, vous pouvez immédiatement prendre du retard. Ayez toujours un Plan B de lead." } },
        ],
      },
    ],
  },
  {
    id: "ingame",
    subsections: [
      {
        title: "Sélection du Lead",
        content: [
          { text: "Choisir le bon **lead** (vos 2 premiers Pokémon) est crucial. Vous voulez **établir un avantage** ou installer votre condition de victoire tôt." },
          { text: "Considérez : Ai-je besoin de contrôle de vitesse ? Est-ce que je **menace leurs leads probables** ? Dois-je protéger un Pokémon clé avec la redirection ?" },
          { text: "Ayez un **lead par défaut** pour votre équipe, mais restez flexible. Adaptez-vous en fonction de l'équipe adverse en **Team Preview**.", tip: { type: "pro", text: "Notez vos leads par défaut et vos leads 'anti-Distorsion' avant un tournoi. Avoir un plan prêt signifie des décisions plus rapides et plus confiantes sous pression." } },
        ],
      },
      {
        title: "Abri & Prédictions",
        content: [
          { text: "`Abri` est la **capacité la plus importante du VGC**. Elle bloque toutes les capacités pendant un tour (avec quelques exceptions comme `Tromperie`). Presque chaque Pokémon devrait l'avoir." },
          { text: "**Utilisez Abri pour :** scouter les capacités adverses, faire durer les tours de Distorsion/Vent Arrière, assurer un switch sécurisé, bloquer un **double ciblage** prévisible.", tip: { type: "did-you-know", text: "Aux Championnats du Monde 2023, le vainqueur avait Abri sur 5 de ses 6 Pokémon. Le seul sans était un attaquant verrouillé par l'Écharpe Choix. Abri est VRAIMENT aussi important !" } },
          { text: "**Prédire l'Abri adverse** est la clé pour prendre l'avantage. Si vous pensez qu'ils vont utiliser Abri, utilisez une **capacité de setup**, changez, ou ciblez leur partenaire." },
        ],
      },
      {
        title: "Switches & Positionnement",
        content: [
          { text: "Changer de Pokémon en Double est **plus risqué** qu'en Simple — vous êtes toujours vulnérable sur l'autre slot. Mais **les bons switches font gagner les parties**." },
          { text: "Changez pour amener un Pokémon avec un **avantage de type**, pour activer l'**Intimidation**, ou pour vous positionner pour un meilleur **fin de partie**.", tip: { type: "pro", text: "Le 'cycle d'Intimidation' est une technique puissante — rentrer et sortir Incineroar/Arcanin pour baisser répétitivement l'Attaque adverse. Les Pokémon avec Intimidation sont toujours très demandés !" } },
          { text: "Pensez à vos **'2 du fond'** — les Pokémon que vous n'avez pas lead. Planifiez **comment et quand** ils entrent. Gardez-les pour le bon moment." },
        ],
      },
      {
        title: "Fin de Partie & Conditions de Victoire",
        content: [
          { text: "Les parties VGC se décident souvent dans les **2-3 derniers tours**. Identifiez tôt votre **condition de victoire** : lequel de vos Pokémon peut conclure la partie ?" },
          { text: "**Scénarios courants de fin de partie :** un sweeper rapide qui nettoie les Pokémon affaiblis, un Pokémon résistant qui fait traîner le chrono, une Distorsion qui sweep avec 2-3 frappeurs lents." },
          { text: "**Préservez votre condition de victoire** tout au long de la partie. Ne sacrifiez pas votre sweeper de fin de partie pour des dégâts mineurs en début de jeu.", tip: { type: "warning", text: "L'une des plus grandes erreurs débutantes : trader votre meilleur Pokémon tôt pour un KO sur quelque chose qui ne compte pas. Demandez-vous toujours 'qui conclut cette partie ?' et gardez-le en bonne santé." } },
        ],
      },
    ],
  },
  {
    id: "moves",
    subsections: [
      {
        title: "Capacités à Connaître Absolument",
        content: [
          { text: "**`Abri`** — Bloque toutes les attaques pendant 1 tour. La capacité la plus importante du VGC — à avoir sur **presque tout**." },
          { text: "**`Faux-Éclair`** — Capacité prioritaire +3 qui engourdit (premier tour seulement). Perturbe les setups, garantit des dégâts de chip. Utilisé par `Incineroar`, `Loputout`, `Miénfouet`." },
          { text: "**`Moi d'Abord` / `Poudre Émoi`** — Redirige les capacités à cible unique vers l'utilisateur. Permet à vos Pokémon clés de se setup ou d'attaquer en sécurité." },
          { text: "**`Vent Arrière`** — Double la Vitesse de votre équipe pendant 4 tours. La principale capacité de contrôle de vitesse dans la plupart des formats." },
          { text: "**`Distorsion`** — Inverse l'ordre de vitesse pendant 5 tours. Permet aux puissants mais lents de dominer." },
          { text: "**`Main Aidante`** — Booste l'attaque de votre partenaire de **50%** ce tour. Amplificateur de dégâts gratuit sans contrepartie.", tip: { type: "pro", text: "Main Aidante est l'une des capacités les plus sous-estimées du VGC. Ce +50% peut transformer un 2HKO en OHKO, renversant complètement la partie en votre faveur. Elle a aussi une priorité +5 !" } },
        ],
      },
      {
        title: "Objets Tenus Clés",
        content: [
          { text: "**Cendrillon** — Survit à n'importe quelle attaque avec 1 PV. Essentiel sur les Pokémon de setup fragiles et les poseurs de Distorsion." },
          { text: "**Écharpe Choix** — Booste la Vitesse de **50%** mais vous verrouille sur une seule capacité. Permet à des Pokémon de dépasser des menaces qu'ils ne pourraient normalement pas devancer." },
          { text: "**Veste Assaut** — Booste la Déf. Sp. de **50%** mais empêche les capacités de statut. Idéal sur les Pokémon offensifs résistants comme `Roidécaille` et `Goodra`.", tip: { type: "did-you-know", text: "Roidécaille Veste Assaut est l'un des sets les plus populaires dans la méta Champions actuelle. Il lui permet de survivre à des attaques spéciales qu'il ne pourrait normalement pas, en faisant un tank imparable." } },
          { text: "**Orbe Vie** — Booste les dégâts de **30%** au coût de 10% PV par attaque. Pour les Pokémon ayant besoin de puissance sans être verrouillés par l'Écharpe." },
          { text: "**Baie Sitrus** — Restaure **25% des PV** en dessous de 50%. Longévité fiable pour les Pokémon résistants et les supports." },
          { text: "**Lunettes Protectrices** — Immunité aux dégâts météo et aux capacités poudre (`Spore`, `Poudre Dodo`). Contre clé contre Lampignon." },
        ],
      },
      {
        title: "Capacités de Zone",
        content: [
          { text: "**Les capacités de zone** touchent les deux adversaires (et parfois votre partenaire). En Double, une capacité touchant 2 Pokémon inflige **75% de ses dégâts normaux** à chacun." },
          { text: "**Meilleures capacités de zone :** `Séisme` (Sol, physique, touche adversaires ET partenaire), `Vague de Chaleur` (Feu, spéciale, adversaires seulement), `Gravé Roc` (Roche, physique, adversaires seulement, **chance d'étourdissement**), `Éclat Glaçant` (Fée, spéciale, adversaires seulement).", tip: { type: "champions", text: "Notre simulation montre Jackpot (59,3% TV), Grande Force (59,3% TV) et Rouste (58,9% TV) comme les capacités au meilleur taux de victoire. Consultez la page MÉTA pour le classement complet !" } },
          { text: "Faites attention aux **capacités qui touchent les alliés** comme `Séisme` et `Surf` — assurez-vous que votre partenaire résiste, est immunisé, ou qu'un utilisateur de **Garde Large** est là." },
        ],
      },
    ],
  },
  {
    id: "tournament",
    subsections: [
      {
        title: "Lire le Métagame",
        content: [
          { text: "Le **'méta'** désigne les stratégies, Pokémon et structures d'équipes populaires actuellement utilisés. Il **évolue constamment** au fil des innovations et contre-stratégies des joueurs." },
          { text: "Consultez les résultats de tournois sur VictoryRoadVGC, **la page MÉTA de Champions Lab**, et les ressources communautaires. Sachez ce qui est populaire pour vous **y préparer**.", tip: { type: "champions", text: "Notre page MÉTA est alimentée par une simulation d'1M de combats qui classe chaque Pokémon, capacité, duo et archétype par taux de victoire réel. Utilisez-la pour repérer les tendances avant vos adversaires !" } },
          { text: "Ne vous contentez pas de copier les équipes top — comprenez **POURQUOI** elles fonctionnent. Quels matchups gagnent-elles ? Quel est leur plan de jeu ? Quelles sont leurs faiblesses ?" },
        ],
      },
      {
        title: "Pratique & Ladder",
        content: [
          { text: "Jouez sur **Pokémon Showdown** (simulateur de combat en ligne) pour tester votre équipe avant de l'emmener en tournoi. Visez un classement élevé pour valider votre équipe." },
          { text: "**Suivez vos parties :** notez ce contre quoi vous perdez, quels leads sont inconfortables et quels Pokémon vous n'amenez jamais. Ces données vous aident à **affiner** votre équipe.", tip: { type: "pro", text: "Tenez un simple tableur : équipe adverse, vos leads, victoire/défaite, notes. Après 20+ parties, des patterns clairs émergent sur ce contre quoi votre équipe a du mal." } },
          { text: "Entraînez-vous sur des **matchups spécifiques** avec des amis ou dans des groupes de pratique. L'entraînement en **Bo3** (meilleur des 3) est essentiel pour être prêt en tournoi." },
        ],
      },
      {
        title: "Le Mental",
        content: [
          { text: "Les tournois VGC sont longs — les Régionaux peuvent durer **7-9 rondes**. La **résistance mentale** compte autant que la force de l'équipe." },
          { text: "Restez **hydraté**, mangez bien et faites des pauses entre les rondes. Un esprit clair prend de meilleures décisions sous pression." },
          { text: "**Ne tilter pas** après une défaite. Chaque grand joueur perd des parties. Concentrez-vous sur la prochaine ronde et sur ce que vous pouvez contrôler.", tip: { type: "did-you-know", text: "Wolfe Glick, Champion du Monde 2016, a terminé 6-3 à plusieurs Régionaux avant de gagner les Mondiaux. La régularité et la résilience mentale battent n'importe quel résultat individuel." } },
          { text: "Analysez vos parties entre les rondes si possible. Avez-vous **mal joué**, ou avez-vous eu **de la malchance** ? Savoir faire la différence évite les erreurs répétées." },
        ],
      },
      {
        title: "Points de Classement & Qualification",
        content: [
          { text: "Gagnez des **Points de Classement (PC)** en vous bien classant dans des tournois sanctionnés : événements locaux, Régionaux, Internationaux et Événements Spéciaux." },
          { text: "Vous avez besoin d'un certain **seuil de PC** pour vous qualifier aux **Championnats du Monde**. Le seuil varie selon la région et la saison." },
          { text: "La route vers les Mondiaux est un **marathon, pas un sprint**. Des performances régulières sur plusieurs événements comptent plus qu'une seule victoire chanceuse.", tip: { type: "pro", text: "Concentrez-vous sur l'accès au Jour 2 régulièrement plutôt que de tout gagner. Une série de Top 16 rapporte plus de PC qu'un Top 4 chanceux." } },
        ],
      },
    ],
  },
  {
    id: "advanced",
    subsections: [
      {
        title: "Calcul des Dégâts",
        content: [
          { text: "Savoir **combien de dégâts** infligent vos attaques est crucial. Utilisez un calculateur de dégâts (comme celui intégré dans le **moteur de Champions Lab**) pour vérifier les benchmarks." },
          { text: "Les **'benchmarks'** sont des calculs clés : Mon Pokémon peut-il **faire un OHKO** sur une menace courante ? Peut-il **survivre** à une attaque spécifique ? Ces benchmarks guident votre répartition de PS.", tip: { type: "champions", text: "Utilisez notre Battle Bot pour tester des matchups spécifiques. Il utilise la formule de dégâts complète incluant réduction de zone, météo, talents et objets pour des résultats précis." } },
          { text: "Les répartitions de PS ne sont pas que `32 Att / 32 Vit`. Les meilleurs joueurs **'creep'** — ajoutent juste assez de résistance pour survivre aux attaques clés tout en maintenant la puissance offensive." },
        ],
      },
      {
        title: "Cumul du Contrôle de Vitesse",
        content: [
          { text: "Certaines équipes utilisent **plusieurs formes** de contrôle de vitesse. Par exemple, `Vent Arrière + Vent Glacé`, ou `Distorsion + Cage Éclair`." },
          { text: "Cette flexibilité permet de **s'adapter en cours de partie**. Si votre premier contrôle de vitesse est bloqué, vous en avez un de secours." },
          { text: "**Technique avancée :** Les équipes à 'bascule Distorsion' peuvent jouer à **vitesse rapide OU lente**, en choisissant selon le matchup.", tip: { type: "pro", text: "Les équipes les plus flexibles peuvent gagner sous Vent Arrière ET sous Distorsion. Avoir Ronflex (lent) et Garchomp (rapide) dans la même équipe vous donne les deux modes." } },
        ],
      },
      {
        title: "Conditionnement de Slot",
        content: [
          { text: "L'adversaire fait des prédictions basées sur ce qu'**il attend de vous**. Le **'conditionnement'** consiste à établir des patterns, puis à les briser." },
          { text: "**Exemple :** Utilisez Abri avec le Pokémon A pendant deux tours, conditionnant l'adversaire à l'ignorer. Au tour 3, **attaquez** avec le Pokémon A quand il ne s'y attend pas." },
          { text: "Au plus haut niveau, le VGC est un jeu de **lectures et contre-lectures**. Les meilleurs joueurs sont **imprévisibles** et s'adaptent aux habitudes adverses.", tip: { type: "did-you-know", text: "Les joueurs VGC japonais sont célèbres pour les 'hard reads' — des prédictions audacieuses comme le double ciblage sur un switch anticipé. C'est risqué mais dévastatement efficace quand ça marche." } },
        ],
      },
      {
        title: "Analyse des Rapports d'Équipe",
        content: [
          { text: "Après les grands tournois, les meilleurs joueurs publient des **'team reports'** — des explications détaillées de leur équipe, leurs sets et leurs stratégies." },
          { text: "Étudiez ces rapports pour comprendre la **réflexion de haut niveau**. Portez attention aux répartitions de PS (ce qu'ils survivent/font KO), aux choix de leads et aux explications de plan de jeu.", tip: { type: "pro", text: "En lisant un team report, concentrez-vous sur la section 'tableau des matchups' — elle vous dit ce que le joueur pensait de chaque archétype courant et comment il prévoyait de le battre." } },
          { text: "La **page MÉTA** de Champions Lab et le **Battle Bot** vous permettent de tester et analyser ces stratégies par vous-même." },
        ],
      },
    ],
  },
  {
    id: "tools",
    subsections: [
      {
        title: "Le Pokédex",
        content: [
          { text: "La page d'accueil de Champions Lab est un **Pokédex complet et recherchable** présentant les 159 Pokémon du roster Champions. Parcourez la grille, filtrez par type et recherchez par nom pour trouver n'importe quel Pokémon instantanément." },
          { text: "Cliquez sur n'importe quelle carte pour ouvrir une **fiche de stats détaillée** montrant les stats de base, le type, les talents et le pool de capacités complet. C'est votre référence principale pour construire une équipe.", tip: { type: "pro", text: "Utilisez les boutons de filtre de type en haut pour affiner les résultats. Vous cherchez un type Eau pour compléter votre équipe ? Un seul clic affiche toutes les options du roster." } },
          { text: "Chaque carte affiche les totaux de **Points de Stats (PS)**, les types et un sprite animé de qualité. Les cartes sont colorées par type principal pour scanner visuellement le roster d'un coup d'œil." },
          { text: "Les **Méga-Évolutions** sont affichées aux côtés de leurs formes de base. La fiche détaillée inclut des comparaisons de stats complètes pour voir exactement combien de puissance brute un Méga gagne." },
        ],
      },
      {
        title: "Créateur d'Équipe",
        content: [
          { text: "Le **Créateur d'Équipe** est votre atelier pour créer des équipes VGC compétitives. Ajoutez jusqu'à 6 Pokémon, assignez des capacités, talents, objets tenus et distribuez les Points de Stats avec un slider intuitif." },
          { text: "Le **tableau de couverture** en haut de votre équipe se met à jour en temps réel. Il cartographie la couverture offensive et les faiblesses défensives de votre équipe sur les 18 types, vous aidant à repérer les lacunes dangereuses avant de combattre.", tip: { type: "pro", text: "Regardez attentivement le tableau de couverture. Si un type est en rouge, votre équipe y est dangereusement vulnérable. Échangez un Pokémon qui résiste ou est immunisé à ce type." } },
          { text: "Vous ne savez pas par où commencer ? Chargez une des **équipes préréglées** construites par le moteur de simulation. Ce sont des compositions éprouvées d'archétypes performants que vous pouvez utiliser telles quelles ou personnaliser.", tip: { type: "champions", text: "La fonctionnalité 'Suggestions' analyse votre équipe actuelle en temps réel et recommande des Pokémon qui comblent les lacunes de couverture. Elle vérifie les types contre lesquels votre équipe a des difficultés et suggère des counters solides." } },
          { text: "**Importez et exportez** vos équipes sous forme de codes partageables compacts. Envoyez votre équipe à des amis, sauvegardez-la pour plus tard, ou collez des équipes trouvées en ligne. Le format est rapide et facile à partager." },
          { text: "Chaque slot de Pokémon vous permet de choisir parmi **toutes les capacités et tous les talents** disponibles dans le format Champions. Le slider PS distribue vos 66 points totaux sur les 6 stats, avec un maximum de 32 dans chacune.", tip: { type: "did-you-know", text: "Vous pouvez choisir votre Méga-Évolution directement dans le Créateur d'Équipe. Un seul Pokémon par équipe peut Méga-Évoluer — choisissez le Méga qui soutient le mieux votre stratégie globale." } },
        ],
      },
      {
        title: "Testeur d'Équipe",
        content: [
          { text: "Le **Testeur d'Équipe** vous permet d'opposer deux équipes dans une simulation complète pilotée par IA. Construisez ou importez deux équipes, définissez le nombre de combats (de 10 à 1000) et regardez les résultats se déployer avec des barres de progression animées." },
          { text: "Les résultats montrent les **taux de victoire globaux** pour chaque équipe avec des statistiques détaillées. Lancez plus de combats pour une plus grande confiance dans les chiffres.", tip: { type: "pro", text: "Lancez au moins 100 combats pour des résultats fiables. Les petits échantillons (10 à 20 combats) peuvent être trompeurs en raison des critiques aléatoires, des ratés et des variances d'effets secondaires." } },
          { text: "Le panneau **Analyse de Lead** décompose les taux de victoire pour chaque combinaison de lead possible. Cliquez sur n'importe quel lead pour révéler un **arbre de stratégie** expliquant le raisonnement tour par tour de l'IA pour ce matchup." },
          { text: "Parcourez les **scénarios de combat** individuels pour rejouer des parties spécifiques. Chaque scénario montre le log complet de combat avec les capacités utilisées, les dégâts infligés, les changements météo et les KO dans l'ordre chronologique." },
          { text: "Vous voulez modifier quelque chose ? Le bouton **Modifier l'Équipe** vous permet de modifier l'une ou l'autre équipe directement depuis l'écran de résultats et de relancer la simulation sans repartir de zéro.", tip: { type: "champions", text: "Utilisez le Testeur d'Équipe pour pratiquer des matchups spécifiques. Vous vous demandez si votre équipe peut gérer l'archétype méta le plus populaire ? Importez les deux équipes, lancez 200 combats et laissez les données parler." } },
        ],
      },
      {
        title: "Battle Bot",
        content: [
          { text: "Le **Battle Bot** lance un combat VGC en double complet de la Team Preview au K.O. final, entièrement contrôlé par l'IA. Regardez le combat se dérouler en temps réel avec des sprites animés, des barres de PV et des effets de capacités." },
          { text: "Chaque tour est consigné dans le **journal de combat** avec tous les détails : chiffres de dégâts, activations de talents, changements de météo et terrain, boosts de stats et états de statut. Rien n'est caché." },
          { text: "Le moteur de décision de l'IA évalue les **matchups de types, paliers de vitesse, seuils de PV et capacités disponibles** pour choisir le meilleur jeu à chaque tour. Il pèse les switches, les timings d'Abri, les capacités de zone et la sélection de cibles.", tip: { type: "did-you-know", text: "L'IA du Battle Bot évalue chaque combinaison d'actions possible à chaque tour, incluant le double Abri, les switches et les capacités de zone. Elle choisit le jeu avec la valeur attendue la plus haute." } },
          { text: "Utilisez le Battle Bot pour **visualiser comment se comporte votre équipe** en pratique. Il montre si votre plan de jeu fonctionne vraiment quand les deux camps jouent intelligemment." },
          { text: "Le **système de replay** vous permet de parcourir les combats terminés tour par tour. Passez en revue les moments critiques, voyez où la partie a basculé et apprenez des choix de l'IA.", tip: { type: "pro", text: "Après avoir construit une nouvelle équipe, lancez 5 à 10 parties Battle Bot et regardez les replays. Vous repérerez rapidement quels Pokémon sont mis K.O. trop facilement, quelles capacités ne sont jamais utilisées et quels leads fonctionnent le mieux." } },
        ],
      },
      {
        title: "Calculateur de Dégâts",
        content: [
          { text: "Le **Calculateur de Dégâts** affiche les plages de dégâts exactes entre n'importe quel attaquant et défenseur dans le format Champions. Sélectionnez deux Pokémon, choisissez une capacité et voyez les dégâts minimum et maximum instantanément." },
          { text: "Le calculateur utilise la **formule de dégâts complète** incluant les Points de Stats, talents, objets tenus, météo, terrain, boosts de stats, efficacité de type, STAB, réduction des capacités de zone et coups critiques. Rien n'est approximé." },
          { text: "Les résultats sont **codés par couleur** pour une lecture rapide : rouge signifie OHKO garanti, orange signifie 2HKO, jaune signifie 3HKO, et vert signifie que le défenseur survit confortablement.", tip: { type: "pro", text: "Utilisez le calculateur pour trouver des benchmarks de PS. Par exemple, vérifiez si investir 12 PS en PV permet à votre Pokémon de survivre à une attaque spécifique. Ces petits ajustements de stats font gagner de vraies parties." } },
          { text: "La disposition en écran partagé place l'**attaquant à gauche** et le **défenseur à droite** avec les dégâts clairement affichés entre eux. Inversez les rôles d'un simple clic pour vérifier le matchup inverse." },
          { text: "Tous les calculs utilisent la **formule officielle de dégâts Gen 9** adaptée au système de Points de Stats Champions, donc les chiffres correspondent exactement à ce qui se passe dans le moteur de simulation.", tip: { type: "champions", text: "Le Calculateur de Dégâts utilise le même moteur que le Battle Bot et le Testeur d'Équipe. Les chiffres que vous voyez ici sont identiques à ce qui se joue dans un combat IA complet." } },
        ],
      },
      {
        title: "Analyse MÉTA",
        content: [
          { text: "La **page MÉTA** est alimentée par les données de plus d'**1 000 000 de combats simulés** entre des équipes compétitives générées aléatoirement. Chaque Pokémon, capacité, talent et duo est classé par taux de victoire réel." },
          { text: "Le **tableau de classement Pokémon** affiche le taux d'utilisation et le taux de victoire pour chaque Pokémon du roster. Triez par taux de victoire pour trouver les meilleurs picks, ou par utilisation pour voir ce qui est le plus populaire." },
          { text: "**Les Meilleurs Duos** révèle les combinaisons de deux Pokémon aux meilleurs taux de victoire. Ce sont des paires à la synergie éprouvée sur des milliers de combats, et elles constituent d'excellents points de départ pour de nouvelles équipes.", tip: { type: "champions", text: "Les données des Meilleurs Duos se mettent à jour au fil des simulations. Revenez régulièrement pour voir si de nouvelles combinaisons sont apparues ou si la méta a évolué dans une nouvelle direction." } },
          { text: "**L'Analyse des Archétypes** décompose les taux de victoire par style d'équipe : Distorsion, Vent Arrière, Météo, Équilibre et Hyper Offense. Voyez quelles grandes stratégies performent le mieux en ce moment." },
          { text: "**Les Classements de Capacités** montrent quelles capacités ont les meilleurs taux de victoire globaux. Ces données vous aident à choisir entre des options similaires. Pyrobombe ou Vague de Chaleur est-elle plus efficace ? Les résultats de simulation vous donnent une réponse claire.", tip: { type: "pro", text: "Repérez les capacités avec des taux de victoire élevés mais une faible utilisation. Ce sont des pépites cachées que la plupart des joueurs n'ont pas encore adoptées. Les utiliser avant que la méta les rattrape vous donne un réel avantage." } },
          { text: "Des panneaux supplémentaires couvrent la **distribution des types**, **les breakdowns des équipes de tournoi** et les **insights de synergie**. La page MÉTA est l'outil le plus riche en données de Champions Lab pour comprendre le paysage compétitif." },
        ],
      },
    ],
  },
];
