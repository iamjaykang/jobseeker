using Application.Core;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.JobPosts
{
    public class Details
    {
        public class Query : IRequest<Result<JobPostDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<JobPostDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<JobPostDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                // Retrieve job post from database with eager loading of related entities
                var jobPost = await _context.JobPosts
                    .Include(jp => jp.Poster)
                    .ThenInclude(p => p.Poster)
                    .Include(jp => jp.Applicants)
                    .FirstOrDefaultAsync(jp => jp.Id == request.Id, cancellationToken);

                // Map job post entities to job post DTOs
                if (jobPost == null)
                    return Result<JobPostDto>.Failure("Job post not found.");

                var jobPostDto = _mapper.Map<JobPost, JobPostDto>(jobPost);

                jobPostDto.NumberOfApplicants = jobPostDto.Applicants?.Count ?? 0;
                // Set Applicants to null to avoid sending unnecessary data to the client
                jobPostDto.Applicants = null;

                return Result<JobPostDto>.Success(jobPostDto);
            }
        }
    }

}