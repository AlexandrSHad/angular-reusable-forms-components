import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GenericInputComponent } from './components/generic-input/generic-input.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { AddressFormDiComponent } from './components/address-form-di/address-form-di.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericInputComponent,
    AddressFormComponent,
    AddressFormDiComponent
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
