import { JobApplicant } from "./jobApplicant.model";
import { JobPoster } from "./jobPoster.model";

export interface Job {
  numberOfApplicants: number;
  id: string;
  title: string;
  date: string;
  description: string;
  jobType: string;
  salary: string;
  experienceLevel: string;
  city: string;
  applicants: JobApplicant[];
  poster: JobPoster;
}

export class JobFormValues {
  id?: string = undefined;
  title: string = "";
  description: string = "";
  jobType: string = "";
  salary: string = "";
  experienceLevel: string = "";
  city: string = "";
  date: string = new Date().toISOString();

  constructor(job?: JobFormValues) {
    if (job) {
      this.id = job.id;
      this.title = job.title;
      this.description = job.description;
      this.jobType = job.jobType;
      this.salary = job.salary;
      this.experienceLevel = job.experienceLevel;
      this.city = job.city;
      this.date = job.date || this.date;
    }
  }
}

