
import * as _ from 'lodash';
import { Component, Inject, OnInit, OnChanges, TemplateRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize, map } from 'rxjs/operators';
import { FileService } from '../Services/file.service';
import { ArtCategory } from '../artcategory';
import { ArtSubCategory } from '../artSubCategory';
import { SelectService } from '../Services/select.service';
import { ImageService } from '../Services/image.service';
import { ToastService } from '../Services/toast.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit, OnChanges {
  // tslint:disable-next-line:no-inferrable-types
  SaveDisabled: boolean = false;
  uploadProgress$: Observable<number>;
  task: AngularFireUploadTask;
  selectedCategory: ArtCategory = new ArtCategory('', '');
  selectSubVal: any;
  artcat: ArtCategory[];
  artsubcat: ArtSubCategory[];
  selectedImage: any;
  url: string;
  id: string;
  file: string;
  category: string;
  subcategory: string;
  fileUploads: any[];
  // tslint:disable-next-line:max-line-length
  constructor(public toastService: ToastService, private selectService: SelectService, @Inject(AngularFireStorage) private storage: AngularFireStorage, @Inject(FileService) private fileService: FileService, private imageService: ImageService) { }
  // tslint:disable-next-line:typedef
  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }
  /* tslint:disable use-lifecycle-interface */
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.artcat = this.selectService.getArtCategory();
    this.onSelect(this.selectedCategory.id);
    this.selectSubVal = '';
    this.fileService.getImageDetailList();
    this.selectedImage = null;
  }


  // tslint:disable-next-line:typedef
  ngOnChanges() {
    // Use snapshotChanges().map() to store the key
    this.fileService.getFilteredByCaption(this.file).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  }
  // tslint:disable-next-line:typedef
  onSelect(subCategoryid) {
    this.artsubcat = this.selectService.getArtSubCategory().filter((item) => item.subCategoryid === subCategoryid);
  }
  // tslint:disable-next-line:typedef
  showPreview(event: any) {
    this.selectedImage = event.target.files[0];
  }

  // tslint:disable-next-line:typedef
  showStandard() {
    this.toastService.show('I am a standard toast', {
      delay: 2000,
      autohide: true
    });
  }

  // tslint:disable-next-line:typedef
  showSuccess() {
    this.toastService.show('You have successfully added image to database!', {
      classname: 'bg-success text-light',
      delay: 5000,
      autohide: true,
      headertext: 'Image Upload'
    });
  }
  // tslint:disable-next-line:typedef
  showError() {
    this.toastService.show('Check Required Fields', {
      classname: 'bg-danger text-light',
      delay: 3000,
      autohide: true,
      headertext: 'Error!!!'
    });
  }
  // tslint:disable-next-line:typedef
  save() {


    if (this.selectedImage === null ||
    this.id === 'undefined' ||
    this.selectSubVal === ''
    ) {
      return this.showError();
    }



    // tslint:disable-next-line:prefer-const
    let name = this.selectedImage.name;
    this.SaveDisabled = true;
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, this.selectedImage);
    this.uploadProgress$ = task.percentageChanges();
    this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.url = url;
          this.category = this.selectedCategory.id.toString();
          this.subcategory = this.selectSubVal;
          this.fileService.insertImageDetails(this.id, this.url, this.category, this.subcategory);
          this.showSuccess();
        });
      })
    ).subscribe();
    this.SaveDisabled = false;

  }

  // tslint:disable-next-line:typedef
  deleteFileUpload(fileUploads) {
    this.fileService.deleteFileUpload(fileUploads);
  }

}
