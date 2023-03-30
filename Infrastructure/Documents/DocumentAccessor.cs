using Application.Documents;
using Application.Interfaces;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;

namespace Infrastructure.Documents
{
    public class DocumentAccessor : IDocumentAccessor
    {
        private readonly Cloudinary _cloudinary;
        public DocumentAccessor(IOptions<CloudinarySettings> config)
        {
            var account = new Account(
                config.Value.CloudName,
                config.Value.ApiKey,
                config.Value.ApiSecret
            );
            _cloudinary = new Cloudinary(account);
        }

        public async Task<DocumentUploadResult> AddDocument(IFormFile file)
        {
            if (file.Length > 0)
            {
                await using var stream = file.OpenReadStream();
                var uploadParams = new RawUploadParams
                {
                    File = new FileDescription(file.FileName, stream),
                    PublicId = Guid.NewGuid().ToString(),
                    Folder = "cv_uploads",
                    Overwrite = false,
                    AllowedFormats = new[] { "pdf" }
                };

                var uploadResult = await _cloudinary.UploadAsync(uploadParams);

                if (uploadResult.Error != null)
                {
                    throw new Exception(uploadResult.Error.Message);
                }

                var folder = uploadParams.Folder;
                var publicIdWithoutFolder = DocumentHelper.ExtractPublicIdWithoutFolder(uploadResult.PublicId, folder);

                return new DocumentUploadResult
                {
                    PublicId = publicIdWithoutFolder,
                    Url = uploadResult.SecureUrl.ToString(),
                };
            }
            return null;
        }

        public async Task<string> DeleteDocument(string publicId)
        {
            var folder = "cv_uploads";
            var fullPath = folder + "/" + publicId;
            var deleteParams = new DeletionParams(fullPath);

            var result = await _cloudinary.DestroyAsync(deleteParams);

            return result.Result == "ok" ? result.Result : null;
        }
    }
}