using Domain;

namespace Persistence
{
    public static class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (!context.Jobs.Any())
            {
                var jobs = new List<Job>
            {
                new Job
                {
                    Title = "Software Engineer",
                    Date = DateTime.UtcNow,
                    Description = "We are looking for a skilled software engineer to join our team",
                    JobType = "Full-time",
                    PostedBy = "John Doe",
                    Salary = "$100,000 - $120,000",
                    ExperienceLevel = "Mid-level",
                    City = "Auckland"
                },
                new Job
                {
                    Title = "UX Designer",
                    Date = DateTime.UtcNow,
                    Description = "We are seeking a talented UX designer to help us build great products",
                    JobType = "Contract",
                    PostedBy = "Jane Smith",
                    Salary = "$75 - $100 per hour",
                    ExperienceLevel = "Senior",
                    City = "Wellington"
                },
            };

                await context.Jobs.AddRangeAsync(jobs);
                await context.SaveChangesAsync();
            }
        }
    }
}
