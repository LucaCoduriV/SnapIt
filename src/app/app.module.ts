import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FourOhFourComponent } from './fourOhFour/fourOhFour.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { PostComponent } from './post/post.component';

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
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
