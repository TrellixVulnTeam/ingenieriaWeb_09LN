import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from '../app/inicio/inicio.component';
import {ProductoComponent} from '../app/producto/producto.component';
import {DetalleproductoComponent} from '../app/detalleproducto/detalleproducto.component';
import {ContactoComponent} from '../app/contacto/contacto.component';

const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'producto',component:ProductoComponent},
  {path:'detalleproducto/:id',component:DetalleproductoComponent},
  {path:'producto/galeria',component:DetalleproductoComponent},
  {path:'detalleproducto/:id/:nombre',component:DetalleproductoComponent},
  {path:'contacto',component:ContactoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
