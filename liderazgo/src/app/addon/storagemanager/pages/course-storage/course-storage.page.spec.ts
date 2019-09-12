import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStoragePage } from './course-storage.page';

describe('CourseStoragePage', () => {
  let component: CourseStoragePage;
  let fixture: ComponentFixture<CourseStoragePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseStoragePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseStoragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
