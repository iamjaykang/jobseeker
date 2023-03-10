using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        [HttpGet("not-found")]
        public ActionResult GetNotFound()
        {
            return NotFound("The requested resource could not be found.");
        }

        [HttpGet("bad-request")]
        public ActionResult GetBadRequest()
        {
            return BadRequest("The request was malformed or invalid.");
        }

        [HttpGet("server-error")]
        public ActionResult GetServerError()
        {
            throw new Exception("An unhandled exception occurred on the server.");
        }

        [HttpGet("unauthorised")]
        public ActionResult GetUnauthorised()
        {
            return Unauthorized("The request was not authorized.");
        }
    }
}
