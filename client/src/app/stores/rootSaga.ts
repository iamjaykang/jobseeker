import { all, call } from "redux-saga/effects";
import { commonSaga } from "./common/common.saga";
import { jobPostsSaga } from "./jobPosts/jobPosts.saga";
import { profilesSaga } from "./profiles/profile.saga";
import { userSaga } from "./users/user.saga";

export function* rootSaga() {
  yield all([
    call(jobPostsSaga),
    call(userSaga),
    call(commonSaga),
    call(profilesSaga),
  ]);
}
