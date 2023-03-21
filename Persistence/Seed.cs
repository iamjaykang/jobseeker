using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public static class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager, RoleManager<IdentityRole> roleManager)
        {

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


            if (!userManager.Users.Any())
            {

                var users = new List<AppUser>
                {
                    new AppUser { FirstName = "John",LastName = "Smith", UserName = "johnsmith", Email = "john.smith@example.com" },
                    new AppUser { FirstName = "Jane",LastName = "Doe", UserName = "janedoe", Email = "jane.doe@example.com" },
                    new AppUser { FirstName = "Bob",LastName = "Johnson", UserName = "bobjohnson", Email = "bob.johnson@example.com" },
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");

                    if (user.UserName == "johnsmith")
                    {
                        await userManager.AddToRoleAsync(user, "Employee");
                    }
                    else if (user.UserName == "janedoe")
                    {
                        await userManager.AddToRoleAsync(user, "Employer");
                    }
                    else if (user.UserName == "bobjohnson")
                    {
                        await userManager.AddToRoleAsync(user, "Employee");
                    }
                }
            }

            if (!context.JobPosts.Any())
            {
                var janeDoe = await userManager.FindByNameAsync("janedoe");

                var jobPosts = new List<JobPost>
            {
                new JobPost
                {
                    Title = "Software Engineer",
                    Date = DateTime.UtcNow,
                    Description = "We are looking for a skilled software engineer to join our team",
                    JobType = "Full-time",
                    PostedBy = "John Doe",
                    Salary = "$100,000 - $120,000",
                    ExperienceLevel = "Intermediate",
                    City = "Auckland",
                    AppUserId = janeDoe.Id
                },
                new JobPost
                {
                    Title = "UX Designer",
                    Date = DateTime.UtcNow,
                    Description = "We are seeking a talented UX designer to help us build great products",
                    JobType = "Contract",
                    PostedBy = "Jane Smith",
                    Salary = "$75 - $100 per hour",
                    ExperienceLevel = "Senior",
                    City = "Wellington",
                    AppUserId = janeDoe.Id
                },
            };

                await context.JobPosts.AddRangeAsync(jobPosts);
                await context.SaveChangesAsync();
            }
        }
    }
}
