import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})

export class AuthServiceService {
  isLoggedIn: boolean = false;

  constructor(
    public auth: AngularFireAuth,
    private router: Router
  ) { }

  signin(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password).then((res) => {
      this.isLoggedIn = true;
    });
  }

  async signup(email: string, password: string) {
    await this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn = true;
      });
  }

  logout() {
    this.isLoggedIn = false;
    return this.auth.signOut();
  }

  GoogleLogin() {
    return this.auth.signInWithPopup(
      new GoogleAuthProvider()).then(res => {
         this.isLoggedIn = true;
        localStorage.setItem('token',JSON.stringify(res.user?.uid));

        this.router.navigate(['']);
  })
  }


}