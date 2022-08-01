import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home/home.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { ListarCardsComponent } from './listar-cards/listar-cards.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [HomeComponent, SearchUsersComponent, ListarCardsComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [HomeComponent, SearchUsersComponent, ListarCardsComponent]
})
export class SharedModule { }
