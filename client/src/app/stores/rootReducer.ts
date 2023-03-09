import { combineReducers } from "redux";
import jobsReducer from "./jobs/job.reducer";

export const rootReducer = combineReducers({
    jobs: jobsReducer
})