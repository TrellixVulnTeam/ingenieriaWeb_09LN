export interface Categorias {
    id:number;
    titulo:string;
    color: string;
}

export let ListaCategorias:Array<Categorias>=[
    { id:1,
      titulo: "Mundo",
      color: "blue"
    },
    { id:2,
        titulo: "Deportes",
        color: "red"
    }
]


