namespace Domain
{
    public class Job
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string JobType { get; set; }
        public string PostedBy { get; set; }
        public string Salary { get; set; }
        public string ExperienceLevel { get; set; }
        public string City { get; set; }
    }
}