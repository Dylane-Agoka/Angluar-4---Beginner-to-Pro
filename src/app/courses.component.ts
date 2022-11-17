import { SummaryPipe } from './summary.pipe';
import { Component } from "@angular/core";

@Component({
  selector: 'courses',
  template: `
    {{ text | summary:10 }}
  `
})
export class CoursesComponent {
  text = 'Sit dolore sunt quis qui cillum labore est duis ut mollit sit elit elit. Nulla enim in voluptate cupidatat consectetur est voluptate ad elit excepteur. Aute ad Lorem quis ex ut nostrud mollit consectetur aliqua nisi ipsum voluptate. Tempor veniam ex sint aliquip fugiat. Pariatur Lorem incididunt et velit fugiat et fugiat.'
}
