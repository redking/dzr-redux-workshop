const initialState = {
	total: 0,
	color: 'black'
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_COLOR':
			// Return state here with color changed

		case 'CHANGE_TOTAL':
			// Return state here with total changed

		default:
			return state;
	}
}
