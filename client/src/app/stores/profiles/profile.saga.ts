import { all, call, put, takeLatest } from "typed-redux-saga";
import agent from "../../api/agent";
import {
  deleteDocumentFailed,
  DeleteDocumentLoading,
  deleteDocumentSuccess,
  fetchProfileByUsernameFailed,
  fetchProfileByUsernameLoading,
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
  const { file, username } = payload;

  try {
    const document = yield* call(agent.Profiles.uploadDocument, file);

    yield* put(uploadDocumentSuccess(document));

    yield put(fetchProfileByUsernameLoading(username));
  } catch (error) {
    yield* put(uploadDocumentFailed(error as Error));
  }
}

export function* deleteDocument({ payload }: DeleteDocumentLoading) {
  const { documentId, username } = payload;

  try {
    yield* call(agent.Profiles.deleteDocument, documentId);

    yield* put(deleteDocumentSuccess());

    yield put(fetchProfileByUsernameLoading(username));
  } catch (error) {
    yield* put(deleteDocumentFailed(error as Error));
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

export function* onDeleteDocumentLoading() {
  yield* takeLatest(
    PROFILE_ACTION_TYPES.DELETE_DOCUMENT_LOADING,
    deleteDocument
  );
}

export function* profilesSaga() {
  yield* all([
    call(onFetchProfileLoading),
    call(onUploadDocumentLoading),
    call(onDeleteDocumentLoading),
  ]);
}
