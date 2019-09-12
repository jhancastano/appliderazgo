import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSelectorPage } from './section-selector.page';

describe('SectionSelectorPage', () => {
  let component: SectionSelectorPage;
  let fixture: ComponentFixture<SectionSelectorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSelectorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSelectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
