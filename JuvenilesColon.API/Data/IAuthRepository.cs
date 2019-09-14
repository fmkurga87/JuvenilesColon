using System.Threading.Tasks;
using JuvenilesColon.API.Models;

namespace JuvenilesColon.API.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);
        Task<User> Login(string username, string password);
        Task<bool> UserExists(string username);
    }
}