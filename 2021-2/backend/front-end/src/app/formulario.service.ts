import { Injectable } from '@angular/core';
import {Contacto} from './contacto';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(public servicio:HttpClient) { }

  EnviarDatos(Datos:Contacto){
    console.log(JSON.stringify(Datos));
    return this.servicio.get("http://localhost:3004").subscribe(datos=>{
      console.log(datos);
    });
  }
  
   
 
}
