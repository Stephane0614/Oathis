import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: Router
  )
  {}

  get firstname() {
    return this.loginForm.get('firstname');
  }

  get lastName() {
    return this.loginForm.get('lastname');
  }

  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password')
  }

  buildForm() {
    this.loginForm = this.fb.group({
      'firstname': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      'lastname': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
    this.buildForm();
  }

  submit() {
    if (this.loginForm.invalid) return;
    this.route.navigate(['']);

  }

}
