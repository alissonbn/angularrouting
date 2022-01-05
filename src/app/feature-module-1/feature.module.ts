import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Feature1Component } from './feature-component-1/feature-component.component';
import { NavegacaoModule } from '../navegacao-module/navegacao.module';


const routes: Routes = [
  {path:"feature1", component:Feature1Component},
];

@NgModule({
  declarations: [
    Feature1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavegacaoModule
  ],
  exports: [
    Feature1Component,
    RouterModule
  ]
})
export class FeatureModule { }
