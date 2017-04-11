const CHANGE_COLOR = '@deezer/reducers/color/CHANGE_COLOR';

export default (state = 'black', action) => {
	switch (action.type) {
		case CHANGE_COLOR:
			return action.color;

		default:
			return state;
	}
}

//
// Action creators
//

export const changeColor = color => ({
	type: CHANGE_COLOR,
	color
});
