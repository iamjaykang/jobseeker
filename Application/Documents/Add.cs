using Application.Core;
using Application.Interfaces;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Documents
{
    public class Add
    {
        public class Command : IRequest<Result<Document>>
        {
            public IFormFile File { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Document>>
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

            public async Task<Result<Document>> Handle(Command request, CancellationToken cancellationToken)
            {
                var user = await _context.Users.Include(p => p.Documents)
                .FirstOrDefaultAsync(x => x.Id == _userAccessor.GetUserId());

                if (user == null) return null;

                var documentUploadResult = await _documentAccessor.AddDocument(request.File);

                var document = new Document
                {
                    OriginalFileName = request.File.FileName,
                    Url = documentUploadResult.Url,
                    Id = documentUploadResult.PublicId
                };

                if (!user.Documents.Any(x => x.IsMain)) document.IsMain = true;

                user.Documents.Add(document);

                var result = await _context.SaveChangesAsync() > 0;

                if (result) return Result<Document>.Success(document);

                return Result<Document>.Failure("Problem adding document");
            }
        }
    }
}