import { Component, AfterViewInit } from '@angular/core'

import { SKILLS } from './data/skills.data'
import { Skill } from './models/skill.model'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-competences',
  standalone:true,
   imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css'],
})
export class CompetencesComponent implements AfterViewInit {
  technicalSkills: Skill[] = []
  softSkills: Skill[] = []

  constructor() {
    this.technicalSkills = SKILLS.filter(s => s.type === 'technical')
    this.softSkills = SKILLS.filter(s => s.type === 'soft')
  }

  ngAfterViewInit() {
    requestAnimationFrame(() => {
      this.technicalSkills.forEach(s => (s.displayLevel = s.level))
      this.softSkills.forEach(s => (s.displayLevel = s.level))
    })
  }
}
