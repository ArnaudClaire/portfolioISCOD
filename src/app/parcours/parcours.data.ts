export interface ParcoursArticle {
  context: string;
  workDone: string;
  discoveries: string;
  takeaway: string;
}

export interface ParcoursStep {
  order: number;
  slug: string;
  title: string;
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
    slug: 'lycee-georges-clemenceau',
    title: 'Lycée Georges Clemenceau',
    subtitle: 'Bac Scientifique - option ISN (Informatiques et Sciences du Numérique)',
    description:
      'Le début de mon parcours scolaire, avec les premières bases qui ont préparé mon orientation.',
    category: 'school',
    categoryLabel: 'École',
    ...SCHOOL_TONE,
    article: {
      context:
        'Cette étape correspond à mes années au Lycée Georges Clemenceau. Elle représente le point de départ de mon parcours avant mon orientation plus claire vers l’informatique.',
      workDone:
        'J’y ai construit mes bases scolaires, ma méthode de travail et ma capacité à avancer de façon régulière. C’est aussi une période où j’ai commencé à mieux cerner les domaines qui m’attiraient.',
      discoveries:
        'J’y ai découvert l’importance de la rigueur, de l’autonomie et de la progression dans la durée. Cette période a posé le cadre de travail qui m’a servi ensuite.',
      takeaway:
        'Avec le recul, cette étape me sert surtout de fondation. Elle m’a aidé à comprendre que j’avais besoin d’un parcours concret, évolutif et tourné vers la pratique.',
    },
  },
  {
    order: 2,
    slug: 'lycee-jean-mermoz-bts-sio-slam',
    title: 'Lycée Jean Mermoz',
    subtitle: 'BTS SIO - option SLAM',
    description:
      'Une formation plus technique où j’ai commencé à me spécialiser dans le développement applicatif.',
    category: 'school',
    categoryLabel: 'École',
    ...SCHOOL_TONE,
    article: {
      context:
        'Au Lycée Jean Mermoz, j’ai suivi un BTS Services Informatiques aux Organisations (SIO), avec l’option Solutions Logicielles et Applications Métiers (SLAM). Cette étape a marqué mon entrée concrète dans le développement logiciel et la logique de projet.',
      workDone:
        'J’y ai travaillé sur les bases du développement, de la conception applicative, des bases de données et des projets plus structurés. J’ai aussi commencé à manipuler des outils et méthodes proches du terrain.',
      discoveries:
        'J’y ai découvert que j’aimais particulièrement la partie développement, la résolution de problèmes et le fait de transformer un besoin en solution fonctionnelle.',
      takeaway:
        'Cette formation a confirmé mon orientation. Elle m’a donné un socle technique et m’a surtout montré que je voulais continuer à progresser dans le développement web et logiciel.',
    },
  },
  {
    order: 3,
    slug: 'computacenter',
    title: 'Computacenter',
    subtitle: 'Expérience professionnelle',
    description:
      'Une première immersion en entreprise pour confronter la théorie à la réalité du terrain.',
    category: 'company',
    categoryLabel: 'Entreprise',
    ...COMPANY_TONE,
    article: {
      context:
        'Computacenter représente une étape importante de mise en situation professionnelle. J’ai pu y observer un environnement structuré, des contraintes réelles et une organisation d’équipe.',
      workDone:
        'J’y ai participé à des missions qui m’ont permis de mieux comprendre le fonctionnement d’une entreprise, les attentes de qualité et la place de l’informatique dans des usages concrets.',
      discoveries:
        'J’y ai découvert l’importance de la communication, de la fiabilité et du rythme de production. Le travail ne repose pas seulement sur la technique, mais aussi sur la coordination et la clarté.',
      takeaway:
        'Cette expérience m’a aidé à relier apprentissage et réalité professionnelle. Elle a renforcé ma capacité à m’adapter et à comprendre les enjeux d’un cadre de travail plus exigeant.',
    },
  },
  {
    order: 4,
    slug: 'ynov-aplus-energies',
    title: 'YNOV / A+ Énergies',
    subtitle: 'Licence informatique',
    description:
      'Une phase de montée en compétences entre poursuite d’études et responsabilités en alternance.',
    category: 'mixed',
    categoryLabel: 'École & entreprise',
    ...MIXED_TONE,
    article: {
      context:
        'Cette étape rassemble mon parcours à YNOV et mon expérience chez A+ Énergies. Elle correspond à une période de progression plus mature, avec davantage d’autonomie et de responsabilités.',
      workDone:
        'J’y ai travaillé sur des sujets plus concrets en alternance, avec des besoins réels, des choix techniques et des livrables attendus. J’ai aussi dû apprendre rapidement sur des sujets nouveaux.',
      discoveries:
        'J’y ai découvert que j’étais capable de monter en compétence sur des domaines que je ne maîtrisais pas au départ, et de tenir un sujet jusqu’à sa mise en place effective.',
      takeaway:
        'Cette période m’a beaucoup fait grandir. Elle m’a permis de confirmer mon autonomie, ma persévérance et ma capacité à apprendre en conditions réelles.',
    },
  },
  {
    order: 5,
    slug: 'iscod-weekera',
    title: 'ISCOD / Weekera',
    subtitle: 'Master Expert en architectures logicielles',
    description:
      'Mon étape actuelle, entre montée en expertise logicielle, alternance et compréhension métier.',
    category: 'mixed',
    categoryLabel: 'École & entreprise',
    ...MIXED_TONE,
    article: {
      context:
        'Actuellement en alternance chez Weekera, j’interviens en tant que développeur fullstack sur des applications liées à la gestion RH et à la paie, notamment autour de la Déclaration Sociale Nominative (DSN).\n\nDans ce cadre, j’occupe un premier rôle orienté développement applicatif, où je participe à la correction de bugs, à l’évolution de fonctionnalités existantes et à l’amélioration de la qualité du code. J’interviens à la fois sur le front-end et le backend, ce qui me permet d’avoir une vision globale des applications et de leurs interactions.\n\nEn parallèle, j’évolue également dans un second rôle plus transverse, lié à la qualité et à la compréhension fonctionnelle des besoins. Je suis amené à collaborer avec différentes équipes, notamment lors de rituels comme les “3 Amigos”, afin de clarifier les spécifications, anticiper les risques et garantir la cohérence entre les attentes métier, les contraintes techniques et les phases de test.\n\nCe double positionnement me permet de développer à la fois des compétences techniques et une compréhension approfondie des enjeux métier, tout en renforçant ma capacité à travailler dans un environnement collaboratif et exigeant.',
      workDone:
        'Pour l’instant, cette étape se construit autour de missions de maintenance évolutive, de correction de bugs et de compréhension du fonctionnement global de l’application. J’interviens sur des sujets concrets qui demandent à la fois de produire du code fiable, de respecter un existant métier dense et de rester attentif aux impacts fonctionnels.\n\nJe participe aussi à l’amélioration continue du produit à travers des échanges réguliers avec les autres acteurs du projet. Cela me pousse à mieux documenter, mieux questionner les besoins et mieux prendre en compte la dimension qualité dans les développements du quotidien.',
      discoveries:
        'Cette expérience me fait progresser sur plusieurs plans en même temps. Sur le plan technique, elle m’apprend à intervenir dans un contexte applicatif plus structuré, avec des contraintes réelles, des enjeux de fiabilité et un besoin de cohérence entre les différentes couches de l’application.\n\nSur le plan fonctionnel, je découvre à quel point la compréhension métier est indispensable pour développer correctement. Le code ne répond pas seulement à une logique technique : il doit aussi traduire fidèlement des besoins liés à la paie, à la DSN et aux processus RH. Cela m’aide à prendre du recul et à mieux relier développement, qualité et usage concret.',
      takeaway:
        'Pour l’instant, cette étape confirme la direction que je veux donner à mon profil : devenir un développeur capable de produire du code utile, maintenable et cohérent avec des enjeux métier forts. Elle renforce aussi mon intérêt pour les environnements où la qualité, la collaboration et la compréhension fonctionnelle ont une vraie importance.\n\nC’est une phase encore en cours, mais elle me permet déjà de consolider ma posture professionnelle, ma capacité d’adaptation et ma vision d’un développement plus complet, à la fois technique et métier.',
    },
  },
];

export function getParcoursStepBySlug(slug: string | null): ParcoursStep | undefined {
  return PARCOURS_STEPS.find((step) => step.slug === slug);
}
