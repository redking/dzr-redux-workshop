const initialState = {
	messages: [],
	color: 'black'
};

// The application reducer. If the state should change, you must return a new object. Use the spread operator
// to do this
export default (state = initialState, action) => {
	switch (action.type) {

		case 'ADD_MESSAGE':
			// If the message text is non-empty, return a new state object here with the message added to the start.
			// If the message text is empty, return the existing state unaltered.

		case 'CHANGE_COLOR':
			// Return state here with color changed

		default:
			return state;
	}
}
