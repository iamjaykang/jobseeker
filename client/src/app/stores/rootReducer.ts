import { combineReducers } from "redux";
import commonReducer from "./common/common.reducer";
import jobPostsReducer from "./jobPosts/jobPosts.reducer";
import profilesReducer from "./profiles/profile.reducer";
import userReducer from "./users/user.reducer";

export const rootReducer = combineReducers({
    jobPosts: jobPostsReducer,
    profiles: profilesReducer,
    common: commonReducer,
    user: userReducer
})