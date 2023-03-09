import axios, { AxiosResponse } from "axios";
import { Job, JobFormValues } from "../models/job.model";

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Jobs = {
  list: () => requests.get<Job[]>("/jobs"),
  details: (id: string) => requests.get<Job>(`/jobs/${id}`),
  create: (jobFormData: JobFormValues) =>
    requests.post<void>("/jobs", jobFormData),
  update: (jobId: string, newJobFormData: JobFormValues) =>
    requests.put<void>(`/jobs/${jobId}`, newJobFormData),
  delete: (jobId: string) => requests.del<void>(`/jobs/${jobId}`),
};

const agent = {
  Jobs,
};

export default agent;
