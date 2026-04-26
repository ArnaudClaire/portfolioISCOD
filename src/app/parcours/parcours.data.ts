export interface ParcoursArticle {
  context: string;
  workDone: string;
  discoveries: string;
  takeaway: string;
}

export interface ParcoursStep {
  order: number;
  period: string;
  slug: string;
  title: string;
  detailTitleHtml?: string;
  relatedRealisations?: {
    label: string;
    link: string;
  }[];
  subtitle: string;
  description: string;
  category: 'school' | 'company' | 'mixed';
  categoryLabel: string;
  accent: string;
  accentSoft: string;
  accentGlow: string;
  article: ParcoursArticle;
}

const SCHOOL_TONE = {
  accent: '#60a5fa',
  accentSoft: 'rgba(96, 165, 250, 0.18)',
  accentGlow: 'rgba(96, 165, 250, 0.16)',
}

const COMPANY_TONE = {
  accent: '#f59e0b',
  accentSoft: 'rgba(245, 158, 11, 0.18)',
  accentGlow: 'rgba(245, 158, 11, 0.16)',
}

const MIXED_TONE = {
  accent: '#a78bfa',
  accentSoft: 'rgba(167, 139, 250, 0.18)',
  accentGlow: 'rgba(167, 139, 250, 0.16)',
}

export const PARCOURS_STEPS: ParcoursStep[] = [
  {
    order: 1,
    period: '2018-2019',
    slug: 'lycee-georges-clemenceau',
    title: 'Lycée Georges Clemenceau',
    detailTitleHtml:
      '<a class="parcours-link parcours-link--school" href="https://georges-clemenceau.mon-ent-occitanie.fr" target="_blank" rel="noopener noreferrer">Lycée Georges Clemenceau</a>',
    subtitle: 'Bac Scientifique - option ISN (Informatique et Sciences du Numérique)',
    description:
      `Cette étape représente mes débuts dans l’informatique.`,
    category: 'school',
    categoryLabel: 'École',
    ...SCHOOL_TONE,
    article: {
      context:
        `Cette étape correspond à mes années au Lycée Georges Clemenceau. C’est durant cette étape que j’ai appris les bases de l’algorithmie en Python. J’ai pu réaliser un jeu Tetris en groupe de 3 pour la fin d’année, ce qui m’a valu un 20/20 au bac en ISN et m’a donné envie de continuer dans ce milieu.`,
      workDone:
        `J’y ai construit mes bases scolaires, ma méthode de travail et ma capacité à réfléchir à des problèmes donnés. C’est aussi une période où j’ai commencé à mieux cerner les domaines qui m’attiraient. Le projet de fin d’année et son résultat m’ont donné envie de poursuivre dans ce milieu.`,
      discoveries:
        `J’ai découvert une passion qui ne se tarit pas, une curiosité pour le développement web et une mise en place de gestion de projet imparfaite`,
      takeaway:
        `Avec le recul, cette étape me sert surtout de fondation. Le projet ISN m’a permis de découvrir que j’étais bon en informatique.`,
    },
  },
  {
    order: 2,
    period: '2019-2021',
    slug: 'lycee-jean-mermoz-bts-sio-slam',
    title: 'Lycée Jean Mermoz',
    detailTitleHtml:
      '<a class="parcours-link parcours-link--school" href="https://jean-mermoz-montpellier.mon-ent-occitanie.fr" target="_blank" rel="noopener noreferrer">Lycée Jean Mermoz</a>',
          relatedRealisations: [{
        label: 'Refonte du site de l\'Unité de production culinaire (UPC) du Lycée Jean Mermoz',
        link: 'refonte-site-upc-jean-mermoz',
      }
    ],
    subtitle: 'BTS SIO - option SLAM',
    description:
      'Une formation plus technique où j’ai commencé à me spécialiser dans le développement applicatif.',
    category: 'school',
    categoryLabel: 'École',
    ...SCHOOL_TONE,
    article: {
      context:
        'Au Lycée Jean Mermoz, j’ai suivi un BTS Services Informatiques aux Organisations (SIO), avec l’option Solutions Logicielles et Applications Métiers (SLAM).',
      workDone:
        `J’y ai appris à comprendre et à utiliser des diagrammes de classes, à réaliser des modèles relationnels (Merise, UML), à concevoir un site web en partant de zéro (HTML, CSS, utilisation de VS Code ou NetBeans pour développer, utilisation d’AJAX pour des sites dynamiques), puis à utiliser un framework avec Symfony.

J’ai également appris les bases des réseaux (LAN, BUS, etc.), la gestion de projet, l’algorithmie ainsi que le droit.`,
      discoveries:
        'J’y ai découvert que j’aimais particulièrement la partie développement, la résolution de problèmes et le fait de transformer un besoin en solution fonctionnelle.',
      takeaway:
        'Cette formation a confirmé mon orientation. Elle m’a donné un socle technique et m’a surtout montré que je voulais continuer à progresser dans le développement.',
    },
  },
  {
    order: 3,
    period: '2021-2022',
    slug: 'computacenter',
    title: 'Computacenter',
    detailTitleHtml:
      '<a class="parcours-link parcours-link--company" href="https://www.computacenter.com/fr-fr" target="_blank" rel="noopener noreferrer">Computacenter</a>',
    subtitle: 'Expérience professionnelle',
    description:
      'Une première immersion en entreprise.',
    category: 'company',
    categoryLabel: 'Entreprise',
    ...COMPANY_TONE,
    article: {
      context:
        `Computacenter est une ESN (Entreprise de Services du Numérique) où j’ai été employé en tant que support helpdesk niveau 1.`,
      workDone:
        'Le but de mon travail a été de recevoir les appels des clients afin de traiter leurs différents problèmes informatiques. Je recevais environ 30 appels dans la journée avec des moments de rush le matin.',
      discoveries:
        `Avec une attention portée sur la qualité de l’appel et la résolution des problèmes, je me suis servi de cette expérience pour apprendre à communiquer avec les clients, à gérer le stress des moments de rush et à écrire des tickets de compte rendu ou de suivi.`,
      takeaway:
        'Cette expérience m’a initié au monde du travail. Elle a renforcé ma capacité à m’adapter et à comprendre les enjeux d’un cadre de travail exigeant.',
    },
  },
  {
    order: 4,
    period: '2022-2023',
    slug: 'ynov-aplus-energies',
    title: 'YNOV / A+ Énergies',
    detailTitleHtml:
      '<a class="parcours-link parcours-link--school" href="https://www.ynov.com" target="_blank" rel="noopener noreferrer">YNOV</a><span class="parcours-title-separator"> / </span><a class="parcours-link parcours-link--company" href="https://www.aplusenergies.fr" target="_blank" rel="noopener noreferrer">A+ Énergies</a>',
              relatedRealisations:[ {
          label: 'Plateforme de consultation métier',
          link: 'plateforme-consultation-metier',
        }],
    subtitle: 'Licence informatique',
    description:
      'Découverte de nouvelles technologies et premières responsabilités dans des projets.',
    category: 'mixed',
    categoryLabel: 'École & entreprise',
    ...MIXED_TONE,
    article: {
      context:
        `J’ai suivi le parcours développeur chez Ynov, qui préparait à deux titres : Technicien informatique, spécialité développement, délivré par Ynov Campus Montpellier, et le titre de niveau 6 d’administrateur de systèmes d’information délivré par l’IPSSI. Le cursus s’est déroulé en alternance avec A+ Énergies, une entreprise spécialisée dans la transition énergétique.`,
      workDone:
        `Au campus, nous avons travaillé sur des projets allant du développement mobile avec React à des sujets de gouvernance d’entreprise, en passant par l’apprentissage de plusieurs frameworks comme Angular, Laravel, Kotlin, React Native, Flutter, C# et PHP, mais aussi de plusieurs systèmes de gestion de bases de données comme Firebase ou MongoDB. Nous avons aussi été amenés à mener des projets avec des architectes, des commerciaux ou des graphistes.
        
        En entreprise, j’ai mené des missions soit via Asana, avec des tâches distribuées par notre N+1, soit en totale autonomie, comme la mise en place d’un parc informatique de tablettes iPad pour les commerciaux présents dans toute la France. J’ai également dû gérer des notions de sécurité et de rôles liées aux données sensibles du CRM que nous avons repris, afin de permettre un meilleur suivi des chefs de secteur.`,
      discoveries:
        `À l’école, j’y ai découvert que j’étais capable d’apprendre rapidement de nouvelles technologies et de m’adapter à des projets très différents, tout en travaillant avec d’autres profils comme des architectes, des commerciaux ou des graphistes.

        En entreprise, j’y ai découvert que je pouvais monter en compétence sur des sujets plus concrets, prendre des responsabilités sur des missions utiles et commencer à développer une vraie autonomie, y compris sur des problématiques de relation client et de gestion de projet.`,
      takeaway:
        'Cette période m’a beaucoup fait grandir. Elle m’a permis de confirmer mon autonomie, ma persévérance et ma capacité à apprendre en conditions réelles.',

    },
  },
  {
    order: 5,
    period: '2024-2026',
    slug: 'iscod-weekera',
    title: 'ISCOD / Weekera',
    detailTitleHtml:
      '<a class="parcours-link parcours-link--school" href="https://www.iscod.fr/?utm_source=google-branding&utm_medium=cpc&utm_campaign=ISCOD&utm_term=%2Biscod&gad_source=1&gad_campaignid=9492102615&gclid=Cj0KCQjwy_fOBhC6ARIsAHKFB79uivLwgaSXcra1QkGfrGp1-lBWWdXUSceKhQG0FYC1wfA3V4V1AOcaAtd4EALw_wcB" target="_blank" rel="noopener noreferrer">ISCOD</a><span class="parcours-title-separator"> / </span><a class="parcours-link parcours-link--company" href="https://weekera.fr" target="_blank" rel="noopener noreferrer">Weekera</a>',
    relatedRealisations: [
      {
        label: 'Applications RH et paie chez Weekera',
        link: 'applications-rh-paie-weekera',
      },
      {
        label: 'Intégration, industrialisation et déploiement de logiciel - PMT',
        link: 'ci-cd-deploy',
      },
      {
        label: "Pilotage de projet d’ingénierie du logiciel - O’Fit",
        link: 'pilotage-projet-ofit',
      },
    ],
    subtitle: 'Master Expert en Ingénierie du Logiciel',
    description:
      'Une étape de consolidation entre expertise logicielle, qualité, tests et compréhension métier en entreprise.',
    category: 'mixed',
    categoryLabel: 'École & entreprise',
    ...MIXED_TONE,
    article: {
      context:
        `
        Durant ma formation à ISCOD, dans le cadre du master Expert en Ingénierie du Logiciel, j’ai approfondi la gestion de projet, le développement full-stack (Angular, Java / Spring, TypeScript), les tests, le DevOps (Docker, CI/CD, Kubernetes), l’architecture logicielle, la sécurité, ainsi que les méthodes agiles et la communication en environnement professionnel.
        Durant mon alternance chez Weekera, je suis intervenu en tant que développeur full-stack sur des applications liées à la gestion RH et à la paie, notamment autour de la Déclaration Sociale Nominative (DSN).`,
      workDone:
        `Au sein de mon entreprise, mon premier rôle a été orienté développement applicatif, où j’ai participé à la correction de bugs et à l’évolution de fonctionnalités existantes. Je suis intervenu à la fois sur le front-end et le back-end, ce qui m’a permis d’avoir une vision globale des applications et de leurs interactions.

Puis, j’ai changé d’équipe et je suis passé côté test, où j’ai d’abord optimisé les tests unitaires front-end, avant de rejoindre le dépôt dédié aux tests Playwright (tests bout à bout ou parcours utilisateurs). Mon rôle a alors été de réaliser les tests CRUD manquants sur certaines pages de l’application.

      Au niveau de ma formation, j’ai suivi des cours sur la gestion de la relation client en ingénierie logicielle, le pilotage de projet d’ingénierie du logiciel, l’intégration, l’industrialisation et le déploiement logiciel, ainsi que la conception avancée de l’architecture logicielle. Aujourd’hui, j’ai terminé la partie formation et il me reste encore quelques épreuves à passer pour valider mon année.`,
      discoveries:
        `À l’école, j’y ai découvert une vision plus large de l’ingénierie du logiciel, avec des sujets comme l’architecture, le pilotage de projet, la relation client, la qualité et l’industrialisation du développement.

        En entreprise, j’y ai découvert le fonctionnement d’une grande équipe produit, les rituels de travail qui structurent le quotidien comme les sprints et les DSM, ainsi que l’importance de la qualité, de la compréhension métier et de la collaboration pour faire évoluer une application existante.`,
      takeaway:
        `Cette étape a confirmé la direction que je voulais donner à mon profil : devenir un développeur capable de produire du code utile, maintenable et cohérent. Elle a aussi renforcé mon intérêt pour les environnements où la qualité, la collaboration et la compréhension fonctionnelle ont une vraie importance.`,
    },
  },
];

export function getParcoursStepBySlug(slug: string | null): ParcoursStep | undefined {
  return PARCOURS_STEPS.find((step) => step.slug === slug);
}

