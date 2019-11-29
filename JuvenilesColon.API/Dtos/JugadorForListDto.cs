using System;

namespace JuvenilesColon.API.Dtos
{
    public class JugadorForListDto
    {
        public int Id { get; set; }
        public string Apellido { get; set; }
        public string Nombre { get; set; }
        public int Edad { get; set; }
        public string FotoURL { get; set; }

    }
}