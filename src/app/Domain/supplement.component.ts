import { Component } from '@angular/core';

@Component({
  selector: 'app-supplement',
  templateUrl: './supplement.component.html',
})
export class AppComponent {
  _title = 'Supplement';
  _name = 'Supplement';
  constructor() {}

  getName(): string {
    return this._name;
  }
}
