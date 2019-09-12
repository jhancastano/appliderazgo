import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesplitPage } from './coursesplit.page';

describe('CoursesplitPage', () => {
  let component: CoursesplitPage;
  let fixture: ComponentFixture<CoursesplitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesplitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesplitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
