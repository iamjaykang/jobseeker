import { takeLatest, all, call, put } from "typed-redux-saga";
import agent from "../../api/agent";
import { router } from "../../router/Routes";
import {
  addJobPostFailed,
  AddJobPostLoading,
  addJobPostSuccess,
  deleteJobPostFailed,
  DeleteJobPostLoading,
  deleteJobPostSuccess,
  fetchAllJobPostsFailed,
  fetchAllJobPostsSuccess,
  fetchJobPostByIdFailed,
  FetchJobPostByIdLoading,
  fetchJobPostByIdSuccess,
  updateJobPostFailed,
  UpdateJobPostLoading,
  updateJobPostSuccess,
} from "./jobPosts.action";
import { JOB_POSTS_ACTION_TYPES } from "./jobPosts.types";

export function* fetchAllJobPosts() {
  try {
    const jobsArray = yield* call(agent.JobPosts.list);
    yield* put(fetchAllJobPostsSuccess(jobsArray));
  } catch {
    yield* put(fetchAllJobPostsFailed());
  }
}

export function* fetchJobPostById({ payload }: FetchJobPostByIdLoading) {
  try {
    const job = yield* call(agent.JobPosts.details, payload);
    yield* put(fetchJobPostByIdSuccess(job));
  } catch {
    yield* put(fetchJobPostByIdFailed());
  }
}

export function* addJobPost({ payload }: AddJobPostLoading) {
  try {
    yield* call(agent.JobPosts.create, payload);
    const { id } = payload;
    yield* put(addJobPostSuccess());
    router.navigate(`/browse-jobs/${id}`);
  } catch {
    yield* put(addJobPostFailed());
  }
}

export function* updateJobPost({ payload }: UpdateJobPostLoading) {
  const { newJobPostFormData } = payload;
  try {
    yield* call(agent.JobPosts.update, newJobPostFormData);
    const { id } = newJobPostFormData;
    yield* put(updateJobPostSuccess());
    router.navigate(`/browse-jobs/${id}`);
  } catch {
    yield* put(updateJobPostFailed());
  }
}

export function* deleteJobPost({ payload: jobId }: DeleteJobPostLoading) {
  try {
    yield* call(agent.JobPosts.delete, jobId);
    yield* put(deleteJobPostSuccess());
  } catch {
    yield* put(deleteJobPostFailed());
  }
}

// Saga to listen to fetch all users loading
export function* onFetchAllJobPostsLoading() {
  yield* takeLatest(JOB_POSTS_ACTION_TYPES.FETCH_ALL_JOB_POSTS_LOADING, fetchAllJobPosts);
}

// Saga to listen to fetch job by id loading
export function* onFetchJobPostByIdLoading() {
  yield* takeLatest(JOB_POSTS_ACTION_TYPES.FETCH_JOB_POST_BY_ID_LOADING, fetchJobPostById);
}

export function* onAddJobPostLoading() {
  yield* takeLatest(JOB_POSTS_ACTION_TYPES.ADD_JOB_POST_LOADING, addJobPost);
}

export function* onUpdateJobPostLoading() {
  yield* takeLatest(JOB_POSTS_ACTION_TYPES.UPDATE_JOB_POST_LOADING, updateJobPost);
}

export function* onDeleteJobPostLoading() {
  yield* takeLatest(JOB_POSTS_ACTION_TYPES.DELETE_JOB_POST_LOADING, deleteJobPost);
}

export function* jobPostsSaga() {
  yield* all([
    call(onFetchAllJobPostsLoading),
    call(onFetchJobPostByIdLoading),
    call(onAddJobPostLoading),
    call(onUpdateJobPostLoading),
    call(onDeleteJobPostLoading),
  ]);
}
