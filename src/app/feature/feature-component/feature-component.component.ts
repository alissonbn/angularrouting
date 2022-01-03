import { Component, OnInit } from '@angular/core';
import { NavegacaoService } from 'src/app/navegacao/navegacao.service';

@Component({
  selector: 'app-feature-component',
  templateUrl: './feature-component.component.html',
  styleUrls: ['./feature-component.component.css']
})
export class FeatureComponent implements OnInit {
  caminho?: string;
  constructor(private navegacaoService: NavegacaoService) { }

  ngOnInit(): void {
    this.caminho = history.state.caminho;
    console.log(`caminho ${this.caminho}`);
  }

}
