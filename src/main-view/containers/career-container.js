import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ExperienceList from '../../commons/experience-list/containers/experience-list-container';
import { getCategoryProps } from '../../selectors';


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
	careerExperiences: [],
}

export default connect(getCategoryProps)(CareerContainer);

