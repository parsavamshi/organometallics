import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-up-coming-products',
  templateUrl: './up-coming-products.component.html',
  styleUrls: ['./up-coming-products.component.scss']
})
export class UpComingProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  productData = [
    {
      id:1,
      productName:'Sodium HMDS',
      productSolvents:'40% in THFe',
      productCasNumber:'[1070-89-9]'
    },
    {
      id:2,
      productName:'Lithium HMDS',
      productSolvents:'20% in THF',
      productCasNumber:'[4039-32-1]'
    },
    {
      id:3,
      productName:'Potassium HMDS',
      productSolvents:'20% in THF',
      productCasNumber:'[40949-94-8]'
    },
    {
      id:4,
      productName:'Lithium tert-butoxide',
      productSolvents:'1M in THF',
      productCasNumber:'[1907-33-1]]'
    },
    {
      id:5,
      productName:'Lithium diisopropylamidem',
      productSolvents:'1M / 2M in THF',
      productCasNumber:'[4111-54-0]]'
    },
    {
      id:6,
      productName:'Potassium Tert. Butoxide',
      productSolvents:' ',
      productCasNumber:''
    },

  ]
  productsData2 = [
    {
      id:1,
      productName:'Methyl Magnesium Chloride 3M in THF',
      productSolvents:'Iso-Propyl Magnesium Chloride',
      productCasNumber:'Sec-butyl magnesium chloride'
    },
    {
      id:2,
      productName:'Tert-butyl magnesium chloride',
      productSolvents:'Phenyl magnesium chloride 1M in THF',
      productCasNumber:'Methyl Magnesium Bromide'
    },
    {
      id:3,
      productName:'Benzyl Magnesium Chloride 2M in THF',
      productSolvents:'Phenyl Magnesium Bromider',
      productCasNumber:'Ethyl Magnesium Bromide 1M in THF & 3M in DEE'
    },
    {
      id:4,
      productName:'Isopropyl magnesium Chloride 2M in THF',
      productSolvents:' ',
      productCasNumber:' '
    },
  ]
  productsData3 = [
    {
      id:1,
      productName:'Iso-propyl magnesium chloride with 1.3M in Licl in THF',
      productSolvents:'Sec-butyl magnesium chloride with Licl in THF',
    },

  ]

  productsData4 = [
    {
      id:1,
      productName:'DIBAL-H',
      productSolvents:'1M in THF & in Tolune',
      productCasNumber:'[1191-15-7]'
    },
    {
      id:2,
      productName:'Lithium Aluminium Hydride',
      productSolvents:'2 M in THF',
      productCasNumber:'[16853-85-3]'
    },
    {
      id:3,
      productName:'Diethyl Zinc',
      productSolvents:'1M in Hexane',
      productCasNumber:'[557-20-0]'
    },
    {
      id:4,
      productName:'Rimethyl aluminium',
      productSolvents:'2 M in Heptane, hexane, toluenee',
      productCasNumber:'[75-24-1]'
    },
    {
      id:5,
      productName:'Borane DMS',
      productSolvents:'10M in DMS',
      productCasNumber:'[13292-87-0]'
    },
    {
      id:6,
      productName:'Borane THF',
      productSolvents:'1M in THF',
      productCasNumber:'[14044-65-6]'
    },
    {
      id:7,
      productName:'Vitride 65%',
      productSolvents:'In Toluene',
      productCasNumber:'[22722-98-1]'
    },
    {
      id:8,
      productName:'Boran Tri Bromide',
      productSolvents:'1M in DCM',
      productCasNumber:'[10294-33-4]]'
    },
    {
      id:9,
      productName:'4-Fluoro phenyl Mg. Bromide',
      productSolvents:'1 M in THF',
      productCasNumber:'[1378867-70-9]'
    },
    {
      id:10,
      productName:'Allyl Mg. Bromide',
      productSolvents:'1M in DEE',
      productCasNumber:'[1730-25-2]'
    },
    {
      id:11,
      productName:'4-Chloro phenyl Mg. Bromide',
      productSolvents:'1M in DEE',
      productCasNumber:'[873-77-8]'
    },
    {
      id:12,
      productName:'Benzyl Mg. Chloride',
      productSolvents:'2M in THF & DEE',
      productCasNumber:'[100-44-7]'
    },
    {
      id:13,
      productName:'Cyclopropoyl Mg. Bromide',
      productSolvents:'0.5 M in THF',
      productCasNumber:'[7051-34-5]'
    },
  ]

  lithiumSalts =[
    {
      id:1,
      productName:'Lithium Carbonate'
    },
    {
      id:2,
      productName:'Lithium Chloride anhydrous'
    },
    {
      id:3,
      productName:'Lithium Hydroxide Monohydrate'
    },
    {
      id:4,
      productName:'Lithium amide'
    },
    {
      id:5,
      productName:'Lithium Acetate'
    },
    {
      id:6,
      productName:'Lithium Sulfate'
    },
    {
      id:7,
      productName:'Lithium Peroxide'
    },
    {
      id:8,
      productName:'Lithium Citrate'
    },
    {
      id:9,
      productName:'Lithium chloride (40% solution in water)'
    },
    {
      id:10,
      productName:'Lithium Bromide Anhydrous'
    },
    {
      id:11,
      productName:'Lithium Bromide solid'
    },
  ]
}
