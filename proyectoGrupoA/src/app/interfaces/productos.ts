export interface Productos {
      id:number;
      Idcategoria:number;
      nombre:string;
      descripcion:string;
      cantidad:number;
      precio:number;
      imagen:string;
      puntuacion:number;
}

export const ListaProductos:Array<Productos>=
   [{ id:1,
     Idcategoria:1,
     nombre:"Producto 1",
     descripcion:"descripcion del producto",
     cantidad:0,
     precio:1,
     imagen:"img/producto1.jpg",
     puntuacion:4
   },
   { id:2,
    Idcategoria:1,
    nombre:"Producto 2",
    descripcion:"descripcion del producto",
    cantidad:1,
    precio:1,
    imagen:"img/producto1.jpg",
    puntuacion:1
  },
  { id:3,
    Idcategoria:1,
    nombre:"Producto 3",
    descripcion:"descripcion del producto",
    cantidad:1,
    precio:1,
    imagen:"img/producto1.jpg",
    puntuacion:2
  }
];
   




