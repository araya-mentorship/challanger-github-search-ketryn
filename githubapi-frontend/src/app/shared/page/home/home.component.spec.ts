import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarCardsComponent } from '../../listar-cards/listar-cards.component';
import { SearchUsersComponent } from '../../search-users/search-users.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    })

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create HomeComponent', () => {
    expect(component).toBeTruthy();
  });
});
