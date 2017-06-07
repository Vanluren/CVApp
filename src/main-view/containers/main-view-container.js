import React, { Component, PropTypes } from 'react';
import ExperienceList from '../../commons/experience-list/containers/experience-list-container';
import Card from '../../commons/card/containers/card-container';

class MainViewContainer extends Component {

	state = {};
	
	render(){
		return (
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
	}

}

MainViewContainer.propTypes = {};
const styles = {};

export default MainViewContainer;