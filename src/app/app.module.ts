import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { MobileCardComponent } from './components/mobile-card/mobile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    MobileComponent,
    PostCardComponent,
    MobileCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
