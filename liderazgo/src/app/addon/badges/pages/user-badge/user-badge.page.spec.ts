import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBadgePage } from './user-badge.page';

describe('UserBadgePage', () => {
  let component: UserBadgePage;
  let fixture: ComponentFixture<UserBadgePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBadgePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBadgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
