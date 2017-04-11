import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';

// Application
import ChatRoom from './components/ChatRoom.solution';
import './index.css';

// Reducers
import rootReducer from './reducers/index.solution';

// Create store from reducer and enable Redux devtools
const store = createStore(rootReducer, compose(

	applyMiddleware(thunkMiddleware),

	// Enable development tools
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
		<div className="App">
			<Provider store={store}>
				<ChatRoom />
			</Provider>
		</div>,
	document.getElementById('root')
);
