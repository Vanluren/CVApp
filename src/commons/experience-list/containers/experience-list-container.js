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



const ExperienceListContainer = ({isLoading, experiences}) => {
	const checkLoadingState = () => {
		if(!isLoading){
			return renderCards(experiences);
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

function renderCards(fetchedExperiences) {
	const cardsInList = _.map(fetchedExperiences, experience => (
		<Card
			key={experience.name}
			headerText={experience.name}
		    experience={experience}
		/>
	));
	
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

