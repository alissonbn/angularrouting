import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Feature2Component } from './feature2/feature2.component';
import { NavegacaoModule } from '../navegacao/navegacao.module';


const routes: Routes = [
  {path: "feat2", component: Feature2Component}
]

@NgModule({
  declarations: [
    Feature2Component
  ],
  imports: [
    CommonModule,
    NavegacaoModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class Feature2Module { }
