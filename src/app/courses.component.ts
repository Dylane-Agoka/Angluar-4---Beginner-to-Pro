import { Component } from "@angular/core";

@Component({
  selector: 'courses',
  template: `
    <input class="input" (keyup)="onKeyUp($event)">
  `
})
export class CoursesComponent {
  onKeyUp($event) {
    if ($event.keyCode === 13) console.log('Enter was pressed');

  }
}
