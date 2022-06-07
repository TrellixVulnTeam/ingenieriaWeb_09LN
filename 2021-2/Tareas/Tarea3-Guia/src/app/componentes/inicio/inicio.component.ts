import { Component, OnInit } from '@angular/core';
import {ListaNoticias} from '../../interfaces/noticias';
import {Categorias,ListaCategorias} from '../../interfaces/categorias';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  ListaNoticias=ListaNoticias;
  Noticia:any;
  Categoria:any;
  Color:any;
  constructor() { }

  ngOnInit(): void {
  }

  Colorboton(id:number):String{
    this.Noticia=this.ListaNoticias.find(objeto=>objeto.id==id);
    this.Categoria=ListaCategorias.find(objeto=>objeto.id==this.Noticia.idCategoria);
    this.Color=this.Categoria.color;
    
    return "blue";
  }

}
