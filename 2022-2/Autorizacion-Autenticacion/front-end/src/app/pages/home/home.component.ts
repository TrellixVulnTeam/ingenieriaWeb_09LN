import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder,UntypedFormGroup, Validators} from '@angular/forms';
import {Session} from '../../interfaces/session';

import {LoginService} from '../../servicios/login.service';
import {StorageService} from '../../servicios/storage.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formulario:UntypedFormGroup;
  mensaje:string="";
  datos:Session[]=[];
  token:string="";
  logueado:Boolean=false;

  constructor(private form:UntypedFormBuilder, private servicio:LoginService, private storage:StorageService) {
    this.formulario=this.form.group({
      usuario:['',[Validators.required, Validators.email]],
      password:['',[Validators.required]]

      //password:['',[Validators.required,Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,30}')]]
    });

  }

  ngOnInit(): void {
    if(this.storage.getCurrentUser()){
      this.logueado=true;
      this.mensaje="Usted ya se encuentra logueado";
    }
  }

  get usuario(): any {
    return this.formulario.get("usuario");
  }

  get password(): any {
    return this.formulario.get("password");
  }



ValidarLogin(){
      this.servicio.Token().subscribe(token=>{
         this.token=token;
         this.servicio.ValidarLogin(this.formulario.get("usuario")?.value, this.formulario.get("password")?.value,this.token).subscribe(datos=>{
          //valida que si devolvió datos, si el ancho del objeto ==0 es que no se encuentra los datos en la DB
          //console.log(datos);
          if(datos==undefined){
      
                this.mensaje="Login no existe";
           }else{
             //aquí se coloca en un objeto el token, y correo electronico
              console.log(datos);
              datos={token:datos.token,usuario:datos.correo_electronico};
              this.storage.CrearSession(datos);
              window.location.href="/";
      
           }
      })
      });
    
      
      
  }

  
 

}
