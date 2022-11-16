import { Component } from "@angular/core";

@Component({
  selector: 'courses',
  // two-way Binding : [(formModuleProperty)] = "templateVariable"
  template: `
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()">
  `
})
export class CoursesComponent {
  email = 'me@example.com';
  onKeyUp() {
    console.log(this.email);
  }
}
