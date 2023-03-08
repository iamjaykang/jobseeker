using Application.Jobs;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class JobsController : BaseApiController
    {

        [HttpGet] // api/jobs
        public async Task<ActionResult<List<Job>>> GetJobs()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")] // api/job/{id}
        public async Task<ActionResult<Job>> GetJob(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }
    }
}