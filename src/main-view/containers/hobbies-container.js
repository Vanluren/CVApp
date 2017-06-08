import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ExperienceList from '../../commons/experience-list/containers/experience-list-container';
import { getCategoryProps } from '../../selectors';

/**
 * the component for the hobby scene
 * @param hobbyExperiences
 * @constructor
 */
const HobbiesContainer = ({hobbyExperiences}) => (
	<ExperienceList
		experiences={hobbyExperiences}
	/>
);


HobbiesContainer.propTypes = {
	hobbyExperiences: PropTypes.arrayOf(
		PropTypes.object,
	),
};

HobbiesContainer.defaultProps = {
	hobbyExperiences: [],
};
export default connect(getCategoryProps)(HobbiesContainer);

