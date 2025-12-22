import { Component } from '@angular/core';
import { SKILLS } from '../competences/data/skills.data';
import { Skill } from '../competences/models/skill.model';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
    standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
})
export class NavbarComponent {
  isOpen = false

  skills: Skill[] = SKILLS
}
