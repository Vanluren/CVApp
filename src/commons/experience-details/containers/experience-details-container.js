/* eslint-disable react/forbid-prop-types */
/**
 * Created by villadsvalur on 06/06/2017.
 */
import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import ExperienceDetailsImage from '../components/experience-details-image';

const ExperienceDetailsContainer = (props) => (
		<View style={styles.containingViewStyles}>
			<ExperienceDetailsImage
				imgUrl={props.experience.image}
			/>
			<View>
				<Text style={styles.yearsTextStyling}>
					Tid: {props.experience.years}
				</Text>
			</View>
			<View>
				<Text style={styles.textContentStyle}>
					{props.experience.description}
				</Text>
			</View>
		</View>
);

ExperienceDetailsContainer.propTypes = {
	image: PropTypes.string.isRequired,
	experience: PropTypes.object.isRequired,
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
}
function mapStateToProps(state) {
	const experience = state.currentlySelectedExperience;
	return { experience };
}
export default connect(mapStateToProps)(ExperienceDetailsContainer);