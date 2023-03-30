using Domain;

namespace Application.Profiles
{
    public class Profile
    {
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Bio { get; set; }
        public string Resume { get; set; }
        public ICollection<Document> Documents { get; set; }
    }
}