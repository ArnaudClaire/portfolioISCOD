import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../models/skill.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SkillsService } from '../services/skills.service';
import { SkillNewsComponent } from 'src/app/skill-news/skill-news.component';


@Component({
  selector: 'app-competence-detail',
  standalone: true,
  imports: [CommonModule,SkillNewsComponent, RouterLink],
  templateUrl: './competence-detail.component.html',
  styleUrls: ['./competence-detail.component.css']
})
export class CompetenceDetailComponent implements OnInit {
  skill?: Skill

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private skillsService: SkillsService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug')

    if (!slug) {
      this.router.navigate(['/comp'])
      return
    }

    this.skill = this.skillsService.getBySlug(slug)

    if (!this.skill) {
      this.router.navigate(['/comp'])
    }
  }

  goBack(): void {
  this.router.navigate(['/comp'])
}
}