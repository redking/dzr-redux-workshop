const initialState = {
	messages: [],
	color: 'black'
};

// The application reducer. If the state should change, you must return a new object. Use the spread operator
// to do this
export default (state = initialState, action) => {
	switch (action.type) {

		case 'ADD_MESSAGE':
			// Return new state here with new message added to the start, if the message is non-empty

		case 'CHANGE_COLOR':
			// Return state here with color changed

		default:
			return state;
	}
}
