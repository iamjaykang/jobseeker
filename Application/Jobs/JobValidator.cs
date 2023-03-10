using Domain;
using FluentValidation;

namespace Application.Jobs
{
    public class JobValidator : AbstractValidator<Job>
    {
        
        public JobValidator()
        {
            RuleFor(x => x.Title).NotEmpty();
            RuleFor(x => x.Description).NotEmpty();
            RuleFor(x => x.Date).NotEmpty();
            RuleFor(x => x.PostedBy).NotEmpty();
            RuleFor(x => x.City).NotEmpty();
            RuleFor(x => x.JobType).NotEmpty();
        }
    }
}