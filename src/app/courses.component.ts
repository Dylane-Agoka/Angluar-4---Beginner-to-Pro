import { Component } from "@angular/core";

@Component({
  selector: 'courses',
  styleUrls: ['./courses.component.scss'],
  // attribute binding : [attr.customPropertyName] = "item"
  template: `
    <img [src]="" alt="">
    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>
  `
})
export class CoursesComponent {
  imageUrl = '';
  colSpan = 2;
}
