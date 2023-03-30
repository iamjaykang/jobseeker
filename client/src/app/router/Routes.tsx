
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom/";
import NotFound from "../../components/errors/notFound/NotFound.component";
import ServerError from "../../components/errors/serverError/ServerError.component";
import TestErrors from "../../components/errors/TestError.component";
import JobPostApply from "../../components/jobPosts/apply/JobPostApply.component";
import JobPostDetails from "../../components/jobPosts/details/JobPostDetails.component";
import JobPostForm from "../../components/jobPosts/form/JobPostForm.component";
import JobPostListPage from "../../components/jobPosts/jobList/JobPostListPage.component";
import ProfilePage from "../../components/profiles/ProfilePage.component";
import LoginForm from "../../components/users/login/LoginForm.component";
import SignupForm from "../../components/users/signup/SignupForm.component";
import App from "../layout/App.layout";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "browse-jobs", element: <JobPostListPage /> },
      { path: "browse-jobs/:id", element: <JobPostDetails /> },
      { path: "job/:id/apply", element: <JobPostApply />},
      { path: "profiles/:username", element: <ProfilePage />},
      { path: "post-job", element: <JobPostForm key="create" /> },
      { path: "manage/:id", element: <JobPostForm key="manage" /> },
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
