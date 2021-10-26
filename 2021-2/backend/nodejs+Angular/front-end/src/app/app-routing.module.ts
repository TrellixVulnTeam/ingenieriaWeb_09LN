import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./componentes/inicio/inicio.component";
import {ContenidoNoticiaComponent} from "./componentes/contenido-noticia/contenido-noticia.component";
const routes: Routes = [
  {path:"",component:InicioComponent},
  {path:"contenido:id",component:ContenidoNoticiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
