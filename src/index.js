import React from 'react';
import ReactDOM from 'react-dom';
// import {createStore} from 'redux';

// Application
import ChatRoom from './components/ChatRoom.ex1';
import './index.css';

// Reducers
// import reducers from './reducers';

// Create store from reducer and enable Redux devtools
/* const store = createStore(
 	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); */

// TODO Replace this with a function that can be passed to `store.subscribe`. See the `exercises/exercise1.md` for details
ReactDOM.render(
	<div className="App">
		<ChatRoom />
	</div>,
	document.getElementById('root')
);
