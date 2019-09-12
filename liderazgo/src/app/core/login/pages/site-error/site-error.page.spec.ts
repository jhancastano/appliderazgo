import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteErrorPage } from './site-error.page';

describe('SiteErrorPage', () => {
  let component: SiteErrorPage;
  let fixture: ComponentFixture<SiteErrorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteErrorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
