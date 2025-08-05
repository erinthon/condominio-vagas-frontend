import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vaga } from '../../models/vaga.model';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environments';


@Injectable({ providedIn: 'root' })
export class VagaService {
  private http = inject(HttpClient);
  private base = `${environment.apiBaseUrl}/vagas`;

  list(): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(this.base);
  }
}
