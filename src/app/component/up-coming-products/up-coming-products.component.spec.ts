import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpComingProductsComponent } from './up-coming-products.component';

describe('UpComingProductsComponent', () => {
  let component: UpComingProductsComponent;
  let fixture: ComponentFixture<UpComingProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpComingProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpComingProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
