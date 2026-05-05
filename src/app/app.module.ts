import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { MobileCardComponent } from './components/mobile-card/mobile-card.component';
import { MovieDashbordComponent } from './components/movie-dashbord/movie-dashbord.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { PhotosDashboardComponent } from './components/photos-dashboard/photos-dashboard.component';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    MobileComponent,
    PostCardComponent,
    MobileCardComponent,
    MovieDashbordComponent,
    MovieCardComponent,
    PhotosDashboardComponent,
    PhotoCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
