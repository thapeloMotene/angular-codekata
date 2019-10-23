import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { FindHcfComponent } from './screens/find-hcf/find-hcf.component';
import { AllAddressesComponent } from './screens/all-addresses/all-addresses.component';
import { FilterAddressesComponent } from './screens/filter-addresses/filter-addresses.component';
import { AddressValidationComponent } from './screens/address-validation/address-validation.component';


const routes: Routes = [
{path:'', component:HomeScreenComponent},
{path:'find-hcf', component:FindHcfComponent},
{path:'all-addresses', component:AllAddressesComponent},
{path:'filter-address', component:FilterAddressesComponent},
{path:'address-validation', component:AddressValidationComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
