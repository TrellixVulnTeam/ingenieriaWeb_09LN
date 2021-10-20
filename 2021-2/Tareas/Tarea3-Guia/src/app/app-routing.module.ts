import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './componentes/inicio/inicio.component';
import {DetalleNoticiaComponent} from './componentes/detalle-noticia/detalle-noticia.component';

const routes: Routes = [
  {path:"",component:InicioComponent},
  {path:"detalleNoticia/:id",component:DetalleNoticiaComponent},
  {path:"detalleNoticia",component:DetalleNoticiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
