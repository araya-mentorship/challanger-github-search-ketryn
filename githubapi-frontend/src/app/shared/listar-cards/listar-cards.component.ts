import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { UserResult } from '../interface/user-result.model';
import { User } from '../interface/user.model';

@Component({
  selector: 'app-listar-cards',
  templateUrl: './listar-cards.component.html',
  styleUrls: ['./listar-cards.component.scss']
})
export class ListarCardsComponent {

  @Input() userResult: UserResult[] = []

  constructor() { }

}

