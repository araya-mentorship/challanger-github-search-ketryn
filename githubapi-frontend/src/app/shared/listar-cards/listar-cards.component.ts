import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-listar-cards',
  templateUrl: './listar-cards.component.html',
  styleUrls: ['./listar-cards.component.scss']
})
export class ListarCardsComponent implements OnInit {

  @Input() listas: string[] = []

  lista: string[] = [];

  constructor(private service: ServiceService ) { }

  ngOnInit() {
    this.service.list().subscribe(dados => this.lista = dados);
  }

  list() {
    this.service.list()
    .subscribe(
      dados => {
        console.log(dados);
      }
    );
  }
}
