export interface Usuarios {
    id:number;
    nombre:string;
    apellidos:string;
    pais:string;
    ciudad:string;
    fechaNacimiento:Date
}

export const ListaUsuarios:Array<Usuarios>=[
     { 
         id: 1,
         nombre:"peptito",
         apellidos:"perez",
         pais: "Chile",
         ciudad:"Valparaíso",
         fechaNacimiento:new Date("02/02/1970")
     },
     { 
        id: 2,
        nombre:"peptita",
        apellidos:"Pa",
        pais: "",
        ciudad:"",
        fechaNacimiento:new Date("02/02/1970")
    },
    { 
        id: 3,
        nombre:"peptito",
        apellidos:"perez",
        pais: "",
        ciudad:"",
        fechaNacimiento:new Date("02/02/1970")
    }

];
