import { Component } from '@angular/core'

@Component({
    selector: 'pomodoro-timer',
    template: `<h1>{{minutes}} : {{seconds | number: '2.0'}}</h1>
            <p><button (click)="togglePause()"> {{buttonLabel}} </button></p>
    
    `
})

export class PomodoroTimerComponent {

    minutes: number;
    seconds: number;
    isPaused: boolean;
    buttonLabel: string;

    constructor() {
        this.resetPomodoro();
        setInterval(() => this.tick(), 1000);
    }
    togglePause() {
        this.isPaused = !this.isPaused;
        if (this.minutes < 24 || this.seconds < 29) {
            this.buttonLabel = this.isPaused ? 'Resume' : 'Pause'
        }
    }

    resetPomodoro(): void {
        this.minutes = 24;
        this.seconds = 59;
        this.buttonLabel = 'Start';
        this.togglePause();
    }
    tick(): void {
        if (this.isPaused) {
            this.buttonLabel = 'Pause';

            if (--this.seconds < 0) {
                this.seconds = 59;

                if (--this.minutes < 0) {
                    this.minutes = 24;
                    this.seconds = 59;
                }
            }
        }
    }
}
