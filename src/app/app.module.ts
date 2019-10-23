import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatCardModule, MatCardHeader} from '@angular/material'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { FindHcfComponent } from './screens/find-hcf/find-hcf.component';
import { AllAddressesComponent } from './screens/all-addresses/all-addresses.component';
import { FilterAddressesComponent } from './screens/filter-addresses/filter-addresses.component';
import { AddressValidationComponent } from './screens/address-validation/address-validation.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { TagInputModule } from 'ngx-chips';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    FindHcfComponent,
    AllAddressesComponent,
    FilterAddressesComponent,
    AddressValidationComponent,
    AddressCardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    TagInputModule,
    ReactiveFormsModule,
    FormsModule
    
    
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
