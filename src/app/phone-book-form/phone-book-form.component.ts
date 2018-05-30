import { Component, OnInit } from '@angular/core';
import { PhoneBook }    from '../phone-book'; // import model phone-book

@Component({
  selector: 'phone-book-form',
  templateUrl: './phone-book-form.component.html',
  styleUrls: ['./phone-book-form.component.css']
})
export class PhoneBookFormComponent implements OnInit {
  locations= [ 'India', 'Malaysia', 'Sri Lanka', 'Australia'];
  submitted = false;

  model = new PhoneBook(1, 'Rohit', '', '123456789', 'Malaysia');

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }

}
