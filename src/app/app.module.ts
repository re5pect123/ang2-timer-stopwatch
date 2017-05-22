import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {PomodoroTimerComponent} from './pomodoro-timer'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, PomodoroTimerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
