import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
// import Lightbox from 'bs5-lightbox';
// import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { HttpClientModule} from '@angular/common/http';
// import { NgxGalleryModule } from '@kolkov/ngx-gallery';
// import { VERSION } from '@angular/material';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';
// import { Lightbox } from '@ngx-gallery/lightbox';
import { map } from 'rxjs/operators';
type NewType = any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  // gallery: any;

  // constructor(public gallery: Gallery, public lightbox: Lightbox) { }

  // ngOnInit(): void {
  // }
  // const options = {
  //   keyboard: true,
  //   size: 'fullscreen'
  // };

  // document.querySelectorAll('.my-lightbox-toggle').forEach((el) => el.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   const lightbox = new Lightbox(el, options);
  //   lightbox.show();
  // }));

//   items: GalleryItem[] | any ;

//   imageData = data;

//   constructor(public gallery: Gallery, public lightbox: Lightbox) {
//   }

//   ngOnInit() {

//     /** Basic Gallery Example */

//     // Creat gallery items
//     this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));


//     /** Lightbox Example */

//     // Get a lightbox gallery ref
//     const lightboxRef = this.gallery.ref('lightbox');

//     // Add custom gallery config to the lightbox (optional)
//     lightboxRef.setConfig({
//       imageSize: ImageSize.Cover,
//       thumbPosition: ThumbnailsPosition.Top
//     });

//     // Load items into the lightbox gallery ref
//     lightboxRef.load(this.items);
//   }
// }

// const data = [
//   {
//     srcUrl: '../../../assets/images/gallery/Building.png',
//     previewUrl: '../../../assets/images/gallery/Building.png'
//   },
//   {
//     srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
//     previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
//   },
//   {
//     srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
//     previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg'
//   },
//   {
//     srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
//     previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg'
//   }
// ];
items: GalleryItem[] | NewType;

imageData = [
  {
    srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
    previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
    previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg'
  }
];

ngOnInit() {
  // This is for Basic example
  // this.items = this.imageData.map(item => {
  //   return new ImageItem(item.srcUrl, item.previewUrl);
  // });

  this.items = this.imageData.map(item => {
    return new ImageItem({ src: item.srcUrl, thumb: item.previewUrl });
  });

  // This is for Lightbox example
  // this.gallery.ref('lightbox').load(this.items);
}
}
