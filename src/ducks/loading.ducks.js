const DEFAULT_STATE = false;
const IS_LOADING_STATUS_CHANGE = 'IS_LOADING_STATUS_CHANGE';

export const setIsLoading = payload => ({
	type: IS_LOADING_STATUS_CHANGE,
	payload,
});

//This reducer listens to the action types and changes the state
const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case IS_LOADING_STATUS_CHANGE: {
			return action.payload;
		}
		default:
			return state;
	}
};

export default reducer;
