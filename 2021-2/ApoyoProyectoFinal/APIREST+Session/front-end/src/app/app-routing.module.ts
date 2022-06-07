import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SessionComponent} from './pages/session/session.component';
import {HomeComponent} from './pages/home/home.component';
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:SessionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
