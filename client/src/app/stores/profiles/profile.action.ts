import { ActionWithPayload, Action } from "../../models/actionTypes.model";
import { Profile } from "../../models/profile.model";
import { createAction, withMatcher } from "../../utils/reducer.util";
import { PROFILE_ACTION_TYPES } from "./profile.types";

export type FetchProfileByUsernameLoading = ActionWithPayload<
  PROFILE_ACTION_TYPES.FETCH_PROFILE_BY_USERNAME_LOADING,
  string
>;

export type FetchProfileByUsernameSuccess = ActionWithPayload<
  PROFILE_ACTION_TYPES.FETCH_PROFILE_BY_USERNAME_SUCCESS,
  Profile
>;

export type FetchProfileByUsernameFailed = ActionWithPayload<
  PROFILE_ACTION_TYPES.FETCH_PROFILE_BY_USERNAME_FAILED,
  Error
>;

export type UploadDocumentLoading = ActionWithPayload<
  PROFILE_ACTION_TYPES.UPLOAD_DOCUMENT_LOADING,
  Blob
>;

export type UploadDocumentSuccess = ActionWithPayload<
  PROFILE_ACTION_TYPES.UPLOAD_DOCUMENT_SUCCESS,
  Document
>;

export type UploadDocumentFailed = ActionWithPayload<
  PROFILE_ACTION_TYPES.UPLOAD_DOCUMENT_FAILED,
  Error
>;

// Action to get PROFILE by username loading
export const fetchProfileByUsernameLoading = withMatcher(
  (userId: string): FetchProfileByUsernameLoading =>
    createAction(
      PROFILE_ACTION_TYPES.FETCH_PROFILE_BY_USERNAME_LOADING,
      userId
    )
);

// Action to get PROFILE by username success
export const fetchProfileByUsernameSuccess = withMatcher(
  (profileData: Profile): FetchProfileByUsernameSuccess =>
    createAction(
      PROFILE_ACTION_TYPES.FETCH_PROFILE_BY_USERNAME_SUCCESS,
      profileData
    )
);

// Action to get PROFILE by username failed
export const fetchProfileByUsernameFailed = withMatcher(
  (error: Error): FetchProfileByUsernameFailed =>
    createAction(PROFILE_ACTION_TYPES.FETCH_PROFILE_BY_USERNAME_FAILED, error)
);

// Action for upload Document Loading
export const uploadDocumentLoading = withMatcher(
  (file: Blob): UploadDocumentLoading =>
    createAction(PROFILE_ACTION_TYPES.UPLOAD_DOCUMENT_LOADING, file)
);

// Action for upload Document Success
export const uploadDocumentSuccess = withMatcher(
  (fileData: Document): UploadDocumentSuccess =>
    createAction(PROFILE_ACTION_TYPES.UPLOAD_DOCUMENT_SUCCESS, fileData)
);

// Action for upload Document Failed
export const uploadDocumentFailed = withMatcher(
  (error: Error): UploadDocumentFailed =>
    createAction(PROFILE_ACTION_TYPES.UPLOAD_DOCUMENT_FAILED, error)
);
