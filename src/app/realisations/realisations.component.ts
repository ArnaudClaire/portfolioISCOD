import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { REALISATIONS } from './data/realisations.data';

@Component({
  selector: 'app-realisations',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.css']
})
export class RealisationsComponent {
  realisations = REALISATIONS
}
