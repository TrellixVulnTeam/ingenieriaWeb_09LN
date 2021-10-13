import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {FormularioService} from '../formulario.service';

@Component({
  selector: 'app-lista-fotos',
  templateUrl: './lista-fotos.component.html',
  styleUrls: ['./lista-fotos.component.scss']
})
export class ListaFotosComponent implements OnInit {

  activeId=1;
  activarMsg:boolean=false;

  fotos=[
    {"id":1,"nombre":"imagen1","ruta":"1.png"},
    {"id":2,"nombre":"imagen2","ruta":"2.png"},
    {"id":3,"nombre":"imagen3","ruta":"3.png"},
    {"id":4,"nombre":"imagen4","ruta":"4.png"}
  ];

  formulario:FormGroup;

  constructor(public FormB:FormBuilder, public Servicio:FormularioService) {
     this.formulario=this.FormB.group({
       nombre: ["", [Validators.required,Validators.maxLength(10)]],
       asunto: ["",Validators.required],
       comentarios: ["",Validators.required]
     })
   }

  ngOnInit(): void {
  }

  validacion(){
    //console.log(this.formulario.get("nombre")?.value);

    this.activarMsg=true;

    this.Servicio.EnviarDatos({"id":1,"nombre":this.formulario.get("nombre")?.value,"asunto":this.formulario.get("asunto")?.value,"comentarios":this.formulario.get("comentarios")?.value});

    
  }

}
