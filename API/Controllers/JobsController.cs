using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class JobsController : BaseApiController
    {
        private readonly DataContext _context;
        public JobsController(DataContext context)
        {
            _context = context;

        }

        [HttpGet] // api/jobs
        public async Task<ActionResult<List<Job>>> GetJobs()
        {
            return await _context.Jobs.ToListAsync();
        }

        [HttpGet("{id}")] // api/job/{id}
        public async Task<ActionResult<Job>> GetJob(Guid id)
        {
            return await _context.Jobs.FindAsync(id);
        }
    }
}