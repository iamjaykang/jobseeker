using Application.Documents;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class DocumentsController : BaseApiController
    {
        [HttpPost]
        public async Task<IActionResult> Add([FromForm] Add.Command command)
        {
            return HandleResult(await Mediator.Send(command));
        }
    }
}