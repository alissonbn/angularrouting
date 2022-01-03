import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AutenticaComponent } from './autentica/autentica.component';
import { Feature2Component } from './feature2/feature2/feature2.component';
import { InternaComponent } from './interna/interna.component';
import { SaidaComponent } from './saida/saida.component';

const routes: Routes = [
  {path:"inicial", component:AppComponent},
  {path:"interna", component:InternaComponent},
  {path:"autentica", component:AutenticaComponent},
  {path:"saida", component:SaidaComponent},
  {path:"", redirectTo:"/interna", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
