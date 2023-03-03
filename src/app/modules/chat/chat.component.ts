import { Component, OnInit } from '@angular/core';
import { Channel, User } from 'src/app/core/models';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {

  channel!: Channel;
  user!: User;
  old!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedUser(event: any): void {
    this.user = event;
  }

  setSelectedChannel(event: any): void {
    this.channel = event;
  }

  readMoreMessages(event: any): void {
    this.old = event;
  }

}
