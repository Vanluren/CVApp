/**
 * Created by villadsvalur on 06/06/2017.
 */
import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';

const ExperienceDetailText = ({experienceText}) => (
		<View>
			<Text style={styles.experienceText}>
				{experienceText}
			</Text>
		</View>
);

ExperienceDetailText.propTypes = {
	experienceText: PropTypes.string.isRequired,
};
const styles = {
	experienceText: {
		fontSize: 18,
	}
};

export default ExperienceDetailText;