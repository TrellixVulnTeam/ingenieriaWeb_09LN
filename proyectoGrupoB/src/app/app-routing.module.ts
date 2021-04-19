import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserprofileComponent} from '../app/pages/userprofile/userprofile.component';
import {PrincipalComponent} from '../app/pages/principal/principal.component';
import {ListaUsuariosComponent} from '../app/pages/lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  {path:"",component:PrincipalComponent},
  {path:"userprofile/:id",component:UserprofileComponent},
  {path:"listaUsuarios",component:ListaUsuariosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
