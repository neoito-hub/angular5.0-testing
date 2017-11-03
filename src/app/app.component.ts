import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TDD';
  angularVersion = 5;
  chatForm = new FormGroup({
    user: new FormControl('', Validators.required),
    message: new FormControl(''),
    type: new FormControl('')
  });
}
