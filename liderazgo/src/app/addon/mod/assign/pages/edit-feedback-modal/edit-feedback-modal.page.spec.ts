import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFeedbackModalPage } from './edit-feedback-modal.page';

describe('EditFeedbackModalPage', () => {
  let component: EditFeedbackModalPage;
  let fixture: ComponentFixture<EditFeedbackModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFeedbackModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFeedbackModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
