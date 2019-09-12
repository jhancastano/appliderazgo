import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondentsPage } from './respondents.page';

describe('RespondentsPage', () => {
  let component: RespondentsPage;
  let fixture: ComponentFixture<RespondentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespondentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
