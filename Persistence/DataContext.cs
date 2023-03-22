using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<JobPost> JobPosts { get; set; }

        public DbSet<JobPostApplicant> JobPostApplicants { get; set; }

        public DbSet<JobPostPoster> JobPostPosters { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<JobPostApplicant>(jpa => jpa.HasKey(jp => new { jp.ApplicantId, jp.JobPostId }));

            builder.Entity<JobPostApplicant>()
                    .HasOne(jp => jp.JobPost)
                    .WithMany(j => j.Applicants)
                    .HasForeignKey(jp => jp.JobPostId);

            builder.Entity<JobPostApplicant>()
                    .HasOne(jp => jp.Applicant)
                    .WithMany(a => a.AppliedJobPosts)
                    .HasForeignKey(jp => jp.ApplicantId);

            builder.Entity<JobPostPoster>(jpp => jpp.HasKey(jp => new {jp.PosterId, jp.JobPostId}));

            builder.Entity<JobPostPoster>()
                    .HasOne(jp => jp.Poster)
                    .WithMany(p => p.JobPosts)
                    .HasForeignKey(jpp => jpp.PosterId);

            builder.Entity<JobPostPoster>()
                    .HasOne(jp => jp.JobPost)
                    .WithOne(j => j.Poster)
                    .HasForeignKey<JobPostPoster>(jpp => jpp.JobPostId);
        }

    }
}