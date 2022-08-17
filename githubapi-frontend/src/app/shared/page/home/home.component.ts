import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { UserResult } from '../../interface/user-result.model';
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

  userResult: UserResult[] = [];

  constructor(private service: ServiceService) { }

  onkey(event: string): void {
    this.inputValue = event;
  }

  searchUser(event: string): void {
    if (this.inputValue !== null) {
      this.service.list(this.inputValue)
        .subscribe(res => {
          return this.userResult.push(res);
        })
    }
    this.inputValue = event
  }

  list(event: any) {
    this.service.list('')
      .subscribe(
        (res: UserResult): void => {
          this.userResult.push(res)
        }
      )
    this.userResult = event
  }


}
