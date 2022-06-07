export class Session {
    public token:string;
    public usuario:string;

   constructor(private token1:string,private usuario1:string){
       this.token=token1;
       this.usuario=usuario1;
   }

}


