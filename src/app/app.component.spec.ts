import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Chat } from './app';
import { MatInputModule, MatButtonModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatInputModule,
        BrowserAnimationsModule,
        BrowserModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule, FormsModule ],
      declarations: [ AppComponent ]
    }).compileComponents();
  }));

  it('Should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`Should have the class variable title as 'TDD' and angularVersion as 5`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('TDD');
    expect(app.angularVersion).toEqual(5);
  }));

  it('Should render title in pre tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('pre').textContent).toContain('Angular 5 TDD');
  }));

  it('Emits a new message on submit', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.chatForm.valid).toBeFalsy();
    // Set values to resctive forms.
    app.chatForm.setValue({
      user: 'Bob',
      message: 'Is alice there?'
    });
    expect(app.chatForm.valid).toBeTruthy();
    let userChat: Chat;
    // Subscribe to the Observable and store the user in a local variable.
    app.chat.subscribe((value) => userChat = value);
    // Trigger the submit function
    app.onSubmit();
    // Check to make sure the emitted value is correct
    expect(userChat.user).toBe('Bob');
    expect(userChat.message).toBe('Is alice there?');
  });
});
