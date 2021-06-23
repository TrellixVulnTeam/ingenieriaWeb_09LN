import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(Lista:any,args:any):any {
    const resultado:any=[];
    Lista.forEach((element:any) => {
         if(element.nombre.toLowerCase().indexOf(args.toLowerCase())>-1) {
           resultado.push(element);
           
         }
    });
    
   return resultado;
 }


}
