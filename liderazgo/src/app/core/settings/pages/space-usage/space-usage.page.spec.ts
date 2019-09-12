import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceUsagePage } from './space-usage.page';

describe('SpaceUsagePage', () => {
  let component: SpaceUsagePage;
  let fixture: ComponentFixture<SpaceUsagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceUsagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceUsagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
