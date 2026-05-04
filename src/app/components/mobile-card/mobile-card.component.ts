import { Component, Input, OnInit } from '@angular/core';
import { IMobile } from 'src/app/models/Imobile';

@Component({
  selector: 'app-mobile-card',
  templateUrl: './mobile-card.component.html',
  styleUrls: ['./mobile-card.component.scss']
})
export class MobileCardComponent implements OnInit {

  @Input() getdata!:IMobile;
    constructor() { }
  
    ngOnInit(): void {
      console.log(this.getdata);
      
    }

}
