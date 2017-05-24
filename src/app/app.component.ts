import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `./pomodoro-timer.html`,
})
export class AppComponent {
  name = 'Angular';
  price: number = 1000;
  today: number = Date.now();
  onCountdownCompleted(): void {
  //  alert('Time up!')
}

languageCode: string = 'en';
localizedLabelsMap: any = {
  'en': 'Start timer English',
  'es': 'Comenzar temporizador',
  'other': 'Start'
}

}
