namespace Application.JobPosts
{
    public class ApplicantDto
    {
        public Guid Id { get; set; }
        public DateTime ApplicationDate { get; set; }
        public string CoverLetter { get; set; }
        public string Resume { get; set; }
        public string ApplicantId { get; set; }
        public string ApplicantUsername { get; set; }
        public string ApplicantFirstName { get; set; }
        public string ApplicantLastName { get; set; }
    }
}
