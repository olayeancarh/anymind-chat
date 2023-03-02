import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chat-readmore-button',
  templateUrl: './chat-readmore-button.component.html',
})
export class ChatReadmoreButtonComponent implements OnInit {

  @Input() old: boolean | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
