/**
 * Add card styling to dashboard components
 * Wrap each dashboard component in this component, when adding them to the dashboard
 */
import React, { PropTypes } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import ElevatedView from 'react-native-elevated-view';

const Card = ({ headerText, experienceText }) => (
		<TouchableWithoutFeedback>
			<ElevatedView
				elevation={2}
				style={styles.cardStyles}
			>
				<Text style={styles.headerText}>{headerText}</Text>
				<Text
					style={styles.cardTextStyles}
				>
					{experienceText}
				</Text>
			</ElevatedView>
		</TouchableWithoutFeedback>
	);

Card.propTypes = {
	headerText: PropTypes.string.isRequired,
	experienceText: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
	cardStyles: {
		margin: 4,
		backgroundColor: '#FFF',
		flex: 1,
		width: '97%',
	},
	headerText: {
		marginLeft: 10,
		marginTop: 20,
		fontSize: 25,
		fontWeight: '500',
	},
	cardTextStyles: {
		marginHorizontal: 10,
		marginVertical: 20,
		fontSize: 15,
		fontWeight: '300',
	}
});

export default Card;
