import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../app/services/producto.service';
import {Producto} from '../interfaces/producto';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  Listaproducto:Producto[];
  constructor(private ServiceProducto:ProductoService) {
    this.Listaproducto=ServiceProducto.getProductos();
  }

  ngOnInit(): void {
  }

}
