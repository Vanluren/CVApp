/**
 * Created by villadsvalur on 05/06/2017.
 */
import React from 'react';
import Card from './commons/card/containers/card-container';
import ExperienceList from './commons/experience-list/containers/experience-list-container';

const App = ()  => (
	<ExperienceList>
		<Card
			headerText='Experience'
		    experienceText='Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene overlevet fem århundreder, men har også vundet indpas i elektronisk typografi uden væsentlige ændringer.'
		/>
	</ExperienceList>
);

export default App;