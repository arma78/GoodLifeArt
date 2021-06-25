import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationGuard implements CanActivate {
user: Observable<firebase.User>;
constructor(private afAuth: AngularFireAuth, private router: Router){
this.user = afAuth.authState;
}

// tslint:disable-next-line:typedef
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
  return this.user.map((auth) => {
    if (!auth) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }).take(1);
  }
}
