import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logInState = true;

  get isLoggedIn() {
    return this.logInState;
  }

  logIn() {
    this.logInState = true;
  }

  logOut() {
    this.logInState = false;
  }
}
