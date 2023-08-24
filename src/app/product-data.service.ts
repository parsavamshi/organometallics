import { Injectable } from '@angular/core';
import { ImageLoaderMode } from 'ng-gallery';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor() { }

  courses = [
    {
      id:1,
      name:'ljnkj',
      author: 'john',
      duration: 48,
      type:'free',
      price:0.00,
      ratings:3.5,
      image:'../../src/assets/images/products/product1.png',
      description:'zrhfdsfhjfyeiuawgefiuase iosdhfisduhgoishdfo ahsidfhisd ahseidfh'
    },
    {
      id:2,
      name:'ljnkj',
      author: 'john',
      duration: 48,
      type:'free',
      price:0.00,
      ratings:3.5,
      image:'../../src/assets/images/products/product1.png',
      description:'zrhfdsfhjfyeiuawgefiuase iosdhfisduhgoishdfo ahsidfhisd ahseidfh'
    },
    {
      id:3,
      name:'ljnkj',
      author: 'john',
      duration: 48,
      type:'free',
      price:0.00,
      ratings:3.5,
      image:'../../src/assets/images/products/product1.png',
      description:'zrhfdsfhjfyeiuawgefiuase iosdhfisduhgoishdfo ahsidfhisd ahseidfh'
    },
    {
      id:4,
      name:'ljnkj',
      author: 'john',
      duration: 48,
      type:'free',
      price:0.00,
      ratings:3.5,
      image:'../../src/assets/images/products/product1.png',
      description:'zrhfdsfhjfyeiuawgefiuase iosdhfisduhgoishdfo ahsidfhisd ahseidfh'
    },
    {
      id:5,
      name:'ljnkj',
      author: 'john',
      duration: 48,
      type:'free',
      price:0.00,
      ratings:3.5,
      image:'../../src/assets/images/products/product1.png',
      description:'zrhfdsfhjfyeiuawgefiuase iosdhfisduhgoishdfo ahsidfhisd ahseidfh'
    },
    {
      id:6,
      name:'ljnkj',
      author: 'john',
      duration: 48,
      type:'free',
      price:0.00,
      ratings:3.5,
      image:'../../src/assets/images/products/product1.png',
      description:'zrhfdsfhjfyeiuawgefiuase iosdhfisduhgoishdfo ahsidfhisd ahseidfh'
    }
  ]
}
