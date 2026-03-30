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
  accent: string;
  accentSoft: string;
  accentGlow: string;
  article: ParcoursArticle;
}

export const PARCOURS_STEPS: ParcoursStep[] = [
  {
    order: 1,
    slug: 'lycee-georges-clemenceau',
    title: 'Lycée Georges Clemenceau',
    subtitle: 'Première étape',
    description:
      'Le début de mon parcours scolaire, avec les premières bases qui ont préparé mon orientation.',
    accent: '#60a5fa',
    accentSoft: 'rgba(96, 165, 250, 0.18)',
    accentGlow: 'rgba(96, 165, 250, 0.16)',
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
    accent: '#34d399',
    accentSoft: 'rgba(52, 211, 153, 0.18)',
    accentGlow: 'rgba(52, 211, 153, 0.16)',
    article: {
      context:
        'Au Lycée Jean Mermoz, j’ai suivi un BTS SIO avec l’option SLAM. Cette étape a marqué mon entrée concrète dans le développement logiciel et la logique de projet.',
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
    accent: '#f59e0b',
    accentSoft: 'rgba(245, 158, 11, 0.18)',
    accentGlow: 'rgba(245, 158, 11, 0.16)',
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
    subtitle: 'Alternance et progression',
    description:
      'Une phase de montée en compétences entre poursuite d’études et responsabilités en alternance.',
    accent: '#2dd4bf',
    accentSoft: 'rgba(45, 212, 191, 0.18)',
    accentGlow: 'rgba(45, 212, 191, 0.16)',
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
    subtitle: 'Étape actuelle',
    description:
      'Le parcours actuel, entre formation continue, projet professionnel et mise en pratique.',
    accent: '#fb7185',
    accentSoft: 'rgba(251, 113, 133, 0.16)',
    accentGlow: 'rgba(251, 113, 133, 0.14)',
    article: {
      context:
        'ISCOD et Weekera représentent mon étape actuelle. C’est la phase où je consolide mon parcours, avec une vision plus claire de mon évolution et de ce que je veux construire.',
      workDone:
        'J’y poursuis ma progression technique tout en travaillant sur des sujets concrets, avec une logique de professionnalisation, de qualité et d’amélioration continue.',
      discoveries:
        'J’y découvre encore de nouvelles façons de travailler, de mieux structurer mon code, d’échanger avec les autres métiers et de produire quelque chose de plus solide.',
      takeaway:
        'Cette étape montre surtout la direction que je veux donner à mon profil. Je continue à me spécialiser tout en gardant une ouverture vers des projets utiles et évolutifs.',
    },
  },
];

export function getParcoursStepBySlug(slug: string | null): ParcoursStep | undefined {
  return PARCOURS_STEPS.find((step) => step.slug === slug);
}
