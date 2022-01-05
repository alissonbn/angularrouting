import { Component, OnInit } from '@angular/core';
import { NavegacaoService } from 'src/app/navegacao-module/navegacao.service';

@Component({
  selector: 'app-feature2',
  templateUrl: './feature2.component.html',
  styleUrls: ['./feature2.component.css']
})
export class Feature2Component implements OnInit {

  estado: string = "";
  constructor(private navegacaoService: NavegacaoService) { }

  ngOnInit(): void {
    this.estado = this.navegacaoService.getEstado();
  }

}
