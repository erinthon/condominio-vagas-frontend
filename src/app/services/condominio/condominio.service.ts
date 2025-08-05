import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Condominio } from '../../models/condominio.model';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class CondominioService {
  private http = inject(HttpClient);
  private base = `${environment.apiBaseUrl}/condominios`;

  list(): Observable<Condominio[]> {
    return this.http.get<Condominio[]>(this.base);
  }
  get(id: number): Observable<Condominio> {
    return this.http.get<Condominio>(`${this.base}/${id}`);
  }
  create(c: Condominio): Observable<Condominio> {
    return this.http.post<Condominio>(this.base, c);
  }
  update(c: Condominio): Observable<Condominio> {
    return this.http.put<Condominio>(`${this.base}/${c.id}`, c);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }
}
