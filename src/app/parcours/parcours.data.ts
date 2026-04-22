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
      `Cette étape représente mes débuts dans l'informatique.`,
    category: 'school',
    categoryLabel: 'École',
    ...SCHOOL_TONE,
    article: {
      context:
        `Cette étape correspond à mes années au Lycée Georges Clemenceau. C'est durant cette étape que j'ai appris les bases de l'algorithmie en Python. J'ai pu réaliser un jeu tetris en groupe de 3 pour la fin d'année qui m'a valu un 20/20 au bac en ISN ce qui m'a donné envie de continuer dans ce milieu.`,
      workDone:
        `J’y ai construit mes bases scolaires, ma méthode de travail et ma capacité à réfléchir à des problèmes donnés. C’est aussi une période où j’ai commencé à mieux cerner les domaines qui m’attiraient. Le projet de fin d'année et son résultat m'ont donné envie de poursuivre dans ce milieu.`,
      discoveries:
        `J'ai découvert une passion qui ne se tarie pas, une curiosité sur le développement web et une mise en place de gestion de projet imparfaite`,
      takeaway:
        `Avec le recul, cette étape me sert surtout de fondation. Le projet ISN m'a permis de découvrir que j'étais bon en informatique.`,
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
        `Computacenter est une ESN (Entreprise de Services du Numérique) où j'ai été employé en tant que support helpdesk niveau 1.`,
      workDone:
        'Le but de mon travail a été de recevoir les appels des clients afin de traiter leurs différents problèmes informatiques. Je recevais environ 30 appels dans la journée avec des moments de rush le matin.',
      discoveries:
        `Avec une surveillance pointée sur la qualité de l'appel et la résolution des problèmes, je me suis servi de cette expérience pour apprendre à communiquer avec les clients, à gérer le stress des moments de rush et à écrire des tickets de compte rendu ou de suivi.`,
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
      'Reprise des études et responsabilités en alternance.',
    category: 'mixed',
    categoryLabel: 'École & entreprise',
    ...MIXED_TONE,
    article: {
      context:
        `J'ai suivi le parcours de développeur chez Ynov offrant 2 titres: Technicien Informatique en spécialité développement délivré par Ynov Campus à Montpellier et le titre de niveau 6 d'administrateur de système d'information délivré par IPSSI(Grande école d'informatique). Le cursus s'est fait en alternance avec pour entreprise A+ Énergies une entreprise scélialisée dans la transition énergétique.`,
      workDone:
        `Au campus nous avons travaillé sur des projets allant du développement mobile avec React à la gestion de gouvernance d'une entreprise en passant par l'apprentissage de plusieurs framework comme Angular ou Laravel, Kotlin, React native, Flutter, C#, PHP, mais aussi par l'apprentissage de plusieurs gestion de bases de données avec Firebase ou MongoDB. Nous avons aussi été amené à mener des projets avec des architectes, des commerciaux ou des graphistes.
        
        En Entreprise j'ai mené des missions soit au travers d'Asana avec des missions distribuées par notre N+1 ou bien en totale autonomie comme la mise en place d'un parc informatique de tablettes iPad pour les commerciaux présents dans toute la France. J'ai dû aussi gérer des notions de sécurité et de rôle liées aux données sensibles du CRM que nous avons repris pour permettre un bon suivi des chefs de secteurs.`,
      discoveries:
        `J’y ai découvert que j’étais capable de monter en compétence sur des domaines que je ne maîtrisais pas au départ, et de tenir un sujet jusqu’à sa mise en place. J'ai aussi pu proposer de la gestion de la relation client et de la gestion de projet`,
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
        label: 'Intégration, industrialisation et déploiement de logiciel',
        link: 'ci-cd-deploy',
      },
      {
        label: "Pilotage de projet d'ingénierie du logiciel - O'Fit",
        link: 'pilotage-projet-ofit',
      },
    ],
    subtitle: 'Master Expert en architectures logicielles',
    description:
      'Une étape entre montée en expertise logicielle, alternance et compréhension métier.',
    category: 'mixed',
    categoryLabel: 'École & entreprise',
    ...MIXED_TONE,
    article: {
      context:
        `
        Durant ma formation à ISCOD de Master Expert Architecte logiciel qui est une école en distanciel, j'ai appris la gestion de projet, le développement full-stack (Angular, Java/Spring, TypeScript), les tests, le DevOps (Docker, CI/CD, Kubernetes), l’architecture logicielle, la sécurité, ainsi que les méthodes agiles et la communication en environnement professionnel.
        Durant mon alternance chez Weekera, je suis intervenu en tant que développeur full-stack sur des applications liées à la gestion RH et à la paie, notamment autour de la Déclaration Sociale Nominative (DSN).`,
      workDone:
        ` Au sein de mon entreprise, mon premier rôle a été orienté développement applicatif, où j’ai participé à la correction de bugs et à l’évolution de fonctionnalités existantes. Je suis intervenu à la fois sur le front-end et le back-end, ce qui m'a permis d’avoir une vision globale des applications et de leurs interactions.

Puis j'ai changé d'équipe et je suis passé côté test, où j'ai d'abord optimisé les tests unitaires côté front puis je suis passé sur le repo des tests Playwright(tests bout à bout ou parcours d’utilisateurs) où mon rôle a été de réaliser les tests CRUD manquants sur les pages de l'application.

      Au niveau de ma formation j'ai regardé des cours tous les lundis durant 2 ans afin de réaliser les exercices et les QCM demandés sur la plateforme d'apprentissage. Aujourd'hui j'ai totalement fini ma formation et il me reste quelques épreuves à passer afin de valider mon année.`,
      discoveries:
        `Cette expérience en entreprise, m’a appris à travailler dans une grande équipe de développeurs et d'experts. Elle m'a aussi appris les rituels pour mener à bien un travail de groupe comme les réunions autour des sprints ou les rituels du matin (DSM).`,
      takeaway:
        `Cette étape a confirmé la direction que je voulais donner à mon profil : devenir un développeur capable de produire du code utile, maintenable et cohérent. Elle a aussi renforcé mon intérêt pour les environnements où la qualité, la collaboration et la compréhension fonctionnelle ont une vraie importance.`,
    },
  },
];

export function getParcoursStepBySlug(slug: string | null): ParcoursStep | undefined {
  return PARCOURS_STEPS.find((step) => step.slug === slug);
}
