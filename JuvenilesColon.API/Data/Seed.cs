using System.Collections.Generic;
using System.Linq;
using JuvenilesColon.API.Models;
using Newtonsoft.Json;

namespace JuvenilesColon.API.Data
{
    public class Seed
    {
        public static void SeedJugadores(DataContext context) 
        {
            if (!context.Jugadores.Any())
            {
                var jugadoresData = System.IO.File.ReadAllText("Data/UserSeedJugadores.json");
                var jugadores = JsonConvert.DeserializeObject<List<Jugador>>(jugadoresData);
                foreach (var jugador in jugadores)
                {
                    context.Jugadores.Add(jugador);
                }
            }

            context.SaveChanges();
        }
    }
}