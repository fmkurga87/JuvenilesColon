using System;
using System.Collections.Generic;
using JuvenilesColon.API.Models;

namespace JuvenilesColon.API.Dtos
{
    public class JugadorForDetailedDto
    {
        public int Id { get; set; }
        public string Apellido { get; set; }
        public string Nombre { get; set; }
        public DateTime? FechaNacimiento { get; set; }
        public int Edad { get; set; }
        public DateTime? FechaIngreso { get; set; }
        public double? Altura { get; set; }
        public ICollection<Foto> Fotos { get; set; }
        public ICollection<Posicion> Posiciones { get; set; }

        public string Localidad { get; set; }

        public string FotoURL { get; set; }
    }
}