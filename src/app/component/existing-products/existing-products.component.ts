import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from 'src/app/product-data.service';

@Component({
  selector: 'app-existing-products',
  templateUrl: './existing-products.component.html',
  styleUrls: ['./existing-products.component.scss']
})
export class ExistingProductsComponent implements OnInit {
  course: any;
  courseId: any
constructor(private service: ProductDataService){}
  ngOnInit(): void {
  }

  productData = [
    {
      id:1,
      productName:'n-butyllithium',
      productSolvents:'Hexane, Heptane, Toluene & Cyclohexane',
      productCasNumber:'[109-72-8]'
    },
    {
      id:2,
      productName:'n-Hexyllithium',
      productSolvents:'2.3 M in Hexanee',
      productCasNumber:'[21369-64-2]'
    },
    {
      id:3,
      productName:'Phenyllithium',
      productSolvents:'Dibutyl ether',
      productCasNumber:'[591-51-5]'
    },
    {
      id:4,
      productName:'Methyllithium',
      productSolvents:'1.6M in Diethyl either, 3M in Diethoxy methanee',
      productCasNumber:'[917-54-4]'
    },
    {
      id:5,
      productName:'Sec-butyllithium',
      productSolvents:'Cyclohexane',
      productCasNumber:'[598-30-1]]'
    },
    // {
    //   id:1,
    //   productName:'n-butyllithium',
    //   productSolvents:'Hexane, Heptane, Toluene & Cyclohexane',
    //   productCasNumber:'[109-72-8]'
    // },
    // {
    //   id:1,
    //   productName:'n-butyllithium',
    //   productSolvents:'Hexane, Heptane, Toluene & Cyclohexane',
    //   productCasNumber:'[109-72-8]'
    // },
    // {
    //   id:1,
    //   productName:'n-butyllithium',
    //   productSolvents:'Hexane, Heptane, Toluene & Cyclohexane',
    //   productCasNumber:'[109-72-8]'
    // },
  ]
  scrollToTop(){
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        //   window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - (currentScroll / 0));
      }
  })();
  }

}
