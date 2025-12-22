import { SkillArticle } from "./skill-article.model"

export type SkillType = 'technical' | 'soft'

export interface Skill {
  name: string
  slug: string
  icon: string
  level: number
  displayLevel?: number
  type: SkillType
  article: SkillArticle
}
