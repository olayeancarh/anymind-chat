import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedUser(event: any): void {
    console.log(event)
  }

}
