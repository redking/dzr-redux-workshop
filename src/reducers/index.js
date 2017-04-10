import {combineReducers} from 'redux';

// reducers
import messages from './messages';
import color from './color';

export default combineReducers({
	messages,
	color
});
