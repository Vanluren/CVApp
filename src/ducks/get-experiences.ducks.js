const LOAD_EXPERIENCES = 'LOAD_EXPERIENCES';
const DEFAULT_STATE = {};

/**
 * A general action and reducer pair for loading the fetched experiences into the state object
 * @param experiences
 */
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
