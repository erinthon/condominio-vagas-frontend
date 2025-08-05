import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // rota outlet

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <nav>
      <a routerLink="/condominios">Condomínios</a> |
      <a routerLink="/vagas">Vagas</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class App {}
