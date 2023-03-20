using Application.Jobs;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class JobsController : BaseApiController
    {

        [AllowAnonymous]
        [HttpGet] // api/jobs
        public async Task<IActionResult> GetJobs()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
        [AllowAnonymous]
        [HttpGet("{id}")] // api/jobs/{id}
        public async Task<IActionResult> GetJob(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }

        [HttpPost] // api/jobs
        [Authorize(Policy = "EmployerPolicy")]
        public async Task<IActionResult> CreateJob(Job job)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Job = job }));
        }

        [HttpPut("{id}")] // api/jobs/{id}
        [Authorize(Policy = "EmployerPolicy")]
        public async Task<IActionResult> EditJob(Guid id, Job job)
        {
            job.Id = id;

            return HandleResult(await Mediator.Send(new Edit.Command { Job = job }));
        }

        [HttpDelete("{id}")] // api/jobs/{id}
        [Authorize(Policy = "EmployerPolicy")]
        public async Task<IActionResult> DeleteJob(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}