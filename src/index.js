import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

// Application
import ChatRoom from './components/ChatRoom';
import './index.css';

// Reducers
import reducers from './reducers';

// Create store from reducer and enable Redux devtools
const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const render = () => {

	const state = store.getState();

	ReactDOM.render(
		<div className="App">
			<ChatRoom {...state}
				onAddMessage={message => store.dispatch({ type: 'ADD_MESSAGE', message})}
				onChangeColor={color => store.dispatch({ type: 'CHANGE_COLOR', color})} />
		</div>,
		document.getElementById('root')
	);
};

render();
store.subscribe(render);
