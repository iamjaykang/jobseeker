import { all, call } from "redux-saga/effects";
import { commonSaga } from "./common/common.saga";
import { jobsSaga } from "./jobPosts/job.saga";
import { userSaga } from "./users/user.saga";

export function* rootSaga() {
  yield all([call(jobsSaga), call(userSaga), call(commonSaga)]);
}
