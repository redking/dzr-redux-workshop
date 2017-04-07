const initialState = {
	messages: [],
	color: 'black'
};

export default (state = initialState, action) => {
	switch (action.type) {

		case 'ADD_MESSAGE':
			if (action.message.text) {
				return {
					...state,
					messages: [action.message, ...state.messages]
				};

				// Without using the spread operator, you could also write it like so:
				//
				// const messages = state.messages.slice();
				// messages.unshift(action.message);
				//
				// return {
				// 		...state,
				// 		messages
				// };
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
