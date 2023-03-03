import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'chat-wrapper-textarea',
  templateUrl: './chat-wrapper-textarea.component.html',
})
export class ChatWrapperTextareaComponent implements OnInit {
  messageForm!: FormGroup;
  @Output() userMessage = new EventEmitter();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.messageForm = this._formBuilder.group({
      message: ['', Validators.required],
    });
  }

  getUserMessage(form: FormGroupDirective) {
    if (form.valid) {
      this.userMessage.emit(form.value);
    }
  }
}
