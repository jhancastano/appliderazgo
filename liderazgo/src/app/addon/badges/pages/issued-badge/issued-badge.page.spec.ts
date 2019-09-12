import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedBadgePage } from './issued-badge.page';

describe('IssuedBadgePage', () => {
  let component: IssuedBadgePage;
  let fixture: ComponentFixture<IssuedBadgePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuedBadgePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuedBadgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
