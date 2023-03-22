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
        }
    }
}