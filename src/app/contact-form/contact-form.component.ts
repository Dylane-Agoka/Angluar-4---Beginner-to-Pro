import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  log(x) {
    console.log(x);
  }

  submit(x) {
    console.log(x);
  }
}
