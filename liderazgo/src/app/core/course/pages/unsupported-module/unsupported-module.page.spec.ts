import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsupportedModulePage } from './unsupported-module.page';

describe('UnsupportedModulePage', () => {
  let component: UnsupportedModulePage;
  let fixture: ComponentFixture<UnsupportedModulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsupportedModulePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsupportedModulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
