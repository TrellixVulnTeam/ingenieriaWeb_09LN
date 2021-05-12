import { Component, OnInit } from '@angular/core';
import {ServicioUsuariosService} from '../servicio-usuarios.service';
import {Usuarios} from '../usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
   
  listaUsuarios:Array<Usuarios>=[];

  constructor(private servicioUsuario:ServicioUsuariosService) { }

  ngOnInit(): void {
    this.servicioUsuario.Consultar().subscribe(datos=>{
   
      for(let i=0;i<datos.length;i++){
         this.listaUsuarios.push(datos[i]);
         console.log(datos[i]);
      }
      //console.log(datos);
    });
  }

}
