import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';

// Application
import ChatRoom from './components/ChatRoom';
import './index.css';

// Reducers
import rootReducer from './reducers/index';

// Create store from reducer and enable Redux devtools
const store = createStore(rootReducer, compose(

	applyMiddleware(thunkMiddleware),

	// Enable development tools
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

// Fake async process
function _fetchStatus(done) {
	setTimeout(() => {
		done(true);
	}, 2000);
}

const _fetch = () => dispatch => {
	_fetchStatus(loggedIn => dispatch({type: 'UPDATE_LOGIN_STATUS', loggedIn}))
};

const render = () => {

	const state = store.getState();

	ReactDOM.render(
		<div className="App">
			<ChatRoom {...state}
				onFetchStatus={() => store.dispatch(_fetch())}
				onAddMessage={message => store.dispatch({ type: 'ADD_MESSAGE', message})}
				onDeleteMessage={index => store.dispatch({ type: 'DELETE_MESSAGE', index})}
				onUndoMessage={() => store.dispatch({ type: 'UNDO_MESSAGE'})}
				onChangeColor={color => store.dispatch({ type: 'CHANGE_COLOR', color})} />
		</div>,
		document.getElementById('root')
	);
};

render();
store.subscribe(render);
