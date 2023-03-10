import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { Job, JobFormValues } from "../models/job.model";
import { router } from "../router/Routes";
import { setServerError } from "../stores/common/common.action";
import { store } from "../stores/store";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.response.use(
  async (res) => {
    if (process.env.NODE_ENV === "development") await sleep(1000);
    return res;
  },
  (error: AxiosError) => {
    const { data, status, config } = error.response as AxiosResponse;

    switch (status) {
      case 400:
        if (config.method === "get" && data.errors.hasOwnProperty("id")) {
          router.navigate("/not-found");
        }
        if (data.errors) {
          const modalStateErrors = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modalStateErrors.push(data.errors[key]);
            }
          }

          throw modalStateErrors.flat();
        } else {
          toast.error(data);
        }
        break;
      case 401:
        toast.error("unauthorised");
        break;
      case 403:
        toast.error("forbidden");
        break;
      case 404:
        router.navigate("/not-found");
        break;
      case 500:
        store.dispatch(setServerError(data));
        router.navigate("/server-error");
        break;
    }

    return Promise.reject(error);
  }
);

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
  update: (newJobFormData: JobFormValues) =>
    requests.put<void>(`/jobs/${newJobFormData.id}`, newJobFormData),
  delete: (jobId: string) => requests.del<void>(`/jobs/${jobId}`),
};

const agent = {
  Jobs,
};

export default agent;
