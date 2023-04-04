import { Action, ActionWithPayload } from "../../models/actionTypes.model";
import { JobPost, JobPostFormValues } from "../../models/jobPost.model";
import { createAction, withMatcher } from "../../utils/reducer.util";
import { JOB_POSTS_ACTION_TYPES } from "./jobPosts.types";

export type FetchAllJobPostsLoading =
  Action<JOB_POSTS_ACTION_TYPES.FETCH_ALL_JOB_POSTS_LOADING>;

export type FetchAllJobPostsSuccess = ActionWithPayload<
  JOB_POSTS_ACTION_TYPES.FETCH_ALL_JOB_POSTS_SUCCESS,
  JobPost[]
>;

export type FetchAllJobPostsFailed =
  Action<JOB_POSTS_ACTION_TYPES.FETCH_ALL_JOB_POSTS_FAILED>;

export type FetchJobPostByIdLoading = ActionWithPayload<
  JOB_POSTS_ACTION_TYPES.FETCH_JOB_POST_BY_ID_LOADING,
  string
>;

export type FetchJobPostByIdSuccess = ActionWithPayload<
  JOB_POSTS_ACTION_TYPES.FETCH_JOB_POST_BY_ID_SUCCESS,
  JobPost
>;

export type FetchJobPostByIdFailed =
  Action<JOB_POSTS_ACTION_TYPES.FETCH_JOB_POST_BY_ID_FAILED>;

export type AddJobPostLoading = ActionWithPayload<
  JOB_POSTS_ACTION_TYPES.ADD_JOB_POST_LOADING,
  JobPostFormValues
>;

export type AddJobPostSuccess =
  Action<JOB_POSTS_ACTION_TYPES.ADD_JOB_POST_SUCCESS>;

export type AddJobPostFailed =
  Action<JOB_POSTS_ACTION_TYPES.ADD_JOB_POST_FAILED>;

export type UpdateJobPostLoading = ActionWithPayload<
  JOB_POSTS_ACTION_TYPES.UPDATE_JOB_POST_LOADING,
  { newJobPostFormData: JobPostFormValues }
>;

export type UpdateJobPostSuccess =
  Action<JOB_POSTS_ACTION_TYPES.UPDATE_JOB_POST_SUCCESS>;

export type UpdateJobPostFailed =
  Action<JOB_POSTS_ACTION_TYPES.UPDATE_JOB_POST_FAILED>;

export type DeleteJobPostLoading = ActionWithPayload<
  JOB_POSTS_ACTION_TYPES.DELETE_JOB_POST_LOADING,
  string
>;

export type DeleteJobPostSuccess =
  Action<JOB_POSTS_ACTION_TYPES.DELETE_JOB_POST_SUCCESS>;

export type DeleteJobPostFailed =
  Action<JOB_POSTS_ACTION_TYPES.DELETE_JOB_POST_FAILED>;

export type ApplyToJobPostLoading = ActionWithPayload<
  JOB_POSTS_ACTION_TYPES.APPLY_TO_JOB_POST_LOADING,
  { jobPostId: string; coverLetter: string; resumeUrl: string }
>;

export type ApplyToJobPostSuccess =
  Action<JOB_POSTS_ACTION_TYPES.APPLY_TO_JOB_POST_SUCCESS>;

export type ApplyToJobPostFailed =
  Action<JOB_POSTS_ACTION_TYPES.APPLY_TO_JOB_POST_FAILED>;

// Action to get all JOBS loading
export const fetchAllJobPostsLoading = withMatcher(
  (): FetchAllJobPostsLoading =>
    createAction(JOB_POSTS_ACTION_TYPES.FETCH_ALL_JOB_POSTS_LOADING)
);

// Action to get all JOBS success
export const fetchAllJobPostsSuccess = withMatcher(
  (jobPostsArray: JobPost[]): FetchAllJobPostsSuccess =>
    createAction(
      JOB_POSTS_ACTION_TYPES.FETCH_ALL_JOB_POSTS_SUCCESS,
      jobPostsArray
    )
);

// Action to get all JOBS failed
export const fetchAllJobPostsFailed = withMatcher(
  (): FetchAllJobPostsFailed =>
    createAction(JOB_POSTS_ACTION_TYPES.FETCH_ALL_JOB_POSTS_FAILED)
);

// Action to get JOB by id loading
export const fetchJobPostByIdLoading = withMatcher(
  (jobId: string): FetchJobPostByIdLoading =>
    createAction(JOB_POSTS_ACTION_TYPES.FETCH_JOB_POST_BY_ID_LOADING, jobId)
);

// Action to get JOB by id success
export const fetchJobPostByIdSuccess = withMatcher(
  (jobPostData: JobPost): FetchJobPostByIdSuccess =>
    createAction(
      JOB_POSTS_ACTION_TYPES.FETCH_JOB_POST_BY_ID_SUCCESS,
      jobPostData
    )
);

// Action to get JOB by id failed
export const fetchJobPostByIdFailed = withMatcher(
  (): FetchJobPostByIdFailed =>
    createAction(JOB_POSTS_ACTION_TYPES.FETCH_JOB_POST_BY_ID_FAILED)
);

// Action to add JOBS loading
export const addJobPostLoading = withMatcher(
  (jobPostFormData: JobPostFormValues): AddJobPostLoading => {
    return createAction(
      JOB_POSTS_ACTION_TYPES.ADD_JOB_POST_LOADING,
      jobPostFormData
    );
  }
);

// Action to add JOBS success
export const addJobPostSuccess = withMatcher(
  (): AddJobPostSuccess =>
    createAction(JOB_POSTS_ACTION_TYPES.ADD_JOB_POST_SUCCESS)
);

// Action to add JOBS failed
export const addJobPostFailed = withMatcher(
  (): AddJobPostFailed =>
    createAction(JOB_POSTS_ACTION_TYPES.ADD_JOB_POST_FAILED)
);

// Action to update JOBS loading
export const updateJobPostLoading = withMatcher(
  (newJobPostFormData: JobPostFormValues): UpdateJobPostLoading =>
    createAction(JOB_POSTS_ACTION_TYPES.UPDATE_JOB_POST_LOADING, {
      newJobPostFormData,
    })
);

// Action to update JOBS success
export const updateJobPostSuccess = withMatcher(
  (): UpdateJobPostSuccess =>
    createAction(JOB_POSTS_ACTION_TYPES.UPDATE_JOB_POST_SUCCESS)
);

// Action to update JOBS failed
export const updateJobPostFailed = withMatcher(
  (): UpdateJobPostFailed =>
    createAction(JOB_POSTS_ACTION_TYPES.UPDATE_JOB_POST_FAILED)
);

// Action to delete JOB loading
export const deleteJobPostLoading = withMatcher(
  (jobPostId: string): DeleteJobPostLoading =>
    createAction(JOB_POSTS_ACTION_TYPES.DELETE_JOB_POST_LOADING, jobPostId)
);

// Action to delete JOB success
export const deleteJobPostSuccess = withMatcher(
  (): DeleteJobPostSuccess =>
    createAction(JOB_POSTS_ACTION_TYPES.DELETE_JOB_POST_SUCCESS)
);

// Action to delete JOB failed
export const deleteJobPostFailed = withMatcher(
  (): DeleteJobPostFailed =>
    createAction(JOB_POSTS_ACTION_TYPES.DELETE_JOB_POST_FAILED)
);

export const applyToJobPostLoading = withMatcher(
  (
    jobPostId: string,
    coverLetter: string,
    resumeUrl: string
  ): ApplyToJobPostLoading =>
    createAction(JOB_POSTS_ACTION_TYPES.APPLY_TO_JOB_POST_LOADING, {
      jobPostId,
      coverLetter,
      resumeUrl,
    })
);

export const applyToJobPostSuccess = withMatcher(
  (): ApplyToJobPostSuccess =>
    createAction(JOB_POSTS_ACTION_TYPES.APPLY_TO_JOB_POST_SUCCESS)
);

export const applyToJobPostFailed = withMatcher(
  (): ApplyToJobPostFailed =>
    createAction(JOB_POSTS_ACTION_TYPES.APPLY_TO_JOB_POST_FAILED)
);
