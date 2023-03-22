using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public static class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            // create roles if they don't exist
            if (!roleManager.Roles.Any())
            {
                var roles = new List<IdentityRole>
        {
            new IdentityRole {Name = "Employee"},
            new IdentityRole { Name = "Employer"}
        };

                foreach (var role in roles)
                {
                    await roleManager.CreateAsync(role);
                }
            }

            // create users if they don't exist
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
        {
            new AppUser { FirstName = "John",LastName = "Smith", UserName = "johnsmith", Email = "john.smith@example.com" },
            new AppUser { FirstName = "Jane",LastName = "Doe", UserName = "janedoe", Email = "jane.doe@example.com" },
            new AppUser { FirstName = "Bob",LastName = "Johnson", UserName = "bobjohnson", Email = "bob.johnson@example.com" },
            new AppUser { FirstName = "Sarah", LastName = "Jones", UserName = "sarahjones", Email = "sarah.jones@example.com" },
        };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");

                    if (user.UserName == "johnsmith" || user.UserName == "sarahjones")
                    {
                        await userManager.AddToRoleAsync(user, "Employee");
                    }
                    else if (user.UserName == "janedoe" || user.UserName == "bobjohnson")
                    {
                        await userManager.AddToRoleAsync(user, "Employer");
                    }
                }
            }

            // create job posts and job post posters if they don't exist
            if (!context.JobPosts.Any())
            {
                var janeDoe = await userManager.FindByNameAsync("janedoe");
                var bobJohnson = await userManager.FindByNameAsync("bobjohnson");
                var sarahJones = await userManager.FindByNameAsync("sarahjones");
                var johnSmith = await userManager.FindByNameAsync("johnsmith");

                var jobPosts = new List<JobPost>
        {
            new JobPost
            {
                Title = "Software Engineer",
                Date = DateTime.UtcNow,
                Description = "We are looking for a skilled software engineer to join our team",
                JobType = "Full-time",
                Salary = "$100,000 - $120,000",
                ExperienceLevel = "Intermediate",
                Applicants = new List<JobPostApplicant>
                {
                    new JobPostApplicant
                    {
                        Applicant = sarahJones,
                        ApplicationDate = DateTime.UtcNow,
                        Id = Guid.NewGuid(),
                        CoverLetter = "I'm excited about this opportunity and believe I would be a great fit for your team.",
                        Resume = "https://example.com/resume/sarahjones.pdf"
                    }
                },
                Poster = new JobPostPoster {Poster = janeDoe},
                City = "Auckland",
            },
            new JobPost
            {
                Title = "UX Designer",
                Date = DateTime.UtcNow,
                Description = "We are seeking a talented UX designer to help us build great products",
                JobType = "Contract",
                Salary = "$75 - $100 per hour",
                ExperienceLevel = "Senior",
                Applicants = new List<JobPostApplicant>
                {
                    new JobPostApplicant
                    {
                        Applicant = johnSmith,
                        ApplicationDate = DateTime.UtcNow.AddDays(-1),
                        Id = Guid.NewGuid(),CoverLetter = "I'm excited about this opportunity and believe I have the necessary skills to excel in this role.",
                        Resume = "https://example.com/resume/johnsmith.pdf"
                    }
                },
                Poster = new JobPostPoster {Poster = bobJohnson},
                City = "Wellington",
            },
        };

                await context.JobPosts.AddRangeAsync(jobPosts);
                await context.SaveChangesAsync();
            }
        }

    }
}
