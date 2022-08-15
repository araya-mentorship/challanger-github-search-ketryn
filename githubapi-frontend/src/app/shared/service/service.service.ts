import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interface/user.model';
import { SearchResultUser } from '../interface/search-result-user.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private readonly API = `${environment.API}`;
  users: User[] = [];

  constructor(private http: HttpClient) { }

  public get(name: string) {
    return this.http.get(`${this.API}/${name}`)
  }

  public post<Request, Response>(
    name: string,
    body: Request
  ): Observable<Response> {
    return this.http.post<Response>(`${this.API}/${name}`, body);
  }

  list(dado: string) {
    return this.http.get<SearchResultUser>(`${this.API}searh/users/${dado}`)
  }

  getUserProfile(dado: string) {
    return this.http.get<User>(`${this.API}/users/${dado}`)
  }

  getUser(dado: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.API}/${dado}`)
  }

}
