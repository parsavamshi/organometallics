import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-nav',
  templateUrl: './products-nav.component.html',
  styleUrls: ['./products-nav.component.scss']
})
export class ProductsNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToTop() {
    (function smoothscroll() {
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          //   window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 0));
        }
    })();
}
}
