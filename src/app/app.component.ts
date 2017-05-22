import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
              <pomodoro-timer></pomodoro-timer>`,
})
export class AppComponent  {
  name = 'Angular';
}
