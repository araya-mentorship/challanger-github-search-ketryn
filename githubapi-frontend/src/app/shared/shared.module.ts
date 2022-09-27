import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListarCardsComponent } from './listar-cards/listar-cards.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { HomeComponent } from './page/home/home.component';
import { UserProfileComponent } from './page/user-profile/user-profile.component';
import { ServiceService } from './service/service.service';
import { UserDescriptionComponent } from './user-description/user-description.component';

@NgModule({
  declarations: [
    ListarCardsComponent,
    HomeComponent,
    UserProfileComponent,
    SearchUsersComponent,
    UserDescriptionComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    ListarCardsComponent,
    SearchUsersComponent,
    HomeComponent,
    UserProfileComponent,
    UserDescriptionComponent,
  ],
  providers: [ServiceService],
})
export class SharedModule {}
