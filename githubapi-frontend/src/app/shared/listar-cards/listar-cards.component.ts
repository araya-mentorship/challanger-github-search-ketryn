import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserResult } from '../interface/user-result.model';

@Component({
  selector: 'app-listar-cards',
  templateUrl: './listar-cards.component.html',
  styleUrls: ['./listar-cards.component.scss']
})
export class ListarCardsComponent {

  @Input() userResult: UserResult[] = [];

  constructor(private router: Router) { }

  redirect(login: string) {
    this.router.navigate([`perfil-usuario/${login}`])
  }

}

