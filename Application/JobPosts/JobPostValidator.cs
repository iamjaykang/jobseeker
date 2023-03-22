using Domain;
using FluentValidation;

namespace Application.JobPosts
{
    public class JobPostValidator : AbstractValidator<JobPost>
    {
        
        public JobPostValidator()
        {
            RuleFor(x => x.Title).NotEmpty();
            RuleFor(x => x.Description).NotEmpty();
            RuleFor(x => x.Date).NotEmpty();
            RuleFor(x => x.City).NotEmpty();
            RuleFor(x => x.JobType).NotEmpty();
        }
    }
}