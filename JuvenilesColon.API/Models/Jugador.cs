using System;
using System.Collections.Generic;

namespace JuvenilesColon.API.Models
{
    public class Jugador
    {
        public int Id { get; set; }
        public string Apellido { get; set; }
        public string Nombre { get; set; }
        public DateTime? FechaNacimiento { get; set; }
        public DateTime? FechaIngreso { get; set; }
        public double? Altura { get; set; }
        public ICollection<Foto> Fotos { get; set; }
        public ICollection<Posicion> Posiciones { get; set; }

        //Ojo, esto deberia ser con FK
        public string Localidad { get; set; }
    }
}