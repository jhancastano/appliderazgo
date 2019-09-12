import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteHelpPage } from './site-help.page';

describe('SiteHelpPage', () => {
  let component: SiteHelpPage;
  let fixture: ComponentFixture<SiteHelpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteHelpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteHelpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
