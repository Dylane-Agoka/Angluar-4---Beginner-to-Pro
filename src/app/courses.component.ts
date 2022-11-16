import { Component } from "@angular/core";

@Component({
  selector: 'courses',
  styleUrls: ['./courses.component.scss'],
  // add bootstrap: npm i bootstrap@version --save or npm i bootstrap --save
  template: `
    <button class="btn btn-primary" [class.active]="isActive">Save</button>
  `
})
export class CoursesComponent {
  isActive = true;
}
