export default (state = 'black', action) => {
	switch (action.type) {
		case 'CHANGE_COLOR':
			return action.color;

		default:
			return state;
	}
}
