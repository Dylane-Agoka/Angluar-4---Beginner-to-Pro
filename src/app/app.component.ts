import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courses = [
    { id: 1, name: 'Computer science' },
    { id: 1, name: 'English language' },
    { id: 1, name: 'Manual work' }
  ]

  addCourses() {
    const index = this.courses.length;
    this.courses.push({id: index - 1, name: 'Software Engineer ' + index});
  }


  removeCourses() {
    this.courses.pop();
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
}
