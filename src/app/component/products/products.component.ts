import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // product=[
  //   {
  //     id:1,
  //     productname:"n-butyllithium",
  //     productsolvents:'Hexane, Heptane, Toluene & Cyclohexane',
  //     cas:'[109-72-8]'
  //   },
  //   {
  //     id:1,
  //     productname:"n-butyllithium",
  //     productsolvents:'Hexane, Heptane, Toluene & Cyclohexane',
  //     cas:'[109-72-8]'
  //   },
  //   {
  //     id:1,
  //     productname:"n-butyllithium",
  //     productsolvents:'Hexane, Heptane, Toluene & Cyclohexane',
  //     cas:'[109-72-8]'
  //   },
  //   {
  //     id:1,
  //     productname:"n-butyllithium",
  //     productsolvents:'Hexane, Heptane, Toluene & Cyclohexane',
  //     cas:'[109-72-8]'
  //   }
  // ]
}
