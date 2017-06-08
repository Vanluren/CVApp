/**
 * Returns the experience list container, takes the children prop which represents
 * the elements given to the container, elswhere in the app
 * @param children
 * @constructor
 */
import React, {PropTypes} from 'react';
import  _ from 'lodash';
import { StyleSheet, ScrollView, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import TopBanner from '../../../top-banner/containers/top-banner-container';
import { getCategoryProps } from '../../../selectors';
import Card from '../../card/containers/card-container';

/**
 * The list container for all of the cards in the category views
 * takes the isLoading prod to check if the loading spinner should be shown
 * passes on the experience object to child components
 * @param isLoading
 * @param experiences
 * @returns {XML}
 * @constructor
 */
const ExperienceListContainer = ({isLoading, experiences}) => {
	const checkLoadingState = () => {
		if(!isLoading){
			//if is loading isn't a truthy, execute the method that renders the card list
			return renderCards(experiences);
		}
		//else it should show the loading spinner
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

/**
 * This method takes an array of experiences, and renders the list containing the individual experience
 * cards.
 * @param fetchedExperiences
 */
function renderCards(fetchedExperiences) {
	//each card is passed each individual experience object for use in the card container
	const cardsInList = _.map(fetchedExperiences, experience => (
		<Card
			key={experience.name}
			headerText={experience.name}
		    experience={experience}
		/>
	));
	
	//Retruns a scrollview containing the list, for use in the components final render method
	return(
		<ScrollView
			style={{marginTop: 50,}}
			overScrollMode="auto"
			showsVerticalScrollIndicator={false}
		>
			{cardsInList}
		</ScrollView>
	);
};

ExperienceListContainer.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	experiences: PropTypes.arrayOf(
		PropTypes.object,
	),
};
ExperienceListContainer.defaultProps = {
	experiences: [],
}

const styles = StyleSheet.create({
	containingView: {
		flex: 1,
	},
});


export default connect(getCategoryProps)(ExperienceListContainer);

