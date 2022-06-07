import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import {Session} from '../../session';
import {LoginService} from '../../services/login.service';
import {StorageService} from '../../services/storage.service';
@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  formulario:FormGroup;
  mensaje:string="";
  datos:Session;
  token:string="";
  logueado:Boolean=false;

  constructor(private form:FormBuilder,private servicio:LoginService,private storage:StorageService) {
    this.formulario=this.form.group({
      usuario:['',[Validators.required, Validators.email]],
      password:['',Validators.required]
    });
    this.datos=new Session("","");
   }

  ngOnInit(): void {
    if(this.storage.getCurrentUser()){
      this.logueado=true;
      this.mensaje="Usted ya se encuentra logueado";
    }
  }

  ValidarLogin(){

    this.servicio.ValidarLogin(this.formulario.get("usuario")?.value, this.formulario.get("password")?.value).subscribe(datos=>{
      
      if(datos.length==0){
            this.mensaje="Login no existe";
       }else{
        console.log(datos);
          datos={token:datos[0].id,usuario:datos[0].correo_electronico};
          this.storage.CrearSession(datos);
          window.location.href="/";
       }
  });


    
  }

}
