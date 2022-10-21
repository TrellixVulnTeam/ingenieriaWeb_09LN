import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formulario:FormGroup;
  constructor(private  form:FormBuilder) {
    this.formulario=this.form.group({
      nombre:['',[Validators.required,Validators.maxLength(120)]],
      apellidos:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      mensaje:['',[Validators.required]]
  });
  }

  ngOnInit(): void {
  }

 
  get nombre(): any {
    return this.formulario.get("nombre");
  }

  get apellidos(): any {
    return this.formulario.get("apellidos");
  }

  get email(): any {
    return this.formulario.get("email");
  }

  get mensaje(): any {
    return this.formulario.get("mensaje");
  }
  

  ValidarDatos(){


  }

}
