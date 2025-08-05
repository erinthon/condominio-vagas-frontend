import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {provideRouter, Routes} from '@angular/router';
import { App } from './app/app';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vagas',
    pathMatch: 'full'
  },
  { path: 'condominios', loadComponent: () => import('./app/components/condominio-list/condominio-list.component').then(m => m.CondominioListComponent) },
  { path: 'vagas', loadComponent: () => import('./app/components/vaga-list/vaga-list.component').then(m => m.VagaListComponent) },
];

bootstrapApplication(App, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
  ]
});
