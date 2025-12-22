import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './services/contact.service';
import emailjs from '@emailjs/browser'

import { environment } from '../environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
   loading = false
  success = false
  error = false

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    public modalService: ContactService
  ) {}

  close(): void {
    this.modalService.close()
    this.contactForm.reset()
    this.success = false
    this.error = false
  }

  submit(): void {
    if (this.contactForm.invalid) return

    this.loading = true

    emailjs.send(
  environment.emailJsServiceId,
  environment.emailJsTemplateId,
  {
    name: this.contactForm.value.name,
    email: this.contactForm.value.email,
    message: this.contactForm.value.message,
  },
  environment.emailJsPublicKey
)
    .then(() => {
      this.loading = false
      this.success = true
      this.contactForm.reset()
    })
    .catch(() => {
      this.loading = false
      this.error = true
    })
  }
}