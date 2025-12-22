import { Realisation } from '../models/realisation.model'

export const REALISATIONS: Realisation[] = [
  {
    title: 'Plateforme de consultation métier',
    slug: 'plateforme-consultation-metier',
    shortDescription: 'Développement d’interfaces Angular permettant la consultation de données métier issues d’un CRM.',
    article: {
      presentation: 'Projet de développement d’une application de consultation métier destinée à faciliter l’accès à des données internes.',
      objectives: 'Permettre aux utilisateurs de consulter des données complexes de manière claire, fiable et autonome.',
      steps: 'Analyse des besoins, conception des écrans, développement Angular, intégration avec un back-end .NET, tests et déploiement.',
      actors: 'Collaboration avec les équipes métier et techniques pour valider les besoins et les usages.',
      results: 'Application utilisée en interne, amélioration de la lisibilité des données et réduction des sollicitations support.',
      future: 'La solution pourrait évoluer vers davantage de fonctionnalités et une extension à d’autres métiers.',
      criticalView: 'Ce projet m’a permis de renforcer ma capacité à concevoir des interfaces adaptées aux besoins réels des utilisateurs.',
    },
    relatedSkills: [{
      label: 'Angular',
      link: 'angular-front',
    }],
  },
]
