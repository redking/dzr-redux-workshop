# Exercise 1 - Redux State and Actions

Migrate the application to use Redux, introducing an application-level store to hold state, where appropriate. The application 
state should have the following shape:

```
{
 color: 'black',
 total: 0
}
```

Examine the component `src/components/App.js` and decided which parts of state should be application-level and which should stay
in the component. Change, where appropriate, calls to `setState` with calls to action creators.

## Tips

Start by looking at [this example from the official Redux docs](https://github.com/reactjs/redux/tree/master/examples/counter) and note
the following 

- In the file `src/index.js`, look at how the store is created and how we subscribe to changes
- In the same file, note how we retrieve the store state and how this is passed as props to the component

Next, in this project, look at the following files:

1. `src/index.js` - Uncomment the commented lines. 
How do you setup a callback function to pass to `store.subscribe`? What state values should you pass to the `App` component? 

2. `src/components/App.js` - What calls to `setState` should be replaced with action creator calls?

3. `src/reducers/index.js` - How do you change the state in response to actions such that a new object is returned each time?

Once the store is setup, you can open the Chrome console and select the Redux tab to inspect state changes.

## Solution

Switch to the branch `exercise1-solution` and look at the files `src/index.js`, `src/components/App.js` and `src/reducers/index.js` 

Note that in this example Redux *adds* complexity, rather than simplifying the application. This is because the 
example is intentionally simple and only for illustrative purposes; in the real world, Redux would be overkill for such an application.
