import {combineReducers} from 'redux';

// reducers
import messages from './messages';
import color from './color';
import user from './user';

export default combineReducers({
	messages,
	color,
	user
});
