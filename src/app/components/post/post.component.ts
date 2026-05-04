import { Component, OnInit } from '@angular/core';
import { postsData } from 'src/app/consts/posts';
import { Ipost } from 'src/app/models/Ipost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
postArr:Array<Ipost>=[]
  constructor() { }

  ngOnInit(): void {
    this.postArr=postsData
  }
}
