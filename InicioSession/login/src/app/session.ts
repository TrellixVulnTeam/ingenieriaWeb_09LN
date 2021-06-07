export class Session {
    password:string;
    usuario: string;

    constructor(objeto:any){
         this.usuario=objeto.usuario;
         this.password=objeto.password;
    }

}
