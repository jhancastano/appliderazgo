import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRetakePage } from './user-retake.page';

describe('UserRetakePage', () => {
  let component: UserRetakePage;
  let fixture: ComponentFixture<UserRetakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRetakePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRetakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
