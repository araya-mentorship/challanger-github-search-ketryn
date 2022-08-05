<<<<<<< HEAD
import { Component, EventEmitter, Output } from '@angular/core';
=======
import { Component, EventEmitter, Input, Output } from '@angular/core';
>>>>>>> bad6506ffe33ae46233329b61bd57903897d6a96

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
<<<<<<< HEAD
  @Output() public search = new EventEmitter<string>()
  constructor() { }
=======

  @Output() public search = new EventEmitter<string>()

  constructor() { }

>>>>>>> bad6506ffe33ae46233329b61bd57903897d6a96
}
