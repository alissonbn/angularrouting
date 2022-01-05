import { Injectable } from '@angular/core';
import { NavegacaoModule } from './navegacao.module';
import { FeatureModule } from '../feature-module-1/feature.module';

@Injectable({
  providedIn: 'root'
})
export class NavegacaoService {

  estado : string = "";

  constructor() { }

  setEstado(v: string): void{
    this.estado = v;
  }
  
  getEstado(): string{
    return this.estado;
  }

}
