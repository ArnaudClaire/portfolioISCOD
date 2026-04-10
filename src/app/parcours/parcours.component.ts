import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PARCOURS_STEPS } from './parcours.data';

@Component({
  selector: 'app-parcours',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.css']
})
export class ParcoursComponent {
  readonly timelineSteps = [...PARCOURS_STEPS].sort((a, b) => b.order - a.order);
}
