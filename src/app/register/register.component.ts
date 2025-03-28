import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      organisation: ['', Validators.required],
      designation: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      pickup: ['', Validators.required],
      room: ['', Validators.required],
      requirements: [''],
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.log('Form Submitted:', this.registerForm.value);
      alert('Form submitted successfully!');
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
  
}
