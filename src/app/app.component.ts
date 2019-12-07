import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'reusable-form-and-component';

  form: FormGroup;
  formDi: FormGroup;

  initialState = {
    firstName: 'First',
    lastName: 'Last',
    phone: null,
    street: null,
    city: null,
    state: null,
    zip: null
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      billingAddress: [this.initialState]
    });

    this.formDi = this.fb.group({});
  }
  
  ngAfterViewInit() {
    this.formDi.setValue({ billingAddress: this.initialState });
  }
}
