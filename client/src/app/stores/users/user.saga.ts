import { all, call, put, takeLatest } from "typed-redux-saga";
import agent from "../../api/agent";
import { router } from "../../router/Routes";
import { setToken } from "../common/common.action";
import { loginFailed, LoginLoading, loginSuccess } from "./user.action";
import { USER_ACTION_TYPES } from "./user.types";

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

export function* onLoadingUserLoading() {
  yield* takeLatest(USER_ACTION_TYPES.LOGIN_LOADING, loginUser);
}

export function* userSaga() {
  yield* all([call(onLoadingUserLoading)]);
}
