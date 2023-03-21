using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.JobPosts
{
    public class Details
    {
        public class Query : IRequest<Result<JobPost>>
        {

            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<JobPost>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<JobPost>> Handle(Query request, CancellationToken cancellationToken)
            {
                var jobPost = await _context.JobPosts.FindAsync(request.Id);

                return Result<JobPost>
                .Success(jobPost);
            }
        }
    }
}