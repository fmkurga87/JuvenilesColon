using System.Collections.Generic;
using System.Threading.Tasks;
using JuvenilesColon.API.Models;

namespace JuvenilesColon.API.Data
{
    public interface IJugadorRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<IEnumerable<Jugador>> GetJugadores();
        Task<Jugador> GetJugador(int id);
    }
}