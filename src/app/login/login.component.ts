import { Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';
import { CustomvalidationService } from '../Services/customvalidation.service';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  submitted = false;
  email: string;
  password: string;
  errorMsg: string;
  constructor(private formBuilder: FormBuilder,
      // tslint:disable-next-line:align
      private customValidator: CustomvalidationService ,
      // tslint:disable-next-line:align
      public authService: AuthenticationService,
      // tslint:disable-next-line:align
      private router: Router) { }



  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
    }
    );
  }

  // tslint:disable-next-line:typedef
  get loginFormControl() {
    return this.loginForm.controls;
  }

  // tslint:disable-next-line:typedef
  signIn() {
    this.authService.login({ email: this.email, password: this.password })
      .then(resolve => this.router.navigate(['gallery']))
      .catch(error => this.errorMsg = error.message);
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
       this.signIn();
    }
  }

}
