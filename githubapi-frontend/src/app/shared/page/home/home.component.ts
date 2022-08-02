import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  description = 'logo'

  @Input() githubIcon = 'assets/git.svg'
  
  @Output() public search = new EventEmitter<void>()
  constructor() { }

  ngOnInit(): void {
  }

}
