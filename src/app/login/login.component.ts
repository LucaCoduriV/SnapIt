import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/interfaces/ILogin';
import { AuthService } from '../services/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: ILogin = { login: "admin", password: "pw" }

  loginForm: FormGroup;
  message: string;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/galerie';
    this.authService.logout();
  }

  login() {

    // stop here if form is invalid  
    if (this.loginForm.invalid) {
      return;
    }
    else {
      this.authService.checkLogin(this.loginForm.controls.login.value,this.loginForm.controls.password.value,(result)=>{
        console.log(result);
        if (result) {
          console.log("Login successful");
          //this.authService.authLogin(this.model);  
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('token', this.loginForm.controls.login.value);
          this.router.navigate([this.returnUrl]);
        }
        else {
          console.log("Login failed");
          this.message = "Veuillez vérifier votre nom d'utilisateur ou mot de passe.";
        }
      });

      
    }
  }
}
