import { createSelector } from "reselect";
import { Profile } from "../../models/profile.model";
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

export const selectProfileIsLoading = createSelector(
  [selectProfilesReducer],
  (profilesSlice) => {
    return profilesSlice.isLoading;
  }
);

export const selectDocumentIsLoading = createSelector(
  [selectProfilesReducer],
  (profilesSlice) => {
    return profilesSlice.documentIsLoading;
  }
);

export const selectMainDocumentId = createSelector(
  [selectProfile],
  (profile: Profile | null) => profile?.documents?.find((doc) => doc.isMain)?.id
);
