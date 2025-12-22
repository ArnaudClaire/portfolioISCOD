import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Realisation } from '../models/realisation.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { REALISATIONS } from '../data/realisations.data';

@Component({
  selector: 'app-realisation-detail',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './realisation-detail.component.html',
  styleUrls: ['./realisation-detail.component.css']
})
export class RealisationDetailComponent implements OnInit {
  realisation?: Realisation

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug')
    this.realisation = REALISATIONS.find(r => r.slug === slug)
  }
}