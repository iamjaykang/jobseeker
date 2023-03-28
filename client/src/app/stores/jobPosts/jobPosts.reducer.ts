import { AnyAction } from "redux";
import { JobPost } from "../../models/jobPost.model";
import {
  addJobPostFailed,
  addJobPostLoading,
  addJobPostSuccess,
  deleteJobPostFailed,
  deleteJobPostLoading,
  deleteJobPostSuccess,
  fetchAllJobPostsFailed,
  fetchAllJobPostsLoading,
  fetchAllJobPostsSuccess,
  fetchJobPostByIdFailed,
  fetchJobPostByIdLoading,
  fetchJobPostByIdSuccess,
  updateJobPostFailed,
  updateJobPostLoading,
  updateJobPostSuccess,
} from "./jobPosts.action";

export interface JobPostState {
  readonly isLoading: boolean;
  readonly error: Error | null;
  readonly jobPostsArray: JobPost[];
  readonly jobPost: JobPost;
}

const JOB_POSTS_INITIAL_STATE = {
  isLoading: false,
  jobPostsArray: [],
  jobPost: null,
};

const jobPostsReducer = (state = JOB_POSTS_INITIAL_STATE, action = {} as AnyAction) => {
  if (fetchAllJobPostsLoading.match(action)) {
    return {
      ...state,
      isLoading: true,
      jobPostsArray: [],
    };
  }

  if (
    addJobPostLoading.match(action) ||
    updateJobPostLoading.match(action) ||
    deleteJobPostLoading.match(action)
  ) {
    return {
      ...state,
      isLoading: true,
      jobPost: null,
    };
  }

  if (fetchJobPostByIdLoading.match(action)) {
    return {
      ...state,
      isLoading: true,
      jobPost: null,
    };
  }

  if (fetchAllJobPostsSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      jobPostsArray: action.payload,
    };
  }

  if (fetchJobPostByIdSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      jobPost: action.payload,
    };
  }

  if (
    deleteJobPostSuccess.match(action) ||
    addJobPostSuccess.match(action) ||
    updateJobPostSuccess.match(action)
  ) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (
    fetchAllJobPostsFailed.match(action) ||
    updateJobPostFailed.match(action) ||
    addJobPostFailed.match(action) ||
    fetchJobPostByIdFailed.match(action) ||
    deleteJobPostFailed.match(action)
  ) {
    return {
      ...state,
      isLoading: false,
    };
  }

  return state;
};

export default jobPostsReducer;
