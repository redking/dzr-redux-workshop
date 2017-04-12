# Exercise 6 - Selectors

Next we'll look at how to calculate derived data using the `reselect` library.

Derived data is anything that results from a calculation performed on the state data, but that isn't necessarily part of the application state itself. `reselect`
lets us calculate this data only if the state has changed, so we expensive computations only when we need them.

Find more about reselect here https://github.com/reactjs/reselect

## Task

Write a selector that returns the number of times the word "Deezer" appears in all messages (don't worry about spaces).
 
## TODO

1. This selector concerns messages, so it should be in the messages reducer. Start by importing `createSelector` from `reselect` at the top of `messages.js`
`import {createSelector} from 'reselect';`

2. Add selectors after the action creators section. There are two types of selectors - simple selectors and memoized selectors.
 
A simple selector takes two arguments, `state` and `props` and returns some part of either. 

For example

```
const getAlbum = (state, props) => state.albums[props.id]; 
```

A memoized selector accepts one or more simple selectors as its first argument, and performs some operation on their return values
in its second argument.

For example:

```
export const getFormattedAlbumData = createSelector(
	getAlbum,
	album => formatDate(album.DATE)
);
```

In this example, you should write the selectors like this

```
const getMessages = state => state.messages;

export const getDeezerCount = createSelect(
	getMessages,
	messages => {
		// Return deezer count here
	}
);
```

3. Import `getMessages` into the `ChatRoom` component and add it to the state in `mapStateToProps`. Display the value as another badge, 
after the login status
```
<span className="badge">{this.props.deezerCount} Deezer references</span>
```
