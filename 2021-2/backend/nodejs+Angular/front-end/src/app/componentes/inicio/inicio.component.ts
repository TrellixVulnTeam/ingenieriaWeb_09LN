import { Component, OnInit } from '@angular/core';
import {Noticias,Contenidos} from '../../interfaces/noticias';
import {Categorias,ListaCategorias} from '../../interfaces/categorias';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  ListaContenidos=Contenidos;

  constructor() { }

  ngOnInit(): void {
  }

  AbrirNoticia(id:number){
    console.log("noticia"+id);
  }

}
