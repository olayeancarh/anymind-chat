import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatSelectChannelComponent } from './chat-select-channel/chat-select-channel.component';
import { ChatSelectUserComponent } from './chat-select-user/chat-select-user.component';
import { ChatWrapperHeaderComponent } from './chat-wrapper-header/chat-wrapper-header.component';
import { ChatWrapperMessagesComponent } from './chat-wrapper-messages/chat-wrapper-messages.component';
import { ChatReadmoreButtonComponent } from './chat-readmore-button/chat-readmore-button.component';
import { ChatWrapperTextareaComponent } from './chat-wrapper-textarea/chat-wrapper-textarea.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ChatComponent,
    ChatSelectChannelComponent,
    ChatSelectUserComponent,
    ChatWrapperHeaderComponent,
    ChatWrapperMessagesComponent,
    ChatReadmoreButtonComponent,
    ChatWrapperTextareaComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ChatModule { }
