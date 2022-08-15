import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { SearchResultUser } from '../../interface/search-result-user.model';
import { User } from '../../interface/user.model';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input() public search = new EventEmitter<string>()
  @Input() public listUser = new EventEmitter<string>()

  inputValue: string = "";

  users: User[] | any = [];

  constructor(private service: ServiceService) { }

  onkey(event: string): void {
    this.inputValue = event;
  }

  searchUser(event: string): void {
    if (this.inputValue !== null) {
      this.service.getUserProfile(this.inputValue)
        .subscribe(res => {
          this.users.push(res)})
    }
    this.inputValue = event
  }

  list(event: any) {
    this.service.list('')
      .subscribe(
        (res: SearchResultUser): void => {
          this.users = res.items
        }
      )
    this.users = event
  }

  
}
