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
        `<h3>Objectif principal</h3>L’objectif était de proposer une nouvelle version du site de l’UPC, plus claire et plus adaptée aux besoins réels du client. 
        <h3>Contexte </h3>Le point de départ était particulier, car le cahier des charges initial était erroné et suivait la progression d’une ancienne équipe composée de deux stagiaires. 
        <h3>Enjeux</h3>Nous avons donc utilisé l’arborescence du site comme base de travail pour reconstruire un cadre de projet cohérent.
        <h3>Risques</h3>Nous n'avions que 2 mois pour réaliser le site et les principaux risques étaient de repartir sur un mauvais besoin, ce qui pouvait entraîner des incompréhensions avec le client, des erreurs dans les fonctionnalités développées ou une perte de temps liée à la réinterprétation du besoin.
        `,
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
        label: 'Adaptabilité & autonomie',
        link: 'adaptabilite-autonomie',
      },
      {
        label: "Esprit d'analyse & rigueur",
        link: 'analyse-rigueur',
      },
    ],
    relatedParcours: [
      {
        label: 'Étape 2 - Lycée Jean Mermoz',
        link: 'lycee-jean-mermoz-bts-sio-slam',
      },
    ]
  },
  {
    title: 'Plateforme de consultation métier',
    slug: 'plateforme-consultation-metier',
    shortDescription:
      'Développement d’interfaces Angular permettant la consultation de données métier issues d’un CRM (outil de gestion de la relation client).',
    article: {
      presentation:
        `Le projet consistait à développer des applications web internes permettant de faciliter l’accès aux données du CRM et d’améliorer leur lisibilité pour les différents services de l’entreprise. L’objectif était de proposer des outils simples, accessibles et utiles au quotidien pour les différents pôles de l'entreprise, souvent confrontés à des données complexes ou difficiles à exploiter.`,
      objectives:
        `<h3>Objectif principal</h3>L’objectif principal était de permettre aux utilisateurs de consulter des données complexes de manière plus claire et plus autonome.
        <h3>Contexte </h3>L'entreprise avait des problèmes de visibilité des données car les rôles étaient mal faits : on avait un problème d'accès à certaines données pour les responsables des différents pôles. Il fallait donc refaire les rôles utilisateurs du CRM, améliorer la compréhension des données, réduire les erreurs et faire gagner du temps aux équipes. 
        <h3>Enjeux</h3>Les données étant sensibles, notamment car elles concernent des informations internes liées aux ressources humaines ou aux dossiers des clients, la sécurité était donc un enjeu important.
        <h3>Risques</h3>L'un des principaux risques pour les projets était de donner trop d'accès à certains commerciaux qui pouvaient par exemple essayer de prendre des clients à d'autres ou bien de laisser fuiter certaines données hors de l'entreprise comme des données personnelles d'employés ou de clients.
        `,
      steps:
        `Les projets ont commencé par une phase d’analyse des besoins, avec des échanges réguliers avec les différents pôles impactés afin de bien comprendre leurs attentes et leurs contraintes. Cette étape était importante pour s’assurer que les outils développés seraient réellement utilisés.

        La conception des interfaces a ensuite été pensée pour rester simple et lisible en utilisant notamment Tailwind ou Bootstrap pour rendre l’outil plus agréable, en gardant toujours en tête l’utilisateur final. Le développement s’est fait principalement avec Angular pour le front-end, et avec du C# côté back-end pour interagir avec le <strong> CRM Dynamics 365 </strong>.

        On a mis en place une authentification via JWT(JSON Web Token). Des tests ont ensuite été réalisés pour garantir le bon fonctionnement des outils, avant leur mise en production et leur utilisation en interne.
        Les tests nous ont aussi permis d'assurer un suivi de la réalisation des fonctionnalités et on a mis en place plus tard un système de retour client via Dynamics 365 afin de maintenir l'outil.`,
      actors:
        `Tout au long du projet, j’ai travaillé en collaboration avec les différents pôles de l'entreprise du commercial aux ressources humaines.`,
      results:
        `Les outils développés ont permis d’améliorer la lisibilité des données issues du CRM et de rendre certains processus plus fluides. Les différents utilisateurs ont gagné en autonomie et ont moins sollicité le support pour accéder à certaines informations.

        Cependant, certains outils ont eu une utilisation plus limitée dans le temps. Cela m’a permis de comprendre que la réussite d’un projet ne dépend pas uniquement de sa qualité technique, mais aussi de son adoption par les utilisateurs. C'est pour cela qu'on a mis en place à un moment des réunions chaque semaine avec un responsable de chaque pôle pour mener à bien les projets.`,
      future:
        `Avec du recul, ces outils pourraient être améliorés en prenant davantage en compte les usages réels et en renforçant la communication avec les équipes métier en amont. Il serait aussi intéressant de faire évoluer ces solutions vers d’autres services et d’analyser plus précisément leur utilisation pour mieux orienter les futures évolutions.`,
      criticalView:
        `Ce projet m’a permis de mieux comprendre l’importance de concevoir des outils réellement adaptés aux besoins des utilisateurs. J’ai aussi compris que développer une solution ne suffit pas : il faut également accompagner l’adoption de l’outil par les utilisateurs.

        Cela m’a également appris à prendre du recul sur mes réalisations, afin de m'adapter aux utilisateurs et à leurs besoins réels.`,
    },
    relatedSkills: [
      {
        label: 'Angular',
        link: 'angular-front',
      },
      {
        label: 'Tests',
        link: 'tests',
      },{
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
      {
        label: 'Adaptabilité & autonomie',
        link: 'adaptabilite-autonomie',
      }
    ],
    relatedParcours: [
      {
        label: 'Étape 4 - YNOV / A+ Énergies',
        link: 'ynov-aplus-energies',
      },
    ],
  },
  {
    title: 'Intégration, industrialisation et déploiement de logiciel - PMT',
    slug: 'ci-cd-deploy',
    shortDescription:
      'Étude de cas ISCOD visant à créer une plateforme de gestion de projet collaboratif destinée aux équipes de développement logiciel.',
          externalLink: {
      label: 'Lien github du projet',
      url: 'https://github.com/ArnaudClaire/BLOC-DEV-PMT',
      spotlightTitle: 'Étude de cas ISCOD - PMT',
      spotlightDescription:
        'Pour plus de détails sur ce projet, vous pouvez consulter le repos git du projet.',
    },
    article: {
      presentation:
        `Dans le cadre d'une étude de cas faite durant ma formation chez ISCOD, j’ai travaillé sur PMT (Project Management Tool), une plateforme collaborative de gestion de projet. Le projet avait pour but de concevoir une application capable d’aider une équipe à planifier ses projets et à suivre l’avancement des tâches.

C'est une application que j'ai réalisée en TypeScript avec Angular pour la partie front-end et Java Spring Boot pour la partie back-end. Elle ne se limitait pas au développement fonctionnel de l’application, puisqu’elle intégrait aussi des enjeux de tests automatisés, de dockerisation et de pipeline CI/CD (Intégration continue / Déploiement continu).`,
      objectives:
        `<h3>Objectif principal</h3>L’objectif principal du projet était de créer une application permettant à une équipe de planifier, suivre et faire évoluer un projet de manière collaborative.

Il fallait aussi intégrer les tests, la dockerisation front et back, mettre en place une chaîne d'intégration continue et que tout soit documenté.
<h3>Contexte </h3>Ce projet s'inscrit dans une démarche de preuve des compétences acquises durant l'apprentissage de mon bloc de formation Intégration, industrialisation et déploiement de logiciels au cours de mon Master Expert en architectures logicielles.
<h3>Enjeux</h3>Ce projet m'a permis de valider les compétences attendues :

 -Développer les fonctionnalités du logiciel en modélisant un domaine métier, et en intégrant des composants externes afin d’améliorer la qualité du code et faciliter les développements futurs.

 -Automatiser la construction de la solution logicielle en configurant les chaînes de build et l’exécution des tests unitaires, fonctionnels et d’intégration afin de préparer le déploiement continu du logiciel.

 -Industrialiser le développement du logiciel à l’aide d’outils d’automatisation et le documenter en décrivant le processus de déploiement de manière à faire évoluer les logiciels développés et minimiser les erreurs de manipulation par les tiers.
 <h3>Risques</h3>Une mauvaise couverture pouvait entraîner des régressions ou des anomalies non détectées lors des évolutions du projet et une mauvaise configuration du pipeline CI/CD ou des images Docker pouvait bloquer la mise en production ou générer des erreurs difficiles à diagnostiquer.
 `,
      steps:
        `Le projet a commencé par une phase de conception, durant laquelle j’ai identifié les entités principales du système. J’ai travaillé sur les objets clés du domaine, comme les utilisateurs, les projets, les membres, les invitations, les tâches, les historiques de modification et les notifications. Cette étape m’a amené à structurer à la fois un diagramme de classes et un schéma relationnel, en prenant en compte les règles métier, la nullabilité et les contraintes d’unicité.

Une fois la structure définie, j’ai travaillé sur le back-end en Java avec Spring Boot qui expose une API REST permettant de gérer les utilisateurs, les projets, les membres de projet, les invitations, les tâches, l’historique et les notifications. Le back-end repose sur Spring Web, Spring Data JPA, PostgreSQL, ainsi que sur une base H2 pour les tests.

En parallèle, j’ai développé le front-end avec Angular 19, dans un environnement Nx (outil de gestion de workspace en monorepo), avec TypeScript et Tailwind CSS. L’interface permet aujourd’hui de gérer l’inscription, la connexion simple par email, la persistance de session en localStorage, l’affichage d’un dashboard, la création de projets et la création de tâches.

J'ai mis en place des tests côté front et back :

Côté front-end, j’ai mis en place des tests unitaires ainsi que des tests end-to-end avec Playwright, capables de couvrir les parcours les plus importants, comme l’inscription, la connexion, la création d’un projet, l’invitation d’un membre, l’attribution d’un rôle, la création et l’assignation d’une tâche, ou encore la consultation de l’historique. 

Côté back-end, des tests Java ont été prévus avec JUnit, Spring Boot Test et H2, avec génération d’un rapport de couverture JaCoCo.

Le projet est organisé de manière claire, avec une séparation entre le back-end, le front-end, la base de données, la documentation et les workflows GitHub Actions. Le front-end et le back-end ont chacun leur Dockerfile, le projet dispose d’un docker-compose.yml, et un pipeline GitHub Actions permet de lancer les tests, de construire les images Docker et de les pousser sur Docker Hub lors d’un push sur la branche principale. Un README détaillé documente également l’installation, le lancement, les variables d’environnement, les tests et le déploiement.`,
      actors:
        `Les acteurs du projet sont Nicolas, le Product Owner qui a défini les fonctionnalités attendues à travers les user stories, Mariana, la tech lead qui a fixé les règles techniques à respecter et moi-même le développeur full stack.`,
      results:
        `Ce projet est fonctionnel et m'a permis de réaliser un outil testé, maintenable et facilement déployable.
        
        Ce projet me permet de mettre en avant mes compétences en Angular, Java/Spring Boot, Docker & DevOps, Tests et de la CI/CD, mais aussi au niveau des soft skills de mettre en avant mon autonomie et mon esprit d'analyse et de rigueur.`,
      future:
        `Ce projet pourrait encore évoluer. Il serait possible d’aller plus loin dans la gestion des droits, dans la sécurité du back-end, dans la supervision du déploiement en intégrant des outils de monitoring, de logs et d’alertes.

Avec des fonds, de la patience et une bonne équipe, il serait possible de faire un outil aussi poussé que Jira en intégrant aussi une IA comme Rovo à partir de ce projet.`,
      criticalView:
        `Cette étude de cas m’a permis de prouver mes compétences dans le domaine et je considère qu'il faut penser à la structure du projet, à la qualité des tests, à la reproductibilité de l’environnement, à la clarté de la documentation et à la facilité de déploiement afin de réaliser des projets facilement maintenables et scalables.

C’est aussi un projet qui m’a permis de relier plusieurs dimensions de mon profil. J’y ai mobilisé mes compétences en Angular, en Spring Boot, en tests automatisés, en Docker et en CI/CD, mais aussi grâce à ce projet je pense prouver ma capacité à structurer une réflexion technique et à produire un ensemble cohérent de livrables, ce qui prouve aussi mon autonomie ainsi que mon esprit d’analyse et de rigueur.`,
    },
    relatedSkills: [
      {
        label: 'Angular',
        link: 'angular-front',
      },
      {
        label: 'Java / Spring Boot',
        link: 'java-spring',
      },
      {
        label: 'Docker & DevOps',
        link: 'docker-devops',
      },
      {
        label: 'Tests',
        link: 'tests',
      }
      ,
      {
        label: 'Adaptabilité & autonomie',
        link: 'adaptabilite-autonomie',
      },
      {
        label: `Esprit d'analyse & rigueur`,
        link: 'analyse-rigueur',
      }
    ],
    relatedParcours: [
      {
        label: 'Étape 5 - ISCOD / Weekera',
        link: 'iscod-weekera',
      },
    ],
  },
  {
    title: "Pilotage de projet d'ingénierie du logiciel - O'Fit",
    slug: 'pilotage-projet-ofit',
    shortDescription:
      "Étude de cas ISCOD autour du pilotage d'un projet d'application mobile de santé connectée pour O'Fit.",
    article: {
      presentation:
        `Cette réalisation correspond à une étude de cas réalisée dans le cadre du bloc Pilotage de projet d'ingénierie du logiciel. Le sujet portait sur O'Fit, une start-up spécialisée dans les applications de santé connectée, qui souhaitait lancer une application mobile dédiée au suivi de l'activité physique, de l'alimentation et du sommeil.

Dans cette étude, le rôle attendu n'était pas celui d'un développeur, mais celui d'un chef de projet. Il fallait donc prendre du recul sur la construction du produit, l'organisation de l'équipe, les risques du projet et les moyens de suivre correctement son avancement.`,
      objectives:
        `<h3>Objectif principal</h3>L'objectif principal était de cadrer le projet O'Fit afin de proposer une version minimale cohérente de l'application, tout en améliorant l'organisation de l'équipe projet.

<h3>Contexte</h3>Le projet partait d'une idée forte portée par le CEO de la start-up. L'application devait devenir un compagnon quotidien pour les utilisateurs, avec des fonctionnalités autour du suivi sportif, du journal alimentaire, du sommeil, des conseils personnalisés et de la protection des données.

<h3>Enjeux</h3>Les enjeux étaient à la fois produit, organisationnels et humains. Il fallait identifier les fonctionnalités réellement utiles pour une V1, tenir compte de la valeur utilisateur, mesurer la complexité technique, sécuriser les données personnelles et proposer une méthode de travail plus fiable pour une équipe encore jeune.

<h3>Risques</h3>Le projet présentait plusieurs risques : mauvaise communication à distance, incompréhension des besoins fonctionnels, retards liés au manque d'expérience, UX/UI peu claire, non-conformité RGPD ou encore incidents techniques. Le contexte imposait donc de proposer des réponses concrètes plutôt qu'une simple liste d'idées.`,
      steps:
        `Le travail a commencé par la reprise des fonctionnalités proposées dans l'énoncé. J'ai établi une liste priorisée en distinguant les fonctionnalités retenues pour le MVP et celles à garder pour une version ultérieure. La priorisation s'est faite à partir de plusieurs critères : valeur ajoutée, complexité technique, impact calendrier et pertinence pour une première version.

Les fonctionnalités retenues pour la V1 concernaient notamment le suivi des activités physiques, le journal alimentaire, la surveillance du sommeil, les conseils personnalisés de bien-être, le tableau de bord de santé, la gestion des objectifs, la protection des données, la conformité RGPD, le feedback utilisateur et les évaluations personnalisées.

J'ai ensuite travaillé sur l'analyse des risques. Chaque risque a été évalué selon son impact, sa probabilité et sa gravité, puis associé à une stratégie de mitigation. Par exemple, les problèmes de communication à distance pouvaient être réduits avec des DSM, des outils collaboratifs et une meilleure formalisation des échanges. Les incompréhensions fonctionnelles pouvaient être limitées avec des réunions de type 3 Amigos et une meilleure rédaction des user stories.

La dernière partie portait sur l'environnement de travail. L'équipe était composée d'un chef de projet, de trois développeurs juniors, d'un designer UX/UI alternant et d'un responsable marketing. J'ai donc proposé un plan d'amélioration autour de la formation, de l'accompagnement des profils juniors, de réunions plus régulières, d'un meilleur suivi des besoins et de l'utilisation d'outils comme Teams, Notion, Trello ou Asana.`,
      actors:
        `Les acteurs principaux étaient le CEO de O'Fit, à l'origine du projet, le chef de projet chargé de coordonner l'ensemble, les développeurs juniors, le designer UX/UI alternant, le responsable marketing, ainsi que les futurs utilisateurs de l'application.

Le rôle du chef de projet était central : il devait clarifier les priorités, fluidifier la communication, réduire les zones de flou et donner à l'équipe un cadre de travail plus professionnel.`,
      results:
        `Le rendu final a permis de produire trois livrables principaux : un document de spécification et de priorisation des fonctionnalités, une analyse des risques accompagnée d'indicateurs de suivi, puis un audit de l'environnement de travail avec un plan d'action.

Cette étude de cas m'a permis de travailler une autre facette du métier : la capacité à piloter un projet sans être dans le code. Il fallait raisonner en valeur produit, en organisation d'équipe, en risques, en indicateurs et en amélioration continue.`,
      future:
        `Avec plus de temps, ce travail pourrait être approfondi avec une roadmap plus détaillée, une matrice RACI, un backlog plus complet et une définition plus précise des jalons de livraison. Il serait aussi intéressant d'aller plus loin sur la validation utilisateur, par exemple avec des bêta-testeurs, des ateliers UX ou des retours terrain avant la V1.

Une autre évolution pertinente serait de compléter l'approche par des outils de suivi plus concrets : tableau de bord projet, suivi de vélocité, taux de participation aux réunions, suivi des bugs critiques et indicateurs de satisfaction utilisateur.`,
      criticalView:
        `Cette étude m'a fait comprendre qu'un projet logiciel ne se pilote pas uniquement avec une bonne idée ou une liste de fonctionnalités. Il faut savoir prioriser, faire des choix, accepter de reporter certaines fonctionnalités et créer un cadre de travail compréhensible pour l'équipe.

Avec le recul, j'aurais pu pousser encore davantage la partie indicateurs en reliant mieux certains KPI entre eux. Par exemple, le nombre de bugs, la satisfaction utilisateur et le respect des délais peuvent raconter ensemble une partie de la santé réelle du projet. Cette réalisation m'a néanmoins permis de mieux relier pilotage, communication, gestion des risques et qualité du produit.`,
    },
    relatedSkills: [
      {
        label: 'Tests',
        link: 'tests',
      },
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
        label: 'Adaptabilité & autonomie',
        link: 'adaptabilite-autonomie',
      },
      {
        label: "Esprit d'analyse & rigueur",
        link: 'analyse-rigueur',
      },
    ],
    relatedParcours: [
      {
        label: 'Étape 5 - ISCOD / Weekera',
        link: 'iscod-weekera',
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
      <h3>Objectif principal</h3>Le projet a pour objectif principal de <strong>simplifier</strong> et d’<strong>optimiser</strong> la gestion des <strong>ressources humaines</strong> et de la <strong>paie</strong> pour les <strong>experts-comptables</strong>.

      Pour répondre à cet objectif, plusieurs <strong>axes structurants</strong> ont été définis. Le premier consiste à <strong>centraliser les données</strong>, afin de regrouper les informations <strong>RH</strong> et <strong>paie</strong> dans un seul outil et d’éviter la dispersion entre plusieurs supports. Le second repose sur l’<strong>automatisation des processus</strong>, avec l’idée de réduire les <strong>tâches manuelles</strong>, de limiter les <strong>erreurs</strong> et de faire gagner du temps sur des opérations récurrentes.
      <h3>Contexte </h3>Ce besoin prend encore plus de sens quand on regarde le <strong>contexte métier</strong> dans lequel s’inscrit Weekera. Le projet évolue dans l’univers des <strong>ressources humaines</strong> et de la <strong>paie</strong>, un domaine central pour les entreprises comme pour les cabinets d’<strong>expertise comptable</strong>. Les <strong>experts-comptables</strong> y occupent une place importante, car ils accompagnent leurs clients sur toute la partie administrative et sociale, notamment autour de la production des <strong>bulletins de paie</strong>, des déclarations sociales comme la <strong>DSN</strong> (<strong>Déclaration Sociale Nominative</strong>, c’est-à-dire la transmission mensuelle des données sociales aux organismes concernés), et du suivi des <strong>obligations légales</strong>.

      C’est aussi un environnement particulièrement exigeant. Les <strong>règles</strong> changent régulièrement, entre <strong>droit du travail</strong>, <strong>cotisations</strong> et <strong>conventions collectives</strong>, ce qui oblige les professionnels à rester en veille en permanence. Dans ce type d’environnement, une <strong>erreur</strong> peut vite avoir des conséquences importantes, aussi bien sur le plan <strong>financier</strong> que <strong>juridique</strong>.

      À cela s’ajoute une réalité très concrète du terrain : les <strong>outils historiquement utilisés</strong> dans ce secteur sont souvent <strong>anciens</strong>, <strong>fragmentés</strong> ou <strong>peu intuitifs</strong>. Les utilisateurs doivent parfois jongler entre plusieurs logiciels, ce qui ralentit le travail, rend certaines actions plus lourdes et augmente les risques d’erreurs.
      <h3>Enjeux</h3>Une attention particulière est aussi portée à l’<strong>expérience utilisateur</strong>. L’application doit rester <strong>simple à comprendre</strong>, <strong>fluide à utiliser</strong> et suffisamment <strong>intuitive</strong> pour accompagner des utilisateurs qui ont avant tout un <strong>besoin métier</strong>. Dans un domaine aussi sensible que la paie, la <strong>fiabilité</strong> et la <strong>sécurité des données</strong> sont également des enjeux majeurs, tout comme la capacité de l’outil à améliorer concrètement la <strong>productivité</strong> dans la gestion quotidienne des dossiers.

      C’est précisément dans ce contexte que <strong>Weekera</strong> cherche à apporter une réponse plus moderne. L’idée est de proposer une solution <strong>centralisée</strong>, plus <strong>automatisée</strong> et réellement <strong>pensée pour l’utilisateur</strong>, afin de simplifier la gestion quotidienne des dossiers tout en garantissant la fiabilité des données. L’objectif n’est pas seulement de numériser l’existant, mais de fournir un outil capable d’accompagner les professionnels dans leurs <strong>contraintes réelles</strong>, avec plus de <strong>clarté</strong>, plus d’<strong>efficacité</strong> et une meilleure <strong>expérience utilisateur</strong>.
      <h3>Risques</h3><strong>L’évolution régulière des règles légales et des obligations</strong> comme la <strong>DSN</strong> pouvait entraîner des erreurs dans les traitements ou dans les déclarations. La <strong>maintenabilité</strong> du code représentait un risque, notamment avec l’accumulation de composants réutilisés et adaptés dans le temps, ce qui pouvait rendre certaines parties de l’application plus difficiles à faire évoluer.`,
      steps: `
      <h3>Organisation du travail</h3>En ce qui concerne ma mission sur l’application, j’évoluais dans un environnement <strong>agile</strong>, avec des <strong>sprints de 2 à 3 semaines</strong> et des réunions régulières qui permettaient de structurer le travail de l’équipe de manière claire.

      Tous les matins, nous faisions un DSM (<strong>Daily Stand-up Meeting</strong>), une réunion rapide de 15 minutes pour faire le point sur l’avancement, les difficultés rencontrées et les priorités du jour.

      Le développement reposait sur des <strong>User Stories (US)</strong> préparées en amont, puis complétées lors de réunions avec les différents acteurs de l’US. L’objectif de ces échanges était de s’assurer que les besoins étaient bien compris, d’anticiper les cas plus complexes et d’adapter le sujet avant le développement.

      Une fois le développement terminé, la fonctionnalité était ensuite présentée lors des <strong>sprint reviews</strong>.
      <h3>Chronologie de mon parcours sur le projet</h3><div class="real-timeline">
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
      criticalView: `Weekera m’a amené à découvrir de nouveaux rituels de travail entre développeurs que je ne connaissais pas auparavant, autour d’une application basée sur des technologies que je n’avais encore jamais utilisées. Cette expérience m’a permis de progresser en tant que développeur et d’acquérir des connaissances sur des sujets métier comme les DSN, ainsi que sur l’utilisation de l’IA dans le développement.

      Il fallait intervenir sur du code existant que je n’avais pas développé. Cela m’a appris à m’adapter rapidement, à comprendre des bases de code parfois complexes et à travailler dans un contexte où la maintenabilité et la clarté du code pouvaient être améliorées.
      Cette expérience m’a permis de prendre du recul sur les bonnes pratiques, la documentation et de la structuration du code dans un projet collaboratif.`,
    },
    relatedSkills: [
      {
        label: 'Svelte / Front-end',
        link: 'svelte',
      },
      {
        label: 'Docker & DevOps',
        link: 'docker-devops',
      },
      {
        label: 'Tests',
        link: 'tests',
      },{
        label: 'Communication en mode projet',
        link: 'communication-projet',
      },
      {
        label: 'Travail en équipe & collaboration',
        link: 'travail-equipe',
      },
      {
        label: "Esprit d'analyse & rigueur",
        link: 'analyse-rigueur',
      },
      {
        label: 'Adaptabilité & autonomie',
        link: 'adaptabilite-autonomie',
      }
    ],
    relatedParcours: [
      {
        label: 'Étape 5 - ISCOD / Weekera',
        link: 'iscod-weekera',
      },
    ],
  },
]



