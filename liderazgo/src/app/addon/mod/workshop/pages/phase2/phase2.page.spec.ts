import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Phase2Page } from './phase2.page';

describe('Phase2Page', () => {
  let component: Phase2Page;
  let fixture: ComponentFixture<Phase2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Phase2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Phase2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
