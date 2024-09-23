import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-elapsed-time-clock',
  templateUrl: './elapsed-time-clock.component.html',
  styleUrls: ['./elapsed-time-clock.component.scss']
})
export class ElapsedTimeClockComponent implements OnInit, OnDestroy {
  @Input() startTime: Date;

  timeDifference: string;
  private timeInterval: any;

  constructor() { }

  ngOnInit(): void {
    this.calculateTimeDifference();
    this.getElapsedTime();
  }

  ngOnDestroy(): void {
    clearInterval(this.timeInterval);
  }

  getElapsedTime() {
    this.timeInterval = setInterval(() => {
      this.calculateTimeDifference();
    }, 1000);
  }

  calculateTimeDifference() {
    const currentTime = new Date();
    const timeDifferenceMillis = currentTime.getTime() - this.startTime.getTime();

    const hours = Math.floor(timeDifferenceMillis / 3600000);
    const minutes = Math.floor((timeDifferenceMillis % 3600000) / 60000);
    const seconds = Math.floor((timeDifferenceMillis % 60000) / 1000);

    this.timeDifference = this.formatTime(hours) + ':' + this.formatTime(minutes) + ':' + this.formatTime(seconds);
  }

  formatTime(time: number): string {
    return time < 10 ? '0' + time : '' + time;
  }

}
