import { combineReducers } from "redux";
import userGeneralInfoReducer from "./userGeneralInfoReducer";
import repositoryReducer from "./repositoryReducer";

export default combineReducers({
	userGeneralInfo: userGeneralInfoReducer,
	repositories: repositoryReducer
});
