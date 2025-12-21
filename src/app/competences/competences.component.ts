import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: number; // 0 à 100
  displayLevel?: number; // pour l’animation
  icon: string;
}

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent {
  technicalSkills: Skill[] = [
    { name: 'Angular / Front-end', level: 90, displayLevel: 0, icon: '🅰️' },
    { name: 'TypeScript / JavaScript', level: 90, displayLevel: 0, icon: '📘' },
    { name: 'Java / Spring Boot', level: 90, displayLevel: 0, icon: '☕' },
    { name: 'Docker & DevOps', level: 75, displayLevel: 0, icon: '🐳' },
    { name: 'Tests (Vitest, Jest, Playwright)', level: 95, displayLevel: 0, icon: '🧪' },
  ];

  softSkills: Skill[] = [
    { name: 'Communication en mode projet', level: 95, displayLevel: 0, icon: '💬' },
    { name: 'Gestion de la relation client', level: 85, displayLevel: 0, icon: '🤝' },
    { name: 'Travail en équipe & collaboration', level: 95, displayLevel: 0, icon: '👥' },
    { name: 'Adaptabilité & autonomie', level: 100, displayLevel: 0, icon: '🧭' },
    { name: 'Esprit d’analyse & rigueur', level: 90, displayLevel: 0, icon: '🧠' },
  ];

  ngAfterViewInit() {
    // Utilisation de requestAnimationFrame = animation garantie fluide
    requestAnimationFrame(() => {
      this.technicalSkills.forEach(s => s.displayLevel = s.level);
      this.softSkills.forEach(s => s.displayLevel = s.level);
    });
  }
}
