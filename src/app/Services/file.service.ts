import { Injectable, Inject } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import {GalleryImage } from '../models/galleryImage.model';
import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import {ToastService} from '../Services/toast.service';
import { map } from 'rxjs/operators';

@Injectable()
export class FileService {

  imageDetailList: AngularFireList<any>;
  private basePath = '/imageDetails';
  fileList: any[];
  dataSet: Data = {
    // tslint:disable-next-line:whitespace
    id:'',
    // tslint:disable-next-line:whitespace
    url:'',
    // tslint:disable-next-line:whitespace
    category:'',
    // tslint:disable-next-line:whitespace
    subcategory:''
  };



  // tslint:disable-next-line:no-inferrable-types
  msg: string = 'error';
  private uid: string;
  // tslint:disable-next-line:max-line-length
  constructor(public toastService: ToastService, private storage: AngularFireStorage, private afAuth: AngularFireAuth, @Inject(AngularFireDatabase) private fire: AngularFireDatabase) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;
      }
    });
  }

  // tslint:disable-next-line:typedef
  getImageDetailList() {
    this.imageDetailList = this.fire.list('imageDetails');
  }

  // tslint:disable-next-line:typedef
  insertImageDetails(id, url, category, subcategory) {
    this.dataSet = {
      // tslint:disable-next-line:object-literal-shorthand
      id : id,
       // tslint:disable-next-line:object-literal-shorthand
      url: url,
      // tslint:disable-next-line:object-literal-shorthand
      category: category,
       // tslint:disable-next-line:object-literal-shorthand
      subcategory: subcategory

    };
    // tslint:disable-next-line:only-arrow-functions
    this.imageDetailList.push(this.dataSet).then(() => {
    })
    .catch(error =>  this.showError(error));
  }

    // tslint:disable-next-line:typedef
    showError(error) {
      this.toastService.show('Failed to Upload/Delete Image' + error, {
        classname: 'bg-danger text-light',
        delay: 5000 ,
        autohide: true,
        headertext: 'Error!!!'
      });
    }
// tslint:disable-next-line:typedef
getFilteredByCaption(file: any): AngularFireList <GalleryImage[]> {

  return this.fire.list('/imageDetails', ref => ref.orderByChild('id').startAt(file).endAt(file + '\uF7FF'));
 }


// tslint:disable-next-line:typedef
deleteFileUpload(fileUpload: GalleryImage) {
  this.deleteFileDatabase(fileUpload.key)
    .then(() => {
      this.deleteFileStorage(fileUpload.url);
      this.showSuccess();
    })
    .catch(error =>  this.showError(error));
}

// tslint:disable-next-line:typedef
showSuccess() {
  this.toastService.show('You have successfully deleted image from database!', {
    classname: 'bg-success text-light',
    delay: 3000 ,
    autohide: true,
    headertext: 'Image Deletion'
  });
}

// tslint:disable-next-line:typedef
private deleteFileDatabase(key: string) {
  return this.fire.list(`${this.basePath}/${key}`).remove();
}
// tslint:disable-next-line:typedef
private deleteFileStorage(downloadUrl: string) {
  return this.storage.storage.refFromURL(downloadUrl).delete();
}


}

export interface Data
{
   // tslint:disable-next-line:no-inferrable-types
  id: string;
   // tslint:disable-next-line:no-inferrable-types
  url: string;
   // tslint:disable-next-line:no-inferrable-types
  category: string;
   // tslint:disable-next-line:no-inferrable-types
  subcategory: string;
}
