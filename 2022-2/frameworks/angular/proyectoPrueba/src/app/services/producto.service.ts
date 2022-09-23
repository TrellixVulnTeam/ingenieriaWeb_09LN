import { Injectable } from '@angular/core';
import {Producto} from '../../app/interfaces/producto';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private datos:any[]=[
    {"id":1,
     "nombre":"Producto 1",
     "descripcion":"descripcion del producto",
     "precio":"200",
     "img":"./assets/img/producto1.png"
    },
    {"id":2,
     "nombre":"Producto 2",
     "descripcion":"descripcion del producto",
     "precio":"200",
     "img":"./assets/img/producto1.png"
    },
    {"id":3,
     "nombre":"Producto 3",
     "descripcion":"descripcion del producto",
     "precio":"200",
     "img":"./assets/img/producto1.png"
    },
    {"id":4,
     "nombre":"Producto 4",
     "descripcion":"descripcion del producto",
     "precio":"200",
     "img":"./assets/img/producto1.png"
    }
  ]
  constructor() { }

  getProductos(){
    return this.datos;
  }

  getProducto(index:number):Producto{
    return this.datos[index];
  }
}
