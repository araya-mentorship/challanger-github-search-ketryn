import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { SearchResultUser } from '../interface/search-result-user.model';
import { User } from '../interface/user.model';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-listar-cards',
  templateUrl: './listar-cards.component.html',
  styleUrls: ['./listar-cards.component.scss']
})
export class ListarCardsComponent implements OnInit {

  @Input() users: User[] = [];

  @Input() public search = new EventEmitter<string>()

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.list()
  }

  list() {
    this.service.list('ketrynsdm')
      .subscribe(
        (res: SearchResultUser): void => {
          this.users = res.items
        }
      )
  }


}

