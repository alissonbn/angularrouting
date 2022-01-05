import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { Feature2Component } from './feature-module-2/feature-component-2/feature2.component';
import { EntradaComponent } from './entrada/entrada.component';
import { SaidaComponent } from './saida/saida.component';

const routes: Routes = [
  {path:"inicial", component:AppComponent},
  {path:"entrada", component:EntradaComponent},
  {path:"autentica", component:AutenticacaoComponent},
  {path:"saida", component:SaidaComponent},
  {path:"", redirectTo:"/entrada", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
