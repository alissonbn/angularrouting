import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature-component/feature-component.component';
import { NavegacaoModule } from '../navegacao/navegacao.module';


const routes: Routes = [
  {path:"feat", component:FeatureComponent},
];

@NgModule({
  declarations: [
    FeatureComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavegacaoModule
  ],
  exports: [
    FeatureComponent,
    RouterModule
  ]
})
export class FeatureModule { }
