const LOAD_EXPERIENCES = 'LOAD_EXPERIENCES';

const DEFAULT_STATE = {};

export const addLoadedExperiences = experiences => ({
	type: LOAD_EXPERIENCES,
	payload: experiences,
});

//This reducer listens to the action types and changes the state
const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case LOAD_EXPERIENCES: {
			return { ...state, ...action.payload };
		}
		default:
			return state;
	}
};

export default reducer;
