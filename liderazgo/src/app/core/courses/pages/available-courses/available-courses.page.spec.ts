import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCoursesPage } from './available-courses.page';

describe('AvailableCoursesPage', () => {
  let component: AvailableCoursesPage;
  let fixture: ComponentFixture<AvailableCoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableCoursesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
