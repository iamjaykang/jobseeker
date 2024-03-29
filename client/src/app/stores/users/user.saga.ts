import { all, call, put, takeLatest } from "typed-redux-saga";
import agent from "../../api/agent";
import { router } from "../../router/Routes";
import { setToken } from "../common/common.action";
import {
  loginFailed,
  LoginLoading,
  loginSuccess,
  setCurrentUserFailed,
  setCurrentUserSuccess,
  signupFailed,
  SignupLoading,
  signupSuccess,
} from "./user.action";
import { USER_ACTION_TYPES } from "./user.types";

export function* getCurrentUser() {
try {
  const user = yield* call(agent.Account.current);

  yield* put(setCurrentUserSuccess(user))
} catch (error) {
  yield* put(setCurrentUserFailed(error as Error))
}
}

export function* loginUser({ payload }: LoginLoading) {
  try {
    const user = yield* call(agent.Account.login, payload);
    yield* put(loginSuccess(user));

    const token = user.token;

    yield* put(setToken(token));

    router.navigate("/");
  } catch (error) {
    const defaultErrorMessage = "Invalid email or password";
    const defaultError = new Error(defaultErrorMessage);
    yield* put(loginFailed(defaultError));
  }
}

export function* signupUser({ payload }: SignupLoading) {
    try {
      const user = yield* call(agent.Account.register, payload);
      yield* put(signupSuccess(user));
  
      const token = user.token;
  
      yield* put(setToken(token));
  
      router.navigate("/");
    } catch (error) {
      yield* put(signupFailed(error as Error));
    }
  }
  

export function* logoutUser() {
  yield* put(setToken(null));
}

export function* onSetCurrentUserLoading() {
  yield* takeLatest(USER_ACTION_TYPES.SET_CURRENT_USER_LOADING, getCurrentUser)
}

export function* onLoginUserLoading() {
  yield* takeLatest(USER_ACTION_TYPES.LOGIN_LOADING, loginUser);
}

export function* onSignupUserLoading() {
    yield* takeLatest(USER_ACTION_TYPES.SIGNUP_LOADING, signupUser);
  }

export function* watchLogoutUser() {
  yield* takeLatest(USER_ACTION_TYPES.LOGOUT_USER, logoutUser);
}

export function* userSaga() {
  yield* all([
    call(onSetCurrentUserLoading),
    call(onLoginUserLoading),
    call(watchLogoutUser),
    call(onSignupUserLoading),
  ]);
}
