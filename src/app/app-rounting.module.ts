import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { NaoAutorizadoComponent } from './core/nao-autorizado.component';

const routes: Routes = [
  { path: 'lancamentos', loadChildren: 'app/lancamentos/lancamentos.module#LancamentosModule' },

  { path: 'pessoas', loadChildren: 'app/pessoas/pessoas.module#PessoasModule' },

  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },

  { path: 'relatorios', loadChildren: 'app/relatorios/relatorios.module#RelatoriosModule' },

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'nao-autorizado',
    component: NaoAutorizadoComponent
  },
  // {
  //   path: 'pagina-nao-encontrada',
  //   component: PaginaNaoEncontradaComponent
  // },
  // { // Caso não encontre uma página válida
  //   path: '**',
  //   redirectTo: 'pagina-nao-encontrada'
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRountingModule {
}
