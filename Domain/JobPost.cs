namespace Domain
{
    public class JobPost
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string JobType { get; set; }
        public string Salary { get; set; }
        public string ExperienceLevel { get; set; }
        public string City { get; set; }

        public bool IsClosed { get; set; }

        public ICollection<JobPostApplicant> Applicants { get; set; } = new List<JobPostApplicant>();
        public JobPostPoster Poster { get; set; }

    }
}