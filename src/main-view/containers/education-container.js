import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ExperienceList from '../../commons/experience-list/containers/experience-list-container';
import { getCategoryProps } from '../../selectors';

/**
 * The component used for the education scene
 * @param educationExperiences
 * @constructor
 */
const EducationContainer = ({educationExperiences}) => (
	<ExperienceList
		experiences={educationExperiences}
	/>
);

EducationContainer.propTypes = {
	educationExperiences: PropTypes.arrayOf(
		PropTypes.object,
	),
};
EducationContainer.defaultProps = {
	educationExperiences: [],
}
export default connect(getCategoryProps)(EducationContainer);

