using Application.Documents;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class DocumentsController : BaseApiController
    {
        [HttpPost] // api/documents
        public async Task<IActionResult> Add([FromForm] Add.Command command)
        {
            return HandleResult(await Mediator.Send(command));
        }

        [HttpDelete("{id}")] // api/documents/{id}
        public async Task<IActionResult> Delete(string id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }

        [HttpPost("{id}/setMain")] // api/documents/{id}/setMain
        public async Task<IActionResult> SetMain(string id)
        {
            return HandleResult(await Mediator.Send(new SetMain.Command { Id = id }));
        }
    }
}