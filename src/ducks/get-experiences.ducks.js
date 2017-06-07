const LOAD_EXPERIENCES = 'LOAD_EXPERIENCES';

const DEFAULT_STATE = {};

export const addLoadedExperiences = experiences => ({
	type: LOAD_EXPERIENCES,
	payload: experiences,
});

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
