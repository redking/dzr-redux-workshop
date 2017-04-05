import React from 'react';
import ReactDOM from 'react-dom';
// import {createStore} from 'redux';

// Application
import App from './exercise1/App';
// import reducer from './exercise1/reducer';
import './index.css';

// Create store from reducer and enable Redux devtools
/* const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); */

// TODO Replace this with a function that can be passed to `store.subscribe`
ReactDOM.render(
	<div className="App">
		<App />
	</div>,
	document.getElementById('root')
);
