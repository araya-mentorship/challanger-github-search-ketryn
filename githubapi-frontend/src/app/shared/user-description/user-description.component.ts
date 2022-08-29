import { Component, Input, OnInit } from '@angular/core';
import { UserResult } from '../interface/user-result.model';

@Component({
  selector: 'app-user-description',
  templateUrl: './user-description.component.html',
  styleUrls: ['./user-description.component.scss']
})
export class UserDescriptionComponent implements OnInit {

  @Input() userResult: UserResult[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
