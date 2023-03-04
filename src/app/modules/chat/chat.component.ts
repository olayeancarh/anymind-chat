import { Component, OnInit } from '@angular/core';
import {
  Channel,
  MessageReq,
  MessageResponse,
  User,
} from 'src/app/core/models';
import { ChatService } from 'src/app/core/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {
  channel!: Channel;
  user!: User;
  old!: boolean;
  message: any;
  messages!: MessageResponse[];
  loading: boolean = false;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {}

  setSelectedUser(event: any): void {
    this.user = event;
  }

  setSelectedChannel(event: any): void {
    this.channel = event;
    this.getLatestMessages(this.channel.channelId);
  }

  setUserMessage(event: any): void {
    this.message = event;
  }

  readMoreMessages(event: any): void {
    this.old = event;
    let data: MessageReq = {
      channelId: this.channel.channelId,
      old: this.old,
      messageId: this.old
        ? this.messages[0].messageId
        : this.messages[this.messages.length - 1].messageId,
    };
    this.getMoreMessages(data);
  }

  getLatestMessages(channelId: string): void {
    this.chatService
      .getLatestMessages({ channelId })
      .subscribe(({ data, loading }) => {
        this.messages = [...data.fetchLatestMessages].reverse();
        this.loading = loading;
      });
  }

  getMoreMessages(messageValues: MessageReq): void {
    this.chatService
      .getMoreMessages(messageValues)
      .subscribe(({ data, loading }) => {
        const new_messages = [...data.fetchMoreMessages].reverse();
        this.messages = this.old ? [...new_messages, ...this.messages] : [...this.messages, ...new_messages];
        this.loading = loading;
      });
  }
}
