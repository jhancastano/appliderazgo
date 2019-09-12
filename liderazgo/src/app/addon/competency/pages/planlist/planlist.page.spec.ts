import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanlistPage } from './planlist.page';

describe('PlanlistPage', () => {
  let component: PlanlistPage;
  let fixture: ComponentFixture<PlanlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
