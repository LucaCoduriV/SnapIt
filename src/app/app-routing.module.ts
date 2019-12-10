import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FourOhFourComponent} from './fourOhFour/fourOhFour.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { LoginComponent } from './login/login.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'galerie', component: GallerieComponent},
  { path: 'not-found', component: FourOhFourComponent},
  { path: 'login', component: LoginComponent},
  { path: 'uploadImage', component: ImageUploadComponent},
  { path: '', component: AccueilComponent},
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
