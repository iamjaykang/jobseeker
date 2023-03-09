
import { createBrowserRouter, RouteObject } from "react-router-dom";
import JobDetails from "../../components/jobs/details/JobDetails.component";
import JobListPage from "../../components/jobs/jobList/JobListPage.component";
import App from "../layout/App.layout";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "browse-jobs", element: <JobListPage /> },
      { path: "browse-jobs/:id", element: <JobDetails /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
