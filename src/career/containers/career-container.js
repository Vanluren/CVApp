import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import ExperienceList from '../../commons/experience-list/containers/experience-list-container';
import Card from '../../commons/card/containers/card-container';


const CareerContainer = (isLoading) =>{
	if(!isLoading){
		return (
			<ExperienceList>
				<Card
					headerText='Blaaa'
				/>
				<Card
					headerText='Hello World'
				/>
				<Card
					headerText='Hello World'
				/>
			</ExperienceList>
		);
	}
	
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				marginTop: 250,
			}}
		>
			<ActivityIndicator size="large" />
		</View>
	);
};

export default CareerContainer;