import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})

export class FooterComponent implements OnInit
{
  _registerForm!: FormGroup;
  _submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit()
  {
      this._registerForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
      });

      // Get the elements from the DOM
      const liServices = document.querySelectorAll('.LiServices');
      const dropdownContents = document.querySelectorAll('.DivDropdownServices');

      // Loop through each 'liServices' and attach event listener
      liServices.forEach((li, index) => {
        const dropdownContent = dropdownContents[index]; // Get the corresponding dropdown content for this li
        li.addEventListener('click', () => {
          if (dropdownContent) {
            dropdownContent.classList.toggle('show'); // Toggle visibility
          }
        });
      });

      
  }

  // convenience getter for easy access to form fields
  get f() { return this._registerForm.controls; }

  onSubmit()
  {
      this._submitted = true;

      // stop here if form is invalid
      if (this._registerForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this._registerForm.value))
  }
}
