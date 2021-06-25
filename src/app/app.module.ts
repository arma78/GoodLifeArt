import { AuthenticationService } from './Services/authentication.service';
import { AuthenticationGuard } from './Services/authenticationGuard.service';
import { ImageService } from './Services/image.service';
import { FileService } from './Services/file.service';
import { ToastService } from './Services/toast.service';
import { ContactMeService } from './Services/ContactMeService';
import { SelectService } from './Services/select.service';
import { ServicerequestService } from './Services/servicerequest.service';
import { CustomvalidationService } from './Services/customvalidation.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';


import {NavbarComponent} from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { GalleryComponent } from './gallery/gallery.component';

import { ImageDetailComponent } from './image/image-detail.component';

import { appRoutes } from '../routes';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { RequestListComponent } from './request-list/request-list.component';
import { ToastComponent } from './toast/toast.component';
import { NbThemeModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NgxAudioPlayerModule } from 'ngx-audio-player';






@NgModule({
  declarations: [
    BrowserModule,
    AppComponent,
    GalleryComponent,
    NavbarComponent,
    ImageDetailComponent,
    LoginComponent,
    UploadComponent,
    AboutmeComponent,
    RequestListComponent,
    ToastComponent,
    NgxAudioPlayerModule,
    NbLayoutModule,
    NbSidebarModule,
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgbModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule

  ],
  providers: [AuthenticationGuard,
     AuthenticationService,
      SelectService,
       ImageService,
        FileService,
         ContactMeService,
         ToastService,
          ServicerequestService,
          CustomvalidationService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
