using Application.Profiles;

namespace Application.JobPosts
{
    public class JobPostDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string JobType { get; set; }
        public string Salary { get; set; }
        public string ExperienceLevel { get; set; }
        public string City { get; set; }
        public string IsClosed { get; set; }
        public Profile Poster { get; set; }
    }
}