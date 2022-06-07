import { DeclarationListEmitMode } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-lista-fotos',
  templateUrl: './lista-fotos.component.html',
  styleUrls: ['./lista-fotos.component.scss']
})
export class ListaFotosComponent implements OnInit {

  activeId=1;
  estado:boolean=false;
  fotos=[
    {"id":1,"nombre":"imagen1","ruta":"1.png"},
    {"id":2,"nombre":"imagen2","ruta":"2.png"},
    {"id":3,"nombre":"imagen3","ruta":"3.png"},
    {"id":4,"nombre":"imagen4","ruta":"4.png"}
  ];

  formulario:FormGroup;
 
  constructor(public Form:FormBuilder) {
     this.formulario=this.Form.group({
        nombre:['',Validators.required],
        asunto:['',Validators.required],
        comentarios:['',Validators.required]
     });
   }

  ngOnInit(): void {
    
  }

  validacion2(){
    this.estado=true;
    let datos:any=[{
      "nombre": this.formulario.get("nombre")?.value,
      "asunto": this.formulario.get("asunto")?.value,
      "comentarios": this.formulario.get("comentarios")?.value,
    }];
  
    console.log("Los datos que se reciben son "+datos[0].nombre);



  }
  validacion1(value:any){
    
    let datos:any=[{
      "nombre": value.nombre,
      "asunto": value.asunto,
      "comentarios": value.comentarios
    }];
  
    console.log("Los datos que se reciben son "+datos[0].nombre);

  }

}
