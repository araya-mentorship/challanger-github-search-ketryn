import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { SearchResultUser } from '../../interface/search-result-user.model';
import { ListarCardsComponent } from '../../listar-cards/listar-cards.component';
import { SearchUsersComponent } from '../../search-users/search-users.component';

import { ServiceService } from '../../service/service.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let serviceMock: ServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, SearchUsersComponent, ListarCardsComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [ServiceService, FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    serviceMock = TestBed.inject(ServiceService);
  });

  it('should create HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Quando o metodo searchUser for chamado deve realizar a busca do nome do usuario', () => {
    const name: string = 'Ketryn';
    const resultList: SearchResultUser = {
      total_count: 0,
      incomplete_results: false,
      items: [],
    };

    spyOn(serviceMock, 'list').and.returnValue(of(resultList));

    component.searchUser(name);
    expect(component.inputValue).toBe(name);
    expect(serviceMock.list).toHaveBeenCalledOnceWith(name);
    expect(component.userResult).toBe(resultList.items);
  });

  it('Quando o metodo list for chamado deve listar os nomes dos usuario', () => {
    const resultList: SearchResultUser = {
      total_count: 0,
      incomplete_results: false,
      items: [],
    };
    spyOn(serviceMock, 'list').and.returnValue(of(resultList));

    component.list(resultList);

    expect(resultList.items).toBeTruthy();
    expect(serviceMock.list).toHaveBeenCalled();
    expect(component.userResult).toEqual(resultList.items);
  });
});
