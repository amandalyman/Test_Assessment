import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { fromEvent, map, merge, startWith, tap } from 'rxjs';
import { ResumeModalComponent } from 'src/app/components/resume-modal/resume-modal.component';
import { CountdownService } from 'src/app/services/countdown.service';

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss', './../../../assets/scss/shared.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IntroComponent {
  @ViewChild('cancelButton', { read: ElementRef, static: false })
  cancelButton!: ElementRef<HTMLButtonElement>;
  public isWarningOpen = false;
  public timerMessage!: string;

  constructor(
    private dialog: MatDialog,
    private _countdown: CountdownService,
    private _cdr: ChangeDetectorRef
  ) {}

  public openModal() {
    this.dialog.open(ResumeModalComponent, {
      height: '90vh',
      width: '90vw',
      panelClass: 'dialog-modal',
    });
  }

  public redirectTimer(tidbit: string) {
    // Reveal timer
    this.isWarningOpen = true;
    this._cdr.detectChanges();

    // Subscribe to countdown
    const countdown$ = this._countdown.msLeft$.pipe(
      map((t) => `You will be redirected in ${this.timeInSec(t)}s`)
    );

    // Listen for cancellation
    const click$ = fromEvent(this.cancelButton.nativeElement, 'click').pipe(
      map(() => '... CANCELED'),
      tap(() => this._countdown.stopCountdown())
    );

    // Combine the streams
    merge(countdown$, click$.pipe(startWith('...')))
      .pipe(map((status) => status))
      .subscribe({
        next: (message) => (this.timerMessage = message),
        error: (err) => console.log('Redirect failed. Error: ', err),
      });

    // Start the countdown
    this._countdown.startCountdown(5000, tidbit);
  }

  public timeInSec(timeInMs: number): number {
    return Math.round(timeInMs / 1000);
  }

  public stopCountdown(): void {
    this.isWarningOpen = false;
    this._countdown.stopCountdown();
  }
}
