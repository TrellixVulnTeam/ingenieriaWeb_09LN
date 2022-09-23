import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  formulario:FormGroup;
  constructor(private fb: FormBuilder) {
     this.formulario=fb.group({
       nombre: ['',[Validators.required]],
       email:['',[Validators.email]]

  });

   }

  ngOnInit(): void {
  }

  EnviarDatos(){
    console.log("Enviando Datos");
  }
}
