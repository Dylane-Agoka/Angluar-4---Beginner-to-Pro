import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new  FormGroup({
      username: new FormControl('',
        UsernameValidators.cannotContainSpace,
        UsernameValidators.shouldBeUnique,
      ),
      password: new FormControl('', Validators.required)
    })

  });

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }

  get username() {
    return this.form.get('account.username');
  }
}
