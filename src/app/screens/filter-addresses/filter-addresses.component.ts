import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-filter-addresses',
  templateUrl: './filter-addresses.component.html',
  styleUrls: ['./filter-addresses.component.css']
})
export class FilterAddressesComponent implements OnInit {

  addressList:any;
  shaddowList:any;
  private _addressesjsonURL = 'assets/addresses.json';

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
     console.log(data);
    this.addressList =data;
    this.shaddowList = data;
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._addressesjsonURL);
  }


  public onValueChange(e){

    console.log("selected", e.target.value);
    if (e.target.value == 0){
      this.addressList = this.shaddowList;
    }else{
      this.addressList = this.shaddowList.filter(a => a.type.code == e.target.value);
    }
    

  }


  ngOnInit() {
  }

}
