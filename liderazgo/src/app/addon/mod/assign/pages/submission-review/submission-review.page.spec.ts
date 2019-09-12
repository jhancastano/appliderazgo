import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionReviewPage } from './submission-review.page';

describe('SubmissionReviewPage', () => {
  let component: SubmissionReviewPage;
  let fixture: ComponentFixture<SubmissionReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionReviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
