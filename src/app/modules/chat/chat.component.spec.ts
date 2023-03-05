import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponent } from './chat.component';
import { ChatService } from 'src/app/core/services/chat.service';
import { ChatModule } from './chat.module';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { findComponent } from 'src/app/core/spec-helpers/chat.spec-helper';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;
  let chatService: ChatService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatComponent],
      imports: [ChatModule, ApolloTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: ChatService, useValue: chatService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('select channel component', () => {
    it('should render the select channel component', () => {
      const selectComponent = findComponent(fixture, 'chat-select-channel');
      expect(selectComponent).toBeTruthy();
    });

    it('should listen for emitted selected channel', () => {
      spyOn(component, 'getLatestMessages');
      const selectComponent = findComponent(fixture, 'chat-select-channel');
      component.user = {userId: "1", userName: "Sam"};
      selectComponent.triggerEventHandler('selectedChannel', { channelId: '1' });
      expect(component.getLatestMessages).toHaveBeenCalled();
    });
  });
});
