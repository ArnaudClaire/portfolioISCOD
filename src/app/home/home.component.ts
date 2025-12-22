import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactService } from '../contact/services/contact.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public contactModal: ContactService) {}
}
