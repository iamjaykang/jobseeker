using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.JobPosts
{
    public class List
    {
        public class Query : IRequest<Result<List<JobPost>>> { }

        public class Handler : IRequestHandler<Query, Result<List<JobPost>>>
        {

            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<Result<List<JobPost>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<JobPost>>
                .Success(await _context.JobPosts.ToListAsync());
            }
        }
    }
}