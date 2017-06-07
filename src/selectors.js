import {createSelector} from 'reselect';

const getFetchedExperiences = state => state.fetchedExperiences;
const getLoadingState = state => state.loadingState;

export const getMainViewProps = createSelector(
	[getLoadingState],
	(loadingState) => {
		return {
			isLoading: loadingState,
		}
	},
);