import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit
{
  loginForm!: FormGroup;
  _submitted = false;
  visible:boolean = true;
  changetype:boolean = true;

  viewpass()
  {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  constructor(private formBuilder: FormBuilder)
  {
  }

  ngOnInit(): void
  {
    this.loginForm = this.formBuilder.group(
      {
        email : new FormControl('',[
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
            Validators.email
          ]),
        password : new FormControl('',[
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(6)
        ])
      }
    )
  }

  // convenience getter for easy access to form fields
  get f()
  {
    return this.loginForm.controls;
  }

  onLogin()
  {
      this._submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      alert('Login Success!!\n\n' + JSON.stringify(this.loginForm.value))
  }

}
