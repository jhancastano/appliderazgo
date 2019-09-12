import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListModTypePage } from './list-mod-type.page';

describe('ListModTypePage', () => {
  let component: ListModTypePage;
  let fixture: ComponentFixture<ListModTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListModTypePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListModTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
