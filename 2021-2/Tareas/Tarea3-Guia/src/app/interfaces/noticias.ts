export interface Noticias {
    id:number;
    idCategoria:number;
    titulo:string;
    autor:string;
    fecha:string;
    imagen:string;
    texto:string;
}
export let ListaNoticias:Array<Noticias>=[
{ id:1,
  idCategoria:1,
  titulo:"Noticia 1",
  autor:"autor noticia 1",
  fecha:Date().toString(),
  imagen:"imagen1.png",
  texto: "texto de la noticia"
},
{   id:2,
    idCategoria:2,
    titulo:"Noticia 2",
    autor:"autor noticia 2",
    fecha:Date().toString(),
    imagen:"imagen2.png",
    texto: "texto de la noticia 2"
  },

];
