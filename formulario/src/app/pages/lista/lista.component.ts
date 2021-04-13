import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators,AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  formulario:FormGroup;
  lista:Array<String>=[];
  usuario:any;
  nombre: AbstractControl;

  constructor(public fb:FormBuilder) {
        this.formulario=this.fb.group({
            nombre:['',[Validators.required,Validators.maxLength(10)]]
        });

        this.nombre= this.formulario.controls['nombre'];  

   }

  ngOnInit(): void {
       this.usuario=this.formulario.get('nombre') as FormGroup;
  }

  Adicionar(){
      if(this.usuario.value!=""){
       this.lista.push(this.usuario.value);
      }
       
  }

  Eliminar(){
       /*
       this.lista.forEach((item,index)=>{
                if(item==this.usuario.value) this.lista.splice(index);
       });*/

    let index=0;
     for(let i of this.lista){
        if(i==this.usuario.value){
            console.log(index);
             this.lista.splice(index,1);
        }    
        index++;
     }

       
  }

}
