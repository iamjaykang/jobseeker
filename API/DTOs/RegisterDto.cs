using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [RegularExpression("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8}$", ErrorMessage = "Password must be complex")]
        public string Password { get; set; }
        public string DisplayName { get; set; }
        [Required]
        public string UserName { get; set; }
    }
}