# Exercise 2 - Deleting Messages in State

## Task

Open the `Message.js` component and add the following before the `<aside>` tag
 
```
<button className="pull-left" type="button" onClick={() => this.props.onDeleteMessage(this.props.index)}>
 <i className="fa fa-trash" />
</button>
```

Implement the action creator, allowing you to delete any message in the list. 

## Tips

You'll have to make changes to the following files:

1. `src/index.js` 
- Add a new prop `onDeleteMessage` on `ChatRoom`, which will dispatch the corresponding action on the store.

2. `src/components/ChatRoom.js`
- You'll have to pass the `onDeleteMessage` action callback to `Messages`

3. `src/components/Messages.js`
- Pass `onDeleteMessage` and the message index to `Message`

4. `src/reducers/index.js`
- Add a new case to the reducer that deletes the message. You'll need to know the message index. 
- Don't forget to return a new object - you can't modify the state directly. Use the spread operator, if you can, or alternatively
use Array methods and `Object.assign`

## Solution

Switch to the branch `ex2-solution` on GitHub (or stash your changes and merge it into your master).
