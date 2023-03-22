using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUser : IdentityUser
    {

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Bio { get; set; }

        public ICollection<JobPostPoster> JobPosts { get; set; } = new List<JobPostPoster>();

        public ICollection<JobPostApplicant> AppliedJobPosts { get; set; } = new List<JobPostApplicant>();
    }
}