import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'signup-form',
  standalone: false,
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  signupForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
}
