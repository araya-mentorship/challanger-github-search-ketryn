import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ListarCardsComponent } from './shared/listar-cards/listar-cards.component';
import { HomeComponent } from './shared/page/home/home.component';
import { UserProfileComponent } from './shared/page/user-profile/user-profile.component';
import { SearchUsersComponent } from './shared/search-users/search-users.component';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule, HttpClientModule],
      declarations: [AppComponent, ListarCardsComponent,
        SearchUsersComponent, UserProfileComponent,
        HomeComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


});
