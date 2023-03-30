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

// Action to get PROFILE by username loading
export const fetchProfileByUsernameLoading = withMatcher(
  (username: string): FetchProfileByUsernameLoading =>
    createAction(
      PROFILE_ACTION_TYPES.FETCH_PROFILE_BY_USERNAME_LOADING,
      username
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
