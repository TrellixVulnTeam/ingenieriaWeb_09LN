import { Component, OnInit } from '@angular/core';
import {Usuarios,ListaUsuarios} from '../../interfaces/usuarios';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  Lista:Array<Usuarios>=ListaUsuarios;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
