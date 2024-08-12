import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  interval,
  map,
  Subject,
  Subscription,
  takeWhile,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountdownService {
  private countdownSubscription!: Subscription;
  private remainingMS!: number;

  private readonly countdown = new Subject<number>();
  readonly msLeft$ = this.countdown.asObservable();

  constructor(private _router: Router) {}

  startCountdown(ms: number, tidbit: string): void {
    this.remainingMS = ms;
    this.countdown.next(this.remainingMS);

    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }

    this.countdownSubscription = interval(10)
      .pipe(
        map(() => {
          this.remainingMS -= 10;
          return this.remainingMS;
        }),
        takeWhile((remainingMS) => remainingMS >= 0)
      )
      .subscribe({
        next: (remainingMS) => this.countdown.next(remainingMS),
        error: (err) => {
          console.log('Failure during countdown. Error: ', err);
        },
        complete: () => {
          this._router.navigate(['/hobbies'], { state: { tidbit } });
        },
      });
  }

  stopCountdown(): void {
    if (this.countdownSubscription) this.countdownSubscription.unsubscribe();
  }
}
