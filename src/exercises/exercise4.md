# Exercise 4 - Asynchronous Actions


In this exercise, we'll implement a simple asynchronous action.
 
A normal action is a simple function that calls `store.dispatch`. An asynchronous action is any action that returns a function. This function 
takes the single argument `dispatch`, which you can use just like `store.dispatch` to fire an action.

For example, this is a normal action

```
onDoSomething={() => store.dispatch({type: 'ACTION', value})}
```

For an asynchronous process, we instead dispatch a function that returns a function

```
function _doSomething() {
	return dispatch => {
		_someAsynchronousProcess(value => {
			return dispatch({type: 'UPDATE_LOGIN_STATUS', loggedIn});
		});
	}
}

onDoSomething={() => store.dispatch(_doSomething())}
```

Redux does not support async actions by default - we have to use the `redux-thunk` middleware for that. We'll find out about
middleware later; for the moment, open `src/index.js` and make the following changes

1. Import `redux-thunk`
`import thunkMiddleware from 'redux-thunk';`

2. Import applyMiddleware and compose from redux
`import {createStore, applyMiddleware, compose} from 'redux';`

3. Create the store in the following way
```
const store = createStore(rootReducer, compose(

	applyMiddleware(thunkMiddleware),

	// Enable development tools
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
```
 
## Task

Implement a fake asynchronous process that returns the user's login status (always returning `true`).

1. Create a new reducer `user.js` with the following initial state: 

```
{
 loggedIn: false
}
```

2. Add the following private function to  `src/index.js`:

```
function _fetchStatus(done) {
	setTimeout(() => {
		done(true);
	}, 2000);
}
```

3. Pass a new action to `ChatRoom` that returns a function, like in the above examples, and calls `_fetchStatus`, dispatching the result
to the action `UPDATE_LOGIN_STATUS`

4. The action should be invoked after `ChatRoom` has mounted

5. Represent the user status by adding a badge to the `ChatRoom` header ("Logged in" if true, "Logged out" otherwise)

```
<span className="badge">{user.loggedIn ? 'Logged in' : 'Logged out'}</span>
```

## Solution

Switch to branch `ex4-solution`