import { combineReducers } from 'redux';
import selectExperienceReducer from './commons/experience-list/ducks/experience-list.ducks';
import loadingStateReducer from './ducks/loading.ducks';
import getExperiencesReducer from './ducks/get-experiences.ducks';

export default combineReducers({
	selectExperienceReducer,
	getExperiencesReducer,
	loadingStateReducer,
});