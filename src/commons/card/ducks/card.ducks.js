const SELECT_EXPERIENCE = 'SELECT_EXPERIENCE';
const DEFAULT_STATE = null;

export const selectExperience = payload => ({
	type: SELECT_EXPERIENCE,
	payload,
});


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
