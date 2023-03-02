import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'chat-select-user',
  templateUrl: './chat-select-user.component.html',
})
export class ChatSelectUserComponent implements OnInit {
  userForm!: FormGroup;
  @Output() selectedUser = new EventEmitter<any>();

  users = [
    {
      userId: 'Joyse',
      userName: 'Joyse',
    },
    {
      userId: 'Russell',
      userName: 'Russell',
    },
    {
      userId: 'Sam',
      userName: 'Sam',
    },
  ];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this._formBuilder.group({
      userId: ['', Validators.required]
    });
  }

  getSelectedUser(form: FormGroupDirective): void {
    if (form.valid) {
      this.selectedUser.emit(form.value);
    }
  }


}
