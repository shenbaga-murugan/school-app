import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'admission-form',
  standalone: false,
  templateUrl: './admission-form.component.html',
  styleUrl: './admission-form.component.css'
})
export class AdmissionFormComponent {
  relToStudent = [
      {
        value: "father",
        text: "Father"
      },
      {
        value: "mother",
        text: "Mother"
      },
      {
        value: "guardian",
        text: "Guardian"
      }
    ];
  logModel(obj: any) {
    console.log(obj);
  }
  submitAdmissionForm(admissionForm: NgForm) {
    console.log(admissionForm.value);
  }
}
