import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FeatureModule } from './feature-module-1/feature.module';
import { EntradaComponent } from './entrada/entrada.component';
import { SaidaComponent } from './saida/saida.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';

import { Feature2Module } from './feature-module-2/feature2.module';


@NgModule({
  declarations: [
    AppComponent,
    EntradaComponent,
    SaidaComponent,
    AutenticacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    Feature2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
