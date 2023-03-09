import { createSelector } from "reselect";
import { RootState } from "../store";
import { JobState } from "./job.reducer";

const selectJobsReducer = (state: RootState): JobState => state.jobs;

export const selectJobsArray = createSelector(
  [selectJobsReducer],
  (jobsSlice) => jobsSlice.jobsArray
);

export const selectJob = createSelector(
  [selectJobsReducer],
  (jobsSlice) => jobsSlice.job
);

export const selectJobsIsLoading = createSelector(
  [selectJobsReducer],
  (jobsSlice) => jobsSlice.isLoading
);
