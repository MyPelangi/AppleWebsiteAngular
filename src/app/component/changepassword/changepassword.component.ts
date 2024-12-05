import { Component } from '@angular/core';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.sass']
})
export class ChangepasswordComponent {
  password: string = '';
  newPassword: string = '';
  passwordInvalid: boolean = false;
  passwordTouched: boolean = false;
  visible:boolean = true;
  changetype:boolean = true;

  constructor(private validationService: ValidationService) {}

  viewpass()
  {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  onChangePassword() {
    this.validatePassword();

    if (!this.passwordInvalid) {
      alert('Password berhasil diubah!');
    }
  }

  validatePassword() {
    this.passwordTouched = true;
    this.passwordInvalid = !this.validationService.validatePassword(this.newPassword);
  }
}
