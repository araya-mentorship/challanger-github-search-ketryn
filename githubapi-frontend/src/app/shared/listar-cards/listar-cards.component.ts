import { Component, Input } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-listar-cards',
  templateUrl: './listar-cards.component.html',
  styleUrls: ['./listar-cards.component.scss']
})
export class ListarCardsComponent {

  @Input() users: String[] = [];

  lista:string[]= [] ;

  constructor(private service: ServiceService ) { }


  list() {
    this.service.list()
    .subscribe(
        (dado) => {
          this.lista === dado
        }
    );
  }

  getList() {
    this.service.list().subscribe((data) => {
      return data
    })
  }
}
