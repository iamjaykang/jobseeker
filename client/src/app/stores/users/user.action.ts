import { Action, ActionWithPayload } from "../../models/actionTypes.model";
import { User, UserFormValues } from "../../models/user.model";
import { createAction, withMatcher } from "../../utils/reducer.util";
import { USER_ACTION_TYPES } from "./user.types";

export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, User>;

export type LoginLoading = ActionWithPayload<USER_ACTION_TYPES.LOGIN_LOADING, UserFormValues>

export type LoginSuccess = ActionWithPayload<USER_ACTION_TYPES.LOGIN_SUCCESS, User>;

export type LoginFailed = ActionWithPayload<USER_ACTION_TYPES.LOGIN_FAILED, Error>;

export type SignupLoading = ActionWithPayload<USER_ACTION_TYPES.SIGNUP_LOADING, UserFormValues>;

export type SignupSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGNUP_SUCCESS, User>;

export type SignupFailed = Action<USER_ACTION_TYPES.SIGNUP_FAILED>;


// Actions

export const setCurrentUser = withMatcher(
    (user: User): SetCurrentUser =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
)

export const loginLoading = withMatcher(
    (userFormData: UserFormValues): LoginLoading =>
    createAction(USER_ACTION_TYPES.LOGIN_LOADING, userFormData)
)

export const loginSuccess = withMatcher(
    (user: User): LoginSuccess =>
    createAction(USER_ACTION_TYPES.LOGIN_SUCCESS, user)
)

export const loginFailed = withMatcher(
    (error: Error): LoginFailed =>
    createAction(USER_ACTION_TYPES.LOGIN_FAILED, error)
)

export const signupLoading = withMatcher(
    (userFormData: UserFormValues): SignupLoading =>
    createAction(USER_ACTION_TYPES.SIGNUP_LOADING, userFormData)
)

export const signupSuccess = withMatcher(
    (user: User): SignupSuccess =>
    createAction(USER_ACTION_TYPES.SIGNUP_SUCCESS, user)
)

export const signupFailed = withMatcher(
    (): SignupFailed =>
    createAction(USER_ACTION_TYPES.SIGNUP_FAILED)
)

