import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-all-addresses',
  templateUrl: './all-addresses.component.html',
  styleUrls: ['./all-addresses.component.css']
})
export class AllAddressesComponent implements OnInit {
  addressList:any;
  private _addressesjsonURL = 'assets/addresses.json';

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
     console.log(data);
    this.addressList =data;
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._addressesjsonURL);
  }

  ngOnInit() {
  }

}
