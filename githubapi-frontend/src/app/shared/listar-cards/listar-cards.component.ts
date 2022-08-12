import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgModule } from '@angular/core';
import { SearchResultUser } from '../interface/search-result-user.model';
import { User } from '../interface/user.model';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-listar-cards',
  templateUrl: './listar-cards.component.html',
  styleUrls: ['./listar-cards.component.scss']
})
export class ListarCardsComponent {

  @Output() public listUser = new EventEmitter<string>()

  users: User[] = [];

  constructor() { }

  listUsers() {
    this.listUser.emit()
  }

  cardUsers() {
    this.listUser.emit()
  }

}

