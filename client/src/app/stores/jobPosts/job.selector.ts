import { createSelector } from "reselect";
import { JobFormValues } from "../../models/job.model";
import { convertUtcToLocal } from "../../utils/convertUtcToLocal.util";
import { RootState } from "../store";
import { JobState } from "./job.reducer";

const selectJobsReducer = (state: RootState): JobState => state.jobs;

export const selectJobsArray = createSelector(
  [selectJobsReducer],
  (jobsSlice) => {
    return jobsSlice.jobsArray.map((job) => {
      return {
        ...job,
        date: convertUtcToLocal(job.date),
      };
    });
  }
);

export const selectJob = createSelector([selectJobsReducer], (jobsSlice) => {
  const job = jobsSlice.job;
  if (!job) return null;
  return {
    ...job,
    date: convertUtcToLocal(job.date),
  };
});

export const selectJobFormData = createSelector(
  [selectJobsReducer],
  (jobsSlice) => {
    const job = jobsSlice.job;
    if (!job) return new JobFormValues();
    return new JobFormValues(job);
  }
);

export const selectJobsIsLoading = createSelector(
  [selectJobsReducer],
  (jobsSlice) => jobsSlice.isLoading
);
