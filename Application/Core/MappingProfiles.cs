using Application.JobPosts;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<JobPost, JobPost>();

            CreateMap<AppUser, Profiles.Profile>();

            CreateMap<JobPost, JobPostDto>()
                .ForMember(dest => dest.Poster, opt => opt.MapFrom(src => src.Poster.Poster));

            CreateMap<JobPostApplicant, ApplicantDto>()
                .ForMember(dest => dest.ApplicantId, opt => opt.MapFrom(src => src.Applicant.Id))
                .ForMember(dest => dest.ApplicantUsername, opt => opt.MapFrom(src => src.Applicant.UserName))
                .ForMember(dest => dest.ApplicantFirstName, opt => opt.MapFrom(src => src.Applicant.FirstName))
                .ForMember(dest => dest.ApplicantLastName, opt => opt.MapFrom(src => src.Applicant.LastName));
        }
    }
}