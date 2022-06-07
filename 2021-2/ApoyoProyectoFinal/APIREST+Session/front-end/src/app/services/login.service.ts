import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {

   }
  
  ValidarLogin(usuario:string,password:string):Observable<any>{

    const params = new HttpParams();
    params.set("usuario",usuario);
    params.set("clave", password);
    return this.http.get(`${environment.hostname}:${environment.port}/api/login/${usuario}/${password}`);
  }

  Token():Observable<any>{
    return this.http.get(`${environment.hostname}":"${environment.port}/token`);
  }

}
