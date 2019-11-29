import { Foto } from './foto';

export interface Jugador {
    id: number;
    apellido: string;
    nombre: string;
    fechaNacimiento: Date;
    fechaIngreso: Date;
    altura: number;
    fotos: Foto[];
    // public ICollection<Posicion> Posiciones { get; set; }
    localidad: string;
}