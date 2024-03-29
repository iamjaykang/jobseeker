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

        [HttpGet("employer/jobs")] // api/employer/jobsPosts
        [Authorize(Policy = "EmployerPolicy")]
        public async Task<IActionResult> GetJobsForEmployer()
        {
            return HandleResult(await Mediator.Send(new ListForEmployer.Query()));
        }

        [AllowAnonymous]
        [HttpGet("{id}")] // api/jobsPosts/{id}
        public async Task<IActionResult> GetJob(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }

        [HttpGet("employer/{id}")] // api/jobsPosts/{id}
        [Authorize(Policy = "EmployerPolicy")]
        public async Task<IActionResult> GetJobForEmployer(Guid id)
        {
            return HandleResult(await Mediator.Send(new DetailsForEmployer.Query { Id = id }));
        }

        [HttpPost] // api/jobsPosts
        [Authorize(Policy = "EmployerPolicy")]
        public async Task<IActionResult> CreateJob(JobPost jobPost)
        {

            return HandleResult(await Mediator.Send(new Create.Command { JobPost = jobPost }));
        }

        [HttpPut("{id}")] // api/jobsPosts/{id}
        [Authorize(Policy = "EmployerPolicy")]
        [Authorize(Policy = "IsPosterPolicy")]
        public async Task<IActionResult> EditJob(Guid id, JobPost jobPost)
        {
            jobPost.Id = id;

            return HandleResult(await Mediator.Send(new Edit.Command { JobPost = jobPost }));
        }

        [HttpDelete("{id}")] // api/jobsPosts/{id}
        [Authorize(Policy = "EmployerPolicy")]
        [Authorize(Policy = "IsPosterPolicy")]
        public async Task<IActionResult> DeleteJob(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }

        [HttpPost("{id}/apply")] // api/jobPosts/{id}/apply
        [Authorize(Policy = "EmployeePolicy")]
        public async Task<IActionResult> Apply(Guid id, [FromBody] JobPostApplyDto applyDto)
        {
            return HandleResult(await Mediator.Send(new JobPostApply.Command { JobPostId = id, ApplyDto = applyDto }));
        }
    }
}