import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reaction-cabailities',
  templateUrl: './reaction-cabailities.component.html',
  styleUrls: ['./reaction-cabailities.component.scss']
})
export class ReactionCabailitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  productData = [
    // {
    //   id:1,
    //   productName:'All Types of Alkali Metal Reactions',

    // },
    {
      id:2,
      productName:'Hydrogenation',
    },
    {
      id:4,
      productName:'Ammonalysis',
    },
    {
      id:1,
      productName:'Cryogenic Reactions',
    },

    {
      id:3,
      productName:'Grignard Reaction',

    },






  ]
  product2 =[
    {
      id:5,
      productName:'Oxidation',

    },
    {
      id:6,
      productName:'Acetylation',

    },
    {
      id:7,
      productName:'Friedel Crafts Reactions',

    },
    {
      id:8,
      productName:'Halogenations',

    },
  ]
  product3 = [
    {
      id:9,
      productName:'Condensation',

    },
    {
      id:10,
      productName:'Nitration',

    },
    {
      id:11,
      productName:'Birch reduction',

    },
    {
      id:12,
      productName:'Suzuki coupling'

    },
  ]
  product4 = [
    {
      id:13,
      productName:'Carbonylation',

    },
    {
      id:14,
      productName:'Hydrolysis',

    },
    {
      id:16,
      productName:'Borohydride Reduction',

    },
    {
      id:15,
      productName:'Chlorosulfonation',

    },

  ]
}
