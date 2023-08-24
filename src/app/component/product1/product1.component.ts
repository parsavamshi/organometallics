import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.scss']
})
export class Product1Component implements OnInit {
  constructor(private meta: Meta, private title:Title) {}

  ngOnInit(): void {
    this.meta.addTag(
      { name: 'description',
      content: 'N-Butyllithium Manufacturers In India. Organo we are dedicated to delivering not just exceptional products but also the best service to our customers.' }
      );

      this.title.setTitle('N-BUTYLLITHIUM MANUFACTURERS IN INDIA');
  }


}
