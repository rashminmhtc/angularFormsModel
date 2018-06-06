import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


import { AppComponent } from './app.component';
import { PhoneBookFormComponent } from './phone-book-form/phone-book-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
