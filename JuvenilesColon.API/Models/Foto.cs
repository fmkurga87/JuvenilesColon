using System;

namespace JuvenilesColon.API.Models
{
    public class Foto
    {
        public int Id { get; set; } 
        public string Url { get; set; }
        public string Descripcion { get; set; }
        public DateTime Fecha { get; set; }
        public bool Principal { get; set; }
        public Jugador Jugador { get; set; }
        public int JugadorId { get; set; }
    }
}