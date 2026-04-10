import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactService } from '../contact/services/contact.service';
import { RouterLink } from '@angular/router';
import { PARCOURS_STEPS } from '../parcours/parcours.data';
import { REALISATIONS } from '../realisations/data/realisations.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly profilePhotoUrl = 'assets/Arnaud%20CLAIRE.jpg';

  readonly featuredSkills = [
    {
      label: 'Angular / Front-end',
      route: '/comp/angular-front',
      tone: 'bg-blue-500/10 text-blue-200 border-blue-400/20',
    },
    {
      label: 'Java / Spring Boot',
      route: '/comp/java-spring',
      tone: 'bg-emerald-500/10 text-emerald-200 border-emerald-400/20',
    },
    {
      label: 'Docker & DevOps',
      route: '/comp/docker-devops',
      tone: 'bg-cyan-500/10 text-cyan-200 border-cyan-400/20',
    },
    {
      label: 'Communication en mode projet',
      route: '/comp/communication-projet',
      tone: 'bg-rose-500/10 text-rose-200 border-rose-400/20',
    },
  ];

  readonly featuredSteps = PARCOURS_STEPS;
  readonly featuredProjects = REALISATIONS.slice(0, 2);

  constructor(public contactModal: ContactService) {}
}
