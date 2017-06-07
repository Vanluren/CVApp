const DEFAULT_STATE = [];
const SHOWN_EXPERIENCES = 'SHOWN_EXPERIENCES';

export const setShownExperiences = experiences => ({
	type: SHOWN_EXPERIENCES,
	payload: experiences,
});

const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type){
		case SHOWN_EXPERIENCES:{
			return action.payload;
		}
		default:
			return state;
	}
};

export default reducer;