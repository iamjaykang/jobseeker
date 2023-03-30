import { AnyAction } from "redux";
import { Profile } from "../../models/profile.model";
import {
  fetchProfileByUsernameFailed,
  fetchProfileByUsernameLoading,
  fetchProfileByUsernameSuccess,
} from "./profile.action";

export interface ProfileState {
  isLoading: boolean;
  profile: Profile | null;
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

  if (fetchProfileByUsernameSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      profile: action.payload,
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

  return state;
};

export default profilesReducer;
