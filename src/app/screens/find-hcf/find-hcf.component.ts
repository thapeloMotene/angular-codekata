import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-hcf',
  templateUrl: './find-hcf.component.html',
  styleUrls: ['./find-hcf.component.css']
})
export class FindHcfComponent implements OnInit {

  items:Array<String>;
  canShowHCF:Boolean= false;
  hcf:any;
  constructor() {

    
   }

   getSmallestNumber(x) {
    let smallest = Number(x[0]);

    x.map(number =>{
      if(Number(number) < smallest)
      smallest = Number(number);
    });

    return smallest;
  }
  

highestCommonFactor( numbers) {
		
		
		let smallest = this.getSmallestNumber(numbers);
		
		for( var i = smallest; i >= 1; i--) {
		   for(var j = 0; j < numbers.length; ++j) {
			   if( Number(numbers[j]) % i != 0)
				   break;
		   }
		   //Return the HCF if we're done
		   if(j == numbers.length)
			   return i;
		}
		// so the only possible is 1
		return 1;

		}

   calculate(){
   this.hcf =  this.highestCommonFactor(this.items);
   this.canShowHCF=true;
   }

  ngOnInit() {
  }

}
