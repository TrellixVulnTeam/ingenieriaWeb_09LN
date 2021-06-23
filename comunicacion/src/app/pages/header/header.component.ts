import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validator, Validators} from '@angular/forms';
import {BuscarService} from '../../buscar.service';

@Component({
  selector: 'app-header',

  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  formulario:FormGroup
 

  constructor(private fb:FormBuilder,private servicio:BuscarService) {
      this.formulario=this.fb.group({
        buscar: ['', Validators.required]
      });

   }

  ngOnInit(): void {
  }

  buscar(){
      var valor:string=this.formulario.get("buscar")?.value;
      this.servicio.data.next(valor)
       //console.log(this.formulario.get("buscar")?.value);
  }

}
