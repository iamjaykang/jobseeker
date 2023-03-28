import { createSelector } from "reselect";
import { JobPostFormValues } from "../../models/jobPost.model";
import { convertUtcToLocal } from "../../utils/convertUtcToLocal.util";
import { RootState } from "../store";
import { JobPostState } from "./jobPosts.reducer";

const selectJobPostsReducer = (state: RootState): JobPostState => state.jobPosts;

export const selectJobPostsArray = createSelector(
  [selectJobPostsReducer],
  (jobPostsSlice) => {
    return jobPostsSlice.jobPostsArray.map((jobPost) => {
      return {
        ...jobPost,
        date: convertUtcToLocal(jobPost.date),
      };
    });
  }
);

export const selectJobPost = createSelector([selectJobPostsReducer], (jobPostsSlice) => {
  const jobPost = jobPostsSlice.jobPost;
  if (!jobPost) return null;
  return {
    ...jobPost,
    date: convertUtcToLocal(jobPost.date),
  };
});

export const selectJobPostFormData = createSelector(
  [selectJobPostsReducer],
  (jobPostsSlice) => {
    const jobPost = jobPostsSlice.jobPost;
    if (!jobPost) return new JobPostFormValues();
    return new JobPostFormValues(jobPost);
  }
);

export const selectJobPostsIsLoading = createSelector(
  [selectJobPostsReducer],
  (jobPostsSlice) => jobPostsSlice.isLoading
);
