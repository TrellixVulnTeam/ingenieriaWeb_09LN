import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usuarios'
})
export class UsuariosPipe implements PipeTransform {

  transform(val:Object):any{

    /*Object.entries(val).forEach(([key, value], index) => {
     
      console.log(value);

      return value;
    });*/

    return val;
  }

}
