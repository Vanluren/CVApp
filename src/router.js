import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import { Text } from 'react-native';
import Career from './career/containers/career-container';
import Hobbies from './hobbies/containers/hobbies-container';
import Education from './eductation/containers/education-container';
import ExperienceDetails from './commons/experience-details/containers/experience-details-container';

const TabIcon = ({ selected, title }) => (
		<Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
	);

const scenes = Actions.create(
	<Scene
		key='root'
		navigationBarStyle={{ backgroundColor: 'grey' }}
	>
		<Scene
			key='tabbar'
			tabs
			tabBarStyle={{ backgroundColor: '#FFFFFF', top: 200, }}
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
					component={Career}
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
					component={Education}
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
					component={Hobbies}
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

const RouterComponent = () => <Router scenes={scenes} />;

export default RouterComponent;