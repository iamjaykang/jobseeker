import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserState } from "./user.reducer";

const selectUserReducer = (state: RootState): UserState => state.user;

export const selectUser = createSelector([selectUserReducer], (userSlice) => {
  return userSlice.user;
});

export const selectUserIsLoading = createSelector(
  [selectUserReducer],
  (userSlice) => {
    return userSlice.isLoading;
  }
);

export const selectUserError =
createSelector(
    [selectUserReducer],
    (userSlice) => {
        return userSlice.error
    }
);
