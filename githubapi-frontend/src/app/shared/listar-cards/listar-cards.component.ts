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

  //  async list(user: string) {
  //   const profile = document.getElementById("profile");
  //   const client_id = "Iv1.7dfefc23bd280eef";
  //   const client_secret = "84c24b16a5faa7a65f1bc8665d091c736942fe53";
  //   const profileResponse = await fetch(`${url}/${user}?client_id=${client_id}&client_secret${client_secret}`);
    
  //   return profile
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
