import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionMessagesPage } from './session-messages.page';

describe('SessionMessagesPage', () => {
  let component: SessionMessagesPage;
  let fixture: ComponentFixture<SessionMessagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionMessagesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionMessagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
