import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss']
})
export class SearchUsersComponent {
 
  @Output() public search = new EventEmitter<string>()
  constructor() { }

}
