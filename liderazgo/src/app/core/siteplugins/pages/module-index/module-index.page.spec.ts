import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleIndexPage } from './module-index.page';

describe('ModuleIndexPage', () => {
  let component: ModuleIndexPage;
  let fixture: ComponentFixture<ModuleIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleIndexPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
