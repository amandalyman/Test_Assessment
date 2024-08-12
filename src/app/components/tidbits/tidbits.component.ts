import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormatNumberPipe } from 'src/app/pipes/format-number.pipe';

@Component({
  selector: 'tidbits',
  templateUrl: './tidbits.component.html',
  styleUrls: ['./../../../assets/scss/shared.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class TidbitsComponent {
  public birthdayInDays: string;
  public guestBirthday!: Date;

  constructor(private formatNumberPipe: FormatNumberPipe) {
    this.birthdayInDays = this.convertDateToDays(new Date('March 30, 1995'));
  }

  public convertDateToDays(date: Date): string {
    const today = new Date();
    const diffInMS = today.getTime() - date.getTime();
    const diffInMin = Math.floor(diffInMS / 60000 / 60 / 24);
    return this.formatNumberPipe.transform(diffInMin);
  }
}
