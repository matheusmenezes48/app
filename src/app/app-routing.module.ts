import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'listatarefa', loadChildren: './listatarefa/listatarefa.module#ListatarefaPageModule' },
  { path: 'listacompras', loadChildren: './listacompras/listacompras.module#ListacomprasPageModule' },
  { path: 'tarefadetail/:task', loadChildren: './tarefadetail/tarefadetail.module#TarefadetailPageModule' },
  { path: 'compradetail/:task', loadChildren: './compradetail/compradetail.module#CompradetailPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
