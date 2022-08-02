import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ListarCardsComponent } from './listar-cards/listar-cards.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { HomeComponent } from './page/home/home.component';

@NgModule({
  declarations: [
    ListarCardsComponent,
    SearchUsersComponent,
    HomeComponent
  ],
    
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    ListarCardsComponent,
    SearchUsersComponent,
    HomeComponent]
})
export class SharedModule { }
