import {createSelector} from 'reselect';

const ADD_MESSAGE = '@deezer/reducers/messages/ADD_MESSAGE';
const DELETE_MESSAGE = '@deezer/reducers/messages/DELETE_MESSAGE';
const UNDO_MESSAGE = '@deezer/reducers/messages/UNDO_MESSAGE';

const history = [];

export default (state = [], action) => {
	switch (action.type) {

		case ADD_MESSAGE:
			if (action.message.text) {
				history.push(state);
				return [
					action.message,
					...state
				];
			}

			return state;

		case DELETE_MESSAGE:
			history.push(state);
			return [
				...state.slice(0, action.index),
				...state.slice(action.index + 1)
			];

		case UNDO_MESSAGE:
			if (history.length) {
				return history.pop();
			}

			return state;

		default:
			return state;
	}
}

//
// Action creators
//

export const addMessage = message => ({
	type: ADD_MESSAGE,
	message
});

export const deleteMessage = index => ({
	type: DELETE_MESSAGE,
	index
});

export const undoMessage = () => ({
	type: UNDO_MESSAGE
});

//
// Selectors
//

const getMessages = state => state.messages;

export const getDeezerCount = createSelector(
	getMessages,
	messages => messages.reduce((total, message) => total + (message.text.toLowerCase().match(/deezer/g) || []).length, 0)
);
