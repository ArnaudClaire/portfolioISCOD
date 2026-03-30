import { Realisation } from '../models/realisation.model'

export const REALISATIONS: Realisation[] = [
  {
    title: 'Refonte du site de l’UPC du Lycée Jean Mermoz',
    slug: 'refonte-site-upc-jean-mermoz',
    shortDescription:
      'Stage de 2 mois consacré à la refonte en PHP du site de l’UPC, avec suivi client hebdomadaire et mise en ligne sur OVH.',
    externalLink: {
      label: 'UPC - Lycée Jean Mermoz',
      url: 'https://groupcom34.ovh',
    },
    article: {
      presentation:
        'Cette réalisation correspond à un stage effectué sur une durée de 2 mois, du 01/02/2021 au 26/03/2021, dans une salle annexe du Lycée Jean Mermoz. J’ai mené ce projet avec Olivier Barrière, un autre stagiaire issu de la même classe que moi. Sous la responsabilité de notre maître de stage et client, Monsieur Didier Garnier, nous avions pour mission de concevoir la refonte du site de l’UPC.',
      objectives:
        'L’objectif était de proposer une nouvelle version du site de l’UPC, plus claire et plus adaptée aux besoins réels du client. Le point de départ était particulier, car le cahier des charges initial était erroné et suivait la progression d’une ancienne équipe composée de deux stagiaires. Nous avons donc utilisé l’arborescence du site comme base de travail pour reconstruire un cadre de projet cohérent.',
      steps:
        'Pour répondre aux attentes, nous avons organisé avec Monsieur Didier Garnier des réunions tous les jeudis afin de montrer l’avancée du projet, ajuster ce qui avait été produit et faire émerger de nouvelles idées. J’ai consigné les conclusions de chaque réunion dans un cahier de notes pour garder une trace claire des décisions. Au fil du stage, nous avons aussi eu l’opportunité de visiter le bâtiment de l’UPC pour mieux comprendre le travail des employés et le contexte métier. Le site a été codé en PHP, avec Wamp pour le développement en local, MySQL pour la base de données et OVH pour l’hébergement. L’arborescence couvrait notamment les documents de commande, les menus d’affichage avec logos, les menus de commande des repas, les bons de commande, les fiches techniques des recettes et ingrédients par catégories, les pages d’affichage nutrition, produits locaux et circuit court, environnement, les commissions de menus, les archives, les photos et le courrier.',
      actors:
        'Les acteurs principaux étaient Monsieur Didier Garnier en tant que client et maître de stage, Olivier Barrière comme co-stagiaire, et moi-même dans la conception et la réalisation du site. Le projet reposait sur un travail en binôme et sur des échanges réguliers avec le client pour faire évoluer le besoin au fil du stage.',
      results:
        'Le stage a permis de produire une refonte exploitable et de mettre le site en ligne. Au-delà du résultat technique, ce projet m’a appris à travailler sur un besoin mouvant, à faire valider régulièrement mes choix et à transformer une arborescence fonctionnelle en site concret.',
      future:
        'Avec plus de temps, il aurait été intéressant d’aller plus loin sur l’ergonomie, la documentation technique et la maintenance à long terme. Le projet aurait aussi pu bénéficier d’un cadrage initial plus solide afin de gagner du temps sur certaines clarifications fonctionnelles.',
      criticalView:
        'Ce stage a été très formateur car il m’a appris à rester adaptable face à un cahier des charges incomplet, à mieux communiquer avec un client et à suivre un projet dans la durée. J’y ai renforcé ma rigueur, mon sens de l’organisation et ma capacité à collaborer efficacement avec un binôme. Avec le recul, cette expérience m’a surtout montré qu’un bon projet ne repose pas seulement sur le code, mais aussi sur la clarté des échanges et le suivi régulier des besoins.',
    },
    relatedSkills: [
      {
        label: 'Communication en mode projet',
        link: 'communication-projet',
      },
      {
        label: 'Gestion de la relation client',
        link: 'relation-client',
      },
      {
        label: 'Travail en équipe & collaboration',
        link: 'travail-equipe',
      },
      {
        label: 'Esprit d’analyse & rigueur',
        link: 'analyse-rigueur',
      },
    ],
  },
  {
    title: 'Plateforme de consultation métier',
    slug: 'plateforme-consultation-metier',
    shortDescription:
      'Développement d’interfaces Angular permettant la consultation de données métier issues d’un CRM.',
    article: {
      presentation:
        'Projet de développement d’une application de consultation métier destinée à faciliter l’accès à des données internes.',
      objectives:
        'Permettre aux utilisateurs de consulter des données complexes de manière claire, fiable et autonome.',
      steps:
        'Analyse des besoins, conception des écrans, développement Angular, intégration avec un back-end .NET, tests et déploiement.',
      actors:
        'Collaboration avec les équipes métier et techniques pour valider les besoins et les usages.',
      results:
        'Application utilisée en interne, amélioration de la lisibilité des données et réduction des sollicitations support.',
      future:
        'La solution pourrait évoluer vers davantage de fonctionnalités et une extension à d’autres métiers.',
      criticalView:
        'Ce projet m’a permis de renforcer ma capacité à concevoir des interfaces adaptées aux besoins réels des utilisateurs.',
    },
    relatedSkills: [
      {
        label: 'Angular / Front-end',
        link: 'angular-front',
      },
    ],
  },
]
