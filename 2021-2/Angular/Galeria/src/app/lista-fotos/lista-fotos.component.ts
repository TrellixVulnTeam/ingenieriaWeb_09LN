import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-fotos',
  templateUrl: './lista-fotos.component.html',
  styleUrls: ['./lista-fotos.component.scss']
})
export class ListaFotosComponent implements OnInit {

  activeId=1;
  fotos=[
    {"id":1,"nombre":"imagen1","ruta":"1.png"},
    {"id":2,"nombre":"imagen2","ruta":"2.png"},
    {"id":3,"nombre":"imagen3","ruta":"3.png"},
    {"id":4,"nombre":"imagen4","ruta":"4.png"}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
