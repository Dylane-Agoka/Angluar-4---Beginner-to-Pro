import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courses;

  loadCourses() {
    this.courses = [
      { id: 1, name: 'Computer science' },
      { id: 1, name: 'English language' },
      { id: 1, name: 'Manual work' }
    ];
  }
  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
