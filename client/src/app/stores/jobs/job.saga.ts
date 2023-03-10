import { takeLatest, all, call, put } from "typed-redux-saga";
import agent from "../../api/agent";
import { router } from "../../router/Routes";
import {
  addJobFailed,
  AddJobLoading,
  addJobSuccess,
  deleteJobFailed,
  DeleteJobLoading,
  deleteJobSuccess,
  fetchAllJobsFailed,
  fetchAllJobsSuccess,
  fetchJobByIdFailed,
  FetchJobByIdLoading,
  fetchJobByIdSuccess,
  updateJobFailed,
  UpdateJobLoading,
  updateJobSuccess,
} from "./job.action";
import { JOBS_ACTION_TYPES } from "./job.types";

export function* fetchAllJobs() {
  try {
    const jobsArray = yield* call(agent.Jobs.list);
    yield* put(fetchAllJobsSuccess(jobsArray));
  } catch {
    yield* put(fetchAllJobsFailed());
  }
}

export function* fetchJobById({ payload }: FetchJobByIdLoading) {
  try {
    const job = yield* call(agent.Jobs.details, payload);
    yield* put(fetchJobByIdSuccess(job));
  } catch {
    yield* put(fetchJobByIdFailed());
  }
}

export function* addJob({ payload }: AddJobLoading) {
  try {
    yield* call(agent.Jobs.create, payload);
    const { id } = payload;
    yield* put(addJobSuccess());
    router.navigate(`/browse-jobs/${id}`);
  } catch {
    yield* put(addJobFailed());
  }
}

export function* updateJob({ payload }: UpdateJobLoading) {
  const { newJobFormData } = payload;
  try {
    yield* call(agent.Jobs.update, newJobFormData);
    const { id } = newJobFormData;
    yield* put(updateJobSuccess());
    router.navigate(`/browse-jobs/${id}`);
  } catch {
    yield* put(updateJobFailed());
  }
}

export function* deleteJob({ payload: jobId }: DeleteJobLoading) {
  try {
    yield* call(agent.Jobs.delete, jobId);
    yield* put(deleteJobSuccess());
  } catch {
    yield* put(deleteJobFailed());
  }
}

// Saga to listen to fetch all users loading
export function* onFetchAllJobsLoading() {
  yield* takeLatest(JOBS_ACTION_TYPES.FETCH_ALL_JOBS_LOADING, fetchAllJobs);
}

// Saga to listen to fetch job by id loading
export function* onFetchJobByIdLoading() {
  yield* takeLatest(JOBS_ACTION_TYPES.FETCH_JOB_BY_ID_LOADING, fetchJobById);
}

export function* onAddJobLoading() {
  yield* takeLatest(JOBS_ACTION_TYPES.ADD_JOB_LOADING, addJob);
}

export function* onUpdateJobLoading() {
  yield* takeLatest(JOBS_ACTION_TYPES.UPDATE_JOB_LOADING, updateJob);
}

export function* onDeleteJobLoading() {
  yield* takeLatest(JOBS_ACTION_TYPES.DELETE_JOB_LOADING, deleteJob);
}

export function* jobsSaga() {
  yield* all([
    call(onFetchAllJobsLoading),
    call(onFetchJobByIdLoading),
    call(onAddJobLoading),
    call(onUpdateJobLoading),
    call(onDeleteJobLoading),
  ]);
}
