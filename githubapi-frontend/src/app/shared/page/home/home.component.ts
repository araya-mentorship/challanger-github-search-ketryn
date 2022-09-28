import { Component, EventEmitter, Input } from '@angular/core';

import { SearchResultUser } from '../../interface/search-result-user.model';
import { UserResult } from '../../interface/user-result.model';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Input() public search = new EventEmitter<string>();
  @Input() public listUser = new EventEmitter<string>();

  inputValue: string = '';

  userResult: UserResult[] = [];

  constructor(private service: ServiceService) {}

  searchUser(event: string): void {
    this.inputValue = event;
    if (event !== null) {
      this.service.list(event).subscribe((res) => {
        return (this.userResult = res.items);
      });
    }
  }

  list(event: any) {
    this.service.list('').subscribe((res: SearchResultUser): void => {
        this.userResult = res.items;
    });
  }
}
