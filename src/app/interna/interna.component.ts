import { Component, OnInit } from '@angular/core';
import { Estado } from '../estado';

@Component({
  selector: 'app-interna',
  templateUrl: './interna.component.html',
  styleUrls: ['./interna.component.css']
})
export class InternaComponent implements OnInit {

  componenteSaida : Estado = {caminho: "/saida"};
  constructor() { }

  ngOnInit(): void {
    console.log(`OnInit  Estado-interna ${this.componenteSaida.caminho}`);
  }
  OnClick(): void{
    console.log(`Estado-interna ${this.componenteSaida.caminho}`);
  }
}
