import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cards',
  templateUrl: './listar-cards.component.html',
  styleUrls: ['./listar-cards.component.scss']
})
export class ListarCardsComponent {

  @Input() listas: string[] = []

  lista: string[] = [];

  constructor() { }

  
  
}
