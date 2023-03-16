import { combineReducers } from "redux";
import commonReducer from "./common/common.reducer";
import jobsReducer from "./jobs/job.reducer";
import userReducer from "./users/user.reducer";

export const rootReducer = combineReducers({
    jobs: jobsReducer,
    common: commonReducer,
    user: userReducer
})