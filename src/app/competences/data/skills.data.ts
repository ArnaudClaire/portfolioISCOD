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
    displayLevel: 0,
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
          title: 'Interventions fullstack sur des applications RH et paie',
          description:
            'Je contribue actuellement à des <strong>applications liées à la gestion RH et à la paie</strong> chez <strong>Weekera</strong>, avec des interventions à la fois sur le <strong>front-end</strong> et le <strong>back-end</strong> dans un <strong>contexte métier exigeant</strong>.',
          result:
            'Résultat : cette expérience me permet de <strong>consolider mes compétences techniques</strong> dans un <strong>environnement réel</strong> tout en approfondissant ma <strong>compréhension fonctionnelle du produit</strong>.',
          link: '/real/applications-rh-paie-weekera',
        },
        {
          title: 'Utilisation d’Angular pour le portfolio personnel',
          description: 'Ce <strong>portfolio</strong> a été développé avec <strong>Angular</strong>.',
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
      Aujourd'hui je souhaite continuer à <strong>approfondir ma maîtrise d'Angular</strong> en m'intéressant à des sujets plus avancés comme la <strong>gestion de la performance</strong>, la <strong>mise en place de tests automatisés</strong> (avec des agents IA intégrés pour générer les <strong>tests unitaires</strong> et d'<strong>intégration</strong>), ou encore au <strong>développement d'applications mobiles</strong> avec <strong>Angular et Ionic</strong>.
      Dans mes futurs projets personnels, je pense continuer à utiliser Angular mais je reste ouvert à d'autres <strong>frameworks front-end</strong> comme <strong>Svelte</strong> pour du développement plus rapide et plus léger ou encore <strong>React</strong> pour sa communauté et son fonctionnement avec lequel je ne suis pas encore à l'aise.
      `,
      relatedProjects: [
        {
          label: 'Plateforme de consultation métier',
          link: '/real/plateforme-consultation-metier',
        },
        {
          label: 'Applications RH et paie chez Weekera',
          link: '/real/applications-rh-paie-weekera',
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
    displayLevel: 0,
    type: 'technical',
    article: {
      definition: `
      <strong>Svelte</strong> est un <strong>framework front-end</strong> adapté aux <strong>projets SPA</strong>, mais aussi aux projets de type <strong>SSR</strong> (Server-Side Rendering, rendu côté serveur) avec <strong>SvelteKit</strong>, ainsi qu’aux <strong>sites statiques</strong>.

      Il repose sur une approche basée sur les <strong>composants</strong>, comme <strong>Angular</strong>, qui constituent la base de la structure de l’application.

      <strong>Svelte</strong> utilise <strong>JavaScript</strong> et peut également être utilisé avec <strong>TypeScript</strong>. Lors du build, le code est compilé en <strong>JavaScript optimisé</strong>, directement interprété par les navigateurs.

      C’est un framework conçu pour être <strong>simple à prendre en main</strong> et à utiliser. Il connaît une <strong>popularité croissante</strong> grâce à ses <strong>performances</strong> et à sa <strong>légèreté</strong> (il ne nécessite pas de surcouche comme le <strong>Virtual DOM</strong>).

      Avec <strong>Svelte 5</strong>, il y a un nouveau <strong>système de runes</strong>, permettant une <strong>gestion plus fine de la réactivité</strong>, notamment pour les <strong>états</strong> et les <strong>effets de bord</strong> au sein des composants.
      `,
      proofs: [],
      selfCritique: 'Contenu à venir.',
      evolution: 'Contenu à venir.',
      relatedProjects: [],
    },
  },
  {
    name: 'Java / Spring Boot',
    slug: 'java-spring',
    summary:
      "Framework back-end pour gérer les données, les traitements et les règles de fonctionnement d'une application.",
    icon: '☕',
    level: 90,
    displayLevel: 0,
    type: 'technical',
    article: { ...EMPTY_ARTICLE },
  },
  {
    name: 'Docker & DevOps',
    slug: 'docker-devops',
    summary:
      "Outils de déploiement et d'exploitation pour lancer, partager et maintenir une application dans un environnement stable.",
    icon: '🐳',
    level: 75,
    displayLevel: 0,
    type: 'technical',
    article: { ...EMPTY_ARTICLE },
  },
  {
    name: 'Tests (Vitest, Jest, Playwright)',
    slug: 'tests',
    summary:
      "Outils et méthodes de qualité pour vérifier automatiquement qu'une application fonctionne comme prévu.",
    icon: '🧪',
    level: 95,
    displayLevel: 0,
    type: 'technical',
    article: { ...EMPTY_ARTICLE },
  },
  {
    name: 'Communication en mode projet',
    slug: 'communication-projet',
    summary:
      "Compétence humaine pour expliquer clairement les besoins, partager l'avancement et coordonner le travail.",
    icon: '💬',
    level: 95,
    displayLevel: 0,
    type: 'soft',
    article: { ...EMPTY_ARTICLE },
  },
  {
    name: 'Gestion de la relation client',
    slug: 'relation-client',
    summary:
      "Compétence humaine pour comprendre les attentes d'un client ou d'un utilisateur et y répondre de façon adaptée.",
    icon: '🤝',
    level: 85,
    displayLevel: 0,
    type: 'soft',
    article: { ...EMPTY_ARTICLE },
  },
  {
    name: 'Travail en équipe & collaboration',
    slug: 'travail-equipe',
    summary:
      'Compétence humaine pour collaborer, partager les informations utiles et faire avancer un travail commun.',
    icon: '👥',
    level: 95,
    displayLevel: 0,
    type: 'soft',
    article: { ...EMPTY_ARTICLE },
  },
  {
    name: 'Adaptabilité & autonomie',
    slug: 'adaptabilite-autonomie',
    summary:
      "Compétence humaine pour s'adapter rapidement, apprendre vite et avancer avec autonomie quand c'est nécessaire.",
    icon: '🧭',
    level: 100,
    displayLevel: 0,
    type: 'soft',
    article: { ...EMPTY_ARTICLE },
  },
  {
    name: "Esprit d'analyse & rigueur",
    slug: 'analyse-rigueur',
    summary:
      'Compétence humaine pour comprendre un problème, structurer la réflexion et proposer des solutions fiables.',
    icon: '🧠',
    level: 90,
    displayLevel: 0,
    type: 'soft',
    article: { ...EMPTY_ARTICLE },
  },
]
