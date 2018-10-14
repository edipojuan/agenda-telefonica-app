import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  form: FormGroup;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      code: ['', [Validators.required, Validators.maxLength(6), Validators.minLength(6)]]
    });
  }

  login() {
    if (!this.form.valid) {
      return;
    }

    this.authService.login(this.form.value).subscribe(
      (response) => {
        this.router.navigate(['telephone-book']);
        this.authService.setSession(response);
      },
      (error) => console.log('erro', error)
    );
  }
}
