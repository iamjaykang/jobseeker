import { AnyAction } from "redux";
import { ServerError } from "../../models/serverError.model";
import { setServerError } from "./common.action";

export interface CommonState {
  readonly error: ServerError;
}

const COMMON_INITIAL_STATE = {
  error: null,
};

const commonReducer = (
  state = COMMON_INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (setServerError.match(action)) {
    return {
      ...state,
      error: action.payload,
    };
  }

  return state;
};

export default commonReducer;
