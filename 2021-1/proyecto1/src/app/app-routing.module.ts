import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Opcion1Component} from '../app/opcion1/opcion1.component';

const routes: Routes = [
  {path:'opcion1',component:Opcion1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
