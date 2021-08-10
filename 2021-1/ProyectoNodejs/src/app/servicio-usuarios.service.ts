import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuariosService {

  servidor="http://127.0.0.1:3004/";

  constructor(private servicio:HttpClient) { }

  Consultar():Observable<any>{
     return this.servicio.get(`${this.servidor}datos`);
  }
}
