import { createSelector } from 'reselect';

const getFetchedExperiences = state => state.fetchedExperiences;
const getLoadingState = state => state.loadingState;

/**
 * This selector takes the recieved data from our mock-api, and our loading state and serves it out as an object
 * which can be used as props later on.
 */
export const getCategoryProps = createSelector(
	[getFetchedExperiences, getLoadingState],
	(fetchedExperiences, loadingState) => {
		const careerExperiences = fetchedExperiences.career;
		const educationExperiences = fetchedExperiences.education;
		const hobbyExperiences = fetchedExperiences.hobbies;
		
		return {
			careerExperiences,
			educationExperiences,
			hobbyExperiences,
			isLoading: loadingState,
		}
	},
);