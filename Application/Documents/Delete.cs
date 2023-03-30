using Application.Core;
using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Documents
{
    public class Delete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public string Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IDocumentAccessor _documentAccessor;
            private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context, IDocumentAccessor documentAccessor, IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
                _documentAccessor = documentAccessor;
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var user = await _context.Users.Include(p => p.Documents)
                .FirstOrDefaultAsync(x => x.Id == _userAccessor.GetUserId());

                if (user == null) return null;

                var document = user.Documents.FirstOrDefault(x => x.Id == request.Id);

                if (document == null) return null;

                var result = await _documentAccessor.DeleteDocument(document.Id);

                if (result == null) return Result<Unit>.Failure("Problem deleting document from Cloudinary");

                user.Documents.Remove(document);

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Result<Unit>.Success(Unit.Value);

                return Result<Unit>.Failure("Problem deleting document from API");
            }
        }
    }
}