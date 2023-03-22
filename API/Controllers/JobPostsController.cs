using Application.JobPosts;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class JobPostsController : BaseApiController
    {

        [AllowAnonymous]
        [HttpGet] // api/jobsPosts
        public async Task<IActionResult> GetJobs()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
        [AllowAnonymous]
        [HttpGet("{id}")] // api/jobsPosts/{id}
        public async Task<IActionResult> GetJob(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }

        [HttpPost] // api/jobsPosts
        [Authorize(Policy = "EmployerPolicy")]
        public async Task<IActionResult> CreateJob(JobPost jobPost)
        {

            return HandleResult(await Mediator.Send(new Create.Command { JobPost = jobPost }));
        }

        [HttpPut("{id}")] // api/jobsPosts/{id}
        [Authorize(Policy = "EmployerPolicy")]
        public async Task<IActionResult> EditJob(Guid id, JobPost jobPost)
        {
            jobPost.Id = id;

            return HandleResult(await Mediator.Send(new Edit.Command { JobPost = jobPost }));
        }

        [HttpDelete("{id}")] // api/jobsPosts/{id}
        [Authorize(Policy = "EmployerPolicy")]
        public async Task<IActionResult> DeleteJob(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}