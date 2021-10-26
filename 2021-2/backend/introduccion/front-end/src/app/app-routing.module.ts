import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaFotosComponent} from './lista-fotos/lista-fotos.component';

const routes: Routes = [
  {path:"",component:ListaFotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
