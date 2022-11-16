import { Component } from "@angular/core";

@Component({
  selector: 'courses',
  // event binding : (event)="method()"
  // event bubbling : use ascendant order
  template: `
  <div (click)="onDivClick()">
    <button (click)="onSave($event)">Save</button>
  </div>
  `
})
export class CoursesComponent {
  onDivClick() {
    console.log('Div was clicked');

  }

  onSave($event) {
    $event.stopPropagation(); // stop event bubbling
    console.log('Button was clicked', $event);
  }
}
