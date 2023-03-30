using Application.Core;
using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Documents
{
    public class SetMain
    {
        public class Command : IRequest<Result<Unit>>
        {
            public string Id { get; set; }
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
                var user = await _context.Users.Include(p => p.Documents)
                .FirstOrDefaultAsync(x => x.Id == _userAccessor.GetUserId());

                if (user == null) return null;

                var document = user.Documents.FirstOrDefault(x => x.Id == request.Id);

                if (document == null) return null;

                var currentMain = user.Documents.FirstOrDefault(x => x.IsMain);

                if (currentMain != null) currentMain.IsMain = false;

                document.IsMain = true;

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Result<Unit>.Success(Unit.Value);

                return Result<Unit>.Failure("Problem setting document to main");
            }
        }
    }
}