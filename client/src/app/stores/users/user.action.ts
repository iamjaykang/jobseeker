import { Action, ActionWithPayload } from "../../models/actionTypes.model";
import { User, UserFormValues } from "../../models/user.model";
import { createAction, withMatcher } from "../../utils/reducer.util";
import { USER_ACTION_TYPES } from "./user.types";

export type SetCurrentUserLoading = Action<USER_ACTION_TYPES.SET_CURRENT_USER_LOADING>;

export type SetCurrentUserSuccess = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER_SUCCESS, User>;

export type SetCurrentUserFailed = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER_FAILED, Error>;

export type LoginLoading = ActionWithPayload<USER_ACTION_TYPES.LOGIN_LOADING, UserFormValues>

export type LoginSuccess = ActionWithPayload<USER_ACTION_TYPES.LOGIN_SUCCESS, User>;

export type LoginFailed = ActionWithPayload<USER_ACTION_TYPES.LOGIN_FAILED, Error>;

export type SignupLoading = ActionWithPayload<USER_ACTION_TYPES.SIGNUP_LOADING, UserFormValues>;

export type SignupSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGNUP_SUCCESS, User>;

export type SignupFailed = ActionWithPayload<USER_ACTION_TYPES.SIGNUP_FAILED, Error>;

export type LogoutUser = Action<USER_ACTION_TYPES.LOGOUT_USER>;


// Actions

export const setCurrentUserLoading = withMatcher(
    (): SetCurrentUserLoading =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER_LOADING)
)

export const setCurrentUserSuccess = withMatcher(
    (user: User): SetCurrentUserSuccess =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER_SUCCESS, user)
)
export const setCurrentUserFailed = withMatcher(
    (error:Error): SetCurrentUserFailed =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER_FAILED, error)
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
    (error: Error): SignupFailed =>
    createAction(USER_ACTION_TYPES.SIGNUP_FAILED, error)
)

export const logoutUser = withMatcher(
    (): LogoutUser =>
    createAction(USER_ACTION_TYPES.LOGOUT_USER)
)

