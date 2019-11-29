using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using JuvenilesColon.API.Data;
using JuvenilesColon.API.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JuvenilesColon.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class JugadoresController : ControllerBase
    {
        private readonly IJugadorRepository _repo;
        private readonly IMapper _mapper;

        public JugadoresController(IJugadorRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetJugadores() 
        {
            var jugadores = await _repo.GetJugadores();

            var jugadoresToReturn = _mapper.Map<IEnumerable<JugadorForListDto>>(jugadores);

            return Ok(jugadoresToReturn);
        }

        [HttpGet("{id}")]        
        public async Task<IActionResult> GetJugador(int id)
        {
            var jugador = await _repo.GetJugador(id);

            var jugadorToReturn = _mapper.Map<JugadorForDetailedDto>(jugador);

            return Ok(jugadorToReturn);
        }
    }
}