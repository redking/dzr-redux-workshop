# Exercise 5 - React and Redux

## Task

In this exercise we'll migrate what we've already done to use `react-redux`. There's no "exercise" as such - just follow
these steps

### Step 1 - Inject the store into our component using `<Provider>`

First, we have to change the way in which the store is used by the application

1. In `src/index.js`, import `Provider` from `react-redux`
`import {Provider} from 'react-redux';`

2. Copy all the attributes from `<ChatRoom>` into a text file somewhere, along with the `_fetch` and `_fetchStatus` functions - we'll use these later

3. Replace the `render` function with a simple call to `ReactDOM.render`, wrapping your application in a `<Provider>` tag.

```
ReactDOM.render(
	<div className="App">
		<Provider store={store}>
			<ChatRoom />
		</Provider>
	</div>,
	document.getElementById('root')
);
```

4. Remove the `store.subscribe` call from the bottom of the file.

### Step 2 - Add the action creators to the reducer files

We'll be using the [Ducks layout](https://github.com/erikras/ducks-modular-redux) for our reducers, meaning that the same file
will contain our constants, action creators and, as the default export, the reducer.

Open the file `src/reducers/color.js` and make the following changes:

1. Add the constant CHANGE_COLOR to the top of the file, namespaced to the reducer
`const CHANGE_COLOR = '@deezer/reducers/color/CHANGE_COLOR';`

2. Use this constant in the `switch` statement too

3. Add the `onChangeColor` action creator under the reducer. Write it like so 

```
export const changeColor = color => ({
	type: CHANGE_COLOR,
	color
});
```

Repeat this for the other reducers

- `onAddMessage`, `onDeleteMessage` and `onUndoMessage` should be added to the `messages.js` reducer, and renamed `addMessage`, `deleteMessage` and `undoMessage`
- The `onFetchStatus` action creator should be added  to `user.js` and renamed `fetchStatus`. It's an asynchronous action, so you can write it like this

```
export const fetchStatus = payload => dispatch => {
	_fetchStatus(loggedIn => dispatch({type: UPDATE_LOGIN_STATUS, loggedIn}));
};
```

### Step 3 - Turn the `ChatRoom` component into a container component

A container component is one that connects to the Redux store, passing props and actions down to simpler child components. In this example, we 
make `ChatRoom` our only container component; in a complex app, you might have many nested container components. In general though, it's better
to keep them small in number.

To convert `ChatRoom`, complete the following steps

1. Import `connect` from `react-redux` at the top of the file
`import {connect} from 'react-redux';`

2. Next import all the action creators we need to use in `ChatRoom` or its child components
```
// Actions
import {addMessage, deleteMessage, undoMessage} from '../reducers/messages';
import {changeColor} from '../reducers/color';
import {fetchStatus} from '../reducers/user';
```

3. At the bottom of the file, before the export, add a function called `mapStateToProps`, that will map our Redux application state
to the components props

```
const mapStateToProps = state => ({
	color: state.color,
	messages: state.messages,
	user: state.user
});
```

4. Next, we need to modify the default export, using `connect`, to hook everything up.
`export default connect(mapStateToProps, {addMessage, deleteMessage, undoMessage, changeColor, fetchStatus})(ChatRoom);`

`connect` is called with two arguments
1. The `mapStateToProps` function
2. A object that maps our action creators to props.

This returns a function that we call with `ChatRoom` as its single argument.
 
The second argument passed to `connect` is important to understand. At the top of the file, we imported our action creators as
plain functions. We pass these to `connect` where they are hooked up to our component and returned as props of the same name on the component. This
means that in our code we must use `this.props.addMessage` rather than the `addMessage` import, as the `addMessage` import is just a plain function that
 hasn't been activated by the call to `connect`
 
5. Finally, change the references to the action creators in the existing code (from `this.props.onAddMessage` to `this.props.onAddMessage`, for example).

## Solution

For an example solution, open branch `ex5-solution` on GitHub.
