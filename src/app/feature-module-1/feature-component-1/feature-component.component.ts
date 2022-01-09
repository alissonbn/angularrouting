import { Component, OnInit } from '@angular/core';
import { NavegacaoService } from 'src/app/navegacao-module/navegacao.service';

@Component({
  selector: 'app-feature-1',
  templateUrl: './feature-1.component.html',
  styleUrls: ['./feature-1.component.css']
})
export class Feature1Component implements OnInit {
  caminho?: string;
  opcao?: boolean;
  constructor(private navegacaoService: NavegacaoService) { }

  ngOnInit(): void {
    this.caminho = history.state.caminho;
    this.opcao = history.state.opcao;
    console.log(`caminho ${this.caminho}`);
  }

}
