import { setIsLoading } from './ducks/loading.ducks';
import { addLoadedExperiences } from './ducks/get-experiences.ducks';
import { getExperiencesFromAPI } from './util/api/index';

export const getExperiences = () => async dispatch => {
	dispatch(setIsLoading(true));
	
	const experiences = await getExperiencesFromAPI();
	
	dispatch(addLoadedExperiences(experiences));
	
	dispatch(setIsLoading(false));
}
