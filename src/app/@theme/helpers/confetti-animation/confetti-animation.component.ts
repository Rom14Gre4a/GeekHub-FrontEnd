import { Component, Input, OnInit } from "@angular/core";
import { PausableObservable, pausable } from "rxjs-pausable";
import { Subject, interval, fromEvent } from "rxjs";
import { withLatestFrom, filter, map, tap, startWith } from "rxjs/operators";

@Component({
  selector: 'ngx-confetti-animation',
  templateUrl: './confetti-animation.component.html',
  styleUrls: ['./confetti-animation.component.scss']
})
export class ConfettiAnimationComponent implements OnInit {
  name = "Angular";
  @Input() paused = true;

  visible$ = fromEvent(document, "visibilitychange").pipe(
    map(() => document.visibilityState === "visible"),
    startWith(true)
  );

  ngOnInit() {
    this.shoot();
    interval(1200)
      .pipe(
        withLatestFrom(this.visible$),
        filter(([, visible]) => visible && !this.paused),
        map(([num]) => num),
        tap(this.shoot.bind(this))
      )
      .subscribe(this.shoot.bind(this));
  }

  toggle() {
    this.paused = !this.paused;
  }

  shoot() {
    try {
      this.confetti({
        colors: ['#fba400', '#00a3e8'],
        angle: this.random(60, 100),
        spread: this.random(100, 100),
        particleCount: this.random(50, 100),
        origin: {
          y: 0.6,
        },
        zIndex: 99999,
      });
    } catch (e) {
      // noop, confettijs may not be loaded yet
    }
  }

  random(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  confetti(args: any) {
    return window["confetti"].apply(this, arguments);
  }
}
