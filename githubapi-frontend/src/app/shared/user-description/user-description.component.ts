import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserResult } from '../interface/user-result.model';
import { User } from '../interface/user.model';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-user-description',
  templateUrl: './user-description.component.html',
  styleUrls: ['./user-description.component.scss'],
})
export class UserDescriptionComponent implements OnInit {
  @Input() userResult: UserResult[] = [];
  @Output() public userDescription = new EventEmitter();

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

  perfilUserDescription(): void {
    this.userDescription.emit(this.dataUser);
  }
}
