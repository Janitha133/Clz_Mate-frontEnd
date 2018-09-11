import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { 

  }

  adminLogin(user){
    if(user.username === "admin@email.com" && user.password === "admin123"){
      return true;
    }
    return false;
  }

  isLogged(){
    if(!(localStorage.getItem('token') === null)) return true;
    return false;    
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  getCurentUser(){
    return localStorage.getItem('token');
  }
}
