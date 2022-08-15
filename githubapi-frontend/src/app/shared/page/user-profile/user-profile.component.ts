import { Component, OnInit } from '@angular/core';
import { User } from '../../interface/user.model';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  dataUsers: User[] = [];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.userProfile()
  }

  userProfile() {
    this.service.getUserProfile('')
      .subscribe(
        (res: User): void => {
          this.dataUsers = [res]
        }
      );
  }
}
