import { AnyAction } from "redux";
import { Job } from "../../models/job.model";
import {
  addJobFailed,
  addJobLoading,
  addJobSuccess,
  deleteJobFailed,
  deleteJobLoading,
  deleteJobSuccess,
  fetchAllJobsFailed,
  fetchAllJobsLoading,
  fetchAllJobsSuccess,
  fetchJobByIdFailed,
  fetchJobByIdLoading,
  fetchJobByIdSuccess,
  updateJobFailed,
  updateJobLoading,
  updateJobSuccess,
} from "./job.action";

export interface JobState {
  readonly isLoading: boolean;
  readonly error: Error | null;
  readonly jobsArray: Job[];
  readonly job: Job;
}

const JOB_INITIAL_STATE = {
  isLoading: false,
  error: null,
  jobsArray: [],
  job: null,
};

const jobsReducer = (state = JOB_INITIAL_STATE, action = {} as AnyAction) => {
  if (fetchAllJobsLoading.match(action)) {
    return {
      ...state,
      isLoading: true,
      jobsArray: [],
      error: null,
    };
  }

  if (
    addJobLoading.match(action) ||
    updateJobLoading.match(action) ||
    deleteJobLoading.match(action)
  ) {
    return {
      ...state,
      isLoading: true,
      job: null,
      error: null,
    };
  }

  if (fetchJobByIdLoading.match(action)) {
    return {
      ...state,
      isLoading: true,
      job: null,
      error: null,
    };
  }

  if (fetchAllJobsSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      jobsArray: action.payload,
      error: null,
    };
  }

  if (fetchJobByIdSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      job: action.payload,
      error: null,
    };
  }

  if (
    deleteJobSuccess.match(action) ||
    addJobSuccess.match(action) ||
    updateJobSuccess.match(action)
  ) {
    return {
      ...state,
      isLoading: false,
      error: null,
    };
  }

  if (
    fetchAllJobsFailed.match(action) ||
    fetchJobByIdFailed.match(action) ||
    addJobFailed.match(action) ||
    updateJobFailed.match(action)
  ) {
    return {
      ...state,
      isLoading: false,
      success: false,
      error: action.payload.stack,
    };
  }

  if (deleteJobFailed.match(action)) {
    return {
      ...state,
      isLoading: false,
      job: null,
      success: true,
      message: "User deleted successfully",
      error: null,
    };
  }

  return state;
};

export default jobsReducer;
