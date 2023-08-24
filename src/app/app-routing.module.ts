import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { BlogComponent } from './component/blog/blog.component';
import { CarrersComponent } from './component/carrers/carrers.component';
import { ContactsUsComponent } from './component/contacts-us/contacts-us.component';
import { Director1Component } from './component/director1/director1.component';
import { Director2Component } from './component/director2/director2.component';
import { Director3Component } from './component/director3/director3.component';
import { ExistingProductsComponent } from './component/existing-products/existing-products.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { OurCertificationComponent } from './component/our-certification/our-certification.component';
import { OurTeamComponent } from './component/our-team/our-team.component';
import { ProductOneDetailsComponent } from './component/existing-products/product-one-details/product-one-details.component';
import { ReactionCabailitiesComponent } from './component/reaction-cabailities/reaction-cabailities.component';
// import { ProductsComponent } from './component/products/products.component';
import { UpComingProductsComponent } from './component/up-coming-products/up-coming-products.component';
import { HomeComponent } from './home/home.component';
import { Product1Component } from './component/product1/product1.component';
import { Product2Component } from './component/product2/product2.component';
import { Product3Component } from './component/product3/product3.component';
import { Product4Component } from './component/product4/product4.component';
import { Product5Component } from './component/product5/product5.component';

const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'careers', component:CarrersComponent},
  {path:'contact-us',component:ContactsUsComponent},
  {path:'our-team', component:OurTeamComponent},
  {path:'our-certifications', component:OurCertificationComponent},
  {path:'Products',component:ExistingProductsComponent},
  {path:'up-coming-products', component:UpComingProductsComponent},
  {path:'blog', component:BlogComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'rao', component:Director1Component},
  {path:'vara-prasad',component:Director2Component},
  {path:'vijaya-lakshmi',component:Director3Component},
  {path:'reaction-capabilities', component:ReactionCabailitiesComponent},
  // {path:'Courses/Course/:id', component:ProductOneDetailsComponent},
  {
    path:'n-butyllithium-manufacturers-in-india', component:Product1Component,
    data : {
      title: 'N-Butyllithium Manufacturers In India | Organo Metallics'
    }
  },
  {path:'n-Hexyllithium', component:Product2Component},
  {path:'Phenyllithium', component:Product3Component},
  {path:'Methyllithium', component:Product4Component},
  {path:'Sec-butyllithium', component:Product5Component},
  // {path:'n-butyllithium', component:Product1Component},

  // { path: '', component: ExistingProductsComponent },
  // { path: 'products/:productId', component: ProductOneDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
