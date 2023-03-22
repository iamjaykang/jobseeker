namespace Domain
{
    public class JobPostPoster
    {

        public string PosterId { get; set; }
        public AppUser Poster { get; set; }
        public Guid JobPostId { get; set; }
        public JobPost JobPost { get; set; }
    }
}