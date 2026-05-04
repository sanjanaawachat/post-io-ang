import { Component, OnInit } from '@angular/core';
import { mobileData } from 'src/app/consts/mobile';
import { IMobile } from 'src/app/models/Imobile';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

mobileArr:Array<IMobile>=[]
  constructor() { }

  ngOnInit(): void {
    this.mobileArr=mobileData;
  }


}
