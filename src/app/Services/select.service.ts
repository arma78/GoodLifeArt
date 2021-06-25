import { Injectable, Inject } from '@angular/core';
import { ArtCategory } from '../artcategory';
import { ArtSubCategory } from '../artSubCategory';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  // tslint:disable-next-line:typedef
  getArtCategory() {
    return [
     new ArtCategory('Tattoo Art', 'Tattoo Art' ),
     new ArtCategory('The Car Hood Art', 'The Car Hood Art' ),
     new ArtCategory('Paintings', 'Paintings' ),
     new ArtCategory('The Wall Murels', 'The Wall Murels' ),
    ];
  }
  // tslint:disable-next-line:typedef
  getArtSubCategory() {
   return [
     new ArtSubCategory('Geometric', 'Tattoo Art', 'Geometric' ),
     new ArtSubCategory('Mainstream', 'Tattoo Art', 'Mainstream' ),
     new ArtSubCategory('Minimal', 'Tattoo Art', 'Minimal'),
     new ArtSubCategory('Lettering', 'Tattoo Art', 'Lettering'),
     new ArtSubCategory('Realistic', 'Tattoo Art', 'Realistic' ),
     new ArtSubCategory('Water Color', 'Tattoo Art', 'Water Color'),
     new ArtSubCategory('Black Work', 'Tattoo Art', 'Black Work' ),
     new ArtSubCategory('Japanese', 'Tattoo Art', 'Japanese' ),
     new ArtSubCategory('New School', 'Tattoo Art', 'New School'),
     new ArtSubCategory('Old School', 'Tattoo Art', 'Old School' ),
     new ArtSubCategory('Tribals', 'Tattoo Art', 'Tribals' ),
     new ArtSubCategory('Standard Spray', 'The Car Hood Art', 'Standard Spray' ),
     new ArtSubCategory('Metalic Spray', 'The Car Hood Art', 'Metalic Spray' ),
     new ArtSubCategory('Water Color', 'Paintings', 'Water Color' ),
     new ArtSubCategory('Pasttele', 'Paintings', 'Pasttele' ),
     new ArtSubCategory('Ink', 'Paintings', 'Ink' ),
     new ArtSubCategory('Spray', 'Paintings', 'Spray' ),
     new ArtSubCategory('Graphite Pencil', 'Paintings', 'Graphite Pencil' ),
     new ArtSubCategory('Indoor Murels', 'The Wall Murels', 'Indoor Murels' ),
     new ArtSubCategory('Outdoor Fasade Murels', 'The Wall Murels', 'Outdoor Fasade Murels' )
    ];
  }

}
