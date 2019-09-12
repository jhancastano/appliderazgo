import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursecompetenciesPage } from './coursecompetencies.page';

describe('CoursecompetenciesPage', () => {
  let component: CoursecompetenciesPage;
  let fixture: ComponentFixture<CoursecompetenciesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursecompetenciesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursecompetenciesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
