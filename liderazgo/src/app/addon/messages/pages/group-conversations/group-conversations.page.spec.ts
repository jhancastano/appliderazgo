import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupConversationsPage } from './group-conversations.page';

describe('GroupConversationsPage', () => {
  let component: GroupConversationsPage;
  let fixture: ComponentFixture<GroupConversationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupConversationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupConversationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
