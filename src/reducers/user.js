const UPDATE_LOGIN_STATUS = '@deezer/reducers/user/UPDATE_LOGIN_STATUS';

const initialState = {
	loggedIn: false
};

export default (state = initialState, action) => {
	switch (action.type) {

		case UPDATE_LOGIN_STATUS:
			return {
				...state,
				loggedIn: action.loggedIn
			};

		default:
			return state;
	}
}

//
// Action creators
//

// Fake async process
function _fetchStatus(done) {
	setTimeout(() => {
		done(true);
	}, 2000);
}

export const fetchStatus = payload => dispatch => {
	_fetchStatus(loggedIn => dispatch({type: UPDATE_LOGIN_STATUS, loggedIn}));
};
