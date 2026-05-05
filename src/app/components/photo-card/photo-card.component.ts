import { Component, Input, OnInit } from '@angular/core';
import { Iphoto } from 'src/app/models/Iphoto';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {
@Input()photoObj!:Iphoto;
  constructor() { }

  ngOnInit(): void {
    
  }

}
