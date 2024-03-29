using Application.Core;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.JobPosts
{
    public class List
    {
        public class Query : IRequest<Result<List<JobPostDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<JobPostDto>>>
        {

            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;

            }

            public async Task<Result<List<JobPostDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                // Retrieve job posts from database with eager loading of related entities
                var jobPosts = await _context.JobPosts
                    .Include(jp => jp.Poster)
                    .ThenInclude(p => p.Poster)
                    .Include(jp => jp.Applicants)
                    .ToListAsync(cancellationToken);

                // Map job post entities to job post DTOs
                var jobPostDtos = _mapper.Map<List<JobPost>, List<JobPostDto>>(jobPosts);

                // Update the jobPostDtos with the count of applicants for each job post
                foreach (var jobPostDto in jobPostDtos)
                {
                    jobPostDto.NumberOfApplicants = jobPostDto.Applicants?.Count ?? 0;
                    // Set Applicants to null to avoid sending unnecessary data
                    jobPostDto.Applicants = null;
                }

                return Result<List<JobPostDto>>.Success(jobPostDtos);
            }
        }
    }
}