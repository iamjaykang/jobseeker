using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Infrastructure.Security
{
    public class IsPosterRequirement : IAuthorizationRequirement
    {

    }

    public class IsPosterRequirementHandler : AuthorizationHandler<IsPosterRequirement>
    {
        private readonly DataContext _dbContext;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public IsPosterRequirementHandler(DataContext dbContext, IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
            _dbContext = dbContext;
        }

        protected override async Task<Task> HandleRequirementAsync(AuthorizationHandlerContext context, IsPosterRequirement requirement)
        {
            var userId = context.User.FindFirstValue(ClaimTypes.NameIdentifier);

            // If user ID is not found in the claims, authorization fails
            if (userId == null)
            {
                return Task.CompletedTask;
            };

            var jobPostId = Guid.Parse(_httpContextAccessor.HttpContext?.Request.RouteValues.SingleOrDefault(x => x.Key == "id").Value?.ToString());

            // Find the job post from the database
            var jobPost = await _dbContext.JobPosts.FindAsync(jobPostId);

            // If job post is not found, authorization fails
            if (jobPost == null)
            {
                return Task.CompletedTask;
            };

            // Find the job post poster from the database
            var jobPostPoster = await _dbContext.JobPostPosters.AsNoTracking().SingleOrDefaultAsync(x => x.PosterId == userId && x.JobPostId == jobPostId);

            // If job post poster is not found, authorization fails
            if (jobPostPoster == null) return Task.CompletedTask;

            // If job post poster is found and matches the current user ID, authorization succeeds
            if (jobPostPoster.PosterId == userId) context.Succeed(requirement);

            return Task.CompletedTask;
        }
    }
}