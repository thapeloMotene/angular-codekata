import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
@Input() address: any;
  constructor() { }

  ngOnInit() {
  }

}
