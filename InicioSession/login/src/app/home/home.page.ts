import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';

import {LoginService} from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  formulario:FormGroup;
  mensaje:string="";
  

  constructor(private form:FormBuilder, private servicio:LoginService) {
    this.formulario=this.form.group({
       usuario:['',Validators.required],
       password:['',Validators.required]
     });


  }
  ngOnInit(){
  
    let datos= JSON.parse(localStorage.getItem('sitiomovil'));
    if(datos && datos.usuario){
        window.location.href="/privado";
    }

  }

  ValidarLogin(){
    /*
    if(this.formulario.get("usuario").value=='pepito' && this.formulario.get("password").value=='123'){
      localStorage.setItem('sitiomovil',JSON.stringify({"usuario":this.formulario.get("usuario").value,"password":this.formulario.get("password").value}));
    }
    */
      this.servicio.ValidarLogin(this.formulario.get("usuario").value, this.formulario.get("password").value).subscribe(datos=>{
           console.log(datos);

          if(datos.length==0){
                this.mensaje="Login no existe";
           }else{
             
              console.log(datos);
              localStorage.setItem('sitiomovil',JSON.stringify({"usuario":datos[0].correo_electronico,"id":datos[0].id}));
           }
      })


  }

}
