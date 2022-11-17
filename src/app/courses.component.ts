import { Component } from "@angular/core";

@Component({
  selector: 'courses',
  template: `
    {{ course.title | uppercase | lowercase }} <br>
    {{ course.students | number }} <br>
    {{ course.rating | number:'1.2-3' }} <br>
    {{ course.price | currency:'CAD':true:'3.2-2' }} <br>
    {{ course.releaseDate | date:'shortDate' }}
  `
})
export class CoursesComponent {
  course = {
    title: 'The complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }
}
