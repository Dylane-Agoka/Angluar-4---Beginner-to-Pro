import { Component } from "@angular/core";

@Component({
  selector: 'courses',
  styleUrls: ['./courses.component.scss'],
  template: `
    <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
  `
})
export class CoursesComponent {
  isActive = false;
}
