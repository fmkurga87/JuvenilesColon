using JuvenilesColon.API.Models;
using Microsoft.EntityFrameworkCore;

namespace JuvenilesColon.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) 
        {
            
        }

        public DbSet<Foto> Fotos { get; set; }
        public DbSet<Jugador> Jugadores { get; set; }
        public DbSet<User> Users { get; set; }
    }
}