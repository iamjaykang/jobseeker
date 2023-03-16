import { call, takeLatest } from "typed-redux-saga";
import { COMMON_ACTION_TYPES } from "./common.types";
import { SetToken } from "./common.action";

function* saveTokenToLocalStorage({ payload }: SetToken) {
  if (payload) {
    yield* call([localStorage, "setItem"], "jwt", payload);
  } else {
    yield* call([localStorage, "removeItem"], "jwt");
  }
}

export function* watchSetToken() {
  yield* takeLatest(COMMON_ACTION_TYPES.SET_TOKEN, saveTokenToLocalStorage);
}

export function* commonSaga() {
  yield* call(watchSetToken);
}
