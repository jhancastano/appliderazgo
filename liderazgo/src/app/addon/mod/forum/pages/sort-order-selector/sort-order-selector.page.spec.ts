import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortOrderSelectorPage } from './sort-order-selector.page';

describe('SortOrderSelectorPage', () => {
  let component: SortOrderSelectorPage;
  let fixture: ComponentFixture<SortOrderSelectorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortOrderSelectorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortOrderSelectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
