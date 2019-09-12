import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynchronizationPage } from './synchronization.page';

describe('SynchronizationPage', () => {
  let component: SynchronizationPage;
  let fixture: ComponentFixture<SynchronizationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynchronizationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynchronizationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
