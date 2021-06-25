import { Observable } from 'rxjs';
import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../Services/image.service';
import {GalleryImage } from '../models/galleryImage.model';
@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent  implements OnInit {
   imageUrl = '';

  constructor(private imageService: ImageService,
              private route: ActivatedRoute) { }
               // tslint:disable-next-line:typedef
              getImageUrl(key: string) {
                this.imageService.getImage(key).
                // then(imageUrl => (console.log(imageUrl)));
                then(image => this.imageUrl = image.url);
              }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    // tslint:disable-next-line:no-string-literal
    this.getImageUrl(this.route.snapshot.params['id']);
  }
}
