/* eslint-disable react/require-default-props */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ExperienceList from '../../commons/experience-list/containers/experience-list-container';
import { getCategoryProps } from '../../selectors';

/**
 * The component used for the career scene
 * @param careerExperiences
 * @constructor
 */
const CareerContainer = ({careerExperiences}) => (
	<ExperienceList
		experiences={careerExperiences}
	/>
);

CareerContainer.propTypes = {
	careerExperiences: PropTypes.arrayOf(
		PropTypes.object,
	),
};

CareerContainer.defaultProp = {
	careerExperiences: [{},{}],
};

export default connect(getCategoryProps)(CareerContainer);

