import { AnyAction } from "redux";
import { ServerError } from "../../models/serverError.model";
import { setServerError, setToken } from "./common.action";

export interface CommonState {
  readonly error: ServerError;
  readonly token: string | null;
}

const COMMON_INITIAL_STATE = {
  error: null,
  token: null
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

  if (setToken.match(action)) {
    return {
      ...state,
      token: action.payload
    }
  }

  return state;
};

export default commonReducer;
