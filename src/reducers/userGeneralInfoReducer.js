import { FETCH_USER, UPDATE_SEARCH_KEY } from "../actions/types";

const INITIAL_STATE = {
	username: null,
	login: null,
	id: null,
	name: null,
	location: null,
	avatar_url: null,
	email: null,
	bio: null,
	public_repos: 0,
	followers: 0,
	following: 0,
	company: null,
	blog: null,
	joined: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UPDATE_SEARCH_KEY:
			return { ...state, username: action.payload };
		case FETCH_USER:
			return {
				...state,
				login: action.payload.login,
				id: action.payload.id,
				name: action.payload.name,
				location: action.payload.location,
				avatar_url: action.payload.avatar_url,
				email: action.payload.email,
				bio: action.payload.bio,
				public_repos: action.payload.public_repos,
				followers: action.payload.followers,
				following: action.payload.following,
				company: action.payload.company,
				blog: action.payload.blog,
				joined: action.payload.created_at
			};
		default:
			return state;
	}
};
