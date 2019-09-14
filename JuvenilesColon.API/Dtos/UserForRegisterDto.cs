using System.ComponentModel.DataAnnotations;

namespace JuvenilesColon.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "Debe especificar una contraseña de entre 4 y 8 caracteres.")]
        public string Password { get; set; }
    }
}