import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from 'src/app/models/Ipost';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
@Input() getdata!:Ipost;
  constructor() { }

  ngOnInit(): void {
    console.log(this.getdata);
    
  }


}
