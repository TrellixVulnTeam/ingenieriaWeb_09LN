import { Component, Input, OnInit } from '@angular/core';
import {Productos,ListaProductos} from '../../producto';
import {BuscarService} from '../../buscar.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  Lista=ListaProductos;
  palabrafiltro:string="";
  
  constructor(private servicio:BuscarService) { }

  ngOnInit(): void {
    this.servicio.data.subscribe(datos => {
      this.palabrafiltro=datos;
       console.log("recibiendo "+datos);
     });
  }



}
