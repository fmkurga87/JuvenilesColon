using System.Linq;
using AutoMapper;
using JuvenilesColon.API.Dtos;
using JuvenilesColon.API.Models;

namespace JuvenilesColon.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Jugador, JugadorForListDto>()
                .ForMember(dest => dest.FotoURL, opt => 
                    opt.MapFrom(src => src.Fotos.FirstOrDefault(p => p.Principal).Url))
                .ForMember(dest => dest.Edad, opt => 
                    opt.MapFrom(src => src.FechaNacimiento.HasValue ? src.FechaNacimiento.Value.CalculateAge() : 0));
            CreateMap<Jugador, JugadorForDetailedDto>()
                .ForMember(dest => dest.FotoURL, opt => 
                    opt.MapFrom(src => src.Fotos.FirstOrDefault(p => p.Principal).Url))
                .ForMember(dest => dest.Edad, opt => 
                    opt.MapFrom(src => src.FechaNacimiento.HasValue ? src.FechaNacimiento.Value.CalculateAge() : 0));
            CreateMap<Foto, FotoForDetailedDto>();
        }
    }
}