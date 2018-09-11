import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { 
    this.form = fb.group({
      username: ['', [
        Validators.required,
        Validators.email,
      ]],
      password: ['', Validators.required],
    });
  }

  form;
  invalidLogin = false;

  ngOnInit() {
  } 
  
  onSubmit(form){
    let user = form.value;
    if(this.authService.adminLogin(user)){
      localStorage.setItem('token', "abcdefghijklmnopqrstuvwxyz");
      this.form.reset();
      this.router.navigate(['admin']);
    }else{
      this.invalidLogin = true;
    }
  }

  get username(){ return this.form.get('username')}
  get password(){ return this.form.get('password')}

}
