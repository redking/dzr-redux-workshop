# Exercise 3 - Combining Reducers

We used the spread operator in the previous exercises to add or delete state. This can get complicated when the state has 
deeply nested objects. This is why the Redux docs recommend that you split your state into separate files which each handle a 
particular "slice" of the application state. These slices are recombined using `combineReducers`.

## Task

Create two new reducers that manage the messages and color parts of the application state, and combine them using `combineReducers`.

## Tips

First, take a look at the reducers in the Todo example 

https://github.com/reactjs/redux/tree/master/examples/todos/src/reducers

- Create two new files in the `reducers` folder - `messages.js` and `color.js`. These reducers should handle, 
respectively, the messages array and the color of the site header. Therefore the initial state of `messages.js` should be an
empty array; for `color.js` it should be the string `black`.
 
- In `reducers/index.js`, import `combineReducers` from the Redux package, and use it to combine your two new reducers into a single
application state

- In the `messages.js` reducer, store every last application state in a `history` array. Use this to implement an "undo" button, allowing you
to return to the previous state after every add or delete

## Solution

Switch to the branch `ex3-solution` on GitHub (or stash your changes and merge it into your master)
