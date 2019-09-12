import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAreaPage } from './index-area.page';

describe('IndexAreaPage', () => {
  let component: IndexAreaPage;
  let fixture: ComponentFixture<IndexAreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexAreaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
