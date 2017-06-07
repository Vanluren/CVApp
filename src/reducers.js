import { combineReducers } from 'redux';
import currentlySelectedExperience from './commons/experience-list/ducks/experience-list.ducks';
import loadingState from './ducks/loading.ducks';
import fetchedExperiences from './ducks/get-experiences.ducks';
import shownExperiences from './main-view/ducks/main-view.ducks';

export default combineReducers({
	currentlySelectedExperience,
	loadingState,
	fetchedExperiences,
	shownExperiences,
});