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
  id?: string = undefined;
  title: string = "";
  description: string = "";
  jobType: string = "";
  postedBy: string = "";
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
      this.postedBy = job.postedBy;
      this.salary = job.salary;
      this.experienceLevel = job.experienceLevel;
      this.city = job.city;
      this.date = job.date || this.date;
    }
  }
}

