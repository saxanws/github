import _ from "lodash";
import { FETCH_REPOSITORIES } from "../actions/types";

const INITIAL_STATE = {
	repositories: null,
	seletedRepository: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_REPOSITORIES:
			return { ...state, repositories: _.mapKeys(action.payload, "id") };
		default:
			return state;
	}
};
