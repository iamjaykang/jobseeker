namespace Infrastructure.Documents
{
    public class DocumentHelper
    {
        public static string ExtractPublicIdWithoutFolder(string fullPublicId, string folder)
        {
            return fullPublicId.Replace(folder + "/", "");
        }
    }
}