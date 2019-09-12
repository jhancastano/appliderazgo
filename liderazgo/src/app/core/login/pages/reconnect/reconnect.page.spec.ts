import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconnectPage } from './reconnect.page';

describe('ReconnectPage', () => {
  let component: ReconnectPage;
  let fixture: ComponentFixture<ReconnectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconnectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconnectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
