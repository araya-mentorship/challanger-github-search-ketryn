import { Component, EventEmitter, Output } from '@angular/core';
<<<<<<< HEAD
import { ServiceService } from '../service/service.service';
=======
>>>>>>> bad6506ffe33ae46233329b61bd57903897d6a96

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss']
})
export class SearchUsersComponent {
 
<<<<<<< HEAD
  @Output() public search = new EventEmitter()

  inputValue:string = ""

  constructor(
    private service: ServiceService,
    ) {}

  onkey(event:any) {
    this.inputValue = event.target.value;
  }

  enviar(): void {
    if (this.inputValue !== null) {
      this.service.adicionar(this.inputValue);
    }
  }

=======
  @Output() public search = new EventEmitter<string>()
  constructor() { }

>>>>>>> bad6506ffe33ae46233329b61bd57903897d6a96
}
