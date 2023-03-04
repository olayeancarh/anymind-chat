import { Component, OnInit } from '@angular/core';
import { Channel, MessageResponse, User } from 'src/app/core/models';
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

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

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
  }

  getLatestMessages(channelId: string): void {
    this.chatService.getLatestMessages(channelId).subscribe(({ data, loading }) => {
      this.messages = [...data.fetchLatestMessages].reverse();
      this.loading = loading;
      console.log(this.messages);
    })
  }

}
