import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MessageResponse } from 'src/app/core/models';

@Component({
  selector: 'chat-wrapper-messages',
  templateUrl: './chat-wrapper-messages.component.html'
})
export class ChatWrapperMessagesComponent implements OnInit {

  @Input() messages: MessageResponse[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
