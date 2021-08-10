import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {PadreComponent} from './padre/padre.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'padre', component:PadreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
