import React from 'react';
import ExperienceList from '../../commons/experience-list/containers/experience-list-container';
import Card from '../../commons/card/containers/card-container';

const CareerContainer = () => (
	<ExperienceList>
		<Card
			headerText='Hello World'
		/>
		<Card
			headerText='Hello World'
		/>
		<Card
			headerText='Hello World'
		/>
	</ExperienceList>
);

export default CareerContainer;