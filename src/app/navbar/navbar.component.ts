import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthenticationService } from './../Services/authentication.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
   selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
collapse = true;
title: 'Art Gallery';
user: Observable<firebase.User>;
constructor(private authService: AuthenticationService, private router: Router) { }

// tslint:disable-next-line:typedef
 ngOnInit() {
this.user = this.authService.authUser();
}

// tslint:disable-next-line:typedef
logOut() {
 this.authService.logout().then(onResolve => this.router.navigate['/']);
  }
}
