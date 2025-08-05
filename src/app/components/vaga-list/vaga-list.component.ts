import {Component, OnInit} from '@angular/core';
import {Vaga} from '../../models/vaga.model';
import {VagaService} from '../../services/vaga/vaga.service';

@Component({
  standalone: true,
  selector: 'app-vaga-list',
  imports: [],
  templateUrl: './vaga-list.component.html',
  styleUrls: ['./vaga-list.component.scss']
})
export class VagaListComponent implements OnInit {
  vagas: Vaga[] = [];

  constructor(private vagaService: VagaService) {}

  ngOnInit(): void {
    this.vagaService.list().subscribe({
      next: data => this.vagas = data,
      error: err => console.error('Erro ao carregar vagas', err)
    });
  }
}
