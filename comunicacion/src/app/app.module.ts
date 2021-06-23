import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { SearchComponent } from './pages/search/search.component';

import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { BuscarPipe } from './buscar.pipe';
import { HijoComponent } from './hijo/hijo.component';
import { PadreComponent } from './padre/padre.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    HomeComponent,
    BuscarPipe,
    HijoComponent,
    PadreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
