import { JobPostApplicant } from "./jobPostApplicant.model";
import { JobPostPoster } from "./jobPostPoster.model";

export interface JobPost {
  numberOfApplicants: number;
  id: string;
  title: string;
  date: string;
  description: string;
  jobType: string;
  salary: string;
  experienceLevel: string;
  city: string;
  applicants: JobPostApplicant[];
  poster: JobPostPoster;
}

export class JobPostFormValues {
  id?: string = undefined;
  title: string = "";
  description: string = "";
  jobType: string = "";
  salary: string = "";
  experienceLevel: string = "";
  city: string = "";
  date: string = new Date().toISOString();

  constructor(jobPost?: JobPostFormValues) {
    if (jobPost) {
      this.id = jobPost.id;
      this.title = jobPost.title;
      this.description = jobPost.description;
      this.jobType = jobPost.jobType;
      this.salary = jobPost.salary;
      this.experienceLevel = jobPost.experienceLevel;
      this.city = jobPost.city;
      this.date = jobPost.date || this.date;
    }
  }
}

