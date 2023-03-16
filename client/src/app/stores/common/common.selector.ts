import { createSelector } from "reselect";
import { RootState } from "../store";
import { CommonState } from "./common.reducer";

const selectCommonReducer = (state: RootState): CommonState => state.common;

export const selectServerError = createSelector(
  [selectCommonReducer],
  (commonSlice) => commonSlice.error
);

export const selectUserToken = createSelector(
  [selectCommonReducer],
  (commonSlice) => commonSlice.token
)
