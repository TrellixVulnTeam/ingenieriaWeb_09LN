import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators,AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario:FormGroup;
  usuario: AbstractControl;

  constructor(public form:FormBuilder) {
       this.formulario=this.form.group({
           usuario:['',[Validators.required,Validators.minLength(5)],Validators.maxLength(120)],
           clave:['',Validators.required]
       });
       this.usuario= this.formulario.controls['usuario'];  
   }

  ngOnInit(): void {
  }



  ValidarDatos(){
    console.log(this.formulario.value);
  }

}
