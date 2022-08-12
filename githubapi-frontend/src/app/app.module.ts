import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarCardsComponent } from './shared/listar-cards/listar-cards.component';
import { HomeComponent } from './shared/page/home/home.component';
import { UserProfileComponent } from './shared/page/user-profile/user-profile.component';
import { SearchUsersComponent } from './shared/search-users/search-users.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],


  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
  ],
  
  bootstrap: [AppComponent],
  exports: [AppRoutingModule,],
})
export class AppModule { }
