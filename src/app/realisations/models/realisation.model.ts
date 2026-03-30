export interface Realisation {
  title: string
  slug: string
  shortDescription: string
  externalLink?: {
    label: string
    url: string
  }
  article: {
    presentation: string
    objectives: string
    steps: string
    actors: string
    results: string
    future: string
    criticalView: string
  }
  relatedSkills: {
    label: string
    link: string
  }[]
}
