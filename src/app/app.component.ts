import { ActivatedRoute } from '@angular/router';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Chat } from './app';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() chat = new EventEmitter<Chat>();
  title = 'TDD';
  angularVersion = 5;
  chatForm = new FormGroup({
    user: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });
  constructor() {}
  onSubmit() {
    this.chat.emit({
      user: this.chatForm.value.user,
      message: this.chatForm.value.message,
    });
  }
}
