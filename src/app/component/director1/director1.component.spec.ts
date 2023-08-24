import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Director1Component } from './director1.component';

describe('Director1Component', () => {
  let component: Director1Component;
  let fixture: ComponentFixture<Director1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Director1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Director1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
