import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  ValidarLogin(usuario:string,password:string,token:string):Observable<any>{
    let headers=new HttpHeaders();
    headers= headers.append('Content-Type', 'application/json');
    //colocando el token en las cabeceras del html
    headers= headers.append('access-token',token);
    let options = { headers: headers };
    //envia los parámetros  tipo post
    return this.http.post(`${environment.apiUrl}/login`,JSON.stringify({"usuario":usuario,"password":password}),options);
    //sin usar token
    //return this.http.post(`${environment.apiUrl}/loginsintoken`,JSON.stringify({"usuario":usuario,"password":password}),options);
  }

  Token():Observable<any>{
     return this.http.get(`${environment.apiUrl}/token`);
  }
}
