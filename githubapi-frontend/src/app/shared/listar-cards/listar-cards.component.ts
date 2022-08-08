import { Component, EventEmitter, Input } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-listar-cards',
  templateUrl: './listar-cards.component.html',
  styleUrls: ['./listar-cards.component.scss']
})
export class ListarCardsComponent {

  @Input() users: string[] = [];

  @Input() public search = new EventEmitter<string>()

  constructor(private service: ServiceService) { }

  list() {
    this.service.list()
      .subscribe(
        (dado) => {
          this.users === dado
        }
      );
  }

  getList() {
    this.service.list().subscribe((data) => {
      return data
    })
  }
}
