import React from 'react';
import ExperienceList from '../../commons/experience-list/containers/experience-list-container';
import Card from '../../commons/card/containers/card-container'

const CareerContainer = () => (
		<ExperienceList>
			<Card
				headerText='1'
			/>
			<Card
				headerText='2'
			/>
			<Card
				headerText='3'
			/>
		</ExperienceList>
);

export default CareerContainer;

