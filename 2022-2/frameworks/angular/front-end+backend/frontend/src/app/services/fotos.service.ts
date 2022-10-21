import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotosService {
  private _jsonURL = '../../assets/fotos.json';
  constructor(private http: HttpClient) {
     
  }

   public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
   }


}
