import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { getParcoursStepBySlug, ParcoursStep } from '../parcours.data';

@Component({
  selector: 'app-parcours-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './parcours-detail.component.html',
  styleUrls: ['./parcours-detail.component.css']
})
export class ParcoursDetailComponent implements OnInit {
  step?: ParcoursStep;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.step = getParcoursStepBySlug(slug);

    if (!this.step) {
      this.router.navigate(['/parcours']);
    }
  }
}
