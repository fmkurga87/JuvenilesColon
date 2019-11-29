using System.Collections.Generic;
using System.Threading.Tasks;
using JuvenilesColon.API.Models;
using Microsoft.EntityFrameworkCore;

namespace JuvenilesColon.API.Data
{
    public class JugadorRepository : IJugadorRepository
    {
        private readonly DataContext _context;
        public JugadorRepository(DataContext context)
        {
            _context = context;
            
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Jugador> GetJugador(int id)
        {
            var user = await _context.Jugadores.FirstOrDefaultAsync(u => u.Id == id);
            
            return user;
        }

        public async Task<IEnumerable<Jugador>> GetJugadores()
        {
            var users = await _context.Jugadores.ToListAsync();

            return users;
        }

        public async Task<bool> SaveAll()
        {
            //Si es mas que 0 se guardo algo (y se guardo bien).
            return await _context.SaveChangesAsync() > 0;
        }
    }
}