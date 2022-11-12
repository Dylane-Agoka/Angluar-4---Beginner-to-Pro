import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: 'courses',
  // string interpolation : {{ item }}
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
  `
  // We use directive to manipulate the DOM
})
export class CoursesComponent {
  title = 'List of courses';
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
