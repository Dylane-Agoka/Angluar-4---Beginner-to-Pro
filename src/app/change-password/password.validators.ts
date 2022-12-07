import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
  static invalidOldPassword(control: AbstractControl) : Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((control.value as string) !== '123') {
          resolve({ invalidOldPassword: true });
        }
        resolve(null);
      }, 1000);
    });
  }

  static shouldMatchPattern(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value !== 'abc') {
          resolve({ shouldMatchPattern: true })
        }
        resolve(null);
      }, 1000);
    });
  }
}
