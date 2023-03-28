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
  jobsArray: [],
  job: null,
};

const jobsReducer = (state = JOB_INITIAL_STATE, action = {} as AnyAction) => {
  if (fetchAllJobsLoading.match(action)) {
    return {
      ...state,
      isLoading: true,
      jobsArray: [],
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
    };
  }

  if (fetchJobByIdLoading.match(action)) {
    return {
      ...state,
      isLoading: true,
      job: null,
    };
  }

  if (fetchAllJobsSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      jobsArray: action.payload,
    };
  }

  if (fetchJobByIdSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      job: action.payload,
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
    };
  }

  if (
    fetchAllJobsFailed.match(action) ||
    updateJobFailed.match(action) ||
    addJobFailed.match(action) ||
    fetchJobByIdFailed.match(action) ||
    deleteJobFailed.match(action)
  ) {
    return {
      ...state,
      isLoading: false,
    };
  }

  return state;
};

export default jobsReducer;
