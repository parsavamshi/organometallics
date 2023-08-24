import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from 'src/app/product-data.service';

// import { Product, products } from '../products';

@Component({
  selector: 'app-product-one-details',
  templateUrl: './product-one-details.component.html',
  styleUrls: ['./product-one-details.component.scss']
})
export class ProductOneDetailsComponent implements OnInit {
  course: any;
  courseId: any
  constructor(private route: ActivatedRoute, private activatedRoute: ActivatedRoute, private service: ProductDataService) { }
ngOnInit(): void {
  this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
  // this.courseId = this.activatedRoute.snapshot.params['id'];

  this.course = this.service.courses.find(x => x.id == this.courseId)
}
  // ngOnInit() {
  //   // First get the product id from the current route.
  //   const routeParams = this.route.snapshot.paramMap;
  //   const productIdFromRoute = Number(routeParams.get('productId'));

  //   // Find the product that correspond with the id provided in route.
  //   this.product = products.find((product: { id: number; }) => product.id === productIdFromRoute);
  // }
  // product: Product | undefined;


}
