import { Injectable } from '@angular/core';
import {Contacto} from './contacto';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor() { }


  EnviarDatos(Datos:Contacto){
    console.log(JSON.stringify(Datos));
  }
}
