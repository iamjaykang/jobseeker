using Application.Documents;
using Microsoft.AspNetCore.Http;

namespace Application.Interfaces
{
    public interface IDocumentAccessor
    {
        Task<DocumentUploadResult> AddDocument(IFormFile file);
    }
}