import { Component, OnInit, Optional } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ControlContainer, FormGroupDirective, FormControlDirective } from '@angular/forms';

@Component({
  selector: 'app-address-form-di',
  templateUrl: './address-form-di.component.html',
  styleUrls: ['./address-form-di.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class AddressFormDiComponent implements OnInit {
  form: FormGroup;

  constructor(
    @Optional() private ctrlContainer: FormGroupDirective,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      'firstName': [null, [Validators.required]],
      'lastName': [null, [Validators.required]],
      'phone': [null, null],
      'street': [null, [Validators.required]],
      'city': [null, [Validators.required]],
      'state': [null],
      'zip': [null, [Validators.required]],
    });

    this.ctrlContainer.form.addControl('billingAddress', this.form);

    const t = 1;
  }
}
