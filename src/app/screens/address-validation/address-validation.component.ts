import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-address-validation',
  templateUrl: './address-validation.component.html',
  styleUrls: ['./address-validation.component.css']
})
export class AddressValidationComponent implements OnInit {

  addressList:any;
  canShowValidation:Boolean =false;
  validationResult:any ={};
  private _addressesjsonURL = 'assets/addresses.json';

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
     console.log(data);
    this.addressList =data;
    });
  }

  onAddressClicked(address){
    let res = this.validateAddress(address);
    console.log("validation result ", res)
    this.validationResult = res;
    this.canShowValidation=true;
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._addressesjsonURL);
  }


  validateAddress( address) {
		
    let isValid = false;
    let isPostalCodeNumeric = false;
    let hasCountry = false;
    let isAddressZAR = false;
    let addressLinePresent = false;
    let hasProvince = false;
    let hasPostalCode = false;
    
    let  issues =[];
    
    
    if (address.postalCode != null) {
      
      hasPostalCode = true;
     
      if (hasPostalCode) {
   
       if (!isNaN(address.postalCode)) {
         isPostalCodeNumeric=true;
       }else {
          issues.push("Address has a non-numeric Postal Code");
        }
      }else {
        issues.push("Address has no Postal Code");
      }
       
    }
    
    if (address.country != null) {
      
      hasCountry = true;
      
      if (address.country.code == "ZA") {
        isAddressZAR = true;
      }
    }else {
     issues.push("Address has no country");
    }
    
    if (address.addressLineDetail != null) {
      if(address.addressLineDetail.line1 ||address.addressLineDetail.line2 ) {
        
        addressLinePresent=true;
      }else {
        issues.push("Address has no address line");
      }
      
    }else {
      issues.push("Address has no address line");
    }
    
    if (isAddressZAR) {
      
      if (address.provinceOrState !=null) {
        if (address.provinceOrState.name) {
            hasProvince=true;
          }else {
             issues.push("Address has no province");
          }
      }else {
        issues.push("Address has no province");
      }
        
    }
    
    if (isAddressZAR) {
      
      if (hasProvince && addressLinePresent && isPostalCodeNumeric && hasCountry ) {
        isValid =true;
      }else {
        isValid =false;
      }
      
    }else {
      
      if (addressLinePresent && isPostalCodeNumeric && hasCountry ) {
        isValid =true;
      }else {
        isValid =false;
      }
    }
    

    let result = {isValid, issues};
    
   
    
    return result;
   }


  ngOnInit() {
  }

}
