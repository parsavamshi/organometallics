import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ProductsComponent } from './component/products/products.component';
import { CarrersComponent } from './component/carrers/carrers.component';
import { ContactsUsComponent } from './component/contacts-us/contacts-us.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { OurTeamComponent } from './component/our-team/our-team.component';
import { OurCertificationComponent } from './component/our-certification/our-certification.component';
import { UpComingProductsComponent } from './component/up-coming-products/up-coming-products.component';
import { ExistingProductsComponent } from './component/existing-products/existing-products.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { BlogComponent } from './component/blog/blog.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Director1Component } from './component/director1/director1.component';
import { Director2Component } from './component/director2/director2.component';
import { Director3Component } from './component/director3/director3.component';
import { ProductsNavComponent } from './component/products-nav/products-nav.component';
import { ReactionCabailitiesComponent } from './component/reaction-cabailities/reaction-cabailities.component';
import { GalleryModule } from '@ngx-gallery/core';
// import { LightboxModule } from '@ngx-gallery/lightbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductOneDetailsComponent } from './component/existing-products/product-one-details/product-one-details.component';
import { RouterModule } from '@angular/router';
import { Product1Component } from './component/product1/product1.component';
import { Product2Component } from './component/product2/product2.component';
import { Product3Component } from './component/product3/product3.component';
import { Product4Component } from './component/product4/product4.component';
import { Product5Component } from './component/product5/product5.component';
import { Product6Component } from './component/product6/product6.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    CarrersComponent,
    ContactsUsComponent,
    NavbarComponent,
    FooterComponent,
    OurTeamComponent,
    OurCertificationComponent,
    UpComingProductsComponent,
    ExistingProductsComponent,
    BlogComponent,
    GalleryComponent,
    Director1Component,
    Director2Component,
    Director3Component,
    ProductsNavComponent,
    ReactionCabailitiesComponent,
    ProductOneDetailsComponent,
    Product1Component,
    Product2Component,
    Product3Component,
    Product4Component,
    Product5Component,
    Product6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ExistingProductsComponent },
      { path: 'products/:productId', component: ProductOneDetailsComponent },
    ]),
    NgxScrollTopModule,
    HttpClientModule,
    FormsModule,
    GalleryModule,
    // LightboxModule,
    BrowserAnimationsModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
