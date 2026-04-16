import { Realisation } from '../models/realisation.model'

export const REALISATIONS: Realisation[] = [
  {
    title: "Refonte du site de l'Unité de production culinaire (UPC) du Lycée Jean Mermoz",
    slug: 'refonte-site-upc-jean-mermoz',
    shortDescription:
      "Stage de 2 mois consacré à la refonte en PHP du site de l'Unité de production culinaire (UPC), avec suivi client hebdomadaire et mise en ligne sur OVH.",
    externalLink: {
      label: 'Unité de production culinaire (UPC) - Lycée Jean Mermoz',
      url: 'https://groupcom34.ovh',
      spotlightTitle: 'Unité de production culinaire (UPC) - Lycée Jean Mermoz',
      spotlightDescription:
        'Pour plus de détails sur ce projet, vous pouvez consulter le site associé.',
    },
    article: {
      presentation:
        "Cette réalisation correspond à un stage effectué sur une durée de 2 mois, du 01/02/2021 au 26/03/2021, dans une salle annexe du Lycée Jean Mermoz. J’ai mené ce projet avec Olivier Barrière, un autre stagiaire issu de la même classe que moi. Sous la responsabilité de notre maître de stage et client, Monsieur Didier Garnier, nous avions pour mission de concevoir la refonte du site de l’Unité de production culinaire (UPC).",
      objectives:
        "L’objectif était de proposer une nouvelle version du site de l’UPC, plus claire et plus adaptée aux besoins réels du client. Le point de départ était particulier, car le cahier des charges initial était erroné et suivait la progression d’une ancienne équipe composée de deux stagiaires. Nous avons donc utilisé l’arborescence du site comme base de travail pour reconstruire un cadre de projet cohérent.",
      steps:
        "Pour répondre aux attentes, nous avons organisé avec Monsieur Didier Garnier des réunions tous les jeudis afin de montrer l’avancée du projet, ajuster ce qui avait été produit et faire émerger de nouvelles idées. J’ai consigné les conclusions de chaque réunion dans un cahier de notes pour garder une trace claire des décisions. Au fil du stage, nous avons aussi eu l’opportunité de visiter le bâtiment de l’UPC pour mieux comprendre le travail des employés et le contexte métier. Le site a été codé en PHP, avec Wamp pour le développement en local, MySQL pour la base de données et OVH pour l’hébergement. L’arborescence couvrait notamment les documents de commande, les menus d’affichage avec logos, les menus de commande des repas, les bons de commande, les fiches techniques des recettes et ingrédients par catégories, les pages d’affichage nutrition, produits locaux et circuit court, environnement, les commissions de menus, les archives, les photos et le courrier.",
      actors:
        "Les acteurs principaux étaient Monsieur Didier Garnier en tant que client et maître de stage, Olivier Barrière comme co-stagiaire, et moi-même dans la conception et la réalisation du site. Le projet reposait sur un travail en binôme et sur des échanges réguliers avec le client pour faire évoluer le besoin au fil du stage.",
      results:
        "Le stage a permis de produire une refonte exploitable et de mettre le site en ligne. Au-delà du résultat technique, ce projet m’a appris à travailler sur un besoin mouvant, à faire valider régulièrement mes choix et à transformer une arborescence fonctionnelle en site concret.",
      future:
        "Avec plus de temps, il aurait été intéressant d’aller plus loin sur l’ergonomie, la documentation technique et la maintenance à long terme. Le projet aurait aussi pu bénéficier d’un cadrage initial plus solide afin de gagner du temps sur certaines clarifications fonctionnelles.",
      criticalView:
        "Ce stage a été très formateur car il m’a appris à rester adaptable face à un cahier des charges incomplet, à mieux communiquer avec un client et à suivre un projet dans la durée. J’y ai renforcé ma rigueur, mon sens de l’organisation et ma capacité à collaborer efficacement avec un binôme. Avec le recul, cette expérience m’a surtout montré qu’un bon projet ne repose pas seulement sur le code, mais aussi sur la clarté des échanges et le suivi régulier des besoins.",
    },
    relatedSkills: [
      {
        label: 'Communication en mode projet',
        link: 'communication-projet',
      },
      {
        label: 'Gestion de la relation client',
        link: 'relation-client',
      },
      {
        label: 'Travail en équipe & collaboration',
        link: 'travail-equipe',
      },
      {
        label: "Esprit d'analyse & rigueur",
        link: 'analyse-rigueur',
      },
    ],
  },
  {
    title: 'Plateforme de consultation métier',
    slug: 'plateforme-consultation-metier',
    shortDescription:
      'Développement d’interfaces Angular permettant la consultation de données métier issues d’un CRM (outil de gestion de la relation client).',
    article: {
      presentation:
        'Projet de développement d’une application de consultation métier destinée à faciliter l’accès à des données internes.',
      objectives:
        'Permettre aux utilisateurs de consulter des données complexes de manière claire, fiable et autonome.',
      steps:
        'Analyse des besoins, conception des écrans, développement Angular, intégration avec un back-end .NET, tests et déploiement.',
      actors:
        'Collaboration avec les équipes métier et techniques pour valider les besoins et les usages.',
      results:
        'Application utilisée en interne, amélioration de la lisibilité des données et réduction des sollicitations du support.',
      future:
        'La solution pourrait évoluer vers davantage de fonctionnalités et une extension à d’autres métiers.',
      criticalView:
        'Ce projet m’a permis de renforcer ma capacité à concevoir des interfaces adaptées aux besoins réels des utilisateurs.',
    },
    relatedSkills: [
      {
        label: 'Angular / Front-end',
        link: 'angular-front',
      },
    ],
    relatedParcours: [
      {
        label: 'Étape 4 - YNOV / A+ Énergies',
        link: 'ynov-aplus-energies',
      },
    ],
  },
  {
    title: 'Applications RH et paie chez Weekera',
    slug: 'applications-rh-paie-weekera',
    shortDescription:
      'Applications RH et paie à destination des experts comptables.',
    externalLink: {
      label: 'Découvrir le site de Weekera',
      url: 'https://www.weekera.com/',
      spotlightTitle: "Consulter le site de l'entreprise",
      spotlightDescription:
        "Pour mieux comprendre l'entreprise et l'univers du projet, vous pouvez consulter le site de Weekera.",
    },
    article: {
      presentation: `Weekera a commencé en 2022, mais le projet était dans les tuyaux depuis 2021, avec pour ambition de devenir un acteur majeur dans le domaine des ressources humaines et de la paie.

      Il s'agit d'un projet de développement d'une application web destinée à faciliter la gestion des ressources humaines et de la paie pour les experts comptables.

      L'application vise à centraliser les données, automatiser les processus et offrir une interface simple à comprendre pour les utilisateurs finaux.

      Aujourd'hui, c'est une entreprise en pleine croissance avec des équipes de développement et de support qui travaillent ensemble pour faire évoluer l'application.
      `,
      objectives: `
      <h3>Objectif principal</h3>
      Le projet a pour objectif principal de <strong>simplifier</strong> et d’<strong>optimiser</strong> la gestion des <strong>ressources humaines</strong> et de la <strong>paie</strong> pour les <strong>experts-comptables</strong>.

      Pour répondre à cet objectif, plusieurs <strong>axes structurants</strong> ont été définis. Le premier consiste à <strong>centraliser les données</strong>, afin de regrouper les informations <strong>RH</strong> et <strong>paie</strong> dans un seul outil et d’éviter la dispersion entre plusieurs supports. Le second repose sur l’<strong>automatisation des processus</strong>, avec l’idée de réduire les <strong>tâches manuelles</strong>, de limiter les <strong>erreurs</strong> et de faire gagner du temps sur des opérations récurrentes.

      <h3>Contexte métier</h3>
      Ce besoin prend encore plus de sens quand on regarde le <strong>contexte métier</strong> dans lequel s’inscrit Weekera. Le projet évolue dans l’univers des <strong>ressources humaines</strong> et de la <strong>paie</strong>, un domaine central pour les entreprises comme pour les cabinets d’<strong>expertise comptable</strong>. Les <strong>experts-comptables</strong> y occupent une place importante, car ils accompagnent leurs clients sur toute la partie administrative et sociale, notamment autour de la production des <strong>bulletins de paie</strong>, des déclarations sociales comme la <strong>DSN</strong> (<strong>Déclaration Sociale Nominative</strong>, c’est-à-dire la transmission mensuelle des données sociales aux organismes concernés), et du suivi des <strong>obligations légales</strong>.

      C’est aussi un environnement particulièrement exigeant. Les <strong>règles</strong> changent régulièrement, entre <strong>droit du travail</strong>, <strong>cotisations</strong> et <strong>conventions collectives</strong>, ce qui oblige les professionnels à rester en veille en permanence. Dans ce type d’environnement, une <strong>erreur</strong> peut vite avoir des conséquences importantes, aussi bien sur le plan <strong>financier</strong> que <strong>juridique</strong>.

      À cela s’ajoute une réalité très concrète du terrain : les <strong>outils historiquement utilisés</strong> dans ce secteur sont souvent <strong>anciens</strong>, <strong>fragmentés</strong> ou <strong>peu intuitifs</strong>. Les utilisateurs doivent parfois jongler entre plusieurs logiciels, ce qui ralentit le travail, rend certaines actions plus lourdes et augmente les risques d’erreurs.

      <h3>Enjeux du projet</h3>
      Une attention particulière est aussi portée à l’<strong>expérience utilisateur</strong>. L’application doit rester <strong>simple à comprendre</strong>, <strong>fluide à utiliser</strong> et suffisamment <strong>intuitive</strong> pour accompagner des utilisateurs qui ont avant tout un <strong>besoin métier</strong>. Dans un domaine aussi sensible que la paie, la <strong>fiabilité</strong> et la <strong>sécurité des données</strong> sont également des enjeux majeurs, tout comme la capacité de l’outil à améliorer concrètement la <strong>productivité</strong> dans la gestion quotidienne des dossiers.

      C’est précisément dans ce contexte que <strong>Weekera</strong> cherche à apporter une réponse plus moderne. L’idée est de proposer une solution <strong>centralisée</strong>, plus <strong>automatisée</strong> et réellement <strong>pensée pour l’utilisateur</strong>, afin de simplifier la gestion quotidienne des dossiers tout en garantissant la fiabilité des données. L’objectif n’est pas seulement de numériser l’existant, mais de fournir un outil capable d’accompagner les professionnels dans leurs <strong>contraintes réelles</strong>, avec plus de <strong>clarté</strong>, plus d’<strong>efficacité</strong> et une meilleure <strong>expérience utilisateur</strong>.
      `,
      steps: `
      <h3>Organisation du travail</h3>
      En ce qui concerne ma mission sur l’application, j’évoluais dans un environnement <strong>agile</strong>, avec des <strong>sprints de 2 à 3 semaines</strong> et des réunions régulières qui permettaient de structurer le travail de l’équipe de manière claire.

      Tous les matins, nous faisions un DSM (<strong>Daily Stand-up Meeting</strong>), une réunion rapide de 15 minutes pour faire le point sur l’avancement, les difficultés rencontrées et les priorités du jour.

      Le développement reposait sur des <strong>User Stories (US)</strong> préparées en amont, puis complétées lors de réunions avec les différents acteurs de l’US. L’objectif de ces échanges était de s’assurer que les besoins étaient bien compris, d’anticiper les cas plus complexes et d’adapter le sujet avant le développement.

      Une fois le développement terminé, la fonctionnalité était ensuite présentée lors des <strong>sprint reviews</strong>.

      <h3>Chronologie de mon parcours sur le projet</h3>
      <div class="real-timeline">
        <article class="real-timeline-item">
          <h4>Intégration - 2 semaines</h4>
          <p>Ma prise de poste a commencé par une phase d’intégration pour comprendre l’environnement du projet, les outils utilisés et les règles de travail de l’équipe.</p>
          <ul>
            <li>Formation aux outils et à l’environnement</li>
            <li>Prise en main du projet</li>
          </ul>
        </article>

        <article class="real-timeline-item">
          <h4>Pôle Front-end - environ 1 an et demi</h4>
          <p>J’ai ensuite intégré le pôle <strong>front-end</strong>, sur lequel j’ai travaillé pendant environ un an et demi sur différentes pages de l’application. Cette phase m’a surtout permis de monter en compétence sur le produit et sur sa structure technique.</p>
          <ul>
            <li>Développement sur différentes pages de l’application</li>
            <li>Correction de bugs</li>
            <li>Optimisation du code</li>
            <li>Mise à jour des bibliothèques</li>
          </ul>
        </article>

        <article class="real-timeline-item">
          <h4>Formation OWASP</h4>
          <p>J’ai également suivi une formation dédiée aux bases de la sécurité applicative à travers le prisme OWASP, afin de mieux intégrer ces enjeux dans mon travail quotidien.</p>
          <ul>
            <li>Sensibilisation aux principaux risques de sécurité applicative</li>
            <li>Compréhension des bonnes pratiques à intégrer dans les développements</li>
            <li>Montée en vigilance sur les sujets de sécurité dans le projet</li>
          </ul>
        </article>

        <article class="real-timeline-item">
          <h4>Transition vers le pôle E2E</h4>
          <p>Par la suite, j’ai évolué vers un pôle davantage orienté <strong>qualité</strong> et <strong>tests automatisés</strong>. J’y ai travaillé sur l’amélioration des tests côté front, mais aussi sur des outils destinés à faire gagner du temps aux équipes.</p>
          <ul>
            <li>Optimisation des tests unitaires front</li>
            <li>Amélioration des outils de validation</li>
            <li>Création d’un script Bash lancé au pre-push</li>
            <li>Lancement ciblé des tests liés aux fichiers modifiés</li>
            <li>Gain de temps pour les équipes de développement</li>
          </ul>
        </article>

        <article class="real-timeline-item">
          <h4>Tests end-to-end avec Playwright</h4>
          <p>J’ai enfin travaillé sur un repository dédié aux <strong>tests end-to-end</strong>, en utilisant <strong>Playwright</strong> pour vérifier le bon fonctionnement global de l’application dans des conditions proches de la production.</p>
          <ul>
            <li>Travail sur un repository dédié</li>
            <li>Mise en place et évolution des tests E2E</li>
            <li>Validation globale de l’application</li>
          </ul>
        </article>
      </div>
      `,
      actors: `Plusieurs acteurs interviennent autour du projet. D’abord, il y a les utilisateurs finaux, en particulier les experts-comptables et les gestionnaires de paie, puisque ce sont eux qui manipulent l’application au quotidien et qui expriment les besoins.

      Côté produit, le projet s’appuie aussi sur la collaboration des équipes de développement, qui font évoluer les fonctionnalités, corrigent les anomalies et veillent au bon fonctionnement de l'application.

      Dans ce projet, mon rôle s’inscrit dans la réalisation technique de l’application. Cela m’amène à intervenir sur le code, mais aussi à participer à des échanges qui servent à clarifier les besoins, anticiper les impacts et sécuriser les évolutions du projet.
      `,
      results: `Personnellement, ce projet m'a permis de développer mes compétences techniques en développement web, que ce soit sur le front ou le back, sur des stacks comme Svelte, WQL et PostgreSQL, mais aussi sur l’apprentissage des données sensibles à travers la formation OWASP, la mise en place de tests unitaires et de parcours utilisateur avec Playwright, l’utilisation de Docker en entreprise, la planification de tâches et la vie en entreprise.

      J’ai également mieux compris le cycle d’un projet impliquant plusieurs équipes métier, développé des compétences en gestion de projet et appris à mener des analyses de besoins à travers différents échanges.

      Côté entreprise, mon apport a permis de faire évoluer l’application, d’améliorer la qualité du code et de contribuer à la mise en place de tests plus robustes avec une exécution plus rapide. J’ai aussi pu participer à des échanges qui ont permis de clarifier certains besoins et d’anticiper les impacts de certaines évolutions, ce qui a contribué à sécuriser le projet dans son ensemble.`,
      future: `Dans une perspective future, il faudrait continuer à faire évoluer l’application en fonction des besoins des utilisateurs et des évolutions du marché et de la réglementation, ce qui demande une veille constante.

      Il serait intéressant d’utiliser de manière plus efficace les outils mis à disposition et, potentiellement, d’accorder plusieurs sprints à une refonte technique des composants, car il y a par exemple des composants AgGrid qui sont repris et adaptés, mais qui deviennent difficiles à maintenir selon les nouveaux besoins. C’est un aspect que j’ai constaté plusieurs fois durant mon expérience chez Weekera.

      Enfin, il serait pertinent d’explorer de nouvelles fonctionnalités pouvant apporter une vraie valeur ajoutée aux utilisateurs. Il y a eu des mocks mis en place dans certaines équipes, notamment autour d’un tutoriel de l’application à la première connexion ou d’une version testable en amont, ouverte au public et disponible à travers le site marchand, tout en veillant à maintenir une expérience utilisateur simple et fluide.

      De mon côté, cette expérience me permet de mieux comprendre les enjeux d'un projet comme celui-ci et je souhaite mettre à profit cette expérience pour continuer à évoluer dans mes prochains projets.`,
      criticalView: 'Contenu à compléter.',
    },
    relatedSkills: [
      {
        label: 'Svelte / Front-end',
        link: 'svelte',
      },
    ],
    relatedParcours: [
      {
        label: 'Étape 5 - ISCOD / Weekera',
        link: 'iscod-weekera',
      },
    ],
  },
]
