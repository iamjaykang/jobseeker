using Application.Core;
using Application.Interfaces;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.JobPosts
{
    public class JobPostApply
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid JobPostId { get; set; }
            public JobPostApplyDto ApplyDto { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                // Get the current user applying for the job post
                var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == _userAccessor.GetUserId());

                if (user == null)
                    return Result<Unit>.Failure("User not found");

                // Retrieve the job post to which the user is applying
                var jobPost = await _context.JobPosts
                    .Include(jp => jp.Poster)
                    .Include(jp => jp.Applicants)
                    .SingleOrDefaultAsync(jp => jp.Id == request.JobPostId);

                if (jobPost == null)
                    return Result<Unit>.Failure("Job post not found");

                if (jobPost.IsClosed)
                    return Result<Unit>.Failure("This job post is closed");
                // Check if the user has already applied to the job post
                var existingApplication = jobPost.Applicants
                    .SingleOrDefault(jpa => jpa.ApplicantId == user.Id);
                if (existingApplication != null)
                    return Result<Unit>.Failure("You have already applied to this job post");

                // Create a new job post applicant with the user as the applicant
                var jobPostApplicant = new JobPostApplicant
                {
                    Id = Guid.NewGuid(),
                    JobPostId = jobPost.Id,
                    ApplicantId = user.Id,
                    ApplicationDate = DateTime.UtcNow,
                    CoverLetter = request.ApplyDto.CoverLetter,
                    Resume = request.ApplyDto.ResumeUrl
                };
                // Create a new list of applicants for the job post if it doesn't exist
                if (jobPost.Applicants == null)
                {
                    jobPost.Applicants = new List<JobPostApplicant>();
                }
                // Add the job post applicant to the database
                _context.JobPostApplicants.Add(jobPostApplicant);
                // Add the job post applicant to the job post's list of applicants
                jobPost.Applicants.Add(jobPostApplicant);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result)
                    return Result<Unit>.Failure("Failed to appliy to job post");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}