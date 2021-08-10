import { Component, OnInit } from '@angular/core';
import {Usuarios,ListaUsuarios} from '../../interfaces/usuarios';
import {ServicioUsuarioService} from '../../services/servicio-usuario.service'
import {FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  Lista:Array<Usuarios>=[];
  formulario:FormGroup;
  buscarDato:string='';
  
  constructor(private servicio:ServicioUsuarioService,private fb:FormBuilder) { 
     this.formulario=this.fb.group({
       texto:['']
     });
  }

  ngOnInit(): void {
     this.servicio.ConsultarDatos().subscribe(datos=>{
       for(let i=0;i<datos.length;i++){
         this.Lista.push(datos[i]);
         //console.log(datos[i]);
       }
       
      
     });
  }

  BuscarUsuarios(){
    this.buscarDato=this.formulario.get('texto')?.value;
      //console.log(this.formulario.get('texto')?.value);
  }

}
