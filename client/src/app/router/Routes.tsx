
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom/";
import NotFound from "../../components/errors/notFound/NotFound.component";
import ServerError from "../../components/errors/serverError/ServerError.component";
import TestErrors from "../../components/errors/TestError.component";
import JobDetails from "../../components/jobPosts/details/JobDetails.component";
import JobForm from "../../components/jobPosts/form/JobForm.component";
import JobListPage from "../../components/jobPosts/jobList/JobListPage.component";
import LoginForm from "../../components/users/login/LoginForm.component";
import SignupForm from "../../components/users/signup/SignupForm.component";
import App from "../layout/App.layout";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "browse-jobs", element: <JobListPage /> },
      { path: "browse-jobs/:id", element: <JobDetails /> },
      { path: "post-job", element: <JobForm key="create" /> },
      { path: "manage/:id", element: <JobForm key="manage" /> },
      { path: "login", element: <LoginForm /> },
      { path: "sign-up", element: <SignupForm /> },
      { path: "errors", element: <TestErrors /> },
      { path: "not-found", element: <NotFound /> },
      { path: "server-error", element: <ServerError /> },
      { path: "*", element: <Navigate replace to='/not-found' /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
