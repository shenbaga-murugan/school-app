import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from '../validators/username.validators';

@Component({
  selector: 'signup-form',
  standalone: false,
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  signupForm: FormGroup = new FormGroup({
    username: new FormControl("", [
      Validators.required, 
      Validators.minLength(5),
      UsernameValidators.containsInvalidChars("@ -#;'\"\\"),
      UsernameValidators.mustContainNumber],
      UsernameValidators.isUnique),
    password: new FormControl("", [Validators.required, 
      Validators.minLength(8), 
      Validators.maxLength(25),
      UsernameValidators.mustContainChars("!@#$%^&*()_+=[]{}><~"),
      UsernameValidators.mustContainNumber]),
    spam: new FormGroup({
      subscribe: new FormControl()
    })
  });

  get username() {
    return this.signupForm.get('username');
  }

  get password() {
    return this.signupForm.get('password');
  }
}
