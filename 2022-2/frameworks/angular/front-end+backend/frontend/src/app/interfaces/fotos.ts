import { Usuario } from './usuario';
export interface Fotos {
    "id":number,
    "nombre":string,
    "src":string,
    "usuarios":Usuario,
    "descripcion":string
}
