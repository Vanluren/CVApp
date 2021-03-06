import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import { Text } from 'react-native';
import HobbiesContainer from './main-view/containers/hobbies-container';
import EducationContainer from './main-view/containers/education-container';
import CareerContainer from './main-view/containers/career-container';
import ExperienceDetails from './commons/experience-details/containers/experience-details-container';

/**
 * The function that returns the title of the tab in the tab bar.
 * If the selected prop is a truthy, set the color to red, else set it to black
 * @param selected
 * @param title
 * @constructor
 */
const TabIcon = ({ selected, title }) => (
		<Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
	);

/**
 * Creates the scenes object used in the RouterComponent, scenes
 * are provided by the React-native-router-flux library
 * @type {Object}
 */
const scenes = Actions.create(
	<Scene
		key='root'
		navigationBarStyle={{ backgroundColor: '#FFFFFF' }}
	>
		<Scene
			key='tabbar'
			tabs
			tabBarStyle={{
				backgroundColor: '#FFFFFF',
				top:300,
				height: 44,
				shadowColor: '#000000',
				shadowOpacity: 0.1,
				shadowOffset: {
					height: 5,
				},
			}}
		>
			<Scene
				key="careerTab"
				title="Career"
				initial
				hideNavBar
				icon={TabIcon}
			>
				<Scene
					key="career"
					component={CareerContainer}
					title="Career"
				/>
			</Scene>
			<Scene
				key="educationTab"
				title="Education"
				icon={TabIcon}
				hideNavBar
			>
				<Scene
					key="education"
					component={EducationContainer}
					title="Education"
				/>
			</Scene>
			<Scene
				key="hobbiesTab"
				title="Hobbies"
				icon={TabIcon}
				hideNavBar
			>
				<Scene
					key="hobbies"
					component={HobbiesContainer}
					title="Hobies"
				/>
			</Scene>
		</Scene>
		<Scene
			key="experienceDetail"
		    component={ExperienceDetails}
			title="Experience Details"
			sceneStyle={{ paddingTop: 65 }}
		/>
	</Scene>
);

/**
 * Binds the scenes to the router object, later exported for use in the app
 * @constructor
 */
const RouterComponent = () => <Router scenes={scenes} />;

export default RouterComponent;