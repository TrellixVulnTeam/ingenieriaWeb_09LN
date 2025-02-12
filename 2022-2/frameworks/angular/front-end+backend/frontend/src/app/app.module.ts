import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';

import {ReactiveFormsModule} from '@angular/forms';
import { FotosComponent } from './fotos/fotos.component';
import {HttpClientModule} from '@angular/common/http';
import { UsuariosPipe } from './pipes/usuarios.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FotosComponent,
    UsuariosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
