export interface Noticias {
    id:number;
    titulo:string;
    resumen:string;
    contenido:string;
    imagen:string;
    autor:string;
    fecha:string;
    idCategoria:number;
}
export let Contenidos:Array<Noticias>=[{
   id:1,
   titulo:"Noticia 1",
   resumen:"resumen de la noticia 1",
   contenido:"Contenido de la noticia 1",
   imagen:"imagen1.png",
   autor:"Autor 1",
   fecha:Date().toString(),
   idCategoria:1
 },
 {
    id:2,
    titulo:"Noticia 2",
    resumen:"resumen noticia 2",
    contenido:"Contenido de la noticia 2",
    imagen:"imagen1.png",
    autor:"Autor 2",
    fecha:Date().toString(),
    idCategoria:1
  }

];


