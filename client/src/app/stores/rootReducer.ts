import { combineReducers } from "redux";
import commonReducer from "./common/common.reducer";
import jobPostsReducer from "./jobPosts/jobPosts.reducer";
import userReducer from "./users/user.reducer";

export const rootReducer = combineReducers({
    jobPosts: jobPostsReducer,
    common: commonReducer,
    user: userReducer
})