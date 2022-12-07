import { AbstractControl } from '@angular/forms';

export class PasswordValidators {
  static validOldPassword(control: AbstractControl) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((control.value as string) !== '1234') {
          resolve({ validOldPassword: true });
        }
        resolve(null);
      }, 1000);
    });
  }

  static passwordsShouldMatch(control: AbstractControl) {
    let newPassword = control.get('newPassword');
    let confirmPassword = control.get('confirmPassword');

    if (newPassword?.value !== confirmPassword?.value) {
      return { passwordsShouldMatch: true };
    }
    return null;
  }
}
