import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cortarTexto'
})
export class CortarTextoPipe implements PipeTransform {


  transform(valor:string,limite:number):any {
         if(valor.length>limite) return valor.substring(0,limite);
         return valor;
  }

}
