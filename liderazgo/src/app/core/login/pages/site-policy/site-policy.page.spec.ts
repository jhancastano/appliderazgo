import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitePolicyPage } from './site-policy.page';

describe('SitePolicyPage', () => {
  let component: SitePolicyPage;
  let fixture: ComponentFixture<SitePolicyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitePolicyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitePolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
