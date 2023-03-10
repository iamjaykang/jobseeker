import { ActionWithPayload } from "../../models/actionTypes.model";
import { ServerError } from "../../models/serverError.model";
import { createAction, withMatcher } from "../../utils/reducer.util";
import { COMMON_ACTION_TYPES } from "./common.types";

export type SetServerError = ActionWithPayload<
  COMMON_ACTION_TYPES.SET_SERVER_ERROR,
  ServerError
>;

// Action to set server error
export const setServerError = withMatcher(
  (error: ServerError): SetServerError =>
    createAction(COMMON_ACTION_TYPES.SET_SERVER_ERROR, error)
);
