
const SELECT_EXPERIENCE = 'SELECT_EXPERIENCE';
const DEFAULT_STATE = null;

/**
 * action for selecting the experience, on which the user presses
 * @param payload
 */
export const selectExperience = payload => ({
	type: SELECT_EXPERIENCE,
	payload,
});

/**
 * reducer for the the action above, returns the payload
 * @param state
 * @param action
 * @returns {*}
 */
const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SELECT_EXPERIENCE: {
			return action.payload;
		}
		default:
			return state;
	}
};

export default reducer;
