import { setIsLoading } from './ducks/loading.ducks';
import { addLoadedExperiences } from './ducks/get-experiences.ducks';
import { getExperiencesFromAPI } from './util/api/index';

/**
 * The initial action fired when the app is about to render. It sets the loading
 * state to loading, fires a GET request to our mock-data-api, loads the recieved data into our state
 * object and sets the loading state to false.
 */
export const getExperiences = () => async dispatch => {
	dispatch(setIsLoading(true));
	
	const experiences = await getExperiencesFromAPI();
	
	dispatch(addLoadedExperiences(experiences));
	
	dispatch(setIsLoading(false));
}
