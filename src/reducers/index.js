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
				return {
					...state,
					messages: [action.message, ...state.messages]
				};
			}

			return state;

		case 'DELETE_MESSAGE':
			return {
				...state,
				messages: [
					...state.messages.slice(0, action.index),
					...state.messages.slice(action.index + 1)
				]
			};

		// Without using the spread operator, you could also do it this way
		// let messages = state.messages.slice(0);
		// messages.splice(action.index, 1);
		//
		// return {
		// 	...state,
		// 	messages
		// };

		case 'CHANGE_COLOR':
			return {
				...state,
				color: action.color
			};

		default:
			return state;
	}
}
