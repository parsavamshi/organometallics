import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOneDetailsComponent } from './product-one-details.component';

describe('ProductOneDetailsComponent', () => {
  let component: ProductOneDetailsComponent;
  let fixture: ComponentFixture<ProductOneDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOneDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
