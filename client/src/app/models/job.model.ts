export interface Job {
  id: string;
  title: string;
  date: string;
  description: string;
  jobType: string;
  postedBy: string;
  salary: string;
  experienceLevel: string;
  city: string;
}

export class JobFormValues {
  title: string = "";
  description: string = "";
  jobType: string = "";
  postedBy: string = "";
  salary: string = "";
  experienceLevel: string = "";
  city: string = "";

  constructor(job?: JobFormValues) {
    if (job) {
      this.title = job.title;
      this.description = job.description;
      this.jobType = job.jobType;
      this.postedBy = job.postedBy;
      this.salary = job.salary;
      this.experienceLevel = job.experienceLevel;
      this.city = job.city;
    }
  }
}
