import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss'],
})
export class SearchUsersComponent {
  @Output() public search = new EventEmitter();

  formUser = this.formBuilder.group({
    name: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  enviar(): void {
    const { name }: { name: string | null } = this.formUser.getRawValue();
    if (this.formUser.valid) {
      this.search.emit(name);
    }
  }
}
