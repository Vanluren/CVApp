/* eslint-disable react/forbid-prop-types */
/**
 * Created by villadsvalur on 06/06/2017.
 */
import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import ExperienceDetailsImage from '../components/experience-details-image';

/**
 * The containing view for the entire experience detail view, passes on the props
 * from the state, to the child components and the JSX tags
 * @param experience
 * @constructor
 */
const ExperienceDetailsContainer = ({experience}) => (
		<View style={styles.containingViewStyles}>
			<ExperienceDetailsImage
				imgUrl={experience.image}
			/>
			<View>
				<Text style={styles.yearsTextStyling}>
					Tid: {experience.years}
				</Text>
			</View>
			<View>
				<Text style={styles.textContentStyle}>
					{experience.description}
				</Text>
			</View>
		</View>
);

ExperienceDetailsContainer.propTypes = {
	experience: PropTypes.object,
};

ExperienceDetailsContainer.defaultProps = {
	experience: {}
};

const styles = {
	containingViewStyles: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	imageStyle: {
		height: 200,
		width: null,
	},
	textContentStyle: {
		fontSize: 16,
		marginVertical: 20,
		marginHorizontal: 20,
	},
	yearsTextStyling: {
		fontSize: 14,
		marginTop: 20,
		fontWeight: '500',
	}
};

function mapStateToProps(state) {
	const experience = state.currentlySelectedExperience;
	return { experience };
}
export default connect(mapStateToProps)(ExperienceDetailsContainer);