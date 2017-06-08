import { createSelector } from 'reselect';

const getFetchedExperiences = state => state.fetchedExperiences;
const getLoadingState = state => state.loadingState;

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