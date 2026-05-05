import { Component, Input, OnInit } from '@angular/core';

import { Imovie } from 'src/app/models/Imovie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
@Input() movieObj!:Imovie;
  constructor() { }

  ngOnInit(): void {
    console.log(this.movieObj);
    
    }

}
