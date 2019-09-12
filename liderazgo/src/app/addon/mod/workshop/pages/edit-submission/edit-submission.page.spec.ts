import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubmissionPage } from './edit-submission.page';

describe('EditSubmissionPage', () => {
  let component: EditSubmissionPage;
  let fixture: ComponentFixture<EditSubmissionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubmissionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubmissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
