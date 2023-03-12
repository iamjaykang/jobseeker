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

        [Required]
        [RegularExpression("^[A-Za-z]+$", ErrorMessage = "First name must only contain letters")]
        public string FirstName { get; set; }

        [Required]
        [RegularExpression("^[A-Za-z]+$", ErrorMessage = "Last name must only contain letters")]
        public string LastName { get; set; }

        [Required]
        [RegularExpression("^[A-Za-z0-9]+$", ErrorMessage = "Username must only contain letters and numbers")]
        public string UserName { get; set; }
    }
}
