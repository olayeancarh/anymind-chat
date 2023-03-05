import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'chat-wrapper-textarea',
  templateUrl: './chat-wrapper-textarea.component.html',
})
export class ChatWrapperTextareaComponent implements OnInit, OnChanges {
  messageForm!: FormGroup;
  @Output() userMessage = new EventEmitter();
  @Input() chatDetails: any;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.messageForm = this._formBuilder.group({
      message: [{ value: '', disabled: true }, Validators.required],
    });

    this.disableForm();
  }

  getUserMessage(form: FormGroupDirective) {
    if (form.valid) {
      this.userMessage.emit(form.value);
    }
  }

  disableForm(): void {
    if (this.chatDetails && this.chatDetails.user && this.chatDetails.channel) {
      this.messageForm.get('message')?.enable();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.chatDetails = changes['chatDetails'].currentValue;
    if (this.chatDetails && this.chatDetails.user && this.chatDetails.channel) {
      this.messageForm.get('message')?.enable();
    }
  }
}
