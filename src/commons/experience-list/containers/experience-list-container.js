/**
 * Returns the experience list container, takes the children prop which represents
 * the elements given to the container, elswhere in the app
 * @param children
 * @constructor
 */
import React, {PropTypes} from 'react';
import { StyleSheet, ScrollView, View, ActivityIndicator } from 'react-native';
import TopBanner from '../../../top-banner/containers/top-banner-container';
import { getMainViewProps } from '../../../selectors';
import { connect } from 'react-redux';

const ExperienceListContainer = ({isLoading, children}) => {
	const checkLoadingState = () => {
		if(!isLoading){
			return(
				<ScrollView style={{marginTop: 50,}} >
					{children}
				</ScrollView>
			);
		}
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<ActivityIndicator size="large" />
			</View>
		);
	}
	
	return (
		<View style={styles.containingView}>
			<TopBanner/>
			{checkLoadingState()}
		</View>
	);
}

ExperienceListContainer.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	children: PropTypes.arrayOf(
		PropTypes.element,
	).isRequired,
};

const styles = StyleSheet.create({
	containingView: {
		flex: 1,
	},
});


export default connect(getMainViewProps)(ExperienceListContainer);

