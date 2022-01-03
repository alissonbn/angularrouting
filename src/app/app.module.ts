import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FeatureModule } from './feature/feature.module';
import { InternaComponent } from './interna/interna.component';
import { SaidaComponent } from './saida/saida.component';
import { AutenticaComponent } from './autentica/autentica.component';

import { Feature2Module } from './feature2/feature2.module';


@NgModule({
  declarations: [
    AppComponent,
    InternaComponent,
    SaidaComponent,
    AutenticaComponent
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
