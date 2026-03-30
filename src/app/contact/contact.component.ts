import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  readonly emailAddress = 'arnaud.claire@iscod.fr'
  readonly linkedinUrl = 'https://www.linkedin.com/in/arnaud-claire-871741194/'

  constructor(public modalService: ContactService) {}

  close(): void {
    this.modalService.close()
  }
}
