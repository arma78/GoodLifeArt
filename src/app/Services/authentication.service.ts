import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { User } from '../models/user.model';
import {ToastService} from '../Services/toast.service';
import { auth } from 'firebase/app';
@Injectable()
export class AuthenticationService {
private user: Observable<firebase.User>;
  constructor(public toastService: ToastService, private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
   }

   // tslint:disable-next-line:typedef
   login(user: User) {
     return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
     .then(() => { this.showSuccess(user.email); })
     .catch(error =>  this.showError(error));
   }
    // tslint:disable-next-line:typedef
    showSuccess(user) {
      this.toastService.show('Welcome: ' + user, {
        classname: 'bg-success text-light',
        delay: 3000 ,
        autohide: true,
        headertext: 'User Log-in'
      });
    }
    // tslint:disable-next-line:typedef
    showError(error) {
      this.toastService.show('Login Error - ' + error, {
        classname: 'bg-danger text-light',
        delay: 6000 ,
        autohide: true,
        headertext: 'Error!!!'
      });
    }

    // tslint:disable-next-line:typedef
    GoogleAuth() {
      return this.AuthLogin(new auth.GoogleAuthProvider());
    }

    // Auth logic to run auth providers
  // tslint:disable-next-line:typedef
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!');
    }).catch((error) => {
        console.log(error);
    });
  }


   // tslint:disable-next-line:typedef
   logout() {
     return this.afAuth.auth.signOut();
   }

   // tslint:disable-next-line:typedef
   authUser() {
    return this.user;
  }
}
