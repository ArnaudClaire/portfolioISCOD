type SkillLinkDefinition = {
  slug: string;
  aliases: string[];
};

const SKILL_LINK_DEFINITIONS: SkillLinkDefinition[] = [
  {
    slug: 'angular-front',
    aliases: ['Angular / Front-end', 'Angular'],
  },
  {
    slug: 'svelte',
    aliases: ['Svelte'],
  },
  {
    slug: 'java-spring',
    aliases: ['Java / Spring Boot', 'Java / Spring', 'Spring Boot', 'Java'],
  },
  {
    slug: 'docker-devops',
    aliases: ['Docker & DevOps', 'Docker', 'DevOps'],
  },
  {
    slug: 'tests',
    aliases: ['Tests (Vitest, Jest, Playwright)', 'Vitest', 'Jest', 'Playwright', 'Tests'],
  },
  {
    slug: 'communication-projet',
    aliases: ['Communication en mode projet'],
  },
  {
    slug: 'relation-client',
    aliases: ['Gestion de la relation client', 'relation client'],
  },
  {
    slug: 'travail-equipe',
    aliases: ['Travail en équipe & collaboration', 'travail en équipe', 'collaboration'],
  },
  {
    slug: 'adaptabilite-autonomie',
    aliases: ['Adaptabilité & autonomie'],
  },
  {
    slug: 'analyse-rigueur',
    aliases: ["Esprit d'analyse & rigueur"],
  },
];

const SKILL_ALIAS_ENTRIES = SKILL_LINK_DEFINITIONS
  .flatMap((definition) => definition.aliases.map((alias) => ({ alias, slug: definition.slug })))
  .sort((left, right) => right.alias.length - left.alias.length);

const SKILL_ALIAS_TO_SLUG = new Map(
  SKILL_ALIAS_ENTRIES.map(({ alias, slug }) => [alias.toLocaleLowerCase('fr-FR'), slug]),
);

const SKILL_ALIAS_PATTERN = new RegExp(
  `(?<![\\p{L}\\p{N}])(${SKILL_ALIAS_ENTRIES.map(({ alias }) => escapeRegex(alias)).join('|')})(?![\\p{L}\\p{N}])`,
  'giu',
);

export function linkSkillMentions(
  text: string | null | undefined,
  excludedSlugs: string[] = [],
): string {
  if (!text) {
    return '';
  }

  const excludedSlugSet = new Set(excludedSlugs);

  return text.replace(SKILL_ALIAS_PATTERN, (match) => {
    const slug = SKILL_ALIAS_TO_SLUG.get(match.toLocaleLowerCase('fr-FR'));

    if (!slug || excludedSlugSet.has(slug)) {
      return match;
    }

    return `<a href="/comp/${slug}" class="skill-inline-link">${match}</a>`;
  });
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
