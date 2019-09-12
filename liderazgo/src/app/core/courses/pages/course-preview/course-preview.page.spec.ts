import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePreviewPage } from './course-preview.page';

describe('CoursePreviewPage', () => {
  let component: CoursePreviewPage;
  let fixture: ComponentFixture<CoursePreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePreviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
