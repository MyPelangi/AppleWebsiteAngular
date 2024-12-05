import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent {
  email: string = '';
  password: string = '';
  emailInvalid: boolean = false;
  passwordInvalid: boolean = false;
  emailTouched: boolean = false;
  passwordTouched: boolean = false;
  visible:boolean = true;
  changetype:boolean = true;

  constructor(private validationService: ValidationService) {}

  viewpass()
  {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  onSubmit() {
    this.validateEmail();
    this.validatePassword();

    if (!this.emailInvalid && !this.passwordInvalid) {
      // Logika setelah validasi berhasil, misalnya login
      alert('Login Success!!');
    }
  }

  validateEmail() {
    this.emailTouched = true;
    this.emailInvalid = !this.validationService.validateEmail(this.email);
  }

  validatePassword() {
    this.passwordTouched = true;
    this.passwordInvalid = !this.validationService.validatePassword(this.password);
  }
}
