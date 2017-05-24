import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'countdown',
    template: '<h1> Time left: {{seconds}}</h1>'
})
export class CountdownComponent {
    
    @Input() seconds: number; // kada koristimo input mozemo u htmlu postaviti [seconds]
    intervalId: any;
    @Output() complete: EventEmitter<any> = new EventEmitter(); // mozemo postaviti event
    @Output() progress: EventEmitter <number> = new EventEmitter();

    constructor() {
        this.intervalId = setInterval(() => this.tick(), 1000);
    }

    tick(): void {
        if (--this.seconds < 1) {
            clearInterval(this.intervalId);
            this.complete.emit(null);
        }
        this.progress.emit(this.seconds);
    }
}