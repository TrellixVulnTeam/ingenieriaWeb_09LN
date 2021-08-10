import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(value: any, arg: any): any {
     const resultados=[];
    for(let i=0;i<value.length;i++){
        if(value[i].nombre.indexOf(arg)>-1){
           resultados.push(value[i]);
           console.log(value[i]);
        }
    }
    //console.log("valor: "+value+ " argumento:",arg);
    return resultados;
  }

}
