import { Action, ActionWithPayload } from "../../models/actionTypes.model";
import { Job, JobFormValues } from "../../models/job.model";
import { createAction, withMatcher } from "../../utils/reducer.util";
import { JOBS_ACTION_TYPES } from "./job.types";

export type FetchAllJobsLoading =
  Action<JOBS_ACTION_TYPES.FETCH_ALL_JOBS_LOADING>;

export type FetchAllJobsSuccess = ActionWithPayload<
  JOBS_ACTION_TYPES.FETCH_ALL_JOBS_SUCCESS,
  Job[]
>;

export type FetchAllJobsFailed = ActionWithPayload<
  JOBS_ACTION_TYPES.FETCH_ALL_JOBS_FAILED,
  Error
>;

export type FetchJobByIdLoading = ActionWithPayload<
  JOBS_ACTION_TYPES.FETCH_JOB_BY_ID_LOADING,
  string
>;

export type FetchJobByIdSuccess = ActionWithPayload<
  JOBS_ACTION_TYPES.FETCH_JOB_BY_ID_SUCCESS,
  Job
>;

export type FetchJobByIdFailed = ActionWithPayload<
  JOBS_ACTION_TYPES.FETCH_JOB_BY_ID_FAILED,
  Error
>;

export type AddJobLoading = ActionWithPayload<
  JOBS_ACTION_TYPES.ADD_JOB_LOADING,
  JobFormValues
>;

export type AddJobSuccess = Action<JOBS_ACTION_TYPES.ADD_JOB_SUCCESS>;

export type AddJobFailed = ActionWithPayload<
  JOBS_ACTION_TYPES.ADD_JOB_FAILED,
  Error
>;

export type UpdateJobLoading = ActionWithPayload<
  JOBS_ACTION_TYPES.UPDATE_JOB_LOADING,
  { newJobFormData: JobFormValues }
>;

export type UpdateJobSuccess = Action<JOBS_ACTION_TYPES.UPDATE_JOB_SUCCESS>;

export type UpdateJobFailed = ActionWithPayload<
  JOBS_ACTION_TYPES.UPDATE_JOB_FAILED,
  Error
>;

export type DeleteJobLoading = ActionWithPayload<
  JOBS_ACTION_TYPES.DELETE_JOB_LOADING,
  string
>;

export type DeleteJobSuccess = Action<JOBS_ACTION_TYPES.DELETE_JOB_SUCCESS>;

export type DeleteJobFailed = ActionWithPayload<
  JOBS_ACTION_TYPES.DELETE_JOB_FAILED,
  Error
>;

// Action to get all JOBS loading
export const fetchAllJobsLoading = withMatcher(
  (): FetchAllJobsLoading =>
    createAction(JOBS_ACTION_TYPES.FETCH_ALL_JOBS_LOADING)
);

// Action to get all JOBS success
export const fetchAllJobsSuccess = withMatcher(
  (jobsArray: Job[]): FetchAllJobsSuccess =>
    createAction(JOBS_ACTION_TYPES.FETCH_ALL_JOBS_SUCCESS, jobsArray)
);

// Action to get all JOBS failed
export const fetchAllJobsFailed = withMatcher(
  (error: Error): FetchAllJobsFailed =>
    createAction(JOBS_ACTION_TYPES.FETCH_ALL_JOBS_FAILED, error)
);

// Action to get JOB by id loading
export const fetchJobByIdLoading = withMatcher(
  (jobId: string): FetchJobByIdLoading =>
    createAction(JOBS_ACTION_TYPES.FETCH_JOB_BY_ID_LOADING, jobId)
);

// Action to get JOB by id success
export const fetchJobByIdSuccess = withMatcher(
  (jobData: Job): FetchJobByIdSuccess =>
    createAction(JOBS_ACTION_TYPES.FETCH_JOB_BY_ID_SUCCESS, jobData)
);

// Action to get JOB by id failed
export const fetchJobByIdFailed = withMatcher(
  (error: Error): FetchJobByIdFailed =>
    createAction(JOBS_ACTION_TYPES.FETCH_JOB_BY_ID_FAILED, error)
);

// Action to add JOBS loading
export const addJobLoading = withMatcher(
  (jobFormData: JobFormValues): AddJobLoading =>{
    jobFormData
    return createAction(JOBS_ACTION_TYPES.ADD_JOB_LOADING, jobFormData)}
);

// Action to add JOBS success
export const addJobSuccess = withMatcher(
  (): AddJobSuccess => createAction(JOBS_ACTION_TYPES.ADD_JOB_SUCCESS)
);

// Action to add JOBS failed
export const addJobFailed = withMatcher(
  (error: Error): AddJobFailed =>
    createAction(JOBS_ACTION_TYPES.ADD_JOB_FAILED, error)
);

// Action to update JOBS loading
export const updateJobLoading = withMatcher(
  (newJobFormData: JobFormValues): UpdateJobLoading =>
    createAction(JOBS_ACTION_TYPES.UPDATE_JOB_LOADING, {
      newJobFormData,
    })
);

// Action to update JOBS success
export const updateJobSuccess = withMatcher(
  (): UpdateJobSuccess => createAction(JOBS_ACTION_TYPES.UPDATE_JOB_SUCCESS)
);

// Action to update JOBS failed
export const updateJobFailed = withMatcher(
  (error: Error): UpdateJobFailed =>
    createAction(JOBS_ACTION_TYPES.UPDATE_JOB_FAILED, error)
);

// Action to delete JOB loading
export const deleteJobLoading = withMatcher(
  (jobId: string): DeleteJobLoading =>
    createAction(JOBS_ACTION_TYPES.DELETE_JOB_LOADING, jobId)
);

// Action to delete JOB success
export const deleteJobSuccess = withMatcher(
  (): DeleteJobSuccess => createAction(JOBS_ACTION_TYPES.DELETE_JOB_SUCCESS)
);

// Action to delete JOB failed
export const deleteJobFailed = withMatcher(
  (error: Error): DeleteJobFailed =>
    createAction(JOBS_ACTION_TYPES.DELETE_JOB_FAILED, error)
);
