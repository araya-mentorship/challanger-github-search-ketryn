import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchResultUser } from '../interface/search-result-user.model';
import { User } from '../interface/user.model';
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

  it(`Quando o metodo get for chamado deve
      executar uma requisição do tipo "GET" 
      e então retorna os dados da API`, (done) => {
    const name = 'ketryn';
    const fakeResult = [
      {
        name,
      },
    ];
    const urlRequest = `${environment.API}/${name}`;

    httpMock.get = jasmine.createSpy().and.returnValue(of(fakeResult));

    service.get(name).subscribe((res) => {
      expect(res).toBe(fakeResult);
      done();
    });

    expect(httpMock.get).toHaveBeenCalledWith(urlRequest);
  });

  it('Quando o método post for chamado deve mandar a informação dos dados para a API', (done) => {
    const name = 'ketryn';
    const body = { data: null };
    const response = true;
    const urlRequest = `${environment.API}/${name}`;

    httpMock.post = jasmine.createSpy().and.returnValue(of(response));

    service.post(name, body).subscribe((result) => {
      expect(result).toBe(response);
      done();
    });

    expect(httpMock.post).toHaveBeenCalledOnceWith(urlRequest, body);
  });

  it('Quando o método list for chamado deve retorna uma lista com nomes dos usuários', (done) => {
    const name: string = 'ketryn';
    const urlRequest = `${environment.API}/search/users?q=${name}`;
    const searchResultUser: SearchResultUser = {
      total_count: 1,
      incomplete_results: false,
      items: [],
    };

    const optionsRequest = {
      headers: {
        Authorization: `token ${environment.token}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github+json',
      },
    };

    httpMock.get = jasmine.createSpy().and.returnValue(of(searchResultUser));

    service.list(name).subscribe((result) => {
      expect(result).toBe(searchResultUser);
      done();
    });

    expect(httpMock.get)
      .withContext(
        'Verifica se o método get do HTTP é chamado com a url e as opções corretas'
      )
      .toHaveBeenCalledOnceWith(urlRequest, optionsRequest);
  });

  it('Quando o metodo getUserProfile for chamado deve retorna os dados do perfil do usuario atraves da API', (done) => {
    const name: string = 'ketryn';
    const user: User = {
      name,
      login: '',
      avatar_url: '',
      bio: '',
      followers: 0,
      following: 0,
      html_url: '',
      id: 100,
      public_repos: 0,
      type: 'user',
    };

    const urlRequest = `${environment.API}/users/${name}`;
    httpMock.get = jasmine.createSpy().and.returnValue(of(user));

    const result = service.getUserProfile(name);

    expect(httpMock.get).toHaveBeenCalledOnceWith(urlRequest);
    result.subscribe((res) => {
      expect(res).toBe(user);
      done();
    });
  });
});
