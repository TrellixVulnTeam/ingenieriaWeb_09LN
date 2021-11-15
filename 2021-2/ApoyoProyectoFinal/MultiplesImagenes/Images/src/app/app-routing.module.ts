import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubirImageComponent} from './subir-image/subir-image.component';
const routes: Routes = [
  {path:"", component:SubirImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
