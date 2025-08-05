import {Component, OnInit} from '@angular/core';
import {Condominio} from '../../models/condominio.model';
import {CondominioService} from '../../services/condominio/condominio.service';

@Component({
  standalone: true,
  selector: 'app-condominio-list',
  imports: [],
  templateUrl: './condominio-list.component.html',
  styleUrls: ['./condominio-list.component.scss']
})
export class CondominioListComponent implements OnInit {
  condominios: Condominio[] = [];

  constructor(private condominioService: CondominioService) {}

  ngOnInit(): void {
    this.condominioService.list().subscribe({
      next: data => this.condominios = data,
      error: err => console.error('Erro ao carregar condomínios', err)
    });
  }
}
