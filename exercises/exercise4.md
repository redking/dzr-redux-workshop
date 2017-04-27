# Exercise 4 - Asynchronous Actions
 
## Task

Implement a fake asynchronous process that returns the user's login status (always returning `true`).

## Tips

A normal action creator is a simple function that calls `store.dispatch` e.g.

```
onDoSomething={() => store.dispatch({type: 'ACTION', value})}
```

An asynchronous action is any action that returns a function. This function 
takes the single argument `dispatch`, which you can use just like `store.dispatch` to fire an action.

e.g.

```
function _doSomething() {
	return dispatch => {
		_someAsynchronousProcess(value => dispatch({type: 'UPDATE_LOGIN_STATUS', loggedIn}));
	}
}

// the action creator 
onDoSomething={() => store.dispatch(_doSomething())}
```

Redux does not support async actions by default - we have to use the `redux-thunk` middleware for that. We'll find out about
middleware later; for the moment, open `src/index.js` and make the following changes

1. Import `redux-thunk`
`import thunkMiddleware from 'redux-thunk';`

2. Import `applyMiddleware` and `compose` from redux
`import {createStore, applyMiddleware, compose} from 'redux';`

3. Create the store in the following way
```
const store = createStore(rootReducer, compose(

	applyMiddleware(thunkMiddleware),

	// Enable development tools
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
```

4. Create a new reducer `user.js` with the following initial state: 

```
{
 loggedIn: false
}
```

5. Add the following private function to  `src/index.js`:

```
function _fetchStatus(done) {
	setTimeout(() => {
		done(true);
	}, 2000);
}
```

This represents the fake asynchronous process

6. Pass a new action creator called `onFetchStatus` to `ChatRoom` that returns a function, like in the above examples, and calls `_fetchStatus`, dispatching the result
to the action `UPDATE_LOGIN_STATUS`

7. The `onFetchStatus` action creator we passed to `ChatRoom` should be invoked in the `componentWillMount` callback

8. Represent the user status by adding a badge to the `ChatRoom` header

```
<span className="badge">{this.props.user.loggedIn ? 'Logged in' : 'Logged out'}</span>
```

## Solution

Switch to branch `ex4-solution` on GitHub (or stash your changes and checkout the solution branch).