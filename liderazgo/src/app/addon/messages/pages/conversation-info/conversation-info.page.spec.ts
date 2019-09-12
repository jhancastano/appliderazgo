import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationInfoPage } from './conversation-info.page';

describe('ConversationInfoPage', () => {
  let component: ConversationInfoPage;
  let fixture: ComponentFixture<ConversationInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
