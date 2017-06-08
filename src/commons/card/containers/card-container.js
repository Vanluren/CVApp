/* eslint-disable react/forbid-prop-types */
/**
 * Add card styling to dashboard components
 * Wrap each dashboard component in this component, when adding them to the dashboard
 */
import React, { PropTypes } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import {Actions} from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectExperience } from '../ducks/card.ducks';

/**
 * A card component for use in our main-view
 * @param actions
 * @param experience
 * @param headerText
 * @param experienceText
 * @constructor
 */
const Card = ({actions, experience, headerText, experienceText}) => (
		<TouchableWithoutFeedback
			onPress={
				()=>{
					actions.selectExperience(experience)
					Actions.experienceDetail({title: headerText})
				}
			}
		>
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
	actions: PropTypes.object.isRequired,
	experience: PropTypes.object.isRequired,
	headerText: PropTypes.string.isRequired,
	experienceText: PropTypes.string,
};
Card.defaultProps = {
	experienceText: "",
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

function mapStateToProps(state) {
	return state;
}
function mapDispatchToProps(dispatch) {
	const actionCreators = {
		selectExperience,
	};
	return {
		actions: bindActionCreators(actionCreators, dispatch),
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
