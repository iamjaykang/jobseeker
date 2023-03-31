import { all, call, put, takeLatest } from "typed-redux-saga";
import agent from "../../api/agent";
import {
  fetchProfileByUsernameFailed,
  FetchProfileByUsernameLoading,
  fetchProfileByUsernameSuccess,
  uploadDocumentFailed,
  UploadDocumentLoading,
  uploadDocumentSuccess,
} from "./profile.action";
import { PROFILE_ACTION_TYPES } from "./profile.types";

export function* fetchProfile({ payload }: FetchProfileByUsernameLoading) {
  try {
    const profile = yield* call(agent.Profiles.get, payload);

    yield* put(fetchProfileByUsernameSuccess(profile));
  } catch (error) {
    yield* put(fetchProfileByUsernameFailed(error as Error));
  }
}

export function* uploadDocument({ payload }: UploadDocumentLoading) {
  try {
    const document = yield* call(agent.Profiles.uploadDocument, payload);

    yield* put(uploadDocumentSuccess(document));
  } catch (error) {
    yield* put(uploadDocumentFailed(error as Error));
  }
}

export function* onFetchProfileLoading() {
  yield* takeLatest(
    PROFILE_ACTION_TYPES.FETCH_PROFILE_BY_USERNAME_LOADING,
    fetchProfile
  );
}
export function* onUploadDocumentLoading() {
  yield* takeLatest(
    PROFILE_ACTION_TYPES.UPLOAD_DOCUMENT_LOADING,
    uploadDocument
  );
}

export function* profilesSaga() {
  yield* all([call(onFetchProfileLoading), call(onUploadDocumentLoading)]);
}
