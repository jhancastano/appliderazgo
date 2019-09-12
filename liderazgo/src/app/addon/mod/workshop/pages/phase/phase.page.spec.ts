import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhasePage } from './phase.page';

describe('PhasePage', () => {
  let component: PhasePage;
  let fixture: ComponentFixture<PhasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
