import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductoService} from '../../app/services/producto.service';
import {Producto} from '../interfaces/producto';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.scss']
})
export class DetalleproductoComponent implements OnInit {
  
  infoProducto:any;
  constructor(private ruta:ActivatedRoute,private ServicioProducto:ProductoService) {
   
    ruta.params.subscribe(parametros=>{

      this.infoProducto=ServicioProducto.getProducto(parametros.id);
       console.log("valor que esta recibiendo "+parametros.id);
     })
   }

  ngOnInit(): void {
  }

}
