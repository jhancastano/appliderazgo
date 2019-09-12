import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyPage } from './competency.page';

describe('CompetencyPage', () => {
  let component: CompetencyPage;
  let fixture: ComponentFixture<CompetencyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
