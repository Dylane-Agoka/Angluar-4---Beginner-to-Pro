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
}
