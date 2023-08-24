import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Director3Component } from './director3.component';

describe('Director3Component', () => {
  let component: Director3Component;
  let fixture: ComponentFixture<Director3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Director3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Director3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
