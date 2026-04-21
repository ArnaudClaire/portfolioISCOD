import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() displayMode: 'modal' | 'page' = 'page';

  readonly profilePhotoUrl = 'assets/Arnaud%20CLAIRE.jpg';
  readonly emailAddress = 'arnaudclaire20@yahoo.fr'
  readonly linkedinUrl = 'https://www.linkedin.com/in/arnaud-claire-871741194/'
  readonly githubUrl = 'https://github.com/ArnaudClaire'

  constructor(public modalService: ContactService) {}

  get isModal(): boolean {
    return this.displayMode === 'modal'
  }

  close(): void {
    this.modalService.close()
  }
}
