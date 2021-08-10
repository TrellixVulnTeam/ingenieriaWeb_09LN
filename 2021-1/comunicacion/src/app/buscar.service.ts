import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscarService {
  
  data: Subject<string> = new Subject();

  constructor() { }


  buscarFiltro(){
    
  }
}
