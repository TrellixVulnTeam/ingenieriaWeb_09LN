import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormularioComponent} from './formulario/formulario.component'
import {FotosComponent} from './fotos/fotos.component';

const routes: Routes = [
  {path:'',component:FormularioComponent},
  {path:'fotos',component:FotosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
