import { AuthenticationService } from './app/Services/authentication.service';
import { Routes } from '@angular/router';
import { GalleryComponent } from './app/gallery/gallery.component';
import { ImageDetailComponent } from './app/image/image-detail.component';
import { LoginComponent } from './app/login/login.component';
import { UploadComponent } from './app/upload/upload.component';
import { ContactmeComponent } from './app/contactme/contactme.component';
import { AboutmeComponent } from './app/aboutme/aboutme.component';
import { RequestListComponent } from './app/request-list/request-list.component';
import { AuthenticationGuard } from './app/Services/authenticationGuard.service';
export const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent},
  { path: 'upload', component: UploadComponent, canActivate: [AuthenticationGuard]},
  { path: 'request-list', component: RequestListComponent, canActivate: [AuthenticationGuard]},
  { path: 'contactme', component: ContactmeComponent},
  { path: 'aboutme', component: AboutmeComponent},
  { path: 'image/:id', component: ImageDetailComponent},
  { path: '', redirectTo: '/gallery', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
];

