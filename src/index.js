import React from 'react';
import ReactDOM from 'react-dom';
// import {createStore} from 'redux';

// Application
import ChatRoom from './components/ChatRoom';
// import rootReducer from './reducers';
import './index.css';

// Create store from reducer and enable Redux devtools
/* const store = createStore(
 	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); */

// TODO Replace this with a function that can be passed to `store.subscribe`
ReactDOM.render(
	<div className="App">
		<ChatRoom />
	</div>,
	document.getElementById('root')
);
