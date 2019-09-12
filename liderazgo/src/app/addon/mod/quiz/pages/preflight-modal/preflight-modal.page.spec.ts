import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreflightModalPage } from './preflight-modal.page';

describe('PreflightModalPage', () => {
  let component: PreflightModalPage;
  let fixture: ComponentFixture<PreflightModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreflightModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreflightModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
