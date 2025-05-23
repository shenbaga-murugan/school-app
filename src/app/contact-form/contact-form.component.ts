import { TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'contact-form',
  standalone: false,
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  @Input('subject')
  subject: string = "";

  onSubjectBlur() {
    const titlePipe = new TitleCasePipe();
    this.subject = titlePipe.transform(this.subject);
  }

  submitContactForm(contactForm:NgForm) {
    console.log(contactForm);
  }

}
