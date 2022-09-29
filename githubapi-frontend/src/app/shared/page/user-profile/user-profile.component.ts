import { Component } from '@angular/core';

import { User } from '../../interface/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  dataUser: User | null = null;

  constructor() {}
}
