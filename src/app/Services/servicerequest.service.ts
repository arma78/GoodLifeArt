import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { ContactMe } from '../models/contactme.model';
import 'firebase/storage';

@Injectable()
export class ServicerequestService {

  private uid: string;
  requestList: Observable<any[]>;
  // tslint:disable-next-line:max-line-length
  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;
      }
    });
  }
   // tslint:disable-next-line:typedef
   getRequestList(): AngularFireList <ContactMe[]> {
    return this.db.list('/contactMeList');
  }

}
