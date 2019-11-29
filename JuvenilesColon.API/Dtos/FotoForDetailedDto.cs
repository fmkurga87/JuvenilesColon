using System;

namespace JuvenilesColon.API.Dtos
{
    public class FotoForDetailedDto
    {
        public int Id { get; set; } 
        public string Url { get; set; }
        public string Descripcion { get; set; }
        public DateTime Fecha { get; set; }
        public bool Principal { get; set; }
    }
}