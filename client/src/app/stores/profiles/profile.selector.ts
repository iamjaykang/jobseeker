import { createSelector } from "reselect";
import { RootState } from "../store";
import { ProfileState } from "./profile.reducer";

const selectProfilesReducer = (state: RootState): ProfileState =>
  state.profiles;

export const selectProfile = createSelector(
  [selectProfilesReducer],
  (profilesSlice) => {
    return profilesSlice.profile;
  }
);

export const selectDocument = createSelector(
  [selectProfilesReducer],
  (profilesSlice) => {
    return profilesSlice.document;
  }
);
