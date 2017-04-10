const history = [];

export default (state = [], action) => {
	switch (action.type) {

		case 'ADD_MESSAGE':
			if (action.message.text) {
				history.push(state);
				return [
					action.message,
					...state
				];
			}

			return state;

		case 'DELETE_MESSAGE':
			history.push(state);
			return [
				...state.slice(0, action.index),
				...state.slice(action.index + 1)
			];

		case 'UNDO_MESSAGE':
			if (history.length) {
				return history.pop();
			}

			return state;

		default:
			return state;
	}
}
