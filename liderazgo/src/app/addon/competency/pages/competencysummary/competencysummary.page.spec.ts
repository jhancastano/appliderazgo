import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencysummaryPage } from './competencysummary.page';

describe('CompetencysummaryPage', () => {
  let component: CompetencysummaryPage;
  let fixture: ComponentFixture<CompetencysummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencysummaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencysummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
