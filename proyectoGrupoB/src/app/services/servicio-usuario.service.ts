import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {
  url="http://localhost";
  constructor(private servicio:HttpClient) { }


  ConsultarDatos():Observable<any>{
     return this.servicio.get(`${this.url}/backend/usuarios.php`);
  }
}
