import { CourseComponent } from './course/course.component';
import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: 'courses',
  styleUrls: ['./courses.component.scss'],
  // string interpolation : {{ item }}
  // property biding : [attr] = "item"
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <h3 [textContent]="title"></h3>
    <img [src]="imageUrl" alt="Some code using angular">
  `
  // We use directive to manipulate the DOM
})
export class CoursesComponent {
  title = 'List of courses';
  courses;
  imageUrl = './assets/images/pexels-markus-spiske.jpg';

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
