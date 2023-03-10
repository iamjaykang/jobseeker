using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Jobs
{
    public class Edit
    {
        
        public class Command : IRequest<Result<Unit>>
        {

            public Job Job { get; set; }
        }

                public class CommandValidator : AbstractValidator<Command>
        {

            public CommandValidator()
            {
                RuleFor(x => x.Job)
                .SetValidator(new JobValidator());
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
            _mapper = mapper;
            _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var job = await _context.Jobs.FindAsync(request.Job.Id);

                if (job == null) return null;

                _mapper.Map(request.Job, job);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>
                .Failure("Failed to update job");

                return Result<Unit>
                .Success(Unit.Value);
            }
        }
    }
}