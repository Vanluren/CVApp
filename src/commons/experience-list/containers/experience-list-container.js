import React, {PropTypes} from 'react';
import { StyleSheet, ScrollView } from 'react-native';

const ExperienceListContainer = ({children}) => (
	<ScrollView style={styles.containingView}>
		{children}
	</ScrollView>
);

ExperienceListContainer.propTypes = {
	children: PropTypes.arrayOf(
		PropTypes.element,
	).isRequired,
};

const styles = StyleSheet.create({
	containingView: {
		flex: 1,
		marginTop: 270,
	},
});


export default ExperienceListContainer;

