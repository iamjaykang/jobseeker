import { AnyAction } from "redux";
import { Document, Profile } from "../../models/profile.model";
import {
  deleteDocumentFailed,
  deleteDocumentLoading,
  deleteDocumentSuccess,
  fetchProfileByUsernameFailed,
  fetchProfileByUsernameLoading,
  fetchProfileByUsernameSuccess,
  uploadDocumentFailed,
  uploadDocumentLoading,
  uploadDocumentSuccess,
} from "./profile.action";

export interface ProfileState {
  isLoading: boolean;
  profile: Profile | null;
  document: Document | null;
  error: Error | null;
}

const PROFILE_INITIAL_STATE = {
  isLoading: false,
  profile: null,
};

const profilesReducer = (
  state = PROFILE_INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (fetchProfileByUsernameLoading.match(action)) {
    return {
      ...state,
      profile: null,
      isLoading: true,
      error: null,
    };
  }

  if (
    uploadDocumentLoading.match(action) ||
    deleteDocumentLoading.match(action)
  ) {
    return {
      ...state,
      document: null,
      isLoading: true,
      error: null,
    };
  }

  if (fetchProfileByUsernameSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      profile: action.payload,
      error: null,
    };
  }

  if (uploadDocumentSuccess.match(action)) {
    return {
      ...state,
      document: action.payload,
      isLoading: false,
      error: null,
    };
  }

  if (deleteDocumentSuccess.match(action)) {
    return {
      ...state,
      document: null,
      isLoading: false,
      error: null,
    };
  }

  if (fetchProfileByUsernameFailed.match(action)) {
    return {
      ...state,
      isLoading: false,
      user: null,
      error: action.payload,
    };
  }

  if (
    uploadDocumentFailed.match(action) ||
    deleteDocumentFailed.match(action)
  ) {
    return {
      ...state,
      document: null,
      isLoading: false,
      error: action.payload,
    };
  }

  return state;
};

export default profilesReducer;
