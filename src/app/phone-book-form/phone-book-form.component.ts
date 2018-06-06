import { Component, OnInit } from '@angular/core';
import { PhoneBook }    from '../phone-book'; // import model phone-book
import { Validators, FormBuilder, FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'phone-book-form',
  templateUrl: './phone-book-form.component.html',
  styleUrls: ['./phone-book-form.component.css']
})
export class PhoneBookFormComponent implements OnInit {
  locations= [ 'India', 'Malaysia', 'Sri Lanka', 'Australia'];
  submitted = false;
  phoneBookForm: FormGroup;

  model = new PhoneBook(1, 'Rohit', '', '123456789', 'Malaysia');

  onSubmit() { this.submitted = true; }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.phoneBookForm = this.fb.group({
      name,
      dob:[''],
      phone: this.validatePhoneNumber(1, 10),
      location
    });
  }
  // example of model driven validations
  validatePhoneNumber(min, max) {
    return ['', [
      Validators.required,
      Validators.minLength(min),
      Validators.maxLength(max),
      Validators.pattern('[0-9]+')
    ]]
  }

}
