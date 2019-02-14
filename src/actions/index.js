import github from "../apis/github";
import {
	UPDATE_SEARCH_KEY,
	FETCH_USER,
	FETCH_REPOSITORIES,
	FETCH_FOLLOWERS,
	FETCH_FOLLOWINGS,
	FETCH_ORGANIZATIONS,
	SELECT_REPOSITORY
} from "./types";
import history from "../history";

export const updateSearchKey = username => {
	return {
		type: UPDATE_SEARCH_KEY,
		payload: username
	};
};

export const fetchUser = () => async (dispatch, getState) => {
	const { username } = getState().userGeneralInfo;

	const response = await github.get(`/users/${username}`);

	const {
		login,
		id,
		avatar_url,
		name,
		location,
		email,
		bio,
		public_repos,
		followers,
		following,
		company,
		blog,
		created_at
	} = response.data;

	dispatch({
		type: FETCH_USER,
		payload: {
			login,
			id,
			name,
			location,
			avatar_url,
			email,
			bio,
			public_repos,
			followers,
			following,
			company,
			blog,
			created_at
		}
	});

	history.push(`/user/${login}/repos`);
};

export const fetchRepositories = () => async (dispatch, getState) => {
	const { username } = getState().userGeneralInfo;

	const response = await github.get(`/users/${username}/repos?per_page=250`);

	dispatch({ type: FETCH_REPOSITORIES, payload: response.data });
};

export const fetchOrganizations = () => async (dispatch, getState) => {
	const { username } = getState().userGeneralInfo;

	const response = await github.get(`/users/${username}/orgs`);

	dispatch({ type: FETCH_ORGANIZATIONS, payload: response.data });
};

export const fetchFollowers = () => async (dispatch, getState) => {
	const { username } = getState().userGeneralInfo;

	const response = await github.get(`/users/${username}/followers`);

	dispatch({ type: FETCH_FOLLOWERS, payload: response.data });
};

export const fetchFollowings = () => async (dispatch, getState) => {
	const { username } = getState().userGeneralInfo;

	const response = await github.get(`/users/${username}/followings`);

	dispatch({ type: FETCH_FOLLOWINGS, payload: response.data });
};

// export const selectRepository =
