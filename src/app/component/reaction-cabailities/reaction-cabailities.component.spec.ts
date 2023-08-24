import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionCabailitiesComponent } from './reaction-cabailities.component';

describe('ReactionCabailitiesComponent', () => {
  let component: ReactionCabailitiesComponent;
  let fixture: ComponentFixture<ReactionCabailitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactionCabailitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactionCabailitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
