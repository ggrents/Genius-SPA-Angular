import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: '../signup/signup.component.scss',
})
export class SigninComponent {
  constructor(private fb: FormBuilder) {}
  signUpForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onSubmit() {
    this.signUpForm.reset();
  }
}
