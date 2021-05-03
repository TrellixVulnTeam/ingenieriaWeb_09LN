import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder,FormGroup, Validators} from '@angular/forms';
import {Datos} from '../datos';
import {ServicioInfoService} from '../servicio-info.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario:FormGroup;

  constructor(private fb:FormBuilder,private servicio:ServicioInfoService) {
     this.formulario=this.fb.group({
       id:['',[Validators.required]],
       nombre:['',[Validators.required]],
       genero:['',[Validators.required]]
     });
  }

  ngOnInit(): void {
  }
  

  EnviarDatos(){
    let lista:Array<Datos>=[{
       id:this.formulario.get('id')?.value,
       nombre:this.formulario.get('nombre')?.value,
       genero:this.formulario.get('genero')?.value
      }
    ];

    this.servicio.GuardarDatos(lista).subscribe(datos=>{
      //console.log("lo que estoy recibiendo");  
      console.log(datos);
    });
 
    
  }

}
