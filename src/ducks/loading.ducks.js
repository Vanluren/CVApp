const DEFAULT_STATE = false;
const IS_LOADING_STATUSCHANGE = 'IS_LOADING_STATUSCHANGE';

export const setIsLoading = payload => ({
	type: IS_LOADING_STATUSCHANGE,
	payload,
});

//This reducer listens to the action types and changes the state
const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case IS_LOADING_STATUSCHANGE: {
			return action.payload;
		}
		default:
			return state;
	}
};

export default reducer;
