# Exercise 1 - Simple Redux

## Description

Run `npm start` and you'll see a simple React app for adding two numbers together (the same as the app we looked at 
during the Unit Testing workshop).

The input field changes color depending on the total value - green for greater than zero, red for less than zero, default color otherwise.

All this is held in component state, for the moment.

## Task

In this exercise, you'll be implementing a simple Redux application, introducing an application-level 
store to hold state, where appropriate. The application state should have the following shape

```
{
 color: 'black',
 total: 0
}
```

## Tips

Take a look at this example from the official Redux docs https://github.com/reactjs/redux/tree/master/examples/counter and note
the following 

- In the file `src/index.js`, look at how the store is created and how we subscribe to changes
- In the same file, note how we retrieve the store state and how this is passed as props to the component

## TODO

Once you've finished the implementation, try the following:

1. Comment out the `store.subscribe` call in `src/index.js` and reload the application. Use the Redux dev tools to look at the application
state. Note that interacting with the app will change the application state, but these changes are never passed down as props to 
the component

2. In your reducer, try changing the `switch` cases so that the state is mutated directly, rather than returning a new object. What happens?

## Solution

Switch to the branch `solutions` and look at the files `src/index.js`, `src/exercise1/App.js' and `src/exercise1/reducer.js` 

Note that it looks as though Redux *adds* complexity here, rather than simplifying the application. This is because the 
example is intentionally simple and only for illustrative purposes; in the real world, Redux would be overkill for such an application.
