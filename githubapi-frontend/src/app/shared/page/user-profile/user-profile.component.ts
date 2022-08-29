import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../interface/user.model';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  dataUser: User | null = null;

  constructor(
    private service: ServiceService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userLogin = this.activatedRouter.snapshot.paramMap.get('login');
    if (userLogin) {
      this.userProfile(userLogin);
    }
  }

  userProfile(userLogin: string) {
    this.service.getUserProfile(userLogin).subscribe((res: User): void => {
      this.dataUser = res;
    });
  }
}
