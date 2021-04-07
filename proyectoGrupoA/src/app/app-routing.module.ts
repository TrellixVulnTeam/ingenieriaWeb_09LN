import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriasComponent} from '../app/components/categorias/categorias.component';

const routes: Routes = [
  {path:'categorias',component:CategoriasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
