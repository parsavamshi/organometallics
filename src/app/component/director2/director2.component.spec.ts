import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Director2Component } from './director2.component';

describe('Director2Component', () => {
  let component: Director2Component;
  let fixture: ComponentFixture<Director2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Director2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Director2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
