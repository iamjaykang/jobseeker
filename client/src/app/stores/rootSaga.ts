import { all, call } from "redux-saga/effects";
import { jobsSaga } from "./jobs/job.saga";

export function* rootSaga() {
  yield all([call(jobsSaga)]);
}
