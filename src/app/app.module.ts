import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FourOhFourComponent } from './fourOhFour/fourOhFour.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { PostComponent } from './post/post.component';
import {PostService} from './services/post.service';

@NgModule({
   declarations: [
      AppComponent,
      FourOhFourComponent,
      AccueilComponent,
      GallerieComponent,
      PostComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [
      PostService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
