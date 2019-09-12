import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginPagePage } from './plugin-page.page';

describe('PluginPagePage', () => {
  let component: PluginPagePage;
  let fixture: ComponentFixture<PluginPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluginPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
