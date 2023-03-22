namespace Domain
{
    public class JobPostApplicant
    {

        public Guid Id { get; set; }
        public DateTime ApplicationDate { get; set; }
        public string CoverLetter { get; set; }
        public string Resume { get; set; }

        public string ApplicantId { get; set; }
        public AppUser Applicant { get; set; }

        public Guid JobPostId { get; set; }
        public JobPost JobPost { get; set; }
    }
}