import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import {Usuarios,ListaUsuarios} from '../../interfaces/usuarios';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  ruta2:any;
  formulario:FormGroup;
  Lista:Array<Usuarios>=ListaUsuarios;

  constructor(private ruta:ActivatedRoute, private fb:FormBuilder) {
     this.ruta2=this.ruta.params.subscribe(parametros=>{
             console.log("id Usuario"+parametros["id"]);
             console.log(this.Buscar(parametros["id"]))
       });

      this.formulario=this.fb.group({
            id:['',[Validators.required]],
            nombre:['',[Validators.required]],
            apellidos:['',[Validators.required]]
      });
  }

  ngOnInit(): void {
  }

  Buscar <Usuarios> (id:number){
      return this.Lista.find(element=>element.id==id);
  }

}
