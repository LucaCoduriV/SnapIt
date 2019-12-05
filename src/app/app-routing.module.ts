import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FourOhFourComponent} from './fourOhFour/fourOhFour.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GallerieComponent } from './gallerie/gallerie.component';


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'galerie', component: GallerieComponent},
  { path: 'not-found', component: FourOhFourComponent},
  { path: '', component: AccueilComponent},
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
