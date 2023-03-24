using Application.Core;
using Application.Interfaces;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.JobPosts
{
    public class ListForEmployer
    {
        public class Query : IRequest<Result<List<JobPostDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<JobPostDto>>>
        {

            private readonly DataContext _context;
            private readonly IMapper _mapper;
            private readonly IUserAccessor _userAccessor;

            public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
                _mapper = mapper;
                _context = context;

            }

            public async Task<Result<List<JobPostDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                // Retrieve the user making the request
                var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == _userAccessor.GetUserId());

                // Retrieve job posts from database with eager loading of related entities
                var jobPostsQuery = _context.JobPosts
                    .Include(jp => jp.Poster)
                    .ThenInclude(p => p.Poster);

                // Check if the user is the job post poster and add applicants data if so
                var jobPostsForUserQuery = jobPostsQuery.Where(jp => jp.Poster.PosterId == user.Id);

                if (jobPostsForUserQuery.Any())
                {
                    jobPostsForUserQuery = jobPostsForUserQuery.Include(jp => jp.Applicants)
                        .ThenInclude(jpa => jpa.Applicant);
                }

                var jobPosts = await jobPostsForUserQuery.ToListAsync(cancellationToken);

                // Map job post entities to job post DTOs
                var jobPostDtos = _mapper.Map<List<JobPost>, List<JobPostDto>>(jobPosts);

                // Update the jobPostDtos with the count of applicants for each job post
                foreach (var jobPostDto in jobPostDtos)
                {
                    jobPostDto.NumberOfApplicants = jobPostDto.Applicants?.Count ?? 0;
                }

                return Result<List<JobPostDto>>.Success(jobPostDtos);
            }


        }
    }
}