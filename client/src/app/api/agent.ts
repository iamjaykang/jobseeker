import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { JobPost, JobPostFormValues } from "../models/jobPost.model";
import { Profile } from "../models/profile.model";
import { User, UserFormValues } from "../models/user.model";
import { router } from "../router/Routes";
import { setServerError } from "../stores/common/common.action";
import { CommonState } from "../stores/common/common.reducer";
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

axios.interceptors.request.use((config) => {
  const token = (store.getState() as { common: CommonState }).common.token;

  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const JobPosts = {
  list: () => requests.get<JobPost[]>("/jobPosts"),
  details: (id: string) => requests.get<JobPost>(`/jobPosts/${id}`),
  create: (jobFormData: JobPostFormValues) =>
    requests.post<void>("/jobPosts", jobFormData),
  update: (newJobFormData: JobPostFormValues) =>
    requests.put<void>(`/jobPosts/${newJobFormData.id}`, newJobFormData),
  delete: (jobId: string) => requests.del<void>(`/jobPosts/${jobId}`),
};

const Account = {
  current: () => requests.get<User>("/account"),
  login: (user: UserFormValues) => requests.post<User>("/account/login", user),
  register: (user: UserFormValues) =>
    requests.post<User>("/account/register", user),
};

const Profiles = {
  get: (username: string) => requests.get<Profile>(`/profiles/${username}`)
}

const agent = {
  JobPosts,
  Account,
  Profiles
};

export default agent;
