import React, {PropTypes} from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import TopBanner from '../../../top-banner/containers/top-banner-container';

/**
 * Returns the experience list container, takes the children prop which represents
 * the elements given to the container, elswhere in the app
 * @param children
 * @constructor
 */
const ExperienceListContainer = ({children}) => (
	<View style={styles.containingView}>
		<TopBanner/>
		<ScrollView style={{marginTop: 50,}} >
			{children}
		</ScrollView>	
	</View>
);

ExperienceListContainer.propTypes = {
	children: PropTypes.arrayOf(
		PropTypes.element,
	).isRequired,
};

const styles = StyleSheet.create({
	containingView: {
		flex: 1,
	},
});


export default ExperienceListContainer;

