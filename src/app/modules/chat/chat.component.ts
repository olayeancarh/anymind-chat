import { Component, OnInit } from '@angular/core';
import {
  Channel,
  MessageReq,
  MessageResponse,
  PostMessageReq,
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
  chatDetails: any = {};

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {}

  setSelectedUser(event: any): void {
    this.user = event;
    this.channel && this.getLatestMessages({ channelId: this.channel.channelId });
    this.chatDetails = { ...this.chatDetails, user: this.user }
  }

  setSelectedChannel(event: any): void {
    this.channel = event;
    this.chatDetails = { ...this.chatDetails, channel: this.channel }
    this.user && this.getLatestMessages({ channelId: this.channel.channelId });
  }

  postUserMessage(event: any): void {
    if (this.channel && this.user) {
      const data: PostMessageReq = {
        channelId: this.channel.channelId,
        text: event.message,
        userId: this.user.userId,
      };

      this.chatService.postMessage(data).subscribe({
        next: ({ data }) => {
          if (data) { this.messages.push({ ...data.postMessage, notsent: false }) }
        },
        error: (error) => {
          if (error) {this.messages.push({ ...data, notsent: true, messageId: '', datetime: ''})}
        },
      });
    }
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

  getLatestMessages(messageValues: MessageReq): void {
    this.chatService
      .getLatestMessages(messageValues)
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
        this.messages = this.old
          ? [...new_messages, ...this.messages]
          : [...this.messages, ...new_messages];
        this.loading = loading;
      });
  }
}
