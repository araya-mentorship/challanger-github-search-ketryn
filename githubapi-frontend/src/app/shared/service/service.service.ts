import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ListarCardsComponent } from '../listar-cards/listar-cards.component';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private readonly API = `${environment.API}users`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(this.API).pipe(tap(console.log)
    );
  }
}
