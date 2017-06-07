const SELECT_PRODUCT = 'SELECT_PRODUCT';
const DEFAULT_STATE = null;
const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SELECT_PRODUCT: {
			return action.payload;
		}
		default:
			return state;
	}
};

export const selectProduct = payload => ({
	type: SELECT_PRODUCT,
	payload,
});

export default reducer;
