import { Component, OnInit } from '@angular/core';
import { photosData } from 'src/app/consts/photo';
import { postsData } from 'src/app/consts/posts';
import { Iphoto } from 'src/app/models/Iphoto';

@Component({
  selector: 'app-photos-dashboard',
  templateUrl: './photos-dashboard.component.html',
  styleUrls: ['./photos-dashboard.component.scss']
})
export class PhotosDashboardComponent implements OnInit {
  photosArr!: Iphoto[];
  constructor() { }

  ngOnInit(): void {
console.log(this.photosArr);
this.photosArr=photosData;

  }

}
