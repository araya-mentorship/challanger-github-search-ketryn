import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { User } from '../interface/user.model';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-listar-cards',
  templateUrl: './listar-cards.component.html',
  styleUrls: ['./listar-cards.component.scss']
})
export class ListarCardsComponent {

  @Input() users: Object = {};

  @Input() public search = new EventEmitter<string>()

  constructor(private service: ServiceService) {}

  list() {
    this.service.list()
      .subscribe(
        (user: Object): void => {
          this.users = user
        }
      )
  }

  // getList(dado: any) {
  //    this.users = (dado) => {
  //     this.search(this.users = dado)
  //    }
  //   // console.log('AQUI esta o user', this.users);


}

