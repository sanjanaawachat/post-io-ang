import { Component, Input, OnInit } from '@angular/core';
import { movieData } from 'src/app/consts/movie';
import { Imovie } from 'src/app/models/Imovie';

@Component({
  selector: 'app-movie-dashbord',
  templateUrl: './movie-dashbord.component.html',
  styleUrls: ['./movie-dashbord.component.scss']
})
export class MovieDashbordComponent implements OnInit {
movieArr:Array<Imovie>=[]
  constructor() { }

  ngOnInit(): void {
    this.movieArr=movieData;
  }

}
