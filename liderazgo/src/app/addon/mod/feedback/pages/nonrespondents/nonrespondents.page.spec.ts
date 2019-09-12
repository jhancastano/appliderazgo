import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonrespondentsPage } from './nonrespondents.page';

describe('NonrespondentsPage', () => {
  let component: NonrespondentsPage;
  let fixture: ComponentFixture<NonrespondentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonrespondentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonrespondentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
