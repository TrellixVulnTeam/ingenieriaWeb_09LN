import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formulario:FormGroup;
  seleccionar:any;
  paises=["Australia","Argentina","Chile", "Colombia"];
  ciudades=[
    {
    idPais:1,
    ciudades:["Argentina","Mendoza"],
    },
    {
     idPais:2,
      ciudades:["Valparaiso","Quilpue", "Metropolitana"],
    },

]


  constructor(private contruir:FormBuilder) { 
    this.formulario=this.contruir.group({
      nombre:['',[Validators.minLength(5),Validators.required]],
      rut: ['',[Validators.required]],
      pais:['',[Validators.required]],
      ciudad:['',[Validators.required]],

  });

  }

  ngOnInit(): void {
  }

  get nombre():any{
     return this.formulario.get("nombre");
  }

  get rut():any{
    return this.formulario.get("rut");
  }

  get pais():any{
    return this.formulario.get("pais");
  }

  cargarCiudad(e:any){
    console.log(this.ciudades[e.target.value].ciudades);
    this.seleccionar=this.ciudades[e.target.value].ciudades;
    //this.formulario.get('ciudad')?.setValue();
  }

}
