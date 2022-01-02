import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-component',
  templateUrl: './feature-component.component.html',
  styleUrls: ['./feature-component.component.css']
})
export class FeatureComponent implements OnInit {
  caminho?: string;
  constructor() { }

  ngOnInit(): void {
    this.caminho = history.state.caminho;
    console.log(`caminho ${this.caminho}`);
  }

}
