import { Skill } from '../models/skill.model'

const EMPTY_ARTICLE = {
  definition: 'Contenu à venir.',
  proofs: [],
  selfCritique: 'Contenu à venir.',
  evolution: 'Contenu à venir.',
  relatedProjects: [],
}

export const SKILLS: Skill[] = [
  {
    name: 'Angular',
    slug: 'angular-front',
    summary:
      "Framework <strong>front-end</strong> pour créer la partie visible d'une application web de façon <strong>structurée</strong> et <strong>maintenable</strong>.",
    icon: '🅰️',
    level: 90,
    type: 'technical',
    article: {
      definition: `
      <strong>Angular</strong> est un <strong>framework front-end</strong> adapté aux <strong>projets SPA</strong>, au <strong>SSR</strong> (Server-Side Rendering) avec <strong>Angular Universal</strong> et aux <strong>sites statiques</strong>.

      Il repose sur une <strong>architecture modulaire</strong> (fonctionnement par modules) et sur les <strong>composants</strong>, qui constituent un élément central de ce framework. On peut les générer, comme les <strong>pipes</strong>, les <strong>directives</strong>, les <strong>fichiers de test</strong> ou les <strong>services</strong>, et ils constituent la base du fonctionnement de ce framework SPA, puisque chaque composant fonctionne de manière isolée tout en pouvant communiquer avec d’autres. Cela rend les <strong>pages dynamiques</strong> et la <strong>navigation fluide</strong>, car le <strong>DOM</strong> est mis à jour dynamiquement.

      Contrairement à <strong>Svelte</strong>, Angular est un framework <strong>lourd et structuré</strong> car il impose une <strong>organisation claire du code</strong> et un <strong>bon découpage</strong>.

      Angular utilise <strong>TypeScript</strong>, un langage basé sur <strong>JavaScript</strong> qui ajoute du <strong>typage</strong>. Lors du build, ce code est ensuite compilé en <strong>JavaScript</strong>, le langage interprété par les navigateurs.
      `,
      proofs: [
        {
          title: 'Développement d’interfaces de consultation métier',
          description:
            'J’ai développé avec <strong>Angular</strong> des <strong>interfaces de consultation</strong> permettant aux utilisateurs d’accéder à des données issues du <strong>CRM Dynamics 365</strong>, via un <strong>back-end en .NET</strong>, en structurant les <strong>écrans</strong> et les <strong>composants</strong> afin de rendre lisibles et exploitables des <strong>informations métier complexes</strong>.',
          result:
            'Résultat : les utilisateurs disposaient d’<strong>interfaces claires et cohérentes</strong> facilitant la <strong>consultation quotidienne des données</strong>, ce qui a amélioré leur <strong>autonomie</strong> et réduit les <strong>besoins de support</strong>.',
          link: '/real/plateforme-consultation-metier',
        },
        {
          title: 'Utilisation d’Angular pour le portfolio personnel',
          description:
            'Ce <strong>portfolio</strong> a été développé avec <strong>Angular</strong>.',
          result: '',
        },
      ],
      selfCritique: `
      Aujourd’hui, j’estime avoir un <strong>niveau intermédiaire</strong> sur <strong>Angular</strong>. Ayant déjà utilisé ce framework dans des <strong>contextes professionnels et personnels</strong>, je maîtrise les <strong>concepts fondamentaux du framework</strong>, la <strong>structuration des projets</strong>, le <strong>fonctionnement des composants</strong> et l’organisation globale du code avec les <strong>bonnes pratiques</strong>.

      Cette compétence occupe une <strong>place importante dans mon profil</strong>, car Angular correspond à ma vision d’un <strong>front-end structuré et maintenable</strong>. Cette compétence reste cohérente avec mon <strong>métier actuel</strong> et mon <strong>projet professionnel</strong>, même si ce n’est pas aujourd’hui le framework principal que j’utilise en entreprise dans le cadre de mon alternance.

      L’acquisition de cette compétence a été relativement rapide une fois les <strong>bases assimilées</strong> et grâce à un accompagnement par la <strong>documentation</strong> et l’application de ce framework dans <strong>plusieurs projets</strong>. J’aime réaliser mes projets avec <strong>Tailwind</strong> pour le CSS et j’utilise <strong>Firebase</strong> pour gérer le back et les <strong>connexions sécurisées</strong>.
      C’est encore aujourd’hui le <strong>framework que je prends par défaut</strong> pour mes projets front-end.
      Je considère aujourd’hui être à l’aise avec Angular, même si je continue à apprendre et à me perfectionner au fil de mes projets.

      Avec le recul, je considère qu’Angular demande un <strong>investissement initial</strong> sûrement plus important qu’avec d’autres frameworks front-end, mais il offre en contrepartie une <strong>excellente stabilité</strong> et une <strong>forte maintenabilité</strong> par sa conception et son architecture, ce qui correspond à ma vision d’un <strong>développement front-end de qualité</strong>.
      `,
      evolution: `
      Aujourd'hui, je souhaite continuer à <strong>approfondir ma maîtrise d'Angular</strong> en m'intéressant à des sujets plus avancés comme la <strong>gestion de la performance</strong>, la <strong>mise en place de tests automatisés</strong> (avec des agents IA intégrés pour générer les <strong>tests unitaires</strong> et d'<strong>intégration</strong>), ou encore au <strong>développement d'applications mobiles</strong> avec <strong>Angular et Ionic</strong>.
      Dans mes futurs projets personnels, je pense continuer à utiliser Angular, mais je reste ouvert à d'autres <strong>frameworks front-end</strong> comme <strong>Svelte</strong> pour du développement plus rapide et plus léger, ou encore <strong>React</strong> pour sa communauté et son fonctionnement, avec lequel je ne suis pas encore totalement à l'aise.
      `,
      relatedProjects: [
        {
          label: 'Plateforme de consultation métier',
          link: '/real/plateforme-consultation-metier',
        },
        {
          label: 'Intégration, industrialisation et déploiement de logiciel - PMT',
          link: '/real/ci-cd-deploy',
        },
      ],
    },
  },
  {
    name: 'Svelte',
    slug: 'svelte',
    summary:
      'Framework <strong>front-end</strong> pour créer des interfaces web <strong>modernes</strong>, <strong>fluides</strong> et <strong>rapides à charger</strong>.',
    icon: '📘',
    level: 95,
    type: 'technical',
    article: {
      definition: `
      <strong>Svelte</strong> est un <strong>framework front-end</strong> adapté aux <strong>projets SPA</strong>, mais aussi aux projets de type <strong>SSR</strong> (Server-Side Rendering, rendu côté serveur) avec <strong>SvelteKit</strong>, ainsi qu’aux <strong>sites statiques</strong>.

      Il repose sur une approche basée sur les <strong>composants</strong>, comme <strong>Angular</strong>, qui constituent la base de la structure de l’application.

      <strong>Svelte</strong> utilise <strong>JavaScript</strong> et peut également être utilisé avec <strong>TypeScript</strong>. Lors du build, le code est compilé en <strong>JavaScript optimisé</strong>, directement interprété par les navigateurs.

      C’est un framework conçu pour être <strong>simple à prendre en main</strong> et à utiliser. Il connaît une <strong>popularité croissante</strong> grâce à ses <strong>performances</strong> et à sa <strong>légèreté</strong> (il ne nécessite pas de surcouche comme le <strong>Virtual DOM</strong>).

      Avec <strong>Svelte 5</strong>, il y a un nouveau <strong>système de runes</strong>, permettant une <strong>gestion plus fine de la réactivité</strong>, notamment pour les <strong>états</strong> et les <strong>effets de bord</strong> au sein des composants.
      `,
      proofs: [
        {
          title: 'Applications experts-comptables chez Weekera',
          description:
            "J'ai contribué, de février 2024 à mars 2026, à la réalisation d'<strong>applications liées à la gestion RH et à la paie</strong> chez <strong>Weekera</strong>, avec des interventions à la fois sur le <strong>front-end</strong> et le <strong>back-end</strong>.",
          result:
            "Résultat : cette expérience m'a permis d'apprendre et d'approfondir mes connaissances sur plusieurs technologies comme <strong>Svelte</strong>, le <strong>WQL</strong> ou encore sur les <strong>tests</strong>.",
          link: '/real/applications-rh-paie-weekera',
        },
      ],
      selfCritique: `
      Je considère avoir un <strong>niveau intermédiaire</strong> sur <strong>Svelte</strong>, en tenant compte du fait que je n’ai pas encore pratiqué en profondeur les dernières nouveautés du framework, comme <strong>Svelte 5</strong> et les <strong>runes</strong>.

      Je ne suis pas non plus allé beaucoup plus loin que ce que j’ai appris chez Weekera à travers des projets personnels, car j’ai aujourd’hui une affinité plus forte avec <strong>Angular</strong>, liée à mon vécu professionnel et personnel, ce qui me permet de maintenir plus facilement mes projets personnels.

      Malgré cela, je souhaite quand même continuer à progresser sur Svelte, car c’est un framework intéressant, moderne, et qui me permet d’élargir l’éventail de compétences que je peux proposer à mes futurs employeurs.
      `,
      evolution: `
      Je souhaite continuer à approfondir ma maîtrise de <strong>Svelte</strong>, en particulier sur les nouveautés introduites avec <strong>Svelte 5</strong> et le fonctionnement des <strong>runes</strong>, qui changent la manière de gérer la réactivité dans le framework.

      Pour accompagner cette progression, je m'appuie aussi sur des ressources ciblées comme cet <strong>article de formation sur Svelte 5 et les runes</strong> :
      <a href="https://grafikart.fr/tutoriels/svelte-5-runes-2253" target="_blank" rel="noopener noreferrer">Formation Grafikart - Svelte 5 et les runes</a>.
      `,
      relatedProjects: [
        {
          label: 'Applications RH et paie chez Weekera',
          link: '/real/applications-rh-paie-weekera',
        },
      ],
    },
  },
  {
    name: 'Java / Spring Boot',
    slug: 'java-spring',
    summary:
      "Framework back-end pour gérer les données, les traitements et les règles de fonctionnement d'une application.",
    icon: '☕',
    level: 90,
    type: 'technical',
    article: {
      definition: `Java est un langage de programmation orienté objet.

Spring Boot est un framework qui simplifie l’utilisation de Java pour le développement d’applications web et d’API. Il permet de mettre en place le routage et les actions du back de la création à l'utilisation de la BDD afin de permettre de créer des API ou des microservices plus facilement.

Spring Boot facilite notamment la création d’API REST en intégrant des modules comme Spring Web pour la gestion des requêtes HTTP et Spring Data JPA pour l’accès aux données.

Ce qui rend Spring Boot intéressant est son faible couplage (le service dépend de l'interface, donc on peut changer l’implémentation sans casser le reste).
      `,
      proofs: [
        {
          title: 'PMT – Project Management Tool',
          description:
            "Réalisation d'une étude de cas pour le master chez ISCOD. Il s'agit d'un back-end avec Spring Boot permettant de gérer des utilisateurs, des projets, des tâches et des notifications via une API REST, avec une base de données PostgreSQL ainsi qu'un front-end avec Angular et Tailwind.",
          result:
            "Résultat : conception d’une API REST, gestion de la persistance des données avec JPA et intégration de tests ainsi qu’un pipeline CI/CD.",
          link: '/real/ci-cd-deploy',
        },
      ],
      selfCritique: `Je considère maîtriser les fondamentaux de Java et de Spring Boot, notamment sur la création d’API REST, la structuration d’un back-end et l’interaction avec une base de données via JPA.

Je ne pense pas être expert mais je suis à l’aise avec la mise en place de fonctionnalités classiques côté serveur. Je manque encore de recul sur des aspects plus avancés comme la sécurité avec Spring Security, l’optimisation des performances ou la mise en place d’architectures plus complexes.
      `,
      evolution: `      Je pense que dans de futurs projets je continuerai à faire du back-end avec Spring Boot car je me suis habitué au framework.
      `,
      relatedProjects: [
        {
          label: 'Intégration, industrialisation et déploiement de logiciel - PMT',
          link: '/real/ci-cd-deploy',
        },
      ],
    },
  },
  {
    name: 'Docker & DevOps',
    slug: 'docker-devops',
    summary:
      "Outils de déploiement et d'exploitation pour lancer, partager et maintenir une application dans un environnement stable.",
    icon: '🐳',
    level: 75,
    type: 'technical',
    article: {
      definition: `Docker est un outil de conteneurisation qui permet d’exécuter des applications de manière isolée.
     On peut aussi partager des images Docker et les déployer facilement sur différents environnements grâce à Docker Hub.

Le DevOps est un ensemble de pratiques visant à améliorer la collaboration entre les développeurs et les opérateurs (personnes qui s’occupent de faire fonctionner l’application en production), pour automatiser les processus de build, de test et de déploiement.

On utilise Docker pour avoir un même environnement de travail pour tous.

On peut aussi parler de Kubernetes qui est un outil qui permet de gérer automatiquement plusieurs conteneurs (Docker).

En termes de DevOps on peut parler des pipelines CI/CD qui permettent d’automatiser les étapes clés du cycle de vie d’une application, comme les tests, la construction des images et la mise en production.

      `,
      proofs: [
        {
          title: 'PMT – Project Management Tool',
          description:
            "Réalisation d'une étude de cas pour le master chez ISCOD. Il s'agit d'un back-end avec Spring Boot permettant de gérer des utilisateurs, des projets, des tâches et des notifications via une API REST, avec une base de données PostgreSQL ainsi qu'un front-end avec Angular et Tailwind.",
          result:
            "Résultat : conception d’une API REST, gestion de la persistance des données avec JPA et intégration de tests ainsi qu’un pipeline CI/CD.",
          link: '/real/ci-cd-deploy',
        },
      ],
      selfCritique: `Je suis à l’aise sur la mise en place de conteneurs, la création de Dockerfiles et l’utilisation de docker-compose pour orchestrer une application simple.
      `,
      evolution: `Pour l'instant, l'utilisation de Docker est un plus dans mon éventail de technologies maîtrisées, mais je ne l'utiliserai pas dans des projets personnels simples, car je n'en vois l'utilité que dans des équipes de développement ou pour des projets concrets où l'on a besoin de standardiser les environnements et de faciliter le déploiement.
      `,
      relatedProjects: [
        {
          label: 'Intégration, industrialisation et déploiement de logiciel - PMT',
          link: '/real/ci-cd-deploy',
        },
        {
          label: 'Applications RH et paie chez Weekera',
          link: '/real/applications-rh-paie-weekera',
        },
      ],
    },
  },
  {
    name: 'Tests (Vitest, Jest, Playwright)',
    slug: 'tests',
    summary:
      "Outils et méthodes de qualité pour vérifier automatiquement qu'une application fonctionne comme prévu.",
    icon: '🧪',
    level: 95,
    type: 'technical',
    article: {
      definition: `
      Pour moi, les <strong>tests</strong> servent à vérifier qu'une application fait bien ce qu'elle est censée faire, mais aussi à éviter de casser quelque chose sans s'en rendre compte quand le projet évolue. Ce n'est pas juste une étape à la fin du développement : c'est une manière de sécuriser le travail au fur et à mesure.

      J'utilise cette compétence à plusieurs niveaux. Les tests unitaires, avec des outils comme <strong>Vitest</strong> ou <strong>Jest</strong>, permettent de vérifier une fonction, un composant ou une logique précise. Les tests end-to-end, avec <strong>Playwright</strong>, vont plus loin : ils rejouent des parcours utilisateur complets, comme une connexion, une création de projet ou une validation de formulaire.

      Avec le temps, j'ai surtout compris que les tests ne remplacent pas la réflexion, mais qu'ils obligent à mieux comprendre ce qu'on développe. Si un comportement est difficile à tester, c'est souvent qu'il mérite d'être clarifié.
      `,
      proofs: [
        {
          title: 'Tests sur une plateforme de consultation métier',
          description: `
            Sur les outils de consultation métier liés au CRM, les tests ont été utilisés pour vérifier le bon fonctionnement des interfaces et des parcours avant leur mise en production. Le contexte demandait de la vigilance, car les données consultées pouvaient être sensibles et les droits d'accès avaient un impact direct sur les utilisateurs.
          `,
          result:
            "Résultat : les tests ont permis de sécuriser les développements, de réduire les erreurs visibles côté utilisateur et de suivre plus clairement la réalisation des fonctionnalités.",
          link: '/real/plateforme-consultation-metier',
        },
        {
          title: 'Tests front-end et back-end sur le projet PMT',
          description: `
            Sur l'étude de cas PMT, j'ai mis en place des tests côté front-end et back-end. Côté front, les tests couvraient des parcours importants comme l'inscription, la connexion, la création d'un projet, l'invitation d'un membre ou la création d'une tâche. Côté back-end, les tests permettaient de vérifier la logique serveur et l'accès aux données.
          `,
          result:
            "Résultat : le projet disposait d'une base plus fiable, avec des tests intégrés dans une logique de qualité, de couverture et d'industrialisation.",
          link: '/real/ci-cd-deploy',
        },
        {
          title: 'Qualité et tests automatisés chez Weekera',
          description: `
            Chez Weekera, j'ai travaillé sur des sujets liés à la qualité front, aux tests unitaires et aux tests end-to-end avec Playwright. J'ai aussi participé à l'amélioration d'outils internes, notamment autour du lancement ciblé de tests selon les fichiers modifiés.
          `,
          result:
            "Résultat : cette expérience m'a appris à voir les tests comme un vrai outil d'équipe, pas seulement comme une contrainte technique individuelle.",
          link: '/real/applications-rh-paie-weekera',
        },
      ],
      selfCritique: `
      Je suis aujourd'hui assez à l'aise avec la logique de test, surtout pour comprendre ce qu'il faut vérifier et pourquoi. J'ai pris de bonnes habitudes sur la validation des parcours importants, la vérification des cas limites et l'utilisation des tests pour éviter les régressions.

      Je sais aussi que je peux encore progresser sur la qualité d'écriture des tests. Un test utile doit être clair, stable et facile à maintenir. Il ne doit pas seulement faire monter un pourcentage de couverture. Mon point de vigilance, c'est donc de ne pas écrire des tests trop dépendants de détails d'implémentation, parce qu'ils peuvent devenir fragiles à la moindre évolution.

      Avec le recul, je pense que ma progression sur cette compétence vient surtout des projets où les tests avaient un vrai intérêt concret : éviter une régression, valider un parcours utilisateur ou faire gagner du temps à l'équipe.
      `,
      evolution: `
      Je veux continuer à renforcer cette compétence, notamment sur les tests end-to-end avec <strong>Playwright</strong>, car ils permettent de vérifier une application d'un point de vue très proche de l'utilisateur. C'est aussi un bon moyen de sécuriser les parcours critiques dans des applications métier.

      Je souhaite aussi progresser sur la stratégie de test : savoir quoi tester en priorité, jusqu'où aller dans le détail, et comment garder une suite de tests rapide, lisible et fiable. Mon objectif n'est pas seulement d'écrire plus de tests, mais d'écrire des tests qui aident réellement à maintenir le projet dans le temps.
      `,
      relatedProjects: [
        {
          label: 'Plateforme de consultation métier',
          link: '/real/plateforme-consultation-metier',
        },
        {
          label: 'Intégration, industrialisation et déploiement de logiciel - PMT',
          link: '/real/ci-cd-deploy',
        },
        {
          label: 'Applications RH et paie chez Weekera',
          link: '/real/applications-rh-paie-weekera',
        },
        {
          label: "Pilotage de projet d'ingénierie du logiciel - O'Fit",
          link: '/real/pilotage-projet-ofit',
        },
      ],
    },
  },
  {
    name: 'Communication en mode projet',
    slug: 'communication-projet',
    summary:
      "Compétence humaine pour expliquer clairement les besoins, partager l'avancement et coordonner le travail.",
    icon: '💬',
    level: 95,
    type: 'soft',
    article: {
      definition: `
      Pour moi, la <strong>communication en mode projet</strong>, ce n'est pas seulement faire des points d'avancement. C'est surtout réussir à rendre les choses compréhensibles pour les bonnes personnes : expliquer ce qui est fait, ce qui bloque, ce qui reste flou, et parfois reformuler un besoin qui n'est pas encore totalement posé.

      Je l'ai surtout appris sur le terrain. Entre les échanges avec un client en stage, les réunions avec des équipes métier ou les rituels d'équipe chez Weekera, j'ai compris qu'un projet avance mieux quand les informations circulent clairement. Même une bonne solution technique peut perdre beaucoup de valeur si elle est mal expliquée ou mal comprise.
      `,
      proofs: [
        {
          title: "Suivi hebdomadaire avec le client sur la refonte de l'UPC",
          description: `
            Pendant mon stage sur le site de l'UPC, nous faisions un point chaque semaine avec Monsieur Didier Garnier pour montrer l'avancement, valider les choix et ajuster le besoin. Comme le cahier des charges de départ n'était pas fiable, ces échanges étaient indispensables pour éviter de partir dans la mauvaise direction.
          `,
          result:
            "Résultat : le projet est resté cadré malgré un départ compliqué, et les décisions prises en réunion nous ont servi de fil conducteur pendant la réalisation.",
          link: '/real/refonte-site-upc-jean-mermoz',
        },
        {
          title: 'Échanges avec les équipes métier autour du CRM',
          description: `
            Sur la plateforme de consultation métier, j'ai travaillé avec différents pôles de l'entreprise pour comprendre leurs usages, leurs contraintes et les données dont ils avaient réellement besoin. Les échanges réguliers ont aussi permis de mieux suivre l'adoption des outils développés.
          `,
          result:
            "Résultat : les interfaces ont été pensées avec davantage de recul sur les usages réels, et pas seulement à partir d'une vision purement technique.",
          link: '/real/plateforme-consultation-metier',
        },
        {
          title: 'Rituels projet et clarification des besoins chez Weekera',
          description: `
            Chez Weekera, j'ai participé à des rituels comme les daily meetings, les sprint reviews ou les échanges de type 3 Amigos. Ces moments m'ont appris à mieux poser mes questions, à signaler les zones de doute et à relier les attentes métier aux contraintes techniques.
          `,
          result:
            "Résultat : j'ai gagné en aisance pour communiquer dans une équipe projet, notamment quand il faut clarifier un sujet avant de développer.",
          link: '/real/applications-rh-paie-weekera',
        },
      ],
      selfCritique: `
      J'ai progressé sur cette compétence parce que j'ai été confronté à des contextes où le flou pouvait vite coûter du temps. Aujourd'hui, je suis plus à l'aise pour poser des questions, expliquer ce que je fais et demander une validation quand un point me semble risqué.

      Mon axe d'amélioration, c'est d'être encore plus synthétique. J'ai parfois tendance à vouloir donner trop de contexte pour être sûr d'être compris. C'est utile dans certains cas, mais je dois continuer à apprendre à adapter mon niveau de détail selon la personne en face de moi.
      `,
      evolution: `
      Je veux continuer à développer une communication plus directe et plus utile au projet. Pour moi, ça passe par des comptes rendus plus clairs, des questions mieux préparées et une meilleure capacité à alerter tôt quand un besoin n'est pas assez précis.

      À terme, j'aimerais être capable de faire le lien naturellement entre les profils techniques et les profils métier, sans perdre les détails importants d'un côté comme de l'autre.
      `,
      relatedProjects: [
        {
          label: "Refonte du site de l'Unité de production culinaire (UPC) du Lycée Jean Mermoz",
          link: '/real/refonte-site-upc-jean-mermoz',
        },
        {
          label: 'Plateforme de consultation métier',
          link: '/real/plateforme-consultation-metier',
        },
        {
          label: 'Applications RH et paie chez Weekera',
          link: '/real/applications-rh-paie-weekera',
        },
        {
          label: "Pilotage de projet d'ingénierie du logiciel - O'Fit",
          link: '/real/pilotage-projet-ofit',
        },
      ],
    },
  },
  {
    name: 'Gestion de la relation client',
    slug: 'relation-client',
    summary:
      "Compétence humaine pour comprendre les attentes d'un client ou d'un utilisateur et y répondre de façon adaptée.",
    icon: '🤝',
    level: 85,
    type: 'soft',
    article: {
      definition: `
      Pour moi, la <strong>gestion de la relation client</strong>, c'est comprendre ce que la personne cherche vraiment à obtenir, même quand la demande n'est pas encore parfaitement formulée. Ce n'est pas seulement exécuter une consigne : il faut écouter, reformuler, vérifier, puis livrer quelque chose qui répond à un besoin concret.

      Je fais aussi la différence entre un client externe et un utilisateur métier en interne. Dans les deux cas, il faut rester clair, fiable et capable d'expliquer ses choix. Le client ou l'utilisateur ne voit pas toujours le code, mais il voit très vite si la solution l'aide ou non dans son quotidien.
      `,
      proofs: [
        {
          title: "Refonte du site de l'UPC avec un besoin à reconstruire",
          description: `
            Lors de mon stage au lycée Jean Mermoz, le cahier des charges initial ne correspondait plus vraiment au besoin. Avec mon binôme, nous avons donc échangé régulièrement avec le client pour reconstruire une direction de projet cohérente à partir de l'arborescence et des validations hebdomadaires.
          `,
          result:
            "Résultat : j'ai compris l'importance de ne pas appliquer une demande sans la questionner, surtout quand le contexte de départ est incomplet.",
          link: '/real/refonte-site-upc-jean-mermoz',
        },
        {
          title: 'Prise en compte des utilisateurs métier sur la plateforme CRM',
          description: `
            Sur les outils de consultation métier, les utilisateurs avaient besoin d'accéder à des données plus lisibles sans dépendre constamment du support. Il fallait donc comprendre leurs difficultés, mais aussi prendre en compte les contraintes de sécurité liées aux données du CRM.
          `,
          result:
            "Résultat : les outils ont permis à certains utilisateurs de gagner en autonomie, tout en me montrant qu'une solution doit aussi être accompagnée pour être réellement adoptée.",
          link: '/real/plateforme-consultation-metier',
        },
      ],
      selfCritique: `
      Je me sens plus à l'aise aujourd'hui pour échanger avec un client ou un utilisateur qu'au début de mon parcours. Le stage sur l'UPC m'a beaucoup aidé, parce que j'ai dû apprendre à clarifier une demande au fur et à mesure au lieu d'attendre un besoin parfaitement rédigé.

      Je dois encore progresser sur l'anticipation des besoins implicites. Il m'arrive de me concentrer d'abord sur la demande exprimée, alors que le vrai problème se trouve parfois dans l'usage, dans l'organisation ou dans une contrainte que l'utilisateur ne formule pas directement.
      `,
      evolution: `
      Je veux continuer à améliorer ma manière de recueillir les besoins. Pour cela, je pense qu'il faut poser davantage de questions sur l'usage réel : qui utilise l'outil, à quel moment, avec quelles contraintes, et ce qui pose problème aujourd'hui.

      Mon objectif est de ne pas seulement livrer une fonctionnalité correcte, mais une fonctionnalité qui a du sens pour la personne qui va s'en servir.
      `,
      relatedProjects: [
        {
          label: "Refonte du site de l'Unité de production culinaire (UPC) du Lycée Jean Mermoz",
          link: '/real/refonte-site-upc-jean-mermoz',
        },
        {
          label: 'Plateforme de consultation métier',
          link: '/real/plateforme-consultation-metier',
        },
        {
          label: "Pilotage de projet d'ingénierie du logiciel - O'Fit",
          link: '/real/pilotage-projet-ofit',
        },
      ],
    },
  },
  {
    name: 'Travail en équipe & collaboration',
    slug: 'travail-equipe',
    summary:
      'Compétence humaine pour collaborer, partager les informations utiles et faire avancer un travail commun.',
    icon: '👥',
    level: 95,
    type: 'soft',
    article: {
      definition: `
      Le <strong>travail en équipe</strong>, pour moi, c'est avancer sans rester enfermé dans son propre sujet. Il faut savoir partager l'information, demander de l'aide quand c'est nécessaire, relire le travail des autres, accepter les retours et garder une vision commune du projet.

      J'ai aussi compris qu'une équipe ne fonctionne pas seulement parce que chacun fait sa partie. Elle fonctionne quand les membres arrivent à se coordonner, à prévenir les blocages et à garder une certaine confiance dans la manière de travailler ensemble.
      `,
      proofs: [
        {
          title: 'Travail en binôme sur la refonte du site UPC',
          description: `
            Le projet UPC a été mené avec un autre stagiaire. Nous avons dû nous répartir les tâches, garder une cohérence sur le site et échanger régulièrement avec notre maître de stage pour ne pas avancer chacun dans une direction différente.
          `,
          result:
            "Résultat : cette première expérience m'a appris qu'un projet en binôme demande autant d'organisation que de technique.",
          link: '/real/refonte-site-upc-jean-mermoz',
        },
        {
          title: 'Collaboration avec plusieurs pôles sur la plateforme métier',
          description: `
            Sur la plateforme de consultation métier, le travail ne se limitait pas au développement. Il fallait échanger avec les équipes métier, le service informatique et les responsables des différents pôles pour ajuster les fonctionnalités et limiter les incompréhensions.
          `,
          result:
            "Résultat : j'ai appris à intégrer plusieurs points de vue dans un même projet, même quand les attentes n'étaient pas toujours alignées au départ.",
          link: '/real/plateforme-consultation-metier',
        },
        {
          title: 'Travail dans une équipe produit chez Weekera',
          description: `
            Chez Weekera, j'ai travaillé dans une organisation agile avec des sprints, des daily meetings, des reviews et des échanges réguliers autour des User Stories. J'ai aussi participé à des sujets plus transverses autour de la qualité et des tests.
          `,
          result:
            "Résultat : j'ai gagné en méthode dans ma manière de collaborer, notamment sur le partage d'informations et la prise en compte des impacts fonctionnels.",
          link: '/real/applications-rh-paie-weekera',
        },
      ],
      selfCritique: `
      J'aime être autonome, donc mon principal point de vigilance est de ne pas trop garder un sujet pour moi quand je pense pouvoir le résoudre seul. Dans une équipe, attendre trop longtemps avant de partager un blocage peut faire perdre du temps à tout le monde.

      J'ai progressé sur ce point avec les projets en entreprise, surtout chez Weekera, où les rituels obligent à rendre visibles les difficultés et les avancées. Je dois continuer à garder ce réflexe, même sur des sujets où je me sens à l'aise.
      `,
      evolution: `
      Je veux continuer à devenir plus régulier dans ma manière de collaborer : mieux documenter ce que je fais, donner de la visibilité plus tôt, et ne pas attendre qu'un sujet soit terminé pour en parler.

      Mon objectif est d'être quelqu'un sur qui une équipe peut compter, pas seulement pour produire du code, mais aussi pour fiabiliser le travail collectif.
      `,
      relatedProjects: [
        {
          label: "Refonte du site de l'Unité de production culinaire (UPC) du Lycée Jean Mermoz",
          link: '/real/refonte-site-upc-jean-mermoz',
        },
        {
          label: 'Plateforme de consultation métier',
          link: '/real/plateforme-consultation-metier',
        },
        {
          label: 'Applications RH et paie chez Weekera',
          link: '/real/applications-rh-paie-weekera',
        },
        {
          label: "Pilotage de projet d'ingénierie du logiciel - O'Fit",
          link: '/real/pilotage-projet-ofit',
        },
      ],
    },
  },
  {
    name: 'Adaptabilité & autonomie',
    slug: 'adaptabilite-autonomie',
    summary:
      "Compétence humaine pour s'adapter rapidement, apprendre vite et avancer avec autonomie quand c'est nécessaire.",
    icon: '🧭',
    level: 100,
    type: 'soft',
    article: {
      definition: `
      L'<strong>adaptabilité</strong> et l'<strong>autonomie</strong>, pour moi, vont ensemble. C'est être capable d'arriver dans un contexte nouveau, de comprendre progressivement comment il fonctionne, puis d'avancer sans attendre qu'on me donne toutes les réponses.

      Ce n'est pas travailler seul dans son coin. C'est plutôt savoir chercher, tester, demander au bon moment et ajuster sa manière de faire selon le projet. J'ai souvent eu à apprendre de nouvelles technologies, de nouveaux métiers ou de nouvelles façons de travailler, et c'est une partie de mon profil que je considère comme importante.
      `,
      proofs: [
        {
          title: "Adaptation à un cahier des charges incomplet sur l'UPC",
          description: `
            Sur la refonte du site de l'UPC, le besoin de départ n'était pas totalement fiable. Il a fallu s'adapter au fil des échanges avec le client, reconstruire une direction cohérente et avancer malgré un cadre qui évoluait pendant le stage.
          `,
          result:
            "Résultat : cette expérience m'a appris à rester souple face à un besoin mouvant, tout en gardant une méthode de travail claire.",
          link: '/real/refonte-site-upc-jean-mermoz',
        },
        {
          title: 'Adaptation à un contexte métier complexe autour du CRM',
          description: `
            Sur la plateforme de consultation métier, il fallait comprendre à la fois les données du CRM, les droits d'accès, les contraintes de sécurité et les besoins des différents pôles. Le projet demandait donc de s'adapter à un environnement métier sensible et pas uniquement à un sujet technique.
          `,
          result:
            "Résultat : j'ai appris à avancer dans un contexte où la technique devait rester alignée avec des règles métier et des enjeux de confidentialité.",
          link: '/real/plateforme-consultation-metier',
        },
        {
          title: 'Réalisation complète du projet PMT',
          description: `
            Pour l'étude de cas PMT, j'ai dû prendre en charge plusieurs dimensions du projet : conception, front-end Angular, back-end Spring Boot, base de données, tests, Docker, documentation et pipeline CI/CD.
          `,
          result:
            "Résultat : ce projet m'a demandé d'être autonome sur l'organisation du travail et sur l'apprentissage des outils nécessaires pour livrer un ensemble cohérent.",
          link: '/real/ci-cd-deploy',
        },
        {
          title: 'Montée en compétence chez Weekera',
          description: `
            Chez Weekera, je suis arrivé sur un produit existant, avec des technologies et un domaine métier que je ne connaissais pas encore, notamment Svelte, WQL, la paie, la DSN et les tests end-to-end.
          `,
          result:
            "Résultat : j'ai appris à me repérer dans une base de code déjà en place, à comprendre les habitudes d'équipe et à progresser sur des sujets nouveaux sans repartir de zéro.",
          link: '/real/applications-rh-paie-weekera',
        },
      ],
      selfCritique: `
      L'autonomie est un vrai point fort pour moi, mais elle peut aussi devenir un piège si je reste trop longtemps sur un problème avant de demander un avis. J'ai parfois tendance à vouloir aller au bout seul, surtout quand je pense que la solution est proche.

      Avec l'expérience, je fais davantage la différence entre être autonome et être isolé. Être autonome, ce n'est pas tout résoudre sans aide, c'est savoir avancer intelligemment en utilisant les bonnes ressources au bon moment.
      `,
      evolution: `
      Je veux continuer à garder cette capacité d'adaptation, parce qu'elle m'aide beaucoup dans les environnements techniques qui bougent vite. En revanche, je veux aussi mieux cadrer mes recherches et valider plus tôt mes choix quand un sujet peut avoir un impact sur d'autres personnes.

      Mon objectif est de rester quelqu'un qui apprend vite, tout en étant plus précis dans sa manière de demander, de vérifier et de partager ce qu'il découvre.
      `,
      relatedProjects: [
        {
          label: "Refonte du site de l'Unité de production culinaire (UPC) du Lycée Jean Mermoz",
          link: '/real/refonte-site-upc-jean-mermoz',
        },
        {
          label: 'Plateforme de consultation métier',
          link: '/real/plateforme-consultation-metier',
        },
        {
          label: 'Intégration, industrialisation et déploiement de logiciel - PMT',
          link: '/real/ci-cd-deploy',
        },
        {
          label: 'Applications RH et paie chez Weekera',
          link: '/real/applications-rh-paie-weekera',
        },
        {
          label: "Pilotage de projet d'ingénierie du logiciel - O'Fit",
          link: '/real/pilotage-projet-ofit',
        },
      ],
    },
  },
  {
    name: "Esprit d'analyse & rigueur",
    slug: 'analyse-rigueur',
    summary:
      'Compétence humaine pour comprendre un problème, structurer la réflexion et proposer des solutions fiables.',
    icon: '🧠',
    level: 90,
    type: 'soft',
    article: {
      definition: `
      Pour moi, l'<strong>esprit d'analyse</strong> et la <strong>rigueur</strong>, c'est prendre le temps de comprendre un problème avant de chercher à le résoudre. Ça passe par l'analyse du besoin, des contraintes, des risques, mais aussi par une manière de travailler qui limite les erreurs : structurer, tester, relire et documenter quand c'est nécessaire.

      Cette compétence est devenue de plus en plus importante dans mon parcours. Plus les projets sont proches du métier ou de la production, plus je me rends compte qu'un détail mal compris peut avoir des conséquences sur l'utilisateur, sur les données ou sur la maintenabilité du projet.
      `,
      proofs: [
        {
          title: "Analyse d'un cahier des charges incorrect sur le projet UPC",
          description: `
            Sur la refonte du site UPC, le cahier des charges initial ne correspondait pas vraiment au besoin. Nous avons donc dû reprendre l'arborescence, questionner les attentes et reconstruire un cadre de travail plus fiable avec le client.
          `,
          result:
            "Résultat : cette situation m'a appris à ne pas considérer un document comme automatiquement juste, même quand il sert de point de départ officiel.",
          link: '/real/refonte-site-upc-jean-mermoz',
        },
        {
          title: 'Analyse des données et des accès sur la plateforme métier',
          description: `
            Sur les outils liés au CRM, la rigueur était importante parce que les données étaient sensibles et que les rôles utilisateurs pouvaient avoir un impact direct sur la confidentialité des informations.
          `,
          result:
            "Résultat : j'ai mieux compris l'importance de vérifier les droits, les flux de données et les conséquences possibles d'une fonctionnalité avant sa mise en place.",
          link: '/real/plateforme-consultation-metier',
        },
        {
          title: `Structuration complète de l'étude de cas PMT`,
          description: `
            Sur PMT, j'ai dû concevoir le modèle de données, préparer les livrables, mettre en place les tests, dockeriser les applications et documenter le processus de déploiement. Le projet demandait une approche assez carrée pour rester cohérent de bout en bout.
          `,
          result:
            "Résultat : j'ai renforcé ma capacité à organiser un projet technique complet et à vérifier sa qualité au-delà du simple développement des fonctionnalités.",
          link: '/real/ci-cd-deploy',
        },
        {
          title: 'Qualité et tests dans un contexte applicatif existant',
          description: `
            Chez Weekera, j'ai travaillé sur du code existant, des corrections de bugs et des sujets de tests. Cela demandait de comprendre les impacts avant de modifier, surtout dans un domaine sensible comme la paie.
          `,
          result:
            "Résultat : cette expérience m'a rendu plus attentif aux effets de bord, aux cas limites et à la qualité globale d'une évolution.",
          link: '/real/applications-rh-paie-weekera',
        },
      ],
      selfCritique: `
      Je suis assez rigoureux dans ma manière de travailler, surtout quand un sujet touche aux données, aux tests ou à la logique métier. J'aime comprendre ce que je fais et éviter de corriger un symptôme sans comprendre la cause.

      Mon point de vigilance, c'est de ne pas passer trop de temps à vouloir tout sécuriser avant d'avancer. La rigueur est utile, mais elle doit rester au service du projet. Je dois donc continuer à trouver le bon équilibre entre analyse, action et validation.
      `,
      evolution: `
      Je veux continuer à renforcer cette compétence en m'appuyant davantage sur des méthodes concrètes : tests automatisés, documentation courte mais utile, critères d'acceptation plus clairs et meilleure anticipation des cas limites.

      Avec le temps, j'aimerais que cette rigueur devienne encore plus naturelle dans mon travail, pas comme une étape lourde en plus, mais comme une façon normale de construire des solutions fiables.
      `,
      relatedProjects: [
        {
          label: "Refonte du site de l'Unité de production culinaire (UPC) du Lycée Jean Mermoz",
          link: '/real/refonte-site-upc-jean-mermoz',
        },
        {
          label: 'Plateforme de consultation métier',
          link: '/real/plateforme-consultation-metier',
        },
        {
          label: 'Intégration, industrialisation et déploiement de logiciel - PMT',
          link: '/real/ci-cd-deploy',
        },
        {
          label: 'Applications RH et paie chez Weekera',
          link: '/real/applications-rh-paie-weekera',
        },
        {
          label: "Pilotage de projet d'ingénierie du logiciel - O'Fit",
          link: '/real/pilotage-projet-ofit',
        },
      ],
    },
  },
]

