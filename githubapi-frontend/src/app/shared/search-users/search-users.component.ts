import { Component, EventEmitter, Output } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss']
})
export class SearchUsersComponent {

  @Output() public search = new EventEmitter()

  inputValue: string = ""

  constructor(private service: ServiceService) { }

  onkey(event: any): void {
    this.inputValue = event.target.value;
  }

  enviar(): void {
    if (this.inputValue !== null) {
      this.service.getUser(this.inputValue);
    }
  }

}
