import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private http: Http
  ) { 

  }

  adminLogin(user){
    return this.http.get('https://polar-meadow-28819.herokuapp.com/user/login')
      .subscribe(result => {
        if(result.json().token){
          localStorage.setItem('token', result.json().token);
          return true;
        }
        return false;
      })
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
