using System;

namespace JuvenilesColon.API.Models
{
    public class Jugador
    {
        public int Id { get; set; }
        public string Apellido { get; set; }
        public string Nombre { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public DateTime FechaIngreso { get; set; }
        public decimal Altura { get; set; }
        /* AGREGAR:
        - Foto (ver datingapp)
        - Posicion (seria un id o habria que crear un ienumerable)
        - Localidad (ver como lo manejamos)
         */
        
    
    }
}