import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { ContactMe } from '../models/contactme.model';
import {ToastService} from '../Services/toast.service';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable()
export class ContactMeService {


  private uid: string;


  addContactRequest: AngularFireList<ContactMe> = null;
  constructor(public toastService: ToastService, private afAuth: AngularFireAuth, private firebase: AngularFireDatabase) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;
      }
    });
    this.addContactRequest = firebase.list('/contactMeList');


  }

    // tslint:disable-next-line:typedef
    showError(error) {
      this.toastService.show('Failed to Submit Form' + error, {
        classname: 'bg-danger text-light',
        delay: 5000 ,
        autohide: true,
        headertext: 'Error!!!'
      });
    }
    // tslint:disable-next-line:typedef
showSuccess() {
  this.toastService.show('You have successfully sumbitted form!', {
    classname: 'bg-success text-light',
    delay: 3000 ,
    autohide: true,
    headertext: 'Success'
  });
}
  create(contactMe: ContactMe): any {
    return this.addContactRequest.push(contactMe).then(() => {
      this.showSuccess();
    })
    .catch(error =>  this.showError(error));;
  }

}
