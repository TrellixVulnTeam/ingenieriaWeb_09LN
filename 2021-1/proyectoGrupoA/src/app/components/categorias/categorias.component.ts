import { Component, OnInit } from '@angular/core';
import {Productos,ListaProductos} from '../../interfaces/productos';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  Lista=ListaProductos;
  formulario:FormGroup;
  palabrafiltro:string="";

  constructor(config: NgbRatingConfig,private fb:FormBuilder ) { 
    config.max = 5;
    config.readonly = true;

    this.formulario=this.fb.group({
      texto:['']
    });
  }

  ngOnInit(): void {
   
  }

  buscarProducto(){
     this.palabrafiltro=this.formulario.get('texto')?.value;
     //console.log(this.formulario.get('texto')?.value);
  }

}
