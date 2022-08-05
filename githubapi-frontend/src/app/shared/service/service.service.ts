import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private readonly API = `${environment.API}`;
  users = []

  constructor(
    private http: HttpClient,
    ) { }

  public get(name:string){
    return this.http.get(`${this.API}/${name}`)
  }

  public post<Request, Response>(
    name: string,
    body: Request
  ): Observable<Response> {
    return this.http.post<Response>(`${this.API}/${name}`, body);
  }

  list() {
    return this.http.get(this.API).pipe(tap())
  }

  adicionar(dado:string): void{
    this.http.get(`${this.API}/${dado}`).subscribe(res => this.users === res)
  }

}
