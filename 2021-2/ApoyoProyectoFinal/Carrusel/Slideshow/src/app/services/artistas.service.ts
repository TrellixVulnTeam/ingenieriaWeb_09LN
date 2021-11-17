import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistasService {
  
  constructor(private http:HttpClient) {
     
  }
  HttpUploadOptions = {
    headers: new HttpHeaders(
      {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Content-Type': 'application/json',
    }
    ),
  };

  GetArtistas():Observable<any>{
    return this.http.get(`${environment.hostname}/Artistas`);
  }
  POSTArtistas():Observable<any>{
    return this.http.post(`${environment.hostname}/InsertarArtistas`,JSON.stringify({"nombre":"pepo","descripcion":"asas","foto":"asas"}),this.HttpUploadOptions);

  }

}
