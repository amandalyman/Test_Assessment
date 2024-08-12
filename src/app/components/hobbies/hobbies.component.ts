import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss', './../../../assets/scss/shared.scss'],
})
export class HobbiesComponent {
  public highlightedCard!: string;

  constructor(private _router: Router) {
    const navigation = this._router.getCurrentNavigation();
    const state = navigation?.extras.state as { [k: string]: string };
    if (state !== undefined && 'tidbit' in state) {
      this.highlightedCard = state['tidbit'];
    }
  }
}
