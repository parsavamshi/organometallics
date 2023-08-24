import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCertificationComponent } from './our-certification.component';

describe('OurCertificationComponent', () => {
  let component: OurCertificationComponent;
  let fixture: ComponentFixture<OurCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurCertificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
