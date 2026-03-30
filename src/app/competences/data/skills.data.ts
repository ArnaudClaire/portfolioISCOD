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
    name: 'Angular / Front-end',
    slug: 'angular-front',
    icon: '🅰️',
    level: 90,
    displayLevel: 0,
    type: 'technical',
    article: {
      definition: `
      Angular est un framework front-end basé sur TypeScript, principalement utilisé dans un contexte professionnel pour concevoir des applications web structurées, robustes et maintenables. Il est particulièrement adapté aux projets métier où les interfaces doivent afficher des volumes de données importants tout en restant claires, fiables et évolutives.

      J’ai utilisé Angular dans un environnement professionnel où le front-end était découplé d’un back-end en .NET. Mon rôle consistait notamment à développer des interfaces de consultation permettant aux utilisateurs d’accéder à des données issues de notre CRM Dynamics 365. Angular servait à structurer l’affichage, gérer la navigation et rendre les informations exploitables pour différents métiers de l’entreprise A+ Énergies.

      Concrètement, le front-end Angular, écrit en TypeScript, était compilé puis intégré sous forme de fichiers de distribution ("dist") directement dans le projet .NET. Cette approche permettait de déployer l’application comme un tout, avant publication sur Azure, tout en conservant une séparation claire entre la logique front-end et les services back-end.

      Aujourd’hui, Angular reste un framework très utilisé dans les applications métier d’entreprise, notamment pour les back-offices et les outils internes. Les évolutions récentes du framework, comme l’introduction des composants standalone et l’amélioration de l’architecture globale, renforcent sa pertinence dans des projets professionnels nécessitant stabilité et maintenabilité.
      `,
      proofs: [
        {
          title: 'Développement d’interfaces de consultation métier',
          description:
            'J’ai développé avec Angular des interfaces de consultation permettant aux utilisateurs d’accéder à des données issues du CRM Dynamics 365 via un back-end en .NET, en structurant les écrans et les composants afin de rendre lisibles et exploitables des informations métier parfois complexes.',
          result:
            'Résultat : les utilisateurs disposaient d’interfaces claires et cohérentes facilitant la consultation quotidienne des données, ce qui a amélioré leur autonomie et réduit les besoins de support.',
          link: '/real/plateforme-consultation-metier',
        },
        {
          title: 'Intégration du front-end Angular dans une application .NET',
          description:
            'J’ai participé à la mise en place d’une architecture où le front-end Angular, développé en TypeScript, était compilé puis intégré sous forme de fichiers de distribution dans une application .NET avant déploiement.',
          result:
            'Résultat : une application cohérente et facilement déployable, avec une séparation claire entre le front-end et les services back-end, tout en respectant les contraintes techniques de l’entreprise.',
          link: '/real/plateforme-consultation-metier',
        },
      ],
      selfCritique: `
      Aujourd’hui, j’estime avoir un niveau intermédiaire à avancé sur Angular, avec une utilisation déjà réalisée en contexte professionnel par le passé, complétée par des projets personnels plus récents. Je maîtrise les concepts fondamentaux du framework, la structuration des projets, le fonctionnement des composants, des pipes et l’organisation globale du code.

      Cette compétence occupe une place importante dans mon profil de développeur fullstack, car Angular correspond à ma vision d’un front-end structuré, rigoureux et maintenable, particulièrement adapté aux applications métier. Elle reste cohérente avec mon métier actuel et mon projet professionnel, même si elle n’est pas aujourd’hui ma technologie principale dans le cadre de l’alternance.

      L’acquisition de cette compétence a été relativement rapide une fois les bases assimilées, notamment grâce aux conventions claires du framework et à son outillage intégré. Les projets professionnels passés et les projets personnels menés ensuite m’ont permis de consolider ces acquis et de gagner en autonomie.

      Avec le recul, je considère qu’Angular demande un investissement initial plus important que d’autres frameworks front-end, mais qu’il offre en contrepartie une excellente stabilité et une forte maintenabilité.
      `,
      evolution: `
      Cette compétence s’inscrit pleinement dans mon projet personnel et professionnel de développeur fullstack, car elle me permet de concevoir des applications front-end structurées et maintenables en complément de mes compétences back-end. À moyen terme, mon objectif est d’atteindre un niveau confirmé sur Angular afin de pouvoir l’utiliser sereinement dans un contexte professionnel sur des projets métier de taille moyenne à importante.

      Pour faire évoluer cette compétence, je poursuis une démarche d’autoformation continue à travers des projets personnels, comme le développement de mon portfolio Angular, ainsi que par la consultation régulière de la documentation officielle et de ressources techniques spécialisées. Je prévois également de me former aux évolutions récentes du framework, notamment les composants standalone, afin de rester aligné avec les bonnes pratiques actuelles.
      `,
      relatedProjects: [
        {
          label: 'Plateforme de consultation métier',
          link: '/real/plateforme-consultation-metier',
        },
      ],
    },
  },
  {
    name: 'Svelte',
    slug: 'svelte',
    icon: '📘',
    level: 95,
    displayLevel: 0,
    type: 'technical',
    article: { ...EMPTY_ARTICLE },
  },
  {
    name: 'Java / Spring Boot',
    slug: 'java-spring',
    icon: '☕',
    level: 90,
    displayLevel: 0,
    type: 'technical',
    article: { ...EMPTY_ARTICLE },
  },
  {
    name: 'Docker & DevOps',
    slug: 'docker-devops',
    icon: '🐳',
    level: 75,
    displayLevel: 0,
    type: 'technical',
    article: { ...EMPTY_ARTICLE },
  },
  {
    name: 'Tests (Vitest, Jest, Playwright)',
    slug: 'tests',
    icon: '🧪',
    level: 95,
    displayLevel: 0,
    type: 'technical',
    article: { ...EMPTY_ARTICLE },
  },
  {
    name: 'Communication en mode projet',
    slug: 'communication-projet',
    icon: '💬',
    level: 95,
    displayLevel: 0,
    type: 'soft',
    article: { ...EMPTY_ARTICLE },
  },
  {
    name: 'Gestion de la relation client',
    slug: 'relation-client',
    icon: '🤝',
    level: 85,
    displayLevel: 0,
    type: 'soft',
    article: { ...EMPTY_ARTICLE },
  },
  {
    name: 'Travail en équipe & collaboration',
    slug: 'travail-equipe',
    icon: '👥',
    level: 95,
    displayLevel: 0,
    type: 'soft',
    article: { ...EMPTY_ARTICLE },
  },
  {
    name: 'Adaptabilité & autonomie',
    slug: 'adaptabilite-autonomie',
    icon: '🧭',
    level: 100,
    displayLevel: 0,
    type: 'soft',
    article: { ...EMPTY_ARTICLE },
  },
  {
    name: 'Esprit d’analyse & rigueur',
    slug: 'analyse-rigueur',
    icon: '🧠',
    level: 90,
    displayLevel: 0,
    type: 'soft',
    article: { ...EMPTY_ARTICLE },
  },
]
