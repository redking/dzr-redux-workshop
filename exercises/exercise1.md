# Exercise 1 - Redux State and Action Creators

## Task

Migrate the Chat Room application to use Redux, introducing an application-level store to hold state, where appropriate.

The application state should have the following shape:

```
{
 messages: [],
 color: 'black'
}
```

Examine the component `src/components/ChatRoom.js` and decide which parts of state should be application-level and which should stay
in the component. 

Change, where appropriate, calls to `setState` with calls to Redux actions (called "action creators")

## Tips

Start by looking at [this example from the official Redux docs](https://github.com/reactjs/redux/tree/master/examples/counter):

- In the example, look at the file `src/index.js`. Examine how the store is created and how it subscribes to changes
- In the same file, note how the store state is retrieved and how this is passed as props to the component

Next, in our own project, look at the following files:

1. `src/index.js` (Uncomment the commented lines). 
- How do you setup a callback function to pass to `store.subscribe`?
- What state values should you pass to the `ChatRoom` component as props? 

2. `src/components/ChatRoom.js` 
- What calls to `setState` should be replaced with action creator calls?

3. `src/reducers/index.js`
- Remember that you must return a new object whenever the state has changed, as you can't change the state directly. 

So, for example, this is incorrect:

```
state.users.push(user);
return state;
```

Instead you should use the spread operator:
 
```
return {
	...state,
	users: [...state.users, user]
};
```

Alternatively, you could use `Object.assign` with `Array.slice`:

```
const users = state.users.slice();
users.push(user);
return Object.assign({}, state, {users});
```

Once the store is setup, you can open the Chrome console and select the Redux tab to inspect state changes using Redux Devtools.

## TODO 

Since we return a new object every time, how would you implement `shouldComponentUpdate` in the `ChatRoom` component?

## Solution

Switch to the branch `ex1-solution` on GitHub and look at the files `src/index.js`, `src/components/ChatRoom.js` and `src/reducers/index.js` (or stash your changes and checkout the solution branch)

Note that in this example Redux *adds* complexity, rather than simplifying the application. This is because the 
example is intentionally naive and only for illustrative purposes; in the real world, Redux would be overkill for such an application.
