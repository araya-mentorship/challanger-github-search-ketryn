import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import * as exp from 'constants';
import { of } from 'rxjs';
import { SearchResultUser } from '../interface/search-result-user.model';
import { UserResult } from '../interface/user-result.model';
import { ListarCardsComponent } from '../listar-cards/listar-cards.component';
import { SearchUsersComponent } from '../search-users/search-users.component';

import { ServiceService } from './service.service';

describe('ServiceService', () => {
  let service: ServiceService;
  let httpMock: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchUsersComponent],
      imports: [HttpClientModule],
      providers: [ServiceService],
    });
    service = TestBed.inject(ServiceService);
    httpMock = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Quando o metodo get for chamado de retorna os dados da API', () => {
    const name = 'ketryn';

    spyOn(service, 'get').and.callThrough();
    service.get(name);

    expect(service.get).toHaveBeenCalledWith(name);
  });

  it('Quando o método post for chamado deve mandar a informação dos dados para a API', (done) => {
    const name = 'ketryn';
    const body = { data: null };
    const response = true;
    const url = 'https://api.github.com';

    spyOn(service, 'post').and.returnValue(of(response));

    service.post(name, body).subscribe((result) => {
      expect(result).toBe(response);
    });
    done();

    expect(httpMock.post).toHaveBeenCalledOnceWith(`${url}/${name}`, body);
  });

  fit('Quando o método list for chamado deve retorna uma lista com nomes do usuários', (done) => {
    const name = 'ketryn';
    const url = 'https://api.github.com';
    const searchResultUser: SearchResultUser = {
      total_count: 1,
      incomplete_results: false,
      items: [],
    };

    spyOn(service, 'list').and.returnValue(of(searchResultUser));

    service.list(`${url}/${name}`).subscribe((result) => {
      expect(result).toBe(searchResultUser);
    });
    done();

    expect(service.list).toHaveBeenCalledOnceWith(`${url}/${name}`);
  });

  it('Quando o metodo getUserProfile for chamado de retorna os dados do perfil do usuario atraves da API', () => {
    const name = 'ketryn';
    const user: UserResult = {
      login: '',
      avatar_url: '',
      followers_url: '',
      following_url: 0,
      location: '',
    };

    spyOn(service, 'get').and.callThrough();
    service.getUserDescription(name);

    // expect(service.getUserDescription).toHaveBeenCalledWith(name);
    expect(service.get).toEqual(user);
    expect(service.getUserDescription).toBe(name);
  });
});
