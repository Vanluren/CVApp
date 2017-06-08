import { combineReducers } from 'redux';
import loadingState from './ducks/loading.ducks';
import fetchedExperiences from './ducks/get-experiences.ducks';
import currentlySelectedExperience from './commons/card/ducks/card.ducks';

/**
 * We combine our reducers for the final state object
 */
export default combineReducers({
	loadingState,
	fetchedExperiences,
	currentlySelectedExperience,
});