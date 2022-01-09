import { Component, OnInit } from '@angular/core';
import { Estado } from '../estado';
import { NavegacaoService } from '../navegacao-module/navegacao.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  componenteSaida : Estado = {caminho: "/saida", opcao: false};
  opcao: boolean = false;
  constructor(private nav: NavegacaoService) { }

  ngOnInit(): void {
    console.log(`OnInit  Estado-entrada ${this.componenteSaida.caminho}`);
  }
  OnClick(): void{
    this.componenteSaida.opcao = this.opcao;
    console.log(`Estado-entrada ${this.componenteSaida.caminho}`);
  }
  OnClick2(): void{
    this.nav.setEstado("/saida");
    console.log(`Estado-entrada ${this.componenteSaida.caminho}`);
  }
}
