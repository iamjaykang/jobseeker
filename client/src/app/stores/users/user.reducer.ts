import { AnyAction } from "redux";
import { User } from "../../models/user.model";
import { loginFailed, loginLoading, loginSuccess } from "./user.action";

export interface UserState {
    isLoading: boolean;
    user: User
    error: Error | null;
}

const USER_INITIAL_STATE = {
    isLoading: false,
    user: null,
}

const userReducer = (
    state = USER_INITIAL_STATE,
    action = {} as AnyAction
) => {
    if (loginLoading.match(action)) {
        return {
            ...state,
            isLoading: true,
            user: null,
            error:null
        }
    }

    if (loginSuccess.match(action)) {
        return {
            ...state,
            isLoading: false,
            user: action.payload,
            error:null
        }
    }

    if (loginFailed.match(action)) {
        return {
            ...state,
            isLoading: false,
            user: null,
            error: action.payload
        }
    }

    return state
}

export default userReducer;