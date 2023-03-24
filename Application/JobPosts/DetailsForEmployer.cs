using Application.Core;
using Application.Interfaces;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.JobPosts
{
    public class DetailsForEmployer
    {
        public class Query : IRequest<Result<JobPostDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<JobPostDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            private readonly IUserAccessor _userAccessor;

            public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<JobPostDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                // Retrieve the user making the request
                var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == _userAccessor.GetUserId());


                // Retrieve job post from database with eager loading of related entities
                var jobPostQuery = _context.JobPosts
                    .Include(jp => jp.Poster)
                    .ThenInclude(p => p.Poster);

                // Check if the user is the job post poster and add applicants data if so

                var jobPostForUserQuery = jobPostQuery
                .Where(jp => jp.Poster.PosterId == user.Id);

                if (jobPostForUserQuery.Any())
                {
                    jobPostForUserQuery =
                    jobPostForUserQuery
                    .Include(jp => jp.Applicants)
                    .ThenInclude(jpa => jpa.Applicant);
                }

                // Retrieve the job post from the database
                var jobPost = await jobPostForUserQuery
                    .SingleOrDefaultAsync(jp => jp.Id == request.Id, cancellationToken);

                if (jobPost == null)
                    return Result<JobPostDto>.Failure("Job post not found.");

                // Map job post entity to job post DTO
                var jobPostDto = _mapper.Map<JobPost, JobPostDto>(jobPost);


                jobPostDto.NumberOfApplicants = jobPostDto.Applicants?.Count ?? 0;

                return Result<JobPostDto>.Success(jobPostDto);
            }
        }
    }

}