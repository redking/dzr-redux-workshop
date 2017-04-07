const initialState = {
	messages: [],
	color: 'black'
};

// The application reducer. If the state should change, you must return a new object. Use the spread operator
// to do this
export default (state = initialState, action) => {
	switch (action.type) {

		case 'ADD_MESSAGE':
			if (action.message.text) {
				const messages = state.messages.slice();
				messages.unshift(action.message);

				return {
					...state,
					messages
				};
			}

			return state;

		case 'CHANGE_COLOR':
			return {
				...state,
				color: action.color
			};

		default:
			return state;
	}
}
