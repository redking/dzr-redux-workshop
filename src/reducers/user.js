const initialState = {
	loggedIn: false
};

export default (state = initialState, action) => {
	switch (action.type) {

		case 'UPDATE_LOGIN_STATUS':
			return {
				...state,
				loggedIn: action.loggedIn
			};

		default:
			return state;
	}
}
