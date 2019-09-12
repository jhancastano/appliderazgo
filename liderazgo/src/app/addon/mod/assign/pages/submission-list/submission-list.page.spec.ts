import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionListPage } from './submission-list.page';

describe('SubmissionListPage', () => {
  let component: SubmissionListPage;
  let fixture: ComponentFixture<SubmissionListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
